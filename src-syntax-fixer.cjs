#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SrcSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async findSrcFilesWithErrors() {
    this.log('🔍 Finding src files with syntax errors...', 'PROGRESS');
    
    try {
      const result = execSync('npx eslint src --max-warnings 0 --format json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr;
      try {
        const eslintOutput = JSON.parse(output);
        return eslintOutput;
      } catch (parseError) {
        // If not JSON, extract file paths from text output
        const lines = output.split('\n');
        const files = new Set();
        
        lines.forEach(line => {
          const match = line.match(/^\.\/([^:]+):/);
          if (match) {
            files.add(match[1]);
          }
        });
        
        return Array.from(files).map(file => ({
          filePath: file,
          messages: [{ severity: 2, message: 'Syntax error detected' }]
        }));
      }
    }
  }

  async fixFile(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      if (!fs.existsSync(fullPath)) {
        this.log(`File not found: ${filePath}`, 'WARNING');
        return false;
      }

      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      let fixed = false;

      // Fix common syntax errors
      
      // 1. Fix unterminated string literals
      const unterminatedStringRegex = /(['"`])([^'"`]*?)(?=\n|$)/g;
      content = content.replace(unterminatedStringRegex, (match, quote, str) => {
        if (!str.includes(quote)) {
          fixed = true;
          return match + quote;
        }
        return match;
      });

      // 2. Fix missing semicolons
      const missingSemicolonRegex = /([^;{}])\n\s*([a-zA-Z_$])/g;
      content = content.replace(missingSemicolonRegex, (match, before, after) => {
        if (!before.includes(';') && !before.includes('{') && !before.includes('}')) {
          fixed = true;
          return before + ';\n' + after;
        }
        return match;
      });

      // 3. Fix JSX expressions without parent element
      const jsxWithoutParentRegex = /^(\s*)(<[^>]+>.*<\/[^>]+>)\s*$/gm;
      content = content.replace(jsxWithoutParentRegex, (match, indent, jsx) => {
        if (!jsx.includes('<>') && !jsx.includes('<React.Fragment>')) {
          fixed = true;
          return `${indent}<>\n${indent}  ${jsx}\n${indent}</>`;
        }
        return match;
      });

      // 4. Fix merge conflict markers
      const mergeConflictRegex = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g;
      content = content.replace(mergeConflictRegex, (match) => {
        fixed = true;
        // Keep the HEAD version (first part)
        const parts = match.split('=======')[0].replace('<<<<<<< HEAD', '').trim();
        return parts;
      });

      // 5. Fix missing closing tags
      const unclosedTagRegex = /<([a-zA-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)[\s\S]*?$/g;
      content = content.replace(unclosedTagRegex, (match, tagName) => {
        if (!match.includes('</' + tagName + '>')) {
          fixed = true;
          return match + `</${tagName}>`;
        }
        return match;
      });

      // 6. Fix property assignment issues
      const propertyAssignmentRegex = /(\w+)\s*:\s*([^,}]+)(?=\s*[,}])/g;
      content = content.replace(propertyAssignmentRegex, (match, prop, value) => {
        if (value.includes('{') && !value.includes('}')) {
          fixed = true;
          return `${prop}: ${value}}`;
        }
        return match;
      });

      // 7. Fix missing commas in objects
      const missingCommaRegex = /(\w+)\s*:\s*[^,}]+(?=\s*\w+\s*:)/g;
      content = content.replace(missingCommaRegex, (match) => {
        if (!match.includes(',')) {
          fixed = true;
          return match + ',';
        }
        return match;
      });

      // 8. Fix expression expected errors
      const expressionExpectedRegex = /(\w+)\s*=\s*([^=]+)(?=\s*[a-zA-Z_$])/g;
      content = content.replace(expressionExpectedRegex, (match, varName, value) => {
        if (!value.includes(';') && !value.includes(',')) {
          fixed = true;
          return `${varName} = ${value};`;
        }
        return match;
      });

      // 9. Fix unterminated regular expressions
      const unterminatedRegexRegex = /\/([^/\n]+)(?=\n|$)/g;
      content = content.replace(unterminatedRegexRegex, (match, pattern) => {
        if (!pattern.includes('/')) {
          fixed = true;
          return `/${pattern}/`;
        }
        return match;
      });

      // 10. Fix missing parentheses in function calls
      const missingParensRegex = /(\w+)\s*\([^)]*$/g;
      content = content.replace(missingParensRegex, (match) => {
        if (!match.includes(')')) {
          fixed = true;
          return match + ')';
        }
        return match;
      });

      // 11. Fix missing closing braces
      const missingBracesRegex = /\{([^}]*)$/g;
      content = content.replace(missingBracesRegex, (match, content) => {
        if (!content.includes('}')) {
          fixed = true;
          return match + '}';
        }
        return match;
      });

      // 12. Fix missing closing brackets
      const missingBracketsRegex = /\[([^\]]*)$/g;
      content = content.replace(missingBracketsRegex, (match, content) => {
        if (!content.includes(']')) {
          fixed = true;
          return match + ']';
        }
        return match;
      });

      // 13. Fix missing closing parentheses
      const missingParenthesesRegex = /\(([^)]*)$/g;
      content = content.replace(missingParenthesesRegex, (match, content) => {
        if (!content.includes(')')) {
          fixed = true;
          return match + ')';
        }
        return match;
      });

      // 14. Fix missing closing angle brackets in JSX
      const missingAngleBracketsRegex = /<([^>]*)$/g;
      content = content.replace(missingAngleBracketsRegex, (match, content) => {
        if (!content.includes('>')) {
          fixed = true;
          return match + '>';
        }
        return match;
      });

      // 15. Fix missing closing quotes in JSX attributes
      const missingQuotesRegex = /=\s*([^"'\s>]+)(?=\s*[>\/])/g;
      content = content.replace(missingQuotesRegex, (match, value) => {
        if (!value.includes('"') && !value.includes("'")) {
          fixed = true;
          return `="${value}"`;
        }
        return match;
      });

      if (fixed && content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`, 'SUCCESS');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async fixAllSrcFiles() {
    this.log('🚀 Starting src directory syntax fixing...', 'PROGRESS');
    
    const filesWithErrors = await this.findSrcFilesWithErrors();
    this.log(`Found ${filesWithErrors.length} files with errors`, 'INFO');

    let fixedCount = 0;
    for (const fileData of filesWithErrors) {
      const filePath = fileData.filePath;
      if (await this.fixFile(filePath)) {
        fixedCount++;
      }
    }

    this.log(`Fixed ${fixedCount} files`, 'SUCCESS');
    return { fixedCount, totalFiles: filesWithErrors.length };
  }

  async runLinting() {
    this.log('🔍 Running linting after fixes...', 'PROGRESS');
    
    try {
      const result = execSync('npx eslint src --max-warnings 1000 --fix', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('Linting completed successfully', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`, 'WARNING');
      return false;
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...', 'PROGRESS');
    
    try {
      const result = execSync('npx tsc --noEmit --skipLibCheck', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('Type check completed successfully', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`, 'WARNING');
      return false;
    }
  }

  async runBuild() {
    this.log('🏗️ Running build after fixes...', 'PROGRESS');
    
    try {
      const result = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('Build completed successfully', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'WARNING');
      return false;
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length,
        successRate: this.fixedFiles.length / (this.fixedFiles.length + this.errors.length) * 100
      }
    };

    const reportPath = path.join(this.projectRoot, 'src-syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Src Syntax Fix Report Generated', 'SUCCESS');
    this.log(`✅ Files Fixed: ${report.summary.totalFixed}`);
    this.log(`❌ Errors: ${report.summary.totalErrors}`);
    this.log(`📈 Success Rate: ${Math.round(report.summary.successRate)}%`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Src Syntax Fixer');
    this.log('='.repeat(60));

    try {
      const fixResults = await this.fixAllSrcFiles();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runBuild();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the src syntax fixer
if (require.main === module) {
  const fixer = new SrcSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = SrcSyntaxFixer;