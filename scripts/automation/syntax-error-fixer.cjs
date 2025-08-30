#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      syntaxErrorsFixed: 0,
      filesProcessed: 0,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Syntax Error Fixer: ${message}`);
  }

  async findFilesWithSyntaxErrors() {
    this.log('Scanning for files with syntax errors...');
    
    const problematicFiles = [];
    const sourceDirs = ['src', 'scripts', 'utils', 'components', 'pages', 'hooks', 'context'];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        const files = this.findFilesRecursively(dirPath);
        for (const file of files) {
          if (await this.hasSyntaxErrors(file)) {
            problematicFiles.push(file);
          }
        }
      }
    }
    
    this.log(`Found ${problematicFiles.length} files with syntax errors`);
    return problematicFiles;
  }

  findFilesRecursively(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFilesRecursively(fullPath));
      } else if (this.isSourceFile(item)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  isSourceFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async hasSyntaxErrors(filePath) {
    try {
      // Try to parse the file with Node.js
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for common syntax issues
      if (this.hasCommonSyntaxIssues(content)) {
        return true;
      }
      
      // Try to require/import the file (this will catch syntax errors)
      if (filePath.endsWith('.js') || filePath.endsWith('.cjs')) {
        require(filePath);
      }
      
      return false;
      
    } catch (error) {
      return true;
    }
  }

  hasCommonSyntaxIssues(content) {
    const issues = [
      /^\s*<>\s*$/m, // Empty JSX fragments
      /^\s*\)\s*$/m, // Stray closing parentheses
      /^\s*}\s*$/m, // Stray closing braces
      /^\s*\[\s*$/m, // Stray opening brackets
      /^\s*\]\s*$/m, // Stray closing brackets
      /^\s*,\s*$/m, // Stray commas
      /^\s*;\s*$/m, // Stray semicolons
      /^\s*=\s*$/m, // Stray equals signs
      /^\s*:\s*$/m, // Stray colons
      /^\s*>\s*$/m, // Stray greater than signs
      /^\s*<\s*$/m, // Stray less than signs
    ];
    
    return issues.some(pattern => pattern.test(content));
  {/* Removed stray closing brace */}

  async fixSyntaxErrors(filePath) {
    this.log(`Fixing syntax errors in ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let fixed = false;
      
      // Fix common syntax issues
      const fixedLines = lines.map((line, index) => {
        const originalLine = line;
        let fixedLine = line;
        
        // Fix empty JSX fragments
        if (line.trim() === '<>') {
          fixedLine = '  {/* Empty JSX fragment */}';
          fixed = true;
        }
        
        // Fix stray closing parentheses
        if (line.trim() === ')' && !this.hasMatchingOpeningParenthesis(lines, index)) {
          fixedLine = '  {/* Removed stray closing parenthesis */}';
          fixed = true;
        }
        
        // Fix stray closing braces
        if (line.trim() === '}' && !this.hasMatchingOpeningBrace(lines, index)) {
          fixedLine = '  {/* Removed stray closing brace */}';
          fixed = true;
        }
        
        // Fix stray brackets
        if (line.trim() === '[' && !this.hasMatchingClosingBracket(lines, index)) {
          fixedLine = '  {/* Removed stray opening bracket */}';
          fixed = true;
        }
        
        if (line.trim() === ']' && !this.hasMatchingOpeningBracket(lines, index)) {
          fixedLine = '  {/* Removed stray closing bracket */}';
          fixed = true;
        }
        
        // Fix stray commas
        if (line.trim() === ',') {
          fixedLine = '  {/* Removed stray comma */}';
          fixed = true;
        }
        
        // Fix stray semicolons
        if (line.trim() === ';') {
          fixedLine = '  {/* Removed stray semicolon */}';
          fixed = true;
        }
        
        // Fix incomplete JSX
        if (line.includes('<') && !line.includes('>') && !line.includes('/>')) {
          if (!this.hasMatchingJSXClosing(lines, index)) {
            fixedLine = line + ' />';
            fixed = true;
          }
        }
        
        return fixedLine;
      });
      
      if (fixed) {
        fs.writeFileSync(filePath, fixedLines.join('\n'));
        this.log(`Fixed syntax errors in ${filePath}`);
        return true;
      }
      
      return false;
      
    } catch (error) {
      this.log(`Failed to fix syntax errors in ${filePath}: ${error.message}`);
      return false;
  {/* Removed stray closing brace */}
  {/* Removed stray closing brace */}

  hasMatchingOpeningParenthesis(lines, currentIndex) {
    let count = 0;
    for (let i = currentIndex; i >= 0; i--) {
      const line = lines[i];
      count += (line.match(/\(/g) || []).length;
      count -= (line.match(/\)/g) || []).length;
      if (count > 0) return true;
    }
    return false;
  {/* Removed stray closing brace */}

  hasMatchingOpeningBrace(lines, currentIndex) {
    let count = 0;
    for (let i = currentIndex; i >= 0; i--) {
      const line = lines[i];
      count += (line.match(/\{/g) || []).length;
      count -= (line.match(/\}/g) || []).length;
      if (count > 0) return true;
    }
    return false;
  {/* Removed stray closing brace */}

  hasMatchingOpeningBracket(lines, currentIndex) {
    let count = 0;
    for (let i = currentIndex; i >= 0; i--) {
      const line = lines[i];
      count += (line.match(/\[/g) || []).length;
      count -= (line.match(/\]/g) || []).length;
      if (count > 0) return true;
    }
    return false;
  {/* Removed stray closing brace */}

  hasMatchingClosingBracket(lines, currentIndex) {
    let count = 0;
    for (let i = currentIndex; i < lines.length; i++) {
      const line = lines[i];
      count += (line.match(/\[/g) || []).length;
      count -= (line.match(/\]/g) || []).length;
      if (count < 0) return true;
    }
    return false;
  {/* Removed stray closing brace */}

  hasMatchingJSXClosing(lines, currentIndex) {
    for (let i = currentIndex + 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('>') || line.includes('/>')) {
        return true;
      }
    }
    return false;
  {/* Removed stray closing brace */}

  async fixAllSyntaxErrors() {
    const problematicFiles = await this.findFilesWithSyntaxErrors();
    let fixedCount = 0;
    
    for (const file of problematicFiles) {
      if (await this.fixSyntaxErrors(file)) {
        fixedCount++;
      }
      this.results.filesProcessed++;
    }
    
    this.results.syntaxErrorsFixed = fixedCount;
    this.results.success = fixedCount > 0;
    
    return fixedCount;
  {/* Removed stray closing brace */}

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        totalFilesProcessed: this.results.filesProcessed,
        syntaxErrorsFixed: this.results.syntaxErrorsFixed,
        successRate: this.results.success ? '100%' : '0%',
        efficiency: `${this.results.filesProcessed} files processed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'syntax-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  {/* Removed stray closing brace */}

  async run() {
    this.log('Starting Syntax Error Fixer...');
    
    try {
      const fixedCount = await this.fixAllSyntaxErrors();
      
      // Generate report
      await this.generateReport();
      
      this.log(`Syntax Error Fixer completed. Fixed ${fixedCount} syntax errors in ${this.results.filesProcessed} files`);
      return this.results;
      
    } catch (error) {
      this.log(`Syntax Error Fixer failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  {/* Removed stray closing brace */}
  {/* Removed stray closing brace */}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = SyntaxErrorFixer;