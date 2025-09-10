#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")class MonitoringAutomation { constructor() { this.monitoring = []; this.startTime = Date.now()}" log(message, type = "INFO") { const icons = {" INFO: ""," SUCCESS: ""," ERROR: ""," WARNING: ""," PROGRESS: "" }; console.log(`${icons[type]} ${message}`)} createHealthCheck() {" const healthCheck = "import { NextApiRequest, NextApiResponse } from "nex;t;";"module.exports = default async function handler(req: NextApiRequest, res: NextApiResponse) { const healthCheck = { uptime: process.uptime(),"" message: "OK"," timestamp: Date.now()," environment: process.env.NODE_ENV,"" version: process.env.npm_package_version | "1.0.0" }; try { / Add any additional health checks here / e.g., database connectivity, external API calls, etc res.status(200).json(healthCheck)} catch (error) {" healthCheck.message = "ERROR"; res.status(503).json(healthCheck)}"}";" this.ensureDirectory("pages/api");" fs.writeFileSync("pages/api/health.js", healthCheck);" this.monitoring.push("Created health check endpoint");" this.log("Created health check endpoint", "SUCCESS")} createMetricsCollector() {"" const metrics = "const fs = require("fs")"const path = require("path")class MetricsCollector { constructor() { this.metrics = {" requests: 0," errors: 0," responseTime: []," memoryUsage: []," timestamp: Date.now() }} recordRequest(responseTime) { this.metrics.requests++; this.metrics.responseTime.push(responseTime); / Keep only last 1000 response times if ( { this.metrics.responseTime = this.metrics.responseTime.slice(-1000)} } recordError() { this.metrics.errors++} recordMemoryUsage() { const usage = process.memoryUsage() { { this.metrics.responseTime = this.metrics.responseTime.slice(-1000)} } recordError() { this.metrics.errors++} recordMemoryUsage() { const usage = process.memoryUsage(}); this.metrics.memoryUsage.push({" timestamp: Date.now()," rss: usage.rss," heapTotal: usage.heapTotal," heapUsed: usage.heapUsed," external: usage.external }); / Keep only last 100 memory readings if ( { this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100)} } getMetrics() { const avgResponseTime = this.metrics.responseTime.length > 0 ? this.metrics.responseTime.reduce((a, b) => a + b, 0) / this.metrics.responseTime.length :) { { this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100)} } getMetrics() { const avgResponseTime = this.metrics.responseTime.length > 0 ? this.metrics.responseTime.reduce((a, b) => a + b, 0) / this.metrics.responseTime.length :} ;0; return {; .this.metrics," avgResponseTime: Math.round(avgResponseTime)," errorRate: this.metrics.requests > 0 ? (this.metrics.errors / this.metrics.requests) * 100 : 0 }} saveMetrics() {" const metricsPath = path.join(process.cwd(), "monitoring-metrics.json;";); fs.writeFileSync(metricsPath, JSON.stringify(this.getMetrics(), null, 2))}}"module.exports = MetricsCollector;";" this.ensureDirectory("src/lib");" fs.writeFileSync("src/lib/metrics-collector.js", metrics);" this.monitoring.push("Created metrics collector");" this.log("Created metrics collector", "SUCCESS")} createAlerting() {"" const alerting = "const nodemailer = require("nodemailer")class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({"" service: "gmail"," auth: { user: process.env.ALERT_EMAIL_USER," pass: process.env.ALERT_EMAIL_PASS } })}" async sendAlert(subject, message, severity = "warning") { const mailOptions = {" from: process.env.ALERT_EMAIL_USER," to: process.env.ALERT_EMAIL_RECIPIENTS," subject: \"[\${severity.toUpperCase()}] \${subject}\"," text: message," html: \" <h2>\${subject}</h2>" <p><strong>Severity: </strong> \${severity}</p>" <p><strong>Time: </strong> \${new Date().toISOString()}</p>" <p><strong>Message: </strong></p> <pre>\${message}</pre>" \" }; try { await this.transporter.sendMail(mailOptions);" console.log("Alert sent successfully")} catch (error) {"" console.error("Failed to send alert: ", error)} } checkThresholds(metrics) { const alerts = []; / Check error rate if ( { alerts.push({"" type: "error_rate"," message: \"Error rate is \${metrics.errorRate.toFixed(2)}% (threshold: 5%)\","" severity: "critical" })} / Check response time if (metrics.avgResponseTime > 2000) { alerts.push({"" type: "response_time"," message: \"Average response time is \${metrics.avgResponseTime}ms (threshold: 2000ms)\","" severity: "warning" })} / Check memory usage const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({"" type: "error_rate"," message: \"Error rate is \${metrics.errorRate.toFixed(2)}% (threshold: 5%)\","" severity: "critical" })} / Check response time if (metrics.avgResponseTime > 2000) { alerts.push({"" type: "response_time"," message: \"Average response time is \${metrics.avgResponseTime}ms (threshold: 2000ms)\","" severity: "warning" })} / Check memory usage const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { / 100MB alerts.push({"" type: "memory_usage"," message: \"Memory usage is \${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)\","" severity: "warning" })} return alerts) { { / 100MB alerts.push({"" type: "memory_usage"," message: \"Memory usage is \${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)\","" severity: "warning" })} return alerts}}}"module.exports = AlertingSystem;";" fs.writeFileSync("src/lib/alerting-system.js", alerting);" this.monitoring.push("Created alerting system");" this.log("Created alerting system", "SUCCESS")} createDashboard() {" const dashboard = "<!DOCTYPE html>"<html lang="en"><head>" <meta charset="UTF-8">" <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Zion Tech - Monitoring Dashboard</title>" <script src="https: /cdn.jsdelivr.net/npm/chart.js"></script> <style>" body { font-family: Arial, sans-ser;i;f; margin: 0; padding: 20px; background: #f5f5f5}" .container { max-width: 1200px; margin: 0 auto}" .card { background: white; padding: 20px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1)}" .metric { display: inline-block; margin: 10px 20px 10px 0}" .metric-value { font-size: 24px; font-weight: bold; color: #333}" .metric-label { font-size: 14px; color: #666}" .status-ok { color: #28a745}" .status-warning { color: #ffc107}" .status-error { color: #dc3545}" .chart-container { height: 300px; margin: 20px 0} </style></head><body>" <div class="container"> <h1>Zion Tech - Monitoring Dashboard</h1> " <div class="card"> <h2>System Status</h2>" <div class="metric">" <div class="metric-value status-ok" id="status">OK</div>" <div class="metric-label">Status</div> </div>" <div class="metric">" <div class="metric-value" id="uptime">0</div>" <div class="metric-label">Uptime (s)</div> </div>" <div class="metric">" <div class="metric-value" id="requests">0</div>" <div class="metric-label">Requests</div> </div>" <div class="metric">" <div class="metric-value" id="errors">0</div>" <div class="metric-label">Errors</div> </div> </div>" <div class="card"> <h2>Performance Metrics</h2>" <div class="chart-container">" <canvas id="responseTimeChart"></canvas> </div> </div>" <div class="card"> <h2>Memory Usage</h2>" <div class="chart-container">" <canvas id="memoryChart"></canvas> </div> </div> </div> <script> / Load metrics and update dashboard async function loadMetrics() { try {" const response = await fetch("/api/metrics;";); const metrics = await response.json(;); " document.getElementById("uptime").textContent = Math.round(metrics.uptime);" document.getElementById("requests").textContent = metrics.requests" document.getElementById("errors").textContent = metrics.errors / Update status based on error rate const errorRate = metrics.errorRate |;0;" const statusEl = document.getElementById("status";); if ( {" statusEl.textContent = "ERROR") { {" statusEl.textContent = "ERROR"}" statusEl.className = "metric-value status-error"} else if ( {" statusEl.textContent = "WARNING") { {" statusEl.textContent = "WARNING"}" statusEl.className = "metric-value status-warning"} else {" statusEl.textContent = "OK";" statusEl.className = "metric-value status-ok"} } catch (error) {"" console.error("Failed to load metrics: ", error)} } / Update dashboard every 5 seconds setInterval(loadMetrics, 5000); loadMetrics(); </script></body>"</html>";" fs.writeFileSync("public/monitoring-dashboard.html", dashboard);" this.monitoring.push("Created monitoring dashboard");" this.log("Created monitoring dashboard", "SUCCESS")} ensureDirectory(dirPath) { if (true) {" fs.mkdirSync(dirPath, { recursive: true })} } generateReport() { const duration = Date.now() - this.startTim) { ) {" fs.mkdirSync(dirPath, { recursive: true })} } generateReport() { const duration = Date.now() - this.startTim}e; const report = {" timestamp: new Date().toISOString(),"` duration: `${Math.round(duration / 1000)}s`," monitoring: this.monitoring," summary: { totalMonitoring: this.monitoring.length } };" fs.writeFileSync("monitoring-automation-report.json", JSON.stringify(report, null, 2));" this.log(" Monitoring Automation Report Generated", "SUCCESS")} async run() {" this.log(" Starting Monitoring Automation.", "PROGRESS"); this.createHealthCheck(); this.createMetricsCollector(); this.createAlerting(); this.createDashboard(); this.generateReport(); " this.log(" Monitoring Automation Completed", "SUCCESS")}}if ( { const automation = new MonitoringAutomation) { { const automation = new MonitoringAutomation}(;); automation.run().catch(error => {"" console.error("Monitoring automation failed: ", error); process.exit(1)})}module.exports = MonitoringAutomation;'"`'"`
#!/usr/bin/env node;
<<<<<<< HEAD
/**
 * Monitoring Automation;
 * Sets up comprehensive monitoring for the application;
 */
