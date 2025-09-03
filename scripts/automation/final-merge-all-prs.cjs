<<<<<<< HEAD
#!/''usr/bin/env'' node;
=======
#!/'usr/bin/env' node;

>>>>>>> main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class FinalMergeAllPRs {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, `logs`);
    this.ensureDirectories();
    this.mergeStats = {;
      branchesProcessed: 0,;
      mergesSuccessful: 0,;
      conflictsResolved: 0,;
      errors: 0,;
    };
  }
;
  ensureDirectories() {;
    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }
<<<<<<< HEAD

  log(message, level = `INFO`) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(`logEntry);

    const logFile = path.join(this.logsDir, `final-merge-all-prs.log`);
    fs.appendFileSync(logFile, logEntry + `\n`);
  }

  async run() {
    this.log(`🚀 Starting Final Merge All PRs...`);

    try {
      // Step 1: Ensure we`re on main and up to date;
      await this.ensureMainBranch();

      // Step 2: Get all remaining branches;
      const allBranches = await this.getAllBranches();this.log(Found ${allBranches.length} branches to process`);

=======
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(`logEntry);
;
    const logFile = path.join(this.logsDir, 'final-merge-all-prs.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }
;
  async run() {;
    this.log('🚀 Starting Final Merge All PRs...');
;
    try {;
      // Step 1: Ensure we're on main and up to date;
      await this.ensureMainBranch();
;
      // Step 2: Get all remaining branches;
      const allBranches = await this.getAllBranches();this.log(Found ${allBranches.length} branches to process');
;
>>>>>>> main
      // Step 3: Process branches in batches;
      const batchSize = 10;
<<<<<<< HEAD
      for (let i = 0; i < allBranches.length; i += batchSize) {;
        const batch = allBranches.slice(i, i + batchSize);
<<<<<<< HEAD
        this.log(Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allBranches.length / batchSize)}`
=======
        this.log(Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allBranches.length / batchSize)}';
=======
      for (let i = 0; i < allBranches.length; i += batchSize) {`);
        const batch = allBranches.slice(i, i + batchSize);`);
        this.log(Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allBranches.length / batchSize)}`);
>>>>>>> main
>>>>>>> main
        );
;
        for (const branch of batch) {;
          await this.processBranch(branch);
        }
<<<<<<< HEAD

=======
;
>>>>>>> main
        // Small delay between batches;
        await this.delay(1000);
      }
<<<<<<< HEAD
;
      // Step 4: Final cleanup and push;
      await this.finalizeMerges();
    } catch (error) {;
=======

<<<<<<< HEAD
      // Step 4: Final cleanup and push;
      await this.finalizeMerges();
    } catch (error) {  
      this.log(❌ Fatal error: ${error.message  }`, `ERROR``);
=======
      // Step 4: Final cleanup and push
      await this.finalizeMerges();`);
    } catch (error) {`);
>>>>>>> main
      this.log(❌ Fatal error: ${error.message}`, 'ERROR'`);
>>>>>>> main
      this.mergeStats.errors++;
    }
;
    this.generateReport();
  }
