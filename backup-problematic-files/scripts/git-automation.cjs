<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
async runCommand(command, options = {}) {
=======
  async runCommand(command, options = {}) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      const { stdout, stderr } = await execAsync(command, {
        cwd: process.cwd(),
        timeout: 60000,
        ...options
=======
async runCommand(command, options = {}) {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  async runCommand(command, options = {}) {
=======
async runCommand(command, options = {}) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
  // TODO: Implement
}
      const { stdout, stderr } = await execAsync(command, { )
        cwd: process.cwd(), 
        timeout: 60000, 
<<<<<<< HEAD
        ...options 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      });
      return { success: true, stdout, stderr }
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
<<<<<<< HEAD
      return {
        success: false,
        stdout: error.stdout || "",
        stderr: error.stderr || error.message
=======
      return { 
        success: false, 
        stdout: error.stdout || ", 
        stderr: error.stderr || error.message 
<<<<<<< HEAD
      }
    }
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        ...options;
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message});
      return {
  // TODO: Implement
        success: false, 
        stdout: error.stdout || ,"
        stderr: error.stderr || error.message;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      };
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  async checkGitStatus() {
<<<<<<< HEAD
    this.log('Checking git status...);
    const result = await this.runCommand(git status --porcelain');
=======
    this.log('Checking git status...');
    const result = await this.runCommand('git status --porcelain');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result.success) {
<<<<<<< HEAD
      const changes = result.stdout.trim().split('\n).filter(line => line.length > 0);
      this.log(`Found ${changes.length} changes`);
      return changes;
    } else {
      this.log(Failed to check git status');
=======
      const changes = result.stdout.trim().split('\n').filter(line => line.length > 0);
=======
  async checkGitStatus() {"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`Found ${changes.length} changes`);
      return changes;
    } else {
  // TODO: Implement

      this.log('Failed to check git status');
>>>>>>> origin/chore/fix-lint-and-merge
      return [];

  async addAllChanges() {
<<<<<<< HEAD
    this.log('Adding all changes...);
    const result = await this.runCommand(git add .');
=======
<<<<<<< HEAD
    this.log('Adding all changes...');
    const result = await this.runCommand('git add .');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result.success) {
<<<<<<< HEAD
      this.log('✅ All changes added);
      return true;
    } else {
      this.log(❌ Failed to add changes');
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log('✅ All changes added');
      return true;
  // TODO: Implement

      this.log('❌ Failed to add changes');
>>>>>>> origin/chore/fix-lint-and-merge
      return false;

<<<<<<< HEAD
  async commitChanges(message) {
    this.log(`Committing changes: ${message}`);
<<<<<<< HEAD
    const result = await this.runCommand(`git commit -m ${message}"`);
=======
    const result = await this.runCommand(`git commit -m "${message}"`);
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result.success) {
      this.log('✅ Changes committed);
      return true;
    } else {
      this.log(❌ Failed to commit changes');
      return false;
    }
  }

  async pushChanges(branch = 'main) {
    this.log(`Pushing changes to ${branch}...`);
    const result = await this.runCommand(`git push origin ${branch}`);
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result.success) {
      this.log(✅ Changes pushed');
      return true;
    } else {
      this.log('❌ Failed to push changes);
      return false;
    }
  }

  async mergeToMain() {
<<<<<<< HEAD
    this.log(Merging to main branch...');
=======
    this.log('Merging to main branch...');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Checkout main branch
<<<<<<< HEAD
    const checkoutResult = await this.runCommand('git checkout main);
    if (!checkoutResult.success) {
      this.log(❌ Failed to checkout main branch');
      return false;
    }

    // Pull latest changes
    const pullResult = await this.runCommand('git pull origin main);
    if (!pullResult.success) {
      this.log(❌ Failed to pull latest changes');
      return false;
    }

    // Merge current branch
    const mergeResult = await this.runCommand('git merge --no-ff -m "Automated merge of automation improvements);
    if (!mergeResult.success) {
      this.log(❌ Failed to merge changes');
      return false;
    }

    // Push merged changes
    const pushResult = await this.pushChanges('main);
    if (!pushResult.success) {
      this.log(❌ Failed to push merged changes');
      return false;
    }

    this.log('✅ Successfully merged to main branch);
=======
=======

    // Checkout main branch;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const checkoutResult = await this.runCommand('git checkout main');
    if (!checkoutResult.success) {
      this.log('❌ Failed to checkout main branch');


    // Pull latest changes;
    const pullResult = await this.runCommand('git pull origin main');
    if (!pullResult.success) {
      this.log('❌ Failed to pull latest changes');


    // Push merged changes;
    const pushResult = await this.pushChanges('main');
    if (!pushResult.success) {
      this.log('❌ Failed to push merged changes');

<<<<<<< HEAD
    this.log('✅ Successfully merged to main branch');
>>>>>>> origin/chore/fix-lint-and-merge
    return true;
  }

  async runFullWorkflow() {
<<<<<<< HEAD
    this.log(Starting full git automation workflow...');
=======
    this.log('Starting full git automation workflow...');
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Ensure logs directory exists
<<<<<<< HEAD
    const logsDir = path.join(__dirname, '.., automation', 'logs);
=======
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });

    // Check git status;
    const changes = await this.checkGitStatus();
    if (changes.length === 0) {
<<<<<<< HEAD
      this.log(No changes to commit');
      return true;
    }
=======
      this.log('No changes to commit');
>>>>>>> origin/chore/fix-lint-and-merge


    // Add all changes;
    const added = await this.addAllChanges();
    if (!added) {

<<<<<<< HEAD
    // Commit changes
    const committed = await this.commitChanges('Automated improvements and fixes);
=======
    // Commit changes;
    const committed = await this.commitChanges('Automated improvements and fixes');
>>>>>>> origin/chore/fix-lint-and-merge
    if (!committed) {

    // Push changes;
    const pushed = await this.pushChanges();
    if (!pushed) {

    // Merge to main;
    const merged = await this.mergeToMain();
    if (!merged) {

<<<<<<< HEAD
    this.log(Full git automation workflow completed successfully');
    return true;
  }
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

// Handle command line arguments;
if (require.main === module) {
  const gitAutomation = new GitAutomation();
  const command = process.argv[2];

  switch (command) {
<<<<<<< HEAD
    case status":
      gitAutomation.checkGitStatus();
      break;
    case "add:
      gitAutomation.addAllChanges();
      break;
    case commit":
      const message = process.argv[3] || 'Automated commit;
      gitAutomation.commitChanges(message);
      break;
    case "push:
      const branch = process.argv[3] || main';
      gitAutomation.pushChanges(branch);
      break;
    case merge":
      gitAutomation.mergeToMain();
      break;
    case "workflow:
      gitAutomation.runFullWorkflow().catch(error => {
        console.error(Git automation failed: ", error);
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
        process.exit(1);
    default:"
      console.log("Usage: node git-automation.cjs [status|add|commit|push|merge|workflow]");"

module.exports = GitAutomation;
<<<<<<< HEAD

=======
#!/usr/bin/env node
/**
 * Git Automation Script;
 * Handles git operations, commits, pushes, and merges;
 */
"
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      this.log(" Git automation workflow "failed": ${error.message}")
      this.log(" Git automation workflow "failed": ${error.message}")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
=======
      this.log(" Git automation workflow "failed": ${error.message}")
=======
      this.log(" Git automation workflow "failed": ${error.message}")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
