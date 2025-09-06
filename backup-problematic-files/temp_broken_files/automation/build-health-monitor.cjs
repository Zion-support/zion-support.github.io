#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting Build Health Monitor...');

class BuildHealthMonitor {
  constructor() {
    this.isRunning = false;
    this.checkInterval = parseInt(process.env.HEALTH_CHECK_INTERVAL) || 300000; // 5 minutes
    this.lastCheck = null;
    this.logFile = path.join(process.cwd(), 'automation/logs/build-health-monitor.log');
    this.healthStatus = 'unknown';
    this.consecutiveFailures = 0;
    this.maxConsecutiveFailures = 3;
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkBuildHealth() {
    try {
      this.log('🏥 Checking build health...');
      
      // Check if build directory exists and is recent
      const buildDir = path.join(process.cwd(), '.next');
      const buildExists = fs.existsSync(buildDir);
      
      if (!buildExists) {
        this.log('⚠️  Build directory not found, attempting build...', 'WARN');
        return await this.triggerBuild();
      }
      
      // Check build age
      const buildStats = fs.statSync(buildDir);
      const buildAge = Date.now() - buildStats.mtime.getTime();
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours
      
      if (buildAge > maxAge) {
        this.log('⚠️  Build is stale, attempting rebuild...', 'WARN');
        return await this.triggerBuild();
      }
      
      // Test build integrity
      const buildIntegrity = await this.testBuildIntegrity();
      
      if (buildIntegrity) {
        this.healthStatus = 'healthy';
        this.consecutiveFailures = 0;
        this.log('✅ Build health check passed');
        return true;
      } else {
        this.log('❌ Build integrity check failed', 'ERROR');
        return await this.triggerBuild();
      }
      
    } catch (error) {
      this.log(`❌ Build health check failed: ${error.message}`, 'ERROR');
      this.consecutiveFailures++;
      
      if (this.consecutiveFailures >= this.maxConsecutiveFailures) {
        this.log('🚨 Maximum consecutive failures reached, triggering emergency build...', 'CRITICAL');
        return await this.triggerEmergencyBuild();
      }
      
      return false;
    }
  }

  async testBuildIntegrity() {
    try {
      // Check if critical build files exist
      const criticalFiles = [
        '.next/static/chunks/pages/_app.js',
        '.next/static/chunks/pages/index.js',
        '.next/static/chunks/webpack.js'
      ];
      
      for (const file of criticalFiles) {
        const filePath = path.join(process.cwd(), file);
        if (!fs.existsSync(filePath)) {
          this.log(`Missing critical build file: ${file}`, 'WARN');
          return false;
        }
      }
      
      // Check build size (basic sanity check)
      const buildDir = path.join(process.cwd(), '.next');
      const buildSize = this.getDirectorySize(buildDir);
      
      if (buildSize < 1000) { // Less than 1KB is suspicious
        this.log('Build size seems too small, possible build corruption', 'WARN');
        return false;
      }
      
      return true;
      
    } catch (error) {
      this.log(`Error testing build integrity: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    
    try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          size += this.getDirectorySize(filePath);
        } else {
          const stats = fs.statSync(filePath);
          size += stats.size;
        }
      }
    } catch (error) {
      // Ignore errors for individual files
    }
    
    return size;
  }

  async triggerBuild() {
    try {
      this.log('🔨 Triggering build...');
      
      // Clear build cache
      if (fs.existsSync('.next')) {
        fs.rmSync('.next', { recursive: true, force: true });
      }
      
      if (fs.existsSync('tsconfig.tsbuildinfo')) {
        fs.unlinkSync('tsconfig.tsbuildinfo');
      }
      
      // Run build
      execSync('npm run build', { stdio: 'pipe' });
      
      this.log('✅ Build completed successfully');
      this.healthStatus = 'healthy';
      this.consecutiveFailures = 0;
      
      return true;
      
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      this.healthStatus = 'unhealthy';
      this.consecutiveFailures++;
      
      return false;
    }
  }

  async triggerEmergencyBuild() {
    try {
      this.log('🚨 Triggering emergency build with full cleanup...');
      
      // Full cleanup
      const cleanupDirs = ['.next', 'node_modules/.cache', 'out'];
      for (const dir of cleanupDirs) {
        if (fs.existsSync(dir)) {
          fs.rmSync(dir, { recursive: true, force: true });
        }
      }
      
      // Reinstall dependencies
      this.log('📦 Reinstalling dependencies...');
      execSync('npm install', { stdio: 'pipe' });
      
      // Run build
      execSync('npm run build', { stdio: 'pipe' });
      
      this.log('✅ Emergency build completed successfully');
      this.healthStatus = 'healthy';
      this.consecutiveFailures = 0;
      
      return true;
      
    } catch (error) {
      this.log(`❌ Emergency build failed: ${error.message}`, 'CRITICAL');
      this.healthStatus = 'critical';
      
      // Generate critical alert
      await this.generateCriticalAlert(error);
      
      return false;
    }
  }

  async generateCriticalAlert(error) {
    try {
      const alert = {
        timestamp: new Date().toISOString(),
        type: 'CRITICAL_BUILD_FAILURE',
        message: 'Build system is in critical state',
        error: error.message,
        consecutiveFailures: this.consecutiveFailures,
        healthStatus: this.healthStatus,
        recommendedActions: [
          'Check system resources',
          'Review recent code changes',
          'Check for dependency conflicts',
          'Consider rolling back recent changes'
        ]
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/critical-alert.json'),
        JSON.stringify(alert, null, 2)
      );
      
      this.log('🚨 Critical alert generated', 'CRITICAL');
      
    } catch (alertError) {
      this.log(`Failed to generate critical alert: ${alertError.message}`, 'ERROR');
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        lastCheck: this.lastCheck,
        healthStatus: this.healthStatus,
        consecutiveFailures: this.consecutiveFailures,
        buildExists: fs.existsSync('.next'),
        buildAge: fs.existsSync('.next') ? 
          Date.now() - fs.statSync('.next').mtime.getTime() : null,
        systemResources: {
          memory: process.memoryUsage(),
          uptime: process.uptime()
        }
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/build-health-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`Error generating health report: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Build Health Monitor started');
    
    // Initial check
    await this.checkBuildHealth();
    await this.generateHealthReport();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        this.lastCheck = new Date();
        await this.checkBuildHealth();
        await this.generateHealthReport();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Build Health Monitor...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Build Health Monitor...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the monitor
const buildHealthMonitor = new BuildHealthMonitor();
buildHealthMonitor.start().catch(error => {
  console.error('❌ Failed to start Build Health Monitor:', error);
  process.exit(1);
});