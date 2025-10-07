#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MonitoringAlerting {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 30000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    const healthChecks = [
      { command: 'pm2 status', description: 'PM2 process status' },
      { command: 'df -h', description: 'Disk space check' },
      { command: 'free -m', description: 'Memory usage check' },
      { command: 'uptime', description: 'System uptime check' }
    ];

    const results = [];
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    const healthyCount = results.filter(r => r.result.success).length;
    const overallHealth = healthyCount === results.length ? 'healthy' : 'degraded';

    return {
      name: 'System Health Check',
      status: overallHealth,
      details: `${healthyCount}/${results.length} health checks passed`,
      results
    };
  }

  async checkApplicationPerformance() {
    this.log('⚡ Checking application performance...');
    
    const perfChecks = [
      { command: 'npm run build:analyze', description: 'Bundle size analysis' },
      { command: 'curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000', description: 'Response time check' }
    ];

    const results = [];
    for (const check of perfChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    return {
      name: 'Application Performance Check',
      status: results.some(r => r.result.success) ? 'completed' : 'failed',
      details: `${results.filter(r => r.result.success).length}/${results.length} performance checks completed`,
      results
    };
  }

  async checkErrorLogs() {
    this.log('🔍 Checking error logs...');
    
    const logFiles = [
      'automation/logs/master-automation.log',
      'automation/logs/master-orchestrator.log'
    ];

    const errors = [];
    for (const logFile of logFiles) {
      const logPath = path.join(this.projectRoot, logFile);
      if (fs.existsSync(logPath)) {
        const content = fs.readFileSync(logPath, 'utf8');
        const errorLines = content.split('\n').filter(line => 
          line.includes('ERROR') || line.includes('error') || line.includes('Error')
        );
        errors.push(...errorLines);
      }
    }

    return {
      name: 'Error Log Check',
      status: errors.length === 0 ? 'clean' : 'warnings',
      details: errors.length === 0 ? 'No errors found in logs' : `${errors.length} error entries found`,
      errorCount: errors.length
    };
  }

  async checkSecurityAlerts() {
    this.log('🔒 Checking security alerts...');
    
    const securityChecks = [
      { command: 'npm audit', description: 'NPM security audit' },
      { command: 'pm2 logs --lines 50', description: 'PM2 security logs' }
    ];

    const results = [];
    for (const check of securityChecks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    return {
      name: 'Security Alert Check',
      status: results.every(r => r.result.success) ? 'secure' : 'alerts',
      details: results.every(r => r.result.success) ? 'No security alerts' : 'Security alerts detected',
      results
    };
  }

  async generateAlerts() {
    this.log('🚨 Generating alerts...');
    
    const checks = [
      await this.checkSystemHealth(),
      await this.checkApplicationPerformance(),
      await this.checkErrorLogs(),
      await this.checkSecurityAlerts()
    ];

    const alerts = [];
    
    checks.forEach(check => {
      if (check.status === 'degraded' || check.status === 'failed' || check.status === 'warnings' || check.status === 'alerts') {
        alerts.push({
          type: 'warning',
          component: check.name,
          message: check.details,
          timestamp: new Date().toISOString()
        });
      }
    });

    return {
      name: 'Alert Generation',
      status: alerts.length === 0 ? 'no-alerts' : 'alerts-generated',
      details: alerts.length === 0 ? 'No alerts generated' : `${alerts.length} alerts generated`,
      alerts
    };
  }

  async runMonitoring() {
    this.log('📊 Starting monitoring and alerting...');

    const monitoring = [
      await this.checkSystemHealth(),
      await this.checkApplicationPerformance(),
      await this.checkErrorLogs(),
      await this.checkSecurityAlerts(),
      await this.generateAlerts()
    ];

    const healthyCount = monitoring.filter(m => 
      m.status === 'healthy' || m.status === 'clean' || m.status === 'secure' || m.status === 'no-alerts'
    ).length;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: monitoring.length,
        healthy: healthyCount,
        issues: monitoring.length - healthyCount
      },
      monitoring
    };

    const reportFile = path.join(this.reportsDir, `monitoring-alerting-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Monitoring completed. ${healthyCount}/${monitoring.length} checks healthy`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const monitoring = new MonitoringAlerting();
  monitoring.runMonitoring().catch(error => {
    console.error('Monitoring failed:', error);
    process.exit(1);
  });
}

module.exports = MonitoringAlerting;