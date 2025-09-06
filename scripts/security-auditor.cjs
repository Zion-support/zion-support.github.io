#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async auditDependencies() {
    try {
      console.log('Auditing dependencies...');
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        this.vulnerabilities = Object.values(auditData.vulnerabilities);
        console.log(`Found ${this.vulnerabilities.length} vulnerabilities`);
      }
    } catch (error) {
      console.error('Error auditing dependencies:', error);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations
    };

    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Security audit report generated: ${reportPath}`);
  }

  async run() {
    console.log('🔒 Starting Security Audit');
    await this.auditDependencies();
    await this.generateReport();
  }
}

if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;