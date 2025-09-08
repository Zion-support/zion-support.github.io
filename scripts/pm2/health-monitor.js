<<<<<<< HEAD
=======
<<<<<<< HEAD


    try {}
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
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
  ensureLogDirectory() {}
    const logDir = path.dirname(this.logFile);,
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true });,
    }
  }
  log(message, level = 'INFO') {'}
    const timestamp = new Date().toISOString();,
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;,
    );
    _console.log(logMessage.trim());    try {}
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
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
<<<<<<< HEAD
        health.alerts.push({}),
          type: 'memory,',
          level: 'warning,',
=======
<<<<<<< HEAD

=======
        health.alerts.push({}),
          type: 'memory,',
          level: 'warning,',
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          message: `Memory usage is ${health.resources.memoryUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      if (health.resources.cpuUsage > this.alertThreshold) {}
<<<<<<< HEAD
        health.alerts.push({}),
          type: 'cpu,',
          level: 'warning,',
=======
<<<<<<< HEAD

=======
        health.alerts.push({}),
          type: 'cpu,',
          level: 'warning,',
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          message: `CPU usage is ${health.resources.cpuUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      if (health.resources.diskUsage > this.alertThreshold) {}
<<<<<<< HEAD
        health.alerts.push({}),
          type: 'disk,',
          level: 'warning,',
=======
<<<<<<< HEAD

=======
        health.alerts.push({}),
          type: 'disk,',
          level: 'warning,',
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
          message: `Disk usage is ${health.resources.diskUsage.toFixed(1)}% (threshold: ${this.alertThreshold}%)`,
        });,
      }
      // Log alerts;
<<<<<<< HEAD
      for (const alert of health.alerts) {}
        if (alert.level === 'warning') {',
=======
<<<<<<< HEAD

=======
      for (const alert of health.alerts) {}
        if (alert.level === 'warning') {',
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
;          this.log(alert.message, 'WARNING');',
        } else {}
          this.error(alert.message);,
        }
<<<<<<< HEAD
      }
      return health;
    } catch (error) {}
      this.error(`System health check failed: ${error.message}`);,
      return { success: false, error: error.message };,
=======
<<<<<<< HEAD




}};

; async checkSystemResources() {; try {; this && this.log('💻 Checking system resources...');

; const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });

}};'
; async checkSystemResources() {; try {; this && this.log('💻 Checking system resources...');'"
; const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
'"
}}; async checkSystemResources() {try {; this.log('💻 Checking system resources...'); const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }); // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3]; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0'; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0; return {success: true, memory: {}
      , total: parseInt(memTotal), used: parseInt(memUsed), free: parseInt(memFree)

; // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3];
; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0';
; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0;





    usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    }
  }
  async getSystemInfo() {}
    try {}
      const uptime = os.uptime();,
      const loadAvg = os.loadavg();,
      return {}
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        uptime: uptime,
        uptimeFormatted: this.formatUptime(uptime),
        loadAverage: {
          '1min': loadAvg[0],',
          '5min': loadAvg[1],',
          '15min': loadAvg[2]',
        },
        hostname: os.hostname(),
        nodeVersion: process.version,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length,
      };,
    } catch (error) {}
      this.error(`Failed to get system info: ${error.message}`);,
      return null;,
    }
  }
  async getProcessInfo() {}
    try {}
      const processes = [];,
      // Get PM2 processes;
      try {}
        const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });',
        const pm2Processes = JSON.parse(pm2List);,
        for (const proc of, pm2Processes) {}
          processes.push({}),
            name: proc.name,
            pid: proc.pid,
            status: proc.pm2_env?.status,
            memory: proc.monit?.memory,
            cpu: proc.monit?.cpu,
            uptime: proc.pm2_env?.pm_uptime,
            restarts: proc.pm2_env?.restart_time,
          });,
        }
      } catch (error) {}
        this.log(`Failed to get PM2 processes: ${error.message}`, 'WARNING');',
      }
      // Get system processes (top 10 by memory, usage),
<<<<<<< HEAD
      try {}
        const psOutput = execSync('ps aux --sort=-%mem | head -11', { encoding: 'utf8' });',
=======
      try {}'
        const psOutput = execSync('ps aux --sort=-%mem | head -11', { encoding: 'utf8' });','
