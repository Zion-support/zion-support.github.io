#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔄 Retry Failed PR Merges');
console.log('=========================');

class RetryFailedMerges {
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

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Checkout the branch
      await this.runCommand(`git checkout ${branchName}`, `Checking out branch ${branchName}`);

      // Reset to clean state
      await this.runCommand('git reset --hard HEAD', 'Resetting branch to clean state');

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge origin/main', `Merging main into ${branchName}`);
        this.log(`✅ Successfully merged main into ${branchName}`, 'success');
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning');
        
        // Resolve conflicts automatically
        await this.resolveConflicts(branchName);
        
        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand(`git commit -m "Resolve merge conflicts with main branch"`, 'Committing resolved conflicts');
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`);

      // Switch back to main
      await this.runCommand('git checkout main', 'Switching back to main');

      // Pull latest changes
      await this.runCommand('git pull origin main', 'Pulling latest main changes');

      // Merge the branch into main
      await this.runCommand(`git merge ${branchName}`, `Merging ${branchName} into main`);
      
      // Push main
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
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error');
      
      // Switch back to main if we're not already there
      try {
        await this.runCommand('git checkout main', 'Switching back to main after error');
      } catch (checkoutError) {
        this.log(`Error switching back to main: ${checkoutError.message}`, 'error');
      }
    }
  }

  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      this.log(`Resolving conflicts in ${conflictFiles.length} files for ${branchName}`);

      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file);
        }
      }

    } catch (error) {
      this.log(`Error resolving conflicts in ${branchName}: ${error.message}`, 'error');
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let resolvedContent = content;

      // Strategy: Keep our changes (HEAD) for most conflicts
      // Remove conflict markers and keep the HEAD version
      resolvedContent = resolvedContent.replace(
      
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts in: ${filePath}`);

    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error');
    }
  }

  async runRetry() {
    try {
      this.log('Starting retry of failed PR merges...');

      // List of failed branches to retry
      const failedBranches = [
        '0nylrk-codex/fix-footer-contact-link',
        '0parff-codex/centralize-api-error-handling-and-add-errorboundary',
        '0smfo8-codex/fix-404-error-for-non-existent-route',
        '0une71-codex/fix-unsupported-shell-syntax-in-setup.sh',
        '14gqd5-codex/implement-checkout-flow-with-auth-redirect',
        '1dcwqi-codex/implement-global-pricing-with-currency-selection',
        '1fjs4s-codex/implement-instant-messaging-for-negotiations',
        '1m9jcs-codex/fix-client-side-rendering-and-javascript-errors',
        '1nc0kn-codex/fix-blank-screen-on-app-load',
        '1nq1ky-codex/render-talent-profiles-with-error-states',
        '1ry69n-codex/fix-npm-eio-error-during-install',
        '1sqc9r-codex/implement-light/dark-theme-with-persistence',
        '1tg4fy-codex/support-metric--imperial-units',
        '1wzbwr-codex/fix-typescript-errors-in-files',
        '2025-comprehensive-services-expansion',
        '22xuo1-codex/implement-wishlist-functionality',
        '24727i-codex/implement-stripe-checkout-flow'
      ];

      // Process branches one by one
      for (const branch of failedBranches) {
        await this.processBranch(branch);
        
        // Small delay between branches
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      // Generate final report
      this.generateReport();

    } catch (error) {
      this.log(`Retry failed: ${error.message}`, 'error');
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
    fs.writeFileSync('retry-failed-merges-report.json', JSON.stringify(report, null, 2));

    // Display summary
    console.log('\n🎉 Retry Failed Merges Complete!');
    console.log('==================================');
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

    console.log('\n📊 Detailed report saved to: retry-failed-merges-report.json');
  }
}

// Run the retry
const retry = new RetryFailedMerges();
retry.runRetry().then(() => {
  console.log('\n🚀 Retry failed merges completed!');
}).catch(error => {
  console.error('Retry failed:', error.message);
  process.exit(1);
});