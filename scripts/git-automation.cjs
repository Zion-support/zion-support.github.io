  async runAllOperations() {
    this.log('🚀 Starting Git Automation...\n');

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