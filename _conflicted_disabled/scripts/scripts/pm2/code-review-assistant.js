#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeReviewAssistant {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/code-review-assistant.log');
    this.reviewReportFile = path.join(this.projectRoot, 'logs/pm2/code-review-report.json');
    this.reviewDataFile = path.join(this.projectRoot, 'logs/pm2/code-review-data.json');
    this.bestPracticesFile = path.join(this.projectRoot, 'logs/pm2/best-practices-database.json');
    this.startTime = Date.now();
    
    this.reviewMetrics = {
      totalReviews: 0,
      issuesFound: 0,
      suggestionsProvided: 0,
      reviewQuality: 0,
      lastReviewTime: 0
    };
    
    this.reviewData = this.loadReviewData();
    this.bestPractices = this.loadBestPractices();
    this.reviewHistory = [];
    this.issuePatterns = {};
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

  loadReviewData() {
    try {
      if (fs.existsSync(this.reviewDataFile)) {
        return JSON.parse(fs.readFileSync(this.reviewDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load review data, starting fresh');
    }
    return {
      reviewHistory: {},
      issuePatterns: {},
      codeQualityTrends: {},
      lastUpdated: Date.now()
    };
  }

  loadBestPractices() {
    try {
      if (fs.existsSync(this.bestPracticesFile)) {
        return JSON.parse(fs.readFileSync(this.bestPracticesFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load best practices, starting fresh');
    }
    return {
      architectural: {},
      performance: {},
      security: {},
      maintainability: {},
      testing: {},
      accessibility: {},
      lastUpdated: Date.now()
    };
  }

  saveReviewData() {
    try {
      this.reviewData.lastUpdated = Date.now();
      fs.writeFileSync(this.reviewDataFile, JSON.stringify(this.reviewData, null, 2));
    } catch (error) {
      this.log('Failed to save review data');
    }
  }

  saveBestPractices() {
    try {
      this.bestPractices.lastUpdated = Date.now();
      fs.writeFileSync(this.bestPracticesFile, JSON.stringify(this.bestPractices, null, 2));
    } catch (error) {
      this.log('Failed to save best practices');
    }
  }

  async performCodeReview() {
    this.log('🔍 Starting AI-Powered Code Review...');
    
    try {
      // Get recent code changes
      const recentChanges = this.getRecentChanges();
      if (recentChanges.length === 0) {
        this.log('✅ No recent changes to review');
        return;
      }

      this.log(`📝 Found ${recentChanges.length} files with recent changes`);

      // Analyze each changed file
      const reviewResults = [];
      for (const change of recentChanges) {
        const review = await this.reviewFile(change);
        if (review) {
          reviewResults.push(review);
        }
      }

      // Generate comprehensive review summary
      const reviewSummary = this.generateReviewSummary(reviewResults);
      
      // Provide AI-powered suggestions
      const suggestions = this.generateAISuggestions(reviewResults);
      
      // Learn from this review
      this.learnFromReview(reviewResults);
      
      // Generate review report
      await this.generateReviewReport(reviewResults, reviewSummary, suggestions);
      
      this.log(`✅ Code Review complete! Found ${reviewSummary.totalIssues} issues and provided ${suggestions.length} suggestions`);
      
    } catch (error) {
      this.log(`❌ Error during code review: ${error.message}`);
    }
  }

  getRecentChanges() {
    const changes = [];
    
    try {
      // Get git status for recent changes
      const gitStatus = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 10000
      });

      const lines = gitStatus.split('\n').filter(line => line.trim());
      
      lines.forEach(line => {
        const status = line.substring(0, 2);
        const file = line.substring(3);
        
        if (status.includes('M') || status.includes('A')) {
          if (this.isCodeFile(file)) {
            changes.push({
              file,
              status: status.trim(),
              type: this.determineFileType(file)
            });
          }
        }
      });

    } catch (error) {
      this.log('Git not available, using file modification times');
      
      // Fallback to file modification time analysis
      const sourceFiles = this.getSourceFiles();
      const oneHourAgo = Date.now() - (60 * 60 * 1000);
      
      sourceFiles.forEach(file => {
        try {
          const stats = fs.statSync(file);
          if (stats.mtime.getTime() > oneHourAgo) {
            changes.push({
              file,
              status: 'M',
              type: this.determineFileType(file)
            });
          }
        } catch (error) {
          // File not accessible
        }
      });
    }

    return changes;
  }

  isCodeFile(filePath) {
    return /\.(js|jsx|ts|tsx|css|scss|sass|json|md)$/.test(filePath) &&
           !filePath.includes('node_modules') &&
           !filePath.includes('.git') &&
           !filePath.includes('dist') &&
           !filePath.includes('build');
  }

  getSourceFiles() {
    const sourceFiles = [];
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'scripts'];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });

    return sourceFiles;
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

  determineFileType(filePath) {
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
    
    return 'other';
  }

  async reviewFile(change) {
    try {
      const content = fs.readFileSync(change.file, 'utf8');
      const stats = fs.statSync(change.file);
      
      const review = {
        file: change.file,
        type: change.type,
        status: change.status,
        size: stats.size,
        lines: content.split('\n').length,
        issues: [],
        suggestions: [],
        quality: 0,
        timestamp: Date.now()
      };

      // Perform comprehensive code analysis
      review.issues = this.analyzeCodeIssues(content, change.type);
      review.suggestions = this.generateCodeSuggestions(content, change.type, review.issues);
      review.quality = this.calculateCodeQuality(review);

      return review;
      
    } catch (error) {
      this.log(`Error reviewing ${change.file}: ${error.message}`);
      return null;
    }
  }

  analyzeCodeIssues(content, fileType) {
    const issues = [];
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmedLine = line.trim();

      // Architecture issues
      const architecturalIssues = this.detectArchitecturalIssues(trimmedLine, fileType);
      architecturalIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'architectural',
          severity: issue.severity,
          description: issue.description,
          category: 'architecture'
        });
      });

      // Performance issues
      const performanceIssues = this.detectPerformanceIssues(trimmedLine, fileType);
      performanceIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'performance',
          severity: issue.severity,
          description: issue.description,
          category: 'performance'
        });
      });

      // Security issues
      const securityIssues = this.detectSecurityIssues(trimmedLine, fileType);
      securityIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'security',
          severity: issue.severity,
          description: issue.description,
          category: 'security'
        });
      });

      // Maintainability issues
      const maintainabilityIssues = this.detectMaintainabilityIssues(trimmedLine, fileType);
      maintainabilityIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'maintainability',
          severity: issue.severity,
          description: issue.description,
          category: 'maintainability'
        });
      });

      // Testing issues
      const testingIssues = this.detectTestingIssues(trimmedLine, fileType);
      testingIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'testing',
          severity: issue.severity,
          description: issue.description,
          category: 'testing'
        });
      });

      // Accessibility issues
      const accessibilityIssues = this.detectAccessibilityIssues(trimmedLine, fileType);
      accessibilityIssues.forEach(issue => {
        issues.push({
          line: lineNum,
          type: 'accessibility',
          severity: issue.severity,
          description: issue.description,
          category: 'accessibility'
        });
      });
    });

    return issues;
  }

  detectArchitecturalIssues(line, fileType) {
    const issues = [];

    // Check for architectural anti-patterns
    if (line.match(/import\s+\*\s+as/)) {
      issues.push({
        severity: 'medium',
        description: 'Wildcard import detected - consider specific imports for better tree shaking'
      });
    }

    if (line.match(/export\s+default/)) {
      issues.push({
        severity: 'low',
        description: 'Default export detected - consider named exports for better reusability'
      });
    }

    if (line.match(/React\.createElement/)) {
      issues.push({
        severity: 'medium',
        description: 'React.createElement usage detected - JSX is preferred for better readability'
      });
    }

    if (line.match(/document\./)) {
      issues.push({
        severity: 'high',
        description: 'Direct DOM manipulation detected - use React refs and state management'
      });
    }

    if (line.match(/window\./)) {
      issues.push({
        severity: 'medium',
        description: 'Global window access detected - consider dependency injection'
      });
    }

    return issues;
  }

  detectPerformanceIssues(line, fileType) {
    const issues = [];

    // Check for performance anti-patterns
    if (line.match(/\.forEach\s*\(/)) {
      issues.push({
        severity: 'low',
        description: 'forEach usage detected - consider for...of for better performance'
      });
    }

    if (line.match(/\.map\s*\(.*\)\.filter/)) {
      issues.push({
        severity: 'medium',
        description: 'Chained array methods detected - consider combining operations for better performance'
      });
    }

    if (line.match(/new\s+Date\s*\(/)) {
      issues.push({
        severity: 'low',
        description: 'Date constructor in loop detected - consider caching or moving outside loop'
      });
    }

    if (line.match(/JSON\.parse\s*\(/)) {
      issues.push({
        severity: 'low',
        description: 'JSON parsing in loop detected - consider caching parsed results'
      });
    }

    if (line.match(/\.innerHTML\s*=/)) {
      issues.push({
        severity: 'high',
        description: 'innerHTML usage detected - XSS vulnerability and performance impact'
      });
    }

    return issues;
  }

  detectSecurityIssues(line, fileType) {
    const issues = [];

    // Check for security vulnerabilities
    if (line.match(/eval\s*\(/)) {
      issues.push({
        severity: 'critical',
        description: 'eval() usage detected - critical security risk'
      });
    }

    if (line.match(/innerHTML\s*=/)) {
      issues.push({
        severity: 'high',
        description: 'innerHTML usage detected - XSS vulnerability'
      });
    }

    if (line.match(/document\.write/)) {
      issues.push({
        severity: 'high',
        description: 'document.write usage detected - XSS vulnerability'
      });
    }

    if (line.match(/localStorage\s*\[/)) {
      issues.push({
        severity: 'medium',
        description: 'Unsafe localStorage access detected - validate and sanitize data'
      });
    }

    if (line.match(/fetch\s*\([^)]*\)/)) {
      if (!line.includes('headers') || !line.includes('Content-Type')) {
        issues.push({
          severity: 'low',
          description: 'Fetch request without proper headers - consider adding Content-Type and authorization'
        });
      }
    }

    return issues;
  }

  detectMaintainabilityIssues(line, fileType) {
    const issues = [];

    // Check for maintainability issues
    if (line.length > 120) {
      issues.push({
        severity: 'low',
        description: 'Long line detected - consider breaking into multiple lines for readability'
      });
    }

    if (line.match(/function\s+\w+\s*\([^)]{50,}\)/)) {
      issues.push({
        severity: 'medium',
        description: 'Long parameter list detected - consider using object parameter or breaking into smaller functions'
      });
    }

    if (line.match(/\{[^}]{200,}\}/)) {
      issues.push({
        severity: 'medium',
        description: 'Long code block detected - consider extracting into separate functions'
      });
    }

    if (line.match(/if\s*\([^)]{100,}\)/)) {
      issues.push({
        severity: 'medium',
        description: 'Complex condition detected - consider extracting into readable variables or functions'
      });
    }

    if (line.match(/TODO|FIXME|HACK|XXX/)) {
      issues.push({
        severity: 'low',
        description: 'Development note detected - ensure these are addressed before production'
      });
    }

    return issues;
  }

  detectTestingIssues(line, fileType) {
    const issues = [];

    // Check for testing-related issues
    if (line.match(/console\.(log|warn|error|info|debug)/)) {
      issues.push({
        severity: 'low',
        description: 'Console statement detected - remove for production or use proper logging'
      });
    }

    if (line.match(/debugger/)) {
      issues.push({
        severity: 'medium',
        description: 'Debugger statement detected - remove for production'
      });
    }

    if (line.match(/alert\s*\(/)) {
      issues.push({
        severity: 'low',
        description: 'Alert usage detected - consider proper error handling and user feedback'
      });
    }

    return issues;
  }

  detectAccessibilityIssues(line, fileType) {
    const issues = [];

    // Check for accessibility issues
    if (line.match(/<div\s+onClick/)) {
      issues.push({
        severity: 'medium',
        description: 'Clickable div detected - consider using button or adding proper ARIA attributes'
      });
    }

    if (line.match(/<img\s+(?!.*alt=)/)) {
      issues.push({
        severity: 'high',
        description: 'Image without alt text detected - add descriptive alt text for accessibility'
      });
    }

    if (line.match(/<button\s+(?!.*aria-label)/)) {
      if (!line.match(/<.*>.*<\/button>/)) {
        issues.push({
          severity: 'low',
          description: 'Button without visible text - consider adding aria-label or visible text'
        });
      }
    }

    return issues;
  }

  generateCodeSuggestions(content, fileType, issues) {
    const suggestions = [];

    // Generate suggestions based on issues found
    issues.forEach(issue => {
      const suggestion = this.generateIssueSuggestion(issue, fileType);
      if (suggestion) {
        suggestions.push(suggestion);
      }
    });

    // Generate general improvement suggestions
    const generalSuggestions = this.generateGeneralSuggestions(content, fileType);
    suggestions.push(...generalSuggestions);

    return suggestions;
  }

  generateIssueSuggestion(issue, fileType) {
    const suggestionMap = {
      'architectural': {
        'Wildcard import detected': 'Use specific imports: `import { Component } from "library"`',
        'Default export detected': 'Use named exports: `export const Component = () => {}`',
        'React.createElement usage detected': 'Use JSX syntax: `<Component prop={value} />`',
        'Direct DOM manipulation detected': 'Use React refs: `const ref = useRef(); ref.current.focus()`',
        'Global window access detected': 'Use dependency injection or context'
      },
      'performance': {
        'forEach usage detected': 'Use for...of loop: `for (const item of items)`',
        'Chained array methods detected': 'Combine operations: `items.filter().map()`',
        'Date constructor in loop detected': 'Move date creation outside loop or cache result',
        'JSON parsing in loop detected': 'Cache parsed results or move parsing outside loop',
        'innerHTML usage detected': 'Use textContent or React state for dynamic content'
      },
      'security': {
        'eval() usage detected': 'Use safer alternatives like Function constructor or JSON.parse',
        'innerHTML usage detected': 'Use textContent or React state for dynamic content',
        'document.write usage detected': 'Use DOM manipulation methods or React state',
        'Unsafe localStorage access detected': 'Validate and sanitize data before storage',
        'Fetch request without proper headers': 'Add Content-Type and authorization headers'
      },
      'maintainability': {
        'Long line detected': 'Break into multiple lines or extract variables',
        'Long parameter list detected': 'Use object parameter: `function({ param1, param2 })`',
        'Long code block detected': 'Extract into separate functions',
        'Complex condition detected': 'Extract into readable variables or functions',
        'Development note detected': 'Address before production deployment'
      },
      'testing': {
        'Console statement detected': 'Remove for production or implement proper logging',
        'Debugger statement detected': 'Remove for production',
        'Alert usage detected': 'Implement proper error handling and user feedback'
      },
      'accessibility': {
        'Clickable div detected': 'Use button element or add role="button" and tabIndex',
        'Image without alt text detected': 'Add descriptive alt text: `alt="Description"`',
        'Button without visible text': 'Add aria-label or visible text content'
      }
    };

    const categorySuggestions = suggestionMap[issue.type];
    if (categorySuggestions && categorySuggestions[issue.description]) {
      return {
        type: issue.type,
        priority: issue.severity,
        description: issue.description,
        suggestion: categorySuggestions[issue.description],
        line: issue.line
      };
    }

    return null;
  }

  generateGeneralSuggestions(content, fileType) {
    const suggestions = [];

    // General code quality suggestions
    if (fileType === 'component') {
      suggestions.push({
        type: 'general',
        priority: 'low',
        description: 'Component best practices',
        suggestion: 'Consider adding PropTypes or TypeScript interfaces for props validation',
        line: 0
      });

      if (content.includes('useState') && content.includes('useEffect')) {
        suggestions.push({
          type: 'general',
          priority: 'medium',
          description: 'State management optimization',
          suggestion: 'Consider using useReducer for complex state logic or custom hooks for reusable logic',
          line: 0
        });
      }
    }

    if (fileType === 'api') {
      suggestions.push({
        type: 'general',
        priority: 'medium',
        description: 'API endpoint best practices',
        suggestion: 'Add input validation, error handling, and rate limiting',
        line: 0
      });
    }

    if (fileType === 'utility') {
      suggestions.push({
        type: 'general',
        priority: 'low',
        description: 'Utility function optimization',
        suggestion: 'Consider adding JSDoc comments and unit tests',
        line: 0
      });
    }

    return suggestions;
  }

  calculateCodeQuality(review) {
    let quality = 100;
    
    // Deduct points based on issues
    review.issues.forEach(issue => {
      switch (issue.severity) {
        case 'critical':
          quality -= 20;
          break;
        case 'high':
          quality -= 15;
          break;
        case 'medium':
          quality -= 10;
          break;
        case 'low':
          quality -= 5;
          break;
      }
    });

    // Bonus for good practices
    if (review.issues.length === 0) quality += 10;
    if (review.suggestions.length > 0) quality += 5;

    return Math.max(0, Math.min(100, quality));
  }

  generateReviewSummary(reviewResults) {
    const summary = {
      totalFiles: reviewResults.length,
      totalIssues: 0,
      issuesBySeverity: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0
      },
      issuesByCategory: {},
      averageQuality: 0,
      filesWithIssues: 0
    };

    reviewResults.forEach(review => {
      summary.totalIssues += review.issues.length;
      
      if (review.issues.length > 0) {
        summary.filesWithIssues++;
      }

      review.issues.forEach(issue => {
        // Count by severity
        summary.issuesBySeverity[issue.severity]++;
        
        // Count by category
        if (!summary.issuesByCategory[issue.category]) {
          summary.issuesByCategory[issue.category] = 0;
        }
        summary.issuesByCategory[issue.category]++;
      });
    });

    // Calculate average quality
    if (reviewResults.length > 0) {
      summary.averageQuality = reviewResults.reduce((sum, review) => sum + review.quality, 0) / reviewResults.length;
    }

    return summary;
  }

  generateAISuggestions(reviewResults) {
    const suggestions = [];

    // Analyze patterns across files
    const patterns = this.analyzeIssuePatterns(reviewResults);
    
    // Generate strategic suggestions
    if (patterns.security > 0) {
      suggestions.push({
        type: 'strategic',
        priority: 'critical',
        title: 'Security Issues Detected',
        description: `${patterns.security} security issues found across ${patterns.files} files`,
        actions: [
          'Conduct security review of affected files',
          'Implement security scanning in CI/CD',
          'Train team on secure coding practices',
          'Review authentication and authorization'
        ]
      });
    }

    if (patterns.performance > 0) {
      suggestions.push({
        type: 'strategic',
        priority: 'high',
        title: 'Performance Issues Detected',
        description: `${patterns.performance} performance issues found`,
        actions: [
          'Profile application performance',
          'Implement performance monitoring',
          'Optimize critical paths',
          'Add performance testing'
        ]
      });
    }

    if (patterns.maintainability > 0) {
      suggestions.push({
        type: 'strategic',
        priority: 'medium',
        title: 'Maintainability Issues Detected',
        description: `${patterns.maintainability} maintainability issues found`,
        actions: [
          'Implement code quality gates',
          'Add automated linting rules',
          'Review coding standards',
          'Consider refactoring complex code'
        ]
      });
    }

    return suggestions;
  }

  analyzeIssuePatterns(reviewResults) {
    const patterns = {
      security: 0,
      performance: 0,
      maintainability: 0,
      architectural: 0,
      testing: 0,
      accessibility: 0,
      files: reviewResults.length
    };

    reviewResults.forEach(review => {
      review.issues.forEach(issue => {
        patterns[issue.type]++;
      });
    });

    return patterns;
  }

  learnFromReview(reviewResults) {
    // Update review metrics
    this.reviewMetrics.totalReviews++;
    this.reviewMetrics.lastReviewTime = Date.now();
    
    const totalIssues = reviewResults.reduce((sum, review) => sum + review.issues.length, 0);
    const totalSuggestions = reviewResults.reduce((sum, review) => sum + review.suggestions.length, 0);
    
    this.reviewMetrics.issuesFound += totalIssues;
    this.reviewMetrics.suggestionsProvided += totalSuggestions;
    
    // Calculate review quality
    if (reviewResults.length > 0) {
      const averageQuality = reviewResults.reduce((sum, review) => sum + review.quality, 0) / reviewResults.length;
      this.reviewMetrics.reviewQuality = averageQuality;
    }

    // Update review history
    reviewResults.forEach(review => {
      this.reviewHistory.push({
        timestamp: review.timestamp,
        file: review.file,
        quality: review.quality,
        issues: review.issues.length,
        suggestions: review.suggestions.length
      });
    });

    // Keep only last 100 reviews
    if (this.reviewHistory.length > 100) {
      this.reviewHistory = this.reviewHistory.slice(-100);
    }

    // Update issue patterns
    reviewResults.forEach(review => {
      review.issues.forEach(issue => {
        const patternKey = `${issue.type}-${issue.category}`;
        if (!this.issuePatterns[patternKey]) {
          this.issuePatterns[patternKey] = {
            count: 0,
            severity: issue.severity,
            files: [],
            lastSeen: Date.now()
          };
        }
        
        this.issuePatterns[patternKey].count++;
        this.issuePatterns[patternKey].lastSeen = Date.now();
        
        if (!this.issuePatterns[patternKey].files.includes(review.file)) {
          this.issuePatterns[patternKey].files.push(review.file);
        }
      });
    });

    this.saveReviewData();
  }

  async generateReviewReport(reviewResults, reviewSummary, suggestions) {
    const report = {
      timestamp: Date.now(),
      summary: reviewSummary,
      reviews: reviewResults,
      suggestions,
      metrics: this.reviewMetrics,
      patterns: this.issuePatterns,
      history: this.reviewHistory.slice(-10), // Last 10 reviews
      recommendations: this.generateStrategicRecommendations()
    };

    try {
      fs.writeFileSync(this.reviewReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Code Review Report generated');
    } catch (error) {
      this.log('Failed to generate review report');
    }
  }

  generateStrategicRecommendations() {
    const recommendations = [];

    // Quality-based recommendations
    if (this.reviewMetrics.reviewQuality < 70) {
      recommendations.push({
        type: 'quality',
        priority: 'high',
        title: 'Low Code Quality Detected',
        description: `Average review quality is ${this.reviewMetrics.reviewQuality.toFixed(1)}/100`,
        actions: [
          'Implement stricter code review process',
          'Add automated quality checks',
          'Provide team training on best practices',
          'Set up code quality gates'
        ]
      });
    }

    // Issue pattern recommendations
    Object.entries(this.issuePatterns).forEach(([pattern, data]) => {
      if (data.count > 3) {
        recommendations.push({
          type: 'pattern',
          priority: 'medium',
          title: `Recurring ${pattern} Issues`,
          description: `${data.count} instances found across ${data.files.length} files`,
          actions: [
            'Review coding standards',
            'Add automated linting rules',
            'Provide team training',
            'Consider code templates'
          ]
        });
      }
    });

    return recommendations;
  }

  async start() {
    this.log('🚀 Code Review Assistant started');
    
    // Run initial code review
    await this.performCodeReview();
    
    // Schedule periodic reviews
    setInterval(async () => {
      await this.performCodeReview();
    }, 6 * 60 * 60 * 1000); // Every 6 hours
  }
}

// Start the Code Review Assistant
const assistant = new CodeReviewAssistant();
assistant.start().catch(error => {
  console.error('Code Review Assistant failed to start:', error);
  process.exit(1);
});