#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'error-monitor.log');
    this.lastCheck = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());

    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkBuildErrors() {
    try {
      this.log('Checking for build errors...');
      const { stdout, stderr } = await execAsync('npm run build', { 
        cwd: this.projectRoot,
        timeout: 60000 
      });

      if (stderr && stderr.includes('Error:')) {
        this.log(`Build error detected: ${stderr}`);
        return { hasErrors: true, error: stderr };
      }

      this.log('Build check passed');
      return { hasErrors: false };
    } catch (error) {
      this.log(`Build check failed: ${error.message}`);
      return { hasErrors: true, error: error.message };
    }
  }

  async checkLintErrors() {
    try {
      this.log('Checking for lint errors...');
      const { stdout, stderr } = await execAsync('npm run lint', { 
        cwd: this.projectRoot,
        timeout: 30000 
      });

      if (stderr && stderr.includes('error')) {
        this.log(`Lint error detected: ${stderr}`);
        return { hasErrors: true, error: stderr };
      }

      this.log('Lint check passed');
      return { hasErrors: false };
    } catch (error) {
      this.log(`Lint check failed: ${error.message}`);
      return { hasErrors: true, error: error.message };
    }
  }

  async checkMergeConflicts() {
    try {
      this.log('Checking for merge conflicts...');
      const { stdout } = await execAsync('grep -r "        cwd: this.projectRoot 
      });

      if (stdout.trim()) {
        this.log(`Merge conflicts detected in: ${stdout}`);
        return { hasErrors: true, error: stdout };
      }

      this.log('No merge conflicts found');
      return { hasErrors: false };
    } catch (error) {
      this.log(`Merge conflict check failed: ${error.message}`);
      return { hasErrors: true, error: error.message };
    }
  }

  async checkDependencies() {
    try {
      this.log('Checking dependencies...');
      const { stdout, stderr } = await execAsync('npm audit --audit-level=high', { 
        cwd: this.projectRoot,
        timeout: 30000 
      });

      if (stderr && stderr.includes('found')) {
        this.log(`Security vulnerabilities detected: ${stderr}`);
        return { hasErrors: true, error: stderr };
      }

      this.log('Dependencies check passed');
      return { hasErrors: false };
    } catch (error) {
      this.log(`Dependencies check failed: ${error.message}`);
      return { hasErrors: true, error: error.message };
    }
  }

  async runChecks() {
    this.log('Starting error monitoring cycle...');

    const checks = [
      { name: 'Build', fn: () => this.checkBuildErrors() },
      { name: 'Lint', fn: () => this.checkLintErrors() },
      { name: 'Merge Conflicts', fn: () => this.checkMergeConflicts() },
      { name: 'Dependencies', fn: () => this.checkDependencies() }
    ];

    const results = [];

    for (const check of checks) {
      try {
        const result = await check.fn();
        results.push({
          name: check.name,
          ...result
        });
      } catch (error) {
        this.log(`Error in ${check.name} check: ${error.message}`);
        results.push({
          name: check.name,
          hasErrors: true,
          error: error.message
        });
      }
    }

    const errorCount = results.filter(r => r.hasErrors).length;
    this.log(`Error monitoring cycle completed. Found ${errorCount} issues.`);

    // Save results to file
    const reportFile = path.join(this.projectRoot, 'error-monitor-report.json');
    fs.writeFileSync(reportFile, JSON.stringify({
      timestamp: new Date().toISOString(),
      results,
      summary: {
        totalChecks: results.length,
        errorCount,
        status: errorCount > 0 ? 'issues_found' : 'healthy'
      }
    }, null, 2));

    return results;
  }

  async start() {
    this.log('Error Monitor started');

    // Run initial check
    await this.runChecks();

    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runChecks();
    }, 5 * 60 * 1000); // Every 5 minutes
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new ErrorMonitor();
  monitor.start().catch(error => {
    console.error('Error Monitor failed to start:', error);
    process.exit(1);
  });
}

module.exports = ErrorMonitor;