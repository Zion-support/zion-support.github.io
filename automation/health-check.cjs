#!/usr/bin/env node
/**
 * Health Check Monitor
 * Monitors application health and provides alerts
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class HealthCheckMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'health-check.log');
    this.ensureLogDir();
    this.healthStatus = 'unknown';
    this.lastCheck = null;
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
        timeout: 30000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async checkApplicationHealth() {
    this.log('🏥 Checking application health...');
    
    const healthChecks = [
      { command: 'npm run build', description: 'Build health check' },
      { command: 'npm run test:smoke', description: 'Test health check' },
    ];

    let healthy = true;
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      if (!result.success) {
        healthy = false;
      }
    }

    this.healthStatus = healthy ? 'healthy' : 'unhealthy';
    this.lastCheck = new Date();
    
    if (healthy) {
      this.log('✅ Application is healthy');
    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }

    return healthy;
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    
    const depCheck = await this.runCommand(
      'npm audit --audit-level=moderate',
      'Dependency security check'
    );
    
    if (depCheck.success) {
      this.log('✅ Dependencies are secure');
    } else {
      this.log('⚠️ Dependency issues found', 'WARN');
    }
  }

  async checkDiskSpace() {
    this.log('💾 Checking disk space...');
    
    const diskCheck = await this.runCommand(
      'df -h /workspace',
      'Disk space check'
    );
    
    if (diskCheck.success) {
      this.log('✅ Disk space check completed');
    }
  }

  async generateHealthReport() {
    this.log('📊 Generating health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      lastCheck: this.lastCheck,
      checks: {
        application: 'completed',
        dependencies: 'completed',
        diskSpace: 'completed'
      },
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Health report saved to: ${reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
    }
    
    recommendations.push('Monitor application performance regularly');
    recommendations.push('Set up automated alerts for critical issues');
    
    return recommendations;
  }

  async check() {
    this.log('🔍 Starting health check...');
    
    await this.checkApplicationHealth();
    await this.checkDependencies();
    await this.checkDiskSpace();
    await this.generateHealthReport();
    
    this.log('🎉 Health check completed!');
  }

  async start() {
    this.log('🚀 Health Check Monitor started');
    
    // Initial health check
    await this.check();
    
    // Set up periodic health checks every 5 minutes
    setInterval(async () => {
      await this.check();
    }, 5 * 60 * 1000);

    this.log('🔄 Health Check Monitor is running. Checks every 5 minutes.');
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}

module.exports = HealthCheckMonitor;