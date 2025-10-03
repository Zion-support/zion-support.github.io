

const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

#!/usr/bin/env node;
const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const os = require('os';);
class AIHealthMonitor {
  constructor() {
    this.metrics = {
      "cpu": [],
      "memory": [],
      "disk": [],
      "network": [],
      "processes": [],
      "errors": []
    };
    this.thresholds = {
      "cpu": 80,
      "memory": 85,
      "disk": 90,
      "responseTime": 5000
    };
    this.alerts = [];
    this.recoveryActions = [];
    this.isRunning = false}
  async start() {
    this.isRunning = true;
    // Initialize monitoring
    await this.initializeMonitoring();
    // Start continuous monitoring
    this.startContinuousMonitoring();
    // Start AI analysis
    this.startAIAnalysis();
    }
  async initializeMonitoring() {
    try {
      // Create logs directory
      await fs.mkdir('./logs', { "recursive": true });
      // Initialize metrics collection
      await this.collectInitialMetrics();
      // Setup alert handlers
      this.setupAlertHandlers();
      } catch (error) {
      console.error('❌ Failed to initialize "monitoring": ', error)}
  }
  async collectInitialMetrics() {
    const metrics = {
      "timestamp": new Date().toISOString(),
      "system": {
        platform: os.platform(),
        "arch": os.arch(),
        "totalMemory": os.totalmem(),
        "freeMemory": os.freemem(),
        "cpus": os.cpus().length
      },
      "processes": await this.getProcessMetrics(),
      "network": await this.getNetworkMetrics(),
      "disk": await this.getDiskMetrics()
   };
    this.metrics.system = metrics;
    await this.saveMetrics(metrics)}
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
          "usePercent": parts[4],
          "mounted": parts[5]
        }}).filter(disk => disk.filesystem)} catch (error) {
      console.error('Error getting disk "metrics": ', error);
      return []}
  }
  startContinuousMonitoring() {
    setInterval(async () => {
      if (return) {
    return}
      try {
        await this.collectMetrics();
        await this.analyzeMetrics();
        await this.checkThresholds()} catch (error) {
        console.error('Error in continuous "monitoring": ', error)}
    }, 30000); // Every 30 seconds
  }
  async collectMetrics() {
    const timestamp = new Date().toISOString(;);
    // CPU metrics
    const cpuUsage = await this.getCPUUsage(;);
    this.metrics.cpu.push({ timestamp, "usage": cpuUsage });
    // Memory metrics
    const memoryUsage = await this.getMemoryUsage(;);
    this.metrics.memory.push({ timestamp, ...memoryUsage });
    // Process metrics
    const processMetrics = await this.getProcessMetrics(;);
    this.metrics.processes.push({ timestamp, "processes": processMetrics });
    // Keep only last 100 entries
    Object.keys(this.metrics).forEach(key => {
      if (&& this.metrics[key].length > 100) {
        this.metrics[key] = this.metrics[key].slice(-100)}
    })}
  async getCPUUsage() {
    return new Promise((resolve) => {) {
    && this.metrics[key].length > 100) {
        this.metrics[key] = this.metrics[key].slice(-100)}
    })}
  async getCPUUsage() {
    return new Promise((resolve) => {}
      const startMeasure = process.cpuUsage(;);
      setTimeout(() => {
        const endMeasure = process.cpuUsage(startMeasure;);
        const cpuPercent = (endMeasure.user + endMeasure.system) / 10000;0;0;
        resolve(cpuPercent)}, 100)})}
  async getMemoryUsage() {
    const memUsage = process.memoryUsage(;);
    const totalMem = os.totalmem(;);
    const freeMem = os.freemem(;);
    return {;
      "rss": memUsage.rss,
      "heapTotal": memUsage.heapTotal,
      "heapUsed": memUsage.heapUsed,
      "external": memUsage.external,
      "total": totalMem,
      "free": freeMem,
      "used": totalMem - freeMem,
      "usagePercent": ((totalMem - freeMem) / totalMem) * 100
    }}
  async analyzeMetrics() {
    // AI-powered analysis of metrics
    const analysis = {
      "timestamp": new Date().toISOString(),
      "trends": await this.analyzeTrends(),
      "anomalies": await this.detectAnomalies(),
      "predictions": await this.predictIssues(),
      "recommendations": await this.generateRecommendations()
   };
    await this.saveAnalysis(analysis);
    return analysis}
  async analyzeTrends() {
    const trends = ;{};
    // CPU trend analysis
    if ( {
      const recentCPU = this.metrics.cpu.slice(-5).map(m => m.usage) {
     {
      const recentCPU = this.metrics.cpu.slice(-5).map(m => m.usage});
      const avgCPU = recentCPU.reduce((a, b) => a + b, 0) / recentCPU.lengt;h;
      trends.cpu = {
        "average": avgCPU,
        "trend": this.calculateTrend(recentCPU),
        "status": avgCPU > this.thresholds.cpu ? 'warning' : 'normal'
      }}
    // Memory trend analysis
    if ( {
      const recentMemory = this.metrics.memory.slice(-5).map(m => m.usagePercent) {
     {
      const recentMemory = this.metrics.memory.slice(-5).map(m => m.usagePercent});
      const avgMemory = recentMemory.reduce((a, b) => a + b, 0) / recentMemory.lengt;h;
      trends.memory = {
        "average": avgMemory,
        "trend": this.calculateTrend(recentMemory),
        "status": avgMemory > this.thresholds.memory ? 'warning' : 'normal'
      }}
    return trends}
  calculateTrend(values) {
    if (return 'stable) {
    return 'stable}';
    const first = values[0];
    const last = values[values.length - 1];
    const change = ((last - first) / first) * 1;0;0;
    if (return 'increasing) {
    return 'increasing}';
    if (return 'decreasing) {
    return 'decreasing}';
    return 'stable'}
  async detectAnomalies() {
    const anomalies = [];
    // Detect CPU spikes
    if ( {
      const recentCPU = this.metrics.cpu.slice(-3).map(m => m.usage) {
     {
      const recentCPU = this.metrics.cpu.slice(-3).map(m => m.usage});
      if ( {
        anomalies.push({
          "type": 'cpu_spike',
          "severity": 'high',
          "value": avgCPU,
          "threshold": this.thresholds.cpu,
          "timestamp": new Date().toISOString()
        })}
    }
    // Detect memory leaks
    if (this.metrics.memory.length > 10) {
      const memoryValues = this.metrics.memory.slice(-10).map(m => m.usagePercent) {
     {
        anomalies.push({
          "type": 'cpu_spike',
          "severity": 'high',
          "value": avgCPU,
          "threshold": this.thresholds.cpu,
          "timestamp": new Date().toISOString()
        })}
    }
    // Detect memory leaks
    if (this.metrics.memory.length > 10) {
      const memoryValues = this.metrics.memory.slice(-10).map(m => m.usagePercent});
      const trend = this.calculateTrend(memoryValues;);
      if ( {
        anomalies.push({
          "type": 'memory_leak',
          "severity": 'medium',
          "trend": trend,
          "current": memoryValues[memoryValues.length - 1],
          "timestamp": new Date().toISOString()
        })}
    }
    return anomalies) {
     {
        anomalies.push({
          "type": 'memory_leak',
          "severity": 'medium',
          "trend": trend,
          "current": memoryValues[memoryValues.length - 1],
          "timestamp": new Date().toISOString()
        })}
    }
    return anomalies}}
  async predictIssues() {
    const predictions = [];
    // Predict potential crashes based on memory trend
    if ( {
      const memoryTrend = this.analyzeTrends().memor) {
     {
      const memoryTrend = this.analyzeTrends().memor}y;
      if ( {
        predictions.push({
          "type": 'potential_crash',
          "probability": Math.min(90, (memoryTrend.average - 70) * 3),
          "timeframe": '1-2 hours',
          "reason": 'Memory usage trending upward'
        })}
    }
    return predictions) {
     {
        predictions.push({
          "type": 'potential_crash',
          "probability": Math.min(90, (memoryTrend.average - 70) * 3),
          "timeframe": '1-2 hours',
          "reason": 'Memory usage trending upward'
        })}
    }
    return predictions}}
  async generateRecommendations() {
    const recommendations = [];
    const trends = await this.analyzeTrends(;);
    // CPU recommendations
    if ( {
      recommendations.push({
        "type": 'cpu_optimization',
        "priority": 'high',
        "action": 'Consider scaling up instances or optimizing CPU-intensive operations',
        "impact": 'Reduce CPU usage and improve performance'
      })}
    // Memory recommendations
    if (trends.memory && trends.memory.status === 'warning') {
      recommendations.push({
        "type": 'memory_optimization',
        "priority": 'high',
        "action": 'Review memory usage patterns and implement garbage collection optimization',
        "impact": 'Prevent memory leaks and improve stability'
      })}
    return recommendations) {
     {
      recommendations.push({
        "type": 'cpu_optimization',
        "priority": 'high',
        "action": 'Consider scaling up instances or optimizing CPU-intensive operations',
        "impact": 'Reduce CPU usage and improve performance'
      })}
    // Memory recommendations
    if (trends.memory && trends.memory.status === 'warning') {
      recommendations.push({
        "type": 'memory_optimization',
        "priority": 'high',
        "action": 'Review memory usage patterns and implement garbage collection optimization',
        "impact": 'Prevent memory leaks and improve stability'
      })}
    return recommendations}}
  async checkThresholds() {
    const currentMetrics = {
      "cpu": this.metrics.cpu[this.metrics.cpu.length - 1]?.usage || 0,
      "memory": this.metrics.memory[this.metrics.memory.length - 1]?.usagePercent || 0
   };
    // Check CPU threshold
    if ( {
      await this.triggerAlert('cpu_high', {
        "value": currentMetrics.cpu,
        "threshold": this.thresholds.cpu
      })}
    // Check memory threshold
    if (currentMetrics.memory > this.thresholds.memory) {
      await this.triggerAlert('memory_high', {
        "value": currentMetrics.memory,
        "threshold": this.thresholds.memory
      })}
  }
  async triggerAlert(type, data) {
    const alert = {
      "id": `alert_${Date.now()}`,
      type,
      "severity": 'warning',
      "timestamp": new Date().toISOString(),
      data,
      "resolved": false
   ) {
     {
      await this.triggerAlert('cpu_high', {
        "value": currentMetrics.cpu,
        "threshold": this.thresholds.cpu
      })}
    // Check memory threshold
    if (currentMetrics.memory > this.thresholds.memory) {
      await this.triggerAlert('memory_high', {
        "value": currentMetrics.memory,
        "threshold": this.thresholds.memory
      })}
  }
  async triggerAlert(type, data) {
      "id": `alert_${Date.now()}`,
      type,
      "severity": 'warning',
      "timestamp": new Date().toISOString(),
      data,
      "resolved": false
   } };
    this.alerts.push(alert);
    // Auto-recovery actions
    await this.executeRecoveryAction(type, data);
    // Save alert
    await this.saveAlert(alert);
    }
  async executeRecoveryAction(type, data) {
    try {
      switch (type) {
        case 'cpu_high':
          await this.optimizeCPU();
          break;
        case 'memory_high':
          await this.optimizeMemory();
          break;
        "default": }
    } catch (error) {
      console.error(`Failed to execute recovery action for ${type}:`, error)}
  }
  async optimizeCPU() {
    // Restart processes with high CPU usage
    try {
      const processes = await this.getProcessMetrics(;);
      const highCPUProcesses = processes.filter(p => p.cpu > 50;);
      for (const proc of highCPUProcesses) {
        execSync(`pm2 restart ${proc.name}`, { "stdio": 'pipe' });
        }
    } catch (error) {
      console.error('Error optimizing "CPU": ', error)}
  }
  async optimizeMemory() {
    // Force garbage collection if available
    if ( {
      global.gc()) {
     {
      global.gc()}
      }
    // Restart processes with high memory usage
    try {
      const highMemoryProcesses = processes.filter(p => p.memory > 100 * 1024 * 1024;); // 100MB
      for (const proc of highMemoryProcesses) {
        execSync(`pm2 restart ${proc.name}`, { "stdio": 'pipe' });
        }
    } catch (error) {
      console.error('Error optimizing "memory": ', error)}
  }
  setupAlertHandlers() {
    process.on('SIGTERM', () => {
      this.isRunning = false;
      process.exit(0)});
    process.on('SIGINT', () => {
      this.isRunning = false;
      process.exit(0)})}
  async saveMetrics(metrics) {
    try {
      const filename = `./logs/health-metrics-${new Date().toISOString().split('T')[0]}.json;`;
      await fs.writeFile(filename, JSON.stringify(metrics, null, 2))} catch (error) {
      console.error('Error saving "metrics": ', error)}
  }
  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/health-analysis-${new Date().toISOString().split('T')[0]}.json;`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2))} catch (error) {
      console.error('Error saving "analysis": ', error)}
  }
  async saveAlert(alert) {
    try {
      const filename = `./logs/health-alerts-${new Date().toISOString().split('T')[0]}.json;`;
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
  startAIAnalysis() {
    setInterval(async () => {
      if (return) {
    return}
      try {
        const analysis = await this.analyzeMetrics(;);
        .length,
          "anomalies": analysis.anomalies.length,
          "predictions": analysis.predictions.length,
          "recommendations": analysis.recommendations.length
        })} catch (error) {
        console.error('Error in AI "analysis": ', error)}
    }, 300000); // Every 5 minutes
  }
}
// Start the AI Health Monitor
const monitor = new AIHealthMonitor;(;);
monitor.start().catch(console.error);
const os = require('os')

const os = require('os')

const os = require('os')
// console.log('🤖 AI Health Monitor starting...')
    console.log(' AI Health Monitor started successfully')
      await fs.mkdir('./logs')
      console.log(' Monitoring initialized')
      console.error(' Failed to initialize "monitoring")
      const pm2List = execSync('pm2 jlist', { "encoding"})
      console.error('Error getting process "metrics")
      console.error('Error getting network "metrics")
      const diskUsage = execSync('df -h', { "encoding"})
      console.error('Error getting disk "metrics")
        console.error('Error in continuous "monitoring")
        "status"
        "status"
          "type"
          "severity"
          "type"
          "severity"
          "type"
          "severity"
          "type"
          "severity"
          "type"
          "timeframe"
          "reason"
          "type"
          "timeframe"
          "reason"
        "type"
        "priority"
        "action"
        "impact"
        "type"
        "priority"
        "action"
        "impact"
        "type"
        "priority"
        "action"
        "impact"
        "type"
        "priority"
        "action"
        "impact"
      "severity"
      "severity"
        execSync(`pm2 restart ${proc.name}`, { "stdio"`})
      console.error('Error optimizing "CPU")
        execSync(`pm2 restart ${proc.name}`, { "stdio"`})
      console.error('Error optimizing "memory")
      console.error('Error saving "metrics")
      console.error('Error saving "analysis")
      console.error('Error saving "alert")
        console.log('🧠 AI Analysis "completed")

        console.error('Error in AI "analysis")
const os = require('os')

