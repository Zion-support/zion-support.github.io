#!/usr/bin/env node

/**
 * Advanced Performance Monitoring and Optimization
 * Real-time performance monitoring with intelligent optimization suggestions
 * 
 * Features:
 * - Real-time performance metrics
 * - Bottleneck detection and analysis
 * - Memory leak detection
 * - CPU usage optimization
 * - Network performance monitoring
 * - Build performance analysis
 * - Automated optimization suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

class AdvancedPerformanceMonitor {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      reportDir: 'performance-reports',
      logFile: 'logs/advanced-performance.log',
      monitoringInterval: 30000, // 30 seconds
      analysisInterval: 300000, // 5 minutes
      reportInterval: 1800000, // 30 minutes
      performanceThresholds: {
        cpuUsage: 80, // percentage
        memoryUsage: 85, // percentage
        buildTime: 120, // seconds
        bundleSize: 1024 * 1024 * 2, // 2MB
        responseTime: 1000 // milliseconds
      }
    };
    
    this.performanceMetrics = {
      system: {},
      application: {},
      build: {},
      network: {},
      memory: {},
      cpu: {},
      bottlenecks: [],
      optimizations: [],
      trends: [],
      lastUpdate: null
    };
    
    this.isMonitoring = false;
    this.monitoringInterval = null;
    this.analysisInterval = null;
    this.reportInterval = null;
    
    this.setupLogging();
    this.ensureDirectories();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async startMonitoring() {
    this.log('🚀 Starting Advanced Performance Monitoring...');
    
    try {
      this.isMonitoring = true;
      
      // Start real-time monitoring
      this.startRealTimeMonitoring();
      
      // Start periodic analysis
      this.startPeriodicAnalysis();
      
      // Start periodic reporting
      this.startPeriodicReporting();
      
      this.log('✅ Advanced Performance Monitoring started successfully');
      
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  startRealTimeMonitoring() {
    this.monitoringInterval = setInterval(async () => {
      if (this.isMonitoring) {
        await this.collectPerformanceMetrics();
      }
    }, this.config.monitoringInterval);
    
    this.log('⏰ Real-time monitoring started (30s intervals)');
  }

  startPeriodicAnalysis() {
    this.analysisInterval = setInterval(async () => {
      if (this.isMonitoring) {
        await this.analyzePerformance();
      }
    }, this.config.analysisInterval);
    
    this.log('⏰ Periodic analysis started (5m intervals)');
  }

  startPeriodicReporting() {
    this.reportInterval = setInterval(async () => {
      if (this.isMonitoring) {
        await this.createPerformanceReport();
      }
    }, this.config.reportInterval);
    
    this.log('⏰ Periodic reporting started (30m intervals)');
  }

  async collectPerformanceMetrics() {
    try {
      // Collect system metrics
      await this.collectSystemMetrics();
      
      // Collect application metrics
      await this.collectApplicationMetrics();
      
      // Collect build metrics
      await this.collectBuildMetrics();
      
      // Collect network metrics
      await this.collectNetworkMetrics();
      
      // Collect memory metrics
      await this.collectMemoryMetrics();
      
      // Collect CPU metrics
      await this.collectCPUMetrics();
      
      this.performanceMetrics.lastUpdate = Date.now();
      
    } catch (error) {
      this.log(`❌ Metrics collection failed: ${error.message}`, 'ERROR');
    }
  }

  async collectSystemMetrics() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const memoryUsagePercent = (usedMemory / totalMemory) * 100;
    
    const cpuLoad = os.loadavg();
    const cpuCount = os.cpus().length;
    
    this.performanceMetrics.system = {
      timestamp: Date.now(),
      memory: {
        total: totalMemory,
        free: freeMemory,
        used: usedMemory,
        usagePercent: memoryUsagePercent
      },
      cpu: {
        loadAverage: cpuLoad,
        coreCount: cpuCount,
        usagePercent: (cpuLoad[0] / cpuCount) * 100
      },
      platform: os.platform(),
      arch: os.arch(),
      uptime: os.uptime()
    };
  }

  async collectApplicationMetrics() {
    try {
      // Check if application is running
      const isRunning = await this.checkApplicationStatus();
      
      if (isRunning) {
        // Collect application-specific metrics
        const appMetrics = await this.getApplicationMetrics();
        this.performanceMetrics.application = {
          timestamp: Date.now(),
          status: 'running',
          ...appMetrics
        };
      } else {
        this.performanceMetrics.application = {
          timestamp: Date.now(),
          status: 'stopped'
        };
      }
      
    } catch (error) {
      this.log(`⚠️ Application metrics collection failed: ${error.message}`, 'WARN');
      this.performanceMetrics.application = {
        timestamp: Date.now(),
        status: 'error',
        error: error.message
      };
    }
  }

  async checkApplicationStatus() {
    try {
      // Check if PM2 processes are running
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const status = JSON.parse(pm2Status);
      
      return status.some(process => process.pm2_env.status === 'online');
    } catch {
      return false;
    }
  }

  async getApplicationMetrics() {
    try {
      // Get PM2 process metrics
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const status = JSON.parse(pm2Status);
      
      const runningProcesses = status.filter(process => process.pm2_env.status === 'online');
      
      return {
        processCount: runningProcesses.length,
        totalMemory: runningProcesses.reduce((sum, proc) => sum + (proc.monit.memory || 0), 0),
        totalCPU: runningProcesses.reduce((sum, proc) => sum + (proc.monit.cpu || 0), 0),
        uptime: runningProcesses.reduce((sum, proc) => sum + (proc.pm2_env.pm_uptime || 0), 0)
      };
      
    } catch (error) {
      return {
        processCount: 0,
        totalMemory: 0,
        totalCPU: 0,
        uptime: 0
      };
    }
  }

  async collectBuildMetrics() {
    try {
      // Check build directory size
      const buildDir = path.join(this.config.projectRoot, 'dist');
      let buildSize = 0;
      let buildTime = 0;
      
      if (fs.existsSync(buildDir)) {
        buildSize = this.getDirectorySize(buildDir);
        
        // Try to get build time from build artifacts
        const buildInfoPath = path.join(buildDir, 'build-info.json');
        if (fs.existsSync(buildInfoPath)) {
          try {
            const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, 'utf8'));
            buildTime = buildInfo.buildTime || 0;
          } catch {
            buildTime = 0;
          }
        }
      }
      
      // Check bundle sizes
      const bundleSizes = await this.getBundleSizes();
      
      this.performanceMetrics.build = {
        timestamp: Date.now(),
        directorySize: buildSize,
        buildTime: buildTime,
        bundleSizes: bundleSizes,
        totalBundleSize: Object.values(bundleSizes).reduce((sum, size) => sum + size, 0)
      };
      
    } catch (error) {
      this.log(`⚠️ Build metrics collection failed: ${error.message}`, 'WARN');
      this.performanceMetrics.build = {
        timestamp: Date.now(),
        error: error.message
      };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      // Ignore permission errors
    }
    
    return totalSize;
  }

  async getBundleSizes() {
    const bundleSizes = {};
    const distDir = path.join(this.config.projectRoot, 'dist');
    
    if (!fs.existsSync(distDir)) {
      return bundleSizes;
    }
    
    try {
      const files = fs.readdirSync(distDir);
      
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
          const filePath = path.join(distDir, file);
          const stats = fs.statSync(filePath);
          bundleSizes[file] = stats.size;
        }
      }
    } catch (error) {
      this.log(`⚠️ Bundle size collection failed: ${error.message}`, 'WARN');
    }
    
    return bundleSizes;
  }

  async collectNetworkMetrics() {
    try {
      // Check network connectivity and performance
      const networkMetrics = {
        timestamp: Date.now(),
        localhost: await this.checkLocalhostPerformance(),
        external: await this.checkExternalConnectivity()
      };
      
      this.performanceMetrics.network = networkMetrics;
      
    } catch (error) {
      this.log(`⚠️ Network metrics collection failed: ${error.message}`, 'WARN');
      this.performanceMetrics.network = {
        timestamp: Date.now(),
        error: error.message
      };
    }
  }

  async checkLocalhostPerformance() {
    try {
      // Check if local development server is responding
      const startTime = Date.now();
      
      // Try to connect to common dev ports
      const ports = [3000, 5000, 8080, 5173];
      let responseTime = null;
      let isResponding = false;
      
      for (const port of ports) {
        try {
          const result = execSync(`curl -s -o /dev/null -w "%{http_code}" http://localhost:${port}`, {
            timeout: 5000,
            encoding: 'utf8'
          });
          
          if (result.trim() === '200') {
            responseTime = Date.now() - startTime;
            isResponding = true;
            break;
          }
        } catch {
          // Port not responding
        }
      }
      
      return {
        isResponding,
        responseTime,
        checkedPorts: ports
      };
      
    } catch (error) {
      return {
        isResponding: false,
        responseTime: null,
        error: error.message
      };
    }
  }

  async checkExternalConnectivity() {
    try {
      const startTime = Date.now();
      
      // Check external connectivity
      const result = execSync('curl -s -o /dev/null -w "%{http_code}" https://www.google.com', {
        timeout: 10000,
        encoding: 'utf8'
      });
      
      const responseTime = Date.now() - startTime;
      const isConnected = result.trim() === '200';
      
      return {
        isConnected,
        responseTime,
        statusCode: result.trim()
      };
      
    } catch (error) {
      return {
        isConnected: false,
        responseTime: null,
        error: error.message
      };
    }
  }

  async collectMemoryMetrics() {
    try {
      // Get detailed memory information
      const memoryInfo = process.memoryUsage();
      
      this.performanceMetrics.memory = {
        timestamp: Date.now(),
        rss: memoryInfo.rss,
        heapTotal: memoryInfo.heapTotal,
        heapUsed: memoryInfo.heapUsed,
        external: memoryInfo.external,
        arrayBuffers: memoryInfo.arrayBuffers,
        usagePercent: (memoryInfo.heapUsed / memoryInfo.heapTotal) * 100
      };
      
    } catch (error) {
      this.log(`⚠️ Memory metrics collection failed: ${error.message}`, 'WARN');
      this.performanceMetrics.memory = {
        timestamp: Date.now(),
        error: error.message
      };
    }
  }

  async collectCPUMetrics() {
    try {
      // Get CPU usage information
      const cpuUsage = process.cpuUsage();
      const startUsage = process.cpuUsage();
      
      // Wait a bit to calculate CPU usage
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const endUsage = process.cpuUsage();
      const userCpu = endUsage.user - startUsage.user;
      const systemCpu = endUsage.system - startUsage.system;
      const totalCpu = userCpu + systemCpu;
      
      this.performanceMetrics.cpu = {
        timestamp: Date.now(),
        user: userCpu,
        system: systemCpu,
        total: totalCpu,
        userPercent: (userCpu / totalCpu) * 100,
        systemPercent: (systemCpu / totalCpu) * 100
      };
      
    } catch (error) {
      this.log(`⚠️ CPU metrics collection failed: ${error.message}`, 'WARN');
      this.performanceMetrics.cpu = {
        timestamp: Date.now(),
        error: error.message
      };
    }
  }

  async analyzePerformance() {
    this.log('🔍 Analyzing performance metrics...');
    
    try {
      // Detect bottlenecks
      await this.detectBottlenecks();
      
      // Generate optimization suggestions
      await this.generateOptimizations();
      
      // Update performance trends
      await this.updatePerformanceTrends();
      
      this.log('✅ Performance analysis completed');
      
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async detectBottlenecks() {
    const bottlenecks = [];
    const thresholds = this.config.performanceThresholds;
    
    // Check system bottlenecks
    if (this.performanceMetrics.system) {
      const { memory, cpu } = this.performanceMetrics.system;
      
      if (memory.usagePercent > thresholds.memoryUsage) {
        bottlenecks.push({
          type: 'system',
          category: 'memory',
          severity: 'high',
          message: `High memory usage: ${memory.usagePercent.toFixed(1)}%`,
          current: memory.usagePercent,
          threshold: thresholds.memoryUsage,
          suggestion: 'Consider closing unnecessary applications or increasing system memory'
        });
      }
      
      if (cpu.usagePercent > thresholds.cpuUsage) {
        bottlenecks.push({
          type: 'system',
          category: 'cpu',
          severity: 'high',
          message: `High CPU usage: ${cpu.usagePercent.toFixed(1)}%`,
          current: cpu.usagePercent,
          threshold: thresholds.cpuUsage,
          suggestion: 'Check for CPU-intensive processes or consider process optimization'
        });
      }
    }
    
    // Check application bottlenecks
    if (this.performanceMetrics.application && this.performanceMetrics.application.status === 'running') {
      const { totalMemory, totalCPU } = this.performanceMetrics.application;
      
      if (totalMemory > 1024 * 1024 * 1024) { // 1GB
        bottlenecks.push({
          type: 'application',
          category: 'memory',
          severity: 'medium',
          message: `High application memory usage: ${(totalMemory / (1024 * 1024)).toFixed(1)}MB`,
          current: totalMemory,
          threshold: 1024 * 1024 * 1024,
          suggestion: 'Review memory usage patterns and optimize data structures'
        });
      }
      
      if (totalCPU > 100) { // 100% CPU
        bottlenecks.push({
          type: 'application',
          category: 'cpu',
          severity: 'medium',
          message: `High application CPU usage: ${totalCPU.toFixed(1)}%`,
          current: totalCPU,
          threshold: 100,
          suggestion: 'Profile CPU usage and optimize expensive operations'
        });
      }
    }
    
    // Check build bottlenecks
    if (this.performanceMetrics.build) {
      const { buildTime, totalBundleSize } = this.performanceMetrics.build;
      
      if (buildTime > thresholds.buildTime) {
        bottlenecks.push({
          type: 'build',
          category: 'time',
          severity: 'medium',
          message: `Slow build time: ${buildTime}s`,
          current: buildTime,
          threshold: thresholds.buildTime,
          suggestion: 'Optimize build configuration, use caching, or parallel builds'
        });
      }
      
      if (totalBundleSize > thresholds.bundleSize) {
        bottlenecks.push({
          type: 'build',
          category: 'size',
          severity: 'medium',
          message: `Large bundle size: ${(totalBundleSize / (1024 * 1024)).toFixed(1)}MB`,
          current: totalBundleSize,
          threshold: thresholds.bundleSize,
          suggestion: 'Implement code splitting, tree shaking, or remove unused dependencies'
        });
      }
    }
    
    // Check network bottlenecks
    if (this.performanceMetrics.network) {
      const { localhost, external } = this.performanceMetrics.network;
      
      if (localhost.responseTime && localhost.responseTime > thresholds.responseTime) {
        bottlenecks.push({
          type: 'network',
          category: 'localhost',
          severity: 'low',
          message: `Slow localhost response: ${localhost.responseTime}ms`,
          current: localhost.responseTime,
          threshold: thresholds.responseTime,
          suggestion: 'Check development server performance or optimize local development setup'
        });
      }
      
      if (external.responseTime && external.responseTime > thresholds.responseTime * 2) {
        bottlenecks.push({
          type: 'network',
          category: 'external',
          severity: 'low',
          message: `Slow external response: ${external.responseTime}ms`,
          current: external.responseTime,
          threshold: thresholds.responseTime * 2,
          suggestion: 'Check internet connection or consider using a different network'
        });
      }
    }
    
    this.performanceMetrics.bottlenecks = bottlenecks;
    
    if (bottlenecks.length > 0) {
      this.log(`⚠️ Detected ${bottlenecks.length} performance bottlenecks`);
    }
  }

  async generateOptimizations() {
    const optimizations = [];
    const bottlenecks = this.performanceMetrics.bottlenecks;
    
    // Generate optimizations based on bottlenecks
    bottlenecks.forEach(bottleneck => {
      if (bottleneck.severity === 'high') {
        optimizations.push({
          priority: 'high',
          category: bottleneck.category,
          message: bottleneck.suggestion,
          impact: 'high',
          effort: 'medium'
        });
      } else if (bottleneck.severity === 'medium') {
        optimizations.push({
          priority: 'medium',
          category: bottleneck.category,
          message: bottleneck.suggestion,
          impact: 'medium',
          effort: 'low'
        });
      }
    });
    
    // Add general optimizations
    if (this.performanceMetrics.memory && this.performanceMetrics.memory.usagePercent > 70) {
      optimizations.push({
        priority: 'medium',
        category: 'memory',
        message: 'Implement memory monitoring and garbage collection optimization',
        impact: 'medium',
        effort: 'low'
      });
    }
    
    if (this.performanceMetrics.build && this.performanceMetrics.build.totalBundleSize > 1024 * 1024) {
      optimizations.push({
        priority: 'medium',
        category: 'build',
        message: 'Enable build caching and parallel processing',
        impact: 'high',
        effort: 'low'
      });
    }
    
    this.performanceMetrics.optimizations = optimizations;
    
    if (optimizations.length > 0) {
      this.log(`💡 Generated ${optimizations.length} optimization suggestions`);
    }
  }

  async updatePerformanceTrends() {
    const currentMetrics = {
      timestamp: Date.now(),
      systemMemory: this.performanceMetrics.system?.memory?.usagePercent || 0,
      systemCPU: this.performanceMetrics.system?.cpu?.usagePercent || 0,
      appMemory: this.performanceMetrics.application?.totalMemory || 0,
      appCPU: this.performanceMetrics.application?.totalCPU || 0,
      buildTime: this.performanceMetrics.build?.buildTime || 0,
      bundleSize: this.performanceMetrics.build?.totalBundleSize || 0,
      bottlenecks: this.performanceMetrics.bottlenecks.length
    };
    
    this.performanceMetrics.trends.push(currentMetrics);
    
    // Keep only last 100 data points
    if (this.performanceMetrics.trends.length > 100) {
      this.performanceMetrics.trends = this.performanceMetrics.trends.slice(-100);
    }
    
    this.log('📈 Performance trends updated');
  }

  async createPerformanceReport() {
    this.log('📋 Creating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        systemHealth: this.calculateSystemHealth(),
        applicationHealth: this.calculateApplicationHealth(),
        buildHealth: this.calculateBuildHealth(),
        networkHealth: this.calculateNetworkHealth(),
        totalBottlenecks: this.performanceMetrics.bottlenecks.length,
        totalOptimizations: this.performanceMetrics.optimizations.length
      },
      metrics: this.performanceMetrics,
      bottlenecks: this.performanceMetrics.bottlenecks,
      optimizations: this.performanceMetrics.optimizations,
      trends: this.performanceMetrics.trends.slice(-20) // Last 20 data points
    };
    
    // Save detailed report
    const reportPath = path.join(this.config.reportDir, `performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save summary report
    const summaryPath = path.join(this.config.reportDir, 'performance-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
    
    // Create human-readable report
    const humanReport = this.createHumanReadableReport(report);
    const humanReportPath = path.join(this.config.reportDir, 'performance-report.txt');
    fs.writeFileSync(humanReportPath, humanReport);
    
    this.log(`📋 Performance report saved to ${this.config.reportDir}`);
    
    // Log summary
    console.log('\n📊 Performance Monitoring Summary:');
    console.log(`🖥️ System Health: ${report.summary.systemHealth}/100`);
    console.log(`🚀 Application Health: ${report.summary.applicationHealth}/100`);
    console.log(`🔨 Build Health: ${report.summary.buildHealth}/100`);
    console.log(`🌐 Network Health: ${report.summary.networkHealth}/100`);
    console.log(`⚠️ Bottlenecks: ${report.summary.totalBottlenecks}`);
    console.log(`💡 Optimizations: ${report.summary.totalOptimizations}`);
  }

  calculateSystemHealth() {
    if (!this.performanceMetrics.system) return 0;
    
    const { memory, cpu } = this.performanceMetrics.system;
    let health = 100;
    
    // Penalize high memory usage
    if (memory.usagePercent > 90) health -= 30;
    else if (memory.usagePercent > 80) health -= 20;
    else if (memory.usagePercent > 70) health -= 10;
    
    // Penalize high CPU usage
    if (cpu.usagePercent > 90) health -= 30;
    else if (cpu.usagePercent > 80) health -= 20;
    else if (cpu.usagePercent > 70) health -= 10;
    
    return Math.max(0, health);
  }

  calculateApplicationHealth() {
    if (!this.performanceMetrics.application || this.performanceMetrics.application.status !== 'running') {
      return 0;
    }
    
    let health = 100;
    const { totalMemory, totalCPU } = this.performanceMetrics.application;
    
    // Penalize high memory usage
    if (totalMemory > 1024 * 1024 * 1024 * 2) health -= 30; // 2GB
    else if (totalMemory > 1024 * 1024 * 1024) health -= 20; // 1GB
    else if (totalMemory > 512 * 1024 * 1024) health -= 10; // 512MB
    
    // Penalize high CPU usage
    if (totalCPU > 200) health -= 30;
    else if (totalCPU > 150) health -= 20;
    else if (totalCPU > 100) health -= 10;
    
    return Math.max(0, health);
  }

  calculateBuildHealth() {
    if (!this.performanceMetrics.build) return 0;
    
    let health = 100;
    const { buildTime, totalBundleSize } = this.performanceMetrics.build;
    
    // Penalize slow builds
    if (buildTime > 300) health -= 30; // 5 minutes
    else if (buildTime > 180) health -= 20; // 3 minutes
    else if (buildTime > 120) health -= 10; // 2 minutes
    
    // Penalize large bundles
    if (totalBundleSize > 1024 * 1024 * 5) health -= 30; // 5MB
    else if (totalBundleSize > 1024 * 1024 * 3) health -= 20; // 3MB
    else if (totalBundleSize > 1024 * 1024 * 2) health -= 10; // 2MB
    
    return Math.max(0, health);
  }

  calculateNetworkHealth() {
    if (!this.performanceMetrics.network) return 0;
    
    let health = 100;
    const { localhost, external } = this.performanceMetrics.network;
    
    // Penalize slow localhost
    if (localhost.responseTime && localhost.responseTime > 2000) health -= 30;
    else if (localhost.responseTime && localhost.responseTime > 1000) health -= 20;
    else if (localhost.responseTime && localhost.responseTime > 500) health -= 10;
    
    // Penalize slow external connections
    if (external.responseTime && external.responseTime > 5000) health -= 30;
    else if (external.responseTime && external.responseTime > 3000) health -= 20;
    else if (external.responseTime && external.responseTime > 2000) health -= 10;
    
    // Penalize connection failures
    if (!localhost.isResponding) health -= 50;
    if (!external.isConnected) health -= 30;
    
    return Math.max(0, health);
  }

  createHumanReadableReport(report) {
    let output = 'Advanced Performance Monitoring Report\n';
    output += '========================================\n\n';
    
    output += `Generated: ${report.timestamp}\n\n`;
    
    output += 'Health Summary\n';
    output += '--------------\n';
    output += `System Health: ${report.summary.systemHealth}/100\n`;
    output += `Application Health: ${report.summary.applicationHealth}/100\n`;
    output += `Build Health: ${report.summary.buildHealth}/100\n`;
    output += `Network Health: ${report.summary.networkHealth}/100\n\n`;
    
    if (report.bottlenecks.length > 0) {
      output += 'Performance Bottlenecks\n';
      output += '----------------------\n';
      report.bottlenecks.forEach((bottleneck, index) => {
        output += `${index + 1}. [${bottleneck.severity.toUpperCase()}] ${bottleneck.type}/${bottleneck.category}: ${bottleneck.message}\n`;
        output += `   Suggestion: ${bottleneck.suggestion}\n\n`;
      });
    }
    
    if (report.optimizations.length > 0) {
      output += 'Optimization Suggestions\n';
      output += '------------------------\n';
      report.optimizations.forEach((opt, index) => {
        output += `${index + 1}. [${opt.priority.toUpperCase()}] ${opt.category}: ${opt.message}\n`;
        output += `   Impact: ${opt.impact}, Effort: ${opt.effort}\n\n`;
      });
    }
    
    return output;
  }

  async stop() {
    this.log('🛑 Stopping Advanced Performance Monitoring...');
    
    this.isMonitoring = false;
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    
    if (this.analysisInterval) {
      clearInterval(this.analysisInterval);
    }
    
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
    }
    
    this.log('✅ Performance monitoring stopped');
  }

  async start() {
    this.log('🚀 Starting Advanced Performance Monitor...');
    
    try {
      await this.startMonitoring();
      
      // Keep the process running
      setInterval(() => {
        if (!this.isMonitoring) {
          process.exit(0);
        }
      }, 60000);
      
    } catch (error) {
      this.log(`❌ Monitor failed: ${error.message}`, 'ERROR');
      
      // Retry after 5 minutes
      setTimeout(() => {
        this.start();
      }, 300000);
    }
  }
}

// Start the automation if run directly
if (require.main === module) {
  const monitor = new AdvancedPerformanceMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await monitor.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await monitor.stop();
    process.exit(0);
  });
  
  monitor.start();
}

module.exports = AdvancedPerformanceMonitor;