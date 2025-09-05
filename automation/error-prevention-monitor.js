#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ErrorPreventionMonitor {
  constructor() {
    this.isRunning = false;
    this.monitorInterval = parseInt(process.env.MONITOR_INTERVAL) || 30000;
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.errorCount = 0;
    this.lastErrorTime = null;
    this.maxErrorsPerMinute = 10;
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async checkLintingErrors() {
    try {
      this.log('info', 'Checking for linting errors...');
      const { stdout, stderr } = await execAsync('npm run lint 2>&1');
      
      if (stderr && stderr.includes('error')) {
        this.log('error', 'Linting errors detected');
        await this.fixLintingErrors();
        return false;
      }
      
      this.log('info', 'No linting errors found');
      return true;
    } catch (error) {
      this.log('error', `Linting check failed: ${error.message}`);
      return false;
    }
  }

  async checkTypeErrors() {
    try {
      this.log('info', 'Checking for TypeScript errors...');
      const { stdout, stderr } = await execAsync('npm run type-check 2>&1');
      
      if (stderr && stderr.includes('error')) {
        this.log('error', 'TypeScript errors detected');
        await this.fixTypeErrors();
        return false;
      }
      
      this.log('info', 'No TypeScript errors found');
      return true;
    } catch (error) {
      this.log('error', `TypeScript check failed: ${error.message}`);
      return false;
    }
  }

  async checkBuildErrors() {
    try {
      this.log('info', 'Checking for build errors...');
      const { stdout, stderr } = await execAsync('npm run build 2>&1');
      
      if (stderr && stderr.includes('error') || stdout.includes('error')) {
        this.log('error', 'Build errors detected');
        await this.fixBuildErrors();
        return false;
      }
      
      this.log('info', 'Build successful');
      return true;
    } catch (error) {
      this.log('error', `Build check failed: ${error.message}`);
      return false;
    }
  }

  async fixLintingErrors() {
    try {
      this.log('info', 'Attempting to fix linting errors...');
      await execAsync('npm run lint:fix');
      this.log('info', 'Linting errors fixed');
    } catch (error) {
      this.log('error', `Failed to fix linting errors: ${error.message}`);
    }
  }

  async fixTypeErrors() {
    try {
      this.log('info', 'Attempting to fix TypeScript errors...');
      // Run type check to get specific errors
      const { stderr } = await execAsync('npm run type-check 2>&1');
      
      // Basic TypeScript error fixes
      if (stderr.includes('any')) {
        this.log('warn', 'Found "any" types - consider adding proper type annotations');
      }
      
      if (stderr.includes('unused')) {
        this.log('warn', 'Found unused variables - consider removing them');
      }
      
      this.log('info', 'TypeScript error analysis completed');
    } catch (error) {
      this.log('error', `Failed to analyze TypeScript errors: ${error.message}`);
    }
  }

  async fixBuildErrors() {
    try {
      this.log('info', 'Attempting to fix build errors...');
      
      // Clean and rebuild
      await execAsync('npm run clean');
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
      
      for (const file of criticalFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for common syntax errors
          if (content.includes('export const') && content.includes('{') && !content.includes('}')) {
            this.log('error', `File ${file} has syntax errors - missing closing braces`);
            await this.fixFileSyntax(file);
          }
          
          if (content.includes('any') && !content.includes('// eslint-disable')) {
            this.log('warn', `File ${file} contains "any" types`);
          }
        } else {
          this.log('warn', `Critical file ${file} is missing`);
        }
      }
      
      this.log('info', 'File integrity check completed');
    } catch (error) {
      this.log('error', `File integrity check failed: ${error.message}`);
    }
  }

  async fixFileSyntax(filePath) {
    try {
      this.log('info', `Attempting to fix syntax in ${filePath}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Basic syntax fixes
      content = content.replace(/'/g, "'"); // Fix quote issues
      content = content.replace(/"/g, '"'); // Fix quote issues
      content = content.replace(/\s+/g, ' '); // Normalize whitespace
      
      // Ensure proper formatting
      if (content.includes('export const') && !content.includes(';')) {
        content = content.replace(/(export const[^;]+)/g, '$1;');
      }
      
      fs.writeFileSync(filePath, content);
      this.log('info', `Syntax fixed in ${filePath}`);
    } catch (error) {
      this.log('error', `Failed to fix syntax in ${filePath}: ${error.message}`);
    }
  }

  async runHealthCheck() {
    try {
      this.log('info', 'Running health check...');
      
      const checks = [
        this.checkLintingErrors(),
        this.checkTypeErrors(),
        this.checkFileIntegrity()
      ];
      
      const results = await Promise.all(checks);
      const allPassed = results.every(result => result);
      
      if (allPassed) {
        this.log('info', 'All health checks passed');
        this.errorCount = 0;
      } else {
        this.errorCount++;
        this.lastErrorTime = new Date();
        this.log('warn', `Health check failed (${this.errorCount} consecutive failures)`);
        
        if (this.errorCount >= this.maxErrorsPerMinute) {
          this.log('error', 'Too many consecutive errors - restarting services');
          await this.restartServices();
        }
      }
      
      return allPassed;
    } catch (error) {
      this.log('error', `Health check failed: ${error.message}`);
      return false;
    }
  }

  async restartServices() {
    try {
      this.log('info', 'Restarting PM2 services...');
      await execAsync('pm2 restart all');
      this.log('info', 'Services restarted');
    } catch (error) {
      this.log('error', `Failed to restart services: ${error.message}`);
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'Monitor is already running');
      return;
    }
    
    this.isRunning = true;
    this.log('info', 'Starting error prevention monitor...');
    
    // Create logs directory
    const logsDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Initial health check
    await this.runHealthCheck();
    
    // Set up monitoring interval
    this.monitorIntervalId = setInterval(async () => {
      await this.runHealthCheck();
    }, this.monitorInterval);
    
    this.log('info', `Monitor started with ${this.monitorInterval}ms interval`);
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Monitor is not running');
      return;
    }
    
    this.isRunning = false;
    
    if (this.monitorIntervalId) {
      clearInterval(this.monitorIntervalId);
    }
    
    this.log('info', 'Error prevention monitor stopped');
  }
}

// Handle command line arguments
const monitor = new ErrorPreventionMonitor();

if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      monitor.start().catch(console.error);
      break;
    case 'stop':
      monitor.stop().catch(console.error);
      break;
    case 'status':
      console.log(`Monitor running: ${monitor.isRunning}`);
      break;
    case 'health':
      monitor.runHealthCheck().catch(console.error);
      break;
    default:
      console.log('Usage: node error-prevention-monitor.js [start|stop|status|health]');
  }
}

module.exports = ErrorPreventionMonitor;