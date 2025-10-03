#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = new Map();
    this.codePatterns = new Map();
    this.improvementSuggestions = new Map();
    this.logFile = path.join(__dirname, 'logs', 'ai-analyzer.log');
    this.ensureLogDirectory();
    this.loadCodePatterns();
    this.setupFileWatcher();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadCodePatterns() {
    // Load predefined code patterns and best practices
    this.codePatterns.set('react-hooks', {
      pattern: /use[A-Z][a-zA-Z]*/g,
      description: 'React Hooks usage patterns',
      bestPractices: [
        'Always call hooks at the top level',
        'Don\'t call hooks inside loops, conditions, or nested functions',
        'Only call hooks from React function components or custom hooks'
      ]
    });

    this.codePatterns.set('typescript-types', {
      pattern: /: [A-Z][a-zA-Z]*[<>\[\]{}]*/g,
      description: 'TypeScript type annotations',
      bestPractices: [
        'Use specific types instead of any',
        'Leverage union types for better type safety',
        'Use interfaces for object shapes'
      ]
    });

    this.codePatterns.set('performance-anti-patterns', {
      pattern: /\.map\(.*\)\.filter\(.*\)|\.filter\(.*\)\.map\(.*\)/g,
      description: 'Performance anti-patterns',
      bestPractices: [
        'Combine map and filter operations',
        'Use reduce for multiple array operations',
        'Avoid unnecessary array iterations'
      ]
    });

    this.codePatterns.set('security-patterns', {
      pattern: /innerHTML|eval\(|document\.write|setTimeout\(.*\)/g,
      description: 'Security vulnerabilities',
      bestPractices: [
        'Avoid innerHTML for user input',
        'Never use eval()',
        'Sanitize all user inputs',
        'Use Content Security Policy'
      ]
    });
  }

  setupFileWatcher() {
    const watcher = chokidar.watch([
      'src/**/*.{js,jsx,ts,tsx}',
      'server/**/*.{js,ts}',
      'components/**/*.{js,jsx,ts,tsx}'
    ], {
      ignored: /(node_modules|\.git|dist|build)/,
      persistent: true
    });

    watcher
      .on('add', (filePath) => this.analyzeFile(filePath))
      .on('change', (filePath) => this.analyzeFile(filePath))
      .on('unlink', (filePath) => this.removeFileAnalysis(filePath));

    this.log('🔍 File watcher initialized for AI code analysis');
  }

  async analyzeFile(filePath) {
    try {
      this.log(`🔍 Analyzing file: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const analysis = await this.performAnalysis(content, filePath);
      
      this.analysisResults.set(filePath, {
        ...analysis,
        lastAnalyzed: new Date().toISOString(),
        fileSize: content.length,
        lines: content.split('\n').length
      });

      this.generateSuggestions(filePath, analysis);
      this.saveAnalysisReport();
      
      this.log(`✅ Analysis completed for: ${filePath}`);
    } catch (error) {
      this.log(`❌ Error analyzing ${filePath}: ${error.message}`);
    }
  }

  async performAnalysis(content, filePath) {
    const analysis = {
      complexity: this.calculateComplexity(content),
      maintainability: this.calculateMaintainability(content),
      security: this.analyzeSecurity(content),
      performance: this.analyzePerformance(content),
      patterns: this.detectPatterns(content),
      suggestions: []
    };

    // AI-powered suggestions based on analysis
    analysis.suggestions = this.generateAISuggestions(analysis, content);
    
    return analysis;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Cyclomatic complexity calculation
    const patterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\||&&/g
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });

    return complexity;
  }

  calculateMaintainability(content) {
    let score = 100;
    
    // Reduce score based on various factors
    const longLines = content.split('\n').filter(line => line.length > 120).length;
    const longFunctions = (content.match(/function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/gs) || []).length;
    const deepNesting = (content.match(/\{\s*\{/g) || []).length;
    
    score -= longLines * 2;
    score -= longFunctions * 5;
    score -= deepNesting * 3;
    
    return Math.max(0, score);
  }

  analyzeSecurity(content) {
    const securityIssues = [];
    
    // Check for common security vulnerabilities
    if (content.includes('innerHTML')) {
      securityIssues.push({
        type: 'XSS',
        severity: 'high',
        description: 'innerHTML usage detected - potential XSS vulnerability',
        recommendation: 'Use textContent or sanitize input'
      });
    }

    if (content.includes('eval(')) {
      securityIssues.push({
        type: 'Code Injection',
        severity: 'critical',
        description: 'eval() usage detected - critical security risk',
        recommendation: 'Remove eval() usage completely'
      });
    }

    if (content.includes('localStorage.setItem')) {
      securityIssues.push({
        type: 'Data Storage',
        severity: 'medium',
        description: 'localStorage usage detected - ensure sensitive data is not stored',
        recommendation: 'Review data being stored in localStorage'
      });
    }

    return securityIssues;
  }

  analyzePerformance(content) {
    const performanceIssues = [];
    
    // Check for performance anti-patterns
    if (content.includes('.map(') && content.includes('.filter(')) {
      performanceIssues.push({
        type: 'Array Operations',
        severity: 'medium',
        description: 'Multiple array iterations detected',
        recommendation: 'Combine map and filter operations using reduce'
      });
    }

    if (content.includes('setInterval') || content.includes('setTimeout')) {
      performanceIssues.push({
        type: 'Timers',
        severity: 'low',
        description: 'Timer usage detected',
        recommendation: 'Ensure timers are properly cleaned up'
      });
    }

    return performanceIssues;
  }

  detectPatterns(content) {
    const detectedPatterns = [];
    
    for (const [name, pattern] of this.codePatterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        detectedPatterns.push({
          name,
          description: pattern.description,
          count: matches.length,
          bestPractices: pattern.bestPractices
        });
      }
    }
    
    return detectedPatterns;
  }

  generateAISuggestions(analysis, content) {
    const suggestions = [];
    
    // Complexity-based suggestions
    if (analysis.complexity > 10) {
      suggestions.push({
        type: 'complexity',
        priority: 'high',
        description: 'High cyclomatic complexity detected',
        recommendation: 'Consider breaking down complex functions into smaller, more manageable pieces',
        code: '// Example: Split large function\nfunction processData(data) {\n  // Break into smaller functions\n  const validated = validateData(data);\n  const processed = processValidatedData(validated);\n  return processed;\n}'
      });
    }

    // Maintainability suggestions
    if (analysis.maintainability < 50) {
      suggestions.push({
        type: 'maintainability',
        priority: 'medium',
        description: 'Low maintainability score',
        recommendation: 'Improve code structure, reduce nesting, and add documentation',
        code: '// Add JSDoc comments\n/**\n * Process user data with validation\n * @param {UserData} data - User input data\n * @returns {ProcessedData} - Validated and processed data\n */'
      });
    }

    // Security suggestions
    if (analysis.security.length > 0) {
      analysis.security.forEach(issue => {
        suggestions.push({
          type: 'security',
          priority: issue.severity === 'critical' ? 'critical' : 'high',
          description: issue.description,
          recommendation: issue.recommendation,
          code: this.generateSecurityFix(issue.type)
        });
      });
    }

    // Performance suggestions
    if (analysis.performance.length > 0) {
      analysis.performance.forEach(issue => {
        suggestions.push({
          type: 'performance',
          priority: 'medium',
          description: issue.description,
          recommendation: issue.recommendation,
          code: this.generatePerformanceFix(issue.type)
        });
      });
    }

    return suggestions;
  }

  generateSecurityFix(issueType) {
    const fixes = {
      'XSS': '// Instead of innerHTML\nconst safeContent = document.createElement(\'div\');\nsafeContent.textContent = userInput;\nelement.appendChild(safeContent);',
      'Code Injection': '// Remove eval() completely\n// Use JSON.parse() for safe data parsing\nconst data = JSON.parse(safeString);',
      'Data Storage': '// Review localStorage usage\n// Only store non-sensitive data\nlocalStorage.setItem(\'theme\', userTheme); // OK\n// localStorage.setItem(\'token\', authToken); // NOT OK'
    };
    
    return fixes[issueType] || '// Review security implications';
  }

  generatePerformanceFix(issueType) {
    const fixes = {
      'Array Operations': '// Combine operations\nconst result = data.reduce((acc, item) => {\n  if (item.active) {\n    acc.push(transformItem(item));\n  }\n  return acc;\n}, []);',
      'Timers': '// Clean up timers\nconst timer = setInterval(() => {\n  // ...\n}, 1000);\n\n// Clean up on component unmount\nreturn () => clearInterval(timer);'
    };
    
    return fixes[issueType] || '// Review performance implications';
  }

  generateSuggestions(filePath, analysis) {
    const fileSuggestions = this.improvementSuggestions.get(filePath) || [];
    
    analysis.suggestions.forEach(suggestion => {
      if (!fileSuggestions.find(s => s.description === suggestion.description)) {
        fileSuggestions.push(suggestion);
      }
    });
    
    this.improvementSuggestions.set(filePath, fileSuggestions);
  }

  removeFileAnalysis(filePath) {
    this.analysisResults.delete(filePath);
    this.improvementSuggestions.delete(filePath);
    this.log(`🗑️ Removed analysis for: ${filePath}`);
  }

  saveAnalysisReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: this.analysisResults.size,
      summary: {
        highComplexity: 0,
        lowMaintainability: 0,
        securityIssues: 0,
        performanceIssues: 0
      },
      files: Array.from(this.analysisResults.entries()).map(([file, analysis]) => ({
        file,
        ...analysis
      }))
    };

    // Calculate summary
    report.files.forEach(file => {
      if (file.complexity > 10) report.summary.highComplexity++;
      if (file.maintainability < 50) report.summary.lowMaintainability++;
      if (file.security.length > 0) report.summary.securityIssues++;
      if (file.performance.length > 0) report.summary.performanceIssues++;
    });

    const reportPath = path.join(__dirname, 'logs', 'ai-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 AI analysis report saved: ${reportPath}`);
  }

  async startContinuousAnalysis() {
    this.log('🚀 Starting AI Code Analyzer in continuous mode...');
    
    // Initial analysis of existing files
    const files = [
      ...this.getFilesRecursively('src'),
      ...this.getFilesRecursively('server'),
      ...this.getFilesRecursively('components')
    ];

    for (const file of files) {
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        await this.analyzeFile(file);
      }
    }

    // Schedule periodic analysis
    setInterval(() => {
      this.log('🔄 Running periodic AI code analysis...');
      this.saveAnalysisReport();
    }, 300000); // Every 5 minutes

    this.log('✅ AI Code Analyzer running continuously');
  }

  getFilesRecursively(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  getStatus() {
    return {
      running: true,
      filesAnalyzed: this.analysisResults.size,
      totalSuggestions: Array.from(this.improvementSuggestions.values())
        .flat().length,
      lastReport: new Date().toISOString()
    };
  }
}

// CLI handling
const analyzer = new AICodeAnalyzer();
const command = process.argv[2];

switch (command) {
  case 'start':
    analyzer.startContinuousAnalysis();
    break;
  case 'analyze':
    const filePath = process.argv[3];
    if (filePath) {
      analyzer.analyzeFile(filePath);
    } else {
      console.log('Usage: node ai-code-analyzer.cjs analyze <file-path>');
    }
    break;
  case 'status':
    console.log(JSON.stringify(analyzer.getStatus(), null, 2));
    break;
  default:
    analyzer.startContinuousAnalysis();
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down AI Code Analyzer...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down AI Code Analyzer...');
  process.exit(0);
});