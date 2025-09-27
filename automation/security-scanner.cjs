#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.vulnerabilities = [];
    this.securityIssues = [];
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async scanSecurity() {
    this.log('🔒 Starting security scan...');
    
    try {
      // Scan for vulnerabilities
      await this.scanVulnerabilities();
      
      // Scan for security issues in code
      await this.scanCodeSecurity();
      
      // Scan for sensitive data
      await this.scanSensitiveData();
      
      // Generate security report
      await this.generateSecurityReport();
      
      this.log('Security scan completed');
      return {
        vulnerabilities: this.vulnerabilities,
        securityIssues: this.securityIssues
      };
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scanVulnerabilities() {
    try {
      const result = execSync('npm audit --json', { 
        stdio: 'pipe', 
        cwd: process.cwd() 
      });
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.vulnerabilities.push({
            name,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        });
      }
    } catch (error) {
      this.log('Could not scan vulnerabilities', 'WARNING');
    }
  }

  async scanCodeSecurity() {
    const files = this.getSourceFiles();
    const securityPatterns = {
      hardcodedSecrets: /(password|secret|key|token)\s*[:=]\s*['"][^'"]+['"]/gi,
      evalUsage: /eval\s*\(/gi,
      innerHTML: /innerHTML\s*=/gi,
      dangerousFunctions: /(document\.write|setTimeout|setInterval)\s*\(/gi
    };

    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        Object.entries(securityPatterns).forEach(([patternName, pattern]) => {
          const matches = content.match(pattern);
          if (matches) {
            this.securityIssues.push({
              file,
              type: patternName,
              matches: matches.length,
              description: `Potential ${patternName} found`
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  async scanSensitiveData() {
    const sensitivePatterns = {
      apiKeys: /(api[_-]?key|apikey)\s*[:=]\s*['"][^'"]+['"]/gi,
      passwords: /(password|pwd)\s*[:=]\s*['"][^'"]+['"]/gi,
      tokens: /(token|access[_-]?token)\s*[:=]\s*['"][^'"]+['"]/gi
    };

    const files = this.getSourceFiles();
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        Object.entries(sensitivePatterns).forEach(([patternName, pattern]) => {
          const matches = content.match(pattern);
          if (matches) {
            this.securityIssues.push({
              file,
              type: 'sensitive_data',
              pattern: patternName,
              matches: matches.length,
              description: `Potential ${patternName} found - review for sensitive data`
            });
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  getSourceFiles() {
    const files = [];
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    walkDir(process.cwd());
    return files;
  }

  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      securityIssues: this.securityIssues,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalSecurityIssues: this.securityIssues.length,
        criticalIssues: this.vulnerabilities.filter(v => v.severity === 'critical').length
      }
    };

    const reportFile = path.join(__dirname, 'reports', 'security-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Security report generated: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.scanSecurity().catch(console.error);
}

module.exports = SecurityScanner;