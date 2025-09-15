#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

class BranchMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = 'merge-all-branches.log';
    this.mergedBranches = [];
    this.failedBranches = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        stdio: 'pipe',
        encoding: 'utf8',
        cwd: this.projectRoot,
      });
      this.log(`✅ Completed: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async getRemoteBranches() {
    try {
      const result = await this.runCommand(
        'git branch -r',
        'Get remote branches'
      );
      const branches = result
        .split('\n')
        .map(branch => branch.trim())
        .filter(
          branch =>
            branch && !branch.includes('HEAD') && !branch.includes('main')
        )
        .map(branch => branch.replace('origin/', ''));

      // Filter for important branches (automation, enhancement, build, etc.)
      const importantBranches = branches.filter(
        branch =>
          branch.includes('automate') ||
          branch.includes('enhance') ||
          branch.includes('build') ||
          branch.includes('fix') ||
          branch.includes('improve') ||
          branch.includes('merge')
      );

      this.log(`Found ${importantBranches.length} important branches to merge`);
      return importantBranches;
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`🔄 Attempting to merge branch: ${branchName}`);

      // Fetch the branch
      await this.runCommand(
        `git fetch origin ${branchName}`,
        `Fetch branch ${branchName}`
      );

      // Try to merge
      await this.runCommand(
        `git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`,
        `Merge branch ${branchName}`
      );

      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged: ${branchName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`, 'ERROR');

      // Try to resolve conflicts automatically
      try {
        this.log(`🔧 Attempting to resolve conflicts for ${branchName}`);

        // Accept incoming changes for most conflicts
        await this.runCommand(
          'git checkout --theirs .',
          `Accept incoming changes for ${branchName}`
        );
        await this.runCommand(
          'git add .',
          `Stage resolved changes for ${branchName}`
        );
        await this.runCommand(
          `git commit -m "Resolve merge conflicts for ${branchName}"`,
          `Commit resolved conflicts for ${branchName}`
        );

        this.mergedBranches.push(branchName);
        this.log(
          `✅ Successfully resolved conflicts and merged: ${branchName}`
        );
        return true;
      } catch (resolveError) {
        this.log(
          `❌ Could not resolve conflicts for ${branchName}: ${resolveError.message}`,
          'ERROR'
        );
        this.failedBranches.push(branchName);

        // Reset to clean state
        try {
          await this.runCommand(
            'git merge --abort',
            `Abort merge for ${branchName}`
          );
        } catch (abortError) {
          this.log(`Warning: Could not abort merge for ${branchName}`, 'WARN');
        }

        return false;
      }
    }
  }

  async mergeAllBranches() {
    this.log('🚀 Starting comprehensive branch merge process');

    // Ensure we're on main branch
    await this.runCommand('git checkout main', 'Switch to main branch');
    await this.runCommand('git pull origin main', 'Pull latest main');

    const branches = await this.getRemoteBranches();

    // Process branches in batches to avoid overwhelming the system
    const batchSize = 5;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      this.log(
        `📦 Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(branches.length / batchSize)}`
      );

      for (const branch of batch) {
        await this.mergeBranch(branch);

        // Push changes after each successful merge
        if (this.mergedBranches.includes(branch)) {
          try {
            await this.runCommand(
              'git push origin main',
              `Push merged changes for ${branch}`
            );
          } catch (pushError) {
            this.log(
              `Warning: Could not push changes for ${branch}: ${pushError.message}`,
              'WARN'
            );
          }
        }
      }
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalBranches: this.mergedBranches.length + this.failedBranches.length,
        successfullyMerged: this.mergedBranches.length,
        failedToMerge: this.failedBranches.length,
        successRate: `${((this.mergedBranches.length / (this.mergedBranches.length + this.failedBranches.length)) * 100).toFixed(2)}%`,
      },
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
    };

    fs.writeFileSync('merge-report.json', JSON.stringify(report, null, 2));

    this.log('\n📊 MERGE SUMMARY:');
    this.log(`✅ Successfully merged: ${this.mergedBranches.length} branches`);
    this.log(`❌ Failed to merge: ${this.failedBranches.length} branches`);
    this.log(`📈 Success rate: ${report.summary.successRate}`);

    if (this.failedBranches.length > 0) {
      this.log('\n❌ Failed branches:');
      this.failedBranches.forEach(branch => this.log(`  - ${branch}`));
    }
  }
}

// Run the merger
const merger = new BranchMerger();
merger.mergeAllBranches().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
