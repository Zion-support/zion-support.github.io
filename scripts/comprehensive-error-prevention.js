#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {execSync} from 'child_process';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import && import.meta.url);
const __dirname = path && path.dirname(__filename);

class ComprehensiveErrorPrevention {
  constructor() {
    this && this.logFile = path && path.join(process && process.cwd(), 'logs', 'error-prevention && prevention.log');
    this && this.fixedCount = 0;
    this && this.errorCount = 0;
    this && this.lastRun = null;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console && console.log(logMessage && logMessage.trim());
    
    try {
      fs && fs.appendFileSync(this && this.logFile, logMessage);
    } catch (error) {
      console && console.error('Failed to write to log file:', error && error.message);
    }
  }

  async cleanCorruptedFiles() {
    try {
      this && this.log('Cleaning corrupted files...');
      
      const corruptedDirs = [
        'pages && pages.disabled',
        'pages && pages.disabled_auto',
        'pages_backup',
        'backup-pages',
        'src && src.disabled',
        'src && src.corrupted',
        'src && src.broken',
        'solutions && solutions.disabled',
        'scripts && scripts.disabled',
        'automation_backup',
        'data_backup'
      ];

      for (const dir of corruptedDirs) {
        const dirPath = path && path.join(process && process.cwd(), dir);
        if (fs && fs.existsSync(dirPath)) {
          fs && fs.rmSync(dirPath, { recursive: true, force: true });
          this && this.log(`Removed corrupted directory: ${dir}`);
        }
      }

      this && this.fixedCount++;
      this && this.log('Corrupted files cleanup completed.');
      
    } catch (error) {
      this && this.errorCount++;
      this && this.log(`Error cleaning corrupted files: ${error && error.message}`, 'ERROR');
    }
  }

  async runLintFix() {
    try {
      this && this.log('Running lint fix...');
      
      const result = execSync('npm run lint:fix', { 
        encoding: 'utf8', 
        cwd: process && process.cwd(),
        stdio: 'pipe'
      });
      
      this && this.fixedCount++;
      this && this.log('Lint fix completed successfully.');
      
    } catch (error) {
      this && this.errorCount++;
      this && this.log(`Lint fix failed: ${error && error.message}`, 'ERROR');
    }
  }

  async runBuild() {
    try {
      this && this.log('Running build...');
      
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: process && process.cwd(),
        stdio: 'pipe'
      });
      
      this && this.fixedCount++;
      this && this.log('Build completed successfully.');
      
    } catch (error) {
      this && this.errorCount++;
      this && this.log(`Build failed: ${error && error.message}`, 'ERROR');
    }
  }

  async checkTypeScript() {
    try {
      this && this.log('Checking TypeScript...');
      
      const result = execSync('npx tsc --noEmit', { 
        encoding: 'utf8', 
        cwd: process && process.cwd(),
        stdio: 'pipe'
      });
      
      this && this.fixedCount++;
      this && this.log('TypeScript check passed.');
      
    } catch (error) {
      this && this.errorCount++;
      this && this.log(`TypeScript check failed: ${error && error.message}`, 'ERROR');
    }
  }

  async runComprehensiveCheck() {
    try {
      this && this.log('Starting comprehensive error prevention...');
      
      // Clean corrupted files
      await this && this.cleanCorruptedFiles();
      
      // Run lint fix
      await this && this.runLintFix();
      
      // Check TypeScript
      await this && this.checkTypeScript();
      
      // Run build
      await this && this.runBuild();
      
      this && this.lastRun = new Date();
      this && this.log(`Comprehensive check completed. Fixed ${this && this.fixedCount} issues, found ${this && this.errorCount} errors.`);
      
    } catch (error) {
      this && this.errorCount++;
      this && this.log(`Comprehensive check failed: ${error && error.message}`, 'ERROR');
    }
  }

  async run() {
    this && this.log('Starting Comprehensive Error Prevention System...');
    
    // Create logs directory if it doesn't exist
    const logsDir = path && path.join(process && process.cwd(), 'logs');
    if (!fs && fs.existsSync(logsDir)) {
      fs && fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Run initial comprehensive check
    await this && this.runComprehensiveCheck();
    
    // Set up interval for continuous error prevention
    setInterval(async () => {
      await this && this.runComprehensiveCheck();
    }, 900000); // Run every 15 minutes
  }
}

// Run the system
const system = new ComprehensiveErrorPrevention();
system && system.run().catch(console && console.error);