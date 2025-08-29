#!/usr/bin/env node

/**
 * Advanced Performance Monitor - PM2 Automation
 * Real-time performance monitoring with intelligent bottleneck detection
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AdvancedPerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'advanced-performance-monitor.log');
    this.metricsLog = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    this.bottlenecksLog = path.join(this.projectRoot, 'logs', 'performance-bottlenecks.json');
    this.ensureLogsDirectory();
    
    this.metrics = {
      build: { times: [], average: 0, trend: 'stable' },
      bundle: { sizes: [], average: 0, trend: 'stable' },
      memory: { usage: [], average: 0, trend: 'stable' },
      cpu: { usage: [], average: 0, trend: 'stable' },
      network: { requests: [], average: 0, trend: 'stable' }
    };
    
    this.thresholds = {
      buildTime: { warning: 120000, critical: 300000 }, // 2min, 5min
      bundleSize: { warning: 3000000, critical: 5000000 }, // 3MB, 5MB
      memoryUsage: { warning: 500000000, critical: 1000000000 }, // 500MB, 1GB
      cpuUsage: { warning: 80, critical: 95 }, // 80%, 95%
      networkLatency: { warning: 1000, critical: 3000 } // 1s, 3s
    };
    
    this.bottleneckPatterns = {
      'build-slow': 'Build time exceeds threshold',
      'bundle-large': 'Bundle size exceeds threshold',
      'memory-leak': 'Memory usage continuously increasing',
      'cpu-intensive': 'CPU usage consistently high',
      'network-slow': 'Network requests taking too long'
    };
    
    this.optimizationStrategies = {
      'build-slow': [
        'Enable incremental compilation',
        'Use esbuild for faster minification',
        'Implement code splitting',
        'Optimize TypeScript configuration'
      ],
      'bundle-large': [
        'Remove unused dependencies',
        'Implement tree shaking',
        'Use dynamic imports',
        'Optimize images and assets'
      ],
      'memory-leak': [
        'Check for memory leaks in components',
        'Optimize useEffect cleanup',
        'Review large object allocations',
        'Implement proper garbage collection'
      ],
      'cpu-intensive': [
        'Optimize expensive calculations',
        'Use React.memo for components',
        'Implement debouncing',
        'Move heavy operations to web workers'
      ],
      'network-slow': [
        'Implement request caching',
        'Use CDN for static assets',
        'Optimize API endpoints',
        'Implement request batching'
      ]
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async startMonitoring() {
    this.log('Starting advanced performance monitoring...');
    
    // Start continuous monitoring
    this.monitoringInterval = setInterval(async () => {
      await this.collectMetrics();
    }, 30000); // Every 30 seconds
    
    // Start build monitoring
    this.buildMonitorInterval = setInterval(async () => {
      await this.monitorBuildPerformance();
    }, 300000); // Every 5 minutes
    
    // Start bundle analysis
    this.bundleMonitorInterval = setInterval(async () => {
      await this.analyzeBundlePerformance();
    }, 600000); // Every 10 minutes
    
    this.log('Performance monitoring started successfully');
  }

  async stopMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    if (this.buildMonitorInterval) {
      clearInterval(this.buildMonitorInterval);
    }
    if (this.bundleMonitorInterval) {
      clearInterval(this.bundleMonitorInterval);
    }
    
    this.log('Performance monitoring stopped');
  }

  async collectMetrics() {
    try {
      const currentMetrics = {
        timestamp: new Date().toISOString(),
        memory: this.getMemoryUsage(),
        cpu: this.getCpuUsage(),
        system: this.getSystemMetrics()
      };
      
      // Update metrics arrays
      this.metrics.memory.usage.push(currentMetrics.memory);
      this.metrics.cpu.usage.push(currentMetrics.cpu);
      
      // Keep only last 100 measurements
      if (this.metrics.memory.usage.length > 100) {
        this.metrics.memory.usage.shift();
        this.metrics.cpu.usage.shift();
      }
      
      // Calculate averages and trends
      this.updateMetricsTrends();
      
      // Check for bottlenecks
      const bottlenecks = this.detectBottlenecks(currentMetrics);
      if (bottlenecks.length > 0) {
        await this.handleBottlenecks(bottlenecks);
      }
      
      // Save metrics
      await this.saveMetrics(currentMetrics);
      
    } catch (error) {
      this.log(`Metrics collection failed: ${error.message}`, 'ERROR');
    }
  }

  getMemoryUsage() {
    const usage = process.memoryUsage();
    return {
      heapUsed: usage.heapUsed,
      heapTotal: usage.heapTotal,
      external: usage.external,
      rss: usage.rss,
      percentage: (usage.heapUsed / usage.heapTotal) * 100
    };
  }

  getCpuUsage() {
    const usage = process.cpuUsage();
    return {
      user: usage.user,
      system: usage.system,
      percentage: this.calculateCpuPercentage(usage)
    };
  }

  calculateCpuPercentage(usage) {
    // Simplified CPU percentage calculation
    const total = usage.user + usage.system;
    return Math.min((total / 1000000) * 10, 100); // Rough approximation
  }

  getSystemMetrics() {
    return {
      uptime: process.uptime(),
      platform: process.platform,
      arch: process.arch,
      nodeVersion: process.version,
      pid: process.pid
    };
  }

  updateMetricsTrends() {
    // Update memory trends
    if (this.metrics.memory.usage.length >= 2) {
      const recent = this.metrics.memory.usage.slice(-5);
      const older = this.metrics.memory.usage.slice(-10, -5);
      
      if (recent.length > 0 && older.length > 0) {
        const recentAvg = recent.reduce((sum, m) => sum + m.heapUsed, 0) / recent.length;
        const olderAvg = older.reduce((sum, m) => sum + m.heapUsed, 0) / older.length;
        
        if (recentAvg > olderAvg * 1.1) {
          this.metrics.memory.trend = 'increasing';
        } else if (recentAvg < olderAvg * 0.9) {
          this.metrics.memory.trend = 'decreasing';
        } else {
          this.metrics.memory.trend = 'stable';
        }
      }
    }
    
    // Update CPU trends
    if (this.metrics.cpu.usage.length >= 2) {
      const recent = this.metrics.cpu.usage.slice(-5);
      const older = this.metrics.cpu.usage.slice(-10, -5);
      
      if (recent.length > 0 && older.length > 0) {
        const recentAvg = recent.reduce((sum, c) => sum + c.percentage, 0) / recent.length;
        const olderAvg = older.reduce((sum, c) => sum + c.percentage, 0) / older.length;
        
        if (recentAvg > olderAvg * 1.1) {
          this.metrics.cpu.trend = 'increasing';
        } else if (recentAvg < olderAvg * 0.9) {
          this.metrics.cpu.trend = 'decreasing';
        } else {
          this.metrics.cpu.trend = 'stable';
        }
      }
    }
  }

  detectBottlenecks(metrics) {
    const bottlenecks = [];
    
    // Memory bottlenecks
    if (metrics.memory.heapUsed > this.thresholds.memoryUsage.critical) {
      bottlenecks.push({
        type: 'memory-leak',
        severity: 'CRITICAL',
        description: 'Memory usage critically high',
        current: metrics.memory.heapUsed,
        threshold: this.thresholds.memoryUsage.critical,
        trend: this.metrics.memory.trend
      });
    } else if (metrics.memory.heapUsed > this.thresholds.memoryUsage.warning) {
      bottlenecks.push({
        type: 'memory-leak',
        severity: 'WARNING',
        description: 'Memory usage above warning threshold',
        current: metrics.memory.heapUsed,
        threshold: this.thresholds.memoryUsage.warning,
        trend: this.metrics.memory.trend
      });
    }
    
    // CPU bottlenecks
    if (metrics.cpu.percentage > this.thresholds.cpuUsage.critical) {
      bottlenecks.push({
        type: 'cpu-intensive',
        severity: 'CRITICAL',
        description: 'CPU usage critically high',
        current: metrics.cpu.percentage,
        threshold: this.thresholds.cpuUsage.critical,
        trend: this.metrics.cpu.trend
      });
    } else if (metrics.cpu.percentage > this.thresholds.cpuUsage.warning) {
      bottlenecks.push({
        type: 'cpu-intensive',
        severity: 'WARNING',
        description: 'CPU usage above warning threshold',
        current: metrics.cpu.percentage,
        threshold: this.thresholds.cpuUsage.warning,
        trend: this.metrics.cpu.trend
      });
    }
    
    return bottlenecks;
  }

  async handleBottlenecks(bottlenecks) {
    for (const bottleneck of bottlenecks) {
      this.log(`Bottleneck detected: ${bottleneck.description}`, bottleneck.severity);
      
      // Generate optimization suggestions
      const suggestions = this.generateOptimizationSuggestions(bottleneck);
      
      // Log bottleneck details
      await this.logBottleneck(bottleneck, suggestions);
      
      // Apply automatic fixes for critical issues
      if (bottleneck.severity === 'CRITICAL') {
        await this.applyAutomaticFixes(bottleneck);
      }
    }
  }

  generateOptimizationSuggestions(bottleneck) {
    const strategies = this.optimizationStrategies[bottleneck.type] || [];
    
    return strategies.map(strategy => ({
      description: strategy,
      priority: bottleneck.severity === 'CRITICAL' ? 'HIGH' : 'MEDIUM',
      impact: 'MEDIUM'
    }));
  }

  async logBottleneck(bottleneck, suggestions) {
    const bottleneckData = {
      timestamp: new Date().toISOString(),
      bottleneck,
      suggestions,
      metrics: this.metrics
    };
    
    try {
      const existing = fs.existsSync(this.bottlenecksLog) 
        ? JSON.parse(fs.readFileSync(this.bottlenecksLog, 'utf8')) 
        : [];
      
      existing.push(bottleneckData);
      fs.writeFileSync(this.bottlenecksLog, JSON.stringify(existing, null, 2));
      
    } catch (error) {
      this.log(`Failed to log bottleneck: ${error.message}`, 'ERROR');
    }
  }

  async applyAutomaticFixes(bottleneck) {
    try {
      switch (bottleneck.type) {
        case 'memory-leak':
          if (bottleneck.severity === 'CRITICAL') {
            // Force garbage collection if available
            if (global.gc) {
              global.gc();
              this.log('Forced garbage collection due to critical memory usage');
            }
          }
          break;
          
        case 'cpu-intensive':
          // Log CPU-intensive operations for review
          this.log('CPU usage critical - review intensive operations', 'WARN');
          break;
          
        default:
          this.log(`No automatic fix available for ${bottleneck.type}`, 'WARN');
      }
    } catch (error) {
      this.log(`Failed to apply automatic fix: ${error.message}`, 'ERROR');
    }
  }

  async monitorBuildPerformance() {
    try {
      const buildStart = Date.now();
      
      // Run a quick build test
      await this.runQuickBuild();
      
      const buildTime = Date.now() - buildStart;
      
      // Update build metrics
      this.metrics.build.times.push(buildTime);
      if (this.metrics.build.times.length > 20) {
        this.metrics.build.times.shift();
      }
      
      // Calculate build average
      this.metrics.build.average = this.metrics.build.times.reduce((sum, time) => sum + time, 0) / this.metrics.build.times.length;
      
      // Check for build bottlenecks
      if (buildTime > this.thresholds.buildTime.critical) {
        await this.handleBottlenecks([{
          type: 'build-slow',
          severity: 'CRITICAL',
          description: 'Build time critically slow',
          current: buildTime,
          threshold: this.thresholds.buildTime.critical
        }]);
      }
      
      this.log(`Build performance: ${buildTime}ms (avg: ${Math.round(this.metrics.build.average)}ms)`);
      
    } catch (error) {
      this.log(`Build performance monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async runQuickBuild() {
    return new Promise((resolve, reject) => {
      const build = spawn('npm', ['run', 'build'], {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      build.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Build failed with code ${code}`));
        }
      });
      
      build.on('error', reject);
    });
  }

  async analyzeBundlePerformance() {
    try {
      const bundleSize = await this.measureBundleSize();
      
      // Update bundle metrics
      this.metrics.bundle.sizes.push(bundleSize);
      if (this.metrics.bundle.sizes.length > 20) {
        this.metrics.bundle.sizes.shift();
      }
      
      // Calculate bundle average
      this.metrics.bundle.average = this.metrics.bundle.sizes.reduce((sum, size) => sum + size, 0) / this.metrics.bundle.sizes.length;
      
      // Check for bundle size bottlenecks
      if (bundleSize > this.thresholds.bundleSize.critical) {
        await this.handleBottlenecks([{
          type: 'bundle-large',
          severity: 'CRITICAL',
          description: 'Bundle size critically large',
          current: bundleSize,
          threshold: this.thresholds.bundleSize.critical
        }]);
      }
      
      this.log(`Bundle performance: ${(bundleSize / 1024 / 1024).toFixed(2)}MB (avg: ${(this.metrics.bundle.average / 1024 / 1024).toFixed(2)}MB)`);
      
    } catch (error) {
      this.log(`Bundle performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async measureBundleSize() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) return 0;
      
      let totalSize = 0;
      const files = this.getAllFilesRecursive(distPath);
      
      for (const file of files) {
        const stats = fs.statSync(file);
        totalSize += stats.size;
      }
      
      return totalSize;
    } catch (error) {
      this.log(`Bundle size measurement failed: ${error.message}`, 'WARN');
      return 0;
    }
  }

  getAllFilesRecursive(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.getAllFilesRecursive(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async saveMetrics(metrics) {
    try {
      const metricsData = {
        timestamp: new Date().toISOString(),
        metrics,
        trends: {
          memory: this.metrics.memory.trend,
          cpu: this.metrics.cpu.trend
        },
        averages: {
          memory: this.metrics.memory.usage.length > 0 
            ? this.metrics.memory.usage.reduce((sum, m) => sum + m.heapUsed, 0) / this.metrics.memory.usage.length 
            : 0,
          cpu: this.metrics.cpu.usage.length > 0 
            ? this.metrics.cpu.usage.reduce((sum, c) => sum + c.percentage, 0) / this.metrics.cpu.usage.length 
            : 0
        }
      };
      
      fs.writeFileSync(this.metricsLog, JSON.stringify(metricsData, null, 2));
      
    } catch (error) {
      this.log(`Failed to save metrics: ${error.message}`, 'ERROR');
    }
  }

  async generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        memoryUsage: this.metrics.memory.usage.length > 0 
          ? this.metrics.memory.usage[this.metrics.memory.usage.length - 1] 
          : null,
        cpuUsage: this.metrics.cpu.usage.length > 0 
          ? this.metrics.cpu.usage[this.metrics.cpu.usage.length - 1] 
          : null,
        buildPerformance: {
          average: this.metrics.build.average,
          trend: this.metrics.build.trend
        },
        bundlePerformance: {
          average: this.metrics.bundle.average,
          trend: this.metrics.bundle.trend
        }
      },
      trends: {
        memory: this.metrics.memory.trend,
        cpu: this.metrics.cpu.trend
      },
      recommendations: this.generatePerformanceRecommendations()
    };
    
    return report;
  }

  generatePerformanceRecommendations() {
    const recommendations = [];
    
    // Memory recommendations
    if (this.metrics.memory.trend === 'increasing') {
      recommendations.push({
        category: 'MEMORY',
        priority: 'HIGH',
        suggestion: 'Memory usage is increasing - check for memory leaks',
        action: 'Review component lifecycle and cleanup functions'
      });
    }
    
    // CPU recommendations
    if (this.metrics.cpu.trend === 'increasing') {
      recommendations.push({
        category: 'CPU',
        priority: 'MEDIUM',
        suggestion: 'CPU usage is increasing - optimize expensive operations',
        action: 'Review and optimize heavy computations'
      });
    }
    
    // Build recommendations
    if (this.metrics.build.average > this.thresholds.buildTime.warning) {
      recommendations.push({
        category: 'BUILD',
        priority: 'MEDIUM',
        suggestion: 'Build times are slow - consider optimizations',
        action: 'Review build configuration and dependencies'
      });
    }
    
    // Bundle recommendations
    if (this.metrics.bundle.average > this.thresholds.bundleSize.warning) {
      recommendations.push({
        category: 'BUNDLE',
        priority: 'MEDIUM',
        suggestion: 'Bundle size is large - implement code splitting',
        action: 'Review bundle analysis and implement optimizations'
      });
    }
    
    return recommendations;
  }
}

// Main execution
if (require.main === module) {
  const monitor = new AdvancedPerformanceMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nShutting down performance monitor...');
    await monitor.stopMonitoring();
    process.exit(0);
  });
  
  // Start monitoring
  monitor.startMonitoring()
    .catch(error => {
      console.error('Failed to start performance monitoring:', error);
      process.exit(1);
    });
}

module.exports = AdvancedPerformanceMonitor;