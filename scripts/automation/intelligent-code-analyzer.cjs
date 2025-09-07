#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🧠 Starting Intelligent Code Analyzer...');

class IntelligentCodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeQuality: { score: 0, issues: [], suggestions: [] },
      performance: { score: 0, bottlenecks: [], optimizations: [] },
      security: { score: 0, vulnerabilities: [], recommendations: [] },
      maintainability: { score: 0, complexity: [], refactoring: [] },
      bestPractices: { score: 0, violations: [], improvements: [] }
    };
    this.reportDir = path.join(process.cwd(), 'intelligent-analysis-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.codebaseStats = {
      totalFiles: 0,
      totalLines: 0,
      complexityScore: 0,
      lastAnalysis: null
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodebase() {
    console.log('🔍 Analyzing codebase structure...');
    
    try {
      // Analyze project structure
      await this.analyzeProjectStructure();
      
      // Analyze code quality patterns
      await this.analyzeCodeQuality();
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns();
      
      // Analyze security patterns
      await this.analyzeSecurityPatterns();
      
      // Analyze maintainability
      await this.analyzeMaintainability();
      
      // Analyze best practices
      await this.analyzeBestPractices();
      
      // Generate comprehensive report
      await this.generateReport();
      
      // Apply intelligent fixes
      await this.applyIntelligentFixes();
      
      console.log('✅ Intelligent code analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Code analysis failed:', error.message);
      await this.saveErrorReport(error);
    }
  }

  async analyzeProjectStructure() {
    console.log('📁 Analyzing project structure...');
    
    const srcDir = path.join(process.cwd(), 'src');
    const serverDir = path.join(process.cwd(), 'server');
    
    if (fs.existsSync(srcDir)) {
      this.codebaseStats.totalFiles += this.countFilesRecursively(srcDir);
      this.codebaseStats.totalLines += this.countLinesRecursively(srcDir);
    }
    
    if (fs.existsSync(serverDir)) {
      this.codebaseStats.totalFiles += this.countFilesRecursively(serverDir);
      this.codebaseStats.totalLines += this.countLinesRecursively(serverDir);
    }
    
    console.log(`📊 Found ${this.codebaseStats.totalFiles} files with ${this.codebaseStats.totalLines} lines of code`);
  }

  async analyzeCodeQuality() {
    console.log('🎯 Analyzing code quality patterns...');
    
    try {
      // Run ESLint with detailed output
      const lintOutput = execSync('npm run lint -- --format=json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(lintOutput);
      let totalIssues = 0;
      let criticalIssues = 0;
      
      lintResults.forEach(file => {
        totalIssues += file.messages.length;
        criticalIssues += file.messages.filter(msg => msg.severity === 2).length;
      });
      
      // Calculate quality score (0-100)
      const qualityScore = Math.max(0, 100 - (totalIssues * 2) - (criticalIssues * 5));
      
      this.analysisResults.codeQuality.score = qualityScore;
      this.analysisResults.codeQuality.issues = lintResults;
      
      // Generate intelligent suggestions
      this.analysisResults.codeQuality.suggestions = this.generateQualitySuggestions(lintResults);
      
      console.log(`📊 Code quality score: ${qualityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Linting analysis failed, continuing with other analyses...');
    }
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    
    try {
      // Analyze bundle size
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      // Extract bundle size information
      const bundleSizeMatch = buildOutput.match(/dist.*?(\d+\.?\d*)\s*([KMGT]?B)/);
      if (bundleSizeMatch) {
        const size = parseFloat(bundleSizeMatch[1]);
        const unit = bundleSizeMatch[2];
        
        // Calculate performance score based on bundle size
        let performanceScore = 100;
        if (unit === 'KB' && size > 500) performanceScore -= 20;
        if (unit === 'MB' && size > 1) performanceScore -= 30;
        if (unit === 'MB' && size > 2) performanceScore -= 50;
        
        this.analysisResults.performance.score = performanceScore;
        this.analysisResults.performance.bottlenecks = this.identifyPerformanceBottlenecks(buildOutput);
        this.analysisResults.performance.optimizations = this.generatePerformanceOptimizations();
      }
      
    } catch (error) {
      console.log('⚠️ Performance analysis failed, continuing...');
    }
  }

  async analyzeSecurityPatterns() {
    console.log('🔒 Analyzing security patterns...');
    
    try {
      // Run security audit
      const auditOutput = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const auditResults = JSON.parse(auditOutput);
      const vulnerabilities = auditResults.vulnerabilities || {};
      
      // Calculate security score
      let securityScore = 100;
      let criticalVulns = 0;
      let highVulns = 0;
      
      Object.values(vulnerabilities).forEach(vuln => {
        if (vuln.severity === 'critical') {
          securityScore -= 20;
          criticalVulns++;
        } else if (vuln.severity === 'high') {
          securityScore -= 10;
          highVulns++;
        }
      });
      
      this.analysisResults.security.score = Math.max(0, securityScore);
      this.analysisResults.security.vulnerabilities = vulnerabilities;
      this.analysisResults.security.recommendations = this.generateSecurityRecommendations(vulnerabilities);
      
      console.log(`🔒 Security score: ${this.analysisResults.security.score}/100`);
      
    } catch (error) {
      console.log('⚠️ Security analysis failed, continuing...');
    }
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing maintainability...');
    
    try {
      // Analyze TypeScript configuration
      const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Check for strict mode and other maintainability features
        let maintainabilityScore = 100;
        const complexityFactors = [];
        
        if (!tsConfig.compilerOptions?.strict) {
          maintainabilityScore -= 15;
          complexityFactors.push('TypeScript strict mode disabled');
        }
        
        if (!tsConfig.compilerOptions?.noUnusedLocals) {
          maintainabilityScore -= 10;
          complexityFactors.push('Unused locals not checked');
        }
        
        if (!tsConfig.compilerOptions?.noUnusedParameters) {
          maintainabilityScore -= 10;
          complexityFactors.push('Unused parameters not checked');
        }
        
        this.analysisResults.maintainability.score = maintainabilityScore;
        this.analysisResults.maintainability.complexity = complexityFactors;
        this.analysisResults.maintainability.refactoring = this.generateRefactoringSuggestions();
      }
      
    } catch (error) {
      console.log('⚠️ Maintainability analysis failed, continuing...');
    }
  }

  async analyzeBestPractices() {
    console.log('📚 Analyzing best practices...');
    
    try {
      // Check for common best practice violations
      const violations = [];
      const improvements = [];
      
      // Check package.json scripts
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      if (!packageJson.scripts.test) {
        violations.push('No test script defined');
        improvements.push('Add test script for automated testing');
      }
      
      if (!packageJson.scripts.lint) {
        violations.push('No lint script defined');
        improvements.push('Add lint script for code quality');
      }
      
      // Check for .env.example
      if (!fs.existsSync('.env.example')) {
        violations.push('No .env.example file found');
        improvements.push('Create .env.example for environment variable documentation');
      }
      
      // Check for README
      if (!fs.existsSync('README.md')) {
        violations.push('No README.md file found');
        improvements.push('Create comprehensive README.md');
      }
      
      // Calculate best practices score
      const bestPracticesScore = Math.max(0, 100 - (violations.length * 15));
      
      this.analysisResults.bestPractices.score = bestPracticesScore;
      this.analysisResults.bestPractices.violations = violations;
      this.analysisResults.bestPractices.improvements = improvements;
      
      console.log(`📚 Best practices score: ${bestPracticesScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Best practices analysis failed, continuing...');
    }
  }

  generateQualitySuggestions(lintResults) {
    const suggestions = [];
    
    // Analyze common patterns and suggest improvements
    const errorTypes = {};
    lintResults.forEach(file => {
      file.messages.forEach(msg => {
        errorTypes[msg.ruleId] = (errorTypes[msg.ruleId] || 0) + 1;
      });
    });
    
    // Generate intelligent suggestions based on error patterns
    Object.entries(errorTypes).forEach(([ruleId, count]) => {
      if (count > 5) {
        suggestions.push({
          type: 'high-frequency',
          rule: ruleId,
          count: count,
          suggestion: `Consider adding ESLint rule configuration for ${ruleId} or refactoring code to reduce ${count} violations`
        });
      }
    });
    
    return suggestions;
  }

  identifyPerformanceBottlenecks(buildOutput) {
    const bottlenecks = [];
    
    // Look for common performance issues in build output
    if (buildOutput.includes('large dependency')) {
      bottlenecks.push('Large dependencies detected - consider code splitting');
    }
    
    if (buildOutput.includes('unused code')) {
      bottlenecks.push('Unused code detected - enable tree shaking');
    }
    
    if (buildOutput.includes('multiple chunks')) {
      bottlenecks.push('Multiple chunks detected - optimize chunk splitting');
    }
    
    return bottlenecks;
  }

  generatePerformanceOptimizations() {
    return [
      'Enable code splitting for route-based chunks',
      'Implement lazy loading for components',
      'Optimize bundle size with tree shaking',
      'Use dynamic imports for better performance',
      'Implement service worker for caching'
    ];
  }

  generateSecurityRecommendations(vulnerabilities) {
    const recommendations = [];
    
    Object.entries(vulnerabilities).forEach(([pkg, vuln]) => {
      if (vuln.fixAvailable) {
        recommendations.push({
          package: pkg,
          severity: vuln.severity,
          recommendation: `Update ${pkg} to fix ${vuln.severity} vulnerability`,
          fix: vuln.fixAvailable
        });
      }
    });
    
    return recommendations;
  }

  generateRefactoringSuggestions() {
    return [
      'Enable TypeScript strict mode for better type safety',
      'Add unused variable and parameter checks',
      'Implement consistent error handling patterns',
      'Add comprehensive JSDoc documentation',
      'Create reusable utility functions for common operations'
    ];
  }

  async applyIntelligentFixes() {
    console.log('🔧 Applying intelligent fixes...');
    
    try {
      // Auto-fix linting issues
      if (this.analysisResults.codeQuality.score < 80) {
        console.log('🔧 Auto-fixing linting issues...');
        execSync('npm run fix:all', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      }
      
      // Auto-update dependencies if security score is low
      if (this.analysisResults.security.score < 70) {
        console.log('🔧 Auto-updating vulnerable dependencies...');
        execSync('npm audit fix', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
      }
      
      console.log('✅ Intelligent fixes applied successfully');
      
    } catch (error) {
      console.log('⚠️ Some fixes failed, continuing...');
    }
  }

  async generateReport() {
    console.log('📊 Generating comprehensive analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      codebaseStats: this.codebaseStats,
      analysisResults: this.analysisResults,
      overallScore: this.calculateOverallScore(),
      recommendations: this.generateOverallRecommendations(),
      nextActions: this.generateNextActions()
    };
    
    const reportPath = path.join(this.reportDir, `intelligent-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-intelligent-analysis.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report saved to: ${reportPath}`);
    
    // Generate human-readable summary
    await this.generateHumanReadableSummary(report);
  }

  calculateOverallScore() {
    const scores = [
      this.analysisResults.codeQuality.score,
      this.analysisResults.performance.score,
      this.analysisResults.security.score,
      this.analysisResults.maintainability.score,
      this.analysisResults.bestPractices.score
    ];
    
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  generateOverallRecommendations() {
    const recommendations = [];
    
    if (this.analysisResults.codeQuality.score < 80) {
      recommendations.push('Focus on improving code quality through better linting and refactoring');
    }
    
    if (this.analysisResults.performance.score < 80) {
      recommendations.push('Optimize bundle size and implement performance improvements');
    }
    
    if (this.analysisResults.security.score < 80) {
      recommendations.push('Address security vulnerabilities immediately');
    }
    
    if (this.analysisResults.maintainability.score < 80) {
      recommendations.push('Improve code maintainability through better TypeScript configuration');
    }
    
    if (this.analysisResults.bestPractices.score < 80) {
      recommendations.push('Implement development best practices and documentation');
    }
    
    return recommendations;
  }

  generateNextActions() {
    const actions = [];
    
    // Prioritize actions based on scores
    const priorities = [
      { score: this.analysisResults.security.score, action: 'Security fixes', priority: 'Critical' },
      { score: this.analysisResults.codeQuality.score, action: 'Code quality improvements', priority: 'High' },
      { score: this.analysisResults.performance.score, action: 'Performance optimization', priority: 'Medium' },
      { score: this.analysisResults.maintainability.score, action: 'Maintainability improvements', priority: 'Medium' },
      { score: this.analysisResults.bestPractices.score, action: 'Best practices implementation', priority: 'Low' }
    ];
    
    priorities.forEach(({ score, action, priority }) => {
      if (score < 80) {
        actions.push({ action, priority, score, urgency: score < 60 ? 'Immediate' : score < 70 ? 'Soon' : 'When possible' });
      }
    });
    
    return actions.sort((a, b) => a.score - b.score);
  }

  async generateHumanReadableSummary(report) {
    const summaryPath = path.join(this.reportDir, `intelligent-analysis-summary-${Date.now()}.md`);
    
    const summary = `# Intelligent Code Analysis Summary

## 📊 Overall Score: ${report.overallScore}/100

### 🎯 Code Quality: ${report.analysisResults.codeQuality.score}/100
${report.analysisResults.codeQuality.suggestions.length > 0 ? 
  `**Suggestions:**\n${report.analysisResults.codeQuality.suggestions.map(s => `- ${s.suggestion}`).join('\n')}` : 
  '✅ No major issues detected'}

### ⚡ Performance: ${report.analysisResults.performance.score}/100
${report.analysisResults.performance.bottlenecks.length > 0 ? 
  `**Bottlenecks:**\n${report.analysisResults.performance.bottlenecks.map(b => `- ${b}`).join('\n')}` : 
  '✅ Performance looks good'}

### 🔒 Security: ${report.analysisResults.security.score}/100
${report.analysisResults.security.recommendations.length > 0 ? 
  `**Recommendations:**\n${report.analysisResults.security.recommendations.map(r => `- ${r.recommendation}`).join('\n')}` : 
  '✅ Security is solid'}

### 🔧 Maintainability: ${report.analysisResults.maintainability.score}/100
${report.analysisResults.maintainability.complexity.length > 0 ? 
  `**Complexity Factors:**\n${report.analysisResults.maintainability.complexity.map(c => `- ${c}`).join('\n')}` : 
  '✅ Maintainability is good'}

### 📚 Best Practices: ${report.analysisResults.bestPractices.score}/100
${report.analysisResults.bestPractices.improvements.length > 0 ? 
  `**Improvements:**\n${report.analysisResults.bestPractices.improvements.map(i => `- ${i}`).join('\n')}` : 
  '✅ Best practices are followed'}

## 🚀 Next Actions (Prioritized)

${report.nextActions.map(action => 
  `### ${action.priority} Priority: ${action.action}
  - **Current Score:** ${action.score}/100
  - **Urgency:** ${action.urgency}
  - **Action:** ${action.action}`
).join('\n\n')}

## 📈 Codebase Statistics

- **Total Files:** ${report.codebaseStats.totalFiles}
- **Total Lines:** ${report.codebaseStats.totalLines}
- **Analysis Duration:** ${report.duration}ms
- **Generated:** ${new Date().toLocaleString()}

---

*This report was generated automatically by the Intelligent Code Analyzer*
`;

    fs.writeFileSync(summaryPath, summary);
    console.log(`📝 Human-readable summary saved to: ${summaryPath}`);
  }

  async saveErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      analysisResults: this.analysisResults
    };
    
    const errorPath = path.join(this.reportDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report saved to: ${errorPath}`);
  }

  countFilesRecursively(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        count += this.countFilesRecursively(filePath);
      } else if (file.match(/\.(js|jsx|ts|tsx|vue|svelte)$/)) {
        count++;
      }
    });
    
    return count;
  }

  countLinesRecursively(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        count += this.countLinesRecursively(filePath);
      } else if (file.match(/\.(js|jsx|ts|tsx|vue|svelte)$/)) {
        const content = fs.readFileSync(filePath, 'utf8');
        count += content.split('\n').length;
      }
    });
    
    return count;
  }
}

// Main execution
async function main() {
  const analyzer = new IntelligentCodeAnalyzer();
  
  // Set up graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Intelligent Code Analyzer...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down Intelligent Code Analyzer...');
    process.exit(0);
  });
  
  try {
    await analyzer.analyzeCodebase();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentCodeAnalyzer;