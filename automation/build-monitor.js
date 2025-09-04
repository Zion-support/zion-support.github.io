#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Build Monitor - Continuously monitors build health and reports issues
 */

class BuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
    this.statusFile = path.join(__dirname, 'logs', 'build-status.json');
    this.metrics = {
      totalBuilds: 0,
      successfulBuilds: 0,
      failedBuilds: 0,
      averageBuildTime: 0,
      lastBuildTime: null,
      lastBuildStatus: 'unknown'
    };
    
    this.ensureLogDirectory();
    this.loadStatus();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        this.metrics = { ...this.metrics, ...status };
      }
    } catch (error) {
      this.log(`Error loading status: ${error.message}`);
    }
  }

  saveStatus() {
    try {
      fs.writeFileSync(this.statusFile, JSON.stringify(this.metrics, null, 2));
    } catch (error) {
      this.log(`Error saving status: ${error.message}`);
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runBuild() {
    this.log('Starting build process...', 'PROGRESS');
    const startTime = Date.now();
    
    try {
      const result = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.resolve(__dirname, '..')
      });
      
      const buildTime = Date.now() - startTime;
      this.updateMetrics(true, buildTime);
      
      this.log(`Build completed successfully in ${buildTime}ms`, 'SUCCESS');
      return { success: true, buildTime, output: result };
      
    } catch (error) {
      const buildTime = Date.now() - startTime;
      this.updateMetrics(false, buildTime);
      
      this.log(`Build failed after ${buildTime}ms: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        buildTime, 
        error: error.message, 
        output: error.stdout || error.stderr 
      };
    }
  }

  updateMetrics(success, buildTime) {
    this.metrics.totalBuilds++;
    
    if (success) {
      this.metrics.successfulBuilds++;
      this.metrics.lastBuildStatus = 'success';
    } else {
      this.metrics.failedBuilds++;
      this.metrics.lastBuildStatus = 'failed';
    }
    
    // Update average build time
    const totalTime = this.metrics.averageBuildTime * (this.metrics.totalBuilds - 1) + buildTime;
    this.metrics.averageBuildTime = totalTime / this.metrics.totalBuilds;
    
    this.metrics.lastBuildTime = new Date().toISOString();
    this.saveStatus();
  }

  async checkBuildHealth() {
    this.log('Checking build health...', 'PROGRESS');
    
    try {
      // Check if build artifacts exist
      const buildDir = path.resolve(__dirname, '..', '.next');
      const outDir = path.resolve(__dirname, '..', 'out');
      
      const hasNextBuild = fs.existsSync(buildDir);
      const hasStaticBuild = fs.existsSync(outDir);
      
      if (!hasNextBuild && !hasStaticBuild) {
        this.log('No build artifacts found', 'WARNING');
        return { healthy: false, reason: 'No build artifacts found' };
      }
      
      // Check build artifact freshness
      const buildTime = hasNextBuild ? 
        fs.statSync(buildDir).mtime : 
        fs.statSync(outDir).mtime;
      
      const ageInHours = (Date.now() - buildTime.getTime()) / (1000 * 60 * 60);
      
      if (ageInHours > 24) {
        this.log(`Build artifacts are ${ageInHours.toFixed(1)} hours old`, 'WARNING');
        return { healthy: false, reason: 'Build artifacts are stale' };
      }
      
      this.log('Build health check passed', 'SUCCESS');
      return { healthy: true, buildAge: ageInHours };
      
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`, 'ERROR');
      return { healthy: false, reason: error.message };
    }
  }

  async analyzeBuildPerformance() {
    this.log('Analyzing build performance...', 'PROGRESS');
    
    try {
      // Check bundle size
      const buildDir = path.resolve(__dirname, '..', '.next');
      if (!fs.existsSync(buildDir)) {
        return { error: 'No build directory found' };
      }
      
      const bundleSize = this.calculateDirectorySize(buildDir);
      const analysis = {
        bundleSize: this.formatBytes(bundleSize),
        bundleSizeBytes: bundleSize,
        recommendations: []
      };
      
      // Add recommendations based on bundle size
      if (bundleSize > 50 * 1024 * 1024) { // 50MB
        analysis.recommendations.push('Bundle size is large, consider code splitting');
      }
      
      if (bundleSize > 100 * 1024 * 1024) { // 100MB
        analysis.recommendations.push('Bundle size is very large, review dependencies');
      }
      
      this.log(`Bundle size: ${analysis.bundleSize}`, 'INFO');
      return analysis;
      
    } catch (error) {
      this.log(`Build performance analysis failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    };
    
    walkDir(dirPath);
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      health: this.checkBuildHealth(),
      performance: this.analyzeBuildPerformance()
    };
    
    const reportPath = path.join(__dirname, 'logs', 'build-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Build report generated: ${reportPath}`, 'SUCCESS');
    return report;
  }

  async startMonitoring(intervalMs = 300000) { // 5 minutes default
    this.log('Starting build monitoring...', 'PROGRESS');
    
    // Run initial check
    await this.runBuild();
    await this.checkBuildHealth();
    
    // Set up periodic monitoring
    setInterval(async () => {
      this.log('Running scheduled build check...', 'PROGRESS');
      await this.runBuild();
      await this.checkBuildHealth();
    }, intervalMs);
    
    this.log(`Build monitoring started with ${intervalMs}ms interval`, 'SUCCESS');
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new BuildMonitor();
  const command = process.argv[2];
  
  switch (command) {
    case 'build':
      monitor.runBuild().then(result => {
        console.log('Build result:', result);
        process.exit(result.success ? 0 : 1);
      });
      break;
    case 'health':
      monitor.checkBuildHealth().then(health => {
        console.log('Build health:', health);
        process.exit(health.healthy ? 0 : 1);
      });
      break;
    case 'monitor':
      const interval = parseInt(process.argv[3]) || 300000;
      monitor.startMonitoring(interval);
      break;
    case 'report':
      monitor.generateReport();
      break;
    default:
      console.log('Usage:');
      console.log('  node build-monitor.js build');
      console.log('  node build-monitor.js health');
      console.log('  node build-monitor.js monitor [interval-ms]');
      console.log('  node build-monitor.js report');
      break;
  }
}

module.exports = BuildMonitor;