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
    const changes = await this.checkGitStatus();
    if (changes.length === 0) {
      this.log('No changes to commit');
      return true;
    }

    // Add all changes
    const added = await this.addAllChanges();
    if (!added) {
      return false;
    }

    // Commit changes
    const committed = await this.commitChanges('Automated improvements and fixes');
    if (!committed) {
      return false;
    }

    // Push changes
    const pushed = await this.pushChanges();
    if (!pushed) {
      return false;
    }

    // Merge to main
    const merged = await this.mergeToMain();
    if (!merged) {
      return false;
    }

    this.log('Full git automation workflow completed successfully');
    return true;
  }
}

// Handle command line arguments
if (require.main === module) {
  const gitAutomation = new GitAutomation();
  const command = process.argv[2];

  switch (command) {
    case "status":
      gitAutomation.checkGitStatus();
      break;
    case "add":
      gitAutomation.addAllChanges();
      break;
    case "commit":
      const message = process.argv[3] || 'Automated commit';
      gitAutomation.commitChanges(message);
      break;
    case "push":
      const branch = process.argv[3] || 'main';
      gitAutomation.pushChanges(branch);
      break;
    case "merge":
      gitAutomation.mergeToMain();
      break;
    case "workflow":
      gitAutomation.runFullWorkflow().catch(error => {
        console.error("Git automation failed: ", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node git-automation.cjs [status|add|commit|push|merge|workflow]");
      process.exit(1);
  }
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