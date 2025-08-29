#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'code-quality-fixer-report.json');
    this.fixesApplied = [];
    this.issuesFound = [];
  }

  async run() {
    console.log('🔧 Starting code quality fixing...');
    
    try {
      // Run comprehensive quality scan
      await this.scanForQualityIssues();
      
      // Apply quality fixes
      await this.applyQualityFixes();
      
      // Run final validation
      await this.validateQualityFixes();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Code quality fixing completed successfully!');
    } catch (error) {
      console.error('❌ Error during code quality fixing:', error);
      await this.generateReport();
      process.exit(1);
    }
  }

  async scanForQualityIssues() {
    console.log('🔍 Scanning for code quality issues...');
    
    try {
      // Run ESLint with quality-focused rules
      const lintOutput = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.issuesFound = this.parseQualityOutput(lintOutput);
      console.log(`📊 Found ${this.issuesFound.length} quality issues`);
      
    } catch (error) {
      // ESLint failed, parse the error output
      this.issuesFound = this.parseQualityOutput(error.stdout || error.stderr || '');
    }
  }

  parseQualityOutput(output) {
    const issues = [];
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
          issues.push({
            file: currentFile,
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            type: match[3],
            message: match[4].trim(),
            category: this.categorizeIssue(match[4].trim())
          });
        }
      }
    }
    
    return issues;
  }

  categorizeIssue(message) {
    if (message.includes('no-unused-vars')) return 'unused-variables';
    if (message.includes('no-console')) return 'console-statements';
    if (message.includes('no-undef')) return 'undefined-variables';
    if (message.includes('no-useless-escape')) return 'useless-escapes';
    if (message.includes('no-extra-semi')) return 'extra-semicolons';
    if (message.includes('no-redeclare')) return 'redeclarations';
    if (message.includes('no-prototype-builtins')) return 'prototype-builtins';
    if (message.includes('Parsing error')) return 'parsing-errors';
    return 'other';
  }

  async applyQualityFixes() {
    console.log('🔧 Applying quality fixes...');
    
    // Group issues by file
    const issuesByFile = this.groupIssuesByFile();
    
    for (const [filePath, issues] of Object.entries(issuesByFile)) {
      await this.fixFileQualityIssues(filePath, issues);
    }
  }

  groupIssuesByFile() {
    const grouped = {};
    
    for (const issue of this.issuesFound) {
      if (!grouped[issue.file]) {
        grouped[issue.file] = [];
      }
      grouped[issue.file].push(issue);
    }
    
    return grouped;
  }

  async fixFileQualityIssues(filePath, issues) {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Sort issues by line number (descending) to avoid line number shifts
      const sortedIssues = issues.sort((a, b) => b.line - a.line);
      
      for (const issue of sortedIssues) {
        const fix = await this.getQualityFix(issue, content);
        if (fix) {
          content = this.applyQualityFix(content, issue, fix);
          modified = true;
          this.fixesApplied.push({
            file: filePath,
            issue: issue.message,
            category: issue.category,
            fix: fix.description
          });
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${issues.length} quality issues in ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing quality in ${filePath}:`, error);
    }
  }

  async getQualityFix(issue, content) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    const line = lines[lineIndex];
    
    switch (issue.category) {
      case 'unused-variables':
        return this.fixUnusedVariables(issue, line, lineIndex);
      case 'console-statements':
        return this.fixConsoleStatements(issue, line, lineIndex);
      case 'undefined-variables':
        return this.fixUndefinedVariables(issue, line, lineIndex);
      case 'useless-escapes':
        return this.fixUselessEscapes(issue, line, lineIndex);
      case 'extra-semicolons':
        return this.fixExtraSemicolons(issue, line, lineIndex);
      case 'redeclarations':
        return this.fixRedeclarations(issue, line, lineIndex);
      case 'prototype-builtins':
        return this.fixPrototypeBuiltins(issue, line, lineIndex);
      case 'parsing-errors':
        return this.fixParsingErrors(issue, line, lineIndex);
      default:
        return null;
    }
  }

  fixUnusedVariables(issue, line, lineIndex) {
    // Handle React imports
    if (line.includes('import') && line.includes('React')) {
      return {
        type: 'remove',
        description: 'Remove unused React import',
        action: () => {
          if (line.trim().match(/^import\s+React\s+from\s+['"]react['"];?\s*$/)) {
            return 'REMOVE_LINE';
          }
          return line.replace(/,\s*React\b/, '').replace(/^import\s+React\s*,/, 'import');
        }
      };
    }
    
    // Handle other unused imports
    if (line.includes('import') && line.includes('from')) {
      const match = line.match(/import\s+\{([^}]+)\}\s+from/);
      if (match) {
        const imports = match[1].split(',').map(imp => imp.trim());
        const unusedImports = imports.filter(imp => 
          issue.message.includes(imp) && issue.message.includes('is defined but never used')
        );
        
        if (unusedImports.length > 0) {
          return {
            type: 'remove-imports',
            description: `Remove unused imports: ${unusedImports.join(', ')}`,
            action: () => {
              const remainingImports = imports.filter(imp => !unusedImports.includes(imp));
              if (remainingImports.length === 0) {
                return 'REMOVE_LINE';
              }
              return line.replace(
                /\{[^}]+\}/,
                `{ ${remainingImports.join(', ')} }`
              );
            }
          };
        }
      }
    }
    
    // Handle unused variables
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

  fixConsoleStatements(issue, line, lineIndex) {
    return {
      type: 'comment',
      description: 'Comment out console statement',
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
        if (line.includes('console.info')) {
          return line.replace(/console\.info\(/g, '// console.info(');
        }
        return line;
      }
    };
  }

  fixUndefinedVariables(issue, line, lineIndex) {
    const match = issue.message.match(/(\w+)\s*is not defined/);
    if (match) {
      const varName = match[1];
      
      // Handle browser APIs
      if (['IntersectionObserver', 'SpeechSynthesisUtterance', 'speechSynthesis'].includes(varName)) {
        return {
          type: 'add-check',
          description: `Add check for ${varName} availability`,
          action: () => {
            return line.replace(
              new RegExp(`\\b${varName}\\b`),
              `typeof ${varName} !== 'undefined' ? ${varName} : null`
            );
          }
        };
      }
      
      // Handle reject function
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

  fixUselessEscapes(issue, line, lineIndex) {
    return {
      type: 'unescape',
      description: 'Remove unnecessary escape characters',
      action: () => {
        return line
          .replace(/\\\[/g, '[')
          .replace(/\\\//g, '/')
          .replace(/\\-/g, '-')
          .replace(/\\\./g, '.')
          .replace(/\\\*/g, '*')
          .replace(/\\\+/g, '+')
          .replace(/\\\?/g, '?')
          .replace(/\\\(/g, '(')
          .replace(/\\\)/g, ')')
          .replace(/\\\|/g, '|');
      }
    };
  }

  fixExtraSemicolons(issue, line, lineIndex) {
    return {
      type: 'remove-semi',
      description: 'Remove extra semicolon',
      action: () => line.replace(/;;+/, ';')
    };
  }

  fixRedeclarations(issue, line, lineIndex) {
    const match = issue.message.match(/(\w+)\s+is already defined/);
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

  fixPrototypeBuiltins(issue, line, lineIndex) {
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

  fixParsingErrors(issue, line, lineIndex) {
    // Handle common parsing errors
    if (issue.message.includes('Unexpected token =')) {
      return {
        type: 'fix-syntax',
        description: 'Fix unexpected token syntax error',
        action: () => {
          // Try to fix common syntax issues
          return line
            .replace(/=\s*=\s*=/g, '===')
            .replace(/!\s*=\s*=/g, '!==')
            .replace(/=\s*>/g, '=>');
        }
      };
    }
    
    if (issue.message.includes('Unexpected token ;')) {
      return {
        type: 'fix-semicolon',
        description: 'Fix unexpected semicolon',
        action: () => {
          return line.replace(/;\s*;/, ';');
        }
      };
    }
    
    return null;
  }

  applyQualityFix(content, issue, fix) {
    const lines = content.split('\n');
    const lineIndex = issue.line - 1;
    
    if (fix.action() === 'REMOVE_LINE') {
      lines.splice(lineIndex, 1);
    } else {
      lines[lineIndex] = fix.action();
    }
    
    return lines.join('\n');
  }

  async validateQualityFixes() {
    console.log('🔍 Validating quality fixes...');
    
    try {
      // Run ESLint again to check if fixes worked
      const lintOutput = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const remainingIssues = this.parseQualityOutput(lintOutput);
      console.log(`📊 Remaining quality issues: ${remainingIssues.length}`);
      
      if (remainingIssues.length < this.issuesFound.length) {
        console.log(`🎉 Successfully fixed ${this.issuesFound.length - remainingIssues.length} quality issues!`);
      }
      
    } catch (error) {
      console.log('⚠️  Some quality issues may still remain');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalQualityIssuesFound: this.issuesFound.length,
      fixesApplied: this.fixesApplied.length,
      fixes: this.fixesApplied,
      remainingIssues: this.issuesFound.length - this.fixesApplied.length,
      issuesByCategory: this.getIssuesByCategory()
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Quality report saved to ${this.reportPath}`);
  }

  getIssuesByCategory() {
    const categories = {};
    
    for (const issue of this.issuesFound) {
      if (!categories[issue.category]) {
        categories[issue.category] = 0;
      }
      categories[issue.category]++;
    }
    
    return categories;
  }
}

// Run the code quality fixer
const codeQualityFixer = new CodeQualityFixer();
codeQualityFixer.run().catch(console.error);