#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Performance Monitor');
console.log('=====================');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      testTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage()
    };
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async measureBuildPerformance() {
    this.log('🏗️ Measuring build performance...');
    
    const buildStart = Date.now();
    
    try {
      // Try to build the project
      const result = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - buildStart;
      this.metrics.buildTime = buildTime;
      
      this.log(`✅ Build completed in ${buildTime}ms`, 'success');
      
      // Check bundle size if .next directory exists
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const bundleSize = this.calculateDirectorySize(nextDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📦 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`, 'info');
      }
      
      return true;
    } catch (error) {
      this.log(`⚠️ Build failed: ${error.message}`, 'warning');
      this.metrics.buildTime = Date.now() - buildStart;
      return false;
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...');
    
    const testStart = Date.now();
    
    try {
      // Try to run tests
      const result = execSync('npm test', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 120000 // 2 minutes timeout
      });
      
      const testTime = Date.now() - testStart;
      this.metrics.testTime = testTime;
      
      this.log(`✅ Tests completed in ${testTime}ms`, 'success');
      return true;
    } catch (error) {
      this.log(`⚠️ Tests failed or not found: ${error.message}`, 'warning');
      this.metrics.testTime = Date.now() - testStart;
      return false;
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(filePath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Ignore errors for inaccessible files
    }
    
    return totalSize;
  }

  async analyzeCodeQuality() {
    this.log('🔍 Analyzing code quality...');
    
    const analysis = {
      totalFiles: 0,
      totalLines: 0,
      totalSize: 0,
      fileTypes: {},
      largestFiles: []
    };
    
    const srcDir = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('⚠️ No src directory found', 'warning');
      return analysis;
    }
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else {
          const ext = path.extname(file);
          const size = stat.size;
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n').length;
          
          analysis.totalFiles++;
          analysis.totalLines += lines;
          analysis.totalSize += size;
          
          if (!analysis.fileTypes[ext]) {
            analysis.fileTypes[ext] = { count: 0, lines: 0, size: 0 };
          }
          analysis.fileTypes[ext].count++;
          analysis.fileTypes[ext].lines += lines;
          analysis.fileTypes[ext].size += size;
          
          analysis.largestFiles.push({
            path: filePath.replace(process.cwd(), ''),
            size: size,
            lines: lines
          });
        }
      }
    };
    
    walkDir(srcDir);
    
    // Sort largest files
    analysis.largestFiles.sort((a, b) => b.size - a.size);
    analysis.largestFiles = analysis.largestFiles.slice(0, 10);
    
    this.log(`📊 Code analysis: ${analysis.totalFiles} files, ${analysis.totalLines} lines, ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`, 'info');
    
    return analysis;
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const codeAnalysis = await this.analyzeCodeQuality();
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      metrics: this.metrics,
      codeAnalysis: codeAnalysis,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: 'Bundle size is large. Consider code splitting and tree shaking.',
        currentSize: `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)} MB`
      });
    }
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push({
        type: 'build-time',
        priority: 'medium',
        message: 'Build time is slow. Consider optimizing build configuration.',
        currentTime: `${(this.metrics.buildTime / 1000).toFixed(2)} seconds`
      });
    }
    
    if (this.metrics.testTime > 30000) { // 30 seconds
      recommendations.push({
        type: 'test-time',
        priority: 'medium',
        message: 'Test execution is slow. Consider parallel test execution.',
        currentTime: `${(this.metrics.testTime / 1000).toFixed(2)} seconds`
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting performance monitoring...');
    
    try {
      await this.measureBuildPerformance();
      await this.measureTestPerformance();
      
      const report = await this.generateReport();
      
      this.log('🎉 Performance monitoring completed!');
      this.log(`📊 Summary: Build ${this.metrics.buildTime}ms, Tests ${this.metrics.testTime}ms, Bundle ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message}`, 'info');
        });
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;