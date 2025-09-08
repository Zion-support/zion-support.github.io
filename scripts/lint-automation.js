#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.isRunning = false;
    this.checkInterval = 5 * 60 * 1000; // 5 minutes
    this.lastCheck = null;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'lint-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runLintCheck() {
    if (this.isRunning) {
      this.log('Lint check already in progress, skipping...', 'WARN');
      return;
    }

    this.isRunning = true;
    this.log('Starting lint check...');

    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint'] });
      this.log('Lint check completed successfully - no errors found');
      this.lastCheck = new Date();
    } catch (error) {
      this.log(`Lint check failed with errors: ${error.stderr || error.message}`, 'WARN');
      
      // Try to auto-fix issues
      await this.autoFixLintIssues();
    } finally {
      this.isRunning = false;
    }
  }

  async autoFixLintIssues() {
    this.log('Attempting to auto-fix lint issues...');
    
    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint', '--', '--fix'] });
      this.log('Auto-fix completed successfully');
      
      // Run lint check again to verify fixes
      await this.verifyFixes();
    } catch (error) {
      this.log(`Auto-fix failed: ${error.stderr || error.message}`, 'ERROR');
    }
  }

  async verifyFixes() {
    this.log('Verifying fixes...');
    
    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint'] });
      this.log('Verification successful - all issues resolved');
    } catch (error) {
      this.log(`Verification failed - some issues remain: ${error.stderr || error.message}`, 'WARN');
      
      // Generate detailed report of remaining issues
      await this.generateLintReport();
    }
  }

  async generateLintReport() {
    this.log('Generating lint report...');
    
    try {
      const result = await this.runCommand('npm', { args: ['run', 'lint', '--', '--format', 'json'] });
      
      const report = {
        timestamp: new Date().toISOString(),
        lintOutput: result.stdout,
        summary: 'Lint issues detected and auto-fix attempted'
      };
      
      const reportFile = path.join(this.logsDir, 'lint-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Lint report generated: ${reportFile}`);
    } catch (error) {
      this.log(`Failed to generate lint report: ${error.message}`, 'ERROR');
    }
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        shell: true,
        stdio: 'pipe',
        cwd: this.projectRoot,
        ...options
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

  async startMonitoring() {
    this.log('Starting lint automation monitoring...');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
    
    // Initial check
    await this.runLintCheck();
    
    // Set up periodic checks
    setInterval(async () => {
      await this.runLintCheck();
    }, this.checkInterval);
    
    this.log(`Lint automation monitoring started. Checking every ${this.checkInterval / 1000 / 60} minutes.`);
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully...');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully...');
      process.exit(0);
    });
  }

  async run() {
    try {
      await this.startMonitoring();
    } catch (error) {
      this.log(`Lint automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the lint automation if this script is executed directly
if (require.main === module) {
  const automation = new LintAutomation();
  automation.run();
}

module.exports = LintAutomation;