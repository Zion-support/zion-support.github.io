#!/usr/bin/env node

/**
 * Security Scanner Automation Script
 * Scans for security vulnerabilities and issues
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityScanner {
  constructor() {
    this.logFile = './logs/pm2/security-scanner.log';
    this.errorFile = './logs/pm2/security-scanner-error.log';
    this.securityReport = './logs/security-report.json';
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
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
      if (level === 'ERROR') {
        fs.appendFileSync(this.errorFile, logMessage);
      }
    } catch (err) {
      console.error('Failed to write to log file:', err.message);
    }
  }

  async runSecurityScan() {
    try {
      this.log('Starting security scan...');
      
      // Scan dependencies for vulnerabilities
      const dependencyVulns = await this.scanDependencies();
      
      // Scan for sensitive files
      const sensitiveFiles = await this.scanSensitiveFiles();
      
      // Check for hardcoded secrets
      const secrets = await this.scanForSecrets();
      
      // Generate security report
      const securityReport = {
        timestamp: new Date().toISOString(),
        dependencies: dependencyVulns,
        sensitiveFiles: sensitiveFiles,
        secrets: secrets,
        overall: this.calculateSecurityScore(dependencyVulns, sensitiveFiles, secrets)
      };
      
      // Save security report
      fs.writeFileSync(this.securityReport, JSON.stringify(securityReport, null, 2));
      
      this.log('Security scan completed');
      
      return securityReport;
      
    } catch (error) {
      this.log(`Security scan failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async scanDependencies() {
    try {
      this.log('Scanning dependencies for vulnerabilities...');
      
      // Run npm audit
      const auditResult = execSync('npm audit --json', { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const audit = JSON.parse(auditResult.toString());
      
      return {
        vulnerabilities: audit.vulnerabilities || 0,
        dependencies: audit.dependencies || 0,
        critical: audit.metadata?.vulnerabilities?.critical || 0,
        high: audit.metadata?.vulnerabilities?.high || 0,
        moderate: audit.metadata?.vulnerabilities?.moderate || 0,
        low: audit.metadata?.vulnerabilities?.low || 0
      };
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async scanSensitiveFiles() {
    try {
      this.log('Scanning for sensitive files...');
      
      const sensitivePatterns = [
        '*.key',
        '*.pem',
        '*.p12',
        '*.pfx',
        '*.p8',
        '*.env.local',
        '*.env.production',
        '*.env.staging',
        'id_rsa',
        'id_dsa',
        'id_ecdsa',
        'id_ed25519',
        'config.json',
        'secrets.json'
      ];
      
      const foundFiles = [];
      
      for (const pattern of sensitivePatterns) {
        try {
          const result = execSync(`find . -name "${pattern}" -type f`, { 
            stdio: 'pipe',
            cwd: process.cwd()
          });
          
          const files = result.toString().trim().split('\n').filter(f => f);
          foundFiles.push(...files);
        } catch (err) {
          // No files found for this pattern
        }
      }
      
      return {
        count: foundFiles.length,
        files: foundFiles,
        status: foundFiles.length === 0 ? 'clean' : 'warning'
      };
    } catch (error) {
      this.log(`Sensitive files scan failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async scanForSecrets() {
    try {
      this.log('Scanning for hardcoded secrets...');
      
      const secretPatterns = [
        'password\\s*=\\s*["\'][^"\']+["\']',
        'api_key\\s*=\\s*["\'][^"\']+["\']',
        'secret\\s*=\\s*["\'][^"\']+["\']',
        'token\\s*=\\s*["\'][^"\']+["\']',
        'private_key\\s*=\\s*["\'][^"\']+["\']',
        'aws_secret',
        'github_token',
        'slack_token',
        'jwt_secret'
      ];
      
      const foundSecrets = [];
      
      for (const pattern of secretPatterns) {
        try {
          const result = execSync(`grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next`, { 
            stdio: 'pipe',
            cwd: process.cwd()
          });
          
          const matches = result.toString().trim().split('\n').filter(m => m);
          foundSecrets.push(...matches);
        } catch (err) {
          // No matches found for this pattern
        }
      }
      
      return {
        count: foundSecrets.length,
        matches: foundSecrets,
        status: foundSecrets.length === 0 ? 'clean' : 'warning'
      };
    } catch (error) {
      this.log(`Secrets scan failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  calculateSecurityScore(dependencyVulns, sensitiveFiles, secrets) {
    let score = 100;
    let issues = [];
    
    // Check dependency vulnerabilities
    if (dependencyVulns.critical > 0) {
      score -= 50;
      issues.push(`${dependencyVulns.critical} critical vulnerabilities found`);
    }
    
    if (dependencyVulns.high > 0) {
      score -= 30;
      issues.push(`${dependencyVulns.high} high severity vulnerabilities found`);
    }
    
    if (dependencyVulns.moderate > 0) {
      score -= 15;
      issues.push(`${dependencyVulns.moderate} moderate vulnerabilities found`);
    }
    
    // Check sensitive files
    if (sensitiveFiles.count > 0) {
      score -= 20;
      issues.push(`${sensitiveFiles.count} sensitive files found`);
    }
    
    // Check secrets
    if (secrets.count > 0) {
      score -= 30;
      issues.push(`${secrets.count} potential secrets found`);
    }
    
    let status = 'secure';
    if (score < 50) {
      status = 'critical';
    } else if (score < 80) {
      status = 'warning';
    }
    
    return {
      score: Math.max(0, score),
      status,
      issues
    };
  }
}

// Run security scan
async function main() {
  const scanner = new SecurityScanner();
  
  try {
    await scanner.runSecurityScan();
    process.exit(0);
  } catch (error) {
    scanner.log(`Security scan failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SecurityScanner;