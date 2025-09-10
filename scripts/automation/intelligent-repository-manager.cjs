
#!/usr/bin/env node;

/**;
 * Intelligent Repository Manager;
class IntelligentRepositoryManager {

            if (result.success) {log(`Resolved conflict in ${file} using default strategy`);}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);}
        }
        return 'merge'}
    async cleanupBranch(branchName) {
        try {
            // Delete remote branch
            await this.executeCommand('git', { "args": ['push', 'origin', '--delete', branchName], "silent": true });
            // Delete local branch
            await this.executeCommand('git', { "args": ['branch', '-D', branchName], "silent": true });
            this.log(`Cleaned up "branch": ${branchName}`, 'info')} catch (error) {
            this.log(`Failed to cleanup branch ${branchName}: ${error.message}`, 'warning')}
    }
    async monitorRepositoryHealth() {
        try {
            this.log('Starting repository health monitoring...');
            const branchInfo = await this.getBranchInfo();
            const healthReport = {
                "timestamp": new Date().toISOString(),
                "overallHealth": 0,
                "branches": [],
                "recommendations": []
            };
            let totalHealth = 0;
            let branchCount = 0;
            // Analyze each branch
            for (const branch of branchInfo.local) {
                const cleanBranch = branch.replace('*', '').trim();
                if (cleanBranch && cleanBranch !== 'main') {
                    const health = await this.analyzeBranchHealth(cleanBranch);
                    healthReport.branches.push(health);
                    totalHealth += health.healthScore;
                    branchCount++}
            }
            // Calculate overall health
            healthReport.overallHealth = branchCount > 0 ? Math.round(totalHealth / branchCount) : 100;
            // Generate recommendations
            healthReport.recommendations = this.generateHealthRecommendations(healthReport);
            // Save health report
            const reportPath = path.join(this.projectRoot, 'logs', 'repository-health-report.json');
            fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
            this.log(`Repository health monitoring completed. Overall "health": ${healthReport.overallHealth}/100`, 'info');
            return healthReport} catch (error) {
            this.log(`Failed to monitor repository "health": ${error.message}`, 'error');
            return null}
    }
    generateHealthRecommendations(healthReport) {
        const recommendations = [];
        if (healthReport.overallHealth < 70) {
            recommendations.push('🔴 "Critical": Repository health is poor. Review and fix issues immediately.')}
        if (healthReport.overallHealth < 85) {
            recommendations.push('🟡 "Warning": Repository health needs improvement. Address quality issues.')}
        // Branch-specific recommendations
        healthReport.branches.forEach(branch => {
            if (branch.healthScore < 60) {
                recommendations.push(`⚠️ Branch ${branch.branch} has critical issues and should be fixed or deleted.`)}
        });
        if (recommendations.length === 0) {
            recommendations.push('✅ Repository is in excellent health! Keep up the good work.')}
        return recommendations}
    async startMonitoring() {
        this.log('Intelligent Repository Manager started');
        // Initial health check
        await this.monitorRepositoryHealth();
        // Set up periodic monitoring
        setInterval(async () => {
            await this.monitorRepositoryHealth()}, 30 * 60 * 1000); // Every 30 minutes
        // Set up branch cleanup
        setInterval(async () => {
            await this.cleanupStaleBranches()}, 60 * 60 * 1000); // Every hour
    }
    async cleanupStaleBranches() {
        try {
            const branchInfo = await this.getBranchInfo();
            const staleThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days
            for (const branch of branchInfo.local) {
                const cleanBranch = branch.replace('*', '').trim();
                if (cleanBranch && cleanBranch !== 'main') {
                    const lastCommit = await this.getLastCommitDate(cleanBranch);
                    const daysSinceLastCommit = (Date.now() - lastCommit) / (24 * 60 * 60 * 1000);
                    if (daysSinceLastCommit > 7) {
                        this.log(`Branch ${cleanBranch} is stale (${Math.round(daysSinceLastCommit)} days old). Consider cleanup.`, 'warning')}
                }
            }
        } catch (error) {
            this.log(`Failed to cleanup stale "branches": ${error.message}`, 'error')}
    }
    async getLastCommitDate(branchName) {
        try {
            const result = await this.executeCommand('git', { 
                "args": ['log', '-1', '--format=%ct', branchName], 
                "silent": true 
            });
            return parseInt(result.trim()) * 1000; // Convert to milliseconds
        } catch (error) {
            return Date.now()}
    }
=======
 * ;

 */;

