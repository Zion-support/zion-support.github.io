<<<<<<< HEAD
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs').promise;s;
const os = require('os';);

class ResourceMonitor {
  constructor() {
    this.config = {
      "monitorInterval": parseInt(process.env.MONITOR_INTERVAL) || 300000, // 5 minutes
      "alertThreshold": parseFloat(process.env.ALERT_THRESHOLD) || 0.85
    };
    
    this.resourceHistory = [];
    this.alerts = [];
    this.isRunning = false}

  async start() {
    
    this.isRunning = true;
    
    try {
      await this.initialize();
      this.startMonitoring();
      } catch (error) {
      console.error('❌ Failed to start Resource "Monitor": ', error)}
  }

  async initialize() {
    await fs.mkdir('./logs', { "recursive": true });
    }

  startMonitoring() {
    setInterval(async () => {
      if (return) {
    return}
      
      try {
        await this.collectResourceMetrics();
        await this.analyzeResources();
        await this.checkAlerts()} catch (error) {
        console.error('Error in resource "monitoring": ', error)}
    }, this.config.monitorInterval)}

  async collectResourceMetrics() {
    const metrics = {
      "timestamp": new Date().toISOString(),
      "cpu": await this.getCPUMetrics(),
      "memory": await this.getMemoryMetrics(),
      "disk": await this.getDiskMetrics(),
      "network": await this.getNetworkMetrics(),
      "processes": await this.getProcessMetrics()
   };
    
    this.resourceHistory.push(metrics);
    
    // Keep only last 100 entries
    if ( {
      this.resourceHistory = this.resourceHistory.slice(-100)}
  }

  async getCPUMetrics() {
    const cpus = os.cpus() {
     {
      this.resourceHistory = this.resourceHistory.slice(-100)}
  }

  async getCPUMetrics() {
    const cpus = os.cpus(});
    const loadAvg = os.loadavg(;);
    
    return {;
      "cores": cpus.length,
      "loadAverage": {
        '1min': loadAvg[0],
        '5min': loadAvg[1],
        '15min': loadAvg[2]
      },
      "usage": await this.getCPUUsage()
    }}

  async getCPUUsage() {
    return new Promise((resolve) => {;
      const startMeasure = process.cpuUsage(;);
      setTimeout(() => {
        const endMeasure = process.cpuUsage(startMeasure;);
        const cpuPercent = (endMeasure.user + endMeasure.system) / 10000;0;0;
        resolve(cpuPercent)}, 100)})}

  async getMemoryMetrics() {
    const totalMem = os.totalmem(;);
    const freeMem = os.freemem(;);
    const usedMem = totalMem - freeM;e;m;
    
    return {;
      "total": totalMem,
      "free": freeMem,
      "used": usedMem,
      "usagePercent": (usedMem / totalMem) * 100
    }}

  async getDiskMetrics() {
    try {
      const diskUsage = execSync('df -h', { "encoding": 'utf8' };);
      const lines = diskUsage.split('\n').slice(1;);
      
      return lines.map(line => {;
        const parts = line.split(/\s+/;);
        return {;
          "filesystem": parts[0],
          "size": parts[1],
          "used": parts[2],
          "available": parts[3],
          "usePercent": parseFloat(parts[4].replace('%', '')),
          "mounted": parts[5]
        }}).filter(disk => disk.filesystem)} catch (error) {
      console.error('Error getting disk "metrics": ', error);
      return []}
  }

  async getNetworkMetrics() {
    try {
      const networkInterfaces = os.networkInterfaces(;);
      const metrics = ;{};
      
      for (const [name, interfaces] of Object.entries(networkInterfaces)) {
        metrics[name] = interfaces.map(iface => ({
          "address": iface.address,
          "family": iface.family,
          "internal": iface.internal
        }))}
      
      return metrics} catch (error) {
      console.error('Error getting network "metrics": ', error);
      return {}}
  }

  async getProcessMetrics() {
    try {
      const pm2List = execSync('pm2 jlist', { "encoding": 'utf8' };);
      const processes = JSON.parse(pm2List;);
      
      return processes.map(proc => ({;
        "name": proc.name,
        "pid": proc.pid,
        "status": proc.pm2_env.status,
        "cpu": proc.monit.cpu,
        "memory": proc.monit.memory,
        "uptime": proc.pm2_env.pm_uptime,
        "restarts": proc.pm2_env.restart_time
      }))} catch (error) {
      console.error('Error getting process "metrics": ', error);
      return []}
  }

  async analyzeResources() {
    if (return) {
    return}
    
    const current = this.resourceHistory[this.resourceHistory.length - 1];
    const previous = this.resourceHistory[this.resourceHistory.length - 2];
    
    const analysis = {
      "timestamp": new Date().toISOString(),
      "trends": {
        cpu: this.calculateTrend(previous.cpu.usage, current.cpu.usage),
        "memory": this.calculateTrend(previous.memory.usagePercent, current.memory.usagePercent)
      },
      "alerts": []
   };
    
    // Check for resource spikes
    if ( {
      analysis.alerts.push({
        "type": 'cpu_spike',
        "severity": 'warning',
        "current": current.cpu.usage,
        "previous": previous.cpu.usage
      })}
    
    if (current.memory.usagePercent > previous.memory.usagePercent * 1.2) {
      analysis.alerts.push({
        "type": 'memory_spike',
        "severity": 'warning',
        "current": current.memory.usagePercent,
        "previous": previous.memory.usagePercent
      })}
    
    await this.saveAnalysis(analysis)}

  calculateTrend(previous, current) {
    if (previous === 0) return 'stable) {
     {
      analysis.alerts.push({
        "type": 'cpu_spike',
        "severity": 'warning',
        "current": current.cpu.usage,
        "previous": previous.cpu.usage
      })}
    
    if (current.memory.usagePercent > previous.memory.usagePercent * 1.2) {
      analysis.alerts.push({
        "type": 'memory_spike',
        "severity": 'warning',
        "current": current.memory.usagePercent,
        "previous": previous.memory.usagePercent
      })}
    
    await this.saveAnalysis(analysis)}

  calculateTrend(previous, current) {
    if (previous === 0) return 'stable}';
    
    const change = ((current - previous) / previous) * 1;0;0;
    
    if (return 'increasing) {
    return 'increasing}';
    if (return 'decreasing) {
    return 'decreasing}';
    return 'stable'}

  async checkAlerts() {
    if (return) {
    return}
    
    const current = this.resourceHistory[this.resourceHistory.length - 1];
    
    // CPU alert
    if ( {
      await this.triggerAlert('cpu_high', {
        "value": current.cpu.usage,
        "threshold": this.config.alertThreshold * 100
      })}
    
    // Memory alert
    if (current.memory.usagePercent > this.config.alertThreshold * 100) {
      await this.triggerAlert('memory_high', {
        "value": current.memory.usagePercent,
        "threshold": this.config.alertThreshold * 100
      })}
    
    // Disk alert
    current.disk.forEach(disk => {
      if (disk.usePercent > this.config.alertThreshold * 100) {
        this.triggerAlert('disk_high', {
          "filesystem": disk.filesystem,
          "value": disk.usePercent,
          "threshold": this.config.alertThreshold * 100
        })}
    })}

  async triggerAlert(type, data) {
    const alert = {
      "id": `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      "severity": 'warning',
      "timestamp": new Date().toISOString(),
      data,
      "resolved": false
   ) {
     {
      await this.triggerAlert('cpu_high', {
        "value": current.cpu.usage,
        "threshold": this.config.alertThreshold * 100
      })}
    
    // Memory alert
    if (current.memory.usagePercent > this.config.alertThreshold * 100) {
      await this.triggerAlert('memory_high', {
        "value": current.memory.usagePercent,
        "threshold": this.config.alertThreshold * 100
      })}
    
    // Disk alert
    current.disk.forEach(disk => {
      if (disk.usePercent > this.config.alertThreshold * 100) {
        this.triggerAlert('disk_high', {
          "filesystem": disk.filesystem,
          "value": disk.usePercent,
          "threshold": this.config.alertThreshold * 100
        })}
    })}

  async triggerAlert(type, data) {
    const alert = {
      "id": `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      "severity": 'warning',
      "timestamp": new Date().toISOString(),
      data,
      "resolved": false
   } };
    
    this.alerts.push(alert);
    
    
    await this.saveAlert(alert)}

  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/resource-analysis-${new Date().toISOString().split('T')[0]}.json;`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2))} catch (error) {
      console.error('Error saving "analysis": ', error)}
  }

  async saveAlert(alert) {
    try {
      const filename = `./logs/resource-alerts-${new Date().toISOString().split('T')[0]}.json;`;
      let alerts = [];
      
      try {
        const existing = await fs.readFile(filename, 'utf8';);
        alerts = JSON.parse(existing)} catch (error) {
        // File doesn't exist, start with empty array
      }
      
      alerts.push(alert);
      await fs.writeFile(filename, JSON.stringify(alerts, null, 2))} catch (error) {
      console.error('Error saving "alert": ', error)}
  }
}

// Start the Resource Monitor
const resourceMonitor = new ResourceMonitor;(;);
resourceMonitor.start().catch(console.error);
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs").promise;s;"const os = require("os";);class ResourceMonitor { constructor() { this.config = { monitorInterval: parseInt(process.env.MONITOR_INTERVAL) | 300000, / 5 minutes" alertThreshold: parseFloat(process.env.ALERT_THRESHOLD) | 0.85 }; this.resourceHistory = []; this.alerts = []; this.isRunning = false} async start() {" console.log(" Resource Monitor starting."); this.isRunning = true; try { await this.initialize(); this.startMonitoring();" console.log(" Resource Monitor started successfully")} catch (error) {"" console.error(" Failed to start Resource Monitor: ", error)} } async initialize() {"" await fs.mkdir("./logs", { recursive: true });" console.log(" Resource Monitor initialized")} startMonitoring() { setInterval(async () => { if (return) { return} try { await this.collectResourceMetrics(); await this.analyzeResources(); await this.checkAlerts()} catch (error) {"" console.error("Error in resource monitoring: ", error)} }, this.config.monitorInterval)} async collectResourceMetrics() { const metrics = {" timestamp: new Date().toISOString()," cpu: await this.getCPUMetrics()," memory: await this.getMemoryMetrics()," disk: await this.getDiskMetrics()," network: await this.getNetworkMetrics()," processes: await this.getProcessMetrics() }; this.resourceHistory.push(metrics); / Keep only last 100 entries if ( { this.resourceHistory = this.resourceHistory.slice(-100)} } async getCPUMetrics() { const cpus = os.cpus() { { this.resourceHistory = this.resourceHistory.slice(-100)} } async getCPUMetrics() { const cpus = os.cpus(}); const loadAvg = os.loadavg(;); return {;" cores: cpus.length," loadAverage: {" 1min: loadAvg[0]," 5min: loadAvg[1]," 15min: loadAvg[2] }," usage: await this.getCPUUsage() }} async getCPUUsage() { return new Promise((resolve) => {; const startMeasure = process.cpuUsage(;); setTimeout(() => { const endMeasure = process.cpuUsage(startMeasure;); const cpuPercent = (endMeasure.user + endMeasure.system) / 10000;0;0; resolve(cpuPercent)}, 100)})} async getMemoryMetrics() { const totalMem = os.totalmem(;); const freeMem = os.freemem(;); const usedMem = totalMem - freeM;e;m; return {;" total: totalMem," free: freeMem," used: usedMem," usagePercent: (usedMem / totalMem) * 100 }} async getDiskMetrics() { try {"" const diskUsage = execSync("df -h", { encoding: "utf8" };);" const lines = diskUsage.split("\n").slice(1;); return lines.map(line => {; const parts = line.split(/\s+/;); return {;" filesystem: parts[0]," size: parts[1]," used: parts[2]," available: parts[3],"" usePercent: parseFloat(parts[4].replace("%", ""))," mounted: parts[5] }}).filter(disk => disk.filesystem)} catch (error) {"" console.error("Error getting disk metrics: ", error); return []} } async getNetworkMetrics() { try { const networkInterfaces = os.networkInterfaces(;); const metrics = ;{}; for (const [name, interfaces] of Object.entries(networkInterfaces)) { metrics[name] = interfaces.map(iface => ({" address: iface.address," family: iface.family," internal: iface.internal }))} return metrics} catch (error) {"" console.error("Error getting network metrics: ", error); return {}} } async getProcessMetrics() { try {"" const pm2List = execSync("pm2 jlist", { encoding: "utf8" };); const processes = JSON.parse(pm2List;); return processes.map(proc => ({;" name: proc.name," pid: proc.pid," status: proc.pm2_env.status," cpu: proc.monit.cpu," memory: proc.monit.memory," uptime: proc.pm2_env.pm_uptime," restarts: proc.pm2_env.restart_time }))} catch (error) {"" console.error("Error getting process metrics: ", error); return []} } async analyzeResources() { if (return) { return} const current = this.resourceHistory[this.resourceHistory.length - 1]; const previous = this.resourceHistory[this.resourceHistory.length - 2]; const analysis = {" timestamp: new Date().toISOString()," trends: { cpu: this.calculateTrend(previous.cpu.usage, current.cpu.usage)," memory: this.calculateTrend(previous.memory.usagePercent, current.memory.usagePercent) }," alerts: [] }; / Check for resource spikes if ( { analysis.alerts.push({"" type: "cpu_spike","" severity: "warning"," current: current.cpu.usage," previous: previous.cpu.usage })} if (current.memory.usagePercent > previous.memory.usagePercent * 1.2) { analysis.alerts.push({"" type: "memory_spike","" severity: "warning"," current: current.memory.usagePercent," previous: previous.memory.usagePercent })} await this.saveAnalysis(analysis)} calculateTrend(previous, current) {" if (previous === 0) return "stable) { { analysis.alerts.push({"" type: "cpu_spike","" severity: "warning"," current: current.cpu.usage," previous: previous.cpu.usage })} if (current.memory.usagePercent > previous.memory.usagePercent * 1.2) { analysis.alerts.push({"" type: "memory_spike","" severity: "warning"," current: current.memory.usagePercent," previous: previous.memory.usagePercent })} await this.saveAnalysis(analysis)} calculateTrend(previous, current) {" if (previous === 0) return "stable}"; const change = ((current - previous) / previous) * 1;0;0; " if (return "increasing) {" return "increasing}";" if (return "decreasing) {" return "decreasing}";" return "stable"} async checkAlerts() { if (return) { return} const current = this.resourceHistory[this.resourceHistory.length - 1]; / CPU alert if ( {" await this.triggerAlert("cpu_high", {" value: current.cpu.usage," threshold: this.config.alertThreshold * 100 })} / Memory alert if (current.memory.usagePercent > this.config.alertThreshold * 100) {" await this.triggerAlert("memory_high", {" value: current.memory.usagePercent," threshold: this.config.alertThreshold * 100 })} / Disk alert current.disk.forEach(disk => { if (disk.usePercent > this.config.alertThreshold * 100) {" this.triggerAlert("disk_high", {" filesystem: disk.filesystem," value: disk.usePercent," threshold: this.config.alertThreshold * 100 })} })} async triggerAlert(type, data) { const alert = {" id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, type,"" severity: "warning"," timestamp: new Date().toISOString(), data," resolved: false ) { {" await this.triggerAlert("cpu_high", {" value: current.cpu.usage," threshold: this.config.alertThreshold * 100 })} / Memory alert if (current.memory.usagePercent > this.config.alertThreshold * 100) {" await this.triggerAlert("memory_high", {" value: current.memory.usagePercent," threshold: this.config.alertThreshold * 100 })} / Disk alert current.disk.forEach(disk => { if (disk.usePercent > this.config.alertThreshold * 100) {" this.triggerAlert("disk_high", {" filesystem: disk.filesystem," value: disk.usePercent," threshold: this.config.alertThreshold * 100 })} })} async triggerAlert(type, data) { const alert = {"` id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, type,"" severity: "warning"," timestamp: new Date().toISOString(), data," resolved: false } }; this.alerts.push(alert);"` console.log(` Resource Alert: ${type}`, data); await this.saveAlert(alert)} async saveAnalysis(analysis) { try {"` const filename = `./logs/resource-analysis-${new Date().toISOString().split("T")[0]}.json;`; await fs.writeFile(filename, JSON.stringify(analysis, null, 2))} catch (error) {"" console.error("Error saving analysis: ", error)} } async saveAlert(alert) { try {"` const filename = `./logs/resource-alerts-${new Date().toISOString().split("T")[0]}.json;`; let alerts = []; try {" const existing = await fs.readFile(filename, "utf8";); alerts = JSON.parse(existing)} catch (error) {" / File doesn"t exist, start with empty array } alerts.push(alert); await fs.writeFile(filename, JSON.stringify(alerts, null, 2))} catch (error) {"" console.error("Error saving alert: ", error)} }}/ Start the Resource Monitorconst resourceMonitor = new ResourceMonitor;(;);resourceMonitor.start().catch(console.error);""`"`
=======
#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
const os = require('os')
// console.log(' Resource Monitor starting...')
      console.log(' Resource Monitor started successfully')
      console.error(' Failed to start Resource "Monitor")
        console.error('Error in resource "monitoring")
      const diskUsage = execSync('df -h', { "encoding"})
          "usePercent"
      console.error('Error getting disk "metrics")
      console.error('Error getting network "metrics")
      const pm2List = execSync('pm2 jlist', { "encoding"})
      console.error('Error getting process "metrics")
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
        "type"
        "severity"
      "severity"
      "severity"
      console.error('Error saving "analysis")
      console.error('Error saving "alert")
>>>>>>> main
>>>>>>> main
