#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/performance-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/performance-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }

  async checkBuildPerformance() {
    try {
      this.log('🏗️  Testing build performance...');
      
      const startTime = Date.now();
      
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }
      
      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      
      // Check build output size
      let buildSize = 0;
      if (fs.existsSync('dist')) {
        buildSize = this.getDirectorySize('dist');
      } else if (fs.existsSync('.next')) {
        buildSize = this.getDirectorySize('.next');
      }
      
      return {
        success: true,
        buildTime,
        buildSize,
        buildSizeMB: Math.round(buildSize / (1024 * 1024) * 100) / 100
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        buildTime: 0,
        buildSize: 0,
        buildSizeMB: 0
      };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      this.log(`Error calculating directory size for ${dirPath}: ${error.message}`);
    }
    
    return totalSize;
  }

  async checkBundleSize() {
    try {
      this.log('📦 Analyzing bundle size...');
      
      const bundleAnalysis = {
        totalSize: 0,
        files: [],
        recommendations: []
      };
      
      // Check for common build directories
      const buildDirs = ['dist', '.next', 'build', 'out'];
      
      for (const dir of buildDirs) {
        if (fs.existsSync(dir)) {
          const dirSize = this.getDirectorySize(dir);
          bundleAnalysis.totalSize += dirSize;
          
          bundleAnalysis.files.push({
            directory: dir,
            size: dirSize,
            sizeMB: Math.round(dirSize / (1024 * 1024) * 100) / 100
          });
        }
      }
      
      // Check for large files
      const largeFiles = this.findLargeFiles(buildDirs);
      bundleAnalysis.largeFiles = largeFiles;
      
      // Generate recommendations
      if (bundleAnalysis.totalSize > 2 * 1024 * 1024) { // 2MB
        bundleAnalysis.recommendations.push({
          priority: 'high',
          message: 'Bundle size is large (>2MB)',
          action: 'Consider code splitting and lazy loading'
        });
      }
      
      if (largeFiles.length > 0) {
        bundleAnalysis.recommendations.push({
          priority: 'medium',
          message: 'Large files detected',
          action: 'Optimize or split large files'
        });
      }
      
      return {
        success: true,
        analysis: bundleAnalysis
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        analysis: null
      };
    }
  }

  findLargeFiles(directories, maxSize = 500 * 1024) { // 500KB
    const largeFiles = [];
    
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        this.findLargeFilesInDir(dir, maxSize, largeFiles);
      }
    }
    
    return largeFiles.sort((a, b) => b.size - a.size);
  }

  findLargeFilesInDir(dirPath, maxSize, largeFiles) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.findLargeFilesInDir(fullPath, maxSize, largeFiles);
        } else if (stat.size > maxSize) {
          largeFiles.push({
            path: fullPath,
            size: stat.size,
            sizeMB: Math.round(stat.size / (1024 * 1024) * 100) / 100
          });
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dirPath}: ${error.message}`);
    }
  }

  async checkMemoryUsage() {
    try {
      this.log('💾 Checking memory usage...');
      
      const memInfo = execSync('free -m', { encoding: 'utf8' });
      const memLines = memInfo.split('\n');
      const memTotal = parseInt(memLines[1].split(/\s+/)[1]);
      const memUsed = parseInt(memLines[1].split(/\s+/)[2]);
      const memFree = parseInt(memLines[1].split(/\s+/)[3]);
      
      return {
        success: true,
        total: memTotal,
        used: memUsed,
        free: memFree,
        usagePercent: Math.round((memUsed / memTotal) * 100)
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        total: 0,
        used: 0,
        free: 0,
        usagePercent: 0
      };
    }
  }

  async checkCPUUsage() {
    try {
      this.log('⚡ Checking CPU usage...');
      
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuUsage = cpuInfo.includes('id') ? 
        (100 - parseFloat(cpuInfo.split('id')[0].split(',')[3].replace('%id', '').trim())) : 0;
      
      return {
        success: true,
        usagePercent: Math.round(cpuUsage)
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        usagePercent: 0
      };
    }
  }

  async checkDiskUsage() {
    try {
      this.log('💿 Checking disk usage...');
      
      const diskInfo = execSync('df -h', { encoding: 'utf8' });
      const diskLines = diskInfo.split('\n');
      const rootDisk = diskLines.find(line => line.includes('/'));
      const diskUsage = rootDisk ? parseInt(rootDisk.split(/\s+/)[4].replace('%', '')) : 0;
      
      return {
        success: true,
        usagePercent: diskUsage
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        usagePercent: 0
      };
    }
  }

  async generateReport(buildInfo, bundleInfo, memoryInfo, cpuInfo, diskInfo) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        buildPerformance: 'unknown',
        bundleSize: 'unknown',
        systemResources: 'unknown',
        overallPerformance: 'unknown',
        performanceScore: 0
      },
      details: {
        build: buildInfo,
        bundle: bundleInfo,
        memory: memoryInfo,
        cpu: cpuInfo,
        disk: diskInfo
      },
      recommendations: []
    };
    
    // Calculate performance scores
    let totalScore = 0;
    let maxScore = 0;
    
    // Build performance
    if (buildInfo.success) {
      if (buildInfo.buildTime < 60000) { // 1 minute
        report.summary.buildPerformance = 'excellent';
        totalScore += 25;
      } else if (buildInfo.buildTime < 180000) { // 3 minutes
        report.summary.buildPerformance = 'good';
        totalScore += 20;
      } else if (buildInfo.buildTime < 300000) { // 5 minutes
        report.summary.buildPerformance = 'fair';
        totalScore += 15;
      } else {
        report.summary.buildPerformance = 'poor';
        totalScore += 5;
      }
    }
    maxScore += 25;
    
    // Bundle size
    if (bundleInfo.success && bundleInfo.analysis) {
      const totalSize = bundleInfo.analysis.totalSize;
      if (totalSize < 1024 * 1024) { // 1MB
        report.summary.bundleSize = 'excellent';
        totalScore += 25;
      } else if (totalSize < 2 * 1024 * 1024) { // 2MB
        report.summary.bundleSize = 'good';
        totalScore += 20;
      } else if (totalSize < 5 * 1024 * 1024) { // 5MB
        report.summary.bundleSize = 'fair';
        totalScore += 15;
      } else {
        report.summary.bundleSize = 'poor';
        totalScore += 5;
      }
    }
    maxScore += 25;
    
    // System resources
    if (memoryInfo.success && cpuInfo.success && diskInfo.success) {
      const memUsage = memoryInfo.usagePercent;
      const cpuUsage = cpuInfo.usagePercent;
      const diskUsage = diskInfo.usagePercent;
      
      if (memUsage < 70 && cpuUsage < 70 && diskUsage < 80) {
        report.summary.systemResources = 'excellent';
        totalScore += 25;
      } else if (memUsage < 80 && cpuUsage < 80 && diskUsage < 90) {
        report.summary.systemResources = 'good';
        totalScore += 20;
      } else if (memUsage < 90 && cpuUsage < 90 && diskUsage < 95) {
        report.summary.systemResources = 'fair';
        totalScore += 15;
      } else {
        report.summary.systemResources = 'poor';
        totalScore += 5;
      }
    }
    maxScore += 25;
    
    // Additional performance metrics
    if (buildInfo.success && bundleInfo.success) {
      const buildEfficiency = buildInfo.buildTime / Math.max(bundleInfo.analysis.totalSize / (1024 * 1024), 1);
      if (buildEfficiency < 30) { // seconds per MB
        totalScore += 25;
      } else if (buildEfficiency < 60) {
        totalScore += 20;
      } else if (buildEfficiency < 120) {
        totalScore += 15;
      } else {
        totalScore += 5;
      }
    }
    maxScore += 25;
    
    report.summary.performanceScore = Math.round((totalScore / maxScore) * 100);
    
    // Determine overall performance
    if (report.summary.performanceScore >= 80) {
      report.summary.overallPerformance = 'excellent';
    } else if (report.summary.performanceScore >= 60) {
      report.summary.overallPerformance = 'good';
    } else if (report.summary.performanceScore >= 40) {
      report.summary.overallPerformance = 'fair';
    } else {
      report.summary.overallPerformance = 'poor';
    }
    
    // Generate recommendations
    if (buildInfo.success && buildInfo.buildTime > 180000) {
      report.recommendations.push({
        priority: 'high',
        message: 'Build time is slow',
        action: 'Optimize build process, consider parallel builds or caching'
      });
    }
    
    if (bundleInfo.success && bundleInfo.analysis.totalSize > 2 * 1024 * 1024) {
      report.recommendations.push({
        priority: 'high',
        message: 'Bundle size is large',
        action: 'Implement code splitting, lazy loading, and tree shaking'
      });
    }
    
    if (memoryInfo.success && memoryInfo.usagePercent > 80) {
      report.recommendations.push({
        priority: 'medium',
        message: 'High memory usage',
        action: 'Consider memory optimization or increasing available memory'
      });
    }
    
    if (cpuInfo.success && cpuInfo.usagePercent > 80) {
      report.recommendations.push({
        priority: 'medium',
        message: 'High CPU usage',
        action: 'Optimize CPU-intensive operations or consider scaling'
      });
    }
    
    if (diskInfo.success && diskInfo.usagePercent > 90) {
      report.recommendations.push({
        priority: 'high',
        message: 'High disk usage',
        action: 'Clean up unnecessary files and implement log rotation'
      });
    }
    
    return report;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('⚡ Starting Performance Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Run all performance checks
      const buildInfo = await this.checkBuildPerformance();
      const bundleInfo = await this.checkBundleSize();
      const memoryInfo = await this.checkMemoryUsage();
      const cpuInfo = await this.checkCPUUsage();
      const diskInfo = await this.checkDiskUsage();
      
      // Generate report
      this.log('📊 Generating performance report...');
      const report = await this.generateReport(buildInfo, bundleInfo, memoryInfo, cpuInfo, diskInfo);
      
      // Save report
      await this.saveReport(report);
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 Performance Monitor Summary:');
      this.log(`Build Performance: ${report.summary.buildPerformance}`);
      this.log(`Bundle Size: ${report.summary.bundleSize}`);
      this.log(`System Resources: ${report.summary.systemResources}`);
      this.log(`Overall Performance: ${report.summary.overallPerformance}`);
      this.log(`Performance Score: ${report.summary.performanceScore}/100`);
      this.log(`Duration: ${duration}ms`);
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('\n✨ Performance is excellent!');
      }
      
    } catch (error) {
      this.log(`❌ Error running performance monitor: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
monitor.run().catch(error => {
  process.exit(1);
});