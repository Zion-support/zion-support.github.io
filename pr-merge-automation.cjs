#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PRMergeAutomation {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.prs = [
      {
        number: 12119,
        title: "Expand services, advertise and build project",
        branch: "cursor/expand-services-advertise-and-build-project-c360",
        sha: "6915d5c50ab54d89df1cc856bd537ef9782b0cb8"
      },
      {
        number: 12118,
        title: "Fix Netlify build and merge to main",
        branch: "cursor/fix-netlify-build-and-merge-to-main-43d5",
        sha: "92b16bc28c555d58e6944fafa9b1cb36aee9380e"
      }
    ];
    this.mergedPRs = [];
    this.failedPRs = [];
    this.logFile = path.join(this.rootPath, 'pr-merge-automation.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    console.log(message);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}: ${command}`);
    try {
      const output = execSync(command, { cwd: this.rootPath, encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ ${description} successful.`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      throw error;
    }
  }

  async fetchAllBranches() {
    this.log('📥 Fetching all branches from remote...');
    try {
      await this.runCommand('git fetch --all', 'Fetch all branches');
      this.log('✅ All branches fetched successfully');
    } catch (error) {
      this.log(`❌ Failed to fetch branches: ${error.message}`);
    }
  }

  async mergePR(pr) {
    this.log(`🔄 Processing PR #${pr.number}: ${pr.title}`);
    try {
      // Checkout the PR branch
      await this.runCommand(`git checkout ${pr.branch}`, `Checkout PR #${pr.number} branch`);
      
      // Pull latest changes
      await this.runCommand(`git pull origin ${pr.branch}`, `Pull latest changes for PR #${pr.number}`);
      
      // Switch back to main
      await this.runCommand('git checkout main', 'Switch to main branch');
      
      // Pull latest main
      await this.runCommand('git pull origin main', 'Pull latest main');
      
      // Merge the PR branch into main
      await this.runCommand(`git merge ${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`, `Merge PR #${pr.number}`);
      
      // Push the merged changes
      await this.runCommand('git push origin main', `Push merged PR #${pr.number}`);
      
      this.log(`✅ Successfully merged PR #${pr.number}`);
      this.mergedPRs.push(pr);
      
    } catch (error) {
      this.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
      
      // Try to resolve conflicts if any
      try {
        this.log(`🔧 Attempting to resolve conflicts for PR #${pr.number}...`);
        
        // Check if there are merge conflicts
        const status = await this.runCommand('git status --porcelain', 'Check git status');
        if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
          this.log(`🔧 Resolving merge conflicts for PR #${pr.number}...`);
          
          // Use our conflict resolution script
          await this.runCommand('node resolve-all-merge-conflicts-comprehensive.cjs', 'Resolve merge conflicts');
          
          // Add resolved files
          await this.runCommand('git add .', 'Add resolved files');
          
          // Commit the resolution
          await this.runCommand(`git commit -m "Resolve merge conflicts for PR #${pr.number}"`, 'Commit conflict resolution');
          
          // Push the resolved changes
          await this.runCommand('git push origin main', 'Push resolved changes');
          
          this.log(`✅ Successfully resolved conflicts and merged PR #${pr.number}`);
          this.mergedPRs.push(pr);
        }
      } catch (conflictError) {
        this.log(`❌ Failed to resolve conflicts for PR #${pr.number}: ${conflictError.message}`);
        this.failedPRs.push(pr);
      }
    }
  }

  async closePR(pr) {
    this.log(`🔒 Closing PR #${pr.number}...`);
    try {
      // Use GitHub API to close the PR
      const closeCommand = `curl -X PATCH -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${process.env.GITHUB_TOKEN}" https://api.github.com/repos/Zion-Holdings/zion.app/pulls/${pr.number} -d '{"state":"closed"}'`;
      await this.runCommand(closeCommand, `Close PR #${pr.number}`);
      this.log(`✅ Successfully closed PR #${pr.number}`);
    } catch (error) {
      this.log(`❌ Failed to close PR #${pr.number}: ${error.message}`);
    }
  }

  async deleteBranch(pr) {
    this.log(`🗑️ Deleting branch ${pr.branch}...`);
    try {
      // Delete local branch
      await this.runCommand(`git branch -D ${pr.branch}`, `Delete local branch ${pr.branch}`);
      
      // Delete remote branch
      await this.runCommand(`git push origin --delete ${pr.branch}`, `Delete remote branch ${pr.branch}`);
      
      this.log(`✅ Successfully deleted branch ${pr.branch}`);
    } catch (error) {
      this.log(`❌ Failed to delete branch ${pr.branch}: ${error.message}`);
    }
  }

  async runComprehensiveImprovements() {
    this.log('🚀 Running comprehensive improvements...');
    try {
      // Run the comprehensive automation suite
      await this.runCommand('node comprehensive-automation-suite-clean.cjs', 'Comprehensive Automation Suite');
      
      // Run final improvements
      await this.runCommand('node final-comprehensive-improvements.cjs', 'Final Comprehensive Improvements');
      
      this.log('✅ Comprehensive improvements completed');
    } catch (error) {
      this.log(`❌ Comprehensive improvements failed: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting PR Merge Automation...');
    this.log(`📋 Found ${this.prs.length} open Pull Requests to process`);
    
    try {
      // Fetch all branches first
      await this.fetchAllBranches();
      
      // Process each PR
      for (const pr of this.prs) {
        await this.mergePR(pr);
        
        // If successfully merged, close the PR and delete the branch
        if (this.mergedPRs.some(merged => merged.number === pr.number)) {
          await this.closePR(pr);
          await this.deleteBranch(pr);
        }
      }
      
      // Run comprehensive improvements after merging all PRs
      await this.runComprehensiveImprovements();
      
      // Generate final report
      this.log('\n📊 PR MERGE AUTOMATION REPORT');
      this.log('==============================');
      this.log(`✅ Successfully merged PRs: ${this.mergedPRs.length}`);
      this.mergedPRs.forEach(pr => this.log(`  - PR #${pr.number}: ${pr.title}`));
      this.log(`❌ Failed to merge PRs: ${this.failedPRs.length}`);
      this.failedPRs.forEach(pr => this.log(`  - PR #${pr.number}: ${pr.title}`));
      
      if (this.failedPRs.length === 0) {
        this.log('\n🎉 All Pull Requests have been successfully merged!');
        this.log('The main branch now contains all the latest changes and improvements.');
      } else {
        this.log('\n⚠️ Some Pull Requests could not be merged automatically.');
        this.log('Manual intervention may be required for the failed PRs.');
      }
      
    } catch (error) {
      this.log(`🚨 An error occurred during PR merge automation: ${error.message}`);
    }
  }
}

if (require.main === module) {
  const automation = new PRMergeAutomation();
  automation.run().catch(console.error);
}

module.exports = PRMergeAutomation;