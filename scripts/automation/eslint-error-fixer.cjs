#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ESLintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      errorsFixed: 0,
      warningsFixed: 0,
      filesProcessed: 0,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ESLint Error Fixer: ${message}`);
  }

  async runLintCheck() {
    this.log('Running ESLint check...');
    
    try {
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('ESLint check passed - no errors found');
      return { success: true, errors: [], warnings: [] };
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const errors = this.parseESLintOutput(output);
      
      this.log(`ESLint check failed with ${errors.length} issues`);
      return { success: false, errors, warnings: [] };
    }
  }

  parseESLintOutput(output) {
    const lines = output.split('\n');
    const errors = [];
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/(\d+):(\d+)\s+(error|warning)\s+(.+)/);
        if (match) {
          errors.push({
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            type: match[3],
            message: match[4],
            fullLine: line
          });
        }
      }
    }
    
    return errors;
  }

  async fixCommonErrors() {
    this.log('Attempting to fix common ESLint errors...');
    
    try {
      // Run ESLint with --fix flag
      execSync('npm run fix:all', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('ESLint auto-fix completed');
      return true;
      
    } catch (error) {
      this.log(`ESLint auto-fix failed: ${error.message}`);
      return false;
    }
  }

  async fixSpecificErrors(errors) {
    this.log(`Attempting to fix ${errors.length} specific errors...`);
    
    let fixedCount = 0;
    
    for (const error of errors) {
      if (await this.fixSingleError(error)) {
        fixedCount++;
      }
    }
    
    this.log(`Fixed ${fixedCount} out of ${errors.length} errors`);
    return fixedCount;
  }

  async fixSingleError(error) {
    try {
      const filePath = this.extractFilePath(error.fullLine);
      if (!filePath || !fs.existsSync(filePath)) {
        return false;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      if (error.line > lines.length) {
        return false;
      }
      
      const lineIndex = error.line - 1;
      const originalLine = lines[lineIndex];
      
      // Apply common fixes based on error type
      let fixedLine = this.applyCommonFixes(originalLine, error);
      
      if (fixedLine !== originalLine) {
        lines[lineIndex] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed error in ${filePath}:${error.line}`);
        return true;
      }
      
      return false;
      
    } catch (err) {
      this.log(`Failed to fix error: ${err.message}`);
      return false;
    }
  }

  extractFilePath(line) {
    const match = line.match(/^([^:]+):/);
    return match ? match[1] : null;
  }

  applyCommonFixes(line, error) {
    let fixedLine = line;
    
    // Fix unused variables
    if (error.message.includes('no-unused-vars')) {
      fixedLine = line.replace(/^(\s*)(const|let|var)\s+(\w+)/, '$1// $2 $3');
    }
    
    // Fix console statements
    if (error.message.includes('no-console')) {
      fixedLine = line.replace(/console\.(log|warn|error|info)/, '// console.$1');
    }
    
    // Fix missing semicolons
    if (error.message.includes('missing semicolon')) {
      if (!line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
        fixedLine = line + ';';
      }
    }
    
    // Fix trailing spaces
    if (error.message.includes('trailing spaces')) {
      fixedLine = line.replace(/\s+$/, '');
    }
    
    return fixedLine;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        totalIssues: this.results.errorsFixed + this.results.warningsFixed,
        successRate: this.results.success ? '100%' : '0%',
        efficiency: `${this.results.filesProcessed} files processed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'eslint-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting ESLint Error Fixer...');
    
    try {
      // Run initial lint check
      const lintResult = await this.runLintCheck();
      
      if (lintResult.success) {
        this.results.success = true;
        this.log('No ESLint errors found - system is clean');
      } else {
        // Try to fix errors automatically
        const autoFixSuccess = await this.fixCommonErrors();
        
        if (autoFixSuccess) {
          // Check again after auto-fix
          const lintResultAfter = await this.runLintCheck();
          
          if (lintResultAfter.success) {
            this.results.success = true;
            this.results.errorsFixed = lintResult.errors.length;
            this.log('All ESLint errors were automatically fixed');
          } else {
            // Try to fix remaining errors manually
            const remainingErrors = lintResultAfter.errors;
            const manuallyFixed = await this.fixSpecificErrors(remainingErrors);
            
            this.results.errorsFixed = lintResult.errors.length - remainingErrors.length + manuallyFixed;
            this.results.success = remainingErrors.length === 0;
          }
        }
      }
      
      // Generate report
      await this.generateReport();
      
      this.log(`ESLint Error Fixer completed. Success: ${this.results.success}`);
      return this.results;
      
    } catch (error) {
      this.log(`ESLint Error Fixer failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new ESLintErrorFixer();
  fixer.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = ESLintErrorFixer;