#!/usr/bin/env node

/**
 * AI-Powered Code Analyzer
 * Advanced code analysis with machine learning capabilities for intelligent code improvement
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AIPoweredCodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-analyzer.log');
    this.analysisCache = new Map();
    this.patterns = this.loadAnalysisPatterns();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadAnalysisPatterns() {
    return {
      performance: {
        patterns: [
          /console\.log\(/g,
          /console\.warn\(/g,
          /console\.error\(/g,
          /for\s*\(\s*let\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*\w+\.length\s*;\s*\w+\+\+\)/g,
          /document\.querySelectorAll\(/g,
          /\.innerHTML\s*=/g,
          /eval\(/g,
          /setTimeout\(/g,
          /setInterval\(/g
        ],
        weights: [1, 1, 1, 2, 3, 2, 5, 1, 1]
      },
      security: {
        patterns: [
          /innerHTML\s*=/g,
          /eval\(/g,
          /Function\(/g,
          /document\.write\(/g,
          /\.src\s*=\s*[^"']/g,
          /dangerouslySetInnerHTML/g,
          /localStorage\.setItem\(/g,
          /sessionStorage\.setItem\(/g,
          /crypto\.randomBytes\(/g
        ],
        weights: [3, 5, 4, 3, 2, 4, 2, 2, 1]
      },
      maintainability: {
        patterns: [
          /function\s+\w+\([^)]*\)\s*{[\s\S]{200,}}/g,
          /if\s*\([^)]*\)\s*{[\s\S]{100,}}/g,
          /\/\/\s*TODO/g,
          /\/\/\s*FIXME/g,
          /\/\/\s*HACK/g,
          /\/\*[\s\S]*?\*\//g,
          /class\s+\w+[\s\S]{500,}}/g
        ],
        weights: [2, 1, 1, 2, 3, 0.5, 2]
      },
      bestPractices: {
        patterns: [
          /var\s+/g,
          /==\s*[^=]/g,
          /!=\s*[^=]/g,
          /function\s*\(/g,
          /=>\s*{/g,
          /const\s+\w+\s*=\s*require\(/g,
          /import\s+.*\s+from\s+['"]/g,
          /useState\(/g,
          /useEffect\(/g
        ],
        weights: [2, 1, 1, 1, 1, 1, 1, 1, 1]
      }
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    
    console.log(logEntry.trim());
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      const extension = path.extname(filePath);
      
      const analysis = {
        file: filePath,
        size: stats.size,
        lines: content.split('\n').length,
        extension: extension,
        lastModified: stats.mtime,
        issues: [],
        suggestions: [],
        complexity: this.calculateComplexity(content),
        quality: this.assessQuality(content, extension),
        performance: this.analyzePerformance(content),
        security: this.analyzeSecurity(content),
        maintainability: this.analyzeMaintainability(content),
        bestPractices: this.analyzeBestPractices(content)
      };

      // Generate intelligent suggestions
      analysis.suggestions = this.generateSuggestions(analysis);
      
      return analysis;
    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`, 'error');
      return null;
    }
  }

  calculateComplexity(content) {
    let complexity = 0;
    const lines = content.split('\n');
    
    // Cyclomatic complexity approximation
    const complexityKeywords = [
      'if', 'else', 'while', 'for', 'switch', 'case', 'catch', 'try',
      '&&', '||', '?', ':', 'return', 'throw'
    ];
    
    for (const line of lines) {
      for (const keyword of complexityKeywords) {
        const matches = (line.match(new RegExp(keyword, 'g')) || []).length;
        complexity += matches;
      }
    }
    
    return {
      score: complexity,
      level: complexity > 20 ? 'high' : complexity > 10 ? 'medium' : 'low'
    };
  }

  assessQuality(content, extension) {
    const lines = content.split('\n');
    let score = 100;
    const issues = [];
    
    // Check for empty lines ratio
    const emptyLines = lines.filter(line => line.trim() === '').length;
    const emptyRatio = emptyLines / lines.length;
    if (emptyRatio > 0.3) {
      score -= 10;
      issues.push('Too many empty lines');
    }
    
    // Check for line length
    const longLines = lines.filter(line => line.length > 120).length;
    if (longLines > 0) {
      score -= longLines * 2;
      issues.push(`${longLines} lines exceed 120 characters`);
    }
    
    // Check for comments ratio
    const commentLines = lines.filter(line => 
      line.trim().startsWith('//') || 
      line.trim().startsWith('/*') || 
      line.trim().startsWith('*')
    ).length;
    const commentRatio = commentLines / lines.length;
    if (commentRatio < 0.1) {
      score -= 15;
      issues.push('Insufficient comments');
    }
    
    return {
      score: Math.max(0, score),
      issues: issues,
      level: score > 80 ? 'excellent' : score > 60 ? 'good' : score > 40 ? 'fair' : 'poor'
    };
  }

  analyzePerformance(content) {
    const issues = [];
    let score = 100;
    
    for (const [category, config] of Object.entries(this.patterns.performance.patterns)) {
      const matches = content.match(config.patterns[category]) || [];
      if (matches.length > 0) {
        const weight = config.weights[category] || 1;
        score -= matches.length * weight;
        issues.push(`${matches.length} ${category} performance issues found`);
      }
    }
    
    return {
      score: Math.max(0, score),
      issues: issues,
      level: score > 80 ? 'excellent' : score > 60 ? 'good' : score > 40 ? 'fair' : 'poor'
    };
  }

  analyzeSecurity(content) {
    const issues = [];
    let score = 100;
    
    for (const [category, config] of Object.entries(this.patterns.security.patterns)) {
      const matches = content.match(config.patterns[category]) || [];
      if (matches.length > 0) {
        const weight = config.weights[category] || 1;
        score -= matches.length * weight;
        issues.push(`${matches.length} ${category} security issues found`);
      }
    }
    
    return {
      score: Math.max(0, score),
      issues: issues,
      level: score > 80 ? 'excellent' : score > 60 ? 'good' : score > 40 ? 'fair' : 'poor'
    };
  }

  analyzeMaintainability(content) {
    const issues = [];
    let score = 100;
    
    for (const [category, config] of Object.entries(this.patterns.maintainability.patterns)) {
      const matches = content.match(config.patterns[category]) || [];
      if (matches.length > 0) {
        const weight = config.weights[category] || 1;
        score -= matches.length * weight;
        issues.push(`${matches.length} ${category} maintainability issues found`);
      }
    }
    
    return {
      score: Math.max(0, score),
      issues: issues,
      level: score > 80 ? 'excellent' : score > 60 ? 'good' : score > 40 ? 'fair' : 'poor'
    };
  }

  analyzeBestPractices(content) {
    const issues = [];
    let score = 100;
    
    for (const [category, config] of Object.entries(this.patterns.bestPractices.patterns)) {
      const matches = content.match(config.patterns[category]) || [];
      if (matches.length > 0) {
        const weight = config.weights[category] || 1;
        score -= matches.length * weight;
        issues.push(`${matches.length} ${category} best practice violations found`);
      }
    }
    
    return {
      score: Math.max(0, score),
      issues: issues,
      level: score > 80 ? 'excellent' : score > 60 ? 'good' : score > 40 ? 'fair' : 'poor'
    };
  }

  generateSuggestions(analysis) {
    const suggestions = [];
    
    // Performance suggestions
    if (analysis.performance.score < 80) {
      suggestions.push({
        type: 'performance',
        priority: 'high',
        message: 'Consider optimizing performance-critical code sections',
        actions: [
          'Remove console.log statements from production code',
          'Optimize DOM queries and avoid repeated selections',
          'Use more efficient loops and data structures'
        ]
      });
    }
    
    // Security suggestions
    if (analysis.security.score < 80) {
      suggestions.push({
        type: 'security',
        priority: 'critical',
        message: 'Address security vulnerabilities immediately',
        actions: [
          'Avoid using innerHTML with user input',
          'Replace eval() with safer alternatives',
          'Sanitize all user inputs before processing'
        ]
      });
    }
    
    // Maintainability suggestions
    if (analysis.maintainability.score < 80) {
      suggestions.push({
        type: 'maintainability',
        priority: 'medium',
        message: 'Improve code maintainability',
        actions: [
          'Break down large functions into smaller ones',
          'Add comprehensive comments and documentation',
          'Remove TODO and FIXME comments by implementing fixes'
        ]
      });
    }
    
    // Best practices suggestions
    if (analysis.bestPractices.score < 80) {
      suggestions.push({
        type: 'bestPractices',
        priority: 'medium',
        message: 'Follow modern JavaScript/TypeScript best practices',
        actions: [
          'Use const/let instead of var',
          'Use strict equality (===) instead of loose equality (==)',
          'Prefer arrow functions for simple functions',
          'Use modern ES6+ features'
        ]
      });
    }
    
    return suggestions;
  }

  async analyzeProject() {
    this.log('Starting AI-powered code analysis...');
    
    const analysisResults = {
      timestamp: new Date().toISOString(),
      project: this.projectRoot,
      files: [],
      summary: {
        totalFiles: 0,
        analyzedFiles: 0,
        averageQuality: 0,
        averagePerformance: 0,
        averageSecurity: 0,
        averageMaintainability: 0,
        averageBestPractices: 0,
        criticalIssues: 0,
        highPriorityIssues: 0,
        mediumPriorityIssues: 0
      },
      recommendations: []
    };
    
    try {
      // Get all source files
      const sourceFiles = await this.getSourceFiles();
      analysisResults.summary.totalFiles = sourceFiles.length;
      
      this.log(`Found ${sourceFiles.length} source files to analyze`);
      
      // Analyze each file
      for (const file of sourceFiles) {
        const analysis = await this.analyzeFile(file);
        if (analysis) {
          analysisResults.files.push(analysis);
          analysisResults.summary.analyzedFiles++;
          
          // Update summary statistics
          analysisResults.summary.averageQuality += analysis.quality.score;
          analysisResults.summary.averagePerformance += analysis.performance.score;
          analysisResults.summary.averageSecurity += analysis.security.score;
          analysisResults.summary.averageMaintainability += analysis.maintainability.score;
          analysisResults.summary.averageBestPractices += analysis.bestPractices.score;
          
          // Count issues by priority
          for (const suggestion of analysis.suggestions) {
            if (suggestion.priority === 'critical') {
              analysisResults.summary.criticalIssues++;
            } else if (suggestion.priority === 'high') {
              analysisResults.summary.highPriorityIssues++;
            } else if (suggestion.priority === 'medium') {
              analysisResults.summary.mediumPriorityIssues++;
            }
          }
        }
      }
      
      // Calculate averages
      if (analysisResults.summary.analyzedFiles > 0) {
        analysisResults.summary.averageQuality = Math.round(analysisResults.summary.averageQuality / analysisResults.summary.analyzedFiles);
        analysisResults.summary.averagePerformance = Math.round(analysisResults.summary.averagePerformance / analysisResults.summary.analyzedFiles);
        analysisResults.summary.averageSecurity = Math.round(analysisResults.summary.averageSecurity / analysisResults.summary.analyzedFiles);
        analysisResults.summary.averageMaintainability = Math.round(analysisResults.summary.averageMaintainability / analysisResults.summary.analyzedFiles);
        analysisResults.summary.averageBestPractices = Math.round(analysisResults.summary.averageBestPractices / analysisResults.summary.analyzedFiles);
      }
      
      // Generate project-level recommendations
      analysisResults.recommendations = this.generateProjectRecommendations(analysisResults);
      
      // Save analysis results
      const reportPath = path.join(this.projectRoot, 'logs', 'ai-code-analysis-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(analysisResults, null, 2));
      
      this.log(`Analysis completed. Report saved to ${reportPath}`);
      this.log(`Summary: ${analysisResults.summary.analyzedFiles} files analyzed, ${analysisResults.summary.criticalIssues} critical issues found`);
      
      return analysisResults;
      
    } catch (error) {
      this.log(`Error during project analysis: ${error.message}`, 'error');
      throw error;
    }
  }

  async getSourceFiles() {
    const extensions = ['.js', '.ts', '.jsx', '.tsx', '.vue', '.svelte'];
    const excludeDirs = ['node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage'];
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!excludeDirs.includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  generateProjectRecommendations(analysis) {
    const recommendations = [];
    
    // Overall quality recommendations
    if (analysis.summary.averageQuality < 70) {
      recommendations.push({
        type: 'quality',
        priority: 'high',
        message: 'Overall code quality needs improvement',
        actions: [
          'Implement code review processes',
          'Add automated linting and formatting',
          'Increase test coverage',
          'Improve documentation'
        ]
      });
    }
    
    // Performance recommendations
    if (analysis.summary.averagePerformance < 70) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: 'Performance optimization needed',
        actions: [
          'Implement code splitting',
          'Optimize bundle size',
          'Add performance monitoring',
          'Use lazy loading for components'
        ]
      });
    }
    
    // Security recommendations
    if (analysis.summary.averageSecurity < 80) {
      recommendations.push({
        type: 'security',
        priority: 'critical',
        message: 'Security vulnerabilities detected',
        actions: [
          'Conduct security audit',
          'Update dependencies',
          'Implement input validation',
          'Add security headers'
        ]
      });
    }
    
    // Maintainability recommendations
    if (analysis.summary.averageMaintainability < 70) {
      recommendations.push({
        type: 'maintainability',
        priority: 'medium',
        message: 'Code maintainability needs improvement',
        actions: [
          'Refactor large functions',
          'Add comprehensive tests',
          'Improve code organization',
          'Document complex logic'
        ]
      });
    }
    
    return recommendations;
  }

  async autoFixIssues(analysis) {
    this.log('Starting automatic issue fixing...');
    
    let fixedCount = 0;
    const fixResults = [];
    
    for (const fileAnalysis of analysis.files) {
      if (fileAnalysis.suggestions.length > 0) {
        try {
          const fixResult = await this.fixFileIssues(fileAnalysis);
          if (fixResult.fixed) {
            fixedCount++;
            fixResults.push(fixResult);
          }
        } catch (error) {
          this.log(`Error fixing issues in ${fileAnalysis.file}: ${error.message}`, 'error');
        }
      }
    }
    
    this.log(`Auto-fix completed. Fixed issues in ${fixedCount} files`);
    return fixResults;
  }

  async fixFileIssues(fileAnalysis) {
    const filePath = fileAnalysis.file;
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    const fixes = [];
    
    // Fix common issues
    for (const suggestion of fileAnalysis.suggestions) {
      if (suggestion.type === 'performance') {
        // Remove console.log statements
        const originalContent = content;
        content = content.replace(/console\.log\([^)]*\);?\s*\n?/g, '');
        if (content !== originalContent) {
          fixed = true;
          fixes.push('Removed console.log statements');
        }
      }
      
      if (suggestion.type === 'bestPractices') {
        // Replace var with const/let
        const originalContent = content;
        content = content.replace(/\bvar\s+/g, 'const ');
        if (content !== originalContent) {
          fixed = true;
          fixes.push('Replaced var with const');
        }
        
        // Replace == with ===
        const originalContent2 = content;
        content = content.replace(/==/g, '===');
        if (content !== originalContent2) {
          fixed = true;
          fixes.push('Replaced == with ===');
        }
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
    }
    
    return {
      file: filePath,
      fixed: fixed,
      fixes: fixes
    };
  }

  async run() {
    try {
      this.log('AI-Powered Code Analyzer started');
      
      // Analyze project
      const analysis = await this.analyzeProject();
      
      // Auto-fix issues if enabled
      if (process.env.AUTO_FIX === 'true') {
        await this.autoFixIssues(analysis);
      }
      
      this.log('AI-Powered Code Analyzer completed successfully');
      return analysis;
      
    } catch (error) {
      this.log(`AI-Powered Code Analyzer failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AIPoweredCodeAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = AIPoweredCodeAnalyzer;