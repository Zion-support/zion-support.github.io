#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const cron = require('node-cron');

class BuildErrorDetector {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'build-error-detector.log');
    this.errorFile = path.join(this.logsDir, 'build-error-detector-error.log');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
    
    if (type === 'ERROR') {
      fs.appendFileSync(this.errorFile, logMessage + '\n');
    }
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        shell: true,
        stdio: 'pipe',
        cwd: options.cwd || this.projectRoot
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject({ stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ error, stdout, stderr });
      });
    });
  }

  async checkBuildHealth() {
    this.log('Checking build health...');
    
    try {
      const result = await this.runCommand('npm', {
        args: ['run', 'build']
      });
      
      this.log('Build check completed successfully');
      return { success: true, output: result.stdout };
    } catch (error) {
      this.log(`Build check failed: ${error.stderr || error.message}`, 'ERROR');
      return { success: false, output: error.stderr || error.message };
    }
  }

  async fixBuildIssues() {
    this.log('Attempting to fix build issues...');
    
    try {
      // Clear build cache
      await this.runCommand('rm', {
        args: ['-rf', 'dist', 'build', '.next', 'node_modules/.cache']
      });
      
      // Reinstall dependencies
      await this.runCommand('npm', {
        args: ['install']
      });
      
      this.log('Build fixes applied');
      return true;
    } catch (error) {
      this.log(`Error applying build fixes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(buildResult) {
    const report = {
      timestamp: new Date().toISOString(),
      buildSuccess: buildResult.success,
      output: buildResult.output,
      fixesApplied: false
    };
    
    if (!buildResult.success) {
      report.fixesApplied = await this.fixBuildIssues();
    }
    
    const reportPath = path.join(this.reportsDir, `build-health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportPath}`);
    return report;
  }

  startContinuousMonitoring() {
    this.log('Starting continuous build monitoring...');
    
    cron.schedule('0 */4 * * *', async () => {
      this.log('Running scheduled build health check...');
      try {
        const result = await this.checkBuildHealth();
        await this.generateReport(result);
      } catch (error) {
        this.log(`Scheduled check failed: ${error.message}`, 'ERROR');
      }
    });
    
    this.log('Continuous monitoring started (every 4 hours)');
  }

  async start() {
    this.log('Build Error Detector started');
    
    const result = await this.checkBuildHealth();
    await this.generateReport(result);
    
    this.startContinuousMonitoring();
    
    setInterval(() => {
      this.log('Build error detector heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const detector = new BuildErrorDetector();
  
  process.on('SIGINT', () => {
    detector.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    detector.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  detector.start().catch(error => {
    detector.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = BuildErrorDetector;