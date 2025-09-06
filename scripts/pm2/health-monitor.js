}}; async checkSystemResources() {try {; this.log('💻 Checking system resources...'); const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }); // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3]; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0'; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0; return {success: true, memory: {
      , total: parseInt(memTotal), used: parseInt(memUsed), free: parseInt(memFree)
    usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
    }
    disk: {
    usagePercent: parseInt(diskUsage)}; cpu: {
    usagePercent: Math.round(cpuUsage)}}} catch (error) {return {; success: false, error: error.message, memory: null, disk: null, cpu: null}}}; async checkProcessHealth() {try {; this.log('🔄 Checking process health...'); const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }); const processes = JSON.parse(pm2List); const processHealth = {total: processes.length, online: 0, stopped: 0, errored: 0, processes: []}; processes.forEach(proc = > {const status = proc.pm2_env?.status |'unknown'; processHealth.processes.push({; name: proc.name, status: status, memory: proc.monit?.memory |0, cpu: proc.monit?.cpu |0, uptime: proc.pm2_env?.uptime |0}); if (status = = = 'online') processHealth.online++; else if (status = = = 'stopped') processHealth.stopped++; else if (status = = = 'errored') processHealth.errored++}); return {success: true
    health: processHealth}} catch (error) {return {; success: false, error: error.message, health: null}}}; async checkApplicationHealth() {try {; this.log('🌐 Checking application health...'); const healthChecks = []; // Check if the application is running; try {; const pm2List = execSync('pm2 list', { encoding: 'utf8' }); const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'); healthChecks.push({name: 'PM2 App Status', status: hasRunningApp ? 'healthy': 'unhealthy', message: hasRunningApp ? 'Application is running': 'Application is not running'})} catch (error) {healthChecks.push({; name: 'PM2 App Status', status: 'error', message: 'Could not check PM2 status'})}; // Check if build files exist; const buildExists = fs.existsSync('dist') |fs.existsSync('.next'); healthChecks.push({name: 'Build Files', status: buildExists ? 'healthy': 'unhealthy', message: buildExists ? 'Build files exist': 'Build files missing'}); // Check if package.json exists and is valid; try {const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); healthChecks.push({; name: 'Package.json', status: 'healthy', message: 'Package.json is valid'})} catch (error) {healthChecks.push({; name: 'Package.json', status: 'unhealthy', message: 'Package.json is invalid or missing'})}; return {success: true
    checks: healthChecks}} catch (error) {return {; success: false, error: error.message, checks: []}}}; async checkLogHealth() {try {; this.log('📝 Checking log health...'); const logsDir = path.join(this.projectRoot, 'logs/pm2'); const logFiles = []; if (fs.existsSync(logsDir)) {; const files = fs.readdirSync(logsDir); files.forEach(file = > {; if (file.endsWith('.log')) {; const filePath = path.join(logsDir, file); const stats = fs.statSync(filePath); logFiles.push({; name: file, size: stats.size, sizeMB: Math.round(stats.size / (1024 * 1024) * 100) / 100
    lastModified: stats.mtime})}})}; return {success: true, logFiles: logFiles, totalSize: logFiles.reduce((sum, file) = > sum + file.size, 0)}} catch (error) {return {; success: false, error: error.message, logFiles: []
    totalSize: 0}}}; async generateReport(systemInfo, processInfo, appInfo, logInfo) {const report = {; timestamp: new Date().toISOString(), summary: {
      , systemHealth: 'unknown', processHealth: 'unknown', applicationHealth: 'unknown', logHealth: 'unknown', overallHealth: 'unknown'
    healthScore: 0
    }
    details: {, system: systemInfo, processes: processInfo, application: appInfo, logs: logInfo}; recommendations: []}; // Calculate health scores; let totalScore = 0; let maxScore = 0; // System health; if (systemInfo.success) {const memUsage = systemInfo.memory?.usagePercent |0; const diskUsage = systemInfo.disk?.usagePercent |0; const cpuUsage = systemInfo.cpu?.usagePercent |0; if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {; report.summary.systemHealth = 'healthy'; totalScore + = 25} else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {report.summary.systemHealth = 'warning'; totalScore + = 15} else {report.summary.systemHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25; // Process health; if (processInfo.success && processInfo.health) {const health = processInfo.health; if (health.errored = = = 0 && health.stopped = = = 0) {; report.summary.processHealth = 'healthy'; totalScore + = 25} else if (health.errored = = = 0) {report.summary.processHealth = 'warning'; totalScore + = 15} else {report.summary.processHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25; // Application health; if (appInfo.success) {const healthyChecks = appInfo.checks.filter(check = > check.status = = = 'healthy').length; const totalChecks = appInfo.checks.length; if (healthyChecks = = = totalChecks) {; report.summary.applicationHealth = 'healthy'; totalScore + = 25} else if (healthyChecks > = totalChecks * 0.5) {report.summary.applicationHealth = 'warning'; totalScore + = 15} else {report.summary.applicationHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25; // Log health; if (logInfo.success) {const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB; if (totalLogSize < 100) {; report.summary.logHealth = 'healthy'; totalScore + = 25} else if (totalLogSize < 500) {report.summary.logHealth = 'warning'; totalScore + = 15} else {report.summary.logHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25; report.summary.healthScore = Math.round((totalScore / maxScore) * 100); // Determine overall health; if (report.summary.healthScore > = 80) {report.summary.overallHealth = 'healthy'} else if (report.summary.healthScore > = 60) {report.summary.overallHealth = 'warning'} else {report.summary.overallHealth = 'unhealthy'}; // Generate recommendations; if (systemInfo.success) {if (systemInfo.memory?.usagePercent > 80) {; report.recommendations.push({; priority: 'high', message: 'High memory usage detected', action: 'Consider restarting processes or increasing memory'})}; if (systemInfo.disk?.usagePercent > 80) {report.recommendations.push({; priority: 'high', message: 'High disk usage detected', action: 'Clean up logs and temporary files'})}}; if (processInfo.success && processInfo.health?.errored > 0) {report.recommendations.push({; priority: 'critical', message: 'Errored processes detected', action: 'Restart errored processes and investigate logs'})}; if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {report.recommendations.push({; priority: 'medium', message: 'Large log files detected', action: 'Implement log rotation or cleanup'})}; return report}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async run() {this.log('🏥 Starting Health Monitor...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Run all health checks; const systemInfo = await this.checkSystemResources(); const processInfo = await this.checkProcessHealth(); const appInfo = await this.checkApplicationHealth(); const logInfo = await this.checkLogHealth(); // Generate report; this.log('📊 Generating health report...'); const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Health Monitor Summary: '); this.log(`System: ${report.summary.systemHealth}`); this.log(`Processes: ${report.summary.processHealth}`); this.log(`Application: ${report.summary.applicationHealth}`); this.log(`Logs: ${report.summary.logHealth}`); this.log(`Overall: ${report.summary.overallHealth}`); this.log(`Health Score: ${report.summary.healthScore}/100`); this.log(`Duration: ${duration}ms`); if (report.recommendations.length > 0) {this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {this.log('\n✨ All systems are healthy!')}
} catch (error) {this.log(`❌ Error running health monitor: ${error.message}`); process.exit(1)}}}
// Run the health monitor;
const healthMonitor = new HealthMonitor();
healthMonitor.run().catch(error = > {; process.exit(1)});
};
};
;
  async checkSystemResources() {;
    try {;
      this.log('💻 Checking system resources...');
;
      const memInfo = execSync('free -m', { encoding: 'utf8' });
      const diskInfo = execSync('df -h', { encoding: 'utf8' });
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
;
      // Parse memory info;
      const memLines = memInfo.split('\n');
      const memTotal = memLines[1].split(/\s+/)[1];
      const memUsed = memLines[1].split(/\s+/)[2];
      const memFree = memLines[1].split(/\s+/)[3];
;
      // Parse disk info;
      const diskLines = diskInfo.split('\n');
      const rootDisk = diskLines.find(line => line.includes('/'));
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', '') : '0';
;
      // Parse CPU info;
      const cpuUsage = cpuInfo.includes('id') ?;
        (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())) : 0;
;
      return {_;
        success: true,
        memory: {;
          total: parseInt(memTotal);
          used: parseInt(memUsed);
          free: parseInt(memFree);
          usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100);
        ;
        disk: {;
          usagePercent: parseInt(diskUsage);
        ;
        cpu: {;
          usagePercent: Math.round(cpuUsage)
ursor/integrate-build-improve-and-re-verify-8f7d
    
ursor/fix-syntax-push-and-merge-to-main-40de
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
    _console.log(logMessage.trim());
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
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

=======
    } catch (error) {_;
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
module.exports = HealthMonitor;
ursor/add-new-services-and-deploy-updates-0462
origin/automation-improvements-final
}};
; async checkSystemResources() {; try {; this && this.log('💻 Checking system resources...');
; const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });

}}; async checkSystemResources() {try {; this.log('💻 Checking system resources...'); const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }); // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3]; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0'; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0; return {success: true, memory: {
      , total: parseInt(memTotal), used: parseInt(memUsed), free: parseInt(memFree)

