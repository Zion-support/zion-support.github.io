#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/health-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/health-report.json');
    this.startTime = Date.now();
    
    this.config = {
      monitorSystem: process.env.MONITOR_SYSTEM === 'true',
      monitorProcesses: process.env.MONITOR_PROCESSES === 'true',
      monitorResources: process.env.MONITOR_RESOURCES === 'true',
      alertThreshold: parseInt(process.env.ALERT_THRESHOLD) || 80
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async getSystemMetrics() {
    try {
      const metrics = {
        memory: {},
        cpu: {},
        disk: {},
        network: {},
        processes: {}
      };

      // Memory usage
      const memoryInfo = execSync('free -m', { encoding: 'utf8' }).split('\n')[1];
      const memoryParts = memoryInfo.split(/\s+/);
      metrics.memory = {
        total: parseInt(memoryParts[1]),
        used: parseInt(memoryParts[2]),
        free: parseInt(memoryParts[3]),
        available: parseInt(memoryParts[6]),
        usage: Math.round((parseInt(memoryParts[2]) / parseInt(memoryParts[1])) * 100)
      };

      // CPU usage
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuMatch = cpuInfo.match(/(\d+\.\d+)%us/);
      metrics.cpu = {
        usage: cpuMatch ? parseFloat(cpuMatch[1]) : 0
      };

      // Disk usage
      const diskInfo = execSync('df -h .', { encoding: 'utf8' }).split('\n')[1];
      const diskParts = diskInfo.split(/\s+/);
      metrics.disk = {
        total: diskParts[1],
        used: diskParts[2],
        available: diskParts[3],
        usage: parseInt(diskParts[4].replace('%', ''))
      };

      // Process count
      const processCount = execSync('ps aux | wc -l', { encoding: 'utf8' }).trim();
      metrics.processes = {
        total: parseInt(processCount)
      };

      return metrics;
    } catch (error) {
      this.log(`Error getting system metrics: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async getPM2Status() {
    try {
      const statusOutput = execSync('pm2 list --format json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return JSON.parse(statusOutput);
    } catch (error) {
      this.log(`Error getting PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async analyzeProcessHealth() {
    try {
      const pm2Status = await this.getPM2Status();
      const health = {
        total: pm2Status.length,
        online: 0,
        errored: 0,
        stopped: 0,
        processes: []
      };

      pm2Status.forEach(process => {
        health.processes.push({
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time
        });

        if (process.pm2_env.status === 'online') {
          health.online++;
        } else if (process.pm2_env.status === 'errored') {
          health.errored++;
        } else if (process.pm2_env.status === 'stopped') {
          health.stopped++;
        }
      });

      return health;
    } catch (error) {
      this.log(`Error analyzing process health: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async checkResourceHealth(systemMetrics) {
    const alerts = [];
    
    // Memory alerts
    if (systemMetrics.memory && systemMetrics.memory.usage > this.config.alertThreshold) {
      alerts.push({
        type: 'memory',
        severity: systemMetrics.memory.usage > 90 ? 'critical' : 'warning',
        message: `High memory usage: ${systemMetrics.memory.usage}%`,
        value: systemMetrics.memory.usage,
        threshold: this.config.alertThreshold
      });
    }

    // CPU alerts
    if (systemMetrics.cpu && systemMetrics.cpu.usage > this.config.alertThreshold) {
      alerts.push({
        type: 'cpu',
        severity: systemMetrics.cpu.usage > 90 ? 'critical' : 'warning',
        message: `High CPU usage: ${systemMetrics.cpu.usage}%`,
        value: systemMetrics.cpu.usage,
        threshold: this.config.alertThreshold
      });
    }

    // Disk alerts
    if (systemMetrics.disk && systemMetrics.disk.usage > this.config.alertThreshold) {
      alerts.push({
        type: 'disk',
        severity: systemMetrics.disk.usage > 90 ? 'critical' : 'warning',
        message: `High disk usage: ${systemMetrics.disk.usage}%`,
        value: systemMetrics.disk.usage,
        threshold: this.config.alertThreshold
      });
    }

    return alerts;
  }

  async generateHealthReport(systemMetrics, processHealth, alerts) {
    this.log('📊 Generating health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      system: systemMetrics,
      processes: processHealth,
      alerts: alerts,
      summary: {
        systemHealth: this.calculateSystemHealth(systemMetrics, alerts),
        processHealth: this.calculateProcessHealth(processHealth),
        overallHealth: 'unknown'
      }
    };

    // Calculate overall health
    const systemScore = report.summary.systemHealth.score;
    const processScore = report.summary.processHealth.score;
    report.summary.overallHealth = Math.round((systemScore + processScore) / 2);

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Health report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  calculateSystemHealth(systemMetrics, alerts) {
    let score = 100;
    let status = 'healthy';
    
    // Deduct points for alerts
    alerts.forEach(alert => {
      if (alert.severity === 'critical') {
        score -= 30;
      } else if (alert.severity === 'warning') {
        score -= 15;
      }
    });

    // Determine status
    if (score < 50) {
      status = 'critical';
    } else if (score < 75) {
      status = 'warning';
    } else if (score < 90) {
      status = 'attention';
    }

    return { score: Math.max(0, score), status };
  }

  calculateProcessHealth(processHealth) {
    if (processHealth.error) return { score: 0, status: 'error' };
    
    let score = 100;
    let status = 'healthy';
    
    // Deduct points for offline processes
    if (processHealth.errored > 0) {
      score -= processHealth.errored * 25;
    }
    
    if (processHealth.stopped > 0) {
      score -= processHealth.stopped * 15;
    }

    // Determine status
    if (score < 50) {
      status = 'critical';
    } else if (score < 75) {
      status = 'warning';
    } else if (score < 90) {
      status = 'attention';
    }

    return { score: Math.max(0, score), status };
  }

  async run() {
    this.log('🚀 Starting Health Monitor...');
    
    try {
      // 1. Get system metrics
      const systemMetrics = await this.getSystemMetrics();
      
      // 2. Analyze process health
      const processHealth = await this.analyzeProcessHealth();
      
      // 3. Check resource health
      const alerts = await this.checkResourceHealth(systemMetrics);
      
      // 4. Generate comprehensive report
      const report = await this.generateHealthReport(systemMetrics, processHealth, alerts);
      
      // 5. Log summary
      this.log('\n📊 Health Monitor Summary:');
      this.log(`System Health: ${report.summary.systemHealth.status} (${report.summary.systemHealth.score}/100)`);
      this.log(`Process Health: ${report.summary.processHealth.status} (${report.summary.processHealth.score}/100)`);
      this.log(`Overall Health: ${report.summary.overallHealth}/100`);
      this.log(`Alerts: ${alerts.length}`);
      
      if (alerts.length > 0) {
        this.log('\n🚨 Active Alerts:');
        alerts.forEach(alert => {
          this.log(`- ${alert.message} (${alert.severity})`);
        });
      }
      
      this.log('✅ Health monitoring completed successfully!');
      
      return report;
      
    } catch (error) {
      this.log(`❌ Health monitoring failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the health monitor
if (require.main === module) {
  const monitor = new HealthMonitor();
  monitor.run().catch(error => {
    console.error('Health monitor failed:', error);
    process.exit(1);
  });
}

module.exports = HealthMonitor;