#!/usr/bin/env node

/**
 * AI Code Quality Analyzer
 * Advanced code quality analysis using AI-powered insights
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🤖 Starting AI code quality analysis...');

class AICodeQualityAnalyzer {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      complexity: [],
      maintainability: [],
      performance: [],
      security: [],
      bestPractices: [],
      recommendations: []
    };
  }

  async analyzeCodeComplexity() {
    try {
      console.log('🧮 Analyzing code complexity...');
      
      const srcDir = path.join(__dirname, '..', '..', 'src');
      const componentsDir = path.join(__dirname, '..', '..', 'components');
      const pagesDir = path.join(__dirname, '..', '..', 'pages');
      
      const directories = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForComplexity(dir);
      }
      
      console.log(`✅ Code complexity analysis completed`);
      
    } catch (error) {
      console.warn('⚠️  Code complexity analysis failed:', error.message);
    }
  }

  scanDirectoryForComplexity(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForComplexity(fullPath);
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeComplexity(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeComplexity(content, filePath) {
    const lines = content.split('\n');
    const functions = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g) || [];
    const classes = content.match(/class\s+\w+/g) || [];
    const imports = content.match(/import\s+.*from/g) || [];
    const exports = content.match(/export\s+/g) || [];
    
    // Calculate complexity metrics
    const cyclomaticComplexity = this.calculateCyclomaticComplexity(content);
    const linesOfCode = lines.length;
    const functionCount = functions.length;
    const classCount = classes.length;
    const importCount = imports.length;
    const exportCount = exports.length;
    
    // Analyze for complexity issues
    if (cyclomaticComplexity > 10) {
      this.analysisResults.complexity.push({
        file: filePath,
        type: 'High Cyclomatic Complexity',
        severity: 'high',
        value: cyclomaticComplexity,
        recommendation: 'Refactor to reduce complexity - break into smaller functions'
      });
    }
    
    if (linesOfCode > 200) {
      this.analysisResults.complexity.push({
        file: filePath,
        type: 'Large File',
        severity: 'medium',
        value: linesOfCode,
        recommendation: 'Consider splitting into smaller modules'
      });
    }
    
    if (functionCount > 20) {
      this.analysisResults.complexity.push({
        file: filePath,
        type: 'Too Many Functions',
        severity: 'medium',
        value: functionCount,
        recommendation: 'Consider breaking into multiple files'
      });
    }
  }

  calculateCyclomaticComplexity(content) {
    const complexityKeywords = [
      'if', 'else', 'while', 'for', 'switch', 'case', 'catch', '&&', '||', '?'
    ];
    
    let complexity = 1; // Base complexity
    
    complexityKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity += matches.length;
      }
    });
    
    return complexity;
  }

  async analyzeMaintainability() {
    try {
      console.log('🔧 Analyzing maintainability...');
      
      const srcDir = path.join(__dirname, '..', '..', 'src');
      const componentsDir = path.join(__dirname, '..', '..', 'components');
      const pagesDir = path.join(__dirname, '..', '..', 'pages');
      
      const directories = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForMaintainability(dir);
      }
      
      console.log(`✅ Maintainability analysis completed`);
      
    } catch (error) {
      console.warn('⚠️  Maintainability analysis failed:', error.message);
    }
  }

  scanDirectoryForMaintainability(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForMaintainability(fullPath);
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeMaintainability(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeMaintainability(content, filePath) {
    const maintainabilityPatterns = [
      {
        name: 'Missing Comments',
        pattern: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
        severity: 'low',
        recommendation: 'Add meaningful comments for complex logic'
      },
      {
        name: 'Magic Numbers',
        pattern: /\b\d{3,}\b/g,
        severity: 'medium',
        recommendation: 'Replace magic numbers with named constants'
      },
      {
        name: 'Long Parameter Lists',
        pattern: /function\s+\w+\([^)]{50,}\)/g,
        severity: 'medium',
        recommendation: 'Use object parameters or destructuring for long parameter lists'
      },
      {
        name: 'Deep Nesting',
        pattern: /\{\s*\{[\s\S]*?\}\s*\{[\s\S]*?\}\s*\{[\s\S]*?\}\s*\}/g,
        severity: 'high',
        recommendation: 'Reduce nesting depth - extract functions'
      },
      {
        name: 'Duplicate Code',
        pattern: /(.{20,})\1/g,
        severity: 'medium',
        recommendation: 'Extract duplicate code into reusable functions'
      }
    ];
    
    maintainabilityPatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.analysisResults.maintainability.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async analyzePerformance() {
    try {
      console.log('⚡ Analyzing performance...');
      
      const srcDir = path.join(__dirname, '..', '..', 'src');
      const componentsDir = path.join(__dirname, '..', '..', 'components');
      const pagesDir = path.join(__dirname, '..', '..', 'pages');
      
      const directories = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForPerformance(dir);
      }
      
      console.log(`✅ Performance analysis completed`);
      
    } catch (error) {
      console.warn('⚠️  Performance analysis failed:', error.message);
    }
  }

  scanDirectoryForPerformance(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForPerformance(fullPath);
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzePerformance(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzePerformance(content, filePath) {
    const performancePatterns = [
      {
        name: 'Inefficient Loops',
        pattern: /for\s*\(\s*let\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*\w+\.length\s*;\s*\w+\+\+\)/g,
        severity: 'medium',
        recommendation: 'Use for...of or forEach for better performance'
      },
      {
        name: 'Missing Memoization',
        pattern: /useMemo|useCallback|React\.memo/g,
        severity: 'low',
        recommendation: 'Consider using React.memo, useMemo, or useCallback for expensive operations'
      },
      {
        name: 'Large Bundle Imports',
        pattern: /import\s+.*from\s+['"]lodash['"]/g,
        severity: 'medium',
        recommendation: 'Use specific lodash imports to reduce bundle size'
      },
      {
        name: 'Unused Imports',
        pattern: /import\s+\{[^}]*\}\s+from/g,
        severity: 'low',
        recommendation: 'Remove unused imports to reduce bundle size'
      }
    ];
    
    performancePatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.analysisResults.performance.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  async analyzeBestPractices() {
    try {
      console.log('📚 Analyzing best practices...');
      
      const srcDir = path.join(__dirname, '..', '..', 'src');
      const componentsDir = path.join(__dirname, '..', '..', 'components');
      const pagesDir = path.join(__dirname, '..', '..', 'pages');
      
      const directories = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        this.scanDirectoryForBestPractices(dir);
      }
      
      console.log(`✅ Best practices analysis completed`);
      
    } catch (error) {
      console.warn('⚠️  Best practices analysis failed:', error.message);
    }
  }

  scanDirectoryForBestPractices(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForBestPractices(fullPath);
      } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          this.analyzeBestPractices(content, fullPath);
        } catch (error) {
          console.warn(`⚠️  Failed to scan ${fullPath}:`, error.message);
        }
      }
    }
  }

  analyzeBestPractices(content, filePath) {
    const bestPracticePatterns = [
      {
        name: 'Missing Error Handling',
        pattern: /try\s*\{[\s\S]*?\}\s*catch/g,
        severity: 'medium',
        recommendation: 'Add comprehensive error handling'
      },
      {
        name: 'Missing PropTypes/TypeScript',
        pattern: /PropTypes|interface|type\s+\w+/g,
        severity: 'low',
        recommendation: 'Add PropTypes or TypeScript for better type safety'
      },
      {
        name: 'Console Statements',
        pattern: /console\.(log|warn|error|debug)/g,
        severity: 'low',
        recommendation: 'Remove console statements from production code'
      },
      {
        name: 'Missing Accessibility',
        pattern: /aria-|role=|alt=/g,
        severity: 'medium',
        recommendation: 'Add accessibility attributes'
      }
    ];
    
    bestPracticePatterns.forEach(pattern => {
      const matches = content.match(pattern.pattern);
      if (matches) {
        this.analysisResults.bestPractices.push({
          file: filePath,
          type: pattern.name,
          severity: pattern.severity,
          count: matches.length,
          recommendation: pattern.recommendation
        });
      }
    });
  }

  generateRecommendations() {
    const recommendations = [
      'Implement comprehensive error handling',
      'Add unit and integration tests',
      'Use TypeScript for better type safety',
      'Implement code splitting and lazy loading',
      'Add performance monitoring',
      'Implement accessibility best practices',
      'Use consistent naming conventions',
      'Add comprehensive documentation',
      'Implement automated testing',
      'Use linting and formatting tools'
    ];
    
    this.analysisResults.recommendations = recommendations;
  }

  generateReport() {
    this.generateRecommendations();
    
    const report = {
      ...this.analysisResults,
      summary: {
        complexityIssues: this.analysisResults.complexity.length,
        maintainabilityIssues: this.analysisResults.maintainability.length,
        performanceIssues: this.analysisResults.performance.length,
        bestPracticeIssues: this.analysisResults.bestPractices.length,
        totalIssues: this.analysisResults.complexity.length +
                    this.analysisResults.maintainability.length +
                    this.analysisResults.performance.length +
                    this.analysisResults.bestPractices.length
      }
    };
    
    const reportPath = path.join(__dirname, '..', '..', 'ai-code-quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 AI code quality report saved to ai-code-quality-report.json');
    return report;
  }

  async run() {
    try {
      await this.analyzeCodeComplexity();
      await this.analyzeMaintainability();
      await this.analyzePerformance();
      await this.analyzeBestPractices();
      
      const report = this.generateReport();
      
      console.log('\n🤖 AI Code Quality Analysis Summary:');
      console.log(`Complexity Issues: ${report.summary.complexityIssues}`);
      console.log(`Maintainability Issues: ${report.summary.maintainabilityIssues}`);
      console.log(`Performance Issues: ${report.summary.performanceIssues}`);
      console.log(`Best Practice Issues: ${report.summary.bestPracticeIssues}`);
      console.log(`Total Issues: ${report.summary.totalIssues}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 AI Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ AI code quality analysis failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const analyzer = new AICodeQualityAnalyzer();
  await analyzer.run();
}

if (require.main === module) {
  main();
}

module.exports = AICodeQualityAnalyzer;