#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting Security Audit...');

class SecurityAudit {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'security-logs.txt');
    this.startTime = new Date();
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scanDependencies() {
    this.log('Scanning dependencies for vulnerabilities...');
    try {
      const result = await this.runCommand('npm audit --json', { silent: true });
      if (result) {
        const auditData = JSON.parse(result);
        
        if (auditData.vulnerabilities) {
          const vulnCount = Object.keys(auditData.vulnerabilities).length;
          this.vulnerabilities.push(`Found ${vulnCount} dependency vulnerabilities`);
          this.recommendations.push('Run npm audit fix to resolve vulnerabilities');
        } else {
          this.log('No dependency vulnerabilities found');
        }
      }
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanSecrets() {
    this.log('Scanning for exposed secrets...');
    try {
      const sensitivePatterns = [
        /password\s*[:=]\s*["'][^"']+["']/gi,
        /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi,
        /secret\s*[:=]\s*["'][^"']+["']/gi,
        /token\s*[:=]\s*["'][^"']+["']/gi,
        /private[_-]?key\s*[:=]\s*["'][^"']+["']/gi
      ];
      
      const files = this.findSourceFiles();
      let secretCount = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of sensitivePatterns) {
            if (pattern.test(content)) {
              this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`);
              secretCount++;
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      if (secretCount === 0) {
        this.log('No exposed secrets found');
      } else {
        this.recommendations.push('Review files for exposed secrets and move them to environment variables');
      }
    } catch (error) {
      this.log(`Secret scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanConfiguration() {
    this.log('Scanning configuration files...');
    try {
      const configFiles = ['package.json', 'vite.config.ts', '.env', '.env.local'];
      
      for (const file of configFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for insecure configurations
            if (content.includes('NODE_ENV=development') && file.includes('.env')) {
              this.recommendations.push(`Review ${file} for production-ready configuration`);
            }
            
            if (content.includes('debug: true') || content.includes('debug:true')) {
              this.recommendations.push(`Remove debug flags from ${file} in production`);
            }
            
            if (content.includes('console.log') && file.includes('.env')) {
              this.recommendations.push(`Remove console.log statements from ${file}`);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      this.log(`Configuration scan failed: ${error.message}`, 'ERROR');
    }
  }

  async checkSecurityHeaders() {
    this.log('Checking security headers...');
    try {
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const indexHtml = path.join(publicDir, 'index.html');
        if (fs.existsSync(indexHtml)) {
          const content = fs.readFileSync(indexHtml, 'utf8');
          
          const securityHeaders = [
            'Content-Security-Policy',
            'X-Frame-Options',
            'X-Content-Type-Options',
            'Referrer-Policy',
            'Permissions-Policy'
          ];
          
          for (const header of securityHeaders) {
            if (!content.includes(header)) {
              this.recommendations.push(`Add ${header} security header to index.html`);
            }
          }
        }
      }
    } catch (error) {
      this.log(`Security headers check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {
    this.log('Checking for outdated dependencies...');
    try {
      const result = await this.runCommand('npm outdated --json', { silent: true });
      if (result) {
        const outdatedData = JSON.parse(result);
        const outdatedCount = Object.keys(outdatedData).length;
        
        if (outdatedCount > 0) {
          this.vulnerabilities.push(`Found ${outdatedCount} outdated dependencies`);
          this.recommendations.push('Run npm update to update outdated dependencies');
        } else {
          this.log('All dependencies are up to date');
        }
      }
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  findSourceFiles() {
    const files = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    scanDirectory(srcDir);
    return files;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalRecommendations: this.recommendations.length,
        securityScore: Math.max(0, 100 - (this.vulnerabilities.length * 10) - (this.recommendations.length * 2))
      }
    };

    const reportPath = path.join(this.projectRoot, 'security-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== SECURITY AUDIT REPORT ===');
    this.log(`Duration: ${report.duration}`);
    this.log(`Vulnerabilities found: ${report.summary.totalVulnerabilities}`);
    this.log(`Recommendations: ${report.summary.totalRecommendations}`);
    this.log(`Security Score: ${report.summary.securityScore}/100`);
    
    if (this.vulnerabilities.length > 0) {
      this.log('\nVulnerabilities:');
      this.vulnerabilities.forEach((vuln, index) => {
        this.log(`  ${index + 1}. ${vuln}`);
      });
    }
    
    if (this.recommendations.length > 0) {
      this.log('\nRecommendations:');
      this.recommendations.forEach((rec, index) => {
        this.log(`  ${index + 1}. ${rec}`);
      });
    }
    
    this.log(`\nFull report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting Security Audit...');
    this.log('==========================');
    
    try {
      // Run all security checks
      await this.scanDependencies();
      await this.scanSecrets();
      await this.scanConfiguration();
      await this.checkSecurityHeaders();
      await this.checkDependencies();
      
      // Generate final report
      await this.generateReport();
      
      this.log('\nSecurity Audit completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }
}

// Run the security audit
const audit = new SecurityAudit();
audit.run().catch(console.error);