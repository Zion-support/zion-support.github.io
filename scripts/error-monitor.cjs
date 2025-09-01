#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/error-monitor.log');
    this.reportFile = path.join(__dirname, '../logs/error-report.json');
    this.lastCheck = new Date();
  }

  async log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim());
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  async checkBuildErrors() {
    try {
      const { stdout, stderr } = await execAsync('cd /workspace && npm run build 2>&1');
      
      if (stderr || stdout.includes('error') || stdout.includes('Error')) {
        await this.log('Build errors detected', 'ERROR');
        return {
          type: 'build',
          hasErrors: true,
          output: stdout + stderr,
          timestamp: new Date().toISOString()
        };
      }
      
      await this.log('Build check passed', 'INFO');
      return { type: 'build', hasErrors: false, timestamp: new Date().toISOString() };
    } catch (error) {
      await this.log(`Build check failed: ${error.message}`, 'ERROR');
      return {
        type: 'build',
        hasErrors: true,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkLintErrors() {
    try {
      const { stdout, stderr } = await execAsync('cd /workspace && npm run lint 2>&1');
      
      if (stderr || stdout.includes('error') || stdout.includes('Error')) {
        await this.log('Lint errors detected', 'ERROR');
        return {
          type: 'lint',
          hasErrors: true,
          output: stdout + stderr,
          timestamp: new Date().toISOString()
        };
      }
      
      await this.log('Lint check passed', 'INFO');
      return { type: 'lint', hasErrors: false, timestamp: new Date().toISOString() };
    } catch (error) {
      await this.log(`Lint check failed: ${error.message}`, 'ERROR');
      return {
        type: 'lint',
        hasErrors: true,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkTypeErrors() {
    try {
      const { stdout, stderr } = await execAsync('cd /workspace && npm run type-check 2>&1');
      
      if (stderr || stdout.includes('error') || stdout.includes('Error')) {
        await this.log('TypeScript errors detected', 'ERROR');
        return {
          type: 'typescript',
          hasErrors: true,
          output: stdout + stderr,
          timestamp: new Date().toISOString()
        };
      }
      
      await this.log('TypeScript check passed', 'INFO');
      return { type: 'typescript', hasErrors: false, timestamp: new Date().toISOString() };
    } catch (error) {
      await this.log(`TypeScript check failed: ${error.message}`, 'ERROR');
      return {
        type: 'typescript',
        hasErrors: true,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async triggerFixes(errorTypes) {
    for (const errorType of errorTypes) {
      try {
        switch (errorType) {
          case 'build':
            await this.log('Triggering syntax fixer for build errors', 'INFO');
            exec('pm2 restart syntax-fixer');
            break;
          case 'lint':
            await this.log('Auto-fixing lint errors', 'INFO');
            await execAsync('cd /workspace && npm run lint -- --fix 2>/dev/null || true');
            break;
          case 'typescript':
            await this.log('Triggering TypeScript error fixer', 'INFO');
            exec('pm2 restart syntax-fixer');
            break;
        }
      } catch (error) {
        await this.log(`Failed to trigger fix for ${errorType}: ${error.message}`, 'ERROR');
      }
    }
  }

  async saveReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      lastCheck: this.lastCheck.toISOString(),
      results: results,
      summary: {
        totalChecks: results.length,
        errorsFound: results.filter(r => r.hasErrors).length,
        checksWithErrors: results.filter(r => r.hasErrors).map(r => r.type)
      }
    };

    try {
      await fs.writeFile(this.reportFile, JSON.stringify(report, null, 2));
      await this.log(`Report saved: ${report.summary.errorsFound} errors found`, 'INFO');
    } catch (error) {
      await this.log(`Failed to save report: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      await this.log('Starting error monitoring check', 'INFO');
      
      const results = await Promise.all([
        this.checkBuildErrors(),
        this.checkLintErrors(),
        this.checkTypeErrors()
      ]);

      const errorTypes = results.filter(r => r.hasErrors).map(r => r.type);
      
      if (errorTypes.length > 0) {
        await this.log(`Found errors in: ${errorTypes.join(', ')}`, 'WARN');
        await this.triggerFixes(errorTypes);
      } else {
        await this.log('No errors detected', 'INFO');
      }

      await this.saveReport(results);
      this.lastCheck = new Date();
      
    } catch (error) {
      await this.log(`Error monitoring failed: ${error.message}`, 'ERROR');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new ErrorMonitor();
  
  // Run once immediately, then every 5 minutes
  monitor.run();
  setInterval(() => monitor.run(), 5 * 60 * 1000);
  
  // Keep process alive
  process.on('SIGINT', () => {
    monitor.log('Error monitor shutting down', 'INFO');
    process.exit(0);
  });
}

module.exports = ErrorMonitor;