#!/usr/bin/env node

/**
 * Intelligent Merge Automation System
 * Automatically resolves conflicts and merges all open PRs into main branch
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentMergeAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.mergeLogFile = path.join(this.logsDir, 'intelligent-merge.log');
    this.conflictResolutionLog = path.join(this.logsDir, 'conflict-resolution.log');
    this.mergeSummaryFile = path.join(this.logsDir, 'merge-summary.json');
    
    this.ensureLogsDirectory();
    this.setupLogging();
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  setupLogging() {
    this.log = (message) => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] ${message}`;
      console.log(logMessage);
      
      // Append to log file
      fs.appendFileSync(this.mergeLogFile, logMessage + '\n');
    };

    this.logError = (message) => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] ERROR: ${message}`;
      console.error(logMessage);
      
      // Append to log file
      fs.appendFileSync(this.mergeLogFile, logMessage + '\n');
    };
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      try {
        const result = execSync(command, {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: options.silent ? 'pipe' : 'inherit',
          ...options
        });
        resolve(result);
      } catch (error) {
        if (options.ignoreErrors) {
          resolve(null);
        } else {
          reject(error);
        }
      }
    });
  }

  async getCurrentBranch() {
    try {
      const result = await this.runCommand('git branch --show-current', { silent: true });
      return result.trim();
    } catch (error) {
      this.logError(`Failed to get current branch: ${error.message}`);
      return null;
    }
  }

  async getRemoteBranches() {
    try {
      const result = await this.runCommand('git branch -r', { silent: true });
      return result
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('HEAD'))
        .map(branch => branch.replace('origin/', ''));
    } catch (error) {
      this.logError(`Failed to get remote branches: ${error.message}`);
      return [];
    }
  }

  async switchToMain() {
    try {
      const currentBranch = await this.getCurrentBranch();
      if (currentBranch !== 'main') {
        this.log(`Switching from ${currentBranch} to main branch`);
        await this.runCommand('git checkout main');
        await this.runCommand('git pull origin main');
        this.log('Successfully switched to main branch');
      } else {
        this.log('Already on main branch');
        await this.runCommand('git pull origin main');
      }
      return true;
    } catch (error) {
      this.logError(`Failed to switch to main: ${error.message}`);
      return false;
    }
  }

  async createBackupBranch() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupBranch = `backup-main-${timestamp}`;
      
      this.log(`Creating backup branch: ${backupBranch}`);
      await this.runCommand(`git checkout -b ${backupBranch}`);
      await this.runCommand(`git push origin ${backupBranch}`);
      
      this.log(`Backup branch created and pushed: ${backupBranch}`);
      return backupBranch;
    } catch (error) {
      this.logError(`Failed to create backup branch: ${error.message}`);
      return null;
    }
  }

  async resolveMergeConflicts(branchName) {
    try {
      this.log(`Attempting to resolve merge conflicts for branch: ${branchName}`);
      
      // Check if there are merge conflicts
      const status = await this.runCommand('git status --porcelain', { silent: true });
      
      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
        this.log(`Merge conflicts detected in ${branchName}`);
        
        // Log conflict details
        fs.appendFileSync(this.conflictResolutionLog, `\n=== Conflicts in ${branchName} ===\n`);
        fs.appendFileSync(this.conflictResolutionLog, status + '\n');
        
        // Try to resolve conflicts automatically
        await this.autoResolveConflicts();
        
        // Check if conflicts are resolved
        const newStatus = await this.runCommand('git status --porcelain', { silent: true });
        if (newStatus.includes('UU') || newStatus.includes('AA') || newStatus.includes('DD')) {
          this.log(`Conflicts still exist after auto-resolution for ${branchName}`);
          return false;
        } else {
          this.log(`Conflicts resolved for ${branchName}`);
          return true;
        }
      } else {
        this.log(`No merge conflicts detected for ${branchName}`);
        return true;
      }
    } catch (error) {
      this.logError(`Error resolving conflicts for ${branchName}: ${error.message}`);
      return false;
    }
  }

  async autoResolveConflicts() {
    try {
      this.log('Attempting automatic conflict resolution...');
      
      // Get list of conflicted files
      const conflictedFiles = await this.runCommand('git diff --name-only --diff-filter=U', { silent: true });
      
      if (conflictedFiles) {
        const files = conflictedFiles.split('\n').filter(f => f.trim());
        
        for (const file of files) {
          await this.resolveFileConflicts(file);
        }
      }
      
      // Stage resolved files
      await this.runCommand('git add .');
      
    } catch (error) {
      this.logError(`Error in auto conflict resolution: ${error.message}`);
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      this.log(`Resolving conflicts in file: ${filePath}`);
      
      // Read the conflicted file
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Simple conflict resolution strategy
      let resolvedContent = content;
      
      // Remove conflict markers and keep the "ours" version (main branch)
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [^\n]*\n/g, '$1');
      
      // Write resolved content back
      fs.writeFileSync(filePath, resolvedContent);
      
      this.log(`Resolved conflicts in ${filePath}`);
      
    } catch (error) {
      this.logError(`Error resolving conflicts in ${filePath}: ${error.message}`);
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`Attempting to merge branch: ${branchName}`);
      
      // Fetch the latest from remote
      await this.runCommand('git fetch origin');
      
      // Try to merge
      try {
        await this.runCommand(`git merge origin/${branchName} --no-edit`);
        this.log(`Successfully merged ${branchName} into main`);
        return { success: true, conflicts: false };
      } catch (mergeError) {
        this.log(`Merge failed for ${branchName}, attempting conflict resolution`);
        
        // Try to resolve conflicts
        const conflictsResolved = await this.resolveMergeConflicts(branchName);
        
        if (conflictsResolved) {
          // Commit the merge
          await this.runCommand('git commit -m "Merge branch into main - conflicts resolved"');
          this.log(`Successfully merged ${branchName} after conflict resolution`);
          return { success: true, conflicts: true, resolved: true };
        } else {
          // Abort the merge
          await this.runCommand('git merge --abort');
          this.log(`Failed to resolve conflicts for ${branchName}, merge aborted`);
          return { success: false, conflicts: true, resolved: false };
        }
      }
    } catch (error) {
      this.logError(`Error merging branch ${branchName}: ${error.message}`);
      return { success: false, conflicts: false, error: error.message };
    }
  }

  async pushToMain() {
    try {
      this.log('Pushing merged changes to main branch');
      await this.runCommand('git push origin main');
      this.log('Successfully pushed to main branch');
      return true;
    } catch (error) {
      this.logError(`Failed to push to main: ${error.message}`);
      return false;
    }
  }

  async cleanupMergedBranches() {
    try {
      this.log('Cleaning up merged branches...');
      
      // Get list of merged branches
      const mergedBranches = await this.runCommand('git branch --merged main', { silent: true });
      
      if (mergedBranches) {
        const branches = mergedBranches.split('\n').filter(b => b.trim() && b !== 'main' && b !== '* main');
        
        for (const branch of branches) {
          try {
            await this.runCommand(`git branch -d ${branch.trim()}`);
            this.log(`Deleted local branch: ${branch.trim()}`);
          } catch (error) {
            this.log(`Could not delete local branch ${branch.trim()}: ${error.message}`);
          }
        }
      }
      
      // Clean up remote tracking branches
      await this.runCommand('git remote prune origin');
      this.log('Cleaned up remote tracking branches');
      
    } catch (error) {
      this.logError(`Error cleaning up branches: ${error.message}`);
    }
  }

  async generateMergeReport(mergeResults) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        totalBranches: mergeResults.length,
        successfulMerges: mergeResults.filter(r => r.success).length,
        failedMerges: mergeResults.filter(r => !r.success).length,
        conflictsResolved: mergeResults.filter(r => r.conflicts && r.resolved).length,
        conflictsUnresolved: mergeResults.filter(r => r.conflicts && !r.resolved).length,
        details: mergeResults
      };
      
      fs.writeFileSync(this.mergeSummaryFile, JSON.stringify(report, null, 2));
      this.log(`Merge report generated: ${this.mergeSummaryFile}`);
      
      return report;
    } catch (error) {
      this.logError(`Error generating merge report: ${error.message}`);
      return null;
    }
  }

  async run() {
    try {
      this.log('🚀 Starting Intelligent Merge Automation System');
      this.log('================================================');
      
      // Step 1: Switch to main branch
      const mainSwitchSuccess = await this.switchToMain();
      if (!mainSwitchSuccess) {
        throw new Error('Failed to switch to main branch');
      }
      
      // Step 2: Create backup branch
      const backupBranch = await this.createBackupBranch();
      if (!backupBranch) {
        throw new Error('Failed to create backup branch');
      }
      
      // Step 3: Get all remote branches
      const remoteBranches = await this.getRemoteBranches();
      this.log(`Found ${remoteBranches.length} remote branches to merge`);
      
      // Step 4: Merge each branch systematically
      const mergeResults = [];
      
      for (const branch of remoteBranches) {
        this.log(`\n--- Processing branch: ${branch} ---`);
        
        try {
          const result = await this.mergeBranch(branch);
          mergeResults.push({
            branch,
            ...result
          });
          
          // Small delay between merges
          await new Promise(resolve => setTimeout(resolve, 1000));
          
        } catch (error) {
          this.logError(`Error processing branch ${branch}: ${error.message}`);
          mergeResults.push({
            branch,
            success: false,
            error: error.message
          });
        }
      }
      
      // Step 5: Push changes to main
      const pushSuccess = await this.pushToMain();
      if (!pushSuccess) {
        throw new Error('Failed to push changes to main');
      }
      
      // Step 6: Clean up merged branches
      await this.cleanupMergedBranches();
      
      // Step 7: Generate merge report
      const report = await this.generateMergeReport(mergeResults);
      
      // Step 8: Display summary
      this.log('\n🎉 Merge Automation Complete!');
      this.log('============================');
      this.log(`Total branches processed: ${report.totalBranches}`);
      this.log(`Successful merges: ${report.successfulMerges}`);
      this.log(`Failed merges: ${report.failedMerges}`);
      this.log(`Conflicts resolved: ${report.conflictsResolved}`);
      this.log(`Conflicts unresolved: ${report.conflictsUnresolved}`);
      this.log(`Backup branch: ${backupBranch}`);
      
      if (report.failedMerges > 0) {
        this.log('\n⚠️  Some branches failed to merge. Check the logs for details.');
      }
      
      return report;
      
    } catch (error) {
      this.logError(`Fatal error in merge automation: ${error.message}`);
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const automation = new IntelligentMergeAutomation();
  
  automation.run()
    .then(report => {
      console.log('\n✅ Intelligent Merge Automation completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Intelligent Merge Automation failed:', error.message);
      process.exit(1);
    });
}

module.exports = IntelligentMergeAutomation;