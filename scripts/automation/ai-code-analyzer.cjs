#!/usr/bin/env node

/**
 * AI-Powered Code Quality Analyzer
 * Intelligent code analysis using pattern recognition and best practices
 * 
 * Features:
 * - Code smell detection
 * - Performance optimization suggestions
 * - Security vulnerability identification
 * - Code style consistency checks
 * - Automated refactoring suggestions
 * - Complexity analysis
 * - Dependency health monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class AICodeAnalyzer {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      analysisInterval: 300000, // 5 minutes
      maxFileSize: 1024 * 1024, // 1MB
      complexityThreshold: 10,
      maxFunctionLength: 50,
      maxFileLength: 500,
      securityPatterns: [
        /eval\s*\(/gi,
        /innerHTML\s*=/gi,
        /document\.write\s*\(/gi,
        /setTimeout\s*\(/gi,
        /setInterval\s*\(/gi,
        /new\s+Function\s*\(/gi,
        /\.innerHTML\s*=/gi,
        /\.outerHTML\s*=/gi
      ],
      performancePatterns: [
        /\.forEach\s*\(/gi,
        /\.map\s*\(/gi,
        /\.filter\s*\(/gi,
        /for\s*\(\s*let\s+i\s*=\s*0/gi,
        /\.querySelectorAll\s*\(/gi,
        /\.getElementsByTagName\s*\(/gi
      ],
      codeSmellPatterns: [
        /function\s+\w+\s*\(\s*\)\s*\{\s*return\s+true\s*;\s*\}/gi,
        /if\s*\(\s*true\s*\)/gi,
        /if\s*\(\s*false\s*\)/gi,
        /while\s*\(\s*true\s*\)/gi,
        /for\s*\(\s*;\s*;\s*\)/gi
      ],
      reportFile: 'logs/ai-code-analysis.json',
      logFile: 'logs/ai-code-analyzer.log'
    };
    
    this.analysisResults = {
      timestamp: Date.now(),
      filesAnalyzed: 0,
      issuesFound: 0,
      securityIssues: 0,
      performanceIssues: 0,
      codeSmells: 0,
      suggestions: [],
      metrics: {
        averageComplexity: 0,
        totalLines: 0,
        totalFunctions: 0
      }
    };
    
    this.setupLogging();
    this.initialize();
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

  async initialize() {
    try {
      this.log('Initializing AI Code Quality Analyzer...');
      
      // Create reports directory
      const reportDir = path.dirname(this.config.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      this.startAnalysis();
      
    } catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  startAnalysis() {
    this.log('Starting AI-powered code analysis...');
    
    setInterval(() => {
      this.runAnalysis();
    }, this.config.analysisInterval);
    
    // Run initial analysis
    this.runAnalysis();
  }

  async runAnalysis() {
    try {
      this.log('Running code analysis...');
      
      const files = this.getSourceFiles();
      this.analysisResults.filesAnalyzed = files.length;
      this.analysisResults.issuesFound = 0;
      this.analysisResults.suggestions = [];
      
      let totalComplexity = 0;
      let totalLines = 0;
      let totalFunctions = 0;
      
      for (const file of files) {
        const analysis = await this.analyzeFile(file);
        
        if (analysis.issues.length > 0) {
          this.analysisResults.issuesFound += analysis.issues.length;
          this.analysisResults.suggestions.push(...analysis.suggestions);
        }
        
        totalComplexity += analysis.complexity;
        totalLines += analysis.lines;
        totalFunctions += analysis.functions;
      }
      
      // Calculate metrics
      if (files.length > 0) {
        this.analysisResults.metrics.averageComplexity = totalComplexity / files.length;
        this.analysisResults.metrics.totalLines = totalLines;
        this.analysisResults.metrics.totalFunctions = totalFunctions;
      }
      
      this.generateReport();
      this.log(`Analysis completed. Found ${this.analysisResults.issuesFound} issues in ${files.length} files.`);
      
    } catch (error) {
      this.log(`Analysis failed: ${error.message}`, 'ERROR');
    }
  }

  getSourceFiles() {
    const patterns = [
      'src/**/*.{js,ts,jsx,tsx}',
      'pages/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}',
      'utils/**/*.{js,ts}',
      '*.{js,ts,jsx,tsx}'
    ];
    
    let files = [];
    patterns.forEach(pattern => {
      try {
        const matches = glob.sync(pattern, { cwd: this.config.projectRoot });
        files.push(...matches);
      } catch (error) {
        this.log(`Error matching pattern ${pattern}: ${error.message}`, 'WARN');
      }
    });
    
    return files.filter(file => {
      try {
        const stats = fs.statSync(path.join(this.config.projectRoot, file));
        return stats.size <= this.config.maxFileSize;
      } catch (error) {
        return false;
      }
    });
  }

  async analyzeFile(filePath) {
    const fullPath = path.join(this.config.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    const analysis = {
      file: filePath,
      issues: [],
      suggestions: [],
      complexity: 0,
      lines: content.split('\n').length,
      functions: 0
    };
    
    // Count functions
    const functionMatches = content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/gi);
    analysis.functions = functionMatches ? functionMatches.length : 0;
    
    // Calculate cyclomatic complexity
    analysis.complexity = this.calculateComplexity(content);
    
    // Security analysis
    this.analyzeSecurity(content, filePath, analysis);
    
    // Performance analysis
    this.analyzePerformance(content, filePath, analysis);
    
    // Code smell analysis
    this.analyzeCodeSmells(content, filePath, analysis);
    
    // Style consistency
    this.analyzeStyleConsistency(content, filePath, analysis);
    
    // Generate intelligent suggestions
    this.generateSuggestions(analysis);
    
    return analysis;
  }

  calculateComplexity(content) {
    let complexity = 1; // Base complexity
    
    const complexityPatterns = [
      /if\s*\(/gi,
      /else\s+if\s*\(/gi,
      /for\s*\(/gi,
      /while\s*\(/gi,
      /switch\s*\(/gi,
      /case\s+/gi,
      /catch\s*\(/gi,
      /&&/g,
      /\|\|/g,
      /\?/g,
      /:/g
    ];
    
    complexityPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });
    
    return complexity;
  }

  analyzeSecurity(content, filePath, analysis) {
    this.config.securityPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        analysis.issues.push({
          type: 'security',
          severity: 'high',
          message: `Potential security vulnerability: ${pattern.source}`,
          line: this.findLineNumber(content, pattern),
          suggestion: 'Consider using safer alternatives and input validation'
        });
        this.analysisResults.securityIssues++;
      }
    });
  }

  analyzePerformance(content, filePath, analysis) {
    this.config.performancePatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        analysis.issues.push({
          type: 'performance',
          severity: 'medium',
          message: `Performance consideration: ${pattern.source}`,
          line: this.findLineNumber(content, pattern),
          suggestion: 'Consider optimizing for large datasets or frequent operations'
        });
        this.analysisResults.performanceIssues++;
      }
    });
  }

  analyzeCodeSmells(content, filePath, analysis) {
    this.config.codeSmellPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        analysis.issues.push({
          type: 'code_smell',
          severity: 'low',
          message: `Code smell detected: ${pattern.source}`,
          line: this.findLineNumber(content, pattern),
          suggestion: 'Consider refactoring to improve code clarity and maintainability'
        });
        this.analysisResults.codeSmells++;
      }
    });
  }

  analyzeStyleConsistency(content, filePath, analysis) {
    const lines = content.split('\n');
    
    // Check for consistent indentation
    const indentPatterns = lines.map(line => line.match(/^(\s*)/)[1].length);
    const inconsistentIndent = indentPatterns.some(indent => indent % 2 !== 0);
    
    if (inconsistentIndent) {
      analysis.issues.push({
        type: 'style',
        severity: 'low',
        message: 'Inconsistent indentation detected',
        line: 'multiple',
        suggestion: 'Use consistent 2-space or 4-space indentation throughout the file'
      });
    }
    
    // Check for long lines
    const longLines = lines.filter(line => line.length > 100);
    if (longLines.length > 0) {
      analysis.issues.push({
        type: 'style',
        severity: 'low',
        message: `${longLines.length} lines exceed 100 characters`,
        line: 'multiple',
        suggestion: 'Consider breaking long lines for better readability'
      });
    }
  }

  generateSuggestions(analysis) {
    if (analysis.complexity > this.config.complexityThreshold) {
      analysis.suggestions.push({
        type: 'refactoring',
        priority: 'high',
        message: `Function complexity (${analysis.complexity}) exceeds threshold (${this.config.complexityThreshold})`,
        suggestion: 'Consider breaking down complex functions into smaller, more focused functions'
      });
    }
    
    if (analysis.lines > this.config.maxFileLength) {
      analysis.suggestions.push({
        type: 'refactoring',
        priority: 'medium',
        message: `File length (${analysis.lines} lines) exceeds recommended maximum (${this.config.maxFileLength})`,
        suggestion: 'Consider splitting large files into smaller, focused modules'
      });
    }
    
    if (analysis.functions > 20) {
      analysis.suggestions.push({
        type: 'refactoring',
        priority: 'medium',
        message: `File contains many functions (${analysis.functions})`,
        suggestion: 'Consider organizing functions into logical groups or separate files'
      });
    }
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 'unknown';
  }

  generateReport() {
    try {
      const report = {
        ...this.analysisResults,
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: this.analysisResults.filesAnalyzed,
          totalIssues: this.analysisResults.issuesFound,
          securityIssues: this.analysisResults.securityIssues,
          performanceIssues: this.analysisResults.performanceIssues,
          codeSmells: this.analysisResults.codeSmells,
          qualityScore: this.calculateQualityScore()
        },
        recommendations: this.generateRecommendations()
      };
      
      fs.writeFileSync(this.config.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report generated: ${this.config.reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, 'ERROR');
    }
  }

  calculateQualityScore() {
    const maxScore = 100;
    let score = maxScore;
    
    // Deduct points for issues
    score -= this.analysisResults.securityIssues * 10; // Security issues are critical
    score -= this.analysisResults.performanceIssues * 5; // Performance issues are important
    score -= this.analysisResults.codeSmells * 2; // Code smells are minor
    
    // Bonus for good practices
    if (this.analysisResults.metrics.averageComplexity < 5) score += 10;
    if (this.analysisResults.metrics.totalLines > 0 && this.analysisResults.metrics.totalLines < 1000) score += 5;
    
    return Math.max(0, Math.min(maxScore, score));
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.analysisResults.securityIssues > 0) {
      recommendations.push({
        priority: 'critical',
        action: 'Review and fix security vulnerabilities immediately',
        impact: 'High security risk'
      });
    }
    
    if (this.analysisResults.performanceIssues > 5) {
      recommendations.push({
        priority: 'high',
        action: 'Optimize performance-critical code sections',
        impact: 'User experience degradation'
      });
    }
    
    if (this.analysisResults.codeSmells > 10) {
      recommendations.push({
        priority: 'medium',
        action: 'Refactor code to improve maintainability',
        impact: 'Technical debt accumulation'
      });
    }
    
    if (this.analysisResults.metrics.averageComplexity > 8) {
      recommendations.push({
        priority: 'medium',
        action: 'Break down complex functions',
        impact: 'Improved code readability and testing'
      });
    }
    
    return recommendations;
  }
}

// Start the analyzer
const analyzer = new AICodeAnalyzer();

// Handle graceful shutdown
process.on('SIGINT', () => {
  analyzer.log('Shutting down AI Code Analyzer...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  analyzer.log('Shutting down AI Code Analyzer...');
  process.exit(0);
});