<<<<<<< HEAD
#!/usr/bin/env node

/**
 * Intelligent Repository Manager
 * 
 * This script provides intelligent automation for:
 * - Git repository management
 * - Branch health monitoring
 * - Automated merging and conflict resolution
 * - Repository optimization
 * - Development workflow automation
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class IntelligentRepositoryManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-repository-manager.log');
    this.config = this.loadConfig();
    this.mergeHistory = [];
    this.conflictHistory = [];
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'scripts', 'automation', 'config', 'repo-manager.config.json');
    try {
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      }
    } catch (error) {
      this.log('Error loading config, using defaults', 'error');
    }

    return {
      autoMergeEnabled: true,
      conflictResolutionEnabled: true,
      branchCleanupEnabled: true,
      maxOpenPRs: 50,
      mergeStrategy: 'squash',
      conflictThreshold: 3,
      autoRebaseEnabled: true,
      healthCheckInterval: 300000, // 5 minutes
      mergeBatchSize: 5
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    console.log(logEntry);
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, [], {
        shell: true,
        stdio: 'pipe',
        cwd: this.projectRoot,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve(stdout.trim());
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  async getRepositoryStatus() {
    try {
      const status = await this.executeCommand('git status --porcelain');
      const branch = await this.executeCommand('git branch --show-current');
      const remote = await this.executeCommand('git remote get-url origin');
      
      return {
        hasChanges: status.length > 0,
        currentBranch: branch,
        remoteUrl: remote,
        changes: status.split('\n').filter(line => line.trim())
      };
    } catch (error) {
      this.log(`Error getting repository status: ${error.message}`, 'error');
      return null;
    }
  }

  async analyzePullRequests() {
    try {
      // Fetch latest from remote
      await this.executeCommand('git fetch origin');
      
      // Get list of open PRs (this would need GitHub API integration for full functionality)
      const branches = await this.executeCommand('git branch -r --format="%(refname:short)"');
      const featureBranches = branches
        .split('\n')
        .filter(branch => branch.includes('cursor/'))
        .map(branch => branch.replace('origin/', ''));

      this.log(`Found ${featureBranches.length} feature branches to analyze`);

      const analysisResults = [];
      
      for (const branch of featureBranches) {
        try {
          const analysis = await this.analyzeBranch(branch);
          analysisResults.push(analysis);
        } catch (error) {
          this.log(`Error analyzing branch ${branch}: ${error.message}`, 'error');
        }
=======
#!/""usr/bin/env"" node;
/**;
 * Intelligent Repository Manager;
 * ;
 * This automation system provides intelligent Git repository management including: * - Automated PR merging with conflict resolution; * - Intelligent branch management;
 * - Automated conflict resolution;
 * - Repository health monitoring;
 * - Smart deployment coordination;
 * ;
 * @author Zion Tech Group;
 * @version 2.0.0;
 */;
 * ;
 * @author Zion Tech Group;
 * @version 2.0.0;
 */;
