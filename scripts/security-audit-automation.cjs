#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'security-audit-automation.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Completed: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      throw error;
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Starting comprehensive security audit...');
    
    try {
      // 1. NPM Audit
      this.log('📦 Running npm audit...');
      await this.runCommand('npm audit --audit-level=moderate', 'NPM Security Audit');
      
      // 2. Check for known vulnerabilities
      this.log('🔍 Checking for known vulnerabilities...');
      await this.runCommand('npm audit --json > security-audit-report.json', 'Generate Security Report');
      
      // 3. Check for exposed secrets
      this.log('🔐 Scanning for exposed secrets...');
      await this.runCommand('grep -r "password\\|secret\\|key\\|token" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.json" . | grep -v node_modules | grep -v ".git"', 'Secret Scanning');
      
      // 4. Check for insecure dependencies
      this.log('📋 Checking dependency security...');
      await this.runCommand('npx audit-ci --config audit-ci.json', 'Dependency Security Check');
      
      // 5. Generate security report
      this.log('📊 Generating security report...');
      const report = {
        timestamp: new Date().toISOString(),
        npmAudit: 'Completed',
        secretScan: 'Completed',
        dependencyCheck: 'Completed',
        recommendations: [
          'Regularly update dependencies',
          'Use environment variables for secrets',
          'Implement proper authentication',
          'Enable HTTPS in production',
          'Use security headers',
          'Implement rate limiting',
          'Regular security audits'
        ]
      };
      
      fs.writeFileSync(
        path.join(this.reportsDir, 'security-audit-report.json'),
        JSON.stringify(report, null, 2)
      );
      
      this.log('✅ Security audit completed successfully');
      
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`);
      throw error;
    }
  }

  async run() {
    try {
      this.log('🔒 Security Audit Automation Started');
      await this.runSecurityAudit();
      this.log('🎉 Security Audit Automation Completed Successfully');
    } catch (error) {
      this.log(`💥 Security Audit Automation Failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the automation
const automation = new SecurityAuditAutomation();
automation.run();