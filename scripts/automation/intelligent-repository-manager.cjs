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
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.config = this.loadConfig();
    this.gitStatus = {};
    this.branchHealth = {};
    
    this.setupDirectories();
    this.setupLogging();
  }

  setupDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'intelligent-repository-manager.log');
    this.log('Intelligent Repository Manager started');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    if (this.logFile) {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    }
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'automation-config.json');
    
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log(`Error loading config: ${error.message}`, 'ERROR');
      }
    }

    // Default configuration
    return {
      git: {
        autoMerge: process.env.GIT_AUTO_MERGE === 'true',
        autoPush: process.env.GIT_AUTO_PUSH === 'true',
        conflictResolution: true,
        branchCleanup: true,
        healthMonitoring: true
      },
      branches: {
        main: 'main',
        develop: 'develop',
        staging: 'staging',
        featurePrefix: 'feature/',
        hotfixPrefix: 'hotfix/',
        releasePrefix: 'release/'
      },
      automation: {
        mergeInterval: 2 * 60 * 60 * 1000, // 2 hours
        healthCheckInterval: 60 * 60 * 1000, // 1 hour
        cleanupInterval: 24 * 60 * 60 * 1000 // 24 hours
      }
    };
  }

  async executeGitCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit'
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`Git command failed: ${command}`, 'ERROR');
      this.log(`Error: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async getGitStatus() {
    this.log('Analyzing git repository status...');
    
    try {
      // Get current branch
      const currentBranch = execSync('git branch --show-current', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).trim();
      
      // Get branch list
      const branches = execSync('git branch -r', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim());
      
      // Get commit status
      const status = execSync('git status --porcelain', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      // Get recent commits
      const recentCommits = execSync('git log --oneline -10', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(c => c.trim());
      
      this.gitStatus = {
        currentBranch,
        branches: branches.map(b => b.trim()),
        hasChanges: status.length > 0,
        changes: status.split('\n').filter(s => s.trim()),
        recentCommits
      };
      
      this.log(`Current branch: ${currentBranch}`);
      this.log(`Total branches: ${branches.length}`);
      this.log(`Has changes: ${status.length > 0}`);
      
      return this.gitStatus;
    } catch (error) {
      this.log(`Error getting git status: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeBranchHealth() {
    this.log('Analyzing branch health...');
    
    try {
      const branches = execSync('git branch -r', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim());
      
      for (const branch of branches) {
        const branchName = branch.replace('origin/', '').trim();
        
        if (branchName === 'HEAD') continue;
        
        try {
          // Get branch age
          const lastCommit = execSync(`git log -1 --format="%H %ct" origin/${branchName}`, { 
            cwd: this.projectRoot, 
            encoding: 'utf8' 
          }).trim();
          
          const [hash, timestamp] = lastCommit.split(' ');
          const age = Math.floor((Date.now() / 1000) - parseInt(timestamp));
          
          // Get commit count
          const commitCount = execSync(`git rev-list --count origin/${branchName}`, { 
            cwd: this.projectRoot, 
            encoding: 'utf8' 
          }).trim();
          
          // Check if branch is behind main
          const behindMain = execSync(`git rev-list --count origin/main..origin/${branchName}`, { 
            cwd: this.projectRoot, 
            encoding: 'utf8' 
          }).trim();
          
          // Check if branch is ahead of main
          const aheadMain = execSync(`git rev-list --count origin/${branchName}..origin/main`, { 
            cwd: this.projectRoot, 
            encoding: 'utf8' 
          }).trim();
          
          this.branchHealth[branchName] = {
            age: age,
            ageDays: Math.floor(age / (24 * 60 * 60)),
            commitCount: parseInt(commitCount),
            behindMain: parseInt(behindMain),
            aheadMain: parseInt(aheadMain),
            health: this.calculateBranchHealth(age, parseInt(commitCount), parseInt(behindMain), parseInt(aheadMain))
          };
          
        } catch (error) {
          this.log(`Error analyzing branch ${branchName}: ${error.message}`, 'WARN');
        }
      }
      
      this.log(`Branch health analysis completed for ${Object.keys(this.branchHealth).length} branches`);
      return this.branchHealth;
      
    } catch (error) {
      this.log(`Error analyzing branch health: ${error.message}`, 'ERROR');
      return {};
    }
  }

  calculateBranchHealth(age, commitCount, behindMain, aheadMain) {
    let score = 100;
    
    // Age penalty (older branches get lower scores)
    if (age > 30 * 24 * 60 * 60) score -= 20; // 30 days
    if (age > 90 * 24 * 60 * 60) score -= 30; // 90 days
    
    // Activity penalty (inactive branches get lower scores)
    if (commitCount < 5) score -= 15;
    if (commitCount < 2) score -= 25;
    
    // Sync penalty (branches behind main get lower scores)
    if (behindMain > 10) score -= 20;
    if (behindMain > 50) score -= 40;
    
    // Divergence penalty (branches ahead of main get lower scores)
    if (aheadMain > 20) score -= 15;
    if (aheadMain > 100) score -= 30;
    
    return Math.max(0, score);
  }

  async identifyMergeableBranches() {
    this.log('Identifying mergeable branches...');
    
    const mergeableBranches = [];
    
    for (const [branchName, health] of Object.entries(this.branchHealth)) {
      // Skip main branches
      if (['main', 'master', 'develop', 'staging'].includes(branchName)) {
        continue;
      }
      
      // Check if branch is healthy enough to merge
      if (health.health >= 70 && health.behindMain <= 5) {
        mergeableBranches.push({
          name: branchName,
          health: health.health,
          reason: 'Healthy branch ready for merge'
        });
      }
    }
    
    this.log(`Found ${mergeableBranches.length} mergeable branches`);
    return mergeableBranches;
  }

  async attemptAutoMerge(branchName) {
    this.log(`Attempting auto-merge for branch: ${branchName}`);
    
    try {
      // Create backup branch
      const backupBranch = `backup-${branchName}-${Date.now()}`;
      await this.executeGitCommand(`git checkout -b ${backupBranch}`, { silent: true });
      
      // Switch to main
      await this.executeGitCommand('git checkout main', { silent: true });
      await this.executeGitCommand('git pull origin main', { silent: true });
      
      // Attempt merge
      const mergeResult = await this.executeGitCommand(`git merge origin/${branchName}`, { silent: true });
      
      if (mergeResult.success) {
        this.log(`Successfully merged ${branchName} into main`);
        
        // Push changes
        if (this.config.git.autoPush) {
          await this.executeGitCommand('git push origin main', { silent: true });
          this.log(`Pushed merged changes to origin/main`);
        }
        
        // Cleanup backup branch
        await this.executeGitCommand(`git branch -D ${backupBranch}`, { silent: true });
        
        return { success: true, message: `Branch ${branchName} merged successfully` };
      } else {
        this.log(`Merge failed for ${branchName}, attempting conflict resolution`, 'WARN');
        
        // Abort merge and try conflict resolution
        await this.executeGitCommand('git merge --abort', { silent: true });
        
        const conflictResult = await this.resolveMergeConflicts(branchName);
        
        // Cleanup backup branch
        await this.executeGitCommand(`git branch -D ${backupBranch}`, { silent: true });
        
        return conflictResult;
      }
      
    } catch (error) {
      this.log(`Error during auto-merge of ${branchName}: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async resolveMergeConflicts(branchName) {
    this.log(`Attempting to resolve merge conflicts for ${branchName}`);
    
    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(f => f.trim());
      
      if (conflictedFiles.length === 0) {
        this.log('No conflicted files found');
        return { success: true, message: 'No conflicts to resolve' };
      }
      
      this.log(`Found ${conflictedFiles.length} conflicted files`);
      
      // For each conflicted file, try to resolve automatically
      for (const file of conflictedFiles) {
        if (!fs.existsSync(file)) continue;
        
        const content = fs.readFileSync(file, 'utf8');
        const resolvedContent = this.autoResolveConflicts(content, file);
        
        if (resolvedContent !== content) {
          fs.writeFileSync(file, resolvedContent);
          await this.executeGitCommand(`git add ${file}`, { silent: true });
          this.log(`Auto-resolved conflicts in ${file}`);
        }
      }
      
      // Commit the resolution
      const commitResult = await this.executeGitCommand(
        `git commit -m "Auto-resolve merge conflicts from ${branchName}"`, 
        { silent: true }
      );
      
      if (commitResult.success) {
        this.log(`Successfully resolved conflicts for ${branchName}`);
        
        // Push changes
        if (this.config.git.autoPush) {
          await this.executeGitCommand('git push origin main', { silent: true });
          this.log(`Pushed conflict resolution to origin/main`);
        }
        
        return { success: true, message: `Conflicts resolved for ${branchName}` };
      } else {
        return { success: false, error: 'Failed to commit conflict resolution' };
      }
      
    } catch (error) {
      this.log(`Error resolving conflicts for ${branchName}: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  autoResolveConflicts(content, filename) {
    // Simple conflict resolution strategy
    // In a real implementation, this would be much more sophisticated
    
    const conflictMarkers = {
      start: /<<<<<<< HEAD\n/g,
      separator: /=======\n/g,
      end: />>>>>>> [^\n]+\n/g
    };
    
    // Remove conflict markers and keep the "ours" version (HEAD)
    let resolved = content
      .replace(conflictMarkers.start, '')
      .replace(conflictMarkers.separator, '')
      .replace(conflictMarkers.end, '');
    
    return resolved;
  }

  async cleanupStaleBranches() {
    this.log('Cleaning up stale branches...');
    
    try {
      // Get merged branches
      const mergedBranches = execSync('git branch --merged main', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      }).split('\n').filter(b => b.trim());
      
      let cleanedCount = 0;
      
      for (const branch of mergedBranches) {
        const branchName = branch.trim();
        
        // Skip main branches
        if (['main', 'master', 'develop', 'staging'].includes(branchName)) {
          continue;
        }
        
        // Check if branch is stale
        const health = this.branchHealth[branchName];
        if (health && health.health < 30) {
          try {
            await this.executeGitCommand(`git branch -d ${branchName}`, { silent: true });
            this.log(`Deleted stale branch: ${branchName}`);
            cleanedCount++;
          } catch (error) {
            this.log(`Could not delete branch ${branchName}: ${error.message}`, 'WARN');
          }
        }
      }
      
      this.log(`Cleaned up ${cleanedCount} stale branches`);
      return cleanedCount;
      
    } catch (error) {
      this.log(`Error cleaning up stale branches: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async generateHealthReport() {
    this.log('Generating repository health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      gitStatus: this.gitStatus,
      branchHealth: this.branchHealth,
      summary: {
        totalBranches: Object.keys(this.branchHealth).length,
        healthyBranches: Object.values(this.branchHealth).filter(b => b.health >= 70).length,
        warningBranches: Object.values(this.branchHealth).filter(b => b.health >= 40 && b.health < 70).length,
        criticalBranches: Object.values(this.branchHealth).filter(b => b.health < 40).length,
        averageHealth: Object.values(this.branchHealth).reduce((sum, b) => sum + b.health, 0) / Object.keys(this.branchHealth).length
      },
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportsDir, `repository-health-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Analyze branch health and generate recommendations
    for (const [branchName, health] of Object.entries(this.branchHealth)) {
      if (health.health < 40) {
        recommendations.push({
          type: 'CRITICAL',
          branch: branchName,
          issue: 'Branch health is critically low',
          action: 'Consider merging or deleting this branch',
          priority: 'HIGH'
        });
      } else if (health.health < 70) {
        recommendations.push({
          type: 'WARNING',
          branch: branchName,
          issue: 'Branch health is below optimal',
          action: 'Review and update this branch',
          priority: 'MEDIUM'
        });
      }
      
      if (health.behindMain > 20) {
        recommendations.push({
          type: 'SYNC',
          branch: branchName,
          issue: 'Branch is significantly behind main',
          action: 'Rebase or merge with main',
          priority: 'HIGH'
        });
      }
    }
    
    return recommendations;
  }

  async run() {
    this.log('Starting Intelligent Repository Manager...');
    
    try {
      // Get current git status
      await this.getGitStatus();
      
      // Analyze branch health
      await this.analyzeBranchHealth();
      
      // Generate health report
      const healthReport = await this.generateHealthReport();
      
      // If auto-merge is enabled, attempt to merge healthy branches
      if (this.config.git.autoMerge) {
        const mergeableBranches = await this.identifyMergeableBranches();
        
        for (const branch of mergeableBranches) {
          this.log(`Attempting to merge branch: ${branch.name} (health: ${branch.health})`);
          const result = await this.attemptAutoMerge(branch.name);
          
          if (result.success) {
            this.log(`Successfully processed branch: ${branch.name}`);
          } else {
            this.log(`Failed to process branch: ${branch.name}: ${result.error}`, 'ERROR');
          }
        }
      }
      
      // Cleanup stale branches
      if (this.config.git.branchCleanup) {
        await this.cleanupStaleBranches();
      }
      
      this.log('Intelligent Repository Manager completed successfully');
      
      // Schedule next run
      setTimeout(() => this.run(), this.config.automation.mergeInterval);
      
    } catch (error) {
      this.log(`Error in Intelligent Repository Manager: ${error.message}`, 'ERROR');
      
      // Schedule retry
      setTimeout(() => this.run(), 5 * 60 * 1000); // 5 minutes
    }
  }
}

// Start the Intelligent Repository Manager
if (require.main === module) {
  const manager = new IntelligentRepositoryManager();
  manager.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = IntelligentRepositoryManager;