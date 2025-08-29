#!/usr/bin/env node

/**
 * Zion Performance Monitor
 * Intelligent performance monitoring and optimization system
 */

const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');
const http = require('http');
const https = require('https');

class PerformanceMonitor {
  constructor() {
    this.config = {
      logLevel: process.env.LOG_LEVEL || 'info',
      monitoringInterval: parseInt(process.env.MONITORING_INTERVAL) || 60000,
      alertThreshold: parseInt(process.env.ALERT_THRESHOLD) || 80,
      performanceThresholds: {
        memory: 85, // percentage
        cpu: 80,    // percentage
        responseTime: 2000, // milliseconds
        errorRate: 5 // percentage
      },
      endpoints: [
        { name: 'frontend', url: 'http://localhost:3000' },
        { name: 'backend', url: 'http://localhost:5000' }
      ],
      metrics: ['cpu', 'memory', 'disk', 'network', 'responseTime', 'errorRate']
    };
    
    this.stats = {
      measurements: 0,
      alerts: 0,
      optimizations: 0,
      startTime: Date.now(),
      lastMeasurement: null
    };
    
    this.performanceData = new Map();
    this.alertHistory = [];
    this.optimizationHistory = [];
    this.isRunning = false;
    
    this.init();
  }

  init() {
    this.log('📊 Initializing Zion Performance Monitor...', 'info');
    this.setupLogging();
    this.createLogsDirectory();
    this.initializePerformanceData();
    this.startMonitoring();
    this.log('✅ Performance Monitor initialized successfully', 'info');
  }

  setupLogging() {
    const logLevels = { error: 0, warn: 1, info: 2, debug: 3 };
    this.currentLogLevel = logLevels[this.config.logLevel] || 2;
  }

  createLogsDirectory() {
    if (!fs.existsSync('./logs')) {
      fs.mkdirSync('./logs', { recursive: true });
    }
  }

  log(message, level = 'info') {
    const levels = { error: 0, warn: 1, info: 2, debug: 3 };
    const timestamp = new Date().toISOString();
    
    if (levels[level] <= this.currentLogLevel) {
      const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
      console.log(logMessage);
      
      // Write to log file
      const logFile = `./logs/performance-${level}.log`;
      fs.appendFileSync(logFile, logMessage + '\n');
    }
  }

  initializePerformanceData() {
    this.config.endpoints.forEach(endpoint => {
      this.performanceData.set(endpoint.name, {
        responseTimes: [],
        errorRates: [],
        availability: [],
        lastCheck: null
      });
    });
  }

  startMonitoring() {
    this.isRunning = true;
    
    // Start immediate measurement
    this.performMeasurement();
    
    // Schedule periodic measurements
    setInterval(() => {
      if (this.isRunning) {
        this.performMeasurement();
      }
    }, this.config.monitoringInterval);
    
    // Start real-time monitoring
    this.startRealTimeMonitoring();
  }

  async performMeasurement() {
    this.log('📈 Performing performance measurement...', 'debug');
    this.stats.lastMeasurement = new Date();
    
    try {
      // System performance metrics
      const systemMetrics = await this.measureSystemPerformance();
      
      // Application performance metrics
      const appMetrics = await this.measureApplicationPerformance();
      
      // Network performance metrics
      const networkMetrics = await this.measureNetworkPerformance();
      
      // Analyze and store metrics
      const combinedMetrics = {
        timestamp: new Date(),
        system: systemMetrics,
        application: appMetrics,
        network: networkMetrics
      };
      
      this.storeMetrics(combinedMetrics);
      this.analyzePerformance(combinedMetrics);
      
      this.stats.measurements++;
      
    } catch (error) {
      this.log(`Performance measurement error: ${error}`, 'error');
    }
  }

  async measureSystemPerformance() {
    const metrics = {};
    
    try {
      // CPU usage
      const cpuUsage = os.loadavg();
      metrics.cpu = {
        load1: cpuUsage[0],
        load5: cpuUsage[1],
        load15: cpuUsage[2],
        cores: os.cpus().length
      };
      
      // Memory usage
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;
      metrics.memory = {
        total: totalMem,
        free: freeMem,
        used: usedMem,
        percentage: (usedMem / totalMem) * 100
      };
      
      // Disk usage
      metrics.disk = await this.getDiskUsage();
      
      // System uptime
      metrics.uptime = os.uptime();
      metrics.platform = os.platform();
      metrics.arch = os.arch();
      
    } catch (error) {
      this.log(`System performance measurement error: ${error}`, 'error');
    }
    
    return metrics;
  }

