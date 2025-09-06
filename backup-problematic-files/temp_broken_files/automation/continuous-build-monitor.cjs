#!/usr/bin/env node
/**
 * Continuous Build Monitor
 * Monitors build health and performance
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ContinuousBuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'continuous-build-monitor.log');
    this.ensureLogDir();
    this.lastBuildTime = null;
    this.buildCount = 0;
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 60000 // 1 minute timeout
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async checkBuildHealth() {
    this.log('🏥 Checking build health...');

    const checks = [
      { command: 'npm run build', description: 'Build check' },
      { command: 'npm run test:smoke', description: 'Smoke test check' },
    ];

    let healthy = true;
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      if (!result.success) {
        healthy = false;
      }
    }

    if (healthy) {
      this.buildCount++;
      this.lastBuildTime = new Date();
      this.log(`✅ Build health check passed (${this.buildCount} successful builds)`);
    } else {
      this.log('❌ Build health check failed', 'ERROR');
    }

    return healthy;
  }

  async monitorPerformance() {
    this.log('📊 Monitoring performance...');

    const performanceChecks = [
      { command: 'npm run analyze', description: 'Bundle analysis' },
      { command: 'npm run security:audit', description: 'Security audit' },
    ];

    for (const check of performanceChecks) {
      await this.runCommand(check.command, check.description);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildCount: this.buildCount,
      lastBuildTime: this.lastBuildTime,
      status: 'monitoring'
    };

    const reportFile = path.join(__dirname, 'logs', 'build-monitor-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Build monitor report saved to: ${reportFile}`);
  }

  async start() {
    this.log('🚀 Continuous Build Monitor started');
    
    // Initial health check
    await this.checkBuildHealth();
    
    // Set up periodic monitoring every 15 minutes
    setInterval(async () => {
      await this.checkBuildHealth();
      await this.monitorPerformance();
      await this.generateReport();
    }, 15 * 60 * 1000);

    this.log('🔄 Continuous Build Monitor is running. Checks every 15 minutes.');
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new ContinuousBuildMonitor();
  monitor.start().catch(console.error);
}

module.exports = ContinuousBuildMonitor;