=======
; // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3];
; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0';
; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0;
; return {; success: true, memory: {
      , total: parseInt(memTotal), used: parseInt(memUsed), free: parseInt(memFree),
}}; async checkSystemResources() {try {; this.log('💻 Checking system resources...'); const memInfo = execSync('free -m', { encoding: 'utf8' }); const diskInfo = execSync('df -h', { encoding: 'utf8' }); const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }); // Parse memory info; const memLines = memInfo.split('\n'); const memTotal = memLines[1].split(/\s+/)[1]; const memUsed = memLines[1].split(/\s+/)[2]; const memFree = memLines[1].split(/\s+/)[3]; // Parse disk info; const diskLines = diskInfo.split('\n'); const rootDisk = diskLines.find(line = > line.includes('/')); const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', ''): '0'; // Parse CPU info; const cpuUsage = cpuInfo.includes('id') ?; (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())): 0; return {success: true, memory: {
      , total: parseInt(memTotal), used: parseInt(memUsed), free: parseInt(memFree)
    usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)
    },
    disk: {,
    usagePercent: parseInt(diskUsage)}; cpu: {,
    usagePercent: Math.round(cpuUsage)}}} catch (error) {; return {; success: false, error: error.message, memory: null, disk: null, cpu: null}}};
; return {; success: true; memory: {; total: parseInt(memTotal); used: parseInt(memUsed); free: parseInt(memFree); usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100)}; disk: {; usagePercent: parseInt(diskUsage)}; cpu: {; usagePercent: Math.round(cpuUsage)}}} catch (error) {; return {; success: false; error: error.message; memory: null; disk: null; cpu: null}}};
; async checkProcessHealth() {; try {; this.log('🔄 Checking process health...');
; const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }); const processes = JSON.parse(pm2List);
; const processHealth = {; total: processes.length; online: 0; stopped: 0; errored: 0; processes: []};
; processes.forEach(proc = > {; const status = proc.pm2_env?.status || 'unknown'; processHealth.processes.push({; name: proc.name; status: status; memory: proc.monit?.memory || 0; cpu: proc.monit?.cpu || 0; uptime: proc.pm2_env?.uptime || 0});
; if (status = = = 'online') processHealth.online++; else if (status = = = 'stopped') processHealth.stopped++; else if (status = = = 'errored') processHealth.errored++});
; return {; success: true; health: processHealth}} catch (error) {; return {; success: false; error: error.message; health: null}}};
; async checkApplicationHealth() {; try {; this.log('🌐 Checking application health...');
; const healthChecks = [];
; // Check if the application is running; try {; const pm2List = execSync('pm2 list', { encoding: 'utf8' }); const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online');
; healthChecks.push({; name: 'PM2 App Status'; status: hasRunningApp ? 'healthy': 'unhealthy'; message: hasRunningApp ? 'Application is running': 'Application is not running'})} catch (error) {; healthChecks.push({; name: 'PM2 App Status'; status: 'error'; message: 'Could not check PM2 status'})};
; // Check if build files exist; const buildExists = fs.existsSync('dist') || fs.existsSync('.next'); healthChecks.push({; name: 'Build Files'; status: buildExists ? 'healthy': 'unhealthy'; message: buildExists ? 'Build files exist': 'Build files missing'});
; // Check if package.json exists and is valid; try {; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')); healthChecks.push({; name: 'Package.json'; status: 'healthy'; message: 'Package.json is valid'})} catch (error) {; healthChecks.push({; name: 'Package.json'; status: 'unhealthy'; message: 'Package.json is invalid or missing'})};
; return {; success: true; checks: healthChecks}} catch (error) {; return {; success: false; error: error.message; checks: []}}};
; async checkLogHealth() {; try {; this.log('📝 Checking log health...');
; const logsDir = path.join(this.projectRoot, 'logs/pm2'); const logFiles = [];
; if (fs.existsSync(logsDir)) {; const files = fs.readdirSync(logsDir); files.forEach(file = > {; if (file.endsWith('.log')) {; const filePath = path.join(logsDir, file); const stats = fs.statSync(filePath); logFiles.push({; name: file; size: stats.size; sizeMB: Math.round(stats.size / (1024 * 1024) * 100) / 100; lastModified: stats.mtime})}})};
; return {; success: true; logFiles: logFiles; totalSize: logFiles.reduce((sum, file) = > sum + file.size, 0)}} catch (error) {; return {; success: false; error: error.message; logFiles: []; totalSize: 0}}};
; async generateReport(systemInfo, processInfo, appInfo, logInfo) {; const report = {; timestamp: new Date().toISOString(); summary: {; systemHealth: 'unknown'; processHealth: 'unknown'; applicationHealth: 'unknown'; logHealth: 'unknown'; overallHealth: 'unknown'; healthScore: 0}; details: {; system: systemInfo; processes: processInfo; application: appInfo; logs: logInfo}; recommendations: []};
; // Calculate health scores; let totalScore = 0; let maxScore = 0;
; // System health; if (systemInfo.success) {; const memUsage = systemInfo.memory?.usagePercent || 0; const diskUsage = systemInfo.disk?.usagePercent || 0; const cpuUsage = systemInfo.cpu?.usagePercent || 0;
; if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {; report.summary.systemHealth = 'healthy'; totalScore + = 25} else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {; report.summary.systemHealth = 'warning'; totalScore + = 15} else {; report.summary.systemHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Process health; if (processInfo.success && processInfo.health) {; const health = processInfo.health; if (health.errored = = = 0 && health.stopped = = = 0) {; report.summary.processHealth = 'healthy'; totalScore + = 25} else if (health.errored = = = 0) {; report.summary.processHealth = 'warning'; totalScore + = 15} else {; report.summary.processHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Application health; if (appInfo.success) {; const healthyChecks = appInfo.checks.filter(check = > check.status = = = 'healthy').length; const totalChecks = appInfo.checks.length;
; if (healthyChecks = = = totalChecks) {; report.summary.applicationHealth = 'healthy'; totalScore + = 25} else if (healthyChecks > = totalChecks * 0.5) {; report.summary.applicationHealth = 'warning'; totalScore + = 15} else {; report.summary.applicationHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; // Log health; if (logInfo.success) {; const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB; if (totalLogSize < 100) {; report.summary.logHealth = 'healthy'; totalScore + = 25} else if (totalLogSize < 500) {; report.summary.logHealth = 'warning'; totalScore + = 15} else {; report.summary.logHealth = 'unhealthy'; totalScore + = 5}}; maxScore + = 25;
; report.summary.healthScore = Math.round((totalScore / maxScore) * 100);
; // Determine overall health; if (report.summary.healthScore > = 80) {; report.summary.overallHealth = 'healthy'} else if (report.summary.healthScore > = 60) {; report.summary.overallHealth = 'warning'} else {; report.summary.overallHealth = 'unhealthy'};
; // Generate recommendations; if (systemInfo.success) {; if (systemInfo.memory?.usagePercent > 80) {; report.recommendations.push({; priority: 'high'; message: 'High memory usage detected'; action: 'Consider restarting processes or increasing memory'})}; if (systemInfo.disk?.usagePercent > 80) {; report.recommendations.push({; priority: 'high'; message: 'High disk usage detected'; action: 'Clean up logs and temporary files'})}};
; if (processInfo.success && processInfo.health?.errored > 0) {; report.recommendations.push({; priority: 'critical'; message: 'Errored processes detected'; action: 'Restart errored processes and investigate logs'})};
; if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {; report.recommendations.push({; priority: 'medium'; message: 'Large log files detected'; action: 'Implement log rotation or cleanup'})};
; return report};
; async saveReport(report) {; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {; this.log(`Error saving report: ${error.message}`)}};
; async run() {; this.log('🏥 Starting Health Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })};
; // Run all health checks; const systemInfo = await this.checkSystemResources(); const processInfo = await this.checkProcessHealth(); const appInfo = await this.checkApplicationHealth(); const logInfo = await this.checkLogHealth();
; // Generate report; this.log('📊 Generating health report...'); const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Health Monitor Summary: '); this.log(`System: ${report.summary.systemHealth}`); this.log(`Processes: ${report.summary.processHealth}`); this.log(`Application: ${report.summary.applicationHealth}`); this.log(`Logs: ${report.summary.logHealth}`); this.log(`Overall: ${report.summary.overallHealth}`); this.log(`Health Score: ${report.summary.healthScore}/100`); this.log(`Duration: ${duration}ms`);
; if (report.recommendations.length > 0) {; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)})} else {; this.log('\n✨ All systems are healthy!')};
} catch (error) {; this.log(`❌ Error running health monitor: ${error.message}`); process.exit(1)}}};
;
// Run the health monitor;
const healthMonitor = new HealthMonitor();


      };
