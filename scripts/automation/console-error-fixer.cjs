#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'console-error-fixer-report.json');
    this.errors = [];
    this.fixes = [];
  }

  async run() {
    console.log('🔧 Starting Console Error Fixer...');
    
    try {
      await this.checkForConsoleErrors();
      await this.fixConsoleErrors();
      await this.generateReport();
      await this.runQualityChecks();
      
      console.log('✅ Console Error Fixer completed successfully');
    } catch (error) {
      console.error('❌ Console Error Fixer failed:', error.message);
      process.exit(1);
    }
  }

  async checkForConsoleErrors() {
    console.log('🔍 Checking for console errors...');
    
    try {
      // Run linting to find console statements
      const lintOutput = execSync('npm run lint --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Parse lint output for console statements
      const consoleMatches = lintOutput.match(/console\.(log|warn|error|info|debug)/g) || [];
      
      if (consoleMatches.length > 0) {
        this.errors.push({
          type: 'console_statement',
          count: consoleMatches.length,
          details: consoleMatches
        });
      }
      
      // Check for build errors
      try {
        execSync('npm run build --silent', { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      } catch (buildError) {
        this.errors.push({
          type: 'build_error',
          details: buildError.message
        });
      }
      
    } catch (error) {
      // Linting failed, continue with other checks
      console.log('⚠️  Linting check failed, continuing with other checks...');
    }
  }

  async fixConsoleErrors() {
    console.log('🔧 Fixing console errors...');
    
    if (this.errors.length === 0) {
      console.log('✅ No console errors found to fix');
      return;
    }

    try {
      // Remove console statements from production code
      const srcDir = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcDir)) {
        await this.removeConsoleStatements(srcDir);
      }
      
      // Run auto-fix for linting issues
      try {
        execSync('npm run lint -- --fix', { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.fixes.push('lint_auto_fix');
      } catch (error) {
        console.log('⚠️  Lint auto-fix failed, continuing...');
      }
      
    } catch (error) {
      console.error('❌ Error during console error fixing:', error.message);
    }
  }

  async removeConsoleStatements(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.removeConsoleStatements(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        await this.processFile(filePath);
      }
    }
  }

  async processFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove console statements
      content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\);?\s*/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`removed_console_from_${path.basename(filePath)}`);
      }
    } catch (error) {
      console.log(`⚠️  Could not process file ${filePath}:`, error.message);
    }
  }

  async runQualityChecks() {
    console.log('🧪 Running quality checks...');
    
    try {
      // Run type checking
      execSync('npm run type-check --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.fixes.push('type_check_passed');
    } catch (error) {
      console.log('⚠️  Type checking failed');
    }
    
    try {
      // Run tests if available
      execSync('npm test --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.fixes.push('tests_passed');
    } catch (error) {
      console.log('⚠️  Tests failed or not available');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errors_found: this.errors.length,
      fixes_applied: this.fixes.length,
      errors: this.errors,
      fixes: this.fixes,
      status: this.errors.length === 0 ? 'success' : 'partial_success'
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportPath}`);
  }
}

// Run the automation
if (require.main === module) {
  const fixer = new ConsoleErrorFixer();
  fixer.run();
}

module.exports = ConsoleErrorFixer;