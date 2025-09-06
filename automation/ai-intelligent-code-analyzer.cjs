#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      filesAnalyzed: 0,
      issuesFound: 0,
      recommendations: [],
      metrics: {
        complexity: 0,
        maintainability: 0,
        testCoverage: 0
      }
    };
  }

  async analyzeCodebase() {
    console.log('🤖 Starting AI Code Analysis...');
    
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const pagesDir = path.join(process.cwd(), 'pages');
      const componentsDir = path.join(process.cwd(), 'components');
      
      const directories = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
      
      for (const dir of directories) {
        await this.analyzeDirectory(dir);
      }
      
      this.generateReport();
      console.log('✅ AI Code Analysis completed');
      
    } catch (error) {
      console.error('❌ AI Code Analysis failed:', error.message);
    }
  }

  async analyzeDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        await this.analyzeDirectory(filePath);
      } else if (this.isCodeFile(file.name)) {
        await this.analyzeFile(filePath);
      }
    }
  }

  isCodeFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      this.analysisResults.filesAnalyzed++;
      
      // Basic analysis
      const lines = content.split('\n');
      const complexity = this.calculateComplexity(content);
      const maintainability = this.calculateMaintainability(content);
      
      this.analysisResults.metrics.complexity += complexity;
      this.analysisResults.metrics.maintainability += maintainability;
      
      // Check for common issues
      this.checkForIssues(content, filePath);
      
    } catch (error) {
      console.warn(`Warning: Could not analyze ${filePath}: ${error.message}`);
    }
  }

  calculateComplexity(content) {
    const complexityKeywords = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', 'try'];
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

  calculateMaintainability(content) {
    const lines = content.split('\n');
    const totalLines = lines.length;
    const commentLines = lines.filter(line => 
      line.trim().startsWith('//') || 
      line.trim().startsWith('/*') || 
      line.trim().startsWith('*')
    ).length;
    
    const commentRatio = commentLines / totalLines;
    return Math.min(100, commentRatio * 100);
  }

  checkForIssues(content, filePath) {
    const issues = [];
    
    // Check for console.log statements
    if (content.includes('console.log')) {
      issues.push({
        type: 'warning',
        message: 'Console.log statements found',
        file: filePath
      });
    }
    
    // Check for TODO comments
    if (content.includes('TODO') || content.includes('FIXME')) {
      issues.push({
        type: 'info',
        message: 'TODO/FIXME comments found',
        file: filePath
      });
    }
    
    // Check for long functions
    const functions = content.match(/function\s+\w+\s*\([^)]*\)\s*\{/g);
    if (functions) {
      functions.forEach(func => {
        const funcStart = content.indexOf(func);
        const funcEnd = this.findMatchingBrace(content, funcStart + func.length - 1);
        const funcLength = funcEnd - funcStart;
        
        if (funcLength > 1000) {
          issues.push({
            type: 'warning',
            message: 'Long function detected',
            file: filePath,
            line: content.substring(0, funcStart).split('\n').length
          });
        }
      });
    }
    
    this.analysisResults.issuesFound += issues.length;
    this.analysisResults.recommendations.push(...issues);
  }

  findMatchingBrace(content, startIndex) {
    let braceCount = 0;
    let i = startIndex;
    
    while (i < content.length) {
      if (content[i] === '{') {
        braceCount++;
      } else if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          return i;
        }
      }
      i++;
    }
    
    return content.length;
  }

  generateReport() {
    const avgComplexity = this.analysisResults.metrics.complexity / this.analysisResults.filesAnalyzed;
    const avgMaintainability = this.analysisResults.metrics.maintainability / this.analysisResults.filesAnalyzed;
    
    const report = {
      ...this.analysisResults,
      metrics: {
        ...this.analysisResults.metrics,
        averageComplexity: avgComplexity,
        averageMaintainability: avgMaintainability
      },
      summary: {
        totalFiles: this.analysisResults.filesAnalyzed,
        totalIssues: this.analysisResults.issuesFound,
        codeQuality: avgMaintainability > 50 ? 'Good' : 'Needs Improvement'
      }
    };
    
    const reportFile = path.join(__dirname, 'reports', 'ai-code-analysis.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Analysis report saved to: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AICodeAnalyzer();
  analyzer.analyzeCodebase().catch(console.error);
}

module.exports = AICodeAnalyzer;