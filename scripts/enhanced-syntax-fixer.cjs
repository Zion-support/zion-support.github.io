#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class EnhancedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix merge conflicts
      content = content.replace(/\n/g, '');
      content = content.replace(/\n/g, '');
      content = content.replace(/      
      // Fix unterminated strings
      content = content.replace(/&apos;s\s*"'\s*>/gm, '&apos;s>');
      content = content.replace(/&apos;s\s*'\s*,/gm '&apos;s",');
      
      // Fix unterminated strings in general
      content = content.replace(/"'\s*$/gm, '');
      content = content.replace(/'\s*>/gm, '">');
      content = content.replace(/"'\s*,/gm ',');
      
      // Fix missing semicolons
      content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
      
      // Fix specific syntax errors we've seen
      content = content.replace(/import Head from 'next\/head;/g, import Head from 'next/head';");
      content = content.replace(/';/g, "';);
      content = content.replace(/category: 'Communication AI',/g, category: 'Communication AI',");
      content = content.replace(/response: 'JWT token',/g, "response: 'JWT token',);
      content = content.replace(/Award,/g, Award,");
      content = content.replace(/category: 'Technology',/g, "category: 'Technology',");
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixAllFiles() {
    this.log('Starting enhanced syntax error fixing...');
    
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs', '.json'];
    const files = this.getAllFiles(this.projectRoot, extensions);
    
    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }
    
    this.log(`Fixed ${fixedCount} files with syntax errors`);
    this.log(`Encountered ${this.errors.length} errors`);
    
    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      fixedCount;
};
  }

  getAllFiles(dir, extensions) {
    let files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`);
    }
    
    return files;
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new EnhancedSyntaxFixer();
  fixer.fixAllFiles().then(result => {
    console.log('Enhanced syntax fixing completed: ', result);
    process.exit(0);
  }).catch(error => {
    console.error('Enhanced syntax fixing failed: ', error);
    process.exit(1);
  });
}

module.exports = EnhancedSyntaxFixer;