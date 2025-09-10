#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MergeConflictResolver {
  constructor() {
    this.logsDir = './automation_logs';
    this.ensureLogsDir();
    this.mergedBranches = [];
    this.failedBranches = [];
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ ${description} completed successfully`);
      return result;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async getBranchesAheadOfMain() {
    try {
      const result = await this.runCommand(
        "git for-each-ref --format='%(refname:short) %(ahead-behind:origin/main)' refs/remotes/origin | grep -v 'origin/main' | awk '$2 > 0 {print $1}'",
        "Getting branches ahead of main"
      );
      return result.split('\n').filter(branch => branch.trim()).slice(0, 10); // Limit to 10 branches
    } catch (error) {
      this.log(`Error getting branches ahead of main: ${error.message}`, 'error');
      return [];
    }
  }

  async resolveMergeConflicts() {
    try {
      // Get list of conflicted files
      const conflictedFiles = await this.runCommand(
        "git diff --name-only --diff-filter=U",
        "Getting conflicted files"
      );
      
      const files = conflictedFiles.split('\n').filter(file => file.trim());
      this.log(`Found ${files.length} conflicted files`);

      for (const file of files) {
        await this.resolveFileConflict(file);
      }

      return true;
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`, 'error');
      return false;
    }
  }

  async resolveFileConflict(filePath) {
    try {
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        this.log(`File ${filePath} does not exist, skipping`, 'warn');
        return;
      }

      // For backup files and temporary files, we can safely remove them
      if (filePath.includes('.backup') || 
          filePath.includes('temp_') || 
          filePath.includes('_backup') ||
          filePath.includes('.disabled') ||
          filePath.includes('backup-problematic-files')) {
        
        this.log(`Removing backup/temp file: ${filePath}`);
        await this.runCommand(`git rm "${filePath}"`, `Remove backup file ${filePath}`);
        return;
      }

      // For other files, try to resolve conflicts automatically
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('\n([\s\S]*?)\n
          .replace(/
        
        fs.writeFileSync(filePath, resolvedContent);
        await this.runCommand(`git add "${filePath}"`, `Add resolved file ${filePath}`);
      }
    } catch (error) {
      this.log(`Error resolving conflict in ${filePath}: ${error.message}`, 'error');
    }
  }

  async mergeBranchSafely(branchName) {
    try {
      const cleanBranchName = branchName.replace('origin/', '');
      this.log(`Attempting to merge branch: ${cleanBranchName}`);

      // Checkout the branch
      await this.runCommand(`git checkout -b ${cleanBranchName} ${branchName}`, `Checkout branch ${cleanBranchName}`);

      // Switch back to main
      await this.runCommand('git checkout main', 'Switch back to main');

      // Try to merge
      try {
        await this.runCommand(`git merge ${branchName} --no-ff -m "Merge: ${cleanBranchName}"`, `Merge branch ${cleanBranchName}`);
        
        // If merge succeeds, resolve any conflicts
        const hasConflicts = await this.runCommand('git diff --name-only --diff-filter=U', 'Check for conflicts');
        
        if (hasConflicts.trim()) {
          this.log(`Resolving conflicts for ${cleanBranchName}`);
          const conflictsResolved = await this.resolveMergeConflicts();
          
          if (conflictsResolved) {
            await this.runCommand('git add .', 'Add resolved conflicts');
            await this.runCommand(`git commit -m "Resolve merge conflicts for ${cleanBranchName}"`, 'Commit resolved conflicts');
          } else {
            throw new Error('Failed to resolve conflicts');
          }
        }

        // Clean up the temporary branch
        await this.runCommand(`git branch -D ${cleanBranchName}`, `Delete temporary branch ${cleanBranchName}`);

        return { success: true, branch: cleanBranchName, resolved: true };
      } catch (mergeError) {
        // If merge fails, abort and clean up
        await this.runCommand('git merge --abort', 'Abort failed merge');
        await this.runCommand(`git branch -D ${cleanBranchName}`, `Delete temporary branch ${cleanBranchName}`);
        return { success: false, branch: cleanBranchName, error: mergeError.message };
      }
    } catch (error) {
      this.log(`Error merging branch ${branchName}: ${error.message}`, 'error');
      return { success: false, branch: branchName, error: error.message };
    }
  }

  async processBranches() {
    const branches = await this.getBranchesAheadOfMain();
    this.log(`Found ${branches.length} branches ahead of main to process`);

    const results = {
      timestamp: new Date().toISOString(),
      totalBranches: branches.length,
      processed: 0,
      merged: 0,
      failed: 0,
      mergedBranches: [],
      failedBranches: [],
      summary: {}
    };

    for (const branch of branches) {
      try {
        this.log(`Processing branch: ${branch}`);
        const mergeResult = await this.mergeBranchSafely(branch);
        
        if (mergeResult.success) {
          results.merged++;
          results.mergedBranches.push({
            branch: mergeResult.branch,
            resolved: mergeResult.resolved || false,
            timestamp: new Date().toISOString()
          });
          this.log(`✅ Successfully merged ${mergeResult.branch}`);
        } else {
          results.failed++;
          results.failedBranches.push({
            branch: mergeResult.branch,
            error: mergeResult.error,
            timestamp: new Date().toISOString()
          });
          this.log(`❌ Failed to merge ${mergeResult.branch}: ${mergeResult.error}`);
        }

        results.processed++;
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        this.log(`Error processing branch ${branch}: ${error.message}`, 'error');
        results.failed++;
        results.failedBranches.push({
          branch: branch,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Generate comprehensive report
    results.summary = {
      successRate: `${((results.merged / results.processed) * 100).toFixed(2)}%`,
      totalProcessed: results.processed,
      successfullyMerged: results.merged,
      failedMerges: results.failed
    };

    // Save report
    const reportPath = path.join(this.logsDir, `merge-results-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
    this.log(`\n📊 Merge Results Summary:`);
    this.log(`Total branches processed: ${results.processed}`);
    this.log(`Successfully merged: ${results.merged}`);
    this.log(`Failed merges: ${results.failed}`);
    this.log(`Success rate: ${results.summary.successRate}`);
    this.log(`Detailed report saved to: ${reportPath}`);

    return results;
  }

  async start() {
    try {
      this.log('🚀 Starting Merge Conflict Resolution Process');
      
      // Ensure we're on main branch
      await this.runCommand('git checkout main', 'Switch to main branch');
      await this.runCommand('git pull origin main', 'Pull latest changes from main');
      
      // Process branches
      const results = await this.processBranches();
      
      // Push changes if any merges were successful
      if (results.merged > 0) {
        await this.runCommand('git push origin main', 'Push merged changes to origin');
        this.log('✅ Successfully pushed merged changes to origin');
      }
      
      this.log('🎉 Merge Conflict Resolution Process completed');
      return results;
    } catch (error) {
      this.log(`❌ Merge Conflict Resolution Process failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.start().catch(console.error);
}

module.exports = MergeConflictResolver;