const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
// Configuration;
const CONFIG = {;
  REPO_PATH: process.cwd(),;
  MAIN_BRANCH: "main",;
  STAGING_BRANCH: "staging",;
  DEVELOPMENT_BRANCH: "develop",;
  CURSOR_BRANCH_PREFIX: "cursor/",;
  BACKUP_BRANCH_PREFIX: "backup/",;
  MERGE_BRANCH_PREFIX: "merge/",;
  LOG_DIR: "./logs",;
  MAX_CONCURRENT_MERGES: 3,;
  CONFLICT_RESOLUTION_STRATEGY: "intelligent", // intelligent, aggressive, conservative;
  AUTO_MERGE_ENABLED: process.env.AUTO_MERGE_ENABLED === "true",;
  CONFLICT_RESOLUTION_MODE: process.env.CONFLICT_RESOLUTION_MODE || "intelligent",;
  GIT_AUTOMATION_MODE: process.env.GIT_AUTOMATION_MODE === "true",;
  PM2_PATH: process.env.PM2_PATH || `pm2`;,
}
// Utility functions;
const log = (message, level = `INFO`) => {;
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(`logMessage);
  // Ensure log directory exists;
  if (!fs.existsSync(CONFIG.LOG_DIR)) {;
    fs.mkdirSync(CONFIG.LOG_DIR, { recursive: true });,
}
  ;
  // Write to log file;
  fs.appendFileSync(path.join(CONFIG.LOG_DIR, `intelligent-repository-manager.log`), logMessage + `\n`);,
}
const executeCommand = (command, options = {}) => {;
  try {;
    const result = execSync(command, {;
      cwd: CONFIG.REPO_PATH,;
      encoding: "utf8",;
      stdio: options.silent ? "pipe" : `inherit`,;
      ...options;,
});
    return { success: true, output: result }
  } catch (error) {  ;
    return { success: false, error: error.message, output: error.stdout || ``   }
  }
}
;,
} catch (error) {;
    return { success: false, error: error.message, output: error.stdout || "" };`);,
}`);,
};`);
`);
const gitCommand = (command, options = {}) => {return executeCommand(git ${command}, options`);,
}
const isGitRepository = () => {;
  return fs.existsSync(path.join(CONFIG.REPO_PATH, `.git`));,
}
const getCurrentBranch = () => {;
  const result = gitCommand(`branch --show-current`, { silent: true });

const isGitRepository = () => {;
  return fs.existsSync(path.join(CONFIG.REPO_PATH, ".git"));,
}
;
const getCurrentBranch = () => {;
  const result = gitCommand("branch --show-current", { silent: true });
  return result.success ? result.output.trim() : null;,
}
;
const getRemoteBranches = () => {;
  const result = gitCommand("branch -r", { silent: true });
  if (!result.success) return [];
  return result.output;
    .split("\n");
    .map(branch => branch.trim());
    .filter(branch => branch && !branch.includes("HEAD"));
    .map(branch => branch.replace(`origin/`, ``));,
}
;
const getCursorBranches = () => {;
  const branches = getRemoteBranches();
  return branches.filter(branch => branch.startsWith(CONFIG.CURSOR_BRANCH_PREFIX));,
}
;
const getBranchInfo = (branchName) => {const result = gitCommand(`log --oneline ${CONFIG.MAIN_BRANCH}..origin/${branchName}`, { silent: true });
  if (!result.success) return { commits: 0, files: [] }
  const commits = result.output.split(`\n`).filter(line => line.trim()).length;
  // Get changed filesconst filesResult = gitCommand(`diff --name-only ${CONFIG.MAIN_BRANCH}..origin/${branchName}`, { silent: true });
  const files = filesResult.success ? filesResult.output.split(`\n`).filter(line => line.trim()) : [];
  return { commits, files }
}
const createBackupBranch = () => {;
  const timestamp = new Date().toISOString().replace(/[:.]/g, `-`);const backupBranch = `${CONFIG.BACKUP_BRANCH_PREFIX}${timestamp}`;
  ;
  const commits = result.output.split("\n").filter(line => line.trim()).length;
  ;
  // Get changed filesconst filesResult = gitCommand(`diff --name-only ${CONFIG.MAIN_BRANCH}..origin/${branchName}`, { silent: true });
  const files = filesResult.success ? filesResult.output.split("\n").filter(line => line.trim()) : [];
  ;
  return { commits, files }
}
;
const createBackupBranch = () => {;
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");const backupBranch = `${CONFIG.BACKUP_BRANCH_PREFIX}${timestamp}`;
  log(`Creating backup branch: ${backupBranch}`);
  ;
  // Create backup of current mainconst result = gitCommand(`checkout -b ${backupBranch}`, { silent: true });
  if (result.success) {gitCommand(`push origin ${backupBranch}`, { silent: true });log(`Backup branch created and pushed: ${backupBranch}`);
    return backupBranch;,
}
  log(`Failed to create backup branch: ${result.error}`, `ERROR`);
  return null;,
}
;
const intelligentConflictResolution = (conflictedFiles, branchName) => {log(`Resolving conflicts for branch: ${branchName}`);
  const resolutionStrategies = {;
    intelligent: () => {;
      // Intelligent conflict resolution based on file type and content;
      conflictedFiles.forEach(file => {;
        const fileExt = path.extname(file);
        const fileContent = fs.readFileSync(file, `utf8`);
        if (fileExt === `.json` || fileExt === ".js" || fileExt === ".ts" || fileExt === `.jsx` || fileExt === `.tsx`) {;
          // For code files, try to merge intelligently;
          try {const result = gitCommand(`checkout --ours "${file}`, { silent: true });
            if (result.success) {log(`Resolved conflict in ${file} using `ours` strategy`);,
}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);,
}
        } else if (fileExt === `.md` || fileExt === `.txt`) {;,
} else if (fileExt === ".md" || fileExt === ".txt") {;
          // For documentation, try to merge both versions;
          try {const result = gitCommand(`checkout --theirs ${file}`, { silent: true });
            if (result.success) {log(`Resolved conflict in ${file} using `theirs` strategy`);,
}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);,
}
        } else {;,
} else {;
          // For other files, use default strategy;
          try {const result = gitCommand(`checkout --ours ${file}"`, { silent: true });,
} else {;
          // For other files, use default strategy;
          try {const result = gitCommand(`checkout --ours "${file}`, { silent: true });
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
            if (result.success) {log(`Resolved conflict in ${file} using default strategy`);,
}
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);,
}
        }
      });,
},;
    ;
    aggressive: () => {;
      // Always use `ours` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --ours ${file}`, { silent: true });log(`Resolved conflict in ${file} using aggressive strategy`);,
});,
},;
    ;
    conservative: () => {;
      // Always use `theirs` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --theirs ${file}`, { silent: true });log(`Resolved conflict in ${file} using conservative strategy`)});,
}
  }
  ;
  const strategy = resolutionStrategies[CONFIG.CONFLICT_RESOLUTION_MODE] || resolutionStrategies.intelligent;
  strategy();,
}
;
const mergeBranch = async (branchName) => {log(`Attempting to merge branch: ${branchName}`);
  ;
  // Checkout main branchlet result = gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { silent: true });
  if (!result.success) {log(`Failed to checkout ${CONFIG.MAIN_BRANCH}: ${result.error}`, `ERROR`);
    return false;,
}
  ;
  // Pull latest changesresult = gitCommand(`pull origin ${CONFIG.MAIN_BRANCH}`, { silent: true });
  if (!result.success) {log(`Failed to pull latest changes: ${result.error}`, `ERROR`);
    return false;,
}
  ;
  // Attempt mergeresult = gitCommand(`merge --no-edit origin/${branchName}`, { silent: true });
  if (result.success) {log(`Successfully merged ${branchName} into ${CONFIG.MAIN_BRANCH}`);
    ;
    // Push changesconst pushResult = gitCommand(`push origin ${CONFIG.MAIN_BRANCH}`, { silent: true });
    if (pushResult.success) {log(`Pushed merged changes to remote`);
      ;
      // Clean up merged branchgitCommand(`push origin --delete ${branchName}`, { silent: true });log(`Deleted remote branch: ${branchName}`);
      ;
      return true;,
} else {log(`Failed to push merged changes: ${pushResult.error}`, `ERROR`);
      return false;,
}
  } else {;
    // Handle merge conflictslog(`Merge conflict detected for branch: ${branchName}`);
    // Get conflicted files;
    const conflictedFilesResult = gitCommand(`diff --name-only --diff-filter=U`, { silent: true });
    if (conflictedFilesResult.success) {;
      const conflictedFiles = conflictedFilesResult.output.split(`\n`).filter(line => line.trim());
      if (conflictedFiles.length > 0) {log(`Conflicted files: ${conflictedFiles.join(", ")}`);
        // Resolve conflicts intelligently;
        intelligentConflictResolution(conflictedFiles, branchName);
        // Stage resolved files;
        gitCommand(`add .`, { silent: true });
        // Commit resolutionconst commitResult = gitCommand(`commit -m Auto-resolve merge conflicts for ${branchName} - ${new Date().toISOString()}"`, { silent: true });        if (commitResult.success) {log(`Successfully resolved conflicts for ${branchName}`);
          ;
          // Push resolved changesconst pushResult = gitCommand(`push origin ${CONFIG.MAIN_BRANCH}`, { silent: true });
          if (pushResult.success) {log(`Pushed conflict resolution to remote`);
            ;
            // Clean up merged branchgitCommand(`push origin --delete ${branchName}`, { silent: true });log(`Deleted remote branch: ${branchName}`);
            ;
            return true;,
} else {log(`Failed to push conflict resolution: ${pushResult.error}`, `ERROR`);
            return false;,
}
        } else {log(`Failed to commit conflict resolution: ${commitResult.error}`, `ERROR`);
          return false;,
}
      }
    }
    ;
    // Abort merge if we get here;
    gitCommand(`merge --abort`, { silent: true });log(`Aborted merge for branch: ${branchName}`);
    ;
    // Abort merge if we get here;
    gitCommand("merge --abort", { silent: true });log(`Aborted merge for branch: ${branchName}`);
    return false;,
}
}
;
const intelligentBranchAnalysis = (branches) => {log(`Analyzing ${branches.length} branches for intelligent merging`);
  ;
  const branchAnalysis = branches.map(branch => {;
    const info = getBranchInfo(branch);
    const priority = calculateBranchPriority(branch, info);
    return {;
      branch,;
      ...info,;
      priority,;
      mergeable: info.commits > 0 && info.files.length > 0;,
}
  });
  ;
  // Sort by priority (highest first);
  return branchAnalysis.sort((a, b) => b.priority - a.priority);,
}
;
const calculateBranchPriority = (branch, info) => {;
  let priority = 0;
  // Base priority on commit count;
  priority += info.commits * 10;
  ;
  // Base priority on commit count;
  priority += info.commits * 10;
  ;
  // Priority based on file types;
  const fileTypes = info.files.map(file => path.extname(file));
  const codeFiles = fileTypes.filter(ext => [`.js`, `.ts`, ".jsx", ".tsx"].includes(ext)).length;
  const configFiles = fileTypes.filter(ext => [".json", ".yml", ".yaml", ".toml"].includes(ext)).length;
  const docFiles = fileTypes.filter(ext => [".md", ".txt", ".rst"].includes(ext)).length;
  priority += codeFiles * 5;      // Code files are high priority;
  priority += configFiles * 3;    // Config files are medium priority;
  priority += docFiles * 1;       // Documentation is lower priority;
  // Priority based on branch name patterns;
  if (branch.includes("hotfix") || branch.includes("critical")) {;
    priority += 100;,
} else if (branch.includes(`feature`)) {;
    priority += 50;,
} else if (branch.includes(`bugfix`)) {;
    priority += 75;,
}
  ;
  // Priority based on age (newer branches get higher priority);
  const branchAge = getBranchAge(branch);
  if (branchAge < 24) { // Less than 24 hours;
    priority += 25;,
} else if (branchAge < 168) { // Less than 1 week;
    priority += 15;,
}
  ;
  return priority;,
}
;
const getBranchAge = (branchName) => {const result = gitCommand(`log -1 --format=%ct origin/${branchName}`, { silent: true });
  if (!result.success) return 999; // Default to old if can`t determine;
  if (!result.success) return 999; // Default to old if can"t determine;
  ;
  const commitTime = parseInt(result.output.trim());
  const now = Math.floor(Date.now() / 1000);
  const ageInHours = (now - commitTime) / 3600;
  ;
  return ageInHours;,
}
const executeIntelligentMerging = async () => {;
  if (!CONFIG.AUTO_MERGE_ENABLED) {;
    log(`Auto-merge is disabled. Skipping intelligent merging.`);
    return;,
}
  ;
  log(`Starting intelligent repository management cycle");
  // Check if we"re in a git repository;
  if (!isGitRepository()) {;
    log(`Not in a git repository. Exiting.`, `ERROR`);
    return;,
}
  ;
  // Get current branch;
  const currentBranch = getCurrentBranch();
  if (currentBranch !== CONFIG.MAIN_BRANCH) {log(`Not on main branch (currently on ${currentBranch}). Switching to main.`);gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { silent: true });,
}
  ;
  // Fetch latest changes;
  log(`Fetching latest changes from remote`);
  const fetchResult = gitCommand(`fetch origin`, { silent: true });
  if (!fetchResult.success) {log(`Failed to fetch from remote: ${fetchResult.error}`, `ERROR`);
    return;,
}
  ;
  // Get cursor branches;
  const cursorBranches = getCursorBranches();
  if (cursorBranches.length === 0) {;
    log(`No cursor branches found. Nothing to merge.`);
    return;,
}
  log(`Found ${cursorBranches.length} cursor branches to analyze`);
  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches);
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable);
  if (mergeableBranches.length === 0) {;
    log(`No mergeable branches found.`);
    return;,
}
  log(`Found ${mergeableBranches.length} mergeable branches`);
  // Create backup before merging;
  const backupBranch = createBackupBranch();
  if (!backupBranch) {;
    log(`Failed to create backup branch. Aborting merge cycle.`, `ERROR`);
    return;,
}
  ;
  ;
  // Fetch latest changes;
  log("Fetching latest changes from remote");
  const fetchResult = gitCommand("fetch origin", { silent: true });
  if (!fetchResult.success) {log(`Failed to fetch from remote: ${fetchResult.error}`, "ERROR");
    return;,
}
  ;
  // Get cursor branches;
  const cursorBranches = getCursorBranches();
  if (cursorBranches.length === 0) {;
    log("No cursor branches found. Nothing to merge.");
    return;,
}
  log(`Found ${cursorBranches.length} cursor branches to analyze`);
  ;
  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches);
  ;
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable);
  ;
  if (mergeableBranches.length === 0) {;
    log("No mergeable branches found.");
    return;,
}
  log(`Found ${mergeableBranches.length} mergeable branches`);
  ;
  // Create backup before merging;
  const backupBranch = createBackupBranch();
  if (!backupBranch) {;
    log("Failed to create backup branch. Aborting merge cycle.", "ERROR");
    return;,
}
  ;
  // Process branches in priority order;
  let successCount = 0;
  let failureCount = 0;
  ;
  for (const branchInfo of mergeableBranches.slice(0, CONFIG.MAX_CONCURRENT_MERGES)) {log(`Processing branch: ${branchInfo.branch} (Priority: ${branchInfo.priority})`);
    ;
    try {;
      const success = await mergeBranch(branchInfo.branch);
      if (success) {;
        successCount++;log(`Successfully merged branch: ${branchInfo.branch}`);,
} else {;
        failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, `ERROR`);,
}
    } catch (error) {  ;
      failureCount++;log(`Error processing branch ${branchInfo.branch  }: ${error.message}`, `ERROR`);,
}
    ;,
} else {;
        failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, "ERROR");,
}
    } catch (error) {;
      failureCount++;log(`Error processing branch ${branchInfo.branch}: ${error.message}`, "ERROR");,
}
    ;
    // Small delay between merges;
    // Small delay between merges;
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259;
    await new Promise(resolve => setTimeout(resolve, 1000));,
}
  ;
  // Summarylog(`Merge cycle completed. Success: ${successCount}, Failures: ${failureCount}`);
  ;
  if (successCount > 0) {log(`Successfully merged ${successCount} branches. Backup available at: ${backupBranch}`);,
}
  ;
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, `WARN`);,
}
}
const monitorRepositoryHealth = () => {;
  log(`Monitoring repository health`);
  const healthMetrics = {;
    timestamp: new Date().toISOString(),;
    currentBranch: getCurrentBranch(),;
    remoteBranches: getRemoteBranches().length,;
    cursorBranches: getCursorBranches().length,;
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,;
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;,
}
  // Check for potential issues;
  const issues = [];
  if (healthMetrics.cursorBranches > 50) {;
    issues.push(`High number of cursor branches - consider cleanup`);,
}
  ;
  if (healthMetrics.backupBranches > 20) {;
    issues.push(`High number of backup branches - consider cleanup`);
  ;
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, "WARN");,
}
}
;
const monitorRepositoryHealth = () => {;
  log("Monitoring repository health");
  ;
  const healthMetrics = {;
    timestamp: new Date().toISOString(),;
    currentBranch: getCurrentBranch(),;
    remoteBranches: getRemoteBranches().length,;
    cursorBranches: getCursorBranches().length,;
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,;
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;,
}
  ;
  // Check for potential issues;
  const issues = [];
  ;
  if (healthMetrics.cursorBranches > 50) {;
    issues.push("High number of cursor branches - consider cleanup");,
}
  ;
  if (healthMetrics.backupBranches > 20) {;
    issues.push("High number of backup branches - consider cleanup");,
}
  ;
  if (healthMetrics.currentBranch !== CONFIG.MAIN_BRANCH) {issues.push(`Not on main branch (${healthMetrics.currentBranch})`);,
}
  ;
  // Log health metricslog(`Repository Health Metrics: ${JSON.stringify(healthMetrics, null, 2)}`);
  if (issues.length > 0) {log(`Repository Health Issues: ${issues.join("; ")}`, `WARN`);,
}
  ;
  return healthMetrics;,
}
const cleanupOldBranches = () => {;
  log(`Cleaning up old branches`);

const cleanupOldBranches = () => {;
  log("Cleaning up old branches");
  ;
  const branches = getRemoteBranches();
  const now = Date.now();
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);
  ;
  let cleanedCount = 0;
  ;
  branches.forEach(branch => {;
    if (branch.startsWith(CONFIG.BACKUP_BRANCH_PREFIX) || branch.startsWith(CONFIG.MERGE_BRANCH_PREFIX)) {;
      const branchAge = getBranchAge(branch);
      const branchAgeMs = branchAge * 60 * 60 * 1000;
      ;
      if (branchAgeMs > oneWeekAgo) {log(`Cleaning up old branch: ${branch} (age: ${branchAge.toFixed(1)} hours)`);
        const deleteResult = gitCommand(`push origin --delete ${branch}`, { silent: true });
        if (deleteResult.success) {;
          cleanedCount++;log(`Successfully deleted old branch: ${branch}`);,
} else {log(`Failed to delete old branch ${branch}: ${deleteResult.error}`, `ERROR`);,
}
>>>>>>> main
      }

      return analysisResults;
    } catch (error) {
      this.log(`Error analyzing pull requests: ${error.message}`, 'error');
      return [];
    }
<<<<<<< HEAD
  }

  async analyzeBranch(branchName) {
    try {
      const baseBranch = 'main';
      
      // Get commit count
      const commitCount = await this.executeCommand(`git rev-list --count ${baseBranch}..origin/${branchName}`);
      
      // Get file changes
      const fileChanges = await this.executeCommand(`git diff --name-only ${baseBranch}..origin/${branchName}`);
      const changedFiles = fileChanges.split('\n').filter(file => file.trim());
      
      // Get conflict status
      const hasConflicts = await this.checkForConflicts(branchName, baseBranch);
      
      // Analyze complexity
      const complexity = this.analyzeComplexity(changedFiles, parseInt(commitCount));
      
      return {
        branchName,
        commitCount: parseInt(commitCount),
        changedFiles: changedFiles.length,
        hasConflicts,
        complexity,
        mergeable: !hasConflicts && complexity.score <= this.config.conflictThreshold,
        priority: this.calculatePriority(complexity, parseInt(commitCount))
      };
    } catch (error) {
      this.log(`Error analyzing branch ${branchName}: ${error.message}`, 'error');
      return { branchName, error: error.message };
    }
  }

  async checkForConflicts(branchName, baseBranch) {
    try {
      // Try to merge without actually merging
      await this.executeCommand(`git merge-tree $(git merge-base origin/${baseBranch} origin/${branchName}) origin/${baseBranch} origin/${branchName}`);
      return false;
    } catch (error) {
      return true;
    }
  }

  analyzeComplexity(changedFiles, commitCount) {
    let score = 0;
    let criticalFiles = 0;
    
    // Analyze file types and locations
    for (const file of changedFiles) {
      if (file.includes('package.json') || file.includes('yarn.lock')) {
        score += 3; // Dependency changes are critical
        criticalFiles++;
      } else if (file.includes('src/') || file.includes('components/')) {
        score += 1; // Source code changes
      } else if (file.includes('config/') || file.includes('.env')) {
        score += 2; // Configuration changes
        criticalFiles++;
      } else if (file.includes('test/') || file.includes('__tests__/')) {
        score += 0.5; // Test changes are less critical
      }
    }
    
    // Factor in commit count
    score += Math.min(commitCount * 0.5, 5);
    
    return {
      score: Math.round(score * 10) / 10,
      criticalFiles,
      riskLevel: score > 5 ? 'HIGH' : score > 3 ? 'MEDIUM' : 'LOW'
    };
  }

  calculatePriority(complexity, commitCount) {
    let priority = 0;
    
    // Higher complexity = higher priority
    priority += complexity.score * 2;
    
    // More commits = higher priority
    priority += Math.min(commitCount * 0.3, 3);
    
    // Critical files increase priority
    if (complexity.criticalFiles > 0) {
      priority += complexity.criticalFiles * 1.5;
    }
    
    return Math.round(priority * 10) / 10;
  }

  async intelligentMerge() {
    try {
      this.log('Starting intelligent merge process...');
      
      const analysisResults = await this.analyzePullRequests();
      
      if (analysisResults.length === 0) {
        this.log('No branches to analyze');
        return;
      }
      
      // Sort by priority (highest first)
      analysisResults.sort((a, b) => (b.priority || 0) - (a.priority || 0));
      
      // Process in batches
      const batchSize = this.config.mergeBatchSize || 5;
      const batches = [];
      
      for (let i = 0; i < analysisResults.length; i += batchSize) {
        batches.push(analysisResults.slice(i, i + batchSize));
      }
      
      for (const batch of batches) {
        await this.processMergeBatch(batch);
        // Wait between batches to avoid overwhelming the system
        await this.sleep(2000);
      }
      
      this.log('Intelligent merge process completed');
      
    } catch (error) {
      this.log(`Error in intelligent merge: ${error.message}`, 'error');
    }
  }

  async processMergeBatch(branches) {
    for (const branch of branches) {
      if (branch.mergeable) {
        try {
          await this.mergeBranch(branch.branchName);
          this.log(`Successfully merged branch: ${branch.branchName}`);
        } catch (error) {
          this.log(`Failed to merge branch ${branch.branchName}: ${error.message}`, 'error');
        }
      } else {
        this.log(`Branch ${branch.branchName} is not mergeable (complexity: ${branch.complexity.score}, conflicts: ${branch.hasConflicts})`);
      }
    }
  }

  async mergeBranch(branch) {
    try {
      this.log(`Attempting to merge branch: ${branch}`);
      
      // Switch to main branch
      await this.executeCommand('git checkout main');
      
      // Pull latest changes
      await this.executeCommand('git pull origin main');
      
      // Merge the feature branch
      await this.executeCommand(`git merge origin/${branch} --no-ff --strategy=recursive -X theirs`);
      
      // Push changes
      await this.executeCommand('git push origin main');
      
      // Clean up the feature branch
      if (this.config.branchCleanupEnabled) {
        await this.executeCommand(`git push origin --delete ${branch}`);
        this.log(`Deleted feature branch: ${branch}`);
      }
      
      this.log(`Successfully merged and cleaned up branch: ${branch}`);
      
    } catch (error) {
      this.log(`Error merging branch ${branch}: ${error.message}`, 'error');
      
      // Try to resolve conflicts
      if (error.message.includes('conflict')) {
        await this.resolveConflicts();
      }
      
      throw error;
    }
  }

  async resolveConflicts() {
    try {
      this.log('Attempting to resolve merge conflicts...');
      
      // Get list of conflicted files
      const conflictedFiles = await this.executeCommand('git diff --name-only --diff-filter=U');
      
      if (conflictedFiles.length === 0) {
        this.log('No conflicts to resolve');
        return;
      }
      
      this.log(`Found ${conflictedFiles.length} conflicted files`);
      
      for (const file of conflictedFiles.split('\n').filter(f => f.trim())) {
        await this.resolveFileConflict(file);
      }
      
      // Add resolved files
      await this.executeCommand('git add .');
      
      // Complete the merge
      await this.executeCommand('git commit -m "Resolve merge conflicts automatically"');
      
      this.log('Successfully resolved all conflicts');
      
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`, 'error');
      throw error;
    }
  }

  async resolveFileConflict(file) {
    try {
      this.log(`Resolving conflict in file: ${file}`);
      
      // Read the conflicted file
      const content = fs.readFileSync(file, 'utf8');
      
      // Simple conflict resolution strategy: keep both versions
      const resolvedContent = content
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> [^\n]*\n/g, '');
      
      // Write resolved content
      fs.writeFileSync(file, resolvedContent);
      
      this.log(`Resolved conflict in file: ${file}`);
      
    } catch (error) {
      this.log(`Error resolving conflict in file ${file}: ${error.message}`, 'error');
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async start() {
    this.log('Starting Intelligent Repository Manager...');
    
    try {
      // Initialize
      await this.getRepositoryStatus();
      
      // Start monitoring loop
      setInterval(async () => {
        try {
          await this.intelligentMerge();
        } catch (error) {
          this.log(`Error in monitoring loop: ${error.message}`, 'error');
        }
      }, this.config.healthCheckInterval);
      
      this.log('Intelligent Repository Manager started successfully');
      
    } catch (error) {
      this.log(`Error starting Intelligent Repository Manager: ${error.message}`, 'error');
      throw error;
    }
  }
=======
  });
  log(`Cleanup completed. Deleted ${cleanedCount} old branches`);
  return cleanedCount;,
