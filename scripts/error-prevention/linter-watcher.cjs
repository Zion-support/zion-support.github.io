#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class LinterWatcher {
  constructor() {
    this.isRunning = false;
    this.debounceTimer = null;
    this.logFile = path.join(process.cwd(), 'automation/logs/linter-watcher.log');
    this.errorCount = 0;
    this.lastRun = null;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinter() {
    if (this.isRunning) {
      this.log('Linter already running, skipping...');
      return;
    }

    this.isRunning = true;
    this.log('Running ESLint check...');

    try {
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 30000
      });
      
      this.log('ESLint check passed successfully');
      this.errorCount = 0;
      this.lastRun = new Date();
      
      // If there were previous errors, log the fix
      if (this.errorCount === 0) {
        this.log('All linting errors have been resolved!');
      }
      
    } catch (error) {
      this.errorCount++;
      this.log(`ESLint found issues (attempt ${this.errorCount}):`);
      this.log(error.stdout || error.message);
      
      // Try to auto-fix if possible
      if (this.errorCount <= 3) {
        this.log('Attempting to auto-fix linting issues...');
        try {
          execSync('npm run lint:fix', { 
            encoding: 'utf8',
            stdio: 'pipe',
            timeout: 30000
          });
          this.log('Auto-fix completed successfully');
        } catch (fixError) {
          this.log('Auto-fix failed: ' + (fixError.stdout || fixError.message));
        }
      }
    } finally {
      this.isRunning = false;
    }
  }

  startWatching() {
    this.log('Starting linter watcher...');
    
    const watcher = chokidar.watch(['components/**/*.{ts,tsx,js,jsx}', 'pages/**/*.{ts,tsx,js,jsx}'], {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', (filePath) => {
      this.log(`File changed: ${filePath}`);
      
      // Debounce multiple changes
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      
      this.debounceTimer = setTimeout(() => {
        this.runLinter();
      }, 2000); // Wait 2 seconds after last change
    });

    watcher.on('add', (filePath) => {
      this.log(`File added: ${filePath}`);
      setTimeout(() => this.runLinter(), 1000);
    });

    watcher.on('error', (error) => {
      this.log(`Watcher error: ${error.message}`);
    });

    // Run initial lint check
    setTimeout(() => this.runLinter(), 1000);

    this.log('Linter watcher is now monitoring files...');
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Shutting down linter watcher...');
      watcher.close();
      process.exit(0);
    });
  }
}

// Start the watcher
const watcher = new LinterWatcher();
watcher.startWatching();