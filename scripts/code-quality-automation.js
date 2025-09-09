#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CodeQualityAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'code-quality-automation.log');
    this.qualityReportFile = path.join(this.projectRoot, 'logs', 'code-quality-report.json');
    this.improvements = [];
    this.issues = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async analyzeCodeQuality() {
    this.log('🔍 Analyzing code quality...');
    
    const metrics = {
      complexity: await this.analyzeComplexity(),
      maintainability: await this.analyzeMaintainability(),
      duplication: await this.analyzeDuplication(),
      coverage: await this.analyzeCoverage(),
      performance: await this.analyzePerformance()
    };
    
    return metrics;
  }

  async analyzeComplexity() {
    this.log('Analyzing code complexity...');
    
    // Simple complexity analysis based on file sizes and line counts
    const files = this.getSourceFiles();
    const complexityScores = [];
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        const lineCount = lines.length;
        
        // Calculate complexity based on various factors
        const complexity = this.calculateComplexity(content, lineCount);
        complexityScores.push({
          file,
          lineCount,
          complexity,
          score: this.getComplexityScore(complexity)
        });
      } catch (error) {
        this.log(`Error analyzing ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return complexityScores;
  }

  calculateComplexity(content, lineCount) {
    let complexity = 0;
    
    // Count conditional statements
    const ifCount = (content.match(/if\s*\(/g) || []).length;
    const forCount = (content.match(/for\s*\(/g) || []).length;
    const whileCount = (content.match(/while\s*\(/g) || []).length;
    const switchCount = (content.match(/switch\s*\(/g) || []).length;
    const ternaryCount = (content.match(/\?/g) || []).length;
    
    // Count function definitions
    const functionCount = (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length;
    
    // Count nested levels
    const maxNesting = this.calculateMaxNesting(content);
    
    complexity = ifCount + forCount + whileCount + switchCount + ternaryCount + functionCount + maxNesting;
    
    return complexity;
  }

  calculateMaxNesting(content) {
    let maxNesting = 0;
    let currentNesting = 0;
    const lines = content.split('\n');
    
    for (const line of lines) {
      const openBraces = (line.match(/{/g) || []).length;
      const closeBraces = (line.match(/}/g) || []).length;
      
      currentNesting += openBraces - closeBraces;
      maxNesting = Math.max(maxNesting, currentNesting);
    }
    
    return maxNesting;
  }

  getComplexityScore(complexity) {
    if (complexity <= 10) return 'low';
    if (complexity <= 25) return 'medium';
    if (complexity <= 50) return 'high';
    return 'very-high';
  }

  async analyzeMaintainability() {
    this.log('Analyzing code maintainability...');
    
    const files = this.getSourceFiles();
    const maintainabilityScores = [];
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const score = this.calculateMaintainabilityScore(content);
        maintainabilityScores.push({
          file,
          score,
          issues: this.identifyMaintainabilityIssues(content)
        });
      } catch (error) {
        this.log(`Error analyzing maintainability for ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return maintainabilityScores;
  }

  calculateMaintainabilityScore(content) {
    let score = 100;
    
    // Penalize long functions
    const lines = content.split('\n');
    let functionStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/)) {
        if (functionStart !== -1) {
          const functionLength = i - functionStart;
          if (functionLength > 50) score -= 10;
          if (functionLength > 100) score -= 20;
        }
        functionStart = i;
      }
      
      if (line.includes('}') && functionStart !== -1) {
        const functionLength = i - functionStart;
        if (functionLength > 50) score -= 10;
        if (functionLength > 100) score -= 20;
        functionStart = -1;
      }
    }
    
    // Penalize long lines
    for (const line of lines) {
      if (line.length > 120) score -= 5;
      if (line.length > 150) score -= 10;
    }
    
    // Penalize magic numbers
    const magicNumbers = content.match(/\b\d{3,}\b/g) || [];
    score -= magicNumbers.length * 2;
    
    return Math.max(0, score);
  }

  identifyMaintainabilityIssues(content) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.length > 120) {
        issues.push({
          line: i + 1,
          type: 'long-line',
          message: `Line ${i + 1} is too long (${line.length} characters)`
        });
      }
      
      if (line.match(/\b\d{3,}\b/)) {
        issues.push({
          line: i + 1,
          type: 'magic-number',
          message: `Line ${i + 1} contains magic number(s)`
        });
      }
    }
    
    return issues;
  }

  async analyzeDuplication() {
    this.log('Analyzing code duplication...');
    
    // Simple duplication detection based on repeated code patterns
    const files = this.getSourceFiles();
    const duplicationReport = [];
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const duplications = this.findDuplications(content);
        
        if (duplications.length > 0) {
          duplicationReport.push({
            file,
            duplications
          });
        }
      } catch (error) {
        this.log(`Error analyzing duplication for ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return duplicationReport;
  }

  findDuplications(content) {
    const duplications = [];
    const lines = content.split('\n');
    
    // Find repeated line patterns
    for (let i = 0; i < lines.length - 2; i++) {
      const pattern = lines.slice(i, i + 3).join('\n');
      let count = 0;
      
      for (let j = 0; j < lines.length - 2; j++) {
        const comparePattern = lines.slice(j, j + 3).join('\n');
        if (pattern === comparePattern && pattern.trim().length > 10) {
          count++;
        }
      }
      
      if (count > 1) {
        duplications.push({
          startLine: i + 1,
          endLine: i + 3,
          pattern: pattern.trim(),
          count
        });
      }
    }
    
    return duplications;
  }

  async analyzeCoverage() {
    this.log('Analyzing test coverage...');
    
    // This would typically run actual test coverage tools
    // For now, we'll provide a placeholder
    return {
      message: 'Test coverage analysis requires test coverage tools to be configured'
    };
  }

  async analyzePerformance() {
    this.log('Analyzing performance patterns...');
    
    const files = this.getSourceFiles();
    const performanceIssues = [];
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const issues = this.identifyPerformanceIssues(content);
        
        if (issues.length > 0) {
          performanceIssues.push({
            file,
            issues
          });
        }
      } catch (error) {
        this.log(`Error analyzing performance for ${file}: ${error.message}`, 'WARN');
      }
    }
    
    return performanceIssues;
  }

  identifyPerformanceIssues(content) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for common performance anti-patterns
      if (line.includes('innerHTML') && !line.includes('DOMPurify')) {
        issues.push({
          line: i + 1,
          type: 'security-risk',
          message: 'innerHTML usage without sanitization'
        });
      }
      
      if (line.includes('setTimeout') && line.includes('0')) {
        issues.push({
          line: i + 1,
          type: 'performance',
          message: 'setTimeout with 0 delay may cause performance issues'
        });
      }
      
      if (line.includes('document.querySelectorAll') && line.includes('for')) {
        issues.push({
          line: i + 1,
          type: 'performance',
          message: 'querySelectorAll in loops may cause performance issues'
        });
      }
    }
    
    return issues;
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'services'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx')
    );
  }

  collectFiles(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.collectFiles(itemPath, files);
      } else {
        files.push(itemPath);
      }
    }
  }

  async generateReport(metrics) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.getSourceFiles().length,
        averageComplexity: this.calculateAverageComplexity(metrics.complexity),
        averageMaintainability: this.calculateAverageMaintainability(metrics.maintainability),
        totalDuplications: metrics.duplication.reduce((sum, file) => sum + file.duplications.length, 0),
        totalPerformanceIssues: metrics.performance.reduce((sum, file) => sum + file.issues.length, 0)
      },
      metrics,
      recommendations: this.generateRecommendations(metrics)
    };
    
    // Save report
    fs.writeFileSync(this.qualityReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Code quality report generated`);
    return report;
  }

  calculateAverageComplexity(complexityScores) {
    if (complexityScores.length === 0) return 0;
    const total = complexityScores.reduce((sum, score) => sum + score.complexity, 0);
    return Math.round(total / complexityScores.length * 100) / 100;
  }

  calculateAverageMaintainability(maintainabilityScores) {
    if (maintainabilityScores.length === 0) return 0;
    const total = maintainabilityScores.reduce((sum, score) => sum + score.score, 0);
    return Math.round(total / maintainabilityScores.length * 100) / 100;
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    // Complexity recommendations
    const highComplexityFiles = metrics.complexity.filter(score => score.score === 'high' || score.score === 'very-high');
    if (highComplexityFiles.length > 0) {
      recommendations.push({
        category: 'complexity',
        priority: 'high',
        message: `Consider refactoring ${highComplexityFiles.length} files with high complexity`,
        files: highComplexityFiles.map(f => f.file)
      });
    }
    
    // Maintainability recommendations
    const lowMaintainabilityFiles = metrics.maintainability.filter(score => score.score < 50);
    if (lowMaintainabilityFiles.length > 0) {
      recommendations.push({
        category: 'maintainability',
        priority: 'high',
        message: `Improve maintainability of ${lowMaintainabilityFiles.length} files`,
        files: lowMaintainabilityFiles.map(f => f.file)
      });
    }
    
    // Duplication recommendations
    if (metrics.duplication.length > 0) {
      recommendations.push({
        category: 'duplication',
        priority: 'medium',
        message: 'Consider extracting common code into reusable functions',
        files: metrics.duplication.map(d => d.file)
      });
    }
    
    // Performance recommendations
    if (metrics.performance.length > 0) {
      recommendations.push({
        category: 'performance',
        priority: 'medium',
        message: 'Review performance patterns in identified files',
        files: metrics.performance.map(p => p.file)
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Code Quality Automation');
    
    try {
      // Analyze code quality
      const metrics = await this.analyzeCodeQuality();
      
      // Generate report
      const report = await this.generateReport(metrics);
      
      this.log('✅ Code quality analysis completed!');
      
      // Log summary
      this.log(`📊 Summary: ${report.summary.totalFiles} files analyzed`);
      this.log(`  - Average complexity: ${report.summary.averageComplexity}`);
      this.log(`  - Average maintainability: ${report.summary.averageMaintainability}`);
      this.log(`  - Total duplications: ${report.summary.totalDuplications}`);
      this.log(`  - Performance issues: ${report.summary.totalPerformanceIssues}`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} recommendations generated:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in code quality automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the code quality automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new CodeQualityAutomation();
  automation.run().catch(console.error);
}

export default CodeQualityAutomation;