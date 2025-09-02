#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Monitors application performance metrics
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: null,
      bundleSize: null,
      testResults: null,
      performance: {}
    };
  }

  async measureBuildTime() {
    const startTime = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      this.metrics.buildTime = buildTime;
      console.log(`📦 Build completed in ${buildTime}ms`);
      return buildTime;
    } catch (error) {
      console.log('❌ Build failed');
      throw error;
    }
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        throw new Error('Build directory not found');
      }
      
      const getDirSize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
        }
        
        return size;
      };
      
      const bundleSize = getDirSize(buildDir);
      this.metrics.bundleSize = bundleSize;
      console.log(`📊 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
      return bundleSize;
    } catch (error) {
      console.log('❌ Failed to measure bundle size');
      throw error;
    }
  }

  async runTests() {
    try {
      const result = execSync('npm test', { encoding: 'utf8', stdio: 'pipe' });
      this.metrics.testResults = { status: 'passed', output: result };
      console.log('✅ Tests passed');
      return result;
    } catch (error) {
      this.metrics.testResults = { status: 'failed', error: error.message };
      console.log('❌ Tests failed');
      throw error;
    }
  }

  async generateReport() {
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    console.log(`📄 Performance report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting performance monitoring...\n');
    
    try {
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.runTests();
    } catch (error) {
      console.log(`❌ Performance monitoring failed: ${error.message}`);
    }
    
    await this.generateReport();
    return this.metrics;
  }
}

// Run performance monitoring if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;
