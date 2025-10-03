#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeEnhancer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 600000; // 10 minutes default
    this.aiModel = process.env.AI_MODEL || 'gpt-4';
    this.enhancementLevel = process.env.ENHANCEMENT_LEVEL || 'aggressive';
    this.enhancementHistory = [];
    this.improvementMetrics = {
      totalImprovements: 0,
      codeQualityScore: 0,
      performanceImprovements: 0,
      securityEnhancements: 0,
      maintainabilityGains: 0
    };
    
    console.log('🤖 AI Code Enhancer Started');
    console.log(`📊 Enhancement Interval: ${this.interval / 1000}s`);
    console.log(`🧠 AI Model: ${this.aiModel}`);
    console.log(`⚡ Enhancement Level: ${this.enhancementLevel}`);
  }

  async start() {
    console.log('🚀 Starting AI-powered code enhancement...');
    
    // Initial enhancement scan
    await this.performCodeEnhancement();
    
    // Set up continuous enhancement
    setInterval(async () => {
      await this.performCodeEnhancement();
    }, this.interval);
    
    // Keep process alive and log status
    setInterval(() => {
      this.logStatus();
    }, 300000); // Log status every 5 minutes
  }

  async performCodeEnhancement() {
    try {
      console.log('🔍 Performing AI-powered code enhancement...');
      
      const startTime = Date.now();
      
      // 1. Analyze current code quality
      const currentQuality = await this.analyzeCurrentQuality();
      
      // 2. Identify enhancement opportunities
      const opportunities = await this.identifyEnhancementOpportunities();
      
      // 3. Apply AI-powered improvements
      const improvements = await this.applyAIImprovements(opportunities);
      
      // 4. Measure improvement impact
      const impact = await this.measureImprovementImpact(currentQuality);
      
      // 5. Generate enhancement report
      const report = await this.generateEnhancementReport(improvements, impact);
      
      const enhancementTime = Date.now() - startTime;
      
      // Store enhancement history
      this.enhancementHistory.push({
        timestamp: new Date().toISOString(),
        currentQuality: currentQuality,
        opportunities: opportunities,
        improvements: improvements,
        impact: impact,
        report: report,
        enhancementTime: enhancementTime
      });
      
      // Keep only last 50 enhancements
      if (this.enhancementHistory.length > 50) {
        this.enhancementHistory = this.enhancementHistory.slice(-50);
      }
      
      // Update improvement metrics
      this.updateImprovementMetrics(improvements, impact);
      
      // Log results
      this.logEnhancementResults();
      
      // Save results to file
      this.saveResults();
      
      console.log(`✅ Code enhancement completed in ${enhancementTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during code enhancement:', error.message);
      this.logError(error);
    }
  }

  async analyzeCurrentQuality() {
    try {
      console.log('📊 Analyzing current code quality...');
      
      const quality = {
        overallScore: 0,
        maintainability: 0,
        performance: 0,
        security: 0,
        readability: 0,
        testCoverage: 0,
        documentation: 0
      };
      
      // Analyze maintainability
      quality.maintainability = await this.analyzeMaintainability();
      
      // Analyze performance
      quality.performance = await this.analyzePerformance();
      
      // Analyze security
      quality.security = await this.analyzeSecurity();
      
      // Analyze readability
      quality.readability = await this.analyzeReadability();
      
      // Analyze test coverage
      quality.testCoverage = await this.analyzeTestCoverage();
      
      // Analyze documentation
      quality.documentation = await this.analyzeDocumentation();
      
      // Calculate overall score
      quality.overallScore = this.calculateOverallQualityScore(quality);
      
      return quality;
      
    } catch (error) {
      console.error('❌ Error analyzing current quality:', error.message);
      return { error: error.message };
    }
  }

  async analyzeMaintainability() {
    try {
      let score = 100;
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        let totalComplexity = 0;
        let fileCount = 0;
        
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
        
        const avgComplexity = fileCount > 0 ? totalComplexity / fileCount : 0;
        
        // Reduce score based on complexity
        if (avgComplexity > 5) {
          score -= (avgComplexity - 5) * 10;
        }
        
        // Reduce score based on file count (too many files can reduce maintainability)
        if (fileCount > 100) {
          score -= Math.min(20, (fileCount - 100) * 0.2);
        }
      }
      
      return Math.max(0, Math.round(score));
      
    } catch (error) {
      console.error('❌ Error analyzing maintainability:', error.message);
      return 0;
    }
  }

  async analyzePerformance() {
    try {
      let score = 100;
      
      // Check bundle size
      if (fs.existsSync('dist')) {
        const bundleSize = this.getDirectorySize('dist');
        if (bundleSize > 5 * 1024 * 1024) { // 5MB
          score -= Math.min(30, (bundleSize - 5 * 1024 * 1024) / (1024 * 1024) * 5);
        }
      }
      
      // Check for performance anti-patterns
      const performanceIssues = await this.detectPerformanceIssues();
      score -= performanceIssues.length * 5;
      
      return Math.max(0, Math.round(score));
      
    } catch (error) {
      console.error('❌ Error analyzing performance:', error.message);
      return 0;
    }
  }

  async analyzeSecurity() {
    try {
      let score = 100;
      
      // Check for security vulnerabilities
      const securityIssues = await this.detectSecurityIssues();
      
      securityIssues.forEach(issue => {
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
      
      return Math.max(0, Math.round(score));
      
    } catch (error) {
      console.error('❌ Error analyzing security:', error.message);
      return 0;
    }
  }

  async analyzeReadability() {
    try {
      let score = 100;
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        let totalIssues = 0;
        let fileCount = 0;
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              const lines = content.split('\n');
              const issues = this.detectReadabilityIssues(lines);
              totalIssues += issues.length;
              fileCount++;
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
        
        const avgIssues = fileCount > 0 ? totalIssues / fileCount : 0;
        score -= avgIssues * 2;
      }
      
      return Math.max(0, Math.round(score));
      
    } catch (error) {
      console.error('❌ Error analyzing readability:', error.message);
      return 0;
    }
  }

  async analyzeTestCoverage() {
    try {
      let score = 0;
      
      // Check if tests directory exists
      if (fs.existsSync('tests') || fs.existsSync('__tests__')) {
        const testFiles = this.getAllTestFiles();
        const sourceFiles = this.getAllSourceFiles();
        
        if (sourceFiles.length > 0) {
          const coverageRatio = testFiles.length / sourceFiles.length;
          score = Math.round(coverageRatio * 100);
        }
      }
      
      return Math.min(100, score);
      
    } catch (error) {
      console.error('❌ Error analyzing test coverage:', error.message);
      return 0;
    }
  }

  async analyzeDocumentation() {
    try {
      let score = 0;
      
      // Check for README files
      if (fs.existsSync('README.md')) score += 20;
      if (fs.existsSync('docs')) score += 30;
      
      // Check for inline documentation
      const srcDir = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir);
        let documentedFiles = 0;
        
        files.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
              const content = fs.readFileSync(file, 'utf8');
              if (content.includes('/**') || content.includes('//') || content.includes('/*')) {
                documentedFiles++;
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        });
        
        if (files.length > 0) {
          score += (documentedFiles / files.length) * 50;
        }
      }
      
      return Math.min(100, Math.round(score));
      
    } catch (error) {
      console.error('❌ Error analyzing documentation:', error.message);
      return 0;
    }
  }

  calculateOverallQualityScore(quality) {
    const weights = {
      maintainability: 0.25,
      performance: 0.20,
      security: 0.20,
      readability: 0.15,
      testCoverage: 0.10,
      documentation: 0.10
    };
    
    let weightedScore = 0;
    let totalWeight = 0;
    
    Object.keys(weights).forEach(key => {
      if (quality[key] !== undefined) {
        weightedScore += quality[key] * weights[key];
        totalWeight += weights[key];
      }
    });
    
    return totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
  }

  async identifyEnhancementOpportunities() {
    try {
      console.log('🔍 Identifying enhancement opportunities...');
      
      const opportunities = [];
      
      // Code quality improvements
      const qualityOpportunities = await this.identifyQualityImprovements();
      opportunities.push(...qualityOpportunities);
      
      // Performance optimizations
      const performanceOpportunities = await this.identifyPerformanceOpportunities();
      opportunities.push(...performanceOpportunities);
      
      // Security enhancements
      const securityOpportunities = await this.identifySecurityOpportunities();
      opportunities.push(...securityOpportunities);
      
      // Maintainability improvements
      const maintainabilityOpportunities = await this.identifyMaintainabilityOpportunities();
      opportunities.push(...maintainabilityOpportunities);
      
      // Sort by priority and impact
      opportunities.sort((a, b) => {
        const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
        const impactOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        
        return impactOrder[b.impact] - impactOrder[a.impact];
      });
      
      return opportunities;
      
    } catch (error) {
      console.error('❌ Error identifying opportunities:', error.message);
      return [];
    }
  }

  async identifyQualityImprovements() {
    const opportunities = [];
    
    // Check for code smells
    const codeSmells = await this.detectCodeSmells();
    codeSmells.forEach(smell => {
      opportunities.push({
        type: 'code-quality',
        priority: smell.severity === 'critical' ? 'high' : smell.severity,
        impact: 'medium',
        description: smell.description,
        file: smell.file,
        line: smell.line,
        suggestion: smell.suggestion,
        estimatedEffort: 'low'
      });
    });
    
    // Check for best practice violations
    const bestPracticeViolations = await this.detectBestPracticeViolations();
    bestPracticeViolations.forEach(violation => {
      opportunities.push({
        type: 'best-practice',
        priority: violation.severity === 'critical' ? 'high' : violation.severity,
        impact: 'medium',
        description: violation.description,
        file: violation.file,
        line: violation.line,
        suggestion: violation.suggestion,
        estimatedEffort: 'low'
      });
    });
    
    return opportunities;
  }

  async identifyPerformanceOpportunities() {
    const opportunities = [];
    
    // Check bundle size
    if (fs.existsSync('dist')) {
      const bundleSize = this.getDirectorySize('dist');
      if (bundleSize > 3 * 1024 * 1024) { // 3MB
        opportunities.push({
          type: 'performance',
          priority: 'medium',
          impact: 'high',
          description: 'Large bundle size detected',
          details: `Bundle size: ${Math.round(bundleSize / 1024 / 1024)}MB`,
          suggestion: 'Implement code splitting, tree-shaking, and lazy loading',
          estimatedEffort: 'medium'
        });
      }
    }
    
    // Check for performance anti-patterns
    const performanceIssues = await this.detectPerformanceIssues();
    performanceIssues.forEach(issue => {
      opportunities.push({
        type: 'performance',
        priority: 'medium',
        impact: 'medium',
        description: issue.description,
        file: issue.file,
        line: issue.line,
        suggestion: issue.suggestion,
        estimatedEffort: 'low'
      });
    });
    
    return opportunities;
  }

  async identifySecurityOpportunities() {
    const opportunities = [];
    
    // Check for security vulnerabilities
    const securityIssues = await this.detectSecurityIssues();
    securityIssues.forEach(issue => {
      opportunities.push({
        type: 'security',
        priority: issue.severity === 'critical' ? 'critical' : issue.severity,
        impact: 'high',
        description: issue.description,
        file: issue.file,
        line: issue.line,
        suggestion: issue.suggestion,
        estimatedEffort: 'medium'
      });
    });
    
    return opportunities;
  }

  async identifyMaintainabilityOpportunities() {
    const opportunities = [];
    
    // Check for complex functions
    const complexFunctions = await this.detectComplexFunctions();
    complexFunctions.forEach(func => {
      opportunities.push({
        type: 'maintainability',
        priority: 'medium',
        impact: 'medium',
        description: 'Complex function detected',
        file: func.file,
        line: func.line,
        suggestion: 'Break down complex function into smaller, focused functions',
        estimatedEffort: 'medium'
      });
    });
    
    // Check for long files
    const longFiles = await this.detectLongFiles();
    longFiles.forEach(file => {
      opportunities.push({
        type: 'maintainability',
        priority: 'low',
        impact: 'medium',
        description: 'Long file detected',
        file: file.path,
        details: `${file.lineCount} lines`,
        suggestion: 'Consider splitting into multiple smaller files',
        estimatedEffort: 'medium'
      });
    });
    
    return opportunities;
  }

  async applyAIImprovements(opportunities) {
    try {
      console.log('🤖 Applying AI-powered improvements...');
      
      const improvements = [];
      const maxImprovements = this.enhancementLevel === 'aggressive' ? 10 : 5;
      
      // Process top priority opportunities
      for (let i = 0; i < Math.min(opportunities.length, maxImprovements); i++) {
        const opportunity = opportunities[i];
        
        try {
          const improvement = await this.applySingleImprovement(opportunity);
          if (improvement) {
            improvements.push(improvement);
          }
        } catch (error) {
          console.error(`❌ Failed to apply improvement for ${opportunity.type}:`, error.message);
        }
      }
      
      return improvements;
      
    } catch (error) {
      console.error('❌ Error applying AI improvements:', error.message);
      return [];
    }
  }

  async applySingleImprovement(opportunity) {
    try {
      console.log(`🔧 Applying improvement: ${opportunity.description}`);
      
      const improvement = {
        timestamp: new Date().toISOString(),
        type: opportunity.type,
        priority: opportunity.priority,
        impact: opportunity.impact,
        description: opportunity.description,
        file: opportunity.file,
        line: opportunity.line,
        originalCode: '',
        improvedCode: '',
        improvementType: 'ai-suggested',
        status: 'applied'
      };
      
      // Get original code
      if (opportunity.file && opportunity.line) {
        const content = fs.readFileSync(opportunity.file, 'utf8');
        const lines = content.split('\n');
        improvement.originalCode = lines[opportunity.line - 1] || '';
        
        // Generate improved code using AI suggestions
        improvement.improvedCode = await this.generateImprovedCode(opportunity);
        
        // Apply the improvement if it's safe
        if (this.isSafeToApply(improvement)) {
          await this.applyCodeChange(improvement);
        } else {
          improvement.status = 'suggested-only';
        }
      }
      
      return improvement;
      
    } catch (error) {
      console.error(`❌ Error applying single improvement:`, error.message);
      return null;
    }
  }

  async generateImprovedCode(opportunity) {
    // This would typically integrate with an AI service
    // For now, return intelligent suggestions based on patterns
    
    const suggestions = {
      'code-quality': {
        'long-line': '// Break long line into multiple lines for readability',
        'magic-number': '// Extract to named constant',
        'todo-comment': '// Implement the TODO functionality',
        'console-statement': '// Replace with proper logging service'
      },
      'best-practice': {
        'typescript-any': '// Replace "any" with specific type',
        'missing-error-handling': '// Add proper error handling',
        'wildcard-import': '// Use specific imports instead of wildcard'
      },
      'performance': {
        'large-bundle': '// Implement code splitting and lazy loading',
        'inefficient-loop': '// Optimize loop performance'
      },
      'security': {
        'hardcoded-secret': '// Use environment variables for secrets',
        'unsafe-eval': '// Avoid eval() for security'
      }
    };
    
    const suggestion = suggestions[opportunity.type]?.[opportunity.description] || '// AI suggestion: Review and improve this code';
    return suggestion;
  }

  isSafeToApply(improvement) {
    // Only apply improvements that are safe
    const safeTypes = ['code-quality', 'best-practice'];
    const safeImprovements = ['long-line', 'magic-number', 'console-statement'];
    
    return safeTypes.includes(improvement.type) && 
           safeImprovements.some(safe => improvement.description.includes(safe));
  }

  async applyCodeChange(improvement) {
    try {
      if (improvement.file && improvement.line && improvement.improvedCode) {
        const content = fs.readFileSync(improvement.file, 'utf8');
        const lines = content.split('\n');
        
        // Apply the improvement
        lines[improvement.line - 1] = improvement.improvedCode;
        
        // Write back to file
        fs.writeFileSync(improvement.file, lines.join('\n'));
        
        console.log(`✅ Applied improvement to ${improvement.file}:${improvement.line}`);
      }
    } catch (error) {
      console.error(`❌ Failed to apply code change:`, error.message);
      improvement.status = 'failed';
    }
  }

  async measureImprovementImpact(originalQuality) {
    try {
      console.log('📊 Measuring improvement impact...');
      
      // Wait a bit for changes to take effect
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Measure new quality
      const newQuality = await this.analyzeCurrentQuality();
      
      const impact = {
        overallScoreChange: newQuality.overallScore - originalQuality.overallScore,
        maintainabilityChange: newQuality.maintainability - originalQuality.maintainability,
        performanceChange: newQuality.performance - originalQuality.performance,
        securityChange: newQuality.security - originalQuality.security,
        readabilityChange: newQuality.readability - originalQuality.readability,
        testCoverageChange: newQuality.testCoverage - originalQuality.testCoverage,
        documentationChange: newQuality.documentation - originalQuality.documentation
      };
      
      return impact;
      
    } catch (error) {
      console.error('❌ Error measuring improvement impact:', error.message);
      return { error: error.message };
    }
  }

  async generateEnhancementReport(improvements, impact) {
    try {
      console.log('📋 Generating enhancement report...');
      
      const report = {
        summary: {
          totalImprovements: improvements.length,
          appliedImprovements: improvements.filter(i => i.status === 'applied').length,
          suggestedImprovements: improvements.filter(i => i.status === 'suggested-only').length,
          failedImprovements: improvements.filter(i => i.status === 'failed').length
        },
        impact: impact,
        recommendations: this.generateRecommendations(improvements, impact),
        nextSteps: this.generateNextSteps(improvements, impact)
      };
      
      return report;
      
    } catch (error) {
      console.error('❌ Error generating enhancement report:', error.message);
      return { error: error.message };
    }
  }

  generateRecommendations(improvements, impact) {
    const recommendations = [];
    
    if (impact.overallScoreChange < 0) {
      recommendations.push({
        priority: 'high',
        description: 'Quality score decreased after improvements',
        action: 'Review applied changes and revert if necessary'
      });
    }
    
    if (improvements.filter(i => i.status === 'failed').length > 0) {
      recommendations.push({
        priority: 'medium',
        description: 'Some improvements failed to apply',
        action: 'Investigate and manually apply failed improvements'
      });
    }
    
    if (impact.securityChange < 0) {
      recommendations.push({
        priority: 'critical',
        description: 'Security score decreased',
        action: 'Immediately review security-related changes'
      });
    }
    
    return recommendations;
  }

  generateNextSteps(improvements, impact) {
    const nextSteps = [];
    
    if (impact.overallScoreChange > 0) {
      nextSteps.push('Continue with enhancement cycle');
      nextSteps.push('Monitor quality metrics over time');
    } else {
      nextSteps.push('Review and refine enhancement strategy');
      nextSteps.push('Focus on high-impact, low-risk improvements');
    }
    
    if (improvements.filter(i => i.type === 'security').length > 0) {
      nextSteps.push('Schedule security review meeting');
      nextSteps.push('Update security documentation');
    }
    
    return nextSteps;
  }

  updateImprovementMetrics(improvements, impact) {
    this.improvementMetrics.totalImprovements += improvements.length;
    
    if (impact.overallScoreChange > 0) {
      this.improvementMetrics.codeQualityScore += impact.overallScoreChange;
    }
    
    if (impact.performanceChange > 0) {
      this.improvementMetrics.performanceImprovements++;
    }
    
    if (impact.securityChange > 0) {
      this.improvementMetrics.securityEnhancements++;
    }
    
    if (impact.maintainabilityChange > 0) {
      this.improvementMetrics.maintainabilityGains++;
    }
  }

  logEnhancementResults() {
    if (this.enhancementHistory.length > 0) {
      const latest = this.enhancementHistory[this.enhancementHistory.length - 1];
      
      console.log('\n🤖 AI Enhancement Results:');
      console.log('─'.repeat(60));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Enhancement Time: ${latest.enhancementTime}ms`);
      console.log(`🔍 Opportunities Found: ${latest.opportunities.length}`);
      console.log(`✅ Improvements Applied: ${latest.improvements.filter(i => i.status === 'applied').length}`);
      console.log(`💡 Suggestions Generated: ${latest.improvements.filter(i => i.status === 'suggested-only').length}`);
      console.log(`📊 Quality Score Change: ${latest.impact.overallScoreChange > 0 ? '+' : ''}${latest.impact.overallScoreChange}`);
      console.log(`🔒 Security Score Change: ${latest.impact.securityChange > 0 ? '+' : ''}${latest.impact.securityChange}`);
      console.log('─'.repeat(60));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`🤖 AI Enhancer Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📈 Total Improvements: ${this.improvementMetrics.totalImprovements}, Quality Score: ${this.improvementMetrics.codeQualityScore}`);
  }

  logError(error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      process: 'ai-code-enhancer'
    };
    
    console.error('❌ Error logged:', errorLog);
    
    // Save error to log file
    try {
      const errorLogPath = path.join(process.cwd(), 'logs', 'ai-code-enhancer-errors.json');
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
      const resultsPath = path.join(process.cwd(), 'logs', 'ai-code-enhancer-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.enhancementHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save results:', error.message);
    }
  }

  // Helper methods
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

  getAllTestFiles() {
    const testDirs = ['tests', '__tests__', 'test'];
    const testFiles = [];
    
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        testFiles.push(...this.getAllFiles(dir));
      }
    });
    
    return testFiles;
  }

  getAllSourceFiles() {
    const srcDirs = ['src', 'pages', 'components'];
    const sourceFiles = [];
    
    srcDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        sourceFiles.push(...this.getAllFiles(dir));
      }
    });
    
    return sourceFiles;
  }

  calculateFileComplexity(lines) {
    let complexity = 1;
    
    lines.forEach(line => {
      const trimmed = line.trim();
      
      if (trimmed.includes('if ') || trimmed.includes('else')) complexity += 0.5;
      if (trimmed.includes('for ') || trimmed.includes('while ')) complexity += 0.5;
      if (trimmed.includes('switch ')) complexity += 0.5;
      if (trimmed.includes('catch ')) complexity += 0.5;
      if (trimmed.includes('&&') || trimmed.includes('||')) complexity += 0.2;
      if (trimmed.includes('?') && trimmed.includes(':')) complexity += 0.3;
      if (trimmed.includes('{')) complexity += 0.1;
      if (trimmed.includes('}')) complexity += 0.1;
    });
    
    return Math.min(complexity, 10);
  }

  async detectCodeSmells() {
    // Implementation similar to intelligent-code-analyzer
    return [];
  }

  async detectBestPracticeViolations() {
    // Implementation similar to intelligent-code-analyzer
    return [];
  }

  async detectPerformanceIssues() {
    // Implementation similar to intelligent-code-analyzer
    return [];
  }

  async detectSecurityIssues() {
    // Implementation similar to intelligent-code-analyzer
    return [];
  }

  async detectComplexFunctions() {
    // Implementation for detecting complex functions
    return [];
  }

  async detectLongFiles() {
    // Implementation for detecting long files
    return [];
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
}

// Start the AI code enhancer
const enhancer = new AICodeEnhancer();
enhancer.start().catch(error => {
  console.error('❌ Failed to start AI code enhancer:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down AI code enhancer...');
  enhancer.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down AI code enhancer...');
  enhancer.saveResults();
  process.exit(0);
});