#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.auditResults = [];
  }

  async runSecurityAudit() {
    console.log('🔒 Running security audit...');
    
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        console.log(`⚠️ Found ${vulnCount} vulnerabilities`);
        this.auditResults.push(`${vulnCount} vulnerabilities found`);
      } else {
        console.log('✅ No vulnerabilities found');
        this.auditResults.push('No vulnerabilities found');
      }
    } catch (error) {
      console.log('❌ Security audit failed:', error.message);
      this.auditResults.push('Security audit failed');
    }
  }

  checkEnvironmentVariables() {
    console.log('🔐 Checking environment variables...');
    
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      
      // Check for common security issues
      const issues = [];
      if (envContent.includes('password') && !envContent.includes('PASSWORD=')) {
        issues.push('Potential password exposure');
      }
      if (envContent.includes('secret') && !envContent.includes('SECRET=')) {
        issues.push('Potential secret exposure');
      }
      
      if (issues.length > 0) {
        console.log('⚠️ Environment variable issues found:', issues);
        this.auditResults.push(...issues);
      } else {
        console.log('✅ Environment variables look secure');
        this.auditResults.push('Environment variables secure');
      }
    } else {
      console.log('ℹ️ No .env.local file found');
      this.auditResults.push('No environment file found');
    }
  }

  checkDependencies() {
    console.log('📦 Checking dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages
      const vulnerablePackages = [];
      const knownVulnerable = ['lodash', 'moment', 'jquery'];
      
      for (const pkg of knownVulnerable) {
        if (dependencies[pkg]) {
          vulnerablePackages.push(pkg);
        }
      }
      
      if (vulnerablePackages.length > 0) {
        console.log('⚠️ Potentially vulnerable packages found:', vulnerablePackages);
        this.auditResults.push(`Vulnerable packages: ${vulnerablePackages.join(', ')}`);
      } else {
        console.log('✅ Dependencies look secure');
        this.auditResults.push('Dependencies secure');
      }
    } catch (error) {
      console.log('❌ Dependency check failed:', error.message);
      this.auditResults.push('Dependency check failed');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      auditResults: this.auditResults,
      total: this.auditResults.length,
      recommendations: [
        'Keep dependencies updated',
        'Use environment variables for secrets',
        'Enable HTTPS in production',
        'Implement proper authentication',
        'Regular security audits'
      ]
    };

    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Security audit report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    console.log('🛡️ Starting security audit...');
    
    await this.runSecurityAudit();
    this.checkEnvironmentVariables();
    this.checkDependencies();
    
    const report = this.generateReport();
    
    console.log('✅ Security audit completed!');
    console.log(`📊 Total checks: ${report.total}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;