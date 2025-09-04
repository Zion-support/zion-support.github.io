#!/usr/bin/env node

/**
 * Error Monitor Automation Script
 * Monitors application errors and performs automatic fixes
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ErrorMonitor {
  constructor() {
    this.logFile = './automation/logs/error-monitor.log';
    this.errorFile = './automation/logs/error-monitor-error.log';
    this.startTime = new Date();
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

  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] [ERROR] ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error log:', err.message);
    }
  }

  async runCommand(command, description) {
    this.log(`Starting: ${description}`);
    
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.error(`Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkForErrors() {
    this.log('Checking for application errors...');
    
    // Check for common error patterns
    const errorChecks = [
      { cmd: 'npm run lint 2>&1 | grep -i error || true', desc: 'Lint errors' },
      { cmd: 'npm run type-check 2>&1 | grep -i error || true', desc: 'TypeScript errors' },
      { cmd: 'npm run build 2>&1 | grep -i error || true', desc: 'Build errors' }
    ];

    const errors = [];
    for (const check of errorChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      if (result.success && result.output.trim()) {
        errors.push({
          type: check.desc,
          output: result.output.trim()
        });
      }
    }

    return errors;
  }

  async fixErrors() {
    this.log('Attempting to fix detected errors...');
    
    const fixes = [
      { cmd: 'npm run lint:fix', desc: 'Auto-fix linting issues' },
      { cmd: 'npm run type-check', desc: 'Re-check types after fixes' }
    ];

    const results = [];
    for (const fix of fixes) {
      const result = await this.runCommand(fix.cmd, fix.desc);
      results.push({ ...fix, result });
    }

    return results;
  }

  async runErrorMonitoring() {
    this.log('Starting Error Monitoring');
    this.log('='.repeat(50));

    try {
      // Check for errors
      const errors = await this.checkForErrors();
      
      if (errors.length > 0) {
        this.log(`Found ${errors.length} error(s):`);
        errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error.type}: ${error.output}`);
        });

        // Attempt to fix errors
        this.log('Attempting automatic fixes...');
        const fixes = await this.fixErrors();
        
        // Re-check after fixes
        const remainingErrors = await this.checkForErrors();
        
        if (remainingErrors.length === 0) {
          this.log('✅ All errors fixed successfully');
        } else {
          this.log(`⚠️  ${remainingErrors.length} errors remain after fixes`);
        }
      } else {
        this.log('✅ No errors detected');
      }

      this.log('Error monitoring completed');

    } catch (error) {
      this.error(`Error monitoring failed: ${error.message}`);
      throw error;
    }
  }
}

// Main execution
async function main() {
  const monitor = new ErrorMonitor();
  
  try {
    await monitor.runErrorMonitoring();
  } catch (error) {
    monitor.error(`Unexpected error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ErrorMonitor;