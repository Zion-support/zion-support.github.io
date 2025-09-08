#!/usr/bin/env node/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"const os = require("os");class HealthMonitor { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "health-monitor";" this.monitorSystem = process.env.MONITOR_SYSTEM === "true";" this.monitorProcesses = process.env.MONITOR_PROCESSES === "true";" this.monitorResources = process.env.MONITOR_RESOURCES === "true"; this.alertThreshold = parseInt(process.env.ALERT_THRESHOLD) | 80;" this.logFile = "logs/pm2/health-monitor.log";" this.errorFile = "logs/pm2/health-monitor-error.log"; this.ensureLogDirectory(); } ensureLogDirectory() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile, logMessage); } catch (error) {" console.error("Failed to write to log file:", error.message); } } error(message) {" this.log(message, "ERROR"); try {` fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`); } catch (err) {" console.error("Failed to write to error file:", err.message); } } async getSystemHealth() {" this.log("Checking system health."); try { const health = { timestamp: new Date().toISOString(), system: await this.getSystemInfo(), processes: await this.getProcessInfo(), resources: await this.getResourceUsage(), alerts: [] }; / Check for alerts if (health.resources.memoryUsage > this.alertThreshold) { health.alerts.push({" type: "memory"," level: "warning",` message: `Memory usage is ${health.resources.memoryUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)` }); } if (health.resources.cpuUsage > this.alertThreshold) { health.alerts.push({" type: "cpu"," level: "warning",` message: `CPU usage is ${health.resources.cpuUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)` }); } if (health.resources.diskUsage > this.alertThreshold) { health.alerts.push({" type: "disk"," level: "warning",` message: `Disk usage is ${health.resources.diskUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)` }); } / Log alerts for (const alert of health.alerts) {" if (alert.level === "warning") {" this.log(alert.message, "WARNING"); } else { this.error(alert.message); } } return health; } catch (error) {` this.error(`System health check failed: ${error.message}`); return { success: false, error: error.message }; } } async getSystemInfo() { try { const uptime = os.uptime(); const loadAvg = os.loadavg(); return { platform: os.platform(), arch: os.arch(), release: os.release(), uptime: uptime, uptimeFormatted: this.formatUptime(uptime), loadAverage: {" 1min: loadAvg[0]," 5min: loadAvg[1]," 15min: loadAvg[2] }, hostname: os.hostname(), nodeVersion: process.version, totalMemory: os.totalmem(), freeMemory: os.freemem(), cpus: os.cpus().length }; } catch (error) {` this.error(`Failed to get system info: ${error.message}`); return null; } } async getProcessInfo() { try { const processes = []; / Get PM2 processes try {" const pm2List = execSync("pm2 list --json", { encoding: "utf8" }); const pm2Processes = JSON.parse(pm2List); for (const proc of pm2Processes) { processes.push({ name: proc.name, pid: proc.pid, status: proc.pm2_env?.status, memory: proc.monit?.memory, cpu: proc.monit?.cpu, uptime: proc.pm2_env?.pm_uptime, restarts: proc.pm2_env?.restart_time }); } } catch (error) {"` this.log(`Failed to get PM2 processes: ${error.message}`, "WARNING"); } / Get system processes (top 10 by memory usage) try {" const psOutput = execSync("ps aux --sort=-%mem | head -11", { encoding: "utf8" });" const lines = psOutput.split("\n").slice(1); / Skip header for (const line of lines) { if (line.trim()) { const parts = line.trim().split(/\s+/); if (parts.length >= 11) { processes.push({ name: parts[10], pid: parseInt(parts[1]), memory: parseFloat(parts[3]), cpu: parseFloat(parts[2])," command: parts.slice(10).join(" ") }); } } } } catch (error) {"` this.log(`Failed to get system processes: ${error.message}`, "WARNING"); } return processes; } catch (error) {` this.error(`Failed to get process info: ${error.message}`); return []; } } async getResourceUsage() { try { const totalMem = os.totalmem(); const freeMem = os.freemem(); const usedMem = totalMem - freeMem; const memoryUsage = (usedMem / totalMem) * 100; / Get CPU usage (simplified) const cpus = os.cpus(); let totalIdle = 0; let totalTick = 0; for (const cpu of cpus) { for (const type in cpu.times) { totalTick += cpu.times[type]; } totalIdle += cpu.times.idle; } const cpuUsage = 100 - ~(100 * totalIdle / totalTick); / Get disk usage const diskUsage = await this.getDiskUsage(); return { memoryUsage: memoryUsage, memoryTotal: totalMem, memoryUsed: usedMem, memoryFree: freeMem, cpuUsage: cpuUsage, diskUsage: diskUsage, loadAverage: os.loadavg() }; } catch (error) {` this.error(`Failed to get resource usage: ${error.message}`); return { memoryUsage: 0, cpuUsage: 0, diskUsage: 0 }; } } async getDiskUsage() { try {" const dfOutput = execSync("df -h /", { encoding: "utf8" });" const lines = dfOutput.split("\n"); const dataLine = lines[1]; / Skip header if (dataLine) { const parts = dataLine.trim().split(/\s+/); const usageStr = parts[4]; / e.g., "45%"" return parseInt(usageStr.replace("%", "")); } return 0; } catch (error) {"` this.log(`Failed to get disk usage: ${error.message}`, "WARNING"); return 0; } } formatUptime(seconds) { const days = Math.floor(seconds / 86400); const hours = Math.floor((seconds % 86400) / 3600); const minutes = Math.floor((seconds % 3600) / 60);` return `${days}d ${hours}h ${minutes}m`; } async checkApplicationHealth() {" this.log("Checking application health."); try { const healthChecks = []; / Check if main application is running try {" const pm2List = execSync("pm2 list", { encoding: "utf8" });" if (pm2List.includes("bolt-zion-app") && pm2List.includes("online")) {" healthChecks.push({ name: "Main App", status: "healthy" }); } else {" healthChecks.push({ name: "Main App", status: "unhealthy" }); } } catch (error) {" healthChecks.push({ name: "Main App", status: "error", error: error.message }); } / Check if build directory exists" const buildDirs = ["dist", "build", "out", ".next"]; let buildExists = false; for (const dir of buildDirs) { if (fs.existsSync(dir)) { buildExists = true; break; } } healthChecks.push({ " name: "Build Directory", " status: buildExists ? "healthy" : "missing" }); / Check log files" const logDir = "logs/pm2"; const logFiles = fs.existsSync(logDir) ? fs.readdirSync(logDir) : []; healthChecks.push({ " name: "Log Files", " status: logFiles.length > 0 ? "healthy" : "missing", count: logFiles.length }); return healthChecks; } catch (error) {` this.error(`Application health check failed: ${error.message}`);" return [{ name: "Health Check", status: "error", error: error.message }]; } } async generateHealthReport() {" this.log("Generating health report."); try { const report = { timestamp: new Date().toISOString(), processName: this.processName, systemHealth: await this.getSystemHealth(), applicationHealth: await this.checkApplicationHealth(), environment: { nodeVersion: process.version, platform: process.platform, cwd: process.cwd() } }; / Calculate overall health score let healthScore = 100; const alerts = report.systemHealth?.alerts | []; for (const alert of alerts) {" if (alert.level === "warning") { healthScore -= 10;" } else if (alert.level === "error") { healthScore -= 25; } } report.healthScore = Math.max(0, healthScore);` const reportFile = `health-reports/health-report-${Date.now()}.json`; const reportDir = path.dirname(reportFile); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir, { recursive: true }); } fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));` this.log(`Health report saved to: ${reportFile}`);` this.log(`Overall health score: ${report.healthScore}/100`); return report; } catch (error) {` this.error(`Failed to generate health report: ${error.message}`); return null; } } async start() {` this.log(`Starting ${this.processName}.`); / Run initial health check await this.generateHealthReport(); / Set up periodic monitoring const interval = 60 * 1000; / 1 minute setInterval(async () => {" this.log("Running scheduled health check."); await this.generateHealthReport(); }, interval);` this.log(`${this.processName} started successfully`); }}/ Start the automation if this script is run directlyif (require.main === module) { const monitor = new HealthMonitor(); monitor.start().catch(error => {" console.error("Health monitor failed to start:", error); process.exit(1); });}module.exports = HealthMonitor;""`"`
#!/usr/bin/env node,
/**;
 * PM2 Health Monitor Script;
 * Monitors system health, processes, and resources,
 */;,