;
      return {;
        success: true, logFiles: logFiles,
        totalSize: logFiles.reduce((sum, file) => sum + file.size, 0);
      };
    } catch (error) {;
      return {;
        success: false, error: error.message,
        logFiles: [], totalSize: 0,
      ;
};
        success: false,
        error: error.message;
        logFiles: [];
        totalSize: 0
      }
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
};
;
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {;
    const report = {;
      timestamp: new Date().toISOString(), summary: {,
        systemHealth: 'unknown', processHealth: 'unknown',
        applicationHealth: 'unknown', logHealth: 'unknown',
        overallHealth: 'unknown', healthScore: 0,
      ;
      details: {, system: systemInfo,
        processes: processInfo, application: appInfo,
        logs: logInfo, ,
      recommendations: [], ,
;
    // Calculate health scores;
    let totalScore = 0;
    let maxScore = 0;
;
    // System health;
    if (systemInfo.success) {;
      const memUsage = systemInfo.memory?.usagePercent || 0;
      const diskUsage = systemInfo.disk?.usagePercent || 0;
      const cpuUsage = systemInfo.cpu?.usagePercent || 0;
;
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {;
        report.summary.systemHealth = 'healthy';
        totalScore += 25;
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {;
        report.summary.systemHealth = 'warning';
        totalScore += 15;
      } else {;
        report.summary.systemHealth = 'unhealthy';
        totalScore += 5;
      };
};
    maxScore += 25;
;
    // Process health;
    if (processInfo.success && processInfo.health) {;
      const health = processInfo.health;
      if (health.errored === 0 && health.stopped === 0) {;
        report.summary.processHealth = 'healthy';
        totalScore += 25;
      } else if (health.errored === 0) {;
        report.summary.processHealth = 'warning';
        totalScore += 15;
      } else {;
        report.summary.processHealth = 'unhealthy';
        totalScore += 5;
      };
};
    maxScore += 25;
;
    // Application health;
    if (appInfo.success) {;
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length;
      const totalChecks = appInfo.checks.length;
;
      if (healthyChecks === totalChecks) {;
        report.summary.applicationHealth = 'healthy';
        totalScore += 25;
      } else if (healthyChecks >= totalChecks * 0.5) {;
        report.summary.applicationHealth = 'warning';
        totalScore += 15;
      } else {;
        report.summary.applicationHealth = 'unhealthy';
        totalScore += 5;
      };
};
    maxScore += 25;
;
    // Log health;
    if (logInfo.success) {;
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB;
      if (totalLogSize < 100) {;
        report.summary.logHealth = 'healthy';
        totalScore += 25;
      } else if (totalLogSize < 500) {;
        report.summary.logHealth = 'warning';
        totalScore += 15;
      } else {;
        report.summary.logHealth = 'unhealthy';
        totalScore += 5;
      };
};
    maxScore += 25;
;
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100);
;
    // Determine overall health;
    if (report.summary.healthScore >= 80) {;
      report.summary.overallHealth = 'healthy';
    } else if (report.summary.healthScore >= 60) {;
      report.summary.overallHealth = 'warning';
    } else {;
      report.summary.overallHealth = 'unhealthy';
};
;
    // Generate recommendations;
    if (systemInfo.success) {;
      if (systemInfo.memory?.usagePercent > 80) {;
        report.recommendations.push({;
          priority: 'high', message: 'High memory usage detected',
          action: 'Consider restarting processes or increasing memory',
        });
      };
      if (systemInfo.disk?.usagePercent > 80) {;
        report.recommendations.push({;
          priority: 'high', message: 'High disk usage detected',
          action: 'Clean up logs and temporary files',
        });
      };
};
;
    if (processInfo.success && processInfo.health?.errored > 0) {;
      report.recommendations.push({;
        priority: 'critical', message: 'Errored processes detected',
        action: 'Restart errored processes and investigate logs',
      });
};
;
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {;
      report.recommendations.push({;
        priority: 'medium', message: 'Large log files detected',
        action: 'Implement log rotation or cleanup',
      });
};
;
    return report;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async run() {;
    this.log('🏥 Starting Health Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
;
      // Run all health checks;
      const systemInfo = await this.checkSystemResources();
      const processInfo = await this.checkProcessHealth();
      const appInfo = await this.checkApplicationHealth();
      const logInfo = await this.checkLogHealth();
;
      // Generate report;
      this.log('📊 Generating health report...');
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Health Monitor Summary: '),
      this.log(`System: ${report.summary.systemHealth}`);
      this.log(`Processes: ${report.summary.processHealth}`);
      this.log(`Application: ${report.summary.applicationHealth}`);
      this.log(`Logs: ${report.summary.logHealth}`);
      this.log(`Overall: ${report.summary.overallHealth}`);
      this.log(`Health Score: ${report.summary.healthScore}/100`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.recommendations.length > 0) {;
        this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {;
        this.log('\n✨ All systems are healthy!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running health monitor: ${error.message}`);
      process.exit(1);
};
};
};
;
// Run the health monitor;
const healthMonitor = new HealthMonitor();
healthMonitor.run().catch(error => {;
  process.exit(1);
});
    };
  };
,
  async checkSystemResources() {,
    try {,
      this.log('💻 Checking system resources...'),
,
      const memInfo = execSync('free -m', { encoding: 'utf8' }),
      const diskInfo = execSync('df -h', { encoding: 'utf8' }),
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' }),
,
      // Parse memory info,
      const memLines = memInfo.split('\n'),
      const memTotal = memLines[1].split(/\s+/)[1],
      const memUsed = memLines[1].split(/\s+/)[2],
      const memFree = memLines[1].split(/\s+/)[3],
,
      // Parse disk info,
      const diskLines = diskInfo.split('\n'),
      const rootDisk = diskLines.find(line => line.includes('/')),
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', '') : '0',
,
      // Parse CPU info,
      const cpuUsage = cpuInfo.includes('id') ?,
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', '').trim())) : 0,
,
      return {,
        success: true,
        memory: {,
          total: parseInt(memTotal),
          used: parseInt(memUsed),
          free: parseInt(memFree),
          usagePercent: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100),
        },
        disk: {,
          usagePercent: parseInt(diskUsage),
        },
        cpu: {,
          usagePercent: Math.round(cpuUsage),
        };
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        memory: null,
        disk: null,
        cpu: null,
      };
    };
  };
,
  async checkProcessHealth() {,
    try {,
      this.log('🔄 Checking process health...'),
,
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }),
      const processes = JSON.parse(pm2List),
,
      const processHealth = {,
        total: processes.length,
        online: 0,
        stopped: 0,
        errored: 0,
        processes: [],
      };
,
      processes.forEach(proc => {,
        const status = proc.pm2_env?.status || 'unknown',
        processHealth.processes.push({,
          name: proc.name,
          status: status,
          memory: proc.monit?.memory || 0,
          cpu: proc.monit?.cpu || 0,
          uptime: proc.pm2_env?.uptime || 0,
        }),
,
        if (status === 'online') processHealth.online++,
        else if (status === 'stopped') processHealth.stopped++,
        else if (status === 'errored') processHealth.errored++,
      }),
,
      return {,
        success: true,
        health: processHealth,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        health: null,
      };
    };
  };
,
  async checkApplicationHealth() {,
    try {,
      this.log('🌐 Checking application health...'),
,
      const healthChecks = [],
,
      // Check if the application is running,
      try {,
        const pm2List = execSync('pm2 list', { encoding: 'utf8' }),
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),
,
        healthChecks.push({,
          name: 'PM2 App Status',
          status: hasRunningApp ? 'healthy' : 'unhealthy',
          message: hasRunningApp ? 'Application is running' : 'Application is not running',
        }),
      } catch (error) {,
        healthChecks.push({,
          name: 'PM2 App Status',
          status: 'error',
          message: 'Could not check PM2 status',
        }),
      };
,
      // Check if build files exist,
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),
      healthChecks.push({,
        name: 'Build Files',
        status: buildExists ? 'healthy' : 'unhealthy',
        message: buildExists ? 'Build files exist' : 'Build files missing',
      }),
,
      // Check if package.json exists and is valid,
      try {,
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
        healthChecks.push({,
          name: 'Package.json',
          status: 'healthy',
          message: 'Package.json is valid',
        }),
      } catch (error) {,
        healthChecks.push({,
          name: 'Package.json',
          status: 'unhealthy',
          message: 'Package.json is invalid or missing',
        }),
      };
,
      return {,
        success: true,
        checks: healthChecks,
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        checks: [],
      };
    };
  };
