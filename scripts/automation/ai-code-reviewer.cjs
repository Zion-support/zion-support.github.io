#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeReviewer {
  constructor() {
    this.reviewLog = path.join(__dirname, '../logs', 'ai-code-review.log');
    this.ensureLogDirectory();
    this.codeQualityThresholds = {
      complexity: 10,
      maintainability: 70,
      testCoverage: 80,
      performance: 75
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reviewLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] AI Code Reviewer: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.reviewLog, logMessage);
  }

  async analyzeCodeChanges() {
    try {
      this.log('🔍 Starting AI-powered code analysis...');
      
      // Get recent git changes
      const changes = this.getRecentChanges();
      if (!changes.length) {
        this.log('📝 No recent code changes detected');
        return;
      }

      const analysisResults = [];
      
      for (const change of changes) {
        const analysis = await this.analyzeFile(change);
        if (analysis) {
          analysisResults.push(analysis);
        }
      }

      // Generate improvement suggestions
      const suggestions = this.generateSuggestions(analysisResults);
      
      // Apply automatic fixes where possible
      await this.applyAutomaticFixes(suggestions);
      
      // Generate comprehensive report
      this.generateReport(analysisResults, suggestions);
      
      this.log('✅ AI code analysis completed successfully');
      
    } catch (error) {
      this.log(`❌ AI code analysis failed: ${error.message}`);
    }
  }

  getRecentChanges() {
    try {
      const result = execSync('git diff --name-only HEAD~5', { encoding: 'utf8' });
      return result.split('\n').filter(line => line.trim() && this.isCodeFile(line));
    } catch (error) {
      this.log(`Warning: Could not get git changes: ${error.message}`);
      return [];
    }
  }

  isCodeFile(filename) {
    const codeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.py', '.java', '.cpp', '.c'];
    return codeExtensions.some(ext => filename.endsWith(ext));
  }

  async analyzeFile(filepath) {
    try {
      if (!fs.existsSync(filepath)) return null;
      
      const content = fs.readFileSync(filepath, 'utf8');
      const stats = fs.statSync(filepath);
      
      const analysis = {
        file: filepath,
        size: stats.size,
        lastModified: stats.mtime,
        complexity: this.calculateComplexity(content),
        maintainability: this.calculateMaintainability(content),
        security: this.analyzeSecurity(content),
        performance: this.analyzePerformance(content),
        bestPractices: this.checkBestPractices(content),
        suggestions: []
      };

      // Generate specific suggestions
      analysis.suggestions = this.generateFileSuggestions(analysis);
      
      return analysis;
    } catch (error) {
      this.log(`Error analyzing ${filepath}: ${error.message}`);
      return null;
    }
  }

  calculateComplexity(content) {
    // Calculate cyclomatic complexity
    const complexityIndicators = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\|/g,
      /&&/g
    ];
    
    let complexity = 1; // Base complexity
    complexityIndicators.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    return complexity;
  }

  calculateMaintainability(content) {
    // Calculate maintainability index
    const lines = content.split('\n').length;
    const functions = (content.match(/function\s+\w+|=>\s*{|class\s+\w+/g) || []).length;
    const comments = (content.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []).length;
    
    // Simple maintainability calculation
    let maintainability = 100;
    maintainability -= Math.min(lines / 10, 30); // Penalize long files
    maintainability += Math.min(comments / 5, 20); // Reward good documentation
    maintainability -= Math.min(functions * 2, 25); // Penalize too many functions
    
    return Math.max(0, Math.min(100, Math.round(maintainability)));
  }

  analyzeSecurity(content) {
    const securityIssues = [];
    
    // Check for common security vulnerabilities
    const securityPatterns = [
      { pattern: /eval\s*\(/, risk: 'high', description: 'Use of eval() can lead to code injection' },
      { pattern: /innerHTML\s*=/, risk: 'medium', description: 'innerHTML can lead to XSS attacks' },
      { pattern: /localStorage\s*\.\s*setItem/, risk: 'low', description: 'Sensitive data in localStorage' },
      { pattern: /password\s*[:=]/, risk: 'high', description: 'Hardcoded passwords detected' },
      { pattern: /api_key\s*[:=]/, risk: 'high', description: 'Hardcoded API keys detected' }
    ];
    
    securityPatterns.forEach(({ pattern, risk, description }) => {
      if (pattern.test(content)) {
        securityIssues.push({ risk, description, line: this.findLineNumber(content, pattern) });
      }
    });
    
    return securityIssues;
  }

  analyzePerformance(content) {
    const performanceIssues = [];
    
    // Check for performance anti-patterns
    const performancePatterns = [
      { pattern: /\.forEach\s*\(.*=>\s*{[\s\S]*?}\s*\)/, risk: 'low', description: 'Consider using for...of for better performance' },
      { pattern: /JSON\.parse\s*\(.*\)\s*\.\s*map/, risk: 'medium', description: 'Multiple array iterations detected' },
      { pattern: /setInterval\s*\([^,]+,\s*[0-9]+\)/, risk: 'low', description: 'Check if setInterval cleanup is handled' }
    ];
    
    performancePatterns.forEach(({ pattern, risk, description }) => {
      if (pattern.test(content)) {
        performanceIssues.push({ risk, description, line: this.findLineNumber(content, pattern) });
      }
    });
    
    return performanceIssues;
  }

  checkBestPractices(content) {
    const bestPracticeIssues = [];
    
    // Check for best practice violations
    const bestPracticePatterns = [
      { pattern: /console\.log/, risk: 'low', description: 'Console.log statements should be removed in production' },
      { pattern: /TODO:|FIXME:|HACK:/, risk: 'medium', description: 'Code markers found - review needed' },
      { pattern: /var\s+\w+/, risk: 'low', description: 'Consider using const/let instead of var' }
    ];
    
    bestPracticePatterns.forEach(({ pattern, risk, description }) => {
      if (pattern.test(content)) {
        bestPracticeIssues.push({ risk, description, line: this.findLineNumber(content, pattern) });
      }
    });
    
    return bestPracticeIssues;
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 0;
  }

  generateFileSuggestions(analysis) {
    const suggestions = [];
    
    if (analysis.complexity > this.codeQualityThresholds.complexity) {
      suggestions.push({
        type: 'refactor',
        priority: 'high',
        description: `Reduce cyclomatic complexity from ${analysis.complexity} to under ${this.codeQualityThresholds.complexity}`,
        action: 'Break down complex functions into smaller, more focused functions'
      });
    }
    
    if (analysis.maintainability < this.codeQualityThresholds.maintainability) {
      suggestions.push({
        type: 'improvement',
        priority: 'medium',
        description: `Improve maintainability from ${analysis.maintainability} to above ${this.codeQualityThresholds.maintainability}`,
        action: 'Add comments, reduce file size, improve function organization'
      });
    }
    
    analysis.security.forEach(issue => {
      suggestions.push({
        type: 'security',
        priority: issue.risk === 'high' ? 'critical' : issue.risk,
        description: issue.description,
        action: 'Review and fix security vulnerability',
        line: issue.line
      });
    });
    
    return suggestions;
  }

  generateSuggestions(analysisResults) {
    const suggestions = [];
    
    // Aggregate suggestions across all files
    analysisResults.forEach(analysis => {
      analysis.suggestions.forEach(suggestion => {
        suggestions.push({
          ...suggestion,
          file: analysis.file
        });
      });
    });
    
    // Sort by priority
    const priorityOrder = { critical: 1, high: 2, medium: 3, low: 4 };
    suggestions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    return suggestions;
  }

  async applyAutomaticFixes(suggestions) {
    this.log('🔧 Applying automatic fixes...');
    
    let fixedCount = 0;
    
    for (const suggestion of suggestions) {
      if (suggestion.type === 'best-practice' && suggestion.priority === 'low') {
        try {
          await this.applyFix(suggestion);
          fixedCount++;
        } catch (error) {
          this.log(`Failed to apply fix for ${suggestion.file}: ${error.message}`);
        }
      }
    }
    
    this.log(`✅ Applied ${fixedCount} automatic fixes`);
  }

  async applyFix(suggestion) {
    // Example: Remove console.log statements
    if (suggestion.description.includes('Console.log statements')) {
      const content = fs.readFileSync(suggestion.file, 'utf8');
      const cleanedContent = content.replace(/console\.log\([^)]*\);?\s*/g, '');
      fs.writeFileSync(suggestion.file, cleanedContent);
      this.log(`Removed console.log statements from ${suggestion.file}`);
    }
  }

  generateReport(analysisResults, suggestions) {
    const report = {
      timestamp: new Date().toISOString(),
      filesAnalyzed: analysisResults.length,
      totalSuggestions: suggestions.length,
      criticalIssues: suggestions.filter(s => s.priority === 'critical').length,
      highPriorityIssues: suggestions.filter(s => s.priority === 'high').length,
      analysisResults,
      suggestions
    };
    
    const reportPath = path.join(__dirname, '../reports', 'ai-code-review-report.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Generated AI code review report: ${reportPath}`);
  }
}

// Main execution
const reviewer = new AICodeReviewer();
reviewer.analyzeCodeChanges().catch(console.error);