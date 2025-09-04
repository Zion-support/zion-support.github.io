#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousLintMonitor {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'automation/logs/continuous-lint.log');
    this.ensureLogDirectory();
    this.lastCheck = null;
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLint() {
    try {
      this.log('Running continuous lint check...');
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 5
      });
      
      this.log('Lint check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Lint check failed: ${error.message}`, 'ERROR');
      
      // Try to auto-fix
      if (process.env.AUTO_FIX === 'true') {
        this.log('Attempting auto-fix...');
        try {
          execSync('npm run lint:fix 2>&1', { 
            cwd: this.workspacePath,
            encoding: 'utf8',
            maxBuffer: 1024 * 1024 * 5
          });
          this.log('Auto-fix completed');
        } catch (fixError) {
          this.log(`Auto-fix failed: ${fixError.message}`, 'ERROR');
        }
      }
      
      return { success: false, output: error.stdout || error.message };
    }
  }

  async monitor() {
    this.log('Starting continuous lint monitoring...');
    
    while (true) {
      try {
        await this.runLint();
        this.lastCheck = new Date();
        
        // Wait for next check
        await new Promise(resolve => setTimeout(resolve, parseInt(process.env.LINT_INTERVAL) || 300000));
      } catch (error) {
        this.log(`Monitor error: ${error.message}`, 'ERROR');
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute on error
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new ContinuousLintMonitor();
  monitor.monitor().catch(console.error);
}

module.exports = ContinuousLintMonitor;