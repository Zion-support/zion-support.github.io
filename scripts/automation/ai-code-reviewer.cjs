#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Review Automation...');

class AICodeReviewer {
  constructor() {
    this.reviewResults = {
      codeQuality: { score: 0, issues: [], suggestions: [] },
      complexity: { score: 0, hotspots: [], recommendations: [] },
      maintainability: { score: 0, concerns: [], improvements: [] },
      security: { score: 0, vulnerabilities: [], fixes: [] },
      performance: { score: 0, bottlenecks: [], optimizations: [] }
    };
    this.reportDir = path.join(process.cwd(), 'ai-code-review-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.qualityThreshold = parseFloat(process.env.CODE_QUALITY_THRESHOLD) || 0.8;
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    console.log('🔍 Analyzing code quality...');
    try {
      // Run ESLint for code quality analysis
      const lintOutput = execSync('npm run lint --silent', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });

      const qualityScore = this.calculateQualityScore(lintOutput);
      this.reviewResults.codeQuality.score = qualityScore;
      this.reviewResults.codeQuality.issues = this.parseLintIssues(lintOutput);
      this.reviewResults.codeQuality.suggestions = this.generateQualitySuggestions(qualityScore);

      console.log(`✅ Code quality analysis completed. Score: ${(qualityScore * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Code quality analysis failed, using fallback methods');
      this.reviewResults.codeQuality.score = 0.5;
      this.reviewResults.codeQuality.issues = ['Unable to run linting analysis'];
    }
  }

  async analyzeCodeComplexity() {
    console.log('🧮 Analyzing code complexity...');
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const complexityData = this.analyzeDirectoryComplexity(srcDir);
      
      this.reviewResults.complexity.score = complexityData.score;
      this.reviewResults.complexity.hotspots = complexityData.hotspots;
      this.reviewResults.complexity.recommendations = complexityData.recommendations;

      console.log(`✅ Complexity analysis completed. Score: ${(complexityData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Complexity analysis failed:', error.message);
      this.reviewResults.complexity.score = 0.5;
    }
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing code maintainability...');
    try {
      const maintainabilityData = this.assessMaintainability();
      
      this.reviewResults.maintainability.score = maintainabilityData.score;
      this.reviewResults.maintainability.concerns = maintainabilityData.concerns;
      this.reviewResults.maintainability.improvements = maintainabilityData.improvements;

      console.log(`✅ Maintainability analysis completed. Score: ${(maintainabilityData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Maintainability analysis failed:', error.message);
      this.reviewResults.maintainability.score = 0.5;
    }
  }

  async analyzeSecurity() {
    console.log('🔒 Analyzing code security...');
    try {
      const securityData = await this.performSecurityAnalysis();
      
      this.reviewResults.security.score = securityData.score;
      this.reviewResults.security.vulnerabilities = securityData.vulnerabilities;
      this.reviewResults.security.fixes = securityData.fixes;

      console.log(`✅ Security analysis completed. Score: ${(securityData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Security analysis failed:', error.message);
      this.reviewResults.security.score = 0.5;
    }
  }

  async analyzePerformance() {
    console.log('⚡ Analyzing code performance...');
    try {
      const performanceData = this.assessPerformance();
      
      this.reviewResults.performance.score = performanceData.score;
      this.reviewResults.performance.bottlenecks = performanceData.bottlenecks;
      this.reviewResults.performance.optimizations = performanceData.optimizations;

      console.log(`✅ Performance analysis completed. Score: ${(performanceData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Performance analysis failed:', error.message);
      this.reviewResults.performance.score = 0.5;
    }
  }

  calculateQualityScore(lintOutput) {
    try {
      const lines = lintOutput.split('\n');
      const errorLines = lines.filter(line => line.includes('error'));
      const warningLines = lines.filter(line => line.includes('warning'));
      
      const totalIssues = errorLines.length + warningLines.length;
      const maxIssues = 100; // Threshold for perfect score
      
      return Math.max(0, 1 - (totalIssues / maxIssues));
    } catch (error) {
      return 0.5;
    }
  }

  parseLintIssues(lintOutput) {
    try {
      const lines = lintOutput.split('\n');
      return lines
        .filter(line => line.includes('error') || line.includes('warning'))
        .map(line => line.trim())
        .slice(0, 20); // Limit to top 20 issues
    } catch (error) {
      return ['Unable to parse lint issues'];
    }
  }

  generateQualitySuggestions(score) {
    const suggestions = [];
    
    if (score < 0.6) {
      suggestions.push('🔴 Critical: Immediate code quality improvements needed');
      suggestions.push('🔴 Critical: Review and fix all linting errors');
      suggestions.push('🔴 Critical: Implement code quality standards');
    } else if (score < 0.8) {
      suggestions.push('🟡 Warning: Code quality needs improvement');
      suggestions.push('🟡 Warning: Address major linting warnings');
      suggestions.push('🟡 Warning: Consider implementing stricter standards');
    } else if (score < 0.9) {
      suggestions.push('🟢 Good: Minor improvements recommended');
      suggestions.push('🟢 Good: Address remaining linting warnings');
      suggestions.push('🟢 Good: Consider code quality best practices');
    } else {
      suggestions.push('🟢 Excellent: Code quality is very high');
      suggestions.push('🟢 Excellent: Maintain current standards');
      suggestions.push('🟢 Excellent: Consider advanced quality metrics');
    }
    
    return suggestions;
  }

  analyzeDirectoryComplexity(srcDir) {
    try {
      let totalComplexity = 0;
      let fileCount = 0;
      const hotspots = [];
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          const complexity = this.calculateFileComplexity(file);
          totalComplexity += complexity;
          fileCount++;
          
          if (complexity > 10) {
            hotspots.push({
              file: path.relative(process.cwd(), file),
              complexity: complexity,
              risk: complexity > 20 ? 'high' : 'medium'
            });
          }
        });
      }
      
      const avgComplexity = fileCount > 0 ? totalComplexity / fileCount : 0;
      const score = Math.max(0, 1 - (avgComplexity / 20)); // 20 is max acceptable complexity
      
      const recommendations = this.generateComplexityRecommendations(avgComplexity, hotspots);
      
      return { score, hotspots, recommendations };
    } catch (error) {
      return { score: 0.5, hotspots: [], recommendations: ['Unable to analyze complexity'] };
    }
  }

  getAllFiles(dir, extensions) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        results = results.concat(this.getAllFiles(filePath, extensions));
      } else if (extensions.some(ext => file.endsWith(ext))) {
        results.push(filePath);
      }
    });
    
    return results;
  }

  calculateFileComplexity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      let complexity = 0;
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.includes('if ') || trimmed.includes('else if') || 
            trimmed.includes('for ') || trimmed.includes('while ') ||
            trimmed.includes('switch ') || trimmed.includes('catch ') ||
            trimmed.includes('&&') || trimmed.includes('||')) {
          complexity++;
        }
      });
      
      return complexity;
    } catch (error) {
      return 0;
    }
  }

  generateComplexityRecommendations(avgComplexity, hotspots) {
    const recommendations = [];
    
    if (avgComplexity > 15) {
      recommendations.push('🔴 Critical: Average complexity is too high');
      recommendations.push('🔴 Critical: Refactor complex functions immediately');
    } else if (avgComplexity > 10) {
      recommendations.push('🟡 Warning: Consider reducing function complexity');
      recommendations.push('🟡 Warning: Break down complex functions');
    }
    
    if (hotspots.length > 0) {
      recommendations.push(`🟡 Warning: ${hotspots.length} files have high complexity`);
      recommendations.push('🟡 Warning: Prioritize refactoring of hotspot files');
    }
    
    return recommendations;
  }

  assessMaintainability() {
    try {
      const srcDir = path.join(process.cwd(), 'src');
      let maintainabilityScore = 1;
      const concerns = [];
      const improvements = [];
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        // Check for large files
        const largeFiles = files.filter(file => {
          const stats = fs.statSync(file);
          return stats.size > 100000; // 100KB threshold
        });
        
        if (largeFiles.length > 0) {
          maintainabilityScore -= 0.2;
          concerns.push(`${largeFiles.length} files are larger than 100KB`);
          improvements.push('Consider breaking large files into smaller modules');
        }
        
        // Check for deep nesting
        const deepNestingFiles = this.checkDeepNesting(files);
        if (deepNestingFiles.length > 0) {
          maintainabilityScore -= 0.15;
          concerns.push(`${deepNestingFiles.length} files have deep nesting`);
          improvements.push('Reduce nesting depth for better readability');
        }
      }
      
      maintainabilityScore = Math.max(0, maintainabilityScore);
      
      return { score: maintainabilityScore, concerns, improvements };
    } catch (error) {
      return { score: 0.5, concerns: ['Unable to assess maintainability'], improvements: [] };
    }
  }

  checkDeepNesting(files) {
    const deepNestingFiles = [];
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let maxDepth = 0;
        let currentDepth = 0;
        
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed.includes('{')) currentDepth++;
          if (trimmed.includes('}')) currentDepth--;
          maxDepth = Math.max(maxDepth, currentDepth);
        });
        
        if (maxDepth > 5) {
          deepNestingFiles.push({
            file: path.relative(process.cwd(), file),
            maxDepth: maxDepth
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });
    
    return deepNestingFiles;
  }

  async performSecurityAnalysis() {
    try {
      // Check for common security issues
      const securityIssues = [];
      const fixes = [];
      let securityScore = 1;
      
      // Check package.json for known vulnerable packages
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for common security anti-patterns
      if (dependencies['eval'] || dependencies['vm']) {
        securityScore -= 0.3;
        securityIssues.push('Dangerous packages detected (eval, vm)');
        fixes.push('Remove eval and vm packages immediately');
      }
      
      // Check for outdated packages
      try {
        const auditOutput = execSync('npm audit --json', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const auditData = JSON.parse(auditOutput);
        if (auditData.metadata && auditData.metadata.vulnerabilities) {
          const vulnCount = auditData.metadata.vulnerabilities.total;
          if (vulnCount > 0) {
            securityScore -= Math.min(0.4, vulnCount * 0.1);
            securityIssues.push(`${vulnCount} security vulnerabilities found`);
            fixes.push('Run npm audit fix to resolve vulnerabilities');
          }
        }
      } catch (error) {
        // npm audit failed, continue with other checks
      }
      
      securityScore = Math.max(0, securityScore);
      
      return { score: securityScore, vulnerabilities: securityIssues, fixes };
    } catch (error) {
      return { score: 0.5, vulnerabilities: ['Unable to perform security analysis'], fixes: [] };
    }
  }

  assessPerformance() {
    try {
      let performanceScore = 1;
      const bottlenecks = [];
      const optimizations = [];
      
      // Check for common performance anti-patterns
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for expensive operations
            if (content.includes('document.querySelectorAll') && content.includes('forEach')) {
              bottlenecks.push('Inefficient DOM queries in loops');
              optimizations.push('Cache DOM queries outside loops');
              performanceScore -= 0.1;
            }
            
            if (content.includes('setInterval') && content.includes('setTimeout')) {
              bottlenecks.push('Potential memory leaks with timers');
              optimizations.push('Clear timers when components unmount');
              performanceScore -= 0.1;
            }
            
            if (content.includes('JSON.parse') && content.includes('JSON.stringify')) {
              bottlenecks.push('Frequent JSON operations');
              optimizations.push('Cache parsed JSON when possible');
              performanceScore -= 0.05;
            }
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
      
      performanceScore = Math.max(0, performanceScore);
      
      return { score: performanceScore, bottlenecks, optimizations };
    } catch (error) {
      return { score: 0.5, bottlenecks: ['Unable to assess performance'], optimizations: [] };
    }
  }

  generateOverallRecommendations() {
    const overallScore = (
      this.reviewResults.codeQuality.score * 0.3 +
      this.reviewResults.complexity.score * 0.2 +
      this.reviewResults.maintainability.score * 0.2 +
      this.reviewResults.security.score * 0.2 +
      this.reviewResults.performance.score * 0.1
    );
    
    const recommendations = [];
    
    if (overallScore < this.qualityThreshold) {
      recommendations.push('🚨 CRITICAL: Overall code quality below threshold');
      recommendations.push('🚨 CRITICAL: Immediate action required');
      recommendations.push('🚨 CRITICAL: Focus on high-priority issues first');
    } else if (overallScore < 0.9) {
      recommendations.push('⚠️ WARNING: Code quality needs improvement');
      recommendations.push('⚠️ WARNING: Address issues systematically');
      recommendations.push('⚠️ WARNING: Consider code review process improvements');
    } else {
      recommendations.push('✅ EXCELLENT: Code quality is very high');
      recommendations.push('✅ EXCELLENT: Maintain current standards');
      recommendations.push('✅ EXCELLENT: Consider advanced quality metrics');
    }
    
    return { overallScore, recommendations };
  }

  async generateReport() {
    const overall = this.generateOverallRecommendations();
    const report = {
      timestamp: new Date().toISOString(),
      overallScore: overall.overallScore,
      qualityThreshold: this.qualityThreshold,
      recommendations: overall.recommendations,
      details: this.reviewResults,
      summary: {
        codeQuality: `${(this.reviewResults.codeQuality.score * 100).toFixed(1)}%`,
        complexity: `${(this.reviewResults.complexity.score * 100).toFixed(1)}%`,
        maintainability: `${(this.reviewResults.maintainability.score * 100).toFixed(1)}%`,
        security: `${(this.reviewResults.security.score * 100).toFixed(1)}%`,
        performance: `${(this.reviewResults.performance.score * 100).toFixed(1)}%`
      }
    };
    
    const reportFile = path.join(this.reportDir, `ai-code-review-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 AI Code Review Report generated: ${reportFile}`);
    console.log(`📊 Overall Score: ${(overall.overallScore * 100).toFixed(1)}%`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting AI-Powered Code Review...');
    
    try {
      await this.analyzeCodeQuality();
      await this.analyzeCodeComplexity();
      await this.analyzeMaintainability();
      await this.analyzeSecurity();
      await this.analyzePerformance();
      
      const report = await this.generateReport();
      
      const duration = Date.now() - this.startTime;
      console.log(`✅ AI Code Review completed in ${duration}ms`);
      
      return report;
    } catch (error) {
      console.error('❌ AI Code Review failed:', error.message);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const reviewer = new AICodeReviewer();
  
  // Set up interval for continuous operation
  const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours default
  
  const runReview = async () => {
    try {
      await reviewer.run();
    } catch (error) {
      console.error('Review cycle failed:', error.message);
    }
  };
  
  // Run immediately
  runReview();
  
  // Set up interval
  setInterval(runReview, interval);
  
  console.log(`🤖 AI Code Reviewer running every ${interval / 60000} minutes`);
}

module.exports = AICodeReviewer;