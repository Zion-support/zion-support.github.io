#!/usr/bin/env node
/**
 * Git Automation Script
 * Handles git operations for the project
 */

const { execSync } = require('child_process');
const fs = require('fs');

class GitAutomation {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      operations: []
    };
  }

  log(message) {
    console.log(`📝 ${message}`);
  }

  async runGitCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
      this.results.operations.push({
        command,
        description,
        status: 'success',
        output: result.substring(0, 200)
      });
      this.log(`✅ ${description} completed`);
      return true;
    } catch (error) {
      this.results.operations.push({
        command,
        description,
        status: 'failed',
        error: error.message
      });
      this.log(`❌ ${description} failed: ${error.message}`);
      return false;
    }
  }

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