const { execSync } = require('child_process');',
const fs = require('fs');';,
const path = require('path');';
const os = require('os');';
class HealthMonitor {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'health-monitor';',
    this.monitorSystem = process.env.MONITOR_SYSTEM === 'true';';,
    this.monitorProcesses = process.env.MONITOR_PROCESSES === 'true';';
    this.monitorResources = process.env.MONITOR_RESOURCES === 'true';';
    this.alertThreshold = parseInt(process.env.ALERT_THRESHOLD) || 80;
    this.logFile = 'logs/pm2/health-monitor.log';';
    this.errorFile = 'logs/pm2/health-monitor-error.log';';
    this.ensureLogDirectory();
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  log(message, level = 'INFO') {'}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;,
    );
    _console.log(logMessage.trim());
    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
    }
  }
  error(message) {}
    this.log(message, 'ERROR');',
    try {}
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
    }
  }
  async getSystemHealth() {}
    this.log('Checking system health...');',
    try {}
      const health = {}
        timestamp: new Date().toISOString(),
        system: await this.getSystemInfo(),
        processes: await this.getProcessInfo(),
        resources: await this.getResourceUsage(),
        alerts: [];,
;      };,
      // Check for alerts;
      if (health.resources.memoryUsage > this.alertThreshold) {}
        health.alerts.push({}),
          type: 'memory,',
          level: 'warning,',
          message: `Memory usage is ${health.resources.memoryUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      if (health.resources.cpuUsage > this.alertThreshold) {}
        health.alerts.push({}),
          type: 'cpu,',
          level: 'warning,',
          message: `CPU usage is ${health.resources.cpuUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      if (health.resources.diskUsage > this.alertThreshold) {}
        health.alerts.push({}),
          type: 'disk,',
          level: 'warning,',
          message: `Disk usage is ${health.resources.diskUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      // Log alerts;
      for (const alert of health.alerts) {}
        if (alert.level === 'warning') {',
;          this.log(alert.message, 'WARNING');',
        } else {}
          this.error(alert.message);,
        }
        disk: {
          usagePercent: parseInt(diskUsage)
        }
        cpu: {
          usagePercent: Math.round(cpuUsage)
        }
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        memory: null
        disk: null
        cpu: null
      };
    }
  }
  async checkProcessHealth() {
    try {
      this.log('🔄 Checking process health...');
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      const processHealth = {
        total: processes.length
        online: 0
        stopped: 0
        errored: 0
        processes: []
      };
      processes.forEach(proc => {
        const status = proc.pm2_env?.status || 'unknown';
        processHealth.processes.push({
          name: proc.name
          status: status
          memory: proc.monit?.memory || 0
          cpu: proc.monit?.cpu || 0
          uptime: proc.pm2_env?.uptime || 0
        });
        if (status === 'online') processHealth.online++;
        else if (status === 'stopped') processHealth.stopped++;
        else if (status === 'errored') processHealth.errored++;
      });
      return {
        success: true
        health: processHealth
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        health: null
      };
    }
  }
  async checkApplicationHealth() {
    try {
      this.log('🌐 Checking application health...');
      const healthChecks = [];
      // Check if the application is running
      try {
        const pm2List = execSync('pm2 list', { encoding: 'utf8' });
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online');
        healthChecks.push({
          name: 'PM2 App Status'
          status: hasRunningApp ? 'healthy' : 'unhealthy'
          message: hasRunningApp ? 'Application is running' : 'Application is not running'
        });
      } catch (error) {
        healthChecks.push({
          name: 'PM2 App Status'
          status: 'error'
          message: 'Could not check PM2 status'
        });
      }
      // Check if build files exist
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next');
      healthChecks.push({
        name: 'Build Files'
        status: buildExists ? 'healthy' : 'unhealthy'
        message: buildExists ? 'Build files exist' : 'Build files missing'
      });
      // Check if package.json exists and is valid
      try {
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8'));
        healthChecks.push({
          name: 'Package.json'
          status: 'healthy'
          message: 'Package.json is valid'
        });
      } catch (error) {
        healthChecks.push({
          name: 'Package.json'
          status: 'unhealthy'
          message: 'Package.json is invalid or missing'
        });
      }
      return {
        success: true
        checks: healthChecks
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        checks: []
      };
    }
  }
  async checkLogHealth() {
    try {
      this.log('📝 Checking log health...');
      const logsDir = path.join(this.projectRoot, 'logs/pm2');
      const logFiles = [];
      if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        files.forEach(file => {
          if (file.endsWith('.log')) {
            const filePath = path.join(logsDir, file);
            const stats = fs.statSync(filePath);
            logFiles.push({
              name: file
              size: stats.size
              sizeMB: Math.round(stats.size / (1024 * 1024) * 100) / 100
              lastModified: stats.mtime
            });
          }
        });
      }
      return {
        success: true
        logFiles: logFiles
        totalSize: logFiles.reduce((sum, file) => sum + file.size, 0)
      };
    } catch (error) {
      return {
        success: false
        error: error.message
        logFiles: []
        totalSize: 0
      };
    }
  }
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {
    const report = {
      timestamp: new Date().toISOString()
      summary: {
        systemHealth: 'unknown'
        processHealth: 'unknown'
        applicationHealth: 'unknown'
        logHealth: 'unknown'
        overallHealth: 'unknown'
        healthScore: 0
      }
      details: {
        system: systemInfo
        processes: processInfo
        application: appInfo
        logs: logInfo
      }
      return 0;
    } catch (error) {}
      this.log(`Failed to get disk usage: ${error.message}`, 'WARNING');',
      return 0;,
    }
  }
  formatUptime(seconds) {}
    const days = Math.floor(seconds / 86400);,
    const hours = Math.floor((seconds % 86400) / 3600);,
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${minutes}m`;,
  }
  async checkApplicationHealth() {}
    this.log('Checking application health...');',
    try {}
      const healthChecks = [];,
      // Check if main application is running;
      try {}
        const pm2List = execSync('pm2 list', { encoding: 'utf8' });',
        if (pm2List.includes('bolt-zion-app') && pm2List.includes('online')) {'}
          healthChecks.push({ name: 'Main App, status: 'healthy' });',
        } else {}
          healthChecks.push({ name: 'Main App, status: 'unhealthy' });',
        }
      } catch (error) {}
        healthChecks.push({ name: 'Main App, status: 'error, error: error.message });',
      }
      // Check if build directory exists;
      const buildDirs = ['dist', 'build', 'out', '.next'];',
      let buildExists = false;,
      for (const dir of, buildDirs) {}
        if (fs.existsSync(dir)) {}
          buildExists = true;,
          break;,
        }
      }
      healthChecks.push({ }),
        name: 'Build Directory, ',
        status: buildExists ? 'healthy' : 'missing' ';,
      });,
      // Check log files;
      const logDir = 'logs/pm2';';
      const logFiles = fs.existsSync(logDir) ? fs.readdirSync(logDir) : [];,
      healthChecks.push({ }),
        name: 'Log Files, ',
        status: logFiles.length > 0 ? 'healthy' : 'missing,',
        count: logFiles.length;,
      });,
      return healthChecks;
    } catch (error) {}
      this.error(`Application health check failed: ${error.message}`);,
      return [{ name: 'Health Check, status: 'error, error: error.message }];',
    }
  }
  async generateHealthReport() {}
    this.log('Generating health report...');',
    try {}
      const report = {}
        timestamp: new Date().toISOString(),
        processName: this.processName,
        systemHealth: await this.getSystemHealth(),
        applicationHealth: await this.checkApplicationHealth(),
        environment: {,}
          nodeVersion: process.version,
          platform: process.platform,
          cwd: process.cwd(),
        }
