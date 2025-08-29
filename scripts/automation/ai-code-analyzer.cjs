#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI Code Analyzer Automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeQuality: [],
      performanceIssues: [],
      securityVulnerabilities: [],
      optimizationOpportunities: [],
      technicalDebt: [],
      bestPractices: []
    };
    this.reportDir = path.join(process.cwd(), 'ai-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodebase() {
    try {
      console.log(`🤖 Running AI Code Analysis at ${new Date().toISOString()}`);
      
      // Analyze TypeScript/JavaScript files
      await this.analyzeTypeScriptFiles();
      
      // Analyze React components
      await this.analyzeReactComponents();
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns();
      
      // Analyze security patterns
      await this.analyzeSecurityPatterns();
      
      // Analyze code complexity
      await this.analyzeCodeComplexity();
      
      // Generate comprehensive report
      await this.generateAnalysisReport();
      
      console.log('✅ AI Code Analysis completed successfully');
      
    } catch (error) {
      console.error('❌ AI Code Analysis failed:', error.message);
    }
  }

  async analyzeTypeScriptFiles() {
    console.log('🔍 Analyzing TypeScript/JavaScript files...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️  Source directory not found');
      return;
    }

    const files = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const analysis = this.analyzeFileContent(content, file);
      
      // Add findings to results
      Object.keys(analysis).forEach(category => {
        if (analysis[category].length > 0) {
          this.analysisResults[category].push(...analysis[category]);
        }
      });
    }
  }

  analyzeFileContent(content, filePath) {
    const analysis = {
      codeQuality: [],
      performanceIssues: [],
      securityVulnerabilities: [],
      optimizationOpportunities: [],
      technicalDebt: [],
      bestPractices: []
    };

    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Code Quality Analysis
      if (line.includes('any') && !line.includes('//')) {
        analysis.codeQuality.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Use of "any" type detected',
          severity: 'medium',
          suggestion: 'Consider using proper TypeScript types'
        });
      }
      
      if (line.includes('console.log') && !line.includes('//')) {
        analysis.codeQuality.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Console statement in production code',
          severity: 'low',
          suggestion: 'Remove or use proper logging framework'
        });
      }

      // Performance Analysis
      if (line.includes('useEffect') && line.includes('[]') && !line.includes('//')) {
        analysis.performanceIssues.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Empty dependency array in useEffect',
          severity: 'medium',
          suggestion: 'Review if dependencies are truly empty'
        });
      }
      
      if (line.includes('useCallback') && line.includes('[]') && !line.includes('//')) {
        analysis.performanceIssues.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Empty dependency array in useCallback',
          severity: 'medium',
          suggestion: 'Review callback dependencies'
        });
      }

      // Security Analysis
      if (line.includes('dangerouslySetInnerHTML') && !line.includes('//')) {
        analysis.securityVulnerabilities.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Potential XSS vulnerability',
          severity: 'high',
          suggestion: 'Sanitize HTML content before rendering'
        });
      }
      
      if (line.includes('eval(') && !line.includes('//')) {
        analysis.securityVulnerabilities.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Code injection vulnerability',
          severity: 'critical',
          suggestion: 'Avoid eval() - use safer alternatives'
        });
      }

      // Optimization Opportunities
      if (line.includes('useMemo') && line.includes('() =>') && !line.includes('//')) {
        analysis.optimizationOpportunities.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Function creation in useMemo',
          severity: 'low',
          suggestion: 'Move function outside component or use useCallback'
        });
      }
      
      if (line.includes('useState') && line.includes('null') && !line.includes('//')) {
        analysis.optimizationOpportunities.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Consider using undefined instead of null',
          severity: 'low',
          suggestion: 'undefined is more idiomatic in TypeScript'
        });
      }

      // Technical Debt
      if (line.includes('TODO') || line.includes('FIXME') || line.includes('HACK')) {
        analysis.technicalDebt.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Technical debt marker found',
          severity: 'medium',
          suggestion: 'Address technical debt items'
        });
      }
      
      if (line.includes('@ts-ignore') || line.includes('@ts-nocheck')) {
        analysis.technicalDebt.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'TypeScript checks disabled',
          severity: 'medium',
          suggestion: 'Fix underlying type issues instead of ignoring'
        });
      }

      // Best Practices
      if (line.includes('var ') && !line.includes('//')) {
        analysis.bestPractices.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Use of var instead of const/let',
          severity: 'low',
          suggestion: 'Prefer const or let over var'
        });
      }
      
      if (line.includes('==') && !line.includes('===') && !line.includes('//')) {
        analysis.bestPractices.push({
          file: path.relative(process.cwd(), filePath),
          line: lineNum,
          issue: 'Loose equality comparison',
          severity: 'low',
          suggestion: 'Use strict equality (===) instead of loose equality (==)'
        });
      }
    });

    return analysis;
  }

  async analyzeReactComponents() {
    console.log('⚛️  Analyzing React components...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const componentFiles = this.findFiles(srcPath, ['.tsx', '.jsx']);
    
    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      this.analyzeReactComponent(content, file);
    }
  }

  analyzeReactComponent(content, filePath) {
    // Check for common React anti-patterns
    if (content.includes('useState') && content.includes('useEffect') && content.includes('useCallback')) {
      const hookCount = (content.match(/use[A-Z][a-zA-Z]*/g) || []).length;
      if (hookCount > 5) {
        this.analysisResults.codeQuality.push({
          file: path.relative(process.cwd(), filePath),
          line: 0,
          issue: 'Component has many hooks - consider splitting',
          severity: 'medium',
          suggestion: 'Split component into smaller, focused components'
        });
      }
    }

    // Check for inline styles
    if (content.includes('style={{') && content.includes('}}')) {
      this.analysisResults.optimizationOpportunities.push({
        file: path.relative(process.cwd(), filePath),
        line: 0,
        issue: 'Inline styles detected',
        severity: 'low',
        suggestion: 'Move styles to CSS classes for better performance'
      });
    }
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    
    // Check for large bundle indicators
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    
    const heavyPackages = ['lodash', 'moment', 'date-fns', 'ramda'];
    heavyPackages.forEach(pkg => {
      if (dependencies.includes(pkg)) {
        this.analysisResults.performanceIssues.push({
          file: 'package.json',
          line: 0,
          issue: `Heavy package detected: ${pkg}`,
          severity: 'medium',
          suggestion: `Consider using lighter alternatives or tree-shaking`
        });
      }
    });
  }

  async analyzeSecurityPatterns() {
    console.log('🔒 Analyzing security patterns...');
    
    // Check for environment variable exposure
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const files = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('process.env.') && !content.includes('NODE_ENV')) {
        this.analysisResults.securityVulnerabilities.push({
          file: path.relative(process.cwd(), filePath),
          line: 0,
          issue: 'Environment variables exposed in client code',
          severity: 'high',
          suggestion: 'Only expose safe environment variables to client'
        });
      }
    });
  }

  async analyzeCodeComplexity() {
    console.log('🧮 Analyzing code complexity...');
    
    try {
      // Run ESLint complexity analysis
      const output = execSync('npm run lint -- --format=json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(output);
      
      lintResults.forEach(file => {
        file.messages.forEach(message => {
          if (message.ruleId === 'complexity' && message.severity === 2) {
            this.analysisResults.codeQuality.push({
              file: file.filePath,
              line: message.line,
              issue: 'High cyclomatic complexity',
              severity: 'medium',
              suggestion: 'Break down complex functions into smaller ones'
            });
          }
        });
      });
    } catch (error) {
      console.log('⚠️  Could not run complexity analysis:', error.message);
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      });
    };
    
    walkDir(dir);
    return files;
  }

  async generateAnalysisReport() {
    console.log('📊 Generating AI analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: Object.values(this.analysisResults).reduce((sum, arr) => sum + arr.length, 0),
        codeQuality: this.analysisResults.codeQuality.length,
        performanceIssues: this.analysisResults.performanceIssues.length,
        securityVulnerabilities: this.analysisResults.securityVulnerabilities.length,
        optimizationOpportunities: this.analysisResults.optimizationOpportunities.length,
        technicalDebt: this.analysisResults.technicalDebt.length,
        bestPractices: this.analysisResults.bestPractices.length
      },
      details: this.analysisResults,
      recommendations: this.generateRecommendations(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, `ai-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ AI analysis report saved to ${reportPath}`);
    console.log(`📊 Found ${report.summary.totalIssues} total issues`);
    
    // Log critical issues
    const criticalIssues = this.analysisResults.securityVulnerabilities.filter(issue => issue.severity === 'critical');
    if (criticalIssues.length > 0) {
      console.log(`🚨 CRITICAL: ${criticalIssues.length} security vulnerabilities found!`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.analysisResults.securityVulnerabilities.length > 0) {
      recommendations.push('🔒 Address security vulnerabilities immediately');
    }
    
    if (this.analysisResults.performanceIssues.length > 0) {
      recommendations.push('⚡ Review and optimize performance-critical code');
    }
    
    if (this.analysisResults.technicalDebt.length > 0) {
      recommendations.push('🏗️  Plan technical debt reduction in next sprint');
    }
    
    if (this.analysisResults.codeQuality.length > 0) {
      recommendations.push('📝 Improve code quality through refactoring');
    }
    
    return recommendations;
  }
}

// Main execution
async function main() {
  const analyzer = new AICodeAnalyzer();
  
  // Run initial analysis
  await analyzer.analyzeCodebase();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.analyzeCodebase();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🤖 AI Code Analyzer running continuously (${AUTOMATION_INTERVAL / 60000} minute intervals)`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🤖 AI Code Analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🤖 AI Code Analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ AI Code Analyzer failed to start:', error);
  process.exit(1);
});