#!/usr/bin/env node

/**
 * Performance Monitor - PM2 Automation Script
 * Monitors application performance and optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorReportsDir = path.join(this.projectRoot, 'error-reports');
    
    this.performanceStats = {
      memoryUsage: 0,
      cpuUsage: 0,
      responseTime: 0,
      throughput: 0,
      errorRate: 0,
      uptime: 0
    };
    
    this.setupDirectories();
    this.setupLogging();
  }

  setupDirectories() {
    [this.logsDir, this.errorReportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'performance-monitor.log');
    this.log('Performance Monitor started', 'INFO');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async checkSystemPerformance() {
    this.log('Checking system performance...', 'INFO');
    
    try {
      // Check memory usage
      const memoryInfo = this.getMemoryInfo();
      this.performanceStats.memoryUsage = memoryInfo.used / memoryInfo.total;
      
      // Check CPU usage
      const cpuInfo = this.getCPUInfo();
      this.performanceStats.cpuUsage = cpuInfo.usage;
      
      // Check disk I/O
      const diskInfo = this.getDiskInfo();
      
      this.log(`Memory usage: ${(this.performanceStats.memoryUsage * 100).toFixed(2)}%`, 'INFO');
      this.log(`CPU usage: ${this.performanceStats.cpuUsage.toFixed(2)}%`, 'INFO');
      this.log(`Disk I/O: ${diskInfo.read}MB/s read, ${diskInfo.write}MB/s write`, 'INFO');
      
      return {
        memory: memoryInfo,
        cpu: cpuInfo,
        disk: diskInfo
      };
      
    } catch (error) {
      this.log(`Error checking system performance: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async checkApplicationPerformance() {
    this.log('Checking application performance...', 'INFO');
    
    try {
      // Check if application is running
      const appStatus = this.checkAppStatus();
      
      if (!appStatus.running) {
        this.log('Application is not running', 'WARN');
        return null;
      }
      
      // Check response time
      const responseTime = await this.measureResponseTime();
      this.performanceStats.responseTime = responseTime;
      
      // Check throughput
      const throughput = await this.measureThroughput();
      this.performanceStats.throughput = throughput;
      
      // Check error rate
      const errorRate = await this.calculateErrorRate();
      this.performanceStats.errorRate = errorRate;
      
      this.log(`Response time: ${responseTime}ms`, 'INFO');
      this.log(`Throughput: ${throughput} requests/second`, 'INFO');
      this.log(`Error rate: ${(errorRate * 100).toFixed(2)}%`, 'INFO');
      
      return {
        responseTime,
        throughput,
        errorRate,
        uptime: appStatus.uptime
      };
      
    } catch (error) {
      this.log(`Error checking application performance: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async checkBundlePerformance() {
    this.log('Checking bundle performance...', 'INFO');
    
    try {
      const buildDir = path.join(this.projectRoot, 'dist');
      
      if (!fs.existsSync(buildDir)) {
        this.log('Build directory not found', 'WARN');
        return null;
      }
      
      // Analyze bundle size
      const bundleStats = this.analyzeBundle(buildDir);
      
      // Check for performance issues
      const issues = this.identifyPerformanceIssues(bundleStats);
      
      this.log(`Bundle size: ${this.formatBytes(bundleStats.totalSize)}`, 'INFO');
      this.log(`Files count: ${bundleStats.fileCount}`, 'INFO');
      this.log(`Performance issues found: ${issues.length}`, 'INFO');
      
      return { bundleStats, issues };
      
    } catch (error) {
      this.log(`Error checking bundle performance: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async runPerformanceTests() {
    this.log('Running performance tests...', 'INFO');
    
    try {
      const tests = [
        { name: 'Memory Leak Test', fn: this.testMemoryLeak.bind(this) },
        { name: 'CPU Stress Test', fn: this.testCPUStress.bind(this) },
        { name: 'I/O Performance Test', fn: this.testIOPerformance.bind(this) },
        { name: 'Network Latency Test', fn: this.testNetworkLatency.bind(this) }
      ];
      
      const results = [];
      
      for (const test of tests) {
        try {
          this.log(`Running ${test.name}...`, 'INFO');
          const result = await test.fn();
          results.push({ name: test.name, success: true, result });
          this.log(`${test.name} completed successfully`, 'INFO');
        } catch (error) {
          results.push({ name: test.name, success: false, error: error.message });
          this.log(`${test.name} failed: ${error.message}`, 'ERROR');
        }
      }
      
      return results;
      
    } catch (error) {
      this.log(`Error running performance tests: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async optimizePerformance() {
    this.log('Running performance optimizations...', 'INFO');
    
    try {
      const optimizations = [];
      
      // Memory optimization
      if (this.performanceStats.memoryUsage > 0.8) {
        this.log('High memory usage detected, running garbage collection', 'WARN');
        if (global.gc) {
          global.gc();
          optimizations.push('Garbage collection triggered');
        }
      }
      
      // CPU optimization
      if (this.performanceStats.cpuUsage > 80) {
        this.log('High CPU usage detected, checking for CPU-intensive processes', 'WARN');
        const cpuProcesses = this.findCPUIntensiveProcesses();
        if (cpuProcesses.length > 0) {
          optimizations.push(`CPU-intensive processes identified: ${cpuProcesses.join(', ')}`);
        }
      }
      
      // Bundle optimization
      const bundleOptimizations = await this.optimizeBundle();
      optimizations.push(...bundleOptimizations);
      
      this.log(`Applied ${optimizations.length} optimizations`, 'INFO');
      return optimizations;
      
    } catch (error) {
      this.log(`Error during performance optimization: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getMemoryInfo() {
    try {
      const result = execSync('free -m', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = result.trim().split('\n');
      const memoryLine = lines[1];
      const parts = memoryLine.split(/\s+/);
      
      return {
        total: parseInt(parts[1]),
        used: parseInt(parts[2]),
        free: parseInt(parts[3]),
        shared: parseInt(parts[4]),
        cache: parseInt(parts[5]),
        available: parseInt(parts[6])
      };
    } catch (error) {
      this.log(`Error getting memory info: ${error.message}`, 'WARN');
      return { total: 0, used: 0, free: 0, shared: 0, cache: 0, available: 0 };
    }
  }

  getCPUInfo() {
    try {
      const result = execSync('top -bn1 | grep "Cpu(s)"', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const match = result.match(/(\d+\.\d+)%us/);
      const usage = match ? parseFloat(match[1]) : 0;
      
      return { usage };
    } catch (error) {
      this.log(`Error getting CPU info: ${error.message}`, 'WARN');
      return { usage: 0 };
    }
  }

  getDiskInfo() {
    try {
      const result = execSync('iostat -d 1 1', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = result.trim().split('\n');
      const diskLine = lines[lines.length - 1];
      const parts = diskLine.split(/\s+/);
      
      return {
        read: parseFloat(parts[2]) || 0,
        write: parseFloat(parts[3]) || 0
      };
    } catch (error) {
      this.log(`Error getting disk info: ${error.message}`, 'WARN');
      return { read: 0, write: 0 };
    }
  }

  checkAppStatus() {
    try {
      const result = execSync('pm2 list', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = result.trim().split('\n');
      const appLine = lines.find(line => line.includes('zion-website'));
      
      if (appLine) {
        const parts = appLine.split(/\s+/);
        const status = parts[6];
        const uptime = parts[7];
        
        return {
          running: status === 'online',
          status,
          uptime
        };
      }
      
      return { running: false, status: 'unknown', uptime: '0' };
    } catch (error) {
      this.log(`Error checking app status: ${error.message}`, 'WARN');
      return { running: false, status: 'error', uptime: '0' };
    }
  }

  async measureResponseTime() {
    try {
      const startTime = Date.now();
      
      // Try to make a request to the app
      execSync('curl -s -o /dev/null -w "%{time_total}" http://localhost:3000/health || echo "0"', { 
        stdio: 'pipe'
      });
      
      const endTime = Date.now();
      return endTime - startTime;
    } catch (error) {
      return 0;
    }
  }

  async measureThroughput() {
    try {
      // Simple throughput measurement
      const startTime = Date.now();
      let requestCount = 0;
      
      // Make multiple requests to measure throughput
      for (let i = 0; i < 10; i++) {
        try {
          execSync('curl -s -o /dev/null http://localhost:3000/health', { stdio: 'pipe' });
          requestCount++;
        } catch (error) {
          // Ignore individual request failures
        }
      }
      
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      
      return requestCount / duration;
    } catch (error) {
      return 0;
    }
  }

  async calculateErrorRate() {
    try {
      // Check recent logs for errors
      const logFiles = [
        path.join(this.logsDir, 'zion-website-error.log'),
        path.join(this.logsDir, 'error-monitor-error.log')
      ];
      
      let totalLines = 0;
      let errorLines = 0;
      
      logFiles.forEach(file => {
        if (fs.existsSync(file)) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const lines = content.split('\n').filter(line => line.trim());
            totalLines += lines.length;
            
            const errors = lines.filter(line => 
              line.toLowerCase().includes('error') || 
              line.toLowerCase().includes('exception') ||
              line.toLowerCase().includes('failed')
            );
            errorLines += errors.length;
          } catch (error) {
            // Ignore file read errors
          }
        }
      });
      
      return totalLines > 0 ? errorLines / totalLines : 0;
    } catch (error) {
      return 0;
    }
  }

  analyzeBundle(buildDir) {
    let totalSize = 0;
    let fileCount = 0;
    const fileTypes = {};
    
    function walkDir(dir) {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else {
          const size = stat.size;
          totalSize += size;
          fileCount++;
          
          const ext = path.extname(item);
          fileTypes[ext] = (fileTypes[ext] || 0) + size;
        }
      });
    }
    
    walkDir(buildDir);
    
    return {
      totalSize,
      fileCount,
      fileTypes
    };
  }

  identifyPerformanceIssues(bundleStats) {
    const issues = [];
    
    if (bundleStats.totalSize > 1024 * 1024 * 10) { // 10MB
      issues.push('Bundle size is very large, consider code splitting');
    }
    
    if (bundleStats.fileCount > 100) {
      issues.push('Too many files in bundle, consider bundling optimization');
    }
    
    const jsSize = bundleStats.fileTypes['.js'] || 0;
    if (jsSize > 1024 * 1024 * 5) { // 5MB
      issues.push('JavaScript bundle is large, implement tree shaking');
    }
    
    const cssSize = bundleStats.fileTypes['.css'] || 0;
    if (cssSize > 1024 * 1024 * 2) { // 2MB
      issues.push('CSS bundle is large, consider CSS optimization');
    }
    
    return issues;
  }

  async testMemoryLeak() {
    // Simple memory leak detection
    const initialMemory = process.memoryUsage();
    
    // Simulate some work
    for (let i = 0; i < 1000; i++) {
      const arr = new Array(1000).fill('test');
    }
    
    const finalMemory = process.memoryUsage();
    const memoryIncrease = finalMemory.heapUsed - initialMemory.heapUsed;
    
    return {
      initialMemory: initialMemory.heapUsed,
      finalMemory: finalMemory.heapUsed,
      increase: memoryIncrease
    };
  }

  async testCPUStress() {
    const startTime = Date.now();
    
    // Simulate CPU-intensive work
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i);
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    return {
      duration,
      result: result.toString().substring(0, 10)
    };
  }

  async testIOPerformance() {
    const testFile = path.join(this.projectRoot, 'temp-io-test.txt');
    const testData = 'x'.repeat(1024 * 1024); // 1MB of data
    
    const startTime = Date.now();
    
    // Write test
    fs.writeFileSync(testFile, testData);
    
    // Read test
    const readData = fs.readFileSync(testFile, 'utf8');
    
    // Cleanup
    fs.unlinkSync(testFile);
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    return {
      duration,
      dataSize: testData.length,
      readSize: readData.length
    };
  }

  async testNetworkLatency() {
    try {
      const startTime = Date.now();
      
      execSync('ping -c 1 localhost', { stdio: 'pipe' });
      
      const endTime = Date.now();
      const latency = endTime - startTime;
      
      return { latency };
    } catch (error) {
      return { latency: 0, error: error.message };
    }
  }

  findCPUIntensiveProcesses() {
    try {
      const result = execSync('ps aux --sort=-%cpu | head -5', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = result.trim().split('\n').slice(1);
      return lines.map(line => {
        const parts = line.split(/\s+/);
        return `${parts[10]} (${parts[2]}%)`;
      });
    } catch (error) {
      return [];
    }
  }

  async optimizeBundle() {
    const optimizations = [];
    
    try {
      // Check if build tools support optimization
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const devDeps = packageJson.devDependencies || {};
      
      if (devDeps.vite) {
        optimizations.push('Vite detected - enable build optimization in vite.config.ts');
      }
      
      if (devDeps.webpack) {
        optimizations.push('Webpack detected - enable tree shaking and code splitting');
      }
      
      // Suggest common optimizations
      optimizations.push('Enable gzip compression for static assets');
      optimizations.push('Implement lazy loading for routes and components');
      optimizations.push('Use dynamic imports for code splitting');
      
    } catch (error) {
      this.log(`Error during bundle optimization: ${error.message}`, 'ERROR');
    }
    
    return optimizations;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      performanceStats: this.performanceStats,
      recommendations: this.generateRecommendations()
    };
    
    const reportFile = path.join(this.errorReportsDir, `performance-monitor-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`, 'INFO');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.performanceStats.memoryUsage > 0.8) {
      recommendations.push('High memory usage detected, investigate memory leaks');
    }
    
    if (this.performanceStats.cpuUsage > 80) {
      recommendations.push('High CPU usage detected, optimize CPU-intensive operations');
    }
    
    if (this.performanceStats.responseTime > 1000) {
      recommendations.push('Slow response time, optimize application performance');
    }
    
    if (this.performanceStats.errorRate > 0.05) {
      recommendations.push('High error rate, investigate and fix application errors');
    }
    
    recommendations.push('Monitor performance metrics regularly');
    recommendations.push('Set up performance alerts for critical thresholds');
    
    return recommendations;
  }

  async run() {
    try {
      this.log('Starting performance monitoring automation...', 'INFO');
      
      // Check system performance
      await this.checkSystemPerformance();
      
      // Check application performance
      await this.checkApplicationPerformance();
      
      // Check bundle performance
      await this.checkBundlePerformance();
      
      // Run performance tests
      await this.runPerformanceTests();
      
      // Apply optimizations
      await this.optimizePerformance();
      
      const report = this.generateReport();
      
      this.log('Performance monitoring automation completed', 'INFO');
      this.log(`Summary: Memory ${(this.performanceStats.memoryUsage * 100).toFixed(2)}%, CPU ${this.performanceStats.cpuUsage.toFixed(2)}%`, 'INFO');
      
      return report;
    } catch (error) {
      this.log(`Fatal error in performance monitor: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the performance monitor if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  
  monitor.run()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Performance monitor failed:', error);
      process.exit(1);
    });
}

module.exports = PerformanceMonitor;