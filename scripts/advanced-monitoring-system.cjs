#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Advanced Monitoring System Starting...');

class AppMonitor {
  constructor() {
    this.metrics = {
      performance: {},
      errors: [],
      uptime: Date.now(),
      buildStatus: 'unknown'
    };
  }

  async checkPerformance() {
    try {
      console.log('🔍 Checking performance metrics...');
      const memUsage = process.memoryUsage();
      this.metrics.performance.memoryUsage = {
        rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB',
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB'
      };
      console.log('✅ Performance metrics collected');
    } catch (error) {
      console.error('❌ Performance check failed:', error.message);
    }
  }

  async checkBuildStatus() {
    try {
      console.log('🔨 Checking build status...');
      execSync('npm run build', { stdio: 'pipe' });
      this.metrics.buildStatus = 'success';
      console.log('✅ Build successful');
    } catch (error) {
      this.metrics.buildStatus = 'failed';
      console.log('❌ Build failed');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      summary: {
        buildStatus: this.metrics.buildStatus,
        uptime: Date.now() - this.metrics.uptime
      }
    };

    const reportPath = path.join(process.cwd(), 'monitoring-reports', 'advanced-monitoring-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Report generated:', reportPath);
    return report;
  }

  async run() {
    console.log('🚀 Starting comprehensive monitoring...');
    await this.checkPerformance();
    await this.checkBuildStatus();
    const report = await this.generateReport();
    
    console.log('\n📈 Monitoring Summary:');
    console.log('  - Build Status:', report.summary.buildStatus);
    console.log('  - Uptime:', Math.round(report.summary.uptime / 1000) + 's');
    
    return report;
  }
}

const monitor = new AppMonitor();
monitor.run().catch(console.error);
