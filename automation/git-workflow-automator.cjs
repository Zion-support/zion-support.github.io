#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting Git Workflow Automator...');

class GitWorkflowAutomator {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'git-workflow.log');
    this.config = {
      autoMergeEnabled: process.env.AUTO_MERGE_ENABLED === 'true',
      branchProtection: process.env.BRANCH_PROTECTION || 'main',
      checkInterval: 6 * 60 * 60 * 1000, // 6 hours
    };
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async getCurrentBranch() {
    const result = await this.executeCommand('git branch --show-current', { silent: true });
    return result.success ? result.output.trim() : null;
  }

  async getStatus() {
    const result = await this.executeCommand('git status --porcelain', { silent: true });
    return result.success ? result.output.trim() : '';
  }

  async hasUncommittedChanges() {
    const status = await this.getStatus();
    return status.length > 0;
  }

  async pullLatest() {
    this.log('📥 Pulling latest changes...');
    const result = await this.executeCommand('git pull origin main');
    return result.success;
  }

  async pushChanges() {
    this.log('📤 Pushing changes...');
    const result = await this.executeCommand('git push origin main');
    return result.success;
  }

  async commitChanges(message) {
    this.log('💾 Committing changes...');
    const addResult = await this.executeCommand('git add .');
    if (!addResult.success) return false;
    
    const commitResult = await this.executeCommand(`git commit -m "${message}"`);
    return commitResult.success;
  }

  async checkForConflicts() {
    this.log('🔍 Checking for merge conflicts...');
    const status = await this.getStatus();
    return status.includes('UU') || status.includes('AA') || status.includes('DD');
  }

  async resolveConflicts() {
    this.log('🔧 Attempting to resolve conflicts...');
    
    // Try to resolve conflicts automatically
    const checkoutOurs = await this.executeCommand('git checkout --ours .');
    if (checkoutOurs.success) {
      const addResult = await this.executeCommand('git add .');
      if (addResult.success) {
        const commitResult = await this.executeCommand('git commit -m "Auto-resolve conflicts"');
        return commitResult.success;
      }
    }
    
    return false;
  }

  async performGitWorkflow() {
    this.log('🔄 Starting git workflow check...');
    
    const currentBranch = await this.getCurrentBranch();
    this.log(`📍 Current branch: ${currentBranch}`);
    
    if (currentBranch !== 'main') {
      this.log('⚠️ Not on main branch, skipping workflow');
      return;
    }
    
    const hasChanges = await this.hasUncommittedChanges();
    if (hasChanges) {
      this.log('📝 Uncommitted changes detected, committing...');
      const commitSuccess = await this.commitChanges('Auto-commit: Automated workflow update');
      if (!commitSuccess) {
        this.log('❌ Failed to commit changes');
        return;
      }
    }
    
    // Try to pull latest changes
    const pullSuccess = await this.pullLatest();
    if (!pullSuccess) {
      this.log('⚠️ Pull failed, checking for conflicts...');
      const hasConflicts = await this.checkForConflicts();
      if (hasConflicts) {
        this.log('🔧 Conflicts detected, attempting resolution...');
        const resolveSuccess = await this.resolveConflicts();
        if (!resolveSuccess) {
          this.log('❌ Failed to resolve conflicts automatically');
          return;
        }
      }
    }
    
    // Push changes if we have any
    if (hasChanges || pullSuccess) {
      const pushSuccess = await this.pushChanges();
      if (pushSuccess) {
        this.log('✅ Git workflow completed successfully');
      } else {
        this.log('❌ Failed to push changes');
      }
    } else {
      this.log('✅ No changes to sync');
    }
  }

  async run() {
    this.log('🚀 Git Workflow Automator started');
    this.log(`📋 Auto-merge enabled: ${this.config.autoMergeEnabled}`);
    this.log(`📋 Branch protection: ${this.config.branchProtection}`);
    
    // Initial workflow check
    await this.performGitWorkflow();
    
    // Set up periodic workflow checks
    setInterval(async () => {
      await this.performGitWorkflow();
    }, this.config.checkInterval);
    
    this.log('✅ Git workflow monitoring active');
  }
}

// Start the git workflow automator
const gitWorkflow = new GitWorkflowAutomator();
gitWorkflow.run().catch(error => {
  console.error('❌ Git Workflow Automator failed:', error);
  process.exit(1);
});