  async getDiskUsage() {
    return new Promise((resolve) => {
      exec('df -h .', (error, stdout, stderr) => {
        if (!error && stdout) {
          try {
            const lines = stdout.toString().split('\n');
            if (lines.length > 1) {
              const parts = lines[1].split(/\s+/);
              if (parts.length >= 5) {
                resolve({
                  total: parts[1],
                  used: parts[2],
                  available: parts[3],
                  percentage: parseInt(parts[4].replace('%', ''))
                });
              }
            }
          } catch (parseError) {
            this.log(`Disk usage parse error: ${parseError}`, 'debug');
          }
        }
        resolve({ total: 'N/A', used: 'N/A', available: 'N/A', percentage: 0 });
      });
    });
  }

  async measureApplicationPerformance() {
    const metrics = {};
    
    try {
      for (const endpoint of this.config.endpoints) {
        const endpointMetrics = await this.measureEndpoint(endpoint);
        metrics[endpoint.name] = endpointMetrics;
      }
    } catch (error) {
      this.log(`Application performance measurement error: ${error}`, 'error');
    }
    
    return metrics;
  }

  async measureEndpoint(endpoint) {
    const metrics = {
      responseTime: 0,
      statusCode: 0,
      error: false,
      timestamp: new Date()
    };
    
    try {
      const startTime = Date.now();
      const response = await this.makeRequest(endpoint.url);
      const responseTime = Date.now() - startTime;
      
      metrics.responseTime = responseTime;
      metrics.statusCode = response.statusCode;
      metrics.error = response.statusCode >= 400;
      
      // Store in performance data
      const endpointData = this.performanceData.get(endpoint.name);
      endpointData.responseTimes.push(responseTime);
      endpointData.errorRates.push(metrics.error ? 1 : 0);
      endpointData.availability.push(response.statusCode < 400 ? 1 : 0);
      endpointData.lastCheck = new Date();
      
      // Keep only last 100 measurements
      if (endpointData.responseTimes.length > 100) {
        endpointData.responseTimes.shift();
        endpointData.errorRates.shift();
        endpointData.availability.shift();
      }
      
    } catch (error) {
      metrics.error = true;
      metrics.errorMessage = error.message;
      
      const endpointData = this.performanceData.get(endpoint.name);
      endpointData.errorRates.push(1);
      endpointData.availability.push(0);
    }
    
    return metrics;
  }

