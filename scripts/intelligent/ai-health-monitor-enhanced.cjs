#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

class EnhancedAIHealthMonitor {
  constructor() {
    this.metrics = {
      cpu: [],
      memory: [],
      disk: [],
      network: [],
      processes: [],
      errors: []
    };
    this.thresholds = {
      cpu: 80,
      memory: 85,
      disk: 90,
      responseTime: 5000
    };
    this.alerts = [];
    this.recoveryActions = [];
    this.isRunning = false;
    this.analysisHistory = [];
  }

  async start() {
    console.log('🤖 Enhanced AI Health Monitor starting...');
    this.isRunning = true;
    
    try {
      // Initialize monitoring
      await this.initializeMonitoring();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      // Start AI analysis
      this.startAIAnalysis();
      
      console.log('✅ Enhanced AI Health Monitor started successfully');
    } catch (error) {
      console.error('❌ Failed to start Enhanced AI Health Monitor:', error);
    }
  }

  async initializeMonitoring() {
    try {
      // Create logs directory
      await fs.mkdir('./logs', { recursive: true });
      
      // Initialize metrics collection
      await this.collectInitialMetrics();
      
      // Setup alert handlers
      this.setupAlertHandlers();
      
      console.log('📊 Monitoring initialized');
    } catch (error) {
      console.error('❌ Failed to initialize monitoring:', error);
    }
  }

