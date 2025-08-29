#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-powered code review automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class AICodeReviewer {
  constructor() {
    this.reviewResults = [];
    this.codeMetrics = {};
    this.suggestions = [];
    this.logFile = path.join(process.cwd(), 'ai-code-review.log');
  }

  async runCodeReview() {
    try {
      console.log(`🤖 Running AI code review at ${new Date().toISOString()}`);
      
      // Analyze recent git changes
      await this.analyzeGitChanges();
      
      // Perform code quality analysis
      await this.analyzeCodeQuality();
      
      // Check for security vulnerabilities
      await this.securityAnalysis();
      
      // Generate intelligent suggestions
      await this.generateSuggestions();
      
      // Apply automatic fixes where possible
      await this.applyAutomaticFixes();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ AI code review completed successfully');
      
    } catch (error) {
      console.error('❌ AI code review failed:', error.message);
      this.logError(error);
    }
  }

  async analyzeGitChanges() {
    try {
      console.log('📊 Analyzing recent git changes...');
      
      // Get recent commits
      const recentCommits = execSync('git log --oneline -10', { encoding: 'utf8' });
      console.log('Recent commits:', recentCommits);
      
      // Get changed files
      const changedFiles = execSync('git diff --name-only HEAD~5', { encoding: 'utf8' });
      const files = changedFiles.trim().split('\n').filter(f => f);
      
      console.log(`📁 Found ${files.length} changed files`);
      
      // Analyze each changed file
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
          await this.analyzeFile(file);
        }
      }
      
    } catch (error) {
      console.log('⚠️  Git analysis failed:', error.message);
    }
  }

  async analyzeFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      const analysis = {
        file: filePath,
        lines: lines.length,
        complexity: this.calculateComplexity(content),
        issues: [],
        suggestions: []
      };
      
      // Check for common code smells
      if (content.includes('console.log')) {
        analysis.issues.push('console.log statement found - consider removing in production');
        analysis.suggestions.push('Replace console.log with proper logging system');
      }
      
      if (content.includes('TODO') || content.includes('FIXME')) {
        analysis.issues.push('TODO/FIXME comments found');
        analysis.suggestions.push('Address TODO/FIXME items or create tickets');
      }
      
      if (content.includes('any')) {
        analysis.issues.push('TypeScript any type used');
        analysis.suggestions.push('Replace any with proper types for better type safety');
      }
      
      // Check function complexity
      const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g);
      if (functionMatches && functionMatches.length > 10) {
        analysis.issues.push('High number of functions - consider refactoring');
        analysis.suggestions.push('Break down large files into smaller modules');
      }
      
      this.reviewResults.push(analysis);
      
    } catch (error) {
      console.log(`⚠️  File analysis failed for ${filePath}:`, error.message);
    }
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    // Count control flow statements
    const controlFlow = (content.match(/if|else|for|while|switch|case/g) || []).length;
    complexity += controlFlow * 2;
    
    // Count nested levels
    const nestedLevels = (content.match(/\{/g) || []).length;
    complexity += nestedLevels;
    
    // Count function calls
    const functionCalls = (content.match(/\w+\(/g) || []).length;
    complexity += functionCalls * 0.5;
    
    return Math.round(complexity);
  }

  async analyzeCodeQuality() {
    try {
      console.log('🔍 Running code quality analysis...');
      
      // Run TypeScript check
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        console.log('✅ TypeScript check passed');
      } catch (error) {
        console.log('⚠️  TypeScript check failed');
        this.codeMetrics.typescriptErrors = error.message;
      }
      
      // Run ESLint
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        console.log('✅ ESLint check passed');
      } catch (error) {
        console.log('⚠️  ESLint check failed');
        this.codeMetrics.eslintErrors = error.message;
      }
      
      // Calculate overall quality score
      this.codeMetrics.qualityScore = this.calculateQualityScore();
      
    } catch (error) {
      console.log('⚠️  Code quality analysis failed:', error.message);
    }
  }

  calculateQualityScore() {
    let score = 100;
    
    if (this.codeMetrics.typescriptErrors) score -= 20;
    if (this.codeMetrics.eslintErrors) score -= 15;
    
    // Deduct points for issues found
    const totalIssues = this.reviewResults.reduce((sum, result) => sum + result.issues.length, 0);
    score -= totalIssues * 5;
    
    return Math.max(0, score);
  }

  async securityAnalysis() {
    try {
      console.log('🔒 Running security analysis...');
      
      // Check for common security issues
      const securityIssues = [];
      
      for (const result of this.reviewResults) {
        if (result.file && fs.existsSync(result.file)) {
          const content = fs.readFileSync(result.file, 'utf8');
          
          // Check for SQL injection patterns
          if (content.includes('innerHTML') || content.includes('dangerouslySetInnerHTML')) {
            securityIssues.push({
              file: result.file,
              issue: 'Potential XSS vulnerability - innerHTML usage',
              severity: 'high',
              suggestion: 'Use proper sanitization or React components'
            });
          }
          
          // Check for eval usage
          if (content.includes('eval(')) {
            securityIssues.push({
              file: result.file,
              issue: 'Security risk - eval() usage',
              severity: 'critical',
              suggestion: 'Replace eval() with safer alternatives'
            });
          }
          
          // Check for hardcoded secrets
          if (content.includes('password') || content.includes('secret') || content.includes('api_key')) {
            securityIssues.push({
              file: result.file,
              issue: 'Potential hardcoded secrets',
              severity: 'medium',
              suggestion: 'Use environment variables for sensitive data'
            });
          }
        }
      }
      
      this.codeMetrics.securityIssues = securityIssues;
      console.log(`🔒 Found ${securityIssues.length} security issues`);
      
    } catch (error) {
      console.log('⚠️  Security analysis failed:', error.message);
    }
  }

  async generateSuggestions() {
    try {
      console.log('💡 Generating intelligent suggestions...');
      
      // Generate suggestions based on analysis
      for (const result of this.reviewResults) {
        if (result.complexity > 20) {
          result.suggestions.push('High complexity detected - consider refactoring into smaller functions');
        }
        
        if (result.lines > 200) {
          result.suggestions.push('Large file detected - consider splitting into multiple modules');
        }
        
        if (result.issues.length > 5) {
          result.suggestions.push('Multiple issues detected - prioritize fixes based on severity');
        }
      }
      
      // Add general suggestions
      this.suggestions = [
        'Consider implementing automated testing for critical paths',
        'Review and update dependencies regularly',
        'Implement code review guidelines and standards',
        'Consider using pre-commit hooks for quality checks',
        'Monitor performance metrics and optimize bottlenecks'
      ];
      
    } catch (error) {
      console.log('⚠️  Suggestion generation failed:', error.message);
    }
  }

  async applyAutomaticFixes() {
    try {
      console.log('🔧 Applying automatic fixes...');
      
      let fixesApplied = 0;
      
      // Apply simple fixes
      for (const result of this.reviewResults) {
        if (result.file && fs.existsSync(result.file)) {
          let content = fs.readFileSync(result.file, 'utf8');
          let modified = false;
          
          // Remove console.log statements (simple cases)
          if (content.includes('console.log(')) {
            content = content.replace(/console\.log\([^)]*\);?\n?/g, '');
            modified = true;
          }
          
          // Remove console.error statements
          if (content.includes('console.error(')) {
            content = content.replace(/console\.error\([^)]*\);?\n?/g, '');
            modified = true;
          }
          
          // Remove console.warn statements
          if (content.includes('console.warn(')) {
            content = content.replace(/console\.warn\([^)]*\);?\n?/g, '');
            modified = true;
          }
          
          if (modified) {
            fs.writeFileSync(result.file, content);
            fixesApplied++;
            console.log(`🔧 Applied fixes to ${result.file}`);
          }
        }
      }
      
      console.log(`🔧 Applied ${fixesApplied} automatic fixes`);
      
    } catch (error) {
      console.log('⚠️  Automatic fixes failed:', error.message);
    }
  }

  async generateReport() {
    try {
      console.log('📊 Generating comprehensive report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          filesAnalyzed: this.reviewResults.length,
          totalIssues: this.reviewResults.reduce((sum, result) => sum + result.issues.length, 0),
          totalSuggestions: this.reviewResults.reduce((sum, result) => sum + result.suggestions.length, 0),
          qualityScore: this.codeMetrics.qualityScore,
          securityIssues: this.codeMetrics.securityIssues?.length || 0
        },
        codeMetrics: this.codeMetrics,
        fileAnalysis: this.reviewResults,
        generalSuggestions: this.suggestions,
        status: 'completed'
      };
      
      const reportPath = path.join(process.cwd(), 'ai-code-review-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`✅ AI code review report saved to ${reportPath}`);
      
      // Log summary
      console.log('\n📊 AI Code Review Summary:');
      console.log(`   Files analyzed: ${report.summary.filesAnalyzed}`);
      console.log(`   Total issues: ${report.summary.totalIssues}`);
      console.log(`   Quality score: ${report.summary.qualityScore}/100`);
      console.log(`   Security issues: ${report.summary.securityIssues}`);
      
    } catch (error) {
      console.log('⚠️  Report generation failed:', error.message);
    }
  }

  logError(error) {
    const errorLog = `[${new Date().toISOString()}] ERROR: ${error.message}\n${error.stack}\n`;
    fs.appendFileSync(this.logFile, errorLog);
  }
}

// Main execution
async function main() {
  const reviewer = new AICodeReviewer();
  
  // Run initial review
  await reviewer.runCodeReview();
  
  // Set up continuous monitoring
  setInterval(async () => {
    await reviewer.runCodeReview();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🤖 AI code review automation started. Running every ${AUTOMATION_INTERVAL / 60000} minutes.`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🤖 AI code review automation shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🤖 AI code review automation shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(console.error);