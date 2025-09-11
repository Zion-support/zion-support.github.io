#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Basic security checks
      Object.keys(dependencies).forEach(dep => {
        if (dep.includes('http://')) {
          this.vulnerabilities.push(`Insecure HTTP dependency: ${dep}`);
        }
      });
    } catch (error) {
      this.vulnerabilities.push('Could not read package.json');
    }
  }

  async checkEnvironmentVariables() {
    const envFiles = ['.env', '.env.local', '.env.production'];
    envFiles.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('password') && !content.includes('PASSWORD=')) {
          this.vulnerabilities.push(`Potential hardcoded password in ${file}`);
        }
      }
    });
  }

  generateReport() {
    return {
      vulnerabilities: this.vulnerabilities,
      recommendations: [
        'Use HTTPS for all external requests',
        'Implement proper authentication',
        'Add input validation',
        'Use environment variables for secrets'
      ],
      timestamp: new Date().toISOString()
    };
  }
}

const auditor = new SecurityAuditor();
auditor.checkDependencies();
auditor.checkEnvironmentVariables();
const report = auditor.generateReport();

fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
console.log('Security audit completed');
