#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AIIntelligentCodeAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.analysisResults = [];
    this.issues = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [AI-ANALYZER] ${message}`);
  }

  async analyzeCodeQuality() {
    this.log('🔍 Analyzing code quality...');
    
    try {
      // Run ESLint analysis
      const lintResult = execSync('npm run lint', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.analysisResults.push({
        type: 'linting',
        status: 'passed',
        details: 'No linting errors found'
      });
      
    } catch (error) {
      this.issues.push({
        type: 'linting',
        severity: 'warning',
        message: 'Linting issues detected',
        details: error.message
      });
    }
  }

  async analyzeTypeScript() {
    this.log('📝 Analyzing TypeScript...');
    
    try {
      // Run TypeScript check
      execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.analysisResults.push({
        type: 'typescript',
        status: 'passed',
        details: 'No TypeScript errors found'
      });
      
    } catch (error) {
      this.issues.push({
        type: 'typescript',
        severity: 'error',
        message: 'TypeScript errors detected',
        details: error.message
      });
    }
  }

  async analyzePerformance() {
    this.log('⚡ Analyzing performance...');
    
    try {
      // Check for performance anti-patterns
      const srcFiles = this.findSourceFiles();
      let performanceIssues = 0;
      
      for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common performance issues
        if (content.includes('useEffect(() => {}, [])') && content.includes('setState')) {
          performanceIssues++;
          this.issues.push({
            type: 'performance',
            severity: 'warning',
            message: 'Potential infinite re-render in useEffect',
            file: file
          });
        }
        
        if (content.includes('console.log') || content.includes('console.warn')) {
          performanceIssues++;
          this.issues.push({
            type: 'performance',
            severity: 'info',
            message: 'Console statements found (remove in production)',
            file: file
          });
        }
      }
      
      this.analysisResults.push({
        type: 'performance',
        status: performanceIssues === 0 ? 'passed' : 'issues_found',
        details: `Found ${performanceIssues} performance issues`
      });
      
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`);
    }
  }

  async analyzeSecurity() {
    this.log('🔒 Analyzing security...');
    
    try {
      // Check for security vulnerabilities
      const srcFiles = this.findSourceFiles();
      let securityIssues = 0;
      
      for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for dangerous patterns
        if (content.includes('dangerouslySetInnerHTML')) {
          securityIssues++;
          this.issues.push({
            type: 'security',
            severity: 'warning',
            message: 'dangerouslySetInnerHTML usage detected',
            file: file
          });
        }
        
        if (content.includes('eval(') || content.includes('Function(')) {
          securityIssues++;
          this.issues.push({
            type: 'security',
            severity: 'error',
            message: 'Dangerous code execution patterns detected',
            file: file
          });
        }
      }
      
      this.analysisResults.push({
        type: 'security',
        status: securityIssues === 0 ? 'passed' : 'issues_found',
        details: `Found ${securityIssues} security issues`
      });
      
    } catch (error) {
      this.log(`❌ Security analysis failed: ${error.message}`);
    }
  }

  findSourceFiles() {
    const srcFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');
    
    const dirs = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of dirs) {
      this.findFilesRecursively(dir, srcFiles);
    }
    
    return srcFiles.filter(file => 
      /\.(ts|tsx|js|jsx)$/.test(file) && 
      !file.includes('node_modules') &&
      !file.includes('.next')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }

  generateRecommendations() {
    this.log('💡 Generating recommendations...');
    
    // Generate recommendations based on analysis
    if (this.issues.length > 0) {
      this.recommendations.push({
        priority: 'high',
        category: 'code_quality',
        message: 'Address the identified issues to improve code quality',
        action: 'Review and fix the issues listed in the analysis report'
      });
    }
    
    // Performance recommendations
    const performanceIssues = this.issues.filter(issue => issue.type === 'performance');
    if (performanceIssues.length > 0) {
      this.recommendations.push({
        priority: 'medium',
        category: 'performance',
        message: 'Optimize performance by addressing performance issues',
        action: 'Review performance issues and implement optimizations'
      });
    }
    
    // Security recommendations
    const securityIssues = this.issues.filter(issue => issue.type === 'security');
    if (securityIssues.length > 0) {
      this.recommendations.push({
        priority: 'high',
        category: 'security',
        message: 'Address security vulnerabilities immediately',
        action: 'Review and fix security issues to prevent vulnerabilities'
      });
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      analysisResults: this.analysisResults,
      issues: this.issues,
      recommendations: this.recommendations,
      summary: {
        totalIssues: this.issues.length,
        criticalIssues: this.issues.filter(i => i.severity === 'error').length,
        warnings: this.issues.filter(i => i.severity === 'warning').length,
        info: this.issues.filter(i => i.severity === 'info').length,
        totalRecommendations: this.recommendations.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'ai-code-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Analysis report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting AI Intelligent Code Analysis...');
    
    try {
      await this.analyzeCodeQuality();
      await this.analyzeTypeScript();
      await this.analyzePerformance();
      await this.analyzeSecurity();
      
      this.generateRecommendations();
      const report = this.generateReport();
      
      this.log('✅ AI Code Analysis completed!');
      this.log(`📈 Found ${report.summary.totalIssues} issues and ${report.summary.totalRecommendations} recommendations`);
      
      return report;
    } catch (error) {
      this.log(`❌ AI Code Analysis failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the analyzer
const analyzer = new AIIntelligentCodeAnalyzer();
analyzer.run().catch(console.error);