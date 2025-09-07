#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class SecurityAuditor {
  constructor() {
    this.results = {
      vulnerabilities: [],
      recommendations: [],
      fixed: 0
    };
  }

  async runAudit() {
    console.log('🔒 Running Security Audit...');
    
    try {
      // Run npm audit
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        this.results.vulnerabilities = Object.keys(auditData.vulnerabilities);
        console.log(`Found ${this.results.vulnerabilities.length} vulnerabilities`);
      }
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      fs.writeFileSync('security-audit-report.json', JSON.stringify(this.results, null, 2));
      console.log('✅ Security audit completed');
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
    }
  }

  generateRecommendations() {
    this.results.recommendations = [
      'Update all packages to latest versions',
      'Remove unused dependencies',
      'Use npm audit fix to automatically fix vulnerabilities',
      'Consider using npm audit --audit-level moderate for stricter checks',
      'Regularly run security audits in CI/CD pipeline'
    ];
  }
}

const auditor = new SecurityAuditor();
auditor.runAudit().catch(console.error);