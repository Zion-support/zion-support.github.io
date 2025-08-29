#!/usr/bin/env node

/**
 * Performance Monitor Automation Script
 * Replaces GitHub Actions performance monitoring workflows
 * Runs every 2 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'performance-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runPerformanceMonitoring() {
    console.log('📊 Starting performance monitoring...');
    
    try {
      // Check build performance
      console.log('🏗️ Monitoring build performance...');
      const buildPerformance = this.monitorBuildPerformance();
      
      // Check bundle size
      console.log('📦 Monitoring bundle size...');
      const bundleSize = this.monitorBundleSize();
      
      // Check test performance
      console.log('🧪 Monitoring test performance...');
      const testPerformance = this.monitorTestPerformance();
      
      // Check memory usage
      console.log('💾 Monitoring memory usage...');
      const memoryUsage = this.monitorMemoryUsage();
      
      // Check disk usage
      console.log('💿 Monitoring disk usage...');
      const diskUsage = this.monitorDiskUsage();
      
      // Generate comprehensive report
      const report = this.generateReport({
        build: buildPerformance,
        bundle: bundleSize,
        tests: testPerformance,
        memory: memoryUsage,
        disk: diskUsage
      });
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Performance monitoring completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  monitorBuildPerformance() {
    try {
      const startTime = Date.now();
      
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      return {
        success: true,
        buildTime: buildTime,
        buildTimeFormatted: this.formatTime(buildTime),
        output: output,
        message: `Build completed in ${this.formatTime(buildTime)}`
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  monitorBundleSize() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        return { success: false, error: 'Dist folder not found' };
      }
      
      const bundleSizes = this.calculateBundleSizes(distPath);
      
      return {
        success: true,
        totalSize: bundleSizes.total,
        totalSizeFormatted: this.formatBytes(bundleSizes.total),
        files: bundleSizes.files,
        message: `Bundle size: ${this.formatBytes(bundleSizes.total)}`
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  monitorTestPerformance() {
    try {
      const startTime = Date.now();
      
      const output = execSync('npm test', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const endTime = Date.now();
      const testTime = endTime - startTime;
      
      return {
        success: true,
        testTime: testTime,
        testTimeFormatted: this.formatTime(testTime),
        output: output,
        message: `Tests completed in ${this.formatTime(testTime)}`
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  monitorMemoryUsage() {
    try {
      const memUsage = process.memoryUsage();
      
      return {
        success: true,
        rss: memUsage.rss,
        rssFormatted: this.formatBytes(memUsage.rss),
        heapUsed: memUsage.heapUsed,
        heapUsedFormatted: this.formatBytes(memUsage.heapUsed),
        heapTotal: memUsage.heapTotal,
        heapTotalFormatted: this.formatBytes(memUsage.heapTotal),
        external: memUsage.external,
        externalFormatted: this.formatBytes(memUsage.external),
        message: `Memory usage: ${this.formatBytes(memUsage.heapUsed)}`
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  monitorDiskUsage() {
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      
      const distSize = fs.existsSync(distPath) ? this.calculateDirectorySize(distPath) : 0;
      const nodeModulesSize = fs.existsSync(nodeModulesPath) ? this.calculateDirectorySize(nodeModulesPath) : 0;
      
      return {
        success: true,
        distSize: distSize,
        distSizeFormatted: this.formatBytes(distSize),
        nodeModulesSize: nodeModulesSize,
        nodeModulesSizeFormatted: this.formatBytes(nodeModulesSize),
        totalSize: distSize + nodeModulesSize,
        totalSizeFormatted: this.formatBytes(distSize + nodeModulesSize),
        message: `Disk usage: ${this.formatBytes(distSize + nodeModulesSize)}`
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  calculateBundleSizes(dir) {
    let totalSize = 0;
    const files = [];
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const subDirSizes = this.calculateBundleSizes(fullPath);
        totalSize += subDirSizes.total;
        files.push(...subDirSizes.files);
      } else {
        totalSize += stat.size;
        files.push({
          name: item,
          size: stat.size,
          sizeFormatted: this.formatBytes(stat.size),
          path: path.relative(dir, fullPath)
        });
      }
    });
    
    return { total: totalSize, files };
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        totalSize += this.calculateDirectorySize(fullPath);
      } else {
        totalSize += stat.size;
      }
    });
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatTime(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`;
    return `${(ms / 60000).toFixed(2)}m`;
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        build: {
          success: data.build?.success || false,
          time: data.build?.buildTimeFormatted || 'N/A'
        },
        bundle: {
          success: data.bundle?.success || false,
          size: data.bundle?.totalSizeFormatted || 'N/A'
        },
        tests: {
          success: data.tests?.success || false,
          time: data.tests?.testTimeFormatted || 'N/A'
        },
        memory: {
          success: data.memory?.success || false,
          usage: data.memory?.heapUsedFormatted || 'N/A'
        },
        disk: {
          success: data.disk?.success || false,
          usage: data.disk?.totalSizeFormatted || 'N/A'
        }
      },
      details: data,
      recommendations: this.generateRecommendations(data)
    };

    return report;
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    // Build performance recommendations
    if (data.build?.success && data.build.buildTime > 30000) {
      recommendations.push('🏗️ Build time is slow (>30s) - consider optimizing build process');
    }
    
    // Bundle size recommendations
    if (data.bundle?.success && data.bundle.totalSize > 5 * 1024 * 1024) {
      recommendations.push('📦 Bundle size is large (>5MB) - consider code splitting and tree shaking');
    }
    
    // Test performance recommendations
    if (data.tests?.success && data.tests.testTime > 10000) {
      recommendations.push('🧪 Test execution is slow (>10s) - consider parallelizing tests');
    }
    
    // Memory usage recommendations
    if (data.memory?.success && data.memory.heapUsed > 100 * 1024 * 1024) {
      recommendations.push('💾 High memory usage (>100MB) - check for memory leaks');
    }
    
    // Disk usage recommendations
    if (data.disk?.success && data.disk.totalSize > 500 * 1024 * 1024) {
      recommendations.push('💿 High disk usage (>500MB) - consider cleaning up build artifacts');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All performance metrics are within acceptable ranges');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `performance-monitor-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Performance report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'performance-monitor-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Performance Monitor Report - ${timestamp}

## Summary
- **Build Performance**: ${report.summary.build.success ? '✅' : '❌'} ${report.summary.build.time}
- **Bundle Size**: ${report.summary.bundle.success ? '✅' : '❌'} ${report.summary.bundle.size}
- **Test Performance**: ${report.summary.tests.success ? '✅' : '❌'} ${report.summary.tests.time}
- **Memory Usage**: ${report.summary.memory.success ? '✅' : '❌'} ${report.summary.memory.usage}
- **Disk Usage**: ${report.summary.disk.success ? '✅' : '❌'} ${report.summary.disk.usage}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.status === 'completed' ? '✅ Performance Monitoring Completed' : '❌ Performance Monitoring Failed'}

---
*Report generated automatically by PM2 Performance Monitor*
`;

    const filename = `performance-monitor-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'performance-monitor-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const monitor = new PerformanceMonitor();
  await monitor.runPerformanceMonitoring();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = PerformanceMonitor;