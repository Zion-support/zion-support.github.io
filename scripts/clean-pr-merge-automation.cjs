#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Clean PR Merge Automation System');

class CleanPRMergeAutomation {
  constructor() {
    this.processedBranches = [];
    this.mergedBranches = [];
    this.failedBranches = [];
    this.skippedBranches = [];
    this.conflictsResolved = 0;
    this.startTime = Date.now();
    this.projectRoot = process.cwd();
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
        cwd: this.projectRoot
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getPriorityBranches() {
    try {
      const result = await this.runCommand('git branch -r', 'Getting remote branches');
      const branches = result.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD') && branch.startsWith('origin/'))
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => !branch.includes('cursor/fix-netlify-build-and-merge-to-main'));

      // Prioritize branches with specific keywords
      const priorityKeywords = [
        'enhance-app-clean-merge',
        'enhance-app-services-and-website-with-futuristic-design',
        'enhance-app-with-micro-saas',
        'enhance-app-with-new-services',
        'deploy-autonomous-cloud-automations',
        'develop-autonomous-cloud-agents',
        'check-fix-push-and-merge-to-main',
        'automate-test-fix-improve-and-merge-code'
      ];

      const priorityBranches = branches.filter(branch =>
        priorityKeywords.some(keyword => branch.includes(keyword))
      ).slice(0, 20); // Take first 20 priority branches

      this.log(`Found ${priorityBranches.length} priority branches to process`);
      return priorityBranches;
    } catch (error) {
      this.log(`Error getting priority branches: ${error.message}`, 'error');
      return [];
    }
  }

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Check if branch exists locally, if not create it
      try {
        await this.runCommand(`git checkout -b ${branchName} origin/${branchName}`, `Creating and checking out branch ${branchName}`);
      } catch (error) {
        try {
          await this.runCommand(`git checkout ${branchName}`, `Checking out existing branch ${branchName}`);
        } catch (checkoutError) {
          this.log(`Branch ${branchName} doesn't exist locally or remotely, skipping`, 'warning');
          this.skippedBranches.push(branchName);
          return;
        }
      }

      // Try to merge main into the branch
      try {
        await this.runCommand('git merge origin/main', `Merging main into ${branchName}`);
        this.log(`✅ Successfully merged main into ${branchName}`, 'success');
      } catch (mergeError) {
        this.log(`Merge conflicts detected in ${branchName}, resolving...`, 'warning');
        
        // Check if there are actual conflicts
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
          encoding: 'utf8'
        }).trim().split('\n').filter(f => f);

        if (conflictFiles.length === 0) {
          this.log(`No actual conflicts found in ${branchName}, skipping commit`, 'info');
          this.skippedBranches.push(branchName);
          await this.runCommand('git checkout main', 'Switching back to main');
          return;
        }

        // Resolve conflicts automatically
        await this.resolveConflicts(branchName);

        // Check if there are changes to commit
        const changesResult = execSync('git diff --cached --name-only', { encoding: 'utf8' });
        if (changesResult.trim() === '') {
          this.log(`No changes to commit in ${branchName}, skipping commit`, 'info');
          this.skippedBranches.push(branchName);
          await this.runCommand('git checkout main', 'Switching back to main');
          return;
        }

        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand(`git commit -m "Resolve merge conflicts with main branch"`, 'Committing resolved conflicts');
        this.conflictsResolved++;
      }

      // Push the updated branch
      await this.runCommand(`git push origin ${branchName}`, `Pushing updated ${branchName}`);

      // Switch back to main
      await this.runCommand('git checkout main', 'Switching back to main');

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
    console.log(`Total branches processed: ${this.processedBranches.length}`);
    console.log(`Successfully merged: ${this.mergedBranches.length}`);
    console.log(`Failed branches: ${this.failedBranches.length}`);
    console.log(`Skipped branches: ${this.skippedBranches.length}`);
    console.log(`Conflicts resolved: ${this.conflictsResolved}`);
    console.log(`Duration: ${duration} seconds`);

    if (this.failedBranches.length > 0) {
      console.log('\n❌ Failed branches:');
      this.failedBranches.forEach(failure => {
        console.log(`  - ${failure.branch}: ${failure.error}`);
      });
    }

    if (this.skippedBranches.length > 0) {
      console.log('\n⏭️ Skipped branches:');
      this.skippedBranches.forEach(branch => {
        console.log(`  - ${branch}`);
      });
    }

    console.log('\n📊 Detailed report saved to: clean-pr-merge-report.json');
  }
}

// Run the automation
const automation = new CleanPRMergeAutomation();
automation.runAutomation().then(() => {
  console.log('\n🚀 Clean PR merge automation completed!');
}).catch(error => {
  console.error('Automation failed:', error.message);
  process.exit(1);
});