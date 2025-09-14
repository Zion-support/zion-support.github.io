#!/usr/bin/env node

/**
 * Enhanced Git Intelligence System
 * 
 * This system provides intelligent git repository management including:
 * - Automatic conflict resolution
 * - Smart branch merging
 * - PR management and auto-merge
 * - Repository health monitoring
 * - Conflict prediction and prevention
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedGitIntelligenceSystem {
  constructor() {
    this.repoPath = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(this.repoPath, 'logs', 'enhanced-git-intelligence.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.repoPath, 'automation-config.json');
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log('Error loading config, using defaults', 'ERROR');
      }
    }
    
    return {
      git: {
        autoMerge: true,
        autoPush: true,
        conflictResolution: true,
        branchCleanup: true,
        healthMonitoring: true,
        conflictPrediction: true,
        smartMerge: true
      },
      branches: {
        main: 'main',
        develop: 'develop',
        staging: 'staging',
        featurePrefix: 'feature/',
        hotfixPrefix: 'hotfix/',
        releasePrefix: 'release/'
      },
      thresholds: {
        maxConflicts: 5,
        maxMergeAttempts: 3,
        healthScoreThreshold: 80,
        conflictPredictionThreshold: 0.7
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn('bash', ['-c', command], {
        cwd: this.repoPath,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });

      let stdout = '';
      let stderr = '';

      if (options.silent) {
        child.stdout.on('data', (data) => {
          stdout += data.toString();
        });
        child.stderr.on('data', (data) => {
          stderr += data.toString();
        });
      }

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject({ success: false, stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }

  async getRepositoryStatus() {
    try {
      const status = await this.executeCommand('git status --porcelain', { silent: true });
      const branches = await this.executeCommand('git branch -a', { silent: true });
      const remotes = await this.executeCommand('git remote -v', { silent: true });
      
      return {
        workingDirectory: status.stdout.trim() === '' ? 'clean' : 'dirty',
        uncommittedChanges: status.stdout.split('\n').filter(line => line.trim()),
        branches: branches.stdout.split('\n').filter(line => line.trim()),
        remotes: remotes.stdout.split('\n').filter(line => line.trim())
      };
    } catch (error) {
      this.log(`Error getting repository status: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeBranchHealth(branchName) {
    try {
      // Check branch age
      const branchAge = await this.executeCommand(
        `git log --oneline --since="30 days ago" origin/${branchName} | wc -l`,
        { silent: true }
      );
      
      // Check commit frequency
      const commitFrequency = await this.executeCommand(
        `git log --oneline --since="7 days ago" origin/${branchName} | wc -l`,
        { silent: true }
      );
      
      // Check for conflicts with main
      const conflictsWithMain = await this.checkConflictsWithMain(branchName);
      
      // Calculate health score
      const ageScore = Math.max(0, 100 - parseInt(branchAge.stdout) * 2);
      const frequencyScore = Math.min(100, parseInt(commitFrequency.stdout) * 20);
      const conflictScore = conflictsWithMain ? 0 : 100;
      
      const healthScore = Math.round((ageScore + frequencyScore + conflictScore) / 3);
      
      return {
        branchName,
        healthScore,
        ageScore,
        frequencyScore,
        conflictScore,
        conflictsWithMain,
        recommendations: this.generateBranchRecommendations(healthScore, conflictsWithMain)
      };
    } catch (error) {
      this.log(`Error analyzing branch health for ${branchName}: ${error.message}`, 'ERROR');
      return { branchName, healthScore: 0, error: error.message };
    }
  }

  async checkConflictsWithMain(branchName) {
    try {
      await this.executeCommand(`git fetch origin ${branchName}`, { silent: true });
      await this.executeCommand(`git fetch origin main`, { silent: true });
      
      const mergeTest = await this.executeCommand(
        `git merge-tree $(git merge-base origin/${branchName} origin/main) origin/${branchName} origin/main`,
        { silent: true }
      );
      
      return mergeTest.stdout.includes('<<<<<<<') || mergeTest.stdout.includes('=======');
    } catch (error) {
      return true; // Assume conflicts if we can't check
    }
  }

  generateBranchRecommendations(healthScore, hasConflicts) {
    const recommendations = [];
    
    if (healthScore < 50) {
      recommendations.push('Branch has low health score - consider cleanup or deletion');
    }
    
    if (hasConflicts) {
      recommendations.push('Branch has conflicts with main - resolve before merging');
    }
    
    if (healthScore > 80 && !hasConflicts) {
      recommendations.push('Branch is healthy and ready for merge');
    }
    
    return recommendations;
  }

  async predictConflicts(branchName) {
    try {
      // Analyze file changes
      const fileChanges = await this.executeCommand(
        `git diff --name-status origin/main...origin/${branchName}`,
        { silent: true }
      );
      
      const changes = fileChanges.stdout.split('\n').filter(line => line.trim());
      let conflictProbability = 0;
      
      // Check for common conflict patterns
      const conflictPatterns = [
        /package\.json$/,
        /yarn\.lock$/,
        /tsconfig\.json$/,
        /\.env/,
        /src\/components\/.*\.tsx?$/,
        /src\/pages\/.*\.tsx?$/
      ];
      
      changes.forEach(change => {
        const [, filePath] = change.split('\t');
        if (filePath) {
          conflictPatterns.forEach(pattern => {
            if (pattern.test(filePath)) {
              conflictProbability += 0.1;
            }
          });
        }
      });
      
      return Math.min(1, conflictProbability);
    } catch (error) {
      this.log(`Error predicting conflicts for ${branchName}: ${error.message}`, 'ERROR');
      return 0.5; // Default to medium probability
    }
  }

  async intelligentMerge(branchName) {
    try {
      this.log(`Starting intelligent merge for branch: ${branchName}`);
      
      // Check if branch is ready for merge
      const health = await this.analyzeBranchHealth(branchName);
      const conflictProbability = await this.predictConflicts(branchName);
      
      if (health.healthScore < this.config.thresholds.healthScoreThreshold) {
        this.log(`Branch ${branchName} has low health score (${health.healthScore}), skipping merge`, 'WARN');
        return { success: false, reason: 'Low health score' };
      }
      
      if (conflictProbability > this.config.thresholds.conflictPredictionThreshold) {
        this.log(`High conflict probability (${conflictProbability}) for branch ${branchName}, manual review recommended`, 'WARN');
        return { success: false, reason: 'High conflict probability' };
      }
      
      // Attempt merge
      await this.executeCommand('git checkout main', { silent: true });
      await this.executeCommand('git pull origin main', { silent: true });
      
      try {
        await this.executeCommand(`git merge origin/${branchName}`, { silent: true });
        this.log(`Successfully merged branch ${branchName}`, 'INFO');
        
        if (this.config.git.autoPush) {
          await this.executeCommand('git push origin main', { silent: true });
          this.log(`Pushed merged changes to main`, 'INFO');
        }
        
        return { success: true, message: 'Merge completed successfully' };
      } catch (mergeError) {
        this.log(`Merge failed for branch ${branchName}, attempting conflict resolution`, 'WARN');
        return await this.resolveMergeConflicts(branchName);
      }
    } catch (error) {
      this.log(`Error during intelligent merge of ${branchName}: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async resolveMergeConflicts(branchName) {
    try {
      this.log(`Attempting to resolve merge conflicts for branch: ${branchName}`);
      
      // Get list of conflicted files
      const conflictedFiles = await this.executeCommand(
        'git diff --name-only --diff-filter=U',
        { silent: true }
      );
      
      const files = conflictedFiles.stdout.split('\n').filter(line => line.trim());
      
      if (files.length === 0) {
        this.log('No conflicted files found', 'INFO');
        return { success: true, message: 'No conflicts to resolve' };
      }
      
      this.log(`Found ${files.length} conflicted files`, 'INFO');
      
      // Attempt automatic conflict resolution
      let resolvedCount = 0;
      for (const file of files) {
        if (await this.autoResolveConflict(file)) {
          resolvedCount++;
        }
      }
      
      if (resolvedCount === files.length) {
        // All conflicts resolved, complete merge
        await this.executeCommand('git add .', { silent: true });
        await this.executeCommand('git commit -m "Auto-resolve merge conflicts"', { silent: true });
        
        if (this.config.git.autoPush) {
          await this.executeCommand('git push origin main', { silent: true });
        }
        
        this.log(`Successfully resolved all conflicts and completed merge`, 'INFO');
        return { success: true, message: 'Conflicts resolved automatically' };
      } else {
        // Some conflicts couldn't be resolved automatically
        this.log(`${files.length - resolvedCount} conflicts require manual resolution`, 'WARN');
        return { success: false, reason: 'Manual conflict resolution required' };
      }
    } catch (error) {
      this.log(`Error resolving merge conflicts: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async autoResolveConflict(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Simple conflict resolution strategies
      if (content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>')) {
        // Keep the main branch version for most files
        const resolvedContent = content.replace(
          /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g,
          '$1'
        );
        
        fs.writeFileSync(filePath, resolvedContent);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error auto-resolving conflict in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async cleanupStaleBranches() {
    try {
      this.log('Starting stale branch cleanup');
      
      const branches = await this.executeCommand('git branch -r', { silent: true });
      const branchList = branches.stdout.split('\n').filter(line => line.trim());
      
      let cleanedCount = 0;
      for (const branch of branchList) {
        const branchName = branch.trim().replace('origin/', '');
        
        if (branchName === 'main' || branchName === 'HEAD') continue;
        
        const health = await this.analyzeBranchHealth(branchName);
        
        if (health.healthScore < 30) {
          this.log(`Removing stale branch: ${branchName} (health: ${health.healthScore})`, 'INFO');
          
          try {
            await this.executeCommand(`git push origin --delete ${branchName}`, { silent: true });
            cleanedCount++;
          } catch (error) {
            this.log(`Failed to delete branch ${branchName}: ${error.message}`, 'WARN');
          }
        }
      }
      
      this.log(`Cleanup completed. Removed ${cleanedCount} stale branches`, 'INFO');
      return { success: true, cleanedCount };
    } catch (error) {
      this.log(`Error during branch cleanup: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async generateRepositoryReport() {
    try {
      this.log('Generating comprehensive repository report');
      
      const status = await this.getRepositoryStatus();
      const branches = status.branches.filter(b => b.includes('origin/') && !b.includes('HEAD'));
      
      const branchHealth = [];
      for (const branch of branches) {
        const branchName = branch.trim().replace('origin/', '');
        if (branchName === 'main') continue;
        
        const health = await this.analyzeBranchHealth(branchName);
        const conflictProbability = await this.predictConflicts(branchName);
        
        branchHealth.push({
          ...health,
          conflictProbability
        });
      }
      
      const report = {
        timestamp: new Date().toISOString(),
        repositoryStatus: status,
        branchHealth,
        summary: {
          totalBranches: branchHealth.length,
          healthyBranches: branchHealth.filter(b => b.healthScore >= 80).length,
          problematicBranches: branchHealth.filter(b => b.healthScore < 50).length,
          branchesWithConflicts: branchHealth.filter(b => b.conflictsWithMain).length
        },
        recommendations: this.generateOverallRecommendations(branchHealth)
      };
      
      // Save report
      const reportPath = path.join(this.repoPath, 'reports', 'git-intelligence-report.json');
      const reportDir = path.dirname(reportPath);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Repository report saved to: ${reportPath}`, 'INFO');
      
      return report;
    } catch (error) {
      this.log(`Error generating repository report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  generateOverallRecommendations(branchHealth) {
    const recommendations = [];
    
    const lowHealthBranches = branchHealth.filter(b => b.healthScore < 50);
    if (lowHealthBranches.length > 0) {
      recommendations.push(`Consider cleaning up ${lowHealthBranches.length} low-health branches`);
    }
    
    const conflictBranches = branchHealth.filter(b => b.conflictsWithMain);
    if (conflictBranches.length > 0) {
      recommendations.push(`Resolve conflicts in ${conflictBranches.length} branches before merging`);
    }
    
    const readyBranches = branchHealth.filter(b => b.healthScore >= 80 && !b.conflictsWithMain);
    if (readyBranches.length > 0) {
      recommendations.push(`${readyBranches.length} branches are ready for merge`);
    }
    
    return recommendations;
  }

  async run() {
    this.log('Enhanced Git Intelligence System starting...', 'INFO');
    
    try {
      // Generate repository report
      const report = await this.generateRepositoryReport();
      
      if (!report) {
        this.log('Failed to generate repository report', 'ERROR');
        return;
      }
      
      // Process branches based on health and conflict status
      for (const branch of report.branchHealth) {
        if (branch.healthScore >= 80 && !branch.conflictsWithMain) {
          this.log(`Branch ${branch.branchName} is ready for merge`, 'INFO');
          
          if (this.config.git.autoMerge) {
            const mergeResult = await this.intelligentMerge(branch.branchName);
            if (mergeResult.success) {
              this.log(`Successfully merged branch ${branch.branchName}`, 'INFO');
            } else {
              this.log(`Failed to merge branch ${branch.branchName}: ${mergeResult.reason}`, 'WARN');
            }
          }
        }
      }
      
      // Cleanup stale branches
      if (this.config.git.branchCleanup) {
        await this.cleanupStaleBranches();
      }
      
      this.log('Enhanced Git Intelligence System completed successfully', 'INFO');
      
    } catch (error) {
      this.log(`Error in Enhanced Git Intelligence System: ${error.message}`, 'ERROR');
    }
  }
}

// Run the system if called directly
if (require.main === module) {
  const system = new EnhancedGitIntelligenceSystem();
  system.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedGitIntelligenceSystem;