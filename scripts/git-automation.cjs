#!/usr/bin/env node

/**
 * Git Automation Script
 * Handles git operations, commits, pushes, and merges
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logDir = path.join(this.projectRoot, 'automation', 'logs');
    this.ensureLogDir();
    this.results = {
      timestamp: new Date().toISOString(),
      operations: [],
      errors: []
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'git-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, description, timeout = 300000) {
    this.log(`🔧 ${description}`);
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: timeout,
        cwd: this.projectRoot
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async checkGitStatus() {
    this.log('📊 Checking git status...');
    
    const statusResult = await this.runCommand('git status --porcelain', 'Git Status Check');
    const branchResult = await this.runCommand('git branch --show-current', 'Current Branch Check');
    
    return {
      status: statusResult.success ? statusResult.output : '',
      currentBranch: branchResult.success ? branchResult.output.trim() : 'unknown'
    };
  }

  async stageChanges() {
    this.log('📝 Staging all changes...');
    
    const result = await this.runCommand('git add .', 'Stage All Changes');
    this.results.operations.push({
      operation: 'stage',
      success: result.success,
      timestamp: new Date().toISOString()
    });
    
    return result;
  }

  async commitChanges(message) {
    this.log(`💾 Committing changes: ${message}`);
    
    const result = await this.runCommand(`git commit -m "${message}"`, 'Commit Changes');
    this.results.operations.push({
      operation: 'commit',
      success: result.success,
      message: message,
      timestamp: new Date().toISOString()
    });
    
    return result;
  }

  async pushChanges(branch = 'main') {
    this.log(`🚀 Pushing changes to ${branch}...`);
    
    const result = await this.runCommand(`git push origin ${branch}`, `Push to ${branch}`);
    this.results.operations.push({
      operation: 'push',
      success: result.success,
      branch: branch,
      timestamp: new Date().toISOString()
    });
    
    return result;
  }

  async createPullRequest(title, body) {
    this.log(`🔀 Creating pull request: ${title}`);
    
    // This would typically use GitHub CLI or API
    // For now, we'll just log the intention
    this.log(`Would create PR: ${title} - ${body}`);
    
    this.results.operations.push({
      operation: 'create_pr',
      success: true,
      title: title,
      body: body,
      timestamp: new Date().toISOString()
    });
    
    return { success: true };
  }

  async mergeToMain() {
    this.log('🔄 Merging to main branch...');
    
    // Switch to main branch
    const switchResult = await this.runCommand('git checkout main', 'Switch to Main Branch');
    if (!switchResult.success) {
      return switchResult;
    }
    
    // Pull latest changes
    const pullResult = await this.runCommand('git pull origin main', 'Pull Latest Changes');
    if (!pullResult.success) {
      return pullResult;
    }
    
    // Check if there are any changes to merge
    const status = await this.checkGitStatus();
    if (!status.status.trim()) {
      this.log('ℹ️ No changes to merge');
      return { success: true, message: 'No changes to merge' };
    }
    
    // Merge changes
    const mergeResult = await this.runCommand('git merge --no-ff -m "feat: automated improvements and fixes"', 'Merge Changes');
    this.results.operations.push({
      operation: 'merge',
      success: mergeResult.success,
      timestamp: new Date().toISOString()
    });
    
    return mergeResult;
  }

  async runFullWorkflow() {
    this.log('🚀 Starting full git automation workflow...');
    
    try {
      // Check current status
      const status = await this.checkGitStatus();
      this.log(`Current branch: ${status.currentBranch}`);
      
      // Stage all changes
      const stageResult = await this.stageChanges();
      if (!stageResult.success) {
        throw new Error('Failed to stage changes');
      }
      
      // Commit changes
      const commitMessage = `feat: comprehensive automation improvements and fixes - ${new Date().toISOString()}`;
      const commitResult = await this.commitChanges(commitMessage);
      if (!commitResult.success) {
        throw new Error('Failed to commit changes');
      }
      
      // Push changes
      const pushResult = await this.pushChanges(status.currentBranch);
      if (!pushResult.success) {
        throw new Error('Failed to push changes');
      }
      
      // If not on main, create a PR
      if (status.currentBranch !== 'main') {
        await this.createPullRequest(
          'Automated Improvements and Fixes',
          'This PR contains automated improvements, fixes, and new automation scripts.'
        );
      } else {
        // If on main, try to merge
        await this.mergeToMain();
      }
      
      this.log('✅ Git automation workflow completed successfully!');
      return { success: true };
      
    } catch (error) {
      this.log(`❌ Git automation workflow failed: ${error.message}`, 'ERROR');
      this.results.errors.push({
        message: error.message,
        timestamp: new Date().toISOString()
      });
      return { success: false, error: error.message };
    }
  }

  async generateReport() {
    this.log('📊 Generating git automation report...');
    
    const report = {
      ...this.results,
      summary: {
        totalOperations: this.results.operations.length,
        successfulOperations: this.results.operations.filter(op => op.success).length,
        failedOperations: this.results.operations.filter(op => !op.success).length,
        errors: this.results.errors.length
      }
    };

    const reportPath = path.join(this.logDir, 'git-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Git automation report saved to: ${reportPath}`);
    return report;
  }
}

// Run the git automation
if (require.main === module) {
  new GitAutomation().runFullWorkflow()
    .then(async (result) => {
      const automation = new GitAutomation();
      await automation.generateReport();
      process.exit(result.success ? 0 : 1);
    })
    .catch(() => process.exit(1));
}

module.exports = GitAutomation;