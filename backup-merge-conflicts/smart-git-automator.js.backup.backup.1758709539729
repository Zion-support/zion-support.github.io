#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartGitAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/smart-git-automator.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/git-report.json');
    this.configFile = path.join(this.projectRoot, '.smart-git-config.json');
    this.startTime = Date.now();
    this.config = this.loadConfig();
    this.branchHistory = [];
    this.mergeConflicts = [];
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        return JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading config: ${error.message}`);
    }

    // Default configuration
    return {
      autoMerge: true,
      conflictResolution: 'intelligent',
      branchStrategy: 'smart',
      protectedBranches: ['main', 'master', 'develop'],
      autoCleanup: true,
      maxBranchAge: 30,
      mergeStrategy: 'squash',
      autoCommit: true,
      commitMessageTemplate: 'feat: {type} {description}',
      enableAI: true,
      riskThreshold: 0.7,
      enableNotifications: true
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async getCurrentBranch() {
    try {
      return execSync('git branch --show-current', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
    } catch (error) {
      this.log(`Error getting current branch: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getBranchStatus() {
    try {
      const currentBranch = await this.getCurrentBranch();
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      const ahead = execSync(`git rev-list --count HEAD..origin/${currentBranch}`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();

      const behind = execSync(`git rev-list --count origin/${currentBranch}..HEAD`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();

      return {
        currentBranch,
        hasChanges: status.length > 0,
        changes: status.split('\n').filter(Boolean),
        ahead: parseInt(ahead) || 0,
        behind: parseInt(behind) || 0,
        isClean: status.length === 0
      };
    } catch (error) {
      this.log(`Error getting branch status: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getAllBranches() {
    try {
      const localBranches = execSync('git branch', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).split('\n')
        .filter(Boolean)
        .map(branch => branch.trim().replace('*', ''))
        .filter(branch => branch !== '');

      const remoteBranches = execSync('git branch -r', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).split('\n')
        .filter(Boolean)
        .map(branch => branch.trim().replace('origin/', ''))
        .filter(branch => !branch.includes('HEAD'));

      return { localBranches, remoteBranches };
    } catch (error) {
      this.log(`Error getting branches: ${error.message}`, 'ERROR');
      return { localBranches: [], remoteBranches: [] };
    }
  }

  async analyzeBranchRisk(branchName) {
    try {
      const riskFactors = {
        age: 0,
        size: 0,
        conflicts: 0,
        complexity: 0,
        total: 0
      };

      // Calculate branch age risk
      const lastCommit = execSync(`git log -1 --format=%ct ${branchName}`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      const branchAge = (Date.now() / 1000 - parseInt(lastCommit)) / (24 * 60 * 60);
      riskFactors.age = Math.min(1, branchAge / 30); // Normalize to 0-1

      // Calculate branch size risk
      const commitCount = execSync(`git rev-list --count main..${branchName}`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      riskFactors.size = Math.min(1, parseInt(commitCount) / 50); // Normalize to 0-1

      // Check for potential conflicts
      try {
        execSync(`git merge-base main ${branchName}`, {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        const conflictCheck = execSync(`git merge-tree $(git merge-base main ${branchName}) main ${branchName}`, {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        riskFactors.conflicts = conflictCheck.includes('<<<<<<<') ? 0.8 : 0;
      } catch (error) {
        riskFactors.conflicts = 0.5; // Medium risk if can't check
      }

      // Calculate complexity based on file changes
      const changedFiles = execSync(`git diff --name-only main..${branchName}`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).split('\n').filter(Boolean);
      riskFactors.complexity = Math.min(1, changedFiles.length / 20); // Normalize to 0-1

      // Calculate total risk
      riskFactors.total = (riskFactors.age * 0.2 + riskFactors.size * 0.3 + 
                          riskFactors.conflicts * 0.4 + riskFactors.complexity * 0.1);

      return riskFactors;
    } catch (error) {
      this.log(`Error analyzing branch risk: ${error.message}`, 'ERROR');
      return { age: 0, size: 0, conflicts: 0, complexity: 0, total: 0.5 };
    }
  }

  async intelligentMerge(branchName) {
    try {
      this.log(`🔄 Starting intelligent merge for branch: ${branchName}`);
      
      // Analyze risk before merging
      const risk = await this.analyzeBranchRisk(branchName);
      this.log(`📊 Branch risk analysis: ${(risk.total * 100).toFixed(1)}%`);

      if (risk.total > this.config.riskThreshold) {
        this.log(`⚠️ High risk merge detected (${(risk.total * 100).toFixed(1)}%) - proceeding with caution`, 'WARN');
      }

      // Checkout main and pull latest
      execSync('git checkout main', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync('git pull origin main', { cwd: this.projectRoot, stdio: 'pipe' });

      // Create backup branch
      const backupBranch = `backup-${branchName}-${Date.now()}`;
      execSync(`git branch ${backupBranch}`, { cwd: this.projectRoot, stdio: 'pipe' });
      this.log(`💾 Created backup branch: ${backupBranch}`);

      // Attempt merge with conflict resolution
      try {
        if (this.config.mergeStrategy === 'squash') {
          execSync(`git merge --squash ${branchName}`, { 
            cwd: this.projectRoot, 
            stdio: 'pipe' 
          });
          execSync(`git commit -m "feat: merge ${branchName} (squashed)"`, { 
            cwd: this.projectRoot, 
            stdio: 'pipe' 
          });
        } else {
          execSync(`git merge ${branchName}`, { 
            cwd: this.projectRoot, 
            stdio: 'pipe' 
          });
        }

        this.log(`✅ Successfully merged ${branchName} into main`);
        
        // Push changes
        execSync('git push origin main', { cwd: this.projectRoot, stdio: 'pipe' });
        
        // Clean up
        await this.cleanupBranch(branchName);
        
        return { success: true, conflicts: 0, risk };
      } catch (error) {
        this.log(`⚠️ Merge conflicts detected, attempting intelligent resolution...`, 'WARN');
        return await this.resolveMergeConflicts(branchName, backupBranch);
      }
    } catch (error) {
      this.log(`❌ Error during intelligent merge: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async resolveMergeConflicts(branchName, backupBranch) {
    try {
      const conflicts = [];
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });

      if (status.includes('UU')) {
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
          cwd: this.projectRoot,
          encoding: 'utf8'
        }).split('\n').filter(Boolean);

        this.log(`🔧 Resolving conflicts in ${conflictedFiles.length} files`);

        for (const file of conflictedFiles) {
          const resolution = await this.intelligentConflictResolution(file);
          conflicts.push({
            file,
            resolution: resolution.type,
            success: resolution.success
          });

          if (resolution.success) {
            execSync(`git add ${file}`, { cwd: this.projectRoot, stdio: 'pipe' });
            this.log(`✅ Resolved conflicts in: ${file}`);
          } else {
            this.log(`❌ Failed to resolve conflicts in: ${file}`, 'ERROR');
          }
        }

        // Commit resolution
        if (conflicts.every(c => c.success)) {
          execSync('git commit -m "fix: resolve merge conflicts intelligently"', {
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          
          execSync('git push origin main', { cwd: this.projectRoot, stdio: 'pipe' });
          await this.cleanupBranch(branchName);
          
          this.log(`✅ Successfully resolved all conflicts and merged ${branchName}`);
          return { success: true, conflicts: conflicts.length, resolution: 'intelligent' };
        } else {
          // Rollback to backup
          execSync(`git reset --hard ${backupBranch}`, { cwd: this.projectRoot, stdio: 'pipe' });
          this.log(`🔄 Rolled back to backup due to unresolved conflicts`);
          return { success: false, conflicts: conflicts.length, resolution: 'failed' };
        }
      }

      return { success: false, conflicts: 0, resolution: 'no_conflicts' };
    } catch (error) {
      this.log(`❌ Error resolving merge conflicts: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async intelligentConflictResolution(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('<<<<<<<') || !content.includes('>>>>>>>')) {
        return { type: 'none', success: true };
      }

      // Simple conflict resolution strategies
      const strategies = [
        this.resolveByIncomingChange,
        this.resolveByCurrentChange,
        this.resolveByCombination,
        this.resolveBySmartAnalysis
      ];

      for (const strategy of strategies) {
        try {
          const resolved = strategy(content);
          if (resolved) {
            fs.writeFileSync(filePath, resolved);
            return { type: strategy.name, success: true };
          }
        } catch (error) {
          // Try next strategy
        }
      }

      return { type: 'manual', success: false };
    } catch (error) {
      this.log(`Error resolving conflicts in ${filePath}: ${error.message}`, 'ERROR');
      return { type: 'error', success: false };
    }
  }

  resolveByIncomingChange(content) {
    // Take the incoming change (after =======)
    return content.replace(/<<<<<<<[\s\S]*?=======([\s\S]*?)>>>>>>>/g, '$1');
  }

  resolveByCurrentChange(content) {
    // Take the current change (before =======)
    return content.replace(/<<<<<<<([\s\S]*?)=======[\s\S]*?>>>>>>>/g, '$1');
  }

  resolveByCombination(content) {
    // Combine both changes
    return content.replace(/<<<<<<<([\s\S]*?)=======([\s\S]*?)>>>>>>>/g, '$1\n$2');
  }

  resolveBySmartAnalysis(content) {
    // Smart analysis based on content type
    if (filePath.endsWith('.json')) {
      // For JSON files, try to merge objects
      return this.mergeJsonConflicts(content);
    } else if (filePath.endsWith('.js') || filePath.endsWith('.ts')) {
      // For code files, prefer the longer/more complete version
      return this.resolveCodeConflicts(content);
    }
    return null;
  }

  mergeJsonConflicts(content) {
    // Simple JSON merge - take both objects and combine
    const match = content.match(/<<<<<<<([\s\S]*?)=======([\s\S]*?)>>>>>>>/);
    if (match) {
      try {
        const current = JSON.parse(match[1].trim());
        const incoming = JSON.parse(match[2].trim());
        const merged = { ...current, ...incoming };
        return content.replace(/<<<<<<<[\s\S]*?>>>>>>>/g, JSON.stringify(merged, null, 2));
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  resolveCodeConflicts(content) {
    // For code conflicts, prefer the version with more content
    const match = content.match(/<<<<<<<([\s\S]*?)=======([\s\S]*?)>>>>>>>/);
    if (match) {
      const current = match[1].trim();
      const incoming = match[2].trim();
      return content.replace(/<<<<<<<[\s\S]*?>>>>>>>/g, 
        current.length > incoming.length ? current : incoming);
    }
    return null;
  }

  async cleanupBranch(branchName) {
    try {
      // Delete local branch
      execSync(`git branch -d ${branchName}`, { cwd: this.projectRoot, stdio: 'pipe' });
      
      // Delete remote branch
      try {
        execSync(`git push origin --delete ${branchName}`, { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
      } catch (error) {
        this.log(`Warning: Could not delete remote branch ${branchName}`);
      }
      
      this.log(`🗑️ Cleaned up branch: ${branchName}`);
    } catch (error) {
      this.log(`Error cleaning up branch ${branchName}: ${error.message}`, 'ERROR');
    }
  }

  async autoCommitChanges() {
    try {
      const status = await this.getBranchStatus();
      if (!status || !status.hasChanges) {
        this.log('No changes to commit');
        return false;
      }

      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(status.changes);
      
      execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
      execSync(`git commit -m "${commitMessage}"`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log(`✅ Auto-committed: ${commitMessage}`);
      return true;
    } catch (error) {
      this.log(`❌ Error auto-committing: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateCommitMessage(changes) {
    const changeTypes = {
      'M': 'modified',
      'A': 'added',
      'D': 'deleted',
      'R': 'renamed',
      'C': 'copied'
    };

    const summary = changes.reduce((acc, change) => {
      const type = change.charAt(0);
      const file = change.substring(3);
      const changeType = changeTypes[type] || 'changed';
      
      if (!acc[changeType]) acc[changeType] = [];
      acc[changeType].push(file);
      return acc;
    }, {});

    const message = Object.entries(summary)
      .map(([type, files]) => `${type} ${files.length} file(s)`)
      .join(', ');

    return `feat: ${message}`;
  }

  async generateReport() {
    const status = await this.getBranchStatus();
    const branches = await this.getAllBranches();
    
    const report = {
      timestamp: new Date().toISOString(),
      currentBranch: status?.currentBranch,
      branchStatus: status,
      branches,
      recentMerges: this.branchHistory.slice(-10),
      conflicts: this.mergeConflicts,
      config: this.config,
      recommendations: this.generateRecommendations(status, branches)
    };

    return report;
  }

  generateRecommendations(status, branches) {
    const recommendations = [];

    if (status?.behind > 0) {
      recommendations.push({
        priority: 'high',
        message: `Branch is ${status.behind} commits behind origin`,
        action: 'Run git pull to sync with remote'
      });
    }

    if (status?.ahead > 0) {
      recommendations.push({
        priority: 'medium',
        message: `Branch is ${status.ahead} commits ahead of origin`,
        action: 'Consider pushing changes to remote'
      });
    }

    if (branches.localBranches.length > 10) {
      recommendations.push({
        priority: 'low',
        message: `Many local branches (${branches.localBranches.length})`,
        action: 'Consider cleaning up old branches'
      });
    }

    if (status?.hasChanges) {
      recommendations.push({
        priority: 'medium',
        message: 'Working directory has uncommitted changes',
        action: 'Commit or stash changes before switching branches'
      });
    }

    return recommendations;
  }

  async saveReport(report) {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Git report saved: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`, 'ERROR');
    }
  }

  displaySummary(report) {
    console.log('\n🤖 SMART GIT AUTOMATOR SUMMARY');
    console.log('================================');
    
    console.log(`🌿 Current Branch: ${report.currentBranch || 'unknown'}`);
    console.log(`📊 Status: ${report.branchStatus?.isClean ? 'Clean' : 'Has Changes'}`);
    console.log(`📈 Ahead: ${report.branchStatus?.ahead || 0} commits`);
    console.log(`📉 Behind: ${report.branchStatus?.behind || 0} commits`);
    console.log(`🌿 Local Branches: ${report.branches?.localBranches?.length || 0}`);
    console.log(`🌐 Remote Branches: ${report.branches?.remoteBranches?.length || 0}`);
    console.log(`🔧 Recent Merges: ${report.recentMerges?.length || 0}`);
    console.log(`⚠️ Conflicts: ${report.conflicts?.length || 0}`);

    if (report.recommendations?.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec => {
        console.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
        console.log(`    → ${rec.action}`);
      });
    }

    console.log(`\n📄 Report saved to: ${this.reportFile}`);
  }

  async run() {
    this.log('🚀 Starting Smart Git Automator...');
    
    try {
      // Auto-commit changes if enabled
      if (this.config.autoCommit) {
        await this.autoCommitChanges();
      }

      // Generate comprehensive report
      const report = await this.generateReport();
      await this.saveReport(report);
      
      // Display summary
      this.displaySummary(report);
      
      this.log('✅ Smart Git Automator completed successfully');
    } catch (error) {
      this.log(`❌ Smart Git Automator failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automator = new SmartGitAutomator();
  automator.run();
}

module.exports = SmartGitAutomator;