#!/usr/bin/env node

/**
 * Build Monitor - Continuous build monitoring
 * Runs every 10 minutes to monitor build status
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.monitorContinuously = process.env.MONITOR_CONTINUOUSLY === 'true';
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
  }

  checkBuildStatus() {
    this.log('🔍 Checking build status...', 'INFO');
    
    const distDir = path.join(this.projectRoot, 'dist');
    const buildInfo = {
      exists: false,
      lastModified: null,
      age: null,
      size: null
    };

    if (fs.existsSync(distDir)) {
      const stats = fs.statSync(distDir);
      buildInfo.exists = true;
      buildInfo.lastModified = stats.mtime;
      buildInfo.age = Date.now() - stats.mtime.getTime();
      
      // Calculate directory size
      try {
        const output = execSync(`du -sh ${distDir}`, { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        buildInfo.size = output.split('\t')[0];
      } catch (error) {
        buildInfo.size = 'unknown';
      }

      const ageHours = buildInfo.age / (1000 * 60 * 60);
      this.log(`✅ Build exists. Age: ${ageHours.toFixed(1)} hours, Size: ${buildInfo.size}`, 'SUCCESS');
    } else {
      this.log('⚠️ No build found in dist directory', 'WARN');
    }

    return buildInfo;
  }

  async monitorBuild() {
    this.log('📊 Starting build monitoring...', 'INFO');
    
    const buildStatus = this.checkBuildStatus();
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      build: buildStatus,
      monitorContinuously: this.monitorContinuously,
      status: buildStatus.exists ? 'available' : 'missing'
    };

    // Add warnings if build is old
    if (buildStatus.exists && buildStatus.age > 24 * 60 * 60 * 1000) {
      report.warnings = ['Build is older than 24 hours'];
      this.log('⚠️ Warning: Build is older than 24 hours', 'WARN');
    }

    const reportPath = path.join(this.logsDir, 'build-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('📊 Build monitoring complete', 'SUCCESS');
    
    return report;
  }

  async run() {
    this.log('🚀 Build Monitor starting...', 'INFO');
    this.log(`Monitor continuously: ${this.monitorContinuously}`, 'INFO');
    
    try {
      await this.monitorBuild();
      this.log('✅ Build monitor completed successfully', 'SUCCESS');
      process.exit(0);
    } catch (error) {
      this.log(`❌ Build monitor failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the build monitor
const monitor = new BuildMonitor();
monitor.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

