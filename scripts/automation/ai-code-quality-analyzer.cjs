#!/usr/bin/env node

/**
 * AI-Powered Code Quality Analyzer
 * Uses intelligent patterns to detect and fix code quality issues
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class AICodeQualityAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-quality.log');
    this.qualityReport = path.join(this.projectRoot, 'logs', 'ai-quality-report.json');
    this.codePatterns = this.loadCodePatterns();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadCodePatterns() {
    return {
      // Performance anti-patterns
      performance: {
        'useCallback-missing': {
          pattern: /const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{/g,
          suggestion: 'Consider wrapping in useCallback for performance',
          severity: 'MEDIUM',
          fix: (code) => code.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*{)/g, 'const $1 = useCallback($1, [])')
        },
        'useMemo-missing': {
          pattern: /const\s+\w+\s*=\s*[^;]+\.map\([^)]*\)/g,
          suggestion: 'Consider wrapping expensive operations in useMemo',
          severity: 'MEDIUM'
        },
        'inline-objects': {
          pattern: /style=\{\{[^}]*\}\}/g,
          suggestion: 'Extract inline styles to constants to prevent re-renders',
          severity: 'LOW'
        }
      },
      
      // Security patterns
      security: {
        'dangerous-innerHTML': {
          pattern: /dangerouslySetInnerHTML/g,
          suggestion: 'Review usage of dangerouslySetInnerHTML for XSS vulnerabilities',
          severity: 'HIGH'
        },
        'eval-usage': {
          pattern: /eval\s*\(/g,
          suggestion: 'Avoid using eval() - security risk',
          severity: 'CRITICAL'
        }
      },
      
      // Maintainability patterns
      maintainability: {
        'long-functions': {
          pattern: /function\s+\w+\s*\([^)]*\)\s*\{[\s\S]{200,}/g,
          suggestion: 'Function is too long, consider breaking it down',
          severity: 'MEDIUM'
        },
        'deep-nesting': {
          pattern: /if\s*\([^)]*\)\s*\{[\s\S]*if\s*\([^)]*\)\s*\{[\s\S]*if\s*\([^)]*\)\s*\{/g,
          suggestion: 'Deep nesting detected, consider refactoring',
          severity: 'MEDIUM'
        },
        'magic-numbers': {
          pattern: /:\s*\d{3,}/g,
          suggestion: 'Consider extracting magic numbers to named constants',
          severity: 'LOW'
        }
      },
      
      // TypeScript patterns
      typescript: {
        'any-usage': {
          pattern: /:\s*any\b/g,
          suggestion: 'Avoid using "any" type, specify proper types',
          severity: 'MEDIUM'
        },
        'unused-imports': {
          pattern: /import\s+\{[^}]*\}\s+from\s+['"][^'"]+['"]/g,
          suggestion: 'Check for unused imports',
          severity: 'LOW'
        }
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async analyzeCodeQuality() {
    this.log('🧠 Starting AI-powered code quality analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: 0,
        criticalIssues: 0,
        highIssues: 0,
        mediumIssues: 0,
        lowIssues: 0
      },
      files: [],
      suggestions: [],
      autoFixes: []
    };

    try {
      // Analyze different file types
      const fileTypes = ['tsx', 'ts', 'jsx', 'js'];
      
      for (const fileType of fileTypes) {
        const files = this.findFilesByType(fileType);
        for (const file of files) {
          const fileAnalysis = await this.analyzeFile(file);
          if (fileAnalysis.issues.length > 0) {
            analysis.files.push(fileAnalysis);
            analysis.summary.totalIssues += fileAnalysis.issues.length;
            
            // Count by severity
            fileAnalysis.issues.forEach(issue => {
              switch (issue.severity) {
                case 'CRITICAL': analysis.summary.criticalIssues++; break;
                case 'HIGH': analysis.summary.highIssues++; break;
                case 'MEDIUM': analysis.summary.mediumIssues++; break;
                case 'LOW': analysis.summary.lowIssues++; break;
              }
            });
          }
        }
      }

      // Generate intelligent suggestions
      analysis.suggestions = this.generateIntelligentSuggestions(analysis);
      
      // Attempt auto-fixes
      analysis.autoFixes = await this.performAutoFixes(analysis.files);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      // Generate improvement recommendations
      await this.generateImprovementRecommendations(analysis);
      
      this.log(`✅ Analysis complete. Found ${analysis.summary.totalIssues} issues`);
      
    } catch (error) {
      this.log(`❌ Analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  findFilesByType(fileType) {
    const files = [];
    const searchPattern = `**/*.${fileType}`;
    
    try {
      const { glob } = require('glob');
      files.push(...glob.sync(searchPattern, { ignore: ['node_modules/**', 'dist/**', 'out/**'] }));
    } catch (error) {
      // Fallback to manual search if glob not available
      this.walkDirectory(this.projectRoot, files, fileType);
    }
    
    return files;
  }

  walkDirectory(dir, files, fileType) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.walkDirectory(fullPath, files, fileType);
        } else if (item.endsWith(`.${fileType}`)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  async analyzeFile(filePath) {
    const analysis = {
      file: filePath,
      issues: [],
      score: 100,
      suggestions: []
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Analyze each pattern category
      for (const [category, patterns] of Object.entries(this.codePatterns)) {
        for (const [patternName, patternData] of Object.entries(patterns)) {
          const matches = content.match(patternData.pattern);
          if (matches) {
            const issue = {
              type: patternName,
              category: category,
              severity: patternData.severity,
              suggestion: patternData.suggestion,
              matches: matches.length,
              lines: this.findLineNumbers(content, patternData.pattern),
              autoFixable: !!patternData.fix
            };
            
            analysis.issues.push(issue);
            
            // Reduce score based on severity
            switch (issue.severity) {
              case 'CRITICAL': analysis.score -= 20; break;
              case 'HIGH': analysis.score -= 15; break;
              case 'MEDIUM': analysis.score -= 10; break;
              case 'LOW': analysis.score -= 5; break;
            }
          }
        }
      }
      
      // Additional intelligent analysis
      analysis.issues.push(...this.analyzeCodeComplexity(content, lines));
      analysis.issues.push(...this.analyzeNamingConventions(content));
      
      // Ensure score doesn't go below 0
      analysis.score = Math.max(0, analysis.score);
      
    } catch (error) {
      analysis.issues.push({
        type: 'FILE_READ_ERROR',
        severity: 'CRITICAL',
        suggestion: 'Unable to read file for analysis',
        error: error.message
      });
      analysis.score = 0;
    }

    return analysis;
  }

  analyzeCodeComplexity(content, lines) {
    const issues = [];
    
    // Cyclomatic complexity check
    const complexity = this.calculateCyclomaticComplexity(content);
    if (complexity > 10) {
      issues.push({
        type: 'HIGH_COMPLEXITY',
        severity: 'MEDIUM',
        suggestion: `Cyclomatic complexity is ${complexity}, consider refactoring`,
        complexity: complexity
      });
    }
    
    // Function length check
    const longFunctions = this.findLongFunctions(lines);
    longFunctions.forEach(func => {
      issues.push({
        type: 'LONG_FUNCTION',
        severity: 'MEDIUM',
        suggestion: `Function "${func.name}" is ${func.lines} lines long`,
        function: func.name,
        lines: func.lines
      });
    });
    
    return issues;
  }

  calculateCyclomaticComplexity(content) {
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
    
    let complexity = 1; // Base complexity
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });
    
    return complexity;
  }

  findLongFunctions(lines) {
    const functions = [];
    let inFunction = false;
    let functionStart = 0;
    let functionName = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(/function\s+\w+\s*\(/) || line.match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>/)) {
        if (inFunction) {
          // End previous function
          functions.push({
            name: functionName,
            lines: i - functionStart
          });
        }
        
        inFunction = true;
        functionStart = i;
        functionName = line.match(/(?:function\s+(\w+)|const\s+(\w+)\s*=)/)?.[1] || 'anonymous';
      } else if (inFunction && line.trim() === '}') {
        // End current function
        functions.push({
          name: functionName,
          lines: i - functionStart + 1
        });
        inFunction = false;
      }
    }
    
    return functions.filter(f => f.lines > 20);
  }

  analyzeNamingConventions(content) {
    const issues = [];
    
    // Check for inconsistent naming
    const camelCaseVars = content.match(/\b[a-z][a-zA-Z0-9]*\b/g) || [];
    const snakeCaseVars = content.match(/\b[a-z_][a-z0-9_]*\b/g) || [];
    
    if (camelCaseVars.length > 0 && snakeCaseVars.length > 0) {
      issues.push({
        type: 'INCONSISTENT_NAMING',
        severity: 'LOW',
        suggestion: 'Mixed naming conventions detected, consider standardizing',
        camelCase: camelCaseVars.length,
        snakeCase: snakeCaseVars.length
      });
    }
    
    return issues;
  }

  findLineNumbers(content, pattern) {
    const lines = content.split('\n');
    const lineNumbers = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        lineNumbers.push(index + 1);
      }
    });
    
    return lineNumbers;
  }

  generateIntelligentSuggestions(analysis) {
    const suggestions = [];
    
    // Performance suggestions
    if (analysis.summary.mediumIssues > 5) {
      suggestions.push({
        type: 'PERFORMANCE',
        priority: 'HIGH',
        message: 'Multiple performance issues detected. Consider running performance audit.',
        action: 'Run npm run perf:audit'
      });
    }
    
    // Security suggestions
    if (analysis.summary.criticalIssues > 0) {
      suggestions.push({
        type: 'SECURITY',
        priority: 'CRITICAL',
        message: 'Critical security issues found. Immediate review required.',
        action: 'Review and fix security vulnerabilities'
      });
    }
    
    // Code quality suggestions
    if (analysis.summary.totalIssues > 20) {
      suggestions.push({
        type: 'QUALITY',
        priority: 'MEDIUM',
        message: 'High number of quality issues. Consider refactoring session.',
        action: 'Schedule code review and refactoring'
      });
    }
    
    return suggestions;
  }

  async performAutoFixes(files) {
    const fixes = [];
    
    for (const file of files) {
      if (file.issues.length === 0) continue;
      
      try {
        const content = fs.readFileSync(file.file, 'utf8');
        let modifiedContent = content;
        let fileFixed = false;
        
        for (const issue of file.issues) {
          if (issue.autoFixable && issue.category === 'performance') {
            const patternData = this.codePatterns.performance[issue.type];
            if (patternData.fix) {
              modifiedContent = patternData.fix(modifiedContent);
              fileFixed = true;
              fixes.push({
                file: file.file,
                issue: issue.type,
                status: 'fixed'
              });
            }
          }
        }
        
        if (fileFixed) {
          // Create backup
          const backupPath = `${file.file}.backup.${Date.now()}`;
          fs.writeFileSync(backupPath, content);
          
          // Apply fixes
          fs.writeFileSync(file.file, modifiedContent);
          
          this.log(`✅ Auto-fixed issues in ${file.file}`);
        }
        
      } catch (error) {
        this.log(`❌ Failed to auto-fix ${file.file}: ${error.message}`, 'ERROR');
      }
    }
    
    return fixes;
  }

  async saveAnalysisReport(analysis) {
    try {
      fs.writeFileSync(this.qualityReport, JSON.stringify(analysis, null, 2));
      this.log(`📊 Analysis report saved to ${this.qualityReport}`);
    } catch (error) {
      this.log(`❌ Failed to save analysis report: ${error.message}`, 'ERROR');
    }
  }

  async generateImprovementRecommendations(analysis) {
    const recommendations = {
      timestamp: new Date().toISOString(),
      score: this.calculateOverallScore(analysis),
      priority: this.determinePriority(analysis),
      actions: this.generateActionPlan(analysis)
    };
    
    const recommendationsPath = path.join(this.projectRoot, 'logs', 'improvement-recommendations.json');
    try {
      fs.writeFileSync(recommendationsPath, JSON.stringify(recommendations, null, 2));
      this.log(`💡 Improvement recommendations saved to ${recommendationsPath}`);
    } catch (error) {
      this.log(`❌ Failed to save recommendations: ${error.message}`, 'ERROR');
    }
  }

  calculateOverallScore(analysis) {
    const totalFiles = analysis.files.length;
    if (totalFiles === 0) return 100;
    
    const totalScore = analysis.files.reduce((sum, file) => sum + file.score, 0);
    return Math.round(totalScore / totalFiles);
  }

  determinePriority(analysis) {
    if (analysis.summary.criticalIssues > 0) return 'CRITICAL';
    if (analysis.summary.highIssues > 5) return 'HIGH';
    if (analysis.summary.mediumIssues > 10) return 'MEDIUM';
    if (analysis.summary.lowIssues > 20) return 'LOW';
    return 'EXCELLENT';
  }

  generateActionPlan(analysis) {
    const actions = [];
    
    if (analysis.summary.criticalIssues > 0) {
      actions.push({
        priority: 'IMMEDIATE',
        action: 'Fix critical security and stability issues',
        timeframe: 'Today'
      });
    }
    
    if (analysis.summary.highIssues > 0) {
      actions.push({
        priority: 'HIGH',
        action: 'Address high-priority quality issues',
        timeframe: 'This week'
      });
    }
    
    if (analysis.summary.mediumIssues > 5) {
      actions.push({
        priority: 'MEDIUM',
        action: 'Refactor code with medium-priority issues',
        timeframe: 'Next sprint'
      });
    }
    
    return actions;
  }

  async run() {
    this.log('🚀 Starting AI Code Quality Analyzer...');
    
    try {
      const analysis = await this.analyzeCodeQuality();
      
      // Log summary
      this.log(`📊 Analysis Summary:`);
      this.log(`   Total Issues: ${analysis.summary.totalIssues}`);
      this.log(`   Critical: ${analysis.summary.criticalIssues}`);
      this.log(`   High: ${analysis.summary.highIssues}`);
      this.log(`   Medium: ${analysis.summary.mediumIssues}`);
      this.log(`   Low: ${analysis.summary.lowIssues}`);
      this.log(`   Auto-fixes applied: ${analysis.autoFixes.length}`);
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ AI Code Quality Analyzer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AICodeQualityAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = AICodeQualityAnalyzer;