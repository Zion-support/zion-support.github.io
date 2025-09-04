#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GitWorkflowAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-workflow-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }

  async getCurrentBranch() {
    try {
      const branch = execSync('git branch --show-current', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      return branch;
    } catch (error) {
      this.log(`Error getting current branch: ${error.message}`);
      return null;
    }
  }

  async getBranchList() {
    try {
      const branches = execSync('git branch -a', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      return branches.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('HEAD'))
        .map(line => line.replace(/^\*?\s*/, ''))
        .map(line => line.replace(/^remotes\/origin\//, ''));
    } catch (error) {
      this.log(`Error getting branch list: ${error.message}`);
      return [];
    }
  }

  async getStaleBranches() {
    try {
      this.log('🧹 Checking for stale branches...');
      
      // Get merged branches
      const mergedBranches = execSync('git branch --merged main', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('main') && !line.includes('master'))
        .map(line => line.replace(/^\*?\s*/, ''));
      
      // Get remote branches that are merged
      const remoteMerged = execSync('git branch -r --merged origin/main', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes('origin/main') && !line.includes('origin/HEAD'))
        .map(line => line.replace(/^origin\//, ''));
      
      return [...new Set([...mergedBranches, ...remoteMerged])];
    } catch (error) {
      this.log(`Error getting stale branches: ${error.message}`);
      return [];
    }
  }

  async cleanupBranches() {
    try {
      if (process.env.AUTO_BRANCH_CLEANUP !== 'true') {
        return { cleaned: 0, errors: [] };
      }
      
      this.log('🧹 Cleaning up stale branches...');
      
      const staleBranches = await this.getStaleBranches();
      let cleaned = 0;
      const errors = [];
      
      for (const branch of staleBranches) {
        try {
          // Delete local branch
          execSync(`git branch -d ${branch}`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          
          // Delete remote branch
          try {
            execSync(`git push origin --delete ${branch}`, {
              cwd: this.projectRoot,
              stdio: 'pipe'
            });
          } catch (remoteError) {
            // Remote branch might not exist
          }
          
          cleaned++;
          this.log(`Deleted branch: ${branch}`);
        } catch (error) {
          errors.push({ branch, error: error.message });
          this.log(`Error deleting branch ${branch}: ${error.message}`);
        }
      }
      
      return { cleaned, errors };
    } catch (error) {
      this.log(`Branch cleanup failed: ${error.message}`);
      return { cleaned: 0, errors: [{ branch: 'unknown', error: error.message }] };
    }
  }

  async checkMergeConflicts() {
    try {
      this.log('🔍 Checking for merge conflicts...');
      
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const conflictFiles = status.split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.trim().split(/\s+/)[1]);
      
      return conflictFiles;
    } catch (error) {
      this.log(`Error checking merge conflicts: ${error.message}`);
      return [];
    }
  }

  async resolveConflicts() {
    try {
      if (process.env.CONFLICT_RESOLUTION !== 'true') {
        return { resolved: 0, errors: [] };
      }
      
      this.log('🔧 Attempting to resolve conflicts...');
      
      const conflictFiles = await this.checkMergeConflicts();
      let resolved = 0;
      const errors = [];
      
      for (const file of conflictFiles) {
        try {
          // Try to resolve conflicts automatically
          execSync(`git checkout --theirs ${file}`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          
          execSync(`git add ${file}`, {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          
          resolved++;
          this.log(`Resolved conflicts in: ${file}`);
        } catch (error) {
          errors.push({ file, error: error.message });
          this.log(`Error resolving conflicts in ${file}: ${error.message}`);
        }
      }
      
      return { resolved, errors };
    } catch (error) {
      this.log(`Conflict resolution failed: ${error.message}`);
      return { resolved: 0, errors: [{ file: 'unknown', error: error.message }] };
    }
  }

  async checkPullRequests() {
    try {
      this.log('📋 Checking pull requests...');
      
      // This would typically use GitHub API, but for now we'll check local branches
      const branches = await this.getBranchList();
      const featureBranches = branches.filter(branch => 
        branch.includes('feature/') || 
        branch.includes('fix/') || 
        branch.includes('hotfix/')
      );
      
      return {
        total: featureBranches.length,
        branches: featureBranches
      };
    } catch (error) {
      this.log(`Error checking pull requests: ${error.message}`);
      return { total: 0, branches: [] };
    }
  }

  async autoMerge() {
    try {
      if (process.env.AUTO_MERGE_SAFE !== 'true') {
        return { merged: 0, errors: [] };
      }
      
      this.log('🔄 Attempting safe auto-merge...');
      
      const currentBranch = await this.getCurrentBranch();
      if (currentBranch === 'main' || currentBranch === 'master') {
        return { merged: 0, errors: [] };
      }
      
      let merged = 0;
      const errors = [];
      
      try {
        // Switch to main branch
        execSync('git checkout main', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        // Pull latest changes
        execSync('git pull origin main', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        // Merge feature branch
        execSync(`git merge ${currentBranch}`, {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        // Push changes
        execSync('git push origin main', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        merged = 1;
        this.log(`Successfully merged ${currentBranch} into main`);
      } catch (error) {
        errors.push({ branch: currentBranch, error: error.message });
        this.log(`Error merging ${currentBranch}: ${error.message}`);
      }
      
      return { merged, errors };
    } catch (error) {
      this.log(`Auto-merge failed: ${error.message}`);
      return { merged: 0, errors: [{ branch: 'unknown', error: error.message }] };
    }
  }

  generateReport(branchCleanup, conflictResolution, pullRequests, autoMerge) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        branchesCleaned: branchCleanup.cleaned,
        conflictsResolved: conflictResolution.resolved,
        pullRequestsFound: pullRequests.total,
        branchesMerged: autoMerge.merged,
        totalErrors: branchCleanup.errors.length + conflictResolution.errors.length + autoMerge.errors.length
      },
      branchCleanup,
      conflictResolution,
      pullRequests,
      autoMerge,
      recommendations: this.generateRecommendations(branchCleanup, conflictResolution, pullRequests, autoMerge)
    };
    
    return report;
  }

  generateRecommendations(branchCleanup, conflictResolution, pullRequests, autoMerge) {
    const recommendations = [];
    
    if (branchCleanup.cleaned > 0) {
      recommendations.push({
        type: 'cleanup',
        priority: 'low',
        message: `${branchCleanup.cleaned} stale branches were cleaned up`,
        action: 'Regular branch cleanup helps maintain repository hygiene'
      });
    }
    
    if (conflictResolution.resolved > 0) {
      recommendations.push({
        type: 'conflicts',
        priority: 'medium',
        message: `${conflictResolution.resolved} merge conflicts were resolved`,
        action: 'Review resolved conflicts to ensure they are correct'
      });
    }
    
    if (pullRequests.total > 5) {
      recommendations.push({
        type: 'pull-requests',
        priority: 'medium',
        message: `${pullRequests.total} feature branches found`,
        action: 'Consider reviewing and merging pending pull requests'
      });
    }
    
    if (autoMerge.merged > 0) {
      recommendations.push({
        type: 'merge',
        priority: 'low',
        message: `${autoMerge.merged} branches were automatically merged`,
        action: 'Verify merged changes are working correctly'
      });
    }
    
    return recommendations;
  }

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('🔄 Starting Git Workflow Automator...');
    this.log(`Project root: ${this.projectRoot}`);
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Clean up branches
      const branchCleanup = await this.cleanupBranches();
      
      // Resolve conflicts
      const conflictResolution = await this.resolveConflicts();
      
      // Check pull requests
      const pullRequests = await this.checkPullRequests();
      
      // Auto-merge if safe
      const autoMerge = await this.autoMerge();
      
      // Generate report
      const report = this.generateReport(branchCleanup, conflictResolution, pullRequests, autoMerge);
      
      // Save report
      await this.saveReport(report);
      
      const duration = Date.now() - this.startTime;
      
      // Log summary
      this.log('\n📊 Git Workflow Report:');
      this.log(`Branches cleaned: ${report.summary.branchesCleaned}`);
      this.log(`Conflicts resolved: ${report.summary.conflictsResolved}`);
      this.log(`Pull requests found: ${report.summary.pullRequestsFound}`);
      this.log(`Branches merged: ${report.summary.branchesMerged}`);
      this.log(`Total errors: ${report.summary.totalErrors}`);
      this.log(`Duration: ${duration}ms`);
      
      if (report.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error running git workflow automator: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the git workflow automator
const automator = new GitWorkflowAutomator();
automator.run().catch(error => {
  process.exit(1);
});