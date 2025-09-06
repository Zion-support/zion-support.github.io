const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'performance-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
    
    const startTime = Date.now();
    
    try {
      // Build performance
      const buildStart = Date.now();
      await this.runCommand('npm run build', 'Build performance test');
      const buildTime = Date.now() - buildStart;
      
      // Bundle size analysis
      const distPath = '/workspace/dist';
      let bundleSize = 0;
      if (fs.existsSync(distPath)) {
        bundleSize = this.getDirectorySize(distPath);
      }
      
      const performance = {
        timestamp: new Date().toISOString(),
        buildTime: buildTime,
        bundleSize: bundleSize,
        totalTime: Date.now() - startTime,
        recommendations: []
      };
      
      // Generate recommendations
      if (buildTime > 30000) {
        performance.recommendations.push('Build time is slow - consider optimizing dependencies');
      }
      
      if (bundleSize > 5000000) { // 5MB
        performance.recommendations.push('Bundle size is large - consider code splitting');
      }
      
      const reportFile = path.join(this.logsDir, 'performance-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(performance, null, 2));
      
      this.log(`📊 Performance Report:`);
      this.log(`Build time: ${buildTime}ms`);
      this.log(`Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)}MB`);
      this.log(`Recommendations: ${performance.recommendations.length}`);
      
      return performance;
      
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    }
    
    return size;
  }
}

const monitor = new PerformanceMonitor();
monitor.monitorPerformance().catch(console.error);