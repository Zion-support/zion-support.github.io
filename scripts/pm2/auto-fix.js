#!/usr/bin/env node

/**
 * PM2 Auto Fix Script
 * Automatically fixes common issues and runs maintenance tasks
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutoFix {
  constructor() {
    this.logFile = 'logs/pm2/auto-fix.log';
    this.errorFile = 'logs/pm2/auto-fix-error.log';
    
    this.ensureLogDirectory();
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
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error file:', err.message);
    }
  }

  async runCommand(cmd, options = {}) {
    try {
      this.log(`Running: ${cmd}`);
      const result = execSync(cmd, { 
        stdio: 'pipe',
        encoding: 'utf8',
        ...options
      });
      this.log(`Command completed successfully: ${cmd}`);
      return { success: true, output: result };
    } catch (error) {
      this.error(`Command failed: ${cmd} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLint() {
    this.log('Running linting...');
    return await this.runCommand('npm run lint');
  }

  async runTypeCheck() {
    this.log('Running type checking...');
    return await this.runCommand('npm run type-check');
  }

  async runBuild() {
    this.log('Running build...');
    return await this.runCommand('npm run build');
  }

  async restartPreviewApp() {
    this.log('Restarting preview app...');
    try {
      const result = execSync('pm2 list', { encoding: 'utf8' });
      if (result.includes('bolt-zion-app')) {
        return await this.runCommand('pm2 reload bolt-zion-app');
      } else {
        this.log('Preview app not running, skipping restart');
        return { success: true, skipped: true };
      }
    } catch (error) {
      this.log('Could not check PM2 status, skipping restart', 'WARNING');
      return { success: true, skipped: true };
    }
  }

  async runAutoFix() {
    this.log('Starting auto-fix process...');
    
    const results = {
      lint: await this.runLint(),
      typeCheck: await this.runTypeCheck(),
      build: await this.runBuild(),
      restart: await this.restartPreviewApp()
    };
    
    const allSuccessful = Object.values(results).every(r => r.success);
    
    if (allSuccessful) {
      this.log('Auto-fix process completed successfully');
    } else {
      this.error('Auto-fix process completed with errors');
    }
    
    return results;
  }

  async start() {
    this.log('Starting auto-fix automation...');
    
    // Run initial auto-fix
    await this.runAutoFix();
    
    // Set up periodic auto-fix (every 6 hours)
    const interval = 6 * 60 * 60 * 1000;
    
    setInterval(async () => {
      this.log('Running scheduled auto-fix...');
      await this.runAutoFix();
    }, interval);
    
    this.log('Auto-fix automation started successfully');
  }
}

// Start the automation if this script is run directly
if (require.main === module) {
  const autoFix = new AutoFix();
  autoFix.start().catch(error => {
    console.error('Auto-fix failed to start:', error);
    process.exit(1);
  });
}

module.exports = AutoFix;