,
  async checkLogHealth() {,
    try {,
      this.log('📝 Checking log health...'),
,
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),
      const logFiles = [],
,
      if (fs.existsSync(logsDir)) {,
        const files = fs.readdirSync(logsDir),
        files.forEach(file => {,
          if (file.endsWith('.log')) {,
            const filePath = path.join(logsDir, file),
            const stats = fs.statSync(filePath),
            logFiles.push({,
              name: file,
              size: stats.size,
              sizeMB: Math.round(stats.size / (1024 * 1024) * 100) / 100,
              lastModified: stats.mtime,
            }),
          };
        }),
      };
,
      return {,
        success: true,
        logFiles: logFiles,
        totalSize: logFiles.reduce((sum, file) => sum + file.size, 0),
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        logFiles: [],
        totalSize: 0,
      };
    };
  };
,
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        systemHealth: 'unknown',
        processHealth: 'unknown',
        applicationHealth: 'unknown',
        logHealth: 'unknown',
        overallHealth: 'unknown',
        healthScore: 0,
      },
      details: {,
        system: systemInfo,
        processes: processInfo,
        application: appInfo,
        logs: logInfo,
      },
      recommendations: [],
    };
,
    // Calculate health scores,
    let totalScore = 0,
    let maxScore = 0,
,
    // System health,
    if (systemInfo.success) {,
      const memUsage = systemInfo.memory?.usagePercent || 0,
      const diskUsage = systemInfo.disk?.usagePercent || 0,
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,
,
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,
        report.summary.systemHealth = 'healthy',
        totalScore += 25,
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,
        report.summary.systemHealth = 'warning',
        totalScore += 15,
      } else {,
        report.summary.systemHealth = 'unhealthy',
        totalScore += 5,
      };
    };
    maxScore += 25,