=======
      }
      return health;
    } catch (error) {}
      this.error(`System health check failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  async getSystemInfo() {}
    try {}
      const uptime = os.uptime();,
      const loadAvg = os.loadavg();,
      return {}
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        uptime: uptime,
        uptimeFormatted: this.formatUptime(uptime),
        loadAverage: {
          '1min': loadAvg[0],',
          '5min': loadAvg[1],',
          '15min': loadAvg[2]',
        },
        hostname: os.hostname(),
        nodeVersion: process.version,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length,
      };,
    } catch (error) {}
      this.error(`Failed to get system info: ${error.message}`);,
      return null;,
    }
  }
  async getProcessInfo() {}
    try {}
      const processes = [];,
      // Get PM2 processes;
      try {}
        const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });',
        const pm2Processes = JSON.parse(pm2List);,
        for (const proc of, pm2Processes) {}
          processes.push({}),
            name: proc.name,
            pid: proc.pid,
            status: proc.pm2_env?.status,
            memory: proc.monit?.memory,
            cpu: proc.monit?.cpu,
            uptime: proc.pm2_env?.pm_uptime,
            restarts: proc.pm2_env?.restart_time,
          });,
        }
      } catch (error) {}
        this.log(`Failed to get PM2 processes: ${error.message}`, 'WARNING');',
      }
      // Get system processes (top 10 by memory, usage),
      try {}
        const psOutput = execSync('ps aux --sort=-%mem | head -11', { encoding: 'utf8' });',
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
        const lines = psOutput.split('\n').slice(1); // Skip header';,
        for (const line of, lines) {}
          if (line.trim()) {}
            const parts = line.trim().split(/\s+/);,
            if (parts.length >= 11) {}
              processes.push({}),
                name: parts[10],
                pid: parseInt(parts[1]),
                memory: parseFloat(parts[3]),
<<<<<<< HEAD
                cpu: parseFloat(parts[2]),
=======
<<<<<<< HEAD
                cpu: parseFloat(parts[2]),'
=======
                cpu: parseFloat(parts[2]),
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
                command: parts.slice(10).join(' '),
              });,
            }
          }
<<<<<<< HEAD
=======
<<<<<<< HEAD

          }
        })



      return {;

        success: false, error: error.message,
        logFiles: [], totalSize: 0,
      ;
};


    let maxScore = 0;
;
    // System health;
    if (systemInfo.success) {;
      const memUsage = systemInfo.memory?.usagePercent || 0;
      const diskUsage = systemInfo.disk?.usagePercent || 0;
      const cpuUsage = systemInfo.cpu?.usagePercent || 0;
;
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {;'
        report.summary.systemHealth = 'healthy';


      };


      // Generate report;'
      this.log('📊 Generating health report...');
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo);


const healthMonitor = new HealthMonitor();
healthMonitor.run().catch(error => {;




    };
  };

,
    if (processInfo.success && processInfo.health?.errored > 0) {,
      report.recommendations.push({,
        priorit: 'critical',
        messag: 'Errored processes detected',
        actio: 'Restart errored processes and investigate logs'
      })
},
,
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,
      report.recommendations.push({,
        priorit: 'medium',
        messag: 'Large log files detected',
        actio: 'Implement log rotation or cleanup'
      })
},
,
    return report
},
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname($2);
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: true})
      },
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved: to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving: report: ${error.message}`)





,
      // Parse memory info,
      const memLines = memInfo.split($2);
      const memTotal = $2;
      const memUsed = $2;
      const memFree = $2;
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname($2);
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursiv: true})
      },
,


    usagePercent: Math && Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)

    },
    disk: {,
    usagePercent: parseInt(diskUsage)}; cpu: {,

    usagePercent: Math && Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
    usagePercent: Math && Math.round(cpuUsage)}}} catch (error) {; return {; success: false, error: error && error.message, memory: null, disk: null, cpu: null}}};
