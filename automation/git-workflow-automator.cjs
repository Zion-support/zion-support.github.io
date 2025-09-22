#!/usr/bin/env node

<<<<<<< HEAD

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class GitWorkflowAutomator {
  // TODO: Implement
}
  constructor() {
    this.logFile = './automation/logs/git-workflow.log';    this.ensureLogDirectory();
this.logFile = './automation/logs/git-workflow.log';
    this.ensureLogDirectory();

=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(__dirname, 'logs', 'git-workflow.log');
    this.ensureLogDirectory();
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
<<<<<<< HEAD
      this.log('ERROR', `Failed to add changes: ${error.message}`);
      return false;
    }
  }

  async commitChanges(message) {
    try {
      execSync(`git commit -m "${message}"`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes committed: ${message}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async pushChanges(branch = 'main') {
    try {
      execSync(`git push origin ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes pushed to ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to push changes: ${error.message}`);
      return false;
    }
  }

  async pullChanges(branch = 'main') {
    try {
      execSync(`git pull origin ${branch}`, { stdio: 'pipe' });
      this.log('SUCCESS', `Changes pulled from ${branch}`);
      return true;
    } catch (error) {
      this.log('ERROR', `Failed to pull changes: ${error.message}`);
      return false;    }
      return false;

      return false;

=======
      this.log(`Git workflow automation failed: ${error.message}`, 'ERROR');
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    }
  }

  async getCurrentBranch() {
    try {
<<<<<<< HEAD
      const branch = execSync('git branch --show-current', { encoding: 'utf8' });
      return branch.trim();
=======
      const result = execSync('git branch --show-current', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      return result.trim();
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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

<<<<<<< HEAD
// CLI interfaceif (require.main === module) {
// CLI interface
if (require.main === module) {
  const automator = new GitWorkflowAutomator();
  const command = process.argv[2];
  const automator = new GitWorkflowAutomator();
  const command = process.argv[2];

  switch (command) {
    case 'status':
      automator.checkGitStatus().then(changes => {
        console.log('Git Status:', changes);
      });
      break;
    case 'commit':
      const message = process.argv[3] || 'Auto-commit: Error fixes and improvements';
      automator.autoCommitAndPush();
      break;
    case 'merge':
      automator.mergeToMain();
      break;
    case 'workflow':
      automator.runWorkflow();
      break;
    case 'report':
      automator.generateReport();
      break;
    default:
      console.log(`
Git Workflow Automator

Usage: node git-workflow-automator.cjs <command> [options]

Commands:
  status    - Check git status
  commit    - Auto-commit and push changes
  merge     - Merge current branch to main
  workflow  - Run full automated workflow
  report    - Generate workflow report

Examples:
  node git-workflow-automator.cjs status
  node git-workflow-automator.cjs commit "Fix syntax errors"
  node git-workflow-automator.cjs workflow
      `);
  }
}

module.exports = GitWorkflowAutomator;

// CLI interface

if (require.main === module) {


  const automator = new GitWorkflowAutomator();
  const command = process.argv[2];

=======
module.exports = GitWorkflowAutomator;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
