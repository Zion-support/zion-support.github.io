#!/usr/bin/env node

/**
 * Intelligent Development Workflow Automation
 * Monitors development patterns and automates common development tasks
 * 
 * Features:
 * - Development pattern analysis
 * - Automated task suggestions
 * - Code review automation
 * - Development metrics tracking
 * - Workflow optimization
 * - Team productivity insights
 * - Automated documentation updates
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');
const glob = require('glob');

class IntelligentDevWorkflow {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      watchPatterns: [
        'src/**/*',
        'pages/**/*',
        'components/**/*',
        'utils/**/*',
        'types/**/*',
        '*.{js,ts,tsx,jsx,json,md}'
      ],
      ignorePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        'logs/**',
        '*.log',
        '*.tmp'
      ],
      reportDir: 'dev-workflow-reports',
      logFile: 'logs/intelligent-dev-workflow.log',
      analysisInterval: 300000, // 5 minutes
      workflowInterval: 900000, // 15 minutes
      metricsInterval: 3600000 // 1 hour
    };
    
    this.workflowMetrics = {
      fileChanges: [],
      developmentPatterns: {},
      productivityMetrics: {},
      codeReviewStats: {},
      workflowSuggestions: [],
      lastAnalysis: null,
      developmentTrends: []
    };
    
    this.watcher = null;
    this.isRunning = false;
    
    this.setupLogging();
    this.ensureDirectories();
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
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async initialize() {
    this.log('🚀 Initializing Intelligent Development Workflow...');
    
    try {
      // Start file watching
      await this.startFileWatching();
      
      // Initial analysis
      await this.analyzeDevelopmentPatterns();
      
      // Start periodic analysis
      this.startPeriodicAnalysis();
      
      this.log('✅ Intelligent Development Workflow initialized successfully');
      
    } catch (error) {
      this.log(`❌ Initialization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async startFileWatching() {
    this.log('👀 Starting file watching for development patterns...');
    
    this.watcher = chokidar.watch(this.config.watchPatterns, {
      ignored: this.config.ignorePatterns,
      persistent: true,
      ignoreInitial: true
    });
    
    this.watcher
      .on('add', (filePath) => this.onFileChange('add', filePath))
      .on('change', (filePath) => this.onFileChange('change', filePath))
      .on('unlink', (filePath) => this.onFileChange('unlink', filePath))
      .on('error', (error) => this.log(`File watching error: ${error.message}`, 'ERROR'));
    
    this.log('✅ File watching started');
  }

  onFileChange(event, filePath) {
    const relativePath = path.relative(this.config.projectRoot, filePath);
    const timestamp = Date.now();
    
    this.workflowMetrics.fileChanges.push({
      event,
      file: relativePath,
      timestamp,
      type: this.getFileType(relativePath),
      size: fs.existsSync(filePath) ? fs.statSync(filePath).size : 0
    });
    
    // Keep only last 1000 changes
    if (this.workflowMetrics.fileChanges.length > 1000) {
      this.workflowMetrics.fileChanges = this.workflowMetrics.fileChanges.slice(-1000);
    }
    
    this.log(`📝 File ${event}: ${relativePath}`);
    
    // Trigger immediate analysis for significant changes
    if (this.isSignificantChange(event, relativePath)) {
      setTimeout(() => this.analyzeDevelopmentPatterns(), 5000);
    }
  }

  getFileType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.tsx' || ext === '.jsx') return 'React Component';
    if (ext === '.ts' || ext === '.js') return 'JavaScript/TypeScript';
    if (ext === '.css' || ext === '.scss') return 'Stylesheet';
    if (ext === '.json') return 'Configuration';
    if (ext === '.md') return 'Documentation';
    return 'Other';
  }

  isSignificantChange(event, filePath) {
    // Consider significant: new components, major file changes, configuration changes
    const significantPatterns = [
      /^src\/components\//,
      /^src\/pages\//,
      /^src\/hooks\//,
      /package\.json$/,
      /tsconfig\.json$/,
      /vite\.config\.ts$/
    ];
    
    return significantPatterns.some(pattern => pattern.test(filePath));
  }

  async analyzeDevelopmentPatterns() {
    this.log('🔍 Analyzing development patterns...');
    
    try {
      // Analyze file change patterns
      await this.analyzeFileChangePatterns();
      
      // Analyze development productivity
      await this.analyzeProductivityMetrics();
      
      // Analyze code review patterns
      await this.analyzeCodeReviewPatterns();
      
      // Generate workflow suggestions
      await this.generateWorkflowSuggestions();
      
      // Update development trends
      await this.updateDevelopmentTrends();
      
      this.workflowMetrics.lastAnalysis = Date.now();
      
      this.log('✅ Development pattern analysis completed');
      
    } catch (error) {
      this.log(`❌ Pattern analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeFileChangePatterns() {
    const recentChanges = this.workflowMetrics.fileChanges.filter(
      change => Date.now() - change.timestamp < 86400000 // Last 24 hours
    );
    
    const patterns = {
      totalChanges: recentChanges.length,
      byEvent: {},
      byType: {},
      byTime: {},
      hotFiles: {}
    };
    
    // Analyze by event type
    recentChanges.forEach(change => {
      patterns.byEvent[change.event] = (patterns.byEvent[change.event] || 0) + 1;
      patterns.byType[change.type] = (patterns.byType[change.type] || 0) + 1;
      
      // Track hot files (frequently changed)
      patterns.hotFiles[change.file] = (patterns.hotFiles[change.file] || 0) + 1;
      
      // Analyze by time of day
      const hour = new Date(change.timestamp).getHours();
      const timeSlot = hour < 6 ? 'night' : hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
      patterns.byTime[timeSlot] = (patterns.byTime[timeSlot] || 0) + 1;
    });
    
    this.workflowMetrics.developmentPatterns = patterns;
    
    this.log(`📊 Analyzed ${recentChanges.length} recent file changes`);
  }

  async analyzeProductivityMetrics() {
    const recentChanges = this.workflowMetrics.fileChanges.filter(
      change => Date.now() - change.timestamp < 604800000 // Last week
    );
    
    const metrics = {
      changesPerDay: {},
      activeHours: {},
      fileTypeDistribution: {},
      developmentVelocity: 0,
      focusTime: 0
    };
    
    // Calculate changes per day
    recentChanges.forEach(change => {
      const date = new Date(change.timestamp).toDateString();
      metrics.changesPerDay[date] = (metrics.changesPerDay[date] || 0) + 1;
      
      const hour = new Date(change.timestamp).getHours();
      metrics.activeHours[hour] = (metrics.activeHours[hour] || 0) + 1;
    });
    
    // Calculate development velocity (changes per day average)
    const uniqueDays = Object.keys(metrics.changesPerDay).length;
    metrics.developmentVelocity = uniqueDays > 0 ? recentChanges.length / uniqueDays : 0;
    
    // Calculate focus time (consecutive hours of activity)
    const sortedHours = Object.keys(metrics.activeHours)
      .map(Number)
      .sort((a, b) => a - b);
    
    let maxConsecutive = 0;
    let currentConsecutive = 0;
    
    for (let i = 0; i < sortedHours.length; i++) {
      if (i === 0 || sortedHours[i] === sortedHours[i-1] + 1) {
        currentConsecutive++;
        maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      } else {
        currentConsecutive = 1;
      }
    }
    
    metrics.focusTime = maxConsecutive;
    
    this.workflowMetrics.productivityMetrics = metrics;
    
    this.log(`📊 Productivity analysis completed - Velocity: ${metrics.developmentVelocity.toFixed(2)} changes/day`);
  }

  async analyzeCodeReviewPatterns() {
    // Analyze git commit patterns for code review insights
    try {
      const gitLog = execSync('git log --oneline --since="1 week ago"', {
        encoding: 'utf8',
        cwd: this.config.projectRoot
      }).trim();
      
      const commits = gitLog.split('\n').filter(line => line.trim());
      
      const reviewStats = {
        totalCommits: commits.length,
        commitsPerDay: {},
        commitTypes: {},
        averageCommitSize: 0,
        reviewEfficiency: 0
      };
      
      // Analyze commit patterns
      commits.forEach(commit => {
        const [hash, ...messageParts] = commit.split(' ');
        const message = messageParts.join(' ');
        
        // Categorize commit types
        if (message.includes('feat:')) reviewStats.commitTypes.feature = (reviewStats.commitTypes.feature || 0) + 1;
        else if (message.includes('fix:')) reviewStats.commitTypes.bugfix = (reviewStats.commitTypes.bugfix || 0) + 1;
        else if (message.includes('refactor:')) reviewStats.commitTypes.refactor = (reviewStats.commitTypes.refactor || 0) + 1;
        else if (message.includes('docs:')) reviewStats.commitTypes.documentation = (reviewStats.commitTypes.documentation || 0) + 1;
        else reviewStats.commitTypes.other = (reviewStats.commitTypes.other || 0) + 1;
      });
      
      // Calculate review efficiency (assuming smaller commits are easier to review)
      const commitSizes = commits.map(commit => {
        const [hash] = commit.split(' ');
        try {
          const diff = execSync(`git show --stat ${hash}`, { encoding: 'utf8', cwd: this.config.projectRoot });
          const lines = diff.match(/(\d+) files? changed, (\d+) insertions?\(\+\), (\d+) deletions?\(-\)/);
          return lines ? parseInt(lines[2]) + parseInt(lines[3]) : 0;
        } catch {
          return 0;
        }
      });
      
      reviewStats.averageCommitSize = commitSizes.reduce((sum, size) => sum + size, 0) / commitSizes.length;
      reviewStats.reviewEfficiency = reviewStats.averageCommitSize < 50 ? 'high' : 
                                    reviewStats.averageCommitSize < 100 ? 'medium' : 'low';
      
      this.workflowMetrics.codeReviewStats = reviewStats;
      
      this.log(`📊 Code review analysis completed - ${commits.length} commits analyzed`);
      
    } catch (error) {
      this.log(`⚠️ Git analysis failed: ${error.message}`, 'WARN');
      this.workflowMetrics.codeReviewStats = { error: error.message };
    }
  }

  async generateWorkflowSuggestions() {
    const suggestions = [];
    
    // Analyze development patterns for suggestions
    const patterns = this.workflowMetrics.developmentPatterns;
    const productivity = this.workflowMetrics.productivityMetrics;
    const review = this.workflowMetrics.codeReviewStats;
    
    // Suggest based on file change patterns
    if (patterns.hotFiles && Object.keys(patterns.hotFiles).length > 0) {
      const hotFiles = Object.entries(patterns.hotFiles)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
      
      if (hotFiles.some(([, count]) => count > 10)) {
        suggestions.push({
          type: 'refactoring',
          priority: 'high',
          message: 'Consider refactoring frequently changed files to reduce change frequency',
          action: 'Review and refactor hot files',
          files: hotFiles.map(([file]) => file)
        });
      }
    }
    
    // Suggest based on productivity metrics
    if (productivity.developmentVelocity < 5) {
      suggestions.push({
        type: 'productivity',
        priority: 'medium',
        message: 'Development velocity is low - consider smaller, more frequent commits',
        action: 'Break down work into smaller tasks'
      });
    }
    
    if (productivity.focusTime < 3) {
      suggestions.push({
        type: 'productivity',
        priority: 'medium',
        message: 'Short focus time detected - consider time blocking for development',
        action: 'Schedule uninterrupted development blocks'
      });
    }
    
    // Suggest based on code review patterns
    if (review.reviewEfficiency === 'low') {
      suggestions.push({
        type: 'code-review',
        priority: 'high',
        message: 'Large commits detected - consider smaller, focused commits for better review',
        action: 'Limit commit size to <100 lines for efficient review'
      });
    }
    
    // Suggest based on file types
    if (patterns.byType && patterns.byType['Configuration'] > patterns.byType['JavaScript/TypeScript']) {
      suggestions.push({
        type: 'development',
        priority: 'low',
        message: 'High configuration change rate - consider environment-based configs',
        action: 'Use environment variables for configuration'
      });
    }
    
    this.workflowMetrics.workflowSuggestions = suggestions;
    
    this.log(`💡 Generated ${suggestions.length} workflow suggestions`);
  }

  async updateDevelopmentTrends() {
    const currentMetrics = {
      timestamp: Date.now(),
      fileChanges: this.workflowMetrics.fileChanges.length,
      developmentVelocity: this.workflowMetrics.productivityMetrics.developmentVelocity,
      focusTime: this.workflowMetrics.productivityMetrics.focusTime,
      commitCount: this.workflowMetrics.codeReviewStats.totalCommits || 0
    };
    
    this.workflowMetrics.developmentTrends.push(currentMetrics);
    
    // Keep only last 30 days of trends
    if (this.workflowMetrics.developmentTrends.length > 30) {
      this.workflowMetrics.developmentTrends = this.workflowMetrics.developmentTrends.slice(-30);
    }
    
    this.log('📈 Development trends updated');
  }

  async createWorkflowReport() {
    this.log('📋 Creating development workflow report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFileChanges: this.workflowMetrics.fileChanges.length,
        developmentVelocity: this.workflowMetrics.productivityMetrics.developmentVelocity,
        focusTime: this.workflowMetrics.productivityMetrics.focusTime,
        totalCommits: this.workflowMetrics.codeReviewStats.totalCommits || 0,
        suggestionsCount: this.workflowMetrics.workflowSuggestions.length
      },
      patterns: this.workflowMetrics.developmentPatterns,
      productivity: this.workflowMetrics.productivityMetrics,
      codeReview: this.workflowMetrics.codeReviewStats,
      suggestions: this.workflowMetrics.workflowSuggestions,
      trends: this.workflowMetrics.developmentTrends
    };
    
    // Save detailed report
    const reportPath = path.join(this.config.reportDir, `workflow-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save summary report
    const summaryPath = path.join(this.config.reportDir, 'workflow-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
    
    // Create human-readable report
    const humanReport = this.createHumanReadableReport(report);
    const humanReportPath = path.join(this.config.reportDir, 'workflow-report.txt');
    fs.writeFileSync(humanReportPath, humanReport);
    
    this.log(`📋 Workflow report saved to ${this.config.reportDir}`);
    
    // Log summary
    console.log('\n📊 Development Workflow Summary:');
    console.log(`📝 Total file changes: ${report.summary.totalFileChanges}`);
    console.log(`🚀 Development velocity: ${report.summary.developmentVelocity.toFixed(2)} changes/day`);
    console.log(`⏱️ Focus time: ${report.summary.focusTime} hours`);
    console.log(`🔀 Total commits: ${report.summary.totalCommits}`);
    console.log(`💡 Suggestions: ${report.summary.suggestionsCount}`);
  }

  createHumanReadableReport(report) {
    let output = 'Intelligent Development Workflow Report\n';
    output += '=========================================\n\n';
    
    output += `Generated: ${report.timestamp}\n\n`;
    
    output += 'Summary\n';
    output += '-------\n';
    output += `Total File Changes: ${report.summary.totalFileChanges}\n`;
    output += `Development Velocity: ${report.summary.developmentVelocity.toFixed(2)} changes/day\n`;
    output += `Focus Time: ${report.summary.focusTime} hours\n`;
    output += `Total Commits: ${report.summary.totalCommits}\n`;
    output += `Suggestions: ${report.summary.suggestionsCount}\n\n`;
    
    if (report.suggestions.length > 0) {
      output += 'Workflow Suggestions\n';
      output += '--------------------\n';
      report.suggestions.forEach((suggestion, index) => {
        output += `${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.type}: ${suggestion.message}\n`;
        output += `   Action: ${suggestion.action}\n`;
        if (suggestion.files) {
          output += `   Files: ${suggestion.files.join(', ')}\n`;
        }
        output += '\n';
      });
    }
    
    if (report.patterns.hotFiles) {
      output += 'Hot Files (Frequently Changed)\n';
      output += '-------------------------------\n';
      Object.entries(report.patterns.hotFiles)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .forEach(([file, count]) => {
          output += `${file}: ${count} changes\n`;
        });
      output += '\n';
    }
    
    return output;
  }

  startPeriodicAnalysis() {
    // Run analysis every 5 minutes
    setInterval(async () => {
      await this.analyzeDevelopmentPatterns();
    }, this.config.analysisInterval);
    
    // Create reports every 15 minutes
    setInterval(async () => {
      await this.createWorkflowReport();
    }, this.config.workflowInterval);
    
    // Update metrics every hour
    setInterval(async () => {
      await this.updateDevelopmentTrends();
    }, this.config.metricsInterval);
    
    this.log('⏰ Periodic analysis scheduled');
  }

  async start() {
    this.log('🚀 Starting Intelligent Development Workflow...');
    
    try {
      this.isRunning = true;
      await this.initialize();
      
      // Keep the process running
      setInterval(() => {
        if (!this.isRunning) {
          process.exit(0);
        }
      }, 60000);
      
    } catch (error) {
      this.log(`❌ Workflow failed: ${error.message}`, 'ERROR');
      
      // Retry after 5 minutes
      setTimeout(() => {
        this.start();
      }, 300000);
    }
  }

  async stop() {
    this.log('🛑 Stopping Intelligent Development Workflow...');
    
    this.isRunning = false;
    
    if (this.watcher) {
      await this.watcher.close();
    }
    
    this.log('✅ Workflow stopped');
  }
}

// Start the automation if run directly
if (require.main === module) {
  const workflow = new IntelligentDevWorkflow();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await workflow.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await workflow.stop();
    process.exit(0);
  });
  
  workflow.start();
}

module.exports = IntelligentDevWorkflow;