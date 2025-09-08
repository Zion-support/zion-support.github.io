#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeAnalyzer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 600000; // 10 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.analysisResults = {};
    this.codeMetrics = {};
    this.improvementSuggestions = [];
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async analyzeCodeStructure() {
    try {
      this.log('🔍 Analyzing code structure...', 'info');
      
      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        this.log('Source directory not found', 'warn');
        return false;
      }

      const structure = this.analyzeDirectory(srcDir);
      this.codeMetrics.structure = structure;
      
      this.log(`Code structure analyzed: ${structure.fileCount} files, ${structure.totalLines} lines`, 'info');
      return true;
    } catch (error) {
      this.log(`Code structure analysis failed: ${error.message}`, 'error');
      return false;
    }
  }

  analyzeDirectory(dirPath, relativePath = '') {
    const stats = {
      fileCount: 0,
      totalLines: 0,
      directories: 0,
      fileTypes: {},
      largestFiles: [],
      complexity: {}
    };

    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const itemRelativePath = path.join(relativePath, item);
        const itemStat = fs.statSync(fullPath);

        if (itemStat.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules') {
            stats.directories++;
            const subStats = this.analyzeDirectory(fullPath, itemRelativePath);
            stats.fileCount += subStats.fileCount;
            stats.totalLines += subStats.totalLines;
          }
        } else if (itemStat.isFile()) {
          const ext = path.extname(item);
          if (['.js', '.jsx', '.ts', '.tsx', '.vue'].includes(ext)) {
            stats.fileCount++;
            
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              const lines = content.split('\n').length;
              stats.totalLines += lines;
              
              // Track file types
              stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
              
              // Track largest files
              stats.largestFiles.push({
                path: itemRelativePath,
                lines: lines,
                size: itemStat.size
              });
              
              // Analyze complexity
              const complexity = this.analyzeFileComplexity(content, ext);
              if (complexity.cyclomatic > 10) {
                stats.complexity[itemRelativePath] = complexity;
              }
            } catch (readError) {
              this.log(`Could not read file ${itemRelativePath}: ${readError.message}`, 'warn');
            }
          }
        }
      }

      // Sort largest files
      stats.largestFiles.sort((a, b) => b.lines - a.lines);
      stats.largestFiles = stats.largestFiles.slice(0, 10);

    } catch (error) {
      this.log(`Directory analysis failed for ${dirPath}: ${error.message}`, 'warn');
    }

    return stats;
  }

  analyzeFileComplexity(content, fileType) {
    const complexity = {
      cyclomatic: 1,
      lines: content.split('\n').length,
      functions: 0,
      classes: 0,
      imports: 0,
      exports: 0
    };

    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Count complexity factors
      if (trimmed.includes('if ') || trimmed.includes('else if') || trimmed.includes('for ') || 
          trimmed.includes('while ') || trimmed.includes('switch ') || trimmed.includes('case ') ||
          trimmed.includes('catch ') || trimmed.includes('&&') || trimmed.includes('||')) {
        complexity.cyclomatic++;
      }
      
      if (trimmed.includes('function ') || trimmed.includes('=>')) {
        complexity.functions++;
      }
      
      if (trimmed.includes('class ')) {
        complexity.classes++;
      }
      
      if (trimmed.includes('import ') || trimmed.includes('require(')) {
        complexity.imports++;
      }
      
      if (trimmed.includes('export ') || trimmed.includes('module.exports')) {
        complexity.exports++;
      }
    }

    return complexity;
  }

  async analyzeCodeQuality() {
    try {
      this.log('🔍 Analyzing code quality...', 'info');
      
      const quality = {
        linting: await this.runLintingAnalysis(),
        typescript: await this.runTypeScriptAnalysis(),
        complexity: this.analyzeComplexityMetrics(),
        patterns: this.analyzeCodePatterns(),
        suggestions: []
      };

      // Generate improvement suggestions
      quality.suggestions = this.generateQualitySuggestions(quality);
      
      this.codeMetrics.quality = quality;
      this.log('Code quality analysis completed', 'info');
      return true;
    } catch (error) {
      this.log(`Code quality analysis failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runLintingAnalysis() {
    try {
      const result = execSync('npm run lint --silent', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        issues: 0,
        details: 'No linting issues found'
      };
    } catch (error) {
      // Parse linting output for issues
      const output = error.stdout || error.stderr || '';
      const issues = output.split('\n').filter(line => line.includes('error') || line.includes('warning'));
      
      return {
        status: 'failed',
        issues: issues.length,
        details: output
      };
    }
  }

  async runTypeScriptAnalysis() {
    try {
      const result = execSync('npm run type-check --silent', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        status: 'passed',
        issues: 0,
        details: 'No TypeScript issues found'
      };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const issues = output.split('\n').filter(line => line.includes('error') || line.includes('warning'));
      
      return {
        status: 'failed',
        issues: issues.length,
        details: output
      };
    }
  }

  analyzeComplexityMetrics() {
    const complexity = {
      highComplexityFiles: 0,
      averageComplexity: 0,
      recommendations: []
    };

    if (this.codeMetrics.structure && this.codeMetrics.structure.complexity) {
      const files = Object.values(this.codeMetrics.structure.complexity);
      complexity.highComplexityFiles = files.length;
      
      if (files.length > 0) {
        const totalComplexity = files.reduce((sum, file) => sum + file.cyclomatic, 0);
        complexity.averageComplexity = totalComplexity / files.length;
        
        // Generate recommendations
        if (complexity.averageComplexity > 8) {
          complexity.recommendations.push('Consider refactoring high complexity functions');
        }
        if (complexity.highComplexityFiles > 5) {
          complexity.recommendations.push('Multiple files have high complexity - review architecture');
        }
      }
    }

    return complexity;
  }

  analyzeCodePatterns() {
    const patterns = {
      antiPatterns: [],
      bestPractices: [],
      opportunities: []
    };

    // Check for common anti-patterns
    if (this.codeMetrics.structure) {
      const { fileTypes, largestFiles } = this.codeMetrics.structure;
      
      // Check file size distribution
      if (fileTypes['.tsx'] && fileTypes['.tsx'] > 50) {
        patterns.antiPatterns.push('Many TSX files - consider component consolidation');
      }
      
      // Check for very large files
      if (largestFiles.length > 0 && largestFiles[0].lines > 500) {
        patterns.antiPatterns.push('Very large files detected - consider splitting');
      }
      
      // Check for mixed file types
      if (fileTypes['.js'] && fileTypes['.ts']) {
        patterns.antiPatterns.push('Mixed JavaScript and TypeScript - consider migration');
      }
    }

    return patterns;
  }

  generateQualitySuggestions(quality) {
    const suggestions = [];
    
    if (quality.linting.status === 'failed') {
      suggestions.push('Fix ESLint issues to improve code quality');
    }
    
    if (quality.typescript.status === 'failed') {
      suggestions.push('Resolve TypeScript type errors');
    }
    
    if (quality.complexity.highComplexityFiles > 0) {
      suggestions.push('Refactor high complexity functions');
    }
    
    if (quality.patterns.antiPatterns.length > 0) {
      suggestions.push('Address code anti-patterns');
    }
    
    return suggestions;
  }

  async analyzePerformance() {
    try {
      this.log('🔍 Analyzing performance patterns...', 'info');
      
      const performance = {
        bundleSize: await this.analyzeBundleSize(),
        imports: this.analyzeImportPatterns(),
        rendering: this.analyzeRenderingPatterns(),
        suggestions: []
      };

      // Generate performance suggestions
      performance.suggestions = this.generatePerformanceSuggestions(performance);
      
      this.codeMetrics.performance = performance;
      this.log('Performance analysis completed', 'info');
      return true;
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'error');
      return false;
    }
  }

  async analyzeBundleSize() {
    try {
      // Try to analyze bundle size if build exists
      const distDir = path.join(this.workingDir, 'dist');
      if (fs.existsSync(distDir)) {
        const files = fs.readdirSync(distDir);
        const jsFiles = files.filter(f => f.endsWith('.js'));
        
        let totalSize = 0;
        for (const file of jsFiles) {
          const filePath = path.join(distDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        }
        
        return {
          totalSize: totalSize,
          fileCount: jsFiles.length,
          averageSize: totalSize / jsFiles.length
        };
      }
      
      return { totalSize: 0, fileCount: 0, averageSize: 0 };
    } catch (error) {
      return { totalSize: 0, fileCount: 0, averageSize: 0 };
    }
  }

  analyzeImportPatterns() {
    const patterns = {
      largeImports: [],
      circularDependencies: [],
      unusedImports: []
    };

    // This would require more sophisticated analysis
    // For now, return basic structure
    return patterns;
  }

  analyzeRenderingPatterns() {
    const patterns = {
      heavyComponents: [],
      renderOptimizations: [],
      suggestions: []
    };

    // This would require React-specific analysis
    // For now, return basic structure
    return patterns;
  }

  generatePerformanceSuggestions(performance) {
    const suggestions = [];
    
    if (performance.bundleSize.totalSize > 1024 * 1024) { // 1MB
      suggestions.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (performance.bundleSize.averageSize > 100 * 1024) { // 100KB per file
      suggestions.push('Individual bundle files are large - consider optimization');
    }
    
    return suggestions;
  }

  async generateAnalysisReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: this.codeMetrics.structure?.fileCount || 0,
          totalLines: this.codeMetrics.structure?.totalLines || 0,
          qualityScore: this.calculateQualityScore(),
          performanceScore: this.calculatePerformanceScore()
        },
        structure: this.codeMetrics.structure,
        quality: this.codeMetrics.quality,
        performance: this.codeMetrics.performance,
        recommendations: this.generateOverallRecommendations()
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'code-analysis-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Code analysis report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  calculateQualityScore() {
    if (!this.codeMetrics.quality) return 0;
    
    let score = 100;
    const { linting, typescript, complexity } = this.codeMetrics.quality;
    
    if (linting.status === 'failed') score -= 20;
    if (typescript.status === 'failed') score -= 20;
    if (complexity.highComplexityFiles > 0) score -= Math.min(30, complexity.highComplexityFiles * 5);
    
    return Math.max(0, score);
  }

  calculatePerformanceScore() {
    if (!this.codeMetrics.performance) return 0;
    
    let score = 100;
    const { bundleSize } = this.codeMetrics.performance;
    
    if (bundleSize.totalSize > 1024 * 1024) score -= 20;
    if (bundleSize.averageSize > 100 * 1024) score -= 15;
    
    return Math.max(0, score);
  }

  generateOverallRecommendations() {
    const recommendations = [];
    
    if (this.codeMetrics.quality) {
      recommendations.push(...this.codeMetrics.quality.suggestions);
    }
    
    if (this.codeMetrics.performance) {
      recommendations.push(...this.codeMetrics.performance.suggestions);
    }
    
    // Add general recommendations
    if (this.codeMetrics.structure?.fileCount > 100) {
      recommendations.push('Large codebase detected - consider modularization');
    }
    
    return [...new Set(recommendations)]; // Remove duplicates
  }

  async run() {
    this.log('🔍 Starting Code Analysis...', 'info');
    
    try {
      await this.analyzeCodeStructure();
      await this.analyzeCodeQuality();
      await this.analyzePerformance();
      
      const report = await this.generateAnalysisReport();
      
      if (report) {
        this.log(`✅ Code analysis completed:`, 'info');
        this.log(`   Quality Score: ${report.summary.qualityScore}/100`, 'info');
        this.log(`   Performance Score: ${report.summary.performanceScore}/100`, 'info');
        this.log(`   Files analyzed: ${report.summary.totalFiles}`, 'info');
        this.log(`   Lines of code: ${report.summary.totalLines}`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`Code analysis failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Code analyzer started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const analyzer = new CodeAnalyzer();
  analyzer.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    analyzer.log('🛑 Code analyzer shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    analyzer.log('🛑 Code analyzer shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = CodeAnalyzer;