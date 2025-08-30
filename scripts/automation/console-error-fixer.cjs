#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'console-error-fixer-report.json');
    this.fixedFiles = [];
    this.errors = [];
  }

  async start() {
    console.log('🚀 Starting Console Error Fixer...');
    
    try {
      await this.scanForConsoleErrors();
      await this.fixConsoleStatements();
      await this.fixConsoleRelatedErrors();
      await this.generateReport();
      
      console.log('✅ Console Error Fixer completed successfully!');
    } catch (error) {
      console.error('❌ Error in Console Error Fixer:', error);
      await this.generateReport();
    }
  }

  async scanForConsoleErrors() {
    console.log('🔍 Scanning for console errors...');
    
    try {
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      this.parseConsoleErrors(lintResult);
    } catch (error) {
      this.parseConsoleErrors(error.stdout || error.stderr || '');
    }
  }

  parseConsoleErrors(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('console') || line.includes('Console')) {
        const match = line.match(/(.+):(\d+):(\d+)\s+(error|warning)\s+(.+)/);
        if (match) {
          const [, filePath, lineNum, colNum, type, message] = match;
          this.errors.push({
            file: filePath.trim(),
            line: parseInt(lineNum),
            column: parseInt(colNum),
            type: type === 'error' ? 'console_error' : 'console_warning',
            message: message.trim()
          });
        }
      }
    });
  }

  async fixConsoleStatements() {
    console.log('🔧 Fixing console statements...');
    
    const consoleFiles = this.errors.filter(e => 
      e.message.includes('Unexpected console statement')
    );

    for (const error of consoleFiles) {
      await this.fixConsoleStatement(error);
    }
  }

  async fixConsoleStatement(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Remove console statements
      if (content.includes('console.log')) {
        content = content.replace(/console\.log\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.error')) {
        content = content.replace(/console\.error\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.warn')) {
        content = content.replace(/console\.warn\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }
      
      if (content.includes('console.info')) {
        content = content.replace(/console\.info\([^)]*\);?\s*\n?/g, '');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'console_statement_removed',
          originalError: error.message
        });
        console.log(`✅ Fixed console statements in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix console statements in ${error.file}:`, fixError.message);
    }
  }

  async fixConsoleRelatedErrors() {
    console.log('🔧 Fixing console-related errors...');
    
    const consoleRelatedErrors = this.errors.filter(e => 
      e.message.includes('Console') ||
      e.message.includes('console')
    );

    for (const error of consoleRelatedErrors) {
      await this.fixConsoleRelatedError(error);
    }
  }

  async fixConsoleRelatedError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return;

      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      // Fix console-related syntax issues
      if (content.includes('Console') && !content.includes('console')) {
        content = content.replace(/Console/g, 'console');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          file: error.file,
          type: 'console_syntax_fix',
          originalError: error.message
        });
        console.log(`✅ Fixed console-related error in ${error.file}`);
      }
    } catch (fixError) {
      console.error(`❌ Failed to fix console-related error in ${error.file}:`, fixError.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalConsoleErrors: this.errors.length,
        fixedFiles: this.fixedFiles.length,
        remainingErrors: this.errors.length - this.fixedFiles.length
      },
      fixedFiles: this.fixedFiles,
      remainingErrors: this.errors.filter(error => 
        !this.fixedFiles.some(fix => fix.file === error.file)
      )
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Console Error Fixer report generated: ${this.reportFile}`);
  }
}

// Auto-start if run directly
if (require.main === module) {
  const fixer = new ConsoleErrorFixer();
  fixer.start();
}

module.exports = ConsoleErrorFixer;
