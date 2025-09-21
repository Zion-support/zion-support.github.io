#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Merge Specific Branches');
console.log('==========================');

class BranchMerger {
  constructor() {
    this.processedBranches = [];
    this.mergedBranches = [];
    this.failedBranches = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 30000
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`Merging branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Fetch latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Switch to main and pull latest
      await this.runCommand('git checkout main', 'Switching to main branch');
      await this.runCommand('git pull origin main', 'Pulling latest main changes');

      // Merge the branch into main
      await this.runCommand(`git merge origin/${branchName}`, `Merging ${branchName} into main`);
      
      // Push updated main
      await this.runCommand('git push origin main', 'Pushing updated main');

      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged ${branchName} into main`, 'success');

      // Delete the remote branch
      try {
        await this.runCommand(`git push origin --delete ${branchName}`, `Deleting remote branch ${branchName}`);
        this.log(`✅ Deleted remote branch ${branchName}`, 'success');
      } catch (deleteError) {
        this.log(`Warning: Could not delete remote branch ${branchName}`, 'warning');
      }

    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message });
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`, 'error');
    }
  }

  async processBranches() {
    try {
      this.log('Starting branch merge process...');

      // List of branches to merge (based on previous reports)
      const branchesToMerge = [
        // Add any specific branches that need to be merged
        // These can be identified from GitHub or previous reports
      ];

      // If no specific branches, get all remote branches
      if (branchesToMerge.length === 0) {
        try {
          const result = await this.runCommand('git branch -r', 'Getting remote branches');
          const allBranches = result.split('\n')
            .map(branch => branch.trim())
            .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
            .map(branch => branch.replace('origin/', ''))
            .filter(branch => branch !== 'main')
            .filter(branch => branch.includes('codex/') || branch.includes('cursor/'))
            .slice(0, 10); // Process first 10 branches

          branchesToMerge.push(...allBranches);
        } catch (error) {
          this.log(`Error getting branches: ${error.message}`, 'error');
        }
      }

      this.log(`Found ${branchesToMerge.length} branches to merge`);

      // Process each branch
      for (const branch of branchesToMerge) {
        await this.mergeBranch(branch);
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Generate report
      this.generateReport();

    } catch (error) {
      this.log(`Process failed: ${error.message}`, 'error');
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = Math.round((endTime - this.startTime) / 1000);

    const report = {
      summary: {
        totalBranches: this.processedBranches.length,
        successfullyMerged: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        duration: `${duration} seconds`
      },
      processedBranches: this.processedBranches,
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString()
    };

    // Save report to file
    fs.writeFileSync('branch-merge-report.json', JSON.stringify(report, null, 2));

    // Display summary
    console.log('\n🎉 Branch Merge Complete!');
    console.log('=========================');
    console.log(`Total branches processed: ${this.processedBranches.length}`);
    console.log(`Successfully merged: ${this.mergedBranches.length}`);
    console.log(`Failed branches: ${this.failedBranches.length}`);
    console.log(`Duration: ${duration} seconds`);
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`);
      });
    }

    console.log('\n📊 Detailed report saved to: branch-merge-report.json');
  }
}

// Run the merger
const merger = new BranchMerger();
merger.processBranches().then(() => {
  console.log('\n🚀 Branch merge process completed!');
}).catch(error => {
  console.error('Merge process failed:', error.message);
  process.exit(1);
});