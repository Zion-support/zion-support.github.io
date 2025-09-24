#!/usr/bin/env node

/**
 * PM2 Sync Automation System
 * 
 * This system provides:
 * - Real-time file watching and automatic Git synchronization
 * - Intelligent build triggering based on file changes
 * - Automated testing and security scanning
 * - Conflict resolution and error recovery
 * - Performance monitoring and optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chokidar = require('chokidar');

// Configuration
const CONFIG = {
  // File watching patterns
  WATCH_PATTERNS: [
    'src/**/*',
    'public/**/*',
    '*.{js,jsx,ts,tsx,json,md,yml,yaml}',
    '!node_modules/**',
    '!.git/**',
    '!dist/**',
    '!build/**',
    '!logs/**'
  ],
  
  // Git configuration
  GIT_CONFIG: {
    BRANCH: 'main',
    REMOTE: 'origin',
    COMMIT_MESSAGE: 'Auto-commit: {description}',
    SYNC_INTERVAL: 30000, // 30 seconds
    MAX_COMMIT_SIZE: 50 // Maximum files per commit
  },
  
  // Build configuration
  BUILD_CONFIG: {
    TRIGGER_PATTERNS: [
      'src/**/*.{js,jsx,ts,tsx}',
      'package.json',
      'vite.config.*',
      'tsconfig.json'
    ],
    BUILD_COMMAND: 'npm run build',
    TEST_COMMAND: 'npm test',
    SECURITY_COMMAND: 'npm audit'
  },
  
  // Performance configuration
  PERFORMANCE: {
    DEBOUNCE_DELAY: 2000, // 2 seconds
    MAX_FILE_SIZE: 1024 * 1024, // 1MB
    MEMORY_LIMIT: '1G'
  }
};

// Global state
let pendingChanges = new Set();
let isProcessing = false;
let lastSyncTime = Date.now();
let syncCount = 0;
let errorCount = 0;
let lastBuildTime = 0;
let lastTestTime = 0;
let lastSecurityScan = 0;

// Utility functions
const log = (level, message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    data,
    process: 'pm2-sync-automation'
  };
  
  console.log(JSON.stringify(logEntry));
  
  // Also log to file for PM2
  if (level === 'ERROR') {
    console.error(JSON.stringify(logEntry));
  }
};

const executeCommand = (command, options = {}) => {
  try {
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      cwd: process.cwd(),
      ...options
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message, 
      code: error.status,
      command 
    };
  }
};

const shouldTriggerBuild = (filePath) => {
  return CONFIG.BUILD_CONFIG.TRIGGER_PATTERNS.some(pattern => {
    const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
    return regex.test(filePath);
  });
};

const shouldRunTests = (filePath) => {
  return filePath.includes('src/') && 
         (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx'));
};

const getFileDescription = (filePath) => {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath).split('/').pop();
  
  if (ext === '.tsx' || ext === '.jsx') return `React component in ${dir}`;
  if (ext === '.ts' || ext === '.js') return `JavaScript/TypeScript file in ${dir}`;
  if (ext === '.json') return 'Configuration file';
  if (ext === '.md') return 'Documentation';
  if (ext === '.yml' || ext === '.yaml') return 'Configuration file';
  
  return `File in ${dir}`;
};

// File watching and change detection
const setupFileWatcher = () => {
  log('INFO', 'Setting up file watcher...');
  
  const watcher = chokidar.watch(CONFIG.WATCH_PATTERNS, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 1000,
      pollInterval: 100
    }
  });
  
  watcher
    .on('add', (filePath) => handleFileChange('add', filePath))
    .on('change', (filePath) => handleFileChange('change', filePath))
    .on('unlink', (filePath) => handleFileChange('delete', filePath))
    .on('error', (error) => log('ERROR', 'File watcher error', { error: error.message }))
    .on('ready', () => log('INFO', 'File watcher ready'));
  
  return watcher;
};

const handleFileChange = (event, filePath) => {
  try {
    // Skip if file is too large
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      if (stats.size > CONFIG.PERFORMANCE.MAX_FILE_SIZE) {
        log('WARN', 'File too large, skipping', { filePath, size: stats.size });
        return;
      }
    }
    
    // Add to pending changes
    pendingChanges.add({
      event,
      filePath,
      timestamp: Date.now(),
      description: getFileDescription(filePath)
    });
    
    log('INFO', 'File change detected', { event, filePath });
    
    // Process changes after debounce delay
    setTimeout(() => processPendingChanges(), CONFIG.PERFORMANCE.DEBOUNCE_DELAY);
    
  } catch (error) {
    log('ERROR', 'Error handling file change', { event, filePath, error: error.message });
  }
};

const processPendingChanges = async () => {
  if (isProcessing || pendingChanges.size === 0) return;
  
  isProcessing = true;
  log('INFO', 'Processing pending changes', { count: pendingChanges.size });
  
  try {
    const changes = Array.from(pendingChanges);
    pendingChanges.clear();
    
    // Group changes by type
    const adds = changes.filter(c => c.event === 'add');
    const modifications = changes.filter(c => c.event === 'change');
    const deletions = changes.filter(c => c.event === 'delete');
    
    // Process in batches
    if (adds.length > 0) await processFileChanges('add', adds);
    if (modifications.length > 0) await processFileChanges('modify', modifications);
    if (deletions.length > 0) await processFileChanges('delete', deletions);
    
    // Trigger sync if needed
    if (changes.length > 0) {
      await triggerSync(changes);
    }
    
  } catch (error) {
    log('ERROR', 'Error processing changes', { error: error.message });
    errorCount++;
  } finally {
    isProcessing = false;
  }
};

const processFileChanges = async (type, changes) => {
  log('INFO', `Processing ${type} changes`, { count: changes.length });
  
  try {
    switch (type) {
      case 'add':
        await gitAdd(changes.map(c => c.filePath));
        break;
      case 'modify':
        await gitAdd(changes.map(c => c.filePath));
        break;
      case 'delete':
        await gitRemove(changes.map(c => c.filePath));
        break;
    }
  } catch (error) {
    log('ERROR', `Error processing ${type} changes`, { error: error.message });
  }
};

// Git operations
const gitAdd = async (filePaths) => {
  if (filePaths.length === 0) return;
  
  try {
    const result = executeCommand(`git add ${filePaths.join(' ')}`);
    if (result.success) {
      log('INFO', 'Files added to git', { count: filePaths.length });
    } else {
      log('ERROR', 'Failed to add files to git', { error: result.error });
    }
  } catch (error) {
    log('ERROR', 'Error adding files to git', { error: error.message });
  }
};

const gitRemove = async (filePaths) => {
  if (filePaths.length === 0) return;
  
  try {
    const result = executeCommand(`git rm ${filePaths.join(' ')}`);
    if (result.success) {
      log('INFO', 'Files removed from git', { count: filePaths.length });
    } else {
      log('ERROR', 'Failed to remove files from git', { error: result.error });
    }
  } catch (error) {
    log('ERROR', 'Error removing files from git', { error: error.message });
  }
};

const triggerSync = async (changes) => {
  try {
    // Check if we should commit
    const status = executeCommand('git status --porcelain');
    if (!status.success || !status.output.trim()) {
      log('INFO', 'No changes to commit');
      return;
    }
    
    // Create commit message
    const descriptions = changes.map(c => c.description).slice(0, 5);
    const commitMessage = CONFIG.GIT_CONFIG.COMMIT_MESSAGE.replace(
      '{description}', 
      descriptions.join(', ')
    );
    
    // Commit changes
    const commitResult = executeCommand(`git commit -m "${commitMessage}"`);
    if (commitResult.success) {
      log('INFO', 'Changes committed', { message: commitMessage });
      
      // Push to remote
      const pushResult = executeCommand(`git push ${CONFIG.GIT_CONFIG.REMOTE} ${CONFIG.GIT_CONFIG.BRANCH}`);
      if (pushResult.success) {
        log('INFO', 'Changes pushed to remote');
        syncCount++;
        lastSyncTime = Date.now();
        
        // Trigger build if needed
        if (changes.some(c => shouldTriggerBuild(c.filePath))) {
          await triggerBuild();
        }
        
        // Run tests if needed
        if (changes.some(c => shouldRunTests(c.filePath))) {
          await runTests();
        }
        
      } else {
        log('ERROR', 'Failed to push changes', { error: pushResult.error });
        
        // Try to resolve conflicts
        await resolveConflicts();
      }
    } else {
      log('ERROR', 'Failed to commit changes', { error: commitResult.error });
    }
    
  } catch (error) {
    log('ERROR', 'Error during sync', { error: error.message });
  }
};

const resolveConflicts = async () => {
  log('INFO', 'Attempting to resolve conflicts...');
  
  try {
    // Pull latest changes
    const pullResult = executeCommand(`git pull ${CONFIG.GIT_CONFIG.REMOTE} ${CONFIG.GIT_CONFIG.BRANCH}`);
    if (pullResult.success) {
      log('INFO', 'Conflicts resolved successfully');
    } else {
      log('ERROR', 'Failed to resolve conflicts', { error: pullResult.error });
      
      // Try to reset and reapply
      await resetAndReapply();
    }
  } catch (error) {
    log('ERROR', 'Error resolving conflicts', { error: error.message });
  }
};

