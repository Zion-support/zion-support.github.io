#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SelectivePRMerger {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.logFile = path.join(this.workspaceRoot, 'automation_logs', 'selective-pr-merge-log.txt');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Starting: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Error in ${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async getRecentBranches() {
    this.log('Getting recent branches...');
    
    try {
      // Get branches sorted by date, most recent first
      const result = execSync('git for-each-ref --sort=-committerdate refs/remotes/origin --format="%(refname:short)" | head -20', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      
      const branches = result.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
        .map(line => line.replace('origin/', ''));
      
      this.log(`Found ${branches.length} recent branches`);
      return branches;
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`);
      return [];
    }
  }

  async mergeBranch(branchName) {
    this.log(`Attempting to merge branch: ${branchName}`);
    
    try {
      // Fetch the latest changes
      await this.runCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
      
      // Check if branch has conflicts before attempting merge
      const diffResult = await this.runCommand(
        `git diff main...origin/${branchName} --name-only`,
        `Checking differences for ${branchName}`
      );
      
      if (!diffResult.success) {
        this.log(`No differences found for ${branchName}, skipping`);
        return { success: true, branch: branchName, skipped: true };
      }
      
      // Try to merge
      const mergeResult = await this.runCommand(
        `git merge origin/${branchName} --no-ff -m "Merge branch ${branchName} into main"`,
        `Merging ${branchName}`
      );
      
      if (mergeResult.success) {
        this.log(`✅ Successfully merged ${branchName}`);
        return { success: true, branch: branchName };
      } else {
        this.log(`❌ Merge conflict in ${branchName}: ${mergeResult.error}`);
        
        // Try to resolve conflicts automatically
        const resolveResult = await this.resolveConflicts(branchName);
        if (resolveResult.success) {
          this.log(`✅ Resolved conflicts and merged ${branchName}`);
          return { success: true, branch: branchName, resolved: true };
        } else {
          this.log(`❌ Failed to resolve conflicts in ${branchName}`);
          // Abort the merge
          await this.runCommand('git merge --abort', `Aborting merge for ${branchName}`);
          return { success: false, branch: branchName, error: resolveResult.error };
        }
      }
    } catch (error) {
      this.log(`Error merging ${branchName}: ${error.message}`);
      // Try to abort any ongoing merge
      await this.runCommand('git merge --abort', `Aborting merge for ${branchName}`);
      return { success: false, branch: branchName, error: error.message };
    }
  }

  async resolveConflicts(branchName) {
    this.log(`Resolving conflicts for ${branchName}...`);
    
    try {
      // Check git status to see conflicted files
      const statusResult = execSync('git status --porcelain', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      
      const conflictedFiles = statusResult.split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.split(' ').pop());
      
      this.log(`Found ${conflictedFiles.length} conflicted files`);
      
      // Resolve conflicts by accepting our version (main branch)
      for (const file of conflictedFiles) {
        try {
          execSync(`git checkout --ours "${file}"`, { 
            encoding: 'utf8', 
            cwd: this.workspaceRoot,
            stdio: 'pipe'
          });
          execSync(`git add "${file}"`, { 
            encoding: 'utf8', 
            cwd: this.workspaceRoot,
            stdio: 'pipe'
          });
          this.log(`Resolved conflict in ${file}`);
        } catch (error) {
          this.log(`Error resolving ${file}: ${error.message}`);
        }
      }
      
      // Commit the resolved conflicts
      const commitResult = await this.runCommand(
        `git commit -m "Resolve merge conflicts in ${branchName}"`,
        `Committing resolved conflicts for ${branchName}`
      );
      
      return commitResult;
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async mergeRecentBranches() {
    this.log('🚀 Starting selective branch merging process...');
    
    const results = {
      timestamp: new Date().toISOString(),
      totalBranches: 0,
      successfulMerges: 0,
      failedMerges: 0,
      resolvedConflicts: 0,
      skippedBranches: 0,
      branches: []
    };

    try {
      // Get recent branches only
      const branches = await this.getRecentBranches();
      results.totalBranches = branches.length;
      
      this.log(`Processing ${branches.length} recent branches...`);
      
      // Process branches one by one
      for (const branch of branches) {
        this.log(`Processing branch: ${branch}`);
        const result = await this.mergeBranch(branch);
        results.branches.push(result);
        
        if (result.success) {
          if (result.skipped) {
            results.skippedBranches++;
          } else {
            results.successfulMerges++;
            if (result.resolved) {
              results.resolvedConflicts++;
            }
          }
        } else {
          results.failedMerges++;
        }
        
        // Small delay between merges
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      // Push all changes
      await this.runCommand('git push origin main', 'Pushing merged changes to main');
      
      // Generate summary
      const summary = this.generateSummary(results);
      this.log(summary);
      
      // Save results
      const reportFile = path.join(this.workspaceRoot, 'automation_logs', 'selective-pr-merge-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      
      this.log('✅ Selective branch merging process completed!');
      return results;
    } catch (error) {
      this.log(`Error in merge process: ${error.message}`);
      results.error = error.message;
      return results;
    }
  }

  generateSummary(results) {
    let summary = '\n📊 SELECTIVE BRANCH MERGING SUMMARY\n';
    summary += '='.repeat(60) + '\n';
    summary += `Total Branches Processed: ${results.totalBranches}\n`;
    summary += `Successful Merges: ${results.successfulMerges} ✅\n`;
    summary += `Skipped Branches: ${results.skippedBranches} ⏭️\n`;
    summary += `Failed Merges: ${results.failedMerges} ❌\n`;
    summary += `Conflicts Resolved: ${results.resolvedConflicts} 🔧\n`;
    summary += '='.repeat(60) + '\n';
    
    // Show failed merges
    const failedBranches = results.branches.filter(b => !b.success);
    if (failedBranches.length > 0) {
      summary += '\nFailed Branches:\n';
      failedBranches.forEach(branch => {
        summary += `  - ${branch.branch}: ${branch.error}\n`;
      });
    }
    
    summary += '\n' + '='.repeat(60) + '\n';
    return summary;
  }
}

// CLI interface
if (require.main === module) {
  const merger = new SelectivePRMerger();
  merger.mergeRecentBranches().catch(console.error);
}

module.exports = SelectivePRMerger;