#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      bundleSize: 0,
      fileCount: 0,
      errorCount: 0,
      performanceScore: 0
    };
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async analyzePerformance() {
    this.log('🔍 Analyzing Performance Metrics');
    
    // Count files
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
      this.metrics.fileCount = files.length;
    }
    
    // Check for common performance issues
    const issues = [];
    if (this.metrics.fileCount > 1000) {
      issues.push('Large number of files may impact build performance');
    }
    
    this.metrics.performanceScore = Math.max(0, 100 - issues.length * 10);
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      issues: issues,
      recommendations: [
        'Consider code splitting for large applications',
        'Implement lazy loading for routes',
        'Optimize bundle size with tree shaking',
        'Use dynamic imports for heavy components'
      ]
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'performance-analysis.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(`📊 Performance Score: ${this.metrics.performanceScore}/100`);
    this.log(`📁 Total Files: ${this.metrics.fileCount}`);
  }

  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {}
    return files;
  }
}

const monitor = new PerformanceMonitor();
monitor.analyzePerformance().catch(console.error);
