#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SecurityScanner {;
  constructor() {;
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log');
  };
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    // Ensure log directory exists;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { recursive: true });
    };
    fs.appendFileSync(this.logFile, logMessage);
  };
  async scanDependencies() {;
    if (!this.scanDependencies) return;
    try {;
      this.log('Scanning dependencies for vulnerabilities...');
      // Check if npm audit is available;
      try {;
        const auditOutput = execSync('npm audit --json', {;
          encoding: 'utf8';
          stdio: 'pipe';
          cwd: process.cwd();});
        const auditData = JSON.parse(auditOutput);
        const vulnerabilities = auditData.vulnerabilities || {};
        const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
        const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
        this.log(`Found ${criticalCount} critical and ${highCount} high severity vulnerabilities`);
        if (criticalCount > 0 && this.alertOnCritical) {
          this.log('ALERT: Critical vulnerabilities detected!');
        }
      } catch (error) {
        this.log(`Dependency scan error: ${error.message}`);
      }
    } catch (error) {
      this.log(`Dependency scanning failed: ${error.message}`);
    }
  }
  async scanCode() {
    if (!this.scanCode) return;
    try {
      this.log('Scanning code for security issues...');
      // Check for common security issues in code
      const securityPatterns = [
        { pattern: /password\s*=\s*['"][^'"]*['"]/gi, message: 'Hardcoded password detected' }
        { pattern: /api[_-]?key\s*=\s*['"][^'"]*['"]/gi, message: 'Hardcoded API key detected' }
        { pattern: /secret\s*=\s*['"][^'"]*['"]/gi, message: 'Hardcoded secret detected' }
        { pattern: /eval\s*\(/gi, message: 'eval() usage detected' }
        { pattern: /innerHTML\s*=/gi, message: 'innerHTML usage detected (potential XSS)' }
        { pattern: /document\.write/gi, message: 'document.write usage detected' }
      ];
      const filesToScan = this.getFilesToScan(['.js.jsx.ts.tsx']);
      let issuesFound = 0;
      for (const file of filesToScan) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const { pattern, message } of securityPatterns) {
            const matches = content.match(pattern);
            if (matches) {
              this.log(`SECURITY ISSUE in ${file}: ${message}`);
              issuesFound += matches.length;
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      this.log(`Code scan completed. Found ${issuesFound} potential security issues`);
    } catch (error) {
      this.log(`Code scanning failed: ${error.message}`);
    }
  }
  async scanConfigs() {
    if (!this.scanConfigs) return;
    try {
      this.log('Scanning configuration files...');
      const configFiles = [
        'package.jsonnext.config.jsnext.config.mjs.env.env.local.env.productionecosystem.config.jsnginx.conf'
      ];
      for (const configFile of configFiles) {
        if (fs.existsSync(configFile)) {
          this.log(`Scanning ${configFile}...`);
          try {
            const content = fs.readFileSync(configFile, 'utf8');
            // Check for sensitive information
            const sensitivePatterns = [
              { pattern: /password\s*[:=]\s*['"][^'"]*['"]/gi, message: 'Password in config' }
              { pattern: /secret\s*[:=]\s*['"][^'"]*['"]/gi, message: 'Secret in config' }
              { pattern: /key\s*[:=]\s*['"][^'"]*['"]/gi, message: 'Key in config' }
              { pattern: /token\s*[:=]\s*['"][^'"]*['"]/gi, message: 'Token in config' }
            ];
            for (const { pattern, message } of sensitivePatterns) {
              const matches = content.match(pattern);
              if (matches) {
                this.log(`CONFIG SECURITY ISSUE in ${configFile}: ${message}`);
              }
            }
          } catch (error) {
            this.log(`Error scanning ${configFile}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      this.log(`Config scanning failed: ${error.message}`);
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
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (!['node_modules.git.nextdistbuild'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    scanDirectory(process.cwd());
    return files;
  }
  async start() {
    this.log('Security scanner service started');
    // Run scans immediately
    await this.scanDependencies();
    await this.scanCode();
    await this.scanConfigs();
    // Set up interval for periodic scans
    setInterval(async () => {
      await this.scanDependencies();
      await this.scanCode();
      await this.scanConfigs();
    }, 12 * 60 * 60 * 1000); // Every 12 hours
  }
}
// Start the service
const securityScanner = new SecurityScanner();
securityScanner.start().catch(console.error);