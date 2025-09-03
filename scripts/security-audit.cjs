
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'security-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runNpmAudit() {
    console.log('🔍 Running npm audit...');
    try {
      const command = 'npm audit --audit-level=moderate --json > ./security-reports/npm-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ NPM audit completed');
    } catch (error) {
      console.log('❌ NPM audit failed:', error.message);
    }
  }

  async runSnykAudit() {
    console.log('🔍 Running Snyk audit...');
    try {
      const command = 'npx snyk test --json > ./security-reports/snyk-audit.json';
      execSync(command, { stdio: 'inherit' });
      console.log('✅ Snyk audit completed');
    } catch (error) {
      console.log('❌ Snyk audit failed:', error.message);
    }
  }

  async generateSecurityReport() {
    console.log('📊 Generating security report...');
    const report = {
      timestamp: new Date().toISOString(),
      audits: {
        npm: 'npm-audit.json',
        snyk: 'snyk-audit.json'
      },
      recommendations: [
        'Keep dependencies updated',
        'Use security headers',
        'Implement rate limiting',
        'Use HTTPS only',
        'Validate all inputs',
        'Use environment variables for secrets'
      ]
    };
    
    fs.writeFileSync(
      path.join(this.reportsDir, 'security-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('✅ Security report generated');
  }
}

const auditor = new SecurityAuditor();
auditor.runNpmAudit();
auditor.runSnykAudit();
auditor.generateSecurityReport();
