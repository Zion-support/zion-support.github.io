#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
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
      const originalContent = content;

      // Fix common syntax issues
      content = this.fixCommonSyntaxIssues(content);
      
      // Fix specific file type issues
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        content = this.fixTypeScriptIssues(content);
      }
      
      if (filePath.endsWith('.js') || filePath.endsWith('.cjs')) {
        content = this.fixJavaScriptIssues(content);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixCommonSyntaxIssues(content) {
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    
    // Fix malformed semicolons and commas
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/;\s*,/g, ',');
    content = content.replace(/,\s*,/g, ',');
    
    // Fix malformed object syntax
    content = content.replace(/\{\s*,\s*\}/g, '{}');
    content = content.replace(/\[\s*,\s*\]/g, '[]');
    
    // Fix malformed function calls
    content = content.replace(/\(\s*,\s*\)/g, '()');
    
    return content;
  }

  fixTypeScriptIssues(content) {
    // Fix malformed imports
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?/g, '');
    
    // Fix malformed exports
    content = content.replace(/export\s*{\s*}\s*;?/g, '');
    
    // Fix malformed interfaces
    content = content.replace(/interface\s+\w+\s*{\s*}\s*;?/g, '');
    
    // Fix malformed type definitions
    content = content.replace(/type\s+\w+\s*=\s*;\s*;?/g, '');
    
    return content;
  }

  fixJavaScriptIssues(content) {
    // Fix malformed require statements
    content = content.replace(/require\s*\(\s*\)\s*;?/g, '');
    
    // Fix malformed module.exports
    content = content.replace(/module\.exports\s*=\s*;\s*;?/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/function\s+\w*\s*\(\s*\)\s*{\s*}\s*;?/g, '');
    
    return content;
  }

  async scanAndFix() {
    this.log('🔍 Scanning for files with syntax issues...');
    
    const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
    const files = this.getAllFiles(this.projectRoot, fileExtensions);
    
    this.log(`Found ${files.length} files to check`);
    
    for (const file of files) {
      this.fixFile(file);
    }
    
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);
    
    if (this.errors.length > 0) {
      this.log('Files with errors:');
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`);
      });
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .next, .git, etc.
        if (!['node_modules', '.next', '.git', 'dist', 'build', 'out'].includes(item)) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.scanAndFix().catch(console.error);