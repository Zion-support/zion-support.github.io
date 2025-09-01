#!/usr/bin/env node

/**
 * Intelligent Repository Manager
 * Advanced automation for repository management, PR analysis, and intelligent merging
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

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
      }

      return analysisResults;
    } catch (error) {
      this.log(`Error analyzing pull requests: ${error.message}`, 'error');
      return [];
    }
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
      score: Math.min(score, 10),
      criticalFiles,
      riskLevel: score <= 3 ? 'low' : score <= 6 ? 'medium' : 'high'
    };
  }

  calculatePriority(complexity, commitCount) {
    let priority = 1;
    
    if (complexity.riskLevel === 'high') priority += 3;
    else if (complexity.riskLevel === 'medium') priority += 2;
    
    if (complexity.criticalFiles > 0) priority += 2;
    if (commitCount > 10) priority += 1;
    
    return Math.min(priority, 5);
  }

  async intelligentMerge() {
    try {
      this.log('Starting intelligent merge process...');
      
      const analysis = await this.analyzePullRequests();
      const mergeableBranches = analysis
        .filter(branch => branch.mergeable)
        .sort((a, b) => b.priority - a.priority);

      this.log(`Found ${mergeableBranches.length} mergeable branches`);

      if (mergeableBranches.length === 0) {
        this.log('No mergeable branches found');
        return;
      }

      // Process branches in batches
      const batchSize = this.config.mergeBatchSize;
      for (let i = 0; i < mergeableBranches.length; i += batchSize) {
        const batch = mergeableBranches.slice(i, i + batchSize);
        await this.processMergeBatch(batch);
        
        // Wait between batches to avoid overwhelming the system
        if (i + batchSize < mergeableBranches.length) {
          await this.sleep(5000);
        }
      }

      this.log('Intelligent merge process completed');
    } catch (error) {
      this.log(`Error during intelligent merge: ${error.message}`, 'error');
    }
  }

  async processMergeBatch(branches) {
    this.log(`Processing merge batch of ${branches.length} branches`);
    
    for (const branch of branches) {
      try {
        await this.mergeBranch(branch);
        this.mergeHistory.push({
          branch: branch.branchName,
          timestamp: new Date().toISOString(),
          success: true
        });
      } catch (error) {
        this.log(`Failed to merge branch ${branch.branchName}: ${error.message}`, 'error');
        this.mergeHistory.push({
          branch: branch.branchName,
          timestamp: new Date().toISOString(),
          success: false,
          error: error.message
        });
      }
    }
  }

  async mergeBranch(branch) {
    try {
      this.log(`Merging branch: ${branch.branchName}`);
      
      // Ensure we're on main branch
      await this.executeCommand('git checkout main');
      await this.executeCommand('git pull origin main');
      
      // Merge the branch
      if (this.config.mergeStrategy === 'squash') {
        await this.executeCommand(`git merge --squash origin/${branch.branchName}`);
        await this.executeCommand('git commit -m "Merge branch \'' + branch.branchName + '\' with squash"');
      } else {
        await this.executeCommand(`git merge origin/${branch.branchName} --no-ff`);
      }
      
      // Push to main
      await this.executeCommand('git push origin main');
      
      // Clean up remote branch
      if (this.config.branchCleanupEnabled) {
        try {
          await this.executeCommand(`git push origin --delete ${branch.branchName}`);
          this.log(`Deleted remote branch: ${branch.branchName}`);
        } catch (error) {
          this.log(`Could not delete remote branch ${branch.branchName}: ${error.message}`, 'warning');
        }
      }
      
      this.log(`Successfully merged branch: ${branch.branchName}`);
    } catch (error) {
      throw new Error(`Merge failed for ${branch.branchName}: ${error.message}`);
    }
  }

  async resolveConflicts() {
    try {
      this.log('Starting conflict resolution process...');
      
      const analysis = await this.analyzePullRequests();
      const conflictedBranches = analysis.filter(branch => branch.hasConflicts);
      
      this.log(`Found ${conflictedBranches.length} branches with conflicts`);
      
      for (const branch of conflictedBranches) {
        try {
          await this.resolveBranchConflicts(branch);
        } catch (error) {
          this.log(`Failed to resolve conflicts for ${branch.branchName}: ${error.message}`, 'error');
          this.conflictHistory.push({
            branch: branch.branchName,
            timestamp: new Date().toISOString(),
            resolved: false,
            error: error.message
          });
        }
      }
    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'error');
    }
  }

  async resolveBranchConflicts(branch) {
    try {
      this.log(`Resolving conflicts for branch: ${branch.branchName}`);
      
      // Checkout the branch
      await this.executeCommand(`git checkout -b conflict-resolution-${Date.now()}`);
      await this.executeCommand(`git pull origin ${branch.branchName}`);
      
      // Try to rebase on main
      try {
        await this.executeCommand('git rebase origin/main');
        this.log(`Successfully rebased ${branch.branchName}`);
        
        // Force push the resolved branch
        await this.executeCommand(`git push origin HEAD:${branch.branchName} --force`);
        
        this.conflictHistory.push({
          branch: branch.branchName,
          timestamp: new Date().toISOString(),
          resolved: true
        });
      } catch (rebaseError) {
        // If rebase fails, abort and try merge
        await this.executeCommand('git rebase --abort');
        throw new Error(`Rebase failed: ${rebaseError.message}`);
      }
      
      // Clean up temporary branch
      await this.executeCommand('git checkout main');
      await this.executeCommand(`git branch -D conflict-resolution-${Date.now()}`);
      
    } catch (error) {
      throw new Error(`Conflict resolution failed: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      repositoryStatus: await this.getRepositoryStatus(),
      mergeHistory: this.mergeHistory.slice(-20), // Last 20 merges
      conflictHistory: this.conflictHistory.slice(-20), // Last 20 conflicts
      config: this.config,
      statistics: {
        totalMerges: this.mergeHistory.length,
        successfulMerges: this.mergeHistory.filter(m => m.success).length,
        totalConflicts: this.conflictHistory.length,
        resolvedConflicts: this.conflictHistory.filter(c => c.resolved).length
      }
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'repository-manager-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async start() {
    this.log('Intelligent Repository Manager started');
    
    // Initial analysis
    await this.analyzePullRequests();
    
    // Start continuous monitoring
    setInterval(async () => {
      try {
        await this.analyzePullRequests();
        
        if (this.config.autoMergeEnabled) {
          await this.intelligentMerge();
        }
        
        if (this.config.conflictResolutionEnabled) {
          await this.resolveConflicts();
        }
        
        // Generate report every hour
        if (new Date().getMinutes() === 0) {
          await this.generateReport();
        }
        
      } catch (error) {
        this.log(`Error in monitoring cycle: ${error.message}`, 'error');
      }
    }, this.config.healthCheckInterval);
  }
}

// Start the manager if run directly
if (require.main === module) {
  const manager = new IntelligentRepositoryManager();
  manager.start().catch(error => {
    console.error('Failed to start Intelligent Repository Manager:', error);
    process.exit(1);
  });
}

module.exports = IntelligentRepositoryManager;