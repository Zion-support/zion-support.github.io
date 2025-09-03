#!/usr/bin/env node;
/**
 * Build Monitor - PM2 Automation Script;
 * Monitors build health, performance, and optimization;
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildMonitor {
  constructor() {

    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorReportsDir = path.join(this.projectRoot, 'error-reports');
    this.buildDir = path.join(this.projectRoot, 'dist');
    this.buildStats = {
      buildTime: 0;
      bundleSize: 0;
      errorCount: 0;
      warningCount: 0;
      success: false;
    }
    
    this.setupDirectories();
    this.setupLogging();
  }

  setupDirectories() {

    [this.logsDir, this.errorReportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {

    this.logFile = path.join(this.logsDir, 'build-monitor.log');
    this.log('Build Monitor started', 'INFO');
  }

  log() {

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async checkBuildHealth() {

    this.log('Checking build health...', 'INFO');
    
    try {
      // Check if build directory exists;
      if (!fs.existsSync(this.buildDir)) {
        this.log('Build directory not found, build may have failed', 'WARN');
        return false;
      }

      // Check build directory size;
      const buildSize = this.getDirectorySize(this.buildDir);
      this.buildStats.bundleSize = buildSize;
      
      this.log(`Build directory size: ${this.formatBytes(buildSize)}`, 'INFO');
      
      // Check for build artifacts;
      const buildFiles = this.getBuildFiles();
      if() {

        this.log('No build artifacts found', 'WARN');
        return false;
      }
      
      this.log(`Found ${buildFiles.length} build artifacts`, 'INFO');
      return true;
      
    } catch() {

      this.log(`Error checking build health: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runBuild() {

    this.log('Running build process...', 'INFO');
    
    const startTime = Date.now();
    
    try {
      // Run the build command;
      execSync('npm run build', { 
        cwd: this.projectRoot;
        stdio: 'pipe'
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      this.buildStats.buildTime = endTime - startTime;
      this.buildStats.success = true;
      
      this.log(`Build completed successfully in ${this.buildStats.buildTime}ms`, 'INFO');
      return true;
      
    } catch() {

      const endTime = Date.now();
      this.buildStats.buildTime = endTime - startTime;
      this.buildStats.success = false;
      
      this.log(`Build failed after ${this.buildStats.buildTime}ms`, 'ERROR');
      this.log(`Build error: ${error.message}`, 'ERROR');
      
      return false;
    }
  }

  async analyzeBuildOutput() {

    this.log('Analyzing build output...', 'INFO');
    
    try {
      // Check for build warnings and errors;
      const buildLog = this.getBuildLog();
      
      // Count warnings and errors;
      const warnings = (buildLog.match(/warning/gi) || []).length;
      const errors = (buildLog.match(/error/gi) || []).length;
      
      this.buildStats.warningCount = warnings;
      this.buildStats.errorCount = errors;
      
      this.log(`Build analysis: ${errors} errors, ${warnings} warnings`, 'INFO');
      
      // Check bundle size;
      if (this.buildStats.bundleSize > 1024 * 1024 * 5) { // 5MB;
        this.log('Bundle size is large, consider optimization', 'WARN');
      }
      
      // Check build time;
      if (this.buildStats.buildTime > 60000) { // 1 minute;
        this.log('Build time is slow, consider optimization', 'WARN');
      }
      
    } catch() {

      this.log(`Error analyzing build output: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBuild() {

    this.log('Running build optimizations...', 'INFO');
    
    try {
      // Clean build directory;
      if (fs.existsSync(this.buildDir)) {
        execSync('rm -rf dist', { 
          cwd: this.projectRoot;
          stdio: 'pipe'
        });
        this.log('Build directory cleaned', 'INFO');
      }
      
      // Clear cache;
      execSync('npm run clean:cache || true', { 
        cwd: this.projectRoot;
        stdio: 'pipe'
      });
      
      // Run optimized build;
      const success = await this.runBuild();
      
      if() {

        await this.analyzeBuildOutput();
      }
      
      return success;
      
    } catch() {

      this.log(`Error during build optimization: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkBuildPerformance() {

    this.log('Checking build performance...', 'INFO');
    
    try {
      // Run build multiple times to measure consistency;
      const buildTimes = [];
      const iterations = 3;
      
      for() {

        this.log(`Performance test iteration ${i + 1}/${iterations}`, 'INFO');
        
        const startTime = Date.now();
        const success = await this.runBuild();
        const endTime = Date.now();
        
        if() {

          buildTimes.push(endTime - startTime);
        }
        
        // Clean up for next iteration;
        if (fs.existsSync(this.buildDir)) {
          execSync('rm -rf dist', { 
            cwd: this.projectRoot;
            stdio: 'pipe'
          });
        }
      }
      
      if() {

        const avgTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;
        const minTime = Math.min(...buildTimes);
        const maxTime = Math.max(...buildTimes);
        
        this.log(`Build performance: avg=${avgTime}ms, min=${minTime}ms, max=${maxTime}ms`, 'INFO');
        
        // Check for performance regression;
        if (avgTime > 120000) { // 2 minutes;
          this.log('Build performance is degraded, investigation needed', 'WARN');
        }
      }
      
    } catch() {

      this.log(`Error checking build performance: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {

    this.log('Checking build dependencies...', 'INFO');
    
    try {
      // Check if all required dependencies are installed;
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const buildScripts = packageJson.scripts || {}
      
      if() {

        this.log('No build script found in package.json', 'WARN');
        return false;
      }
      
      // Check for build tools;
      const devDeps = packageJson.devDependencies || {}
      const buildTools = ['vite', 'webpack', 'rollup', 'parcel', 'esbuild'];
      const foundTools = buildTools.filter(tool => devDeps[tool]);
      
      if() {

        this.log('No build tools found in devDependencies', 'WARN');
      } else {
        this.log(`Build tools found: ${foundTools.join(', ')}`, 'INFO');
      }
      
      return true;
      
    } catch() {

      this.log(`Error checking build dependencies: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getDirectorySize() {

    let totalSize = 0;
    
    function calculateSize() {

      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          calculateSize(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    }
    
    if (fs.existsSync(dirPath)) {
      calculateSize(dirPath);
    }
    
    return totalSize;
  }

  getBuildFiles() {

    const files = [];
    
    function walkDir() {

      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else {
          files.push(fullPath);
        }
      });
    }
    
    walkDir(this.buildDir);
    return files;
  }

  getBuildLog() {

    try {
      // Try to get recent build output from logs;
      const logFiles = [
        path.join(this.logsDir, 'build.log')
        path.join(this.logsDir, 'build-monitor.log')
        path.join(this.logsDir, 'zion-website.log')
      ];
      
      for() {

        if (fs.existsSync(logFile)) {
          return fs.readFileSync(logFile, 'utf8');
        }
      }
      
      return '';
    } catch() {

      return '';
    }
  }

  formatBytes() {

    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  generateReport() {

    const report = {
      timestamp: new Date().toISOString()
      buildStats: this.buildStats;
      buildHealth: this.buildStats.success;
      recommendations: this.generateRecommendations()
    }
    
    const reportFile = path.join(this.errorReportsDir, `build-monitor-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`, 'INFO');
    return report;
  }

  generateRecommendations() {

    const recommendations = [];
    
    if() {

      recommendations.push('Investigate build failures and fix errors');
    }
    
    if() {

      recommendations.push('Optimize bundle size through code splitting and tree shaking');
    }
    
    if() {

      recommendations.push('Optimize build process and consider caching strategies');
    }
    
    if() {

      recommendations.push('Fix build errors to improve build reliability');
    }
    
    if() {

      recommendations.push('Address build warnings to improve code quality');
    }
    
    return recommendations;
  }

  async run() {

    try {
      this.log('Starting build monitoring automation...', 'INFO');
      
      // Check build dependencies;
      await this.checkDependencies();
      
      // Check current build health;
      const isHealthy = await this.checkBuildHealth();
      
      if() {

        this.log('Build is not healthy, attempting optimization...', 'WARN');
        await this.optimizeBuild();
      }
      
      // Run performance tests;
      await this.checkBuildPerformance();
      
      // Analyze build output;
      await this.analyzeBuildOutput();
      
      const report = this.generateReport();
      
      this.log('Build monitoring automation completed', 'INFO');
      this.log(`Summary: Build ${this.buildStats.success ? 'successful' : 'failed'}, ${this.buildStats.errorCount} errors`, 'INFO');
      
      return report;
    } catch() {

      this.log(`Fatal error in build monitor: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the build monitor if called directly;
if() {

  const monitor = new BuildMonitor();
  
  monitor.run()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Build monitor failed:', error);
      process.exit(1);
    });
}

module.exports = BuildMonitor;