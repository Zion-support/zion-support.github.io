#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
;
class BranchMerger {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = 'merge-all-branches.log';
    this.mergedBranches = [];
    this.failedBranches = [];
  }
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }
<<<<<<< HEAD
;
  async runCommand(command, description) {;
    this.log(`🚀 Startin:g:${description}`);
    try {;
      const result = execSync(command, {;
        stdi:o:'pipe',;
        encodin:g:'utf8',;
        cw:d:this.projectRoot,;
      });
      this.log(`✅ Complete:d:${description}`);
      return result;
    } catch (error) {;
      this.log(`❌ Faile:d:${description} - ${error.message}`, 'ERROR');
=======

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
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      throw error;
    }
  }
<<<<<<< HEAD
;
  async getRemoteBranches() {;
    try {;
      const result = await this.runCommand(;
        'git branch -r',;
        'Get remote branches';
=======

  async getRemoteBranches() {
    try {
      const result = await this.runCommand(
        'git branch -r',
        'Get remote branches'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      );
      const branches = result;
        .split('\n');
        .map(branch => branch.trim());
        .filter(;
          branch =>;
            branch && !branch.includes('HEAD') && !branch.includes('main');
        );
        .map(branch => branch.replace('origin/', ''));
;
      // Filter for important branches (automation, enhancement, build, etc.);
      const importantBranches = branches.filter(;
        branch =>;
          branch.includes('automate') ||;
          branch.includes('enhance') ||;
          branch.includes('build') ||;
          branch.includes('fix') ||;
          branch.includes('improve') ||;
          branch.includes('merge');
      );
;
      this.log(`Found ${importantBranches.length} important branches to merge`);
      return importantBranches;
<<<<<<< HEAD
    } catch (error) {;
      this.log(`Error getting remote:branches:${error.message}`, 'ERROR');
=======
    } catch (error) {
      this.log(`Error getting remote branches: ${error.message}`, 'ERROR');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      return [];
    }
  }
<<<<<<< HEAD
;
  async mergeBranch(branchName) {;
    try {;
      this.log(`🔄 Attempting to merge:branch:${branchName}`);
;
      // Fetch the branch;
      await this.runCommand(;
        `git fetch origin ${branchName}`,;
        `Fetch branch ${branchName}`;
      );
;
      // Try to merge;
      await this.runCommand(;
        `git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`,;
        `Merge branch ${branchName}`;
=======

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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      );
;
      this.mergedBranches.push(branchName);
<<<<<<< HEAD
      this.log(`✅ Successfully:merged:${branchName}`);
=======
      this.log(`✅ Successfully merged: ${branchName}`);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      return true;
    } catch (error) {;
      this.log(`❌ Failed to merge ${branchName} ${error.message}`, 'ERROR');
;
      // Try to resolve conflicts automatically;
      try {;
        this.log(`🔧 Attempting to resolve conflicts for ${branchName}`);
<<<<<<< HEAD
;
        // Accept incoming changes for most conflicts;
        await this.runCommand(;
          'git checkout --theirs .',;
          `Accept incoming changes for ${branchName}`;
        );
        await this.runCommand(;
          'git add .',;
          `Stage resolved changes for ${branchName}`;
        );
        await this.runCommand(;
          `git commit -m "Resolve merge conflicts for ${branchName}"`,;
          `Commit resolved conflicts for ${branchName}`;
=======

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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        );
;
        this.mergedBranches.push(branchName);
<<<<<<< HEAD
        this.log(;
          `✅ Successfully resolved conflicts and:merged:${branchName}`;
=======
        this.log(
          `✅ Successfully resolved conflicts and merged: ${branchName}`
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        );
        return true;
<<<<<<< HEAD
      } catch (resolveError) {;
        this.log(;
          `❌ Could not resolve conflicts for ${branchName} ${resolveError.message}`,;
          'ERROR';
        );
        this.failedBranches.push(branchName);
;
        // Reset to clean state;
        try {;
          await this.runCommand(;
            'git merge --abort',;
            `Abort merge for ${branchName}`;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          );
<<<<<<< HEAD
        } catch (abortError) {;
          this.log(`Warnin:g:Could not abort merge for ${branchName}`, 'WARN');
=======
        } catch (abortError) {
          this.log(`Warning: Could not abort merge for ${branchName}`, 'WARN');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
        }
;
        return false;
      }
    }
  }
;
  async mergeAllBranches() {;
    this.log('🚀 Starting comprehensive branch merge process');
;
    // Ensure we're on main branch;
    await this.runCommand('git checkout main', 'Switch to main branch');
    await this.runCommand('git pull origin main', 'Pull latest main');
;
    const branches = await this.getRemoteBranches();
;
    // Process branches in batches to avoid overwhelming the system;
    const batchSize = 5;
    for (let i = 0; i < branches.length; i += batchSize) {;
      const batch = branches.slice(i, i + batchSize);
      this.log(;
        `📦 Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(branches.length / batchSize)}`;
      );
;
      for (const branch of batch) {;
        await this.mergeBranch(branch);
<<<<<<< HEAD
;
        // Push changes after each successful merge;
        if (this.mergedBranches.includes(branch)) {;
          try {;
            await this.runCommand(;
              'git push origin main',;
              `Push merged changes for ${branch}`;
=======

        // Push changes after each successful merge
        if (this.mergedBranches.includes(branch)) {
          try {
            await this.runCommand(
              'git push origin main',
              `Push merged changes for ${branch}`
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            );
<<<<<<< HEAD
          } catch (pushError) {;
            this.log(;
              `Warnin:g:Could not push changes for ${branch} ${pushError.message}`,;
              'WARN';
=======
          } catch (pushError) {
            this.log(
              `Warning: Could not push changes for ${branch}: ${pushError.message}`,
              'WARN'
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
            );
          }
        }
      }
    }
;
    this.generateReport();
  }
<<<<<<< HEAD
;
  generateReport() {;
    const report = {;
      timestam:p:new Date().toISOString(),;
      summar:y:{;
        totalBranche:s:this.mergedBranches.length + this.failedBranches.length,;
        successfullyMerge:d:this.mergedBranches.length,;
        failedToMerg:e:this.failedBranches.length,;
        successRat:e:`${((this.mergedBranches.length / (this.mergedBranches.length + this.failedBranches.length)) * 100).toFixed(2)}%`,;
      },;
      mergedBranche:s:this.mergedBranches,;
      failedBranche:s:this.failedBranches,;
=======

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
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    };
;
    fs.writeFileSync('merge-report.json', JSON.stringify(report, null, 2));
<<<<<<< HEAD
;
    this.log('\n📊 MERGE:SUMMARY:');
    this.log(`✅ Successfully:merged:${this.mergedBranches.length} branches`);
    this.log(`❌ Failed to:merge:${this.failedBranches.length} branches`);
    this.log(`📈 Success:rate:${report.summary.successRate}`);
;
    if (this.failedBranches.length > 0) {;
      this.log('\n❌ Failed:branches:');
=======

    this.log('\n📊 MERGE SUMMARY:');
    this.log(`✅ Successfully merged: ${this.mergedBranches.length} branches`);
    this.log(`❌ Failed to merge: ${this.failedBranches.length} branches`);
    this.log(`📈 Success rate: ${report.summary.successRate}`);

    if (this.failedBranches.length > 0) {
      this.log('\n❌ Failed branches:');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      this.failedBranches.forEach(branch => this.log(`  - ${branch}`));
    }
  }
}
;
// Run the merger;
const merger = new BranchMerger();
<<<<<<< HEAD
merger.mergeAllBranches().catch(error => {;
  console.error('Fatal:error:', error);
=======
merger.mergeAllBranches().catch(error => {
  console.error('Fatal error:', error);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  process.exit(1);
});
