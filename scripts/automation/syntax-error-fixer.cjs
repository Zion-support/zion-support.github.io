#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting syntax error fixer...');

class SyntaxErrorFixer {
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
      console.log('🔍 Scanning for syntax errors...');
      
      // Scan files for syntax errors
      const errors = await this.scanForSyntaxErrors();
      this.stats.totalErrors = errors.length;
      
      console.log(`📊 Found ${errors.length} syntax errors`);
      
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
      
      console.log(`✅ Syntax error fixer completed. Fixed ${this.stats.fixedErrors}/${this.stats.totalErrors} errors`);
      
    } catch (error) {
      console.error('❌ Syntax error fixer failed:', error.message);
    }
  }

  async scanForSyntaxErrors() {
    const errors = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}', 'scripts/**/*.{js,cjs}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const fileErrors = this.checkFileSyntax(file, content);
          errors.push(...fileErrors);
        } catch (error) {
          console.warn(`⚠️ Could not read file: ${file}`);
        }
      }
    }
    
    return errors;
  }

  glob(pattern) {
    const glob = require('glob');
    return glob.sync(pattern, { 
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
      absolute: true 
    });
  }

  checkFileSyntax(file, content) {
    const errors = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      // Check for common syntax errors
      if (this.hasSyntaxError(line)) {
        errors.push({
          file: file,
          line: index + 1,
          column: 0,
          message: `Syntax error detected: ${this.getSyntaxErrorType(line)}`,
          type: this.getSyntaxErrorType(line)
        });
      }
    });
    
    return errors;
  }

  hasSyntaxError(line) {
    // Check for common syntax issues
    return (
      line.includes('{{') && !line.includes('}}') ||
      line.includes('}}') && !line.includes('{{') ||
      line.includes('(') && !line.includes(')') ||
      line.includes(')') && !line.includes('(') ||
      line.includes('{') && !line.includes('}') ||
      line.includes('}') && !line.includes('{') ||
      line.includes('[') && !line.includes(']') ||
      line.includes(']') && !line.includes('[')
    );
  }

  getSyntaxErrorType(line) {
    if (line.includes('{{') && !line.includes('}}')) return 'unclosed-template';
    if (line.includes('}}') && !line.includes('{{')) return 'unopened-template';
    if (line.includes('(') && !line.includes(')')) return 'unclosed-parentheses';
    if (line.includes(')') && !line.includes('(')) return 'unopened-parentheses';
    if (line.includes('{') && !line.includes('}')) return 'unclosed-braces';
    if (line.includes('}') && !line.includes('{')) return 'unopened-braces';
    if (line.includes('[') && !line.includes(']')) return 'unclosed-brackets';
    if (line.includes(']') && !line.includes('[')) return 'unopened-brackets';
    return 'unknown';
  }

  async applyFix(error) {
    const { file, line, column, message, type } = error;
    
    try {
      switch (type) {
        case 'unclosed-template':
          return await this.fixUnclosedTemplate(error);
        case 'unopened-template':
          return await this.fixUnopenedTemplate(error);
        case 'unclosed-parentheses':
          return await this.fixUnclosedParentheses(error);
        case 'unopened-parentheses':
          return await this.fixUnopenedParentheses(error);
        case 'unclosed-braces':
          return await this.fixUnclosedBraces(error);
        case 'unopened-braces':
          return await this.fixUnopenedBraces(error);
        case 'unclosed-brackets':
          return await this.fixUnclosedBrackets(error);
        case 'unopened-brackets':
          return await this.fixUnopenedBrackets(error);
        default:
          return { success: false, reason: 'Unknown error type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async fixUnclosedTemplate(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('{{') && !currentLine.includes('}}')) {
        lines[line - 1] = currentLine + '}}';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unclosed-template', 
          action: 'Added closing template braces',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unclosed template' };
  }

  async fixUnopenedTemplate(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('}}') && !currentLine.includes('{{')) {
        lines[line - 1] = '{{' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unopened-template', 
          action: 'Added opening template braces',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unopened template' };
  }

  async fixUnclosedParentheses(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('(') && !currentLine.includes(')')) {
        lines[line - 1] = currentLine + ')';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unclosed-parentheses', 
          action: 'Added closing parenthesis',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unclosed parentheses' };
  }

  async fixUnopenedParentheses(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes(')') && !currentLine.includes('(')) {
        lines[line - 1] = '(' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unopened-parentheses', 
          action: 'Added opening parenthesis',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unopened parentheses' };
  }

  async fixUnclosedBraces(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('{') && !currentLine.includes('}')) {
        lines[line - 1] = currentLine + '}';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unclosed-braces', 
          action: 'Added closing brace',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unclosed braces' };
  }

  async fixUnopenedBraces(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('}') && !currentLine.includes('{')) {
        lines[line - 1] = '{' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unopened-braces', 
          action: 'Added opening brace',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unopened braces' };
  }

  async fixUnclosedBrackets(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes('[') && !currentLine.includes(']')) {
        lines[line - 1] = currentLine + ']';
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unclosed-brackets', 
          action: 'Added closing bracket',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unclosed brackets' };
  }

  async fixUnopenedBrackets(error) {
    const { file, line } = error;
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    if (line > 0 && line <= lines.length) {
      const currentLine = lines[line - 1];
      if (currentLine.includes(']') && !currentLine.includes('[')) {
        lines[line - 1] = '[' + currentLine;
        fs.writeFileSync(file, lines.join('\n'));
        return { 
          success: true, 
          type: 'unopened-brackets', 
          action: 'Added opening bracket',
          file: file
        };
      }
    }
    
    return { success: false, reason: 'Could not fix unopened brackets' };
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

    const reportPath = path.join(process.cwd(), 'syntax-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Syntax error fixer report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const fixer = new SyntaxErrorFixer();
  
  try {
    await fixer.run();
    
    // Exit with appropriate code
    process.exit(fixer.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Syntax error fixer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { SyntaxErrorFixer };