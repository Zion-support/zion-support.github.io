#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class QualityChecks {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'quality-checks-report.json');
    this.checks = [];
    this.issues = [];
    this.metrics = {};
  }

  async run() {
    console.log('🔍 Starting Quality Checks...');
    
    try {
      await this.runCodeAnalysis();
      await this.runLinting();
      await this.runTypeChecking();
      await this.runTests();
      await this.runBuildCheck();
      await this.calculateMetrics();
      await this.generateReport();
      
      console.log('✅ Quality Checks completed successfully');
    } catch (error) {
      console.error('❌ Quality Checks failed:', error.message);
      process.exit(1);
    }
  }

  async runCodeAnalysis() {
    console.log('🔍 Running code analysis...');
    
    try {
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        await this.analyzeCodeStructure(srcDir);
        await this.checkCodeComplexity(srcDir);
        await this.checkCodeDuplication(srcDir);
      }
    } catch (error) {
      console.log('⚠️  Code analysis failed:', error.message);
    }
  }

  async analyzeCodeStructure(dir) {
    const files = fs.readdirSync(dir);
    let totalFiles = 0;
    let totalLines = 0;
    let totalFunctions = 0;
    let totalClasses = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        const subStats = await this.analyzeCodeStructure(filePath);
        totalFiles += subStats.files;
        totalLines += subStats.lines;
        totalFunctions += subStats.functions;
        totalClasses += subStats.classes;
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
        totalFiles++;
        const stats = await this.analyzeFile(filePath);
        totalLines += stats.lines;
        totalFunctions += stats.functions;
        totalClasses += stats.classes;
      }
    }
    
    return { files: totalFiles, lines: totalLines, functions: totalFunctions, classes: totalClasses };
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').length;
      
      // Count functions and classes
      const functionMatches = content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || [];
      const classMatches = content.match(/class\s+\w+/g) || [];
      
      return {
        lines,
        functions: functionMatches.length,
        classes: classMatches.length
      };
    } catch (error) {
      return { lines: 0, functions: 0, classes: 0 };
    }
  }

  async checkCodeComplexity(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.checkCodeComplexity(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
        await this.analyzeFileComplexity(filePath);
      }
    }
  }

  async analyzeFileComplexity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for high complexity patterns
      const nestedLevels = this.countNestedLevels(content);
      const longFunctions = this.findLongFunctions(content);
      const magicNumbers = this.findMagicNumbers(content);
      
      if (nestedLevels > 5) {
        this.issues.push({
          type: 'high_nesting',
          file: filePath,
          severity: 'medium',
          details: `Nesting level: ${nestedLevels}`,
          suggestion: 'Reduce nesting levels for better readability'
        });
      }
      
      if (longFunctions.length > 0) {
        this.issues.push({
          type: 'long_functions',
          file: filePath,
          severity: 'low',
          details: `Found ${longFunctions.length} long functions`,
          suggestion: 'Break down long functions into smaller ones'
        });
      }
      
      if (magicNumbers.length > 0) {
        this.issues.push({
          type: 'magic_numbers',
          file: filePath,
          severity: 'low',
          details: `Found ${magicNumbers.length} magic numbers`,
          suggestion: 'Replace magic numbers with named constants'
        });
      }
      
    } catch (error) {
      console.log(`⚠️  Could not analyze complexity for ${filePath}:`, error.message);
    }
  }

  countNestedLevels(content) {
    let maxNesting = 0;
    let currentNesting = 0;
    
    for (const char of content) {
      if (char === '{') {
        currentNesting++;
        maxNesting = Math.max(maxNesting, currentNesting);
      } else if (char === '}') {
        currentNesting = Math.max(0, currentNesting - 1);
      }
    }
    
    return maxNesting;
  }

  findLongFunctions(content) {
    const functionMatches = content.match(/function\s+\w+[^{]*\{[\s\S]*?\}/g) || [];
    return functionMatches.filter(func => func.split('\n').length > 20);
  }

  findMagicNumbers(content) {
    const magicNumberMatches = content.match(/\b\d{3,}\b/g) || [];
    return magicNumberMatches.filter(num => !['1000', '1024', '3600', '86400'].includes(num));
  }

  async checkCodeDuplication(dir) {
    // Simple duplication check - in production you might use tools like jscpd
    console.log('🔍 Checking for code duplication...');
    
    try {
      const files = fs.readdirSync(dir);
      const fileContents = [];
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          await this.checkCodeDuplication(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            fileContents.push({ file, content: content.replace(/\s+/g, ' ').trim() });
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
      
      // Check for similar content
      for (let i = 0; i < fileContents.length; i++) {
        for (let j = i + 1; j < fileContents.length; j++) {
          const similarity = this.calculateSimilarity(fileContents[i].content, fileContents[j].content);
          if (similarity > 0.8) {
            this.issues.push({
              type: 'code_duplication',
              files: [fileContents[i].file, fileContents[j].file],
              similarity: similarity.toFixed(2),
              severity: 'medium',
              suggestion: 'Consider extracting common code into shared functions'
            });
          }
        }
      }
      
    } catch (error) {
      console.log('⚠️  Code duplication check failed:', error.message);
    }
  }

  calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  async runLinting() {
    console.log('🧹 Running linting...');
    
    try {
      execSync('npm run lint --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.checks.push({ type: 'linting', status: 'passed' });
    } catch (error) {
      this.issues.push({
        type: 'linting_failed',
        severity: 'medium',
        suggestion: 'Fix linting issues'
      });
      this.checks.push({ type: 'linting', status: 'failed' });
    }
  }

  async runTypeChecking() {
    console.log('🔍 Running type checking...');
    
    try {
      execSync('npm run type-check --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.checks.push({ type: 'type_checking', status: 'passed' });
    } catch (error) {
      this.issues.push({
        type: 'type_checking_failed',
        severity: 'high',
        suggestion: 'Fix TypeScript type errors'
      });
      this.checks.push({ type: 'type_checking', status: 'failed' });
    }
  }

  async runTests() {
    console.log('🧪 Running tests...');
    
    try {
      execSync('npm test --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.checks.push({ type: 'tests', status: 'passed' });
    } catch (error) {
      this.issues.push({
        type: 'tests_failed',
        severity: 'high',
        suggestion: 'Fix failing tests'
      });
      this.checks.push({ type: 'tests', status: 'failed' });
    }
  }

  async runBuildCheck() {
    console.log('🏗️  Running build check...');
    
    try {
      execSync('npm run build --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.checks.push({ type: 'build', status: 'passed' });
    } catch (error) {
      this.issues.push({
        type: 'build_failed',
        severity: 'critical',
        suggestion: 'Fix build errors'
      });
      this.checks.push({ type: 'build', status: 'failed' });
    }
  }

  async calculateMetrics() {
    const passedChecks = this.checks.filter(check => check.status === 'passed').length;
    const totalChecks = this.checks.length;
    
    this.metrics = {
      total_checks: totalChecks,
      passed_checks: passedChecks,
      failed_checks: totalChecks - passedChecks,
      success_rate: totalChecks > 0 ? (passedChecks / totalChecks * 100).toFixed(2) : 0,
      total_issues: this.issues.length,
      issues_by_severity: this.groupIssuesBySeverity()
    };
  }

  groupIssuesBySeverity() {
    const grouped = {};
    this.issues.forEach(issue => {
      const severity = issue.severity || 'unknown';
      grouped[severity] = (grouped[severity] || 0) + 1;
    });
    return grouped;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      checks: this.checks,
      issues: this.issues,
      status: this.metrics.success_rate >= 80 ? 'good' : 'needs_improvement',
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Quality checks report generated: ${this.reportPath}`);
    
    console.log(`📊 Quality Score: ${this.metrics.success_rate}%`);
    if (this.issues.length > 0) {
      console.log(`⚠️  Found ${this.issues.length} quality issues`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.success_rate < 100) {
      recommendations.push('Address failed quality checks');
    }
    
    if (this.issues.length > 0) {
      recommendations.push('Review and fix quality issues');
      recommendations.push('Focus on high severity issues first');
    }
    
    recommendations.push('Maintain consistent code quality standards');
    recommendations.push('Regularly run quality checks');
    
    return recommendations;
  }
}

// Run the automation
if (require.main === module) {
  const checker = new QualityChecks();
  checker.run();
}

module.exports = QualityChecks;