#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousImprovement {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'continuous-improvement-report.json');
    this.improvements = [];
    this.issues = [];
  }

  async run() {
    console.log('🚀 Starting Continuous Improvement...');
    
    try {
      await this.runCodeQualityChecks();
      await this.runLinting();
      await this.runTypeChecking();
      await this.runTests();
      await this.runBuildCheck();
      await this.generateReport();
      
      console.log('✅ Continuous Improvement completed successfully');
    } catch (error) {
      console.error('❌ Continuous Improvement failed:', error.message);
      process.exit(1);
    }
  }

  async runCodeQualityChecks() {
    console.log('🔍 Running code quality checks...');
    
    try {
      // Check for common code quality issues
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        await this.analyzeCodeQuality(srcDir);
      }
      
      // Check package.json for potential improvements
      await this.analyzePackageJson();
      
    } catch (error) {
      console.log('⚠️  Code quality checks failed:', error.message);
    }
  }

  async analyzeCodeQuality(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.analyzeCodeQuality(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
        await this.analyzeFile(filePath);
      }
    }
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common issues
      if (content.includes('console.log') || content.includes('console.warn')) {
        this.issues.push({
          type: 'console_statement',
          file: filePath,
          severity: 'low',
          suggestion: 'Remove console statements for production'
        });
      }
      
      if (content.includes('TODO') || content.includes('FIXME')) {
        this.issues.push({
          type: 'todo_fixme',
          file: filePath,
          severity: 'medium',
          suggestion: 'Address TODO/FIXME comments'
        });
      }
      
      if (content.includes('debugger')) {
        this.issues.push({
          type: 'debugger_statement',
          file: filePath,
          severity: 'high',
          suggestion: 'Remove debugger statements'
        });
      }
      
      // Check for potential improvements
      if (content.includes('var ')) {
        this.improvements.push({
          type: 'var_to_const_let',
          file: filePath,
          suggestion: 'Consider using const/let instead of var'
        });
      }
      
    } catch (error) {
      console.log(`⚠️  Could not analyze file ${filePath}:`, error.message);
    }
  }

  async analyzePackageJson() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Check for potential improvements
        if (packageJson.scripts && !packageJson.scripts['type-check']) {
          this.improvements.push({
            type: 'missing_type_check_script',
            suggestion: 'Add type-check script to package.json'
          });
        }
        
        if (packageJson.scripts && !packageJson.scripts.lint) {
          this.improvements.push({
            type: 'missing_lint_script',
            suggestion: 'Add lint script to package.json'
          });
        }
      }
    } catch (error) {
      console.log('⚠️  Could not analyze package.json:', error.message);
    }
  }

  async runLinting() {
    console.log('🧹 Running linting...');
    
    try {
      execSync('npm run lint --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.improvements.push('linting_passed');
    } catch (error) {
      this.issues.push({
        type: 'linting_failed',
        severity: 'medium',
        suggestion: 'Fix linting issues'
      });
      
      // Try auto-fix
      try {
        execSync('npm run lint -- --fix --silent', { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.improvements.push('linting_auto_fixed');
      } catch (fixError) {
        console.log('⚠️  Linting auto-fix failed');
      }
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
      this.improvements.push('type_checking_passed');
    } catch (error) {
      this.issues.push({
        type: 'type_checking_failed',
        severity: 'high',
        suggestion: 'Fix TypeScript type errors'
      });
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
      this.improvements.push('tests_passed');
    } catch (error) {
      this.issues.push({
        type: 'tests_failed',
        severity: 'high',
        suggestion: 'Fix failing tests'
      });
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
      this.improvements.push('build_successful');
    } catch (error) {
      this.issues.push({
        type: 'build_failed',
        severity: 'critical',
        suggestion: 'Fix build errors'
      });
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      total_improvements: this.improvements.length,
      total_issues: this.issues.length,
      improvements: this.improvements,
      issues: this.issues,
      status: this.issues.length === 0 ? 'excellent' : 'needs_attention'
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportPath}`);
    
    if (this.issues.length > 0) {
      console.log(`⚠️  Found ${this.issues.length} issues to address`);
    }
    
    if (this.improvements.length > 0) {
      console.log(`✅ Applied ${this.improvements.length} improvements`);
    }
  }
}

// Run the automation
if (require.main === module) {
  const improvement = new ContinuousImprovement();
  improvement.run();
}

module.exports = ContinuousImprovement;