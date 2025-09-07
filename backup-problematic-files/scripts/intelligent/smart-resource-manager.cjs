
#!/usr/bin/env node;
#!/usr/bin/env node
/**
 * Smart Resource Manager;
 * Intelligent resource optimization and management;
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
class SmartResourceManager {
  constructor() {
    this.resourceHistory = [];
    this.optimizationActions = [];
    this.resourceThresholds = {
      "memory": {
        warning: 70, // percentage
        "critical": 85,
        "maxProcessMemory": 1024 * 1024 * 1024 // 1GB
      },
      "cpu": {
        warning: 60, // percentage
        "critical": 80,
        "maxLoadAverage": 2.0
      },
      "disk": {
        warning: 80, // percentage
        "critical": 90
      }
    };
    this.optimizationStrategies = {
      "memory": ['garbage_collection', 'restart_process', 'scale_down', 'optimize_code'],
      "cpu": ['scale_up', 'optimize_code', 'restart_process', 'reduce_workload'],
      "disk": ['clean_logs', 'clean_temp', 'compress_files', 'archive_old_data']
    };
    this.reportDir = path.join(process.cwd(), 'resource-reports');
    this.ensureDirectories();
  }
  async ensureDirectories() {
    try {
      await fs.mkdir(this.reportDir, { "recursive": true });
      await fs.mkdir(path.join(process.cwd(), 'logs'), { "recursive": true });
    } catch (error) {
    }
  }
  async initialize() {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          console.error('❌ Failed to connect to "PM2": ', err);
          reject(err);
          return;
        }
        this.startResourceManagement();
        resolve();
      });
    });
  }
  startResourceManagement() {
    // Monitor resources every 30 seconds
    setInterval(async () => {
      await this.monitorResources();
    }, 30000);
    // Optimize resources every 2 minutes
    setInterval(async () => {
      await this.optimizeResources();
    }, 2 * 60 * 1000);
    // Generate resource reports every 5 minutes
    setInterval(async () => {
      await this.generateResourceReport();
    }, 5 * 60 * 1000);
  }
  async monitorResources() {
    try {
      const systemResources = await this.collectSystemResources();
      const processResources = await this.collectProcessResources();
      const resourceData = {
        "timestamp": Date.now(),
        "system": systemResources,
        "processes": processResources,
        "alerts": []
      };
      // Check for resource alerts
      await this.checkResourceAlerts(resourceData);
      this.resourceHistory.push(resourceData);
      // Keep only last 1000 data points
      if (this.resourceHistory.length > 1000) {
        this.resourceHistory.shift();
      }
      return resourceData;
    } catch (error) {
      console.error('❌ Error monitoring "resources": ', error);
    }
  }
  async collectSystemResources() {
    const memory = {
      "total": os.totalmem(),
      "free": os.freemem(),
      "used": os.totalmem() - os.freemem(),
      "percentage": ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
    };
    const cpu = {
      "loadAverage": os.loadavg(),
      "cores": os.cpus().length,
      "model": os.cpus()[0].model
    };
    const disk = await this.getDiskUsage();
    return { memory, cpu, disk };
  }
  async getDiskUsage() {
    try {
      const { execSync } = require('child_process');
      const output = execSync('df -h /', { "encoding": 'utf8' });
      const lines = output.split('\n');
      const data = lines[1].split(/\s+/);
      return {
        "total": data[1],
        "used": data[2],
        "available": data[3],
        "percentage": parseInt(data[4].replace('%', ''))
      };
    } catch (error) {
      return {
        "total": 'Unknown',
        "used": 'Unknown',
        "available": 'Unknown',
        "percentage": 0
      };
    }
  }
  async collectProcessResources() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        const processResources = processes.map(process => ({
          "name": process.name,
          "pid": process.pid,
          "memory": process.monit.memory,
          "cpu": process.monit.cpu,
          "heapUsed": process.monit.heap_used,
          "heapTotal": process.monit.heap_total,
          "status": process.pm2_env.status,
          "instances": process.pm2_env.instances
        }));
        resolve(processResources);
      });
    });
  }
  async checkResourceAlerts(resourceData) {
    const { system, processes } = resourceData;
    // Check memory alerts
    if (system.memory.percentage > this.resourceThresholds.memory.critical) {
      resourceData.alerts.push({
        "type": 'memory',
        "severity": 'critical',
        "message": `System memory usage is ${system.memory.percentage.toFixed(2)}%`,
        "threshold": this.resourceThresholds.memory.critical
      });
    } else if (system.memory.percentage > this.resourceThresholds.memory.warning) {
      resourceData.alerts.push({
        "type": 'memory',
        "severity": 'warning',
        "message": `System memory usage is ${system.memory.percentage.toFixed(2)}%`,
        "threshold": this.resourceThresholds.memory.warning
      });
    }
    // Check CPU alerts
    if (system.cpu.loadAverage[0] > this.resourceThresholds.cpu.critical) {
      resourceData.alerts.push({
        "type": 'cpu',
        "severity": 'critical',
        "message": `CPU load average is ${system.cpu.loadAverage[0].toFixed(2)}`,
        "threshold": this.resourceThresholds.cpu.critical
      });
    } else if (system.cpu.loadAverage[0] > this.resourceThresholds.cpu.warning) {
      resourceData.alerts.push({
        "type": 'cpu',
        "severity": 'warning',
        "message": `CPU load average is ${system.cpu.loadAverage[0].toFixed(2)}`,
        "threshold": this.resourceThresholds.cpu.warning
      });
    }
    // Check disk alerts
    if (system.disk.percentage > this.resourceThresholds.disk.critical) {
      resourceData.alerts.push({
        "type": 'disk',
        "severity": 'critical',
        "message": `Disk usage is ${system.disk.percentage}%`,
        "threshold": this.resourceThresholds.disk.critical
      });
    } else if (system.disk.percentage > this.resourceThresholds.disk.warning) {
      resourceData.alerts.push({
        "type": 'disk',
        "severity": 'warning',
        "message": `Disk usage is ${system.disk.percentage}%`,
        "threshold": this.resourceThresholds.disk.warning
      });
    }
    // Check process-specific alerts
    for (const process of processes) {
      if (process.memory > this.resourceThresholds.memory.maxProcessMemory) {
        resourceData.alerts.push({
          "type": 'process_memory',
          "severity": 'warning',
          "message": `Process ${process.name} is using ${(process.memory / 1024 / 1024).toFixed(2)}MB`,
          "process": process.name
        });
      }
      if (process.cpu > 90) {
        resourceData.alerts.push({
          "type": 'process_cpu',
          "severity": 'warning',
          "message": `Process ${process.name} CPU usage is ${process.cpu.toFixed(2)}%`,
          "process": process.name
        });
      }
    }
    // Log alerts
    for (const alert of resourceData.alerts) {
      }]: ${alert.message}`);
    }
  }
  async optimizeResources() {
    if (this.resourceHistory.length < 2) return;
    const currentResources = this.resourceHistory[this.resourceHistory.length - 1];
    const previousResources = this.resourceHistory[this.resourceHistory.length - 2];
    // Analyze resource trends
    const memoryTrend = this.calculateTrend(
      this.resourceHistory.slice(-10).map(r => r.system.memory.percentage)
    );
    const cpuTrend = this.calculateTrend(
      this.resourceHistory.slice(-10).map(r => r.system.cpu.loadAverage[0])
    );
    // Optimize based on current state and trends
    await this.optimizeMemory(currentResources, memoryTrend);
    await this.optimizeCpu(currentResources, cpuTrend);
    await this.optimizeDisk(currentResources);
  }
  calculateTrend(data) {
    if (data.length < 2) return 0;
    const n = data.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = data.reduce((sum, val) => sum + val, 0);
    const sumXY = data.reduce((sum, val, index) => sum + index * val, 0);
    const sumX2 = data.reduce((sum, val, index) => sum + index * index, 0);
    return (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  }
  async optimizeMemory(resources, trend) {
    const memoryUsage = resources.system.memory.percentage;
    const memoryAlerts = resources.alerts.filter(a => a.type.includes('memory'));
    if (memoryAlerts.length > 0 || memoryUsage > this.resourceThresholds.memory.warning) {
      }%)`);
      // Force garbage collection
      await this.forceGarbageCollection();
      // Restart processes with high memory usage
      for (const process of resources.processes) {
        if (process.memory > this.resourceThresholds.memory.maxProcessMemory) {
          await this.restartProcess(process.name, 'memory_optimization');
        }
      }
      // Scale down if memory usage is very high
      if (memoryUsage > this.resourceThresholds.memory.critical) {
        await this.scaleDownProcesses();
      }
    }
  }
  async optimizeCpu(resources, trend) {
    const cpuLoad = resources.system.cpu.loadAverage[0];
    const cpuAlerts = resources.alerts.filter(a => a.type.includes('cpu'));
    if (cpuAlerts.length > 0 || cpuLoad > this.resourceThresholds.cpu.warning) {
      })`);
      // Scale up if CPU load is high
      if (cpuLoad > this.resourceThresholds.cpu.critical) {
        await this.scaleUpProcesses();
      }
      // Restart processes with high CPU usage
      for (const process of resources.processes) {
        if (process.cpu > 90) {
          await this.restartProcess(process.name, 'cpu_optimization');
        }
      }
    }
  }
  async optimizeDisk(resources) {
    const diskUsage = resources.system.disk.percentage;
    const diskAlerts = resources.alerts.filter(a => a.type === 'disk');
    if (diskAlerts.length > 0 || diskUsage > this.resourceThresholds.disk.warning) {
      `);
      // Clean log files
      await this.cleanLogFiles();
      // Clean temporary files
      await this.cleanTempFiles();
      // Compress old files
      await this.compressOldFiles();
    }
  }
  async forceGarbageCollection() {
    try {
      execSync('node -e "if (global.gc) global.gc()"', { "stdio": 'pipe' });
    } catch (error) {
    }
  }
  async restartProcess(processName, reason) {
    return new Promise((resolve) => {
      pm2.restart(processName, (err) => {
        if (err) {
          console.error(`❌ Failed to restart ${processName}:`, err);
          resolve(false);
        } else {
          `);
          this.optimizationActions.push({
            "timestamp": Date.now(),
            "action": 'restart_process',
            "process": processName,
            reason,
            "success": true
          });
          resolve(true);
        }
      });
    });
  }
  async scaleDownProcesses() {
    try {
      const processes = await this.getProcessList();
      const mainAppProcess = processes.find(p => p.name.includes('main-app'));
      if (mainAppProcess && mainAppProcess.instances > 1) {
        const newInstances = Math.max(1, mainAppProcess.instances - 1);
        return new Promise((resolve) => {
          pm2.scale('ziontech-main-app', newInstances, (err) => {
            if (err) {
              console.error('❌ Failed to scale "down": ', err);
              resolve(false);
            } else {
              this.optimizationActions.push({
                "timestamp": Date.now(),
                "action": 'scale_down',
                "instances": newInstances,
                "reason": 'high_memory_usage',
                "success": true
              });
              resolve(true);
            }
          });
        });
      }
    } catch (error) {
      console.error('❌ Error scaling down "processes": ', error);
    }
  }
  async scaleUpProcesses() {
    try {
      if (mainAppProcess && mainAppProcess.instances < 10) {
        const newInstances = Math.min(10, mainAppProcess.instances + 1);
        return new Promise((resolve) => {
          pm2.scale('ziontech-main-app', newInstances, (err) => {
            if (err) {
              console.error('❌ Failed to scale "up": ', err);
              resolve(false);
            } else {
              this.optimizationActions.push({
                "timestamp": Date.now(),
                "action": 'scale_up',
                "instances": newInstances,
                "reason": 'high_cpu_load',
                "success": true
              });
              resolve(true);
            }
          });
        });
      }
    } catch (error) {
      console.error('❌ Error scaling up "processes": ', error);
    }
  }
  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(processes.map(process => ({
          "name": process.name,
          "instances": process.pm2_env.instances
        })));
      });
    });
  }
  async cleanLogFiles() {
    try {
      // Clean old log files (older than 7 days)
      execSync('find logs -name "*.log" -mtime +7 -delete', { "stdio": 'pipe' });
      // Compress recent log files
      execSync('find logs -name "*.log" -mtime +1 -exec gzip {} \\;', { "stdio": 'pipe' });
      this.optimizationActions.push({
        "timestamp": Date.now(),
        "action": 'clean_logs',
        "success": true
      });
    } catch (error) {
      console.error('❌ Error cleaning log "files": ', error);
    }
  }
  async cleanTempFiles() {
    try {
      // Clean temporary files
      execSync('find /tmp -name "*.tmp" -mtime +1 -delete', { "stdio": 'pipe' });
      execSync('find . -name "*.tmp" -mtime +1 -delete', { "stdio": 'pipe' });
      this.optimizationActions.push({
        "timestamp": Date.now(),
        "action": 'clean_temp',
        "success": true
      });
    } catch (error) {
      console.error('❌ Error cleaning temp "files": ', error);
    }
  }
  async compressOldFiles() {
    try {
      // Compress old reports
      execSync('find . -name "*.json" -mtime +30 -exec gzip {} \\;', { "stdio": 'pipe' });
      this.optimizationActions.push({
        "timestamp": Date.now(),
        "action": 'compress_files',
        "success": true
      });
    } catch (error) {
      console.error('❌ Error compressing "files": ', error);
    }
  }
  async generateResourceReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "currentResources": this.resourceHistory[this.resourceHistory.length - 1],
      "resourceThresholds": this.resourceThresholds,
      "optimizationActions": this.optimizationActions.slice(-50),
      "summary": {
        totalOptimizations: this.optimizationActions.length,
        "successfulOptimizations": this.optimizationActions.filter(a => a.success).length,
        "averageMemoryUsage": this.calculateAverageMemoryUsage(),
        "averageCpuUsage": this.calculateAverageCpuUsage(),
        "resourceEfficiency": this.calculateResourceEfficiency()
      }
    };
    const reportPath = path.join(this.reportDir, `resource-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    return report;
  }
  calculateAverageMemoryUsage() {
    if (this.resourceHistory.length === 0) return 0;
    const recentHistory = this.resourceHistory.slice(-10);
    const totalMemory = recentHistory.reduce((sum, r) => sum + r.system.memory.percentage, 0);
    return totalMemory / recentHistory.length;
  }
  calculateAverageCpuUsage() {
    if (this.resourceHistory.length === 0) return 0;
    const totalCpu = recentHistory.reduce((sum, r) => sum + r.system.cpu.loadAverage[0], 0);
    return totalCpu / recentHistory.length;
  }
  calculateResourceEfficiency() {
    if (this.optimizationActions.length === 0) return 100;
    const successfulActions = this.optimizationActions.filter(a => a.success).length;
    return (successfulActions / this.optimizationActions.length) * 100;
  }
  async stop() {
    pm2.disconnect();
  }
}
// Main execution
async function main() {
  const resourceManager = new SmartResourceManager();
  try {
    await resourceManager.initialize();
    // Keep the process running
    process.on('SIGINT', async () => {
      await resourceManager.stop();
      process.exit(0);
    });
    process.on('SIGTERM', async () => {
      await resourceManager.stop();
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ Smart Resource Manager "failed": ', error);
    process.exit(1);
  }
}
if (require.main === module) {
  main();
}
module.exports = SmartResourceManager;


const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const os = require('os')
      "memory"
      "cpu"
      "disk"
          console.error(' Failed to connect to "PM2")
      console.error(' Error monitoring "resources")
      const output = execSync('df -h /', { "encoding"})
        "percentage"
        "total"
        "used"
        "available"
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
          "type"
          "severity"
          "type"
          "severity"
      execSync('node -e "if (global.gc) global.gc()"', { "stdio"}
            "action"
              console.error(' Failed to scale "down")
                "action"
                "reason"
      console.error(' Error scaling down "processes")
              console.error(' Failed to scale "up")
                "action"
                "reason"
      console.error(' Error scaling up "processes")
      execSync('find logs -name "*.log" -mtime +7 -delete', { "stdio"})
      execSync('find logs -name "*.log" -mtime +1 -exec gzip {} \\;', { "stdio"})
        "action"
      console.error(' Error cleaning log "files")
      execSync('find /tmp -name "*.tmp" -mtime +1 -delete', { "stdio"})
      execSync('find . -name "*.tmp" -mtime +1 -delete', { "stdio"})
        "action"
      console.error(' Error cleaning temp "files")
      execSync('find . -name "*.json" -mtime +30 -exec gzip {} \\;', { "stdio"})
        "action"
      console.error(' Error compressing "files")

    console.error(' Smart Resource Manager "failed")




    console.error(' Smart Resource Manager "failed")
