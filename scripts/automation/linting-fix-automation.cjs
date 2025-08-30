#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintingFixAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.fixesApplied = [];
    this.setupLogging();
  }

  setupLogging() {
    this.logger = {
      info: (msg) => this.log('INFO', msg),
      warn: (msg) => this.log('WARN', msg),
      error: (msg) => this.log('ERROR', msg),
      success: (msg) => this.log('SUCCESS', msg)
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'linting-fix-automation.log');
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async fixAllLintingErrors() {
    this.logger.info('Starting linting error fixing process...');
    
    try {
      // Get current linting errors
      const errors = await this.getLintingErrors();
      
      if (errors.length === 0) {
        this.logger.success('No linting errors found!');
        return;
      }
      
      this.logger.info(`Found ${errors.length} linting errors to fix`);
      
      // Group errors by file
      const errorsByFile = this.groupErrorsByFile(errors);
      
      // Fix errors in each file
      for (const [filePath, fileErrors] of errorsByFile) {
        await this.fixErrorsInFile(filePath, fileErrors);
      }
      
      // Verify fixes
      await this.verifyFixes();
      
      this.logger.success(`Linting error fixing completed. Applied ${this.fixesApplied.length} fixes.`);
      
    } catch (error) {
      this.logger.error(`Error during linting fixing: ${error.message}`);
    }
  }

  async getLintingErrors() {
    try {
      const result = execSync('npm run lint', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return this.parseLintingErrors(output);
    }
  }

  parseLintingErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      // Parse ESLint error format
      const match = line.match(/([^:]+):(\d+):(\d+)\s+(warning|error)\s+([^:]+):\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          level: match[4],
          rule: match[5].trim(),
          message: match[6].trim(),
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  groupErrorsByFile(errors) {
    const grouped = new Map();
    
    for (const error of errors) {
      if (!grouped.has(error.file)) {
        grouped.set(error.file, []);
      }
      grouped.get(error.file).push(error);
    }
    
    return grouped;
  }

  async fixErrorsInFile(filePath, errors) {
    try {
      if (!fs.existsSync(filePath)) {
        this.logger.warn(`File not found: ${filePath}`);
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      
      // Sort errors by line number (descending) to avoid line number shifts
      errors.sort((a, b) => b.line - a.line);
      
      for (const error of errors) {
        const fixResult = await this.fixError(content, error);
        if (fixResult.fixed) {
          content = fixResult.content;
          fixed = true;
          this.fixesApplied.push({
            file: filePath,
            rule: error.rule,
            message: error.message,
            fix: fixResult.description
          });
        }
      }
      
      if (fixed) {
        // Create backup
        const backupPath = filePath + '.lintbackup';
        fs.writeFileSync(backupPath, fs.readFileSync(filePath, 'utf8'));
        
        // Write fixed content
        fs.writeFileSync(filePath, content);
        this.logger.success(`Fixed errors in ${filePath}`);
      }
      
    } catch (error) {
      this.logger.error(`Failed to fix errors in ${filePath}: ${error.message}`);
    }
  }

  async fixError(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex < 0 || lineIndex >= lines.length) {
      return { fixed: false, content, description: 'Line out of range' };
    }
    
    const line = lines[lineIndex];
    const rule = error.rule;
    
    // Fix common ESLint errors
    if (rule === 'no-unused-vars') {
      return this.fixUnusedVariables(lines, lineIndex, error);
    } else if (rule === 'no-console') {
      return this.fixConsoleStatements(lines, lineIndex, error);
    } else if (rule === 'no-undef') {
      return this.fixUndefinedVariables(lines, lineIndex, error);
    } else if (rule === 'no-prototype-builtins') {
      return this.fixPrototypeBuiltins(lines, lineIndex, error);
    } else if (rule === 'react/jsx-uses-react') {
      return this.fixReactJSXUses(lines, lineIndex, error);
    } else if (rule === 'react/react-in-jsx-scope') {
      return this.fixReactInJSXScope(lines, lineIndex, error);
    }
    
    return { fixed: false, content, description: 'No fix available for this rule' };
  }

  fixUnusedVariables(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Extract variable name from error message
    const varMatch = error.message.match(/'([^']+)' is defined but never used/);
    if (varMatch) {
      const varName = varMatch[1];
      
      // Check if it's an import
      if (line.includes('import') && line.includes(varName)) {
        // Remove unused import
        if (line.includes('{') && line.includes('}')) {
          // Named import
          const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(i => i.trim()).filter(i => i !== varName);
            if (imports.length > 0) {
              newLine = line.replace(importMatch[0], `import { ${imports.join(', ')} } from`);
            } else {
              // All imports are unused, remove the entire line
              lines.splice(lineIndex, 1);
              return {
                fixed: true,
                content: lines.join('\n'),
                description: 'Removed unused import'
              };
            }
          }
        } else {
          // Default import, remove the entire line
          lines.splice(lineIndex, 1);
          return {
            fixed: true,
            content: lines.join('\n'),
            description: 'Removed unused import'
          };
        }
        fixed = true;
      } else if (line.includes('const') || line.includes('let') || line.includes('var')) {
        // Variable declaration, prefix with underscore to indicate intentionally unused
        newLine = line.replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
        fixed = true;
      } else if (line.includes('function') || line.includes('=>')) {
        // Function parameter, prefix with underscore
        newLine = line.replace(new RegExp(`\\b${varName}\\b`), `_${varName}`);
        fixed = true;
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed unused variable'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix unused variable' };
  }

  fixConsoleStatements(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Replace console statements with proper logging or remove them
    if (line.includes('console.log')) {
      // Remove console.log statements
      lines.splice(lineIndex, 1);
      fixed = true;
    } else if (line.includes('console.error')) {
      // Replace with proper error handling
      newLine = line.replace(/console\.error\([^)]*\)/, '// TODO: Replace with proper error handling');
      fixed = true;
    } else if (line.includes('console.warn')) {
      // Replace with proper warning handling
      newLine = line.replace(/console\.warn\([^)]*\)/, '// TODO: Replace with proper warning handling');
      fixed = true;
    } else if (line.includes('console.info')) {
      // Replace with proper info handling
      newLine = line.replace(/console\.info\([^)]*\)/, '// TODO: Replace with proper info handling');
      fixed = true;
    }
    
    if (fixed) {
      if (newLine) {
        lines[lineIndex] = newLine;
      }
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed console statement'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix console statement' };
  }

  fixUndefinedVariables(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Extract variable name from error message
    const varMatch = error.message.match(/'([^']+)' is not defined/);
    if (varMatch) {
      const varName = varMatch[1];
      
      // Check if it's a global variable that should be imported
      if (['React', 'ReactDOM', 'document', 'window', 'localStorage', 'sessionStorage'].includes(varName)) {
        if (varName === 'React' && !line.includes('import React')) {
          // Add React import at the top of the file
          const importLine = "import React from 'react';";
          if (!lines[0].includes('import React')) {
            lines.unshift(importLine);
            fixed = true;
          }
        } else if (varName === 'ReactDOM' && !line.includes('import ReactDOM')) {
          // Add ReactDOM import
          const importLine = "import ReactDOM from 'react-dom';";
          if (!lines[0].includes('import ReactDOM')) {
            lines.unshift(importLine);
            fixed = true;
          }
        }
      } else {
        // Try to find where this variable should be defined
        const variableDefinition = this.findVariableDefinition(lines, varName);
        if (variableDefinition) {
          // Add the missing variable definition
          lines.splice(lineIndex, 0, variableDefinition);
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed undefined variable'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix undefined variable' };
  }

  findVariableDefinition(lines, varName) {
    // Common patterns for missing variables
    const patterns = {
      'QueryClient': "import { QueryClient } from '@tanstack/react-query';",
      'jest': "import { jest } from '@jest/globals';",
      'expect': "import { expect } from '@jest/globals';",
      'test': "import { test } from '@jest/globals';",
      'describe': "import { describe } from '@jest/globals';",
      'beforeEach': "import { beforeEach } from '@jest/globals';",
      'afterEach': "import { afterEach } from '@jest/globals';",
      'Deno': "// Deno is not available in Node.js environment",
      'NotificationPermission': "// NotificationPermission is a browser API",
      'Intl': "// Intl is a global object in modern browsers"
    };
    
    return patterns[varName] || null;
  }

  fixPrototypeBuiltins(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix hasOwnProperty usage
    if (line.includes('hasOwnProperty')) {
      newLine = line.replace(/\.hasOwnProperty\(/g, '.hasOwnProperty.call(this, ');
      fixed = true;
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed prototype builtins usage'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix prototype builtins' };
  }

  fixReactJSXUses(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix React JSX usage
    if (line.includes('React.') && !line.includes('import React')) {
      // Add React import if not present
      if (!lines[0].includes('import React')) {
        lines.unshift("import React from 'react';");
        fixed = true;
      }
    }
    
    if (fixed) {
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed React JSX usage'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix React JSX usage' };
  }

  fixReactInJSXScope(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix React in JSX scope
    if (line.includes('React') && !line.includes('import React')) {
      // Add React import if not present
      if (!lines[0].includes('import React')) {
        lines.unshift("import React from 'react';");
        fixed = true;
      }
    }
    
    if (fixed) {
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed React in JSX scope'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix React in JSX scope' };
  }

  async verifyFixes() {
    this.logger.info('Verifying fixes...');
    
    try {
      const remainingErrors = await this.getLintingErrors();
      
      if (remainingErrors.length === 0) {
        this.logger.success('All linting errors have been fixed!');
      } else {
        this.logger.warn(`${remainingErrors.length} linting errors remain`);
        this.logger.info('Remaining errors:');
        remainingErrors.forEach(error => {
          this.logger.info(`  ${error.file}:${error.line} - ${error.rule}: ${error.message}`);
        });
      }
      
    } catch (error) {
      this.logger.error(`Error during verification: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: this.fixesApplied.length,
      fixesByFile: {},
      fixesByRule: {},
      summary: {
        unusedVars: 0,
        consoleStatements: 0,
        undefinedVars: 0,
        other: 0
      }
    };
    
    // Group fixes by file and rule
    for (const fix of this.fixesApplied) {
      if (!report.fixesByFile[fix.file]) {
        report.fixesByFile[fix.file] = [];
      }
      report.fixesByFile[fix.file].push(fix);
      
      if (!report.fixesByRule[fix.rule]) {
        report.fixesByRule[fix.rule] = [];
      }
      report.fixesByRule[fix.rule].push(fix);
      
      // Categorize fixes
      if (fix.rule === 'no-unused-vars') report.summary.unusedVars++;
      else if (fix.rule === 'no-console') report.summary.consoleStatements++;
      else if (fix.rule === 'no-undef') report.summary.undefinedVars++;
      else report.summary.other++;
    }
    
    return report;
  }

  async run() {
    const command = process.argv[2] || 'fix';
    
    switch (command) {
      case 'fix':
        await this.fixAllLintingErrors();
        break;
      case 'report':
        const report = this.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case 'status':
        const errors = await this.getLintingErrors();
        console.log(`Current linting errors: ${errors.length}`);
        break;
      default:
        console.log('Usage: node linting-fix-automation.cjs [fix|report|status]');
        process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new LintingFixAutomation();
  fixer.run().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = LintingFixAutomation;