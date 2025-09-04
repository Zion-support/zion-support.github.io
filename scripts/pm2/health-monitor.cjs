#!/usr/bin/env node

/**
 * PM2 Health Monitor Service
 * Monitors system health and processes
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class HealthMonitor {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'health-monitor';
    this.monitorSystem = process.env.MONITOR_SYSTEM === 'true';
    this.monitorProcesses = process.env.MONITOR_PROCESSES === 'true';
    this.monitorResources = process.env.MONITOR_RESOURCES === 'true';
    this.alertThreshold = parseInt(process.env.ALERT_THRESHOLD) || 80;
    this.logFile = path.join(__dirname, '../../logs/pm2/health-monitor.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async getSystemInfo() {
    if (!this.monitorSystem) {
      return { monitored: false };
    }

    try {
      const uptime = os.uptime();
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;
      const memUsagePercent = (usedMem / totalMem) * 100;

      const loadAvg = os.loadavg();
      const cpuCount = os.cpus().length;
      const loadPercent = (loadAvg[0] / cpuCount) * 100;

      return {
        monitored: true,
        uptime: uptime,
        uptimeFormatted: this.formatUptime(uptime),
        memory: {
          total: totalMem,
          used: usedMem,
          free: freeMem,
          usagePercent: Math.round(memUsagePercent * 100) / 100
        },
        cpu: {
          loadAverage: loadAvg,
          loadPercent: Math.round(loadPercent * 100) / 100,
          cores: cpuCount
        },
        platform: os.platform(),
        arch: os.arch(),
        nodeVersion: process.version
      };
    } catch (error) {
      this.log(`System monitoring failed: ${error.message}`);
      return { monitored: false, error: error.message };
    }
  }

  formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${minutes}m`;
  }

  async getProcessInfo() {
    if (!this.monitorProcesses) {
      return { monitored: false };
    }

    try {
      // Get PM2 process list
      let pm2Processes = [];
      try {
        const pm2List = execSync('pm2 list --json', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        pm2Processes = JSON.parse(pm2List);
      } catch (pm2Error) {
        this.log(`PM2 process monitoring failed: ${pm2Error.message}`);
      }

      // Get system processes (top 10 by CPU usage)
      let systemProcesses = [];
      try {
        const psOutput = execSync('ps aux --sort=-%cpu | head -11', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        systemProcesses = psOutput.split('\n')
          .slice(1) // Skip header
          .filter(line => line.trim())
          .map(line => {
            const parts = line.trim().split(/\s+/);
            return {
              user: parts[0],
              pid: parts[1],
              cpu: parseFloat(parts[2]),
              mem: parseFloat(parts[3]),
              command: parts.slice(10).join(' ')
            };
          });
      } catch (psError) {
        this.log(`System process monitoring failed: ${psError.message}`);
      }

      return {
        monitored: true,
        pm2Processes: pm2Processes.length,
        pm2Details: pm2Processes,
        systemProcesses: systemProcesses.slice(0, 10),
        totalProcesses: systemProcesses.length
      };
    } catch (error) {
      this.log(`Process monitoring failed: ${error.message}`);
      return { monitored: false, error: error.message };
    }
  }

  async getResourceUsage() {
    if (!this.monitorResources) {
      return { monitored: false };
    }

    try {
      const systemInfo = await this.getSystemInfo();
      if (!systemInfo.monitored) {
        return { monitored: false, error: 'System monitoring disabled' };
      }

      const alerts = [];
      
      // Check memory usage
      if (systemInfo.memory.usagePercent > this.alertThreshold) {
        alerts.push({
          type: 'memory',
          level: 'warning',
          message: `High memory usage: ${systemInfo.memory.usagePercent}%`,
          value: systemInfo.memory.usagePercent,
          threshold: this.alertThreshold
        });
      }

      // Check CPU load
      if (systemInfo.cpu.loadPercent > this.alertThreshold) {
        alerts.push({
          type: 'cpu',
          level: 'warning',
          message: `High CPU load: ${systemInfo.cpu.loadPercent}%`,
          value: systemInfo.cpu.loadPercent,
          threshold: this.alertThreshold
        });
      }

      // Check disk space
      try {
        const diskUsage = execSync('df -h /', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        const diskLine = diskUsage.split('\n')[1];
        const diskParts = diskLine.split(/\s+/);
        const diskUsagePercent = parseInt(diskParts[4].replace('%', ''));
        
        if (diskUsagePercent > this.alertThreshold) {
          alerts.push({
            type: 'disk',
            level: 'warning',
            message: `High disk usage: ${diskUsagePercent}%`,
            value: diskUsagePercent,
            threshold: this.alertThreshold
          });
        }
      } catch (diskError) {
        this.log(`Disk usage check failed: ${diskError.message}`);
      }

      return {
        monitored: true,
        alerts,
        alertCount: alerts.length,
        systemInfo
      };
    } catch (error) {
      this.log(`Resource monitoring failed: ${error.message}`);
      return { monitored: false, error: error.message };
    }
  }

  async checkHealth() {
    try {
      this.log('Performing health check...');
      
      const systemInfo = await this.getSystemInfo();
      const processInfo = await this.getProcessInfo();
      const resourceUsage = await this.getResourceUsage();

      const health = {
        timestamp: new Date().toISOString(),
        status: 'healthy',
        system: systemInfo,
        processes: processInfo,
        resources: resourceUsage
      };

      // Determine overall health status
      if (resourceUsage.alerts && resourceUsage.alerts.length > 0) {
        health.status = 'warning';
        health.message = `${resourceUsage.alerts.length} alerts detected`;
      }

      if (systemInfo.error || processInfo.error || resourceUsage.error) {
        health.status = 'error';
        health.message = 'Health check errors detected';
      }

      return health;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`);
      return {
        timestamp: new Date().toISOString(),
        status: 'error',
        message: error.message
      };
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      health: await this.checkHealth(),
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        monitorSystem: this.monitorSystem,
        monitorProcesses: this.monitorProcesses,
        monitorResources: this.monitorResources,
        alertThreshold: this.alertThreshold
      }
    };

    const reportFile = path.join(__dirname, '../../logs/pm2/health-monitor-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health monitor report generated: ${reportFile}`);
    return report;
  }

  async start() {
    this.log(`${this.processName} started`);
    
    try {
      const report = await this.generateReport();
      
      const health = report.health;
      this.log(`Health status: ${health.status}`);
      
      if (health.status === 'warning') {
        this.log(`WARNING: ${health.message}`);
      } else if (health.status === 'error') {
        this.log(`ERROR: ${health.message}`);
      } else {
        this.log('System is healthy');
      }

      if (health.resources && health.resources.alerts) {
        for (const alert of health.resources.alerts) {
          this.log(`ALERT: ${alert.message}`);
        }
      }
      
    } catch (error) {
      this.log(`Health monitor error: ${error.message}`);
    }
  }
}

// Start the service
if (require.main === module) {
  const healthMonitor = new HealthMonitor();
  healthMonitor.start().catch(console.error);
}

module.exports = HealthMonitor;