#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeQualityAnalyzer {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot, 'automation_logs', 'ai-quality-report.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[AI Quality Analyzer] ${message}`);
  }

  async analyzeCodeQuality() {
    this.log('Starting AI-powered code quality analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      metrics: {},
      issues: [],
      recommendations: [],
      score: 0
    };

    try {
      // Analyze TypeScript files
      await this.analyzeTypeScriptFiles(analysis);
      
      // Analyze React components
      await this.analyzeReactComponents(analysis);
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns(analysis);
      
      // Analyze accessibility
      await this.analyzeAccessibility(analysis);
      
      // Calculate overall score
      analysis.score = this.calculateQualityScore(analysis);
      
      // Generate recommendations
      this.generateRecommendations(analysis);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(analysis, null, 2));
      
      this.log(`Analysis complete. Quality score: ${analysis.score}/100`);
      this.log(`Report saved to: ${this.reportFile}`);
      
      return analysis;
    } catch (error) {
      this.log(`Error during analysis: ${error.message}`);
      analysis.error = error.message;
      return analysis;
    }
  }

  async analyzeTypeScriptFiles(analysis) {
    this.log('Analyzing TypeScript files...');
    
    try {
      // Run TypeScript compiler check
      const tscResult = execSync('npx tsc --noEmit', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      
      analysis.metrics.typescriptErrors = 0;
      analysis.metrics.typescriptWarnings = 0;
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      const errorCount = (errorOutput.match(/error/g) || []).length;
      const warningCount = (errorOutput.match(/warning/g) || []).length;
      
      analysis.metrics.typescriptErrors = errorCount;
      analysis.metrics.typescriptWarnings = warningCount;
      
      if (errorCount > 0) {
        analysis.issues.push({
          type: 'typescript',
          severity: 'error',
          count: errorCount,
          message: 'TypeScript compilation errors found'
        });
      }
    }
  }

  async analyzeReactComponents(analysis) {
    this.log('Analyzing React components...');
    
    const srcDir = path.join(this.workspaceRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('No src directory found, skipping React analysis');
      return;
    }

    const componentFiles = this.findFiles(srcDir, ['.tsx', '.jsx']);
    analysis.metrics.totalComponents = componentFiles.length;
    
    let issuesFound = 0;
    componentFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for common React issues
      if (content.includes('useEffect') && !content.includes('useEffect(() => {')) {
        issuesFound++;
        analysis.issues.push({
          type: 'react',
          severity: 'warning',
          file: path.relative(this.workspaceRoot, file),
          message: 'Potential useEffect dependency issue'
        });
      }
      
      if (content.includes('console.log')) {
        issuesFound++;
        analysis.issues.push({
          type: 'react',
          severity: 'info',
          file: path.relative(this.workspaceRoot, file),
          message: 'Console.log found in production code'
        });
      }
    });
    
    analysis.metrics.reactIssues = issuesFound;
  }

  async analyzePerformancePatterns(analysis) {
    this.log('Analyzing performance patterns...');
    
    const srcDir = path.join(this.workspaceRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      return;
    }

    const jsFiles = this.findFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
    let performanceIssues = 0;
    
    jsFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for performance anti-patterns
      if (content.includes('document.querySelector') && !content.includes('useRef')) {
        performanceIssues++;
        analysis.issues.push({
          type: 'performance',
          severity: 'warning',
          file: path.relative(this.workspaceRoot, file),
          message: 'Direct DOM manipulation detected'
        });
      }
      
      if (content.includes('setInterval') || content.includes('setTimeout')) {
        performanceIssues++;
        analysis.issues.push({
          type: 'performance',
          severity: 'warning',
          file: path.relative(this.workspaceRoot, file),
          message: 'Timer usage detected - ensure cleanup'
        });
      }
    });
    
    analysis.metrics.performanceIssues = performanceIssues;
  }

  async analyzeAccessibility(analysis) {
    this.log('Analyzing accessibility...');
    
    const srcDir = path.join(this.workspaceRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      return;
    }

    const componentFiles = this.findFiles(srcDir, ['.tsx', '.jsx']);
    let a11yIssues = 0;
    
    componentFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for accessibility issues
      if (content.includes('<img') && !content.includes('alt=')) {
        a11yIssues++;
        analysis.issues.push({
          type: 'accessibility',
          severity: 'error',
          file: path.relative(this.workspaceRoot, file),
          message: 'Image missing alt attribute'
        });
      }
      
      if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
        a11yIssues++;
        analysis.issues.push({
          type: 'accessibility',
          severity: 'warning',
          file: path.relative(this.workspaceRoot, file),
          message: 'Button missing accessible label'
        });
      }
    });
    
    analysis.metrics.accessibilityIssues = a11yIssues;
  }

  findFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.findFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  calculateQualityScore(analysis) {
    let score = 100;
    
    // Deduct points for issues
    analysis.issues.forEach(issue => {
      switch (issue.severity) {
        case 'error':
          score -= 10;
          break;
        case 'warning':
          score -= 5;
          break;
        case 'info':
          score -= 2;
          break;
      }
    });
    
    // Deduct points for TypeScript errors
    if (analysis.metrics.typescriptErrors) {
      score -= analysis.metrics.typescriptErrors * 5;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generateRecommendations(analysis) {
    if (analysis.metrics.typescriptErrors > 0) {
      analysis.recommendations.push({
        priority: 'high',
        category: 'typescript',
        message: 'Fix TypeScript compilation errors to improve type safety'
      });
    }
    
    if (analysis.metrics.accessibilityIssues > 0) {
      analysis.recommendations.push({
        priority: 'high',
        category: 'accessibility',
        message: 'Address accessibility issues to improve user experience'
      });
    }
    
    if (analysis.metrics.performanceIssues > 0) {
      analysis.recommendations.push({
        priority: 'medium',
        category: 'performance',
        message: 'Optimize performance patterns for better user experience'
      });
    }
    
    if (analysis.metrics.reactIssues > 0) {
      analysis.recommendations.push({
        priority: 'medium',
        category: 'react',
        message: 'Review React component patterns for best practices'
      });
    }
  }
}

// CLI interface
if (require.main === module) {
  const analyzer = new AICodeQualityAnalyzer();
  analyzer.analyzeCodeQuality().catch(console.error);
}

module.exports = AICodeQualityAnalyzer;