; async checkProcessHealth() {; try {; this && this.log('🔄 Checking process health...');
; const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }); const processes = JSON && JSON.parse(pm2List);
; const processHealth = {; total: processes && processes.length, online: 0, stopped: 0, errored: 0, processes: []};
; processes && processes.forEach(proc = > {; const status = proc && proc.pm2_env?.status || 'unknown'; processHealth && processHealth.processes.push({; name: proc && proc.name, status: status, memory: proc && proc.monit?.memory || 0, cpu: proc && proc.monit?.cpu || 0, uptime: proc && proc.pm2_env?.uptime || 0});
; if (status = = = 'online') processHealth && processHealth.online++; else if (status = = = 'stopped') processHealth && processHealth.stopped++; else if (status = = = 'errored') processHealth && processHealth.errored++});
; return {; success: true,
    health: processHealth}} catch (error) {; return {; success: false, error: error && error.message, health: null}}};
; async checkApplicationHealth() {; try {; this && this.log('🌐 Checking application health...');
; // Check if the application is running; try {; const pm2List = execSync('pm2 list', { encoding: 'utf8' }); const hasRunningApp = pm2List && pm2List.includes('bolt-zion-app') && pm2List && pm2List.includes('online');
; healthChecks && healthChecks.push({; name: 'PM2 App Status', status: hasRunningApp ? 'healthy': 'unhealthy', message: hasRunningApp ? 'Application is running': 'Application is not running'})} catch (error) {; healthChecks && healthChecks.push({; name: 'PM2 App Status', status: 'error', message: 'Could not check PM2 status'})};
; // Check if build files exist; const buildExists = fs && fs.existsSync('dist') || fs && fs.existsSync('.next'); healthChecks && healthChecks.push({; name: 'Build Files', status: buildExists ? 'healthy': 'unhealthy', message: buildExists ? 'Build files exist': 'Build files missing'});
; // Check if package && package.json exists and is valid; try {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync('package && package.json', 'utf8')); healthChecks && healthChecks.push({; name: 'Package && Package.json', status: 'healthy', message: 'Package && Package.json is valid'})} catch (error) {; healthChecks && healthChecks.push({; name: 'Package && Package.json', status: 'unhealthy', message: 'Package && Package.json is invalid or missing'})};
    checks: healthChecks}} catch (error) {; return {; success: false, error: error && error.message, checks: []}}};
; async checkLogHealth() {; try {; this && this.log('📝 Checking log health...');
; const logsDir = path && path.join(this && this.projectRoot, 'logs/pm2'); const logFiles = [];
; if (fs && fs.existsSync(logsDir)) {; const files = fs && fs.readdirSync(logsDir); files && files.forEach(file = > {; if (file && file.endsWith('.log')) {; const filePath = path && path.join(logsDir, file); const stats = fs && fs.statSync(filePath); logFiles && logFiles.push({; name: file, size: stats && stats.size, sizeMB: Math && Math.round(stats && stats.size / (1024 * 1024) * 100) / 100,
    lastModified: stats && stats.mtime})}})};
; return {; success: true, logFiles: logFiles, totalSize: logFiles && logFiles.reduce((sum, file) = > sum + file && file.size, 0)}} catch (error) {; return {; success: false, error: error && error.message, logFiles: [],
    totalSize: 0}}};
