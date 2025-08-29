#!/usr/bin/env node

/**
 * AI-Powered Code Review Automation - PM2 Process
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
    this.reviewHistory = path.join(this.projectRoot, 'logs', 'code-review-history.json');
    this.qualityMetrics = path.join(this.projectRoot, 'logs', 'quality-metrics.json');
    this.ensureLogsDirectory();
    this.loadQualityMetrics();
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

  loadQualityMetrics() {
    try {
      if (fs.existsSync(this.qualityMetrics)) {
        this.metrics = JSON.parse(fs.readFileSync(this.qualityMetrics, 'utf8'));
      } else {
        this.metrics = {
          overallScore: 0,
          categories: {
            complexity: { score: 0, issues: [] },
            maintainability: { score: 0, issues: [] },
            performance: { score: 0, issues: [] },
            security: { score: 0, issues: [] },
            readability: { score: 0, issues: [] }
          },
          lastUpdated: new Date().toISOString()
        };
      }
    } catch (error) {
      this.log(`Failed to load quality metrics: ${error.message}`, 'ERROR');
      this.metrics = this.getDefaultMetrics();
    }
  }

  getDefaultMetrics() {
    return {
      overallScore: 0,
      categories: {
        complexity: { score: 0, issues: [] },
        maintainability: { score: 0, issues: [] },
        performance: { score: 0, issues: [] },
        security: { score: 0, issues: [] },
        readability: { score: 0, issues: [] }
      },
      lastUpdated: new Date().toISOString()
    };
  }

  async runCodeReview() {
    this.log('🚀 Starting AI-powered code review...');
    
    try {
      // 1. Analyze TypeScript files
      const tsAnalysis = await this.analyzeTypeScriptFiles();
      
      // 2. Analyze React components
      const reactAnalysis = await this.analyzeReactComponents();
      
      // 3. Analyze performance patterns
      const performanceAnalysis = await this.analyzePerformancePatterns();
      
      // 4. Analyze security patterns
      const securityAnalysis = await this.analyzeSecurityPatterns();
      
      // 5. Generate intelligent suggestions
      const suggestions = await this.generateIntelligentSuggestions();
      
      // 6. Auto-fix simple issues
      const autoFixes = await this.autoFixSimpleIssues();
      
      // 7. Update quality metrics
      await this.updateQualityMetrics();
      
      // 8. Generate comprehensive report
      await this.generateReviewReport({
        tsAnalysis,
        reactAnalysis,
        performanceAnalysis,
        securityAnalysis,
        suggestions,
        autoFixes
      });

      this.log('✅ AI code review completed successfully');
      
    } catch (error) {
      this.log(`Code review failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeTypeScriptFiles() {
    this.log('🔍 Analyzing TypeScript files...');
    const analysis = {
      totalFiles: 0,
      issues: [],
      suggestions: [],
      complexityScore: 0
    };

    try {
      const tsFiles = this.findTypeScriptFiles();
      analysis.totalFiles = tsFiles.length;

      for (const file of tsFiles) {
        const fileAnalysis = await this.analyzeTypeScriptFile(file);
        analysis.issues.push(...fileAnalysis.issues);
        analysis.suggestions.push(...fileAnalysis.suggestions);
        analysis.complexityScore += fileAnalysis.complexityScore;
      }

      analysis.complexityScore = analysis.complexityScore / tsFiles.length;
      
    } catch (error) {
      this.log(`TypeScript analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  findTypeScriptFiles() {
    const tsFiles = [];
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          tsFiles.push(filePath);
        }
      }
    };

    walkDir(this.projectRoot);
    return tsFiles;
  }

  async analyzeTypeScriptFile(filePath) {
    const analysis = {
      file: filePath,
      issues: [],
      suggestions: [],
      complexityScore: 0
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Analyze complexity
      analysis.complexityScore = this.calculateComplexity(content);
      
      // Check for common TypeScript issues
      if (content.includes('any')) {
        analysis.issues.push({
          type: 'TYPE_SAFETY',
          severity: 'MEDIUM',
          message: 'Consider replacing "any" with specific types',
          line: this.findLineNumber(content, 'any')
        });
      }

      if (content.includes('console.log')) {
        analysis.suggestions.push({
          type: 'DEBUGGING',
          severity: 'LOW',
          message: 'Consider removing console.log statements for production',
          line: this.findLineNumber(content, 'console.log')
        });
      }

      // Check for unused imports
      const unusedImports = this.detectUnusedImports(content);
      if (unusedImports.length > 0) {
        analysis.issues.push({
          type: 'IMPORTS',
          severity: 'LOW',
          message: `Unused imports detected: ${unusedImports.join(', ')}`,
          line: 1
        });
      }

    } catch (error) {
      this.log(`Failed to analyze file ${filePath}: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count conditional statements
    complexity += (content.match(/if\s*\(/g) || []).length;
    complexity += (content.match(/else\s*{/g) || []).length;
    complexity += (content.match(/switch\s*\(/g) || []).length;
    complexity += (content.match(/case\s+/g) || []).length;
    
    // Count loops
    complexity += (content.match(/for\s*\(/g) || []).length;
    complexity += (content.match(/while\s*\(/g) || []).length;
    
    // Count function definitions
    complexity += (content.match(/function\s+/g) || []).length;
    complexity += (content.match(/=>\s*{/g) || []).length;
    
    return Math.min(complexity, 10); // Cap at 10
  }

  findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;
      }
    }
    return 0;
  }

  detectUnusedImports(content) {
    const importMatches = content.match(/import\s+{([^}]+)}\s+from\s+['"][^'"]+['"]/g);
    if (!importMatches) return [];
    
    const imports = [];
    for (const match of importMatches) {
      const importContent = match.match(/import\s+{([^}]+)}/);
      if (importContent) {
        const importNames = importContent[1].split(',').map(name => name.trim());
        imports.push(...importNames);
      }
    }
    
    // This is a simplified check - in a real implementation, you'd need AST parsing
    return imports.filter(imp => !content.includes(imp));
  }

  async analyzeReactComponents() {
    this.log('⚛️ Analyzing React components...');
    const analysis = {
      totalComponents: 0,
      issues: [],
      suggestions: [],
      performanceScore: 0
    };

    try {
      const reactFiles = this.findReactFiles();
      analysis.totalComponents = reactFiles.length;

      for (const file of reactFiles) {
        const componentAnalysis = await this.analyzeReactComponent(file);
        analysis.issues.push(...componentAnalysis.issues);
        analysis.suggestions.push(...componentAnalysis.suggestions);
        analysis.performanceScore += componentAnalysis.performanceScore;
      }

      if (analysis.totalComponents > 0) {
        analysis.performanceScore = analysis.performanceScore / analysis.totalComponents;
      }
      
    } catch (error) {
      this.log(`React analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  findReactFiles() {
    const reactFiles = [];
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          reactFiles.push(filePath);
        }
      }
    };

    walkDir(this.projectRoot);
    return reactFiles;
  }

  async analyzeReactComponent(filePath) {
    const analysis = {
      file: filePath,
      issues: [],
      suggestions: [],
      performanceScore: 0
    };

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for performance issues
      if (content.includes('useEffect') && !content.includes('useCallback')) {
        analysis.issues.push({
          type: 'PERFORMANCE',
          severity: 'MEDIUM',
          message: 'Consider using useCallback for functions passed to child components',
          line: this.findLineNumber(content, 'useEffect')
        });
      }

      if (content.includes('useState') && content.includes('useEffect')) {
        analysis.suggestions.push({
          type: 'OPTIMIZATION',
          severity: 'LOW',
          message: 'Consider using useReducer for complex state logic',
          line: 1
        });
      }

      // Check for accessibility issues
      if (content.includes('onClick') && !content.includes('onKeyDown')) {
        analysis.suggestions.push({
          type: 'ACCESSIBILITY',
          severity: 'MEDIUM',
          message: 'Add keyboard support for clickable elements',
          line: this.findLineNumber(content, 'onClick')
        });
      }

      // Calculate performance score
      analysis.performanceScore = this.calculateReactPerformanceScore(content);
      
    } catch (error) {
      this.log(`Failed to analyze React component ${filePath}: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  calculateReactPerformanceScore(content) {
    let score = 10; // Start with perfect score
    
    // Deduct points for common performance issues
    if (content.includes('useEffect') && !content.includes('useCallback')) score -= 1;
    if (content.includes('useState') && content.includes('useEffect')) score -= 1;
    if (content.includes('console.log')) score -= 1;
    if (content.includes('any')) score -= 1;
    
    return Math.max(score, 0);
  }

  async analyzePerformancePatterns() {
    this.log('⚡ Analyzing performance patterns...');
    const analysis = {
      issues: [],
      suggestions: [],
      score: 0
    };

    try {
      // Check for common performance anti-patterns
      const antiPatterns = [
        { pattern: 'setInterval', issue: 'Consider using requestAnimationFrame for UI updates' },
        { pattern: 'document.querySelector', issue: 'Use React refs instead of direct DOM manipulation' },
        { pattern: 'localStorage.getItem', issue: 'Consider caching frequently accessed data' },
        { pattern: 'fetch(', issue: 'Consider implementing request caching and deduplication' }
      ];

      for (const antiPattern of antiPatterns) {
        const files = this.findFilesWithPattern(antiPattern.pattern);
        if (files.length > 0) {
          analysis.suggestions.push({
            type: 'PERFORMANCE',
            severity: 'MEDIUM',
            message: antiPattern.issue,
            files: files
          });
        }
      }

      analysis.score = Math.max(10 - analysis.suggestions.length, 0);
      
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  findFilesWithPattern(pattern) {
    const files = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js')) {
          try {
            const content = fs.readFileSync(itemPath, 'utf8');
            if (content.includes(pattern)) {
              files.push(itemPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    };

    walkDir(this.projectRoot);
    return files;
  }

  async analyzeSecurityPatterns() {
    this.log('🔒 Analyzing security patterns...');
    const analysis = {
      issues: [],
      suggestions: [],
      score: 0
    };

    try {
      // Check for security vulnerabilities
      const securityPatterns = [
        { pattern: 'eval(', severity: 'CRITICAL', issue: 'eval() can execute arbitrary code' },
        { pattern: 'innerHTML', severity: 'HIGH', issue: 'innerHTML can lead to XSS attacks' },
        { pattern: 'document.write', severity: 'MEDIUM', issue: 'document.write can be dangerous' },
        { pattern: 'localStorage.setItem', severity: 'LOW', issue: 'Ensure sensitive data is not stored in localStorage' }
      ];

      for (const pattern of securityPatterns) {
        const files = this.findFilesWithPattern(pattern.pattern);
        if (files.length > 0) {
          analysis.issues.push({
            type: 'SECURITY',
            severity: pattern.severity,
            message: pattern.issue,
            files: files
          });
        }
      }

      analysis.score = Math.max(10 - analysis.issues.length, 0);
      
    } catch (error) {
      this.log(`Security analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async generateIntelligentSuggestions() {
    this.log('🧠 Generating intelligent suggestions...');
    const suggestions = [];

    try {
      // Analyze project structure and suggest improvements
      const projectStructure = this.analyzeProjectStructure();
      
      if (projectStructure.hasLargeFiles) {
        suggestions.push({
          type: 'STRUCTURE',
          severity: 'MEDIUM',
          message: 'Consider splitting large files into smaller, focused modules',
          action: 'REFACTOR'
        });
      }

      if (projectStructure.hasDeepNesting) {
        suggestions.push({
          type: 'STRUCTURE',
          severity: 'LOW',
          message: 'Consider flattening deeply nested directory structures',
          action: 'REORGANIZE'
        });
      }

      // Suggest testing improvements
      const testCoverage = this.analyzeTestCoverage();
      if (testCoverage < 0.7) {
        suggestions.push({
          type: 'TESTING',
          severity: 'MEDIUM',
          message: `Test coverage is ${(testCoverage * 100).toFixed(1)}%. Aim for at least 70%`,
          action: 'ADD_TESTS'
        });
      }

    } catch (error) {
      this.log(`Failed to generate suggestions: ${error.message}`, 'ERROR');
    }

    return suggestions;
  }

  analyzeProjectStructure() {
    const analysis = {
      hasLargeFiles: false,
      hasDeepNesting: false
    };

    try {
      const walkDir = (dir, depth = 0) => {
        if (depth > 5) {
          analysis.hasDeepNesting = true;
          return;
        }

        const items = fs.readdirSync(dir);
        for (const item of items) {
          const itemPath = path.join(dir, item);
          const stat = fs.statSync(itemPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(itemPath, depth + 1);
          } else if (stat.isFile() && stat.size > 1000000) { // 1MB
            analysis.hasLargeFiles = true;
          }
        }
      };

      walkDir(this.projectRoot);
      
    } catch (error) {
      this.log(`Failed to analyze project structure: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  analyzeTestCoverage() {
    try {
      const testFiles = this.findTestFiles();
      const sourceFiles = this.findSourceFiles();
      
      if (sourceFiles.length === 0) return 0;
      
      return testFiles.length / sourceFiles.length;
    } catch (error) {
      return 0;
    }
  }

  findTestFiles() {
    const testFiles = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(itemPath);
        } else if (item.includes('.test.') || item.includes('.spec.')) {
          testFiles.push(itemPath);
        }
      }
    };

    walkDir(this.projectRoot);
    return testFiles;
  }

  findSourceFiles() {
    const sourceFiles = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js')) {
          sourceFiles.push(itemPath);
        }
      }
    };

    walkDir(this.projectRoot);
    return sourceFiles;
  }

  async autoFixSimpleIssues() {
    this.log('🔧 Auto-fixing simple issues...');
    const fixes = [];

    try {
      // Auto-fix trailing whitespace
      const whitespaceFixes = await this.fixTrailingWhitespace();
      fixes.push(...whitespaceFixes);

      // Auto-fix line endings
      const lineEndingFixes = await this.fixLineEndings();
      fixes.push(...lineEndingFixes);

      // Auto-fix simple formatting issues
      const formattingFixes = await this.fixSimpleFormatting();
      fixes.push(...formattingFixes);

    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }

    return fixes;
  }

  async fixTrailingWhitespace() {
    const fixes = [];
    const files = this.findSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        const fixedContent = content.replace(/[ \t]+$/gm, '');
        
        if (originalContent !== fixedContent) {
          fs.writeFileSync(file, fixedContent);
          fixes.push({
            type: 'FORMATTING',
            file: file,
            action: 'Removed trailing whitespace'
          });
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    }

    return fixes;
  }

  async fixLineEndings() {
    const fixes = [];
    const files = this.findSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        const fixedContent = content.replace(/\r\n/g, '\n');
        
        if (originalContent !== fixedContent) {
          fs.writeFileSync(file, fixedContent);
          fixes.push({
            type: 'FORMATTING',
            file: file,
            action: 'Normalized line endings'
          });
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    }

    return fixes;
  }

  async fixSimpleFormatting() {
    const fixes = [];
    const files = this.findSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        let fixedContent = content;
        
        // Fix multiple blank lines
        fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        // Fix spaces around operators
        fixedContent = fixedContent.replace(/([^=!<>])\s*([=!<>]+)\s*([^=])/g, '$1 $2 $3');
        
        if (originalContent !== fixedContent) {
          fs.writeFileSync(file, fixedContent);
          fixes.push({
            type: 'FORMATTING',
            file: file,
            action: 'Fixed simple formatting issues'
          });
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    }

    return fixes;
  }

  async updateQualityMetrics() {
    try {
      this.metrics.lastUpdated = new Date().toISOString();
      
      // Calculate overall score based on various factors
      const scores = [
        this.metrics.categories.complexity.score,
        this.metrics.categories.maintainability.score,
        this.metrics.categories.performance.score,
        this.metrics.categories.security.score,
        this.metrics.categories.readability.score
      ];
      
      this.metrics.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      
      fs.writeFileSync(this.qualityMetrics, JSON.stringify(this.metrics, null, 2));
      
    } catch (error) {
      this.log(`Failed to update quality metrics: ${error.message}`, 'ERROR');
    }
  }

  async generateReviewReport(data) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalIssues: data.tsAnalysis.issues.length + data.reactAnalysis.issues.length + 
                       data.performanceAnalysis.issues.length + data.securityAnalysis.issues.length,
          totalSuggestions: data.tsAnalysis.suggestions.length + data.reactAnalysis.suggestions.length + 
                           data.performanceAnalysis.suggestions.length + data.suggestions.length,
          autoFixes: data.autoFixes.length
        },
        details: data,
        recommendations: this.generateRecommendations(data),
        nextSteps: this.generateNextSteps(data)
      };

      const reportFile = path.join(this.projectRoot, 'logs', `code-review-${Date.now()}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Review report generated: ${reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate review report: ${error.message}`, 'ERROR');
    }
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (data.tsAnalysis.issues.length > 5) {
      recommendations.push('Focus on TypeScript type safety improvements');
    }
    
    if (data.reactAnalysis.issues.length > 3) {
      recommendations.push('Review React component performance patterns');
    }
    
    if (data.securityAnalysis.score < 7) {
      recommendations.push('Prioritize security vulnerability fixes');
    }
    
    if (data.performanceAnalysis.score < 7) {
      recommendations.push('Focus on performance optimization');
    }
    
    return recommendations;
  }

  generateNextSteps(data) {
    const nextSteps = [];
    
    if (data.autoFixes.length > 0) {
      nextSteps.push('Review auto-fixed issues and commit changes');
    }
    
    if (data.tsAnalysis.issues.length > 0) {
      nextSteps.push('Address TypeScript issues by priority');
    }
    
    if (data.securityAnalysis.issues.length > 0) {
      nextSteps.push('Fix security issues immediately');
    }
    
    nextSteps.push('Run tests to ensure no regressions');
    nextSteps.push('Schedule follow-up review in 1 week');
    
    return nextSteps;
  }

  async run() {
    this.log('🚀 AI Code Review Automation Started');
    
    try {
      await this.runCodeReview();
      
      // Schedule next run
      setTimeout(() => {
        this.run();
      }, 30 * 60 * 1000); // Run every 30 minutes
      
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      
      // Retry after 5 minutes on failure
      setTimeout(() => {
        this.run();
      }, 5 * 60 * 1000);
    }
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new AICodeReviewAutomation();
  automation.run();
}

module.exports = AICodeReviewAutomation;