,
    // Process health,
    if (processInfo.success && processInfo.health) {,
      const health = processInfo.health,
      if (health.errored === 0 && health.stopped === 0) {,
        report.summary.processHealth = 'healthy',
        totalScore += 25,
      } else if (health.errored === 0) {,
        report.summary.processHealth = 'warning',
        totalScore += 15,
      } else {,
        report.summary.processHealth = 'unhealthy',
        totalScore += 5,
      };
    };
    maxScore += 25,
,
    // Application health,
    if (appInfo.success) {,
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,
      const totalChecks = appInfo.checks.length,
,
      if (healthyChecks === totalChecks) {,
        report.summary.applicationHealth = 'healthy',
        totalScore += 25,
      } else if (healthyChecks >= totalChecks * 0.5) {,
        report.summary.applicationHealth = 'warning',
        totalScore += 15,
      } else {,
        report.summary.applicationHealth = 'unhealthy',
        totalScore += 5,
      };
    };
    maxScore += 25,
,
    // Log health,
    if (logInfo.success) {,
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,
      if (totalLogSize < 100) {,
        report.summary.logHealth = 'healthy',
        totalScore += 25,
      } else if (totalLogSize < 500) {,
        report.summary.logHealth = 'warning',
        totalScore += 15,
      } else {,
        report.summary.logHealth = 'unhealthy',
        totalScore += 5,
      };
    };
    maxScore += 25,
,
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),
,
    // Determine overall health,
    if (report.summary.healthScore >= 80) {,
      report.summary.overallHealth = 'healthy',
    } else if (report.summary.healthScore >= 60) {,
      report.summary.overallHealth = 'warning',
    } else {,
      report.summary.overallHealth = 'unhealthy',
    };
,
    // Generate recommendations,
    if (systemInfo.success) {,
      if (systemInfo.memory?.usagePercent > 80) {,
        report.recommendations.push({,
          priority: 'high',
          message: 'High memory usage detected',
          action: 'Consider restarting processes or increasing memory',
        }),
      };
      if (systemInfo.disk?.usagePercent > 80) {,
        report.recommendations.push({,
          priority: 'high',
          message: 'High disk usage detected',
          action: 'Clean up logs and temporary files',
        }),
      };
    };
,
    if (processInfo.success && processInfo.health?.errored > 0) {,
      report.recommendations.push({,
        priority: 'critical',
        message: 'Errored processes detected',
        action: 'Restart errored processes and investigate logs',
      }),
    };
,
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,
      report.recommendations.push({,
        priority: 'medium',
        message: 'Large log files detected',
        action: 'Implement log rotation or cleanup',
      }),
    };
,
    return report,
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
    };
  };
,
  async run() {,
    this.log('🏥 Starting Health Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true }),
      };
,
      // Run all health checks,
      const systemInfo = await this.checkSystemResources(),
      const processInfo = await this.checkProcessHealth(),
      const appInfo = await this.checkApplicationHealth(),
      const logInfo = await this.checkLogHealth(),
,
      // Generate report,
      this.log('📊 Generating health report...'),
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Health Monitor Summary: '),
      this.log(`System: ${report.summary.systemHealth}`),
      this.log(`Processes: ${report.summary.processHealth}`),
      this.log(`Application: ${report.summary.applicationHealth}`),
      this.log(`Logs: ${report.summary.logHealth}`),
      this.log(`Overall: ${report.summary.overallHealth}`),
      this.log(`Health Score: ${report.summary.healthScore}/100`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.recommendations.length > 0) {,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`),
        }),
      } else {,
        this.log('\n✨ All systems are healthy!'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running health monitor: ${error.message}`),
      process.exit(1),
    };
  };
};
,
// Run the health monitor,
const healthMonitor = new HealthMonitor(),
healthMonitor.run().catch(error => {,
  process.exit(1),
}),
const healthMonitor = new HealthMonitor();
healthMonitor.run().catch(error => {_;
  process.exit(1)});
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

module.exports = HealthMonitor;
module.exports = HealthMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/automate-test-improve-and-merge-code-8ee2
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
healthMonitor.run().catch(error = > {process.exit(1)});
origin/main
origin/automation-improvements-final
healthMonitor.run().catch(error = > {process.exit(1)});
}
},;
,;
  async checkSystemResources() {,;
    try {,;
      this.log('💻 Checking system resources...'),;
,;
      const memInfo = execSync('free -m', { encodin: g: 'utf8' }),;
      const diskInfo = execSync('df -h', { encodin: g: 'utf8' }),;
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encodin: g: 'utf8' }),;
,;
      // Parse memory info,;
      const memLines = memInfo.split('\n'),;
      const memTotal = memLines[1].split(/\s+/)[1],;
      const memUsed = memLines[1].split(/\s+/)[2],;
      const memFree = memLines[1].split(/\s+/)[3],;
