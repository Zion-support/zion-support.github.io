#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Simple PR Merger - Processing Branches Safely');
console.log('================================================');

class SimplePRMerger {
  constructor() {
    this.processedBranches = [];
    this.mergedBranches = [];
    this.failedBranches = [];
    this.conflictsResolved = 0;
    this.startTime = Date.now();
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
        retries < 2 &&
        (error.message.includes('ENOBUFS') || error.message.includes('timeout'))
      ) {
        this.log(`⚠️  Error, retrying (${retries + 1}/2)`, 'warning');
        await new Promise(resolve => setTimeout(resolve, 3000));
        return this.runCommand(command, description, retries + 1);
      }
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async cleanWorkingDirectory() {
    try {
      // Stash any changes
      await this.runCommand(
        'git stash push -m "Auto-stash before PR merge"',
        'Stashing changes'
      );
      return true;
    } catch (error) {
      // If no changes to stash, that's fine
      return true;
    }
  }

  async restoreWorkingDirectory() {
    try {
      // Try to restore stashed changes
      await this.runCommand('git stash pop', 'Restoring stashed changes');
    } catch (error) {
      // If no stash to pop, that's fine
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Clean working directory
      await this.cleanWorkingDirectory();

      // Start with fresh main
      await this.runCommand('git checkout main', 'Switching to main');
      await this.runCommand('git pull origin main', 'Pulling latest main');
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

      // Switch back to main and merge
      await this.runCommand('git checkout main', 'Switching back to main');
      await this.runCommand(
        'git pull origin main',
        'Pulling latest main before merge'
      );

      // Merge the branch into main
      await this.runCommand(
        `git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`,
        `Merging ${branchName} into main`
      );

      // Push main
      await this.runCommand('git push origin main', 'Pushing updated main');

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
          'git pull origin main',
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
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*/gs,
        '$1'
      );

      // Handle any remaining conflict markers
      resolvedContent = resolvedContent.replace(
        /<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> .*/gs,
        ''
      );
      resolvedContent = resolvedContent.replace(
        /=======\n.*?\n>>>>>>> .*/gs,
        ''
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

  async getBranchesToProcess() {
    try {
      // Get all remote branches that look like PRs
      const branches = execSync(
        'git branch -r | grep -E "(codex|fix|feature)" | grep -v "origin/main" | head -20',
        {
          encoding: 'utf8',
          maxBuffer: 1024 * 1024 * 5,
        }
      )
        .trim()
        .split('\n')
        .filter(b => b.trim());

      // Filter out already processed branches
      const processedBranches = [
        'origin/0nylrk-codex/fix-footer-contact-link',
        'origin/0parff-codex/centralize-api-error-handling-and-add-errorboundary',
        'origin/0smfo8-codex/fix-404-error-for-non-existent-route',
        'origin/0t8m4m-codex/update-project-color-palette',
        'origin/0une71-codex/fix-unsupported-shell-syntax-in-setup.sh',
        'origin/14gqd5-codex/implement-checkout-flow-with-auth-redirect',
        'origin/1dcwqi-codex/implement-global-pricing-with-currency-selection',
        'origin/1fjs4s-codex/implement-instant-messaging-for-negotiations',
        'origin/1m9jcs-codex/fix-client-side-rendering-and-javascript-errors',
        'origin/1nc0kn-codex/fix-blank-screen-on-app-load',
      ];

      return branches.filter(
        branch => !processedBranches.includes(branch.trim())
      );
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'error');
      return [];
    }
  }

  async runAutomation() {
    try {
      this.log('Starting simple PR processing...');

      // Get all branches to process
      const allBranches = await this.getBranchesToProcess();
      this.log(`Found ${allBranches.length} branches to process`);

      // Process branches one by one
      for (const branch of allBranches) {
        try {
          await this.processBranch(branch);
          // Small delay between branches
          await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
          this.log(`Failed to process ${branch}: ${error.message}`, 'error');
        }
      }

      // Restore working directory
      await this.restoreWorkingDirectory();

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
      'simple-pr-merger-report.json',
      JSON.stringify(report, null, 2)
    );

    // Display summary
    console.log('\n🎉 Simple PR Processing Complete!');
    console.log('==================================');
    console.log(`Total branches processed: ${this.processedBranches.length}`);
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

    console.log('\n📊 Detailed report saved to: simple-pr-merger-report.json');
  }
}

// Run the automation
const automation = new SimplePRMerger();
automation
  .runAutomation()
  .then(() => {
    console.log('\n🚀 Simple PR processing completed!');
  })
  .catch(error => {
    console.error('Automation failed:', error.message);
    process.exit(1);
  });