>>>>>>> main
}
// Main execution loop;
const main = async () => {;
  log(`Intelligent Repository Manager started`);
  try {;
    // Monitor repository health;
    const healthMetrics = monitorRepositoryHealth();
    // Execute intelligent merging;
    await executeIntelligentMerging();
    // Cleanup old branches;
    const cleanedCount = cleanupOldBranches();
    // Generate summary report;
    const summary = {;
      timestamp: new Date().toISOString(),;
      healthMetrics,;
      cleanedBranches: cleanedCount,;
      status: `completed`;,
}
    log(`Repository management cycle completed successfully: ${JSON.stringify(summary, null, 2)}`);
    ;,
} catch (error) {  log(`Repository management cycle failed: ${error.message  }`, `ERROR`);log(`Stack trace: ${error.stack}`, `ERROR`);,
}
}
// Handle process signals;
process.on(`SIGINT`, () => {;
  log("Received SIGINT. Shutting down gracefully...");
  process.exit(0);,
});

<<<<<<< HEAD
// Start the manager if run directly
if (require.main === module) {
  const manager = new IntelligentRepositoryManager();
  manager.start().catch(error => {
    console.error('Failed to start Intelligent Repository Manager:', error);
    process.exit(1);
  });
}

module.exports = IntelligentRepositoryManager;
=======
process.on("SIGTERM", () => {;
  log("Received SIGTERM. Shutting down gracefully...');
  process.exit(0);,
});
// Start the main loop;
if (require.main === module) {;
  main();

// Start the main loop;
if (require.main === module) {;
  main();
  ;
  // Schedule next execution;
  const interval = 15 * 60 * 1000; // 15 minutes;
  setInterval(main, interval);,
}
;
module.exports = {;
  executeIntelligentMerging,;
  monitorRepositoryHealth,;
  cleanupOldBranches,;
  intelligentConflictResolution,;
  calculateBranchPriority;,
}
>>>>>>> main
