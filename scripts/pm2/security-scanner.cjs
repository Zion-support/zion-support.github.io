#!/usr/bin/env node

/**
 * PM2 Security Scanner Script
 * Scans for security vulnerabilities and issues
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class SecurityScanner {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = `logs/pm2/security-scanner.log`;
    this.errorFile = `logs/pm2/security-scanner-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async scanDependencies() {
    this.log('Scanning dependencies for security vulnerabilities...');
    
    try {
      // Run npm audit
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        const critical = Object.values(auditData.vulnerabilities).filter(v => v.severity === 'critical').length;
        const high = Object.values(auditData.vulnerabilities).filter(v => v.severity === 'high').length;
        const moderate = Object.values(auditData.vulnerabilities).filter(v => v.severity === 'moderate').length;
        const low = Object.values(auditData.vulnerabilities).filter(v => v.severity === 'low').length;
        
        this.log(`Security scan results: Critical: ${critical}, High: ${high}, Moderate: ${moderate}, Low: ${low}`);
        
        if (critical > 0 && this.alertOnCritical) {
          this.log(`CRITICAL: ${critical} critical vulnerabilities found!`, 'ERROR');
        }
        
        return {
          success: true,
          vulnerabilities: {
            critical,
            high,
            moderate,
            low,
            total: critical + high + moderate + low
          },
          data: auditData
        };
      }
      
      this.log('No vulnerabilities found in dependencies');
      return { success: true, vulnerabilities: { critical: 0, high: 0, moderate: 0, low: 0, total: 0 } };
      
    } catch (error) {
      this.error(`Dependency scan failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async scanCode() {
    this.log('Scanning code for security issues...');
    
    try {
      // Check for common security issues in code
      const securityIssues = [];
      
      // Check for hardcoded secrets
      const secretPatterns = [
        /password\s*=\s*['"][^'"]+['"]/gi,
        /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
        /secret\s*=\s*['"][^'"]+['"]/gi,
        /token\s*=\s*['"][^'"]+['"]/gi
      ];
      
      const filesToScan = this.getFilesToScan(['.js', '.ts', '.jsx', '.tsx', '.json']);
      
      for (const file of filesToScan) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          for (const pattern of secretPatterns) {
            const matches = content.match(pattern);
            if (matches) {
              securityIssues.push({
                file,
                type: 'hardcoded_secret',
                matches: matches.length,
                severity: 'high'
              });
            }
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
      
      this.log(`Code scan completed. Found ${securityIssues.length} potential security issues`);
      
      return {
        success: true,
        issues: securityIssues,
        totalIssues: securityIssues.length
      };
      
    } catch (error) {
      this.error(`Code scan failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async scanConfigs() {
    this.log('Scanning configuration files for security issues...');
    
    try {
      const configIssues = [];
      const configFiles = [
        'package.json',
        'next.config.js',
        'tsconfig.json',
        'eslint.config.js',
        '.env',
        '.env.local',
        'ecosystem.config.js'
      ];
      
      for (const configFile of configFiles) {
        if (fs.existsSync(configFile)) {
          try {
            const content = fs.readFileSync(configFile, 'utf8');
            
            // Check for insecure configurations
            if (content.includes('NODE_ENV=development') && configFile.includes('ecosystem')) {
              configIssues.push({
                file: configFile,
                type: 'development_in_production',
                severity: 'medium',
                message: 'Development environment detected in production config'
              });
            }
            
            if (content.includes('debug: true') || content.includes('debug:true')) {
              configIssues.push({
                file: configFile,
                type: 'debug_enabled',
                severity: 'low',
                message: 'Debug mode enabled'
              });
            }
            
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
      
      this.log(`Config scan completed. Found ${configIssues.length} configuration issues`);
      
      return {
        success: true,
        issues: configIssues,
        totalIssues: configIssues.length
      };
      
    } catch (error) {
      this.error(`Config scan failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  getFilesToScan(extensions) {
    const files = [];
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory('.');
    return files;
  }

  async generateSecurityReport() {
    this.log('Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      scans: {},
      summary: {}
    };
    
    try {
      // Run all scans
      if (this.scanDependencies) {
        report.scans.dependencies = await this.scanDependencies();
      }
      
      if (this.scanCode) {
        report.scans.code = await this.scanCode();
      }
      
      if (this.scanConfigs) {
        report.scans.configs = await this.scanConfigs();
      }
      
      // Generate summary
      const totalIssues = Object.values(report.scans).reduce((sum, scan) => {
        return sum + (scan.totalIssues || 0);
      }, 0);
      
      const criticalVulns = report.scans.dependencies?.vulnerabilities?.critical || 0;
      
      report.summary = {
        totalIssues,
        criticalVulnerabilities: criticalVulns,
        overallStatus: criticalVulns > 0 ? 'CRITICAL' : totalIssues > 0 ? 'WARNING' : 'CLEAN'
      };
      
      // Save report
      const reportFile = `reports/security-scan-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Security report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate security report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Security scanner service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial scan
    await this.generateSecurityReport();
    
    // Set up periodic scanning
    setInterval(async () => {
      this.log('Running scheduled security scan...');
      await this.generateSecurityReport();
    }, 12 * 60 * 60 * 1000); // Every 12 hours
    
    this.log('Security scanner service is running');
  }
}

// Start the service
if (require.main === module) {
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(error => {
    console.error('Security scanner failed to start:', error);
    process.exit(1);
  });
}

export default SecurityScanner;