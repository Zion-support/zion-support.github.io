#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Console Error Fixer Automation...');

class ConsoleErrorFixer {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.fixesApplied = 0;
    this.errorsFound = 0;
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Scanning for console errors...');
      
      // Check for console.log statements in production code
      await this.scanForConsoleStatements();
      
      // Check for TypeScript/JavaScript syntax errors
      await this.checkSyntaxErrors();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Console Error Fixer completed. Found ${this.errorsFound} issues, applied ${this.fixesApplied} fixes.`);
      
    } catch (error) {
      console.error('❌ Console Error Fixer failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async scanForConsoleStatements() {
    try {
      const output = execSync('grep -r "console\." src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      if (output.trim()) {
        this.errorsFound += output.split('\n').filter(line => line.trim()).length;
        console.log(`⚠️  Found ${this.errorsFound} console statements in source code`);
        
        // Optionally remove console statements (be careful with this)
        // await this.removeConsoleStatements();
      }
    } catch (error) {
      console.log('ℹ️  No console statements found or error occurred');
    }
  }

  async checkSyntaxErrors() {
    try {
      console.log('🔍 Checking TypeScript syntax...');
      const output = execSync('npx tsc --noEmit', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      if (output.includes('error')) {
        const errorLines = output.split('\n').filter(line => line.includes('error'));
        this.errorsFound += errorLines.length;
        console.log(`⚠️  Found ${errorLines.length} TypeScript errors`);
      } else {
        console.log('✅ No TypeScript syntax errors found');
      }
      
    } catch (error) {
      // TypeScript errors are expected to cause exit code 1
      const errorOutput = error.stdout || error.stderr || '';
      if (errorOutput.includes('error')) {
        const errorLines = errorOutput.split('\n').filter(line => line.includes('error'));
        this.errorsFound += errorLines.length;
        console.log(`⚠️  Found ${errorLines.length} TypeScript errors`);
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFound: this.errorsFound,
      fixesApplied: this.fixesApplied,
      status: this.errorsFound === 0 ? 'clean' : 'issues_found'
    };

    const reportPath = path.join(this.reportDir, 'console-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'console-error-fixer-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const fixer = new ConsoleErrorFixer();
fixer.run().catch(console.error);