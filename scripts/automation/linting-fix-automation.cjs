#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintingFixAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.fixHistory = [];
    
    this.setupDirectories();
  }

  setupDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'linting-fix.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runLintingCheck() {
    this.log('Running ESLint check...');
    
    try {
      const result = execSync('npx eslint . --format=json', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('ESLint check passed - no linting errors found');
      return { success: true, errors: [] };
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseLintingErrors(error.stdout);
        this.log(`ESLint check failed with ${errors.length} errors`);
        return { success: false, errors };
      }
      return { success: false, errors: [] };
    }
  }

  parseLintingErrors(output) {
    try {
      const results = JSON.parse(output);
      const errors = [];
      
      for (const file of results) {
        for (const message of file.messages) {
          errors.push({
            file: file.filePath.replace(this.projectRoot + '/', ''),
            line: message.line,
            column: message.column,
            message: message.message,
            rule: message.ruleId,
            type: 'linting',
            severity: message.severity,
            fixable: message.fixable || false
          });
        }
      }
      
      return errors;
    } catch (e) {
      this.log('Failed to parse linting errors', 'ERROR');
      return [];
    }
  }

  async runAutoFix() {
    this.log('Running ESLint auto-fix...');
    
    try {
      const result = execSync('npx eslint . --fix --format=json', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('ESLint auto-fix completed');
      return { success: true, fixed: true };
    } catch (error) {
      this.log('ESLint auto-fix failed', 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async fixSpecificErrors(errors) {
    this.log('Fixing specific linting errors...');
    
    let fixedCount = 0;
    
    for (const error of errors) {
      if (error.fixable && error.file) {
        try {
          const fixed = await this.fixSpecificError(error);
          if (fixed) {
            fixedCount++;
            this.fixHistory.push({
              timestamp: new Date().toISOString(),
              error,
              fixed: true
            });
          }
        } catch (e) {
          this.log(`Failed to fix error in ${error.file}: ${e.message}`, 'ERROR');
        }
      }
    }
    
    this.log(`Fixed ${fixedCount} specific errors`);
    return fixedCount;
  }

  async fixSpecificError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Handle specific error types
    switch (error.rule) {
      case 'react/no-unescaped-entities':
        modified = this.fixUnescapedEntities(content, error);
        break;
        
      case '@typescript-eslint/no-unused-vars':
        modified = this.fixUnusedVariables(content, error);
        break;
        
      case 'no-undef':
        modified = this.fixUndefinedVariables(content, error);
        break;
        
      case 'no-prototype-builtins':
        modified = this.fixPrototypeBuiltins(content, error);
        break;
        
      case 'no-useless-escape':
        modified = this.fixUselessEscape(content, error);
        break;
        
      case 'no-redeclare':
        modified = this.fixRedeclare(content, error);
        break;
        
      case 'no-dupe-keys':
        modified = this.fixDuplicateKeys(content, error);
        break;
        
      default:
        // Try to apply common fixes
        modified = this.applyCommonFixes(content, error);
    }
    
    if (modified) {
      // Create backup
      const backupPath = filePath + '.lintbackup';
      fs.copyFileSync(filePath, backupPath);
      
      // Write fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      this.log(`Fixed ${error.rule} error in ${error.file}`);
      return true;
    }
    
    return false;
  }

  fixUnescapedEntities(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Fix common unescaped entities
      line = line.replace(/'/g, '&apos;');
      line = line.replace(/"/g, '&quot;');
      line = line.replace(/</g, '&lt;');
      line = line.replace(/>/g, '&gt;');
      
      if (line !== lines[lineIndex]) {
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  fixUnusedVariables(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Comment out unused imports/variables
      if (line.includes('import') && line.includes('from')) {
        line = '// ' + line;
        lines[lineIndex] = line;
        return true;
      }
      
      // Comment out unused variables
      if (line.includes('const') || line.includes('let') || line.includes('var')) {
        line = '// ' + line;
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  fixUndefinedVariables(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Add jest import for test files
      if (line.includes('jest') && error.file.includes('test')) {
        const importLine = "import { jest } from '@jest/globals';";
        
        // Find the last import statement
        let lastImportIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('import')) {
            lastImportIndex = i;
          }
        }
        
        if (lastImportIndex >= 0) {
          lines.splice(lastImportIndex + 1, 0, importLine);
          return true;
        }
      }
    }
    
    return false;
  }

  fixPrototypeBuiltins(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Replace hasOwnProperty with Object.prototype.hasOwnProperty.call
      if (line.includes('hasOwnProperty')) {
        line = line.replace(/\.hasOwnProperty\(/g, '.hasOwnProperty.call(');
        if (line !== lines[lineIndex]) {
          lines[lineIndex] = line;
          return true;
        }
      }
    }
    
    return false;
  }

  fixUselessEscape(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Remove unnecessary escape characters
      line = line.replace(/\\\[/g, '[');
      line = line.replace(/\\\//g, '/');
      line = line.replace(/\\\(/g, '(');
      line = line.replace(/\\\)/g, ')');
      
      if (line !== lines[lineIndex]) {
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  fixRedeclare(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Comment out duplicate declarations
      if (line.includes('function') || line.includes('const') || line.includes('let') || line.includes('var')) {
        line = '// ' + line;
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  fixDuplicateKeys(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      
      // Comment out duplicate keys
      if (line.includes(':')) {
        line = '// ' + line;
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  applyCommonFixes(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lines[lineIndex]) {
      let line = lines[lineIndex];
      let modified = false;
      
      // Common fixes for various rules
      if (line.includes('any')) {
        line = line.replace(/:\s*any/g, ': any');
        modified = true;
      }
      
      if (line.includes('=>')) {
        line = line.replace(/\s*=>\s*/g, ' => ');
        modified = true;
      }
      
      if (line.includes('{') && line.includes('}')) {
        line = line.replace(/\s*{\s*/g, ' { ');
        line = line.replace(/\s*}\s*/g, ' } ');
        modified = true;
      }
      
      if (modified && line !== lines[lineIndex]) {
        lines[lineIndex] = line;
        return true;
      }
    }
    
    return false;
  }

  async runFullFix() {
    this.log('Starting comprehensive linting fix...');
    
    try {
      // First, try auto-fix
      const autoFixResult = await this.runAutoFix();
      
      if (autoFixResult.success) {
        this.log('Auto-fix completed successfully');
      }
      
      // Then run another check to see what remains
      const remainingErrors = await this.runLintingCheck();
      
      if (remainingErrors.success) {
        this.log('✅ All linting errors have been resolved!');
        return { success: true, autoFixed: true, manuallyFixed: 0 };
      }
      
      // Try to fix remaining errors manually
      const manuallyFixed = await this.fixSpecificErrors(remainingErrors.errors);
      
      // Final check
      const finalCheck = await this.runLintingCheck();
      
      return {
        success: finalCheck.success,
        autoFixed: autoFixResult.success,
        manuallyFixed,
        remainingErrors: finalCheck.errors.length
      };
      
    } catch (error) {
      this.log(`Error during linting fix: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  generateReport(fixResults) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        success: fixResults.success,
        autoFixed: fixResults.autoFixed,
        manuallyFixed: fixResults.manuallyFixed || 0,
        remainingErrors: fixResults.remainingErrors || 0
      },
      fixHistory: this.fixHistory,
      recommendations: this.generateRecommendations(fixResults)
    };

    const reportPath = path.join(this.logsDir, `linting-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations(fixResults) {
    const recommendations = [];
    
    if (fixResults.remainingErrors > 0) {
      recommendations.push({
        priority: 'high',
        message: `Still have ${fixResults.remainingErrors} linting errors remaining`,
        action: 'review_remaining_errors',
        command: 'npm run lint'
      });
    }
    
    if (fixResults.manuallyFixed > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Review manually fixed errors to ensure changes are correct',
        action: 'review_fixes',
        files: this.fixHistory.map(h => h.file)
      });
    }
    
    if (fixResults.success) {
      recommendations.push({
        priority: 'low',
        message: 'Consider running tests to ensure fixes don\'t break functionality',
        action: 'run_tests',
        command: 'npm test'
      });
    }
    
    return recommendations;
  }

  async run() {
    this.log('Starting Linting Fix Automation...');
    
    try {
      const fixResults = await this.runFullFix();
      const report = this.generateReport(fixResults);
      
      this.log('Linting Fix Automation completed');
      
      if (fixResults.success) {
        this.log('✅ All linting errors have been resolved!');
      } else {
        this.log(`⚠️  Still have ${fixResults.remainingErrors} linting errors remaining`);
      }
      
      return report;
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new LintingFixAutomation();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'fix':
      automation.run().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('Error:', error.message);
        process.exit(1);
      });
      break;
      
    case 'check':
      automation.runLintingCheck().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(results.success ? 0 : 1);
      });
      break;
      
    case 'auto-fix':
      automation.runAutoFix().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(results.success ? 0 : 1);
      });
      break;
      
    default:
      console.log(`
Linting Fix Automation

Usage:
  node linting-fix-automation.cjs [command]

Commands:
  fix      - Run comprehensive linting fix (auto + manual)
  check    - Run ESLint check
  auto-fix - Run ESLint auto-fix only

Examples:
  node linting-fix-automation.cjs fix
  node linting-fix-automation.cjs check
  node linting-fix-automation.cjs auto-fix
      `);
      process.exit(1);
  }
}

module.exports = LintingFixAutomation;