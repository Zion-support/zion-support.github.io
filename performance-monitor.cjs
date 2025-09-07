#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Performance Monitor
 * Monitors application performance and provides optimization recommendations
 */
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      fileCount: 0,
      dependencies: 0,
      timestamp: new Date().toISOString()
    };
  }

  log(message, type = 'INFO') {
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async measureBundleSize() {
    this.log('Measuring bundle size...', 'PROGRESS');
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const result = execSync(`du -sh ${buildDir}`, { encoding: 'utf8' });
        const size = result.split('\t')[0];
        this.metrics.bundleSize = size;
        this.log(`Bundle size: ${size}`, 'SUCCESS');
      } else {
        this.log('No build directory found', 'WARNING');
      }
    } catch (error) {
      this.log(`Error measuring bundle size: ${error.message}`, 'ERROR');
    }
  }

  async measureMemoryUsage() {
    this.log('Measuring memory usage...', 'PROGRESS');
    try {
      const usage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
      this.log(`Memory usage: ${this.metrics.memoryUsage}MB`, 'SUCCESS');
    } catch (error) {
      this.log(`Error measuring memory usage: ${error.message}`, 'ERROR');
    }
  }

  async countFiles() {
    this.log('Counting files...', 'PROGRESS');
    try {
      const appDir = path.join(this.projectRoot, 'app');
      const pagesDir = path.join(this.projectRoot, 'pages');
      
      let fileCount = 0;
      
      if (fs.existsSync(appDir)) {
        const appFiles = this.countFilesRecursive(appDir);
        fileCount += appFiles;
      }
      
      if (fs.existsSync(pagesDir)) {
        const pagesFiles = this.countFilesRecursive(pagesDir);
        fileCount += pagesFiles;
      }
      
      this.metrics.fileCount = fileCount;
      this.log(`Total files: ${fileCount}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error counting files: ${error.message}`, 'ERROR');
    }
  }

  countFilesRecursive(dir) {
    let count = 0;
    try {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          count += this.countFilesRecursive(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          count++;
        }
      });
    } catch (error) {
      // Ignore errors for inaccessible directories
    }
    return count;
  }

  async countDependencies() {
    this.log('Counting dependencies...', 'PROGRESS');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const deps = Object.keys(packageJson.dependencies || {}).length;
        const devDeps = Object.keys(packageJson.devDependencies || {}).length;
        this.metrics.dependencies = deps + devDeps;
        this.log(`Dependencies: ${this.metrics.dependencies} (${deps} prod, ${devDeps} dev)`, 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error counting dependencies: ${error.message}`, 'ERROR');
    }
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.metrics.fileCount > 1000) {
      recommendations.push('Consider code splitting to reduce file count');
    }

    if (this.metrics.dependencies > 200) {
      recommendations.push('Consider removing unused dependencies');
    }

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('Consider optimizing memory usage');
    }

    if (this.metrics.bundleSize && this.metrics.bundleSize.includes('M') && parseInt(this.metrics.bundleSize) > 50) {
      recommendations.push('Consider optimizing bundle size');
    }

    return recommendations;
  }

  generateReport() {
    this.log('\n📊 PERFORMANCE MONITOR REPORT');
    this.log('='.repeat(50));
    this.log(`Timestamp: ${this.metrics.timestamp}`);
    this.log(`Bundle Size: ${this.metrics.bundleSize || 'Not available'}`);
    this.log(`Memory Usage: ${this.metrics.memoryUsage}MB`);
    this.log(`File Count: ${this.metrics.fileCount}`);
    this.log(`Dependencies: ${this.metrics.dependencies}`);
    this.log('');

    const recommendations = this.generateRecommendations();
    if (recommendations.length > 0) {
      this.log('💡 RECOMMENDATIONS:');
      recommendations.forEach(rec => this.log(`  - ${rec}`));
    } else {
      this.log('✅ No performance issues detected');
    }

    // Save detailed report
    const report = {
      timestamp: this.metrics.timestamp,
      metrics: this.metrics,
      recommendations: recommendations
    };

    fs.writeFileSync(
      'performance-monitor-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to performance-monitor-report.json');
  }

  async run() {
    this.log('🚀 Starting Performance Monitor');
    this.log('='.repeat(50));

    try {
      await this.measureBundleSize();
      await this.measureMemoryUsage();
      await this.countFiles();
      await this.countDependencies();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;