; async generateReport(systemInfo, processInfo, appInfo, logInfo) {; const report = {; timestamp: new Date().toISOString(), summary: {
      , systemHealth: 'unknown', processHealth: 'unknown', applicationHealth: 'unknown', logHealth: 'unknown', overallHealth: 'unknown',
    details: {, system: systemInfo, processes: processInfo, application: appInfo, logs: logInfo}; recommendations: []};
; // System health; if (systemInfo && systemInfo.success) {; const memUsage = systemInfo && systemInfo.memory?.usagePercent || 0; const diskUsage = systemInfo && systemInfo.disk?.usagePercent || 0; const cpuUsage = systemInfo && systemInfo.cpu?.usagePercent || 0;
; if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {; report && report.summary.systemHealth = 'healthy'; totalScore + = 25} else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {; report && report.summary.systemHealth = 'warning'; totalScore + = 15} else {; report && report.summary.systemHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Process health; if (processInfo && processInfo.success && processInfo && processInfo.health) {; const health = processInfo && processInfo.health; if (health && health.errored = = = 0 && health && health.stopped = = = 0) {; report && report.summary.processHealth = 'healthy'; totalScore + = 25} else if (health && health.errored = = = 0) {; report && report.summary.processHealth = 'warning'; totalScore + = 15} else {; report && report.summary.processHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Application health; if (appInfo && appInfo.success) {; const healthyChecks = appInfo && appInfo.checks.filter(check = > check && check.status = = = 'healthy').length; const totalChecks = appInfo && appInfo.checks.length;
; if (healthyChecks = = = totalChecks) {; report && report.summary.applicationHealth = 'healthy'; totalScore + = 25} else if (healthyChecks > = totalChecks * 0 && 0.5) {; report && report.summary.applicationHealth = 'warning'; totalScore + = 15} else {; report && report.summary.applicationHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Log health; if (logInfo && logInfo.success) {; const totalLogSize = logInfo && logInfo.totalSize / (1024 * 1024), // MB; if (totalLogSize < 100) {; report && report.summary.logHealth = 'healthy'; totalScore + = 25} else if (totalLogSize < 500) {; report && report.summary.logHealth = 'warning'; totalScore + = 15} else {; report && report.summary.logHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; report && report.summary.healthScore = Math && Math.round((totalScore / maxScore) * 100);
; // Determine overall health; if (report && report.summary.healthScore > = 80) {; report && report.summary.overallHealth = 'healthy'} else if (report && report.summary.healthScore > = 60) {; report && report.summary.overallHealth = 'warning'} else {; report && report.summary.overallHealth = 'unhealthy'};
; // Generate recommendations; if (systemInfo && systemInfo.success) {; if (systemInfo && systemInfo.memory?.usagePercent > 80) {; report && report.recommendations.push({; priority: 'high', message: 'High memory usage detected', action: 'Consider restarting processes or increasing memory'})}; if (systemInfo && systemInfo.disk?.usagePercent > 80) {; report && report.recommendations.push({; priority: 'high', message: 'High disk usage detected', action: 'Clean up logs and temporary files'})}};
; if (processInfo && processInfo.success && processInfo && processInfo.health?.errored > 0) {; report && report.recommendations.push({; priority: 'critical', message: 'Errored processes detected', action: 'Restart errored processes and investigate logs'})};
; if (logInfo && logInfo.success && logInfo && logInfo.totalSize > 500 * 1024 * 1024) {; report && report.recommendations.push({; priority: 'medium', message: 'Large log files detected', action: 'Implement log rotation or cleanup'})};
; async saveReport(report) {; try {; const reportDir = path && path.dirname(this && this.reportFile); if (!fs && fs.existsSync(reportDir)) {; fs && fs.mkdirSync(reportDir, { recursive: true })};`;
; fs && fs.writeFileSync(this && this.reportFile, JSON && JSON.stringify(report, null, 2)); this && this.log(`Report saved to: ${this && this.reportFile}`)} catch (error) {; this && this.log(`Error saving report: ${error && error.message}`)}};`;
; async run() {; this && this.log('🏥 Starting Health Monitor...'); this && this.log(`Project root: ${this && this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logsDir)) {; fs && fs.mkdirSync(logsDir, { recursive: true })};
; // Run all health checks; const systemInfo = await this && this.checkSystemResources(); const processInfo = await this && this.checkProcessHealth(); const appInfo = await this && this.checkApplicationHealth(); const logInfo = await this && this.checkLogHealth();
; // Generate report; this && this.log('📊 Generating health report...'); const report = await this && this.generateReport(systemInfo, processInfo, appInfo, logInfo);
; // Save report; await this && this.saveReport(report);
; const duration = Date && Date.now() - this && this.startTime;`;
; // Log summary; this && this.log('\n📊 Health Monitor Summary: '); this && this.log(`System: ${report && report.summary.systemHealth}`); this && this.log(`Processes: ${report && report.summary.processHealth}`); this && this.log(`Application: ${report && report.summary.applicationHealth}`); this && this.log(`Logs: ${report && report.summary.logHealth}`); this && this.log(`Overall: ${report && report.summary.overallHealth}`); this && this.log(`Health Score: ${report && report.summary.healthScore}/100`); this && this.log(`Duration: ${duration}ms`);`;
; if (report && report.recommendations.length > 0) {; this && this.log('\n💡 Recommendations: '), report && report.recommendations.forEach(rec = > {, this && this.log(` [${rec && rec.priority.toUpperCase()}] ${rec && rec.message}`); this && this.log(` Action: ${rec && rec.action}`)})} else {; this && this.log('\n✨ All systems are healthy!')};`;
} catch (error) {; this && this.log(`❌ Error running health monitor: ${error && error.message}`); process && process.exit(1)}}};
// Run the health monitor;
healthMonitor && healthMonitor.run().catch(error = > {; process && process.exit(1)});


}}
; async checkSystemResources () { try { this.log ('💻 Checking system resources...');
; const mem_info = exec_sync ('free -m', { encoding: 'utf8' }); const disk_info = exec_sync ('df -h', { encoding: 'utf8' }); const cpu_info = exec_sync ('top -bn1 | grep "Cpu (s)"', { encoding: 'utf8' });
; // Parse memory info; const mem_lines = mem_info.split ('\n'); const mem_total = mem_lines[1].split (/\s+/)[1]; const mem_used = mem_lines[1].split (/\s+/)[2]; const mem_free = mem_lines[1].split (/\s+/)[3];
; // Parse disk info; const disk_lines = disk_info.split ('\n'); const root_disk = disk_lines.find (line = > line.includes ('/')); const disk_usage = root_disk ? root_disk.split (/\s+/)[4].replace ('%', ): '0';
; // Parse CPU info; const cpu_usage = cpu_info.includes ('id') ?; (100 - parse_float (cpu_info.split ('id')[0].split (', ')[3].replace ('%id', ).trim ())): 0;
; return { success: true, memory: {
      , total: parse_int (mem_total), used: parse_int (mem_used), free: parse_int (mem_free),
    usage_percent: Math.round ((parse_int (mem_used) / parse_int (mem_total)) * 100);
    usage_percent: parse_int (disk_usage)} cpu: {,
    usage_percent: Math.round (cpu_usage)}}} catch (error) { return { success: false, error: error.message, memory: null, disk: null, cpu: null}}}
; async checkProcessHealth () { try { this.log ('🔄 Checking process health...');
; const pm2List = exec_sync ('pm2 list --json', { encoding: 'utf8' }); const processes = JSON.parse (pm2List);
; const process_health = { total: processes.length, online: 0, stopped: 0, errored: 0, processes: []}
; processes.for_each (proc = > { const status = proc.pm2_env?.status || 'unknown'; process_health.processes.push ({ name: proc.name, status: status, memory: proc.monit?.memory || 0, cpu: proc.monit?.cpu || 0, uptime: proc.pm2_env?.uptime || 0});
; // Check condition;
if (process_health.online++) {
  $2;
} else // Check condition;
if (process_health.stopped++) {
} else if (process_health.errored++})) {
} return { success: true,
    health: process_health}} catch (error) { return { success: false, error: error.message, health: null}}}
; async checkApplicationHealth () { try { this.log ('🌐 Checking application health...');
; const health_checks = [];
; // Check if the application is running; try { const pm2List = exec_sync ('pm2 list', { encoding: 'utf8' }); const hasRunningApp = pm2List.includes ('bolt - zion - app') && pm2List.includes ('online');
; health_checks.push ({ name: 'PM2 App Status', status: hasRunningApp ? 'healthy': 'unhealthy', message: hasRunningApp ? 'Application is running': 'Application is not running'})} catch (error) { health_checks.push ({ name: 'PM2 App Status', status: 'error', message: 'Could not check PM2 status'})}
; // Check if build files exist; const build_exists = fs.exists_sync ('dist') || fs.exists_sync ('.next'); health_checks.push ({ name: 'Build Files', status: build_exists ? 'healthy': 'unhealthy', message: build_exists ? 'Build files exist': 'Build files missing'});
; // Check if package.json exists and is valid; try { const package_json = JSON.parse (fs.readFileSync ('package.json', 'utf8')); health_checks.push ({ name: 'Package.json', status: 'healthy', message: 'Package.json is valid'})} catch (error) { health_checks.push ({ name: 'Package.json', status: 'unhealthy', message: 'Package.json is invalid or missing'})}
; return { success: true,
    checks: health_checks}} catch (error) { return { success: false, error: error.message, checks: []}}}
; async checkLogHealth () { try { this.log ('📝 Checking log health...');
; const logs_dir = path.join (this.project_root, 'logs / pm2'); const log_files = [];
; if () {) {
} const files = fs.readdir_sync (logs_dir); files.for_each (file = > { if () {) {
} const file_path = path.join (logs_dir, file); const stats = fs.stat_sync (file_path); log_files.push ({ name: file, size: stats.size, sizeMB: Math.round (stats.size / (1024 * 1024) * 100) / 100,
    last_modified: stats.mtime})}})}
; return { success: true, log_files: log_files, total_size: log_files.reduce ((sum, file) = > sum + file.size, 0)}} catch (error) { return { success: false, error: error.message, log_files: [],
    total_size: 0}}}
; async generate_report (system_info, process_info, app_info, log_info) { const report = { timestamp: new Date ().toISOString (), summary: {
      , system_health: 'unknown', process_health: 'unknown', application_health: 'unknown', log_health: 'unknown', overall_health: 'unknown',
    health_score: 0;
    details: {, system: system_info, processes: process_info, application: app_info, logs: log_info} recommendations: []}
; // Calculate health scores; let total_score = 0; let max_score = 0;
; // System health; // Check condition;
} fs.mkdir_sync (report_dir, { recursive: true })}`;
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}`;
; async run () { this.log ('🏥 Starting Health Monitor...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Run all health checks; const system_info = await this.checkSystemResources (); const process_info = await this.checkProcessHealth (); const app_info = await this.checkApplicationHealth (); const log_info = await this.checkLogHealth ();
; // Generate report; this.log ('📊 Generating health report...'); const report = await this.generate_report (system_info, process_info, app_info, log_info);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;`;
; // Log summary; this.log ('\n📊 Health Monitor Summary: '); this.log (`System: ${report.summary.system_health}`); this.log (`Processes: ${report.summary.process_health}`); this.log (`Application: ${report.summary.application_health}`); this.log (`Logs: ${report.summary.log_health}`); this.log (`Overall: ${report.summary.overall_health}`); this.log (`Health Score: ${report.summary.health_score}/100`); this.log (`Duration: ${duration}ms`);
  $2;`;
} this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)})} else { this.log ('\n✨ All systems are healthy!')}`;
} catch (error) { this.log (`❌ Error running health monitor: ${error.message}`); process.exit (1)}}}
;






=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
        }
      } catch (error) {}
        this.log(`Failed to get system processes: ${error.message}`, 'WARNING');',
      }
      return processes;
    } catch (error) {}
      this.error(`Failed to get process info: ${error.message}`);,
      return [];,
    }
  }
  async getResourceUsage() {}
    try {}
      const totalMem = os.totalmem();,
      const freeMem = os.freemem();,
      const usedMem = totalMem - freeMem;
      const memoryUsage = (usedMem / totalMem) * 100;
      // Get CPU usage (simplified);
      const cpus = os.cpus();
      let totalIdle = 0;
      let totalTick = 0;
      for (const cpu of, cpus) {}
        for (const type in cpu.times) {}
          totalTick += cpu.times[type];,
        }
        totalIdle += cpu.times.idle;,
      }
      const cpuUsage = 100 - ~~(100 * totalIdle / totalTick);
      // Get disk usage;
      const diskUsage = await this.getDiskUsage();
      return {}
        memoryUsage: memoryUsage,
        memoryTotal: totalMem,
        memoryUsed: usedMem,
        memoryFree: freeMem,
        cpuUsage: cpuUsage,
        diskUsage: diskUsage,
        loadAverage: os.loadavg(),
      };,
    } catch (error) {}
      this.error(`Failed to get resource usage: ${error.message}`);,
      return {}
        memoryUsage: 0,
        cpuUsage: 0,
        diskUsage: 0,
      };,
    }
  }
  async getDiskUsage() {}
    try {}
      const dfOutput = execSync('df -h /', { encoding: 'utf8' });',
      const lines = dfOutput.split('\n');';,
      const dataLine = lines[1]; // Skip header;,
      if (dataLine) {}
        const parts = dataLine.trim().split(/\s+/);,
        const usageStr = parts[4]; // e.g., "45%"",
        return parseInt(usageStr.replace('%', ''));',
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
module.exports = HealthMonitor;
=======
module.exports = HealthMonitor;
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
