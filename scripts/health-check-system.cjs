#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthCheckSystem {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'logs/health-check.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkSystemHealth() {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'HEALTHY',
      checks: {}
    };

    try {
      // Check 1: Linting
      this.log('Checking linting health...');
      try {
        execSync('npm run lint 2>&1', { 
          cwd: this.workspacePath,
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 * 2
        });
        health.checks.linting = { status: 'PASS', message: 'No linting errors' };
      } catch (error) {
        health.checks.linting = { status: 'FAIL', message: 'Linting errors found' };
        health.status = 'DEGRADED';
      }

      // Check 2: Type checking
      this.log('Checking TypeScript health...');
      try {
        execSync('npm run type-check 2>&1', { 
          cwd: this.workspacePath,
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 * 2
        });
        health.checks.typescript = { status: 'PASS', message: 'No type errors' };
      } catch (error) {
        health.checks.typescript = { status: 'FAIL', message: 'Type errors found' };
        health.status = 'DEGRADED';
      }

      // Check 3: Build
      this.log('Checking build health...');
      try {
        execSync('npm run build 2>&1', { 
          cwd: this.workspacePath,
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 * 5
        });
        health.checks.build = { status: 'PASS', message: 'Build successful' };
      } catch (error) {
        health.checks.build = { status: 'FAIL', message: 'Build failed' };
        health.status = 'UNHEALTHY';
      }

      // Check 4: Dependencies
      this.log('Checking dependencies...');
      try {
        execSync('npm audit --audit-level=high 2>&1', { 
          cwd: this.workspacePath,
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 * 2
        });
        health.checks.dependencies = { status: 'PASS', message: 'No high-severity vulnerabilities' };
      } catch (error) {
        health.checks.dependencies = { status: 'WARN', message: 'Vulnerabilities found' };
        if (health.status === 'HEALTHY') health.status = 'DEGRADED';
      }

      // Check 5: Disk space
      this.log('Checking disk space...');
      try {
        const result = execSync('df -h .', { 
          cwd: this.workspacePath,
          encoding: 'utf8'
        });
        const lines = result.split('\n');
        const diskInfo = lines[1].split(/\s+/);
        const usedPercent = parseInt(diskInfo[4].replace('%', ''));
        
        if (usedPercent > 90) {
          health.checks.disk = { status: 'WARN', message: `Disk usage: ${usedPercent}%` };
          if (health.status === 'HEALTHY') health.status = 'DEGRADED';
        } else {
          health.checks.disk = { status: 'PASS', message: `Disk usage: ${usedPercent}%` };
        }
      } catch (error) {
        health.checks.disk = { status: 'UNKNOWN', message: 'Could not check disk space' };
      }

      this.log(`System health: ${health.status}`);
      return health;

    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      health.status = 'UNHEALTHY';
      health.checks.error = { status: 'FAIL', message: error.message };
      return health;
    }
  }

  async saveHealthReport(health) {
    const reportPath = path.join(this.workspacePath, 'logs/health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(health, null, 2));
    this.log(`Health report saved: ${reportPath}`);
  }

  async monitor() {
    this.log('Starting health monitoring...');
    
    while (true) {
      try {
        const health = await this.checkSystemHealth();
        await this.saveHealthReport(health);
        
        // Wait for next check
        await new Promise(resolve => setTimeout(resolve, parseInt(process.env.HEALTH_CHECK_INTERVAL) || 300000));
      } catch (error) {
        this.log(`Health monitor error: ${error.message}`, 'ERROR');
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute on error
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckSystem();
  monitor.monitor().catch(console.error);
}

module.exports = HealthCheckSystem;