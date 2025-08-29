#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentCodeQualityMonitor {
  constructor() {
    this.qualityMetrics = {
      codeComplexity: 0,
      testCoverage: 0,
      lintingIssues: 0,
      typeSafety: 0,
      documentationCoverage: 0,
      performanceIssues: 0
    };
    
    this.qualityHistory = [];
    this.improvementSuggestions = [];
    this.codePatterns = new Map();
    this.fileAnalysis = new Map();
    
    this.initializeCodePatterns();
    this.startMonitoring();
  }

  initializeCodePatterns() {
    // Code quality patterns and their impact
    this.codePatterns.set(
      /console\.log\(/g,
      { type: 'debug', severity: 'low', message: 'Remove console.log statements in production code' }
    );
    
    this.codePatterns.set(
      /setTimeout\([^,]+,\s*\d+\)/g,
      { type: 'performance', severity: 'medium', message: 'Consider using AbortController for cleanup' }
    );
    
    this.codePatterns.set(
      /\.map\([^)]*\)\.filter\([^)]*\)/g,
      { type: 'performance', severity: 'medium', message: 'Combine map and filter operations for better performance' }
    );
    
    this.codePatterns.set(
      /import\s+\*\s+as\s+\w+\s+from/g,
      { type: 'bundle', severity: 'medium', message: 'Use specific imports to reduce bundle size' }
    );
    
    this.codePatterns.set(
      /any\s*:/g,
      { type: 'typescript', severity: 'high', message: 'Avoid using "any" type, specify proper types' }
    );
    
    this.codePatterns.set(
      /TODO:|FIXME:|HACK:/g,
      { type: 'maintenance', severity: 'medium', message: 'Address TODO/FIXME/HACK comments' }
    );
  }

  async startMonitoring() {
    console.log('🔍 Intelligent Code Quality Monitor Started');
    
    // Run quality analysis every 10 minutes
    setInterval(() => this.runQualityAnalysis(), 10 * 60 * 1000);
    
    // Monitor file changes for real-time quality checks
    this.watchSourceFiles();
    
    // Run initial analysis
    await this.runQualityAnalysis();
  }

  async runQualityAnalysis() {
    try {
      console.log('📊 Running code quality analysis...');
      
      // Run ESLint analysis
      await this.runLintingAnalysis();
      
      // Run TypeScript type checking
      await this.runTypeChecking();
      
      // Analyze code complexity
      await this.analyzeCodeComplexity();
      
      // Check test coverage
      await this.checkTestCoverage();
      
      // Analyze documentation coverage
      await this.analyzeDocumentationCoverage();
      
      // Generate quality report
      this.generateQualityReport();
      
    } catch (error) {
      console.error('❌ Quality analysis failed:', error.message);
    }
  }

  async runLintingAnalysis() {
    return new Promise((resolve) => {
      exec('npm run lint', (error, stdout, stderr) => {
        if (error) {
          // Parse linting errors
          const lintErrors = this.parseLintingOutput(stdout + stderr);
          this.qualityMetrics.lintingIssues = lintErrors.length;
          
          // Generate improvement suggestions
          lintErrors.forEach(error => {
            this.improvementSuggestions.push({
              type: 'linting',
              priority: 'medium',
              message: error.message,
              file: error.file,
              line: error.line,
              action: error.suggestion,
              impact: 'Code consistency and standards'
            });
          });
        } else {
          this.qualityMetrics.lintingIssues = 0;
        }
        resolve();
      });
    });
  }

  async runTypeChecking() {
    return new Promise((resolve) => {
      exec('npm run type-check', (error, stdout, stderr) => {
        if (error) {
          // Parse TypeScript errors
          const typeErrors = this.parseTypeScriptOutput(stdout + stderr);
          this.qualityMetrics.typeSafety = Math.max(0, 100 - typeErrors.length * 10);
          
          typeErrors.forEach(error => {
            this.improvementSuggestions.push({
              type: 'typescript',
              priority: 'high',
              message: error.message,
              file: error.file,
              line: error.line,
              action: error.suggestion,
              impact: 'Type safety and runtime stability'
            });
          });
        } else {
          this.qualityMetrics.typeSafety = 100;
        }
        resolve();
      });
    });
  }

  async analyzeCodeComplexity() {
    const sourceFiles = this.getSourceFiles();
    let totalComplexity = 0;
    let fileCount = 0;
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateFileComplexity(content);
        
        this.fileAnalysis.set(file, {
          complexity,
          lines: content.split('\n').length,
          lastModified: fs.statSync(file).mtime
        });
        
        totalComplexity += complexity;
        fileCount++;
        
        // Flag high complexity files
        if (complexity > 10) {
          this.improvementSuggestions.push({
            type: 'complexity',
            priority: 'medium',
            message: `High cyclomatic complexity (${complexity}) in ${path.basename(file)}`,
            file: file,
            action: 'Refactor complex functions into smaller, simpler functions',
            impact: 'Code maintainability and testing'
          });
        }
      } catch (error) {
        console.warn(`Warning: Could not analyze ${file}:`, error.message);
      }
    }
    
    this.qualityMetrics.codeComplexity = fileCount > 0 ? totalComplexity / fileCount : 0;
  }

  async checkTestCoverage() {
    // Check if Jest is configured and run coverage
    if (fs.existsSync('jest.config.cjs') || fs.existsSync('jest.config.js')) {
      return new Promise((resolve) => {
        exec('npm test -- --coverage --watchAll=false', { timeout: 60000 }, (error, stdout, stderr) => {
          if (!error) {
            // Parse coverage output
            const coverageMatch = stdout.match(/All files\s+\|\s+(\d+)/);
            if (coverageMatch) {
              this.qualityMetrics.testCoverage = parseInt(coverageMatch[1]);
              
              if (this.qualityMetrics.testCoverage < 80) {
                this.improvementSuggestions.push({
                  type: 'testing',
                  priority: 'high',
                  message: `Test coverage is ${this.qualityMetrics.testCoverage}% (target: 80%+)`,
                  action: 'Add more unit tests to improve coverage',
                  impact: 'Code reliability and bug prevention'
                });
              }
            }
          } else {
            this.qualityMetrics.testCoverage = 0;
          }
          resolve();
        });
      });
    } else {
      this.qualityMetrics.testCoverage = 0;
      this.improvementSuggestions.push({
        type: 'testing',
        priority: 'high',
        message: 'No testing framework detected',
        action: 'Set up Jest or another testing framework',
        impact: 'Code quality and reliability'
      });
      resolve();
    }
  }

  async analyzeDocumentationCoverage() {
    const sourceFiles = this.getSourceFiles();
    let documentedFiles = 0;
    let totalFiles = sourceFiles.length;
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for JSDoc comments, README files, and inline documentation
        if (this.hasDocumentation(content, file)) {
          documentedFiles++;
        }
      } catch (error) {
        console.warn(`Warning: Could not check documentation for ${file}:`, error.message);
      }
    }
    
    this.qualityMetrics.documentationCoverage = totalFiles > 0 ? (documentedFiles / totalFiles) * 100 : 0;
    
    if (this.qualityMetrics.documentationCoverage < 70) {
      this.improvementSuggestions.push({
        type: 'documentation',
        priority: 'medium',
        message: `Documentation coverage is ${Math.round(this.qualityMetrics.documentationCoverage)}% (target: 70%+)`,
        action: 'Add JSDoc comments, README files, and inline documentation',
        impact: 'Code maintainability and team collaboration'
      });
    }
  }

  calculateFileComplexity(content) {
    let complexity = 1; // Base complexity
    
    // Count conditional statements
    const conditionals = (content.match(/if\s*\(|else\s*if\s*\(|switch\s*\(|case\s+/g) || []).length;
    const loops = (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length;
    const logicalOps = (content.match(/&&|\|\||!/g) || []).length;
    const catchBlocks = (content.match(/catch\s*\(/g) || []).length;
    
    complexity += conditionals + loops + Math.floor(logicalOps / 2) + catchBlocks;
    
    return complexity;
  }

  hasDocumentation(content, filePath) {
    const fileName = path.basename(filePath);
    
    // Check for JSDoc comments
    if (content.includes('/**') || content.includes('/*')) {
      return true;
    }
    
    // Check for inline comments explaining complex logic
    const commentLines = content.split('\n').filter(line => 
      line.trim().startsWith('//') || line.trim().startsWith('/*')
    ).length;
    
    const totalLines = content.split('\n').length;
    const commentRatio = commentLines / totalLines;
    
    // Check for README files
    if (fileName.toLowerCase().includes('readme') || fileName.toLowerCase().includes('docs')) {
      return true;
    }
    
    return commentRatio > 0.1; // At least 10% of lines should be comments
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'server/src', 'pages', 'components', 'utils'];
    const sourceFiles = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    });
  }

  parseLintingOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          suggestion: this.getLintingSuggestion(match[4])
        });
      }
    });
    
    return errors;
  }

  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/(.+):(\d+):(\d+)\s*-\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          suggestion: this.getTypeScriptSuggestion(match[4])
        });
      }
    });
    
    return errors;
  }

  getLintingSuggestion(message) {
    if (message.includes('no-unused-vars')) {
      return 'Remove unused variables or prefix with underscore (_variable)';
    }
    if (message.includes('no-console')) {
      return 'Remove console statements or use proper logging library';
    }
    if (message.includes('prefer-const')) {
      return 'Use const instead of let for variables that are not reassigned';
    }
    return 'Review and fix the linting issue';
  }

  getTypeScriptSuggestion(message) {
    if (message.includes('implicitly has an \'any\' type')) {
      return 'Add explicit type annotations or enable strict mode';
    }
    if (message.includes('Cannot find module')) {
      return 'Check import paths and ensure modules are properly installed';
    }
    if (message.includes('Property does not exist')) {
      return 'Check object type definitions and property names';
    }
    return 'Review TypeScript configuration and type definitions';
  }

  generateQualityReport() {
    const report = {
      timestamp: new Date(),
      qualityMetrics: this.qualityMetrics,
      improvementSuggestions: this.improvementSuggestions,
      fileAnalysis: Object.fromEntries(this.fileAnalysis),
      qualityHistory: this.qualityHistory
    };
    
    // Calculate overall quality score
    const overallScore = this.calculateOverallQualityScore();
    
    // Save report to file
    fs.writeFileSync(
      path.join(__dirname, '../logs/code-quality-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Log summary
    console.log('\n📈 Code Quality Report:');
    console.log(`   Overall Quality Score: ${overallScore}/100`);
    console.log(`   Code Complexity: ${this.qualityMetrics.codeComplexity.toFixed(2)}`);
    console.log(`   Test Coverage: ${this.qualityMetrics.testCoverage}%`);
    console.log(`   Type Safety: ${this.qualityMetrics.typeSafety}%`);
    console.log(`   Linting Issues: ${this.qualityMetrics.lintingIssues}`);
    console.log(`   Documentation: ${Math.round(this.qualityMetrics.documentationCoverage)}%`);
    console.log(`   Improvement Suggestions: ${this.improvementSuggestions.length}`);
    
    if (this.improvementSuggestions.length > 0) {
      console.log('\n🚀 Recommended Actions:');
      this.improvementSuggestions
        .sort((a, b) => this.getPriorityScore(b.priority) - this.getPriorityScore(a.priority))
        .slice(0, 5) // Show top 5 suggestions
        .forEach((suggestion, index) => {
          console.log(`   ${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.message}`);
          if (suggestion.file) {
            console.log(`      File: ${suggestion.file}`);
          }
          console.log(`      Action: ${suggestion.action}`);
          console.log(`      Impact: ${suggestion.impact}`);
        });
    }
    
    // Update quality history
    this.qualityHistory.push({
      timestamp: new Date(),
      overallScore,
      metrics: { ...this.qualityMetrics }
    });
    
    // Keep only last 30 entries
    if (this.qualityHistory.length > 30) {
      this.qualityHistory = this.qualityHistory.slice(-30);
    }
  }

  calculateOverallQualityScore() {
    const weights = {
      codeComplexity: 0.2,
      testCoverage: 0.25,
      typeSafety: 0.25,
      lintingIssues: 0.15,
      documentationCoverage: 0.15
    };
    
    let score = 0;
    
    // Code complexity (lower is better)
    score += Math.max(0, 100 - this.qualityMetrics.codeComplexity * 5) * weights.codeComplexity;
    
    // Test coverage
    score += this.qualityMetrics.testCoverage * weights.testCoverage;
    
    // Type safety
    score += this.qualityMetrics.typeSafety * weights.typeSafety;
    
    // Linting issues (lower is better)
    score += Math.max(0, 100 - this.qualityMetrics.lintingIssues * 10) * weights.lintingIssues;
    
    // Documentation coverage
    score += this.qualityMetrics.documentationCoverage * weights.documentationCoverage;
    
    return Math.round(score);
  }

  getPriorityScore(priority) {
    const scores = { high: 3, medium: 2, low: 1 };
    return scores[priority] || 0;
  }

  watchSourceFiles() {
    const sourceDirs = ['src', 'server/src', 'pages', 'components', 'utils'];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (filename && (filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.js'))) {
            console.log(`📝 Source file changed: ${filename}`);
            this.scheduleQualityAnalysis();
          }
        });
      }
    });
  }

  scheduleQualityAnalysis() {
    // Debounce quality analysis to avoid excessive runs
    if (this.analysisTimeout) {
      clearTimeout(this.analysisTimeout);
    }
    
    this.analysisTimeout = setTimeout(() => {
      this.runQualityAnalysis();
    }, 10000); // Wait 10 seconds after last file change
  }
}

// Start the monitor
const monitor = new IntelligentCodeQualityMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Code Quality Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Code Quality Monitor...');
  process.exit(0);
});