  makeRequest(url) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Request timeout'));
      }, 10000);
      
      const req = http.request(url, { method: 'GET' }, (res) => {
        clearTimeout(timeout);
        resolve(res);
      });
      
      req.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
      
      req.setTimeout(5000, () => {
        clearTimeout(timeout);
        reject(new Error('Request timeout'));
      });
      
      req.end();
    });
  }

  async measureNetworkPerformance() {
    const metrics = {};
    
    try {
      // Test external connectivity
      const testUrls = ['https://www.google.com', 'https://www.github.com'];
      
      for (const url of testUrls) {
        const startTime = Date.now();
        try {
          const response = await this.makeHTTPSRequest(url);
          const responseTime = Date.now() - startTime;
          metrics[url] = { responseTime, status: 'success' };
        } catch (error) {
          metrics[url] = { responseTime: 0, status: 'failed', error: error.message };
        }
      }
      
    } catch (error) {
      this.log(`Network performance measurement error: ${error}`, 'error');
    }
    
    return metrics;
  }

  makeHTTPSRequest(url) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('HTTPS request timeout'));
      }, 10000);
      
      https.get(url, (res) => {
        clearTimeout(timeout);
        resolve(res);
      }).on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  storeMetrics(metrics) {
    const timestamp = metrics.timestamp.toISOString();
    const metricsFile = `./logs/performance-metrics-${timestamp.split('T')[0]}.json`;
    
    try {
      let existingMetrics = [];
      if (fs.existsSync(metricsFile)) {
        existingMetrics = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
      }
      
      existingMetrics.push(metrics);
      
      // Keep only last 1000 measurements per day
      if (existingMetrics.length > 1000) {
        existingMetrics = existingMetrics.slice(-1000);
      }
      
      fs.writeFileSync(metricsFile, JSON.stringify(existingMetrics, null, 2));
      
    } catch (error) {
      this.log(`Error storing metrics: ${error}`, 'error');
    }
  }

  analyzePerformance(metrics) {
    this.log('🔍 Analyzing performance metrics...', 'debug');
    
    try {
      // Check system performance
      this.checkSystemPerformance(metrics.system);
      
      // Check application performance
      this.checkApplicationPerformance(metrics.application);
      
      // Check network performance
      this.checkNetworkPerformance(metrics.network);
      
      // Generate optimization recommendations
      this.generateOptimizationRecommendations(metrics);
      
    } catch (error) {
      this.log(`Performance analysis error: ${error}`, 'error');
    }
  }

  checkSystemPerformance(systemMetrics) {
    // Check memory usage
    if (systemMetrics.memory.percentage > this.config.performanceThresholds.memory) {
      this.sendAlert('system', 'memory', `High memory usage: ${systemMetrics.memory.percentage.toFixed(1)}%`);
    }
    
    // Check CPU load
    const avgLoad = (systemMetrics.cpu.load1 + systemMetrics.cpu.load5 + systemMetrics.cpu.load15) / 3;
    if (avgLoad > this.config.performanceThresholds.cpu) {
      this.sendAlert('system', 'cpu', `High CPU load: ${avgLoad.toFixed(2)}`);
    }
    
    // Check disk usage
    if (systemMetrics.disk.percentage > 90) {
      this.sendAlert('system', 'disk', `High disk usage: ${systemMetrics.disk.percentage}%`);
    }
  }

  checkApplicationPerformance(appMetrics) {
    for (const [endpointName, endpointMetrics] of Object.entries(appMetrics)) {
      // Check response time
      if (endpointMetrics.responseTime > this.config.performanceThresholds.responseTime) {
        this.sendAlert('application', 'responseTime', 
          `${endpointName} slow response: ${endpointMetrics.responseTime}ms`);
      }
      
      // Check error rate
      const endpointData = this.performanceData.get(endpointName);
      if (endpointData && endpointData.errorRates.length > 10) {
        const recentErrors = endpointData.errorRates.slice(-10);
        const errorRate = (recentErrors.reduce((a, b) => a + b, 0) / recentErrors.length) * 100;
        
        if (errorRate > this.config.performanceThresholds.errorRate) {
          this.sendAlert('application', 'errorRate', 
            `${endpointName} high error rate: ${errorRate.toFixed(1)}%`);
        }
      }
    }
  }

  checkNetworkPerformance(networkMetrics) {
    for (const [url, metrics] of Object.entries(networkMetrics)) {
      if (metrics.status === 'failed') {
        this.sendAlert('network', 'connectivity', `Failed to reach ${url}`);
      } else if (metrics.responseTime > 5000) {
        this.sendAlert('network', 'latency', `Slow response from ${url}: ${metrics.responseTime}ms`);
      }
    }
  }

  sendAlert(category, type, message) {
    const alert = {
      timestamp: new Date(),
      category,
      type,
      message,
      severity: 'warning'
    };
    
    this.alertHistory.push(alert);
    this.stats.alerts++;
    
    this.log(`🚨 ALERT [${category}/${type}]: ${message}`, 'warn');
    
    // Log alert to file
    const alertLog = `./logs/performance-alerts.log`;
    const alertMessage = `[${alert.timestamp.toISOString()}] ${category.toUpperCase()}/${type.toUpperCase()}: ${message}\n`;
    fs.appendFileSync(alertLog, alertMessage);
    
    // Keep only last 100 alerts
    if (this.alertHistory.length > 100) {
      this.alertHistory = this.alertHistory.slice(-100);
    }
  }

  generateOptimizationRecommendations(metrics) {
    const recommendations = [];
    
    try {
      // Memory optimization recommendations
      if (metrics.system.memory.percentage > 80) {
        recommendations.push({
          category: 'memory',
          priority: 'high',
          description: 'Consider increasing memory allocation or optimizing memory usage',
          action: 'Review memory-intensive operations and implement caching strategies'
        });
      }
      
      // CPU optimization recommendations
      const avgLoad = (metrics.system.cpu.load1 + metrics.system.cpu.load5 + metrics.system.cpu.load15) / 3;
      if (avgLoad > 70) {
        recommendations.push({
          category: 'cpu',
          priority: 'medium',
          description: 'High CPU usage detected',
          action: 'Consider implementing worker threads or process clustering'
        });
      }
      
      // Response time optimization recommendations
      for (const [endpointName, endpointMetrics] of Object.entries(metrics.application)) {
        if (endpointMetrics.responseTime > 1000) {
          recommendations.push({
            category: 'performance',
            priority: 'medium',
            description: `Slow response time for ${endpointName}`,
            action: 'Implement caching, optimize database queries, or add CDN'
          });
        }
      }
      
      // Store recommendations
      if (recommendations.length > 0) {
        this.storeRecommendations(recommendations);
        this.stats.optimizations += recommendations.length;
      }
      
    } catch (error) {
      this.log(`Error generating recommendations: ${error}`, 'error');
    }
  }

  storeRecommendations(recommendations) {
    const timestamp = new Date().toISOString();
    const recommendationsFile = `./logs/optimization-recommendations-${timestamp.split('T')[0]}.json`;
    
    try {
      let existingRecommendations = [];
      if (fs.existsSync(recommendationsFile)) {
        existingRecommendations = JSON.parse(fs.readFileSync(recommendationsFile, 'utf8'));
      }
      
      existingRecommendations.push({
        timestamp,
        recommendations
      });
      
      fs.writeFileSync(recommendationsFile, JSON.stringify(existingRecommendations, null, 2));
      
    } catch (error) {
      this.log(`Error storing recommendations: ${error}`, 'error');
    }
  }

  startRealTimeMonitoring() {
    // Monitor PM2 processes in real-time
    setInterval(() => {
      if (this.isRunning) {
        this.monitorPM2Processes();
      }
    }, 30000); // Every 30 seconds
  }

  async monitorPM2Processes() {
    try {
      exec('pm2 list --format json', (error, stdout, stderr) => {
        if (!error) {
          try {
            const processes = JSON.parse(stdout);
            processes.forEach(process => {
              if (process.name.includes('zion')) {
                const memoryMB = Math.round(process.monit.memory / 1024 / 1024);
                const cpuPercent = process.monit.cpu;
                
                // Check for performance issues
                if (memoryMB > 1024) { // 1GB
                  this.sendAlert('pm2', 'memory', 
                    `${process.name} high memory usage: ${memoryMB}MB`);
                }
                
                if (cpuPercent > 80) {
                  this.sendAlert('pm2', 'cpu', 
                    `${process.name} high CPU usage: ${cpuPercent}%`);
                }
              }
            });
          } catch (parseError) {
            this.log(`PM2 monitoring parse error: ${parseError}`, 'debug');
          }
        }
      });
    } catch (error) {
      this.log(`PM2 monitoring error: ${error}`, 'error');
    }
  }

  generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      performanceData: Object.fromEntries(this.performanceData),
      recentAlerts: this.alertHistory.slice(-10),
      systemInfo: {
        platform: os.platform(),
        arch: os.arch(),
        nodeVersion: process.version,
        uptime: os.uptime()
      }
    };
    
    const reportPath = './logs/performance-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Performance report generated', 'debug');
  }

  // Graceful shutdown
  async shutdown() {
    this.log('🛑 Shutting down Performance Monitor...', 'info');
    this.isRunning = false;
    
    // Generate final report
    this.generatePerformanceReport();
    
    this.log('✅ Performance Monitor shutdown complete', 'info');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => performanceMonitor.shutdown());
process.on('SIGTERM', () => performanceMonitor.shutdown());

// Start the performance monitor
const performanceMonitor = new PerformanceMonitor();

// Keep the process alive
setInterval(() => {
  if (performanceMonitor.isRunning === false) {
    process.exit(0);
  }
}, 1000);