#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString();
};
  }

  async monitorBuild() {
    console.log('📊 Monitoring build performance...');
    
    const startTime = Date.now();
    
    try {
      const { execSync } = require('child_process');
      execSync('NODE_OPTIONS="--max-old-space-size=8192" npm run build', {
        cwd: this.projectRoot,
        stdio: 'inherit';
});
      
      this.metrics.buildTime = Date.now() - startTime;
      this.metrics.memoryUsage = process.memoryUsage();
      
      // Check bundle size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        this.metrics.bundleSize = this.getDirectorySize(buildDir);
      }
      
      this.saveMetrics();
      console.log('✅ Performance monitoring completed');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(filePath);
      } else {
        size += stat.size;
      }
    }
    
    return size;
  }

  saveMetrics() {
    const reportPath = path.join(this.projectRoot, 'automation-reports', 'performance-metrics.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    console.log('📊 Performance metrics saved');
  }
}

if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.monitorBuild();
}

module.exports = PerformanceMonitor;