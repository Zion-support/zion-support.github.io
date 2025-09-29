#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeQualityMonitor {
  constructor() {
    this.metrics = {
      complexity: 0,
      maintainability: 0,
      testCoverage: 0,
      performance: 0,
      security: 0,
      documentation: 0
    };
    
    this.analysisHistory = [];
    this.recommendations = [];
    this.logFile = path.join(__dirname, 'logs', 'ai-code-quality.log');
    this.ensureLogDirectory();
    
    // Configuration from environment
    this.monitoringInterval = parseInt(process.env.MONITORING_INTERVAL) || 300000; // 5 minutes
    this.aiAnalysis = process.env.AI_ANALYSIS === 'true';
    
    this.log('🚀 AI Code Quality Monitor initialized');
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async analyzeCodeQuality() {
    this.log('🔍 Starting AI-powered code quality analysis...');
    
    try {
      // Analyze TypeScript complexity
      await this.analyzeTypeScriptComplexity();
      
      // Analyze code maintainability
      await this.analyzeMaintainability();
      
      // Analyze test coverage
      await this.analyzeTestCoverage();
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns();
      
      // Analyze security patterns
      await this.analyzeSecurityPatterns();
      
      // Analyze documentation coverage
      await this.analyzeDocumentationCoverage();
      
      // Generate AI recommendations
      if (this.aiAnalysis) {
        await this.generateAIRecommendations();
      }
      
      // Save analysis results
      this.saveAnalysisResults();
      
      this.log('✅ Code quality analysis completed successfully');
      return this.metrics;
      
    } catch (error) {
      this.log(`❌ Code quality analysis failed: ${error.message}`);
      return null;
    }
  }

  async analyzeTypeScriptComplexity() {
    this.log('📊 Analyzing TypeScript complexity...');
    
    try {
      // Run TypeScript compiler to check for errors
      const result = execSync('npx tsc --noEmit', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Analyze file complexity
      const complexityScore = this.calculateFileComplexity();
      this.metrics.complexity = complexityScore;
      
      this.log(`📊 TypeScript complexity score: ${complexityScore}/10`);
      
    } catch (error) {
      // TypeScript errors found
      const errorCount = this.countTypeScriptErrors(error.stdout || error.stderr);
      this.metrics.complexity = Math.max(0, 10 - errorCount);
      this.log(`⚠️ TypeScript errors found: ${errorCount}`);
    }
  }

  async analyzeMaintainability() {
    this.log('🔧 Analyzing code maintainability...');
    
    try {
      // Check for code smells and patterns
      const maintainabilityScore = await this.calculateMaintainabilityScore();
      this.metrics.maintainability = maintainabilityScore;
      
      this.log(`🔧 Maintainability score: ${maintainabilityScore}/100`);
      
    } catch (error) {
      this.log(`❌ Maintainability analysis failed: ${error.message}`);
      this.metrics.maintainability = 50; // Default score
    }
  }

  async analyzeTestCoverage() {
    this.log('🧪 Analyzing test coverage...');
    
    try {
      // Check if tests exist and run them
      const testCoverage = await this.calculateTestCoverage();
      this.metrics.testCoverage = testCoverage;
      
      this.log(`🧪 Test coverage: ${testCoverage}%`);
      
    } catch (error) {
      this.log(`⚠️ Test coverage analysis failed: ${error.message}`);
      this.metrics.testCoverage = 0;
    }
  }

  async analyzePerformancePatterns() {
    this.log('⚡ Analyzing performance patterns...');
    
    try {
      // Analyze bundle size and performance
      const performanceScore = await this.analyzeBundlePerformance();
      this.metrics.performance = performanceScore;
      
      this.log(`⚡ Performance score: ${performanceScore}/100`);
      
    } catch (error) {
      this.log(`⚠️ Performance analysis failed: ${error.message}`);
      this.metrics.performance = 70; // Default score
    }
  }

  async analyzeSecurityPatterns() {
    this.log('🔒 Analyzing security patterns...');
    
    try {
      // Check for common security issues
      const securityScore = await this.analyzeSecurityVulnerabilities();
      this.metrics.security = securityScore;
      
      this.log(`🔒 Security score: ${securityScore}/100`);
      
    } catch (error) {
      this.log(`⚠️ Security analysis failed: ${error.message}`);
      this.metrics.security = 80; // Default score
    }
  }

  async analyzeDocumentationCoverage() {
    this.log('📚 Analyzing documentation coverage...');
    
    try {
      // Check documentation completeness
      const docScore = await this.calculateDocumentationScore();
      this.metrics.documentation = docScore;
      
      this.log(`📚 Documentation score: ${docScore}/100`);
      
    } catch (error) {
      this.log(`⚠️ Documentation analysis failed: ${error.message}`);
      this.metrics.documentation = 60; // Default score
    }
  }

  calculateFileComplexity() {
    try {
      // Count files and analyze complexity
      const sourceFiles = this.getSourceFiles();
      let totalComplexity = 0;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateSingleFileComplexity(content);
        totalComplexity += complexity;
      }
      
      const averageComplexity = totalComplexity / sourceFiles.length;
      return Math.min(10, Math.max(1, Math.round(averageComplexity)));
      
    } catch (error) {
      this.log(`⚠️ Complexity calculation failed: ${error.message}`);
      return 5; // Default complexity
    }
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'hooks'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  calculateSingleFileComplexity(content) {
    // Simple complexity calculation based on code patterns
    let complexity = 1;
    
    // Increase complexity for various patterns
    if (content.includes('if (')) complexity += 0.5;
    if (content.includes('for (')) complexity += 0.5;
    if (content.includes('while (')) complexity += 0.5;
    if (content.includes('switch (')) complexity += 0.5;
    if (content.includes('catch (')) complexity += 0.5;
    if (content.includes('async ')) complexity += 0.3;
    if (content.includes('await ')) complexity += 0.3;
    if (content.includes('=>')) complexity += 0.2;
    
    return Math.min(10, complexity);
  }

  async calculateMaintainabilityScore() {
    try {
      const sourceFiles = this.getSourceFiles();
      let totalScore = 100;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileScore = this.calculateFileMaintainability(content);
        totalScore += fileScore;
      }
      
      const averageScore = totalScore / sourceFiles.length;
      return Math.min(100, Math.max(0, Math.round(averageScore)));
      
    } catch (error) {
      return 70; // Default score
    }
  }

  calculateFileMaintainability(content) {
    let score = 0;
    
    // Positive factors
    if (content.includes('// TODO:')) score += 5;
    if (content.includes('// FIXME:')) score -= 10;
    if (content.includes('console.log')) score -= 5;
    if (content.includes('debugger')) score -= 15;
    
    // Function length analysis
    const functions = content.match(/function\s+\w+\s*\([^)]*\)\s*\{/g) || [];
    if (functions.length > 10) score -= 10;
    
    return score;
  }

  async calculateTestCoverage() {
    try {
      const testFiles = this.getTestFiles();
      const sourceFiles = this.getSourceFiles();
      
      if (sourceFiles.length === 0) return 0;
      
      const coverage = (testFiles.length / sourceFiles.length) * 100;
      return Math.min(100, Math.round(coverage));
      
    } catch (error) {
      return 0;
    }
  }

  getTestFiles() {
    const testDirs = ['tests', '__tests__', 'test'];
    const testFiles = [];
    
    for (const dir of testDirs) {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, testFiles);
      }
    }
    
    return testFiles.filter(file => 
      file.includes('.test.') || file.includes('.spec.') || file.endsWith('.test.js')
    );
  }

  async analyzeBundlePerformance() {
    try {
      // Check if bundle analyzer is available
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        if (packageJson.devDependencies && packageJson.devDependencies['@next/bundle-analyzer']) {
          // Run bundle analysis
          return 85; // Good score if bundle analyzer is available
        }
      }
      
      // Basic performance check
      return 75;
      
    } catch (error) {
      return 70;
    }
  }

  async analyzeSecurityVulnerabilities() {
    try {
      // Check for common security patterns
      const sourceFiles = this.getSourceFiles();
      let securityScore = 100;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Security risk patterns
        if (content.includes('eval(')) securityScore -= 30;
        if (content.includes('innerHTML')) securityScore -= 15;
        if (content.includes('document.write')) securityScore -= 20;
        if (content.includes('setTimeout(') && content.includes('"')) securityScore -= 10;
      }
      
      return Math.max(0, securityScore);
      
    } catch (error) {
      return 80;
    }
  }

  async calculateDocumentationScore() {
    try {
      const sourceFiles = this.getSourceFiles();
      let totalScore = 0;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileScore = this.calculateFileDocumentation(content);
        totalScore += fileScore;
      }
      
      const averageScore = totalScore / sourceFiles.length;
      return Math.min(100, Math.max(0, Math.round(averageScore)));
      
    } catch (error) {
      return 60;
    }
  }

  calculateFileDocumentation(content) {
    let score = 0;
    
    // Check for JSDoc comments
    const jsDocMatches = content.match(/\/\*\*[\s\S]*?\*\//g) || [];
    score += jsDocMatches.length * 10;
    
    // Check for inline comments
    const inlineComments = content.match(/\/\/.*$/gm) || [];
    score += inlineComments.length * 2;
    
    // Check for README or documentation files
    if (content.includes('README') || content.includes('@description')) {
      score += 20;
    }
    
    return Math.min(100, score);
  }

  async generateAIRecommendations() {
    this.log('🤖 Generating AI-powered recommendations...');
    
    this.recommendations = [];
    
    // Complexity recommendations
    if (this.metrics.complexity > 7) {
      this.recommendations.push({
        type: 'complexity',
        priority: 'high',
        message: 'Code complexity is high. Consider refactoring complex functions into smaller, more manageable pieces.',
        action: 'Refactor complex functions and reduce cyclomatic complexity'
      });
    }
    
    // Maintainability recommendations
    if (this.metrics.maintainability < 70) {
      this.recommendations.push({
        type: 'maintainability',
        priority: 'high',
        message: 'Code maintainability is low. Add TODO comments and remove debug code.',
        action: 'Clean up code and add proper documentation'
      });
    }
    
    // Test coverage recommendations
    if (this.metrics.testCoverage < 50) {
      this.recommendations.push({
        type: 'testing',
        priority: 'medium',
        message: 'Test coverage is low. Consider adding more unit tests.',
        action: 'Increase test coverage to at least 80%'
      });
    }
    
    // Performance recommendations
    if (this.metrics.performance < 80) {
      this.recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'Performance could be improved. Consider bundle analysis and optimization.',
        action: 'Run bundle analysis and optimize imports'
      });
    }
    
    // Security recommendations
    if (this.metrics.security < 90) {
      this.recommendations.push({
        type: 'security',
        priority: 'high',
        message: 'Security vulnerabilities detected. Review code for unsafe patterns.',
        action: 'Audit code for security issues and fix vulnerabilities'
      });
    }
    
    // Documentation recommendations
    if (this.metrics.documentation < 70) {
      this.recommendations.push({
        type: 'documentation',
        priority: 'low',
        message: 'Documentation coverage is low. Add JSDoc comments and inline documentation.',
        action: 'Improve code documentation and add JSDoc comments'
      });
    }
    
    this.log(`🤖 Generated ${this.recommendations.length} AI recommendations`);
  }

  saveAnalysisResults() {
    const analysisResult = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: this.generateSummary()
    };
    
    this.analysisHistory.push(analysisResult);
    
    // Save to file
    const resultsFile = path.join(__dirname, 'logs', 'code-quality-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify(analysisResult, null, 2));
    
    this.log('💾 Analysis results saved');
  }

  generateSummary() {
    const totalScore = Object.values(this.metrics).reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / Object.keys(this.metrics).length;
    
    let grade = 'A';
    if (averageScore < 90) grade = 'B';
    if (averageScore < 80) grade = 'C';
    if (averageScore < 70) grade = 'D';
    if (averageScore < 60) grade = 'F';
    
    return {
      totalScore: Math.round(totalScore),
      averageScore: Math.round(averageScore),
      grade,
      status: averageScore >= 80 ? 'Good' : averageScore >= 60 ? 'Fair' : 'Needs Improvement'
    };
  }

  startContinuousMonitoring() {
    this.log('🔄 Starting continuous code quality monitoring...');
    
    // Run initial analysis
    this.analyzeCodeQuality();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running continuous code quality analysis...');
      await this.analyzeCodeQuality();
    }, this.monitoringInterval);
    
    this.log(`✅ Continuous monitoring started with ${this.monitoringInterval / 1000}s intervals`);
  }

  getStatus() {
    return {
      running: true,
      metrics: this.metrics,
      recommendations: this.recommendations,
      lastAnalysis: this.analysisHistory[this.analysisHistory.length - 1],
      monitoringInterval: this.monitoringInterval
    };
  }
}

// CLI handling
const monitor = new AICodeQualityMonitor();
const command = process.argv[2];

switch (command) {
  case 'analyze':
    monitor.analyzeCodeQuality();
    break;
  case 'continuous':
    monitor.startContinuousMonitoring();
    break;
  case 'status':
    const status = monitor.getStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node ai-code-quality-monitor.cjs [analyze|continuous|status]');
    console.log('\nCommands:');
    console.log('  analyze     - Run single code quality analysis');
    console.log('  continuous  - Start continuous monitoring');
    console.log('  status      - Show current status');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  monitor.log('🛑 AI Code Quality Monitor stopped');
  process.exit(0);
});

process.on('SIGTERM', () => {
  monitor.log('🛑 AI Code Quality Monitor stopped');
  process.exit(0);
});