const resetAndReapply = async () => {
  log('INFO', 'Resetting and reapplying changes...');
  
  try {
    // Stash current changes
    const stashResult = executeCommand('git stash');
    if (!stashResult.success) {
      log('ERROR', 'Failed to stash changes');
      return;
    }
    
    // Reset to remote
    const resetResult = executeCommand(`git reset --hard ${CONFIG.GIT_CONFIG.REMOTE}/${CONFIG.GIT_CONFIG.BRANCH}`);
    if (!resetResult.success) {
      log('ERROR', 'Failed to reset to remote');
      return;
    }
    
    // Reapply stashed changes
    const popResult = executeCommand('git stash pop');
    if (popResult.success) {
      log('INFO', 'Changes reapplied successfully');
    } else {
      log('ERROR', 'Failed to reapply changes');
    }
    
  } catch (error) {
    log('ERROR', 'Error during reset and reapply', { error: error.message });
  }
};

// Build and test operations
const triggerBuild = async () => {
  const now = Date.now();
  if (now - lastBuildTime < 60000) { // Minimum 1 minute between builds
    log('INFO', 'Build skipped - too soon since last build');
    return;
  }
  
  log('INFO', 'Starting build process...');
  lastBuildTime = now;
  
  try {
    const buildResult = executeCommand(CONFIG.BUILD_CONFIG.BUILD_COMMAND);
    if (buildResult.success) {
      log('INFO', 'Build completed successfully');
    } else {
      log('ERROR', 'Build failed', { error: buildResult.error });
      await fixBuildIssues();
    }
  } catch (error) {
    log('ERROR', 'Error during build', { error: error.message });
  }
};

const runTests = async () => {
  const now = Date.now();
  if (now - lastTestTime < 300000) { // Minimum 5 minutes between test runs
    log('INFO', 'Tests skipped - too soon since last test run');
    return;
  }
  
  log('INFO', 'Running tests...');
  lastTestTime = now;
  
  try {
    const testResult = executeCommand(CONFIG.BUILD_CONFIG.TEST_COMMAND);
    if (testResult.success) {
      log('INFO', 'Tests completed successfully');
    } else {
      log('ERROR', 'Tests failed', { error: testResult.error });
      await fixTestIssues();
    }
  } catch (error) {
    log('ERROR', 'Error during tests', { error: error.message });
  }
};

const runSecurityScan = async () => {
  const now = Date.now();
  if (now - lastSecurityScan < 1800000) { // Minimum 30 minutes between scans
    return;
  }
  
  log('INFO', 'Running security scan...');
  lastSecurityScan = now;
  
  try {
    const securityResult = executeCommand(CONFIG.BUILD_CONFIG.SECURITY_COMMAND);
    if (securityResult.success) {
      log('INFO', 'Security scan completed');
      
      // Check for vulnerabilities
      if (securityResult.output.includes('vulnerabilities found')) {
        log('WARN', 'Security vulnerabilities detected');
        await fixSecurityIssues();
      }
    } else {
      log('ERROR', 'Security scan failed', { error: securityResult.error });
    }
  } catch (error) {
    log('ERROR', 'Error during security scan', { error: error.message });
  }
};

// Issue resolution
const fixBuildIssues = async () => {
  log('INFO', 'Attempting to fix build issues...');
  
  try {
    // Reinstall dependencies
    log('INFO', 'Reinstalling dependencies...');
    const installResult = executeCommand('npm install');
    if (installResult.success) {
      log('INFO', 'Dependencies reinstalled');
      
      // Try build again
      const rebuildResult = executeCommand(CONFIG.BUILD_CONFIG.BUILD_COMMAND);
      if (rebuildResult.success) {
        log('INFO', 'Build fixed successfully');
      } else {
        log('ERROR', 'Build still failing after dependency reinstall');
      }
    } else {
      log('ERROR', 'Failed to reinstall dependencies');
    }
  } catch (error) {
    log('ERROR', 'Error fixing build issues', { error: error.message });
  }
};

const fixTestIssues = async () => {
  log('INFO', 'Attempting to fix test issues...');
  
  try {
    // Clear test cache
    const clearResult = executeCommand('npm run test:clear || npm run test -- --clearCache');
    if (clearResult.success) {
      log('INFO', 'Test cache cleared');
      
      // Try tests again
      const retestResult = executeCommand(CONFIG.BUILD_CONFIG.TEST_COMMAND);
      if (retestResult.success) {
        log('INFO', 'Tests fixed successfully');
      } else {
        log('ERROR', 'Tests still failing after cache clear');
      }
    } else {
      log('ERROR', 'Failed to clear test cache');
    }
  } catch (error) {
    log('ERROR', 'Error fixing test issues', { error: error.message });
  }
};

