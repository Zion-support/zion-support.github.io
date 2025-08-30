#!/usr/bin/env node

/**
 * Repository Sync Automation System
 * 
 * This system provides:
 * - Intelligent repository synchronization
 * - Conflict resolution for large divergences
 * - Safe merging strategies
 * - Backup and recovery mechanisms
 * - Progress monitoring and reporting
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class RepositorySyncAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      remote: 'origin',
      branch: 'main',
      backupDir: 'sync-backup',
      maxRetries: 3,
      syncInterval: 60000 // 1 minute
    };
    
    this.isRunning = false;
    this.lastSync = 0;
    this.syncCount = 0;
    this.errorCount = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
  }

  async initialize() {
    try {
      this.log('Initializing Repository Sync Automation System...');
      
      // Check git status
      const status = this.getGitStatus();
      this.log(`Current git status: ${status.summary}`);
      
      if (status.diverged) {
        this.log(`Repository diverged: ${status.localAhead} local commits, ${status.remoteAhead} remote commits`);
        await this.handleDivergence();
      } else if (status.ahead) {
        this.log(`Local ahead by ${status.localAhead} commits`);
        await this.pushChanges();
      } else if (status.behind) {
        this.log(`Local behind by ${status.remoteAhead} commits`);
        await this.pullChanges();
      } else {
        this.log('Repository is in sync');
      }
      
      // Start sync loop
      this.startSyncLoop();
      
      this.log('Repository Sync Automation System initialized successfully');
      this.isRunning = true;
      
    } catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      this.restartAfterDelay();
    }
  }

  getGitStatus() {
    try {
      const status = execSync('git status --porcelain -b', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      });
      
      const lines = status.split('\n');
      const branchLine = lines[0];
      
      let localAhead = 0;
      let remoteAhead = 0;
      let diverged = false;
      let ahead = false;
      let behind = false;
      
      if (branchLine.includes('ahead')) {
        const match = branchLine.match(/ahead (\d+)/);
        if (match) {
          localAhead = parseInt(match[1]);
          ahead = true;
        }
      }
      
      if (branchLine.includes('behind')) {
        const match = branchLine.match(/behind (\d+)/);
        if (match) {
          remoteAhead = parseInt(match[1]);
          behind = true;
        }
      }
      
      if (branchLine.includes('diverged')) {
        diverged = true;
      }
      
      return {
        summary: branchLine,
        localAhead,
        remoteAhead,
        diverged,
        ahead,
        behind
      };
      
    } catch (error) {
      this.log(`Failed to get git status: ${error.message}`, 'ERROR');
      return { summary: 'Unknown', diverged: false, ahead: false, behind: false };
    }
  }

  async handleDivergence() {
    try {
      this.log('Handling repository divergence...');
      
      // Create backup
      await this.createBackup();
      
      // Strategy: Rebase local changes on top of remote
      await this.rebaseOnRemote();
      
      // If rebase fails, try merge strategy
      if (!this.isRepositoryClean()) {
        this.log('Rebase failed, trying merge strategy...');
        await this.mergeFromRemote();
      }
      
      this.log('Divergence resolved successfully');
      
    } catch (error) {
      this.log(`Failed to handle divergence: ${error.message}`, 'ERROR');
      await this.restoreFromBackup();
      throw error;
    }
  }

  async createBackup() {
    try {
      const backupPath = path.join(this.config.projectRoot, this.config.backupDir);
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupFile = path.join(backupPath, `backup-${timestamp}.tar.gz`);
      
      execSync(`tar -czf "${backupFile}" --exclude=node_modules --exclude=.git .`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log(`Backup created: ${backupFile}`);
      
    } catch (error) {
      this.log(`Failed to create backup: ${error.message}`, 'WARN');
    }
  }

  async rebaseOnRemote() {
    try {
      this.log('Attempting rebase on remote...');
      
      // Fetch latest
      execSync(`git fetch ${this.config.remote}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Rebase
      execSync(`git rebase ${this.config.remote}/${this.config.branch}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('Rebase completed successfully');
      
    } catch (error) {
      this.log(`Rebase failed: ${error.message}`, 'WARN');
      
      // Abort rebase
      try {
        execSync('git rebase --abort', { 
          cwd: this.config.projectRoot, 
          stdio: 'pipe' 
        });
      } catch (abortError) {
        this.log(`Failed to abort rebase: ${abortError.message}`, 'WARN');
      }
      
      throw error;
    }
  }

  async mergeFromRemote() {
    try {
      this.log('Attempting merge from remote...');
      
      // Fetch latest
      execSync(`git fetch ${this.config.remote}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Merge
      execSync(`git merge ${this.config.remote}/${this.config.branch}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('Merge completed successfully');
      
    } catch (error) {
      this.log(`Merge failed: ${error.message}`, 'WARN');
      
      // Abort merge
      try {
        execSync('git merge --abort', { 
          cwd: this.config.projectRoot, 
          stdio: 'pipe' 
        });
      } catch (abortError) {
        this.log(`Failed to abort merge: ${abortError.message}`, 'WARN');
      }
      
      throw error;
    }
  }

  async pushChanges() {
    try {
      this.log('Pushing local changes...');
      
      execSync(`git push ${this.config.remote} ${this.config.branch}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('Changes pushed successfully');
      this.lastSync = Date.now();
      this.syncCount++;
      
    } catch (error) {
      this.log(`Failed to push changes: ${error.message}`, 'ERROR');
      this.errorCount++;
      throw error;
    }
  }

  async pullChanges() {
    try {
      this.log('Pulling remote changes...');
      
      execSync(`git pull ${this.config.remote} ${this.config.branch}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('Changes pulled successfully');
      this.lastSync = Date.now();
      this.syncCount++;
      
    } catch (error) {
      this.log(`Failed to pull changes: ${error.message}`, 'ERROR');
      this.errorCount++;
      throw error;
    }
  }

  isRepositoryClean() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      });
      return status.trim() === '';
    } catch (error) {
      return false;
    }
  }

  async restoreFromBackup() {
    try {
      this.log('Restoring from backup...');
      
      const backupPath = path.join(this.config.projectRoot, this.config.backupDir);
      if (!fs.existsSync(backupPath)) {
        this.log('No backup found to restore from', 'WARN');
        return;
      }
      
      // Find latest backup
      const files = fs.readdirSync(backupPath).filter(f => f.endsWith('.tar.gz'));
      if (files.length === 0) {
        this.log('No backup files found', 'WARN');
        return;
      }
      
      const latestBackup = files.sort().pop();
      const backupFile = path.join(backupPath, latestBackup);
      
      // Restore
      execSync(`tar -xzf "${backupFile}"`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log(`Restored from backup: ${latestBackup}`);
      
    } catch (error) {
      this.log(`Failed to restore from backup: ${error.message}`, 'ERROR');
    }
  }

  startSyncLoop() {
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        const status = this.getGitStatus();
        
        if (status.diverged) {
          this.log('Repository diverged, handling...');
          await this.handleDivergence();
        } else if (status.ahead) {
          this.log('Local ahead, pushing...');
          await this.pushChanges();
        } else if (status.behind) {
          this.log('Local behind, pulling...');
          await this.pullChanges();
        }
        
      } catch (error) {
        this.log(`Sync loop error: ${error.message}`, 'ERROR');
        this.errorCount++;
      }
    }, this.config.syncInterval);
  }

  async stop() {
    this.log('Stopping Repository Sync Automation System...');
    this.isRunning = false;
    this.log('Repository Sync Automation System stopped');
  }

  restartAfterDelay(delay = 10000) {
    this.log(`Restarting in ${delay}ms...`);
    setTimeout(() => {
      this.initialize();
    }, delay);
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      uptime: Date.now() - this.startTime,
      gitStatus: this.getGitStatus()
    };
  }
}

// Handle process signals
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  if (global.repositorySyncAutomation) {
    await global.repositorySyncAutomation.stop();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  if (global.repositorySyncAutomation) {
    await global.repositorySyncAutomation.stop();
  }
  process.exit(0);
});

// Start the automation system
if (require.main === module) {
  global.repositorySyncAutomation = new RepositorySyncAutomation();
  
  // Keep the process alive
  setInterval(() => {
    if (global.repositorySyncAutomation && global.repositorySyncAutomation.isRunning) {
      // Process is healthy
    }
  }, 60000);
}

module.exports = RepositorySyncAutomation;
