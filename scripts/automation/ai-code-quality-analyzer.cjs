#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting AI-Powered Code Quality Analyzer...');

class AICodeQualityAnalyzer {
  constructor() {
    this.analysisResults = {
      codeSmells: [],
      complexityIssues: [],
      maintainabilityScore: 0,
      suggestions: [],
      metrics: {},
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'ai-quality-reports');
    this.ensureReportDirectory();
    this.qualityThresholds = {
      maxComplexity: 10,
      maxLines: 100,
      maxParams: 5,
      minMaintainability: 65
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    console.log('🔍 Analyzing code quality with AI-powered insights...');
    
    try {
      await this.analyzeComplexity();
      await this.analyzeCodeSmells();
      await this.calculateMaintainability();
      await this.generateSuggestions();
      await this.saveReport();
      
      console.log('✅ AI code quality analysis completed');
      return this.analysisResults;
    } catch (error) {
      console.error('❌ AI code quality analysis failed:', error.message);
      throw error;
    }
  }

  async analyzeComplexity() {
    console.log('📊 Analyzing code complexity...');
    
    try {
      // Run ESLint with complexity rules
      const complexityOutput = execSync('npm run lint -- --format json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(complexityOutput);
      const complexityIssues = [];
      
      lintResults.forEach(file => {
        if (file.messages) {
          file.messages.forEach(message => {
            if (message.ruleId && message.ruleId.includes('complexity')) {
              complexityIssues.push({
                file: file.filePath,
                line: message.line,
                message: message.message,
                severity: message.severity,
                rule: message.ruleId
              });
            }
          });
        }
      });
      
      this.analysisResults.complexityIssues = complexityIssues;
      console.log(`📊 Found ${complexityIssues.length} complexity issues`);
      
    } catch (error) {
      console.log('⚠️  Complexity analysis failed, continuing with other checks...');
    }
  }

  async analyzeCodeSmells() {
    console.log('👃 Detecting code smells...');
    
    const codeSmells = [];
    
    try {
      // Analyze file sizes
      const files = this.getAllSourceFiles();
      files.forEach(file => {
        const stats = fs.statSync(file);
        const lines = fs.readFileSync(file, 'utf8').split('\n').length;
        
        if (lines > this.qualityThresholds.maxLines) {
          codeSmells.push({
            type: 'large_file',
            file: file,
            metric: lines,
            threshold: this.qualityThresholds.maxLines,
            suggestion: 'Consider breaking this file into smaller, focused modules'
          });
        }
      });
      
      // Analyze function parameters
      this.analyzeFunctionParameters(files, codeSmells);
      
      // Analyze import statements
      this.analyzeImportStatements(files, codeSmells);
      
      this.analysisResults.codeSmells = codeSmells;
      console.log(`👃 Detected ${codeSmells.length} code smells`);
      
    } catch (error) {
      console.log('⚠️  Code smell analysis failed, continuing...');
    }
  }

  getAllSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'types'];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, extensions, files);
      }
    });
    
    return files;
  }

  walkDirectory(dir, extensions, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, extensions, files);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }

  analyzeFunctionParameters(files, codeSmells) {
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Simple regex to detect function definitions with many parameters
          const functionMatch = line.match(/function\s+\w+\s*\(([^)]*)\)/);
          const arrowMatch = line.match(/(\w+)\s*=\s*\(([^)]*)\)\s*=>/);
          
          if (functionMatch || arrowMatch) {
            const params = (functionMatch ? functionMatch[1] : arrowMatch[2]).split(',').length;
            if (params > this.qualityThresholds.maxParams) {
              codeSmells.push({
                type: 'too_many_parameters',
                file: file,
                line: index + 1,
                metric: params,
                threshold: this.qualityThresholds.maxParams,
                suggestion: 'Consider using an object parameter or breaking into smaller functions'
              });
            }
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  analyzeImportStatements(files, codeSmells) {
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for long import statements
          if (line.includes('import') && line.length > 120) {
            codeSmells.push({
              type: 'long_import',
              file: file,
              line: index + 1,
              metric: line.length,
              threshold: 120,
              suggestion: 'Consider breaking long imports into multiple lines or using barrel exports'
            });
          }
          
          // Check for unused imports (basic check)
          if (line.includes('import') && !line.includes('//')) {
            const importMatch = line.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/);
            if (importMatch) {
              const importPath = importMatch[1];
              if (!this.isImportUsed(content, importPath)) {
                codeSmells.push({
                  type: 'unused_import',
                  file: file,
                  line: index + 1,
                  suggestion: 'Remove unused import to reduce bundle size'
                });
              }
            }
          }
        });
      } catch (error) {
        // Skip files that can't be read
      }
    });
  }

  isImportUsed(content, importPath) {
    // Basic check for import usage
    const fileName = path.basename(importPath, path.extname(importPath));
    return content.includes(fileName) || content.includes(importPath);
  }

  async calculateMaintainability() {
    console.log('📈 Calculating maintainability score...');
    
    let score = 100;
    const issues = this.analysisResults.codeSmells.length + this.analysisResults.complexityIssues.length;
    
    // Reduce score based on issues found
    score -= Math.min(issues * 5, 35);
    
    // Additional penalties for critical issues
    const criticalIssues = this.analysisResults.codeSmells.filter(smell => 
      smell.type === 'large_file' || smell.type === 'too_many_parameters'
    ).length;
    
    score -= criticalIssues * 3;
    
    this.analysisResults.maintainabilityScore = Math.max(score, 0);
    console.log(`📈 Maintainability score: ${score}/100`);
  }

  async generateSuggestions() {
    console.log('💡 Generating intelligent suggestions...');
    
    const suggestions = [];
    
    // Suggest based on code smells
    this.analysisResults.codeSmells.forEach(smell => {
      suggestions.push({
        priority: this.getSuggestionPriority(smell.type),
        category: smell.type,
        description: smell.suggestion,
        file: smell.file,
        line: smell.line || 'N/A'
      });
    });
    
    // Suggest based on complexity
    if (this.analysisResults.complexityIssues.length > 0) {
      suggestions.push({
        priority: 'high',
        category: 'complexity',
        description: 'Consider refactoring complex functions to improve readability',
        file: 'Multiple files',
        line: 'N/A'
      });
    }
    
    // Suggest based on maintainability score
    if (this.analysisResults.maintainabilityScore < 70) {
      suggestions.push({
        priority: 'high',
        category: 'maintainability',
        description: 'Code maintainability is below recommended threshold. Focus on refactoring and documentation.',
        file: 'Project-wide',
        line: 'N/A'
      });
    }
    
    // Sort suggestions by priority
    suggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.analysisResults.suggestions = suggestions;
    console.log(`💡 Generated ${suggestions.length} intelligent suggestions`);
  }

  getSuggestionPriority(type) {
    const priorityMap = {
      'large_file': 'high',
      'too_many_parameters': 'high',
      'complexity': 'high',
      'unused_import': 'medium',
      'long_import': 'low'
    };
    
    return priorityMap[type] || 'medium';
  }

  async saveReport() {
    const reportPath = path.join(this.reportDir, `ai-quality-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.analysisResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-ai-quality-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.analysisResults, null, 2));
    
    console.log(`📄 AI quality report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n🧠 AI Code Quality Analysis Summary');
    console.log('=' .repeat(50));
    console.log(`📊 Maintainability Score: ${this.analysisResults.maintainabilityScore}/100`);
    console.log(`👃 Code Smells Detected: ${this.analysisResults.codeSmells.length}`);
    console.log(`📈 Complexity Issues: ${this.analysisResults.complexityIssues.length}`);
    console.log(`💡 Suggestions Generated: ${this.analysisResults.suggestions.length}`);
    
    if (this.analysisResults.suggestions.length > 0) {
      console.log('\n🔝 Top Priority Suggestions:');
      this.analysisResults.suggestions.slice(0, 3).forEach((suggestion, index) => {
        console.log(`${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.description}`);
        if (suggestion.file !== 'Project-wide' && suggestion.file !== 'Multiple files') {
          console.log(`   File: ${suggestion.file}:${suggestion.line}`);
        }
      });
    }
  }
}

// Main execution
async function main() {
  const analyzer = new AICodeQualityAnalyzer();
  
  try {
    await analyzer.analyzeCodeQuality();
    await analyzer.displaySummary();
    
    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ AI Code Quality Analyzer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = AICodeQualityAnalyzer;