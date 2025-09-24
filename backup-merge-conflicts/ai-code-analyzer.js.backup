#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/ai-code-analyzer.log');
    this.analysisFile = path.join(this.projectRoot, 'logs/pm2/code-analysis.json');
    this.optimizationsFile = path.join(this.projectRoot, 'logs/pm2/optimizations.json');
    this.startTime = Date.now();
    this.analysis = {
      timestamp: new Date().toISOString(),
      files: [],
      issues: [],
      optimizations: [],
      metrics: {},
      suggestions: []
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeCodebase() {
    this.log('🔍 Starting AI-powered code analysis...');
    
    try {
      // Get all source files
      const sourceFiles = this.getSourceFiles();
      this.log(`📁 Found ${sourceFiles.length} source files to analyze`);

      // Analyze each file
      for (const file of sourceFiles) {
        await this.analyzeFile(file);
      }

      // Generate overall metrics
      this.generateMetrics();
      
      // Generate optimization suggestions
      this.generateOptimizations();
      
      // Auto-fix simple issues if enabled
      if (process.env.AUTO_FIX === 'true') {
        await this.autoFixIssues();
      }

      this.log('✅ Code analysis completed');
    } catch (error) {
      this.log(`❌ Error during code analysis: ${error.message}`, 'ERROR');
    }
  }

  getSourceFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
    const excludeDirs = ['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'];
    const files = [];

    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!excludeDirs.includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        });
      } catch (error) {
        // Skip inaccessible directories
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(this.projectRoot, filePath);
      
      const fileAnalysis = {
        path: relativePath,
        size: content.length,
        lines: content.split('\n').length,
        issues: [],
        complexity: 0,
        maintainability: 0
      };

      // Analyze code patterns
      this.analyzeCodePatterns(content, fileAnalysis);
      
      // Check for common issues
      this.checkCommonIssues(content, fileAnalysis);
      
      // Calculate complexity metrics
      this.calculateComplexity(content, fileAnalysis);
      
      // Check for performance issues
      this.checkPerformanceIssues(content, fileAnalysis);
      
      // Check for security issues
      this.checkSecurityIssues(content, fileAnalysis);

      this.analysis.files.push(fileAnalysis);
      this.analysis.issues.push(...fileAnalysis.issues);
      
      this.log(`📄 Analyzed: ${relativePath} (${fileAnalysis.lines} lines, ${fileAnalysis.issues.length} issues)`);
    } catch (error) {
      this.log(`❌ Error analyzing file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  analyzeCodePatterns(content, fileAnalysis) {
    const patterns = {
      // Code quality patterns
      longFunctions: /function\s+\w+\s*\([^)]*\)\s*\{[\s\S]{500,}\}/g,
      deepNesting: /(\{[\s\S]*?){4,}/g,
      magicNumbers: /\b\d{3,}\b/g,
      consoleLogs: /console\.(log|warn|error|info)/g,
      todoComments: /\/\/\s*TODO|\/\*\s*TODO/g,
      
      // Performance patterns
      forLoops: /for\s*\([^)]*\)/g,
      whileLoops: /while\s*\([^)]*\)/g,
      domQueries: /document\.(getElementById|querySelector|querySelectorAll)/g,
      innerHTML: /\.innerHTML\s*=/g,
      
      // Security patterns
      evalUsage: /\beval\s*\(/g,
      innerHTML: /\.innerHTML\s*=/g,
      dangerousUrls: /https?:\/\/[^\s"']+/g,
      
      // Modern patterns
      asyncAwait: /async\s+function|await\s+/g,
      arrowFunctions: /=>/g,
      destructuring: /\{[^}]*\}/g,
      templateLiterals: /`[^`]*`/g
    };

    Object.entries(patterns).forEach(([patternName, regex]) => {
      const matches = content.match(regex);
      if (matches) {
        fileAnalysis.issues.push({
          type: 'pattern',
          pattern: patternName,
          count: matches.length,
          severity: this.getPatternSeverity(patternName, matches.length),
          message: this.getPatternMessage(patternName, matches.length)
        });
      }
    });
  }

  getPatternSeverity(patternName, count) {
    const severityMap = {
      longFunctions: count > 0 ? 'high' : 'none',
      deepNesting: count > 2 ? 'high' : count > 0 ? 'medium' : 'none',
      magicNumbers: count > 5 ? 'medium' : 'low',
      consoleLogs: count > 3 ? 'medium' : 'low',
      todoComments: count > 0 ? 'low' : 'none',
      evalUsage: count > 0 ? 'high' : 'none',
      innerHTML: count > 2 ? 'medium' : 'low'
    };
    return severityMap[patternName] || 'low';
  }

  getPatternMessage(patternName, count) {
    const messages = {
      longFunctions: `Found ${count} long function(s) - consider breaking into smaller functions`,
      deepNesting: `Found ${count} deeply nested code block(s) - consider refactoring`,
      magicNumbers: `Found ${count} magic number(s) - consider using named constants`,
      consoleLogs: `Found ${count} console statement(s) - remove for production`,
      todoComments: `Found ${count} TODO comment(s) - address before production`,
      evalUsage: `Found ${count} eval usage(s) - security risk, avoid eval()`,
      innerHTML: `Found ${count} innerHTML usage(s) - consider using textContent for security`
    };
    return messages[patternName] || `Found ${count} ${patternName} pattern(s)`;
  }

  checkCommonIssues(content, fileAnalysis) {
    const issues = [
      {
        pattern: /var\s+\w+/g,
        message: 'Use let/const instead of var',
        severity: 'medium'
      },
      {
        pattern: /==\s*[^=]/g,
        message: 'Use strict equality (===) instead of loose equality (==)',
        severity: 'medium'
      },
      {
        pattern: /function\s*\([^)]*\)\s*\{[\s\S]*?\}\s*$/gm,
        message: 'Consider using arrow functions for better readability',
        severity: 'low'
      },
      {
        pattern: /if\s*\([^)]*\)\s*\{[\s\S]*?\}\s*else\s*\{[\s\S]*?\}/g,
        message: 'Consider using ternary operator for simple if-else statements',
        severity: 'low'
      }
    ];

    issues.forEach(issue => {
      const matches = content.match(issue.pattern);
      if (matches) {
        fileAnalysis.issues.push({
          type: 'common',
          pattern: issue.pattern.toString(),
          count: matches.length,
          severity: issue.severity,
          message: issue.message
        });
      }
    });
  }

  calculateComplexity(content, fileAnalysis) {
    // Simple cyclomatic complexity calculation
    const complexityKeywords = ['if', 'else', 'while', 'for', 'switch', 'case', 'catch', '&&', '||', '?'];
    let complexity = 1; // Base complexity

    complexityKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity += matches.length;
      }
    });

    fileAnalysis.complexity = complexity;
    fileAnalysis.maintainability = Math.max(0, 100 - complexity * 5);

    if (complexity > 20) {
      fileAnalysis.issues.push({
        type: 'complexity',
        severity: 'high',
        message: `High cyclomatic complexity (${complexity}) - consider refactoring`
      });
    } else if (complexity > 10) {
      fileAnalysis.issues.push({
        type: 'complexity',
        severity: 'medium',
        message: `Medium cyclomatic complexity (${complexity}) - monitor for maintainability`
      });
    }
  }

  checkPerformanceIssues(content, fileAnalysis) {
    const performanceIssues = [
      {
        pattern: /document\.getElementById\([^)]*\)/g,
        message: 'Consider caching DOM queries to avoid repeated lookups',
        severity: 'medium'
      },
      {
        pattern: /\.innerHTML\s*=/g,
        message: 'innerHTML can be slow - consider using textContent or createElement',
        severity: 'low'
      },
      {
        pattern: /for\s*\([^)]*\.length[^)]*\)/g,
        message: 'Cache array length in for loops to avoid repeated property access',
        severity: 'low'
      },
      {
        pattern: /setTimeout\([^,]*,\s*0\)/g,
        message: 'Consider using requestAnimationFrame instead of setTimeout with 0 delay',
        severity: 'low'
      }
    ];

    performanceIssues.forEach(issue => {
      const matches = content.match(issue.pattern);
      if (matches) {
        fileAnalysis.issues.push({
          type: 'performance',
          pattern: issue.pattern.toString(),
          count: matches.length,
          severity: issue.severity,
          message: issue.message
        });
      }
    });
  }

  checkSecurityIssues(content, fileAnalysis) {
    const securityIssues = [
      {
        pattern: /eval\s*\(/g,
        message: 'eval() is dangerous - avoid using it',
        severity: 'high'
      },
      {
        pattern: /innerHTML\s*=\s*[^;]*\+/g,
        message: 'Dynamic innerHTML with concatenation can lead to XSS - sanitize input',
        severity: 'high'
      },
      {
        pattern: /localStorage\.setItem\([^,]*,\s*[^)]*\+/g,
        message: 'Be careful with localStorage - validate and sanitize data',
        severity: 'medium'
      },
      {
        pattern: /window\.location\s*=/g,
        message: 'Direct window.location assignment can be dangerous - validate URLs',
        severity: 'medium'
      }
    ];

    securityIssues.forEach(issue => {
      const matches = content.match(issue.pattern);
      if (matches) {
        fileAnalysis.issues.push({
          type: 'security',
          pattern: issue.pattern.toString(),
          count: matches.length,
          severity: issue.severity,
          message: issue.message
        });
      }
    });
  }

  generateMetrics() {
    const files = this.analysis.files;
    const issues = this.analysis.issues;

    this.analysis.metrics = {
      totalFiles: files.length,
      totalLines: files.reduce((sum, file) => sum + file.lines, 0),
      totalSize: files.reduce((sum, file) => sum + file.size, 0),
      averageComplexity: files.reduce((sum, file) => sum + file.complexity, 0) / files.length,
      averageMaintainability: files.reduce((sum, file) => sum + file.maintainability, 0) / files.length,
      totalIssues: issues.length,
      issuesBySeverity: {
        high: issues.filter(issue => issue.severity === 'high').length,
        medium: issues.filter(issue => issue.severity === 'medium').length,
        low: issues.filter(issue => issue.severity === 'low').length
      },
      issuesByType: this.groupIssuesByType(issues)
    };

    this.log(`📊 Metrics generated - ${files.length} files, ${issues.length} issues, ${this.analysis.metrics.averageComplexity.toFixed(2)} avg complexity`);
  }

  groupIssuesByType(issues) {
    const grouped = {};
    issues.forEach(issue => {
      if (!grouped[issue.type]) {
        grouped[issue.type] = 0;
      }
      grouped[issue.type]++;
    });
    return grouped;
  }

  generateOptimizations() {
    const optimizations = [];
    const issues = this.analysis.issues;

    // Group issues by file and generate specific optimizations
    const issuesByFile = {};
    issues.forEach(issue => {
      const file = issue.file || 'unknown';
      if (!issuesByFile[file]) {
        issuesByFile[file] = [];
      }
      issuesByFile[file].push(issue);
    });

    Object.entries(issuesByFile).forEach(([file, fileIssues]) => {
      const highPriorityIssues = fileIssues.filter(issue => issue.severity === 'high');
      const mediumPriorityIssues = fileIssues.filter(issue => issue.severity === 'medium');

      if (highPriorityIssues.length > 0) {
        optimizations.push({
          file,
          priority: 'high',
          type: 'critical_fixes',
          issues: highPriorityIssues.length,
          message: `Fix ${highPriorityIssues.length} high-priority issues in ${file}`,
          actions: highPriorityIssues.map(issue => issue.message)
        });
      }

      if (mediumPriorityIssues.length > 3) {
        optimizations.push({
          file,
          priority: 'medium',
          type: 'code_improvements',
          issues: mediumPriorityIssues.length,
          message: `Improve code quality in ${file} - ${mediumPriorityIssues.length} medium-priority issues`,
          actions: mediumPriorityIssues.map(issue => issue.message)
        });
      }
    });

    // Generate general optimizations
    if (this.analysis.metrics.averageComplexity > 15) {
      optimizations.push({
        priority: 'high',
        type: 'refactoring',
        message: 'High average complexity detected - consider refactoring complex functions',
        actions: ['Break down large functions', 'Extract common logic', 'Use design patterns']
      });
    }

    if (this.analysis.metrics.issuesBySeverity.high > 10) {
      optimizations.push({
        priority: 'high',
        type: 'quality',
        message: 'Many high-priority issues detected - focus on critical fixes',
        actions: ['Review security issues', 'Fix performance bottlenecks', 'Address code quality issues']
      });
    }

    this.analysis.optimizations = optimizations;
    this.log(`💡 Generated ${optimizations.length} optimization suggestions`);
  }

  async autoFixIssues() {
    this.log('🔧 Starting auto-fix for simple issues...');
    
    let fixedCount = 0;
    
    for (const file of this.analysis.files) {
      try {
        const filePath = path.join(this.projectRoot, file.path);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Auto-fix simple issues
        const fixes = [
          {
            pattern: /var\s+(\w+)/g,
            replacement: 'let $1',
            description: 'Replace var with let'
          },
          {
            pattern: /console\.log\([^)]*\);\s*/g,
            replacement: '',
            description: 'Remove console.log statements'
          },
          {
            pattern: /==\s*([^=])/g,
            replacement: '=== $1',
            description: 'Replace == with ==='
          }
        ];

        fixes.forEach(fix => {
          const before = content;
          content = content.replace(fix.pattern, fix.replacement);
          if (content !== before) {
            modified = true;
            this.log(`🔧 Auto-fixed: ${fix.description} in ${file.path}`);
          }
        });

        if (modified) {
          fs.writeFileSync(filePath, content);
          fixedCount++;
        }
      } catch (error) {
        this.log(`❌ Error auto-fixing ${file.path}: ${error.message}`, 'ERROR');
      }
    }

    this.log(`✅ Auto-fix completed - ${fixedCount} files modified`);
  }

  async saveAnalysis() {
    try {
      fs.writeFileSync(this.analysisFile, JSON.stringify(this.analysis, null, 2));
      this.log(`💾 Analysis saved to: ${this.analysisFile}`);
    } catch (error) {
      this.log(`❌ Error saving analysis: ${error.message}`, 'ERROR');
    }
  }

  async saveOptimizations() {
    try {
      fs.writeFileSync(this.optimizationsFile, JSON.stringify(this.analysis.optimizations, null, 2));
      this.log(`💡 Optimizations saved to: ${this.optimizationsFile}`);
    } catch (error) {
      this.log(`❌ Error saving optimizations: ${error.message}`, 'ERROR');
    }
  }

  displaySummary() {
    console.log('\n🤖 AI CODE ANALYZER SUMMARY');
    console.log('============================');
    
    const metrics = this.analysis.metrics;
    const issues = this.analysis.issues;
    const optimizations = this.analysis.optimizations;

    console.log(`📁 Files Analyzed: ${metrics.totalFiles}`);
    console.log(`📝 Total Lines: ${metrics.totalLines.toLocaleString()}`);
    console.log(`💾 Total Size: ${(metrics.totalSize / 1024).toFixed(2)} KB`);
    console.log(`🧮 Avg Complexity: ${metrics.averageComplexity.toFixed(2)}`);
    console.log(`🔧 Avg Maintainability: ${metrics.averageMaintainability.toFixed(2)}`);
    console.log(`❌ Total Issues: ${metrics.totalIssues}`);
    console.log(`   - High: ${metrics.issuesBySeverity.high}`);
    console.log(`   - Medium: ${metrics.issuesBySeverity.medium}`);
    console.log(`   - Low: ${metrics.issuesBySeverity.low}`);

    if (optimizations.length > 0) {
      console.log('\n💡 Top Optimizations:');
      optimizations.slice(0, 5).forEach((opt, index) => {
        console.log(`  ${index + 1}. [${opt.priority.toUpperCase()}] ${opt.message}`);
      });
    }

    console.log(`\n📄 Analysis saved to: ${this.analysisFile}`);
    console.log(`💡 Optimizations saved to: ${this.optimizationsFile}`);
  }

  async run() {
    this.log('🚀 Starting AI Code Analyzer...');
    
    try {
      await this.analyzeCodebase();
      await this.saveAnalysis();
      await this.saveOptimizations();
      this.displaySummary();
      
      this.log('✅ AI Code Analyzer completed successfully');
    } catch (error) {
      this.log(`❌ AI Code Analyzer failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AICodeAnalyzer();
  analyzer.run();
}

module.exports = AICodeAnalyzer;