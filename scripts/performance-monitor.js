#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Tracks build performance and bundle analysis
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.reportPath = path.join(__dirname, '../performance-report.json');
    this.buildStartTime = Date.now();
  }

  startBuild() {
    console.log('🚀 Starting build performance monitoring...');
    this.buildStartTime = Date.now();
  }

  endBuild() {
    const buildTime = Date.now() - this.buildStartTime;
    console.log(`✅ Build completed in ${buildTime}ms`);
    
    const report = {
      timestamp: new Date().toISOString(),
      buildTime: buildTime,
      bundleSize: this.getBundleSize(),
      pageCount: this.getPageCount(),
      performance: this.analyzePerformance()
    };

    this.saveReport(report);
    this.displayReport(report);
  }

  getBundleSize() {
    try {
      const outDir = path.join(__dirname, '../out');
      if (!fs.existsSync(outDir)) return null;

      const stats = execSync(`du -sh ${outDir}`, { encoding: 'utf8' });
      return stats.trim().split('\t')[0];
    } catch (error) {
      console.warn('Could not calculate bundle size:', error.message);
      return null;
    }
  }

  getPageCount() {
    try {
      const outDir = path.join(__dirname, '../out');
      if (!fs.existsSync(outDir)) return 0;

      const files = execSync(`find ${outDir} -name "*.html" | wc -l`, { encoding: 'utf8' });
      return parseInt(files.trim());
    } catch (error) {
      console.warn('Could not count pages:', error.message);
      return 0;
    }
  }

  analyzePerformance() {
    const metrics = {
      buildTime: Date.now() - this.buildStartTime,
      timestamp: new Date().toISOString()
    };

    // Check for performance optimizations
    const nextConfig = path.join(__dirname, '../next.config.js');
    if (fs.existsSync(nextConfig)) {
      const config = fs.readFileSync(nextConfig, 'utf8');
      metrics.optimizations = {
        cssOptimization: config.includes('optimizeCss: true'),
        compression: config.includes('compress: true'),
        minification: config.includes('swcMinify: true'),
        staticExport: config.includes("output: 'export'")
      };
    }

    return metrics;
  }

  saveReport(report) {
    let existingReports = [];
    if (fs.existsSync(this.reportPath)) {
      try {
        existingReports = JSON.parse(fs.readFileSync(this.reportPath, 'utf8'));
      } catch (error) {
        console.warn('Could not parse existing report:', error.message);
      }
    }

    existingReports.push(report);
    
    // Keep only last 10 reports
    if (existingReports.length > 10) {
      existingReports = existingReports.slice(-10);
    }

    fs.writeFileSync(this.reportPath, JSON.stringify(existingReports, null, 2));
  }

  displayReport(report) {
    console.log('\n📊 Performance Report');
    console.log('='.repeat(50));
    console.log(`Build Time: ${report.buildTime}ms`);
    console.log(`Bundle Size: ${report.bundleSize || 'N/A'}`);
    console.log(`Page Count: ${report.pageCount}`);
    
    if (report.performance.optimizations) {
      console.log('\n🔧 Optimizations:');
      Object.entries(report.performance.optimizations).forEach(([key, enabled]) => {
        console.log(`  ${enabled ? '✅' : '❌'} ${key}`);
      });
    }
    
    console.log('='.repeat(50));
  }

  compareWithPrevious() {
    if (!fs.existsSync(this.reportPath)) {
      console.log('No previous reports to compare with.');
      return;
    }

    try {
      const reports = JSON.parse(fs.readFileSync(this.reportPath, 'utf8'));
      if (reports.length < 2) {
        console.log('Need at least 2 reports to compare.');
        return;
      }

      const current = reports[reports.length - 1];
      const previous = reports[reports.length - 2];

      console.log('\n📈 Performance Comparison');
      console.log('='.repeat(50));
      
      const buildTimeDiff = current.buildTime - previous.buildTime;
      const buildTimeChange = buildTimeDiff > 0 ? `+${buildTimeDiff}ms` : `${buildTimeDiff}ms`;
      console.log(`Build Time Change: ${buildTimeChange}`);
      
      console.log('='.repeat(50));
    } catch (error) {
      console.warn('Could not compare reports:', error.message);
    }
  }
}

// CLI usage
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      monitor.startBuild();
      break;
    case 'end':
      monitor.endBuild();
      break;
    case 'compare':
      monitor.compareWithPrevious();
      break;
    default:
      console.log('Usage: node performance-monitor.js [start|end|compare]');
  }
}

module.exports = PerformanceMonitor;