#!/''usr/bin/env'' node;
/**
 * Intelligent Repository Manager;
 * 
 * This automation system provides intelligent Git repository management including: * - Automated PR merging with conflict resolution;
 * - Intelligent branch management;
 * - Automated conflict resolution;
 * - Repository health monitoring;
 * - Smart deployment coordination;
 * 
 * @author Zion Tech Group;
 * @version 2.0.0;
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Configuration;
const CONFIG = {
  REPO_PATH: process.cwd(),
  MAIN_BRANCH: 'main',
  STAGING_BRANCH: 'staging',
  DEVELOPMENT_BRANCH: 'develop',
  CURSOR_BRANCH_PREFIX: 'cursor/',
  BACKUP_BRANCH_PREFIX: 'backup/',
  MERGE_BRANCH_PREFIX: 'merge/',
  LOG_DIR: './logs',
  MAX_CONCURRENT_MERGES: 3,
  CONFLICT_RESOLUTION_STRATEGY: 'intelligent', // intelligent, aggressive, conservative;
  AUTO_MERGE_ENABLED: process.env.AUTO_MERGE_ENABLED === 'true',
  CONFLICT_RESOLUTION_MODE: process.env.CONFLICT_RESOLUTION_MODE || 'intelligent',
  GIT_AUTOMATION_MODE: process.env.GIT_AUTOMATION_MODE === 'true',
  PM2_PATH: process.env.PM2_PATH || `pm2`
};

// Utility functions;
const log = (message, level = `INFO`) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(`logMessage);
  
  // Ensure log directory exists;
  if (!fs.existsSync(CONFIG.LOG_DIR)) {
    fs.mkdirSync(CONFIG.LOG_DIR, { recursive: true });
  }
  
  // Write to log file;
  fs.appendFileSync(path.join(CONFIG.LOG_DIR, `intelligent-repository-manager.log`), logMessage + `\n`);
};

const executeCommand = (command, options = {}) => {
  try {
    const result = execSync(command, {
      cwd: CONFIG.REPO_PATH,
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : `inherit`,
      ...options;
    });
    return { success: true, output: result };
  } catch (error) {  
    return { success: false, error: error.message, output: error.stdout || ``   };
  }
};
;
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || '' };`);
  }`);
};`);
`);
const gitCommand = (command, options = {}) => {return executeCommand(git ${command}, options`);
};

const isGitRepository = () => {
  return fs.existsSync(path.join(CONFIG.REPO_PATH, `.git`));
};

const getCurrentBranch = () => {
  const result = gitCommand(`branch --show-current`, { silent: true });
  return result.success ? result.output.trim() : null;
};
;
const getRemoteBranches = () => {;
  const result = gitCommand('branch -r', { silent: true });
  if (!result.success) return [];
  
  return result.output;
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch && !branch.includes('HEAD'))
    .map(branch => branch.replace(`origin/`, ``));
};
;
const getCursorBranches = () => {;
  const branches = getRemoteBranches();
  return branches.filter(branch => branch.startsWith(CONFIG.CURSOR_BRANCH_PREFIX));
};
;
const getBranchInfo = (branchName) => {const result = gitCommand(`log --oneline ${CONFIG.MAIN_BRANCH}..origin/${branchName}`, { silent: true });
  if (!result.success) return { commits: 0, files: [] };
  
  const commits = result.output.split(`\n`).filter(line => line.trim()).length;
  
  // Get changed filesconst filesResult = gitCommand(`diff --name-only ${CONFIG.MAIN_BRANCH}..origin/${branchName}`, { silent: true });
  const files = filesResult.success ? filesResult.output.split(`\n`).filter(line => line.trim()) : [];
  
  return { commits, files };
};

const createBackupBranch = () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, `-`);const backupBranch = `${CONFIG.BACKUP_BRANCH_PREFIX}${timestamp}`;
  log(`Creating backup branch: ${backupBranch}`);
  ;
  // Create backup of current mainconst result = gitCommand(`checkout -b ${backupBranch}`, { silent: true });
  if (result.success) {gitCommand(`push origin ${backupBranch}`, { silent: true });log(`Backup branch created and pushed: ${backupBranch}`);
    return backupBranch;
  }
  log(`Failed to create backup branch: ${result.error}`, `ERROR`);
  return null;
};
;
const intelligentConflictResolution = (conflictedFiles, branchName) => {log(`Resolving conflicts for branch: ${branchName}`);
  
  const resolutionStrategies = {
    intelligent: () => {
      // Intelligent conflict resolution based on file type and content;
      conflictedFiles.forEach(file => {
        const fileExt = path.extname(file);
        const fileContent = fs.readFileSync(file, `utf8`);
        
        if (fileExt === `.json` || fileExt === '.js' || fileExt === '.ts' || fileExt === `.jsx` || fileExt === `.tsx`) {
          // For code files, try to merge intelligently;
          try {const result = gitCommand(`checkout --ours "${file}`, { silent: true });
            if (result.success) {log(`Resolved conflict in ${file} using `ours` strategy`);
            }
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);
          }
        } else if (fileExt === `.md` || fileExt === `.txt`) {
          // For documentation, try to merge both versions;
          try {const result = gitCommand(`checkout --theirs ${file}"`, { silent: true });
            if (result.success) {log(`Resolved conflict in ${file} using `theirs` strategy`);
            }
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);
          }
        } else {
          // For other files, use default strategy;
          try {const result = gitCommand(`checkout --ours "${file}`, { silent: true });
            if (result.success) {log(`Resolved conflict in ${file} using default strategy`);
            }
          } catch (error) {  log(`Failed to resolve conflict in ${file  }: ${error}`, `ERROR`);
          }
        }
      });
    },
    
    aggressive: () => {
      // Always use `ours` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --ours ${file}"`, { silent: true });log(`Resolved conflict in ${file} using aggressive strategy`);
      });
    },
    
    conservative: () => {
      // Always use `theirs` strategy;
      conflictedFiles.forEach(file => {gitCommand(`checkout --theirs "${file}`, { silent: true });log(`Resolved conflict in ${file} using conservative strategy`);
    });
    }
  };
  ;
  const strategy = resolutionStrategies[CONFIG.CONFLICT_RESOLUTION_MODE] || resolutionStrategies.intelligent;
  strategy();
};
;
const mergeBranch = async (branchName) => {log(`Attempting to merge branch: ${branchName}`);
  ;
  // Checkout main branchlet result = gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { silent: true });
  if (!result.success) {log(`Failed to checkout ${CONFIG.MAIN_BRANCH}: ${result.error}`, `ERROR`);
    return false;
  }
  ;
  // Pull latest changesresult = gitCommand(`pull origin ${CONFIG.MAIN_BRANCH}`, { silent: true });
  if (!result.success) {log(`Failed to pull latest changes: ${result.error}`, `ERROR`);
    return false;
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
      return true;
    } else {log(`Failed to push merged changes: ${pushResult.error}`, `ERROR`);
      return false;
    }
  } else {;
    // Handle merge conflictslog(`Merge conflict detected for branch: ${branchName}`);
    
    // Get conflicted files;
    const conflictedFilesResult = gitCommand(`diff --name-only --diff-filter=U`, { silent: true });
    if (conflictedFilesResult.success) {
      const conflictedFiles = conflictedFilesResult.output.split(`\n`).filter(line => line.trim());
      
      if (conflictedFiles.length > 0) {log(`Conflicted files: ${conflictedFiles.join(', ')}`);
        
        // Resolve conflicts intelligently;
        intelligentConflictResolution(conflictedFiles, branchName);
        
        // Stage resolved files;
        gitCommand(`add .`, { silent: true });
        
        // Commit resolutionconst commitResult = gitCommand(`commit -m Auto-resolve merge conflicts for ${branchName} - ${new Date().toISOString()}"`, { silent: true });
        if (commitResult.success) {log(`Successfully resolved conflicts for ${branchName}`);
          ;
          // Push resolved changesconst pushResult = gitCommand(`push origin ${CONFIG.MAIN_BRANCH}`, { silent: true });
          if (pushResult.success) {log(`Pushed conflict resolution to remote`);
            ;
            // Clean up merged branchgitCommand(`push origin --delete ${branchName}`, { silent: true });log(`Deleted remote branch: ${branchName}`);
            ;
            return true;
          } else {log(`Failed to push conflict resolution: ${pushResult.error}`, `ERROR`);
            return false;
          }
        } else {log(`Failed to commit conflict resolution: ${commitResult.error}`, `ERROR`);
          return false;
        }
      }
    }
    
    // Abort merge if we get here;
    gitCommand(`merge --abort`, { silent: true });log(`Aborted merge for branch: ${branchName}`);
    return false;
  }
};
;
const intelligentBranchAnalysis = (branches) => {log(`Analyzing ${branches.length} branches for intelligent merging`);
  ;
  const branchAnalysis = branches.map(branch => {;
    const info = getBranchInfo(branch);
    const priority = calculateBranchPriority(branch, info);
    
    return {
      branch,
      ...info,
      priority,
      mergeable: info.commits > 0 && info.files.length > 0;
    };
  });
  ;
  // Sort by priority (highest first);
  return branchAnalysis.sort((a, b) => b.priority - a.priority);
};
;
const calculateBranchPriority = (branch, info) => {;
  let priority = 0;
  
  // Base priority on commit count;
  priority += info.commits * 10;
  
  // Priority based on file types;
  const fileTypes = info.files.map(file => path.extname(file));
  const codeFiles = fileTypes.filter(ext => [`.js`, `.ts`, '.jsx', '.tsx'].includes(ext)).length;
  const configFiles = fileTypes.filter(ext => ['.json', '.yml', '.yaml', '.toml'].includes(ext)).length;
  const docFiles = fileTypes.filter(ext => ['.md', '.txt', '.rst'].includes(ext)).length;
  
  priority += codeFiles * 5;      // Code files are high priority;
  priority += configFiles * 3;    // Config files are medium priority;
  priority += docFiles * 1;       // Documentation is lower priority;
  // Priority based on branch name patterns;
  if (branch.includes('hotfix') || branch.includes('critical')) {
    priority += 100;
  } else if (branch.includes(`feature`)) {
    priority += 50;
  } else if (branch.includes(`bugfix`)) {
    priority += 75;
  }
  ;
  // Priority based on age (newer branches get higher priority);
  const branchAge = getBranchAge(branch);
  if (branchAge < 24) { // Less than 24 hours;
    priority += 25;
  } else if (branchAge < 168) { // Less than 1 week;
    priority += 15;
  }
  ;
  return priority;
};
;
const getBranchAge = (branchName) => {const result = gitCommand(`log -1 --format=%ct origin/${branchName}`, { silent: true });
  if (!result.success) return 999; // Default to old if can`t determine;
  const commitTime = parseInt(result.output.trim());
  const now = Math.floor(Date.now() / 1000);
  const ageInHours = (now - commitTime) / 3600;
  ;
  return ageInHours;
};

const executeIntelligentMerging = async () => {
  if (!CONFIG.AUTO_MERGE_ENABLED) {
    log(`Auto-merge is disabled. Skipping intelligent merging.`);
    return;
  }
  
  log(`Starting intelligent repository management cycle');
  
  // Check if we're in a git repository;
  if (!isGitRepository()) {
    log(`Not in a git repository. Exiting.`, `ERROR`);
    return;
  }
  
  // Get current branch;
  const currentBranch = getCurrentBranch();
  if (currentBranch !== CONFIG.MAIN_BRANCH) {log(`Not on main branch (currently on ${currentBranch}). Switching to main.`);gitCommand(`checkout ${CONFIG.MAIN_BRANCH}`, { silent: true });
  }
  
  // Fetch latest changes;
  log(`Fetching latest changes from remote`);
  const fetchResult = gitCommand(`fetch origin`, { silent: true });
  if (!fetchResult.success) {log(`Failed to fetch from remote: ${fetchResult.error}`, `ERROR`);
    return;
  }
  
  // Get cursor branches;
  const cursorBranches = getCursorBranches();
  if (cursorBranches.length === 0) {
    log(`No cursor branches found. Nothing to merge.`);
    return;
  }
  log(`Found ${cursorBranches.length} cursor branches to analyze`);
  
  // Analyze branches intelligently;
  const branchAnalysis = intelligentBranchAnalysis(cursorBranches);
  
  // Filter mergeable branches;
  const mergeableBranches = branchAnalysis.filter(branch => branch.mergeable);
  
  if (mergeableBranches.length === 0) {
    log(`No mergeable branches found.`);
    return;
  }
  log(`Found ${mergeableBranches.length} mergeable branches`);
  
  // Create backup before merging;
  const backupBranch = createBackupBranch();
  if (!backupBranch) {
    log(`Failed to create backup branch. Aborting merge cycle.`, `ERROR`);
    return;
  }
  
  // Process branches in priority order;
  let successCount = 0;
  let failureCount = 0;
  ;
  for (const branchInfo of mergeableBranches.slice(0, CONFIG.MAX_CONCURRENT_MERGES)) {log(`Processing branch: ${branchInfo.branch} (Priority: ${branchInfo.priority})`);
    ;
    try {;
      const success = await mergeBranch(branchInfo.branch);
      if (success) {;
        successCount++;log(`Successfully merged branch: ${branchInfo.branch}`);
      } else {
        failureCount++;log(`Failed to merge branch: ${branchInfo.branch}`, `ERROR`);
      }
    } catch (error) {  
      failureCount++;log(`Error processing branch ${branchInfo.branch  }: ${error.message}`, `ERROR`);
    }
    
    // Small delay between merges;
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  ;
  // Summarylog(`Merge cycle completed. Success: ${successCount}, Failures: ${failureCount}`);
  ;
  if (successCount > 0) {log(`Successfully merged ${successCount} branches. Backup available at: ${backupBranch}`);
  }
  
  if (failureCount > 0) {log(`${failureCount} branches failed to merge. Check logs for details.`, `WARN`);
  }
};

const monitorRepositoryHealth = () => {
  log(`Monitoring repository health`);
  
  const healthMetrics = {
    timestamp: new Date().toISOString(),
    currentBranch: getCurrentBranch(),
    remoteBranches: getRemoteBranches().length,
    cursorBranches: getCursorBranches().length,
    backupBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.BACKUP_BRANCH_PREFIX)).length,
    mergeBranches: getRemoteBranches().filter(b => b.startsWith(CONFIG.MERGE_BRANCH_PREFIX)).length;
  };
  
  // Check for potential issues;
  const issues = [];
  
  if (healthMetrics.cursorBranches > 50) {
    issues.push(`High number of cursor branches - consider cleanup`);
  }
  
  if (healthMetrics.backupBranches > 20) {
    issues.push(`High number of backup branches - consider cleanup`);
  }
  ;
  if (healthMetrics.currentBranch !== CONFIG.MAIN_BRANCH) {issues.push(`Not on main branch (${healthMetrics.currentBranch})`);
  }
  ;
  // Log health metricslog(`Repository Health Metrics: ${JSON.stringify(healthMetrics, null, 2)}`);
  
  if (issues.length > 0) {log(`Repository Health Issues: ${issues.join('; ')}`, `WARN`);
  }
  ;
  return healthMetrics;
};

const cleanupOldBranches = () => {
  log(`Cleaning up old branches`);
  
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
          cleanedCount++;log(`Successfully deleted old branch: ${branch}`);
        } else {log(`Failed to delete old branch ${branch}: ${deleteResult.error}`, `ERROR`);
        }
      }
    }
  });
  log(`Cleanup completed. Deleted ${cleanedCount} old branches`);
  return cleanedCount;
};

// Main execution loop;
const main = async () => {
  log(`Intelligent Repository Manager started`);
  
  try {
    // Monitor repository health;
    const healthMetrics = monitorRepositoryHealth();
    
    // Execute intelligent merging;
    await executeIntelligentMerging();
    
    // Cleanup old branches;
    const cleanedCount = cleanupOldBranches();
    
    // Generate summary report;
    const summary = {
      timestamp: new Date().toISOString(),
      healthMetrics,
      cleanedBranches: cleanedCount,
      status: `completed`
    };
    log(`Repository management cycle completed successfully: ${JSON.stringify(summary, null, 2)}`);
    
  } catch (error) {  log(`Repository management cycle failed: ${error.message  }`, `ERROR`);log(`Stack trace: ${error.stack}`, `ERROR`);
  }
};

// Handle process signals;
process.on(`SIGINT`, () => {
  log('Received SIGINT. Shutting down gracefully...');
  process.exit(0);
});
;
process.on('SIGTERM', () => {;
  log('Received SIGTERM. Shutting down gracefully...');
  process.exit(0);
});

// Start the main loop;
if (require.main === module) {
  main();
  
  // Schedule next execution;
  const interval = 15 * 60 * 1000; // 15 minutes;
  setInterval(main, interval);
}

module.exports = {
  executeIntelligentMerging,
  monitorRepositoryHealth,
  cleanupOldBranches,
  intelligentConflictResolution,
  calculateBranchPriority;
};