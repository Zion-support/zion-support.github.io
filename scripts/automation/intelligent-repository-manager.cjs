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