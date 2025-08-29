#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAudit {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/security-audit.log');
    this.ensureLogDirectory();
    this.vulnerabilities = [];
    this.securityIssues = [];
    this.metrics = {};
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async runNpmAudit() {
    this.log('🔒 Running npm security audit...');
    
    try {
      // Run audit with JSON output
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      
      if (auditResult.trim()) {
        const audit = JSON.parse(auditResult);
        
        // Extract vulnerability information
        const vulns = audit.vulnerabilities || {};
        const vulnerabilityCount = audit.metadata?.vulnerabilities?.total || 0;
        
        this.metrics.npmAudit = {
          total: vulnerabilityCount,
          critical: audit.metadata?.vulnerabilities?.critical || 0,
          high: audit.metadata?.vulnerabilities?.high || 0,
          moderate: audit.metadata?.vulnerabilities?.moderate || 0,
          low: audit.metadata?.vulnerabilities?.low || 0,
          info: audit.metadata?.vulnerabilities?.info || 0
        };
        
        this.log(`🔒 NPM Audit results:`);
        this.log(`  - Total vulnerabilities: ${vulnerabilityCount}`);
        this.log(`  - Critical: ${this.metrics.npmAudit.critical}`);
        this.log(`  - High: ${this.metrics.npmAudit.high}`);
        this.log(`  - Moderate: ${this.metrics.npmAudit.moderate}`);
        this.log(`  - Low: ${this.metrics.npmAudit.low}`);
        this.log(`  - Info: ${this.metrics.npmAudit.info}`);
        
        // Collect vulnerability details
        for (const [packageName, vuln] of Object.entries(vulns)) {
          this.vulnerabilities.push({
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via
          });
        }
        
        if (vulnerabilityCount > 0) {
          this.securityIssues.push(`NPM: ${vulnerabilityCount} vulnerabilities found`);
        }
      }
      
      return true;
    } catch (error) {
      this.log(`❌ NPM audit failed: ${error.message}`);
      this.metrics.npmAudit = { error: error.message };
      this.securityIssues.push('NPM: Audit failed');
      return false;
    }
  }

  async runSnykSecurityScan() {
    this.log('🔒 Running Snyk security scan...');
    
    try {
      // Check if Snyk is installed
      try {
        execSync('snyk --version', { stdio: 'ignore' });
      } catch (error) {
        this.log('📦 Installing Snyk...');
        await this.runCommand('npm install -g snyk', 'Install Snyk');
      }
      
      // Run Snyk test
      const snykResult = await this.runCommand('snyk test --json', 'Snyk security test');
      
      if (snykResult) {
        try {
          // Parse Snyk results
          const snyk = JSON.parse(snykResult);
          
          this.metrics.snyk = {
            vulnerabilities: snyk.vulnerabilities?.length || 0,
            summary: snyk.summary || {},
            issues: snyk.issues || []
          };
          
          this.log(`🔒 Snyk scan results:`);
          this.log(`  - Vulnerabilities: ${this.metrics.snyk.vulnerabilities}`);
          
          if (this.metrics.snyk.vulnerabilities > 0) {
            this.securityIssues.push(`Snyk: ${this.metrics.snyk.vulnerabilities} vulnerabilities found`);
          }
          
        } catch (parseError) {
          this.log('⚠️ Could not parse Snyk results');
          this.metrics.snyk = { error: 'Parse error' };
        }
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Snyk scan failed: ${error.message}`);
      this.metrics.snyk = { error: error.message };
      this.securityIssues.push('Snyk: Scan failed');
      return false;
    }
  }

  async checkForSecrets() {
    this.log('🔍 Checking for secrets in code...');
    
    try {
      // Check for common secret patterns
      const secretPatterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
        /password\s*[:=]\s*['"][^'"]+['"]/gi,
        /secret\s*[:=]\s*['"][^'"]+['"]/gi,
        /token\s*[:=]\s*['"][^'"]+['"]/gi,
        /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
        /aws[_-]?access[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
        /aws[_-]?secret[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi
      ];
      
      const srcPath = path.join(__dirname, '../../src');
      const configPath = path.join(__dirname, '../../');
      
      let secretCount = 0;
      const foundSecrets = [];
      
      // Check source files
      if (fs.existsSync(srcPath)) {
        const files = this.findFiles(srcPath, ['.js', '.ts', '.tsx', '.jsx']);
        
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            for (const pattern of secretPatterns) {
              const matches = content.match(pattern);
              if (matches) {
                secretCount += matches.length;
                foundSecrets.push({
                  file: path.relative(configPath, file),
                  pattern: pattern.source,
                  matches: matches.length
                });
              }
            }
          } catch (error) {
            // Skip files we can't read
          }
        }
      }
      
      // Check config files
      const configFiles = [
        '.env',
        '.env.local',
        '.env.production',
        'config.js',
        'config.ts',
        'secrets.js',
        'secrets.ts'
      ];
      
      for (const configFile of configFiles) {
        const configFilePath = path.join(configPath, configFile);
        if (fs.existsSync(configFilePath)) {
          try {
            const content = fs.readFileSync(configFilePath, 'utf8');
            
            for (const pattern of secretPatterns) {
              const matches = content.match(pattern);
              if (matches) {
                secretCount += matches.length;
                foundSecrets.push({
                  file: configFile,
                  pattern: pattern.source,
                  matches: matches.length
                });
              }
            }
          } catch (error) {
            // Skip files we can't read
          }
        }
      }
      
      this.metrics.secrets = {
        count: secretCount,
        files: foundSecrets
      };
      
      this.log(`🔍 Secret check results:`);
      this.log(`  - Potential secrets found: ${secretCount}`);
      
      if (secretCount > 0) {
        this.log('⚠️ Potential secrets detected:');
        for (const secret of foundSecrets) {
          this.log(`  - ${secret.file}: ${secret.matches} matches`);
        }
        this.securityIssues.push(`Secrets: ${secretCount} potential secrets found`);
      }
      
    } catch (error) {
      this.log(`❌ Secret check failed: ${error.message}`);
      this.metrics.secrets = { error: error.message };
    }
  }

  async checkDependencyVulnerabilities() {
    this.log('🔍 Checking for known dependency vulnerabilities...');
    
    try {
      // Check for outdated packages with known vulnerabilities
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      
      if (outdatedResult.trim()) {
        const outdated = JSON.parse(outdatedResult);
        const outdatedCount = Object.keys(outdated).length;
        
        this.metrics.outdated = {
          count: outdatedCount,
          packages: Object.keys(outdated)
        };
        
        this.log(`📦 Outdated packages: ${outdatedCount}`);
        
        if (outdatedCount > 0) {
          this.log('⚠️ Outdated packages detected:');
          for (const [packageName, info] of Object.entries(outdated)) {
            this.log(`  - ${packageName}: ${info.current} → ${info.latest}`);
          }
          this.securityIssues.push(`Dependencies: ${outdatedCount} outdated packages`);
        }
      } else {
        this.metrics.outdated = { count: 0, packages: [] };
        this.log('✅ All packages are up to date');
      }
      
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when there are outdated packages
        this.log('✅ No outdated packages found');
        this.metrics.outdated = { count: 0, packages: [] };
      } else {
        this.log(`❌ Dependency vulnerability check failed: ${error.message}`);
        this.metrics.outdated = { error: error.message };
      }
    }
  }

  async checkCodeSecurity() {
    this.log('🔍 Checking code for security issues...');
    
    try {
      const srcPath = path.join(__dirname, '../../src');
      if (!fs.existsSync(srcPath)) {
        this.log('⚠️ Source directory not found');
        return;
      }
      
      const files = this.findFiles(srcPath, ['.js', '.ts', '.tsx', '.jsx']);
      let securityIssues = 0;
      const foundIssues = [];
      
      // Common security anti-patterns
      const securityPatterns = [
        {
          pattern: /eval\s*\(/g,
          name: 'eval() usage',
          severity: 'high',
          description: 'eval() can execute arbitrary code and is a security risk'
        },
        {
          pattern: /innerHTML\s*=/g,
          name: 'innerHTML assignment',
          severity: 'medium',
          description: 'innerHTML can lead to XSS attacks'
        },
        {
          pattern: /document\.write\s*\(/g,
          name: 'document.write() usage',
          severity: 'medium',
          description: 'document.write() can lead to XSS attacks'
        },
        {
          pattern: /setTimeout\s*\(\s*['"`][^'"`]+['"`]/g,
          name: 'String-based setTimeout',
          severity: 'medium',
          description: 'String-based setTimeout can execute arbitrary code'
        },
        {
          pattern: /setInterval\s*\(\s*['"`][^'"`]+['"`]/g,
          name: 'String-based setInterval',
          severity: 'medium',
          description: 'String-based setInterval can execute arbitrary code'
        }
      ];
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          for (const check of securityPatterns) {
            const matches = content.match(check.pattern);
            if (matches) {
              securityIssues += matches.length;
              foundIssues.push({
                file: path.relative(srcPath, file),
                issue: check.name,
                severity: check.severity,
                description: check.description,
                count: matches.length
              });
            }
          }
        } catch (error) {
          // Skip files we can't read
        }
      }
      
      this.metrics.codeSecurity = {
        issues: securityIssues,
        details: foundIssues
      };
      
      this.log(`🔍 Code security check results:`);
      this.log(`  - Security issues found: ${securityIssues}`);
      
      if (securityIssues > 0) {
        this.log('⚠️ Security issues detected:');
        for (const issue of foundIssues) {
          this.log(`  - ${issue.file}: ${issue.issue} (${issue.severity})`);
        }
        this.securityIssues.push(`Code: ${securityIssues} security issues found`);
      }
      
    } catch (error) {
      this.log(`❌ Code security check failed: ${error.message}`);
      this.metrics.codeSecurity = { error: error.message };
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              scanDirectory(fullPath);
            } else if (extensions.some(ext => item.endsWith(ext))) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files we can't access
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/security-report.md');
      const timestamp = new Date().toISOString();
      
      let report = `# Security Audit Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Security Audit automation.

## Security Metrics
`;

      // NPM Audit metrics
      if (this.metrics.npmAudit) {
        if (this.metrics.npmAudit.error) {
          report += `- **NPM Audit**: Failed - ${this.metrics.npmAudit.error}\n`;
        } else {
          report += `- **NPM Audit**: ${this.metrics.npmAudit.total} vulnerabilities\n`;
          report += `  - Critical: ${this.metrics.npmAudit.critical}\n`;
          report += `  - High: ${this.metrics.npmAudit.high}\n`;
          report += `  - Moderate: ${this.metrics.npmAudit.moderate}\n`;
          report += `  - Low: ${this.metrics.npmAudit.low}\n`;
          report += `  - Info: ${this.metrics.npmAudit.info}\n`;
        }
      }
      
      // Snyk metrics
      if (this.metrics.snyk) {
        if (this.metrics.snyk.error) {
          report += `- **Snyk Scan**: Failed - ${this.metrics.snyk.error}\n`;
        } else {
          report += `- **Snyk Scan**: ${this.metrics.snyk.vulnerabilities} vulnerabilities\n`;
        }
      }
      
      // Secrets metrics
      if (this.metrics.secrets) {
        if (this.metrics.secrets.error) {
          report += `- **Secret Check**: Failed - ${this.metrics.secrets.error}\n`;
        } else {
          report += `- **Secret Check**: ${this.metrics.secrets.count} potential secrets\n`;
        }
      }
      
      // Outdated dependencies
      if (this.metrics.outdated) {
        if (this.metrics.outdated.error) {
          report += `- **Dependencies**: Check failed - ${this.metrics.outdated.error}\n`;
        } else {
          report += `- **Dependencies**: ${this.metrics.outdated.count} outdated packages\n`;
        }
      }
      
      // Code security
      if (this.metrics.codeSecurity) {
        if (this.metrics.codeSecurity.error) {
          report += `- **Code Security**: Check failed - ${this.metrics.codeSecurity.error}\n`;
        } else {
          report += `- **Code Security**: ${this.metrics.codeSecurity.issues} issues found\n`;
        }
      }

      report += `
## Security Issues Found
`;

      if (this.securityIssues.length > 0) {
        for (const issue of this.securityIssues) {
          report += `- ❌ ${issue}\n`;
        }
      } else {
        report += `- ✅ No security issues found\n`;
      }

      // Vulnerability details
      if (this.vulnerabilities.length > 0) {
        report += `
## Vulnerability Details

| Package | Severity | Title |
|---------|----------|-------|
`;
        for (const vuln of this.vulnerabilities.slice(0, 20)) { // Limit to first 20
          report += `| ${vuln.package} | ${vuln.severity} | ${vuln.title || 'N/A'} |\n`;
        }
        
        if (this.vulnerabilities.length > 20) {
          report += `| ... | ... | ... (${this.vulnerabilities.length - 20} more) |\n`;
        }
      }

      report += `
## Recommendations
`;

      if (this.securityIssues.length > 0) {
        report += `1. Address all security issues immediately
2. Update vulnerable dependencies
3. Remove or secure any secrets found in code
4. Fix code security anti-patterns
5. Consider implementing automated security scanning
`;
      } else {
        report += `1. Security posture is excellent
2. Continue monitoring for new vulnerabilities
3. Keep dependencies updated
4. Consider implementing additional security measures
`;
      }

      report += `
## Next Steps
- Run this automation daily
- Review and fix any security issues found
- Monitor for new vulnerabilities
- Update automation scripts as needed

---
Generated by PM2 Security Audit Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
      // Also generate JSON report
      const jsonReportPath = path.join(__dirname, '../../logs/security-report.json');
      const jsonReport = {
        timestamp,
        metrics: this.metrics,
        vulnerabilities: this.vulnerabilities,
        securityIssues: this.securityIssues,
        summary: {
          totalIssues: this.securityIssues.length,
          totalVulnerabilities: this.vulnerabilities.length,
          hasSecurityIssues: this.securityIssues.length > 0
        }
      };
      
      fs.writeFileSync(jsonReportPath, JSON.stringify(jsonReport, null, 2));
      this.log(`📄 JSON report generated: ${jsonReportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Security Audit Process');
    
    try {
      // Run all security checks
      await this.runNpmAudit();
      await this.runSnykSecurityScan();
      await this.checkForSecrets();
      await this.checkDependencyVulnerabilities();
      await this.checkCodeSecurity();
      
      // Generate report
      await this.generateSecurityReport();
      
      // Summary
      this.log(`🎉 Security Audit Process completed`);
      this.log(`📊 Security issues found: ${this.securityIssues.length}`);
      this.log(`📊 Vulnerabilities found: ${this.vulnerabilities.length}`);
      
      if (this.securityIssues.length > 0) {
        this.log('⚠️ Security issues were found. Please review the report immediately.');
        process.exit(1);
      } else {
        this.log('✅ No security issues found!');
      }
      
    } catch (error) {
      this.log(`💥 Security Audit Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const audit = new SecurityAudit();
  audit.run();
}

module.exports = SecurityAudit;