  async collectInitialMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {
        platform: os.platform(),
        arch: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length
      },
      processes: await this.getProcessMetrics(),
      network: await this.getNetworkMetrics(),
      disk: await this.getDiskMetrics()
    };

    this.metrics.system = metrics;
    await this.saveMetrics(metrics);
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
        restarts: proc.pm2_env.restart_time
      }));
    } catch (error) {
      console.error('Error getting process metrics:', error);
      return [];
    }
  }

  async getNetworkMetrics() {
    try {
      const networkInterfaces = os.networkInterfaces();
      const metrics = {};
      
      for (const [name, interfaces] of Object.entries(networkInterfaces)) {
        metrics[name] = interfaces.map(iface => ({
          address: iface.address,
          family: iface.family,
          internal: iface.internal
        }));
      }
      
      return metrics;
    } catch (error) {
      console.error('Error getting network metrics:', error);
      return {};
    }
  }

  async getDiskMetrics() {
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
          usePercent: parts[4],
          mounted: parts[5]
        };
      }).filter(disk => disk.filesystem);
    } catch (error) {
      console.error('Error getting disk metrics:', error);
      return [];
    }
  }

  startContinuousMonitoring() {
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.collectMetrics();
        await this.analyzeMetrics();
        await this.checkThresholds();
      } catch (error) {
        console.error('Error in continuous monitoring:', error);
      }
    }, 30000); // Every 30 seconds
  }

  async collectMetrics() {
    const timestamp = new Date().toISOString();
    
    // CPU metrics
    const cpuUsage = await this.getCPUUsage();
    this.metrics.cpu.push({ timestamp, usage: cpuUsage });
    
    // Memory metrics
    const memoryUsage = await this.getMemoryUsage();
    this.metrics.memory.push({ timestamp, ...memoryUsage });
    
    // Process metrics
    const processMetrics = await this.getProcessMetrics();
    this.metrics.processes.push({ timestamp, processes: processMetrics });
    
    // Keep only last 100 entries
    Object.keys(this.metrics).forEach(key => {
      if (Array.isArray(this.metrics[key]) && this.metrics[key].length > 100) {
        this.metrics[key] = this.metrics[key].slice(-100);
      }
    });
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

  async getMemoryUsage() {
    const memUsage = process.memoryUsage();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    
    return {
      rss: memUsage.rss,
      heapTotal: memUsage.heapTotal,
      heapUsed: memUsage.heapUsed,
      external: memUsage.external,
      total: totalMem,
      free: freeMem,
      used: totalMem - freeMem,
      usagePercent: ((totalMem - freeMem) / totalMem) * 100
    };
  }

  async analyzeMetrics() {
    // AI-powered analysis of metrics
    const analysis = {
      timestamp: new Date().toISOString(),
      trends: await this.analyzeTrends(),
      anomalies: await this.detectAnomalies(),
      predictions: await this.predictIssues(),
      recommendations: await this.generateRecommendations()
    };

    await this.saveAnalysis(analysis);
    this.analysisHistory.push(analysis);
    
    // Keep only last 50 analyses
    if (this.analysisHistory.length > 50) {
      this.analysisHistory = this.analysisHistory.slice(-50);
    }
    
    return analysis;
  }

  async analyzeTrends() {
    const trends = {};
    
    // CPU trend analysis
    if (this.metrics.cpu.length > 0) {
      const recentCPU = this.metrics.cpu.slice(-5).map(m => m.usage);
      const avgCPU = recentCPU.reduce((a, b) => a + b, 0) / recentCPU.length;
      trends.cpu = {
        average: avgCPU,
        trend: this.calculateTrend(recentCPU),
        status: avgCPU > this.thresholds.cpu ? 'warning' : 'normal'
      };
    }
    
    // Memory trend analysis
    if (this.metrics.memory.length > 0) {
      const recentMemory = this.metrics.memory.slice(-5).map(m => m.usagePercent);
      const avgMemory = recentMemory.reduce((a, b) => a + b, 0) / recentMemory.length;
      trends.memory = {
        average: avgMemory,
        trend: this.calculateTrend(recentMemory),
        status: avgMemory > this.thresholds.memory ? 'warning' : 'normal'
      };
    }
    
    return trends;
  }

  calculateTrend(values) {
    if (values.length < 2) {
      return 'stable';
    }
    
    const first = values[0];
    const last = values[values.length - 1];
    const change = ((last - first) / first) * 100;
    
    if (change > 5) {
      return 'increasing';
    }
    if (change < -5) {
      return 'decreasing';
    }
    return 'stable';
  }

  async detectAnomalies() {
    const anomalies = [];
    
    // Detect CPU spikes
    if (this.metrics.cpu.length > 3) {
      const recentCPU = this.metrics.cpu.slice(-3).map(m => m.usage);
      const avgCPU = recentCPU.reduce((a, b) => a + b, 0) / recentCPU.length;
      
      if (avgCPU > this.thresholds.cpu) {
        anomalies.push({
          type: 'cpu_spike',
          severity: 'high',
          value: avgCPU,
          threshold: this.thresholds.cpu,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    // Detect memory leaks
    if (this.metrics.memory.length > 10) {
      const memoryValues = this.metrics.memory.slice(-10).map(m => m.usagePercent);
      const trend = this.calculateTrend(memoryValues);
      
      if (trend === 'increasing' && memoryValues[memoryValues.length - 1] > 70) {
        anomalies.push({
          type: 'memory_leak',
          severity: 'medium',
          trend: trend,
          current: memoryValues[memoryValues.length - 1],
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return anomalies;
  }

  async predictIssues() {
    const predictions = [];
    
    // Predict potential crashes based on memory trend
    if (this.metrics.memory.length > 5) {
      const memoryTrend = await this.analyzeTrends();
      if (memoryTrend.memory && memoryTrend.memory.trend === 'increasing') {
        predictions.push({
          type: 'potential_crash',
          probability: Math.min(90, (memoryTrend.memory.average - 70) * 3),
          timeframe: '1-2 hours',
          reason: 'Memory usage trending upward'
        });
      }
    }
    
    return predictions;
  }

  async generateRecommendations() {
    const recommendations = [];
    const trends = await this.analyzeTrends();
    
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
    const currentMetrics = {
      cpu: this.metrics.cpu[this.metrics.cpu.length - 1]?.usage || 0,
      memory: this.metrics.memory[this.metrics.memory.length - 1]?.usagePercent || 0
    };
    
    // Check CPU threshold
    if (currentMetrics.cpu > this.thresholds.cpu) {
      await this.triggerAlert('cpu_high', {
        value: currentMetrics.cpu,
        threshold: this.thresholds.cpu
      });
    }
    
    // Check memory threshold
    if (currentMetrics.memory > this.thresholds.memory) {
      await this.triggerAlert('memory_high', {
        value: currentMetrics.memory,
        threshold: this.thresholds.memory
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
    
    this.alerts.push(alert);
    
    // Auto-recovery actions
    await this.executeRecoveryAction(type, data);
    
    // Save alert
    await this.saveAlert(alert);
    
    console.log(`🚨 Alert triggered: ${type}`, data);
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
          console.log(`No recovery action defined for ${type}`);
      }
    } catch (error) {
      console.error(`Failed to execute recovery action for ${type}:`, error);
    }
  }

  async optimizeCPU() {
    console.log('🔧 Optimizing CPU usage...');
    
    // Restart processes with high CPU usage
    try {
      const processes = await this.getProcessMetrics();
      const highCPUProcesses = processes.filter(p => p.cpu > 50);
      
      for (const proc of highCPUProcesses) {
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        console.log(`Restarted ${proc.name} due to high CPU usage`);
      }
    } catch (error) {
      console.error('Error optimizing CPU:', error);
    }
  }

  async optimizeMemory() {
    console.log('🔧 Optimizing memory usage...');
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
      console.log('Forced garbage collection');
    }
    
    // Restart processes with high memory usage
    try {
      const processes = await this.getProcessMetrics();
      const highMemoryProcesses = processes.filter(p => p.memory > 100 * 1024 * 1024); // 100MB
      
      for (const proc of highMemoryProcesses) {
        execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
        console.log(`Restarted ${proc.name} due to high memory usage`);
      }
    } catch (error) {
      console.error('Error optimizing memory:', error);
    }
  }

  setupAlertHandlers() {
    process.on('SIGTERM', () => {
      console.log('🛑 Enhanced AI Health Monitor shutting down...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      console.log('🛑 Enhanced AI Health Monitor shutting down...');
      this.isRunning = false;
      process.exit(0);
    });
  }

  async saveMetrics(metrics) {
    try {
      const filename = `./logs/health-metrics-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(metrics, null, 2));
    } catch (error) {
      console.error('Error saving metrics:', error);
    }
  }

  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/health-analysis-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2));
    } catch (error) {
      console.error('Error saving analysis:', error);
    }
  }

  async saveAlert(alert) {
    try {
      const filename = `./logs/health-alerts-${new Date().toISOString().split('T')[0]}.json`;
      let alerts = [];
      
      try {
        const existing = await fs.readFile(filename, 'utf8');
        alerts = JSON.parse(existing);
      } catch (error) {
        // File doesn't exist, start with empty array
      }
      
      alerts.push(alert);
      await fs.writeFile(filename, JSON.stringify(alerts, null, 2));
    } catch (error) {
      console.error('Error saving alert:', error);
    }
  }

  startAIAnalysis() {
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        const analysis = await this.analyzeMetrics();
        console.log('🧠 AI Analysis completed:', {
          trends: Object.keys(analysis.trends).length,
          anomalies: analysis.anomalies.length,
          predictions: analysis.predictions.length,
          recommendations: analysis.recommendations.length
        });
      } catch (error) {
        console.error('Error in AI analysis:', error);
      }
    }, 300000); // Every 5 minutes
  }

  // Enhanced methods for better monitoring
  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: await this.calculateSystemHealth(),
      processHealth: await this.calculateProcessHealth(),
      recommendations: await this.generateRecommendations(),
      alerts: this.alerts.slice(-10), // Last 10 alerts
      uptime: process.uptime()
    };
    
    await this.saveHealthReport(report);
    return report;
  }

  async calculateSystemHealth() {
    const recentCPU = this.metrics.cpu.slice(-5).map(m => m.usage);
    const recentMemory = this.metrics.memory.slice(-5).map(m => m.usagePercent);
    
    const avgCPU = recentCPU.length > 0 ? recentCPU.reduce((a, b) => a + b, 0) / recentCPU.length : 0;
    const avgMemory = recentMemory.length > 0 ? recentMemory.reduce((a, b) => a + b, 0) / recentMemory.length : 0;
    
    let healthScore = 100;
    
    if (avgCPU > this.thresholds.cpu) healthScore -= 30;
    if (avgMemory > this.thresholds.memory) healthScore -= 30;
    if (this.alerts.length > 5) healthScore -= 20;
    
    return {
      score: Math.max(0, healthScore),
      status: healthScore > 80 ? 'excellent' : healthScore > 60 ? 'good' : healthScore > 40 ? 'warning' : 'critical',
      cpu: avgCPU,
      memory: avgMemory
    };
  }

  async calculateProcessHealth() {
    const processes = await this.getProcessMetrics();
    const totalProcesses = processes.length;
    const runningProcesses = processes.filter(p => p.status === 'online').length;
    const failedProcesses = processes.filter(p => p.status === 'errored').length;
    
    return {
      total: totalProcesses,
      running: runningProcesses,
      failed: failedProcesses,
      healthPercentage: totalProcesses > 0 ? (runningProcesses / totalProcesses) * 100 : 0
    };
  }

  async saveHealthReport(report) {
    try {
      const filename = `./logs/health-report-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(report, null, 2));
    } catch (error) {
      console.error('Error saving health report:', error);
    }
  }
}

// Start the Enhanced AI Health Monitor
const monitor = new EnhancedAIHealthMonitor();
monitor.start().catch(console.error);

module.exports = EnhancedAIHealthMonitor;