const fs = require('fs')
const path = require('path')
class MonitoringAutomation {
  constructor() {
    this.monitoring = [];
    this.startTime = Date.now()}
  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
   };
    }
  createHealthCheck() {
    const healthCheck = "import { NextApiRequest, NextApiResponse } from 'nex;t;';
export default async function handler("req": NextApiRequest, "res": NextApiResponse) {
  const healthCheck = {
    uptime: process.uptime(),
    "message": 'OK',
    "timestamp": Date.now(),
    "environment": process.env.NODE_ENV,
    "version": process.env.npm_package_version || '1.0.0'
 };
  try {
    // Add any additional health checks here
    // e.g., database connectivity, external API calls, etc.
    res.status(200).json(healthCheck)} catch (error) {
    healthCheck.message = 'ERROR';
    res.status(503).json(healthCheck)}
}";
    this.ensureDirectory('pages/api');
    fs.writeFileSync('pages/api/health.js', healthCheck);
    this.monitoring.push('Created health check endpoint');
    this.log('Created health check endpoint', 'SUCCESS')}
  createMetricsCollector() {
    const metrics = "const fs = require('fs')
const path = require('path')
class MetricsCollector {
  constructor() {
    this.metrics = {
      "requests": 0,
      "errors": 0,
      "responseTime": [],
      "memoryUsage": [],
      "timestamp": Date.now()
    }}
  recordRequest(responseTime) {
    this.metrics.requests++;
    this.metrics.responseTime.push(responseTime);
    // Keep only last 1000 response times
    if ( {
      this.metrics.responseTime = this.metrics.responseTime.slice(-1000)}
  }
  recordError() {
    this.metrics.errors++}
  recordMemoryUsage() {
    const usage = process.memoryUsage() {
     {
      this.metrics.responseTime = this.metrics.responseTime.slice(-1000)}
  }
  recordError() {
    this.metrics.errors++}
  recordMemoryUsage() {
    const usage = process.memoryUsage(});
    this.metrics.memoryUsage.push({
      "timestamp": Date.now(),
      "rss": usage.rss,
      "heapTotal": usage.heapTotal,
      "heapUsed": usage.heapUsed,
      "external": usage.external
    });
    // Keep only last 100 memory readings
    if ( {
      this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100)}
  }
  getMetrics() {
    const avgResponseTime = this.metrics.responseTime.length > 0 
      ? this.metrics.responseTime.reduce((a, b) => a + b, 0) / this.metrics.responseTime.length 
      :) {
     {
      this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-100)}
  }
  getMetrics() {
    const avgResponseTime = this.metrics.responseTime.length > 0 
      ? this.metrics.responseTime.reduce((a, b) => a + b, 0) / this.metrics.responseTime.length 
      :} ;0;
    return {;
      ...this.metrics,
      "avgResponseTime": Math.round(avgResponseTime),
      "errorRate": this.metrics.requests > 0 ? (this.metrics.errors / this.metrics.requests) * 100 : 0
    }}
  saveMetrics() {
    const metricsPath = path.join(process.cwd(), 'monitoring-metrics.json;';);
    fs.writeFileSync(metricsPath, JSON.stringify(this.getMetrics(), null, 2))}
=======
const fs = require("fs")
const path = require("fs")
const http = require("fs")
const { execSync } = require("child_process")
class MonitoringAutomation {
  constructor() {
    this.projectRoot = process.cwd()
    this.logDir = path.join(this.projectRoot, "logs")
    this.alertsDir = path.join(this.projectRoot, "alerts")
    this.metricsFile = path.join(this.logDir, "metrics.json")
    this.alertsFile = path.join(this.alertsDir, "alerts.json")
    this.thresholds = {
      cpu: 80, // CPU usage percentage;
      memory: 85, // Memory usage percentage;
      disk: 90, // Disk usage percentage;
      responseTime: 5000, // Response time in ms;
      errorRate: 5, // Error rate percentage;
      uptimeMinimum: 99.5 // Minimum uptime percentage,
}
    // Ensure directories exist;
    [this.logDir, this.alertsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }),
}
    }),
}
  log(message, level = "INFO") {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage)
    // Write to log file;
    const logFile = path.join(this.logDir, "monitoring.log")
    fs.appendFileSync(logFile, logMessage + "\n"),
}
  async collectSystemMetrics() {
    this.log("Collecting system metrics...")
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {},
      application: {},
      performance: {}
    }
    try {
      // CPU Usage;
      const cpuUsage = process.cpuUsage()
      metrics.system.cpu = {
        user: cpuUsage.user,
        system: cpuUsage.system,
        usage: Math.round((cpuUsage.user + cpuUsage.system) / 10000) // Rough percentage,
}
      // Memory Usage;
      const memUsage = process.memoryUsage()
      const totalMem = require("os").totalmem()
      const freeMem = require("os").freemem()
      const usedMem = totalMem - freeMem;
      metrics.system.memory = {
        total: Math.round(totalMem / 1024 / 1024), // MB;
        used: Math.round(usedMem / 1024 / 1024), // MB;
        free: Math.round(freeMem / 1024 / 1024), // MB;
        usage: Math.round((usedMem / totalMem) * 100), // Percentage;
        heap: {
          used: Math.round(memUsage.heapUsed / 1024 / 1024), // MB;
          total: Math.round(memUsage.heapTotal / 1024 / 1024) // MB,
}
      }
      // Disk Usage;
      try {
        const diskUsage = execSync("df -h /", { encoding: "utf8" });
        const diskLines = diskUsage.split("\n")[1].split(/\s+/);
        metrics.system.disk = {
          total: diskLines[1],;
          used: diskLines[2],;
          available: diskLines[3],;
          usage: parseInt(diskLines[4].replace("%", ""))}
      } catch (error) {
        this.log("Could not collect disk metrics", "WARN")}
      // Load Average;
      const loadAvg = require("os").loadavg();
      metrics.system.loadAverage = {
        "1min": loadAvg[0],;
        "5min": loadAvg[1],;
        "15min": loadAvg[2]}
      // Network connections (if possible);
      try {
        const netstat = execSync("netstat -an | grep :3000 | wc -l", { encoding: "utf8" });
        metrics.system.connections = parseInt(netstat.trim())} catch (error) {
        metrics.system.connections = 0}
      return metrics} catch (error) {
      this.log(`Error collecting system metrics: ${error.message}`, "ERROR");
      return metrics}
  }

  async collectApplicationMetrics() {
    this.log("Collecting application metrics...");
    const metrics = {
      timestamp: new Date().toISOString(),;
      health: {},;
      performance: {},;
      errors: {}
    }
    try {
      // Application health check;
      const healthResult = await this.checkApplicationHealth();
      metrics.health = healthResult;
      // PM2 process metrics;
      try {
        const pm2List = execSync("pm2 jlist", { encoding: "utf8" });
        const processes = JSON.parse(pm2List);
        metrics.pm2 = processes.map(proc => ({;
          name: proc.name,;
          status: proc.pm2_env.status,;
          cpu: proc.monit.cpu,;
          memory: Math.round(proc.monit.memory / 1024 / 1024), // MB;
          uptime: proc.pm2_env.pm_uptime,;
          restarts: proc.pm2_env.restart_time}))} catch (error) {
        this.log("PM2 metrics not available", "WARN")}
      // Error log analysis;
      const errorMetrics = await this.analyzeErrorLogs();
      metrics.errors = errorMetrics;
      return metrics,
} catch (error) {
      this.log(`Error collecting application metrics: ${error.message}`, "ERROR")
      return metrics,
}
  }
  async checkApplicationHealth() {
    return new Promise((resolve) => {
      const startTime = Date.now()
      const req = http.get("http://localhost:3000/api/health", (res) => {
        const responseTime = Date.now() - startTime;
        resolve({
          status: res.statusCode === 200 ? "healthy" : "unhealthy",
          responseTime,
          statusCode: res.statusCode,
}),
})
      req.on("error", (error) => {
        resolve({
          status: "unhealthy",
          responseTime: Date.now() - startTime,
          error: error.message,
}),
})
      req.setTimeout(5000, () => {
        req.destroy()
        resolve({
          status: "unhealthy",
          responseTime: Date.now() - startTime,
          error: "timeout",
}),
}),
}),
}
  async analyzeErrorLogs() {
    const errorAnalysis = {
      recentErrors: 0,
      errorRate: 0,
      criticalErrors: 0,
      warnings: 0,
}
    try {
      // Analyze error logs from the last hour;
      const logFiles = [
        path.join(this.logDir, "error-monitor.log"),
        path.join(this.logDir, "health-checker.log"),
        path.join(this.logDir, "monitoring.log")]

      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          const content = fs.readFileSync(logFile, "utf8")
          const lines = content.split("\n")
          lines.forEach(line => {
            if (line.includes("[ERROR]")) {
              const timestamp = this.extractTimestamp(line)
              if (timestamp && timestamp > oneHourAgo) {
                errorAnalysis.recentErrors++;
                if (line.includes("CRITICAL") || line.includes("FATAL")) {
                  errorAnalysis.criticalErrors++,
}
              }
            } else if (line.includes("[WARN]")) {
              const timestamp = this.extractTimestamp(line)
              if (timestamp && timestamp > oneHourAgo) {
                errorAnalysis.warnings++,
}
            }
          }),
>>>>>>> origin/automation-fixes
}
module.exports = MetricsCollector;";
    this.ensureDirectory('src/lib');
    fs.writeFileSync('src/lib/metrics-collector.js', metrics);
    this.monitoring.push('Created metrics collector');
    this.log('Created metrics collector', 'SUCCESS')}
  createAlerting() {
    const alerting = "const nodemailer = require('nodemailer')
class AlertingSystem {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      "service": 'gmail',
      "auth": {
        user: process.env.ALERT_EMAIL_USER,
        "pass": process.env.ALERT_EMAIL_PASS
      }
<<<<<<< HEAD
    })}
  async sendAlert(subject, message, severity = 'warning') {
    const mailOptions = {
      "from": process.env.ALERT_EMAIL_USER,
      "to": process.env.ALERT_EMAIL_RECIPIENTS,
      "subject": \"[\${severity.toUpperCase()}] \${subject}\",
      "text": message,
      "html": \"
        <h2>\${subject}</h2>
        <p><strong>"Severity": </strong> \${severity}</p>
        <p><strong>"Time": </strong> \${new Date().toISOString()}</p>
        <p><strong>"Message": </strong></p>
        <pre>\${message}</pre>
      \"
   };
    try {
      await this.transporter.sendMail(mailOptions);
      } catch (error) {
      console.error('Failed to send "alert": ', error)}
  }
  checkThresholds(metrics) {
    const alerts = [];
    // Check error rate
    if ( {
      alerts.push({
        "type": 'error_rate',
        "message": \"Error rate is \${metrics.errorRate.toFixed(2)}% ("threshold": 5%)\",
        "severity": 'critical'
      })}
    // Check response time
    if (metrics.avgResponseTime > 2000) {
      alerts.push({
        "type": 'response_time',
        "message": \"Average response time is \${metrics.avgResponseTime}ms ("threshold": 2000ms)\",
        "severity": 'warning'
      })}
    // Check memory usage
    const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) {
     {
      alerts.push({
        "type": 'error_rate',
        "message": \"Error rate is \${metrics.errorRate.toFixed(2)}% ("threshold": 5%)\",
        "severity": 'critical'
      })}
    // Check response time
    if (metrics.avgResponseTime > 2000) {
      alerts.push({
        "type": 'response_time',
        "message": \"Average response time is \${metrics.avgResponseTime}ms ("threshold": 2000ms)\",
        "severity": 'warning'
      })}
    // Check memory usage
    const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}];
    if ( { // 100MB
      alerts.push({
        "type": 'memory_usage',
        "message": \"Memory usage is \${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB ("threshold": 100MB)\",
        "severity": 'warning'
      })}
    return alerts) {
     { // 100MB
      alerts.push({
        "type": 'memory_usage',
        "message": \"Memory usage is \${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB ("threshold": 100MB)\",
        "severity": 'warning'
      })}
    return alerts}}