const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

class IntelligentRepositoryManager {

            if (result.success) {log(`Resolved conflict in ${file} using default strategy`),
}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`),
}
        }
      }),
},

    aggressive: () => {
  // Always use `ours` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --ours ${file}`, { silent: true })log(`Resolved conflict in ${file} using aggressive strategy`),
}),
},

    conservative: () => {
  // Always use `theirs` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --theirs ${file}`, { silent: true })log(`Resolved conflict in ${file} using conservative strategy`)}),}
// Main execution
if (require.main === module) {
    const manager = new IntelligentRepositoryManager();
    // Handle command line arguments
    const args = process.argv.slice(2);
    const command = args[0];
    switch (command) {
        case 'monitor':
            manager.startMonitoring();
            break;
        case 'health':
            manager.monitorRepositoryHealth().then(report => {
                );
                process.exit(0)});
            break;
        case 'analyze':
            const branch = args[1] || 'current';
            manager.analyzeBranchHealth(branch).then(health => {
                );
                process.exit(0)});
            break;
        case 'pr':
            const branchName = args[1];
            const title = args[2] || 'Automated PR';
            const description = args[3] || 'Created by Intelligent Repository Manager';
            manager.createIntelligentPR(branchName, title, description).then(result => {
                );
                process.exit(0)});
            break;
        case 'merge':
            const mergeBranch = args[1];
            const strategy = args[2] || 'auto';
            manager.intelligentMerge(mergeBranch, strategy).then(result => {
                );
                process.exit(0)});
            break;
        "default": 
            process.exit(1)}
}
module.exports = IntelligentRepositoryManager;            if (result.success) {log(`Resolved conflict in ${file} using default strategy`)}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, "ERROR")}
        }
      })},
    "aggressive": () => {
  // Always use "ours" strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --ours ${file}`, { "silent": true });log(`Resolved conflict in ${file} using aggressive strategy`)})},
    "conservative": () => {
  // Always use "theirs" strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --theirs ${file}`, { "silent": true });log(`Resolved conflict in ${file} using conservative strategy`)})}
  }
  const strategy = resolutionStrategies[CONFIG.CONFLICT_RESOLUTION_MODE] || resolutionStrategies.intelligent;
const mergeBranch = async (branchName) => {log(`Attempting to merge branch: ${branchName}`);

    // Push changesconst pushResult = gitCommand(`push origin ${CONFIG.MAIN_BRANCH}`, { silent: true })
    if (pushResult.success) {log(`Pushed merged changes to remote`)

      // Clean up merged branchgitCommand(`push origin --delete ${branchName}`, { silent: true })log(`Deleted remote branch: ${branchName}`)

      return true;
} else {log(`Failed to push merged changes: ${pushResult.error}`, `ERROR`)
      return false;
}
  } else {
  // Handle merge conflictslog(`Merge conflict detected for branch: ${branchName}`)
    // Get conflicted files;
    const conflictedFilesResult = gitCommand(`diff --name-only --diff-filter=U`, { silent: true })
    if (conflictedFilesResult.success) {
  const conflictedFiles = conflictedFilesResult.output.split(`\n`).filter(line => line.trim())
      if (conflictedFiles.length > 0) {log(`Conflicted files: ${conflictedFiles.join(", ")}`)        // Resolve conflicts intelligently;
        intelligentConflictResolution(conflictedFiles, branchName);
        // Stage resolved files;
          // Push resolved changesconst pushResult = gitCommand(`push origin ${CONFIG.MAIN_BRANCH}`, { silent: true })
          if (pushResult.success) {log(`Pushed conflict resolution to remote`)

            // Clean up merged branchgitCommand(`push origin --delete ${branchName}`, { silent: true })log(`Deleted remote branch: ${branchName}`)

            return true;
} else {log(`Failed to push conflict resolution: ${pushResult.error}`, `ERROR`)
            return false;
}
        } else {log(`Failed to commit conflict resolution: ${commitResult.error}`, `ERROR`)
          return false;
}      }
    }
    // Abort merge if we get here;
    // Abort merge if we get here;
    gitCommand("merge --abort", { silent: true })log(`Aborted merge for branch: ${branchName}`)
    return false;
}
}
const intelligentBranchAnalysis = (branches) => {log(`Analyzing ${branches.length} branches for intelligent merging`)

  const branchAnalysis = branches.map(branch => {
  const info = getBranchInfo(branch)
    const priority = calculateBranchPriority(branch, info)    return {
  branch,
      ...info,
      priority,
  // Sort by priority (highest first)
  return branchAnalysis.sort((a, b) => b.priority - a.priority),
}const calculateBranchPriority = (branch, info) => {
  let priority = 0;
  // Base priority on commit count;
  priority += info.commits * 10;
  // Base priority on commit count;
  priority += info.commits * 10;

  // Priority based on file types;
  const fileTypes = info.files.map(file => path.extname(file))
  const codeFiles = fileTypes.filter(ext => [`.js`, `.ts`, ".jsx", ".tsx"].includes(ext)).length;  const configFiles = fileTypes.filter(ext => [".json", ".yml", ".yaml", ".toml"].includes(ext)).length;
  const docFiles = fileTypes.filter(ext => [".md", ".txt", ".rst"].includes(ext)).length;
  priority += codeFiles * 5;      // Code files are high priority;
  priority += configFiles * 3;    // Config files are medium priority;
  priority += docFiles * 1;       // Documentation is lower priority;
  // Priority based on branch name patterns;
  if (branch.includes("hotfix") || branch.includes("critical")) {
const getBranchAge = (branchName) => {const result = gitCommand(`log -1 --format=%ct origin/${branchName}`, { silent: true });
  if (!result.success) return 999; // Default to old if can`t determine;
  if (!result.success) return 999; // Default to old if can"t determine;

  const commitTime = parseInt(result.output.trim());
  const now = Math.floor(Date.now() / 1000);
  const ageInHours = (now - commitTime) / 3600;

  return ageInHours;}
const executeIntelligentMerging = async () => {
  if (!CONFIG.AUTO_MERGE_ENABLED) {
  log(`Auto-merge is disabled. Skipping intelligent merging.`);
    return;}
  log(`Starting intelligent repository management cycle");
  // Check if we"re in a git repository;
  if (!isGitRepository()) {
  log("Not in a git repository. Exiting.", "ERROR");
    return}
  ;
  // Get current branch;
  const currentBranch = getCurrentBranch();
  if (currentBranch !== CONFIG.MAIN_BRANCH) {log(`Not on main branch (currently on ${currentBranch}). Switching to main.`);gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { "silent": true })}
  ;
  // Fetch latest changes;
  log("Fetching latest changes from remote");
  const fetchResult = gitCommand("fetch origin", { "silent": true });
  if (!fetchResult.success) {log(`Failed to fetch from "remote": ${fetchResult.error}`, "ERROR");
    return}
  ;
  // Get cursor branches;
  const cursorBranches = getCursorBranches();
  if (cursorBranches.length === 0) {
  log("No cursor branches found. Nothing to merge.");
    return}
  log(`Found ${cursorBranches.length} cursor branches to analyze`);

  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches);
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable);

  if (mergeableBranches.length === 0) {
  log("No mergeable branches found.");
    return}
  log(`Found ${mergeableBranches.length} mergeable branches`);
  // Create backup before merging;
  const backupBranch = createBackupBranch();
  if (!backupBranch) {
  log("Failed to create backup branch. Aborting merge cycle.", "ERROR");
    return}
  ;
  // Fetch latest changes;
  log("Fetching latest changes from remote");
  const fetchResult = gitCommand("fetch origin", { "silent": true });
  if (!fetchResult.success) {log(`Failed to fetch from "remote": ${fetchResult.error}`, "ERROR");
    return}
  ;
  // Get cursor branches;
  const cursorBranches = getCursorBranches();
  if (cursorBranches.length === 0) {
  log("No cursor branches found. Nothing to merge.");
    return}
  log(`Found ${cursorBranches.length} cursor branches to analyze`);
  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches);
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable);
  if (mergeableBranches.length === 0) {
  log("No mergeable branches found.");
    return}
  log(`Found ${mergeableBranches.length} mergeable branches`);
  // Create backup before merging;
  const backupBranch = createBackupBranch();
  if (!backupBranch) {
  log("Failed to create backup branch. Aborting merge cycle.", "ERROR");
    return}
  ;
  // Process branches in priority order;
  let successCount = 0;
  let failureCount = 0;
  for (const branchInfo of mergeableBranches.slice(0, CONFIG.MAX_CONCURRENT_MERGES)) {log(`Processing "branch": ${branchInfo.branch} ("Priority": ${branchInfo.priority})`);
    try {
  const success = await mergeBranch(branchInfo.branch);
      if (success) {
  successCount++;log(`Successfully merged branch: ${branchInfo.branch}`);} else {
  failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, `ERROR`);}
    } catch (error) {
  failureCount++;log(`Error processing branch ${branchInfo.branch  }: ${error.message}`, `ERROR`);}
    ;} else {
  failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, "ERROR");}
    } catch (error) {
  failureCount++;log(`Error processing branch ${branchInfo.branch}: ${error.message}`, "ERROR");}
    // Small delay between merges;
    // Small delay between merges;    await new Promise(resolve => setTimeout(resolve, 1000));}
  // Summarylog(`Merge cycle completed. Success: ${successCount}, Failures: ${failureCount}`);

  if (successCount > 0) {log(`Successfully merged ${successCount} branches. Backup available at: ${backupBranch}`);}
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, `WARN`);}
}
const monitorRepositoryHealth = () => {
  log(`Monitoring repository health`);
  const healthMetrics = {
  "timestamp": new Date().toISOString(),
    "currentBranch": getCurrentBranch(),
    "remoteBranches": getRemoteBranches().length,
    "cursorBranches": getCursorBranches().length,
    "backupBranches": getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,
    "mergeBranches": getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length}
  // Check for potential issues;
  const issues = [];
  if (healthMetrics.cursorBranches > 50) {
  issues.push("High number of cursor branches - consider cleanup")}
  ;
  if (healthMetrics.backupBranches > 20) {
  issues.push("High number of backup branches - consider cleanup");
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, "WARN")}
}
;
const monitorRepositoryHealth = () => {
  log("Monitoring repository health");
  const healthMetrics = {
  "timestamp": new Date().toISOString(),
    "currentBranch": getCurrentBranch(),
    "remoteBranches": getRemoteBranches().length,
    "cursorBranches": getCursorBranches().length,
    "backupBranches": getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,
    "mergeBranches": getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length}
  ;
  // Check for potential issues;
  const issues = [];
  if (healthMetrics.cursorBranches > 50) {
  issues.push(`High number of cursor branches - consider cleanup`);}
  if (healthMetrics.backupBranches > 20) {
  issues.push(`High number of backup branches - consider cleanup`);

  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, "WARN");}
}

const monitorRepositoryHealth = () => {
  log("Monitoring repository health");

  const healthMetrics = {
  timestamp: new Date().toISOString(),;
    currentBranch: getCurrentBranch(),;
    remoteBranches: getRemoteBranches().length,;
    cursorBranches: getCursorBranches().length,;
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,;
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;}
  // Check for potential issues;
  const issues = [];

  if (healthMetrics.cursorBranches > 50) {
  issues.push("High number of cursor branches - consider cleanup");}
  if (healthMetrics.backupBranches > 20) {
  issues.push("High number of backup branches - consider cleanup");}
  if (healthMetrics.currentBranch !== CONFIG.MAIN_BRANCH) {issues.push(`Not on main branch (${healthMetrics.currentBranch})`);}
  // Log health metricslog(`Repository Health Metrics: ${JSON.stringify(healthMetrics, null, 2)}`);
  if (issues.length > 0) {log(`Repository Health Issues: ${issues.join("; ")}`, `WARN`);}
  return healthMetrics;}
const cleanupOldBranches = () => {
  log(`Cleaning up old branches`);

const cleanupOldBranches = () => {
  log("Cleaning up old branches");

  const branches = getRemoteBranches();
  const now = Date.now();
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);

  let cleanedCount = 0;

  branches.forEach(branch => {
  if (branch.startsWith(CONFIG.BACKUP_BRANCH_PREFIX) || branch.startsWith(CONFIG.MERGE_BRANCH_PREFIX)) {
  const branchAge = getBranchAge(branch);
      const branchAgeMs = branchAge * 60 * 60 * 1000;

      if (branchAgeMs > oneWeekAgo) {log(`Cleaning up old branch: ${branch} (age: ${branchAge.toFixed(1)} hours)`);
        const deleteResult = gitCommand(`push origin --delete ${branch}`, { silent: true });
        if (deleteResult.success) {
  cleanedCount++;log(`Successfully deleted old branch: ${branch}`);} else {log(`Failed to delete old branch ${branch}: ${deleteResult.error}`, `ERROR`);}
>>>>>>> main}

      return analysisResults} catch (error) {
      this.log(`Error analyzing pull requests: ${error.message}`, 'error');
      return []}
      // Write resolved content;
      fs.writeFileSync(file, resolvedContent);

      this.log(`Resolved conflict in file: ${file}`);
      } catch (error) {
      this.log(`Error resolving conflict in file ${file}: ${error.message}`, 'error')}
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))}

  async start() {
    this.log('Starting Intelligent Repository Manager...');

    try {
      // Initialize;
      await this.getRepositoryStatus();

      // Start monitoring loop;
      setInterval(async () => {
        try {
          await this.intelligentMerge()} catch (error) {
          this.log(`Error in monitoring loop: ${error.message}`, 'error')}
      }, this.config.healthCheckInterval);

      this.log('Intelligent Repository Manager started successfully');
      } catch (error) {
      this.log(`Error starting Intelligent Repository Manager: ${error.message}`, 'error');
      throw error}
  }
=======});
  log(`Cleanup completed. Deleted ${cleanedCount} old branches`);
  return cleanedCount;,;
>>>>>>> main}
// Main execution loop;
const main = async () => {
  log("Intelligent Repository Manager started");
=======
  priority += 100;
} else if (branch.includes(`feature`)) {
  priority += 50;
} else if (branch.includes(`bugfix`)) {
  priority += 75;
}
  // Priority based on age (newer branches get higher priority)
  const branchAge = getBranchAge(branch)
  if (branchAge < 24) { // Less than 24 hours;
    priority += 25;
} else if (branchAge < 168) { // Less than 1 week;
    priority += 15;
}
  return priority;
}
const getBranchAge = (branchName) => {const result = gitCommand(`log -1 --format=%ct origin/${branchName}`, { silent: true })
  if (!result.success) return 999; // Default to old if can`t determine;
  if (!result.success) return 999; // Default to old if can"t determine;

  const commitTime = parseInt(result.output.trim())
  const now = Math.floor(Date.now() / 1000)
  const ageInHours = (now - commitTime) / 3600;

  return ageInHours;
}
const executeIntelligentMerging = async () => {
  if (!CONFIG.AUTO_MERGE_ENABLED) {
  log(`Auto-merge is disabled. Skipping intelligent merging.`)
    return;
}
  log(`Starting intelligent repository management cycle")
  // Check if we"re in a git repository;
  if (!isGitRepository()) {
  log(`Not in a git repository. Exiting.`, `ERROR`)
    return;
}
  // Get current branch;
  const currentBranch = getCurrentBranch()
  if (currentBranch !== CONFIG.MAIN_BRANCH) {log(`Not on main branch (currently on ${currentBranch}). Switching to main.`)gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { silent: true }),
}
  // Fetch latest changes;
  log(`Fetching latest changes from remote`)
  const fetchResult = gitCommand(`fetch origin`, { silent: true })
  if (!fetchResult.success) {log(`Failed to fetch from remote: ${fetchResult.error}`, `ERROR`)
    return;
}
  // Get cursor branches;
  const cursorBranches = getCursorBranches()
  if (cursorBranches.length === 0) {
  log(`No cursor branches found. Nothing to merge.`)
    return;
}
  log(`Found ${cursorBranches.length} cursor branches to analyze`)
  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches)
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable)
  if (mergeableBranches.length === 0) {
  log(`No mergeable branches found.`)
    return;
}
  log(`Found ${mergeableBranches.length} mergeable branches`)
  // Create backup before merging;
  const backupBranch = createBackupBranch()
  if (!backupBranch) {
  log(`Failed to create backup branch. Aborting merge cycle.`, `ERROR`)
    return;
}

  // Fetch latest changes;
  log("Fetching latest changes from remote")
  const fetchResult = gitCommand("fetch origin", { silent: true })
  if (!fetchResult.success) {log(`Failed to fetch from remote: ${fetchResult.error}`, "ERROR")
    return;
}
  // Get cursor branches;
  const cursorBranches = getCursorBranches()
  if (cursorBranches.length === 0) {
  log("No cursor branches found. Nothing to merge.")
    return;
}
  log(`Found ${cursorBranches.length} cursor branches to analyze`)

  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches)

  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable)

  if (mergeableBranches.length === 0) {
  log("No mergeable branches found.")
    return;
}
  log(`Found ${mergeableBranches.length} mergeable branches`)

  // Create backup before merging;
  const backupBranch = createBackupBranch()
  if (!backupBranch) {
  log("Failed to create backup branch. Aborting merge cycle.", "ERROR")
    return;
}
  // Process branches in priority order;
  let successCount = 0;
  let failureCount = 0;

  for (const branchInfo of mergeableBranches.slice(0, CONFIG.MAX_CONCURRENT_MERGES)) {log(`Processing branch: ${branchInfo.branch} (Priority: ${branchInfo.priority})`)

    try {
  const success = await mergeBranch(branchInfo.branch)
      if (success) {
  successCount++;log(`Successfully merged branch: ${branchInfo.branch}`),
} else {
  failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, `ERROR`),
}
    } catch (error) {
  failureCount++;log(`Error processing branch ${branchInfo.branch  }: ${error.message}`, `ERROR`),
},
} else {
  failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, "ERROR"),
}
    } catch (error) {
  failureCount++;log(`Error processing branch ${branchInfo.branch}: ${error.message}`, "ERROR"),
}
    // Small delay between merges;
    // Small delay between merges;

    await new Promise(resolve => setTimeout(resolve, 1000)),
}
  // Summarylog(`Merge cycle completed. Success: ${successCount}, Failures: ${failureCount}`)

  if (successCount > 0) {log(`Successfully merged ${successCount} branches. Backup available at: ${backupBranch}`),
}
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, `WARN`),
}
}
const monitorRepositoryHealth = () => {
  log(`Monitoring repository health`)
  const healthMetrics = {
  timestamp: new Date().toISOString(),
    currentBranch: getCurrentBranch(),
    remoteBranches: getRemoteBranches().length,
    cursorBranches: getCursorBranches().length,
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;
}
  // Check for potential issues;
  const issues = []
  if (healthMetrics.cursorBranches > 50) {
  issues.push(`High number of cursor branches - consider cleanup`),
}
  if (healthMetrics.backupBranches > 20) {
  issues.push(`High number of backup branches - consider cleanup`)

  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, "WARN"),
}
}
const monitorRepositoryHealth = () => {
  log("Monitoring repository health")

  const healthMetrics = {
  timestamp: new Date().toISOString(),
    currentBranch: getCurrentBranch(),
    remoteBranches: getRemoteBranches().length,
    cursorBranches: getCursorBranches().length,
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;
}
  // Check for potential issues;
  const issues = []

  if (healthMetrics.cursorBranches > 50) {
  issues.push("High number of cursor branches - consider cleanup"),
}
  if (healthMetrics.backupBranches > 20) {
  issues.push("High number of backup branches - consider cleanup"),
}
  if (healthMetrics.currentBranch !== CONFIG.MAIN_BRANCH) {issues.push(`Not on main branch (${healthMetrics.currentBranch})`),
}
  // Log health metricslog(`Repository Health Metrics: ${JSON.stringify(healthMetrics, null, 2)}`)
  if (issues.length > 0) {log(`Repository Health Issues: ${issues.join("; ")}`, `WARN`),
}
  return healthMetrics;
}
const cleanupOldBranches = () => {
  log(`Cleaning up old branches`)

const cleanupOldBranches = () => {
  log("Cleaning up old branches")

  const branches = getRemoteBranches()
  const now = Date.now()
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000)

  let cleanedCount = 0;

  branches.forEach(branch => {
  if (branch.startsWith(CONFIG.BACKUP_BRANCH_PREFIX) || branch.startsWith(CONFIG.MERGE_BRANCH_PREFIX)) {
  const branchAge = getBranchAge(branch)
      const branchAgeMs = branchAge * 60 * 60 * 1000;

      if (branchAgeMs > oneWeekAgo) {log(`Cleaning up old branch: ${branch} (age: ${branchAge.toFixed(1)} hours)`)
        const deleteResult = gitCommand(`push origin --delete ${branch}`, { silent: true })
        if (deleteResult.success) {
  cleanedCount++;log(`Successfully deleted old branch: ${branch}`),
} else {log(`Failed to delete old branch ${branch}: ${deleteResult.error}`, `ERROR`),
}

}
      return analysisResults;
} catch (error) {
      this.log(`Error analyzing pull requests: ${error.message}`, 'error')
      return [],
}

      // Write resolved content;
      fs.writeFileSync(file, resolvedContent)

      this.log(`Resolved conflict in file: ${file}`)

} catch (error) {
      this.log(`Error resolving conflict in file ${file}: ${error.message}`, 'error'),
}
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)),
}
  async start() {
    this.log('Starting Intelligent Repository Manager...')

    try {
      // Initialize;
      await this.getRepositoryStatus()

      // Start monitoring loop;
      setInterval(async () => {
        try {
          await this.intelligentMerge(),
} catch (error) {
          this.log(`Error in monitoring loop: ${error.message}`, 'error'),
}
      }, this.config.healthCheckInterval)

      this.log('Intelligent Repository Manager started successfully')

} catch (error) {
      this.log(`Error starting Intelligent Repository Manager: ${error.message}`, 'error')
      throw error;
}
  }

})
  log(`Cleanup completed. Deleted ${cleanedCount} old branches`)
  return cleanedCount;

}
// Main execution loop;
const main = async () => {
  log(`Intelligent Repository Manager started`)
>>>>>>> origin/automation-fixes
  try {
  // Monitor repository health;
    const healthMetrics = monitorRepositoryHealth();
    // Execute intelligent merging;
    await executeIntelligentMerging();
    // Cleanup old branches;
    const cleanedCount = cleanupOldBranches();
    // Generate summary report;
    const summary = {
} catch (error) {  log(`Repository management cycle failed: ${error.message  }`, `ERROR`)log(`Stack trace: ${error.stack}`, `ERROR`),
}
}
// Handle process signals;
process.on(`SIGINT`, () => {
  log("Received SIGINT. Shutting down gracefully...")
  process.exit(0),
})