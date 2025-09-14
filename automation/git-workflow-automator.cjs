#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async automateGitWorkflow() {
    this.log('🔄 Starting Git workflow automation...');
    
    try {
      // Check current branch
      const currentBranch = await this.getCurrentBranch();
      this.log(`Current branch: ${currentBranch}`);
      
      // Add all changes
      await this.runCommand('git add .', 'Add all changes');
      
      // Check if there are changes to commit
      const statusResult = await this.runCommand('git status --porcelain', 'Check git status');
      if (!statusResult.success || !statusResult.output.trim()) {
        this.log('No changes to commit');
        return;
      }
      
      // Commit changes
      const commitMessage = `feat: Automated improvements and fixes - ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Commit changes');
      
      // Push changes
      await this.runCommand('git push origin HEAD', 'Push changes');
      
      // If on a feature branch, create PR
      if (currentBranch !== 'main' && currentBranch !== 'master') {
        await this.createPullRequest(currentBranch);
      }
      
      this.log('Git workflow automation completed');
    } catch (error) {
      this.log(`Git workflow automation failed: ${error.message}`, 'ERROR');
    }
  }

  async getCurrentBranch() {
    try {
      const result = execSync('git branch --show-current', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      return result.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async createPullRequest(branchName) {
    try {
      // This would typically use GitHub CLI or API
      this.log(`Would create PR for branch: ${branchName}`);
      // For now, just log the intention
    } catch (error) {
      this.log(`Could not create PR: ${error.message}`, 'WARNING');
    }
  }

  async mergeToMain() {
    this.log('🔄 Starting merge to main...');
    
    try {
      // Switch to main branch
      await this.runCommand('git checkout main', 'Switch to main branch');
      
      // Pull latest changes
      await this.runCommand('git pull origin main', 'Pull latest changes');
      
      // Merge current branch
      const currentBranch = await this.getCurrentBranch();
      if (currentBranch !== 'main') {
        await this.runCommand(`git merge ${currentBranch}`, `Merge ${currentBranch} into main`);
      }
      
      // Push to main
      await this.runCommand('git push origin main', 'Push to main');
      
      this.log('Merge to main completed');
    } catch (error) {
      this.log(`Merge to main failed: ${error.message}`, 'ERROR');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automator = new GitWorkflowAutomator();
  const command = process.argv[2];
  
  if (command === 'merge') {
    automator.mergeToMain().catch(console.error);
  } else {
    automator.automateGitWorkflow().catch(console.error);
  }
}

module.exports = GitWorkflowAutomator;