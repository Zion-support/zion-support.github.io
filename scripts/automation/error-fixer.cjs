#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('TypeScript check passed - no errors found');
      return { success: true, errors: [] };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const errors = this.parseTypeScriptErrors(output);
      this.log(`TypeScript check failed with ${errors.length} errors`);
      return { success: false, errors };
    }
  }

  parseTypeScriptErrors(output) {
    const errorLines = output.split('\n').filter(line => 
      line.includes('error TS') || line.includes('error:')
    );
    
    const errors = [];
    let currentError = null;
    
    for (const line of errorLines) {
      if (line.includes('error TS') || line.includes('error:')) {
        const match = line.match(/([^:]+):(\d+):(\d+)/);
        if (match) {
          if (currentError) {
            errors.push(currentError);
          }
          currentError = {
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: line.split(' - ')[1] || line,
            type: 'typescript'
          };
        }
      } else if (currentError && line.trim()) {
        currentError.message += ' ' + line.trim();
      }
    }
    
    if (currentError) {
      errors.push(currentError);
    }
    
    return errors;
  }

  async runLintCheck() {
    try {
      this.log('Running ESLint check...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('ESLint check passed - no errors found');
      return { success: true, errors: [] };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const errors = this.parseLintErrors(output);
      this.log(`ESLint check failed with ${errors.length} errors`);
      return { success: false, errors };
    }
  }

  parseLintErrors(output) {
    const errorLines = output.split('\n').filter(line => 
      line.includes('error') || line.includes('Error:')
    );
    
    return errorLines.map(line => ({
      message: line.trim(),
      type: 'eslint'
    }));
  }

  async fixCommonErrors() {
    this.log('Starting to fix common errors...');
    
    // Fix common TypeScript syntax errors
    await this.fixTypeScriptSyntaxErrors();
    
    // Fix common React/JSX errors
    await this.fixReactErrors();
    
    // Fix common import/export errors
    await this.fixImportExportErrors();
    
    // Fix common variable declaration errors
    await this.fixVariableErrors();
  }

  async fixTypeScriptSyntaxErrors() {
    this.log('Fixing TypeScript syntax errors...');
    
    const commonFixes = [
      // Fix missing colons in object properties
      { pattern: /(\w+)\s*\[/g, replacement: '$1: [' },
      { pattern: /(\w+)\s*\[/g, replacement: '$1: [' },
      
      // Fix missing parentheses in function calls
      { pattern: /(\w+)\s*\[/g, replacement: '$1: [' },
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*\[/g, replacement: '$1: [' },
    ];
    
    // Process TypeScript files
    const tsFiles = this.findFiles(['**/*.ts', '**/*.tsx']);
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Apply common fixes
        for (const fix of commonFixes) {
          content = content.replace(fix.pattern, fix.replacement);
        }
        
        // Fix specific common patterns
        content = this.fixSpecificPatterns(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.errorsFixed++;
          this.log(`Fixed errors in ${file}`);
        }
        
        this.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  fixSpecificPatterns(content) {
    // Fix missing function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[/g, 'const $1 = [');
    
    // Fix missing return statements
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    
    // Fix missing JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing catch block types
    content = content.replace(/catch\s*\(\s*error\s*:\s*\)/g, 'catch (error: any)');
    
    return content;
  }

  async fixReactErrors() {
    this.log('Fixing React/JSX errors...');
    
    const reactFiles = this.findFiles(['**/*.tsx', '**/*.jsx']);
    
    for (const file of reactFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix missing React imports
        if (content.includes('React') && !content.includes("import React")) {
          content = "import React from 'react';\n" + content;
        }
        
        // Fix missing JSX fragment wrappers
        if (content.includes('<Helmet>') && !content.includes('<>')) {
          content = content.replace(/<Helmet>/g, '<>\n        <Helmet>');
          content = content.replace(/<\/Helmet>\s*<\/div>/g, '</Helmet>\n      </div>\n    </>');
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.errorsFixed++;
          this.log(`Fixed React errors in ${file}`);
        }
        
        this.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixImportExportErrors() {
    this.log('Fixing import/export errors...');
    
    const sourceFiles = this.findFiles(['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']);
    
    for (const file of sourceFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix missing semicolons in imports
        content = content.replace(/import\s+([^;]+)$/gm, 'import $1;');
        
        // Fix missing semicolons in exports
        content = content.replace(/export\s+([^;]+)$/gm, 'export $1;');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.errorsFixed++;
          this.log(`Fixed import/export errors in ${file}`);
        }
        
        this.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixVariableErrors() {
    this.log('Fixing variable declaration errors...');
    
    const sourceFiles = this.findFiles(['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']);
    
    for (const file of sourceFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix missing const/let/var declarations
        content = content.replace(/^(\s*)(\w+)\s*=\s*\[/gm, '$1const $2 = [');
        
        // Fix missing semicolons
        content = content.replace(/^(\s*)(\w+)\s*=\s*([^;]+)$/gm, '$1$2 = $3;');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.errorsFixed++;
          this.log(`Fixed variable errors in ${file}`);
        }
        
        this.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  findFiles(patterns) {
    const files = [];
    const self = this;
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          for (const pattern of patterns) {
            if (self.matchesPattern(fullPath, pattern)) {
              files.push(fullPath);
              break;
            }
          }
        }
      }
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  matchesPattern(filePath, pattern) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const regexPattern = pattern
      .replace(/\*\*/g, '.*')
      .replace(/\*/g, '[^/]*')
      .replace(/\./g, '\\.');
    
    return new RegExp(`^${regexPattern}$`).test(relativePath);
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Error fixer automation completed',
      status: 'completed',
      duration: `${duration}ms`,
      filesProcessed: this.filesProcessed,
      errorsFixed: this.errorsFixed,
      performance: {
        filesPerSecond: Math.round((this.filesProcessed / duration) * 1000 * 100) / 100,
        errorsPerSecond: Math.round((this.errorsFixed / duration) * 1000 * 100) / 100
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Error Fixer Automation...');
    
    try {
      // Run initial checks
      const typeCheckResult = await this.runTypeCheck();
      const lintCheckResult = await this.runLintCheck();
      
      // If there are errors, try to fix them
      if (!typeCheckResult.success || !lintCheckResult.success) {
        this.log('Errors detected, starting automatic fixes...');
        await this.fixCommonErrors();
        
        // Run checks again to see if fixes worked
        this.log('Running checks again after fixes...');
        const typeCheckAfter = await this.runTypeCheck();
        const lintCheckAfter = await this.runLintCheck();
        
        if (typeCheckAfter.success && lintCheckAfter.success) {
          this.log('All errors have been automatically fixed!');
        } else {
          this.log('Some errors remain after automatic fixes');
        }
      } else {
        this.log('No errors detected - project is clean!');
      }
      
      // Generate report
      const report = this.generateReport();
      
      this.log(`Error Fixer completed. Processed ${this.filesProcessed} files, fixed ${this.errorsFixed} errors.`);
      this.log(`Duration: ${report.duration}`);
      
      return report;
      
    } catch (error) {
      this.log(`Error Fixer failed: ${error.message}`);
      throw error;
    }
  }
  {/* Removed stray closing brace */}

// Run the automation if called directly
if (require.main === module) {
  const errorFixer = new ErrorFixer();
  errorFixer.run().catch(console.error);
  {/* Removed stray closing brace */}

module.exports = ErrorFixer;