#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityScanner {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';

    this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());

    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    };

    fs.appendFileSync(this.logFile, logMessage)
  }

  async scanDependencies() {
    if (!this.scanDependencies) return;

    try {
      this.log('Scanning dependencies for vulnerabilities...');

      // Check if npm audit is available
      try {
        const auditOutput = execSync('npm audit --json', {
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: process.cwd()
        });

        const auditData = JSON.parse(auditOutput);
        const vulnerabilities = auditData.vulnerabilities || {};

        const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
        const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
        const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;

        this.log(`Dependency scan results: ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

        if (criticalCount > 0 && this.alertOnCritical) {
          this.log(`ALERT: ${criticalCount} critical vulnerabilities found!`);
        }

      } catch (error) {
        this.log(`npm audit failed: ${error.message}`);
      }

    } catch (error) {
      this.log(`Dependency scan error: ${error.message}`);
    }
  }

  async scanCode() {
    if (!this.scanCode) return;

    try {
      this.log('Scanning code for security issues...');

      // Check for common security anti-patterns
      const files = this.findCodeFiles();
      let issues = 0;

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.analyzeCodeContent(content, file);
        issues += fileIssues;
      }

      this.log(`Code scan completed: ${issues} potential security issues found`);

    } catch (error) {
      this.log(`Code scan error: ${error.message}`);
    }
  }

  findCodeFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.py', '.php', '.java', '.go'];
    const files = [];

    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!item.startsWith('.') && item !== 'node_modules') {
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };

    scanDir(process.cwd());
    return files;
  }

  analyzeCodeContent(content, filePath) {
    let issues = 0;
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Check for hardcoded secrets
      if (line.match(/password\s*=\s*['"][^'"]+['"]/i)) {
        this.log(`Potential hardcoded password in ${filePath}:${index + 1}`);
        issues++;
      }

      // Check for SQL injection patterns
      if (line.match(/query\s*=\s*['"][^'"]*\+[^'"]*['"]/i)) {
        this.log(`Potential SQL injection in ${filePath}:${index + 1}`);
        issues++;
      }

      // Check for eval usage
      if (line.match(/\beval\s*\(/)) {
        this.log(`eval() usage detected in ${filePath}:${index + 1}`);
        issues++;
      }

      // Check for innerHTML usage
      if (line.match(/\.innerHTML\s*=/)) {
        this.log(`innerHTML usage detected in ${filePath}:${index + 1}`);
        issues++;
      }
    });

    return issues;
  }

  async scanConfigs() {
    if (!this.scanConfigs) return;

    try {
      this.log('Scanning configuration files...');

      const configFiles = [
        'package.json',
        'docker-compose.yml',
        'Dockerfile',
        '.env',
        'nginx.conf',
        'apache.conf'
      ];

      for (const configFile of configFiles) {
        const filePath = path.join(process.cwd(), configFile);
        if (fs.existsSync(filePath)) {
          await this.analyzeConfigFile(filePath);
        }
      }

    } catch (error) {
      this.log(`Config scan error: ${error.message}`);
    }
  }

  async analyzeConfigFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);

      // Check for insecure configurations
      if (fileName === 'package.json') {
        const pkg = JSON.parse(content);
        if (pkg.scripts && pkg.scripts.start && pkg.scripts.start.includes('--insecure')) {
          this.log(`Insecure start script in ${filePath}`);
        }
      }

      if (fileName === 'Dockerfile') {
        if (content.includes('USER root') && !content.includes('USER ')) {
          this.log(`Dockerfile runs as root in ${filePath}`);
        }
      }

    } catch (error) {
      this.log(`Error analyzing ${filePath}: ${error.message}`);
    }
  }

  async runScan() {
    this.log('Starting security scan...');

    await this.scanDependencies();
    await this.scanCode();
    await this.scanConfigs();

    this.log('Security scan completed');
  }

  async start() {
    this.log('Security scanner service started');

    // Run scan immediately
    await this.runScan();

    // Set up interval for periodic scans
    setInterval(async () => {
      await this.runScan();
    }, 24 * 60 * 60 * 1000); // Every 24 hours
  }
}

// Start the service
const scanner = new SecurityScanner();
scanner.start().catch(console.error);