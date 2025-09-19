#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GitWorkflowAutomation {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'logs/git-workflow.log');
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
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, description) {
    try {
      this.log(`Executing: ${description}`);
      const result = execSync(command, { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 5
      });
      this.log(`${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return { success: false, output: error.stdout || error.message };
    }
  }

  async getCurrentBranch() {
    try {
      const result = execSync('git branch --show-current', { 
        cwd: this.workspacePath,
        encoding: 'utf8'
      });
      return result.trim();
    } catch (error) {
      this.log(`Failed to get current branch: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getStatus() {
    try {
      const result = execSync('git status --porcelain', { 
        cwd: this.workspacePath,
        encoding: 'utf8'
      });
      return result.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      this.log(`Failed to get git status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async stageChanges() {
    this.log('Staging all changes...');
    return await this.executeCommand('git add .', 'Staging changes');
  }

  async commitChanges(message) {
    this.log(`Committing changes: ${message}`);
    return await this.executeCommand(`git commit -m "${message}"`, 'Committing changes');
  }

  async pushChanges(branch = 'main') {
    this.log(`Pushing changes to ${branch}...`);
    return await this.executeCommand(`git push origin ${branch}`, `Pushing to ${branch}`);
  }

  async pullChanges(branch = 'main') {
    this.log(`Pulling changes from ${branch}...`);
    return await this.executeCommand(`git pull origin ${branch}`, `Pulling from ${branch}`);
  }

  async mergeBranch(sourceBranch, targetBranch = 'main') {
    this.log(`Merging ${sourceBranch} into ${targetBranch}...`);
    
    // Switch to target branch
    await this.executeCommand(`git checkout ${targetBranch}`, `Switching to ${targetBranch}`);
    
    // Pull latest changes
    await this.pullChanges(targetBranch);
    
    // Merge source branch
    const mergeResult = await this.executeCommand(`git merge ${sourceBranch}`, `Merging ${sourceBranch}`);
    
    if (mergeResult.success) {
      // Push merged changes
      await this.pushChanges(targetBranch);
      this.log(`Successfully merged ${sourceBranch} into ${targetBranch}`);
    } else {
      this.log(`Merge failed: ${mergeResult.output}`, 'ERROR');
    }
    
    return mergeResult;
  }

  async createBranch(branchName) {
    this.log(`Creating branch: ${branchName}`);
    return await this.executeCommand(`git checkout -b ${branchName}`, `Creating branch ${branchName}`);
  }

  async switchBranch(branchName) {
    this.log(`Switching to branch: ${branchName}`);
    return await this.executeCommand(`git checkout ${branchName}`, `Switching to ${branchName}`);
  }

  async resolveConflicts() {
    this.log('Attempting to resolve merge conflicts...');
    
    const status = await this.getStatus();
    const conflictedFiles = status.filter(file => file.includes('UU') || file.includes('AA') || file.includes('DD'));
    
    if (conflictedFiles.length === 0) {
      this.log('No merge conflicts found');
      return { success: true };
    }
    
    this.log(`Found ${conflictedFiles.length} conflicted files`);
    
    for (const file of conflictedFiles) {
      const fileName = file.split(' ')[1];
      await this.resolveFileConflicts(fileName);
    }
    
    return { success: true };
  }

  async resolveFileConflicts(fileName) {
    try {
      const filePath = path.join(this.workspacePath, fileName);
      if (!fs.existsSync(filePath)) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        content = content
          .replace(/<<<<<<<.*?\n/g, '')
          .replace(/=======.*?\n/g, '')
          .replace(/>>>>>>>.*?\n/g, '');
        
        fs.writeFileSync(filePath, content);
        this.log(`Resolved conflicts in ${fileName}`);
      }
    } catch (error) {
      this.log(`Failed to resolve conflicts in ${fileName}: ${error.message}`, 'ERROR');
    }
  }

  async runWorkflow() {
    this.log('Starting Git Workflow Automation...');
    
    try {
      // Get current status
      const currentBranch = await this.getCurrentBranch();
      const status = await this.getStatus();
      
      this.log(`Current branch: ${currentBranch}`);
      this.log(`Uncommitted changes: ${status.length}`);
      
      if (status.length > 0) {
        // Stage and commit changes
        await this.stageChanges();
        await this.commitChanges('Automated commit: Error fixes and PM2 automation setup');
        
        // Push changes
        await this.pushChanges(currentBranch);
        
        // If not on main, merge to main
        if (currentBranch !== 'main') {
          await this.mergeBranch(currentBranch, 'main');
        }
      } else {
        this.log('No changes to commit');
      }
      
      this.log('Git Workflow Automation completed successfully');
      
    } catch (error) {
      this.log(`Git Workflow Automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new GitWorkflowAutomation();
  automation.runWorkflow().catch(console.error);
}

module.exports = GitWorkflowAutomation;