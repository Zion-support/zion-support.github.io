<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst pm2 = require("pm2");"const fs = require("fs").promises;"const path = require("path");"const http = require("http");"const { execSync } = require("child_process");class HealthDashboard { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "health-dashboard.log");" this.dashboardFile = path.join(this.projectRoot, "logs", "dashboard-data.json"); this.port = parseInt(process.env.DASHBOARD_PORT) | 3001; this.dashboardData = { timestamp: null," processes: []," system: {}," alerts: []," metrics: {}," healthScore: 0 }; this.server = null; this.ensureLogsDirectory(); } async ensureLogsDirectory() { try {"" await fs.mkdir(path.join(this.projectRoot, "logs"), { recursive: true }); } catch (error) {" console.log("Logs directory already exists"); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}`; console.log(logMessage); " fs.appendFile(this.logFile, logMessage + "\n").catch(console.error); } async initialize() {" this.log(" Initializing Health Dashboard."); return new Promise((resolve, reject) => { pm2.connect((err) => { if (err) {""` this.log(` Failed to connect to PM2: ${err.message}`, "ERROR"); reject(err); return; } " this.log(" Connected to PM2 for health monitoring"); this.startHealthMonitoring(); this.startWebServer(); resolve(); }); }); } startHealthMonitoring() {" this.log(" Starting health monitoring."); / Update dashboard data every 30 seconds setInterval(async () => { await this.updateDashboardData(); }, 30000); / Generate health report every 5 minutes setInterval(async () => { await this.generateHealthReport(); }, 300000); } async updateDashboardData() { try { const processes = await this.getProcessList(); const systemMetrics = await this.getSystemMetrics(); const alerts = await this.getActiveAlerts(); this.dashboardData = {" timestamp: new Date().toISOString()," processes: processes.map(process => this.formatProcessData(process))," system: systemMetrics," alerts: alerts," metrics: await this.calculateMetrics(processes, systemMetrics)," healthScore: await this.calculateHealthScore(processes, systemMetrics) }; await this.saveDashboardData();"` this.log(` Dashboard updated: ${processes.length} processes, Health Score: ${this.dashboardData.healthScore}`); } catch (error) {""` this.log(` Dashboard update failed: ${error.message}`, "ERROR"); } } async getProcessList() { return new Promise((resolve, reject) => { pm2.list((err, processes) => { if (err) { reject(err); return; } resolve(processes); }); }); } formatProcessData(process) { return {" name: process.name," status: process.pm2_env.status," pid: process.pid," memory: process.monit.memory | 0," cpu: process.monit.cpu | 0," uptime: process.pm2_env.pm_uptime," restarts: process.pm2_env.restart_time | 0," instances: process.pm2_env.instances | 1," memoryFormatted: this.formatBytes(process.monit.memory | 0)," uptimeFormatted: this.formatUptime(process.pm2_env.pm_uptime)," healthStatus: this.getProcessHealthStatus(process) }; } getProcessHealthStatus(process) { const memory = process.monit.memory | 0; const cpu = process.monit.cpu | 0; const restarts = process.pm2_env.restart_time | 0; " if (process.pm2_env.status !== "online") {"" return { status: "offline", color: "red", message: "Process is offline" }; } if (restarts > 5) {"" return { status: "unstable", color: "orange", message: "High restart count" }; } if (memory > 1024 * 1024 * 1024) { / 1GB"" return { status: "warning", color: "yellow", message: "High memory usage" }; } if (cpu > 90) {"" return { status: "warning", color: "yellow", message: "High CPU usage" }; } "" return { status: "healthy", color: "green", message: "Process is healthy" }; } async getSystemMetrics() { try { const memory = await this.getMemoryInfo(); const cpu = await this.getCPUInfo(); const disk = await this.getDiskInfo(); const load = await this.getLoadAverage(); return { memory, cpu, disk, load," timestamp: new Date().toISOString() }; } catch (error) {""` this.log(` Failed to get system metrics: ${error.message}`, "ERROR"); return {}; } } async getMemoryInfo() { try {"" const result = execSync("free -m", { encoding: "utf8" });" const lines = result.split("\n"); const memLine = lines[1].split(/\s+/); return {" total: parseInt(memLine[1])," used: parseInt(memLine[2])," free: parseInt(memLine[3])," available: parseInt(memLine[6]) | parseInt(memLine[3])," usagePercent: Math.round((parseInt(memLine[2]) / parseInt(memLine[1])) * 100) }; } catch (error) {" return { total: 0, used: 0, free: 0, available: 0, usagePercent: 0 }; } } async getCPUInfo() { try {"" const result = execSync("top -bn1 | grep "Cpu(s)"", { encoding: "utf8" }); const cpuMatch = result.match(/(\d+\.\d+)%us/); return {" usage: cpuMatch ? parseFloat(cpuMatch[1]) : 0,"" cores: require("os").cpus().length }; } catch (error) {" return { usage: 0, cores: 0 }; } } async getDiskInfo() { try {"" const result = execSync("df -h /", { encoding: "utf8" });" const lines = result.split("\n"); const diskLine = lines[1].split(/\s+/); return {" total: diskLine[1]," used: diskLine[2]," available: diskLine[3],"" usagePercent: parseInt(diskLine[4].replace("%", "")) }; } catch (error) {"" return { total: "0", used: "0", available: "0", usagePercent: 0 }; } } async getLoadAverage() { try {"" const result = execSync("uptime", { encoding: "utf8" });" const loadMatch = result.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/); return loadMatch ? {" 1min: parseFloat(loadMatch[1])," 5min: parseFloat(loadMatch[2])," 15min: parseFloat(loadMatch[3])" } : { 1min: 0, 5min: 0, 15min: 0 }; } catch (error) {" return { 1min: 0, 5min: 0, 15min: 0 }; } } async getActiveAlerts() { try {" const alertsFile = path.join(this.projectRoot, "logs", "alerts.json");" const alerts = await fs.readFile(alertsFile, "utf8"); return JSON.parse(alerts).slice(-10); / Last 10 alerts } catch (error) { return []; } } async calculateMetrics(processes, systemMetrics) {" const onlineProcesses = processes.filter(p => p.pm2_env.status === "online"); const totalMemory = onlineProcesses.reduce((sum, p) => sum + (p.monit.memory | 0), 0); const totalCPU = onlineProcesses.reduce((sum, p) => sum + (p.monit.cpu | 0), 0); const totalRestarts = onlineProcesses.reduce((sum, p) => sum + (p.pm2_env.restart_time | 0), 0); return {" totalProcesses: processes.length," onlineProcesses: onlineProcesses.length," offlineProcesses: processes.length - onlineProcesses.length," totalMemory: this.formatBytes(totalMemory)," totalCPU: Math.round(totalCPU * 100) / 100, totalRestarts," averageMemory: this.formatBytes(totalMemory / onlineProcesses.length | 0)," averageCPU: Math.round((totalCPU / onlineProcesses.length | 0) * 100) / 100," systemMemoryUsage: systemMetrics.memory?.usagePercent | 0," systemCPUUsage: systemMetrics.cpu?.usage | 0," systemDiskUsage: systemMetrics.disk?.usagePercent | 0 }; } async calculateHealthScore(processes, systemMetrics) { let score = 100; / Deduct points for offline processes" const offlineProcesses = processes.filter(p => p.pm2_env.status !== "online").length; score -= offlineProcesses * 10; / Deduct points for high restart count const totalRestarts = processes.reduce((sum, p) => sum + (p.pm2_env.restart_time | 0), 0); score -= Math.min(totalRestarts * 2, 20); / Deduct points for high resource usage const systemMemoryUsage = systemMetrics.memory?.usagePercent | 0; const systemCPUUsage = systemMetrics.cpu?.usage | 0; if (systemMemoryUsage > 90) score -= 15; else if (systemMemoryUsage > 80) score -= 10; else if (systemMemoryUsage > 70) score -= 5; if (systemCPUUsage > 90) score -= 15; else if (systemCPUUsage > 80) score -= 10; else if (systemCPUUsage > 70) score -= 5; / Deduct points for high process memory usage const highMemoryProcesses = processes.filter(p => " p.pm2_env.status === "online" && (p.monit.memory | 0) > 1024 * 1024 * 1024 ).length; score -= highMemoryProcesses * 5; return Math.max(0, Math.round(score)); } formatBytes(bytes) {" if (bytes === 0) return "0 B"; const k = 1024;" const sizes = ["B", "KB", "MB", "GB", "TB"]; const i = Math.floor(Math.log(bytes) / Math.log(k));" return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]; } formatUptime(uptime) { const now = Date.now(); const uptimeMs = now - uptime; const seconds = Math.floor(uptimeMs / 1000); const minutes = Math.floor(seconds / 60); const hours = Math.floor(minutes / 60); const days = Math.floor(hours / 24);` if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;` if (hours > 0) return `${hours}h ${minutes % 60}m`;` if (minutes > 0) return `${minutes}m ${seconds % 60}s`;` return `${seconds}s`; } async saveDashboardData() { try { await fs.writeFile(this.dashboardFile, JSON.stringify(this.dashboardData, null, 2)); } catch (error) {""` this.log(` Failed to save dashboard data: ${error.message}`, "ERROR"); } } async generateHealthReport() { try { const report = {" timestamp: new Date().toISOString()," summary: { healthScore: this.dashboardData.healthScore," totalProcesses: this.dashboardData.metrics.totalProcesses," onlineProcesses: this.dashboardData.metrics.onlineProcesses," systemHealth: this.getSystemHealthStatus() }," processes: this.dashboardData.processes.map(p => ({ name: p.name," status: p.status," healthStatus: p.healthStatus.status," memory: p.memoryFormatted," cpu: p.cpu," uptime: p.uptimeFormatted }))," system: { memory: this.dashboardData.system.memory," cpu: this.dashboardData.system.cpu," disk: this.dashboardData.system.disk }," alerts: this.dashboardData.alerts," recommendations: this.generateRecommendations() }; " const reportFile = path.join(this.projectRoot, "logs", "health-report.json"); await fs.writeFile(reportFile, JSON.stringify(report, null, 2)); " this.log(" Health report generated and saved"); } catch (error) {""` this.log(` Health report generation failed: ${error.message}`, "ERROR"); } } getSystemHealthStatus() { const healthScore = this.dashboardData.healthScore; " if (healthScore >= 90) return "excellent";" if (healthScore >= 80) return "good";" if (healthScore >= 70) return "fair";" if (healthScore >= 60) return "poor";" return "critical"; } generateRecommendations() { const recommendations = []; const metrics = this.dashboardData.metrics; if (metrics.offlineProcesses > 0) { recommendations.push({"" type: "critical","` message: `${metrics.offlineProcesses} processes are offline`,"" action: "Check process logs and restart failed processes" }); } if (metrics.systemMemoryUsage > 90) { recommendations.push({"" type: "warning","" message: "System memory usage is very high","" action: "Consider scaling down or optimizing memory usage" }); } if (metrics.systemCPUUsage > 90) { recommendations.push({"" type: "warning","" message: "System CPU usage is very high","" action: "Consider scaling up or optimizing CPU usage" }); } if (metrics.totalRestarts > 10) { recommendations.push({"" type: "warning","" message: "High number of process restarts detected","" action: "Investigate and fix underlying issues" }); } if (this.dashboardData.healthScore < 70) { recommendations.push({"" type: "info","" message: "Overall system health is below optimal","" action: "Review all recommendations and take corrective actions" }); } return recommendations; } startWebServer() { this.server = http.createServer((req, res) => { this.handleRequest(req, res); }); this.server.listen(this.port, () => {"` this.log(` Health Dashboard running on http: /localhost:${this.port}`); }); } async handleRequest(req, res) {"` const url = new URL(req.url, `http: /${req.headers.host}`); / Set CORS headers" res.setHeader("Access-Control-Allow-Origin", "*");" res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");" res.setHeader("Access-Control-Allow-Headers", "Content-Type"); " if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; } try {" if (url.pathname === "/api/health") { await this.handleHealthAPI(res);" } else if (url.pathname === "/api/processes") { await this.handleProcessesAPI(res);" } else if (url.pathname === "/api/system") { await this.handleSystemAPI(res);" } else if (url.pathname === "/api/alerts") { await this.handleAlertsAPI(res);" } else if (url.pathname === "/") { await this.handleDashboard(res); } else {" res.writeHead(404, { "Content-Type": "application/json" });"" res.end(JSON.stringify({ error: "Not found" })); } } catch (error) {" res.writeHead(500, { "Content-Type": "application/json" });" res.end(JSON.stringify({ error: error.message })); } } async handleHealthAPI(res) {" res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify({" healthScore: this.dashboardData.healthScore," status: this.getSystemHealthStatus()," timestamp: this.dashboardData.timestamp })); } async handleProcessesAPI(res) {" res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify(this.dashboardData.processes)); } async handleSystemAPI(res) {" res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify(this.dashboardData.system)); } async handleAlertsAPI(res) {" res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify(this.dashboardData.alerts)); } async handleDashboard(res) { const html = this.generateDashboardHTML();" res.writeHead(200, { "Content-Type": "text/html" }); res.end(html); } generateDashboardHTML() {" return "<!DOCTYPE html>"<html lang="en"><head>" <meta charset="UTF-8">" <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>PM2 Health Dashboard</title> <style>" * { margin: 0; padding: 0; box-sizing: border-box; }"" body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f5f5f5; }" .container { max-width: 1200px; margin: 0 auto; padding: 20px; }" .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }" .health-score { font-size: 2em; font-weight: bold; margin: 10px 0; }" .score-excellent { color: #10b981; }" .score-good { color: #3b82f6; }" .score-fair { color: #f59e0b; }" .score-poor { color: #ef4444; }" .score-critical { color: #dc2626; }" .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }" .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }" .card h3 { margin-bottom: 15px; color: #374151; }" .process-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }" .process-item: last-child { border-bottom: none; }" .status { padding: 4px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold; }" .status-online { background: #d1fae5; color: #065f46; }" .status-offline { background: #fee2e2; color: #991b1b; }" .status-errored { background: #fef3c7; color: #92400e; }" .health-status { padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }" .health-healthy { background: #d1fae5; color: #065f46; }" .health-warning { background: #fef3c7; color: #92400e; }" .health-unstable { background: #fed7aa; color: #9a3412; }" .health-offline { background: #fee2e2; color: #991b1b; }" .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }" .metric { text-align: center; }" .metric-value { font-size: 1.5em; font-weight: bold; color: #374151; }" .metric-label { color: #6b7280; font-size: 0.9em; }" .refresh-btn { background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }" .refresh-btn: hover { background: #2563eb; }" .auto-refresh { margin-left: 10px; } </style></head><body>" <div class="container">" <div class="header"> <h1>PM2 Health Dashboard</h1>" <div class="health-score" id="healthScore">Loading.</div>" <button class="refresh-btn" onclick="refreshData()">Refresh</button>" <label class="auto-refresh">" <input type="checkbox" id="autoRefresh" checked> Auto-refresh (30s) </label> </div> " <div class="grid">" <div class="card"> <h3>Processes</h3>" <div id="processesList">Loading.</div> </div> " <div class="card"> <h3>System Metrics</h3>" <div class="metrics" id="systemMetrics">Loading.</div> </div> " <div class="card"> <h3>Process Metrics</h3>" <div class="metrics" id="processMetrics">Loading.</div> </div> " <div class="card"> <h3>Recent Alerts</h3>" <div id="alertsList">Loading.</div> </div> </div> </div> <script> let autoRefreshInterval; function updateHealthScore(score) {" const element = document.getElementById("healthScore");" element.textContent = \"Health Score: \${score}\"; " element.className = "health-score";" if (score >= 90) element.classList.add("score-excellent");" else if (score >= 80) element.classList.add("score-good");" else if (score >= 70) element.classList.add("score-fair");" else if (score >= 60) element.classList.add("score-poor");" else element.classList.add("score-critical"); } function updateProcesses(processes) {" const container = document.getElementById("processesList");" container.innerHTML = processes.map(p => \"" <div class="process-item"> <div> <strong>\${p.name}</strong><br>" <span class="status status-\${p.status}">\${p.status}</span>" <span class="health-status health-\${p.healthStatus.status}">\${p.healthStatus.status}</span> </div>" <div style="text-align: right;"> <div>\${p.memoryFormatted}</div> <div>\${p.cpu}% CPU</div> <div>\${p.uptimeFormatted}</div> </div> </div>"" \").join(""); } function updateSystemMetrics(system) {" const container = document.getElementById("systemMetrics");" container.innerHTML = \"" <div class="metric">" <div class="metric-value">\${system.memory?.usagePercent | 0}%</div>" <div class="metric-label">Memory Usage</div> </div>" <div class="metric">" <div class="metric-value">\${Math.round(system.cpu?.usage | 0)}%</div>" <div class="metric-label">CPU Usage</div> </div>" <div class="metric">" <div class="metric-value">\${system.disk?.usagePercent | 0}%</div>" <div class="metric-label">Disk Usage</div> </div>" <div class="metric">"" <div class="metric-value">\${system.load?.["1min"] | 0}</div>" <div class="metric-label">Load Average</div> </div>" \"; } function updateProcessMetrics(metrics) {" const container = document.getElementById("processMetrics");" container.innerHTML = \"" <div class="metric">" <div class="metric-value">\${metrics.onlineProcesses}/\${metrics.totalProcesses}</div>" <div class="metric-label">Online Processes</div> </div>" <div class="metric">" <div class="metric-value">\${metrics.totalMemory}</div>" <div class="metric-label">Total Memory</div> </div>" <div class="metric">" <div class="metric-value">\${metrics.totalCPU}%</div>" <div class="metric-label">Total CPU</div> </div>" <div class="metric">" <div class="metric-value">\${metrics.totalRestarts}</div>" <div class="metric-label">Total Restarts</div> </div>" \"; } function updateAlerts(alerts) {" const container = document.getElementById("alertsList"); if (alerts.length === 0) {"" container.innerHTML = "<div style="color: #6b7280;">No recent alerts</div>"; return; } " container.innerHTML = alerts.map(alert => \"" <div class="process-item"> <div> <strong>\${alert.type}</strong><br>" <span style="color: #6b7280; font-size: 0.9em;">\${new Date(alert.timestamp).toLocaleString()}</span> </div>" <div style="color: #6b7280; font-size: 0.9em;">" \${alert.data?.message | alert.message | "Alert"} </div> </div>"" \").join(""); } async function refreshData() { try {" const [healthRes, processesRes, systemRes, alertsRes] = await Promise.all([fetch("/api/health")," fetch("/api/processes")," fetch("/api/system")," fetch("/api/alerts") ]); const health = await healthRes.json(); const processes = await processesRes.json(); const system = await systemRes.json(); const alerts = await alertsRes.json(); updateHealthScore(health.healthScore); updateProcesses(processes); updateSystemMetrics(system); updateProcessMetrics({"" onlineProcesses: processes.filter(p => p.status === "online").length," totalProcesses: processes.length," totalMemory: processes.reduce((sum, p) => sum + p.memory, 0)," totalCPU: processes.reduce((sum, p) => sum + p.cpu, 0)," totalRestarts: processes.reduce((sum, p) => sum + p.restarts, 0) }); updateAlerts(alerts); } catch (error) {"" console.error("Failed to refresh data: ", error); } } function startAutoRefresh() { if (autoRefreshInterval) clearInterval(autoRefreshInterval); autoRefreshInterval = setInterval(refreshData, 30000); } function stopAutoRefresh() { if (autoRefreshInterval) { clearInterval(autoRefreshInterval); autoRefreshInterval = null; } } " document.getElementById("autoRefresh").addEventListener("change", (e) => { if (e.target.checked) { startAutoRefresh(); } else { stopAutoRefresh(); } }); / Initial load refreshData(); startAutoRefresh(); </script></body></html>" "; } async run() { try { await this.initialize();" this.log(" Health Dashboard is now running"); / Keep the process alive" process.on("SIGINT", async () => {" this.log(" Shutting down Health Dashboard."); if (this.server) { this.server.close(); } pm2.disconnect(); process.exit(0); }); } catch (error) {""` this.log(` Fatal error: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the dashboardif (require.main === module) { const dashboard = new HealthDashboard(); dashboard.run();}module.exports = HealthDashboard;'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
/**
 * Real-time Health Dashboard;
 * Comprehensive monitoring dashboard for PM2 processes;
 */
<<<<<<< HEAD
const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');
class HealthDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'health-dashboard.log');
    this.dashboardFile = path.join(this.projectRoot, 'logs', 'dashboard-data.json');
    this.port = parseInt(process.env.DASHBOARD_PORT) || 3001;
    this.dashboardData = {
      "timestamp": null,
      "processes": [],
      "system": {},
      "alerts": [],
      "metrics": {},
      "healthScore": 0
    };
    this.server = null;
    this.ensureLogsDirectory();
  }
  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { "recursive": true });
    } catch (error) {
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }
  async initialize() {
    this.log('🏥 Initializing Health Dashboard...');
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to "PM2": ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        this.log('✅ Connected to PM2 for health monitoring');
        this.startHealthMonitoring();
        this.startWebServer();
        resolve();
      });
    });
  }
  startHealthMonitoring() {
    this.log('📊 Starting health monitoring...');
    // Update dashboard data every 30 seconds
    setInterval(async () => {
      await this.updateDashboardData();
    }, 30000);
    // Generate health report every 5 minutes
    setInterval(async () => {
      await this.generateHealthReport();
    }, 300000);
  }
  async updateDashboardData() {
    try {
      const processes = await this.getProcessList();
      const systemMetrics = await this.getSystemMetrics();
      const alerts = await this.getActiveAlerts();
      this.dashboardData = {
        "timestamp": new Date().toISOString(),
        "processes": processes.map(process => this.formatProcessData(process)),
        "system": systemMetrics,
        "alerts": alerts,
        "metrics": await this.calculateMetrics(processes, systemMetrics),
        "healthScore": await this.calculateHealthScore(processes, systemMetrics)
      };
      await this.saveDashboardData();
      this.log(`📊 Dashboard "updated": ${processes.length} processes, Health "Score": ${this.dashboardData.healthScore}`);
    } catch (error) {
      this.log(`❌ Dashboard update "failed": ${error.message}`, 'ERROR');
    }
  }
  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(processes);
      });
    });
  }
  formatProcessData(process) {
    return {
      "name": process.name,
      "status": process.pm2_env.status,
      "pid": process.pid,
      "memory": process.monit.memory || 0,
      "cpu": process.monit.cpu || 0,
      "uptime": process.pm2_env.pm_uptime,
      "restarts": process.pm2_env.restart_time || 0,
      "instances": process.pm2_env.instances || 1,
      "memoryFormatted": this.formatBytes(process.monit.memory || 0),
      "uptimeFormatted": this.formatUptime(process.pm2_env.pm_uptime),
      "healthStatus": this.getProcessHealthStatus(process)
    };
  }
  getProcessHealthStatus(process) {
    const memory = process.monit.memory || 0;
    const cpu = process.monit.cpu || 0;
    const restarts = process.pm2_env.restart_time || 0;
    if (process.pm2_env.status !== 'online') {
      return { "status": 'offline', "color": 'red', "message": 'Process is offline' };
    }
    if (restarts > 5) {
      return { "status": 'unstable', "color": 'orange', "message": 'High restart count' };
    }
    if (memory > 1024 * 1024 * 1024) { // 1GB
      return { "status": 'warning', "color": 'yellow', "message": 'High memory usage' };
    }
    if (cpu > 90) {
      return { "status": 'warning', "color": 'yellow', "message": 'High CPU usage' };
    }
    return { "status": 'healthy', "color": 'green', "message": 'Process is healthy' };
  }
  async getSystemMetrics() {
    try {
      const memory = await this.getMemoryInfo();
      const cpu = await this.getCPUInfo();
      const disk = await this.getDiskInfo();
      const load = await this.getLoadAverage();
      return {
        memory,
        cpu,
        disk,
        load,
        "timestamp": new Date().toISOString()
      };
    } catch (error) {
      this.log(`❌ Failed to get system "metrics": ${error.message}`, 'ERROR');
      return {};
    }
  }
  async getMemoryInfo() {
    try {
      const result = execSync('free -m', { "encoding": 'utf8' });
      const lines = result.split('\n');
      const memLine = lines[1].split(/\s+/);
      return {
        "total": parseInt(memLine[1]),
        "used": parseInt(memLine[2]),
        "free": parseInt(memLine[3]),
        "available": parseInt(memLine[6]) || parseInt(memLine[3]),
        "usagePercent": Math.round((parseInt(memLine[2]) / parseInt(memLine[1])) * 100)
      };
    } catch (error) {
      return { "total": 0, "used": 0, "free": 0, "available": 0, "usagePercent": 0 };
    }
  }
  async getCPUInfo() {
    try {
      const result = execSync('top -bn1 | grep "Cpu(s)"', { "encoding": 'utf8' });
      const cpuMatch = result.match(/(\d+\.\d+)%us/);
      return {
        "usage": cpuMatch ? parseFloat(cpuMatch[1]) : 0,
        "cores": require('os').cpus().length
      };
    } catch (error) {
      return { "usage": 0, "cores": 0 };
    }
  }
  async getDiskInfo() {
    try {
      const result = execSync('df -h /', { "encoding": 'utf8' });
      const lines = result.split('\n');
      const diskLine = lines[1].split(/\s+/);
      return {
        "total": diskLine[1],
        "used": diskLine[2],
        "available": diskLine[3],
        "usagePercent": parseInt(diskLine[4].replace('%', ''))
      };
    } catch (error) {
      return { "total": '0', "used": '0', "available": '0', "usagePercent": 0 };
    }
  }
  async getLoadAverage() {
    try {
      const result = execSync('uptime', { "encoding": 'utf8' });
      const loadMatch = result.match(/load "average": ([\d.]+), ([\d.]+), ([\d.]+)/);
      return loadMatch ? {
        '1min': parseFloat(loadMatch[1]),
        '5min': parseFloat(loadMatch[2]),
        '15min': parseFloat(loadMatch[3])
      } : { '1min': 0, '5min': 0, '15min': 0 };
    } catch (error) {
      return { '1min': 0, '5min': 0, '15min': 0 };
    }
  }
  async getActiveAlerts() {
    try {
      const alertsFile = path.join(this.projectRoot, 'logs', 'alerts.json');
      const alerts = await fs.readFile(alertsFile, 'utf8');
      return JSON.parse(alerts).slice(-10); // Last 10 alerts
    } catch (error) {
      return [];
    }
  }
  async calculateMetrics(processes, systemMetrics) {
    const onlineProcesses = processes.filter(p => p.pm2_env.status === 'online');
    const totalMemory = onlineProcesses.reduce((sum, p) => sum + (p.monit.memory || 0), 0);
    const totalCPU = onlineProcesses.reduce((sum, p) => sum + (p.monit.cpu || 0), 0);
    const totalRestarts = onlineProcesses.reduce((sum, p) => sum + (p.pm2_env.restart_time || 0), 0);
    return {
      "totalProcesses": processes.length,
      "onlineProcesses": onlineProcesses.length,
      "offlineProcesses": processes.length - onlineProcesses.length,
      "totalMemory": this.formatBytes(totalMemory),
      "totalCPU": Math.round(totalCPU * 100) / 100,
      totalRestarts,
      "averageMemory": this.formatBytes(totalMemory / onlineProcesses.length || 0),
      "averageCPU": Math.round((totalCPU / onlineProcesses.length || 0) * 100) / 100,
      "systemMemoryUsage": systemMetrics.memory?.usagePercent || 0,
      "systemCPUUsage": systemMetrics.cpu?.usage || 0,
      "systemDiskUsage": systemMetrics.disk?.usagePercent || 0
    };
  }
  async calculateHealthScore(processes, systemMetrics) {
    let score = 100;
    // Deduct points for offline processes
    const offlineProcesses = processes.filter(p => p.pm2_env.status !== 'online').length;
    score -= offlineProcesses * 10;
    // Deduct points for high restart count
    const totalRestarts = processes.reduce((sum, p) => sum + (p.pm2_env.restart_time || 0), 0);
    score -= Math.min(totalRestarts * 2, 20);
    // Deduct points for high resource usage
    const systemMemoryUsage = systemMetrics.memory?.usagePercent || 0;
    const systemCPUUsage = systemMetrics.cpu?.usage || 0;
    if (systemMemoryUsage > 90) score -= 15;
    else if (systemMemoryUsage > 80) score -= 10;
    else if (systemMemoryUsage > 70) score -= 5;
    if (systemCPUUsage > 90) score -= 15;
    else if (systemCPUUsage > 80) score -= 10;
    else if (systemCPUUsage > 70) score -= 5;
    // Deduct points for high process memory usage
    const highMemoryProcesses = processes.filter(p => 
      p.pm2_env.status === 'online' && (p.monit.memory || 0) > 1024 * 1024 * 1024
    ).length;
    score -= highMemoryProcesses * 5;
    return Math.max(0, Math.round(score));
  }
  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  formatUptime(uptime) {
    const now = Date.now();
    const uptimeMs = now - uptime;
    const seconds = Math.floor(uptimeMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }
  async saveDashboardData() {
    try {
      await fs.writeFile(this.dashboardFile, JSON.stringify(this.dashboardData, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save dashboard "data": ${error.message}`, 'ERROR');
    }
  }
  async generateHealthReport() {
    try {
      const report = {
        "timestamp": new Date().toISOString(),
        "summary": {
          healthScore: this.dashboardData.healthScore,
          "totalProcesses": this.dashboardData.metrics.totalProcesses,
          "onlineProcesses": this.dashboardData.metrics.onlineProcesses,
          "systemHealth": this.getSystemHealthStatus()
        },
        "processes": this.dashboardData.processes.map(p => ({
          name: p.name,
          "status": p.status,
          "healthStatus": p.healthStatus.status,
          "memory": p.memoryFormatted,
          "cpu": p.cpu,
          "uptime": p.uptimeFormatted
        })),
        "system": {
          memory: this.dashboardData.system.memory,
          "cpu": this.dashboardData.system.cpu,
          "disk": this.dashboardData.system.disk
        },
        "alerts": this.dashboardData.alerts,
        "recommendations": this.generateRecommendations()
      };
      const reportFile = path.join(this.projectRoot, 'logs', 'health-report.json');
      await fs.writeFile(reportFile, JSON.stringify(report, null, 2));
      this.log('📊 Health report generated and saved');
    } catch (error) {
      this.log(`❌ Health report generation "failed": ${error.message}`, 'ERROR');
    }
  }
  getSystemHealthStatus() {
    const healthScore = this.dashboardData.healthScore;
    if (healthScore >= 90) return 'excellent';
    if (healthScore >= 80) return 'good';
    if (healthScore >= 70) return 'fair';
    if (healthScore >= 60) return 'poor';
    return 'critical';
  }
  generateRecommendations() {
    const recommendations = [];
    const metrics = this.dashboardData.metrics;
    if (metrics.offlineProcesses > 0) {
      recommendations.push({
        "type": 'critical',
        "message": `${metrics.offlineProcesses} processes are offline`,
        "action": 'Check process logs and restart failed processes'
      });
    }
    if (metrics.systemMemoryUsage > 90) {
      recommendations.push({
        "type": 'warning',
        "message": 'System memory usage is very high',
        "action": 'Consider scaling down or optimizing memory usage'
      });
    }
    if (metrics.systemCPUUsage > 90) {
      recommendations.push({
        "type": 'warning',
        "message": 'System CPU usage is very high',
        "action": 'Consider scaling up or optimizing CPU usage'
      });
    }
    if (metrics.totalRestarts > 10) {
      recommendations.push({
        "type": 'warning',
        "message": 'High number of process restarts detected',
        "action": 'Investigate and fix underlying issues'
      });
    }
    if (this.dashboardData.healthScore < 70) {
      recommendations.push({
        "type": 'info',
        "message": 'Overall system health is below optimal',
        "action": 'Review all recommendations and take corrective actions'
      });
    }
    return recommendations;
  }
  startWebServer() {
    this.server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });
    this.server.listen(this.port, () => {
      this.log(`🌐 Health Dashboard running on "http": //localhost:${this.port}`);
    });
  }
  async handleRequest(req, res) {
    const url = new URL(req.url, `"http": //${req.headers.host}`);
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    try {
      if (url.pathname === '/api/health') {
        await this.handleHealthAPI(res);
      } else if (url.pathname === '/api/processes') {
        await this.handleProcessesAPI(res);
      } else if (url.pathname === '/api/system') {
        await this.handleSystemAPI(res);
      } else if (url.pathname === '/api/alerts') {
        await this.handleAlertsAPI(res);
      } else if (url.pathname === '/') {
        await this.handleDashboard(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "error": 'Not found' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ "error": error.message }));
    }
  }
  async handleHealthAPI(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      "healthScore": this.dashboardData.healthScore,
      "status": this.getSystemHealthStatus(),
      "timestamp": this.dashboardData.timestamp
    }));
  }
  async handleProcessesAPI(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(this.dashboardData.processes));
  }
  async handleSystemAPI(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(this.dashboardData.system));
  }
  async handleAlertsAPI(res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(this.dashboardData.alerts));
  }
  async handleDashboard(res) {
    const html = this.generateDashboardHTML();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }
  generateDashboardHTML() {
    return "
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM2 Health Dashboard</title>
    <style>
        * { "margin": 0; padding: 0; box-sizing: border-box; }
        body { font-"family": -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; "background": #f5f5f5; }
        .container { max-"width": 1200px; margin: 0 auto; padding: 20px; }
        .header { "background": white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .health-score { font-"size": 2em; font-weight: bold; margin: 10px 0; }
        .score-excellent { "color": #10b981; }
        .score-good { "color": #3b82f6; }
        .score-fair { "color": #f59e0b; }
        .score-poor { "color": #ef4444; }
        .score-critical { "color": #dc2626; }
        .grid { "display": grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); "gap": 20px; }
        .card { "background": white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .card h3 { margin-"bottom": 15px; color: #374151; }
        .process-item { "display": flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
        .process-"item": last-child { border-bottom: none; }
        .status { "padding": 4px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold; }
        .status-online { "background": #d1fae5; color: #065f46; }
        .status-offline { "background": #fee2e2; color: #991b1b; }
        .status-errored { "background": #fef3c7; color: #92400e; }
        .health-status { "padding": 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .health-healthy { "background": #d1fae5; color: #065f46; }
        .health-warning { "background": #fef3c7; color: #92400e; }
        .health-unstable { "background": #fed7aa; color: #9a3412; }
        .health-offline { "background": #fee2e2; color: #991b1b; }
        .metrics { "display": grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); "gap": 15px; }
        .metric { text-"align": center; }
        .metric-value { font-"size": 1.5em; font-weight: bold; color: #374151; }
        .metric-label { "color": #6b7280; font-size: 0.9em; }
        .refresh-btn { "background": #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; }
        .refresh-"btn": hover { background: #2563eb; }
        .auto-refresh { margin-"left": 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>PM2 Health Dashboard</h1>
            <div class="health-score" id="healthScore">Loading...</div>
            <button class="refresh-btn" onclick="refreshData()">Refresh</button>
            <label class="auto-refresh">
                <input type="checkbox" id="autoRefresh" checked> Auto-refresh (30s)
            </label>
        </div>
        <div class="grid">
            <div class="card">
                <h3>Processes</h3>
                <div id="processesList">Loading...</div>
            </div>
            <div class="card">
                <h3>System Metrics</h3>
                <div class="metrics" id="systemMetrics">Loading...</div>
            </div>
            <div class="card">
                <h3>Process Metrics</h3>
                <div class="metrics" id="processMetrics">Loading...</div>
            </div>
            <div class="card">
                <h3>Recent Alerts</h3>
                <div id="alertsList">Loading...</div>
            </div>
        </div>
    </div>
    <script>
        let autoRefreshInterval;
        function updateHealthScore(score) {
            const element = document.getElementById('healthScore');
            element.textContent = \"Health "Score": \${score}\";
            element.className = 'health-score';
            if (score >= 90) element.classList.add('score-excellent');
            else if (score >= 80) element.classList.add('score-good');
            else if (score >= 70) element.classList.add('score-fair');
            else if (score >= 60) element.classList.add('score-poor');
            else element.classList.add('score-critical');
        }
        function updateProcesses(processes) {
            const container = document.getElementById('processesList');
            container.innerHTML = processes.map(p => \"
                <div class="process-item">
                    <div>
                        <strong>\${p.name}</strong><br>
                        <span class="status status-\${p.status}">\${p.status}</span>
                        <span class="health-status health-\${p.healthStatus.status}">\${p.healthStatus.status}</span>
                    </div>
                    <div style="text-"align": right;">
                        <div>\${p.memoryFormatted}</div>
                        <div>\${p.cpu}% CPU</div>
                        <div>\${p.uptimeFormatted}</div>
                    </div>
                </div>
            \").join('');
        }
        function updateSystemMetrics(system) {
            const container = document.getElementById('systemMetrics');
            container.innerHTML = \"
                <div class="metric">
                    <div class="metric-value">\${system.memory?.usagePercent || 0}%</div>
                    <div class="metric-label">Memory Usage</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${Math.round(system.cpu?.usage || 0)}%</div>
                    <div class="metric-label">CPU Usage</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${system.disk?.usagePercent || 0}%</div>
                    <div class="metric-label">Disk Usage</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${system.load?.['1min'] || 0}</div>
                    <div class="metric-label">Load Average</div>
                </div>
            \";
        }
        function updateProcessMetrics(metrics) {
            const container = document.getElementById('processMetrics');
            container.innerHTML = \"
                <div class="metric">
                    <div class="metric-value">\${metrics.onlineProcesses}/\${metrics.totalProcesses}</div>
                    <div class="metric-label">Online Processes</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${metrics.totalMemory}</div>
                    <div class="metric-label">Total Memory</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${metrics.totalCPU}%</div>
                    <div class="metric-label">Total CPU</div>
                </div>
                <div class="metric">
                    <div class="metric-value">\${metrics.totalRestarts}</div>
                    <div class="metric-label">Total Restarts</div>
                </div>
            \";
        }
        function updateAlerts(alerts) {
            const container = document.getElementById('alertsList');
            if (alerts.length === 0) {
                container.innerHTML = '<div style=""color": #6b7280;">No recent alerts</div>';
                return;
            }
            container.innerHTML = alerts.map(alert => \"
                <div class="process-item">
                    <div>
                        <strong>\${alert.type}</strong><br>
                        <span style=""color": #6b7280; font-size: 0.9em;">\${new Date(alert.timestamp).toLocaleString()}</span>
                    </div>
                    <div style=""color": #6b7280; font-size: 0.9em;">
                        \${alert.data?.message || alert.message || 'Alert'}
                    </div>
                </div>
            \").join('');
        }
        async function refreshData() {
            try {
                const [healthRes, processesRes, systemRes, alertsRes] = await Promise.all([fetch('/api/health'),
                    fetch('/api/processes'),
                    fetch('/api/system'),
                    fetch('/api/alerts')
                ]);
                const health = await healthRes.json();
                const processes = await processesRes.json();
                const system = await systemRes.json();
                const alerts = await alertsRes.json();
                updateHealthScore(health.healthScore);
                updateProcesses(processes);
                updateSystemMetrics(system);
                updateProcessMetrics({
                    "onlineProcesses": processes.filter(p => p.status === 'online').length,
                    "totalProcesses": processes.length,
                    "totalMemory": processes.reduce((sum, p) => sum + p.memory, 0),
                    "totalCPU": processes.reduce((sum, p) => sum + p.cpu, 0),
                    "totalRestarts": processes.reduce((sum, p) => sum + p.restarts, 0)
                });
                updateAlerts(alerts);
            } catch (error) {
                console.error('Failed to refresh "data": ', error);
            }
        }
        function startAutoRefresh() {
            if (autoRefreshInterval) clearInterval(autoRefreshInterval);
            autoRefreshInterval = setInterval(refreshData, 30000);
        }
        function stopAutoRefresh() {
            if (autoRefreshInterval) {
                clearInterval(autoRefreshInterval);
                autoRefreshInterval = null;
            }
        }
        document.getElementById('autoRefresh').addEventListener('change', (e) => {
            if (e.target.checked) {
                startAutoRefresh();
            } else {
                stopAutoRefresh();
            }
        });
        // Initial load
        refreshData();
        startAutoRefresh();
    </script>
</body>
</html>
    ";
  }
  async run() {
    try {
      await this.initialize();
      this.log('🎯 Health Dashboard is now running');
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Health Dashboard...');
        if (this.server) {
          this.server.close();
        }
        pm2.disconnect();
        process.exit(0);
      });
    } catch (error) {
      this.log(`❌ Fatal "error": ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}
// Run the dashboard
if (require.main === module) {
  const dashboard = new HealthDashboard();
  dashboard.run();
}
module.exports = HealthDashboard;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const http = require('http')
const { execSync } = require('child_process')
    this.logFile = path.join(this.projectRoot, 'logs', 'health-dashboard.log')
    this.dashboardFile = path.join(this.projectRoot, 'logs', 'dashboard-data.json')
      await fs.mkdir(path.join(this.projectRoot, 'logs')
      console.log('Logs directory already exists')
  log(message, level = 'INFO')
    fs.appendFile(this.logFile, logMessage + '\n')
    this.log('� Initializing Health Dashboard...')
          this.log(` Failed to connect to "PM2"`)
      this.log(` Dashboard update "failed"`)
      return { "status": 'offline', "color": 'red', "message"}
      return { "status": 'unstable', "color": 'orange', "message"}
      return { "status": 'warning', "color": 'yellow', "message"}
      return { "status": 'warning', "color": 'yellow', "message"}
    return { "status": 'healthy', "color": 'green', "message"}
      this.log(` Failed to get system "metrics"`)
      const result = execSync('free -m', { "encoding"})
      const result = execSync('top -bn1 | grep "Cpu(s)"', { "encoding"}
        "cores"
      const result = execSync('df -h /', { "encoding"})
        "usagePercent"
      return { "total": '0', "used": '0', "available"}
      const result = execSync('uptime', { "encoding"})
      this.log(` Failed to save dashboard "data"`)
      this.log(` Health report generation "failed"`)
        "type"
        "action"
        "type"
        "message"
        "action"
        "type"
        "message"
        "action"
        "type"
        "message"
        "action"
        "type"
        "message"
        "action"
        res.end(JSON.stringify({ "error"})
        body { font-"family"}
            \"
                    <div class="metric-value"
                container.innerHTML = '<div style=""color": #6b7280;"
            \"
                    "onlineProcesses"
                console.error('Failed to refresh "data")
<<<<<<< HEAD
      this.log(` Fatal "error"`)
=======
      this.log(` Fatal "error"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
