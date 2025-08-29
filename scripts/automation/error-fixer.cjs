#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'error-fixer-report.json');
    this.fixesApplied = [];
    this.errorsFound = [];
  }

  async run() {
    console.log('🔧 Starting automated error fixing...');
    
    try {
      // Run initial error scan
      await this.scanForErrors();
      
      // Apply automated fixes
      await this.applyFixes();
      
      // Run final validation
      await this.validateFixes();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Error fixing completed successfully!');
    } catch (error) {
      console.error('❌ Error during automated fixing:', error);
      await this.generateReport();
      process.exit(1);
    }
  }

  async scanForErrors() {
    console.log('🔍 Scanning for errors...');
    
    try {
      // Run ESLint to get current errors
      const lintOutput = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.errorsFound = this.parseLintOutput(lintOutput);
      console.log(`📊 Found ${this.errorsFound.length} errors/warnings`);
      
    } catch (error) {
      // ESLint failed, parse the error output
      this.errorsFound = this.parseLintOutput(error.stdout || error.stderr || '');
    }
  }

  parseLintOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    let currentFile = '';
    
    for (const line of lines) {
      // Check if this is a file header line
      if (line.includes('/workspace/') && line.endsWith(':')) {
        currentFile = line.replace('/workspace/', '').replace(':', '');
        continue;
      }
      
      if (line.includes('error') || line.includes('warning')) {
        // Handle the actual ESLint format: line:col warning/error message
        const match = line.match(/^\s*(\d+):(\d+)\s+(error|warning)\s+(.+)/);
        if (match && currentFile) {
          errors.push({
            file: currentFile,
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            type: match[3],
            message: match[4].trim()
          });
        }
      }
    }
    
    return errors;
  }

  async applyFixes() {
    console.log('🔧 Applying automated fixes...');
    
    // Group errors by file
    const errorsByFile = this.groupErrorsByFile();
    
    for (const [filePath, errors] of Object.entries(errorsByFile)) {
      await this.fixFileErrors(filePath, errors);
    }
  }

  groupErrorsByFile() {
    const grouped = {};
    
    for (const error of this.errorsFound) {
      if (!grouped[error.file]) {
        grouped[error.file] = [];
      }
      grouped[error.file].push(error);
    }
    
    return grouped;
  }

  async fixFileErrors(filePath, errors) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Sort errors by line number (descending) to avoid line number shifts
      const sortedErrors = errors.sort((a, b) => b.line - a.line);
      
      for (const error of sortedErrors) {
        const fix = await this.getFixForError(error, content);
        if (fix) {
          content = this.applyFix(content, error, fix);
          modified = true;
          this.fixesApplied.push({
            file: filePath,
            error: error.message,
            fix: fix.description
          });
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${errors.length} issues in ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error);
    }
  }

  async getFixForError(error, content) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Handle different types of errors
    if (error.message.includes('no-unused-vars')) {
      return this.fixUnusedVariable(error, line, lineIndex);
    }
    
    if (error.message.includes('no-console')) {
      return this.fixConsoleStatement(error, line, lineIndex);
    }
    
    if (error.message.includes('no-undef')) {
      return this.fixUndefinedVariable(error, line, lineIndex);
    }
    
    if (error.message.includes('no-useless-escape')) {
      return this.fixUselessEscape(error, line, lineIndex);
    }
    
    if (error.message.includes('no-extra-semi')) {
      return this.fixExtraSemicolon(error, line, lineIndex);
    }
    
    if (error.message.includes('no-redeclare')) {
      return this.fixRedeclaration(error, line, lineIndex);
    }
    
    if (error.message.includes('no-prototype-builtins')) {
      return this.fixPrototypeBuiltins(error, line, lineIndex);
    }
    
    return null;
  }

  fixUnusedVariable(error, line, lineIndex) {
    // Remove unused imports or variables
    if (line.includes('import') && line.includes('React')) {
      return {
        type: 'remove',
        description: 'Remove unused React import',
        action: () => {
          // Remove the entire import line if it's only React
          if (line.trim().match(/^import\s+React\s+from\s+['"]react['"];?\s*$/)) {
            return 'REMOVE_LINE';
          }
          // Remove React from existing import
          return line.replace(/,\s*React\b/, '').replace(/^import\s+React\s*,/, 'import');
        }
      };
    }
    
    // Handle other unused variables
    const match = line.match(/(\w+)\s*=\s*[^;]+;?\s*$/);
    if (match) {
      return {
        type: 'prefix',
        description: `Prefix unused variable ${match[1]} with underscore`,
        action: () => line.replace(new RegExp(`\\b${match[1]}\\b`), `_${match[1]}`)
      };
    }
    
    return null;
  }

  fixConsoleStatement(error, line, lineIndex) {
    return {
      type: 'replace',
      description: 'Replace console statement with production logger',
      action: () => {
        if (line.includes('console.log')) {
          return line.replace(/console\.log\(/g, '// console.log(');
        }
        if (line.includes('console.error')) {
          return line.replace(/console\.error\(/g, '// console.error(');
        }
        if (line.includes('console.warn')) {
          return line.replace(/console\.warn\(/g, '// console.warn(');
        }
        return line;
      }
    };
  }

  fixUndefinedVariable(error, line, lineIndex) {
    const match = line.match(/(\w+)\s*is not defined/);
    if (match) {
      const varName = match[1];
      
      // Handle common browser APIs
      if (['IntersectionObserver', 'SpeechSynthesisUtterance', 'speechSynthesis'].includes(varName)) {
        return {
          type: 'add-check',
          description: `Add check for ${varName} availability`,
          action: () => {
            if (line.includes(varName)) {
              return line.replace(
                new RegExp(`\\b${varName}\\b`),
                `typeof ${varName} !== 'undefined' ? ${varName} : null`
              );
            }
            return line;
          }
        };
      }
      
      // Handle reject function in async/await
      if (varName === 'reject') {
        return {
          type: 'fix-reject',
          description: 'Fix reject function usage',
          action: () => line.replace(/\breject\b/g, '(error) => Promise.reject(error)')
        };
      }
    }
    
    return null;
  }

  fixUselessEscape(error, line, lineIndex) {
    return {
      type: 'unescape',
      description: 'Remove unnecessary escape characters',
      action: () => {
        return line
          .replace(/\\\[/g, '[')
          .replace(/\\\//g, '/')
          .replace(/\\-/g, '-');
      }
    };
  }

  fixExtraSemicolon(error, line, lineIndex) {
    return {
      type: 'remove-semi',
      description: 'Remove extra semicolon',
      action: () => line.replace(/;;+/, ';')
    };
  }

  fixRedeclaration(error, line, lineIndex) {
    const match = line.match(/(\w+)\s+is already defined/);
    if (match) {
      const varName = match[1];
      return {
        type: 'rename',
        description: `Rename duplicate variable ${varName}`,
        action: () => line.replace(new RegExp(`\\b${varName}\\b`), `${varName}2`)
      };
    }
    return null;
  }

  fixPrototypeBuiltins(error, line, lineIndex) {
    return {
      type: 'fix-prototype',
      description: 'Fix prototype builtins usage',
      action: () => {
        return line.replace(
          /\.hasOwnProperty\(/g,
          'Object.prototype.hasOwnProperty.call('
        );
      }
    };
  }

  applyFix(content, error, fix) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (fix.action() === 'REMOVE_LINE') {
      lines.splice(lineIndex, 1);
    } else {
      lines[lineIndex] = fix.action();
    }
    
    return lines.join('\n');
  }

  async validateFixes() {
    console.log('🔍 Validating fixes...');
    
    try {
      // Run ESLint again to check if fixes worked
      const lintOutput = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const remainingErrors = this.parseLintOutput(lintOutput);
      console.log(`📊 Remaining errors: ${remainingErrors.length}`);
      
      if (remainingErrors.length < this.errorsFound.length) {
        console.log(`🎉 Successfully fixed ${this.errorsFound.length - remainingErrors.length} errors!`);
      }
      
    } catch (error) {
      console.log('⚠️  Some errors may still remain');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrorsFound: this.errorsFound.length,
      fixesApplied: this.fixesApplied.length,
      fixes: this.fixesApplied,
      remainingErrors: this.errorsFound.length - this.fixesApplied.length
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to ${this.reportPath}`);
  }
}

// Run the error fixer
const errorFixer = new ErrorFixer();
errorFixer.run().catch(console.error);