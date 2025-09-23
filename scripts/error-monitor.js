#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'error-monitor.log');
    this.errorCount = 0;
    this.lastCheck = Date.now();
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

  async checkForErrors() {
    try {
      this.log('Starting error check...');
      
      // Check for linting errors
      await this.checkLintingErrors();
      
      // Check for build errors
      await this.checkBuildErrors();
      
      // Check for TypeScript errors
      await this.checkTypeScriptErrors();
      
      this.log(`Error check completed. Found ${this.errorCount} errors.`);
      
    } catch (error) {
      this.log(`Error during check: ${error.message}`, 'ERROR');
    }
  }

  async checkLintingErrors() {
    try {
      this.log('Checking for linting errors...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('No linting errors found.');
    } catch (error) {
      this.errorCount++;
      this.log(`Linting errors found: ${error.message}`, 'ERROR');
    }
  }

  async checkBuildErrors() {
    try {
      this.log('Checking for build errors...');
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('Build successful.');
    } catch (error) {
      this.errorCount++;
      this.log(`Build errors found: ${error.message}`, 'ERROR');
    }
  }

  async checkTypeScriptErrors() {
    try {
      this.log('Checking for TypeScript errors...');
      const result = execSync('npx tsc --noEmit', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('No TypeScript errors found.');
    } catch (error) {
      this.errorCount++;
      this.log(`TypeScript errors found: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting Error Monitor...');
    
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Run initial check
    await this.checkForErrors();
    
    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.checkForErrors();
    }, 300000); // Check every 5 minutes
  }
}

// Run the monitor
const monitor = new ErrorMonitor();
monitor.run().catch(console.error);
