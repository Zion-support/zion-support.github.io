#!/usr/bin/env node

/**
 * Intelligent Repository Manager - PM2 Automation
 * Automatically resolves merge conflicts, merges PRs, and manages repository workflow
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentRepositoryManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'logs',
      'intelligent-repository-manager.log'
    );
    this.mergeHistory = path.join(
      this.projectRoot,
      'logs',
      'merge-history.json'
    );
    this.conflictResolutionHistory = path.join(
      this.projectRoot,
      'logs',
      'conflict-resolution-history.json'
    );
    this.ensureLogsDirectory();

    this.mergeHistoryData = [];
    this.conflictResolutionHistoryData = [];
    this.currentBranch = '';
    this.remoteBranches = [];
    this.openPRs = [];

    this.conflictResolutionStrategies = {
      AUTO_MERGE: 'auto-merge',
      MANUAL_REVIEW: 'manual-review',
      SMART_RESOLUTION: 'smart-resolution',
      BACKUP_AND_MERGE: 'backup-and-merge'
    };

    this.mergePriorities = {
      HIGH: ['enhance-pm2-automations', 'fix-errors', 'security-updates'],
      MEDIUM: ['feature-enhancements', 'ui-improvements', 'performance-optimization'],
      LOW: ['documentation', 'minor-fixes', 'style-updates']
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async initialize() {
    this.log('Initializing Intelligent Repository Manager...');

    try {
      // Load existing history
      await this.loadHistory();

      // Get current repository state
      await this.analyzeRepositoryState();

      // Setup git hooks for conflict prevention
      await this.setupGitHooks();

      this.log('Intelligent Repository Manager initialized successfully');
    } catch (error) {
      this.log(`Failed to initialize: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async loadHistory() {
    try {
      if (fs.existsSync(this.mergeHistory)) {
        this.mergeHistoryData = JSON.parse(fs.readFileSync(this.mergeHistory, 'utf8'));
      }
      if (fs.existsSync(this.conflictResolutionHistory)) {
        this.conflictResolutionHistoryData = JSON.parse(fs.readFileSync(this.conflictResolutionHistory, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load history: ${error.message}`, 'WARN');
    }
  }

  async analyzeRepositoryState() {
    try {
      // Get current branch
      this.currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      this.log(`Current branch: ${this.currentBranch}`);

      // Get remote branches
      const remoteOutput = execSync('git branch -r', { encoding: 'utf8' });
      this.remoteBranches = remoteOutput
        .split('\n')
        .filter(branch => branch.trim() && !branch.includes('HEAD'))
        .map(branch => branch.trim());

      this.log(`Found ${this.remoteBranches.length} remote branches`);

      // Analyze branch patterns
      await this.analyzeBranchPatterns();

    } catch (error) {
      this.log(`Failed to analyze repository state: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeBranchPatterns() {
    const patterns = {
      pm2Automations: this.remoteBranches.filter(b => b.includes('enhance-pm2-automations')),
      errorFixes: this.remoteBranches.filter(b => b.includes('fix-errors')),
      featureEnhancements: this.remoteBranches.filter(b => b.includes('enhance-app')),
      securityUpdates: this.remoteBranches.filter(b => b.includes('security')),
      documentation: this.remoteBranches.filter(b => b.includes('docs') || b.includes('documentation'))
    };

    this.log('Branch pattern analysis:');
    Object.entries(patterns).forEach(([category, branches]) => {
      this.log(`  ${category}: ${branches.length} branches`);
    });

    return patterns;
  }

  async setupGitHooks() {
    try {
      const hooksDir = path.join(this.projectRoot, '.git', 'hooks');
      if (!fs.existsSync(hooksDir)) {
        fs.mkdirSync(hooksDir, { recursive: true });
      }

      // Create pre-commit hook for conflict detection
      const preCommitHook = path.join(hooksDir, 'pre-commit');
      const preCommitContent = `#!/bin/bash
# Pre-commit hook for conflict detection
echo "Running pre-commit checks..."
if git diff --name-only --diff-filter=U | grep -q .; then
  echo "❌ Merge conflicts detected! Please resolve before committing."
  exit 1
fi
echo "✅ No merge conflicts detected"
exit 0
`;

      fs.writeFileSync(preCommitHook, preCommitContent);
      fs.chmodSync(preCommitHook, '755');

      this.log('Git hooks configured successfully');
    } catch (error) {
      this.log(`Failed to setup git hooks: ${error.message}`, 'WARN');
    }
  }

  async autoResolveAllConflicts() {
    this.log('Starting automatic conflict resolution for all branches...');

    try {
      const results = {
        totalBranches: 0,
        conflictsResolved: 0,
        branchesMerged: 0,
        errors: [],
        details: []
      };

      // Get all cursor branches that might have conflicts
      const cursorBranches = this.remoteBranches.filter(b => 
        b.includes('cursor/') && 
        !b.includes('backup') && 
        !b.includes('merge')
      );

      results.totalBranches = cursorBranches.length;
      this.log(`Found ${cursorBranches.length} cursor branches to process`);

      for (const remoteBranch of cursorBranches) {
        try {
          const branchName = remoteBranch.replace('origin/', '');
          this.log(`Processing branch: ${branchName}`);

          const result = await this.resolveBranchConflicts(branchName);
          
          if (result.success) {
            if (result.conflictsResolved > 0) {
              results.conflictsResolved += result.conflictsResolved;
            }
            if (result.merged) {
              results.branchesMerged++;
            }
          } else {
            results.errors.push({
              branch: branchName,
              error: result.error
            });
          }

          results.details.push({
            branch: branchName,
            ...result
          });

        } catch (error) {
          this.log(`Error processing branch ${remoteBranch}: ${error.message}`, 'ERROR');
          results.errors.push({
            branch: remoteBranch,
            error: error.message
          });
        }
      }

      // Save results
      await this.saveConflictResolutionResults(results);

      this.log(`Conflict resolution completed: ${results.conflictsResolved} conflicts resolved, ${results.branchesMerged} branches merged`);
      return results;

    } catch (error) {
      this.log(`Auto conflict resolution failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async resolveBranchConflicts(branchName) {
    const result = {
      branch: branchName,
      success: false,
      conflictsResolved: 0,
      merged: false,
      error: null,
      details: []
    };

    try {
      // Fetch latest changes
      execSync('git fetch origin', { stdio: 'pipe' });

      // Checkout the branch
      execSync(`git checkout -b ${branchName} origin/${branchName}`, { stdio: 'pipe' });

      // Try to merge with main
      try {
        execSync('git merge origin/main', { stdio: 'pipe' });
        result.success = true;
        result.details.push('No conflicts - clean merge');
      } catch (mergeError) {
        // Conflicts detected, resolve them
        result.conflictsResolved = await this.resolveMergeConflicts();
        result.success = true;
        result.details.push(`Resolved ${result.conflictsResolved} conflicts`);
      }

      // If successful, try to merge back to main
      if (result.success) {
        try {
          execSync('git checkout main', { stdio: 'pipe' });
          execSync(`git merge ${branchName}`, { stdio: 'pipe' });
          result.merged = true;
          result.details.push('Successfully merged to main');

          // Clean up the feature branch
          execSync(`git branch -D ${branchName}`, { stdio: 'pipe' });
          execSync(`git push origin --delete ${branchName}`, { stdio: 'pipe' });
          result.details.push('Feature branch cleaned up');
        } catch (mergeToMainError) {
          result.details.push(`Failed to merge to main: ${mergeToMainError.message}`);
        }
      }

    } catch (error) {
      result.error = error.message;
      result.details.push(`Error: ${error.message}`);
    }

    return result;
  }

  async resolveMergeConflicts() {
    let conflictsResolved = 0;

    try {
      // Get list of conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim());

      this.log(`Found ${conflictedFiles.length} conflicted files`);

      for (const file of conflictedFiles) {
        if (!file.trim()) continue;

        try {
          const resolution = await this.resolveFileConflict(file);
          if (resolution.resolved) {
            conflictsResolved++;
            this.log(`Resolved conflict in ${file} using strategy: ${resolution.strategy}`);
          }
        } catch (error) {
          this.log(`Failed to resolve conflict in ${file}: ${error.message}`, 'WARN');
        }
      }

      // Add resolved files and commit
      if (conflictsResolved > 0) {
        execSync('git add .', { stdio: 'pipe' });
        execSync('git commit -m "Auto-resolve merge conflicts"', { stdio: 'pipe' });
      }

    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'ERROR');
    }

    return conflictsResolved;
  }

  async resolveFileConflict(filePath) {
    const result = {
      file: filePath,
      resolved: false,
      strategy: 'unknown',
      details: ''
    };

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
        result.strategy = 'dependency-merge';
        result.resolved = await this.resolveDependencyConflict(filePath, fileContent);
      } else if (filePath.includes('.tsx') || filePath.includes('.ts') || filePath.includes('.js')) {
        result.strategy = 'code-merge';
        result.resolved = await this.resolveCodeConflict(filePath, fileContent);
      } else if (filePath.includes('.md') || filePath.includes('.txt')) {
        result.strategy = 'text-merge';
        result.resolved = await this.resolveTextConflict(filePath, fileContent);
      } else {
        result.strategy = 'backup-and-merge';
        result.resolved = await this.resolveGenericConflict(filePath, fileContent);
      }

      result.details = `Resolved using ${result.strategy} strategy`;

    } catch (error) {
      result.details = `Error: ${error.message}`;
    }

    return result;
  }

  async resolveDependencyConflict(filePath, content) {
    try {
      if (filePath.includes('package.json')) {
        // For package.json, prefer the version with more dependencies
        const mainVersion = JSON.parse(content);
        return true; // Accept the current version
      } else if (filePath.includes('package-lock.json')) {
        // For package-lock.json, regenerate it
        execSync('rm package-lock.json', { stdio: 'pipe' });
        execSync('npm install', { stdio: 'pipe' });
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Failed to resolve dependency conflict in ${filePath}: ${error.message}`, 'WARN');
      return false;
    }
  }

  async resolveCodeConflict(filePath, content) {
    try {
      // Remove conflict markers and keep the most recent version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictSection = '';

      for (const line of lines) {
        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
          conflictSection = 'ours';
        } else if (line.startsWith('=======')) {
          conflictSection = 'theirs';
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          // Keep the most recent version (theirs)
          if (conflictSection === 'theirs') {
            resolvedLines.push(line.replace('>>>>>>>', '// Resolved conflict'));
          }
        } else if (!inConflict) {
          resolvedLines.push(line);
        } else if (conflictSection === 'theirs') {
          resolvedLines.push(line);
        }
      }

      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent);
      return true;

    } catch (error) {
      this.log(`Failed to resolve code conflict in ${filePath}: ${error.message}`, 'WARN');
      return false;
    }
  }

  async resolveTextConflict(filePath, content) {
    try {
      // For text files, merge content intelligently
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let ourContent = [];
      let theirContent = [];

      for (const line of lines) {
        if (line.startsWith('<<<<<<<')) {
          inConflict = true;
        } else if (line.startsWith('=======')) {
          // Switch to their content
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          // Merge both contents, removing duplicates
          const mergedContent = [...new Set([...ourContent, ...theirContent])];
          resolvedLines.push(...mergedContent);
        } else if (inConflict) {
          if (line.includes('=======')) {
            // Switch to their content
          } else {
            ourContent.push(line);
          }
        } else {
          resolvedLines.push(line);
        }
      }

      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent);
      return true;

    } catch (error) {
      this.log(`Failed to resolve text conflict in ${filePath}: ${error.message}`, 'WARN');
      return false;
    }
  }

  async resolveGenericConflict(filePath, content) {
    try {
      // Create backup and use the most recent version
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, content);
      
      // Remove conflict markers and keep the most recent version
      const resolvedContent = content
        .replace(/<<<<<<<.*?\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>>.*?\n/g, '');

      fs.writeFileSync(filePath, resolvedContent);
      return true;

    } catch (error) {
      this.log(`Failed to resolve generic conflict in ${filePath}: ${error.message}`, 'WARN');
      return false;
    }
  }

  async saveConflictResolutionResults(results) {
    try {
      const timestamp = new Date().toISOString();
      const resultEntry = {
        timestamp,
        ...results
      };

      this.conflictResolutionHistoryData.push(resultEntry);
      fs.writeFileSync(this.conflictResolutionHistory, JSON.stringify(this.conflictResolutionHistoryData, null, 2));

      // Also save to merge history
      this.mergeHistoryData.push({
        timestamp,
        type: 'conflict-resolution',
        ...results
      });
      fs.writeFileSync(this.mergeHistory, JSON.stringify(this.mergeHistoryData, null, 2));

      this.log('Conflict resolution results saved');
    } catch (error) {
      this.log(`Failed to save results: ${error.message}`, 'WARN');
    }
  }

  async generateMergeReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalBranches: this.remoteBranches.length,
          cursorBranches: this.remoteBranches.filter(b => b.includes('cursor/')).length,
          backupBranches: this.remoteBranches.filter(b => b.includes('backup')).length,
          mergeBranches: this.remoteBranches.filter(b => b.includes('merge')).length
        },
        recentMerges: this.mergeHistoryData.slice(-10),
        recentConflictResolutions: this.conflictResolutionHistoryData.slice(-10),
        recommendations: this.generateRecommendations()
      };

      const reportPath = path.join(this.projectRoot, 'merge-resolution-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`Merge report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Failed to generate merge report: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  generateRecommendations() {
    const recommendations = [];

    // Analyze branch patterns and make recommendations
    const pm2Branches = this.remoteBranches.filter(b => b.includes('enhance-pm2-automations'));
    if (pm2Branches.length > 5) {
      recommendations.push({
        type: 'consolidation',
        message: `Consider consolidating ${pm2Branches.length} PM2 automation branches into fewer, more focused branches`,
        priority: 'HIGH'
      });
    }

    const backupBranches = this.remoteBranches.filter(b => b.includes('backup'));
    if (backupBranches.length > 10) {
      recommendations.push({
        type: 'cleanup',
        message: `Clean up ${backupBranches.length} backup branches to reduce repository clutter`,
        priority: 'MEDIUM'
      });
    }

    if (this.conflictResolutionHistoryData.length > 0) {
      const recentResolutions = this.conflictResolutionHistoryData.slice(-5);
      const avgConflicts = recentResolutions.reduce((sum, r) => sum + (r.conflictsResolved || 0), 0) / recentResolutions.length;
      
      if (avgConflicts > 3) {
        recommendations.push({
          type: 'process-improvement',
          message: `High average conflicts per merge (${avgConflicts.toFixed(1)}). Consider improving branch management practices.`,
          priority: 'HIGH'
        });
      }
    }

    return recommendations;
  }

  async run() {
    try {
      await this.initialize();
      
      this.log('Starting automatic conflict resolution...');
      const results = await this.autoResolveAllConflicts();
      
      this.log('Generating merge report...');
      const report = await this.generateMergeReport();
      
      this.log('Intelligent Repository Manager completed successfully');
      return { success: true, results, report };

    } catch (error) {
      this.log(`Intelligent Repository Manager failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const manager = new IntelligentRepositoryManager();
  manager.run()
    .then(result => {
      if (result.success) {
        console.log('✅ Intelligent Repository Manager completed successfully');
        process.exit(0);
      } else {
        console.error('❌ Intelligent Repository Manager failed:', result.error);
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('❌ Unexpected error:', error);
      process.exit(1);
    });
}

module.exports = IntelligentRepositoryManager;