,;
      // Parse disk info,;
      const diskLines = diskInfo.split('\n'),;
      const rootDisk = diskLines.find(line => line.includes('/')),;
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', '') : '0',;
,;
      // Parse CPU info,;
      const cpuUsage = cpuInfo.includes('id') ?,;
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', '').trim())) : 0,;
,;
      return {,;
        succes: s: true,;
        memor: y: {,;
          tota: l: parseInt(memTotal),;
          use: d: parseInt(memUsed),;
          fre: e: parseInt(memFree),;
          usagePercen: t: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100),;
        ,;
        dis: k: {,;
          usagePercen: t: parseInt(diskUsage),;
        ,;
        cp: u: {,;
          usagePercen: t: Math.round(cpuUsage);
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        memor: y: null,;
        dis: k: null,;
        cp: u: null;
}
},;
,;
  async checkProcessHealth() {,;
    try {,;
      this.log('🔄 Checking process health...'),;
,;
      const pm2List = execSync('pm2 list --json', { encodin: g: 'utf8' }),;
      const processes = JSON.parse(pm2List),;
,;
      const processHealth = {,;
        tota: l: processes.length,;
        onlin: e: 0,;
        stoppe: d: 0,;
        errore: d: 0,;
        processe: s: [],;
      ,;
,;
      processes.forEach(proc => {,;
        const status = proc.pm2_env?.status || 'unknown',;
        processHealth.processes.push({,;
          nam: e: proc.name,;
          statu: s: status,;
          memor: y: proc.monit?.memory || 0,;
          cp: u: proc.monit?.cpu || 0,;
          uptim: e: proc.pm2_env?.uptime || 0;
        }),;
,;
        if (status === 'online') processHealth.online++,;
        else if (status === 'stopped') processHealth.stopped++,;
        else if (status === 'errored') processHealth.errored++;
      }),;
,;
      return {,;
        succes: s: true,;
        healt: h: processHealth;
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        healt: h: null;
}
},;
,;
  async checkApplicationHealth() {,;
    try {,;
      this.log('🌐 Checking application health...'),;
,;
      const healthChecks = [],;
,;
      // Check if the application is running,;
      try {,;
        const pm2List = execSync('pm2 list', { encodin: g: 'utf8' }),;
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),;
,;
        healthChecks.push({,;
          nam: e: 'PM2 App Status',;
          statu: s: hasRunningApp ? 'healthy' : 'unhealthy',;
          messag: e: hasRunningApp ? 'Application is running' : 'Application is not running';
        });
      } catch (error) {,;
        healthChecks.push({,;
          nam: e: 'PM2 App Status',;
          statu: s: 'error',;
          messag: e: 'Could not check PM2 status';
        });
      },;
,;
      // Check if build files exist,;
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),;
      healthChecks.push({,;
        nam: e: 'Build Files',;
        statu: s: buildExists ? 'healthy' : 'unhealthy',;
        messag: e: buildExists ? 'Build files exist' : 'Build files missing';
      }),;
,;
      // Check if package.json exists and is valid,;
      try {,;
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
        healthChecks.push({,;
          nam: e: 'Package.json',;
          statu: s: 'healthy',;
          messag: e: 'Package.json is valid';
        });
      } catch (error) {,;
        healthChecks.push({,;
          nam: e: 'Package.json',;
          statu: s: 'unhealthy',;
          messag: e: 'Package.json is invalid or missing';
        });
      },;
,;
      return {,;
        succes: s: true,;
        check: s: healthChecks;
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        check: s: [];
}
},;
,;
  async checkLogHealth() {,;
    try {,;
      this.log('📝 Checking log health...'),;
,;
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),;
      const logFiles = [],;
,;
      if (fs.existsSync(logsDir)) {,;
        const files = fs.readdirSync(logsDir),;
        files.forEach(file => {,;
          if (file.endsWith('.log')) {,;
            const filePath = path.join(logsDir, file),;
            const stats = fs.statSync(filePath),;
            logFiles.push({,;
              nam: e: file,;
              siz: e: stats.size,;
              sizeM: B: Math.round(stats.size / (1024 * 1024) * 100) / 100,;
              lastModifie: d: stats.mtime;
            });
          }
        });
      },;
,;
      return {,;
        succes: s: true,;
        logFile: s: logFiles,;
        totalSiz: e: logFiles.reduce((sum, file) => sum + file.size, 0);
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        logFile: s: [],;
        totalSiz: e: 0;
}
},;
,;
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        systemHealt: h: 'unknown',;
        processHealt: h: 'unknown',;
        applicationHealt: h: 'unknown',;
        logHealt: h: 'unknown',;
        overallHealt: h: 'unknown',;
        healthScor: e: 0,;
      ,;
      detail: s: {,;
        syste: m: systemInfo,;
        processe: s: processInfo,;
        applicatio: n: appInfo,;
        log: s: logInfo,;
      ,;
      recommendation: s: [],;
    ,;
,;
    // Calculate health scores,;
    let totalScore = 0,;
    let maxScore = 0,;
,;
    // System health,;
    if (systemInfo.success) {,;
      const memUsage = systemInfo.memory?.usagePercent || 0,;
      const diskUsage = systemInfo.disk?.usagePercent || 0,;
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,;
,;
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,;
        report.summary.systemHealth = 'healthy',;
        totalScore += 25;
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,;
        report.summary.systemHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.systemHealth = 'unhealthy',;
        totalScore += 5;
      }
},;
    maxScore += 25,;
,;
    // Process health,;
    if (processInfo.success && processInfo.health) {,;
      const health = processInfo.health,;
      if (health.errored === 0 && health.stopped === 0) {,;
        report.summary.processHealth = 'healthy',;
        totalScore += 25;
      } else if (health.errored === 0) {,;
        report.summary.processHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.processHealth = 'unhealthy',;
        totalScore += 5;
      }
},;
    maxScore += 25,;
,;
    // Application health,;
    if (appInfo.success) {,;
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,;
      const totalChecks = appInfo.checks.length,;
,;
      if (healthyChecks === totalChecks) {,;
        report.summary.applicationHealth = 'healthy',;
        totalScore += 25;
      } else if (healthyChecks >= totalChecks * 0.5) {,;
        report.summary.applicationHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.applicationHealth = 'unhealthy',;
        totalScore += 5;
      }
},;
    maxScore += 25,;
,;
    // Log health,;
    if (logInfo.success) {,;
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,;
      if (totalLogSize < 100) {,;
        report.summary.logHealth = 'healthy',;
        totalScore += 25;
      } else if (totalLogSize < 500) {,;
        report.summary.logHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.logHealth = 'unhealthy',;
        totalScore += 5;
      }
},;
    maxScore += 25,;
,;
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),;
,;
    // Determine overall health,;
    if (report.summary.healthScore >= 80) {,;
      report.summary.overallHealth = 'healthy';
    } else if (report.summary.healthScore >= 60) {,;
      report.summary.overallHealth = 'warning';
    } else {,;
      report.summary.overallHealth = 'unhealthy';
},;
,;
    // Generate recommendations,;
    if (systemInfo.success) {,;
      if (systemInfo.memory?.usagePercent > 80) {,;
        report.recommendations.push({,;
          priorit: y: 'high',;
          messag: e: 'High memory usage detected',;
          actio: n: 'Consider restarting processes or increasing memory';
        });
      },;
      if (systemInfo.disk?.usagePercent > 80) {,;
        report.recommendations.push({,;
          priorit: y: 'high',;
          messag: e: 'High disk usage detected',;
          actio: n: 'Clean up logs and temporary files';
        });
      }
},;
,;
    if (processInfo.success && processInfo.health?.errored > 0) {,;
      report.recommendations.push({,;
        priorit: y: 'critical',;
        messag: e: 'Errored processes detected',;
        actio: n: 'Restart errored processes and investigate logs';
      });
},;
,;
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'Large log files detected',;
        actio: n: 'Implement log rotation or cleanup';
      });
},;
,;
    return report;
},;
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
}
},;
,;
  async run() {,;
    this.log('🏥 Starting Health Monitor...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
,;
      // Run all health checks,;
      const systemInfo = await this.checkSystemResources(),;
      const processInfo = await this.checkProcessHealth(),;
      const appInfo = await this.checkApplicationHealth(),;
      const logInfo = await this.checkLogHealth(),;
,;
      // Generate report,;
      this.log('📊 Generating health report...'),;
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Health Monitor: Summary: '),;
      this.log(`Syste: m: ${report.summary.systemHealth}`),;
      this.log(`Processe: s: ${report.summary.processHealth}`),;
      this.log(`Applicatio: n: ${report.summary.applicationHealth}`),;
      this.log(`Log: s: ${report.summary.logHealth}`),;
      this.log(`Overal: l: ${report.summary.overallHealth}`),;
      this.log(`Health: Score: ${report.summary.healthScore}/100`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
        });
      } else {,;
        this.log('\n✨ All systems are healthy!');
      },;
    } catch (error) {,;
      this.log(`❌ Error running health: monitor: ${error.message}`),;
      process.exit(1);
}
}
},;
,;
// Run the health monitor,;
const healthMonitor = new HealthMonitor(),;
healthMonitor.run().catch(error => {,;
  process.exit(1);
});
    }
  },;
,;
  async checkSystemResources() {,;
    try {,;
      this.log('💻 Checking system resources...'),;
,;
      const memInfo = execSync('free -m', { encodin: g: 'utf8' }),;
      const diskInfo = execSync('df -h', { encodin: g: 'utf8' }),;
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encodin: g: 'utf8' }),;
,;
      // Parse memory info,;
      const memLines = memInfo.split('\n'),;
      const memTotal = memLines[1].split(/\s+/)[1],;
      const memUsed = memLines[1].split(/\s+/)[2],;
      const memFree = memLines[1].split(/\s+/)[3],;
,;
      // Parse disk info,;
      const diskLines = diskInfo.split('\n'),;
      const rootDisk = diskLines.find(line => line.includes('/')),;
      const diskUsage = rootDisk ? rootDisk.split(/\s+/)[4].replace('%', '') : '0',;
,;
      // Parse CPU info,;
      const cpuUsage = cpuInfo.includes('id') ?,;
        (100 - parseFloat(cpuInfo.split('id')[0].split()[3].replace('%id', '').trim())) : 0,;
,;
      return {,;
        succes: s: true,;
        memor: y: {,;
          tota: l: parseInt(memTotal),;
          use: d: parseInt(memUsed),;
          fre: e: parseInt(memFree),;
          usagePercen: t: Math.round((parseInt(memUsed) / parseInt(memTotal)) * 100);
        },;
        dis: k: {,;
          usagePercen: t: parseInt(diskUsage);
        },;
        cp: u: {,;
          usagePercen: t: Math.round(cpuUsage);
        }
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        memor: y: null,;
        dis: k: null,;
        cp: u: null;
      }
    }
  },;
,;
  async checkProcessHealth() {,;
    try {,;
      this.log('🔄 Checking process health...'),;
,;
      const pm2List = execSync('pm2 list --json', { encodin: g: 'utf8' }),;
      const processes = JSON.parse(pm2List),;
,;
      const processHealth = {,;
        tota: l: processes.length,;
        onlin: e: 0,;
        stoppe: d: 0,;
        errore: d: 0,;
        processe: s: [];
      },;
,;
      processes.forEach(proc => {,;
        const status = proc.pm2_env?.status || 'unknown',;
        processHealth.processes.push({,;
          nam: e: proc.name,;
          statu: s: status,;
          memor: y: proc.monit?.memory || 0,;
          cp: u: proc.monit?.cpu || 0,;
          uptim: e: proc.pm2_env?.uptime || 0;
        }),;
,;
        if (status === 'online') processHealth.online++,;
        else if (status === 'stopped') processHealth.stopped++,;
        else if (status === 'errored') processHealth.errored++;
      }),;
,;
      return {,;
        succes: s: true,;
        healt: h: processHealth;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        healt: h: null;
      }
    }
  },;
,;
  async checkApplicationHealth() {,;
    try {,;
      this.log('🌐 Checking application health...'),;
,;
      const healthChecks = [],;
,;
      // Check if the application is running,;
      try {,;
        const pm2List = execSync('pm2 list', { encodin: g: 'utf8' }),;
        const hasRunningApp = pm2List.includes('bolt-zion-app') && pm2List.includes('online'),;
,;
        healthChecks.push({,;
          nam: e: 'PM2 App Status',;
          statu: s: hasRunningApp ? 'healthy' : 'unhealthy',;
          messag: e: hasRunningApp ? 'Application is running' : 'Application is not running';
        });
      } catch (error) {,;
        healthChecks.push({,;
          nam: e: 'PM2 App Status',;
          statu: s: 'error',;
          messag: e: 'Could not check PM2 status';
        });
      },;
,;
      // Check if build files exist,;
      const buildExists = fs.existsSync('dist') || fs.existsSync('.next'),;
      healthChecks.push({,;
        nam: e: 'Build Files',;
        statu: s: buildExists ? 'healthy' : 'unhealthy',;
        messag: e: buildExists ? 'Build files exist' : 'Build files missing';
      }),;
,;
      // Check if package.json exists and is valid,;
      try {,;
        const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),;
        healthChecks.push({,;
          nam: e: 'Package.json',;
          statu: s: 'healthy',;
          messag: e: 'Package.json is valid';
        });
      } catch (error) {,;
        healthChecks.push({,;
          nam: e: 'Package.json',;
          statu: s: 'unhealthy',;
          messag: e: 'Package.json is invalid or missing';
        });
      },;
,;
      return {,;
        succes: s: true,;
        check: s: healthChecks;
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        check: s: [];
      }
    }
  },;
