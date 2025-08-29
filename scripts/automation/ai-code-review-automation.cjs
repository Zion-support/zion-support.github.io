#!/usr/bin/env node

/**
 * AI-Powered Code Review Automation - PM2 Automation
 * Intelligently analyzes code quality and suggests improvements
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AICodeReviewAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-review.log');
    this.reportsDir = path.join(this.projectRoot, 'logs', 'ai-review-reports');
    this.codeQualityDB = path.join(this.projectRoot, 'logs', 'code-quality-db.json');
    this.ensureLogsDirectory();
    this.loadCodeQualityDB();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  loadCodeQualityDB() {
    try {
      if (fs.existsSync(this.codeQualityDB)) {
        this.codeQualityDB = JSON.parse(fs.readFileSync(this.codeQualityDB, 'utf8'));
      } else {
        this.codeQualityDB = {
          patterns: {},
          metrics: {},
          suggestions: {},
          lastUpdated: new Date().toISOString()
        };
      }
    } catch (error) {
      this.codeQualityDB = {
        patterns: {},
        metrics: {},
        suggestions: {},
        lastUpdated: new Date().toISOString()
      };
    }
  }

  saveCodeQualityDB() {
    try {
      fs.writeFileSync(this.codeQualityDB, JSON.stringify(this.codeQualityDB, null, 2));
    } catch (error) {
      this.log(`Failed to save code quality DB: ${error.message}`, 'ERROR');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runAICodeReview() {
    this.log('🤖 Starting AI-powered code review automation...');
    
    const reviewResults = {
      filesAnalyzed: 0,
      issuesFound: 0,
      suggestions: [],
      autoFixes: [],
      qualityScore: 0,
      timestamp: new Date().toISOString()
    };

    try {
      // 1. Analyze code patterns and complexity
      const patternAnalysis = await this.analyzeCodePatterns();
      reviewResults.patternAnalysis = patternAnalysis;

      // 2. Detect code smells and anti-patterns
      const codeSmells = await this.detectCodeSmells();
      reviewResults.codeSmells = codeSmells;

      // 3. Analyze performance implications
      const performanceAnalysis = await this.analyzePerformanceImplications();
      reviewResults.performanceAnalysis = performanceAnalysis;

      // 4. Generate intelligent suggestions
      const suggestions = await this.generateIntelligentSuggestions(reviewResults);
      reviewResults.suggestions = suggestions;

      // 5. Auto-fix simple issues
      const autoFixes = await this.autoFixSimpleIssues(reviewResults);
      reviewResults.autoFixes = autoFixes;

      // 6. Calculate quality score
      reviewResults.qualityScore = this.calculateQualityScore(reviewResults);

      // 7. Generate comprehensive report
      await this.generateAIReviewReport(reviewResults);

      // 8. Update code quality database
      this.updateCodeQualityDB(reviewResults);

      // 9. Commit fixes if successful
      if (autoFixes.length > 0) {
        await this.commitAIFixes(autoFixes);
      }

    } catch (error) {
      this.log(`AI code review failed: ${error.message}`, 'ERROR');
      reviewResults.error = error.message;
    }

    return reviewResults;
  }

  async analyzeCodePatterns() {
    this.log('🔍 Analyzing code patterns and complexity...');
    
    const patterns = {
      complexity: {},
      patterns: {},
      metrics: {}
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return patterns;

      const files = await this.getAllFiles(srcPath);
      let totalLines = 0;
      let totalComplexity = 0;

      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileAnalysis = this.analyzeFilePatterns(content, file);
            
            patterns.complexity[file] = fileAnalysis.complexity;
            patterns.patterns[file] = fileAnalysis.patterns;
            patterns.metrics[file] = fileAnalysis.metrics;
            
            totalLines += fileAnalysis.metrics.lines;
            totalComplexity += fileAnalysis.complexity.score;
          } catch (error) {
            this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }

      patterns.metrics.total = {
        files: Object.keys(patterns.complexity).length,
        lines: totalLines,
        averageComplexity: totalComplexity / Math.max(Object.keys(patterns.complexity).length, 1)
      };

    } catch (error) {
      this.log(`Pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFilePatterns(content, filePath) {
    const lines = content.split('\n');
    const analysis = {
      complexity: { score: 0, factors: [] },
      patterns: { good: [], bad: [] },
      metrics: { lines: lines.length, functions: 0, imports: 0 }
    };

    // Calculate cyclomatic complexity
    let complexity = 1;
    const complexityKeywords = ['if', 'else', 'for', 'while', 'case', 'catch', '&&', '||', '?', ':'];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Count complexity factors
      for (const keyword of complexityKeywords) {
        if (trimmedLine.includes(keyword)) {
          complexity++;
        }
      }

      // Count functions
      if (trimmedLine.includes('function') || trimmedLine.includes('=>') || trimmedLine.includes('(') && trimmedLine.includes(')')) {
        analysis.metrics.functions++;
      }

      // Count imports
      if (trimmedLine.startsWith('import') || trimmedLine.startsWith('export')) {
        analysis.metrics.imports++;
      }
    }

    analysis.complexity.score = complexity;
    
    // Identify patterns
    if (complexity > 10) {
      analysis.patterns.bad.push('High cyclomatic complexity - consider refactoring');
    }
    
    if (lines.length > 200) {
      analysis.patterns.bad.push('Large file - consider splitting into smaller modules');
    }

    if (analysis.metrics.functions > 20) {
      analysis.patterns.bad.push('Too many functions - consider grouping related functions');
    }

    // Good patterns
    if (content.includes('useMemo') || content.includes('useCallback')) {
      analysis.patterns.good.push('Good use of React optimization hooks');
    }

    if (content.includes('ErrorBoundary') || content.includes('try-catch')) {
      analysis.patterns.good.push('Good error handling practices');
    }

    return analysis;
  }

  async detectCodeSmells() {
    this.log('👃 Detecting code smells and anti-patterns...');
    
    const smells = {
      critical: [],
      warning: [],
      info: []
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return smells;

      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileSmells = this.detectFileSmells(content, file);
            
            smells.critical.push(...fileSmells.critical);
            smells.warning.push(...fileSmells.warning);
            smells.info.push(...fileSmells.info);
          } catch (error) {
            this.log(`Error detecting smells in ${file}: ${error.message}`, 'WARN');
          }
        }
      }

    } catch (error) {
      this.log(`Code smell detection failed: ${error.message}`, 'ERROR');
    }

    return smells;
  }

  detectFileSmells(content, filePath) {
    const smells = {
      critical: [],
      warning: [],
      info: []
    };

    const lines = content.split('\n');
    
    // Check for critical issues
    if (content.includes('console.log') && !filePath.includes('.test.')) {
      smells.critical.push({
        type: 'DEVELOPMENT_CODE_IN_PRODUCTION',
        message: 'console.log found in production code',
        file: filePath,
        line: this.findLineNumber(content, 'console.log')
      });
    }

    if (content.includes('debugger')) {
      smells.critical.push({
        type: 'DEBUGGER_STATEMENT',
        message: 'debugger statement found',
        file: filePath,
        line: this.findLineNumber(content, 'debugger')
      });
    }

    // Check for warnings
    if (content.includes('any') && filePath.includes('.ts')) {
      smells.warning.push({
        type: 'ANY_TYPE_USAGE',
        message: 'any type usage reduces type safety',
        file: filePath,
        line: this.findLineNumber(content, 'any')
      });
    }

    if (content.includes('eval(')) {
      smells.warning.push({
        type: 'EVAL_USAGE',
        message: 'eval usage is dangerous',
        file: filePath,
        line: this.findLineNumber(content, 'eval(')
      });
    }

    // Check for info items
    if (lines.length > 500) {
      smells.info.push({
        type: 'LARGE_FILE',
        message: 'File is very large, consider refactoring',
        file: filePath,
        line: 1
      });
    }

    return smells;
  }

  findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;
      }
    }
    return 1;
  }

  async analyzePerformanceImplications() {
    this.log('⚡ Analyzing performance implications...');
    
    const analysis = {
      bottlenecks: [],
      optimizations: [],
      recommendations: []
    };

    try {
      // Analyze bundle size impact
      const bundleAnalysis = await this.analyzeBundleImpact();
      analysis.bundleAnalysis = bundleAnalysis;

      // Analyze runtime performance
      const runtimeAnalysis = await this.analyzeRuntimePerformance();
      analysis.runtimeAnalysis = runtimeAnalysis;

      // Generate performance recommendations
      analysis.recommendations = this.generatePerformanceRecommendations(analysis);

    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeBundleImpact() {
    try {
      // Check for large dependencies
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const largeDeps = [];
        
        // Check for known large dependencies
        const heavyDependencies = ['lodash', 'moment', 'date-fns', 'd3'];
        for (const dep of heavyDependencies) {
          if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
            largeDeps.push({
              name: dep,
              impact: 'High bundle size impact',
              alternative: this.getAlternativeSuggestion(dep)
            });
          }
        }
        
        return { largeDependencies: largeDeps };
      }
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
    
    return { largeDependencies: [] };
  }

  getAlternativeSuggestion(dep) {
    const alternatives = {
      'lodash': 'Use native JavaScript methods or lodash-es for tree-shaking',
      'moment': 'Use date-fns or dayjs for smaller bundle size',
      'date-fns': 'Consider dayjs for even smaller bundle size',
      'd3': 'Use specific d3 modules instead of full d3 package'
    };
    
    return alternatives[dep] || 'Consider if this dependency is necessary';
  }

  async analyzeRuntimePerformance() {
    const analysis = {
      issues: [],
      suggestions: []
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return analysis;

      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileAnalysis = this.analyzeFilePerformance(content, file);
            
            analysis.issues.push(...fileAnalysis.issues);
            analysis.suggestions.push(...fileAnalysis.suggestions);
          } catch (error) {
            this.log(`Error analyzing performance in ${file}: ${error.message}`, 'WARN');
          }
        }
      }

    } catch (error) {
      this.log(`Runtime performance analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  analyzeFilePerformance(content, filePath) {
    const analysis = {
      issues: [],
      suggestions: []
    };

    // Check for performance anti-patterns
    if (content.includes('useEffect') && content.includes('[]')) {
      const useEffectCount = (content.match(/useEffect/g) || []).length;
      if (useEffectCount > 5) {
        analysis.issues.push({
          type: 'TOO_MANY_USE_EFFECTS',
          message: 'Too many useEffect hooks may indicate performance issues',
          file: filePath,
          severity: 'WARNING'
        });
      }
    }

    if (content.includes('useState') && content.includes('useEffect')) {
      analysis.suggestions.push({
        type: 'STATE_OPTIMIZATION',
        message: 'Consider using useReducer for complex state management',
        file: filePath,
        priority: 'MEDIUM'
      });
    }

    // Check for missing memoization
    if (content.includes('function') && content.includes('props')) {
      analysis.suggestions.push({
        type: 'MEMOIZATION',
        message: 'Consider using React.memo for component optimization',
        file: filePath,
        priority: 'LOW'
      });
    }

    return analysis;
  }

  generatePerformanceRecommendations(analysis) {
    const recommendations = [];

    if (analysis.bundleAnalysis.largeDependencies.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'BUNDLE_SIZE',
        message: 'Consider replacing large dependencies with lighter alternatives',
        actions: analysis.bundleAnalysis.largeDependencies.map(dep => 
          `Replace ${dep.name} with ${dep.alternative}`
        )
      });
    }

    if (analysis.runtimeAnalysis.issues.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'RUNTIME_PERFORMANCE',
        message: 'Address runtime performance issues',
        actions: analysis.runtimeAnalysis.issues.map(issue => 
          `Fix ${issue.type} in ${issue.file}`
        )
      });
    }

    return recommendations;
  }

  async generateIntelligentSuggestions(reviewResults) {
    this.log('💡 Generating intelligent suggestions...');
    
    const suggestions = [];

    try {
      // Generate suggestions based on patterns
      if (reviewResults.patternAnalysis) {
        const patternSuggestions = this.generatePatternSuggestions(reviewResults.patternAnalysis);
        suggestions.push(...patternSuggestions);
      }

      // Generate suggestions based on code smells
      if (reviewResults.codeSmells) {
        const smellSuggestions = this.generateSmellSuggestions(reviewResults.codeSmells);
        suggestions.push(...smellSuggestions);
      }

      // Generate suggestions based on performance analysis
      if (reviewResults.performanceAnalysis) {
        const perfSuggestions = this.generatePerformanceSuggestions(reviewResults.performanceAnalysis);
        suggestions.push(...perfSuggestions);
      }

      // Generate AI-powered suggestions
      const aiSuggestions = this.generateAISuggestions(reviewResults);
      suggestions.push(...aiSuggestions);

    } catch (error) {
      this.log(`Suggestion generation failed: ${error.message}`, 'ERROR');
    }

    return suggestions;
  }

  generatePatternSuggestions(patternAnalysis) {
    const suggestions = [];

    if (patternAnalysis.metrics.total) {
      const { files, lines, averageComplexity } = patternAnalysis.metrics.total;
      
      if (averageComplexity > 8) {
        suggestions.push({
          type: 'COMPLEXITY_REDUCTION',
          priority: 'HIGH',
          message: `Average cyclomatic complexity is ${averageComplexity.toFixed(2)}. Consider refactoring complex functions.`,
          actions: [
            'Break down complex functions into smaller ones',
            'Extract complex logic into utility functions',
            'Use early returns to reduce nesting'
          ]
        });
      }

      if (files > 100) {
        suggestions.push({
          type: 'CODE_ORGANIZATION',
          priority: 'MEDIUM',
          message: `Large codebase with ${files} files. Consider organizing code better.`,
          actions: [
            'Group related files into feature folders',
            'Create shared utility libraries',
            'Implement consistent naming conventions'
          ]
        });
      }
    }

    return suggestions;
  }

  generateSmellSuggestions(codeSmells) {
    const suggestions = [];

    if (codeSmells.critical.length > 0) {
      suggestions.push({
        type: 'CRITICAL_ISSUES',
        priority: 'CRITICAL',
        message: `Found ${codeSmells.critical.length} critical code smells that must be addressed.`,
        actions: codeSmells.critical.map(smell => 
          `Fix ${smell.type} in ${smell.file} at line ${smell.line}`
        )
      });
    }

    if (codeSmells.warning.length > 0) {
      suggestions.push({
        type: 'WARNING_ISSUES',
        priority: 'HIGH',
        message: `Found ${codeSmells.warning.length} warning-level code smells.`,
        actions: codeSmells.warning.map(smell => 
          `Address ${smell.type} in ${smell.file} at line ${smell.line}`
        )
      });
    }

    return suggestions;
  }

  generatePerformanceSuggestions(performanceAnalysis) {
    const suggestions = [];

    if (performanceAnalysis.recommendations) {
      for (const rec of performanceAnalysis.recommendations) {
        suggestions.push({
          type: 'PERFORMANCE_OPTIMIZATION',
          priority: rec.priority,
          message: rec.message,
          actions: rec.actions
        });
      }
    }

    return suggestions;
  }

  generateAISuggestions(reviewResults) {
    const suggestions = [];

    // AI-powered suggestions based on overall analysis
    const totalIssues = (reviewResults.codeSmells?.critical?.length || 0) + 
                       (reviewResults.codeSmells?.warning?.length || 0);
    
    if (totalIssues > 10) {
      suggestions.push({
        type: 'AI_ANALYSIS',
        priority: 'HIGH',
        message: 'High number of code quality issues detected. Consider implementing automated code quality gates.',
        actions: [
          'Set up pre-commit hooks for linting',
          'Implement automated testing requirements',
          'Add code review checklist for team members'
        ]
      });
    }

    if (reviewResults.qualityScore < 70) {
      suggestions.push({
        type: 'AI_ANALYSIS',
        priority: 'HIGH',
        message: 'Code quality score is below threshold. Focus on improving code standards.',
        actions: [
          'Schedule code quality improvement sessions',
          'Review and update coding standards',
          'Implement pair programming for complex changes'
        ]
      });
    }

    return suggestions;
  }

  async autoFixSimpleIssues(reviewResults) {
    this.log('🔧 Auto-fixing simple issues...');
    
    const fixes = [];

    try {
      // Auto-fix console.log statements
      if (reviewResults.codeSmells?.critical) {
        const consoleLogFixes = await this.autoFixConsoleLogs(reviewResults.codeSmells.critical);
        fixes.push(...consoleLogFixes);
      }

      // Auto-fix debugger statements
      if (reviewResults.codeSmells?.critical) {
        const debuggerFixes = await this.autoFixDebuggerStatements(reviewResults.codeSmells.critical);
        fixes.push(...debuggerFixes);
      }

      // Auto-fix import organization
      const importFixes = await this.autoFixImportOrganization();
      fixes.push(...importFixes);

    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }

    return fixes;
  }

  async autoFixConsoleLogs(criticalIssues) {
    const fixes = [];
    const consoleLogIssues = criticalIssues.filter(issue => issue.type === 'DEVELOPMENT_CODE_IN_PRODUCTION');

    for (const issue of consoleLogIssues) {
      try {
        const content = fs.readFileSync(issue.file, 'utf8');
        const fixedContent = content.replace(/console\.log\([^)]*\);?/g, '');
        
        if (fixedContent !== content) {
          fs.writeFileSync(issue.file, fixedContent);
          fixes.push({
            type: 'CONSOLE_LOG_REMOVAL',
            file: issue.file,
            message: 'Removed console.log statements',
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix console.log in ${issue.file}: ${error.message}`, 'ERROR');
      }
    }

    return fixes;
  }

  async autoFixDebuggerStatements(criticalIssues) {
    const fixes = [];
    const debuggerIssues = criticalIssues.filter(issue => issue.type === 'DEBUGGER_STATEMENT');

    for (const issue of debuggerIssues) {
      try {
        const content = fs.readFileSync(issue.file, 'utf8');
        const fixedContent = content.replace(/debugger;?/g, '');
        
        if (fixedContent !== content) {
          fs.writeFileSync(issue.file, fixedContent);
          fixes.push({
            type: 'DEBUGGER_REMOVAL',
            file: issue.file,
            message: 'Removed debugger statements',
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix debugger in ${issue.file}: ${error.message}`, 'ERROR');
      }
    }

    return fixes;
  }

  async autoFixImportOrganization() {
    const fixes = [];

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return fixes;

      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const organizedContent = this.organizeImports(content);
            
            if (organizedContent !== content) {
              fs.writeFileSync(file, organizedContent);
              fixes.push({
                type: 'IMPORT_ORGANIZATION',
                file: file,
                message: 'Organized imports',
                timestamp: new Date().toISOString()
              });
            }
          } catch (error) {
            this.log(`Failed to organize imports in ${file}: ${error.message}`, 'ERROR');
          }
        }
      }

    } catch (error) {
      this.log(`Import organization failed: ${error.message}`, 'ERROR');
    }

    return fixes;
  }

  organizeImports(content) {
    const lines = content.split('\n');
    const imports = [];
    const otherLines = [];
    let inImportBlock = false;

    for (const line of lines) {
      if (line.trim().startsWith('import') || line.trim().startsWith('export')) {
        if (!inImportBlock) inImportBlock = true;
        imports.push(line);
      } else {
        if (inImportBlock && line.trim() === '') {
          // Skip empty lines between imports
          continue;
        }
        if (inImportBlock && line.trim() !== '') {
          inImportBlock = false;
        }
        otherLines.push(line);
      }
    }

    // Sort imports
    imports.sort((a, b) => {
      // React imports first
      if (a.includes('react') && !b.includes('react')) return -1;
      if (!a.includes('react') && b.includes('react')) return 1;
      
      // Third-party imports
      if (a.includes('@') && !b.includes('@')) return -1;
      if (!a.includes('@') && b.includes('@')) return 1;
      
      // Local imports last
      if (a.includes('./') && !b.includes('./')) return 1;
      if (!a.includes('./') && b.includes('./')) return -1;
      
      return a.localeCompare(b);
    });

    return [...imports, '', ...otherLines].join('\n');
  }

  calculateQualityScore(reviewResults) {
    let score = 100;
    
    // Deduct points for issues
    if (reviewResults.codeSmells?.critical) {
      score -= reviewResults.codeSmells.critical.length * 10;
    }
    
    if (reviewResults.codeSmells?.warning) {
      score -= reviewResults.codeSmells.warning.length * 5;
    }
    
    if (reviewResults.patternAnalysis?.metrics?.total?.averageComplexity > 8) {
      score -= Math.floor(reviewResults.patternAnalysis.metrics.total.averageComplexity - 8) * 2;
    }
    
    // Ensure score doesn't go below 0
    return Math.max(0, Math.min(100, score));
  }

  async generateAIReviewReport(reviewResults) {
    this.log('📊 Generating AI review report...');
    
    try {
      const reportPath = path.join(this.reportsDir, `ai-review-${Date.now()}.json`);
      const report = {
        summary: {
          qualityScore: reviewResults.qualityScore,
          filesAnalyzed: reviewResults.filesAnalyzed,
          issuesFound: reviewResults.issuesFound,
          autoFixesApplied: reviewResults.autoFixes.length,
          timestamp: reviewResults.timestamp
        },
        details: reviewResults,
        recommendations: reviewResults.suggestions,
        nextSteps: this.generateNextSteps(reviewResults)
      };

      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Generate markdown summary
      const markdownPath = path.join(this.reportsDir, `ai-review-${Date.now()}.md`);
      const markdown = this.generateMarkdownReport(report);
      fs.writeFileSync(markdownPath, markdown);

      this.log(`AI review report generated: ${reportPath}`);
      this.log(`Markdown summary generated: ${markdownPath}`);

    } catch (error) {
      this.log(`Failed to generate AI review report: ${error.message}`, 'ERROR');
    }
  }

  generateNextSteps(reviewResults) {
    const nextSteps = [];

    if (reviewResults.qualityScore < 70) {
      nextSteps.push({
        priority: 'HIGH',
        action: 'Address critical code quality issues',
        timeline: 'Within 1 week'
      });
    }

    if (reviewResults.codeSmells?.critical?.length > 0) {
      nextSteps.push({
        priority: 'CRITICAL',
        action: 'Fix all critical code smells immediately',
        timeline: 'Within 24 hours'
      });
    }

    if (reviewResults.suggestions?.length > 0) {
      nextSteps.push({
        priority: 'MEDIUM',
        action: 'Review and implement high-priority suggestions',
        timeline: 'Within 1 week'
      });
    }

    nextSteps.push({
      priority: 'LOW',
      action: 'Schedule regular code quality reviews',
      timeline: 'Weekly'
    });

    return nextSteps;
  }

  generateMarkdownReport(report) {
    return `# AI Code Review Report

## Summary
- **Quality Score**: ${report.summary.qualityScore}/100
- **Files Analyzed**: ${report.summary.filesAnalyzed}
- **Issues Found**: ${report.summary.issuesFound}
- **Auto-Fixes Applied**: ${report.summary.autoFixesApplied}
- **Timestamp**: ${report.summary.timestamp}

## Quality Score Breakdown
${this.generateQualityScoreBreakdown(report.details)}

## Critical Issues
${this.generateIssuesList(report.details.codeSmells?.critical || [])}

## Warnings
${this.generateIssuesList(report.details.codeSmells?.warning || [])}

## Recommendations
${this.generateRecommendationsList(report.recommendations)}

## Next Steps
${this.generateNextStepsList(report.nextSteps)}

## Performance Analysis
${this.generatePerformanceSummary(report.details.performanceAnalysis)}

---
*Generated by AI Code Review Automation*
`;
  }

  generateQualityScoreBreakdown(details) {
    let breakdown = '';
    
    if (details.patternAnalysis?.metrics?.total) {
      const { files, lines, averageComplexity } = details.patternAnalysis.metrics.total;
      breakdown += `- **Files**: ${files}\n`;
      breakdown += `- **Lines of Code**: ${lines}\n`;
      breakdown += `- **Average Complexity**: ${averageComplexity.toFixed(2)}\n`;
    }
    
    if (details.codeSmells) {
      breakdown += `- **Critical Issues**: ${details.codeSmells.critical?.length || 0}\n`;
      breakdown += `- **Warnings**: ${details.codeSmells.warning?.length || 0}\n`;
      breakdown += `- **Info Items**: ${details.codeSmells.info?.length || 0}\n`;
    }
    
    return breakdown || 'No detailed breakdown available';
  }

  generateIssuesList(issues) {
    if (issues.length === 0) return 'None found.';
    
    return issues.map(issue => 
      `- **${issue.type}**: ${issue.message} (${issue.file}:${issue.line})`
    ).join('\n');
  }

  generateRecommendationsList(recommendations) {
    if (recommendations.length === 0) return 'No recommendations.';
    
    return recommendations.map(rec => 
      `- **${rec.type}** (${rec.priority}): ${rec.message}\n  - Actions: ${rec.actions.join(', ')}`
    ).join('\n\n');
  }

  generateNextStepsList(nextSteps) {
    if (nextSteps.length === 0) return 'No next steps defined.';
    
    return nextSteps.map(step => 
      `- **${step.priority}**: ${step.action} (${step.timeline})`
    ).join('\n');
  }

  generatePerformanceSummary(performanceAnalysis) {
    if (!performanceAnalysis) return 'No performance analysis available.';
    
    let summary = '';
    
    if (performanceAnalysis.bundleAnalysis?.largeDependencies) {
      summary += `**Bundle Impact**: ${performanceAnalysis.bundleAnalysis.largeDependencies.length} large dependencies detected\n`;
    }
    
    if (performanceAnalysis.runtimeAnalysis?.issues) {
      summary += `**Runtime Issues**: ${performanceAnalysis.runtimeAnalysis.issues.length} performance issues found\n`;
    }
    
    return summary || 'No performance issues detected.';
  }

  updateCodeQualityDB(reviewResults) {
    this.codeQualityDB.lastUpdated = new Date().toISOString();
    
    // Update patterns
    if (reviewResults.patternAnalysis) {
      this.codeQualityDB.patterns = {
        ...this.codeQualityDB.patterns,
        ...reviewResults.patternAnalysis
      };
    }
    
    // Update metrics
    if (reviewResults.patternAnalysis?.metrics) {
      this.codeQualityDB.metrics = {
        ...this.codeQualityDB.metrics,
        ...reviewResults.patternAnalysis.metrics
      };
    }
    
    // Update suggestions
    if (reviewResults.suggestions) {
      this.codeQualityDB.suggestions = {
        ...this.codeQualityDB.suggestions,
        [new Date().toISOString()]: reviewResults.suggestions
      };
    }
    
    this.saveCodeQualityDB();
  }

  async commitAIFixes(fixes) {
    if (fixes.length === 0) return;

    try {
      this.log(`Committing ${fixes.length} AI fixes...`);
      
      // Stage all changes
      execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
      
      // Create commit
      const commitMessage = `🤖 AI Code Review: Auto-fix ${fixes.length} issues\n\n` +
        fixes.map(fix => `- ${fix.type}: ${fix.message} (${fix.file})`).join('\n');
      
      execSync(`git commit -m "${commitMessage}"`, { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('AI fixes committed successfully');
      
    } catch (error) {
      this.log(`Failed to commit AI fixes: ${error.message}`, 'ERROR');
    }
  }

  async getAllFiles(dirPath) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const subFiles = await this.getAllFiles(fullPath);
          files.push(...subFiles);
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dirPath}: ${error.message}`, 'WARN');
    }
    
    return files;
  }

  async start() {
    this.log('🚀 AI Code Review Automation started');
    
    // Run initial review
    await this.runAICodeReview();
    
    // Schedule periodic reviews
    setInterval(async () => {
      await this.runAICodeReview();
    }, 6 * 60 * 60 * 1000); // Every 6 hours
  }
}

// Main execution
if (require.main === module) {
  const automation = new AICodeReviewAutomation();
  
  if (process.argv.includes('--start')) {
    automation.start();
  } else {
    automation.runAICodeReview().then(() => {
      process.exit(0);
    }).catch((error) => {
      console.error('AI Code Review failed:', error);
      process.exit(1);
    });
  }
}

module.exports = AICodeReviewAutomation;