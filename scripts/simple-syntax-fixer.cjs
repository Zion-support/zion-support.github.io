#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SimpleSyntaxFixer {
  constructor() {
    this.reportsDir = path.join(__dirname, '..', 'syntax-fix-reports');
    this.logFile = path.join(this.reportsDir, 'syntax-fix.log');
    this.fixedFiles = [];
    this.errors = [];
    
    // Create reports directory
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
    
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules, .git, and other common directories
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
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

  async checkFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common syntax issues
      const issues = [];
      
      // Check for missing semicolons at end of statements
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines, comments, and control structures
        if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*') || line.startsWith('*/')) {
          continue;
        }
        
        // Check for lines that should end with semicolon
        if (line.match(/^(const|let|var|return|throw|break|continue|import|export)/) && 
            !line.endsWith(';') && 
            !line.endsWith('{') && 
            !line.endsWith('}') &&
            !line.includes('if') &&
            !line.includes('for') &&
            !line.includes('while') &&
            !line.includes('switch') &&
            !line.includes('try') &&
            !line.includes('catch') &&
            !line.includes('function') &&
            !line.includes('=>') &&
            !line.includes('import ') &&
            !line.includes('export ')) {
          issues.push({
            line: i + 1,
            issue: 'Missing semicolon',
            fix: line + ';'
          });
        }
      }
      
      // Check for common syntax patterns that cause issues
      if (content.includes('<<') && !content.includes('<<<')) {
        issues.push({
          line: 0,
          issue: 'Invalid << token',
          fix: 'Replace << with proper syntax'
        });
      }
      
      return issues;
    } catch (error) {
      this.log(`Error reading file ${filePath}: ${error.message}`, 'error');
      return [];
    }
  }

  async fixFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let fixed = false;
      
      // Fix missing semicolons
      const lines = fixedContent.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.match(/^(const|let|var|return|throw|break|continue)/) && 
            !line.endsWith(';') && 
            !line.endsWith('{') && 
            !line.endsWith('}') &&
            !line.includes('if') &&
            !line.includes('for') &&
            !line.includes('while') &&
            !line.includes('switch') &&
            !line.includes('try') &&
            !line.includes('catch') &&
            !line.includes('function') &&
            !line.includes('=>')) {
          lines[i] = line + ';';
          fixed = true;
        }
      }
      
      if (fixed) {
        fixedContent = lines.join('\n');
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
    this.log('🚀 Starting Simple Syntax Fixer...');
    this.log('Zion Tech Group - Syntax Error Resolution');
    
    try {
      const files = await this.findFilesWithSyntaxErrors();
      this.log(`Found ${files.length} files to check`);
      
      let totalFixed = 0;
      
      for (const file of files) {
        const issues = await this.checkFileSyntax(file);
        if (issues.length > 0) {
          this.log(`Found ${issues.length} issues in ${file}`);
          const fixed = await this.fixFileSyntax(file);
          if (fixed) {
            totalFixed++;
          }
        }
      }
      
      this.log(`✅ Syntax fixing completed!`);
      this.log(`📊 Summary:`);
      this.log(`   - Files checked: ${files.length}`);
      this.log(`   - Files fixed: ${totalFixed}`);
      this.log(`   - Errors encountered: ${this.errors.length}`);
      
      // Generate report
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

// Run the fixer
const fixer = new SimpleSyntaxFixer();
fixer.run().catch(console.error);