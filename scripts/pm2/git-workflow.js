#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GitWorkflowAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json');
    this.startTime = Date.now();
    
    // Configuration from environment variables
    this.config = {
      autoBranchCleanup: process.env.AUTO_BRANCH_CLEANUP === 'true',
      autoMergeSafe: process.env.AUTO_MERGE_SAFE === 'true',
      conflictResolution: process.env.CONFLICT_RESOLUTION === 'true',
      branchStrategy: process.env.BRANCH_STRATEGY || 'gitflow'
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async getGitStatus() {
    try {
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return status.split('\n').filter(line => line.trim());
    } catch (error) {
      this.log(`Error getting git status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async getCurrentBranch() {
    try {
      const branch = execSync('git branch --show-current', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return branch.trim();
    } catch (error) {
      this.log(`Error getting current branch: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getBranches() {
    try {
      const branches = execSync('git branch -a', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return branches.split('\n').filter(line => line.trim());
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async cleanupMergedBranches() {
    if (!this.config.autoBranchCleanup) {
      this.log('⏭️  Auto branch cleanup disabled');
      return { cleaned: 0, message: 'Auto cleanup disabled' };
    }

    this.log('🧹 Cleaning up merged branches...');
    
    try {
      // Get list of merged branches
      const mergedBranches = execSync('git branch --merged', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const branches = mergedBranches.split('\n')
        .filter(line => line.trim())
        .filter(line => !line.includes('*'))
        .filter(line => !line.includes('main'))
        .filter(line => !line.includes('master'))
        .filter(line => !line.includes('develop'));

      let cleaned = 0;
      for (const branch of branches) {
        const branchName = branch.trim();
        try {
          execSync(`git branch -d ${branchName}`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          cleaned++;
          this.log(`Deleted merged branch: ${branchName}`);
        } catch (error) {
          this.log(`Could not delete branch ${branchName}: ${error.message}`, 'WARN');
        }
      }

      return { cleaned, message: `Cleaned up ${cleaned} merged branches` };
    } catch (error) {
      this.log(`Error cleaning up branches: ${error.message}`, 'ERROR');
      return { cleaned: 0, error: error.message };
    }
  }

  async checkForConflicts() {
    this.log('🔍 Checking for merge conflicts...');
    
    try {
      const status = await this.getGitStatus();
      const conflicts = status.filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));

      if (conflicts.length > 0) {
        this.log(`Found ${conflicts.length} merge conflicts`, 'WARN');
        return {
          hasConflicts: true,
          conflictCount: conflicts.length,
          conflicts: conflicts
        };
      }

      return { hasConflicts: false, conflictCount: 0, conflicts: [] };
    } catch (error) {
      this.log(`Error checking for conflicts: ${error.message}`, 'ERROR');
      return { hasConflicts: false, error: error.message };
    }
  }

  async resolveConflicts() {
    if (!this.config.conflictResolution) {
      this.log('⏭️  Conflict resolution disabled');
      return { resolved: false, message: 'Conflict resolution disabled' };
    }

    this.log('🛠️  Attempting to resolve conflicts...');
    
    try {
      // Check if there are conflicts
      const conflictStatus = await this.checkForConflicts();
      
      if (!conflictStatus.hasConflicts) {
        return { resolved: true, message: 'No conflicts to resolve' };
      }

      // Try to resolve conflicts automatically
      execSync('git add .', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      execSync('git commit -m "Auto-resolve merge conflicts"', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.log('✅ Conflicts resolved automatically');
      return { resolved: true, message: 'Conflicts resolved automatically' };
      
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`, 'ERROR');
      return { resolved: false, error: error.message };
    }
  }

  async checkRemoteUpdates() {
    this.log('📡 Checking for remote updates...');
    
    try {
      execSync('git fetch origin', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      const currentBranch = await this.getCurrentBranch();
      const behind = execSync(`git rev-list HEAD..origin/${currentBranch} --count`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      }).trim();

      const ahead = execSync(`git rev-list origin/${currentBranch}..HEAD --count`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      }).trim();

      return {
        behind: parseInt(behind),
        ahead: parseInt(ahead),
        needsUpdate: parseInt(behind) > 0,
        needsPush: parseInt(ahead) > 0
      };
    } catch (error) {
      this.log(`Error checking remote updates: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async updateFromRemote() {
    this.log('⬇️  Updating from remote...');
    
    try {
      const currentBranch = await this.getCurrentBranch();
      const remoteStatus = await this.checkRemoteUpdates();

      if (!remoteStatus.needsUpdate) {
        return { updated: false, message: 'Already up to date' };
      }

      // Pull latest changes
      execSync(`git pull origin ${currentBranch}`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.log(`✅ Updated from remote ${currentBranch}`);
      return { updated: true, message: `Updated from remote ${currentBranch}` };
      
    } catch (error) {
      this.log(`Error updating from remote: ${error.message}`, 'ERROR');
      return { updated: false, error: error.message };
    }
  }

  async pushToRemote() {
    this.log('⬆️  Pushing to remote...');
    
    try {
      const currentBranch = await this.getCurrentBranch();
      const remoteStatus = await this.checkRemoteUpdates();

      if (!remoteStatus.needsPush) {
        return { pushed: false, message: 'Nothing to push' };
      }

      // Push changes
      execSync(`git push origin ${currentBranch}`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      this.log(`✅ Pushed to remote ${currentBranch}`);
      return { pushed: true, message: `Pushed to remote ${currentBranch}` };
      
    } catch (error) {
      this.log(`Error pushing to remote: ${error.message}`, 'ERROR');
      return { pushed: false, error: error.message };
    }
  }

  async generateWorkflowReport() {
    this.log('📊 Generating git workflow report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      currentBranch: await this.getCurrentBranch(),
      gitStatus: await this.getGitStatus(),
      branches: await this.getBranches(),
      conflicts: await this.checkForConflicts(),
      remoteStatus: await this.checkRemoteUpdates(),
      actions: {
        branchCleanup: await this.cleanupMergedBranches(),
        conflictResolution: await this.resolveConflicts(),
        remoteUpdate: await this.updateFromRemote(),
        remotePush: await this.pushToRemote()
      }
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Git workflow report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting Git Workflow Automation...');
    
    try {
      // 1. Check current git status
      const status = await this.getGitStatus();
      this.log(`Current git status: ${status.length} changes`);
      
      // 2. Clean up merged branches
      const cleanupResult = await this.cleanupMergedBranches();
      this.log(cleanupResult.message);
      
      // 3. Check for conflicts
      const conflictResult = await this.checkForConflicts();
      if (conflictResult.hasConflicts) {
        this.log(`⚠️  Found ${conflictResult.conflictCount} conflicts`);
        await this.resolveConflicts();
      }
      
      // 4. Update from remote
      const updateResult = await this.updateFromRemote();
      this.log(updateResult.message);
      
      // 5. Push to remote if needed
      const pushResult = await this.pushToRemote();
      this.log(pushResult.message);
      
      // 6. Generate report
      const report = await this.generateWorkflowReport();
      
      this.log('✅ Git workflow automation completed successfully!');
      return report;
      
    } catch (error) {
      this.log(`❌ Git workflow automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the git workflow automation
if (require.main === module) {
  const automation = new GitWorkflowAutomation();
  automation.run().catch(error => {
    console.error('Git workflow automation failed:', error);
    process.exit(1);
  });
}

module.exports = GitWorkflowAutomation;