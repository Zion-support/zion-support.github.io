#!/usr/bin/env node
/**
 * Git Automation Script
 * Handles git operations for automation
 */
const fs = require('fs');
const { execSync } = require('child_process');

class GitAutomation {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      operations: []
    };
  }

  async runGitOperation(operation, description) {
    console.log(`📝 ${description}...`);
    
    try {
      const result = execSync(operation, { 
        encoding: 'utf8', 
        stdio: 'pipe'
      });
      
      this.results.operations.push({
        operation,
        description,
        status: 'success',
        output: result
      });
      
      console.log(`✅ ${description} completed`);
      return true;
    } catch (error) {
      this.results.operations.push({
        operation,
        description,
        status: 'failed',
        error: error.message
      });
      
      console.log(`❌ ${description} failed: ${error.message}`);
      return false;
    }
  }

  async runAllOperations() {
    console.log('🚀 Starting git automation...\n');
    
    // Check git status
    await this.runGitOperation('git status --porcelain', 'Check git status');
    
    // Add all changes
    await this.runGitOperation('git add .', 'Add all changes');
    
    // Commit changes
    const commitMessage = `Automated improvements and fixes - ${new Date().toISOString()}`;
    await this.runGitOperation(`git commit -m "${commitMessage}"`, 'Commit changes');
    
    // Get current branch
    let currentBranch;
    try {
      currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      console.log(`📍 Current branch: ${currentBranch}`);
    } catch (error) {
      console.log('⚠️  Could not determine current branch');
      currentBranch = 'unknown';
    }
    
    // Push to current branch
    await this.runGitOperation('git push origin HEAD', 'Push to remote');
    
    // Save results
    fs.writeFileSync('git-automation-results.json', JSON.stringify(this.results, null, 2));
    
    console.log('\n📄 Git automation results saved to git-automation-results.json');
    
    return {
      ...this.results,
      currentBranch
    };
  }
}

// Run if called directly
if (require.main === module) {
  const gitAutomation = new GitAutomation();
  gitAutomation.runAllOperations().catch(console.error);
}

module.exports = GitAutomation;