;      };,
      // Calculate overall health score;
      let healthScore = 100;
      const alerts = report.systemHealth?.alerts || [];,
      for (const alert of, alerts) {}
        if (alert.level === 'warning') {',
;          healthScore -= 10;,
        } else if (alert.level === 'error') {'}
          healthScore -= 25;,
        }
      }
      report.healthScore = Math.max(0, healthScore);,
      const reportFile = `health-reports/health-report-${Date.now()}.json`;,
      const reportDir = path.dirname(reportFile);,
      if (!fs.existsSync(reportDir)) {}
        fs.mkdirSync(reportDir, { recursive: true });,
      }
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
      this.log(`Health report saved to: ${reportFile}`);,
      this.log(`Overall health score: ${report.healthScore}/100`);,
      return report;
    } catch (error) {}
      this.error(`Failed to generate health report: ${error.message}`);,
      return null;,
    }
  }
  async start() {}
    this.log(`Starting ${this.processName}...`);,
    // Run initial health check;
    await this.generateHealthReport();
    // Set up periodic monitoring;
    const interval = 60 * 1000; // 1 minute;
    setInterval(async () => {}
      this.log('Running scheduled health check...');',
      await this.generateHealthReport();,
    }, interval);,
    this.log(`${this.processName} started successfully`);,
  }
}
// Start the automation if this script is run directly;
if (require.main === module) {}
  const monitor = new HealthMonitor();,
  monitor.start().catch(error => {}),
    _console.error('Health monitor failed to start:', error);',
    process.exit(1);,
  });
}
<<<<<<< HEAD
=======
module.exports = HealthMonitor;
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
