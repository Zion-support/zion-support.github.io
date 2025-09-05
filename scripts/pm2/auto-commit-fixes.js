#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class AutoCommitFixes {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/auto-commit-fixes.log');
    this.commitFrequency = process.env.COMMIT_FREQUENCY || 'hourly';
    this.autoPush = process.env.AUTO_PUSH === 'true';
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [auto-commit-fixes] ${message}\n`;
    console.log(logMessage.trim());
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkForChanges() {
    try {
      this.log('Checking for changes...');
      
      // Check git status
      const statusOutput = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: this.projectRoot
      });
      
      if (statusOutput.trim()) {
        this.log('Changes detected');
        return true;
      } else {
        this.log('No changes detected');
        return false;
      }
      
    } catch (error) {
      this.log(`Error checking for changes: ${error.message}`);
      return false;
    }
  }

  async stageChanges() {
    try {
      this.log('Staging changes...');
      
      // Add all changes
      execSync('git add .', { 
        encoding: 'utf8',
        cwd: this.projectRoot
      });
      
      this.log('Changes staged successfully');
      return true;
      
    } catch (error) {
      this.log(`Error staging changes: ${error.message}`);
      return false;
    }
  }

  async commitChanges() {
    try {
      this.log('Committing changes...');
      
      const timestamp = new Date().toISOString();
      const commitMessage = `Auto-commit: ${timestamp}`;
      
      execSync(`git commit -m "${commitMessage}"`, { 
        encoding: 'utf8',
        cwd: this.projectRoot
      });
      
      this.log('Changes committed successfully');
      return true;
      
    } catch (error) {
      this.log(`Error committing changes: ${error.message}`);
      return false;
    }
  }

  async pushChanges() {
    if (!this.autoPush) {
      this.log('Auto-push is disabled');
      return true;
    }
    
    try {
      this.log('Pushing changes...');
      
      execSync('git push', { 
        encoding: 'utf8',
        cwd: this.projectRoot
      });
      
      this.log('Changes pushed successfully');
      return true;
      
    } catch (error) {
      this.log(`Error pushing changes: ${error.message}`);
      return false;
    }
  }

  async runAutoCommit() {
    try {
      this.log('Starting auto-commit process...');
      
      const hasChanges = await this.checkForChanges();
      if (!hasChanges) {
        this.log('No changes to commit');
        return;
      }
      
      const staged = await this.stageChanges();
      if (!staged) {
        this.log('Failed to stage changes');
        return;
      }
      
      const committed = await this.commitChanges();
      if (!committed) {
        this.log('Failed to commit changes');
        return;
      }
      
      const pushed = await this.pushChanges();
      if (!pushed) {
        this.log('Failed to push changes');
        return;
      }
      
      this.log('Auto-commit process completed successfully');
      
    } catch (error) {
      this.log(`Auto-commit process error: ${error.message}`);
    }
  }

  getIntervalMs() {
    switch (this.commitFrequency) {
      case 'minutely':
        return 60 * 1000; // 1 minute
      case 'hourly':
        return 60 * 60 * 1000; // 1 hour
      case 'daily':
        return 24 * 60 * 60 * 1000; // 24 hours
      case 'weekly':
        return 7 * 24 * 60 * 60 * 1000; // 7 days
      default:
        return 2 * 60 * 60 * 1000; // 2 hours
    }
  }

  async start() {
    this.log('Auto-commit fixes service started');
    
    // Run auto-commit immediately
    await this.runAutoCommit();
    
    // Set up interval for periodic auto-commits
    const intervalMs = this.getIntervalMs();
    setInterval(async () => {
      await this.runAutoCommit();
    }, intervalMs);
    
    this.log(`Auto-commit interval set to ${this.commitFrequency} (${intervalMs}ms)`);
  }
}

// Start the service
const autoCommitFixes = new AutoCommitFixes();
autoCommitFixes.start().catch(console.error);