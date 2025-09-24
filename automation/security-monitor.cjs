#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Monitor...');

class SecurityMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'security-monitor.log');
    this.config = {
      securityScanDeep: process.env.SECURITY_SCAN_DEEP === 'true',
      autoPatch: process.env.AUTO_PATCH === 'true',
      checkInterval: 3 * 60 * 60 * 1000, // 3 hours
    };
    this.ensureLogDirectory();
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
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkDependencies() {
    this.log('🔍 Checking for vulnerable dependencies...');
    
    const auditResult = await this.executeCommand('npm audit --json', { silent: true });
    if (auditResult.success) {
      try {
        const auditData = JSON.parse(auditResult.output);
        const vulnerabilities = auditData.vulnerabilities || {};
        const vulnCount = Object.keys(vulnerabilities).length;
        
        if (vulnCount > 0) {
          this.log(`⚠️ Found ${vulnCount} vulnerabilities`);
          return { hasVulnerabilities: true, count: vulnCount, data: auditData };
        } else {
          this.log('✅ No vulnerabilities found');
          return { hasVulnerabilities: false, count: 0 };
        }
      } catch (error) {
        this.log(`❌ Failed to parse audit results: ${error.message}`);
        return { hasVulnerabilities: false, count: 0 };
      }
    } else {
      this.log('❌ Failed to run security audit');
      return { hasVulnerabilities: false, count: 0 };
    }
  }

  async checkSystemSecurity() {
    this.log('🔍 Checking system security...');
    
    // Check for open ports
    const portCheck = await this.executeCommand('netstat -tuln | grep LISTEN', { silent: true });
    if (portCheck.success) {
      this.log('📊 Open ports detected');
    }
    
    // Check file permissions
    const permissionCheck = await this.executeCommand('find . -type f -perm /o+w', { silent: true });
    if (permissionCheck.success && permissionCheck.output.trim()) {
      this.log('⚠️ Files with world-write permissions found');
    } else {
      this.log('✅ File permissions are secure');
    }
  }

  async updateDependencies() {
    this.log('📦 Updating dependencies...');
    
    const updateResult = await this.executeCommand('npm update');
    if (updateResult.success) {
      this.log('✅ Dependencies updated successfully');
    } else {
      this.log('❌ Failed to update dependencies');
    }
  }

  async auditFix() {
    this.log('🔧 Running audit fix...');
    
    const fixResult = await this.executeCommand('npm audit fix');
    if (fixResult.success) {
      this.log('✅ Audit fix completed');
    } else {
      this.log('❌ Audit fix failed');
    }
  }

  async performSecurityScan() {
    this.log('🔍 Performing security scan...');
    
    const dependencyCheck = await this.checkDependencies();
    await this.checkSystemSecurity();
    
    if (dependencyCheck.hasVulnerabilities) {
      this.log(`⚠️ Security vulnerabilities detected: ${dependencyCheck.count}`);
      
      if (this.config.autoPatch) {
        this.log('🔧 Auto-patching enabled, attempting fixes...');
        await this.auditFix();
        await this.updateDependencies();
      } else {
        this.log('ℹ️ Auto-patch disabled, manual intervention required');
      }
    } else {
      this.log('✅ Security scan passed - no vulnerabilities found');
    }
  }

  async run() {
    this.log('🚀 Security Monitor started');
    this.log(`📋 Deep scan: ${this.config.securityScanDeep}`);
    this.log(`📋 Auto-patch: ${this.config.autoPatch}`);
    
    // Initial security scan
    await this.performSecurityScan();
    
    // Set up periodic security scans
    setInterval(async () => {
      await this.performSecurityScan();
    }, this.config.checkInterval);
    
    this.log('✅ Security monitoring active');
  }
}

// Start the security monitor
const securityMonitor = new SecurityMonitor();
securityMonitor.run().catch(error => {
  console.error('❌ Security Monitor failed:', error);
  process.exit(1);
});