#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixed PR Merger - Handling Push Issues Properly');
console.log('
class FixedPRMerger {
  constructor() {
    this.processedBranches = [];
    this.mergedBranches = [];
    this.failedBranches = [];
    this.skippedBranches = [];
    this.conflictsResolved = 0;
    this.startTime = Date.now();
    this.batchSize = 1; // Process one at a time to avoid conflicts
    this.maxRetries = 2;
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runCommand(command, description, retries = 0) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        maxBuffer: 1024 * 1024 * 10, // 10MB buffer
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      if (
        retries < this.maxRetries &&
        (error.message.includes('ENOBUFS') || error.message.includes('timeout'))
      ) {
        this.log(
          `⚠️  Error, retrying (${retries + 1}/${this.maxRetries})`,
          'warning'
        );
        await new Promise(resolve => setTimeout(resolve, 3000));
        return this.runCommand(command, description, retries + 1);
      }
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getCriticalBranches() {
    // Focus on the most critical branches first
    const criticalBranches = [
      '0parff-codex/centralize-api-error-handling-and-add-errorboundary',
      '0t8m4m-codex/update-project-color-palette',
      '14gqd5-codex/implement-checkout-flow-with-auth-redirect',
      '1dcwqi-codex/implement-global-pricing-with-currency-selection',
      '1fjs4s-codex/implement-instant-messaging-for-negotiations',
      '1nq1ky-codex/render-talent-profiles-with-error-states',
      '1sqc9r-codex/implement-light/dark-theme-with-persistence',
      '1tg4fy-codex/support-metric--imperial-units',
      '22xuo1-codex/implement-wishlist-functionality',
      '24727i-codex/implement-stripe-checkout-flow',
      '2k1ucv-codex/integrate-stripe-test-mode-checkout',
      '2xbrce-codex/introduce-automated-testing-with-jest-and-cypress',
      '306ipd-codex/add-new-products-page-with-10-items',
      '3bssgk-codex/disable-theme-toggle-and-set-default-dark-theme',
    ];

    this.log(
      `Found ${criticalBranches.length} critical branches to process first`
    );
    return criticalBranches;
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Always start with a fresh pull of main
      await this.runCommand('git checkout main', 'Switching to main');
      await this.runCommand(
        'git pull --rebase origin main',
        'Pulling latest main'
      );

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Checkout the branch
      await this.runCommand(
        `git checkout ${branchName}`,
        `Checking out ${branchName}`
      );

      // Try to merge main into the branch
      try {
        await this.runCommand(
          'git merge main --no-ff -m "Merge main into ' + branchName + '"',
          `Merging main into ${branchName}`
        );
      } catch (mergeError) {
        this.log(
          `Merge conflicts detected in ${branchName}, resolving...`,
          'warning'
        );

        // Resolve conflicts automatically
        await this.resolveConflicts(branchName);

        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand(
          `git commit -m "Resolve merge conflicts in ${branchName}"`,
          'Committing resolved conflicts'
        );
        this.conflictsResolved++;
      }

      // Push the updated branch
      await this.runCommand(
        `git push origin ${branchName}`,
        `Pushing updated ${branchName}`
      );

      // Switch back to main and pull latest changes
      await this.runCommand('git checkout main', 'Switching back to main');
      await this.runCommand(
        'git pull --rebase origin main',
        'Pulling latest main before merge'
      );

      // Merge the branch into main
      await this.runCommand(
        `git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`,
        `Merging ${branchName} into main`
      );

      // Push main with force-with-lease to handle any race conditions
      await this.runCommand(
        'git push --force-with-lease origin main',
        'Pushing updated main'
      );

      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged ${branchName} into main`, 'success');

      // Delete the remote branch
      try {
        await this.runCommand(
          `git push origin --delete ${branchName}`,
          `Deleting remote branch ${branchName}`
        );
      } catch (deleteError) {
        this.log(
          `Warning: Could not delete remote branch ${branchName}`,
          'warning'
        );
      }
    } catch (error) {
      this.failedBranches.push({ branch: branchName, error: error.message });
      this.log(`❌ Failed to process ${branchName}: ${error.message}`, 'error');

      // Switch back to main on error
      try {
        await this.runCommand(
          'git checkout main',
          'Switching back to main after error'
        );
        await this.runCommand(
          'git pull --rebase origin main',
          'Pulling latest main after error'
        );
      } catch (checkoutError) {
        this.log(
          `Error switching back to main: ${checkoutError.message}`,
          'error'
        );
      }
    }
  }

  async resolveConflicts(branchName) {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 5, // 5MB buffer
      })
        .trim()
        .split('\n')
        .filter(f => f);

      this.log(
        `Resolving conflicts in ${conflictFiles.length} files for ${branchName}`
      );

      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file);
        }
      }
    } catch (error) {
      this.log(
        `Error resolving conflicts in ${branchName}: ${error.message}`,
        'error'
      );
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let resolvedContent = content;

      // Strategy: Keep our changes (HEAD) for most conflicts
      resolvedContent = resolvedContent.replace(
        /\n(.*?)\n        '$1'
      );

      // Handle any remaining conflict markers
      resolvedContent = resolvedContent.replace(
        /\n.*?\n        ''
      );
      resolvedContent = resolvedContent.replace(
        /        ''
      );

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.log(`✅ Resolved conflicts in: ${filePath}`);
    } catch (error) {
      this.log(
        `❌ Error resolving conflicts in ${filePath}: ${error.message}`,
        'error'
      );
    }
  }

  async runAutomation() {
    try {
      this.log('Starting fixed PR merge automation...');

      // Get critical branches first
      const branches = await this.getCriticalBranches();

      if (branches.length === 0) {
        this.log('No branches to process', 'info');
        return;
      }

      // Process branches one at a time
      for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        this.log(`Processing branch ${i + 1}/${branches.length}: ${branch}`);

        try {
          await this.processBranch(branch);
          // Small delay between branches
          await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
          this.log(`Failed to process ${branch}: ${error.message}`, 'error');
        }
      }

      // Generate final report
      this.generateReport();
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'error');
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
        conflictsResolved: this.conflictsResolved,
        duration: `${duration} seconds`,
      },
      processedBranches: this.processedBranches,
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
      timestamp: new Date().toISOString(),
    };

    // Save report to file
    fs.writeFileSync(
      'fixed-pr-merge-report.json',
      JSON.stringify(report, null, 2)
    );

    // Display summary
    console.log('\n🎉 Fixed PR Merge Complete!');
    console.log('    console.log(`Total branches processed: ${this.processedBranches.length}`);
    console.log(`Successfully merged: ${this.mergedBranches.length}`);
    console.log(`Failed branches: ${this.failedBranches.length}`);
    console.log(`Conflicts resolved: ${this.conflictsResolved}`);
    console.log(`Duration: ${duration} seconds`);

    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`);
      });
    }

    console.log('\n📊 Detailed report saved to: fixed-pr-merge-report.json');
  }
}

// Run the automation
const automation = new FixedPRMerger();
automation
  .runAutomation()
  .then(() => {
    console.log('\n🚀 Fixed PR merge automation completed!');
  })
  .catch(error => {
    console.error('Automation failed:', error.message);
    process.exit(1);
  });
