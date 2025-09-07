#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PRMerger {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.logFile = path.join(this.workspaceRoot, 'automation_logs', 'pr-merge-log.txt');
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

  async getAllBranches() {
    this.log('Getting all remote branches...');
    
    try {
      const result = execSync('git branch -r', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      
      const branches = result.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD') && !line.includes('main'))
        .map(line => line.replace('origin/', ''));
      
      this.log(`Found ${branches.length} remote branches`);
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
          return { success: false, branch: branchName, error: resolveResult.error };
        }
      }
    } catch (error) {
      this.log(`Error merging ${branchName}: ${error.message}`);
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

  async mergeAllBranches() {
    this.log('🚀 Starting comprehensive branch merging process...');
    
    const results = {
      timestamp: new Date().toISOString(),
      totalBranches: 0,
      successfulMerges: 0,
      failedMerges: 0,
      resolvedConflicts: 0,
      branches: []
    };

    try {
      // Get all branches
      const branches = await this.getAllBranches();
      results.totalBranches = branches.length;
      
      this.log(`Processing ${branches.length} branches...`);
      
      // Process branches in batches to avoid overwhelming the system
      const batchSize = 10;
      for (let i = 0; i < branches.length; i += batchSize) {
        const batch = branches.slice(i, i + batchSize);
        this.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)}`);
        
        for (const branch of batch) {
          const result = await this.mergeBranch(branch);
          results.branches.push(result);
          
          if (result.success) {
            results.successfulMerges++;
            if (result.resolved) {
              results.resolvedConflicts++;
            }
          } else {
            results.failedMerges++;
          }
          
          // Small delay between merges
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      // Push all changes
      await this.runCommand('git push origin main', 'Pushing merged changes to main');
      
      // Generate summary
      const summary = this.generateSummary(results);
      this.log(summary);
      
      // Save results
      const reportFile = path.join(this.workspaceRoot, 'automation_logs', 'pr-merge-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      
      this.log('✅ Branch merging process completed!');
      return results;
    } catch (error) {
      this.log(`Error in merge process: ${error.message}`);
      results.error = error.message;
      return results;
    }
  }

  generateSummary(results) {
    let summary = '\n📊 BRANCH MERGING SUMMARY\n';
    summary += '='.repeat(50) + '\n';
    summary += `Total Branches: ${results.totalBranches}\n`;
    summary += `Successful Merges: ${results.successfulMerges} ✅\n`;
    summary += `Failed Merges: ${results.failedMerges} ❌\n`;
    summary += `Conflicts Resolved: ${results.resolvedConflicts} 🔧\n`;
    summary += '='.repeat(50) + '\n';
    
    // Show failed merges
    const failedBranches = results.branches.filter(b => !b.success);
    if (failedBranches.length > 0) {
      summary += '\nFailed Branches:\n';
      failedBranches.forEach(branch => {
        summary += `  - ${branch.branch}: ${branch.error}\n`;
      });
    }
    
    summary += '\n' + '='.repeat(50) + '\n';
    return summary;
  }
}

// CLI interface
if (require.main === module) {
  const merger = new PRMerger();
  merger.mergeAllBranches().catch(console.error);
}

module.exports = PRMerger;