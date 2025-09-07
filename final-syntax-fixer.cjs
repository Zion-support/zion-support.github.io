#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FinalSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  fixSyntaxErrors(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix common syntax errors
      content = content.replace(/\/\* \/\* Brain \*\/ \*\//g, '// Brain');
      content = content.replace(/\/\* Brain \*\//g, '// Brain');
      content = content.replace(/,\s*\/\* Brain \*\/\s*,/g, ', Brain,');
      content = content.replace(/,\s*\/\* Brain \*\/\s*\)/g, ' // Brain)');
      content = content.replace(/,\s*\/\* Brain \*\/\s*\]/g, ' // Brain]');
      content = content.replace(/,\s*\/\* Brain \*\/\s*}/g, ' // Brain}');
      
      // Fix duplicate declarations
      content = content.replace(/const\s*{\s*execSync\s*}\s*=\s*require\([^)]+\);\s*const\s*{\s*execSync\s*}\s*=\s*require\([^)]+\);/g, 'const { execSync } = require(\'child_process\');');
      
      // Fix malformed comments
      content = content.replace(/}\s*\)\s*;\s*jest\.clearAllMocks\(\)\s*}\s*\)\s*;/g, '});');
      
      // Fix orphaned strings
      content = content.replace(/^\s*['"][^'"]*['"]\s*,?\s*$/gm, '');
      
      // Fix malformed imports
      content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;/g, 'import { $1, $3 } from \'$2\';');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Fixed syntax errors in: ${path.relative(this.projectRoot, filePath)}`);
        this.fixedFiles.push(filePath);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Failed to fix: ${path.relative(this.projectRoot, filePath)} - ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🔧 Starting final syntax fixing...');
    
    const files = this.getAllFiles(this.projectRoot);
    this.log(`📁 Found ${files.length} files to check`);
    
    let fixedCount = 0;
    
    for (const file of files) {
      if (this.fixSyntaxErrors(file)) {
        fixedCount++;
      }
    }
    
    this.log(`\n📊 Fix Summary:`);
    this.log(`   - Files processed: ${files.length}`);
    this.log(`   - Files fixed: ${fixedCount}`);
    this.log(`   - Errors: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      this.log(`\n❌ Files with errors:`);
      this.errors.forEach(({ file, error }) => {
        this.log(`   - ${path.relative(this.projectRoot, file)}: ${error}`);
      });
    }
    
    this.log('🎉 Final syntax fixing completed!');
  }
}

// Run the fixer
const fixer = new FinalSyntaxFixer();
fixer.run().catch(console.error);