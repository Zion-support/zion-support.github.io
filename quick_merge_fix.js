#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('⚡ Quick Merge Fix');
console.log('==================');

class QuickMergeFix {
  constructor() {
    this.mergedBranches = [];
    this.failedBranches = [];
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

  async mergeSpecificBranches() {
    try {
      this.log('Starting quick merge fix...');

      // List of branches that commonly need merging
      const branchesToMerge = [
        'cursor/fix-netlify-build-and-merge-to-main-a40a',
        // Add any other specific branches that need immediate attention
      ];

      // Fetch latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Switch to main and pull latest
      await this.runCommand('git checkout main', 'Switching to main');
      await this.runCommand('git pull origin main', 'Pulling latest main');

      for (const branch of branchesToMerge) {
        try {
          this.log(`Attempting to merge ${branch}...`);
          
          // Try to merge the branch
          await this.runCommand(`git merge origin/${branch}`, `Merging ${branch}`);
          
          // Push updated main
          await this.runCommand('git push origin main', 'Pushing updated main');
          
          this.mergedBranches.push(branch);
          this.log(`✅ Successfully merged ${branch}`, 'success');

        } catch (error) {
          this.failedBranches.push({ branch, error: error.message });
          this.log(`❌ Failed to merge ${branch}: ${error.message}`, 'error');
        }
      }

      // Generate report
      this.generateReport();

    } catch (error) {
      this.log(`Quick merge fix failed: ${error.message}`, 'error');
    }
  }

  generateReport() {
    const report = {
      summary: {
        successfullyMerged: this.mergedBranches.length,
        failedBranches: this.failedBranches.length,
        timestamp: new Date().toISOString()
      },
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches
    };

    fs.writeFileSync('quick-merge-report.json', JSON.stringify(report, null, 2));

    console.log('\n⚡ Quick Merge Fix Complete!');
    console.log('============================');
    console.log(`Successfully merged: ${this.mergedBranches.length}`);
    console.log(`Failed branches: ${this.failedBranches.length}`);
    
    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`);
      });
    }

    console.log('\n📊 Report saved to: quick-merge-report.json');
  }
}

// Run the quick merge fix
const quickFix = new QuickMergeFix();
quickFix.mergeSpecificBranches().then(() => {
  console.log('\n⚡ Quick merge fix completed!');
}).catch(error => {
  console.error('Quick merge fix failed:', error.message);
  process.exit(1);
});