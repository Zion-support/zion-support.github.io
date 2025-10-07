#!/usr/bin/env node

/**
 * Build Monitor Automation Script
 * Monitors build performance and runs build tests
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'logs', 'performance-monitor.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Starting: ${description}`);
      const startTime = Date.now();
      const output = execSync(command, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      const duration = Date.now() - startTime;
      this.log(`✅ Success: ${description} (${duration}ms)`);
      if (output) {
        this.log(`Output: ${output.substring(0, 500)}...`);
      }
      return { success: true, duration };
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      if (error.stdout) {
        this.log(`STDOUT: ${error.stdout}`);
      }
      if (error.stderr) {
        this.log(`STDERR: ${error.stderr}`);
      }
      return { success: false, duration: 0 };
    }
  }

  async runBuild() {
    return await this.runCommand(
      'npm run build',
      'Building application'
    );
  }

  async runTests() {
    return await this.runCommand(
      'npm run test:smoke',
      'Running smoke tests'
    );
  }

  async checkBuildSize() {
    try {
      const buildDir = path.join(this.workspace, '.next');
      if (fs.existsSync(buildDir)) {
        const stats = execSync(`du -sh ${buildDir}`, { encoding: 'utf8' });
        this.log(`Build size: ${stats.trim()}`);
        return true;
      } else {
        this.log('Build directory not found');
        return false;
      }
    } catch (error) {
      this.log(`Error checking build size: ${error.message}`);
      return false;
    }
  }

  async runBuildMonitor() {
    this.log('🏗️ Starting Build Monitor');
    
    const buildResult = await this.runBuild();
    if (buildResult.success) {
      await this.checkBuildSize();
      await this.runTests();
    }
    
    this.log('✅ Build monitoring cycle completed');
    return buildResult.success;
  }
}

// Main execution
if (require.main === module) {
  const monitor = new BuildMonitor();
  
  monitor.runBuildMonitor()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      monitor.log(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = BuildMonitor;