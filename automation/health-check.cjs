#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

console.log('🩺 Starting Health Check...');

class HealthChecker {
  constructor() {
    this.healthCheck = {
      timestamp: new Date().toISOString(),
      status: 'unknown',
      checks: {}
    };
  }

  async runAllChecks() {
    try {
      await this.checkDiskSpace();
      await this.checkMemory();
      await this.checkBuild();
      await this.checkLint();
      await this.checkTypeCheck();
      await this.checkSecurity();
      
      this.determineOverallStatus();
      this.saveReport();
      
      return this.healthCheck.status === 'healthy';
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  async checkDiskSpace() {
    try {
      const stats = execSync('df -h .', { encoding: 'utf8' });
      const lines = stats.split('\n');
      const rootLine = lines[1];
      const usage = rootLine.split(/\s+/)[4];
      
      this.healthCheck.checks.disk = {
        status: usage.includes('%') && parseInt(usage) < 90 ? 'ok' : 'warning',
        details: `Disk usage: ${usage}`,
        message: usage.includes('%') && parseInt(usage) < 90 ? 'Disk space is healthy' : 'Disk space is low'
      };
    } catch (error) {
      this.healthCheck.checks.disk = {
        status: 'error',
        message: 'Failed to check disk space'
      };
    }
  }

  async checkMemory() {
    try {
      const mem = execSync('free -h', { encoding: 'utf8' });
      this.healthCheck.checks.memory = {
        status: 'ok',
        details: mem.split('\n')[1],
        message: 'Memory check completed'
      };
    } catch (error) {
      this.healthCheck.checks.memory = {
        status: 'error',
        message: 'Failed to check memory'
      };
    }
  }

  async checkBuild() {
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.healthCheck.checks.build = {
        status: 'ok',
        message: 'Build successful'
      };
    } catch (error) {
      this.healthCheck.checks.build = {
        status: 'error',
        message: 'Build failed'
      };
    }
  }

  async checkLint() {
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.healthCheck.checks.lint = {
        status: 'ok',
        message: 'Linting passed'
      };
    } catch (error) {
      try {
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.healthCheck.checks.lint = {
          status: 'warning',
          message: 'Linting issues were auto-fixed'
        };
      } catch (fixError) {
        this.healthCheck.checks.lint = {
          status: 'error',
          message: 'Linting failed and could not be auto-fixed'
        };
      }
    }
  }

  async checkTypeCheck() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.healthCheck.checks.typeCheck = {
        status: 'ok',
        message: 'Type checking passed'
      };
    } catch (error) {
      this.healthCheck.checks.typeCheck = {
        status: 'error',
        message: 'Type checking failed'
      };
    }
  }

  async checkSecurity() {
    try {
      execSync('npm audit', { stdio: 'pipe' });
      this.healthCheck.checks.security = {
        status: 'ok',
        message: 'No security vulnerabilities found'
      };
    } catch (error) {
      try {
        execSync('npm audit fix --force', { stdio: 'pipe' });
        this.healthCheck.checks.security = {
          status: 'warning',
          message: 'Security vulnerabilities were auto-fixed'
        };
      } catch (fixError) {
        this.healthCheck.checks.security = {
          status: 'error',
          message: 'Security vulnerabilities found and could not be auto-fixed'
        };
      }
    }
  }

  determineOverallStatus() {
    const checks = Object.values(this.healthCheck.checks);
    const hasErrors = checks.some(check => check.status === 'error');
    const hasWarnings = checks.some(check => check.status === 'warning');
    
    if (hasErrors) {
      this.healthCheck.status = 'unhealthy';
    } else if (hasWarnings) {
      this.healthCheck.status = 'warning';
    } else {
      this.healthCheck.status = 'healthy';
    }
  }

  saveReport() {
    const reportPath = path.join(process.cwd(), 'health-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(this.healthCheck, null, 2));
      console.log(`Health report saved to ${reportPath}`);
    } catch (error) {
      console.error('Failed to save health report:', error);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const checker = new HealthChecker();
  checker.runAllChecks().then(success => {
    console.log(`Health check ${success ? 'passed' : 'failed'}`);
    process.exit(success ? 0 : 1);
  });
}

module.exports = HealthChecker;