const fixSecurityIssues = async () => {
  log('INFO', 'Attempting to fix security issues...');
  
  try {
    // Run security fix
    const fixResult = executeCommand('npm audit fix');
    if (fixResult.success) {
      log('INFO', 'Security issues fixed automatically');
    } else {
      log('WARN', 'Some security issues require manual attention');
      
      // Try force fix
      const forceFixResult = executeCommand('npm audit fix --force');
      if (forceFixResult.success) {
        log('INFO', 'Security issues fixed with force flag');
      } else {
        log('ERROR', 'Failed to fix security issues');
      }
    }
  } catch (error) {
    log('ERROR', 'Error fixing security issues', { error: error.message });
  }
};

// Periodic operations
const startAutomationLoops = () => {
  // Sync loop
  setInterval(async () => {
    try {
      if (pendingChanges.size > 0) {
        await processPendingChanges();
      }
    } catch (error) {
      log('ERROR', 'Error in sync loop', { error: error.message });
    }
  }, CONFIG.GIT_CONFIG.SYNC_INTERVAL);
  
  // Build loop
  setInterval(async () => {
    try {
      if (Date.now() - lastBuildTime > 300000) { // 5 minutes
        await triggerBuild();
      }
    } catch (error) {
      log('ERROR', 'Error in build loop', { error: error.message });
    }
  }, 300000); // 5 minutes
  
  // Test loop
  setInterval(async () => {
    try {
      if (Date.now() - lastTestTime > 600000) { // 10 minutes
        await runTests();
      }
    } catch (error) {
      log('ERROR', 'Error in test loop', { error: error.message });
    }
  }, 600000); // 10 minutes
  
  // Security scan loop
  setInterval(async () => {
    try {
      await runSecurityScan();
    } catch (error) {
      log('ERROR', 'Error in security scan loop', { error: error.message });
    }
  }, 1800000); // 30 minutes
};

// Health monitoring
const getHealthStatus = () => {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    metrics: {
      syncCount,
      errorCount,
      lastSyncTime: new Date(lastSyncTime).toISOString(),
      pendingChanges: pendingChanges.size,
      isProcessing,
      uptime: process.uptime()
    }
  };
};

// Main execution
const main = async () => {
  try {
    log('INFO', 'Initializing PM2 Sync Automation System...');
    
    // Setup file watcher
    const watcher = setupFileWatcher();
    
    // Start automation loops
    startAutomationLoops();
    
    // Perform initial sync
    log('INFO', 'Performing full repository sync...');
    await performFullSync();
    
    log('INFO', 'PM2 Sync Automation System initialized successfully');
    
    // Health check endpoint
    if (process.env.HEALTH_CHECK_PORT) {
      const http = require('http');
      const server = http.createServer((req, res) => {
        if (req.url === '/health') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(getHealthStatus()));
        } else {
          res.writeHead(404);
          res.end('Not Found');
        }
      });
      
      server.listen(process.env.HEALTH_CHECK_PORT, () => {
        log('INFO', `Health check server listening on port ${process.env.HEALTH_CHECK_PORT}`);
      });
    }
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      log('INFO', 'Received SIGTERM, shutting down gracefully...');
      watcher.close();
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      log('INFO', 'Received SIGINT, shutting down gracefully...');
      watcher.close();
      process.exit(0);
    });
    
  } catch (error) {
    log('ERROR', 'Failed to initialize system', { error: error.message });
    process.exit(1);
  }
};

const performFullSync = async () => {
  try {
    // Check current status
    const status = executeCommand('git status --porcelain');
    if (status.success && status.output.trim()) {
      log('INFO', 'Stashed local changes for sync');
      executeCommand('git stash');
    }
    
    // Pull latest changes
    const pullResult = executeCommand(`git pull ${CONFIG.GIT_CONFIG.REMOTE} ${CONFIG.GIT_CONFIG.BRANCH}`);
    if (pullResult.success) {
      log('INFO', 'Full sync completed successfully');
      
      // Restore stashed changes if any
      const stashList = executeCommand('git stash list');
      if (stashList.success && stashList.output.trim()) {
        const popResult = executeCommand('git stash pop');
        if (popResult.success) {
          log('INFO', 'Stashed changes restored');
        } else {
          log('WARN', 'Failed to restore stashed changes, resolving conflicts...');
          await resolveConflicts();
        }
      }
    } else {
      log('ERROR', 'Full sync failed', { error: pullResult.error });
      throw new Error('Full sync failed');
    }
    
    // Start build process
    log('INFO', 'Starting build process...');
    await triggerBuild();
    
  } catch (error) {
    log('ERROR', 'Error during full sync', { error: error.message });
    throw error;
  }
};

// Start the system
if (require.main === module) {
  main().catch(error => {
    log('ERROR', 'System startup failed', { error: error.message });
    process.exit(1);
  });
}

module.exports = {
  main,
  getHealthStatus,
  triggerBuild,
  runTests,
  runSecurityScan
};
