#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class TypeChecker {
  constructor() {
    this.logFile = path.join(process.cwd(), 'automation/logs/type-checker.log');
    this.reportFile = path.join(process.cwd(), 'automation/logs/type-check-report.json');
    this.isRunning = false;
    this.debounceTimer = null;
    this.errorCount = 0;
    this.lastCheck = null;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTypeCheck() {
    if (this.isRunning) {
      this.log('Type check already running, skipping...');
      return;
    }

    this.isRunning = true;
    this.log('Running TypeScript type check...');

    try {
      const result = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 60000 // 1 minute timeout
      });
      
      this.log('Type check passed successfully');
      this.errorCount = 0;
      this.lastCheck = new Date();
      
      // Generate success report
      const report = {
        timestamp: this.lastCheck.toISOString(),
        status: 'success',
        errorCount: 0,
        errors: [],
        warnings: []
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
    } catch (error) {
      this.errorCount++;
      this.log(`Type check found issues (attempt ${this.errorCount}):`);
      this.log(error.stdout || error.message);
      
      // Parse TypeScript errors
      const errors = this.parseTypeScriptErrors(error.stdout || error.message);
      
      // Generate error report
      const report = {
        timestamp: new Date().toISOString(),
        status: 'failed',
        errorCount: this.errorCount,
        errors: errors,
        warnings: []
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
      // Log specific errors
      errors.forEach((err, index) => {
        this.log(`Error ${index + 1}: ${err.file}:${err.line}:${err.column} - ${err.message}`);
      });
      
    } finally {
      this.isRunning = false;
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      // Match TypeScript error format: file(line,col): error TS####: message
      const match = line.match(/^(.+)\((\d+),(\d+)\):\s+error\s+TS(\d+):\s+(.+)$/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          code: `TS${match[4]}`,
          message: match[5]
        });
      }
    }
    
    return errors;
  }

  startWatching() {
    this.log('Starting TypeScript type checker...');
    
    // Watch TypeScript and TSX files
    const watcher = chokidar.watch([
      'components/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'tsconfig.json'
    ], {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', (filePath) => {
      this.log(`TypeScript file changed: ${filePath}`);
      
      // Debounce multiple changes
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      
      this.debounceTimer = setTimeout(() => {
        this.runTypeCheck();
      }, 3000); // Wait 3 seconds after last change
    });

    watcher.on('add', (filePath) => {
      this.log(`TypeScript file added: ${filePath}`);
      setTimeout(() => this.runTypeCheck(), 1000);
    });

    watcher.on('error', (error) => {
      this.log(`Type checker watcher error: ${error.message}`);
    });

    // Run initial type check
    setTimeout(() => this.runTypeCheck(), 1000);

    this.log('Type checker is now monitoring TypeScript files...');
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Shutting down type checker...');
      watcher.close();
      process.exit(0);
    });
  }
}

// Start the type checker
const checker = new TypeChecker();
checker.startWatching();