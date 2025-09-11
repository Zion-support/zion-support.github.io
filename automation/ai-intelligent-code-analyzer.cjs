#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      codeQuality: {},
      performance: {},
      security: {},
      maintainability: {},
      recommendations: []
    };
    this.logFile = path.join(__dirname, 'logs', 'ai-code-analyzer.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async analyzeCode() {
    this.log('🤖 Starting AI Code Analysis...');

    try {
      // Analyze code quality
      await this.analyzeCodeQuality();
      
      // Analyze performance patterns
      await this.analyzePerformance();
      
      // Analyze security patterns
      await this.analyzeSecurity();
      
      // Analyze maintainability
      await this.analyzeMaintainability();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save results
      await this.saveResults();
      
      this.log('AI Code Analysis completed successfully');
      return this.analysisResults;
    } catch (error) {
      this.log(`AI Code Analysis failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeCodeQuality() {
    this.log('Analyzing code quality...');
    
    try {
      // Check for common code quality issues
      const issues = [];
      
      // Check for console.log statements
      const consoleLogs = this.findPattern(/console\.log\(/g, '**/*.{js,jsx,ts,tsx}');
      if (consoleLogs.length > 0) {
        issues.push({
          type: 'console_logs',
          count: consoleLogs.length,
          severity: 'warning',
          message: 'Console.log statements found in production code'
        });
      }
      
      // Check for TODO comments
      const todos = this.findPattern(/TODO|FIXME|HACK/g, '**/*.{js,jsx,ts,tsx}');
      if (todos.length > 0) {
        issues.push({
          type: 'todos',
          count: todos.length,
          severity: 'info',
          message: 'TODO/FIXME comments found'
        });
      }
      
      // Check for large files
      const largeFiles = this.findLargeFiles();
      if (largeFiles.length > 0) {
        issues.push({
          type: 'large_files',
          count: largeFiles.length,
          severity: 'warning',
          message: 'Large files detected (>500 lines)'
        });
      }
      
      this.analysisResults.codeQuality = {
        issues,
        score: this.calculateQualityScore(issues)
      };
      
    } catch (error) {
      this.log(`Code quality analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzePerformance() {
    this.log('Analyzing performance patterns...');
    
    try {
      const performanceIssues = [];
      
      // Check for inefficient loops
      const inefficientLoops = this.findPattern(/for\s*\(\s*let\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*array\.length\s*;\s*\w+\s*\+\+\s*\)/g, '**/*.{js,jsx,ts,tsx}');
      if (inefficientLoops.length > 0) {
        performanceIssues.push({
          type: 'inefficient_loops',
          count: inefficientLoops.length,
          severity: 'warning',
          message: 'Inefficient for loops detected'
        });
      }
      
      // Check for missing React.memo
      const componentsWithoutMemo = this.findPattern(/export\s+default\s+function\s+\w+\(/g, '**/*.{jsx,tsx}');
      if (componentsWithoutMemo.length > 0) {
        performanceIssues.push({
          type: 'missing_memo',
          count: componentsWithoutMemo.length,
          severity: 'info',
          message: 'Components without React.memo optimization'
        });
      }
      
      this.analysisResults.performance = {
        issues: performanceIssues,
        score: this.calculatePerformanceScore(performanceIssues)
      };
      
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeSecurity() {
    this.log('Analyzing security patterns...');
    
    try {
      const securityIssues = [];
      
      // Check for hardcoded secrets
      const hardcodedSecrets = this.findPattern(/password\s*=\s*['"][^'"]+['"]|api[_-]?key\s*=\s*['"][^'"]+['"]|secret\s*=\s*['"][^'"]+['"]/gi, '**/*.{js,jsx,ts,tsx}');
      if (hardcodedSecrets.length > 0) {
        securityIssues.push({
          type: 'hardcoded_secrets',
          count: hardcodedSecrets.length,
          severity: 'error',
          message: 'Potential hardcoded secrets detected'
        });
      }
      
      // Check for dangerous eval usage
      const evalUsage = this.findPattern(/eval\s*\(/g, '**/*.{js,jsx,ts,tsx}');
      if (evalUsage.length > 0) {
        securityIssues.push({
          type: 'eval_usage',
          count: evalUsage.length,
          severity: 'error',
          message: 'Dangerous eval() usage detected'
        });
      }
      
      this.analysisResults.security = {
        issues: securityIssues,
        score: this.calculateSecurityScore(securityIssues)
      };
      
    } catch (error) {
      this.log(`Security analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeMaintainability() {
    this.log('Analyzing maintainability...');
    
    try {
      const maintainabilityIssues = [];
      
      // Check for complex functions
      const complexFunctions = this.findComplexFunctions();
      if (complexFunctions.length > 0) {
        maintainabilityIssues.push({
          type: 'complex_functions',
          count: complexFunctions.length,
          severity: 'warning',
          message: 'Complex functions detected (>50 lines)'
        });
      }
      
      // Check for deep nesting
      const deepNesting = this.findDeepNesting();
      if (deepNesting.length > 0) {
        maintainabilityIssues.push({
          type: 'deep_nesting',
          count: deepNesting.length,
          severity: 'warning',
          message: 'Deep nesting detected (>4 levels)'
        });
      }
      
      this.analysisResults.maintainability = {
        issues: maintainabilityIssues,
        score: this.calculateMaintainabilityScore(maintainabilityIssues)
      };
      
    } catch (error) {
      this.log(`Maintainability analysis failed: ${error.message}`, 'ERROR');
    }
  }

  findPattern(pattern, globPattern) {
    try {
      const result = execSync(`grep -r "${pattern}" --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" . || true`, {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      return result.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  findLargeFiles() {
    try {
      const result = execSync(`find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs wc -l | awk '$1 > 500 {print $2}'`, {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      return result.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  findComplexFunctions() {
    // This is a simplified version - in a real implementation, you'd use AST parsing
    return [];
  }

  findDeepNesting() {
    // This is a simplified version - in a real implementation, you'd use AST parsing
    return [];
  }

  calculateQualityScore(issues) {
    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    return Math.max(0, 100 - (errorCount * 20) - (warningCount * 10) - (infoCount * 5));
  }

  calculatePerformanceScore(issues) {
    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    return Math.max(0, 100 - (errorCount * 25) - (warningCount * 15) - (infoCount * 5));
  }

  calculateSecurityScore(issues) {
    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    return Math.max(0, 100 - (errorCount * 50) - (warningCount * 25) - (infoCount * 10));
  }

  calculateMaintainabilityScore(issues) {
    const errorCount = issues.filter(i => i.severity === 'error').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const infoCount = issues.filter(i => i.severity === 'info').length;
    
    return Math.max(0, 100 - (errorCount * 30) - (warningCount * 20) - (infoCount * 5));
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Code quality recommendations
    if (this.analysisResults.codeQuality.score < 70) {
      recommendations.push('Consider improving code quality by addressing warnings and errors');
    }
    
    // Performance recommendations
    if (this.analysisResults.performance.score < 70) {
      recommendations.push('Consider optimizing performance by addressing performance issues');
    }
    
    // Security recommendations
    if (this.analysisResults.security.score < 80) {
      recommendations.push('Address security issues immediately');
    }
    
    // Maintainability recommendations
    if (this.analysisResults.maintainability.score < 70) {
      recommendations.push('Consider refactoring complex code for better maintainability');
    }
    
    this.analysisResults.recommendations = recommendations;
  }

  async saveResults() {
    const resultsFile = path.join(
      __dirname,
      'reports',
      'ai-code-analysis-results.json'
    );
    fs.mkdirSync(path.dirname(resultsFile), { recursive: true });
    fs.writeFileSync(resultsFile, JSON.stringify(this.analysisResults, null, 2));
    this.log(`Analysis results saved to: ${resultsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new AICodeAnalyzer();
  analyzer.analyzeCode().catch(console.error);
}

module.exports = AICodeAnalyzer;