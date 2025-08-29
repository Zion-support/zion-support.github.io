#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeOptimizer {
  constructor() {
    this.config = {
      interval: process.env.AUTOMATION_INTERVAL || 3600000, // 1 hour
      maxMemory: process.env.MAX_MEMORY || 512,
      aiAnalysisEnabled: process.env.AI_ANALYSIS_ENABLED === 'true',
      optimizationLevel: process.env.OPTIMIZATION_LEVEL || 'aggressive',
      autoRefactorEnabled: process.env.AUTO_REFACTOR_ENABLED === 'true',
      logFile: path.join(process.cwd(), 'logs', 'ai-code-optimizer.log'),
      optimizationRules: {
        performance: [
          'avoid-nested-loops',
          'use-memoization',
          'optimize-renders',
          'reduce-re-renders',
          'optimize-bundle-size'
        ],
        maintainability: [
          'extract-components',
          'reduce-complexity',
          'improve-naming',
          'add-comments',
          'follow-patterns'
        ],
        security: [
          'sanitize-inputs',
          'validate-data',
          'secure-apis',
          'prevent-xss',
          'secure-dependencies'
        ]
      }
    };
    
    this.stats = {
      filesAnalyzed: 0,
      optimizationsSuggested: 0,
      optimizationsApplied: 0,
      performanceImprovements: 0,
      maintainabilityImprovements: 0,
      securityImprovements: 0,
      lastRun: null,
      totalRuns: 0
    };
    
    this.log('🚀 AI Code Optimizer started');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.config.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeCodeQuality() {
    this.log('🔍 Analyzing code quality...');
    
    try {
      const sourceDir = path.join(process.cwd(), 'src');
      const files = this.getAllFiles(sourceDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      let totalScore = 0;
      const analysisResults = [];
      
      for (const file of files) {
        const fileAnalysis = await this.analyzeFile(file);
        analysisResults.push(fileAnalysis);
        totalScore += fileAnalysis.score;
        this.stats.filesAnalyzed++;
      }
      
      const averageScore = totalScore / files.length;
      this.log(`📊 Code quality analysis completed. Average score: ${averageScore.toFixed(2)}/100`);
      
      return { averageScore, analysisResults };
    } catch (error) {
      this.log(`❌ Code quality analysis failed: ${error.message}`, 'ERROR');
      return { averageScore: 0, analysisResults: [] };
    }
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      const analysis = {
        file: relativePath,
        score: 0,
        issues: [],
        suggestions: [],
        complexity: this.calculateComplexity(content),
        maintainability: this.calculateMaintainability(content),
        performance: this.analyzePerformance(content),
        security: this.analyzeSecurity(content)
      };
      
      // Calculate overall score
      analysis.score = this.calculateOverallScore(analysis);
      
      // Generate suggestions
      analysis.suggestions = this.generateSuggestions(analysis);
      
      return analysis;
    } catch (error) {
      this.log(`❌ Failed to analyze file ${filePath}: ${error.message}`, 'ERROR');
      return { file: filePath, score: 0, issues: [], suggestions: [] };
    }
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count cyclomatic complexity indicators
    const complexityPatterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\||&&/g
    ];
    
    complexityPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    return complexity;
  }

  calculateMaintainability(content) {
    let maintainability = 100;
    
    // Reduce score based on various factors
    const longLines = content.split('\n').filter(line => line.length > 120).length;
    maintainability -= longLines * 2;
    
    const longFunctions = (content.match(/function\s+\w+\s*\([^)]*\)\s*\{[\s\S]*?\}/g) || [])
      .filter(func => func.split('\n').length > 50).length;
    maintainability -= longFunctions * 5;
    
    const magicNumbers = (content.match(/\b\d{3,}\b/g) || []).length;
    maintainability -= magicNumbers;
    
    return Math.max(0, maintainability);
  }

  analyzePerformance(content) {
    const issues = [];
    
    // Check for performance anti-patterns
    if (content.includes('innerHTML')) {
      issues.push('Consider using textContent instead of innerHTML for better performance');
    }
    
    if (content.includes('document.querySelectorAll') && content.includes('forEach')) {
      issues.push('Consider using more efficient DOM traversal methods');
    }
    
    if (content.includes('setInterval') && !content.includes('clearInterval')) {
      issues.push('Remember to clear intervals to prevent memory leaks');
    }
    
    if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
      issues.push('Consider removing event listeners to prevent memory leaks');
    }
    
    return issues;
  }

  analyzeSecurity(content) {
    const issues = [];
    
    // Check for security vulnerabilities
    if (content.includes('eval(')) {
      issues.push('eval() can be dangerous - consider alternatives');
    }
    
    if (content.includes('innerHTML') && content.includes('user')) {
      issues.push('innerHTML with user input can lead to XSS attacks');
    }
    
    if (content.includes('localStorage') && content.includes('password')) {
      issues.push('Avoid storing sensitive data in localStorage');
    }
    
    return issues;
  }

  calculateOverallScore(analysis) {
    let score = 100;
    
    // Reduce score based on complexity
    if (analysis.complexity > 10) score -= 20;
    else if (analysis.complexity > 5) score -= 10;
    
    // Reduce score based on maintainability
    score -= (100 - analysis.maintainability) * 0.3;
    
    // Reduce score based on performance issues
    score -= analysis.performance.length * 5;
    
    // Reduce score based on security issues
    score -= analysis.security.length * 10;
    
    return Math.max(0, Math.round(score));
  }

  generateSuggestions(analysis) {
    const suggestions = [];
    
    // Performance suggestions
    if (analysis.complexity > 10) {
      suggestions.push('🔧 Consider breaking down complex functions into smaller, more manageable pieces');
    }
    
    if (analysis.performance.length > 0) {
      suggestions.push('⚡ Address performance issues: ' + analysis.performance.join(', '));
    }
    
    if (analysis.security.length > 0) {
      suggestions.push('🔒 Address security issues: ' + analysis.security.join(', '));
    }
    
    if (analysis.maintainability < 70) {
      suggestions.push('📝 Improve code maintainability by reducing complexity and improving readability');
    }
    
    return suggestions;
  }

  async applyOptimizations(analysisResults) {
    if (!this.config.autoRefactorEnabled) {
      this.log('⚠️  Auto-refactor is disabled');
      return;
    }
    
    this.log('🔧 Applying automatic optimizations...');
    
    for (const analysis of analysisResults) {
      if (analysis.score < 70) {
        await this.optimizeFile(analysis);
      }
    }
    
    this.log('✅ Automatic optimizations completed');
  }

  async optimizeFile(analysis) {
    try {
      const filePath = path.join(process.cwd(), analysis.file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Apply performance optimizations
      if (analysis.performance.length > 0) {
        content = this.applyPerformanceOptimizations(content);
        modified = true;
      }
      
      // Apply maintainability optimizations
      if (analysis.maintainability < 70) {
        content = this.applyMaintainabilityOptimizations(content);
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`🔧 Optimized ${analysis.file}`);
        this.stats.optimizationsApplied++;
      }
      
    } catch (error) {
      this.log(`❌ Failed to optimize file ${analysis.file}: ${error.message}`, 'ERROR');
    }
  }

  applyPerformanceOptimizations(content) {
    // Replace innerHTML with textContent where appropriate
    content = content.replace(/innerHTML\s*=\s*['"`]([^'"`]+)['"`]/g, 'textContent = "$1"');
    
    // Add performance hints
    if (content.includes('useEffect') && content.includes('[]')) {
      content = content.replace(
        /useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]+)\}\s*,\s*\[\s*\]\s*\)/g,
        'useEffect(() => {$1}, []) // Memoized effect'
      );
    }
    
    return content;
  }

  applyMaintainabilityOptimizations(content) {
    // Extract magic numbers to constants
    const magicNumberRegex = /\b(\d{3,})\b/g;
    let match;
    let constantCounter = 0;
    
    while ((match = magicNumberRegex.exec(content)) !== null) {
      const number = match[1];
      const constantName = `MAGIC_NUMBER_${constantCounter++}`;
      content = content.replace(new RegExp(`\\b${number}\\b`, 'g'), constantName);
      
      // Add constant declaration at the top if not already present
      if (!content.includes(`const ${constantName}`)) {
        content = `const ${constantName} = ${number};\n\n${content}`;
      }
    }
    
    return content;
  }

  async generateOptimizationReport(analysisResults) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: analysisResults.length,
        averageScore: analysisResults.reduce((sum, a) => sum + a.score, 0) / analysisResults.length,
        filesNeedingOptimization: analysisResults.filter(a => a.score < 70).length,
        totalSuggestions: analysisResults.reduce((sum, a) => sum + a.suggestions.length, 0)
      },
      files: analysisResults.map(a => ({
        file: a.file,
        score: a.score,
        complexity: a.complexity,
        maintainability: a.maintainability,
        performanceIssues: a.performance.length,
        securityIssues: a.security.length,
        suggestions: a.suggestions
      })),
      recommendations: this.generateGlobalRecommendations(analysisResults)
    };
    
    // Save report
    const reportPath = path.join(process.cwd(), 'logs', 'ai-optimization-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Optimization report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`, 'ERROR');
    }
    
    return report;
  }

  generateGlobalRecommendations(analysisResults) {
    const recommendations = [];
    
    const lowScoreFiles = analysisResults.filter(a => a.score < 70);
    if (lowScoreFiles.length > 0) {
      recommendations.push(`⚠️  ${lowScoreFiles.length} files need optimization (score < 70)`);
    }
    
    const highComplexityFiles = analysisResults.filter(a => a.complexity > 10);
    if (highComplexityFiles.length > 0) {
      recommendations.push(`🔧 ${highComplexityFiles.length} files have high complexity and could benefit from refactoring`);
    }
    
    const totalPerformanceIssues = analysisResults.reduce((sum, a) => sum + a.performance.length, 0);
    if (totalPerformanceIssues > 0) {
      recommendations.push(`⚡ ${totalPerformanceIssues} performance issues detected across the codebase`);
    }
    
    const totalSecurityIssues = analysisResults.reduce((sum, a) => sum + a.security.length, 0);
    if (totalSecurityIssues > 0) {
      recommendations.push(`🔒 ${totalSecurityIssues} security issues detected - review immediately`);
    }
    
    return recommendations;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`❌ Error reading directory ${dir}: ${error.message}`, 'ERROR');
    }
    
    return files;
  }

  async run() {
    this.log('🚀 Starting AI code optimization cycle...');
    this.stats.lastRun = new Date().toISOString();
    this.stats.totalRuns++;
    
    try {
      // Check memory usage
      const memUsage = process.memoryUsage();
      if (memUsage.heapUsed > this.config.maxMemory * 1024 * 1024) {
        this.log(`⚠️  High memory usage: ${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`, 'WARN');
      }
      
      // Analyze code quality
      const { averageScore, analysisResults } = await this.analyzeCodeQuality();
      
      // Apply optimizations if enabled
      if (this.config.autoRefactorEnabled) {
        await this.applyOptimizations(analysisResults);
      }
      
      // Generate report
      await this.generateOptimizationReport(analysisResults);
      
      this.log(`✅ AI optimization cycle completed. Average score: ${averageScore.toFixed(2)}/100`);
      
    } catch (error) {
      this.log(`❌ AI optimization cycle failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.log('🚀 AI Code Optimizer starting...');
    
    // Run immediately
    await this.run();
    
    // Schedule periodic runs
    setInterval(async () => {
      await this.run();
    }, this.config.interval);
    
    this.log(`⏰ Scheduled to run every ${this.config.interval / 1000} seconds`);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const optimizer = new AICodeOptimizer();
  optimizer.start().catch(error => {
    console.error('❌ Failed to start AI Code Optimizer:', error);
    process.exit(1);
  });
}

module.exports = AICodeOptimizer;