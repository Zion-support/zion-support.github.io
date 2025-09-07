const { execSync } = require('child_process');
const fs = require('fs');

class CodeQualityChecker {
  constructor() {
    this.reportPath = '/workspace/code-quality-report.json';
    this.issues = [];
  }

  log(message) {
    console.log(`ℹ️ [${new Date().toISOString()}] ${message}`);
  }

  async runTypeScriptCheck() {
    this.log('Running TypeScript type checking...');
    
    try {
      execSync('npx tsc --noEmit --pretty', { stdio: 'pipe' });
      this.log('✅ TypeScript check passed');
    } catch (error) {
      this.issues.push({
        type: 'typescript',
        severity: 'error',
        message: 'TypeScript compilation errors found'
      });
      this.log(`❌ TypeScript check failed: ${error.message}`);
    }
  }

  async runESLintCheck() {
    this.log('Running ESLint analysis...');
    
    try {
      const output = execSync('npx eslint . --format=json', { 
        stdio: 'pipe', 
        encoding: 'utf8' 
      });
      
      const eslintResults = JSON.parse(output);
      let errorCount = 0;
      let warningCount = 0;
      
      eslintResults.forEach(result => {
        result.messages.forEach(message => {
          this.issues.push({
            type: 'eslint',
            severity: message.severity === 2 ? 'error' : 'warning',
            file: result.filePath,
            message: message.message,
            rule: message.ruleId
          });
          
          if (message.severity === 2) errorCount++;
          else warningCount++;
        });
      });
      
      this.log(`✅ ESLint found ${errorCount} errors and ${warningCount} warnings`);
    } catch (error) {
      this.log(`❌ ESLint check failed: ${error.message}`);
    }
  }

  generateReport() {
    this.log('Generating code quality report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      summary: {
        totalIssues: this.issues.length,
        errors: this.issues.filter(i => i.severity === 'error').length,
        warnings: this.issues.filter(i => i.severity === 'warning').length
      }
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`✅ Code quality report saved to ${this.reportPath}`);
    
    console.log('\n📊 CODE QUALITY SUMMARY');
    console.log('==========================================');
    console.log(`Total Issues: ${report.summary.totalIssues}`);
    console.log(`Errors: ${report.summary.errors}`);
    console.log(`Warnings: ${report.summary.warnings}`);
  }

  async run() {
    this.log('🔍 Starting Code Quality Check...');
    
    try {
      await this.runTypeScriptCheck();
      await this.runESLintCheck();
      this.generateReport();
      
      this.log('✅ Code quality check completed successfully!');
    } catch (error) {
      this.log(`❌ Code quality check failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const checker = new CodeQualityChecker();
  checker.run();
}

module.exports = CodeQualityChecker;