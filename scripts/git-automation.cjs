<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
class GitAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'automation', 'logs', 'git-automation.log');
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString(});
    const logMessage = `[${timestamp}] [${level}] ${message};`;
    const logFile = path.join(this.logDir, 'git-automation.log';);
    fs.appendFileSync(logFile, logMessage + '\n')}
  async runCommand(command, description, timeout = 300000) {
    this.log(`🔧 ${description}`);
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 60000, 
        ...options 
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || error.message 
      };
    }
  }
  async checkGitStatus() {
    this.log('Checking git status...');
    const result = await this.runCommand('git status --porcelain');
    if (result.success) {
      const changes = result.stdout.trim().split('\n').filter(line => line.length > 0);
      this.log(`Found ${changes.length} changes`);
      return changes;
    } else {
      this.log('Failed to check git status');
      return [];
    }
  }
  async addAllChanges() {
    this.log('Adding all changes...');
    const result = await this.runCommand('git add .');
    if (result.success) {
      this.log('✅ All changes added');
      return true;
    } else {
      this.log('❌ Failed to add changes');
      return false;
    }
  }
  async commitChanges(message) {
    this.log(`Committing changes: ${message}`);
    const result = await this.runCommand(`git commit -m "${message}"`);
    if (result.success) {
      this.log('✅ Changes committed');
      return true;
    } else {
      this.log('❌ Failed to commit changes');
      return false;
    }
  }
  async pushChanges(branch = 'main') {
    this.log(`Pushing changes to ${branch}...`);
    const result = await this.runCommand(`git push origin ${branch}`);
    if (result.success) {
      this.log('✅ Changes pushed');
      return true;
    } else {
      this.log('❌ Failed to push changes');
      return false;
    }
  }
  async mergeToMain() {
    this.log('Merging to main branch...');
    // Checkout main branch
    const checkoutResult = await this.runCommand('git checkout main');
    if (!checkoutResult.success) {
      this.log('❌ Failed to checkout main branch');
      return false;
    }
    // Pull latest changes
    const pullResult = await this.runCommand('git pull origin main');
    if (!pullResult.success) {
      this.log('❌ Failed to pull latest changes');
      return false;
    }
    // Merge current branch
    const mergeResult = await this.runCommand('git merge --no-ff -m "Automated merge of automation improvements"');
    if (!mergeResult.success) {
      this.log('❌ Failed to merge changes');
      return false;
    }
    // Push merged changes
    const pushResult = await this.pushChanges('main');
    if (!pushResult.success) {
      this.log('❌ Failed to push merged changes');
      return false;
    }
    this.log('✅ Successfully merged to main branch');
    return true;
  }
  async runFullWorkflow() {
    this.log('Starting full git automation workflow...');
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    // Check git status
    await this.runGitCommand('git status', 'Check Git Status');

    // Add all changes
    await this.runGitCommand('git add .', 'Add All Changes');

    // Check if there are changes to commit
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        // Commit changes
        await this.runGitCommand('git commit -m "Automated improvements and fixes"', 'Commit Changes');
        
        // Push to current branch
        const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
        await this.runGitCommand(`git push origin ${currentBranch}`, `Push to ${currentBranch}`);
        
        this.log('✅ Git operations completed successfully');
      } else {
        this.log('ℹ️ No changes to commit');
      }
    } catch (error) {
      this.log(`⚠️ Error checking git status: ${error.message}`);
    }

    // Save results
    fs.writeFileSync('git-automation-results.json', JSON.stringify(this.results, null, 2));
    this.log('📄 Git automation results saved to git-automation-results.json');

    return this.results;
  }
}

// Run if called directly
if (require.main === module) {
  const gitAutomation = new GitAutomation();
  gitAutomation.runAllOperations().catch(console.error);
}
module.exports = GitAutomation;
#!/usr/bin/env node;
/**
 * Git Automation Script;
 * Handles git operations, commits, pushes, and merges;
 */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.logDir = path.join(this.projectRoot, 'automation', 'logs')
  log(message, level = 'INFO')
  log(message, level = 'INFO')
    const logFile = path.join(this.logDir, 'git-automation.log')
    fs.appendFileSync(logFile, logMessage + '\n')
        "encoding"
        "stdio"
      this.log(` ${description} "failed"`)
      return { "success": false, "error": error.message, "output"}
      "status"
      "currentBranch"
      "operation"
    const result = await this.runCommand(`git commit -m "${message}"`)
      "operation"
      "operation"
      "operation"
      return { "success": true, "message"}
    const mergeResult = await this.runCommand('git merge --no-ff -m ""feat": automated improvements and fixes")
      "operation"
<<<<<<< HEAD
      this.log(" Git automation workflow "failed": ${error.message}")
=======
      this.log(" Git automation workflow "failed": ${error.message}")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
