#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting Performance Monitor Automation...');

class PerformanceMonitor {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      testTime: 0,
      memoryUsage: 0,
      cpuUsage: 0
    };
    this.performanceIssues = [];
    this.passedChecks = [];
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running performance monitoring...');
      
      // Run various performance checks
      await this.measureBuildPerformance();
      await this.measureBundleSize();
      await this.measureTestPerformance();
      await this.measureSystemResources();
      await this.analyzePerformance();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Performance Monitor completed. Found ${this.performanceIssues.length} performance issues.`);
      
    } catch (error) {
      console.error('❌ Performance Monitor failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async measureBuildPerformance() {
    try {
      console.log('🔍 Measuring build performance...');
      
      const buildStart = Date.now();
      
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const buildEnd = Date.now();
        this.metrics.buildTime = buildEnd - buildStart;
        
        this.passedChecks.push({
          type: 'build_performance',
          status: 'success',
          message: `Build completed in ${this.metrics.buildTime}ms`,
          metric: this.metrics.buildTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
        
        // Check if build time is acceptable
        if (this.metrics.buildTime > 60000) { // 1 minute
          this.performanceIssues.push({
            type: 'slow_build',
            severity: 'warning',
            message: `Build time is slow: ${this.metrics.buildTime}ms`,
            metric: this.metrics.buildTime,
            threshold: 60000,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Build time is slow: ${this.metrics.buildTime}ms`);
        }
        
      } catch (error) {
        this.performanceIssues.push({
          type: 'build_failure',
          severity: 'error',
          message: 'Build failed during performance measurement',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ Build failed during performance measurement');
      }
      
    } catch (error) {
      console.log('ℹ️  Error measuring build performance:', error.message);
    }
  }

  async measureBundleSize() {
    try {
      console.log('🔍 Measuring bundle size...');
      
      // Check if dist directory exists after build
      if (fs.existsSync('dist')) {
        const distStats = fs.statSync('dist');
        const distSize = this.getDirectorySize('dist');
        
        this.metrics.bundleSize = distSize;
        
        this.passedChecks.push({
          type: 'bundle_size',
          status: 'success',
          message: `Bundle size: ${this.formatBytes(distSize)}`,
          metric: distSize,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Bundle size: ${this.formatBytes(distSize)}`);
        
        // Check if bundle size is acceptable
        if (distSize > 10 * 1024 * 1024) { // 10MB
          this.performanceIssues.push({
            type: 'large_bundle',
            severity: 'warning',
            message: `Bundle size is large: ${this.formatBytes(distSize)}`,
            metric: distSize,
            threshold: 10 * 1024 * 1024,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Bundle size is large: ${this.formatBytes(distSize)}`);
        }
      } else {
        console.log('ℹ️  Dist directory not found, skipping bundle size measurement');
      }
      
    } catch (error) {
      console.log('ℹ️  Error measuring bundle size:', error.message);
    }
  }

  async measureTestPerformance() {
    try {
      console.log('🔍 Measuring test performance...');
      
      const testStart = Date.now();
      
      try {
        const testOutput = execSync('npm test', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const testEnd = Date.now();
        this.metrics.testTime = testEnd - testStart;
        
        this.passedChecks.push({
          type: 'test_performance',
          status: 'success',
          message: `Tests completed in ${this.metrics.testTime}ms`,
          metric: this.metrics.testTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Tests completed in ${this.metrics.testTime}ms`);
        
        // Check if test time is acceptable
        if (this.metrics.testTime > 30000) { // 30 seconds
          this.performanceIssues.push({
            type: 'slow_tests',
            severity: 'warning',
            message: `Test time is slow: ${this.metrics.testTime}ms`,
            metric: this.metrics.testTime,
            threshold: 30000,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Test time is slow: ${this.metrics.testTime}ms`);
        }
        
      } catch (error) {
        // Tests may fail but we still want to measure time
        const testEnd = Date.now();
        this.metrics.testTime = testEnd - testStart;
        
        console.log(`⚠️  Tests failed but completed in ${this.metrics.testTime}ms`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error measuring test performance:', error.message);
    }
  }

  async measureSystemResources() {
    try {
      console.log('🔍 Measuring system resources...');
      
      // Get memory usage
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = memUsage.heapUsed;
      
      this.passedChecks.push({
        type: 'memory_usage',
        status: 'success',
        message: `Memory usage: ${this.formatBytes(memUsage.heapUsed)}`,
        metric: memUsage.heapUsed,
        timestamp: new Date().toISOString()
      });
      
      console.log(`✅ Memory usage: ${this.formatBytes(memUsage.heapUsed)}`);
      
      // Check if memory usage is acceptable
      if (memUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
        this.performanceIssues.push({
          type: 'high_memory',
          severity: 'warning',
          message: `High memory usage: ${this.formatBytes(memUsage.heapUsed)}`,
          metric: memUsage.heapUsed,
          threshold: 100 * 1024 * 1024,
          timestamp: new Date().toISOString()
        });
        
        console.log(`⚠️  High memory usage: ${this.formatBytes(memUsage.heapUsed)}`);
      }
      
      // Get CPU usage (approximate)
      const startUsage = process.cpuUsage();
      await new Promise(resolve => setTimeout(resolve, 100));
      const endUsage = process.cpuUsage(startUsage);
      
      this.metrics.cpuUsage = (endUsage.user + endUsage.system) / 1000; // Convert to milliseconds
      
      this.passedChecks.push({
        type: 'cpu_usage',
        status: 'success',
        message: `CPU usage: ${this.metrics.cpuUsage.toFixed(2)}ms`,
        metric: this.metrics.cpuUsage,
        timestamp: new Date().toISOString()
      });
      
      console.log(`✅ CPU usage: ${this.metrics.cpuUsage.toFixed(2)}ms`);
      
    } catch (error) {
      console.log('ℹ️  Error measuring system resources:', error.message);
    }
  }

  async analyzePerformance() {
    try {
      console.log('🔍 Analyzing performance metrics...');
      
      // Calculate performance score
      let score = 100;
      const issues = [];
      
      if (this.metrics.buildTime > 60000) {
        score -= 20;
        issues.push('Slow build time');
      }
      
      if (this.metrics.bundleSize > 10 * 1024 * 1024) {
        score -= 20;
        issues.push('Large bundle size');
      }
      
      if (this.metrics.testTime > 30000) {
        score -= 15;
        issues.push('Slow test execution');
      }
      
      if (this.metrics.memoryUsage > 100 * 1024 * 1024) {
        score -= 15;
        issues.push('High memory usage');
      }
      
      score = Math.max(0, score);
      
      this.passedChecks.push({
        type: 'performance_score',
        status: score >= 80 ? 'good' : score >= 60 ? 'fair' : 'poor',
        message: `Performance score: ${score}/100`,
        metric: score,
        issues: issues,
        timestamp: new Date().toISOString()
      });
      
      console.log(`📊 Performance score: ${score}/100`);
      
      if (issues.length > 0) {
        console.log(`⚠️  Performance issues: ${issues.join(', ')}`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error analyzing performance:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      console.log(`ℹ️  Error calculating directory size for ${dirPath}:`, error.message);
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      metrics: this.metrics,
      performanceIssues: this.performanceIssues,
      passedChecks: this.passedChecks,
      totalIssues: this.performanceIssues.length,
      totalPassed: this.passedChecks.length,
      status: this.performanceIssues.length === 0 ? 'good' : 'issues_found'
    };

    const reportPath = path.join(this.reportDir, 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'performance-monitor-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);