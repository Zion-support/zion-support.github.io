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
    this.reviewsDir = path.join(this.projectRoot, 'logs', 'ai-reviews');
    this.suggestionsFile = path.join(this.reviewsDir, 'code-suggestions.json');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reviewsDir)) {
      fs.mkdirSync(this.reviewsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runAICodeReview() {
    this.log('Starting AI-powered code review automation...');
    
    const reviews = [];
    const suggestions = [];
    const autoFixes = [];

    try {
      // 1. Analyze code patterns and quality
      const codeAnalysis = await this.analyzeCodeQuality();
      reviews.push(...codeAnalysis);

      // 2. Generate intelligent suggestions
      const aiSuggestions = await this.generateAISuggestions(codeAnalysis);
      suggestions.push(...aiSuggestions);

      // 3. Auto-fix simple issues
      const fixes = await this.autoFixSimpleIssues(codeAnalysis);
      autoFixes.push(...fixes);

      // 4. Generate comprehensive review report
      await this.generateReviewReport(reviews, suggestions, autoFixes);

      // 5. Create improvement roadmap
      await this.createImprovementRoadmap(suggestions);

      // 6. Commit auto-fixes if successful
      if (autoFixes.length > 0) {
        await this.commitAutoFixes(autoFixes);
      }

    } catch (error) {
      this.log(`AI code review failed: ${error.message}`, 'ERROR');
    }

    return { reviews, suggestions, autoFixes };
  }

  async analyzeCodeQuality() {
    const analysis = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return analysis;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileAnalysis = await this.analyzeFile(file, content);
            if (fileAnalysis) analysis.push(fileAnalysis);
          } catch (error) {
            this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Code analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeFile(filePath, content) {
    const analysis = {
      file: filePath,
      timestamp: new Date().toISOString(),
      metrics: {},
      issues: [],
      suggestions: []
    };

    try {
      // Analyze code complexity
      analysis.metrics.complexity = this.calculateComplexity(content);
      analysis.metrics.maintainability = this.calculateMaintainability(content);
      analysis.metrics.readability = this.calculateReadability(content);

      // Detect code smells
      const codeSmells = this.detectCodeSmells(content);
      analysis.issues.push(...codeSmells);

      // Analyze performance patterns
      const performanceIssues = this.analyzePerformancePatterns(content);
      analysis.issues.push(...performanceIssues);

      // Detect security vulnerabilities
      const securityIssues = this.detectSecurityVulnerabilities(content);
      analysis.issues.push(...securityIssues);

      // Generate improvement suggestions
      const improvements = this.generateImprovementSuggestions(content, analysis.metrics);
      analysis.suggestions.push(...improvements);

    } catch (error) {
      this.log(`File analysis failed for ${filePath}: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count conditional statements
    const conditionals = (content.match(/if\s*\(|else\s*if\s*\(|switch\s*\(|case\s+/g) || []).length;
    
    // Count loops
    const loops = (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length;
    
    // Count function calls
    const functionCalls = (content.match(/\.\w+\s*\(/g) || []).length;
    
    complexity = conditionals + loops + functionCalls;
    
    return {
      score: complexity,
      level: complexity < 10 ? 'LOW' : complexity < 25 ? 'MEDIUM' : 'HIGH',
      breakdown: { conditionals, loops, functionCalls }
    };
  }

  calculateMaintainability(content) {
    let maintainability = 100;
    
    // Reduce score for long functions
    const lines = content.split('\n').length;
    if (lines > 100) maintainability -= 20;
    if (lines > 200) maintainability -= 30;
    
    // Reduce score for deep nesting
    const maxNesting = this.calculateMaxNesting(content);
    if (maxNesting > 4) maintainability -= 25;
    if (maxNesting > 6) maintainability -= 40;
    
    // Reduce score for magic numbers
    const magicNumbers = (content.match(/\b\d{3,}\b/g) || []).length;
    maintainability -= magicNumbers * 2;
    
    return {
      score: Math.max(0, maintainability),
      level: maintainability > 70 ? 'GOOD' : maintainability > 40 ? 'FAIR' : 'POOR',
      factors: { lines, maxNesting, magicNumbers }
    };
  }

  calculateReadability(content) {
    let readability = 100;
    
    // Check line length
    const longLines = content.split('\n').filter(line => line.length > 120).length;
    readability -= longLines * 3;
    
    // Check variable naming
    const shortVars = (content.match(/\b[a-z]\b/g) || []).length;
    readability -= shortVars * 2;
    
    // Check comment ratio
    const commentLines = (content.match(/\/\/.*$/gm) || []).length;
    const totalLines = content.split('\n').length;
    const commentRatio = commentLines / totalLines;
    if (commentRatio < 0.1) readability -= 15;
    if (commentRatio > 0.5) readability -= 10;
    
    return {
      score: Math.max(0, readability),
      level: readability > 70 ? 'GOOD' : readability > 40 ? 'FAIR' : 'POOR',
      factors: { longLines, shortVars, commentRatio: commentRatio.toFixed(2) }
    };
  }

  calculateMaxNesting(content) {
    let maxNesting = 0;
    let currentNesting = 0;
    
    for (const char of content) {
      if (char === '{') {
        currentNesting++;
        maxNesting = Math.max(maxNesting, currentNesting);
      } else if (char === '}') {
        currentNesting = Math.max(0, currentNesting - 1);
      }
    }
    
    return maxNesting;
  }

  detectCodeSmells(content) {
    const smells = [];
    
    // Long parameter lists
    const longParams = content.match(/function\s+\w+\s*\([^)]{50,}\)/g);
    if (longParams) {
      smells.push({
        type: 'LONG_PARAMETER_LIST',
        severity: 'MEDIUM',
        message: 'Function has too many parameters, consider using an object parameter',
        examples: longParams.slice(0, 3)
      });
    }
    
    // Duplicate code
    const duplicatePatterns = this.findDuplicatePatterns(content);
    if (duplicatePatterns.length > 0) {
      smells.push({
        type: 'DUPLICATE_CODE',
        severity: 'HIGH',
        message: 'Duplicate code detected, consider extraction to reusable functions',
        examples: duplicatePatterns.slice(0, 3)
      });
    }
    
    // Large functions
    const largeFunctions = content.match(/function\s+\w+\s*\([^)]*\)\s*\{[\s\S]{500,}\}/g);
    if (largeFunctions) {
      smells.push({
        type: 'LARGE_FUNCTION',
        severity: 'MEDIUM',
        message: 'Function is too large, consider breaking it into smaller functions',
        examples: largeFunctions.slice(0, 2)
      });
    }
    
    return smells;
  }

  findDuplicatePatterns(content) {
    const patterns = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length - 2; i++) {
      const pattern = lines.slice(i, i + 3).join('\n');
      const occurrences = content.split(pattern).length - 1;
      
      if (occurrences > 1 && pattern.trim().length > 20) {
        patterns.push({
          pattern: pattern.substring(0, 100) + '...',
          occurrences,
          startLine: i + 1
        });
      }
    }
    
    return patterns.slice(0, 5); // Return top 5 duplicates
  }

  analyzePerformancePatterns(content) {
    const issues = [];
    
    // Inefficient array operations
    const arrayIssues = [
      { pattern: /\.forEach\s*\([^)]*=>\s*\{[^}]*\.push\s*\(/g, message: 'Consider using map instead of forEach + push' },
      { pattern: /\.filter\s*\([^)]*\)\.map\s*\(/g, message: 'Consider combining filter and map operations' },
      { pattern: /\.map\s*\([^)]*\)\.filter\s*\(/g, message: 'Consider combining map and filter operations' }
    ];
    
    arrayIssues.forEach(({ pattern, message }) => {
      if (pattern.test(content)) {
        issues.push({
          type: 'PERFORMANCE_ANTIPATTERN',
          severity: 'MEDIUM',
          message,
          suggestion: 'Use array methods efficiently to avoid multiple iterations'
        });
      }
    });
    
    // Memory leaks
    const memoryIssues = [
      { pattern: /addEventListener\s*\([^)]*\)(?!\s*removeEventListener)/g, message: 'Event listener added without removal plan' },
      { pattern: /setInterval\s*\([^)]*\)(?!\s*clearInterval)/g, message: 'Interval set without cleanup plan' },
      { pattern: /setTimeout\s*\([^)]*\)(?!\s*clearTimeout)/g, message: 'Timeout set without cleanup plan' }
    ];
    
    memoryIssues.forEach(({ pattern, message }) => {
      if (pattern.test(content)) {
        issues.push({
          type: 'MEMORY_LEAK_RISK',
          severity: 'HIGH',
          message,
          suggestion: 'Ensure proper cleanup of timers and event listeners'
        });
      }
    });
    
    return issues;
  }

  detectSecurityVulnerabilities(content) {
    const vulnerabilities = [];
    
    // XSS vulnerabilities
    const xssPatterns = [
      { pattern: /dangerouslySetInnerHTML\s*=\s*\{[^}]*\}/g, message: 'Potential XSS vulnerability with dangerouslySetInnerHTML' },
      { pattern: /eval\s*\(/g, message: 'eval() usage can lead to code injection' },
      { pattern: /innerHTML\s*=\s*[^;]+/g, message: 'innerHTML assignment can lead to XSS' }
    ];
    
    xssPatterns.forEach(({ pattern, message }) => {
      if (pattern.test(content)) {
        vulnerabilities.push({
          type: 'XSS_VULNERABILITY',
          severity: 'HIGH',
          message,
          suggestion: 'Use safe alternatives like textContent or sanitize input'
        });
      }
    });
    
    // SQL injection (if applicable)
    const sqlPatterns = [
      { pattern: /query\s*\(\s*`[^`]*\$\{[^}]+\}[^`]*`/g, message: 'Potential SQL injection with template literals' }
    ];
    
    sqlPatterns.forEach(({ pattern, message }) => {
      if (pattern.test(content)) {
        vulnerabilities.push({
          type: 'SQL_INJECTION_RISK',
          severity: 'CRITICAL',
          message,
          suggestion: 'Use parameterized queries or input validation'
        });
      }
    });
    
    return vulnerabilities;
  }

  generateImprovementSuggestions(content, metrics) {
    const suggestions = [];
    
    if (metrics.complexity.level === 'HIGH') {
      suggestions.push({
        type: 'COMPLEXITY_REDUCTION',
        priority: 'HIGH',
        message: 'Reduce function complexity by extracting helper functions',
        action: 'Break down complex logic into smaller, focused functions'
      });
    }
    
    if (metrics.maintainability.level === 'POOR') {
      suggestions.push({
        type: 'MAINTAINABILITY_IMPROVEMENT',
        priority: 'HIGH',
        message: 'Improve code maintainability by reducing nesting and function size',
        action: 'Refactor deeply nested code and extract long functions'
      });
    }
    
    if (metrics.readability.level === 'POOR') {
      suggestions.push({
        type: 'READABILITY_IMPROVEMENT',
        priority: 'MEDIUM',
        message: 'Improve code readability with better formatting and naming',
        action: 'Add comments, improve variable names, and reduce line length'
      });
    }
    
    return suggestions;
  }

  async generateAISuggestions(analysis) {
    const suggestions = [];
    
    // Analyze patterns across files
    const commonIssues = this.findCommonIssues(analysis);
    
    for (const issue of commonIssues) {
      const suggestion = await this.generateIntelligentSuggestion(issue);
      if (suggestion) suggestions.push(suggestion);
    }
    
    return suggestions;
  }

  findCommonIssues(analysis) {
    const issueCounts = {};
    
    analysis.forEach(fileAnalysis => {
      fileAnalysis.issues.forEach(issue => {
        const key = issue.type;
        issueCounts[key] = (issueCounts[key] || 0) + 1;
      });
    });
    
    return Object.entries(issueCounts)
      .filter(([_, count]) => count > 1)
      .map(([type, count]) => ({ type, count, severity: 'MEDIUM' }));
  }

  async generateIntelligentSuggestion(issue) {
    // This would integrate with an AI service in production
    // For now, we'll use rule-based suggestions
    const suggestions = {
      'PERFORMANCE_ANTIPATTERN': {
        message: 'Multiple files have performance issues. Consider implementing performance best practices across the codebase.',
        action: 'Create a performance optimization guide and refactor common patterns',
        priority: 'MEDIUM'
      },
      'MEMORY_LEAK_RISK': {
        message: 'Memory leak risks detected in multiple files. Implement consistent cleanup patterns.',
        action: 'Create utility functions for proper resource cleanup and use them consistently',
        priority: 'HIGH'
      },
      'XSS_VULNERABILITY': {
        message: 'Security vulnerabilities found. Implement consistent input sanitization.',
        action: 'Create security utilities and enforce their use across the codebase',
        priority: 'CRITICAL'
      }
    };
    
    return suggestions[issue.type] || null;
  }

  async autoFixSimpleIssues(analysis) {
    const fixes = [];
    
    for (const fileAnalysis of analysis) {
      const fileFixes = await this.fixFileIssues(fileAnalysis);
      fixes.push(...fileFixes);
    }
    
    return fixes;
  }

  async fixFileIssues(fileAnalysis) {
    const fixes = [];
    
    try {
      const content = fs.readFileSync(fileAnalysis.file, 'utf8');
      let modifiedContent = content;
      let hasChanges = false;
      
      // Fix magic numbers
      const magicNumberFixes = this.fixMagicNumbers(modifiedContent);
      if (magicNumberFixes.changes) {
        modifiedContent = magicNumberFixes.content;
        hasChanges = true;
        fixes.push({
          file: fileAnalysis.file,
          type: 'MAGIC_NUMBER_FIX',
          description: 'Replaced magic numbers with named constants',
          changes: magicNumberFixes.changes
        });
      }
      
      // Fix long lines
      const lineFixes = this.fixLongLines(modifiedContent);
      if (lineFixes.changes) {
        modifiedContent = lineFixes.content;
        hasChanges = true;
        fixes.push({
          file: fileAnalysis.file,
          type: 'LINE_LENGTH_FIX',
          description: 'Split long lines for better readability',
          changes: lineFixes.changes
        });
      }
      
      // Write changes if any
      if (hasChanges) {
        fs.writeFileSync(fileAnalysis.file, modifiedContent, 'utf8');
      }
      
    } catch (error) {
      this.log(`Error fixing file ${fileAnalysis.file}: ${error.message}`, 'ERROR');
    }
    
    return fixes;
  }

  fixMagicNumbers(content) {
    const changes = [];
    let modifiedContent = content;
    
    // Find magic numbers and suggest constants
    const magicNumbers = content.match(/\b\d{3,}\b/g) || [];
    const uniqueNumbers = [...new Set(magicNumbers)];
    
    uniqueNumbers.forEach(number => {
      const constantName = this.suggestConstantName(number);
      const regex = new RegExp(`\\b${number}\\b`, 'g');
      
      if (constantName) {
        modifiedContent = modifiedContent.replace(regex, constantName);
        changes.push({
          number,
          constant: constantName,
          suggestion: `Consider defining ${constantName} = ${number} at the top of the file`
        });
      }
    });
    
    return { content: modifiedContent, changes: changes.length > 0 ? changes : null };
  }

  suggestConstantName(number) {
    const suggestions = {
      '1000': 'ONE_SECOND',
      '2000': 'TWO_SECONDS',
      '3000': 'THREE_SECONDS',
      '5000': 'FIVE_SECONDS',
      '10000': 'TEN_SECONDS',
      '30000': 'THIRTY_SECONDS',
      '60000': 'ONE_MINUTE',
      '3600000': 'ONE_HOUR',
      '86400000': 'ONE_DAY'
    };
    
    return suggestions[number] || null;
  }

  fixLongLines(content) {
    const changes = [];
    let modifiedContent = content;
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 120) {
        const fixedLine = this.breakLongLine(line);
        if (fixedLine !== line) {
          modifiedContent = modifiedContent.replace(line, fixedLine);
          changes.push({
            lineNumber: i + 1,
            originalLength: line.length,
            newLength: fixedLine.length,
            suggestion: 'Line broken for better readability'
          });
        }
      }
    }
    
    return { content: modifiedContent, changes: changes.length > 0 ? changes : null };
  }

  breakLongLine(line) {
    // Simple line breaking logic - in production, use a proper formatter
    if (line.includes('(') && line.includes(')')) {
      return line.replace(/,/g, ',\n  ');
    }
    
    if (line.includes('&&') || line.includes('||')) {
      return line.replace(/\s*(&&|\|\|)\s*/g, '\n  $1 ');
    }
    
    return line;
  }

  async generateReviewReport(reviews, suggestions, autoFixes) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: reviews.length,
        totalIssues: reviews.reduce((sum, r) => sum + r.issues.length, 0),
        totalSuggestions: suggestions.length,
        totalAutoFixes: autoFixes.length
      },
      metrics: {
        averageComplexity: this.calculateAverageMetric(reviews, 'complexity.score'),
        averageMaintainability: this.calculateAverageMetric(reviews, 'maintainability.score'),
        averageReadability: this.calculateAverageMetric(reviews, 'readability.score')
      },
      topIssues: this.getTopIssues(reviews),
      recommendations: suggestions.slice(0, 10),
      autoFixes: autoFixes
    };
    
    const reportPath = path.join(this.reviewsDir, `review-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Review report generated: ${reportPath}`);
    return report;
  }

  calculateAverageMetric(reviews, metricPath) {
    const values = reviews
      .map(r => this.getNestedValue(r, metricPath))
      .filter(v => typeof v === 'number');
    
    if (values.length === 0) return 0;
    return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  getTopIssues(reviews) {
    const issueCounts = {};
    
    reviews.forEach(review => {
      review.issues.forEach(issue => {
        const key = issue.type;
        issueCounts[key] = (issueCounts[key] || 0) + 1;
      });
    });
    
    return Object.entries(issueCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([type, count]) => ({ type, count }));
  }

  async createImprovementRoadmap(suggestions) {
    const roadmap = {
      timestamp: new Date().toISOString(),
      phases: {
        immediate: suggestions.filter(s => s.priority === 'CRITICAL'),
        shortTerm: suggestions.filter(s => s.priority === 'HIGH'),
        mediumTerm: suggestions.filter(s => s.priority === 'MEDIUM'),
        longTerm: suggestions.filter(s => s.priority === 'LOW')
      },
      estimatedEffort: this.estimateEffort(suggestions),
      timeline: this.generateTimeline(suggestions)
    };
    
    const roadmapPath = path.join(this.reviewsDir, 'improvement-roadmap.json');
    fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2));
    
    this.log(`Improvement roadmap created: ${roadmapPath}`);
    return roadmap;
  }

  estimateEffort(suggestions) {
    const effortMap = {
      'CRITICAL': 8,
      'HIGH': 4,
      'MEDIUM': 2,
      'LOW': 1
    };
    
    return suggestions.reduce((total, s) => total + (effortMap[s.priority] || 1), 0);
  }

  generateTimeline(suggestions) {
    const critical = suggestions.filter(s => s.priority === 'CRITICAL').length;
    const high = suggestions.filter(s => s.priority === 'HIGH').length;
    const medium = suggestions.filter(s => s.priority === 'MEDIUM').length;
    
    return {
      immediate: critical > 0 ? '1-2 days' : 'N/A',
      shortTerm: high > 0 ? '1-2 weeks' : 'N/A',
      mediumTerm: medium > 0 ? '1-2 months' : 'N/A',
      longTerm: 'Ongoing'
    };
  }

  async commitAutoFixes(fixes) {
    if (fixes.length === 0) return;
    
    try {
      // Stage changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `🤖 AI Auto-fixes: ${fixes.length} improvements applied\n\n` +
        fixes.map(f => `- ${f.type}: ${f.description}`).join('\n');
      
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Auto-fixes committed: ${fixes.length} changes`);
      
    } catch (error) {
      this.log(`Failed to commit auto-fixes: ${error.message}`, 'ERROR');
    }
  }

  async getAllFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...await this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }
}

// Main execution
if (require.main === module) {
  const automation = new AICodeReviewAutomation();
  
  automation.runAICodeReview()
    .then(result => {
      console.log('AI Code Review completed successfully');
      console.log(`Reviews: ${result.reviews.length}`);
      console.log(`Suggestions: ${result.suggestions.length}`);
      console.log(`Auto-fixes: ${result.autoFixes.length}`);
      process.exit(0);
    })
    .catch(error => {
      console.error('AI Code Review failed:', error);
      process.exit(1);
    });
}

module.exports = AICodeReviewAutomation;