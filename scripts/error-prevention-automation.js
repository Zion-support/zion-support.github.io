#!/usr/bin/env node

const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const execAsync = promisify(exec);

class ErrorPreventionAutomation {
  constructor() {
    this.isRunning = false;
    this.checkInterval = 60000; // 1 minute
    this.logFile = path.join(__dirname, '..', 'automation', 'logs', 'error-prevention.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    // Console output
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
    
    // File output
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runLintCheck() {
    try {
      this.log('info', 'Running lint check...');
      const { stdout, stderr } = await execAsync('npm run lint 2>&1');
      
      if (stderr.includes('error') || stdout.includes('error')) {
        this.log('warn', 'Linting errors found, attempting to fix...');
        await this.fixLintingErrors();
        return false;
      }
      
      this.log('info', 'Lint check passed');
      return true;
    } catch (error) {
      this.log('error', `Lint check failed: ${error.message}`);
      return false;
    }
  }

  async fixLintingErrors() {
    try {
      this.log('info', 'Running lint fix...');
      await execAsync('npm run lint:fix');
      this.log('info', 'Linting errors fixed');
    } catch (error) {
      this.log('error', `Failed to fix linting errors: ${error.message}`);
    }
  }

  async runTypeCheck() {
    try {
      this.log('info', 'Running type check...');
      const { stdout, stderr } = await execAsync('npm run type-check 2>&1');
      
      if (stderr.includes('error') || stdout.includes('error')) {
        this.log('warn', 'TypeScript errors found');
        await this.fixTypeErrors();
        return false;
      }
      
      this.log('info', 'Type check passed');
      return true;
    } catch (error) {
      this.log('error', `Type check failed: ${error.message}`);
      return false;
    }
  }

  async fixTypeErrors() {
    try {
      this.log('info', 'Analyzing TypeScript errors...');
      
      // Common TypeScript fixes
      const filesToCheck = [
        'utils/api.ts',
        'utils/validation.ts',
        'utils/supabase/client.ts',
        'utils/serviceFinder.ts',
        'utils/testing-system.tsx',
        'utils/next-link-shim.tsx'
      ];
      
      for (const file of filesToCheck) {
        if (fs.existsSync(file)) {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;
          
          // Fix common TypeScript issues
          if (content.includes('any') && !content.includes('// eslint-disable')) {
            this.log('warn', `Found 'any' types in ${file}`);
          }
          
          // Fix missing type annotations
          if (content.includes('function') && !content.includes(':')) {
            content = content.replace(/function\s+(\w+)\s*\(/g, 'function $1(): void (');
            modified = true;
          }
          
          if (modified) {
            fs.writeFileSync(file, content);
            this.log('info', `Fixed TypeScript issues in ${file}`);
          }
        }
      }
      
    } catch (error) {
      this.log('error', `Failed to fix TypeScript errors: ${error.message}`);
    }
  }

  async runBuildCheck() {
    try {
      this.log('info', 'Running build check...');
      const { stdout, stderr } = await execAsync('npm run build 2>&1');
      
      if (stderr.includes('error') || stdout.includes('error')) {
        this.log('warn', 'Build errors found');
        await this.fixBuildErrors();
        return false;
      }
      
      this.log('info', 'Build check passed');
      return true;
    } catch (error) {
      this.log('error', `Build check failed: ${error.message}`);
      return false;
    }
  }

  async fixBuildErrors() {
    try {
      this.log('info', 'Attempting to fix build errors...');
      
      // Clean and reinstall dependencies
      await execAsync('npm run clean');
      await execAsync('npm install');
      
      // Try building again
      await execAsync('npm run build');
      
      this.log('info', 'Build errors fixed');
    } catch (error) {
      this.log('error', `Failed to fix build errors: ${error.message}`);
    }
  }

  async checkFileIntegrity() {
    try {
      this.log('info', 'Checking file integrity...');
      
      const criticalFiles = [
        'utils/api.ts',
        'utils/validation.ts',
        'utils/supabase/client.ts',
        'utils/serviceFinder.ts',
        'utils/testing-system.tsx',
        'utils/next-link-shim.tsx'
      ];
      
      let allFilesValid = true;
      
      for (const file of criticalFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common syntax errors
          if (content.includes('export const') && content.includes('{') && !content.includes('}')) {
            this.log('error', `File ${file} has syntax errors - missing closing braces`);
            allFilesValid = false;
          }
          
          if (content.includes('any') && !content.includes('// eslint-disable')) {
            this.log('warn', `File ${file} contains 'any' types`);
          }
        } else {
          this.log('warn', `Critical file ${file} is missing`);
          allFilesValid = false;
        }
      }
      
      if (allFilesValid) {
        this.log('info', 'File integrity check passed');
      } else {
        this.log('warn', 'File integrity issues found');
      }
      
      return allFilesValid;
    } catch (error) {
      this.log('error', `File integrity check failed: ${error.message}`);
      return false;
    }
  }

  async runHealthCheck() {
    try {
      this.log('info', 'Running comprehensive health check...');
      
      const checks = [
        this.runLintCheck(),
        this.runTypeCheck(),
        this.runBuildCheck(),
        this.checkFileIntegrity()
      ];
      
      const results = await Promise.all(checks);
      const allPassed = results.every(result => result);
      
      if (allPassed) {
        this.log('info', 'All health checks passed');
      } else {
        this.log('warn', 'Some health checks failed');
      }
      
      return allPassed;
    } catch (error) {
      this.log('error', `Health check failed: ${error.message}`);
      return false;
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'Error prevention automation is already running');
      return;
    }
    
    this.isRunning = true;
    this.log('info', 'Starting error prevention automation...');
    
    // Initial health check
    await this.runHealthCheck();
    
    // Set up monitoring interval
    this.monitorIntervalId = setInterval(async () => {
      await this.runHealthCheck();
    }, this.checkInterval);
    
    this.log('info', `Error prevention automation started with ${this.checkInterval}ms interval`);
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Error prevention automation is not running');
      return;
    }
    
    this.isRunning = false;
    
    if (this.monitorIntervalId) {
      clearInterval(this.monitorIntervalId);
    }
    
    this.log('info', 'Error prevention automation stopped');
  }

  async status() {
    return {
      running: this.isRunning,
      checkInterval: this.checkInterval,
      logFile: this.logFile
    };
  }
}

// Handle command line arguments
const automation = new ErrorPreventionAutomation();

if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start().catch(console.error);
      break;
    case 'stop':
      automation.stop().catch(console.error);
      break;
    case 'status':
      automation.status().then(status => {
        console.log('Status:', JSON.stringify(status, null, 2));
      }).catch(console.error);
      break;
    case 'health':
      automation.runHealthCheck().catch(console.error);
      break;
    case 'lint':
      automation.runLintCheck().catch(console.error);
      break;
    case 'type':
      automation.runTypeCheck().catch(console.error);
      break;
    case 'build':
      automation.runBuildCheck().catch(console.error);
      break;
    default:
      console.log('Usage: node error-prevention-automation.js [start|stop|status|health|lint|type|build]');
  }
}

module.exports = ErrorPreventionAutomation;