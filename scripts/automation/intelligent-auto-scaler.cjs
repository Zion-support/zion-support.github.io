<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst pm2 = require("pm2");"const fs = require("fs").promises;"const path = require("path");"const { execSync } = require("child_process");class IntelligentAutoScaler { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "auto-scaler.log");" this.configFile = path.join(this.projectRoot, "logs", "scaling-config.json"); this.scalingConfig = { cpuThreshold: parseFloat(process.env.CPU_THRESHOLD) | 70," memoryThreshold: parseFloat(process.env.MEMORY_THRESHOLD) | 80," minInstances: parseInt(process.env.MIN_INSTANCES) | 1," maxInstances: parseInt(process.env.MAX_INSTANCES) | 5,"" scalingStrategy: process.env.SCALING_STRATEGY | "intelligent"," cooldownPeriod: 300000, / 5 minutes" scaleUpThreshold: 0.8," scaleDownThreshold: 0.3 }; this.scalingHistory = []; this.currentInstances = {}; this.lastScalingTime = {}; this.ensureLogsDirectory(); } async ensureLogsDirectory() { try {"" await fs.mkdir(path.join(this.projectRoot, "logs"), { recursive: true }); await this.loadScalingConfig(); } catch (error) {" console.log("Logs directory already exists"); } }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level}] ${message}`; console.log(logMessage); " fs.appendFile(this.logFile, logMessage + "\n").catch(console.error); } async loadScalingConfig() { try {" const config = await fs.readFile(this.configFile, "utf8"); this.scalingConfig = { .this.scalingConfig, .JSON.parse(config) };" this.log(" Loaded scaling configuration"); } catch (error) {" this.log(" Using default scaling configuration"); } } async saveScalingConfig() { try { await fs.writeFile(this.configFile, JSON.stringify(this.scalingConfig, null, 2)); } catch (error) {""` this.log(` Failed to save scaling config: ${error.message}`, "ERROR"); } } async initialize() {" this.log(" Initializing Intelligent Auto-Scaler."); return new Promise((resolve, reject) => { pm2.connect((err) => { if (err) {""` this.log(` Failed to connect to PM2: ${err.message}`, "ERROR"); reject(err); return; } " this.log(" Connected to PM2 for auto-scaling"); this.startScalingMonitoring(); resolve(); }); }); } startScalingMonitoring() {" this.log(" Starting scaling monitoring."); / Monitor every 2 minutes setInterval(async () => { await this.analyzeScalingNeeds(); await this.executeScalingDecisions(); }, 120000); / Deep analysis every 10 minutes setInterval(async () => { await this.performScalingAnalysis(); await this.optimizeScalingStrategy(); }, 600000); } async analyzeScalingNeeds() { try { const processes = await this.getProcessList(); const scalingNeeds = []; for (const process of processes) {" if (process.pm2_env.status === "online") { const needs = await this.analyzeProcessScalingNeeds(process);" if (needs.action !== "none") { scalingNeeds.push(needs); } } } ` this.log(` Analyzed ${processes.length} processes, found ${scalingNeeds.length} scaling needs`); return scalingNeeds; } catch (error) {""` this.log(` Scaling analysis failed: ${error.message}`, "ERROR"); return []; } } async getProcessList() { return new Promise((resolve, reject) => { pm2.list((err, processes) => { if (err) { reject(err); return; } resolve(processes); }); }); } async analyzeProcessScalingNeeds(process) { const metrics = {" name: process.name," cpu: process.monit.cpu | 0," memory: process.monit.memory | 0," instances: process.pm2_env.instances | 1," uptime: process.pm2_env.pm_uptime," restarts: process.pm2_env.restart_time | 0 }; const scalingDecision = {" process: process.name,"" action: "none","" reason: "","" priority: "medium"," currentInstances: metrics.instances," recommendedInstances: metrics.instances }; / Check if scaling is needed const shouldScaleUp = this.shouldScaleUp(metrics); const shouldScaleDown = this.shouldScaleDown(metrics); if (shouldScaleUp) {" scalingDecision.action = "scale_up"; scalingDecision.recommendedInstances = Math.min( metrics.instances + 1, this.scalingConfig.maxInstances );"` scalingDecision.reason = `High resource usage: CPU ${metrics.cpu}%, Memory ${Math.round(metrics.memory / 1024 / 1024)}MB`; scalingDecision.priority = this.calculatePriority(metrics); } else if (shouldScaleDown) {" scalingDecision.action = "scale_down"; scalingDecision.recommendedInstances = Math.max( metrics.instances - 1, this.scalingConfig.minInstances );"` scalingDecision.reason = `Low resource usage: CPU ${metrics.cpu}%, Memory ${Math.round(metrics.memory / 1024 / 1024)}MB`;" scalingDecision.priority = "low"; } return scalingDecision; } shouldScaleUp(metrics) { const cpuHigh = metrics.cpu > this.scalingConfig.cpuThreshold; const memoryHigh = metrics.memory > this.scalingConfig.memoryThreshold * 1024 * 1024; / Convert to bytes const canScaleUp = metrics.instances < this.scalingConfig.maxInstances; const notRecentlyScaled = !this.wasRecentlyScaled(metrics.name); return (cpuHigh | memoryHigh) && canScaleUp && notRecentlyScaled; } shouldScaleDown(metrics) { const cpuLow = metrics.cpu < this.scalingConfig.cpuThreshold * this.scalingConfig.scaleDownThreshold; const memoryLow = metrics.memory < this.scalingConfig.memoryThreshold * this.scalingConfig.scaleDownThreshold * 1024 * 1024; const canScaleDown = metrics.instances > this.scalingConfig.minInstances; const notRecentlyScaled = !this.wasRecentlyScaled(metrics.name); const stableUptime = (Date.now() - metrics.uptime) > 600000; / 10 minutes return cpuLow && memoryLow && canScaleDown && notRecentlyScaled && stableUptime; } wasRecentlyScaled(processName) { const lastScaling = this.lastScalingTime[processName]; if (!lastScaling) return false; return (Date.now() - lastScaling) < this.scalingConfig.cooldownPeriod; } calculatePriority(metrics) {" let priority = "medium"; if (metrics.cpu > 90 | metrics.memory > this.scalingConfig.memoryThreshold * 1.2 * 1024 * 1024) {" priority = "high"; } else if (metrics.cpu < 50 && metrics.memory < this.scalingConfig.memoryThreshold * 0.5 * 1024 * 1024) {" priority = "low"; } return priority; } async executeScalingDecisions() { const scalingNeeds = await this.analyzeScalingNeeds(); / Sort by priority const sortedNeeds = scalingNeeds.sort((a, b) => {" const priorityOrder = { high: 3, medium: 2, low: 1 }; return priorityOrder[b.priority] - priorityOrder[a.priority]; }); for (const need of sortedNeeds) {" if (need.action === "scale_up") { await this.scaleUpProcess(need);" } else if (need.action === "scale_down") { await this.scaleDownProcess(need); } } } async scaleUpProcess(scalingDecision) { try {` this.log(` Scaling up ${scalingDecision.process} from ${scalingDecision.currentInstances} to ${scalingDecision.recommendedInstances} instances`); / Scale up using PM2 await this.scaleProcess(scalingDecision.process, scalingDecision.recommendedInstances); / Record scaling action" this.recordScalingAction(scalingDecision, "scale_up");` this.log(` Successfully scaled up ${scalingDecision.process}`); } catch (error) {"` this.log(` Failed to scale up ${scalingDecision.process}: ${error.message}`, "ERROR"); } } async scaleDownProcess(scalingDecision) { try {` this.log(` Scaling down ${scalingDecision.process} from ${scalingDecision.currentInstances} to ${scalingDecision.recommendedInstances} instances`); / Scale down using PM2 await this.scaleProcess(scalingDecision.process, scalingDecision.recommendedInstances); / Record scaling action" this.recordScalingAction(scalingDecision, "scale_down");` this.log(` Successfully scaled down ${scalingDecision.process}`); } catch (error) {"` this.log(` Failed to scale down ${scalingDecision.process}: ${error.message}`, "ERROR"); } } async scaleProcess(processName, instances) { return new Promise((resolve, reject) => { pm2.scale(processName, instances, (err) => { if (err) { reject(err); return; } / Update current instances count this.currentInstances[processName] = instances; this.lastScalingTime[processName] = Date.now(); resolve(); }); }); } recordScalingAction(scalingDecision, action) { const scalingRecord = {" timestamp: new Date().toISOString()," process: scalingDecision.process, action," fromInstances: scalingDecision.currentInstances," toInstances: scalingDecision.recommendedInstances," reason: scalingDecision.reason," priority: scalingDecision.priority }; this.scalingHistory.push(scalingRecord); / Keep only last 100 scaling actions if (this.scalingHistory.length > 100) { this.scalingHistory = this.scalingHistory.slice(-100); } / Save scaling history this.saveScalingHistory(); } async saveScalingHistory() { try {" const historyFile = path.join(this.projectRoot, "logs", "scaling-history.json"); await fs.writeFile(historyFile, JSON.stringify(this.scalingHistory, null, 2)); } catch (error) {""` this.log(` Failed to save scaling history: ${error.message}`, "ERROR"); } } async performScalingAnalysis() {" this.log(" Performing scaling analysis."); try { const analysis = {" timestamp: new Date().toISOString()," scalingHistory: this.scalingHistory.length," currentInstances: this.currentInstances," scalingEfficiency: this.calculateScalingEfficiency()," recommendations: this.generateScalingRecommendations() }; " const reportFile = path.join(this.projectRoot, "logs", "scaling-analysis-report.json"); await fs.writeFile(reportFile, JSON.stringify(analysis, null, 2)); " this.log(" Scaling analysis completed and saved"); } catch (error) {""` this.log(` Scaling analysis failed: ${error.message}`, "ERROR"); } } calculateScalingEfficiency() { if (this.scalingHistory.length < 5) {"" return { score: 0.5, message: "Insufficient data for efficiency calculation" }; } const recentScaling = this.scalingHistory.slice(-20);" const scaleUpActions = recentScaling.filter(s => s.action === "scale_up").length;" const scaleDownActions = recentScaling.filter(s => s.action === "scale_down").length; const totalActions = recentScaling.length; / Calculate efficiency based on action balance and frequency const balance = Math.abs(scaleUpActions - scaleDownActions) / totalActions; const efficiency = 1 - balance; / Higher efficiency when actions are balanced return {" score: efficiency,"" level: efficiency > 0.8 ? "excellent" : efficiency > 0.6 ? "good" : "needs_improvement"," scaleUpRatio: scaleUpActions / totalActions," scaleDownRatio: scaleDownActions / totalActions }; } generateScalingRecommendations() { const recommendations = []; const efficiency = this.calculateScalingEfficiency(); if (efficiency.score < 0.6) { recommendations.push({"" type: "threshold_adjustment","" message: "Consider adjusting scaling thresholds for better balance","" action: "Review CPU and memory thresholds" }); } if (this.scalingHistory.length > 10) { const recentScaling = this.scalingHistory.slice(-10); const frequentScaling = recentScaling.length > 5; if (frequentScaling) { recommendations.push({"" type: "cooldown_adjustment","" message: "Frequent scaling detected, consider increasing cooldown period","" action: "Increase cooldown period to reduce scaling frequency" }); } } / Check for processes that never scale const processes = Object.keys(this.currentInstances); const scalingProcesses = [.new Set(this.scalingHistory.map(s => s.process))]; const nonScalingProcesses = processes.filter(p => !scalingProcesses.includes(p)); if (nonScalingProcesses.length > 0) { recommendations.push({"" type: "process_optimization",""` message: `Processes ${nonScalingProcesses.join(", ")} never scale - consider optimization`,"" action: "Review process configuration and resource usage" }); } return recommendations; } async optimizeScalingStrategy() {" this.log(" Optimizing scaling strategy."); try { const efficiency = this.calculateScalingEfficiency(); if (efficiency.score < 0.6) { / Adjust thresholds based on performance const recentScaling = this.scalingHistory.slice(-20);" const scaleUpRatio = recentScaling.filter(s => s.action === "scale_up").length / recentScaling.length; if (scaleUpRatio > 0.7) { / Too many scale-ups, increase thresholds this.scalingConfig.cpuThreshold = Math.min(95, this.scalingConfig.cpuThreshold + 5); this.scalingConfig.memoryThreshold = Math.min(95, this.scalingConfig.memoryThreshold + 5);"` this.log(` Increased scaling thresholds: CPU ${this.scalingConfig.cpuThreshold}%, Memory ${this.scalingConfig.memoryThreshold}%`); } else if (scaleUpRatio < 0.3) { / Too few scale-ups, decrease thresholds this.scalingConfig.cpuThreshold = Math.max(50, this.scalingConfig.cpuThreshold - 5); this.scalingConfig.memoryThreshold = Math.max(50, this.scalingConfig.memoryThreshold - 5);"` this.log(` Decreased scaling thresholds: CPU ${this.scalingConfig.cpuThreshold}%, Memory ${this.scalingConfig.memoryThreshold}%`); } await this.saveScalingConfig(); } / Adjust cooldown period based on scaling frequency const recentScaling = this.scalingHistory.slice(-10); if (recentScaling.length > 7) { this.scalingConfig.cooldownPeriod = Math.min(600000, this.scalingConfig.cooldownPeriod + 60000); / Max 10 minutes` this.log(` Increased cooldown period to ${this.scalingConfig.cooldownPeriod / 1000}s`); } else if (recentScaling.length < 3) { this.scalingConfig.cooldownPeriod = Math.max(120000, this.scalingConfig.cooldownPeriod - 60000); / Min 2 minutes` this.log(` Decreased cooldown period to ${this.scalingConfig.cooldownPeriod / 1000}s`); } await this.saveScalingConfig(); } catch (error) {""` this.log(` Strategy optimization failed: ${error.message}`, "ERROR"); } } async getScalingStatus() { const processes = await this.getProcessList(); const status = {" timestamp: new Date().toISOString()," totalProcesses: processes.length,"" onlineProcesses: processes.filter(p => p.pm2_env.status === "online").length," currentInstances: this.currentInstances," scalingConfig: this.scalingConfig," recentScaling: this.scalingHistory.slice(-5)," efficiency: this.calculateScalingEfficiency() }; return status; } async run() { try { await this.initialize();" this.log(" Intelligent Auto-Scaler is now running"); / Keep the process alive" process.on("SIGINT", async () => {" this.log(" Shutting down Intelligent Auto-Scaler."); pm2.disconnect(); process.exit(0); }); } catch (error) {""` this.log(` Fatal error: ${error.message}`, "ERROR"); process.exit(1); } }}/ Run the auto-scalerif (require.main === module) { const autoScaler = new IntelligentAutoScaler(); autoScaler.run();}module.exports = IntelligentAutoScaler;""`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
/**
 * Intelligent Auto-Scaler;
 * AI-powered auto-scaling system for PM2 processes;
 */
<<<<<<< HEAD
const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
class IntelligentAutoScaler {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'auto-scaler.log');
    this.configFile = path.join(this.projectRoot, 'logs', 'scaling-config.json');
    this.scalingConfig = {
      "cpuThreshold": parseFloat(process.env.CPU_THRESHOLD) || 70,
      "memoryThreshold": parseFloat(process.env.MEMORY_THRESHOLD) || 80,
      "minInstances": parseInt(process.env.MIN_INSTANCES) || 1,
      "maxInstances": parseInt(process.env.MAX_INSTANCES) || 5,
      "scalingStrategy": process.env.SCALING_STRATEGY || 'intelligent',
      "cooldownPeriod": 300000, // 5 minutes
      "scaleUpThreshold": 0.8,
      "scaleDownThreshold": 0.3
    };
    this.scalingHistory = [];
    this.currentInstances = {};
    this.lastScalingTime = {};
    this.ensureLogsDirectory();
  }
  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { "recursive": true });
      await this.loadScalingConfig();
    } catch (error) {
    }
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }
  async loadScalingConfig() {
    try {
      const config = await fs.readFile(this.configFile, 'utf8');
      this.scalingConfig = { ...this.scalingConfig, ...JSON.parse(config) };
      this.log('📋 Loaded scaling configuration');
    } catch (error) {
      this.log('📋 Using default scaling configuration');
    }
  }
  async saveScalingConfig() {
    try {
      await fs.writeFile(this.configFile, JSON.stringify(this.scalingConfig, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save scaling "config": ${error.message}`, 'ERROR');
    }
  }
  async initialize() {
    this.log('⚖️ Initializing Intelligent Auto-Scaler...');
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to "PM2": ${err.message}`, 'ERROR');
          reject(err);
          return;
        }
        this.log('✅ Connected to PM2 for auto-scaling');
        this.startScalingMonitoring();
        resolve();
      });
    });
  }
  startScalingMonitoring() {
    this.log('📊 Starting scaling monitoring...');
    // Monitor every 2 minutes
    setInterval(async () => {
      await this.analyzeScalingNeeds();
      await this.executeScalingDecisions();
    }, 120000);
    // Deep analysis every 10 minutes
    setInterval(async () => {
      await this.performScalingAnalysis();
      await this.optimizeScalingStrategy();
    }, 600000);
  }
  async analyzeScalingNeeds() {
    try {
      const processes = await this.getProcessList();
      const scalingNeeds = [];
      for (const process of processes) {
        if (process.pm2_env.status === 'online') {
          const needs = await this.analyzeProcessScalingNeeds(process);
          if (needs.action !== 'none') {
            scalingNeeds.push(needs);
          }
        }
      }
      this.log(`📈 Analyzed ${processes.length} processes, found ${scalingNeeds.length} scaling needs`);
      return scalingNeeds;
    } catch (error) {
      this.log(`❌ Scaling analysis "failed": ${error.message}`, 'ERROR');
      return [];
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
  async analyzeProcessScalingNeeds(process) {
    const metrics = {
      "name": process.name,
      "cpu": process.monit.cpu || 0,
      "memory": process.monit.memory || 0,
      "instances": process.pm2_env.instances || 1,
      "uptime": process.pm2_env.pm_uptime,
      "restarts": process.pm2_env.restart_time || 0
    };
    const scalingDecision = {
      "process": process.name,
      "action": 'none',
      "reason": '',
      "priority": 'medium',
      "currentInstances": metrics.instances,
      "recommendedInstances": metrics.instances
    };
    // Check if scaling is needed
    const shouldScaleUp = this.shouldScaleUp(metrics);
    const shouldScaleDown = this.shouldScaleDown(metrics);
    if (shouldScaleUp) {
      scalingDecision.action = 'scale_up';
      scalingDecision.recommendedInstances = Math.min(
        metrics.instances + 1,
        this.scalingConfig.maxInstances
      );
      scalingDecision.reason = `High resource "usage": CPU ${metrics.cpu}%, Memory ${Math.round(metrics.memory / 1024 / 1024)}MB`;
      scalingDecision.priority = this.calculatePriority(metrics);
    } else if (shouldScaleDown) {
      scalingDecision.action = 'scale_down';
      scalingDecision.recommendedInstances = Math.max(
        metrics.instances - 1,
        this.scalingConfig.minInstances
      );
      scalingDecision.reason = `Low resource "usage": CPU ${metrics.cpu}%, Memory ${Math.round(metrics.memory / 1024 / 1024)}MB`;
      scalingDecision.priority = 'low';
    }
    return scalingDecision;
  }
  shouldScaleUp(metrics) {
    const cpuHigh = metrics.cpu > this.scalingConfig.cpuThreshold;
    const memoryHigh = metrics.memory > this.scalingConfig.memoryThreshold * 1024 * 1024; // Convert to bytes
    const canScaleUp = metrics.instances < this.scalingConfig.maxInstances;
    const notRecentlyScaled = !this.wasRecentlyScaled(metrics.name);
    return (cpuHigh || memoryHigh) && canScaleUp && notRecentlyScaled;
  }
  shouldScaleDown(metrics) {
    const cpuLow = metrics.cpu < this.scalingConfig.cpuThreshold * this.scalingConfig.scaleDownThreshold;
    const memoryLow = metrics.memory < this.scalingConfig.memoryThreshold * this.scalingConfig.scaleDownThreshold * 1024 * 1024;
    const canScaleDown = metrics.instances > this.scalingConfig.minInstances;
    const notRecentlyScaled = !this.wasRecentlyScaled(metrics.name);
    const stableUptime = (Date.now() - metrics.uptime) > 600000; // 10 minutes
    return cpuLow && memoryLow && canScaleDown && notRecentlyScaled && stableUptime;
  }
  wasRecentlyScaled(processName) {
    const lastScaling = this.lastScalingTime[processName];
    if (!lastScaling) return false;
    return (Date.now() - lastScaling) < this.scalingConfig.cooldownPeriod;
  }
  calculatePriority(metrics) {
    let priority = 'medium';
    if (metrics.cpu > 90 || metrics.memory > this.scalingConfig.memoryThreshold * 1.2 * 1024 * 1024) {
      priority = 'high';
    } else if (metrics.cpu < 50 && metrics.memory < this.scalingConfig.memoryThreshold * 0.5 * 1024 * 1024) {
      priority = 'low';
    }
    return priority;
  }
  async executeScalingDecisions() {
    const scalingNeeds = await this.analyzeScalingNeeds();
    // Sort by priority
    const sortedNeeds = scalingNeeds.sort((a, b) => {
      const priorityOrder = { "high": 3, "medium": 2, "low": 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    for (const need of sortedNeeds) {
      if (need.action === 'scale_up') {
        await this.scaleUpProcess(need);
      } else if (need.action === 'scale_down') {
        await this.scaleDownProcess(need);
      }
    }
  }
  async scaleUpProcess(scalingDecision) {
    try {
      this.log(`📈 Scaling up ${scalingDecision.process} from ${scalingDecision.currentInstances} to ${scalingDecision.recommendedInstances} instances`);
      // Scale up using PM2
      await this.scaleProcess(scalingDecision.process, scalingDecision.recommendedInstances);
      // Record scaling action
      this.recordScalingAction(scalingDecision, 'scale_up');
      this.log(`✅ Successfully scaled up ${scalingDecision.process}`);
    } catch (error) {
      this.log(`❌ Failed to scale up ${scalingDecision.process}: ${error.message}`, 'ERROR');
    }
  }
  async scaleDownProcess(scalingDecision) {
    try {
      this.log(`📉 Scaling down ${scalingDecision.process} from ${scalingDecision.currentInstances} to ${scalingDecision.recommendedInstances} instances`);
      // Scale down using PM2
      await this.scaleProcess(scalingDecision.process, scalingDecision.recommendedInstances);
      // Record scaling action
      this.recordScalingAction(scalingDecision, 'scale_down');
      this.log(`✅ Successfully scaled down ${scalingDecision.process}`);
    } catch (error) {
      this.log(`❌ Failed to scale down ${scalingDecision.process}: ${error.message}`, 'ERROR');
    }
  }
  async scaleProcess(processName, instances) {
    return new Promise((resolve, reject) => {
      pm2.scale(processName, instances, (err) => {
        if (err) {
          reject(err);
          return;
        }
        // Update current instances count
        this.currentInstances[processName] = instances;
        this.lastScalingTime[processName] = Date.now();
        resolve();
      });
    });
  }
  recordScalingAction(scalingDecision, action) {
    const scalingRecord = {
      "timestamp": new Date().toISOString(),
      "process": scalingDecision.process,
      action,
      "fromInstances": scalingDecision.currentInstances,
      "toInstances": scalingDecision.recommendedInstances,
      "reason": scalingDecision.reason,
      "priority": scalingDecision.priority
    };
    this.scalingHistory.push(scalingRecord);
    // Keep only last 100 scaling actions
    if (this.scalingHistory.length > 100) {
      this.scalingHistory = this.scalingHistory.slice(-100);
    }
    // Save scaling history
    this.saveScalingHistory();
  }
  async saveScalingHistory() {
    try {
      const historyFile = path.join(this.projectRoot, 'logs', 'scaling-history.json');
      await fs.writeFile(historyFile, JSON.stringify(this.scalingHistory, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save scaling "history": ${error.message}`, 'ERROR');
    }
  }
  async performScalingAnalysis() {
    this.log('🔍 Performing scaling analysis...');
    try {
      const analysis = {
        "timestamp": new Date().toISOString(),
        "scalingHistory": this.scalingHistory.length,
        "currentInstances": this.currentInstances,
        "scalingEfficiency": this.calculateScalingEfficiency(),
        "recommendations": this.generateScalingRecommendations()
      };
      const reportFile = path.join(this.projectRoot, 'logs', 'scaling-analysis-report.json');
      await fs.writeFile(reportFile, JSON.stringify(analysis, null, 2));
      this.log('📊 Scaling analysis completed and saved');
    } catch (error) {
      this.log(`❌ Scaling analysis "failed": ${error.message}`, 'ERROR');
    }
  }
  calculateScalingEfficiency() {
    if (this.scalingHistory.length < 5) {
      return { "score": 0.5, "message": 'Insufficient data for efficiency calculation' };
    }
    const recentScaling = this.scalingHistory.slice(-20);
    const scaleUpActions = recentScaling.filter(s => s.action === 'scale_up').length;
    const scaleDownActions = recentScaling.filter(s => s.action === 'scale_down').length;
    const totalActions = recentScaling.length;
    // Calculate efficiency based on action balance and frequency
    const balance = Math.abs(scaleUpActions - scaleDownActions) / totalActions;
    const efficiency = 1 - balance; // Higher efficiency when actions are balanced
    return {
      "score": efficiency,
      "level": efficiency > 0.8 ? 'excellent' : efficiency > 0.6 ? 'good' : 'needs_improvement',
      "scaleUpRatio": scaleUpActions / totalActions,
      "scaleDownRatio": scaleDownActions / totalActions
    };
  }
  generateScalingRecommendations() {
    const recommendations = [];
    const efficiency = this.calculateScalingEfficiency();
    if (efficiency.score < 0.6) {
      recommendations.push({
        "type": 'threshold_adjustment',
        "message": 'Consider adjusting scaling thresholds for better balance',
        "action": 'Review CPU and memory thresholds'
      });
    }
    if (this.scalingHistory.length > 10) {
      const recentScaling = this.scalingHistory.slice(-10);
      const frequentScaling = recentScaling.length > 5;
      if (frequentScaling) {
        recommendations.push({
          "type": 'cooldown_adjustment',
          "message": 'Frequent scaling detected, consider increasing cooldown period',
          "action": 'Increase cooldown period to reduce scaling frequency'
        });
      }
    }
    // Check for processes that never scale
    const processes = Object.keys(this.currentInstances);
    const scalingProcesses = [...new Set(this.scalingHistory.map(s => s.process))];
    const nonScalingProcesses = processes.filter(p => !scalingProcesses.includes(p));
    if (nonScalingProcesses.length > 0) {
      recommendations.push({
        "type": 'process_optimization',
        "message": `Processes ${nonScalingProcesses.join(', ')} never scale - consider optimization`,
        "action": 'Review process configuration and resource usage'
      });
    }
    return recommendations;
  }
  async optimizeScalingStrategy() {
    this.log('🎯 Optimizing scaling strategy...');
    try {
      const efficiency = this.calculateScalingEfficiency();
      if (efficiency.score < 0.6) {
        // Adjust thresholds based on performance
        const recentScaling = this.scalingHistory.slice(-20);
        const scaleUpRatio = recentScaling.filter(s => s.action === 'scale_up').length / recentScaling.length;
        if (scaleUpRatio > 0.7) {
          // Too many scale-ups, increase thresholds
          this.scalingConfig.cpuThreshold = Math.min(95, this.scalingConfig.cpuThreshold + 5);
          this.scalingConfig.memoryThreshold = Math.min(95, this.scalingConfig.memoryThreshold + 5);
          this.log(`📊 Increased scaling "thresholds": CPU ${this.scalingConfig.cpuThreshold}%, Memory ${this.scalingConfig.memoryThreshold}%`);
        } else if (scaleUpRatio < 0.3) {
          // Too few scale-ups, decrease thresholds
          this.scalingConfig.cpuThreshold = Math.max(50, this.scalingConfig.cpuThreshold - 5);
          this.scalingConfig.memoryThreshold = Math.max(50, this.scalingConfig.memoryThreshold - 5);
          this.log(`📊 Decreased scaling "thresholds": CPU ${this.scalingConfig.cpuThreshold}%, Memory ${this.scalingConfig.memoryThreshold}%`);
        }
        await this.saveScalingConfig();
      }
      // Adjust cooldown period based on scaling frequency
      const recentScaling = this.scalingHistory.slice(-10);
      if (recentScaling.length > 7) {
        this.scalingConfig.cooldownPeriod = Math.min(600000, this.scalingConfig.cooldownPeriod + 60000); // Max 10 minutes
        this.log(`📊 Increased cooldown period to ${this.scalingConfig.cooldownPeriod / 1000}s`);
      } else if (recentScaling.length < 3) {
        this.scalingConfig.cooldownPeriod = Math.max(120000, this.scalingConfig.cooldownPeriod - 60000); // Min 2 minutes
        this.log(`📊 Decreased cooldown period to ${this.scalingConfig.cooldownPeriod / 1000}s`);
      }
      await this.saveScalingConfig();
    } catch (error) {
      this.log(`❌ Strategy optimization "failed": ${error.message}`, 'ERROR');
    }
  }
  async getScalingStatus() {
    const processes = await this.getProcessList();
    const status = {
      "timestamp": new Date().toISOString(),
      "totalProcesses": processes.length,
      "onlineProcesses": processes.filter(p => p.pm2_env.status === 'online').length,
      "currentInstances": this.currentInstances,
      "scalingConfig": this.scalingConfig,
      "recentScaling": this.scalingHistory.slice(-5),
      "efficiency": this.calculateScalingEfficiency()
    };
    return status;
  }
  async run() {
    try {
      await this.initialize();
      this.log('🎯 Intelligent Auto-Scaler is now running');
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Intelligent Auto-Scaler...');
        pm2.disconnect();
        process.exit(0);
      });
    } catch (error) {
      this.log(`❌ Fatal "error": ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}
// Run the auto-scaler
if (require.main === module) {
  const autoScaler = new IntelligentAutoScaler();
  autoScaler.run();
}
module.exports = IntelligentAutoScaler;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.logFile = path.join(this.projectRoot, 'logs', 'auto-scaler.log')
    this.configFile = path.join(this.projectRoot, 'logs', 'scaling-config.json')
      "scalingStrategy"
      this.log(` Failed to save scaling "config"`)
          this.log(` Failed to connect to "PM2"`)
      this.log(` Scaling analysis "failed"`)
      "action"
      "reason"
      "priority"
      this.log(` Failed to save scaling "history"`)
      this.log(` Scaling analysis "failed"`)
      return { "score": 0.5, "message"}
      "level"
        "type"
        "message"
        "action"
          "type"
          "message"
          "action"
        "type"
        "message"
        "action"
      this.log(` Strategy optimization "failed"`)
      "onlineProcesses"
<<<<<<< HEAD
      this.log(` Fatal "error"`)
=======
      this.log(` Fatal "error"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
