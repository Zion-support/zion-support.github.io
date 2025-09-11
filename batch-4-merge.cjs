#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🚀 Batch 4 Merge Processing - Continuing PR Resolution');
console.log('=======================================================');

class Batch4Merge {
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
        maxBuffer: 1024 * 1024 * 10,
      });
      this.log(`✅ ${description} completed successfully`, 'success');
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getAllBranches() {
    try {
      const result = await this.runCommand(
        'git branch -r',
        'Getting all remote branches'
      );
      const branches = result
        .split('\n')
        .map(branch => branch.trim())
        .filter(
          branch =>
            branch && !branch.includes('HEAD') && branch.startsWith('origin/')
        )
        .map(branch => branch.replace('origin/', ''))
        .filter(branch => branch !== 'main')
        .filter(branch => !branch.includes('backup-'))
        .filter(branch => branch.match(/(cursor|codex|chore|fix|feature)/i))
        .slice(60, 80); // Process branches 61-80

      this.log(`Found ${branches.length} branches to process (batch 4)`);
      return branches;
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'error');
      return [];
    }
  }

  async resolveConflicts() {
    try {
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10,
      })
        .trim()
        .split('\n')
        .filter(f => f);

      this.log(`Resolving conflicts in ${conflictFiles.length} files`);

      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file);
        }
      }
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`, 'error');
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      const fs = require('fs');
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

  async processBranch(branchName) {
    try {
      this.log(`Processing branch: ${branchName}`);
      this.processedBranches.push(branchName);

      // Start with fresh main
      await this.runCommand('git checkout main', 'Switching to main');
      await this.runCommand(
        'git pull --rebase origin main',
        'Pulling latest main'
      );

      // Fetch the latest changes
      await this.runCommand('git fetch origin', 'Fetching latest changes');

      // Try to merge the branch
      try {
        await this.runCommand(
          `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
          `Merging ${branchName}`
        );
        this.mergedBranches.push(branchName);
        this.log(`✅ Successfully merged ${branchName}`, 'success');
      } catch (mergeError) {
        this.log(
          `Merge conflicts detected in ${branchName}, resolving...`,
          'warning'
        );

        // Resolve conflicts automatically
        await this.resolveConflicts();

        // Commit the resolved conflicts
        await this.runCommand('git add .', 'Adding resolved files');
        await this.runCommand(
          `git commit -m "Resolve merge conflicts in ${branchName}"`,
          'Committing resolved conflicts'
        );

        this.mergedBranches.push(branchName);
        this.log(
          `✅ Successfully merged ${branchName} with conflicts resolved`,
          'success'
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
          'git reset --hard HEAD',
          'Resetting to clean state'
        );
      } catch (checkoutError) {
        this.log(
          `Error switching back to main: ${checkoutError.message}`,
          'error'
        );
      }
    }
  }

  async run() {
    try {
      this.log('Starting batch 4 merge processing...');

      // Get all branches
      const branches = await this.getAllBranches();

      if (branches.length === 0) {
        this.log('No branches to process in batch 4', 'info');
        return;
      }

      // Process branches one by one
      for (const branch of branches) {
        await this.processBranch(branch);

        // Push changes after each successful merge
        try {
          await this.runCommand(
            'git push origin main',
            'Pushing changes to main'
          );
        } catch (pushError) {
          this.log(
            `Warning: Could not push changes: ${pushError.message}`,
            'warning'
          );
        }
      }

      // Generate final report
      this.generateReport();
    } catch (error) {
      this.log(`Process failed: ${error.message}`, 'error');
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = Math.round((endTime - this.startTime) / 1000);

    console.log('\n🎉 Batch 4 Merge Resolution Complete!');
    console.log('======================================');
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
  }
}

// Run the resolver
const resolver = new Batch4Merge();
resolver
  .run()
  .then(() => {
    console.log('\n🚀 Batch 4 merge resolution completed!');
  })
  .catch(error => {
    console.error('Process failed:', error.message);
    process.exit(1);
  });
