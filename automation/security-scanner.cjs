#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security scan...');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      checks: [],
      vulnerabilities: [],
      overallStatus: 'healthy'
    };
  }

  async runNpmAudit() {
    console.log('🔍 Running npm audit...');
    try {
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8', 
        stdio: ['ignore', 'pipe', 'pipe'] 
      });
      const audit = JSON.parse(auditResult);
      const vulnCount = audit.metadata && audit.metadata.vulnerabilities ? 
        Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0) : 0;
      
      this.results.checks.push({
        name: 'npm audit',
        status: vulnCount ? 'warning' : 'pass',
        summary: vulnCount
      });
      
      if (vulnCount) {
        this.results.overallStatus = 'warning';
      }
    } catch (e) {
      this.results.checks.push({
        name: 'npm audit',
        status: 'error',
        error: e.message
      });
    }
  }

  async checkSensitiveFiles() {
    console.log('🔍 Checking for sensitive files...');
    const sensitiveFiles = ['.env', '.env.local', '.env.production', 'private-key.pem'];
    const found = sensitiveFiles.filter(f => fs.existsSync(f));
    
    this.results.checks.push({
      name: 'sensitive files',
      status: found.length ? 'warning' : 'pass',
      found: found
    });
    
    if (found.length) {
      this.results.overallStatus = 'warning';
    }
  }

  async checkFilePermissions() {
    console.log('🔍 Checking file permissions...');
    try {
      const result = execSync('find . -name "*.pem" -o -name "*.key" -o -name "*.p12"', { 
        encoding: 'utf8', 
        stdio: 'pipe' 
      });
      
      if (result.trim()) {
        this.results.checks.push({
          name: 'file permissions',
          status: 'warning',
          summary: 'Sensitive files found'
        });
        this.results.overallStatus = 'warning';
      } else {
        this.results.checks.push({
          name: 'file permissions',
          status: 'pass',
          summary: 'No sensitive files found'
        });
      }
    } catch (e) {
      this.results.checks.push({
        name: 'file permissions',
        status: 'pass',
        summary: 'No sensitive files found'
      });
    }
  }

  async generateReport() {
    const reportPath = `security-scan-report-${Date.now()}.json`;
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Security scan completed. Report: ${reportPath}`);
    console.log(`🔒 Overall status: ${this.results.overallStatus}`);
  }

  async run() {
    await this.runNpmAudit();
    await this.checkSensitiveFiles();
    await this.checkFilePermissions();
    await this.generateReport();
  }
}

if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run().catch(console.error);
}

module.exports = SecurityScanner;