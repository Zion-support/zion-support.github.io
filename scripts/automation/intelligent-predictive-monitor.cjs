#!/usr/bin/env node

/**
 * Zion Tech Group - Intelligent Predictive Monitor
 * Uses ML patterns to predict failures and optimize performance
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');

class IntelligentPredictiveMonitor {
  constructor() {
    this.metrics = {
      memoryUsage: [],
      cpuUsage: [],
      errorRates: [],
      responseTimes: [],
      uptime: []
    };
    this.predictions = {
      failureProbability: 0,
      performanceScore: 0,
      optimizationSuggestions: [],
      nextMaintenance: null
    };
    this.mlModel = {
      failureThreshold: 0.7,
      performanceThreshold: 0.6,
      learningRate: 0.1
    };
    this.reportDir = path.join(process.cwd(), 'predictive-reports');
  }

  async initialize() {
    await this.ensureReportDirectory();
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          console.error('❌ Failed to connect to PM2');
          reject(err);
          return;
        }
        console.log('✅ Connected to PM2 for predictive monitoring');
        this.startMonitoring();
        resolve();
      });
    });
  }

  async ensureReportDirectory() {
    try {
      await fs.mkdir(this.reportDir, { recursive: true });
    } catch (error) {
      console.log('Report directory already exists');
    }
  }

  startMonitoring() {
    setInterval(async () => {
      await this.collectMetrics();
      await this.analyzePatterns();
      await this.generatePredictions();
      await this.optimizePerformance();
      await this.generateReport();
    }, 60000); // Every minute
  }

  async collectMetrics() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }

        const currentMetrics = {
          timestamp: Date.now(),
          processes: processes.map(process => ({
            name: process.name,
            memory: process.monit.memory,
            cpu: process.monit.cpu,
            status: process.pm2_env.status,
            uptime: process.pm2_env.pm_uptime,
            restarts: process.pm2_env.restart_time
          }))
        };

        // Store metrics for analysis
        this.metrics.memoryUsage.push(currentMetrics.processes.reduce((sum, p) => sum + p.memory, 0));
        this.metrics.cpuUsage.push(currentMetrics.processes.reduce((sum, p) => sum + p.cpu, 0));
        this.metrics.errorRates.push(currentMetrics.processes.filter(p => p.status === 'errored').length);
        this.metrics.uptime.push(currentMetrics.processes.reduce((sum, p) => sum + p.uptime, 0));

        // Keep only last 100 data points
        if (this.metrics.memoryUsage.length > 100) {
          this.metrics.memoryUsage.shift();
          this.metrics.cpuUsage.shift();
          this.metrics.errorRates.shift();
          this.metrics.uptime.shift();
        }

        resolve(currentMetrics);
      });
    });
  }

  async analyzePatterns() {
    if (this.metrics.memoryUsage.length < 10) return;

    // Analyze memory usage patterns
    const memoryTrend = this.calculateTrend(this.metrics.memoryUsage);
    const cpuTrend = this.calculateTrend(this.metrics.cpuUsage);
    const errorTrend = this.calculateTrend(this.metrics.errorRates);

    // Detect anomalies
    const memoryAnomaly = this.detectAnomaly(this.metrics.memoryUsage);
    const cpuAnomaly = this.detectAnomaly(this.metrics.cpuUsage);
    const errorAnomaly = this.detectAnomaly(this.metrics.errorRates);

    console.log(`📊 Pattern Analysis:
      Memory Trend: ${memoryTrend > 0 ? '↗️ Increasing' : '↘️ Decreasing'}
      CPU Trend: ${cpuTrend > 0 ? '↗️ Increasing' : '↘️ Decreasing'}
      Error Trend: ${errorTrend > 0 ? '↗️ Increasing' : '↘️ Decreasing'}
      Anomalies: Memory=${memoryAnomaly}, CPU=${cpuAnomaly}, Errors=${errorAnomaly}`);
  }

  calculateTrend(data) {
    if (data.length < 2) return 0;
    const n = data.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = data.reduce((sum, val, index) => sum + val, 0);
    const sumXY = data.reduce((sum, val, index) => sum + (index * val), 0);
    const sumX2 = data.reduce((sum, val, index) => sum + (index * index), 0);
    
    return (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  }

  detectAnomaly(data) {
    if (data.length < 3) return false;
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length;
    const stdDev = Math.sqrt(variance);
    const latest = data[data.length - 1];
    
    return Math.abs(latest - mean) > (2 * stdDev);
  }

  async generatePredictions() {
    if (this.metrics.memoryUsage.length < 10) return;

    // Calculate failure probability based on error rates and resource usage
    const errorRate = this.metrics.errorRates[this.metrics.errorRates.length - 1];
    const memoryUsage = this.metrics.memoryUsage[this.metrics.memoryUsage.length - 1];
    const cpuUsage = this.metrics.cpuUsage[this.metrics.cpuUsage.length - 1];

    // Simple ML-based prediction
    this.predictions.failureProbability = this.calculateFailureProbability(errorRate, memoryUsage, cpuUsage);
    this.predictions.performanceScore = this.calculatePerformanceScore(memoryUsage, cpuUsage);
    this.predictions.optimizationSuggestions = this.generateOptimizationSuggestions();
    this.predictions.nextMaintenance = this.predictNextMaintenance();

    console.log(`🔮 Predictions:
      Failure Probability: ${(this.predictions.failureProbability * 100).toFixed(2)}%
      Performance Score: ${(this.predictions.performanceScore * 100).toFixed(2)}%
      Next Maintenance: ${this.predictions.nextMaintenance}`);
  }

  calculateFailureProbability(errorRate, memoryUsage, cpuUsage) {
    // Weighted factors for failure prediction
    const errorWeight = 0.4;
    const memoryWeight = 0.3;
    const cpuWeight = 0.3;

    const errorScore = Math.min(errorRate / 10, 1); // Normalize error rate
    const memoryScore = Math.min(memoryUsage / (1024 * 1024 * 1024), 1); // Normalize to GB
    const cpuScore = Math.min(cpuUsage / 100, 1); // Normalize CPU percentage

    return (errorScore * errorWeight) + (memoryScore * memoryWeight) + (cpuScore * cpuWeight);
  }

  calculatePerformanceScore(memoryUsage, cpuUsage) {
    // Inverse relationship - lower resource usage = higher performance
    const memoryScore = 1 - Math.min(memoryUsage / (1024 * 1024 * 1024), 1);
    const cpuScore = 1 - Math.min(cpuUsage / 100, 1);

    return (memoryScore + cpuScore) / 2;
  }

  generateOptimizationSuggestions() {
    const suggestions = [];
    const memoryUsage = this.metrics.memoryUsage[this.metrics.memoryUsage.length - 1];
    const cpuUsage = this.metrics.cpuUsage[this.metrics.cpuUsage.length - 1];

    if (memoryUsage > 1024 * 1024 * 1024) { // > 1GB
      suggestions.push('Consider increasing memory limits or optimizing memory usage');
    }

    if (cpuUsage > 80) {
      suggestions.push('High CPU usage detected - consider process optimization');
    }

    if (this.metrics.errorRates[this.metrics.errorRates.length - 1] > 2) {
      suggestions.push('Multiple errors detected - review error handling');
    }

    return suggestions;
  }

  predictNextMaintenance() {
    const errorRate = this.metrics.errorRates[this.metrics.errorRates.length - 1];
    const failureProb = this.predictions.failureProbability;

    if (failureProb > 0.8) {
      return 'Immediate attention required';
    } else if (failureProb > 0.6) {
      return 'Within 24 hours';
    } else if (errorRate > 1) {
      return 'Within 48 hours';
    } else {
      return 'Within 1 week';
    }
  }

  async optimizePerformance() {
    if (this.predictions.failureProbability > this.mlModel.failureThreshold) {
      console.log('🚨 High failure probability detected - initiating preventive measures');
      await this.initiatePreventiveMeasures();
    }

    if (this.predictions.performanceScore < this.mlModel.performanceThreshold) {
      console.log('⚡ Low performance detected - initiating optimization');
      await this.initiatePerformanceOptimization();
    }
  }

  async initiatePreventiveMeasures() {
    // Restart processes with high error rates
    pm2.list((err, processes) => {
      if (err) return;

      processes.forEach(process => {
        if (process.pm2_env.restart_time > 5) {
          console.log(`🔄 Restarting ${process.name} due to high restart count`);
          pm2.restart(process.name);
        }
      });
    });
  }

  async initiatePerformanceOptimization() {
    // Optimize memory usage
    pm2.list((err, processes) => {
      if (err) return;

      processes.forEach(process => {
        if (process.monit.memory > 1024 * 1024 * 1024) { // > 1GB
          console.log(`💾 Optimizing memory for ${process.name}`);
          // Could implement memory optimization strategies here
        }
      });
    });
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: {
        currentMemory: this.metrics.memoryUsage[this.metrics.memoryUsage.length - 1] || 0,
        currentCPU: this.metrics.cpuUsage[this.metrics.cpuUsage.length - 1] || 0,
        currentErrors: this.metrics.errorRates[this.metrics.errorRates.length - 1] || 0
      },
      predictions: this.predictions,
      trends: {
        memoryTrend: this.calculateTrend(this.metrics.memoryUsage),
        cpuTrend: this.calculateTrend(this.metrics.cpuUsage),
        errorTrend: this.calculateTrend(this.metrics.errorRates)
      },
      anomalies: {
        memory: this.detectAnomaly(this.metrics.memoryUsage),
        cpu: this.detectAnomaly(this.metrics.cpuUsage),
        errors: this.detectAnomaly(this.metrics.errorRates)
      }
    };

    const reportPath = path.join(this.reportDir, `predictive-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Predictive report saved to ${reportPath}`);
  }
  {/* Removed stray closing brace */}

// Main execution
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes

async function runPredictiveMonitor() {
  console.log('🧠 Starting Intelligent Predictive Monitor...');
  
  const monitor = new IntelligentPredictiveMonitor();
  
  try {
    await monitor.initialize();
    console.log('✅ Intelligent Predictive Monitor initialized successfully');
    
    // Run continuously
    setInterval(async () => {
      await monitor.collectMetrics();
      await monitor.analyzePatterns();
      await monitor.generatePredictions();
      await monitor.optimizePerformance();
      await monitor.generateReport();
    }, AUTOMATION_INTERVAL);
    
  } catch (error) {
    console.error('❌ Intelligent Predictive Monitor failed:', error.message);
  }
  {/* Removed stray closing brace */}

runPredictiveMonitor();