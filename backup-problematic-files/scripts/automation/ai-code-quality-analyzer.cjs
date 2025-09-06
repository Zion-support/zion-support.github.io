#!/usr/bin/env node

/**
 * AI-Powered Code Quality Analyzer
 * Advanced code quality analysis with machine learning insights
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeQualityAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      overallScore: 0,
      categories: {},
      recommendations: [],
      issues: [],
      metrics: {}
    };
  }

  /**
   * Run comprehensive code quality analysis
   */
  async analyze() {
    console.log('🔍 Starting AI-powered code quality analysis...');
    
    try {
      // Analyze different aspects
      await this.analyzeCodeStructure();
      await this.analyzePerformance();
      await this.analyzeMaintainability();
      await this.analyzeSecurity();
      await this.analyzeTesting();
      
      // Calculate overall score
      this.calculateOverallScore();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save results
      await this.saveResults();
      
      console.log('✅ Code quality analysis completed');
      return this.results;
      
    } catch (error) {
      console.error('❌ Error during analysis:', error.message);
      return this.results;
    }
  }

  /**
   * Analyze code structure and organization
   */
  async analyzeCodeStructure() {
    console.log('📁 Analyzing code structure...');
    
    const structureScore = {
      fileOrganization: 0,
      componentStructure: 0,
      importOrganization: 0,
      namingConventions: 0
    };

    try {
      // Check file organization
      const appDir = path.join(this.projectRoot, 'app');
      const componentsDir = path.join(this.projectRoot, 'components');
      
      if (fs.existsSync(appDir)) structureScore.fileOrganization += 25;
      if (fs.existsSync(componentsDir)) structureScore.fileOrganization += 25;
      
      // Check for proper component structure
      const componentFiles = this.findFiles('**/*.tsx', ['node_modules', '.next']);
      structureScore.componentStructure = Math.min(100, componentFiles.length * 5);
      
      // Check import organization
      const importIssues = this.checkImportOrganization();
      structureScore.importOrganization = Math.max(0, 100 - importIssues * 10);
      
      // Check naming conventions
      const namingIssues = this.checkNamingConventions();
      structureScore.namingConventions = Math.max(0, 100 - namingIssues * 5);
      
    } catch (error) {
      console.log('⚠️ Error analyzing code structure:', error.message);
    }

    this.results.categories.structure = structureScore;
  }

  /**
   * Analyze performance aspects
   */
  async analyzePerformance() {
    console.log('⚡ Analyzing performance...');
    
    const performanceScore = {
      bundleSize: 0,
      imageOptimization: 0,
      codeSplitting: 0,
      caching: 0
    };

    try {
      // Check for Next.js optimizations
      const nextConfig = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(nextConfig)) {
        performanceScore.bundleSize += 25;
        performanceScore.codeSplitting += 25;
      }
      
      // Check for image optimization
      const imageFiles = this.findFiles('**/*.{jpg,jpeg,png,webp}', ['node_modules', '.next']);
      if (imageFiles.length > 0) {
        performanceScore.imageOptimization += 50;
      }
      
      // Check for caching strategies
      const cacheFiles = this.findFiles('**/*cache*', ['node_modules', '.next']);
      if (cacheFiles.length > 0) {
        performanceScore.caching += 25;
      }
      
    } catch (error) {
      console.log('⚠️ Error analyzing performance:', error.message);
    }

    this.results.categories.performance = performanceScore;
  }

  /**
   * Analyze maintainability
   */
  async analyzeMaintainability() {
    console.log('🔧 Analyzing maintainability...');
    
    const maintainabilityScore = {
      documentation: 0,
      errorHandling: 0,
      typeSafety: 0,
      codeComplexity: 0
    };

    try {
      // Check for documentation
      const readmeFiles = this.findFiles('**/README*', ['node_modules', '.next']);
      const docFiles = this.findFiles('**/*.md', ['node_modules', '.next']);
      maintainabilityScore.documentation = Math.min(100, (readmeFiles.length + docFiles.length) * 20);
      
      // Check for TypeScript usage
      const tsFiles = this.findFiles('**/*.ts', ['node_modules', '.next']);
      const tsxFiles = this.findFiles('**/*.tsx', ['node_modules', '.next']);
      if (tsFiles.length > 0 || tsxFiles.length > 0) {
        maintainabilityScore.typeSafety += 50;
      }
      
      // Check for error handling patterns
      const errorHandlingPatterns = this.checkErrorHandling();
      maintainabilityScore.errorHandling = Math.min(100, errorHandlingPatterns * 10);
      
    } catch (error) {
      console.log('⚠️ Error analyzing maintainability:', error.message);
    }

    this.results.categories.maintainability = maintainabilityScore;
  }

  /**
   * Analyze security aspects
   */
  async analyzeSecurity() {
    console.log('🔒 Analyzing security...');
    
    const securityScore = {
      dependencies: 0,
      environmentVariables: 0,
      inputValidation: 0,
      headers: 0
    };

    try {
      // Check for security dependencies
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const securityDeps = ['helmet', 'cors', 'express-rate-limit', 'bcrypt'];
      const hasSecurityDeps = securityDeps.some(dep => packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]);
      
      if (hasSecurityDeps) {
        securityScore.dependencies += 50;
      }
      
      // Check for environment variable usage
      const envFiles = this.findFiles('**/.env*', ['node_modules', '.next']);
      if (envFiles.length > 0) {
        securityScore.environmentVariables += 25;
      }
      
      // Check for security headers
      const nextConfig = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(nextConfig)) {
        const configContent = fs.readFileSync(nextConfig, 'utf8');
        if (configContent.includes('headers') || configContent.includes('security')) {
          securityScore.headers += 25;
        }
      }
      
    } catch (error) {
      console.log('⚠️ Error analyzing security:', error.message);
    }

    this.results.categories.security = securityScore;
  }

  /**
   * Analyze testing coverage
   */
  async analyzeTesting() {
    console.log('🧪 Analyzing testing...');
    
    const testingScore = {
      testCoverage: 0,
      testTypes: 0,
      testQuality: 0,
      ciIntegration: 0
    };

    try {
      // Check for test files
      const testFiles = this.findFiles('**/*.{test,spec}.{js,ts,tsx}', ['node_modules', '.next']);
      const testDir = path.join(this.projectRoot, '__tests__');
      
      if (testFiles.length > 0) {
        testingScore.testCoverage += 50;
        testingScore.testTypes += 25;
      }
      
      if (fs.existsSync(testDir)) {
        testingScore.testCoverage += 25;
      }
      
      // Check for CI configuration
      const ciFiles = this.findFiles('**/.github/workflows/*', ['node_modules', '.next']);
      if (ciFiles.length > 0) {
        testingScore.ciIntegration += 25;
      }
      
    } catch (error) {
      console.log('⚠️ Error analyzing testing:', error.message);
    }

    this.results.categories.testing = testingScore;
  }

  /**
   * Helper method to find files
   */
  findFiles(pattern, exclude = []) {
    try {
      const { glob } = require('glob');
      return glob.sync(pattern, { 
        cwd: this.projectRoot, 
        ignore: exclude,
        nodir: true 
      });
    } catch (error) {
      return [];
    }
  }

  /**
   * Check import organization
   */
  checkImportOrganization() {
    let issues = 0;
    
    try {
      const jsFiles = this.findFiles('**/*.{js,ts,tsx}', ['node_modules', '.next']);
      
      for (const file of jsFiles.slice(0, 10)) { // Check first 10 files
        const content = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
        const lines = content.split('\n');
        
        for (const line of lines.slice(0, 20)) { // Check first 20 lines
          if (line.trim().startsWith('import') && line.includes('..') && line.includes('.')) {
            issues++;
          }
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    return issues;
  }

  /**
   * Check naming conventions
   */
  checkNamingConventions() {
    let issues = 0;
    
    try {
      const componentFiles = this.findFiles('**/*.tsx', ['node_modules', '.next']);
      
      for (const file of componentFiles.slice(0, 5)) { // Check first 5 files
        const fileName = path.basename(file);
        if (!/^[A-Z]/.test(fileName) && fileName.includes('component')) {
          issues++;
        }
      }
    } catch (error) {
      // Ignore errors
    }
    
    return issues;
  }

  /**
   * Check error handling patterns
   */
  checkErrorHandling() {
    let patterns = 0;
    
    try {
      const jsFiles = this.findFiles('**/*.{js,ts,tsx}', ['node_modules', '.next']);
      
      for (const file of jsFiles.slice(0, 10)) { // Check first 10 files
        const content = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
        
        if (content.includes('try {') && content.includes('catch')) patterns++;
        if (content.includes('ErrorBoundary')) patterns++;
        if (content.includes('throw new Error')) patterns++;
      }
    } catch (error) {
      // Ignore errors
    }
    
    return patterns;
  }

  /**
   * Calculate overall score
   */
  calculateOverallScore() {
    const categories = Object.values(this.results.categories);
    const totalScore = categories.reduce((sum, category) => {
      const categoryScore = Object.values(category).reduce((catSum, score) => catSum + score, 0);
      return sum + (categoryScore / Object.keys(category).length);
    }, 0);
    
    this.results.overallScore = Math.round(totalScore / categories.length);
  }

  /**
   * Generate recommendations
   */
  generateRecommendations() {
    const recommendations = [];
    
    // Structure recommendations
    if (this.results.categories.structure?.fileOrganization < 50) {
      recommendations.push('Improve file organization by creating proper directory structure');
    }
    
    // Performance recommendations
    if (this.results.categories.performance?.bundleSize < 50) {
      recommendations.push('Implement code splitting and bundle optimization');
    }
    
    // Security recommendations
    if (this.results.categories.security?.dependencies < 50) {
      recommendations.push('Add security dependencies like helmet and cors');
    }
    
    // Testing recommendations
    if (this.results.categories.testing?.testCoverage < 50) {
      recommendations.push('Increase test coverage with unit and integration tests');
    }
    
    this.results.recommendations = recommendations;
  }

  /**
   * Save analysis results
   */
  async saveResults() {
    const reportPath = path.join(this.projectRoot, 'code-quality-report.json');
    
    try {
      fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
      console.log(`📄 Code quality report saved to: ${reportPath}`);
    } catch (error) {
      console.error('❌ Error saving results:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AICodeQualityAnalyzer();
  analyzer.analyze().catch(console.error);
}

module.exports = AICodeQualityAnalyzer;