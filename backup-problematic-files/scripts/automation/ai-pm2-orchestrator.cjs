#!/usr/bin/env node
/**
 * AI-Powered PM2 Orchestrator
 * Intelligently manages all PM2 automations with machine learning capabilities
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

class AIPM2Orchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/ai-orchestrator.log');
    this.configFile = path.join(this.projectRoot, 'ai-orchestrator-config.json');
    this.metricsFile = path.join(this.projectRoot, 'logs/ai-metrics.json');
    this.isRunning = false;
    this.processes = new Map();
    this.learningData = {
      performance: [],
      errors: [],
      patterns: [],
      optimizations: []
    };
    this.config = this.loadConfig();
    this.initializeLogging();
  }

  initializeLogging() {
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!require('fs').existsSync(logsDir)) {
      require('fs').mkdirSync(logsDir, { recursive: true });
    }
  }

  loadConfig() {
    try {
      if (require('fs').existsSync(this.configFile)) {
        return JSON.parse(require('fs').readFileSync(this.configFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading config: ${error.message}`);
    }

    // Default configuration
    return {
      monitoring: {
        interval: 30000, // 30 seconds
        healthCheckInterval: 60000, // 1 minute
        performanceCheckInterval: 300000, // 5 minutes
        learningInterval: 900000 // 15 minutes
      },
      thresholds: {
        cpu: 80,
        memory: 85,
        disk: 90,
        responseTime: 5000,
        errorRate: 5
      },
      automation: {
        autoFix: true,
        autoScale: true,
        autoDeploy: false,
        autoMerge: false,
        smartRestart: true,
        predictiveScaling: true
      },
      learning: {
        enabled: true,
        dataRetention: 30, // days
        patternDetection: true,
        optimizationSuggestions: true
      },
      notifications: {
        enabled: true,
        channels: ['console', 'file'],
        alertLevels: ['critical', 'warning', 'info']
      }
    };
  }

  async log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logMessage);
    
    try {
      await fs.appendFile(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async start() {
    this.log('🚀 AI PM2 Orchestrator starting...');
    this.isRunning = true;

    try {
      // Initialize system
      await this.initializeSystem();
      
      // Start monitoring
      await this.startMonitoring();
      
      // Start learning engine
      if (this.config.learning.enabled) {
        await this.startLearningEngine();
      }
      
      // Start automation engine
      await this.startAutomationEngine();
      
      // Start health checks
      await this.startHealthChecks();
      
      this.log('✅ AI PM2 Orchestrator started successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      this.log(`❌ Failed to start AI PM2 Orchestrator: ${error.message}`, 'error');
      throw error;
    }
  }

  async initializeSystem() {
    this.log('🔧 Initializing AI PM2 system...');
    
    // Create necessary directories
    const dirs = ['logs', 'logs/ai', 'logs/automation', 'reports', 'backups'];
    for (const dir of dirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (!require('fs').existsSync(dirPath)) {
        require('fs').mkdirSync(dirPath, { recursive: true });
      }
    }

    // Load existing learning data
    await this.loadLearningData();
    
    // Initialize PM2 processes
    await this.initializePM2Processes();
    
    this.log('✅ System initialization completed');
  }

  async loadLearningData() {
    try {
      if (require('fs').existsSync(this.metricsFile)) {
        const data = JSON.parse(await fs.readFile(this.metricsFile, 'utf8'));
        this.learningData = { ...this.learningData, ...data };
        this.log(`📊 Loaded learning data: ${Object.keys(data).length} categories`);
      }
    } catch (error) {
      this.log(`Warning: Could not load learning data: ${error.message}`);
    }
  }

  async saveLearningData() {
    try {
      await fs.writeFile(this.metricsFile, JSON.stringify(this.learningData, null, 2));
    } catch (error) {
      this.log(`Error saving learning data: ${error.message}`, 'error');
    }
  }

  async initializePM2Processes() {
    this.log('🔄 Initializing PM2 processes...');
    
    try {
      // Get current PM2 processes
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      for (const proc of processes) {
        this.processes.set(proc.name, {
          name: proc.name,
          pid: proc.pid,
          status: proc.pm2_env.status,
          cpu: proc.monit.cpu,
          memory: proc.monit.memory,
          uptime: proc.pm2_env.pm_uptime,
          restarts: proc.pm2_env.restart_time,
          lastHealthCheck: Date.now()
        });
      }
      
      this.log(`✅ Initialized ${this.processes.size} PM2 processes`);
    } catch (error) {
      this.log(`Error initializing PM2 processes: ${error.message}`, 'error');
    }
  }

  async startMonitoring() {
    this.log('📊 Starting intelligent monitoring...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.collectMetrics();
        await this.analyzeMetrics();
        await this.checkThresholds();
      } catch (error) {
        this.log(`Error in monitoring: ${error.message}`, 'error');
      }
    }, this.config.monitoring.interval);
  }

  async startLearningEngine() {
    this.log('🧠 Starting AI learning engine...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.analyzePatterns();
        await this.generateOptimizations();
        await this.updateConfigurations();
      } catch (error) {
        this.log(`Error in learning engine: ${error.message}`, 'error');
      }
    }, this.config.monitoring.learningInterval);
  }

  async startAutomationEngine() {
    this.log('🤖 Starting automation engine...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.executeAutomations();
        await this.optimizeProcesses();
        await this.handleErrors();
      } catch (error) {
        this.log(`Error in automation engine: ${error.message}`, 'error');
      }
    }, this.config.monitoring.performanceCheckInterval);
  }

  async startHealthChecks() {
    this.log('🏥 Starting health checks...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.performHealthChecks();
        await this.checkProcessHealth();
        await this.validateSystemHealth();
      } catch (error) {
        this.log(`Error in health checks: ${error.message}`, 'error');
      }
    }, this.config.monitoring.healthCheckInterval);
  }

  async collectMetrics() {
    const timestamp = new Date().toISOString();
    const metrics = {
      timestamp,
      system: {
        platform: os.platform(),
        arch: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length,
        loadAverage: os.loadavg()
      },
      processes: await this.getProcessMetrics(),
      performance: await this.getPerformanceMetrics(),
      errors: await this.getErrorMetrics()
    };

    // Store metrics for learning
    this.learningData.performance.push(metrics);
    
    // Keep only recent data
    if (this.learningData.performance.length > 1000) {
      this.learningData.performance = this.learningData.performance.slice(-500);
    }

    await this.saveLearningData();
  }

  async getProcessMetrics() {
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      return processes.map(proc => ({
        name: proc.name,
        pid: proc.pid,
        status: proc.pm2_env.status,
        cpu: proc.monit.cpu,
        memory: proc.monit.memory,
        uptime: proc.pm2_env.pm_uptime,
        restarts: proc.pm2_env.restart_time,
        lastRestart: proc.pm2_env.last_restart_time
      }));
    } catch (error) {
      this.log(`Error getting process metrics: ${error.message}`, 'error');
      return [];
    }
  }

  async getPerformanceMetrics() {
    const memUsage = process.memoryUsage();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    
    return {
      memory: {
        rss: memUsage.rss,
        heapTotal: memUsage.heapTotal,
        heapUsed: memUsage.heapUsed,
        external: memUsage.external,
        total: totalMem,
        free: freeMem,
        used: totalMem - freeMem,
        usagePercent: ((totalMem - freeMem) / totalMem) * 100
      },
      cpu: await this.getCPUUsage(),
      disk: await this.getDiskUsage()
    };
  }

  async getCPUUsage() {
    return new Promise((resolve) => {
      const startMeasure = process.cpuUsage();
      setTimeout(() => {
        const endMeasure = process.cpuUsage(startMeasure);
        const cpuPercent = (endMeasure.user + endMeasure.system) / 1000000;
        resolve(cpuPercent);
      }, 100);
    });
  }

  async getDiskUsage() {
    try {
      const diskUsage = execSync('df -h', { encoding: 'utf8' });
      const lines = diskUsage.split('\n').slice(1);
      
      return lines.map(line => {
        const parts = line.split(/\s+/);
        return {
          filesystem: parts[0],
          size: parts[1],
          used: parts[2],
          available: parts[3],
          usePercent: parseInt(parts[4]) || 0,
          mounted: parts[5]
        };
      }).filter(disk => disk.filesystem);
    } catch (error) {
      this.log(`Error getting disk usage: ${error.message}`, 'error');
      return [];
    }
  }

  async getErrorMetrics() {
    try {
      const errorLogs = execSync('pm2 logs --err --lines 100', { encoding: 'utf8' });
      const lines = errorLogs.split('\n').filter(line => line.trim());
      
      return {
        totalErrors: lines.length,
        recentErrors: lines.slice(-10),
        errorRate: lines.length / 100 // errors per 100 log lines
      };
    } catch (error) {
      this.log(`Error getting error metrics: ${error.message}`, 'error');
      return { totalErrors: 0, recentErrors: [], errorRate: 0 };
    }
  }

  async analyzeMetrics() {
    const recentMetrics = this.learningData.performance.slice(-10);
    if (recentMetrics.length < 5) return;

    const analysis = {
      timestamp: new Date().toISOString(),
      trends: await this.analyzeTrends(recentMetrics),
      anomalies: await this.detectAnomalies(recentMetrics),
      predictions: await this.generatePredictions(recentMetrics),
      recommendations: await this.generateRecommendations(recentMetrics)
    };

    // Store analysis
    this.learningData.patterns.push(analysis);
    
    // Keep only recent patterns
    if (this.learningData.patterns.length > 100) {
      this.learningData.patterns = this.learningData.patterns.slice(-50);
    }

    await this.saveLearningData();
  }

  async analyzeTrends(metrics) {
    const trends = {};
    
    // CPU trend analysis
    const cpuValues = metrics.map(m => m.performance.cpu);
    if (cpuValues.length > 1) {
      trends.cpu = {
        average: cpuValues.reduce((a, b) => a + b, 0) / cpuValues.length,
        trend: this.calculateTrend(cpuValues),
        status: this.getStatus(cpuValues, this.config.thresholds.cpu)
      };
    }
    
    // Memory trend analysis
    const memoryValues = metrics.map(m => m.performance.memory.usagePercent);
    if (memoryValues.length > 1) {
      trends.memory = {
        average: memoryValues.reduce((a, b) => a + b, 0) / memoryValues.length,
        trend: this.calculateTrend(memoryValues),
        status: this.getStatus(memoryValues, this.config.thresholds.memory)
      };
    }
    
    return trends;
  }

  calculateTrend(values) {
    if (values.length < 2) return 'stable';
    
    const first = values[0];
    const last = values[values.length - 1];
    const change = ((last - first) / first) * 100;
    
    if (change > 10) return 'increasing';
    if (change < -10) return 'decreasing';
    return 'stable';
  }

  getStatus(values, threshold) {
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    if (average > threshold) return 'warning';
    if (average > threshold * 0.8) return 'caution';
    return 'normal';
  }

  async detectAnomalies(metrics) {
    const anomalies = [];
    
    // Detect CPU spikes
    const cpuValues = metrics.map(m => m.performance.cpu);
    const avgCPU = cpuValues.reduce((a, b) => a + b, 0) / cpuValues.length;
    
    if (avgCPU > this.config.thresholds.cpu) {
      anomalies.push({
        type: 'cpu_spike',
        severity: 'high',
        value: avgCPU,
        threshold: this.config.thresholds.cpu,
        timestamp: new Date().toISOString()
      });
    }
    
    // Detect memory leaks
    const memoryValues = metrics.map(m => m.performance.memory.usagePercent);
    const memoryTrend = this.calculateTrend(memoryValues);
    
    if (memoryTrend === 'increasing' && memoryValues[memoryValues.length - 1] > 70) {
      anomalies.push({
        type: 'memory_leak',
        severity: 'medium',
        trend: memoryTrend,
        current: memoryValues[memoryValues.length - 1],
        timestamp: new Date().toISOString()
      });
    }
    
    return anomalies;
  }

  async generatePredictions(metrics) {
    const predictions = [];
    
    // Predict potential crashes based on memory trend
    const memoryValues = metrics.map(m => m.performance.memory.usagePercent);
    const memoryTrend = this.calculateTrend(memoryValues);
    
    if (memoryTrend === 'increasing' && memoryValues[memoryValues.length - 1] > 80) {
      predictions.push({
        type: 'potential_crash',
        probability: Math.min(90, (memoryValues[memoryValues.length - 1] - 70) * 3),
        timeframe: '1-2 hours',
        reason: 'Memory usage trending upward'
      });
    }
    
    return predictions;
  }

  async generateRecommendations(metrics) {
    const recommendations = [];
    const trends = await this.analyzeTrends(metrics);
    
    // CPU recommendations
    if (trends.cpu && trends.cpu.status === 'warning') {
      recommendations.push({
        type: 'cpu_optimization',
        priority: 'high',
        action: 'Consider scaling up instances or optimizing CPU-intensive operations',
        impact: 'Reduce CPU usage and improve performance'
      });
    }
    
    // Memory recommendations
    if (trends.memory && trends.memory.status === 'warning') {
      recommendations.push({
        type: 'memory_optimization',
        priority: 'high',
        action: 'Review memory usage patterns and implement garbage collection optimization',
        impact: 'Prevent memory leaks and improve stability'
      });
    }
    
    return recommendations;
  }

  async checkThresholds() {
    const latestMetrics = this.learningData.performance[this.learningData.performance.length - 1];
    if (!latestMetrics) return;

    const performance = latestMetrics.performance;
    
    // Check CPU threshold
    if (performance.cpu > this.config.thresholds.cpu) {
      await this.triggerAlert('cpu_high', {
        value: performance.cpu,
        threshold: this.config.thresholds.cpu
      });
    }
    
    // Check memory threshold
    if (performance.memory.usagePercent > this.config.thresholds.memory) {
      await this.triggerAlert('memory_high', {
        value: performance.memory.usagePercent,
        threshold: this.config.thresholds.memory
      });
    }
  }

  async triggerAlert(type, data) {
    const alert = {
      id: `alert_${Date.now()}`,
      type,
      severity: 'warning',
      timestamp: new Date().toISOString(),
      data,
      resolved: false
    };
    
    this.learningData.errors.push(alert);
    
    // Auto-recovery actions
    if (this.config.automation.autoFix) {
      await this.executeRecoveryAction(type, data);
    }
    
    // Save alert
    await this.saveAlert(alert);
    
    this.log(`🚨 Alert triggered: ${type}`, 'warning');
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
        default:
          this.log(`No recovery action defined for ${type}`);
      }
    } catch (error) {
      this.log(`Failed to execute recovery action for ${type}: ${error.message}`, 'error');
    }
  }

  async optimizeCPU() {
    this.log('🔧 Optimizing CPU usage...');
    
    try {
      const processes = await this.getProcessMetrics();
      const highCPUProcesses = processes.filter(p => p.cpu > 50);
      
      for (const proc of highCPUProcesses) {
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        this.log(`Restarted ${proc.name} due to high CPU usage`);
      }
    } catch (error) {
      this.log(`Error optimizing CPU: ${error.message}`, 'error');
    }
  }

  async optimizeMemory() {
    this.log('🔧 Optimizing memory usage...');
    
    try {
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
        this.log('Forced garbage collection');
      }
      
      const processes = await this.getProcessMetrics();
      const highMemoryProcesses = processes.filter(p => p.memory > 100 * 1024 * 1024); // 100MB
      
      for (const proc of highMemoryProcesses) {
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        this.log(`Restarted ${proc.name} due to high memory usage`);
      }
    } catch (error) {
      this.log(`Error optimizing memory: ${error.message}`, 'error');
    }
  }

  async analyzePatterns() {
    this.log('🧠 Analyzing patterns...');
    
    // Analyze error patterns
    const recentErrors = this.learningData.errors.slice(-50);
    const errorPatterns = this.findErrorPatterns(recentErrors);
    
    // Analyze performance patterns
    const recentPerformance = this.learningData.performance.slice(-50);
    const performancePatterns = this.findPerformancePatterns(recentPerformance);
    
    // Store patterns
    this.learningData.patterns.push({
      timestamp: new Date().toISOString(),
      errorPatterns,
      performancePatterns
    });
    
    await this.saveLearningData();
  }

  findErrorPatterns(errors) {
    const patterns = {};
    
    errors.forEach(error => {
      if (!patterns[error.type]) {
        patterns[error.type] = 0;
      }
      patterns[error.type]++;
    });
    
    return patterns;
  }

  findPerformancePatterns(performance) {
    const patterns = {
      cpuSpikes: 0,
      memoryLeaks: 0,
      highLoad: 0
    };
    
    performance.forEach(metric => {
      if (metric.performance.cpu > this.config.thresholds.cpu) {
        patterns.cpuSpikes++;
      }
      if (metric.performance.memory.usagePercent > this.config.thresholds.memory) {
        patterns.memoryLeaks++;
      }
    });
    
    return patterns;
  }

  async generateOptimizations() {
    this.log('⚡ Generating optimizations...');
    
    const optimizations = [];
    
    // CPU optimizations
    if (this.learningData.patterns.some(p => p.performancePatterns?.cpuSpikes > 5)) {
      optimizations.push({
        type: 'cpu_scaling',
        action: 'Scale up CPU-intensive processes',
        priority: 'high',
        impact: 'Reduce CPU spikes and improve performance'
      });
    }
    
    // Memory optimizations
    if (this.learningData.patterns.some(p => p.performancePatterns?.memoryLeaks > 3)) {
      optimizations.push({
        type: 'memory_optimization',
        action: 'Implement memory leak detection and prevention',
        priority: 'high',
        impact: 'Prevent memory leaks and improve stability'
      });
    }
    
    this.learningData.optimizations.push(...optimizations);
    await this.saveLearningData();
  }

  async updateConfigurations() {
    this.log('🔧 Updating configurations...');
    
    // Update PM2 configurations based on learning
    const recentOptimizations = this.learningData.optimizations.slice(-10);
    
    for (const optimization of recentOptimizations) {
      if (optimization.type === 'cpu_scaling' && this.config.automation.autoScale) {
        await this.scaleProcesses();
      }
    }
  }

  async scaleProcesses() {
    this.log('📈 Scaling processes...');
    
    try {
      const processes = await this.getProcessMetrics();
      const highCPUProcesses = processes.filter(p => p.cpu > 70);
      
      for (const proc of highCPUProcesses) {
        // Scale up by increasing instances
        execSync(`pm2 scale ${proc.name} +1`, { stdio: 'pipe' });
        this.log(`Scaled up ${proc.name}`);
      }
    } catch (error) {
      this.log(`Error scaling processes: ${error.message}`, 'error');
    }
  }

  async executeAutomations() {
    this.log('🤖 Executing automations...');
    
    // Execute based on current system state
    const latestMetrics = this.learningData.performance[this.learningData.performance.length - 1];
    if (!latestMetrics) return;

    const performance = latestMetrics.performance;
    
    // Auto-restart if needed
    if (this.config.automation.smartRestart) {
      await this.smartRestart();
    }
    
    // Auto-deploy if enabled
    if (this.config.automation.autoDeploy) {
      await this.autoDeploy();
    }
  }

  async smartRestart() {
    const processes = await this.getProcessMetrics();
    const unhealthyProcesses = processes.filter(p => 
      p.status !== 'online' || p.restarts > 5
    );
    
    for (const proc of unhealthyProcesses) {
      execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
      this.log(`Smart restarted ${proc.name}`);
    }
  }

  async autoDeploy() {
    // Check if there are new commits
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        this.log('Changes detected, triggering deployment...');
        execSync('pm2 reload all', { stdio: 'pipe' });
        this.log('Deployment completed');
      }
    } catch (error) {
      this.log(`Error in auto-deploy: ${error.message}`, 'error');
    }
  }

  async optimizeProcesses() {
    this.log('⚡ Optimizing processes...');
    
    // Optimize based on learning data
    const recentOptimizations = this.learningData.optimizations.slice(-5);
    
    for (const optimization of recentOptimizations) {
      if (optimization.type === 'memory_optimization') {
        await this.optimizeMemory();
      } else if (optimization.type === 'cpu_scaling') {
        await this.scaleProcesses();
      }
    }
  }

  async handleErrors() {
    this.log('🔧 Handling errors...');
    
    const recentErrors = this.learningData.errors.slice(-10);
    const unresolvedErrors = recentErrors.filter(e => !e.resolved);
    
    for (const error of unresolvedErrors) {
      await this.resolveError(error);
    }
  }

  async resolveError(error) {
    this.log(`Resolving error: ${error.type}`);
    
    try {
      switch (error.type) {
        case 'cpu_high':
          await this.optimizeCPU();
          break;
        case 'memory_high':
          await this.optimizeMemory();
          break;
        default:
          this.log(`No resolution strategy for ${error.type}`);
      }
      
      error.resolved = true;
      await this.saveLearningData();
    } catch (err) {
      this.log(`Failed to resolve error ${error.type}: ${err.message}`, 'error');
    }
  }

  async performHealthChecks() {
    this.log('🏥 Performing health checks...');
    
    const processes = await this.getProcessMetrics();
    const unhealthyProcesses = processes.filter(p => p.status !== 'online');
    
    if (unhealthyProcesses.length > 0) {
      this.log(`Found ${unhealthyProcesses.length} unhealthy processes`, 'warning');
      
      for (const proc of unhealthyProcesses) {
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        this.log(`Restarted unhealthy process: ${proc.name}`);
      }
    }
  }

  async checkProcessHealth() {
    const processes = await this.getProcessMetrics();
    
    for (const proc of processes) {
      const processData = this.processes.get(proc.name);
      if (processData) {
        processData.lastHealthCheck = Date.now();
        processData.status = proc.status;
        processData.cpu = proc.cpu;
        processData.memory = proc.memory;
        processData.restarts = proc.restarts;
      }
    }
  }

  async validateSystemHealth() {
    const latestMetrics = this.learningData.performance[this.learningData.performance.length - 1];
    if (!latestMetrics) return;

    const performance = latestMetrics.performance;
    const health = {
      cpu: performance.cpu < this.config.thresholds.cpu,
      memory: performance.memory.usagePercent < this.config.thresholds.memory,
      disk: performance.disk.every(d => d.usePercent < this.config.thresholds.disk),
      processes: this.processes.size > 0
    };

    const overallHealth = Object.values(health).every(h => h);
    
    if (!overallHealth) {
      this.log('System health validation failed', 'warning');
      await this.triggerAlert('system_unhealthy', health);
    }
  }

  async saveAlert(alert) {
    try {
      const alertFile = path.join(this.projectRoot, 'logs/ai-alerts.json');
      let alerts = [];
      
      try {
        const existing = await fs.readFile(alertFile, 'utf8');
        alerts = JSON.parse(existing);
      } catch (error) {
        // File doesn't exist, start with empty array
      }
      
      alerts.push(alert);
      await fs.writeFile(alertFile, JSON.stringify(alerts, null, 2));
    } catch (error) {
      this.log(`Error saving alert: ${error.message}`, 'error');
    }
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGTERM', () => {
      this.log('🛑 AI PM2 Orchestrator shutting down...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      this.log('🛑 AI PM2 Orchestrator shutting down...');
      this.isRunning = false;
      process.exit(0);
    });
  }

  async stop() {
    this.log('🛑 Stopping AI PM2 Orchestrator...');
    this.isRunning = false;
    
    // Save final learning data
    await this.saveLearningData();
    
    this.log('✅ AI PM2 Orchestrator stopped');
  }
}

// Run if called directly
if (require.main === module) {
  const orchestrator = new AIPM2Orchestrator();
  orchestrator.start().catch(console.error);
}

module.exports = AIPM2Orchestrator;