,;
  async checkLogHealth() {,;
    try {,;
      this.log('📝 Checking log health...'),;
,;
      const logsDir = path.join(this.projectRoot, 'logs/pm2'),;
      const logFiles = [],;
,;
      if (fs.existsSync(logsDir)) {,;
        const files = fs.readdirSync(logsDir),;
        files.forEach(file => {,;
          if (file.endsWith('.log')) {,;
            const filePath = path.join(logsDir, file),;
            const stats = fs.statSync(filePath),;
            logFiles.push({,;
              nam: e: file,;
              siz: e: stats.size,;
              sizeM: B: Math.round(stats.size / (1024 * 1024) * 100) / 100,;
              lastModifie: d: stats.mtime;
            });
          }
        });
      },;
,;
      return {,;
        succes: s: true,;
        logFile: s: logFiles,;
        totalSiz: e: logFiles.reduce((sum, file) => sum + file.size, 0);
      }
    } catch (error) {,;
      return {,;
        succes: s: false,;
        erro: r: error.message,;
        logFile: s: [],;
        totalSiz: e: 0;
      }
    }
  },;
,;
  async generateReport(systemInfo, processInfo, appInfo, logInfo) {,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        systemHealt: h: 'unknown',;
        processHealt: h: 'unknown',;
        applicationHealt: h: 'unknown',;
        logHealt: h: 'unknown',;
        overallHealt: h: 'unknown',;
        healthScor: e: 0;
      },;
      detail: s: {,;
        syste: m: systemInfo,;
        processe: s: processInfo,;
        applicatio: n: appInfo,;
        log: s: logInfo;
      },;
      recommendation: s: [];
    },;
,;
    // Calculate health scores,;
    let totalScore = 0,;
    let maxScore = 0,;
,;
    // System health,;
    if (systemInfo.success) {,;
      const memUsage = systemInfo.memory?.usagePercent || 0,;
      const diskUsage = systemInfo.disk?.usagePercent || 0,;
      const cpuUsage = systemInfo.cpu?.usagePercent || 0,;
,;
      if (memUsage < 80 && diskUsage < 80 && cpuUsage < 80) {,;
        report.summary.systemHealth = 'healthy',;
        totalScore += 25;
      } else if (memUsage < 90 && diskUsage < 90 && cpuUsage < 90) {,;
        report.summary.systemHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.systemHealth = 'unhealthy',;
        totalScore += 5;
      }
    },;
    maxScore += 25,;
,;
    // Process health,;
    if (processInfo.success && processInfo.health) {,;
      const health = processInfo.health,;
      if (health.errored === 0 && health.stopped === 0) {,;
        report.summary.processHealth = 'healthy',;
        totalScore += 25;
      } else if (health.errored === 0) {,;
        report.summary.processHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.processHealth = 'unhealthy',;
        totalScore += 5;
      }
    },;
    maxScore += 25,;
,;
    // Application health,;
    if (appInfo.success) {,;
      const healthyChecks = appInfo.checks.filter(check => check.status === 'healthy').length,;
      const totalChecks = appInfo.checks.length,;
,;
      if (healthyChecks === totalChecks) {,;
        report.summary.applicationHealth = 'healthy',;
        totalScore += 25;
      } else if (healthyChecks >= totalChecks * 0.5) {,;
        report.summary.applicationHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.applicationHealth = 'unhealthy',;
        totalScore += 5;
      }
    },;
    maxScore += 25,;
,;
    // Log health,;
    if (logInfo.success) {,;
      const totalLogSize = logInfo.totalSize / (1024 * 1024), // MB,;
      if (totalLogSize < 100) {,;
        report.summary.logHealth = 'healthy',;
        totalScore += 25;
      } else if (totalLogSize < 500) {,;
        report.summary.logHealth = 'warning',;
        totalScore += 15;
      } else {,;
        report.summary.logHealth = 'unhealthy',;
        totalScore += 5;
      }
    },;
    maxScore += 25,;
,;
    report.summary.healthScore = Math.round((totalScore / maxScore) * 100),;
,;
    // Determine overall health,;
    if (report.summary.healthScore >= 80) {,;
      report.summary.overallHealth = 'healthy';
    } else if (report.summary.healthScore >= 60) {,;
      report.summary.overallHealth = 'warning';
    } else {,;
      report.summary.overallHealth = 'unhealthy';
    },;
,;
    // Generate recommendations,;
    if (systemInfo.success) {,;
      if (systemInfo.memory?.usagePercent > 80) {,;
        report.recommendations.push({,;
          priorit: y: 'high',;
          messag: e: 'High memory usage detected',;
          actio: n: 'Consider restarting processes or increasing memory';
        });
      },;
      if (systemInfo.disk?.usagePercent > 80) {,;
        report.recommendations.push({,;
          priorit: y: 'high',;
          messag: e: 'High disk usage detected',;
          actio: n: 'Clean up logs and temporary files';
        });
      }
    },;
,;
    if (processInfo.success && processInfo.health?.errored > 0) {,;
      report.recommendations.push({,;
        priorit: y: 'critical',;
        messag: e: 'Errored processes detected',;
        actio: n: 'Restart errored processes and investigate logs';
      });
    },;
,;
    if (logInfo.success && logInfo.totalSize > 500 * 1024 * 1024) {,;
      report.recommendations.push({,;
        priorit: y: 'medium',;
        messag: e: 'Large log files detected',;
        actio: n: 'Implement log rotation or cleanup';
      });
    },;
,;
    return report;
  },;
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
    }
  },;
,;
  async run() {,;
    this.log('🏥 Starting Health Monitor...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
,;
      // Run all health checks,;
      const systemInfo = await this.checkSystemResources(),;
      const processInfo = await this.checkProcessHealth(),;
      const appInfo = await this.checkApplicationHealth(),;
      const logInfo = await this.checkLogHealth(),;
,;
      // Generate report,;
      this.log('📊 Generating health report...'),;
      const report = await this.generateReport(systemInfo, processInfo, appInfo, logInfo),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Health Monitor: Summary: '),;
      this.log(`Syste: m: ${report.summary.systemHealth}`),;
      this.log(`Processe: s: ${report.summary.processHealth}`),;
      this.log(`Applicatio: n: ${report.summary.applicationHealth}`),;
      this.log(`Log: s: ${report.summary.logHealth}`),;
      this.log(`Overal: l: ${report.summary.overallHealth}`),;
      this.log(`Health: Score: ${report.summary.healthScore}/100`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.recommendations.length > 0) {,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
        });
      } else {,;
        this.log('\n✨ All systems are healthy!');
      }
;

    } catch (error) {,;
      this.log(`❌ Error running health: monitor: ${error.message}`),;
      process.exit(1);
    }
  }
},;
,;
// Run the health monitor,;
const healthMonitor = new HealthMonitor(),;
healthMonitor.run().catch(error => {,;
  process.exit(1);
}),;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
