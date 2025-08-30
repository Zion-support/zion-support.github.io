#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async run() {
    this.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      // Find all TypeScript/React files
      const files = this.findTypeScriptFiles();
      this.log(`Found ${files.length} TypeScript/React files to process`);
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      await this.generateReport();
      this.log(`✅ Completed! Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files`);
      
    } catch (error) {
      this.log(`Error during execution: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  findTypeScriptFiles() {
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = [];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let fileErrorsFixed = 0;
      
      // Fix common JSX syntax issues
      const fixes = [
        // Fix malformed JSX with semicolons
        { pattern: /;\s*<(\w+)/g, replacement: '<$1' },
        { pattern: /(\w+)\s*>\s*;/g, replacement: '$1>' },
        { pattern: /;\s*\/>\s*;/g, replacement: '/>' },
        
        // Fix HTML entities in JSX
        { pattern: /&lt;/g, replacement: '<' },
        { pattern: /&gt;/g, replacement: '>' },
        { pattern: /&amp;/g, replacement: '&' },
        
        // Fix malformed function declarations
        { pattern: /const\s+(\w+)\s*=\s*\(\s*;\s*/g, replacement: 'const $1 = () => (' },
        { pattern: /function\s+(\w+)\s*\(\s*;\s*/g, replacement: 'function $1() {' },
        
        // Fix malformed JSX attributes
        { pattern: /(\w+)\s*=\s*\{([^}]+)\s*;\s*\}/g, replacement: '$1={$2}' },
        
        // Fix malformed JSX closing tags
        { pattern: /;\s*<\/\w+>\s*;/g, replacement: '</$1>' },
        
        // Fix malformed JSX self-closing tags
        { pattern: /;\s*\/>\s*;/g, replacement: '/>' },
        
        // Fix malformed JSX with long lines
        { pattern: /;\s*<(\w+)[^>]*>\s*;\s*([^<]+)\s*;\s*<\/\1>\s*;/g, replacement: '<$1>$2</$1>' },
        
        // Fix malformed JSX with multiple semicolons
        { pattern: /;\s*;\s*/g, replacement: ';' },
        
        // Fix malformed JSX with incorrect spacing
        { pattern: />\s*;\s*</g, replacement: '><' },
        { pattern: />\s*;\s*$/gm, replacement: '>' },
      ];
      
      for (const fix of fixes) {
        const matches = (fixedContent.match(fix.pattern) || []).length;
        if (matches > 0) {
          fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
          fileErrorsFixed += matches;
        }
      }
      
      if (fileErrorsFixed > 0) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.errorsFixed += fileErrorsFixed;
        this.log(`Fixed ${fileErrorsFixed} issues in ${path.relative(this.projectRoot, filePath)}`);
      }
      
      this.filesProcessed++;
      
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'warning');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      success: true
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${this.reportFile}`);
  }
}

// Run the fixer
const fixer = new ComprehensiveErrorFixer();
fixer.run().catch(console.error);
