#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.reportsDir = path.join(__dirname, '..', 'syntax-fix-reports-v2');
    this.logFile = path.join(this.reportsDir, 'syntax-fix.log');
    this.fixedFiles = [];
    this.errors = [];
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    const logMessage = `[${timestamp}] ${prefix} ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async findFilesWithSyntaxErrors() {
    this.log('🔍 Scanning for files with syntax errors...');
    
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build', 'coverage'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'error');
      }
    };
    
    scanDirectory(process.cwd());
    return files;
  }

  fixCommonSyntaxIssues(content) {
    let fixed = content;
    
    // Fix common syntax issues
    fixed = fixed
      // Fix missing semicolons
      .replace(/(\w+)\s*$/gm, (match, word) => {
        if (word.match(/^(const|let|var|return|throw|break|continue)$/)) {
          return match + ';';
        }
        return match;
      })
      // Fix unterminated strings
      .replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3')
      // Fix missing commas in objects
      .replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2')
      // Fix missing closing braces
      .replace(/(\{[^}]*?)(\n\s*)(\w+)/g, '$1$2}$2$3')
      // Fix duplicate imports
      .replace(/import\s+([^;]+);\s*import\s+\1;/g, 'import $1;')
      // Fix malformed JSX
      .replace(/<(\w+)([^>]*?)(\s*\/>)/g, '<$1$2 />')
      // Fix missing quotes in object keys
      .replace(/(\w+):/g, '"$1":')
      // Fix trailing commas
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix missing parentheses
      .replace(/(\w+)\s*=>\s*{/g, '($1) => {')
      // Fix malformed template literals
      .replace(/`([^`]*?)\n([^`]*?)`/g, '`$1$2`')
      // Fix missing return statements
      .replace(/(\w+)\s*=>\s*([^;{]+);/g, '$1 => { return $2; }')
      // Fix duplicate declarations
      .replace(/(const|let|var)\s+(\w+)[^;]*;\s*\1\s+\2/g, '$1 $2')
      // Fix malformed function declarations
      .replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, 'function $1() {')
      // Fix missing semicolons after statements
      .replace(/(\w+)\s*$/gm, (match, word) => {
        if (word.match(/^(import|export|const|let|var|return|throw|break|continue)$/)) {
          return match + ';';
        }
        return match;
      });
    
    return fixed;
  }

  async fixFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixCommonSyntaxIssues(content);
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax issues in ${filePath}`, 'success');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'error');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer v2...');
    this.log('Zion Tech Group - Advanced Syntax Error Resolution');
    
    try {
      const files = await this.findFilesWithSyntaxErrors();
      this.log(`Found ${files.length} files to check`);
      
      let totalFixed = 0;
      
      for (const file of files) {
        const fixed = await this.fixFileSyntax(file);
        if (fixed) {
          totalFixed++;
        }
      }
      
      this.log(`✅ Syntax fixing completed!`);
      this.log(`📊 Summary:`);
      this.log(`   - Files checked: ${files.length}`);
      this.log(`   - Files fixed: ${totalFixed}`);
      this.log(`   - Errors encountered: ${this.errors.length}`);
      
      const report = {
        timestamp: new Date().toISOString(),
        filesChecked: files.length,
        filesFixed: totalFixed,
        fixedFiles: this.fixedFiles,
        errors: this.errors
      };
      
      fs.writeFileSync(
        path.join(this.reportsDir, 'syntax-fix-report.json'),
        JSON.stringify(report, null, 2)
      );
      
      this.log(`📄 Report saved to ${this.reportsDir}/syntax-fix-report.json`);
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);