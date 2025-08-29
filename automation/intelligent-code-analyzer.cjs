#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentCodeAnalyzer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 300000; // 5 minutes default
    this.maxMemory = process.env.MAX_MEMORY || '512MB';
    this.analysisResults = [];
    this.codeQualityScore = 0;
    this.improvementSuggestions = [];
    this.lastAnalysis = null;
    
    console.log('🧠 Intelligent Code Analyzer Started');
    console.log(`📊 Analysis Interval: ${this.interval / 1000}s`);
    console.log(`💾 Memory Limit: ${this.maxMemory}`);
  }

  async start() {
    console.log('🚀 Starting intelligent code analysis...');
    
    // Initial analysis
    await this.performCodeAnalysis();
    
    // Set up continuous analysis
    setInterval(async () => {
      await this.performCodeAnalysis();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 60000); // Log status every minute
  }

  async performCodeAnalysis() {
    try {
      console.log('🔍 Performing intelligent code analysis...');
      
      const startTime = Date.now();
      
      // 1. Analyze TypeScript/JavaScript files
      const codeAnalysis = await this.analyzeCodeQuality();
      
      // 2. Check for potential improvements
      const improvements = await this.identifyImprovements();
      
      // 3. Analyze build performance
      const buildAnalysis = await this.analyzeBuildPerformance();
      
      // 4. Check for security vulnerabilities
      const securityAnalysis = await this.analyzeSecurity();
      
      // 5. Generate intelligent recommendations
      const recommendations = await this.generateRecommendations();
      
      const analysisTime = Date.now() - startTime;
      
      // Store results
      this.analysisResults.push({
        timestamp: new Date().toISOString(),
        codeQuality: codeAnalysis,
        improvements: improvements,
        buildPerformance: buildAnalysis,
        security: securityAnalysis,
        recommendations: recommendations,
        analysisTime: analysisTime
      });
      
      // Keep only last 100 results
      if (this.analysisResults.length > 100) {
        this.analysisResults = this.analysisResults.slice(-100);
      }
      
      // Update quality score
      this.updateQualityScore();
      
      // Log results
      this.logAnalysisResults();
      
      // Save results to file
      this.saveResults();
      
      this.lastAnalysis = new Date();
      
      console.log(`✅ Code analysis completed in ${analysisTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during code analysis:', error.message);
      this.logError(error);
    }
  }

  async analyzeCodeQuality() {
    try {
      console.log('📝 Analyzing code quality...');
      
      const results = {
        totalFiles: 0,
        typescriptFiles: 0,
        javascriptFiles: 0,
        jsxFiles: 0,
        tsxFiles: 0,
        averageComplexity: 0,
        codeSmells: [],
        bestPractices: [],
        maintainability: 0
      };
      
      // Count file types
      const fileTypes = await this.countFileTypes();
      Object.assign(results, fileTypes);
      
      // Analyze complexity
      results.averageComplexity = await this.calculateComplexity();
      
      // Check for code smells
      results.codeSmells = await this.detectCodeSmells();
      
      // Check best practices
      results.bestPractices = await this.checkBestPractices();
      
      // Calculate maintainability score
      results.maintainability = this.calculateMaintainabilityScore(results);
      
      return results;
      
    } catch (error) {
      console.error('❌ Error analyzing code quality:', error.message);
      return { error: error.message };
    }
  }

  async countFileTypes() {
    try {
      const srcDir = path.join(process.cwd(), 'src');
      const pagesDir = path.join(process.cwd(), 'pages');
      
      let typescriptFiles = 0;
      let javascriptFiles = 0;
      let jsxFiles = 0;
      let tsxFiles = 0;
      let totalFiles = 0;
      
      // Count files in src directory
      if (fs.existsSync(srcDir)) {
        const srcFiles = this.getAllFiles(srcDir);
        srcFiles.forEach(file => {
          if (file.endsWith('.ts')) typescriptFiles++;
          else if (file.endsWith('.js')) javascriptFiles++;
          else if (file.endsWith('.jsx')) jsxFiles++;
          else if (file.endsWith('.tsx')) tsxFiles++;
          totalFiles++;
        });
      }
      
      // Count files in pages directory
      if (fs.existsSync(pagesDir)) {
        const pagesFiles = this.getAllFiles(pagesDir);
        pagesFiles.forEach(file => {
          if (file.endsWith('.ts')) typescriptFiles++;
          else if (file.endsWith('.js')) javascriptFiles++;
          else if (file.endsWith('.jsx')) jsxFiles++;
          else if (file.endsWith('.tsx')) tsxFiles++;
          totalFiles++;
        });
      }
      
      return {
        totalFiles,
        typescriptFiles,
        javascriptFiles,
        jsxFiles,
        tsxFiles
      };
      
    } catch (error) {
      console.error('❌ Error counting file types:', error.message);
      return { error: error.message };
    }
  }

  getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  async calculateComplexity() {
    try {
      // Simple complexity calculation based on file analysis
      let totalComplexity = 0;
      let fileCount = 0;
      
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const lines = content.split('\n');
              const complexity = this.calculateFileComplexity(lines);
              totalComplexity += complexity;
              fileCount++;
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
      }
      
      return fileCount > 0 ? Math.round((totalComplexity / fileCount) * 100) / 100 : 0;
      
    } catch (error) {
      console.error('❌ Error calculating complexity:', error.message);
      return 0;
    }
  }

  calculateFileComplexity(lines) {
    let complexity = 1;
    
    lines.forEach(line => {
      const trimmed = line.trim();
      
      // Increase complexity for control structures
      if (trimmed.includes('if ') || trimmed.includes('else')) complexity += 0.5;
      if (trimmed.includes('for ') || trimmed.includes('while ')) complexity += 0.5;
      if (trimmed.includes('switch ')) complexity += 0.5;
      if (trimmed.includes('catch ')) complexity += 0.5;
      if (trimmed.includes('&&') || trimmed.includes('||')) complexity += 0.2;
      if (trimmed.includes('?') && trimmed.includes(':')) complexity += 0.3;
      
      // Increase complexity for nested structures
      if (trimmed.includes('{')) complexity += 0.1;
      if (trimmed.includes('}')) complexity += 0.1;
    });
    
    return Math.min(complexity, 10); // Cap at 10
  }

  async detectCodeSmells() {
    try {
      const codeSmells = [];
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const smells = this.detectFileCodeSmells(content, file);
              codeSmells.push(...smells);
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
      }
      
      return codeSmells;
      
    } catch (error) {
      console.error('❌ Error detecting code smells:', error.message);
      return [];
    }
  }

  detectFileCodeSmells(content, filename) {
    const smells = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Long lines
      if (trimmed.length > 120) {
        smells.push({
          type: 'long-line',
          severity: 'medium',
          line: index + 1,
          file: filename,
          description: 'Line exceeds 120 characters',
          suggestion: 'Break long lines for better readability'
        });
      }
      
      // Magic numbers
      if (/\b\d{4,}\b/.test(trimmed) && !trimmed.includes('//')) {
        smells.push({
          type: 'magic-number',
          severity: 'low',
          line: index + 1,
          file: filename,
          description: 'Magic number detected',
          suggestion: 'Extract to named constant'
        });
      }
      
      // TODO comments
      if (trimmed.includes('TODO') || trimmed.includes('FIXME')) {
        smells.push({
          type: 'todo-comment',
          severity: 'low',
          line: index + 1,
          file: filename,
          description: 'TODO or FIXME comment found',
          suggestion: 'Address pending tasks'
        });
      }
      
      // Console statements in production
      if (trimmed.includes('console.log') || trimmed.includes('console.error')) {
        smells.push({
          type: 'console-statement',
          severity: 'medium',
          line: index + 1,
          file: filename,
          description: 'Console statement in production code',
          suggestion: 'Remove or replace with proper logging'
        });
      }
    });
    
    return smells;
  }

  async checkBestPractices() {
    try {
      const bestPractices = [];
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const practices = this.checkFileBestPractices(content, file);
              bestPractices.push(...practices);
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
      }
      
      return bestPractices;
      
    } catch (error) {
      console.error('❌ Error checking best practices:', error.message);
      return [];
    }
  }

  checkFileBestPractices(content, filename) {
    const practices = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Check for proper TypeScript usage
      if (filename.endsWith('.ts') || filename.endsWith('.tsx')) {
        if (trimmed.includes(': any')) {
          practices.push({
            type: 'typescript-any',
            severity: 'high',
            line: index + 1,
            file: filename,
            description: 'Usage of "any" type',
            suggestion: 'Use specific types instead of "any"'
          });
        }
      }
      
      // Check for proper error handling
      if (trimmed.includes('try {') && !content.includes('catch')) {
        practices.push({
          type: 'missing-error-handling',
          severity: 'medium',
          line: index + 1,
          file: filename,
          description: 'Try block without catch',
          suggestion: 'Add proper error handling'
        });
      }
      
      // Check for proper imports
      if (trimmed.startsWith('import') && trimmed.includes('*')) {
        practices.push({
          type: 'wildcard-import',
          severity: 'low',
          line: index + 1,
          file: filename,
          description: 'Wildcard import detected',
          suggestion: 'Use specific imports for better tree-shaking'
        });
      }
    });
    
    return practices;
  }

  calculateMaintainabilityScore(results) {
    let score = 100;
    
    // Reduce score based on code smells
    score -= results.codeSmells.length * 2;
    
    // Reduce score based on complexity
    if (results.averageComplexity > 5) {
      score -= (results.averageComplexity - 5) * 3;
    }
    
    // Reduce score based on best practice violations
    score -= results.bestPractices.filter(p => p.severity === 'high').length * 5;
    score -= results.bestPractices.filter(p => p.severity === 'medium').length * 3;
    score -= results.bestPractices.filter(p => p.severity === 'low').length * 1;
    
    return Math.max(0, Math.round(score));
  }

  async identifyImprovements() {
    try {
      console.log('🔧 Identifying potential improvements...');
      
      const improvements = [];
      
      // Check for unused dependencies
      const unusedDeps = await this.checkUnusedDependencies();
      if (unusedDeps.length > 0) {
        improvements.push({
          type: 'unused-dependencies',
          priority: 'medium',
          description: 'Unused dependencies detected',
          details: unusedDeps,
          suggestion: 'Remove unused dependencies to reduce bundle size'
        });
      }
      
      // Check for performance improvements
      const perfImprovements = await this.identifyPerformanceImprovements();
      improvements.push(...perfImprovements);
      
      // Check for security improvements
      const securityImprovements = await this.identifySecurityImprovements();
      improvements.push(...securityImprovements);
      
      return improvements;
      
    } catch (error) {
      console.error('❌ Error identifying improvements:', error.message);
      return [];
    }
  }

  async checkUnusedDependencies() {
    try {
      // This would typically use tools like depcheck
      // For now, return a simple check
      return [];
    } catch (error) {
      return [];
    }
  }

  async identifyPerformanceImprovements() {
    const improvements = [];
    
    // Check for large bundle sizes
    if (fs.existsSync('dist')) {
      const distSize = this.getDirectorySize('dist');
      if (distSize > 5 * 1024 * 1024) { // 5MB
        improvements.push({
          type: 'large-bundle',
          priority: 'high',
          description: 'Large bundle size detected',
          details: `Bundle size: ${Math.round(distSize / 1024 / 1024)}MB`,
          suggestion: 'Implement code splitting and tree-shaking'
        });
      }
    }
    
    return improvements;
  }

  async identifySecurityImprovements() {
    const improvements = [];
    
    // Check for common security issues
    const securityIssues = await this.checkSecurityIssues();
    improvements.push(...securityIssues);
    
    return improvements;
  }

  async checkSecurityIssues() {
    try {
      const issues = [];
      
      // Check for hardcoded secrets
      const secretPatterns = [
        /api_key\s*[:=]\s*['"][^'"]+['"]/gi,
        /password\s*[:=]\s*['"][^'"]+['"]/gi,
        /secret\s*[:=]\s*['"][^'"]+['"]/gi,
        /token\s*[:=]\s*['"][^'"]+['"]/gi
      ];
      
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        
        files.forEach(file => {
          try {
            const content = fs.readFileSync(file, 'utf8');
            secretPatterns.forEach(pattern => {
              const matches = content.match(pattern);
              if (matches) {
                issues.push({
                  type: 'hardcoded-secret',
                  severity: 'critical',
                  file: file,
                  description: 'Hardcoded secret detected',
                  suggestion: 'Use environment variables for secrets'
                });
              }
            });
          } catch (error) {
            // Skip files that can't be read
          }
        });
      }
      
      return issues;
      
    } catch (error) {
      console.error('❌ Error checking security issues:', error.message);
      return [];
    }
  }

  async analyzeBuildPerformance() {
    try {
      console.log('⚡ Analyzing build performance...');
      
      const results = {
        buildTime: 0,
        bundleSize: 0,
        optimizationLevel: 'unknown',
        cacheEfficiency: 0
      };
      
      // Check if dist directory exists
      if (fs.existsSync('dist')) {
        results.bundleSize = this.getDirectorySize('dist');
        results.optimizationLevel = this.assessOptimizationLevel();
      }
      
      return results;
      
    } catch (error) {
      console.error('❌ Error analyzing build performance:', error.message);
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          size += this.getDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      console.error('❌ Error calculating directory size:', error.message);
    }
    
    return size;
  }

  assessOptimizationLevel() {
    try {
      if (fs.existsSync('dist')) {
        const files = fs.readdirSync('dist');
        const jsFiles = files.filter(f => f.endsWith('.js'));
        const cssFiles = files.filter(f => f.endsWith('.css'));
        
        if (jsFiles.length > 0 && cssFiles.length > 0) {
          return 'good';
        } else if (jsFiles.length > 0 || cssFiles.length > 0) {
          return 'basic';
        } else {
          return 'minimal';
        }
      }
      
      return 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  async analyzeSecurity() {
    try {
      console.log('🔒 Analyzing security...');
      
      const results = {
        vulnerabilities: [],
        securityScore: 100,
        recommendations: []
      };
      
      // Check for common security issues
      const securityIssues = await this.checkSecurityIssues();
      results.vulnerabilities = securityIssues;
      
      // Calculate security score
      results.securityScore = this.calculateSecurityScore(securityIssues);
      
      // Generate security recommendations
      results.recommendations = this.generateSecurityRecommendations(securityIssues);
      
      return results;
      
    } catch (error) {
      console.error('❌ Error analyzing security:', error.message);
      return { error: error.message };
    }
  }

  calculateSecurityScore(issues) {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'critical':
          score -= 25;
          break;
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });
    
    return Math.max(0, score);
  }

  generateSecurityRecommendations(issues) {
    const recommendations = [];
    
    if (issues.some(i => i.type === 'hardcoded-secret')) {
      recommendations.push({
        priority: 'high',
        description: 'Implement environment variable management',
        action: 'Move all secrets to environment variables'
      });
    }
    
    if (issues.length > 0) {
      recommendations.push({
        priority: 'medium',
        description: 'Regular security audits',
        action: 'Schedule monthly security reviews'
      });
    }
    
    return recommendations;
  }

  async generateRecommendations() {
    try {
      console.log('💡 Generating intelligent recommendations...');
      
      const recommendations = [];
      
      // Code quality recommendations
      if (this.codeQualityScore < 70) {
        recommendations.push({
          type: 'code-quality',
          priority: 'high',
          description: 'Code quality needs improvement',
          action: 'Focus on reducing complexity and code smells',
          impact: 'high'
        });
      }
      
      // Performance recommendations
      const latestResults = this.analysisResults[this.analysisResults.length - 1];
      if (latestResults && latestResults.buildPerformance.bundleSize > 5 * 1024 * 1024) {
        recommendations.push({
          type: 'performance',
          priority: 'medium',
          description: 'Bundle size optimization needed',
          action: 'Implement code splitting and lazy loading',
          impact: 'medium'
        });
      }
      
      // Security recommendations
      if (latestResults && latestResults.security.securityScore < 80) {
        recommendations.push({
          type: 'security',
          priority: 'high',
          description: 'Security improvements required',
          action: 'Address security vulnerabilities immediately',
          impact: 'critical'
        });
      }
      
      return recommendations;
      
    } catch (error) {
      console.error('❌ Error generating recommendations:', error.message);
      return [];
    }
  }

  updateQualityScore() {
    if (this.analysisResults.length > 0) {
      const latest = this.analysisResults[this.analysisResults.length - 1];
      
      let score = 100;
      
      // Reduce score based on code smells
      score -= latest.codeQuality.codeSmells.length * 2;
      
      // Reduce score based on complexity
      if (latest.codeQuality.averageComplexity > 5) {
        score -= (latest.codeQuality.averageComplexity - 5) * 3;
      }
      
      // Reduce score based on security issues
      if (latest.security && latest.security.securityScore < 100) {
        score -= (100 - latest.security.securityScore) * 0.5;
      }
      
      this.codeQualityScore = Math.max(0, Math.round(score));
    }
  }

  logAnalysisResults() {
    if (this.analysisResults.length > 0) {
      const latest = this.analysisResults[this.analysisResults.length - 1];
      
      console.log('\n📊 Code Analysis Results:');
      console.log('─'.repeat(60));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Analysis Time: ${latest.analysisTime}ms`);
      console.log(`📝 Total Files: ${latest.codeQuality.totalFiles}`);
      console.log(`🔍 Code Smells: ${latest.codeQuality.codeSmells.length}`);
      console.log(`✅ Best Practices: ${latest.codeQuality.bestPractices.length}`);
      console.log(`🏗️  Maintainability: ${latest.codeQuality.maintainability}/100`);
      console.log(`🔒 Security Score: ${latest.security?.securityScore || 'N/A'}/100`);
      console.log(`💡 Recommendations: ${latest.recommendations.length}`);
      console.log(`🎯 Overall Quality Score: ${this.codeQualityScore}/100`);
      console.log('─'.repeat(60));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`📊 Status Update - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
  }

  logError(error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      process: 'intelligent-code-analyzer'
    };
    
    console.error('❌ Error logged:', errorLog);
    
    // Save error to log file
    try {
      const errorLogPath = path.join(process.cwd(), 'logs', 'intelligent-code-analyzer-errors.json');
      let errorLogs = [];
      
      if (fs.existsSync(errorLogPath)) {
        errorLogs = JSON.parse(fs.readFileSync(errorLogPath, 'utf8'));
      }
      
      errorLogs.push(errorLog);
      
      // Keep only last 100 errors
      if (errorLogs.length > 100) {
        errorLogs = errorLogs.slice(-100);
      }
      
      fs.writeFileSync(errorLogPath, JSON.stringify(errorLogs, null, 2));
    } catch (writeError) {
      console.error('❌ Failed to write error log:', writeError.message);
    }
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'intelligent-code-analyzer-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.analysisResults, null, 2));
    } catch (error) {
      console.error('❌ Failed to save results:', error.message);
    }
  }
}

// Start the intelligent code analyzer
const analyzer = new IntelligentCodeAnalyzer();
analyzer.start().catch(error => {
  console.error('❌ Failed to start intelligent code analyzer:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down intelligent code analyzer...');
  analyzer.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down intelligent code analyzer...');
  analyzer.saveResults();
  process.exit(0);
});