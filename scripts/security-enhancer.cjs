#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class SecurityEnhancer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.securityChecks = [];
  }

  async log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runSecurityAudit() {
    await this.log('Running security audit...');
    try {
      await execAsync('npm audit --audit-level=moderate', { cwd: this.projectRoot });
      this.securityChecks.push('Security audit completed');
    } catch (error) {
      await this.log(`Security audit found issues: ${error.message}`, 'WARN');
    }
  }

  async fixSecurityIssues() {
    await this.log('Fixing security issues...');
    try {
      await execAsync('npm audit fix --force', { cwd: this.projectRoot });
      this.securityChecks.push('Security issues fixed');
    } catch (error) {
      await this.log(`Security fix failed: ${error.message}`, 'WARN');
    }
  }

  async checkDependencies() {
    await this.log('Checking dependencies for vulnerabilities...');
    try {
      await execAsync('npm outdated', { cwd: this.projectRoot });
      this.securityChecks.push('Dependency check completed');
    } catch (error) {
      await this.log(`Dependency check failed: ${error.message}`, 'WARN');
    }
  }

  async generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      securityChecks: this.securityChecks,
      summary: {
        totalChecks: this.securityChecks.length,
        status: 'completed'
      }
    };

    const reportPath = path.join(this.projectRoot, 'reports', 'security-report.json');
    await fs.mkdir(path.dirname(reportPath), { recursive: true });
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    await this.log(`Security report saved to: ${reportPath}`);
  }

  async run() {
    await this.log('Starting security enhancement...');
    
    await this.runSecurityAudit();
    await this.fixSecurityIssues();
    await this.checkDependencies();
    
    await this.generateSecurityReport();
    await this.log('Security enhancement completed!');
  }
}

if (require.main === module) {
  const enhancer = new SecurityEnhancer();
  enhancer.run().catch(console.error);
}

module.exports = SecurityEnhancer;