#!/usr/bin/env node

/**
 * AI-Powered Code Review Automation
 * Automatically reviews code changes and provides intelligent suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AICodeReviewAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-review.log');
    this.reviewsLog = path.join(this.projectRoot, 'logs', 'ai-reviews.json');
    this.suggestionsLog = path.join(this.projectRoot, 'logs', 'ai-suggestions.json');
    this.ensureLogsDirectory();
    this.reviewHistory = this.loadReviewHistory();
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

  loadReviewHistory() {
    try {
      if (fs.existsSync(this.reviewsLog)) {
        return JSON.parse(fs.readFileSync(this.reviewsLog, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load review history: ${error.message}`, 'WARN');
    }
    return { reviews: [], suggestions: [], patterns: {} };
  }

  saveReviewHistory() {
    try {
      fs.writeFileSync(this.reviewsLog, JSON.stringify(this.reviewHistory, null, 2));
    } catch (error) {
      this.log(`Failed to save review history: ${error.message}`, 'ERROR');
    }
  }

  async analyzeCodeQuality(filePath) {
    const analysis = {
      file: filePath,
      timestamp: new Date().toISOString(),
      metrics: {},
      suggestions: [],
      issues: []
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Analyze code complexity
      analysis.metrics.complexity = this.calculateComplexity(content);
      analysis.metrics.lines = content.split('\n').length;
      analysis.metrics.size = Buffer.byteLength(content, 'utf8');

      // Detect potential issues
      analysis.issues = this.detectIssues(content, filePath);
      
      // Generate intelligent suggestions
      analysis.suggestions = this.generateSuggestions(content, filePath, analysis.metrics);

      // Update pattern recognition
      this.updatePatternRecognition(filePath, analysis);

    } catch (error) {
      this.log(`Failed to analyze ${filePath}: ${error.message}`, 'ERROR');
      analysis.error = error.message;
    }

    return analysis;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count control flow statements
    const controlFlowPatterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /\?\s*[^:]+:/g, // ternary operators
      /&&|\|\|/g // logical operators
    ];

    controlFlowPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });

    return complexity;
  }

  detectIssues(content, filePath) {
    const issues = [];
    const ext = path.extname(filePath);

    // TypeScript/JavaScript specific issues
    if (ext === '.ts' || ext === '.tsx' || ext === '.js' || ext === '.jsx') {
      // Detect unused imports
      const importMatches = content.match(/import\s+.*?from\s+['"][^'"]+['"]/g);
      if (importMatches) {
        importMatches.forEach(importStmt => {
          const importName = importStmt.match(/import\s+(\w+)/);
          if (importName && !content.includes(importName[1])) {
            issues.push({
              type: 'UNUSED_IMPORT',
              severity: 'LOW',
              message: `Unused import: ${importName[1]}`,
              suggestion: `Remove unused import or use it in the code`
            });
          }
        });
      }

      // Detect potential memory leaks
      if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
        issues.push({
          type: 'POTENTIAL_MEMORY_LEAK',
          severity: 'MEDIUM',
          message: 'Event listener added without removal',
          suggestion: 'Ensure event listeners are properly removed in cleanup'
        });
      }

      // Detect console statements in production code
      if (content.includes('console.log') || content.includes('console.error')) {
        issues.push({
          type: 'CONSOLE_STATEMENT',
          severity: 'LOW',
          message: 'Console statements found in code',
          suggestion: 'Remove console statements for production or use proper logging'
        });
      }
    }

    // React specific issues
    if (ext === '.tsx' || ext === '.jsx') {
      // Detect missing dependencies in useEffect
      const useEffectMatches = content.match(/useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*\},\s*\[\s*\]\s*\)/g);
      if (useEffectMatches) {
        issues.push({
          type: 'MISSING_DEPENDENCIES',
          severity: 'MEDIUM',
          message: 'useEffect with empty dependency array might be missing dependencies',
          suggestion: 'Review dependencies and add them to the array if needed'
        });
      }

      // Detect inline functions in JSX
      const inlineFunctionMatches = content.match(/onClick\s*=\s*\{\(\)\s*=>\s*[^}]*\}/g);
      if (inlineFunctionMatches) {
        issues.push({
          type: 'INLINE_FUNCTION',
          severity: 'LOW',
          message: 'Inline function in JSX can cause unnecessary re-renders',
          suggestion: 'Extract function outside component or use useCallback'
        });
      }
    }

    return issues;
  }

  generateSuggestions(content, filePath, metrics) {
    const suggestions = [];
    const ext = path.extname(filePath);

    // Performance suggestions
    if (metrics.complexity > 10) {
      suggestions.push({
        type: 'PERFORMANCE',
        priority: 'HIGH',
        message: 'High cyclomatic complexity detected',
        suggestion: 'Consider breaking down complex functions into smaller, more manageable pieces',
        code: '// Example: Extract complex logic into separate functions\nconst handleComplexLogic = () => {\n  // Break down into smaller functions\n}'
      });
    }

    // Code organization suggestions
    if (metrics.lines > 200) {
      suggestions.push({
        type: 'ORGANIZATION',
        priority: 'MEDIUM',
        message: 'File is quite long',
        suggestion: 'Consider splitting into multiple files or extracting components',
        code: '// Example: Split into multiple files\n// component.tsx\n// component.types.ts\n// component.utils.ts'
      });
    }

    // TypeScript specific suggestions
    if (ext === '.ts' || ext === '.tsx') {
      if (content.includes('any')) {
        suggestions.push({
          type: 'TYPE_SAFETY',
          priority: 'HIGH',
          message: 'Usage of "any" type detected',
          suggestion: 'Replace "any" with proper TypeScript types for better type safety',
          code: '// Instead of: const data: any\n// Use: const data: SpecificType'
        });
      }

      if (content.includes('// @ts-ignore')) {
        suggestions.push({
          type: 'TYPE_SAFETY',
          priority: 'HIGH',
          message: 'TypeScript ignore comment found',
          suggestion: 'Fix the underlying type issue instead of ignoring it',
          code: '// Fix the type issue:\n// const element = document.getElementById("id") as HTMLInputElement;'
        });
      }
    }

    // Security suggestions
    if (content.includes('innerHTML') || content.includes('dangerouslySetInnerHTML')) {
      suggestions.push({
        type: 'SECURITY',
        priority: 'HIGH',
        message: 'Potential XSS vulnerability detected',
        suggestion: 'Avoid using innerHTML with user input, use textContent instead',
        code: '// Instead of: element.innerHTML = userInput\n// Use: element.textContent = userInput'
      });
    }

    return suggestions;
  }

  updatePatternRecognition(filePath, analysis) {
    const fileType = path.extname(filePath);
    
    if (!this.reviewHistory.patterns[fileType]) {
      this.reviewHistory.patterns[fileType] = {
        commonIssues: {},
        complexityTrends: [],
        fileSizes: []
      };
    }

    // Track common issues
    analysis.issues.forEach(issue => {
      const key = `${issue.type}_${issue.severity}`;
      if (!this.reviewHistory.patterns[fileType].commonIssues[key]) {
        this.reviewHistory.patterns[fileType].commonIssues[key] = 0;
      }
      this.reviewHistory.patterns[fileType].commonIssues[key]++;
    });

    // Track complexity trends
    this.reviewHistory.patterns[fileType].complexityTrends.push({
      timestamp: analysis.timestamp,
      complexity: analysis.metrics.complexity,
      file: filePath
    });

    // Track file sizes
    this.reviewHistory.patterns[fileType].fileSizes.push({
      timestamp: analysis.timestamp,
      size: analysis.metrics.size,
      file: filePath
    });

    // Keep only last 100 entries
    if (this.reviewHistory.patterns[fileType].complexityTrends.length > 100) {
      this.reviewHistory.patterns[fileType].complexityTrends = 
        this.reviewHistory.patterns[fileType].complexityTrends.slice(-100);
    }
    if (this.reviewHistory.patterns[fileType].fileSizes.length > 100) {
      this.reviewHistory.patterns[fileType].fileSizes = 
        this.reviewHistory.patterns[fileType].fileSizes.slice(-100);
    }
  }

  async reviewChangedFiles() {
    try {
      // Get list of changed files from git
      const changedFiles = execSync('git diff --name-only HEAD~1', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim() && this.isCodeFile(file));

      this.log(`Found ${changedFiles.length} changed code files to review`);

      const reviews = [];
      for (const file of changedFiles) {
        if (fs.existsSync(file)) {
          const review = await this.analyzeCodeQuality(file);
          reviews.push(review);
          
          // Log findings
          if (review.issues.length > 0 || review.suggestions.length > 0) {
            this.log(`File: ${file} - ${review.issues.length} issues, ${review.suggestions.length} suggestions`);
          }
        }
      }

      // Save reviews to history
      this.reviewHistory.reviews.push(...reviews);
      this.saveReviewHistory();

      return reviews;

    } catch (error) {
      this.log(`Failed to review changed files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  isCodeFile(filePath) {
    const codeExtensions = ['.ts', '.tsx', '.js', '.jsx', '.vue', '.svelte'];
    return codeExtensions.includes(path.extname(filePath));
  }

  async generateReviewReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: this.reviewHistory.reviews.length,
          totalIssues: 0,
          totalSuggestions: 0,
          criticalIssues: 0,
          highPrioritySuggestions: 0
        },
        patterns: this.reviewHistory.patterns,
        recommendations: []
      };

      // Analyze all reviews
      this.reviewHistory.reviews.forEach(review => {
        report.summary.totalIssues += review.issues.length;
        report.summary.totalSuggestions += review.suggestions.length;
        
        review.issues.forEach(issue => {
          if (issue.severity === 'CRITICAL') report.summary.criticalIssues++;
        });
        
        review.suggestions.forEach(suggestion => {
          if (suggestion.priority === 'HIGH') report.summary.highPrioritySuggestions++;
        });
      });

      // Generate recommendations based on patterns
      Object.entries(this.reviewHistory.patterns).forEach(([fileType, patterns]) => {
        if (patterns.commonIssues) {
          const mostCommonIssue = Object.entries(patterns.commonIssues)
            .sort(([,a], [,b]) => b - a)[0];
          
          if (mostCommonIssue) {
            report.recommendations.push({
              type: 'COMMON_ISSUE',
              fileType,
              issue: mostCommonIssue[0],
              count: mostCommonIssue[1],
              suggestion: 'Consider creating a linting rule or code template to prevent this issue'
            });
          }
        }

        // Complexity trend analysis
        if (patterns.complexityTrends.length > 5) {
          const recentComplexity = patterns.complexityTrends.slice(-5);
          const avgComplexity = recentComplexity.reduce((sum, item) => sum + item.complexity, 0) / recentComplexity.length;
          
          if (avgComplexity > 8) {
            report.recommendations.push({
              type: 'COMPLEXITY_TREND',
              fileType,
              averageComplexity: avgComplexity,
              suggestion: 'Consider refactoring complex files to reduce cyclomatic complexity'
            });
          }
        }
      });

      // Save report
      const reportPath = path.join(this.projectRoot, 'logs', 'ai-review-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`AI Review Report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Failed to generate review report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async run() {
    this.log('🚀 Starting AI-Powered Code Review Automation...');
    
    try {
      // Review changed files
      const reviews = await this.reviewChangedFiles();
      
      // Generate comprehensive report
      const report = await this.generateReviewReport();
      
      this.log(`✅ AI Code Review completed. Reviewed ${reviews.length} files.`);
      
      if (report) {
        this.log(`📊 Report generated with ${report.summary.totalIssues} issues and ${report.summary.totalSuggestions} suggestions.`);
      }

      return { success: true, reviews, report };

    } catch (error) {
      this.log(`❌ AI Code Review failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new AICodeReviewAutomation();
  automation.run().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AICodeReviewAutomation;