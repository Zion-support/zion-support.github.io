#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Quality Analyzer...');

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeSmells: [],
      complexityIssues: [],
      performanceOptimizations: [],
      securityVulnerabilities: [],
      maintainabilityScore: 0,
      technicalDebt: 0
    };
    this.reportDir = path.join(process.cwd(), 'ai-analysis-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    try {
      console.log('🔍 Analyzing code quality using AI patterns...');
      
      // Analyze TypeScript/JavaScript files
      await this.analyzeSourceFiles();
      
      // Analyze component complexity
      await this.analyzeComponentComplexity();
      
      // Detect performance anti-patterns
      await this.detectPerformanceIssues();
      
      // Analyze security patterns
      await this.analyzeSecurityPatterns();
      
      // Calculate maintainability metrics
      await this.calculateMaintainabilityMetrics();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ AI Code Quality Analysis completed successfully');
      
    } catch (error) {
      console.error('❌ AI Code Quality Analysis failed:', error.message);
      throw error;
    }
  }

  async analyzeSourceFiles() {
    console.log('📁 Analyzing source files for code smells...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️  Source directory not found');
      return;
    }

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const analysis = this.analyzeFileContent(content, file);
      
      if (analysis.codeSmells.length > 0) {
        this.analysisResults.codeSmells.push(...analysis.codeSmells);
      }
      
      if (analysis.complexityIssues.length > 0) {
        this.analysisResults.complexityIssues.push(...analysis.complexityIssues);
      }
    }
  }

  analyzeFileContent(content, filePath) {
    const analysis = {
      codeSmells: [],
      complexityIssues: []
    };

    const lines = content.split('\n');
    
    // Detect code smells
    lines.forEach((line, index) => {
      // Long functions
      if (line.includes('function') && line.length > 120) {
        analysis.codeSmells.push({
          type: 'long-function-declaration',
          file: filePath,
          line: index + 1,
          severity: 'medium',
          suggestion: 'Consider breaking down into smaller functions'
        });
      }
      
      // Deep nesting
      const indentLevel = (line.match(/^\s*/)[0].length / 2);
      if (indentLevel > 6) {
        analysis.codeSmells.push({
          type: 'deep-nesting',
          file: filePath,
          line: index + 1,
          severity: 'high',
          suggestion: 'Extract nested logic into separate functions'
        });
      }
      
      // Magic numbers
      if (/\b\d{3,}\b/.test(line) && !line.includes('//')) {
        analysis.codeSmells.push({
          type: 'magic-number',
          file: filePath,
          line: index + 1,
          severity: 'low',
          suggestion: 'Extract magic numbers into named constants'
        });
      }
      
      // Complex conditions
      if (line.includes('&&') && (line.match(/&&/g) || []).length > 2) {
        analysis.codeSmells.push({
          type: 'complex-condition',
          file: filePath,
          line: index + 1,
          severity: 'medium',
          suggestion: 'Extract complex conditions into readable variables'
        });
      }
    });

    // Calculate cyclomatic complexity
    const complexity = this.calculateCyclomaticComplexity(content);
    if (complexity > 10) {
      analysis.complexityIssues.push({
        type: 'high-cyclomatic-complexity',
        file: filePath,
        complexity: complexity,
        severity: 'high',
        suggestion: 'Consider refactoring to reduce complexity'
      });
    }

    return analysis;
  }

  calculateCyclomaticComplexity(content) {
    let complexity = 1; // Base complexity
    
    // Count decision points
    const decisionPatterns = [
      /if\s*\(/g,
      /else\s+if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /&&/g,
      /\|\|/g,
      /\?/g
    ];
    
    decisionPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });
    
    return complexity;
  }

  async analyzeComponentComplexity() {
    console.log('🧩 Analyzing React component complexity...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      return;
    }

    const componentFiles = this.getAllFiles(srcPath, ['.tsx', '.jsx']);
    
    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const componentAnalysis = this.analyzeReactComponent(content, file);
      
      if (componentAnalysis.issues.length > 0) {
        this.analysisResults.complexityIssues.push(...componentAnalysis.issues);
      }
    }
  }

  analyzeReactComponent(content, filePath) {
    const analysis = { issues: [] };
    
    // Check for large components
    const lines = content.split('\n');
    if (lines.length > 200) {
      analysis.issues.push({
        type: 'large-component',
        file: filePath,
        lines: lines.length,
        severity: 'medium',
        suggestion: 'Consider breaking down into smaller components'
      });
    }
    
    // Check for too many props
    const propMatches = content.match(/interface\s+\w+Props\s*\{([^}]+)\}/g);
    if (propMatches) {
      propMatches.forEach(match => {
        const propCount = (match.match(/[a-zA-Z_$][a-zA-Z0-9_$]*\s*:/g) || []).length;
        if (propCount > 10) {
          analysis.issues.push({
            type: 'too-many-props',
            file: filePath,
            propCount: propCount,
            severity: 'medium',
            suggestion: 'Consider using composition or context instead of prop drilling'
          });
        }
      });
    }
    
    // Check for inline styles
    const inlineStyleMatches = content.match(/style\s*=\s*\{\s*\{/g);
    if (inlineStyleMatches && inlineStyleMatches.length > 5) {
      analysis.issues.push({
        type: 'inline-styles',
        file: filePath,
        count: inlineStyleMatches.length,
        severity: 'low',
        suggestion: 'Extract styles to CSS modules or styled-components'
      });
    }
    
    return analysis;
  }

  async detectPerformanceIssues() {
    console.log('⚡ Detecting performance anti-patterns...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      return;
    }

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const performanceIssues = this.detectPerformanceAntiPatterns(content, file);
      
      if (performanceIssues.length > 0) {
        this.analysisResults.performanceOptimizations.push(...performanceIssues);
      }
    }
  }

  detectPerformanceAntiPatterns(content, filePath) {
    const issues = [];
    
    // Check for missing useCallback/useMemo
    const functionInJSX = content.match(/function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/g);
    if (functionInJSX) {
      functionInJSX.forEach(match => {
        if (content.includes('useCallback') || content.includes('useMemo')) {
          // Already optimized
        } else {
          issues.push({
            type: 'missing-memoization',
            file: filePath,
            severity: 'medium',
            suggestion: 'Consider wrapping function in useCallback or useMemo to prevent unnecessary re-renders'
          });
        }
      });
    }
    
    // Check for large bundle imports
    const largeImports = content.match(/import\s+.*from\s+['"](lodash|moment|date-fns)['"]/g);
    if (largeImports) {
      issues.push({
        type: 'large-library-import',
        file: filePath,
        libraries: largeImports,
        severity: 'low',
        suggestion: 'Consider using tree-shaking or importing specific functions'
      });
    }
    
    // Check for expensive operations in render
    const expensivePatterns = [
      /\.map\(.*=>\s*\{[^}]*\}/g,
      /\.filter\(.*=>\s*\{[^}]*\}/g,
      /\.reduce\(.*=>\s*\{[^}]*\}/g
    ];
    
    expensivePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches && matches.length > 3) {
        issues.push({
          type: 'expensive-operations-in-render',
          file: filePath,
          count: matches.length,
          severity: 'medium',
          suggestion: 'Consider memoizing expensive operations or moving them outside render'
        });
      }
    });
    
    return issues;
  }

  async analyzeSecurityPatterns() {
    console.log('🔒 Analyzing security patterns...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      return;
    }

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const securityIssues = this.detectSecurityVulnerabilities(content, file);
      
      if (securityIssues.length > 0) {
        this.analysisResults.securityVulnerabilities.push(...securityIssues);
      }
    }
  }

  detectSecurityVulnerabilities(content, filePath) {
    const issues = [];
    
    // Check for XSS vulnerabilities
    const dangerousPatterns = [
      /dangerouslySetInnerHTML/g,
      /innerHTML\s*=/g,
      /eval\s*\(/g,
      /new\s+Function/g
    ];
    
    dangerousPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          type: 'xss-vulnerability',
          file: filePath,
          pattern: pattern.source,
          severity: 'high',
          suggestion: 'Avoid using dangerous HTML injection methods. Use proper sanitization.'
        });
      }
    });
    
    // Check for hardcoded secrets
    const secretPatterns = [
      /api_key\s*=\s*['"][^'"]+['"]/g,
      /password\s*=\s*['"][^'"]+['"]/g,
      /secret\s*=\s*['"][^'"]+['"]/g
    ];
    
    secretPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        issues.push({
          type: 'hardcoded-secret',
          file: filePath,
          severity: 'critical',
          suggestion: 'Move secrets to environment variables'
        });
      }
    });
    
    return issues;
  }

  async calculateMaintainabilityMetrics() {
    console.log('📊 Calculating maintainability metrics...');
    
    let totalIssues = 
      this.analysisResults.codeSmells.length +
      this.analysisResults.complexityIssues.length +
      this.analysisResults.performanceOptimizations.length +
      this.analysisResults.securityVulnerabilities.length;
    
    // Calculate maintainability score (0-100, higher is better)
    this.analysisResults.maintainabilityScore = Math.max(0, 100 - (totalIssues * 2));
    
    // Calculate technical debt (in hours)
    this.analysisResults.technicalDebt = totalIssues * 0.5; // 30 minutes per issue
    
    console.log(`📈 Maintainability Score: ${this.analysisResults.maintainabilityScore}/100`);
    console.log(`⏰ Estimated Technical Debt: ${this.analysisResults.technicalDebt.toFixed(1)} hours`);
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    function traverse(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dirPath);
    return files;
  }

  async generateReport() {
    console.log('📋 Generating AI analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysisResults: this.analysisResults,
      summary: {
        totalIssues: 
          this.analysisResults.codeSmells.length +
          this.analysisResults.complexityIssues.length +
          this.analysisResults.performanceOptimizations.length +
          this.analysisResults.securityVulnerabilities.length,
        maintainabilityScore: this.analysisResults.maintainabilityScore,
        technicalDebt: this.analysisResults.technicalDebt,
        executionTime: Date.now() - this.startTime
      },
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportDir, `ai-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save to root for PM2 monitoring
    const rootReportPath = path.join(process.cwd(), 'ai-code-analysis-report.json');
    fs.writeFileSync(rootReportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ AI Analysis report saved to ${reportPath}`);
    console.log(`✅ Root report saved to ${rootReportPath}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.analysisResults.maintainabilityScore < 70) {
      recommendations.push({
        priority: 'high',
        action: 'Code Quality Review',
        description: 'Schedule a comprehensive code review to address maintainability issues'
      });
    }
    
    if (this.analysisResults.securityVulnerabilities.length > 0) {
      recommendations.push({
        priority: 'critical',
        action: 'Security Audit',
        description: 'Immediately address security vulnerabilities before deployment'
      });
    }
    
    if (this.analysisResults.performanceOptimizations.length > 5) {
      recommendations.push({
        priority: 'medium',
        action: 'Performance Optimization Sprint',
        description: 'Dedicate time to optimize performance-critical components'
      });
    }
    
    if (this.analysisResults.technicalDebt > 10) {
      recommendations.push({
        priority: 'medium',
        action: 'Technical Debt Reduction',
        description: 'Allocate 20% of development time to reducing technical debt'
      });
    }
    
    return recommendations;
  }
}

// Main execution
async function main() {
  const analyzer = new AICodeAnalyzer();
  await analyzer.analyzeCodeQuality();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AICodeAnalyzer;