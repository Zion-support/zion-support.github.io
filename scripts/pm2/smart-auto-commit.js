#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartAutoCommit {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/smart-auto-commit.log');
    this.commitReportFile = path.join(this.projectRoot, 'logs/pm2/smart-commit-report.json');
    this.learningDataFile = path.join(this.projectRoot, 'logs/pm2/commit-learning-data.json');
    this.startTime = Date.now();
    
    this.commitMetrics = {
      totalCommits: 0,
      averageCommitSize: 0,
      commitFrequency: 0,
      lastCommitTime: 0,
      commitQuality: 0
    };
    
    this.learningData = this.loadLearningData();
    this.commitHistory = [];
    this.changePatterns = {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadLearningData() {
    try {
      if (fs.existsSync(this.learningDataFile)) {
        return JSON.parse(fs.readFileSync(this.learningDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load learning data, starting fresh');
    }
    return {
      commitPatterns: {},
      changeTypes: {},
      fileChangeHistory: {},
      commitMessageTemplates: {},
      lastUpdated: Date.now()
    };
  }

  saveLearningData() {
    try {
      this.learningData.lastUpdated = Date.now();
      fs.writeFileSync(this.learningDataFile, JSON.stringify(this.learningData, null, 2));
    } catch (error) {
      this.log('Failed to save learning data');
    }
  }

  async runSmartAutoCommit() {
    this.log('🧠 Starting Smart Auto Commit...');
    
    try {
      // Check if we're in a git repository
      if (!this.isGitRepository()) {
        this.log('❌ Not a git repository, skipping auto commit');
        return;
      }

      // Check if there are any changes to commit
      const changes = this.getChanges();
      if (changes.length === 0) {
        this.log('✅ No changes to commit');
        return;
      }

      this.log(`📝 Found ${changes.length} changes to analyze`);

      // Analyze changes and categorize them
      const changeAnalysis = this.analyzeChanges(changes);
      
      // Generate intelligent commit message
      const commitMessage = this.generateCommitMessage(changeAnalysis);
      
      // Perform the commit
      const commitResult = await this.performCommit(commitMessage, changes);
      
      // Analyze commit quality
      this.analyzeCommitQuality(commitResult, changeAnalysis);
      
      // Learn from this commit
      this.learnFromCommit(commitResult, changeAnalysis);
      
      // Generate commit report
      await this.generateCommitReport(commitResult, changeAnalysis);
      
      this.log(`✅ Smart Auto Commit complete! Message: ${commitMessage}`);
      
    } catch (error) {
      this.log(`❌ Error during smart auto commit: ${error.message}`);
    }
  }

  isGitRepository() {
    try {
      execSync('git rev-parse --git-dir', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  getChanges() {
    const changes = [];
    
    try {
      // Get git status
      const gitStatus = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 10000
      });

      const lines = gitStatus.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        const status = line.substring(0, 2);
        const file = line.substring(3);
        
        if (status.includes('M') || status.includes('A') || status.includes('D')) {
          changes.push({
            file,
            status: status.trim(),
            type: this.determineChangeType(status, file)
          });
        }
      });

    } catch (error) {
      this.log(`Failed to get git status: ${error.message}`);
    }

    return changes;
  }

  determineChangeType(status, file) {
    if (status.includes('A')) return 'added';
    if (status.includes('D')) return 'deleted';
    if (status.includes('M')) return 'modified';
    if (status.includes('R')) return 'renamed';
    return 'unknown';
  }

  analyzeChanges(changes) {
    const analysis = {
      totalChanges: changes.length,
      changeTypes: {},
      fileCategories: {},
      impactLevel: 'low',
      changePatterns: [],
      suggestions: []
    };

    // Categorize changes by type
    changes.forEach(change => {
      if (!analysis.changeTypes[change.type]) {
        analysis.changeTypes[change.type] = 0;
      }
      analysis.changeTypes[change.type]++;

      // Categorize by file type
      const fileCategory = this.categorizeFile(change.file);
      if (!analysis.fileCategories[fileCategory]) {
        analysis.fileCategories[fileCategory] = 0;
      }
      analysis.fileCategories[fileCategory]++;
    });

    // Determine impact level
    analysis.impactLevel = this.determineImpactLevel(analysis);
    
    // Identify change patterns
    analysis.changePatterns = this.identifyChangePatterns(changes);
    
    // Generate suggestions
    analysis.suggestions = this.generateChangeSuggestions(analysis);

    return analysis;
  }

  categorizeFile(filePath) {
    const ext = path.extname(filePath);
    const dir = path.dirname(filePath);
    
    if (ext === '.js' || ext === '.jsx' || ext === '.ts' || ext === '.tsx') {
      if (dir.includes('components')) return 'component';
      if (dir.includes('pages')) return 'page';
      if (dir.includes('utils') || dir.includes('helpers')) return 'utility';
      if (dir.includes('hooks')) return 'hook';
      if (dir.includes('api')) return 'api';
      return 'source';
    }
    
    if (ext === '.css' || ext === '.scss' || ext === '.sass') return 'style';
    if (ext === '.json' || ext === '.config') return 'config';
    if (ext === '.md' || ext === '.txt') return 'documentation';
    if (ext === '.test.' || ext === '.spec.') return 'test';
    
    return 'other';
  }

  determineImpactLevel(analysis) {
    const { changeTypes, fileCategories } = analysis;
    
    // High impact indicators
    if (changeTypes.deleted > 5) return 'high';
    if (changeTypes.added > 10) return 'high';
    if (fileCategories.config > 0) return 'high';
    if (fileCategories.api > 0) return 'high';
    
    // Medium impact indicators
    if (changeTypes.modified > 15) return 'medium';
    if (fileCategories.component > 5) return 'medium';
    if (fileCategories.page > 2) return 'medium';
    
    return 'low';
  }

  identifyChangePatterns(changes) {
    const patterns = [];
    
    // Check for bulk operations
    if (changes.length > 20) {
      patterns.push({
        type: 'bulk-operation',
        description: 'Large number of changes - consider breaking into smaller commits',
        severity: 'medium'
      });
    }

    // Check for mixed change types
    const changeTypeCount = Object.keys(changes.reduce((acc, change) => {
      acc[change.type] = true;
      return acc;
    }, {})).length;
    
    if (changeTypeCount > 2) {
      patterns.push({
        type: 'mixed-changes',
        description: 'Multiple types of changes - consider separating concerns',
        severity: 'low'
      });
    }

    // Check for configuration changes
    const configChanges = changes.filter(change => 
      change.file.includes('package.json') ||
      change.file.includes('config') ||
      change.file.includes('.env')
    );
    
    if (configChanges.length > 0) {
      patterns.push({
        type: 'config-changes',
        description: 'Configuration files changed - review carefully',
        severity: 'high'
      });
    }

    return patterns;
  }

  generateChangeSuggestions(analysis) {
    const suggestions = [];

    // Suggest commit splitting for large changes
    if (analysis.totalChanges > 20) {
      suggestions.push({
        type: 'commit-splitting',
        priority: 'medium',
        description: 'Consider splitting into multiple focused commits',
        actions: ['Group related changes', 'Separate features from fixes', 'Create logical commit boundaries']
      });
    }

    // Suggest review for high-impact changes
    if (analysis.impactLevel === 'high') {
      suggestions.push({
        type: 'review-required',
        priority: 'high',
        description: 'High-impact changes detected - review required',
        actions: ['Test changes thoroughly', 'Review with team', 'Update documentation if needed']
      });
    }

    // Suggest documentation updates
    if (analysis.fileCategories.component > 0 || analysis.fileCategories.api > 0) {
      suggestions.push({
        type: 'documentation-update',
        priority: 'low',
        description: 'Consider updating related documentation',
        actions: ['Update component documentation', 'Update API documentation', 'Update README if needed']
      });
    }

    return suggestions;
  }

  generateCommitMessage(changeAnalysis) {
    const { changeTypes, fileCategories, impactLevel, changePatterns } = changeAnalysis;
    
    // Generate commit type prefix
    let commitType = 'feat';
    if (changeTypes.deleted > changeTypes.added) commitType = 'refactor';
    if (changeTypes.modified > 10) commitType = 'update';
    if (fileCategories.config > 0) commitType = 'config';
    if (fileCategories.test > 0) commitType = 'test';
    
    // Generate scope
    let scope = 'general';
    if (fileCategories.component > 0) scope = 'components';
    if (fileCategories.page > 0) scope = 'pages';
    if (fileCategories.api > 0) scope = 'api';
    if (fileCategories.style > 0) scope = 'styles';
    
    // Generate description
    let description = this.generateChangeDescription(changeAnalysis);
    
    // Generate body
    let body = this.generateCommitBody(changeAnalysis);
    
    // Generate footer
    let footer = this.generateCommitFooter(changeAnalysis);
    
    // Assemble commit message
    let commitMessage = `${commitType}(${scope}): ${description}`;
    
    if (body) {
      commitMessage += `\n\n${body}`;
    }
    
    if (footer) {
      commitMessage += `\n\n${footer}`;
    }
    
    return commitMessage;
  }

  generateChangeDescription(analysis) {
    const { changeTypes, fileCategories, impactLevel } = analysis;
    
    if (changeTypes.added > 0 && changeTypes.deleted === 0 && changeTypes.modified === 0) {
      return 'add new features and components';
    }
    
    if (changeTypes.deleted > 0 && changeTypes.added === 0 && changeTypes.modified === 0) {
      return 'remove deprecated code and files';
    }
    
    if (changeTypes.modified > 0 && changeTypes.added === 0 && changeTypes.deleted === 0) {
      return 'update existing functionality';
    }
    
    if (fileCategories.component > 0) {
      return 'update component implementation';
    }
    
    if (fileCategories.page > 0) {
      return 'update page components and routing';
    }
    
    if (fileCategories.api > 0) {
      return 'update API endpoints and logic';
    }
    
    if (fileCategories.config > 0) {
      return 'update configuration and settings';
    }
    
    return 'update codebase';
  }

  generateCommitBody(analysis) {
    const body = [];
    
    // Add change summary
    const { changeTypes, fileCategories } = analysis;
    if (changeTypes.added > 0) body.push(`- Added ${changeTypes.added} new files`);
    if (changeTypes.modified > 0) body.push(`- Modified ${changeTypes.modified} existing files`);
    if (changeTypes.deleted > 0) body.push(`- Deleted ${changeTypes.deleted} files`);
    
    // Add file category summary
    Object.entries(fileCategories).forEach(([category, count]) => {
      if (count > 0) {
        body.push(`- ${count} ${category} files affected`);
      }
    });
    
    // Add impact level
    body.push(`- Impact level: ${analysis.impactLevel}`);
    
    return body.join('\n');
  }

  generateCommitFooter(analysis) {
    const footer = [];
    
    // Add breaking change warning if applicable
    if (analysis.impactLevel === 'high') {
      footer.push('BREAKING CHANGE: This commit contains high-impact changes');
    }
    
    // Add testing recommendation
    if (analysis.fileCategories.component > 0 || analysis.fileCategories.api > 0) {
      footer.push('Testing: Manual testing recommended for affected components');
    }
    
    // Add review recommendation
    if (analysis.totalChanges > 10) {
      footer.push('Review: Code review recommended due to scope of changes');
    }
    
    return footer.join('\n');
  }

  async performCommit(commitMessage, changes) {
    try {
      // Stage all changes
      execSync('git add .', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Create the commit
      execSync(`git commit -m "${commitMessage}"`, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Get commit hash
      const commitHash = execSync('git rev-parse HEAD', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      }).trim();
      
      const result = {
        success: true,
        commitHash,
        commitMessage,
        changesCount: changes.length,
        timestamp: Date.now()
      };
      
      this.log(`✅ Commit successful: ${commitHash.substring(0, 8)}`);
      return result;
      
    } catch (error) {
      this.log(`❌ Commit failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        timestamp: Date.now()
      };
    }
  }

  analyzeCommitQuality(commitResult, changeAnalysis) {
    if (!commitResult.success) return;
    
    // Calculate commit size score
    const sizeScore = Math.max(0, 100 - (changeAnalysis.totalChanges * 2));
    
    // Calculate change type score
    const changeTypeScore = this.calculateChangeTypeScore(changeAnalysis);
    
    // Calculate impact score
    const impactScore = this.calculateImpactScore(changeAnalysis);
    
    // Calculate overall quality
    const overallQuality = (sizeScore + changeTypeScore + impactScore) / 3;
    
    this.commitMetrics.commitQuality = overallQuality;
    this.commitMetrics.totalCommits++;
    this.commitMetrics.lastCommitTime = commitResult.timestamp;
    
    // Update commit history
    this.commitHistory.push({
      timestamp: commitResult.timestamp,
      commitHash: commitResult.commitHash,
      quality: overallQuality,
      changes: changeAnalysis.totalChanges,
      impact: changeAnalysis.impactLevel
    });
    
    // Keep only last 100 commits
    if (this.commitHistory.length > 100) {
      this.commitHistory = this.commitHistory.slice(-100);
    }
    
    this.log(`📊 Commit quality score: ${overallQuality.toFixed(1)}/100`);
  }

  calculateChangeTypeScore(analysis) {
    const { changeTypes } = analysis;
    let score = 100;
    
    // Penalize mixed change types
    const changeTypeCount = Object.keys(changeTypes).filter(type => changeTypes[type] > 0).length;
    if (changeTypeCount > 2) score -= 20;
    
    // Penalize too many changes
    if (analysis.totalChanges > 20) score -= 30;
    else if (analysis.totalChanges > 10) score -= 15;
    
    return Math.max(0, score);
  }

  calculateImpactScore(analysis) {
    const { impactLevel, changePatterns } = analysis;
    
    let score = 100;
    
    // Adjust score based on impact level
    if (impactLevel === 'high') score -= 20;
    else if (impactLevel === 'medium') score -= 10;
    
    // Adjust score based on change patterns
    changePatterns.forEach(pattern => {
      if (pattern.severity === 'high') score -= 15;
      else if (pattern.severity === 'medium') score -= 10;
      else score -= 5;
    });
    
    return Math.max(0, score);
  }

  learnFromCommit(commitResult, changeAnalysis) {
    if (!commitResult.success) return;
    
    // Learn from change types
    Object.entries(changeAnalysis.changeTypes).forEach(([type, count]) => {
      if (!this.learningData.changeTypes[type]) {
        this.learningData.changeTypes[type] = {
          count: 0,
          totalChanges: 0,
          averageQuality: 0
        };
      }
      
      const data = this.learningData.changeTypes[type];
      data.count++;
      data.totalChanges += count;
      data.averageQuality = (data.averageQuality * (data.count - 1) + this.commitMetrics.commitQuality) / data.count;
    });
    
    // Learn from file categories
    Object.entries(changeAnalysis.fileCategories).forEach(([category, count]) => {
      if (!this.learningData.fileChangeHistory[category]) {
        this.learningData.fileChangeHistory[category] = {
          count: 0,
          totalChanges: 0,
          lastChanged: null
        };
      }
      
      const data = this.learningData.fileChangeHistory[category];
      data.count++;
      data.totalChanges += count;
      data.lastChanged = Date.now();
    });
    
    // Learn from commit patterns
    const patternKey = `${changeAnalysis.impactLevel}-${changeAnalysis.totalChanges}`;
    if (!this.learningData.commitPatterns[patternKey]) {
      this.learningData.commitPatterns[patternKey] = {
        count: 0,
        averageQuality: 0
      };
    }
    
    const patternData = this.learningData.commitPatterns[patternKey];
    patternData.count++;
    patternData.averageQuality = (patternData.averageQuality * (patternData.count - 1) + this.commitMetrics.commitQuality) / patternData.count;
    
    this.saveLearningData();
  }

  async generateCommitReport(commitResult, changeAnalysis) {
    const report = {
      timestamp: Date.now(),
      commit: commitResult,
      analysis: changeAnalysis,
      metrics: this.commitMetrics,
      history: this.commitHistory.slice(-10), // Last 10 commits
      learning: this.learningData,
      recommendations: this.generateCommitRecommendations()
    };

    try {
      fs.writeFileSync(this.commitReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Smart Commit Report generated');
    } catch (error) {
      this.log('Failed to generate commit report');
    }
  }

  generateCommitRecommendations() {
    const recommendations = [];

    // Commit size recommendations
    if (this.commitMetrics.averageCommitSize > 15) {
      recommendations.push({
        type: 'commit-size',
        priority: 'medium',
        description: 'Large commit size detected',
        actions: ['Break commits into smaller, focused changes', 'Use feature branches for large features', 'Review commit boundaries']
      });
    }

    // Commit quality recommendations
    if (this.commitMetrics.commitQuality < 70) {
      recommendations.push({
        type: 'commit-quality',
        priority: 'high',
        description: 'Low commit quality detected',
        actions: ['Review change categorization', 'Improve commit message clarity', 'Separate concerns in commits']
      });
    }

    // Change pattern recommendations
    Object.entries(this.learningData.commitPatterns).forEach(([pattern, data]) => {
      if (data.count > 5 && data.averageQuality < 60) {
        recommendations.push({
          type: 'pattern-improvement',
          priority: 'medium',
          description: `Low quality pattern detected: ${pattern}`,
          actions: ['Review commit strategy for this pattern', 'Consider alternative approaches', 'Improve change organization']
        });
      }
    });

    return recommendations;
  }

  async start() {
    this.log('🚀 Smart Auto Commit started');
    
    // Run initial auto commit
    await this.runSmartAutoCommit();
    
    // Schedule periodic auto commits
    setInterval(async () => {
      await this.runSmartAutoCommit();
    }, 2 * 60 * 60 * 1000); // Every 2 hours
  }
}

// Start the Smart Auto Commit
const autoCommit = new SmartAutoCommit();
autoCommit.start().catch(error => {
  console.error('Smart Auto Commit failed to start:', error);
  process.exit(1);
});