<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorReportsDir = path.join(this.projectRoot, 'error-reports');
    this.buildDir = path.join(this.projectRoot, 'dist');
    this.buildStats = {
      buildTime: 0,
      bundleSize: 0,
      errorCount: 0,
      warningCount: 0,
      success: false,
    };
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

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async checkBuildHealth() {
    this.log('Checking build health...', 'INFO');
    try {
      if (!fs.existsSync(this.buildDir)) {
        this.log('Build directory not found, build may have failed', 'WARN');
        return false;
      }

      const buildSize = this.getDirectorySize(this.buildDir);
      this.buildStats.bundleSize = buildSize;
      this.log(`Build directory size: ${this.formatBytes(buildSize)}`, 'INFO');

      const buildFiles = this.getBuildFiles();
      if (buildFiles.length === 0) {
        this.log('No build artifacts found', 'WARN');
        return false;
      }

      this.log(`Found ${buildFiles.length} build artifacts`, 'INFO');
      return true;
    } catch (error) {
      this.log(`Error checking build health: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runBuild() {
    this.log('Running build process...', 'INFO');
    const startTime = Date.now();

    try {
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
      });

      const endTime = Date.now();
      this.buildStats.buildTime = endTime - startTime;
      this.buildStats.success = true;

      this.log(`Build completed successfully in ${this.buildStats.buildTime}ms`, 'INFO');
      return true;
    } catch (error) {
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
      const buildLog = this.getBuildLog();

      const warnings = (buildLog.match(/warning/gi) || []).length;
      const errors = (buildLog.match(/error/gi) || []).length;

      this.buildStats.warningCount = warnings;
      this.buildStats.errorCount = errors;

      this.log(`Build analysis: ${errors} errors, ${warnings} warnings`, 'INFO');

      if (this.buildStats.bundleSize > 1024 * 1024 * 5) {
        this.log('Bundle size is large, consider optimization', 'WARN');
      }

      if (this.buildStats.buildTime > 60000) {
        this.log('Build time is slow, consider optimization', 'WARN');
      }
    } catch (error) {
      this.log(`Error analyzing build output: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBuild() {
    this.log('Running build optimizations...', 'INFO');
    try {
      if (fs.existsSync(this.buildDir)) {
        execSync('rm -rf dist', {
          cwd: this.projectRoot,
          stdio: 'pipe',
        });
        this.log('Build directory cleaned', 'INFO');
      }

      execSync('npm run clean || true', {
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      const success = await this.runBuild();
      if (success) {
        await this.analyzeBuildOutput();
      }

      return success;
    } catch (error) {
      this.log(`Error during build optimization: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkBuildPerformance() {
    this.log('Checking build performance...', 'INFO');
    try {
      const buildTimes = [];
      const iterations = 3;

      for (let i = 0; i < iterations; i++) {
        this.log(`Performance test iteration ${i + 1}/${iterations}`, 'INFO');
        const startTime = Date.now();
        const success = await this.runBuild();
        const endTime = Date.now();

        if (success) {
          buildTimes.push(endTime - startTime);
        }

        if (fs.existsSync(this.buildDir)) {
          execSync('rm -rf dist', {
            cwd: this.projectRoot,
            stdio: 'pipe',
          });
        }
      }

      if (buildTimes.length > 0) {
        const avgTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;
        const minTime = Math.min(...buildTimes);
        const maxTime = Math.max(...buildTimes);

        this.log(`Build performance: avg=${avgTime}ms, min=${minTime}ms, max=${maxTime}ms`, 'INFO');

        if (avgTime > 120000) {
          this.log('Build performance is degraded, investigation needed', 'WARN');
        }
      }
    } catch (error) {
      this.log(`Error checking build performance: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {
    this.log('Checking build dependencies...', 'INFO');
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const buildScripts = packageJson.scripts || {};

      if (!buildScripts.build) {
        this.log('No build script found in package.json', 'WARN');
        return false;
      }

      const devDeps = packageJson.devDependencies || {};
      const buildTools = ['vite', 'webpack', 'rollup', 'parcel', 'esbuild'];
      const foundTools = buildTools.filter(tool => devDeps[tool]);

      if (foundTools.length === 0) {
        this.log('No build tools found in devDependencies', 'WARN');
      } else {
        this.log(`Build tools found: ${foundTools.join(', ')}`, 'INFO');
      }

      return true;
    } catch (error) {
      this.log(`Error checking build dependencies: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;

    function calculateSize(dir) {
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

    function walkDir(dir) {
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
      const logFiles = [
        path.join(this.logsDir, 'build.log'),
        path.join(this.logsDir, 'build-monitor.log'),
        path.join(this.logsDir, 'zion-website.log')
      ];

      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          return fs.readFileSync(logFile, 'utf8');
        }
      }

      return '';
    } catch (error) {
      return '';
    }
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
      buildStats: this.buildStats,
      buildHealth: this.buildStats.success,
      recommendations: this.generateRecommendations(),
    };

    const reportFile = path.join(this.errorReportsDir, `build-monitor-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`, 'INFO');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.buildStats.success) {
      recommendations.push('Investigate build failures and fix errors');
    }

    if (this.buildStats.bundleSize > 1024 * 1024 * 5) {
      recommendations.push('Optimize bundle size through code splitting and tree shaking');
    }

    if (this.buildStats.buildTime > 60000) {
      recommendations.push('Optimize build process and consider caching strategies');
    }

    if (this.buildStats.errorCount > 0) {
      recommendations.push('Fix build errors to improve build reliability');
    }

    if (this.buildStats.warningCount > 10) {
      recommendations.push('Address build warnings to improve code quality');
    }

    return recommendations;
  }

  async run() {
    try {
      this.log('Starting build monitoring automation...', 'INFO');

      await this.checkDependencies();

      const isHealthy = await this.checkBuildHealth();
      if (!isHealthy) {
        this.log('Build is not healthy, attempting optimization...', 'WARN');
        await this.optimizeBuild();
      }

      await this.checkBuildPerformance();

      await this.analyzeBuildOutput();

      const report = this.generateReport();

      this.log('Build monitoring automation completed', 'INFO');
      this.log(`Summary: Build ${this.buildStats.success ? 'successful' : 'failed'}, ${this.buildStats.errorCount} errors`, 'INFO');

      return report;
    } catch (error) {
      this.log(`Fatal error in build monitor: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the build monitor if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
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

<<<<<<< HEAD
<<<<<<< HEAD
export default BuildMonitor;
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
monitorBuild();
=======
<<<<<<< HEAD
#!/usr/bin/env node; ; const fs = const path = const { execSync } = ; class BuildMonitor {; constructor() {; this.projectRoot = process.cwd(); this.logsDir = path.join(this.projectRoot,'logs'); this.errorReportsDir = path.join(this.projectRoot,'error-reports'); this.buildDir = path.join(this.projectRoot,'dist'); this.buildStats = {; buildTime: 0,bundleSize: 0,errorCount: 0,warningCount: 0,success: false,}; ; this.setupDirectories(); this.setupLogging(),} ; setupDirectories() {; [this.logsDir,this.errorReportsDir].forEach(dir => {; if (!fs.existsSync(dir)) {; fs.mkdirSync(dir,{ recursive: true }),} }),} ; setupLogging() {; this.logFile = path.join(this.logsDir,'build-monitor.log'); this.log('Build Monitor started','INFO'),} ; log(message,level = 'INFO') {; const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}\n`; ; ); fs.appendFileSync(this.logFile,logEntry),} ; async checkBuildHealth() {; this.log('Checking build health...','INFO'); ; try {; if (!fs.existsSync(this.buildDir)) {; this.log('Build directory not found,build may have failed','WARN'); return false,} ; const buildSize = this.getDirectorySize(this.buildDir); this.buildStats.bundleSize = buildSize; ; this.log(`Build directory size: ${this.formatBytes(buildSize)}`,'INFO'); ; const buildFiles = this.getBuildFiles(); if (buildFiles.length === 0) {; this.log('No build artifacts found','WARN'); return false,} ; this.log(`Found ${buildFiles.length} build artifacts`,'INFO'); return true,} catch (error) {; this.log(`Error checking build health: ${error.message}`,'ERROR'); return false,} } ; async runBuild() {; this.log('Running build process...','INFO'); ; const startTime = Date.now(); ; try {; execSync('npm run build',{ ; cwd: this.projectRoot,stdio: 'pipe',encoding: 'utf8',}); ; const endTime = Date.now(); this.buildStats.buildTime = endTime - startTime; this.buildStats.success = true; ; this.log(`Build completed successfully in ${this.buildStats.buildTime}ms`,'INFO'); return true,} catch (error) {; const endTime = Date.now(); this.buildStats.buildTime = endTime - startTime; this.buildStats.success = false; ; this.log(`Build failed after ${this.buildStats.buildTime}ms`,'ERROR'); this.log(`Build error: ${error.message}`,'ERROR'); ; return false,} } ; async analyzeBuildOutput() {; this.log('Analyzing build output...','INFO'); ; try {; const buildLog = this.getBuildLog(); ; const warnings = (buildLog.match(/warning/gi) || []).length; const errors = (buildLog.match(/error/gi) || []).length; ; this.buildStats.warningCount = warnings; this.buildStats.errorCount = errors; ; this.log(`Build analysis: ${errors} errors,${warnings} warnings`,'INFO'); ; if (this.buildStats.bundleSize > 1024 * 1024 * 5) { this.log('Bundle size is large,consider optimization','WARN'),} ; if (this.buildStats.buildTime > 60000) { this.log('Build time is slow,consider optimization','WARN'),} ,} catch (error) {; this.log(`Error analyzing build output: ${error.message}`,'ERROR'),} } ; async optimizeBuild() {; this.log('Running build optimizations...','INFO'); ; try {; if (fs.existsSync(this.buildDir)) {; execSync('rm -rf dist',{ ; cwd: this.projectRoot,stdio: 'pipe',}); this.log('Build directory cleaned','INFO'),} ; execSync('npm run clean: cache || true',{ ; cwd: this.projectRoot,stdio: 'pipe',}); ; const success = await this.runBuild(); ; if (success) {; await this.analyzeBuildOutput(),} ; return success,} catch (error) {; this.log(`Error during build optimization: ${error.message}`,'ERROR'); return false,} } ; async checkBuildPerformance() {; this.log('Checking build performance...','INFO'); ; try {; const buildTimes = []; const iterations = 3; ; for (let i = 0; i < iterations; i++) {; this.log(`Performance test iteration ${i + 1}/${iterations}`,'INFO'); ; const startTime = Date.now(); const success = await this.runBuild(); const endTime = Date.now(); ; if (success) {; buildTimes.push(endTime - startTime),} ; if (fs.existsSync(this.buildDir)) {; execSync('rm -rf dist',{ ; cwd: this.projectRoot,stdio: 'pipe',}),} } ; if (buildTimes.length > 0) {; const avgTime = buildTimes.reduce((a,b) => a + b,0) / buildTimes.length; const minTime = Math.min(...buildTimes); const maxTime = Math.max(...buildTimes); ; this.log(`Build performance: avg=${avgTime}ms,min=${minTime}ms,max=${maxTime}ms`,'INFO'); ; if (avgTime > 120000) { this.log('Build performance is degraded,investigation needed','WARN'),} } ,} catch (error) {; this.log(`Error checking build performance: ${error.message}`,'ERROR'),} } ; async checkDependencies() {; this.log('Checking build dependencies...','INFO'); ; try {; const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot,'package.json'),'utf8')); const buildScripts = packageJson.scripts || {}; ; if (!buildScripts.build) {; this.log('No build script found in package.json','WARN'); return false,} ; const devDeps = packageJson.devDependencies || {}; const buildTools = ['vite','webpack','rollup','parcel','esbuild']; const foundTools = buildTools.filter(tool => devDeps[tool]); ; if (foundTools.length === 0) {; this.log('No build tools found in devDependencies','WARN'),} else {; this.log(`Build tools found: ${foundTools.join(',')}`,'INFO'),} ; return true,} catch (error) {; this.log(`Error checking build dependencies: ${error.message}`,'ERROR'); return false,} } ; getDirectorySize(dirPath) {; let totalSize = 0; ; function calculateSize(dir) {; const items = fs.readdirSync(dir); ; items.forEach(item => {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); ; if (stat.isDirectory()) {; calculateSize(fullPath),} else {; totalSize += stat.size,} }),} ; if (fs.existsSync(dirPath)) {; calculateSize(dirPath),} ; return totalSize,} ; getBuildFiles() {; const files = []; ; function walkDir(dir) {; if (!fs.existsSync(dir)) return; ; const items = fs.readdirSync(dir); ; items.forEach(item => {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); ; if (stat.isDirectory()) {; walkDir(fullPath),} else {; files.push(fullPath),} }),} ; walkDir(this.buildDir); return files,} ; getBuildLog() {; try {; const logFiles = [; path.join(this.logsDir,'build.log'),path.join(this.logsDir,'build-monitor.log'),path.join(this.logsDir,'zion-website.log')]; ; for (const logFile of logFiles) {; if (fs.existsSync(logFile)) {; return fs.readFileSync(logFile,'utf8'),} } ; return '',} catch (error) {; return '',} } ; formatBytes(bytes) {; if (bytes === 0) return '0 Bytes'; ; const k = 1024; const sizes = ['Bytes','KB','MB','GB']; const i = Math.floor(Math.log(bytes) / Math.log(k)); ; return parseFloat((bytes / Math.pow(k,i)).toFixed(2)) + ' ' + sizes[i],} ; generateReport() {; const report = {; timestamp: new Date().toISOString(),buildStats: this.buildStats,buildHealth: this.buildStats.success,recommendations: this.generateRecommendations(),}; ; const reportFile = path.join(this.errorReportsDir,`build-monitor-report-${Date.now()}.json`); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); ; this.log(`Report generated: ${reportFile}`,'INFO'); return report,} ; generateRecommendations() {; const recommendations = []; ; if (!this.buildStats.success) {; recommendations.push('Investigate build failures and fix errors'),} ; if (this.buildStats.bundleSize > 1024 * 1024 * 5) {; recommendations.push('Optimize bundle size through code splitting and tree shaking'),} ; if (this.buildStats.buildTime > 60000) {; recommendations.push('Optimize build process and consider caching strategies'),} ; if (this.buildStats.errorCount > 0) {; recommendations.push('Fix build errors to improve build reliability'),} ; if (this.buildStats.warningCount > 10) {; recommendations.push('Address build warnings to improve code quality'),} ; return recommendations,} ; async run() {; try {; this.log('Starting build monitoring automation...','INFO'); ; await this.checkDependencies(); ; const isHealthy = await this.checkBuildHealth(); ; if (!isHealthy) {; this.log('Build is not healthy,attempting optimization...','WARN'); await this.optimizeBuild(),} ; await this.checkBuildPerformance(); ; await this.analyzeBuildOutput(); ; const report = this.generateReport(); ; this.log('Build monitoring automation completed','INFO'); this.log(`Summary: Build ${this.buildStats.success ? 'successful' : 'failed'},${this.buildStats.errorCount} errors`,'INFO'); ; return report,} catch (error) {; this.log(`Fatal error in build monitor: ${error.message}`,'ERROR'); throw error,} } } ; if (require.main === module) {; const monitor = new BuildMonitor(); ; monitor.run(); .then(() => {; process.exit(0),}); .catch((error) => {; console.error('Build monitor failed:',error); process.exit(1),}),} ; module.exports = BuildMonitor;
#!/usr/bin/env node;
/**;
 * Build Monitor - PM2 Automation Script;
 * Monitors build health, performance, and optimization;
 */;
const fs = // // require('fs');
const path = // // require('path');
const { execSync } = // // require('child_process');
class BuildMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorReportsDir = path.join(this.projectRoot, 'error-reports');
    this.buildDir = path.join(this.projectRoot, 'dist');
    this.buildStats = {;
      "buildTime": 0,
      "bundleSize": 0,
      "errorCount": 0,
      "warningCount": 0,
      "success": false};
    this.setupDirectories();
    this.setupLogging()}
;
  setupDirectories() {;
    [this.logsDir, this.errorReportsDir].forEach(dir => {;
      if (!fs.existsSync(dir)) {;
        fs.mkdirSync(dir, { "recursive": true })}
    })}
;
  setupLogging() {;
    this.logFile = path.join(this.logsDir, 'build-monitor.log');
    this.log('Build Monitor started', 'INFO')}
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry)}
;
  async checkBuildHealth() {;
    this.log('Checking build health...', 'INFO');
    try {;
      // Check if build directory exists;
      if (!fs.existsSync(this.buildDir)) {;
        this.log('Build directory not found, build may have failed', 'WARN');
        return false}
;
      // Check build directory size;
      const buildSize = this.getDirectorySize(this.buildDir);
      this.buildStats.bundleSize = buildSize;
      this.log(`Build directory "size": ${this.formatBytes(buildSize)}`, 'INFO');
      // Check for build artifacts;
      const buildFiles = this.getBuildFiles();
      if (buildFiles.length === 0) {;
        this.log('No build artifacts found', 'WARN');
        return false}
      ;
      this.log(`Found ${buildFiles.length} build artifacts`, 'INFO');
      return true} catch (error) {;
      this.log(`Error checking build "health": ${error.message}`, 'ERROR');
      return false}
  }
;
  async runBuild() {;
    this.log('Running build process...', 'INFO');
    const startTime = Date.now();
    try {;
      // Run the build command;
      execSync('npm run build', { ;
        "cwd": this.projectRoot,
        "stdio": 'pipe',
        "encoding": 'utf8'});
      const endTime = Date.now();
      this.buildStats.buildTime = endTime - startTime;
      this.buildStats.success = true;
      this.log(`Build completed successfully in ${this.buildStats.buildTime}ms`, 'INFO');
      return true} catch (error) {;
      const endTime = Date.now();
      this.buildStats.buildTime = endTime - startTime;
      this.buildStats.success = false;
      this.log(`Build failed after ${this.buildStats.buildTime}ms`, 'ERROR');
      this.log(`Build "error": ${error.message}`, 'ERROR');
      return false}
  }
;
  async analyzeBuildOutput() {;
    this.log('Analyzing build output...', 'INFO');
    try {;
      // Check for build warnings and errors;
      const buildLog = this.getBuildLog();
      // Count warnings and errors;
      const warnings = (buildLog.match(/warning/gi) || []).length;
      const errors = (buildLog.match(/error/gi) || []).length;
      this.buildStats.warningCount = warnings;
      this.buildStats.errorCount = errors;
      this.log(`Build "analysis": ${errors} errors, ${warnings} warnings`, 'INFO');
      // Check bundle size;
      if (this.buildStats.bundleSize > 1024 * 1024 * 5) { // 5MB;
        this.log('Bundle size is large, consider optimization', 'WARN')}
      ;
      // Check build time;
      if (this.buildStats.buildTime > 60000) { // 1 minute;
        this.log('Build time is slow, consider optimization', 'WARN')}
      } catch (error) {;
      this.log(`Error analyzing build "output": ${error.message}`, 'ERROR')}
  }
;
  async optimizeBuild() {;
    this.log('Running build optimizations...', 'INFO');
    try {;
      // Clean build directory;
      if (fs.existsSync(this.buildDir)) {;
        execSync('rm -rf dist', { ;
          "cwd": this.projectRoot,
          "stdio": 'pipe'});
        this.log('Build directory cleaned', 'INFO')}
      ;
      // Clear cache;
      execSync('npm run "clean": cache || true', { ;
        "cwd": this.projectRoot,
        "stdio": 'pipe'});
      // Run optimized build;
      const success = await this.runBuild();
      if (success) {;
        await this.analyzeBuildOutput()}
      ;
      return success} catch (error) {;
      this.log(`Error during build "optimization": ${error.message}`, 'ERROR');
      return false}
  }
;
  async checkBuildPerformance() {;
    this.log('Checking build performance...', 'INFO');
    try {;
      // Run build multiple times to measure consistency;
      const buildTimes = [];
      const iterations = 3;
      for (let i = 0; i < iterations; i++) {;
        this.log(`Performance test iteration ${i + 1}/${iterations}`, 'INFO');
        const startTime = Date.now();
        const success = await this.runBuild();
        const endTime = Date.now();
        if (success) {;
          buildTimes.push(endTime - startTime)}
        ;
        // Clean up for next iteration;
        if (fs.existsSync(this.buildDir)) {;
          execSync('rm -rf dist', { ;
            "cwd": this.projectRoot,
            "stdio": 'pipe'})}
      }
      ;
      if (buildTimes.length > 0) {;
        const avgTime = buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length;
        const minTime = Math.min(...buildTimes);
        const maxTime = Math.max(...buildTimes);
        this.log(`Build "performance": avg=${avgTime}ms, min=${minTime}ms, max=${maxTime}ms`, 'INFO');
        // Check for performance regression;
        if (avgTime > 120000) { // 2 minutes;
          this.log('Build performance is degraded, investigation needed', 'WARN')}
      }
      } catch (error) {;
      this.log(`Error checking build "performance": ${error.message}`, 'ERROR')}
  }
;
  async checkDependencies() {;
    this.log('Checking build dependencies...', 'INFO');
    try {;
      // Check if all required dependencies are installed;
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const buildScripts = packageJson.scripts || {};
      if (!buildScripts.build) {;
        this.log('No build script found in package.json', 'WARN');
        return false}
      ;
      // Check for build tools;
      const devDeps = packageJson.devDependencies || {};
      const buildTools = ['vite', 'webpack', 'rollup', 'parcel', 'esbuild'];
      const foundTools = buildTools.filter(tool => devDeps[tool]);
      if (foundTools.length === 0) {;
        this.log('No build tools found in devDependencies', 'WARN')} else {;
        this.log(`Build tools "found": ${foundTools.join(', ')}`, 'INFO')}
      ;
      return true} catch (error) {;
      this.log(`Error checking build "dependencies": ${error.message}`, 'ERROR');
      return false}
  }
;
  getDirectorySize(dirPath) {;
    let totalSize = 0;
    function calculateSize(dir) {;
      const items = fs.readdirSync(dir);
      items.forEach(item => {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {;
          calculateSize(fullPath)} else {;
          totalSize += stat.size}
      })}
    ;
    if (fs.existsSync(dirPath)) {;
      calculateSize(dirPath)}
    ;
    return totalSize}
;
  getBuildFiles() {;
    const files = [];
    function walkDir(dir) {;
      if (!fs.existsSync(dir)) return;
      const items = fs.readdirSync(dir);
      items.forEach(item => {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {;
          walkDir(fullPath)} else {;
          files.push(fullPath)}
      })}
    ;
    walkDir(this.buildDir);
    return files}
;
  getBuildLog() {;
    try {;
      // Try to get recent build output from logs;
      const logFiles = [;
        path.join(this.logsDir, 'build.log'),
        path.join(this.logsDir, 'build-monitor.log'),
        path.join(this.logsDir, 'zion-website.log')];
      for (const logFile of logFiles) {;
        if (fs.existsSync(logFile)) {;
          return fs.readFileSync(logFile, 'utf8')}
      }
      ;
      return ''} catch (error) {;
      return ''}
  }
;
  formatBytes(bytes) {;
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}
;
  generateReport() {;
    const report = {;
      "timestamp": new Date().toISOString(),
      "buildStats": this.buildStats,
      "buildHealth": this.buildStats.success,
      "recommendations": this.generateRecommendations()};
    const reportFile = path.join(this.errorReportsDir, `build-monitor-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report "generated": ${reportFile}`, 'INFO');
    return report}
;
  generateRecommendations() {;
    const recommendations = [];
    if (!this.buildStats.success) {;
      recommendations.push('Investigate build failures and fix errors')}
    ;
    if (this.buildStats.bundleSize > 1024 * 1024 * 5) {;
      recommendations.push('Optimize bundle size through code splitting and tree shaking')}
    ;
    if (this.buildStats.buildTime > 60000) {;
      recommendations.push('Optimize build process and consider caching strategies')}
    ;
    if (this.buildStats.errorCount > 0) {;
      recommendations.push('Fix build errors to improve build reliability')}
    ;
    if (this.buildStats.warningCount > 10) {;
      recommendations.push('Address build warnings to improve code quality')}
    ;
    return recommendations}
;
  async run() {;
    try {;
      this.log('Starting build monitoring automation...', 'INFO');
      // Check build dependencies;
      await this.checkDependencies();
      // Check current build health;
      const isHealthy = await this.checkBuildHealth();
      if (!isHealthy) {;
        this.log('Build is not healthy, attempting optimization...', 'WARN');
        await this.optimizeBuild()}
      ;
      // Run performance tests;
      await this.checkBuildPerformance();
      // Analyze build output;
      await this.analyzeBuildOutput();
      const report = this.generateReport();
      this.log('Build monitoring automation completed', 'INFO');
      this.log(`"Summary": Build ${this.buildStats.success ? 'successful' : 'failed'}, ${this.buildStats.errorCount} errors`, 'INFO');
      return report} catch (error) {;
      this.log(`Fatal error in build "monitor": ${error.message}`, 'ERROR');
      throw error}
  }
}
;
// Run the build monitor if called directly;
if (require.main === module) {;
  const monitor = new BuildMonitor();
  monitor.run();
    .then(() => {;
      process.exit(0)});
    .catch((error) => {;
      console.error('Build monitor "failed": ', error);
      process.exit(1)})}
;
module.exports = BuildMonitor;
#!/usr/bin/env node; ; const fs = const path = const { execSync } = ; class BuildMonitor {; constructor() {; this.projectRoot = process.cwd(); this.logsDir = path.join(this.projectRoot,'logs'); this.errorReportsDir = path.join(this.projectRoot,'error-reports'); this.buildDir = path.join(this.projectRoot,'dist'); this.buildStats = {; buildTime: 0,bundleSize: 0,errorCount: 0,warningCount: 0,success: false,}; ; this.setupDirectories(); this.setupLogging(),} ; setupDirectories() {; [this.logsDir,this.errorReportsDir].forEach(dir => {; if (!fs.existsSync(dir)) {; fs.mkdirSync(dir,{ recursive: true }),} }),} ; setupLogging() {; this.logFile = path.join(this.logsDir,'build-monitor.log'); this.log('Build Monitor started','INFO'),} ; log(message,level = 'INFO') {; const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}\n`; ; console.log(logEntry.trim()); fs.appendFileSync(this.logFile,logEntry),} ; async checkBuildHealth() {; this.log('Checking build health...','INFO'); ; try {; if (!fs.existsSync(this.buildDir)) {; this.log('Build directory not found,build may have failed','WARN'); return false,} ; const buildSize = this.getDirectorySize(this.buildDir); this.buildStats.bundleSize = buildSize; ; this.log(`Build directory size: ${this.formatBytes(buildSize)}`,'INFO'); ; const buildFiles = this.getBuildFiles(); if (buildFiles.length === 0) {; this.log('No build artifacts found','WARN'); return false,} ; this.log(`Found ${buildFiles.length} build artifacts`,'INFO'); return true,} catch (error) {; this.log(`Error checking build health: ${error.message}`,'ERROR'); return false,} } ; async runBuild() {; this.log('Running build process...','INFO'); ; const startTime = Date.now(); ; try {; execSync('npm run build',{ ; cwd: this.projectRoot,stdio: 'pipe',encoding: 'utf8',}); ; const endTime = Date.now(); this.buildStats.buildTime = endTime - startTime; this.buildStats.success = true; ; this.log(`Build completed successfully in ${this.buildStats.buildTime}ms`,'INFO'); return true,} catch (error) {; const endTime = Date.now(); this.buildStats.buildTime = endTime - startTime; this.buildStats.success = false; ; this.log(`Build failed after ${this.buildStats.buildTime}ms`,'ERROR'); this.log(`Build error: ${error.message}`,'ERROR'); ; return false,} } ; async analyzeBuildOutput() {; this.log('Analyzing build output...','INFO'); ; try {; const buildLog = this.getBuildLog(); ; const warnings = (buildLog.match(/warning/gi) || []).length; const errors = (buildLog.match(/error/gi) || []).length; ; this.buildStats.warningCount = warnings; this.buildStats.errorCount = errors; ; this.log(`Build analysis: ${errors} errors,${warnings} warnings`,'INFO'); ; if (this.buildStats.bundleSize > 1024 * 1024 * 5) { this.log('Bundle size is large,consider optimization','WARN'),} ; if (this.buildStats.buildTime > 60000) { this.log('Build time is slow,consider optimization','WARN'),} ,} catch (error) {; this.log(`Error analyzing build output: ${error.message}`,'ERROR'),} } ; async optimizeBuild() {; this.log('Running build optimizations...','INFO'); ; try {; if (fs.existsSync(this.buildDir)) {; execSync('rm -rf dist',{ ; cwd: this.projectRoot,stdio: 'pipe',}); this.log('Build directory cleaned','INFO'),} ; execSync('npm run clean: cache || true',{ ; cwd: this.projectRoot,stdio: 'pipe',}); ; const success = await this.runBuild(); ; if (success) {; await this.analyzeBuildOutput(),} ; return success,} catch (error) {; this.log(`Error during build optimization: ${error.message}`,'ERROR'); return false,} } ; async checkBuildPerformance() {; this.log('Checking build performance...','INFO'); ; try {; const buildTimes = []; const iterations = 3; ; for (let i = 0; i < iterations; i++) {; this.log(`Performance test iteration ${i + 1}/${iterations}`,'INFO'); ; const startTime = Date.now(); const success = await this.runBuild(); const endTime = Date.now(); ; if (success) {; buildTimes.push(endTime - startTime),} ; if (fs.existsSync(this.buildDir)) {; execSync('rm -rf dist',{ ; cwd: this.projectRoot,stdio: 'pipe',}),} } ; if (buildTimes.length > 0) {; const avgTime = buildTimes.reduce((a,b) => a + b,0) / buildTimes.length; const minTime = Math.min(...buildTimes); const maxTime = Math.max(...buildTimes); ; this.log(`Build performance: avg=${avgTime}ms,min=${minTime}ms,max=${maxTime}ms`,'INFO'); ; if (avgTime > 120000) { this.log('Build performance is degraded,investigation needed','WARN'),} } ,} catch (error) {; this.log(`Error checking build performance: ${error.message}`,'ERROR'),} } ; async checkDependencies() {; this.log('Checking build dependencies...','INFO'); ; try {; const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot,'package.json'),'utf8')); const buildScripts = packageJson.scripts || {}; ; if (!buildScripts.build) {; this.log('No build script found in package.json','WARN'); return false,} ; const devDeps = packageJson.devDependencies || {}; const buildTools = ['vite','webpack','rollup','parcel','esbuild']; const foundTools = buildTools.filter(tool => devDeps[tool]); ; if (foundTools.length === 0) {; this.log('No build tools found in devDependencies','WARN'),} else {; this.log(`Build tools found: ${foundTools.join(',')}`,'INFO'),} ; return true,} catch (error) {; this.log(`Error checking build dependencies: ${error.message}`,'ERROR'); return false,} } ; getDirectorySize(dirPath) {; let totalSize = 0; ; function calculateSize(dir) {; const items = fs.readdirSync(dir); ; items.forEach(item => {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); ; if (stat.isDirectory()) {; calculateSize(fullPath),} else {; totalSize += stat.size,} }),} ; if (fs.existsSync(dirPath)) {; calculateSize(dirPath),} ; return totalSize,} ; getBuildFiles() {; const files = []; ; function walkDir(dir) {; if (!fs.existsSync(dir)) return; ; const items = fs.readdirSync(dir); ; items.forEach(item => {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); ; if (stat.isDirectory()) {; walkDir(fullPath),} else {; files.push(fullPath),} }),} ; walkDir(this.buildDir); return files,} ; getBuildLog() {; try {; const logFiles = [; path.join(this.logsDir,'build.log'),path.join(this.logsDir,'build-monitor.log'),path.join(this.logsDir,'zion-website.log')]; ; for (const logFile of logFiles) {; if (fs.existsSync(logFile)) {; return fs.readFileSync(logFile,'utf8'),} } ; return '',} catch (error) {; return '',} } ; formatBytes(bytes) {; if (bytes === 0) return '0 Bytes'; ; const k = 1024; const sizes = ['Bytes','KB','MB','GB']; const i = Math.floor(Math.log(bytes) / Math.log(k)); ; return parseFloat((bytes / Math.pow(k,i)).toFixed(2)) + ' ' + sizes[i],} ; generateReport() {; const report = {; timestamp: new Date().toISOString(),buildStats: this.buildStats,buildHealth: this.buildStats.success,recommendations: this.generateRecommendations(),}; ; const reportFile = path.join(this.errorReportsDir,`build-monitor-report-${Date.now()}.json`); fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); ; this.log(`Report generated: ${reportFile}`,'INFO'); return report,} ; generateRecommendations() {; const recommendations = []; ; if (!this.buildStats.success) {; recommendations.push('Investigate build failures and fix errors'),} ; if (this.buildStats.bundleSize > 1024 * 1024 * 5) {; recommendations.push('Optimize bundle size through code splitting and tree shaking'),} ; if (this.buildStats.buildTime > 60000) {; recommendations.push('Optimize build process and consider caching strategies'),} ; if (this.buildStats.errorCount > 0) {; recommendations.push('Fix build errors to improve build reliability'),} ; if (this.buildStats.warningCount > 10) {; recommendations.push('Address build warnings to improve code quality'),} ; return recommendations,} ; async run() {; try {; this.log('Starting build monitoring automation...','INFO'); ; await this.checkDependencies(); ; const isHealthy = await this.checkBuildHealth(); ; if (!isHealthy) {; this.log('Build is not healthy,attempting optimization...','WARN'); await this.optimizeBuild(),} ; await this.checkBuildPerformance(); ; await this.analyzeBuildOutput(); ; const report = this.generateReport(); ; this.log('Build monitoring automation completed','INFO'); this.log(`Summary: Build ${this.buildStats.success ? 'successful' : 'failed'},${this.buildStats.errorCount} errors`,'INFO'); ; return report,} catch (error) {; this.log(`Fatal error in build monitor: ${error.message}`,'ERROR'); throw error,} } } ; if (require.main === module) {; const monitor = new BuildMonitor(); ; monitor.run(); .then(() => {; process.exit(0),}); .catch((error) => {; console.error('Build monitor failed:',error); process.exit(1),}),} ; module.exports = BuildMonitor;
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'build-monitor.log');
    this.buildCount = 0;
    this.errorCount = 0;
    this.lastBuildTime = null;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runBuild() {
    try {
      this.log('Starting build process...');
      
      const startTime = Date.now();
      
      // Run build command
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      this.buildCount++;
      this.lastBuildTime = new Date();
      
      this.log(`Build completed successfully in ${buildTime}ms. Build count: ${this.buildCount}`);
      
    } catch (error) {
      this.errorCount++;
      this.log(`Build failed: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting Build Monitor...');
    
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Run initial build
    await this.runBuild();
    
    // Set up interval for continuous building
    setInterval(async () => {
      await this.runBuild();
    }, 1800000); // Run every 30 minutes
  }
}

// Run the monitor
const monitor = new BuildMonitor();
monitor.run().catch(console.error);
>>>>>>> 38bcf70637601b0eee09497aa7066b5435ff1282
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
export default BuildMonitor;
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
