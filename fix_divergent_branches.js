#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fix Divergent Branches');
console.log('==========================');

class DivergentBranchFixer {
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

  async runCommand(command, description, options = {}) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 30000,
        ...options
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async configureGit() {
    try {
      // Configure git to use merge strategy for pulls
      await this.runCommand('git config pull.rebase false', 'Configuring git pull strategy to merge');
      await this.runCommand('git config merge.ours.driver true', 'Configuring merge strategy');
      this.log('✅ Git configuration completed', 'success');
    } catch (error) {
      this.log(`Warning: Could not configure git: ${error.message}`, 'warning');
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

      // Try to pull main with merge strategy
      try {
        await this.runCommand('git pull origin main --no-rebase', `Pulling main into ${branchName}`);
        this.log(`✅ Successfully pulled main into ${branchName}`, 'success');
      } catch (pullError) {
        this.log(`Pull conflicts detected in ${branchName}, resolving...`, 'warning');
        
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
      await this.runCommand('git pull origin main --no-rebase', 'Pulling latest main changes');

      // Merge the branch into main
      await this.runCommand(`git merge ${branchName} --no-ff`, `Merging ${branchName} into main`);
      
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
      if (!fs.existsSync(filePath)) {
        this.log(`File ${filePath} does not exist, skipping`, 'warning');
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      let resolvedContent = content;

      // Strategy: Keep HEAD changes for most conflicts
      resolvedContent = resolvedContent.replace(
        /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*/g,
        '$1'
      );

      // Clean up any remaining conflict markers
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n/g, '');
      resolvedContent = resolvedContent.replace(/=======\n/g, '');
      resolvedContent = resolvedContent.replace(/>>>>>>> [^\n]*\n/g, '');
      
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts in: ${filePath}`);

    } catch (error) {
      this.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'error');
    }
  }

  async runFix() {
    try {
      this.log('Starting divergent branch fix...');

      // Configure git first
      await this.configureGit();

      // List of branches that failed due to divergent branches
      const failedBranches = [
        '0parff-codex/centralize-api-error-handling-and-add-errorboundary',
        '0smfo8-codex/fix-404-error-for-non-existent-route',
        '0t8m4m-codex/update-project-color-palette',
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
        '22xuo1-codex/implement-wishlist-functionality',
        '24727i-codex/implement-stripe-checkout-flow',
        '2503nr-codex/fix-ts2614-error-with-suspense-import',
        '26ywwb-codex/fix-client-side-rendering-and-javascript-errors'
      ];

      this.log(`Processing ${failedBranches.length} branches that failed due to divergent branches`);

      // Process branches one by one
      for (const branch of failedBranches) {
        await this.processBranch(branch);
        
        // Small delay between branches
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      // Generate final report
      this.generateReport();

    } catch (error) {
      this.log(`Divergent branch fix failed: ${error.message}`, 'error');
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
    fs.writeFileSync('divergent-branch-fix-report.json', JSON.stringify(report, null, 2));

    // Display summary
    console.log('\n🎉 Divergent Branch Fix Complete!');
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

    console.log('\n📊 Detailed report saved to: divergent-branch-fix-report.json');
  }
}

// Run the fixer
const fixer = new DivergentBranchFixer();
fixer.runFix().then(() => {
  console.log('\n🚀 Divergent branch fix completed!');
}).catch(error => {
  console.error('Divergent branch fix failed:', error.message);
  process.exit(1);
});