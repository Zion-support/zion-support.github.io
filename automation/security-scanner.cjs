#!/usr/bin/env node
/**
 * Security Scanner
 * Automatically scans for security vulnerabilities
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityScanner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'security-scanner.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 120000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async scanDependencies() {
    this.log('🔍 Scanning dependencies for vulnerabilities...');
    
    const depScan = await this.runCommand(
      'npm audit --audit-level=moderate --json',
      'Dependency vulnerability scan'
    );
    
    if (depScan.success) {
      this.log('✅ Dependency scan completed');
    } else {
      this.log('⚠️ Dependency vulnerabilities found', 'WARN');
    }
  }

  async scanCode() {
    this.log('🔍 Scanning code for security issues...');
    
    const codeScan = await this.runCommand(
      'npm run security:audit',
      'Code security scan'
    );
    
    if (codeScan.success) {
      this.log('✅ Code scan completed');
    } else {
      this.log('⚠️ Code security issues found', 'WARN');
    }
  }

  async checkSecrets() {
    this.log('🔍 Checking for exposed secrets...');
    
    const secretPatterns = [
      'password\\s*=\\s*["\'][^"\']+["\']',
      'api[_-]?key\\s*=\\s*["\'][^"\']+["\']',
      'secret\\s*=\\s*["\'][^"\']+["\']',
      'token\\s*=\\s*["\'][^"\']+["\']'
    ];

    for (const pattern of secretPatterns) {
      const secretCheck = await this.runCommand(
        `grep -r -i "${pattern}" . --exclude-dir=node_modules --exclude-dir=.git || true`,
        `Secret pattern check: ${pattern}`
      );
      
      if (secretCheck.success && secretCheck.output.trim()) {
        this.log(`⚠️ Potential secret found: ${pattern}`, 'WARN');
      }
    }
  }

  async generateSecurityReport() {
    this.log('📊 Generating security report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      scans: {
        dependencies: 'completed',
        code: 'completed',
        secrets: 'completed'
      },
      recommendations: [
        'Regularly update dependencies to latest secure versions',
        'Implement proper secret management using environment variables',
        'Add security headers to Next.js configuration',
        'Enable HTTPS in production',
        'Implement rate limiting for API endpoints',
        'Add input validation and sanitization',
        'Regular security audits and penetration testing'
      ]
    };

    const reportFile = path.join(__dirname, 'logs', 'security-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Security report saved to: ${reportFile}`);
  }

  async scan() {
    this.log('🔒 Starting security scan...');
    
    await this.scanDependencies();
    await this.scanCode();
    await this.checkSecrets();
    await this.generateSecurityReport();
    
    this.log('🎉 Security scan completed!');
  }

  async start() {
    this.log('🚀 Security Scanner started');
    
    // Initial scan
    await this.scan();
    
    // Set up periodic scans every 4 hours
    setInterval(async () => {
      await this.scan();
    }, 4 * 60 * 60 * 1000);

    this.log('🔄 Security Scanner is running. Scans every 4 hours.');
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.start().catch(console.error);
}

module.exports = SecurityScanner;