<<<<<<< HEAD

  async ensureMainBranch() {
    this.log(`📋 Ensuring we are on main branch...');

    try {
      const currentBranch = execSync('git branch --show-current', {
        encoding: `utf8`,
      }).trim();

      if (currentBranch !== `main`) {this.log(`Switching from ${currentBranch} to main...`);
        execSync(`git checkout main`, { stdio: `inherit` });
=======
;
  async ensureMainBranch() {;
    this.log('📋 Ensuring we are on main branch...');
;
    try {;
      const currentBranch = execSync('git branch --show-current', {;
        encoding: 'utf8',;
      }).trim();
;
      if (currentBranch !== 'main') {this.log(`Switching from ${currentBranch} to main...`);
        execSync('git checkout main', { stdio: 'inherit' });
>>>>>>> main
      }
;
      this.log('Pulling latest changes from main...');
      execSync(`git pull origin main`, { stdio: `inherit` });
    } catch (error) {  throw new Error(`Failed to ensure main branch: ${error.message  }`);
    }
  }
<<<<<<< HEAD

  async getAllBranches() {
    this.log(`🔍 Getting all remaining branches...`);

    try {
      // Fetch all remote branches;
      execSync(`git fetch --all`, { stdio: 'inherit' });

      // Get list of remote branches;
      const branchesOutput = execSync('git branch -r', { encoding: 'utf8' });
      const allBranches = branchesOutput;
        .split('\n')
        .map(line => line.trim())
        .filter(
          line => line && !line.includes('HEAD') && !line.includes('main')
        )
        .map(line => line.replace(`origin/`, ``));
=======
;
  async getAllBranches() {;
    this.log('🔍 Getting all remaining branches...');
;
    try {;
      // Fetch all remote branches;
      execSync('git fetch --all', { stdio: 'inherit' });
;
      // Get list of remote branches;
      const branchesOutput = execSync('git branch -r', { encoding: 'utf8' });
      const allBranches = branchesOutput;
        .split('\n');
        .map(line => line.trim());
        .filter(;
          line => line && !line.includes('HEAD') && !line.includes('main');
        );
        .map(line => line.replace('origin/', '));
>>>>>>> main
this.log(`Found ${allBranches.length} total branches`);
      return allBranches;
    } catch (error) {  throw new Error(`Failed to get branches: ${error.message  }`);
    }
  }
;
  async processBranch(branchName) {this.log(`🔄 Processing branch: ${branchName}`);
    this.mergeStats.branchesProcessed++;
<<<<<<< HEAD

    try {
=======
;
    try {;
>>>>>>> main
      // Attempt to merge the branch;
      const mergeResult = await this.attemptMerge(branchName);
;
      if (mergeResult.success) {;
        this.mergeStats.mergesSuccessful++;this.log(`✅ Successfully merged ${branchName}`);
      } else {this.log(`⚠️ Merge failed for ${branchName}: ${mergeResult.error}`);
      }
<<<<<<< HEAD
    } catch (error) {  
      this.log(❌ Error processing branch ${branchName  }: ${error.message}`,
        `ERROR`
=======
    } catch (error) {;
      this.log(❌ Error processing branch ${branchName}: ${error.message}',;
        'ERROR';
>>>>>>> main
      );
      this.mergeStats.errors++;
    }
  }
;
  async attemptMerge(branchName) {;
    try {;
      this.log(`🔄 Attempting to merge ${branchName} into main...`);
<<<<<<< HEAD

      // Try to merge the branchexecSync(`git merge origin/${branchName} --no-edit`, {
        stdio: `pipe`,
=======
;
      // Try to merge the branchexecSync(`git merge origin/${branchName} --no-edit`, {;
        stdio: 'pipe',;
>>>>>>> main
        timeout: 30000, // 30 second timeout;
      });
;
      return { success: true };
