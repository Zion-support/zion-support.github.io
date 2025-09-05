#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutoCommitFixes {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/auto-commit-fixes.log');
    this.startTime = Date.now();
    this.commitsMade = 0;
    this.filesChanged = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      if (!status.trim()) {
        return { hasChanges: false, files: [] };
      }

      const files = status.split('\n')
        .filter(line => line.trim())
        .map(line => {
          const parts = line.trim().split(/\s+/);
          return {
            status: parts[0],
            file: parts.slice(1).join(' ')
          };
        });

      return { hasChanges: true, files };
    } catch (error) {
      this.log(`Error checking git status: ${error.message}`);
      return { hasChanges: false, files: [] };
    }
  }

  async stageFiles(files) {
    try {
      for (const file of files) {
        if (file.status === '??' || file.status === 'M' || file.status === 'A') {
          execSync(`git add "${file.file}"`, { cwd: this.projectRoot });
          this.filesChanged++;
        }
      }
      this.log(`Staged ${this.filesChanged} files`);
    } catch (error) {
      this.log(`Error staging files: ${error.message}`);
      throw error;
    }
  }

  async createCommit() {
    try {
      const commitMessage = `Auto-fix: ${this.filesChanged} files updated at ${new Date().toISOString()}`;
      
      execSync(`git commit -m "${commitMessage}"`, { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.commitsMade++;
      this.log(`Created commit: ${commitMessage}`);
      return true;
    } catch (error) {
      this.log(`Error creating commit: ${error.message}`);
      return false;
    }
  }

  async pushChanges() {
    try {
      if (process.env.AUTO_PUSH === 'true') {
        execSync('git push', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log('Changes pushed to remote repository');
        return true;
      } else {
        this.log('Auto-push disabled, changes committed locally only');
        return true;
      }
    } catch (error) {
      this.log(`Error pushing changes: ${error.message}`);
      return false;
    }
  }

  async runLintFix() {
    try {
      this.log('Running lint fix...');
      execSync('npm run lint:fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Lint fix completed');
      return true;
    } catch (error) {
      this.log(`Lint fix failed: ${error.message}`);
      return false;
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running type check...');
      execSync('npm run type-check', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Type check completed');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
      return false;
    }
  }

  async runBuild() {
    try {
      this.log('Running build...');
      execSync('npm run build', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('Build completed');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      return false;
    }
  }

  async shouldCommit() {
    const frequency = process.env.COMMIT_FREQUENCY || 'hourly';
    const now = Date.now();
    const timeSinceLastCommit = now - this.startTime;
    
    switch (frequency) {
      case 'minutely':
        return timeSinceLastCommit >= 60000; // 1 minute
      case 'hourly':
        return timeSinceLastCommit >= 3600000; // 1 hour
      case 'daily':
        return timeSinceLastCommit >= 86400000; // 24 hours
      default:
        return timeSinceLastCommit >= 3600000; // Default to hourly
    }
  }

  async start() {
    this.log('Auto Commit Fixes started');
    
    try {
      // Check if we should commit based on frequency
      if (!(await this.shouldCommit())) {
        this.log('Not time to commit yet, skipping...');
        return;
      }

      // Run automated fixes
      await this.runLintFix();
      await this.runTypeCheck();
      await this.runBuild();

      // Check for changes
      const { hasChanges, files } = await this.checkGitStatus();
      
      if (!hasChanges) {
        this.log('No changes detected, skipping commit');
        return;
      }

      this.log(`Found changes in ${files.length} files`);
      
      // Stage and commit changes
      await this.stageFiles(files);
      const commitSuccess = await this.createCommit();
      
      if (commitSuccess) {
        await this.pushChanges();
        this.log(`Auto-commit completed: ${this.commitsMade} commits made, ${this.filesChanged} files changed`);
      } else {
        this.log('Auto-commit failed');
      }
      
    } catch (error) {
      this.log(`Auto Commit Fixes error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Start the auto-commit if this script is run directly
if (require.main === module) {
  const autoCommit = new AutoCommitFixes();
  autoCommit.start().catch(error => {
    console.error('Auto Commit Fixes failed:', error.message);
    process.exit(1);
  });
}

module.exports = AutoCommitFixes;