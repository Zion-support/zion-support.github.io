#!/usr/bin/env node

/**
 * AI-Powered Code Analyzer - PM2 Automation
 * Intelligently analyzes code, detects issues, and automatically fixes them
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');
const glob = require('glob');

class AICodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-analyzer.log');
    this.analysisResults = path.join(this.projectRoot, 'logs', 'ai-analysis-results.json');
    this.fixesApplied = path.join(this.projectRoot, 'logs', 'ai-fixes-applied.json');
    this.performanceMetrics = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    this.ensureLogsDirectory();
    
    this.codePatterns = {
      performance: [
        { pattern: /useEffect\(\(\) => \{[^}]*\}, \[\]\)/, issue: 'Empty dependency array in useEffect', fix: 'Review dependencies' },
        { pattern: /\.map\([^)]*\)\.filter\([^)]*\)/, issue: 'Chained array methods can be optimized', fix: 'Use reduce or single loop' },
        { pattern: /new Date\(\)/, issue: 'Creating new Date objects in render', fix: 'Move outside component or use useMemo' },
        { pattern: /console\.log\(/, issue: 'Console logs in production code', fix: 'Remove or use proper logging' },
        { pattern: /useState\(null\)/, issue: 'Uninitialized state', fix: 'Provide proper initial value' }
      ],
      security: [
        { pattern: /dangerouslySetInnerHTML/, issue: 'Potential XSS vulnerability', fix: 'Sanitize HTML content' },
        { pattern: /eval\(/, issue: 'Code injection vulnerability', fix: 'Use safer alternatives' },
        { pattern: /innerHTML\s*=/, issue: 'Potential XSS vulnerability', fix: 'Use textContent or sanitize' }
      ],
      quality: [
        { pattern: /TODO:|FIXME:|HACK:/, issue: 'Code markers found', fix: 'Address or remove markers' },
        { pattern: /[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*&&\s*[a-zA-Z_$][a-zA-Z0-9_$]*/, issue: 'Complex boolean logic', fix: 'Simplify or extract to variable' },
        { pattern: /function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/, issue: 'Long function detected', fix: 'Break into smaller functions' }
      ]
    };
    
    this.analysisHistory = [];
    this.fixesHistory = [];
    this.performanceHistory = [];
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

  async analyzeCodebase() {
    this.log('Starting AI-powered code analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      performance: await this.analyzePerformance(),
      security: await this.analyzeSecurity(),
      quality: await this.analyzeCodeQuality(),
      suggestions: await this.generateSuggestions(),
      autoFixes: await this.applyAutoFixes()
    };

    this.analysisHistory.push(analysis);
    await this.saveAnalysisResults(analysis);
    
    this.log(`Analysis completed. Found ${analysis.performance.issues.length + analysis.security.issues.length + analysis.quality.issues.length} issues`);
    
    return analysis;
  }

  async analyzePerformance() {
    this.log('Analyzing performance patterns...');
    
    const issues = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        for (const pattern of this.codePatterns.performance) {
          if (pattern.pattern.test(line)) {
            issues.push({
              file,
              line: i + 1,
              issue: pattern.issue,
              suggestion: pattern.fix,
              severity: 'MEDIUM',
              code: line.trim()
            });
          }
        }
      }
    }

    return { issues, score: this.calculatePerformanceScore(issues) };
  }

  async analyzeSecurity() {
    this.log('Analyzing security patterns...');
    
    const issues = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        for (const pattern of this.codePatterns.security) {
          if (pattern.pattern.test(line)) {
            issues.push({
              file,
              line: i + 1,
              issue: pattern.issue,
              suggestion: pattern.fix,
              severity: 'HIGH',
              code: line.trim()
            });
          }
        }
      }
    }

    return { issues, score: this.calculateSecurityScore(issues) };
  }

  async analyzeCodeQuality() {
    this.log('Analyzing code quality...');
    
    const issues = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        for (const pattern of this.codePatterns.quality) {
          if (pattern.pattern.test(line)) {
            issues.push({
              file,
              line: i + 1,
              issue: pattern.issue,
              suggestion: pattern.fix,
              severity: 'LOW',
              code: line.trim()
            });
          }
        }
      }
    }

    return { issues, score: this.calculateQualityScore(issues) };
  }

  async generateSuggestions() {
    this.log('Generating intelligent suggestions...');
    
    const suggestions = [];
    const files = this.getSourceFiles();
    
    // Analyze file sizes and complexity
    for (const file of files) {
      const stats = fs.statSync(file);
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      if (lines.length > 300) {
        suggestions.push({
          type: 'FILE_SIZE',
          file,
          message: 'File is quite large, consider breaking it into smaller modules',
          priority: 'MEDIUM'
        });
      }
      
      if (this.calculateComplexity(content) > 10) {
        suggestions.push({
          type: 'COMPLEXITY',
          file,
          message: 'High cyclomatic complexity detected, consider refactoring',
          priority: 'HIGH'
        });
      }
    }

    return suggestions;
  }

  async applyAutoFixes() {
    this.log('Applying automatic fixes...');
    
    const fixes = [];
    const files = this.getSourceFiles();
    
    for (const file of files) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Auto-fix console.log statements
      if (content.includes('console.log(')) {
        const originalContent = content;
        content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
        if (content !== originalContent) {
          modified = true;
          fixes.push({
            file,
            type: 'REMOVE_CONSOLE_LOGS',
            description: 'Removed console.log statements'
          });
        }
      }
      
      // Auto-fix TODO comments
      if (content.includes('TODO:')) {
        const originalContent = content;
        content = content.replace(/\/\/\s*TODO:.*$/gm, '');
        if (content !== originalContent) {
          modified = true;
          fixes.push({
            file,
            type: 'REMOVE_TODO_COMMENTS',
            description: 'Removed TODO comments'
          });
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
      }
    }

    return fixes;
  }

  getSourceFiles() {
    const patterns = [
      'src/**/*.{js,ts,tsx,jsx}',
      'pages/**/*.{js,ts,tsx,jsx}',
      'components/**/*.{js,ts,tsx,jsx}',
      'utils/**/*.{js,ts,tsx,jsx}'
    ];
    
    const files = [];
    for (const pattern of patterns) {
      try {
        const matches = glob.sync(pattern, { cwd: this.projectRoot, absolute: true });
        files.push(...matches);
      } catch (error) {
        this.log(`Error finding files with pattern ${pattern}: ${error.message}`, 'WARN');
      }
    }
    
    return files;
  }

  calculatePerformanceScore(issues) {
    const totalIssues = issues.length;
    if (totalIssues === 0) return 100;
    if (totalIssues <= 5) return 90;
    if (totalIssues <= 10) return 80;
    if (totalIssues <= 20) return 70;
    return Math.max(50, 100 - totalIssues * 2);
  }

  calculateSecurityScore(issues) {
    const highSeverity = issues.filter(i => i.severity === 'HIGH').length;
    const mediumSeverity = issues.filter(i => i.severity === 'MEDIUM').length;
    
    let score = 100;
    score -= highSeverity * 15;
    score -= mediumSeverity * 5;
    
    return Math.max(0, score);
  }

  calculateQualityScore(issues) {
    const totalIssues = issues.length;
    if (totalIssues === 0) return 100;
    if (totalIssues <= 10) return 90;
    if (totalIssues <= 25) return 80;
    if (totalIssues <= 50) return 70;
    return Math.max(50, 100 - totalIssues);
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count conditional statements
    complexity += (content.match(/if\s*\(/g) || []).length;
    complexity += (content.match(/else\s*if\s*\(/g) || []).length;
    complexity += (content.match(/switch\s*\(/g) || []).length;
    complexity += (content.match(/case\s+/g) || []).length;
    complexity += (content.match(/\|\|/g) || []).length;
    complexity += (content.match(/&&/g) || []).length;
    
    return complexity;
  }

  async saveAnalysisResults(analysis) {
    try {
      fs.writeFileSync(this.analysisResults, JSON.stringify(analysis, null, 2));
      this.log('Analysis results saved');
    } catch (error) {
      this.log(`Failed to save analysis results: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const latestAnalysis = this.analysisHistory[this.analysisHistory.length - 1];
    if (!latestAnalysis) return;
    
    const report = {
      summary: {
        totalIssues: latestAnalysis.performance.issues.length + 
                    latestAnalysis.security.issues.length + 
                    latestAnalysis.quality.issues.length,
        performanceScore: latestAnalysis.performance.score,
        securityScore: latestAnalysis.security.score,
        qualityScore: latestAnalysis.quality.score,
        overallScore: Math.round((latestAnalysis.performance.score + 
                                latestAnalysis.security.score + 
                                latestAnalysis.quality.score) / 3)
      },
      recommendations: this.generateRecommendations(latestAnalysis),
      trends: this.analyzeTrends()
    };
    
    return report;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.performance.score < 80) {
      recommendations.push({
        priority: 'HIGH',
        category: 'PERFORMANCE',
        message: 'Focus on optimizing performance-critical code sections'
      });
    }
    
    if (analysis.security.score < 90) {
      recommendations.push({
        priority: 'CRITICAL',
        category: 'SECURITY',
        message: 'Address security vulnerabilities immediately'
      });
    }
    
    if (analysis.quality.score < 75) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'QUALITY',
        message: 'Improve code quality through refactoring'
      });
    }
    
    return recommendations;
  }

  analyzeTrends() {
    if (this.analysisHistory.length < 2) return { trend: 'INSUFFICIENT_DATA' };
    
    const recent = this.analysisHistory[this.analysisHistory.length - 1];
    const previous = this.analysisHistory[this.analysisHistory.length - 2];
    
    const performanceTrend = recent.performance.score - previous.performance.score;
    const securityTrend = recent.security.score - previous.security.score;
    const qualityTrend = recent.quality.score - previous.quality.score;
    
    return {
      performance: performanceTrend > 0 ? 'IMPROVING' : performanceTrend < 0 ? 'DECLINING' : 'STABLE',
      security: securityTrend > 0 ? 'IMPROVING' : securityTrend < 0 ? 'DECLINING' : 'STABLE',
      quality: qualityTrend > 0 ? 'IMPROVING' : qualityTrend < 0 ? 'DECLINING' : 'STABLE'
    };
  }

  async run() {
    try {
      this.log('AI Code Analyzer started');
      
      // Run analysis
      const analysis = await this.analyzeCodebase();
      
      // Generate and display report
      const report = await this.generateReport();
      this.log(`Analysis Report: Overall Score: ${report.summary.overallScore}/100`);
      
      // Schedule next analysis
      setTimeout(() => this.run(), 1800000); // 30 minutes
      
    } catch (error) {
      this.log(`AI Code Analyzer failed: ${error.message}`, 'ERROR');
      setTimeout(() => this.run(), 300000); // 5 minutes on error
    }
  }
}

// Start the AI Code Analyzer
const analyzer = new AICodeAnalyzer();
analyzer.run();