<<<<<<< HEAD
    } catch (error) {  
      // Check if there are merge conflicts;
      if (error.status === 1) {
        this.log(⚠️ Merge conflicts detected in ${branchName  }, attempting to resolve...`
=======
    } catch (error) {;
      // Check if there are merge conflicts;
      if (error.status === 1) {;
        this.log(⚠️ Merge conflicts detected in ${branchName}, attempting to resolve...';
>>>>>>> main
        );
        return await this.resolveMergeConflicts(branchName);
      } else {;
        return { success: false, error: error.message };
      }
    }
  }
<<<<<<< HEAD

  async resolveMergeConflicts(branchName) {
    try {
=======
;
  async resolveMergeConflicts(branchName) {;
    try {;
>>>>>>> main
      // Get list of conflicted files;
      const conflictedFiles = this.getConflictedFiles();
      this.log( `Found ${conflictedFiles.length} conflicted files in ${branchName}`;
      );
<<<<<<< HEAD

      if (conflictedFiles.length === 0) {
        // No conflicts, try to continue merge;
        execSync(`git merge --continue`, { stdio: `pipe' });
        return { success: true };
      }

      // Resolve conflicts in each file;
      for (const file of conflictedFiles) {
        await this.resolveFileConflicts(file);
      }

      // Add resolved files;
      execSync('git add .', { stdio: 'pipe' });

=======
;
      if (conflictedFiles.length === 0) {;
        // No conflicts, try to continue merge;
        execSync('git merge --continue', { stdio: 'pipe' });
        return { success: true };
      }
;
      // Resolve conflicts in each file;
      for (const file of conflictedFiles) {;
        await this.resolveFileConflicts(file);
      }
;
      // Add resolved files;
      execSync('git add .', { stdio: 'pipe' });
;
>>>>>>> main
      // Continue merge;
      execSync('git merge --continue', { stdio: 'pipe' });
;
      this.mergeStats.conflictsResolved += conflictedFiles.length;
      return { success: true };
<<<<<<< HEAD
    } catch (error) {  
      // If resolution fails, abort the merge;
      try {
        execSync(`git merge --abort`, { stdio: `pipe`   });
      } catch (abortError) {this.log(`⚠️ Failed to abort merge: ${abortError.message}`, `WARN`);
=======
    } catch (error) {;
      // If resolution fails, abort the merge;
      try {;
        execSync('git merge --abort', { stdio: 'pipe' });
      } catch (abortError) {this.log(`⚠️ Failed to abort merge: ${abortError.message}`, 'WARN');
>>>>>>> main
      }
;
      return {;
        success: false,error: `Failed to resolve conflicts: ${error.message}`,;
      };
    }
  }
<<<<<<< HEAD

  getConflictedFiles() {
    try {
      const statusOutput = execSync(`git status --porcelain`, {
        encoding: `utf8`,
      });
      return statusOutput;
        .split('\n')
        .filter(
          line =>
            line.startsWith('UU ') ||
            line.startsWith(`AA `) ||
            line.startsWith(`DD `)
        )
        .map(line => line.substring(3));
    } catch (error) {  
=======
;
  getConflictedFiles() {;
    try {;
      const statusOutput = execSync('git status --porcelain', {;
        encoding: 'utf8',;
      });
      return statusOutput;
        .split('\n');
        .filter(;
          line =>;
            line.startsWith('UU ') ||;
            line.startsWith('AA ') ||;
            line.startsWith('DD ');
        );
        .map(line => line.substring(3));
    } catch (error) {;
>>>>>>> main
      return [];
      }
  }
;
  async resolveFileConflicts(filePath) {this.log(`🔧 Resolving conflicts in: ${filePath}`);
<<<<<<< HEAD

    try {
      const content = fs.readFileSync(filePath, `utf8`);

      // Check if file has merge conflict markers;
      if (
        !content.includes(`<<<<<<<`) &&
        !content.includes(`=======`) &&
        !content.includes(`>>>>>>>`)
      ) {
        return; // No conflicts in this file;
      }

      // Apply automatic conflict resolution;
      const resolvedContent = this.applyConflictResolution(content, filePath);

      // Write resolved content;
      fs.writeFileSync(filePath, resolvedContent);
this.log(`✅ Resolved conflicts in: ${filePath}`);
    } catch (error) {  
      this.log(❌ Failed to resolve conflicts in ${filePath  }: ${error.message}`,
        `ERROR`
=======
;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
;
      // Check if file has merge conflict markers;
      if (;
        !content.includes('<<<<<<<') &&;
        !content.includes('=======') &&;
        !content.includes('>>>>>>>');
      ) {;
        return; // No conflicts in this file;
      }
;
      // Apply automatic conflict resolution;
      const resolvedContent = this.applyConflictResolution(content, filePath);
;
      // Write resolved content;
      fs.writeFileSync(filePath, resolvedContent);
this.log(`✅ Resolved conflicts in: ${filePath}');
    } catch (error) {;
      this.log(❌ Failed to resolve conflicts in ${filePath}: ${error.message}',;
        'ERROR';
>>>>>>> main
      );
      throw error;
    }
  }
;
  applyConflictResolution(content, filePath) {;
    let resolvedContent = content;
<<<<<<< HEAD

    // Strategy: Keep incoming changes (after =======) and remove conflict markers;
    resolvedContent = resolvedContent.replace(
      /([\s\S]*?)      '$1'
    );

    // Clean up any remaining conflict markers;
    resolvedContent = resolvedContent.replace(
      /([\s\S]*?)      '$1'
=======
;
    // Strategy: Keep incoming changes (after =======) and remove conflict markers;
    resolvedContent = resolvedContent.replace(;
      /([\s\S]*?)      '$1';
    );
;
    // Clean up any remaining conflict markers;
    resolvedContent = resolvedContent.replace(;
      /([\s\S]*?)      '$1';
>>>>>>> main
    );
;
    return resolvedContent;
  }
;
  async finalizeMerges() {;
    this.log('🎯 Finalizing all merges...');
<<<<<<< HEAD

    try {
      // Commit any remaining changes;
      try {
        execSync(git commit -m 'Final merge of all remaining PRs and branches"',
          { stdio: 'pipe' }
        );
      } catch (error) {  
        // No changes to commit;
        }

      // Push changes to remote;
      execSync('git push origin main', { stdio: `inherit` });
      this.log(`✅ Successfully pushed all merged changes to remote`);
    } catch (error) {  
      this.log(`❌ Failed to push changes: ${error.message  }`, `ERROR`);
=======
;
    try {;
      // Commit any remaining changes;
      try {;
        execSync(git commit -m 'Final merge of all remaining PRs and branches"',;
          { stdio: 'pipe' }
        );
      } catch (error) {;
        // No changes to commit;
      }
;
      // Push changes to remote;
      execSync('git push origin main', { stdio: 'inherit' });
      this.log('✅ Successfully pushed all merged changes to remote');
    } catch (error) {;
      this.log(`❌ Failed to push changes: ${error.message}`, 'ERROR');
>>>>>>> main
    }
  }
;
  delay(ms) {;
    return new Promise(resolve => setTimeout(resolve, ms));
  }
<<<<<<< HEAD

  generateReport() {
    this.log(`📊 Generating final merge report...`);

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        branchesProcessed: this.mergeStats.branchesProcessed,
        mergesSuccessful: this.mergeStats.mergesSuccessful,
        conflictsResolved: this.mergeStats.conflictsResolved,
        errors: this.mergeStats.errors,
      },
      successRate:
        this.mergeStats.branchesProcessed > 0;
          ? (
              (this.mergeStats.mergesSuccessful /
                this.mergeStats.branchesProcessed) *
              100;
            ).toFixed(2)
          : 0,
    };

    // Write report to file;
    const reportPath = path.join(
      this.logsDir,final-merge-all-prs-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`📋 Final Merge All PRs Summary:`);this.log(`   Branches Processed: ${report.summary.branchesProcessed}`);this.log(`   Successful Merges: ${report.summary.mergesSuccessful}`);this.log(`   Conflicts Resolved: ${report.summary.conflictsResolved}`);this.log(`   Errors: ${report.summary.errors}`);this.log(`   Success Rate: ${report.successRate}%`);
this.log(`📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the final merge all PRs;
if (require.main === module) {
  const merger = new FinalMergeAllPRs();
  merger.run().catch(error => {
    console.error(`❌ Fatal error:`, error);
=======
;
  generateReport() {;
    this.log('📊 Generating final merge report...');
;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        branchesProcessed: this.mergeStats.branchesProcessed,;
        mergesSuccessful: this.mergeStats.mergesSuccessful,;
        conflictsResolved: this.mergeStats.conflictsResolved,;
        errors: this.mergeStats.errors,;
      },;
      successRate:;
        this.mergeStats.branchesProcessed > 0;
          ? (;
              (this.mergeStats.mergesSuccessful /;
                this.mergeStats.branchesProcessed) *;
              100;
            ).toFixed(2);
          : 0,;
    };
;
    // Write report to file;
    const reportPath = path.join(;
      this.logsDir,final-merge-all-prs-report.json';
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
;
    this.log('📋 Final Merge All PRs Summary:');this.log(`   Branches Processed: ${report.summary.branchesProcessed}`);this.log(`   Successful Merges: ${report.summary.mergesSuccessful}`);this.log(`   Conflicts Resolved: ${report.summary.conflictsResolved}`);this.log(`   Errors: ${report.summary.errors}`);this.log(`   Success Rate: ${report.successRate}%`);
this.log(`📄 Detailed report saved to: ${reportPath}`);
  }
}
;
// Run the final merge all PRs;
if (require.main === module) {;
  const merger = new FinalMergeAllPRs();
  merger.run().catch(error => {;
    console.error('❌ Fatal error:', error);
>>>>>>> main
    process.exit(1);
  });
}
;
module.exports = FinalMergeAllPRs;