=======
      // Calculate error rate (errors per minute)
      errorAnalysis.errorRate = Math.round((errorAnalysis.recentErrors / 60) * 100) / 100;
      } catch (error) {
      this.log(`Error analyzing logs: ${error.message}`, "ERROR")}
    return errorAnalysis}

  extractTimestamp(logLine) {
    const timestampMatch = logLine.match(/\[([\d-T:.Z]+)\]/);
    if (timestampMatch) {
      try {
        return new Date(timestampMatch[1])} catch (error) {
        return null}
    }
    return null}

  async checkThresholds(metrics) {
    this.log("Checking thresholds...");
    const alerts = [];
    // CPU threshold;
    if (metrics.system && metrics.system.cpu && metrics.system.cpu.usage > this.thresholds.cpu) {
      alerts.push({;
        type: "cpu",;
        level: "warning",;
        message: `CPU usage is ${metrics.system.cpu.usage}% (threshold: ${this.thresholds.cpu}%)`,;
        value: metrics.system.cpu.usage,;
        threshold: this.thresholds.cpu})}
    // Memory threshold;
    if (metrics.system && metrics.system.memory && metrics.system.memory.usage > this.thresholds.memory) {
      alerts.push({;
        type: "memory",;
        level: "warning",;
        message: `Memory usage is ${metrics.system.memory.usage}% (threshold: ${this.thresholds.memory}%)`,;
        value: metrics.system.memory.usage,;
        threshold: this.thresholds.memory})}
    // Disk threshold;
    if (metrics.system && metrics.system.disk && metrics.system.disk.usage > this.thresholds.disk) {
      alerts.push({;
        type: "disk",;
        level: "critical",;
        message: `Disk usage is ${metrics.system.disk.usage}% (threshold: ${this.thresholds.disk}%)`,;
        value: metrics.system.disk.usage,;
        threshold: this.thresholds.disk})}
    // Response time threshold;
    if (metrics.application && metrics.application.health && ;
        metrics.application.health.responseTime > this.thresholds.responseTime) {
      alerts.push({;
        type: "response_time",;
        level: "warning",;
        message: `Response time is ${metrics.application.health.responseTime}ms (threshold: ${this.thresholds.responseTime}ms)`,;
        value: metrics.application.health.responseTime,;
        threshold: this.thresholds.responseTime})}
    // Application health;
    if (metrics.application && metrics.application.health && ;
        metrics.application.health.status !== "healthy") {
      alerts.push({;
        type: "health",;
        level: "critical",;
        message: `Application is ${metrics.application.health.status}`,;
        value: metrics.application.health.status,;
        threshold: "healthy"})}
    // Error rate threshold;
    if (metrics.application && metrics.application.errors && ;
        metrics.application.errors.errorRate > this.thresholds.errorRate) {
      alerts.push({;
        type: "error_rate",;
        level: "warning",;
        message: `Error rate is ${metrics.application.errors.errorRate} errors/min (threshold: ${this.thresholds.errorRate})`,;
        value: metrics.application.errors.errorRate,;
        threshold: this.thresholds.errorRate})}
    return alerts}

  async sendAlerts(alerts) {
    if (alerts.length === 0) {
      this.log("No alerts to send");
      return}
    this.log(`Sending ${alerts.length} alerts...`);
    // Save alerts to file;
    let existingAlerts = [];
    if (fs.existsSync(this.alertsFile)) {
      try {
        existingAlerts = JSON.parse(fs.readFileSync(this.alertsFile, "utf8"))} catch (error) {
        existingAlerts = []}
    }
    const newAlerts = alerts.map(alert => ({;
      ...alert,;
      timestamp: new Date().toISOString(),;
      id: `${alert.type}_${Date.now()}`}));
    existingAlerts.push(...newAlerts);
    // Keep only last 100 alerts;
    if (existingAlerts.length > 100) {
      existingAlerts = existingAlerts.slice(-100)}
    fs.writeFileSync(this.alertsFile, JSON.stringify(existingAlerts, null, 2));
    // Log alerts;
    alerts.forEach(alert => {
      this.log(`ALERT [${alert.level.toUpperCase()}]: ${alert.message}`, "ALERT")});
    // In a real system, you would send these to:;
    // - Slack/Discord webhooks;
    // - Email notifications;
    // - PagerDuty/OpsGenie;
    // - SMS alerts;

    this.log(`${alerts.length} alerts processed`)}

  async saveMetrics(systemMetrics, applicationMetrics) {
    const combinedMetrics = {
      timestamp: new Date().toISOString(),;
      system: systemMetrics.system,;
      application: applicationMetrics}
    // Save to metrics file;
    let existingMetrics = [];
    if (fs.existsSync(this.metricsFile)) {
      try {
        existingMetrics = JSON.parse(fs.readFileSync(this.metricsFile, "utf8"))} catch (error) {
        existingMetrics = []}
    }
    existingMetrics.push(combinedMetrics);
    // Keep only last 1000 metrics (roughly 16 hours at 1-minute intervals);
    if (existingMetrics.length > 1000) {
      existingMetrics = existingMetrics.slice(-1000)}
    fs.writeFileSync(this.metricsFile, JSON.stringify(existingMetrics, null, 2));
    this.log("Metrics saved")}

  async generateReport() {
    this.log("Generating monitoring report...");
    try {
      const metrics = JSON.parse(fs.readFileSync(this.metricsFile, "utf8"));
      const alerts = JSON.parse(fs.readFileSync(this.alertsFile, "utf8"));
      const report = {
        timestamp: new Date().toISOString(),;
        summary: {
          totalMetrics: metrics.length,;
          recentAlerts: alerts.filter(a => ;
            new Date(a.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length,;
          criticalAlerts: alerts.filter(a => a.level === "critical").length},;
        latestMetrics: metrics.slice(-1)[0] || {},;
        recentAlerts: alerts.slice(-10) || []}
      const reportFile = path.join(this.logDir, "monitoring-report.json");
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Monitoring report saved to: ${reportFile}`);
      return report;
} catch (error) {
      this.log(`Error generating report: ${error.message}`, "ERROR")
      return null,
>>>>>>> origin/automation-fixes
}
module.exports = AlertingSystem;";
    fs.writeFileSync('src/lib/alerting-system.js', alerting);
    this.monitoring.push('Created alerting system');
    this.log('Created alerting system', 'SUCCESS')}
  createDashboard() {
    const dashboard = "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zion Tech - Monitoring Dashboard</title>
    <script src=""https": //cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: Arial, sans-ser;i;f; "margin": 0; padding: 20px; background: #f5f5f5}
        .container { max-"width": 1200px; margin: 0 auto}
        .card { "background": white; padding: 20px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1)}
        .metric { "display": inline-block; margin: 10px 20px 10px 0}
        .metric-value { font-"size": 24px; font-weight: bold; color: #333}
        .metric-label { font-"size": 14px; color: #666}
        .status-ok { "color": #28a745}
        .status-warning { "color": #ffc107}
        .status-error { "color": #dc3545}
        .chart-container { "height": 300px; margin: 20px 0}
    </style>
</head>
<body>
    <div class="container">
        <h1>Zion Tech - Monitoring Dashboard</h1>
        <div class="card">
            <h2>System Status</h2>
            <div class="metric">
                <div class="metric-value status-ok" id="status">OK</div>
                <div class="metric-label">Status</div>
            </div>
            <div class="metric">
                <div class="metric-value" id="uptime">0</div>
                <div class="metric-label">Uptime (s)</div>
            </div>
            <div class="metric">
                <div class="metric-value" id="requests">0</div>
                <div class="metric-label">Requests</div>
            </div>
            <div class="metric">
                <div class="metric-value" id="errors">0</div>
                <div class="metric-label">Errors</div>
            </div>
        </div>
        <div class="card">
            <h2>Performance Metrics</h2>
            <div class="chart-container">
                <canvas id="responseTimeChart"></canvas>
            </div>
        </div>
        <div class="card">
            <h2>Memory Usage</h2>
            <div class="chart-container">
                <canvas id="memoryChart"></canvas>
            </div>
        </div>
    </div>
    <script>
        // Load metrics and update dashboard
        async function loadMetrics() {
            try {
                const response = await fetch('/api/metrics;';);
                const metrics = await response.json(;);
                document.getElementById('uptime').textContent = Math.round(metrics.uptime);
                document.getElementById('requests').textContent = metrics.requests
                document.getElementById('errors').textContent = metrics.errors
                // Update status based on error rate
                const errorRate = metrics.errorRate ||;0;
                const statusEl = document.getElementById('status';);
                if ( {
                    statusEl.textContent = 'ERROR') {
     {
                    statusEl.textContent = 'ERROR'}
                    statusEl.className = 'metric-value status-error'} else if ( {
                    statusEl.textContent = 'WARNING') {
     {
                    statusEl.textContent = 'WARNING'}
                    statusEl.className = 'metric-value status-warning'} else {
                    statusEl.textContent = 'OK';
                    statusEl.className = 'metric-value status-ok'}
            } catch (error) {
                console.error('Failed to load "metrics": ', error)}
        }
        // Update dashboard every 5 seconds
        setInterval(loadMetrics, 5000);
        loadMetrics();
    </script>
</body>
</html>";
    fs.writeFileSync('public/monitoring-dashboard.html', dashboard);
    this.monitoring.push('Created monitoring dashboard');
    this.log('Created monitoring dashboard', 'SUCCESS')}
  ensureDirectory(dirPath) {
    if () {
      fs.mkdirSync(dirPath, { "recursive": true })}
  }
<<<<<<< HEAD
  generateReport() {
    const duration = Date.now() - this.startTim) {
    ) {
      fs.mkdirSync(dirPath, { "recursive": true })}
=======
  async run() {
    this.log("🔍 Starting monitoring automation...");
    try {
      // Collect metrics;
      const systemMetrics = await this.collectSystemMetrics();
      const applicationMetrics = await this.collectApplicationMetrics();
      // Check thresholds and generate alerts;
      const combinedMetrics = { system: systemMetrics.system, application: applicationMetrics }
      const alerts = await this.checkThresholds(combinedMetrics);
      // Send alerts if any;
      await this.sendAlerts(alerts);
      // Save metrics;
      await this.saveMetrics(systemMetrics, applicationMetrics);
      // Generate report;
      const report = await this.generateReport();
      this.log("✅ Monitoring automation completed");
      return {
        metrics: combinedMetrics,
        alerts,
        report,
}
      ,
} catch (error) {
      this.log(`❌ Monitoring automation failed: ${error.message}`, "ERROR")
      throw error,
}
>>>>>>> origin/automation-fixes
  }
  generateReport() {
    const duration = Date.now() - this.startTim}e;
    const report = {
      "timestamp": new Date().toISOString(),
      "duration": `${Math.round(duration / 1000)}s`,
      "monitoring": this.monitoring,
      "summary": {
        totalMonitoring: this.monitoring.length
      }
   };
    fs.writeFileSync('monitoring-automation-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Monitoring Automation Report Generated', 'SUCCESS')}
  async run() {
    this.log('🚀 Starting Monitoring Automation...', 'PROGRESS');
    this.createHealthCheck();
    this.createMetricsCollector();
    this.createAlerting();
    this.createDashboard();
    this.generateReport();
    this.log('✅ Monitoring Automation Completed', 'SUCCESS')}
}
<<<<<<< HEAD
if ( {
  const automation = new MonitoringAutomation) {
     {
  const automation = new MonitoringAutomation}(;);
  automation.run().catch(error => {
    console.error('Monitoring automation "failed": ', error);
    process.exit(1)})}
module.exports = MonitoringAutomation;
  log(message, type = 'INFO')
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'PROGRESS': '�'
    const healthCheck = "
    "message"
    "version"
    const metrics = "
    const alerting = "
      "service"
      console.error('Failed to send "alert")
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
                console.error('Failed to load "metrics")
    console.error('Monitoring automation "failed")
=======
// Run if this script is executed directly;
if (require.main === module) {
  const monitoring = new MonitoringAutomation()
  monitoring.run()
    .then(results => {
      console.log("\n✅ Monitoring automation completed successfully")
      if (results.alerts.length > 0) {
        console.log(`⚠️ ${results.alerts.length} alerts generated`)
        process.exit(1) // Exit with error code if there are alerts,
}
      process.exit(0),
})
    .catch(error => {
      console.error("\n❌ Monitoring automation failed:", error.message)
      process.exit(1),
}),
}
module.exports = MonitoringAutomation
>>>>>>> origin/automation-fixes
