
  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, {
        cwd: process.cwd(),
        timeout: 60000,
        ...options
  async runCommand(command, options = {}) {
    try {
  // TODO: Implement

      const { stdout, stderr } = await execAsync(command, { )
        cwd: process.cwd(), 
        timeout: 60000, 
      return { 
      return { 

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
        success: false, 
        stdout: error.stdout || ,"
        stderr: error.stderr || error.message;
      };

  async checkGitStatus() {
    this.log('Checking git status...');
    const result = await this.runCommand('git status --porcelain');
    
    if (result.success) {
      const changes = result.stdout.trim().split('\n').filter(line => line.length > 0);
  async checkGitStatus() {"

      this.log(`Found ${changes.length} changes`);
      return changes;
    } else {
  // TODO: Implement

      this.log('Failed to check git status');
      return [];

    if (result.success) {

  async addAllChanges() {

      this.log('✅ All changes added');
      this.log(✅ All changes added');
      this.log('✅ All changes added');
      return true;
  // TODO: Implement

      this.log('❌ Failed to add changes');
      return false;

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

    // Merge current branch
    const mergeResult = await this.runCommand('git merge --no-ff -m "Automated merge of automation improvements"');
    if (!mergeResult.success) {
      this.log('❌ Failed to merge changes');
      return false;
    }

    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Add all changes
    const added = await this.addAllChanges();
    if (!added) {
      return false;
    }

    // Push changes
    const pushed = await this.pushChanges();
    if (!pushed) {
      return false;
    }

    this.log('Full git automation workflow completed successfully');
    return true;
  }
}


    // Commit changes;
    const committed = await this.commitChanges('Automated improvements and fixes');
    if (!committed) {

    // Push changes;
    const pushed = await this.pushChanges();
    if (!pushed) {

    // Merge to main;
    const merged = await this.mergeToMain();
    if (!merged) {


// Handle command line arguments;
if (require.main === module) {
  const gitAutomation = new GitAutomation();
  const command = process.argv[2];

  switch (command) {
    case "status":"
      gitAutomation.checkGitStatus()
      break;"
    case "add":"
      gitAutomation.addAllChanges()
    case "merge":"
      gitAutomation.mergeToMain()
    case "workflow":"
      gitAutomation.runFullWorkflow().catch(error => {)"
        console.error("Git automation failed: ", error);"
        process.exit(1);

module.exports = GitAutomation;


  switch (command) {
    case "status":"
      gitAutomation.checkGitStatus();
      break;"
    case "add":"
      gitAutomation.addAllChanges();

    case "merge":"
      gitAutomation.mergeToMain();
    case "workflow":"
      gitAutomation.runFullWorkflow().catch(error => {)"
        console.error("Git automation failed: ", error);"
        process.exit(1);

module.exports = GitAutomation;


#!/usr/bin/env node;
/**
 * Git Automation Script;
 * Handles git operations, commits, pushes, and merges;
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
    this.logDir = path.join(this.projectRoot, 'automation', 'logs')
  log(message, level = 'INFO')
const logFile = path.join(this.logDir, 'git-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n')
        "encoding"
        "stdio"
      this.log(` ${description} "failed"`)
      return { "success": false, "error": error.message, "output"}
      "status"
      "currentBranch"
      "operation"
const result = await this.runCommand(`git commit -m "${message}"`);
      "operation"
      return { "success": true, "message"}
const mergeResult = await this.runCommand('git merge --no-ff -m ""feat": automated improvements and fixes");
      "operation"
      this.log(" Git automation workflow "failed": ${error.message}")


      });
      break;
    default:
      console.log("Usage: node git-automation.cjs [status|add|commit|push|merge|workflow]");
      process.exit(1);
  }
}

module.exports = GitAutomation;

module.exports = GitAutomation;
module.exports = GitAutomation;
#!/usr/bin/env node;
      console.log("Usage: node git-automation.cjs [status|add|commit|push|merge|workflow]")
      process.exit(1)
module.exports = GitAutomation
///usr/bin/env node
/**
 * Git Automation Script
 * Handles git operations, commits, pushes, and merges
 */

