#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationHealthMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'logs', 'automation-health-monitor.log');
    this.healthFile = path.join(__dirname, '..', 'logs', 'automation-health.json');
    this.ensureLogDirectory();
    this.healthData = this.loadHealthData();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadHealthData() {
    try {
      if (fs.existsSync(this.healthFile)) {
        return JSON.parse(fs.readFileSync(this.healthFile, 'utf8'));
      }
    } catch (error) {
      this.log(`⚠️ Could not load health data: ${error.message}`);
    }
    
    return {
      lastCheck: null,
      overallHealth: 'unknown',
      processes: {},
      alerts: [],
      recommendations: []
    };
  }

  saveHealthData() {
    try {
      fs.writeFileSync(this.healthFile, JSON.stringify(this.healthData, null, 2));
    } catch (error) {
      this.log(`❌ Could not save health data: ${error.message}`);
    }
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      return processes.filter(proc => proc.name !== 'pm2-logrotate');
    } catch (error) {
      this.log(`❌ Failed to get PM2 status: ${error.message}`);
      return [];
    }
  }

  async checkProcessHealth(process) {
    const health = {
      name: process.name,
      status: process.pm2_env.status,
      uptime: process.pm2_env.pm_uptime,
      restarts: process.pm2_env.restart_time,
      memory: process.monit.memory,
      cpu: process.monit.cpu,
      lastCheck: new Date().toISOString(),
      health: 'unknown'
    };

    // Determine health status
    if (process.pm2_env.status === 'online') {
      if (process.pm2_env.restart_time > 5) {
        health.health = 'warning';
        health.issues = ['High restart count'];
      } else if (process.monit.memory > 1024 * 1024 * 1024) { // > 1GB
        health.health = 'warning';
        health.issues = ['High memory usage'];
      } else if (process.monit.cpu > 80) {
        health.health = 'warning';
        health.issues = ['High CPU usage'];
      } else {
        health.health = 'healthy';
      }
    } else if (process.pm2_env.status === 'errored') {
      health.health = 'critical';
      health.issues = ['Process errored'];
    } else if (process.pm2_env.status === 'stopped') {
      health.health = 'stopped';
      health.issues = ['Process stopped'];
    }

    return health;
  }

  async checkSystemHealth() {
    this.log('🔍 Checking automation system health...');
    
    try {
      const processes = await this.getPM2Status();
      const processHealth = {};
      let healthyCount = 0;
      let warningCount = 0;
      let criticalCount = 0;
      let stoppedCount = 0;

      for (const process of processes) {
        const health = await this.checkProcessHealth(process);
        processHealth[process.name] = health;
        
        switch (health.health) {
          case 'healthy':
            healthyCount++;
            break;
          case 'warning':
            warningCount++;
            break;
          case 'critical':
            criticalCount++;
            break;
          case 'stopped':
            stoppedCount++;
            break;
        }
      }

      // Determine overall health
      let overallHealth = 'healthy';
      if (criticalCount > 0) {
        overallHealth = 'critical';
      } else if (warningCount > 0) {
        overallHealth = 'warning';
      } else if (stoppedCount === processes.length) {
        overallHealth = 'stopped';
      }

      // Update health data
      this.healthData = {
        lastCheck: new Date().toISOString(),
        overallHealth,
        summary: {
          total: processes.length,
          healthy: healthyCount,
          warning: warningCount,
          critical: criticalCount,
          stopped: stoppedCount
        },
        processes: processHealth,
        alerts: this.generateAlerts(processHealth),
        recommendations: this.generateRecommendations(processHealth)
      };

      this.saveHealthData();
      
      this.log(`📊 Health check completed: ${overallHealth.toUpperCase()}`);
      this.log(`   Total: ${processes.length}, Healthy: ${healthyCount}, Warning: ${warningCount}, Critical: ${criticalCount}, Stopped: ${stoppedCount}`);
      
      return this.healthData;
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      return null;
    }
  }

  generateAlerts(processHealth) {
    const alerts = [];
    
    for (const [name, health] of Object.entries(processHealth)) {
      if (health.health === 'critical') {
        alerts.push({
          level: 'critical',
          process: name,
          message: `Process ${name} is in critical state`,
          timestamp: new Date().toISOString()
        });
      } else if (health.health === 'warning') {
        alerts.push({
          level: 'warning',
          process: name,
          message: `Process ${name} has warnings: ${health.issues?.join(', ')}`,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return alerts;
  }

  generateRecommendations(processHealth) {
    const recommendations = [];
    
    for (const [name, health] of Object.entries(processHealth)) {
      if (health.health === 'critical') {
        recommendations.push({
          process: name,
          action: 'restart',
          reason: 'Process is in critical state',
          priority: 'high'
        });
      } else if (health.health === 'warning') {
        if (health.issues?.includes('High restart count')) {
          recommendations.push({
            process: name,
            action: 'investigate',
            reason: 'High restart count indicates instability',
            priority: 'medium'
          });
        }
        if (health.issues?.includes('High memory usage')) {
          recommendations.push({
            process: name,
            action: 'optimize',
            reason: 'High memory usage may cause issues',
            priority: 'medium'
          });
        }
      }
    }
    
    return recommendations;
  }

  async showHealthStatus() {
    const health = await this.checkSystemHealth();
    if (!health) return;

    console.log('\n🏥 Automation System Health Report');
    console.log('==================================\n');
    
    // Overall status
    const statusIcon = {
      healthy: '🟢',
      warning: '🟡',
      critical: '🔴',
      stopped: '⚫',
      unknown: '❓'
    };
    
    console.log(`${statusIcon[health.overallHealth]} Overall Health: ${health.overallHealth.toUpperCase()}`);
    console.log(`📅 Last Check: ${health.lastCheck}`);
    console.log(`📊 Summary: ${health.summary.healthy}/${health.summary.total} healthy`);
    
    // Process details
    console.log('\n📋 Process Health Details:');
    console.log('==========================');
    
    for (const [name, process] of Object.entries(health.processes)) {
      const icon = statusIcon[process.health];
      const uptime = this.formatUptime(process.uptime);
      
      console.log(`\n${icon} ${name}`);
      console.log(`   Status: ${process.status}`);
      console.log(`   Health: ${process.health}`);
      console.log(`   Uptime: ${uptime}`);
      console.log(`   Restarts: ${process.restarts}`);
      console.log(`   Memory: ${Math.round(process.memory / 1024 / 1024)}MB`);
      console.log(`   CPU: ${process.cpu}%`);
      
      if (process.issues) {
        console.log(`   Issues: ${process.issues.join(', ')}`);
      }
    }
    
    // Alerts
    if (health.alerts.length > 0) {
      console.log('\n🚨 Active Alerts:');
      console.log('==================');
      
      for (const alert of health.alerts) {
        const icon = alert.level === 'critical' ? '🔴' : '🟡';
        console.log(`${icon} ${alert.message} (${alert.timestamp})`);
      }
    }
    
    // Recommendations
    if (health.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      console.log('===================');
      
      for (const rec of health.recommendations) {
        const priorityIcon = rec.priority === 'high' ? '🔴' : '🟡';
        console.log(`${priorityIcon} ${rec.action.toUpperCase()} ${rec.process}: ${rec.reason}`);
      }
    }
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  async generateHealthReport() {
    const health = await this.checkSystemHealth();
    if (!health) return null;
    
    const reportPath = path.join(__dirname, '..', 'logs', 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(health, null, 2));
    
    this.log(`✅ Health report generated: ${reportPath}`);
    return reportPath;
  }
}

// CLI handling
const monitor = new AutomationHealthMonitor();
const command = process.argv[2];

switch (command) {
  case 'status':
    monitor.showHealthStatus();
    break;
  case 'report':
    monitor.generateHealthReport();
    break;
  case 'check':
    monitor.checkSystemHealth();
    break;
  default:
    console.log('Usage: node automation-health-monitor.cjs [status|report|check]');
    console.log('  status - Show current health status');
    console.log('  report - Generate health report');
    console.log('  check  - Run health check');
    break;
}

// Graceful shutdown
process.on('SIGINT', () => {
  monitor.log('\n🛑 Shutting down health monitor...');
  process.exit(0);
});

module.exports = AutomationHealthMonitor;
