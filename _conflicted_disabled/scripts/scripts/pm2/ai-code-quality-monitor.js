#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/ai-code-quality-monitor.log');
    this.qualityReportFile = path.join(this.projectRoot, 'logs/pm2/ai-quality-report.json');
    this.learningDataFile = path.join(this.projectRoot, 'logs/pm2/ai-learning-data.json');
    this.patternDatabaseFile = path.join(this.projectRoot, 'logs/pm2/ai-patterns.json');
    this.startTime = Date.now();
    
    this.qualityMetrics = {
      overall: 0,
      maintainability: 0,
      reliability: 0,
      security: 0,
      performance: 0,
      testability: 0
    };
    
    this.learningData = this.loadLearningData();
    this.patternDatabase = this.loadPatternDatabase();
    this.qualityHistory = [];
    this.trends = {};
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
      fileQualityHistory: {},
      improvementPatterns: {},
      commonIssues: {},
      bestPractices: {},
      lastUpdated: Date.now()
    };
  }

  loadPatternDatabase() {
    try {
      if (fs.existsSync(this.patternDatabaseFile)) {
        return JSON.parse(fs.readFileSync(this.patternDatabaseFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load pattern database, starting fresh');
    }
    return {
      architecturalPatterns: {},
      codeSmells: {},
      performancePatterns: {},
      securityPatterns: {},
      maintainabilityPatterns: {}
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

  savePatternDatabase() {
    try {
      fs.writeFileSync(this.patternDatabaseFile, JSON.stringify(this.patternDatabase, null, 2));
    } catch (error) {
      this.log('Failed to save pattern database');
    }
  }

  async analyzeCodeQuality() {
    this.log('🤖 Starting AI-powered Code Quality Analysis...');
    
    try {
      const sourceFiles = this.getSourceFiles();
      this.log(`Found ${sourceFiles.length} source files to analyze`);

      const analysisResults = [];
      let totalIssues = 0;

      for (const file of sourceFiles) {
        const analysis = await this.performFileAnalysis(file);
        if (analysis) {
          analysisResults.push(analysis);
          totalIssues += analysis.issues.length;
        }
      }

      // Calculate overall quality metrics
      this.calculateQualityMetrics(analysisResults);
      
      // Generate AI insights
      const insights = this.generateAIInsights(analysisResults);
      
      // Learn from analysis
      this.learnFromAnalysis(analysisResults);
      
      // Generate comprehensive report
      await this.generateQualityReport(analysisResults, insights);
      
      this.log(`✅ AI Quality Analysis complete! Analyzed ${sourceFiles.length} files, found ${totalIssues} issues`);
      this.log(`📊 Overall Quality Score: ${this.qualityMetrics.overall.toFixed(1)}/100`);
      
    } catch (error) {
      this.log(`❌ Error during AI quality analysis: ${error.message}`);
    }
  }

  async performFileAnalysis(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileExt = path.extname(filePath);
      const stats = fs.statSync(filePath);
      
      const analysis = {
        file: filePath,
        extension: fileExt,
        size: stats.size,
        lines: content.split('\n').length,
        issues: [],
        metrics: {},
        patterns: {},
        suggestions: []
      };

      // Perform comprehensive analysis
      analysis.issues = this.detectIssues(content, fileExt);
      analysis.metrics = this.calculateFileMetrics(content, fileExt);
      analysis.patterns = this.identifyPatterns(content, fileExt);
      analysis.suggestions = this.generateSuggestions(analysis);

      return analysis;
    } catch (error) {
      this.log(`Error analyzing ${filePath}: ${error.message}`);
      return null;
    }
  }

  detectIssues(content, fileExt) {
    const issues = [];
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmedLine = line.trim();

      // Architecture issues
      if (this.detectArchitecturalIssue(trimmedLine, fileExt)) {
        issues.push({
          line: lineNum,
          type: 'architectural',
          severity: 'high',
          description: this.getArchitecturalIssueDescription(trimmedLine),
          category: 'architecture'
        });
      }

      // Code complexity issues
      if (this.detectComplexityIssue(trimmedLine, fileExt)) {
        issues.push({
          line: lineNum,
          type: 'complexity',
          severity: 'medium',
          description: this.getComplexityIssueDescription(trimmedLine),
          category: 'maintainability'
        });
      }

      // Performance issues
      if (this.detectPerformanceIssue(trimmedLine, fileExt)) {
        issues.push({
          line: lineNum,
          type: 'performance',
          severity: 'medium',
          description: this.getPerformanceIssueDescription(trimmedLine),
          category: 'performance'
        });
      }

      // Security issues
      if (this.detectSecurityIssue(trimmedLine, fileExt)) {
        issues.push({
          line: lineNum,
          type: 'security',
          severity: 'critical',
          description: this.getSecurityIssueDescription(trimmedLine),
          category: 'security'
        });
      }

      // Testing issues
      if (this.detectTestingIssue(trimmedLine, fileExt)) {
        issues.push({
          line: lineNum,
          type: 'testing',
          severity: 'low',
          description: this.getTestingIssueDescription(trimmedLine),
          category: 'testability'
        });
      }
    });

    return issues;
  }

  detectArchitecturalIssue(line, fileExt) {
    const architecturalIssues = [
      /import\s+\*\s+as/, // wildcard imports
      /export\s+default/, // default exports
      /React\.createElement/, // JSX preferred
      /document\./, // DOM manipulation in React
      /window\./, // global window access
      /localStorage/, // direct storage access
      /sessionStorage/, // direct storage access
      /fetch\s*\(/, // direct API calls
      /XMLHttpRequest/, // legacy AJAX
      /jQuery/, // jQuery usage
    ];

    return architecturalIssues.some(pattern => pattern.test(line));
  }

  detectComplexityIssue(line, fileExt) {
    const complexityIssues = [
      /function\s+\w+\s*\([^)]{50,}\)/, // long parameter lists
      /\{[^}]{200,}\}/, // long blocks
      /if\s*\([^)]{100,}\)/, // complex conditions
      /for\s*\([^)]{100,}\)/, // complex loops
      /switch\s*\([^)]{50,}\)/, // complex switches
      /ternary\s*\?[^:]{100,}/, // complex ternaries
    ];

    return complexityIssues.some(pattern => pattern.test(line));
  }

  detectPerformanceIssue(line, fileExt) {
    const performanceIssues = [
      /\.forEach\s*\(/, // forEach instead of for...of
      /\.map\s*\(.*\)\.filter/, // chained array methods
      /new\s+Date\s*\(\)/, // Date constructor in loops
      /JSON\.parse\s*\(/, // JSON parsing in loops
      /\.innerHTML\s*=/, // innerHTML usage
      /\.outerHTML\s*=/, // outerHTML usage
      /\.appendChild/, // DOM manipulation
      /\.removeChild/, // DOM manipulation
    ];

    return performanceIssues.some(pattern => pattern.test(line));
  }

  detectSecurityIssue(line, fileExt) {
    const securityIssues = [
      /eval\s*\(/, // eval usage
      /innerHTML\s*=/, // XSS potential
      /outerHTML\s*=/, // XSS potential
      /document\.write/, // XSS potential
      /document\.writeln/, // XSS potential
      /setTimeout\s*\([^,]+,\s*[^)]+\)/, // dynamic code execution
      /setInterval\s*\([^,]+,\s*[^)]+\)/, // dynamic code execution
    ];

    return securityIssues.some(pattern => pattern.test(line));
  }

  detectTestingIssue(line, fileExt) {
    const testingIssues = [
      /console\.(log|warn|error|info|debug)/, // console in production
      /debugger/, // debugger statements
      /alert\s*\(/, // alert usage
      /confirm\s*\(/, // confirm usage
      /prompt\s*\(/, // prompt usage
    ];

    return testingIssues.some(pattern => pattern.test(line));
  }

  getArchitecturalIssueDescription(line) {
    if (/import\s+\*\s+as/.test(line)) return 'Wildcard import detected - consider specific imports';
    if (/export\s+default/.test(line)) return 'Default export detected - consider named exports';
    if (/React\.createElement/.test(line)) return 'JSX preferred over createElement';
    if (/document\./.test(line)) return 'Direct DOM manipulation detected - use React refs';
    if (/window\./.test(line)) return 'Global window access detected - consider dependency injection';
    return 'Architectural issue detected';
  }

  getComplexityIssueDescription(line) {
    if (/function\s+\w+\s*\([^)]{50,}\)/.test(line)) return 'Long parameter list detected - consider object parameter';
    if (/\{[^}]{200,}\}/.test(line)) return 'Long code block detected - consider extraction';
    if (/if\s*\([^)]{100,}\)/.test(line)) return 'Complex condition detected - consider simplification';
    return 'Complexity issue detected';
  }

  getPerformanceIssueDescription(line) {
    if (/\.forEach/.test(line)) return 'forEach detected - consider for...of for better performance';
    if (/\.map.*\.filter/.test(line)) return 'Chained array methods detected - consider optimization';
    if (/new\s+Date/.test(line)) return 'Date constructor in loop detected - consider caching';
    return 'Performance issue detected';
  }

  getSecurityIssueDescription(line) {
    if (/eval/.test(line)) return 'eval() usage detected - critical security risk';
    if (/innerHTML/.test(line)) return 'innerHTML usage detected - XSS potential';
    if (/document\.write/.test(line)) return 'document.write usage detected - XSS potential';
    return 'Security issue detected';
  }

  getTestingIssueDescription(line) {
    if (/console\./.test(line)) return 'Console statement detected - remove for production';
    if (/debugger/.test(line)) return 'Debugger statement detected - remove for production';
    if (/alert/.test(line)) return 'Alert usage detected - consider proper error handling';
    return 'Testing issue detected';
  }

  calculateFileMetrics(content, fileExt) {
    const lines = content.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim().length > 0);
    const commentLines = lines.filter(line => 
      line.trim().startsWith('//') || 
      line.trim().startsWith('/*') || 
      line.trim().startsWith('*') ||
      line.trim().startsWith('<!--')
    );

    // Calculate cyclomatic complexity (simplified)
    let complexity = 1; // base complexity
    lines.forEach(line => {
      if (/\b(if|else|for|while|switch|case|catch|&&|\|\|)\b/.test(line)) {
        complexity++;
      }
    });

    // Calculate maintainability index (simplified)
    const maintainabilityIndex = Math.max(0, 171 - 5.2 * Math.log(complexity) - 0.23 * Math.log(nonEmptyLines.length) - 16.2 * Math.log(commentLines.length));

    return {
      totalLines: lines.length,
      nonEmptyLines: nonEmptyLines.length,
      commentLines: commentLines.length,
      codeLines: nonEmptyLines.length - commentLines.length,
      cyclomaticComplexity: complexity,
      maintainabilityIndex: Math.max(0, Math.min(100, maintainabilityIndex)),
      commentRatio: nonEmptyLines.length > 0 ? (commentLines.length / nonEmptyLines.length) * 100 : 0
    };
  }

  identifyPatterns(content, fileExt) {
    const patterns = {
      architectural: [],
      performance: [],
      security: [],
      maintainability: [],
      testing: []
    };

    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmedLine = line.trim();

      // Architectural patterns
      if (this.isGoodArchitecturalPattern(trimmedLine, fileExt)) {
        patterns.architectural.push({
          line: lineNum,
          type: 'good-pattern',
          description: 'Good architectural pattern detected'
        });
      }

      // Performance patterns
      if (this.isGoodPerformancePattern(trimmedLine, fileExt)) {
        patterns.performance.push({
          line: lineNum,
          type: 'good-pattern',
          description: 'Good performance pattern detected'
        });
      }

      // Security patterns
      if (this.isGoodSecurityPattern(trimmedLine, fileExt)) {
        patterns.security.push({
          line: lineNum,
          type: 'good-pattern',
          description: 'Good security pattern detected'
        });
      }
    });

    return patterns;
  }

  isGoodArchitecturalPattern(line, fileExt) {
    const goodPatterns = [
      /import\s+\{[^}]*\}\s+from/, // named imports
      /export\s+\{[^}]*\}/, // named exports
      /const\s+\w+\s*=\s*\([^)]*\)\s*=>/, // arrow functions
      /use[A-Z]\w*/, // React hooks
      /React\.memo/, // React optimization
      /useMemo/, // React optimization
      /useCallback/, // React optimization
    ];

    return goodPatterns.some(pattern => pattern.test(line));
  }

  isGoodPerformancePattern(line, fileExt) {
    const goodPatterns = [
      /for\s*\(\s*const\s+\w+\s+of/, // for...of loops
      /const\s+\w+\s*=\s*useMemo/, // React memoization
      /const\s+\w+\s*=\s*useCallback/, // React callback optimization
      /React\.memo/, // React component memoization
      /useRef/, // React refs
    ];

    return goodPatterns.some(pattern => pattern.test(line));
  }

  isGoodSecurityPattern(line, fileExt) {
    const goodPatterns = [
      /DOMPurify/, // DOM sanitization
      /escapeHtml/, // HTML escaping
      /sanitize/, // input sanitization
      /validate/, // input validation
      /useRef/, // React refs instead of direct DOM access
    ];

    return goodPatterns.some(pattern => pattern.test(line));
  }

  generateSuggestions(analysis) {
    const suggestions = [];

    // Generate suggestions based on issues
    if (analysis.issues.length > 0) {
      const criticalIssues = analysis.issues.filter(issue => issue.severity === 'critical');
      const highIssues = analysis.issues.filter(issue => issue.severity === 'high');
      const mediumIssues = analysis.issues.filter(issue => issue.severity === 'medium');

      if (criticalIssues.length > 0) {
        suggestions.push({
          type: 'critical-fixes',
          priority: 'critical',
          description: `Found ${criticalIssues.length} critical issues that need immediate attention`,
          actions: ['Address security vulnerabilities', 'Fix critical bugs', 'Review architecture decisions']
        });
      }

      if (highIssues.length > 0) {
        suggestions.push({
          type: 'high-priority-fixes',
          priority: 'high',
          description: `Found ${highIssues.length} high-priority issues`,
          actions: ['Refactor complex functions', 'Optimize performance bottlenecks', 'Improve code structure']
        });
      }

      if (mediumIssues.length > 0) {
        suggestions.push({
          type: 'medium-priority-improvements',
          priority: 'medium',
          description: `Found ${mediumIssues.length} medium-priority improvements`,
          actions: ['Clean up code smells', 'Improve readability', 'Add missing documentation']
        });
      }
    }

    // Generate suggestions based on metrics
    if (analysis.metrics.maintainabilityIndex < 50) {
      suggestions.push({
        type: 'maintainability-improvement',
        priority: 'high',
        description: 'Maintainability index is low',
        actions: ['Break down complex functions', 'Reduce cyclomatic complexity', 'Improve code organization']
      });
    }

    if (analysis.metrics.commentRatio < 10) {
      suggestions.push({
        type: 'documentation-improvement',
        priority: 'medium',
        description: 'Low comment ratio detected',
        actions: ['Add JSDoc comments', 'Document complex logic', 'Explain business rules']
      });
    }

    return suggestions;
  }

  calculateQualityMetrics(analysisResults) {
    let totalMaintainability = 0;
    let totalReliability = 0;
    let totalSecurity = 0;
    let totalPerformance = 0;
    let totalTestability = 0;
    let validFiles = 0;

    analysisResults.forEach(result => {
      if (result.metrics && result.issues) {
        validFiles++;
        
        // Maintainability (based on maintainability index and complexity)
        const maintainabilityScore = Math.max(0, result.metrics.maintainabilityIndex);
        totalMaintainability += maintainabilityScore;

        // Reliability (based on issue count and severity)
        const reliabilityScore = Math.max(0, 100 - (result.issues.length * 5));
        totalReliability += reliabilityScore;

        // Security (based on security issues)
        const securityIssues = result.issues.filter(issue => issue.category === 'security');
        const securityScore = Math.max(0, 100 - (securityIssues.length * 20));
        totalSecurity += securityScore;

        // Performance (based on performance issues)
        const performanceIssues = result.issues.filter(issue => issue.category === 'performance');
        const performanceScore = Math.max(0, 100 - (performanceIssues.length * 10));
        totalPerformance += performanceScore;

        // Testability (based on testing issues and patterns)
        const testingIssues = result.issues.filter(issue => issue.category === 'testability');
        const testingScore = Math.max(0, 100 - (testingIssues.length * 15));
        totalTestability += testingScore;
      }
    });

    if (validFiles > 0) {
      this.qualityMetrics.maintainability = totalMaintainability / validFiles;
      this.qualityMetrics.reliability = totalReliability / validFiles;
      this.qualityMetrics.security = totalSecurity / validFiles;
      this.qualityMetrics.performance = totalPerformance / validFiles;
      this.qualityMetrics.testability = totalTestability / validFiles;
      
      // Overall score (weighted average)
      this.qualityMetrics.overall = (
        this.qualityMetrics.maintainability * 0.25 +
        this.qualityMetrics.reliability * 0.25 +
        this.qualityMetrics.security * 0.20 +
        this.qualityMetrics.performance * 0.15 +
        this.qualityMetrics.testability * 0.15
      );
    }
  }

  generateAIInsights(analysisResults) {
    const insights = {
      trends: this.analyzeTrends(analysisResults),
      recommendations: this.generateStrategicRecommendations(analysisResults),
      patterns: this.identifyCodePatterns(analysisResults),
      improvements: this.suggestImprovements(analysisResults)
    };

    return insights;
  }

  analyzeTrends(analysisResults) {
    // Add current metrics to history
    this.qualityHistory.push({
      timestamp: Date.now(),
      metrics: { ...this.qualityMetrics }
    });

    // Keep only last 30 entries
    if (this.qualityHistory.length > 30) {
      this.qualityHistory = this.qualityHistory.slice(-30);
    }

    // Calculate trends
    if (this.qualityHistory.length >= 2) {
      const recent = this.qualityHistory.slice(-5);
      const older = this.qualityHistory.slice(-10, -5);
      
      if (older.length > 0) {
        this.trends.overall = this.calculateTrend(recent, older, 'overall');
        this.trends.maintainability = this.calculateTrend(recent, older, 'maintainability');
        this.trends.reliability = this.calculateTrend(recent, older, 'reliability');
        this.trends.security = this.calculateTrend(recent, older, 'security');
        this.trends.performance = this.calculateTrend(recent, older, 'performance');
        this.trends.testability = this.calculateTrend(recent, older, 'testability');
      }
    }

    return this.trends;
  }

  calculateTrend(recent, older, metric) {
    const recentAvg = recent.reduce((sum, entry) => sum + entry.metrics[metric], 0) / recent.length;
    const olderAvg = older.reduce((sum, entry) => sum + entry.metrics[metric], 0) / older.length;
    
    if (olderAvg === 0) return 'stable';
    const change = ((recentAvg - olderAvg) / olderAvg) * 100;
    
    if (change > 5) return 'improving';
    if (change < -5) return 'declining';
    return 'stable';
  }

  generateStrategicRecommendations(analysisResults) {
    const recommendations = [];

    // Overall quality recommendations
    if (this.qualityMetrics.overall < 70) {
      recommendations.push({
        type: 'strategic',
        priority: 'critical',
        title: 'Code Quality Crisis',
        description: 'Overall code quality is below acceptable standards',
        actions: [
          'Implement code review process',
          'Set up automated quality gates',
          'Allocate time for technical debt reduction',
          'Provide team training on best practices'
        ]
      });
    }

    // Security recommendations
    if (this.qualityMetrics.security < 80) {
      recommendations.push({
        type: 'strategic',
        priority: 'high',
        title: 'Security Hardening Required',
        description: 'Security vulnerabilities detected in codebase',
        actions: [
          'Conduct security audit',
          'Implement security scanning in CI/CD',
          'Train team on secure coding practices',
          'Review authentication and authorization'
        ]
      });
    }

    // Performance recommendations
    if (this.qualityMetrics.performance < 75) {
      recommendations.push({
        type: 'strategic',
        priority: 'high',
        title: 'Performance Optimization Needed',
        description: 'Performance issues affecting user experience',
        actions: [
          'Profile application performance',
          'Implement performance monitoring',
          'Optimize critical paths',
          'Add performance testing'
        ]
      });
    }

    return recommendations;
  }

  identifyCodePatterns(analysisResults) {
    const patterns = {
      commonIssues: {},
      fileTypeIssues: {},
      architecturalPatterns: {},
      improvementAreas: {}
    };

    // Analyze common issues across files
    analysisResults.forEach(result => {
      result.issues.forEach(issue => {
        const issueKey = `${issue.type}-${issue.category}`;
        if (!patterns.commonIssues[issueKey]) {
          patterns.commonIssues[issueKey] = {
            count: 0,
            severity: issue.severity,
            files: [],
            description: issue.description
          };
        }
        patterns.commonIssues[issueKey].count++;
        if (!patterns.commonIssues[issueKey].files.includes(result.file)) {
          patterns.commonIssues[issueKey].files.push(result.file);
        }
      });
    });

    return patterns;
  }

  suggestImprovements(analysisResults) {
    const improvements = [];

    // File-level improvements
    analysisResults.forEach(result => {
      if (result.issues.length > 5) {
        improvements.push({
          file: result.file,
          priority: 'high',
          description: `High issue count (${result.issues.length}) - needs refactoring`,
          actions: [
            'Break down into smaller components',
            'Extract utility functions',
            'Improve error handling',
            'Add comprehensive tests'
          ]
        });
      }
    });

    // Pattern-based improvements
    Object.entries(this.patternDatabase).forEach(([patternType, patterns]) => {
      if (Object.keys(patterns).length > 0) {
        improvements.push({
          type: 'pattern-improvement',
          priority: 'medium',
          description: `Found ${Object.keys(patterns).length} ${patternType} patterns`,
          actions: [
            'Review pattern usage',
            'Standardize implementations',
            'Document pattern guidelines',
            'Create pattern library'
          ]
        });
      }
    });

    return improvements;
  }

  learnFromAnalysis(analysisResults) {
    // Update learning data with current analysis
    analysisResults.forEach(result => {
      const fileKey = result.file;
      if (!this.learningData.fileQualityHistory[fileKey]) {
        this.learningData.fileQualityHistory[fileKey] = [];
      }

      this.learningData.fileQualityHistory[fileKey].push({
        timestamp: Date.now(),
        metrics: result.metrics,
        issues: result.issues.length,
        patterns: result.patterns
      });

      // Keep only last 10 entries per file
      if (this.learningData.fileQualityHistory[fileKey].length > 10) {
        this.learningData.fileQualityHistory[fileKey] = 
          this.learningData.fileQualityHistory[fileKey].slice(-10);
      }
    });

    // Update common issues
    analysisResults.forEach(result => {
      result.issues.forEach(issue => {
        const issueKey = `${issue.type}-${issue.category}`;
        if (!this.learningData.commonIssues[issueKey]) {
          this.learningData.commonIssues[issueKey] = {
            count: 0,
            severity: issue.severity,
            files: [],
            lastSeen: Date.now()
          };
        }
        this.learningData.commonIssues[issueKey].count++;
        this.learningData.commonIssues[issueKey].lastSeen = Date.now();
        if (!this.learningData.commonIssues[issueKey].files.includes(result.file)) {
          this.learningData.commonIssues[issueKey].files.push(result.file);
        }
      });
    });

    this.saveLearningData();
  }

  async generateQualityReport(analysisResults, insights) {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalFiles: analysisResults.length,
        totalIssues: analysisResults.reduce((sum, result) => sum + result.issues.length, 0),
        overallQuality: this.qualityMetrics.overall,
        qualityBreakdown: this.qualityMetrics
      },
      trends: insights.trends,
      recommendations: insights.recommendations,
      patterns: insights.patterns,
      improvements: insights.improvements,
      detailedAnalysis: analysisResults.map(result => ({
        file: result.file,
        metrics: result.metrics,
        issues: result.issues,
        patterns: result.patterns,
        suggestions: result.suggestions
      }))
    };

    try {
      fs.writeFileSync(this.qualityReportFile, JSON.stringify(report, null, 2));
      this.log('📊 AI Quality Report generated');
    } catch (error) {
      this.log('Failed to generate quality report');
    }
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'scripts'];
    const sourceFiles = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });

    return sourceFiles.filter(file => 
      /\.(js|jsx|ts|tsx)$/.test(file) && 
      !file.includes('node_modules') && 
      !file.includes('.git')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    });
  }

  async start() {
    this.log('🚀 AI Code Quality Monitor started');
    
    // Run initial analysis
    await this.analyzeCodeQuality();
    
    // Schedule periodic analysis
    setInterval(async () => {
      await this.analyzeCodeQuality();
    }, 6 * 60 * 60 * 1000); // Every 6 hours
  }
}

// Start the AI Code Quality Monitor
const monitor = new AICodeQualityMonitor();
monitor.start().catch(error => {
  console.error('AI Code Quality Monitor failed to start:', error);
  process.exit(1);
});