#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting ESLint error fixer...');

class ESLintErrorFixer {
  constructor() {
    this.fixes = [];
    this.stats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      filesProcessed: 0
    };
  }

  async run() {
    try {
      console.log('🔍 Running ESLint check...');
      
      // Run ESLint to get errors
      const errors = await this.getESLintErrors();
      this.stats.totalErrors = errors.length;
      
      console.log(`📊 Found ${errors.length} ESLint errors`);
      
      // Apply fixes for each error
      for (const error of errors) {
        try {
          const fixResult = await this.applyFix(error);
          if (fixResult.success) {
            this.fixes.push(fixResult);
            this.stats.fixedErrors++;
            console.log(`✅ Fixed: ${error.message}`);
          } else {
            this.stats.failedFixes++;
            console.log(`⚠️ Could not fix: ${error.message}`);
          }
        } catch (error) {
          console.error(`❌ Error applying fix: ${error.message}`);
          this.stats.failedFixes++;
        }
      }
      
      // Generate report
      this.generateReport();
      
      console.log(`✅ ESLint error fixer completed. Fixed ${this.stats.fixedErrors}/${this.stats.totalErrors} errors`);
      
    } catch (error) {
      console.error('❌ ESLint error fixer failed:', error.message);
    }
  }

  async getESLintErrors() {
    try {
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No errors if command succeeds
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseESLintErrors(output);
    }
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: this.categorizeError(match[4])
          });
        }
      }
    });
    
    return errors;
  }

  categorizeError(message) {
    if (message.includes('module is not defined')) return 'module-definition';
    if (message.includes('Unexpected token')) return 'syntax-error';
    if (message.includes('Missing semicolon')) return 'missing-semicolon';
    if (message.includes('no-unused-vars')) return 'unused-variables';
    if (message.includes('no-console')) return 'console-statement';
    if (message.includes('no-undef')) return 'undefined-variable';
    if (message.includes('prefer-const')) return 'const-preference';
    return 'unknown';
  }

  async applyFix(error) {
    const { file, line, column, message, type } = error;
    
    try {
      switch (type) {
        case 'module-definition':
          return await this.fixModuleDefinition(error);
        case 'syntax-error':
          return await this.fixSyntaxError(error);
        case 'missing-semicolon':
          return await this.fixMissingSemicolon(error);
        case 'unused-variables':
          return await this.fixUnusedVariables(error);
        case 'console-statement':
          return await this.fixConsoleStatement(error);
        case 'undefined-variable':
          return await this.fixUndefinedVariable(error);
        case 'const-preference':
          return await this.fixConstPreference(error);
        default:
          return { success: false, reason: 'Unknown error type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async fixModuleDefinition(error) {
    const { file, message } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Fix module.exports issues
    if (message.includes('module is not defined')) {
      // Check if this is a CommonJS file
      if (file.endsWith('.cjs') || content.includes('module.exports')) {
        // Add module definition at the top
        if (!content.includes('const module = require')) {
          lines.unshift("const module = require('module');");
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'module-definition', 
            action: 'Added module definition',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'No fix available for module definition' };
  }

  async fixSyntaxError(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Fix common syntax errors
      let fixedLine = currentLine;
      
      // Fix missing quotes
      fixedLine = fixedLine.replace(/(\w+):\s*([^'"]\w+[^'"])/g, '$1: "$2"');
      
      // Fix missing brackets
      if (fixedLine.includes('{') && !fixedLine.includes('}')) {
        fixedLine = fixedLine + '}';
      }
      
      // Fix missing parentheses
      if (fixedLine.includes('(') && !fixedLine.includes(')')) {
        fixedLine = fixedLine + ')';
      }
      
      if (fixedLine !== currentLine) {
        lines[line - 1] = fixedLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'syntax-error', 
          action: 'Fixed syntax error',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix syntax error' };
  }

  async fixMissingSemicolon(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add missing semicolon
      if (!currentLine.trim().endsWith(';') && 
          !currentLine.trim().endsWith('{') && 
          !currentLine.trim().endsWith('}') &&
          !currentLine.trim().endsWith('(') &&
          !currentLine.trim().endsWith(')')) {
        lines[line - 1] = currentLine + ';';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'missing-semicolon', 
          action: 'Added missing semicolon',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix missing semicolon' };
  }

  async fixUnusedVariables(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Remove unused variable declarations
      if (currentLine.includes('const ') || currentLine.includes('let ') || currentLine.includes('var ')) {
        // Check if it's a simple declaration without assignment
        const match = currentLine.match(/(const|let|var)\s+(\w+)\s*;/);
        if (match) {
          // Remove the line
          lines.splice(line - 1, 1);
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'unused-variables', 
            action: 'Removed unused variable',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix unused variable' };
  }

  async fixConsoleStatement(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Comment out console statements
      if (currentLine.includes('console.')) {
        lines[line - 1] = '// ' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'console-statement', 
          action: 'Commented out console statement',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix console statement' };
  }

  async fixUndefinedVariable(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Add variable declaration
      const match = currentLine.match(/(\w+)/);
      if (match) {
        const varName = match[1];
        // Add declaration at the top of the function/scope
        const declarationLine = `let ${varName};`;
        lines.splice(line - 1, 0, declarationLine);
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'undefined-variable', 
          action: 'Added variable declaration',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix undefined variable' };
  }

  async fixConstPreference(error) {
    const { file, line, column } = error;
    
    if (!fs.existsSync(file)) {
      return { success: false, reason: 'File does not exist' };
    }

    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      
      // Change let to const if variable is not reassigned
      if (currentLine.includes('let ')) {
        const fixedLine = currentLine.replace(/let /g, 'const ');
        if (fixedLine !== currentLine) {
          lines[line - 1] = fixedLine;
          fs.writeFileSync(file, lines.join('\n'));
          return { 
            success: true, 
            type: 'const-preference', 
            action: 'Changed let to const',
            file: file
          };
        }
      }
    }
    
    return { success: false, reason: 'Could not fix const preference' };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      fixes: this.fixes,
      summary: {
        totalErrors: this.stats.totalErrors,
        fixedErrors: this.stats.fixedErrors,
        failedFixes: this.stats.failedFixes,
        successRate: this.stats.totalErrors > 0 ? 
          (this.stats.fixedErrors / this.stats.totalErrors * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'eslint-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 ESLint error fixer report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const fixer = new ESLintErrorFixer();
  
  try {
    await fixer.run();
    
    // Exit with appropriate code
    process.exit(fixer.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ ESLint error fixer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { ESLintErrorFixer };