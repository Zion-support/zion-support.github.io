<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");class GitWorkflow { constructor() {" this.processName = process.env.PM2_PROCESS_NAME | "git-workflow";" this.autoBranchCleanup = process.env.AUTO_BRANCH_CLEANUP === "true";" this.autoMergeSafe = process.env.AUTO_MERGE_SAFE === "true";" this.conflictResolution = process.env.CONFLICT_RESOLUTION === "true";" this.branchStrategy = process.env.BRANCH_STRATEGY | "gitflow";" this.logFile = path.join(__dirname, "././logs/pm2/git-workflow.log"); this.ensureLogDir(); } ensureLogDir() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async getCurrentBranch() { try {" const branch = execSync("git branch --show-current", { "" encoding: "utf8","" stdio: "pipe" }).trim(); return branch; } catch (error) {"` this.log(`Failed to get current branch: ${error.message}`); return null; } } async getBranches() { try {" const branches = execSync("git branch -a", { "" encoding: "utf8","" stdio: "pipe"" }).split("\n") .map(b => b.trim())" .filter(b => b && !b.startsWith("*"))" .map(b => b.replace(/^remotes\/origin\/, "")); return [.new Set(branches)]; / Remove duplicates } catch (error) {"` this.log(`Failed to get branches: ${error.message}`); return []; } } async getMergedBranches() { try {" const mergedBranches = execSync("git branch --merged", { "" encoding: "utf8","" stdio: "pipe"" }).split("\n") .map(b => b.trim())" .filter(b => b && !b.startsWith("*") && b !== "main" && b !== "master"); return mergedBranches; } catch (error) {"` this.log(`Failed to get merged branches: ${error.message}`); return []; } } async cleanupBranches() { if (!this.autoBranchCleanup) {" this.log("Branch cleanup disabled");" return { cleaned: false }; } try {" this.log("Starting branch cleanup."); const mergedBranches = await this.getMergedBranches(); const deletedBranches = []; for (const branch of mergedBranches) { try { / Skip protected branches" if (["main", "master", "develop", "dev"].includes(branch)) { continue; }"` this.log(`Deleting merged branch: ${branch}`);""` execSync(`git branch -d ${branch}`, { stdio: "pipe" }); deletedBranches.push(branch); } catch (error) {` this.log(`Failed to delete branch ${branch}: ${error.message}`); } }` this.log(`Cleaned up ${deletedBranches.length} branches`); return {" cleaned: true, deletedBranches," totalDeleted: deletedBranches.length }; } catch (error) {"` this.log(`Branch cleanup failed: ${error.message}`);" return { cleaned: false, error: error.message }; } } async checkForConflicts() { try {" this.log("Checking for merge conflicts."); / Check if there are any unmerged files" const unmergedFiles = execSync("git diff --name-only --diff-filter=U", { "" encoding: "utf8","" stdio: "pipe" }).trim(); if (unmergedFiles) {" const files = unmergedFiles.split("\n").filter(f => f.trim());""` this.log(`Found merge conflicts in ${files.length} files: ${files.join(", ")}`);" return { hasConflicts: true, files }; }" this.log("No merge conflicts found");" return { hasConflicts: false, files: [] }; } catch (error) {"` this.log(`Conflict check failed: ${error.message}`);" return { hasConflicts: false, error: error.message }; } } async resolveConflicts() { if (!this.conflictResolution) {" this.log("Conflict resolution disabled");" return { resolved: false }; } try { const conflictCheck = await this.checkForConflicts(); if (!conflictCheck.hasConflicts) {" this.log("No conflicts to resolve");"" return { resolved: true, message: "No conflicts found" }; }` this.log(`Resolving conflicts in ${conflictCheck.files.length} files.`); " / For automated conflict resolution, we"ll use a simple strategy / In practice, you might want more sophisticated conflict resolution for (const file of conflictCheck.files) { try {` this.log(`Resolving conflicts in ${file}.`); / Read the file and resolve conflicts (simplified approach)" let content = fs.readFileSync(file, "utf8"); / Remove conflict markers and keep both versions (simplified)""`"`
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node;
/**
 * PM2 Git Workflow Service;
 * Manages git operations and branch cleanup;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class GitWorkflow {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'git-workflow';
    this.autoBranchCleanup = process.env.AUTO_BRANCH_CLEANUP === 'true';
    this.autoMergeSafe = process.env.AUTO_MERGE_SAFE === 'true';
    this.conflictResolution = process.env.CONFLICT_RESOLUTION === 'true';
    this.branchStrategy = process.env.BRANCH_STRATEGY || 'gitflow';
    this.logFile = path.join(__dirname, '../../logs/pm2/git-workflow.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    );
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async getCurrentBranch() {}
    try {}
      const branch = execSync('git branch --show-current', { })
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).trim();
      return branch;
    } catch (error) {}
      this.log(`Failed to get current "branch": ${error.message}`);
      return null;
    };
  };
  async getBranches() {}
    try {}
      const branches = execSync('git branch -a', { })
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).split('\n');
        .map(b => b.trim());
        .filter(b => b && !b.startsWith('*'));
        .map(b => b.replace(/^remotes\/origin\//, ''));
      return [...new Set(branches)]; // Remove duplicates;
    } catch (error) {}
      this.log(`Failed to get "branches": ${error.message}`);
      return [];
    };
  };
  async getMergedBranches() {}
    try {}
      const mergedBranches = execSync('git branch --merged', { })
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).split('\n');
        .map(b => b.trim());
        .filter(b => b && !b.startsWith('*') && b !== 'main' && b !== 'master');
      return mergedBranches;
    } catch (error) {}
      this.log(`Failed to get merged "branches": ${error.message}`);
      return [];
    };
  };
  async cleanupBranches() {}
    if (!this.autoBranchCleanup) {}
      this.log('Branch cleanup disabled');
      return { "cleaned": false };
    };
    try {}
      this.log('Starting branch cleanup...');
      const mergedBranches = await this.getMergedBranches();
      const deletedBranches = [];
      for (const branch of mergedBranches) {}
        try {}
          // Skip protected branches;
          if (['main', 'master', 'develop', 'dev'].includes(branch)) {}
            continue;
          };
          this.log(`Deleting merged "branch": ${branch}`);
          execSync(`git branch -d ${branch}`, { "stdio": 'pipe' }
});
          deletedBranches.push(branch);
        } catch (error) {}
          this.log(`Failed to delete branch ${branch}: ${error.message}`);
        };
      };
      this.log(`Cleaned up ${deletedBranches.length} branches`);
      return {}
        "cleaned": true,
        deletedBranches,
        "totalDeleted": deletedBranches.length;
      };
    } catch (error) {}
      this.log(`Branch cleanup "failed": ${error.message}`);
      return { "cleaned": false, "error": error.message };
    };
  };
  async checkForConflicts() {}
    try {}
      this.log('Checking for merge conflicts...');
      // Check if there are any unmerged files;
      const unmergedFiles = execSync('git diff --name-only --diff-filter=U', { })
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).trim();
      if (unmergedFiles) {}
        const files = unmergedFiles.split('\n').filter(f => f.trim());
        this.log(`Found merge conflicts in ${files.length} "files": ${files.join(', ')}`);
        return { "hasConflicts": true, files };
      };
      this.log('No merge conflicts found');
      return { "hasConflicts": false, "files": [] };
    } catch (error) {}
      this.log(`Conflict check "failed": ${error.message}`);
      return { "hasConflicts": false, "error": error.message };
    };
  };
  async resolveConflicts() {}
    if (!this.conflictResolution) {}
      this.log('Conflict resolution disabled');
      return { "resolved": false };
    };
    try {}
      const conflictCheck = await this.checkForConflicts();
      if (!conflictCheck.hasConflicts) {}
        this.log('No conflicts to resolve');
        return { "resolved": true, "message": 'No conflicts found' };
      };
      this.log(`Resolving conflicts in ${conflictCheck.files.length} files...`);
      // For automated conflict resolution, we'll use a simple strategy;
      // In practice, you might want more sophisticated conflict resolution;
      for (const file of conflictCheck.files) {}
        try {}
          this.log(`Resolving conflicts in ${file}...`);
          // Read the file and resolve conflicts (simplified approach);
          let content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
          // Remove conflict markers and keep both versions (simplified)
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
=======
          // Remove conflict markers and keep both versions (simplified)
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          // Remove conflict markers and keep both versions (simplified);
          content = content.replace(/\n/g, '');
          content = content.replace(/\n/g, '');
          content = content.replace(/.*\n/g, '');
cursor/fix-lint-push-and-merge-to-main-f3c1;
          fs.writeFileSync(file, content);
          // Add the resolved file;
          execSync(`git add ${file}`, { "stdio": 'pipe' }
});
          this.log(`Resolved conflicts in ${file}`);
        } catch (error) {}
          this.log(`Failed to resolve conflicts in ${file}: ${error.message}`);
        };
      };
      this.log('Conflict resolution completed');
      return { "resolved": true, "resolvedFiles": conflictCheck.files };
    } catch (error) {}
      this.log(`Conflict resolution "failed": ${error.message}`);
      return { "resolved": false, "error": error.message };
    };
  };
  async safeMerge() {}
    if (!this.autoMergeSafe) {}
      this.log('Safe merge disabled');
      return { "merged": false };
    };
    try {}
      this.log('Attempting safe merge...');
      const currentBranch = await this.getCurrentBranch();
      if (!currentBranch || currentBranch === 'main' || currentBranch === 'master') {}
        this.log('Cannot merge main/master branch');
        return { "merged": false, "reason": 'Cannot merge main branch' };
      };
      // Check if there are any uncommitted changes;
      const status = execSync('git status --porcelain', { })
        "encoding": 'utf8',
        "stdio": 'pipe'
      }).trim();
      if (status) {}
        this.log('Cannot "merge": uncommitted changes detected');
        return { merged: false, "reason": 'Uncommitted changes' };
      };
      // Try to merge with main;
      try {}
        execSync('git fetch origin', { "stdio": 'pipe' }
});
        execSync('git merge origin/main', { "stdio": 'pipe' }
});
        this.log('Safe merge completed successfully');
        return { "merged": true };
      } catch (mergeError) {}
        this.log(`Merge "failed": ${mergeError.message}`);
        // Try to resolve conflicts automatically;
        const conflictResolution = await this.resolveConflicts();
        if (conflictResolution.resolved) {}
          try {}
            execSync('git commit -m "Auto-resolved merge conflicts"', { "stdio": 'pipe' }
});
            this.log('Merge completed after conflict resolution');
            return { "merged": true, "conflictsResolved": true };
          } catch (commitError) {}
            this.log(`Failed to commit after conflict "resolution": ${commitError.message}`);
            return { "merged": false, "error": commitError.message };
          };
        };
        return { "merged": false, "error": mergeError.message };
      };
    } catch (error) {}
      this.log(`Safe merge "failed": ${error.message}`);
      return { "merged": false, "error": error.message };
    };
  };
  async generateReport() {}
    const report = {}
      "timestamp": new Date().toISOString(),
      "processName": this.processName,
      "currentBranch": await this.getCurrentBranch(),
      "branches": await this.getBranches(),
      "branchCleanup": await this.cleanupBranches(),
      "conflictCheck": await this.checkForConflicts(),
      "conflictResolution": await this.resolveConflicts(),
      "safeMerge": await this.safeMerge(),
      "environment": {}
        NODE_ENV: process.env.NODE_ENV,
        "autoBranchCleanup": this.autoBranchCleanup,
        "autoMergeSafe": this.autoMergeSafe,
        "conflictResolution": this.conflictResolution,
        "branchStrategy": this.branchStrategy;
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/git-workflow-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Git workflow report "generated": ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      if (report.branchCleanup.cleaned) {}
        this.log(`Branch cleanup "completed": ${report.branchCleanup.totalDeleted} branches deleted`);
      };
      if (report.safeMerge.merged) {}
        this.log('Safe merge completed successfully');
      } else if (report.safeMerge.error) {}
        this.log(`Safe merge "failed": ${report.safeMerge.error}`);
      };
      if (report.conflictCheck.hasConflicts) {}
        this.log(`Found conflicts in ${report.conflictCheck.files.length} files`);
      };
    } catch (error) {}
      this.log(`Git workflow "error": ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const gitWorkflow = new GitWorkflow();
  gitWorkflow.start().catch(console.error);
};
module.exports = GitWorkflow;
<<<<<<< HEAD
cursor/website-audit-and-update-with-deployment-76dc;
=======
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
cursor/fix-lint-push-and-merge-to-main-f3c1;cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
