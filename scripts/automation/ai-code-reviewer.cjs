#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Review Automation...');

class AICodeReviewer {
  constructor() {
    this.reviewResults = {
      timestamp: new Date().toISOString(),
      codeQuality: { score: 0, issues: [], suggestions: [] },
      performance: { score: 0, issues: [], suggestions: [] },
      security: { score: 0, issues: [], suggestions: [] },
      maintainability: { score: 0, issues: [], suggestions: [] },
      accessibility: { score: 0, issues: [], suggestions: [] },
      seo: { score: 0, issues: [], suggestions: [] }
    };
    this.reportDir = path.join(process.cwd(), 'ai-code-review-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runAICodeReview() {
    try {
      console.log('🤖 Running AI-powered code review...');
      
      // Analyze code quality
      await this.analyzeCodeQuality();
      
      // Analyze performance patterns
      await this.analyzePerformance();
      
      // Analyze security patterns
      await this.analyzeSecurity();
      
      // Analyze maintainability
      await this.analyzeMaintainability();
      
      // Analyze accessibility
      await this.analyzeAccessibility();
      
      // Analyze SEO patterns
      await this.analyzeSEO();
      
      // Generate comprehensive report
      await this.generateReport();
      
      // Apply intelligent fixes
      await this.applyIntelligentFixes();
      
      console.log('✅ AI Code Review completed successfully');
      
    } catch (error) {
      console.error('❌ AI Code Review failed:', error.message);
      this.saveErrorReport(error);
    }
  }

  async analyzeCodeQuality() {
    console.log('🔍 Analyzing code quality...');
    
    try {
      // Run ESLint with custom rules
      const lintOutput = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Analyze TypeScript types
      const typeOutput = execSync('npm run type-check', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Calculate quality score based on lint and type results
      const qualityScore = this.calculateQualityScore(lintOutput, typeOutput);
      
      this.reviewResults.codeQuality = {
        score: qualityScore,
        issues: this.parseLintIssues(lintOutput),
        suggestions: this.generateQualitySuggestions(qualityScore)
      };
      
      console.log(`✅ Code quality analysis completed - Score: ${qualityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Code quality analysis encountered issues, analyzing output...');
      this.reviewResults.codeQuality = {
        score: 0,
        issues: this.parseLintIssues(error.stdout || error.stderr || ''),
        suggestions: ['Fix linting errors to improve code quality']
      };
    }
  }

  async analyzePerformance() {
    console.log('⚡ Analyzing performance patterns...');
    
    try {
      // Analyze bundle size
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check for performance anti-patterns
      const performanceIssues = this.detectPerformanceAntiPatterns();
      
      // Analyze import patterns
      const importAnalysis = this.analyzeImportPatterns();
      
      const performanceScore = this.calculatePerformanceScore(performanceIssues, importAnalysis);
      
      this.reviewResults.performance = {
        score: performanceScore,
        issues: performanceIssues,
        suggestions: this.generatePerformanceSuggestions(performanceScore)
      };
      
      console.log(`✅ Performance analysis completed - Score: ${performanceScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Performance analysis failed:', error.message);
      this.reviewResults.performance = {
        score: 0,
        issues: ['Build failed - unable to analyze performance'],
        suggestions: ['Fix build issues to enable performance analysis']
      };
    }
  }

  async analyzeSecurity() {
    console.log('🔒 Analyzing security patterns...');
    
    try {
      // Run security audit
      const auditOutput = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      const securityIssues = this.parseSecurityIssues(auditData);
      const securityScore = this.calculateSecurityScore(securityIssues);
      
      this.reviewResults.security = {
        score: securityScore,
        issues: securityIssues,
        suggestions: this.generateSecuritySuggestions(securityScore)
      };
      
      console.log(`✅ Security analysis completed - Score: ${securityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Security analysis failed:', error.message);
      this.reviewResults.security = {
        score: 0,
        issues: ['Security audit failed'],
        suggestions: ['Run npm audit manually to check for vulnerabilities']
      };
    }
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing maintainability...');
    
    try {
      // Analyze code complexity
      const complexityIssues = this.analyzeCodeComplexity();
      
      // Check for code duplication
      const duplicationIssues = this.detectCodeDuplication();
      
      // Analyze file structure
      const structureIssues = this.analyzeFileStructure();
      
      const maintainabilityScore = this.calculateMaintainabilityScore(
        complexityIssues, 
        duplicationIssues, 
        structureIssues
      );
      
      this.reviewResults.maintainability = {
        score: maintainabilityScore,
        issues: [...complexityIssues, ...duplicationIssues, ...structureIssues],
        suggestions: this.generateMaintainabilitySuggestions(maintainabilityScore)
      };
      
      console.log(`✅ Maintainability analysis completed - Score: ${maintainabilityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Maintainability analysis failed:', error.message);
      this.reviewResults.maintainability = {
        score: 0,
        issues: ['Maintainability analysis failed'],
        suggestions: ['Check file structure and code organization']
      };
    }
  }

  async analyzeAccessibility() {
    console.log('♿ Analyzing accessibility...');
    
    try {
      // Check for accessibility patterns in React components
      const accessibilityIssues = this.detectAccessibilityIssues();
      
      // Check for semantic HTML usage
      const semanticIssues = this.checkSemanticHTML();
      
      // Check for ARIA attributes
      const ariaIssues = this.checkARIAUsage();
      
      const accessibilityScore = this.calculateAccessibilityScore(
        accessibilityIssues,
        semanticIssues,
        ariaIssues
      );
      
      this.reviewResults.accessibility = {
        score: accessibilityScore,
        issues: [...accessibilityIssues, ...semanticIssues, ...ariaIssues],
        suggestions: this.generateAccessibilitySuggestions(accessibilityScore)
      };
      
      console.log(`✅ Accessibility analysis completed - Score: ${accessibilityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Accessibility analysis failed:', error.message);
      this.reviewResults.accessibility = {
        score: 0,
        issues: ['Accessibility analysis failed'],
        suggestions: ['Review React components for accessibility compliance']
      };
    }
  }

  async analyzeSEO() {
    console.log('🔍 Analyzing SEO patterns...');
    
    try {
      // Check meta tags
      const metaIssues = this.checkMetaTags();
      
      // Check heading structure
      const headingIssues = this.checkHeadingStructure();
      
      // Check image alt texts
      const imageIssues = this.checkImageAltTexts();
      
      // Check URL structure
      const urlIssues = this.checkURLStructure();
      
      const seoScore = this.calculateSEOScore(
        metaIssues,
        headingIssues,
        imageIssues,
        urlIssues
      );
      
      this.reviewResults.seo = {
        score: seoScore,
        issues: [...metaIssues, ...headingIssues, ...imageIssues, ...urlIssues],
        suggestions: this.generateSEOSuggestions(seoScore)
      };
      
      console.log(`✅ SEO analysis completed - Score: ${seoScore}/100`);
      
    } catch (error) {
      console.log('⚠️ SEO analysis failed:', error.message);
      this.reviewResults.seo = {
        score: 0,
        issues: ['SEO analysis failed'],
        suggestions: ['Review meta tags, headings, and image alt texts']
      };
    }
  }

  calculateQualityScore(lintOutput, typeOutput) {
    let score = 100;
    
    // Deduct points for linting errors
    const lintErrors = (lintOutput.match(/error/g) || []).length;
    score -= Math.min(50, lintErrors * 5);
    
    // Deduct points for type errors
    const typeErrors = (typeOutput.match(/error/g) || []).length;
    score -= Math.min(30, typeErrors * 3);
    
    return Math.max(0, score);
  }

  calculatePerformanceScore(issues, importAnalysis) {
    let score = 100;
    
    // Deduct points for performance issues
    score -= Math.min(40, issues.length * 5);
    
    // Deduct points for poor import patterns
    score -= Math.min(30, importAnalysis.poorImports * 3);
    
    return Math.max(0, score);
  }

  calculateSecurityScore(issues) {
    let score = 100;
    
    // Deduct points for security vulnerabilities
    const criticalIssues = issues.filter(issue => issue.severity === 'critical').length;
    const highIssues = issues.filter(issue => issue.severity === 'high').length;
    
    score -= criticalIssues * 20;
    score -= highIssues * 10;
    
    return Math.max(0, score);
  }

  calculateMaintainabilityScore(complexity, duplication, structure) {
    let score = 100;
    
    score -= Math.min(30, complexity.length * 3);
    score -= Math.min(25, duplication.length * 2);
    score -= Math.min(20, structure.length * 2);
    
    return Math.max(0, score);
  }

  calculateAccessibilityScore(accessibility, semantic, aria) {
    let score = 100;
    
    score -= Math.min(40, accessibility.length * 4);
    score -= Math.min(30, semantic.length * 3);
    score -= Math.min(20, aria.length * 2);
    
    return Math.max(0, score);
  }

  calculateSEOScore(meta, heading, image, url) {
    let score = 100;
    
    score -= Math.min(30, meta.length * 3);
    score -= Math.min(25, heading.length * 2);
    score -= Math.min(25, image.length * 2);
    score -= Math.min(20, url.length * 2);
    
    return Math.max(0, score);
  }

  detectPerformanceAntiPatterns() {
    const issues = [];
    
    // Check for large bundle imports
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for large library imports
        if (content.includes('import * as') || content.includes('import {')) {
          const importMatch = content.match(/import.*from\s+['"]([^'"]+)['"]/g);
          if (importMatch) {
            importMatch.forEach(imp => {
              if (imp.includes('lodash') || imp.includes('moment') || imp.includes('date-fns')) {
                issues.push(`Large library import detected: ${imp}`);
              }
            });
          }
        }
        
        // Check for inline styles
        if (content.includes('style={{') && content.includes('}}')) {
          issues.push('Inline styles detected - consider using CSS classes');
        }
      });
    }
    
    return issues;
  }

  analyzeImportPatterns() {
    const srcPath = path.join(process.cwd(), 'src');
    let poorImports = 0;
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for wildcard imports
        if (content.includes('import * as')) {
          poorImports++;
        }
        
        // Check for unused imports
        const imports = content.match(/import.*from/g) || [];
        const usedImports = content.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || [];
        
        imports.forEach(imp => {
          const importName = imp.match(/import\s+{([^}]+)}/);
          if (importName) {
            const names = importName[1].split(',').map(n => n.trim());
            names.forEach(name => {
              if (!usedImports.includes(name) && name !== 'React') {
                poorImports++;
              }
            });
          }
        });
      });
    }
    
    return { poorImports };
  }

  detectCodeDuplication() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      const codeBlocks = new Map();
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        // Check for duplicate code blocks
        for (let i = 0; i < lines.length - 5; i++) {
          const block = lines.slice(i, i + 5).join('\n');
          const hash = this.hashCode(block);
          
          if (codeBlocks.has(hash)) {
            issues.push(`Potential code duplication detected in ${file}:${i + 1}`);
          } else {
            codeBlocks.set(hash, { file, line: i + 1 });
          }
        }
      });
    }
    
    return issues;
  }

  analyzeFileStructure() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const stats = fs.statSync(srcPath);
      
      // Check if src directory is too large
      if (stats.size > 50 * 1024 * 1024) { // 50MB
        issues.push('Source directory is very large - consider splitting into modules');
      }
      
      // Check for deep nesting
      const maxDepth = this.getMaxDirectoryDepth(srcPath);
      if (maxDepth > 5) {
        issues.push(`Deep directory nesting detected (${maxDepth} levels) - consider flattening structure`);
      }
    }
    
    return issues;
  }

  detectAccessibilityIssues() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for missing alt attributes
        if (content.includes('<img') && !content.includes('alt=')) {
          issues.push(`Missing alt attribute in ${file}`);
        }
        
        // Check for missing form labels
        if (content.includes('<input') && !content.includes('<label')) {
          issues.push(`Missing label for input in ${file}`);
        }
        
        // Check for proper heading hierarchy
        if (content.includes('<h1') && content.includes('<h3') && !content.includes('<h2')) {
          issues.push(`Skipped heading level in ${file}`);
        }
      });
    }
    
    return issues;
  }

  checkSemanticHTML() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for div overuse
        const divCount = (content.match(/<div/g) || []).length;
        const semanticCount = (content.match(/<(main|section|article|header|footer|nav|aside)/g) || []).length;
        
        if (divCount > semanticCount * 2) {
          issues.push(`Overuse of div elements in ${file} - consider semantic HTML`);
        }
      });
    }
    
    return issues;
  }

  checkARIAUsage() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for proper ARIA usage
        if (content.includes('aria-label=') && !content.includes('aria-labelledby=')) {
          issues.push(`Consider using aria-labelledby for better accessibility in ${file}`);
        }
      });
    }
    
    return issues;
  }

  checkMetaTags() {
    const issues = [];
    const publicPath = path.join(process.cwd(), 'public');
    const srcPath = path.join(process.cwd(), 'src');
    
    // Check index.html
    const indexPath = path.join(publicPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      
      if (!content.includes('<meta name="description"')) {
        issues.push('Missing meta description tag');
      }
      
      if (!content.includes('<meta name="keywords"')) {
        issues.push('Missing meta keywords tag');
      }
      
      if (!content.includes('<meta property="og:title"')) {
        issues.push('Missing Open Graph title tag');
      }
    }
    
    return issues;
  }

  checkHeadingStructure() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for proper heading hierarchy
        const headings = content.match(/<h[1-6][^>]*>/g) || [];
        let currentLevel = 0;
        
        headings.forEach(heading => {
          const level = parseInt(heading.match(/<h([1-6])/)[1]);
          
          if (level > currentLevel + 1) {
            issues.push(`Skipped heading level in ${file} - h${currentLevel} to h${level}`);
          }
          
          currentLevel = level;
        });
      });
    }
    
    return issues;
  }

  checkImageAltTexts() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for images without alt text
        const images = content.match(/<img[^>]*>/g) || [];
        
        images.forEach(img => {
          if (!img.includes('alt=') || img.includes('alt=""')) {
            issues.push(`Image missing alt text in ${file}`);
          }
        });
      });
    }
    
    return issues;
  }

  checkURLStructure() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for hardcoded URLs
        if (content.includes('http://localhost') || content.includes('http://127.0.0.1')) {
          issues.push(`Hardcoded localhost URL found in ${file}`);
        }
        
        // Check for relative URLs that could be absolute
        if (content.includes('href="./') || content.includes('src="./')) {
          issues.push(`Consider using absolute URLs for better SEO in ${file}`);
        }
      });
    }
    
    return issues;
  }

  parseLintIssues(output) {
    const issues = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/([^:]+):(\d+):(\d+):\s*(.+)/);
        if (match) {
          issues.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4]
          });
        }
      }
    });
    
    return issues;
  }

  parseSecurityIssues(auditData) {
    const issues = [];
    
    if (auditData.vulnerabilities) {
      Object.keys(auditData.vulnerabilities).forEach(pkg => {
        const vuln = auditData.vulnerabilities[pkg];
        issues.push({
          package: pkg,
          severity: vuln.severity,
          title: vuln.title,
          description: vuln.description
        });
      });
    }
    
    return issues;
  }

  generateQualitySuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Fix all linting errors immediately');
      suggestions.push('Resolve TypeScript type issues');
      suggestions.push('Review code formatting and standards');
    } else if (score < 80) {
      suggestions.push('Address remaining linting warnings');
      suggestions.push('Improve code consistency');
      suggestions.push('Add missing type annotations');
    } else {
      suggestions.push('Maintain current code quality standards');
      suggestions.push('Consider adding more comprehensive tests');
      suggestions.push('Review for potential optimizations');
    }
    
    return suggestions;
  }

  generatePerformanceSuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Optimize bundle size by removing unused dependencies');
      suggestions.push('Implement code splitting for large components');
      suggestions.push('Use dynamic imports for heavy libraries');
    } else if (score < 80) {
      suggestions.push('Review import patterns for optimization');
      suggestions.push('Consider lazy loading for non-critical components');
      suggestions.push('Optimize image loading and compression');
    } else {
      suggestions.push('Monitor performance metrics regularly');
      suggestions.push('Consider implementing performance budgets');
      suggestions.push('Review for micro-optimizations');
    }
    
    return suggestions;
  }

  generateSecuritySuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Update vulnerable dependencies immediately');
      suggestions.push('Review security best practices');
      suggestions.push('Implement security scanning in CI/CD');
    } else if (score < 80) {
      suggestions.push('Address remaining security warnings');
      suggestions.push('Regular security audits');
      suggestions.push('Keep dependencies updated');
    } else {
      suggestions.push('Maintain security monitoring');
      suggestions.push('Regular dependency updates');
      suggestions.push('Security training for team');
    }
    
    return suggestions;
  }

  generateMaintainabilitySuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Refactor complex functions');
      suggestions.push('Eliminate code duplication');
      suggestions.push('Restructure file organization');
    } else if (score < 80) {
      suggestions.push('Improve code organization');
      suggestions.push('Reduce function complexity');
      suggestions.push('Standardize naming conventions');
    } else {
      suggestions.push('Maintain clean code practices');
      suggestions.push('Regular code reviews');
      suggestions.push('Document complex logic');
    }
    
    return suggestions;
  }

  generateAccessibilitySuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Add missing alt attributes to images');
      suggestions.push('Implement proper form labeling');
      suggestions.push('Fix heading hierarchy issues');
    } else if (score < 80) {
      suggestions.push('Improve ARIA usage');
      suggestions.push('Enhance keyboard navigation');
      suggestions.push('Add focus management');
    } else {
      suggestions.push('Maintain accessibility standards');
      suggestions.push('Regular accessibility testing');
      suggestions.push('Consider advanced ARIA patterns');
    }
    
    return suggestions;
  }

  generateSEOSuggestions(score) {
    const suggestions = [];
    
    if (score < 50) {
      suggestions.push('Add missing meta tags');
      suggestions.push('Fix heading structure');
      suggestions.push('Add alt text to images');
    } else if (score < 80) {
      suggestions.push('Optimize meta descriptions');
      suggestions.push('Improve URL structure');
      suggestions.push('Add structured data');
    } else {
      suggestions.push('Maintain SEO best practices');
      suggestions.push('Monitor search performance');
      suggestions.push('Consider advanced SEO techniques');
    }
    
    return suggestions;
  }

  async generateReport() {
    console.log('📊 Generating AI Code Review report...');
    
    const reportPath = path.join(this.reportDir, `ai-code-review-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.reviewResults, null, 2));
    
    // Generate summary report
    const summaryPath = path.join(this.reportDir, 'ai-code-review-summary.json');
    const summary = {
      timestamp: this.reviewResults.timestamp,
      overallScore: this.calculateOverallScore(),
      recommendations: this.generateOverallRecommendations(),
      status: 'completed'
    };
    
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    console.log(`✅ AI Code Review report saved to ${reportPath}`);
    console.log(`✅ Summary report saved to ${summaryPath}`);
  }

  calculateOverallScore() {
    const scores = [
      this.reviewResults.codeQuality.score,
      this.reviewResults.performance.score,
      this.reviewResults.security.score,
      this.reviewResults.maintainability.score,
      this.reviewResults.accessibility.score,
      this.reviewResults.seo.score
    ];
    
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  generateOverallRecommendations() {
    const recommendations = [];
    const overallScore = this.calculateOverallScore();
    
    if (overallScore < 50) {
      recommendations.push('Critical: Immediate attention required for code quality, security, and performance');
      recommendations.push('Schedule emergency code review session');
      recommendations.push('Implement automated quality gates');
    } else if (overallScore < 70) {
      recommendations.push('Moderate: Several areas need improvement');
      recommendations.push('Prioritize security and performance issues');
      recommendations.push('Implement weekly code review sessions');
    } else if (overallScore < 85) {
      recommendations.push('Good: Minor improvements needed');
      recommendations.push('Focus on maintainability and accessibility');
      recommendations.push('Maintain current development practices');
    } else {
      recommendations.push('Excellent: Code quality is high');
      recommendations.push('Continue current development practices');
      recommendations.push('Consider advanced optimization techniques');
    }
    
    return recommendations;
  }

  async applyIntelligentFixes() {
    console.log('🔧 Applying intelligent fixes...');
    
    try {
      // Auto-fix linting issues
      if (this.reviewResults.codeQuality.score < 80) {
        console.log('🔧 Auto-fixing linting issues...');
        execSync('npm run fix:all', { stdio: 'pipe' });
      }
      
      // Update dependencies if security score is low
      if (this.reviewResults.security.score < 70) {
        console.log('🔧 Updating vulnerable dependencies...');
        execSync('npm audit fix', { stdio: 'pipe' });
      }
      
      console.log('✅ Intelligent fixes applied');
      
    } catch (error) {
      console.log('⚠️ Some fixes could not be applied automatically:', error.message);
    }
  }

  saveErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };
    
    const errorPath = path.join(this.reportDir, `ai-code-review-error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report saved to ${errorPath}`);
  }

  getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  getMaxDirectoryDepth(dirPath, currentDepth = 0) {
    const files = fs.readdirSync(dirPath);
    let maxDepth = currentDepth;
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        const depth = this.getMaxDirectoryDepth(fullPath, currentDepth + 1);
        maxDepth = Math.max(maxDepth, depth);
      }
    });
    
    return maxDepth;
  }

  hashCode(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return hash;
  }
}

// Main execution
async function main() {
  const reviewer = new AICodeReviewer();
  
  // Get automation interval from environment variable (default: 2 hours)
  const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours
  
  console.log(`🤖 AI Code Reviewer will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
  
  // Run initial review
  await reviewer.runAICodeReview();
  
  // Set up continuous operation
  setInterval(async () => {
    console.log(`🤖 Running scheduled AI Code Review at ${new Date().toISOString()}`);
    await reviewer.runAICodeReview();
  }, AUTOMATION_INTERVAL);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = AICodeReviewer;