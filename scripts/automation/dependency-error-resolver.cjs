#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const cron = require('node-cron');

class DependencyErrorResolver {
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
    this.logFile = path.join(this.logsDir, 'dependency-error-resolver.log');
    this.errorFile = path.join(this.logsDir, 'dependency-error-resolver-error.log');
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

  async checkDependencyHealth() {
    this.log('Checking dependency health...');
    
    try {
      const result = await this.runCommand('npm', {
        args: ['audit']
      });
      
      this.log('Dependency audit completed');
      return { success: true, output: result.stdout };
    } catch (error) {
      this.log(`Dependency audit failed: ${error.stderr || error.message}`, 'ERROR');
      return { success: false, output: error.stderr || error.message };
    }
  }

  async fixDependencyIssues() {
    this.log('Attempting to fix dependency issues...');
    
    try {
      // Try to fix vulnerabilities
      await this.runCommand('npm', {
        args: ['audit', 'fix']
      });
      
      // Update outdated packages
      await this.runCommand('npm', {
        args: ['update']
      });
      
      this.log('Dependency fixes applied');
      return true;
    } catch (error) {
      this.log(`Error applying dependency fixes: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(dependencyResult) {
    const report = {
      timestamp: new Date().toISOString(),
      dependencyHealth: dependencyResult.success,
      output: dependencyResult.output,
      fixesApplied: false
    };
    
    if (!dependencyResult.success) {
      report.fixesApplied = await this.fixDependencyIssues();
    }
    
    const reportPath = path.join(this.reportsDir, `dependency-health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportPath}`);
    return report;
  }

  startContinuousMonitoring() {
    this.log('Starting continuous dependency monitoring...');
    
    cron.schedule('0 6 * * *', async () => {
      this.log('Running scheduled dependency health check...');
      try {
        const result = await this.checkDependencyHealth();
        await this.generateReport(result);
      } catch (error) {
        this.log(`Scheduled check failed: ${error.message}`, 'ERROR');
      }
    });
    
    this.log('Continuous monitoring started (daily at 6 AM)');
  }

  async start() {
    this.log('Dependency Error Resolver started');
    
    const result = await this.checkDependencyHealth();
    await this.generateReport(result);
    
    this.startContinuousMonitoring();
    
    setInterval(() => {
      this.log('Dependency error resolver heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const resolver = new DependencyErrorResolver();
  
  process.on('SIGINT', () => {
    resolver.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    resolver.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  resolver.start().catch(error => {
    resolver.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = DependencyErrorResolver;