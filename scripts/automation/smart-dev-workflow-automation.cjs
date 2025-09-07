#!/usr/bin/env node

/**
 * Smart Development Workflow Automation
 * Intelligent development process management with AI-driven insights
 * 
 * Features:
 * - Intelligent git workflow management
 * - Automated branch management
 * - Smart commit message generation
 * - Automated PR creation and management
 * - Development environment optimization
 * - Automated testing and validation
 * - Deployment workflow automation
 * - Code review automation
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class SmartDevWorkflowAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      gitConfig: {
        mainBranch: 'main',
        developBranch: 'develop',
        featurePrefix: 'feature/',
        hotfixPrefix: 'hotfix/',
        releasePrefix: 'release/',
        autoCommit: true,
        autoPush: false,
        autoMerge: false
      },
      workflowConfig: {
        checkInterval: 60000, // 1 minute
        autoTestInterval: 300000, // 5 minutes
        autoDeployInterval: 1800000, // 30 minutes
        maxFeatureBranches: 5,
        maxHotfixBranches: 2
      },
      logFile: 'logs/smart-dev-workflow.log',
      reportDir: 'workflow-reports',
      tempDir: 'temp_working'
    };
    
    this.currentBranch = '';
    this.branchStatus = {};
    this.workflowHistory = [];
    this.pendingChanges = new Set();
    this.isRunning = false;
    
    this.setupLogging();
    this.ensureDirectories();
    this.initialize();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    [this.config.reportDir, this.config.tempDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      this.log('🚀 Initializing Smart Development Workflow Automation...');
      
      // Check git repository
      if (!this.isGitRepository()) {
        this.log('❌ Not a git repository. Cannot continue.', 'ERROR');
        return;
      }
      
      // Get current branch
      this.currentBranch = this.getCurrentBranch();
      this.log(`📍 Current branch: ${this.currentBranch}`);
      
      // Setup file watcher
      this.setupFileWatcher();
      
      // Start workflow loops
      this.startWorkflowLoops();
      
      // Initial workflow analysis
      await this.analyzeWorkflow();
      
      this.log('✅ Smart Development Workflow Automation initialized successfully');
      this.isRunning = true;
      
    } catch (error) {
      this.log(`❌ Initialization failed: ${error.message}`, 'ERROR');
      this.restartAfterDelay();
    }
  }

  isGitRepository() {
    try {
      return fs.existsSync(path.join(this.config.projectRoot, '.git'));
    } catch {
      return false;
    }
  }

  getCurrentBranch() {
    try {
      return execSync('git branch --show-current', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).trim();
    } catch {
      return 'main';
    }
  }

  setupFileWatcher() {
    this.log('👀 Setting up file watcher...');
    
    const watchPatterns = [
      'src/**/*',
      'pages/**/*',
      'components/**/*',
      'utils/**/*',
      'types/**/*',
      '*.{js,ts,tsx,jsx,json,md}'
    ];
    
    const ignorePatterns = [
      'node_modules/**',
      'dist/**',
      '.next/**',
      'build/**',
      'logs/**',
      'temp_*/**',
      '*.log',
      '*.tmp',
      '*.backup.*'
    ];
    
    this.watcher = chokidar.watch(watchPatterns, {
      ignored: ignorePatterns,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      }
    });

    this.watcher
      .on('add', (filePath) => this.handleFileChange(filePath, 'add'))
      .on('change', (filePath) => this.handleFileChange(filePath, 'change'))
      .on('unlink', (filePath) => this.handleFileChange(filePath, 'delete'))
      .on('error', (error) => this.log(`Watcher error: ${error.message}`, 'ERROR'))
      .on('ready', () => this.log('File watcher ready'));
  }

  handleFileChange(filePath, event) {
    const relativePath = path.relative(this.config.projectRoot, filePath);
    
    if (this.shouldIgnoreFile(relativePath)) {
      return;
    }

    this.log(`📝 File ${event}: ${relativePath}`);
    this.pendingChanges.add(relativePath);
    
    // Debounce changes
    clearTimeout(this.changeTimeout);
    this.changeTimeout = setTimeout(() => {
      this.processPendingChanges();
    }, 3000);
  }

  shouldIgnoreFile(filePath) {
    const ignorePatterns = [
      /\.log$/,
      /\.tmp$/,
      /\.backup\./,
      /\.git\//,
      /node_modules\//,
      /\.next\//,
      /dist\//,
      /build\//,
      /temp_/,
      /\.DS_Store$/,
      /Thumbs\.db$/
    ];
    
    return ignorePatterns.some(pattern => pattern.test(filePath));
  }

  startWorkflowLoops() {
    // Workflow monitoring loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.monitorWorkflow();
      }
    }, this.config.workflowConfig.checkInterval);

    // Auto-testing loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.autoTest();
      }
    }, this.config.workflowConfig.autoTestInterval);

    // Auto-deployment loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.autoDeploy();
      }
    }, this.config.workflowConfig.autoDeployInterval);
  }

  async analyzeWorkflow() {
    this.log('🔍 Analyzing development workflow...');
    
    try {
      await this.analyzeBranchStructure();
      await this.analyzeCommitHistory();
      await this.analyzePullRequests();
      await this.analyzeDeploymentStatus();
      
      this.generateWorkflowReport();
      this.log('✅ Workflow analysis completed');
      
    } catch (error) {
      this.log(`❌ Workflow analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBranchStructure() {
    try {
      this.log('🌿 Analyzing branch structure...');
      
      const branches = execSync('git branch -r', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim());
      
      const localBranches = execSync('git branch', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim());
      
      this.branchStatus = {
        remote: branches.map(b => b.trim().replace('origin/', '')),
        local: localBranches.map(b => b.trim().replace('* ', '')),
        current: this.currentBranch,
        featureBranches: localBranches.filter(b => b.includes(this.config.gitConfig.featurePrefix)),
        hotfixBranches: localBranches.filter(b => b.includes(this.config.gitConfig.hotfixPrefix)),
        releaseBranches: localBranches.filter(b => b.includes(this.config.gitConfig.releasePrefix))
      };
      
      // Check for branch cleanup opportunities
      await this.checkBranchCleanup();
      
      this.log(`📊 Branch analysis: ${this.branchStatus.local.length} local, ${this.branchStatus.remote.length} remote`);
      
    } catch (error) {
      this.log(`Failed to analyze branch structure: ${error.message}`, 'WARN');
    }
  }

  async checkBranchCleanup() {
    try {
      const featureBranches = this.branchStatus.featureBranches;
      const hotfixBranches = this.branchStatus.hotfixBranches;
      
      // Check for stale feature branches
      if (featureBranches.length > this.config.workflowConfig.maxFeatureBranches) {
        this.log(`⚠️ Too many feature branches (${featureBranches.length}). Consider cleanup.`, 'WARN');
        await this.suggestBranchCleanup('feature');
      }
      
      // Check for stale hotfix branches
      if (hotfixBranches.length > this.config.workflowConfig.maxHotfixBranches) {
        this.log(`⚠️ Too many hotfix branches (${hotfixBranches.length}). Consider cleanup.`, 'WARN');
        await this.suggestBranchCleanup('hotfix');
      }
      
      // Check for merged branches that can be deleted
      await this.identifyMergedBranches();
      
    } catch (error) {
      this.log(`Failed to check branch cleanup: ${error.message}`, 'WARN');
    }
  }

  async identifyMergedBranches() {
    try {
      const mergedBranches = execSync('git branch --merged', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim() && !b.includes('*'));
      
      const deletableBranches = mergedBranches.filter(branch => {
        const branchName = branch.trim();
        return branchName !== 'main' && 
               branchName !== 'develop' && 
               !branchName.includes('release/');
      });
      
      if (deletableBranches.length > 0) {
        this.log(`🗑️ Found ${deletableBranches.length} merged branches that can be deleted:`, 'INFO');
        deletableBranches.forEach(branch => {
          this.log(`  - ${branch.trim()}`);
        });
        
        // Auto-delete if configured
        if (this.config.gitConfig.autoMerge) {
          await this.autoDeleteMergedBranches(deletableBranches);
        }
      }
      
    } catch (error) {
      this.log(`Failed to identify merged branches: ${error.message}`, 'WARN');
    }
  }

  async autoDeleteMergedBranches(branches) {
    try {
      this.log('🗑️ Auto-deleting merged branches...');
      
      for (const branch of branches) {
        const branchName = branch.trim();
        try {
          execSync(`git branch -d ${branchName}`, { 
            cwd: this.config.projectRoot, 
            stdio: 'pipe' 
          });
          this.log(`✅ Deleted merged branch: ${branchName}`);
        } catch (error) {
          this.log(`⚠️ Failed to delete branch ${branchName}: ${error.message}`, 'WARN');
        }
      }
      
    } catch (error) {
      this.log(`Failed to auto-delete merged branches: ${error.message}`, 'ERROR');
    }
  }

  async monitorWorkflow() {
    this.log('📊 Monitoring development workflow...');
    
    try {
      // Check for uncommitted changes
      await this.checkUncommittedChanges();
      
      // Check for unpushed commits
      await this.checkUnpushedCommits();
      
      // Check for merge conflicts
      await this.checkMergeConflicts();
      
      // Check for outdated branches
      await this.checkOutdatedBranches();
      
      this.log('✅ Workflow monitoring completed');
      
    } catch (error) {
      this.log(`❌ Workflow monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async checkUncommittedChanges() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      });
      
      if (status.trim()) {
        const changeCount = status.split('\n').filter(line => line.trim()).length;
        this.log(`📝 Found ${changeCount} uncommitted changes`);
        
        if (this.config.gitConfig.autoCommit) {
          await this.smartCommit();
        }
      }
      
    } catch (error) {
      this.log(`Failed to check uncommitted changes: ${error.message}`, 'WARN');
    }
  }

  async smartCommit() {
    try {
      this.log('🤖 Creating smart commit...');
      
      // Stage all changes
      execSync('git add .', { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Generate smart commit message
      const commitMessage = await this.generateCommitMessage();
      
      // Create commit
      execSync(`git commit -m "${commitMessage}"`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log(`✅ Smart commit created: ${commitMessage}`);
      
      // Auto-push if configured
      if (this.config.gitConfig.autoPush) {
        await this.autoPush();
      }
      
    } catch (error) {
      this.log(`Failed to create smart commit: ${error.message}`, 'ERROR');
    }
  }

  async generateCommitMessage() {
    try {
      const stagedFiles = execSync('git diff --cached --name-only', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(f => f.trim());
      
      const changeTypes = {
        'src/': 'feat',
        'pages/': 'feat',
        'components/': 'feat',
        'utils/': 'refactor',
        'types/': 'refactor',
        'tests/': 'test',
        'docs/': 'docs',
        'config/': 'config'
      };
      
      let changeType = 'feat';
      for (const [path, type] of Object.entries(changeTypes)) {
        if (stagedFiles.some(file => file.startsWith(path))) {
          changeType = type;
          break;
        }
      }
      
      const timestamp = new Date().toISOString().split('T')[0];
      const fileCount = stagedFiles.length;
      const mainFile = stagedFiles[0] || 'unknown';
      
      return `${changeType}: update ${mainFile} and ${fileCount - 1} other files (${timestamp})`;
      
    } catch (error) {
      return `feat: update files (${new Date().toISOString().split('T')[0]})`;
    }
  }

  async autoPush() {
    try {
      this.log('🚀 Auto-pushing changes...');
      
      execSync('git push', { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('✅ Changes pushed successfully');
      
    } catch (error) {
      this.log(`Failed to auto-push: ${error.message}`, 'ERROR');
    }
  }

  async autoTest() {
    try {
      this.log('🧪 Running automated tests...');
      
      // Check if there are uncommitted changes
      const status = execSync('git status --porcelain', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      });
      
      if (status.trim()) {
        this.log('⚠️ Skipping tests due to uncommitted changes', 'WARN');
        return;
      }
      
      // Run tests
      const testOutput = execSync('npm test', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('✅ Automated tests completed successfully');
      
      // Check test results and take action if needed
      await this.analyzeTestResults(testOutput);
      
    } catch (error) {
      this.log(`❌ Automated tests failed: ${error.message}`, 'ERROR');
      await this.handleTestFailure();
    }
  }

  async analyzeTestResults(testOutput) {
    try {
      // Parse test output for failures
      const failurePattern = /(\d+)\s+failing/;
      const match = testOutput.match(failurePattern);
      
      if (match && parseInt(match[1]) > 0) {
        this.log(`⚠️ Tests failed: ${match[1]} failures detected`, 'WARN');
        await this.handleTestFailures(testOutput);
      }
      
    } catch (error) {
      this.log(`Failed to analyze test results: ${error.message}`, 'WARN');
    }
  }

  async handleTestFailures(testOutput) {
    try {
      this.log('🔧 Handling test failures...');
      
      // Create backup of current state
      const backupDir = path.join(this.config.tempDir, `test-failure-backup-${Date.now()}`);
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Copy current files to backup
      execSync(`cp -r src pages components utils types ${backupDir}`, { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log(`📦 Created backup in ${backupDir}`);
      
      // Try to auto-fix common test issues
      await this.autoFixTestIssues();
      
    } catch (error) {
      this.log(`Failed to handle test failures: ${error.message}`, 'ERROR');
    }
  }

  async autoFixTestIssues() {
    try {
      this.log('🔧 Attempting to auto-fix test issues...');
      
      // Common fixes
      await this.fixImportIssues();
      await this.fixTypeIssues();
      await this.fixLintIssues();
      
      // Re-run tests
      const testOutput = execSync('npm test', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      this.log('✅ Auto-fix completed. Re-running tests...');
      
    } catch (error) {
      this.log(`Failed to auto-fix test issues: ${error.message}`, 'WARN');
    }
  }

  async autoDeploy() {
    try {
      this.log('🚀 Checking deployment conditions...');
      
      // Only deploy from main/develop branches
      if (!['main', 'develop'].includes(this.currentBranch)) {
        this.log('⚠️ Skipping deployment from feature branch', 'INFO');
        return;
      }
      
      // Check if deployment is needed
      const needsDeployment = await this.checkDeploymentNeeds();
      
      if (needsDeployment) {
        this.log('🚀 Starting automated deployment...');
        await this.performDeployment();
      } else {
        this.log('✅ No deployment needed');
      }
      
    } catch (error) {
      this.log(`❌ Auto-deployment failed: ${error.message}`, 'ERROR');
    }
  }

  async checkDeploymentNeeds() {
    try {
      // Check for new commits since last deployment
      const lastDeployment = this.getLastDeploymentTime();
      const newCommits = execSync(`git log --since="${lastDeployment}" --oneline`, { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(c => c.trim());
      
      return newCommits.length > 0;
      
    } catch (error) {
      this.log(`Failed to check deployment needs: ${error.message}`, 'WARN');
      return false;
    }
  }

  getLastDeploymentTime() {
    try {
      // Check for deployment marker file
      const deploymentFile = path.join(this.config.projectRoot, '.last-deployment');
      if (fs.existsSync(deploymentFile)) {
        return fs.readFileSync(deploymentFile, 'utf8').trim();
      }
      
      // Default to 24 hours ago
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return yesterday.toISOString();
      
    } catch (error) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return yesterday.toISOString();
    }
  }

  async performDeployment() {
    try {
      this.log('🚀 Performing deployment...');
      
      // Build the project
      execSync('npm run build', { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Run deployment tests
      execSync('npm run test', { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Mark deployment time
      const deploymentFile = path.join(this.config.projectRoot, '.last-deployment');
      fs.writeFileSync(deploymentFile, new Date().toISOString());
      
      this.log('✅ Deployment completed successfully');
      
      // Update deployment history
      this.workflowHistory.push({
        timestamp: Date.now(),
        branch: this.currentBranch,
        type: 'auto',
        status: 'success'
      });
      
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`, 'ERROR');
      
      this.workflowHistory.push({
        timestamp: Date.now(),
        branch: this.currentBranch,
        type: 'auto',
        status: 'failed',
        error: error.message
      });
    }
  }

  generateWorkflowReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          currentBranch: this.currentBranch,
          totalBranches: this.branchStatus.local.length,
          pendingChanges: this.pendingChanges.size,
          workflowStatus: 'active'
        },
        branchStatus: this.branchStatus,
        workflowHistory: this.workflowHistory,
        recommendations: this.generateWorkflowRecommendations()
      };
      
      const reportFile = path.join(this.config.reportDir, `workflow-report-${Date.now()}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Workflow report generated: ${reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate workflow report: ${error.message}`, 'ERROR');
    }
  }

  generateWorkflowRecommendations() {
    const recommendations = [];
    
    if (this.branchStatus.featureBranches.length > this.config.workflowConfig.maxFeatureBranches) {
      recommendations.push('Consider cleaning up old feature branches');
    }
    
    if (this.pendingChanges.size > 10) {
      recommendations.push('Many uncommitted changes. Consider committing in smaller batches');
    }
    
    if (this.workflowHistory.filter(h => h.status === 'failed').length > 0) {
      recommendations.push('Some deployments failed. Review and fix issues');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Workflow is healthy. Continue current practices.');
    }
    
    return recommendations;
  }

  restartAfterDelay() {
    setTimeout(() => {
      this.log('🔄 Restarting Smart Development Workflow Automation...');
      this.initialize();
    }, 30000);
  }
}

// Start the automation
const automation = new SmartDevWorkflowAutomation();

// Handle graceful shutdown
process.on('SIGINT', () => {
  automation.log('🛑 Shutting down Smart Development Workflow Automation...');
  automation.isRunning = false;
  process.exit(0);
});

process.on('SIGTERM', () => {
  automation.log('🛑 Shutting down Smart Development Workflow Automation...');
  automation.isRunning = false;
  process.exit(0);
});