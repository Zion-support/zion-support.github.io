#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
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
      let modified = false;

      // Fix common syntax errors
      const fixes = [
        // Fix trailing semicolons in object properties
        { pattern: /(\w+):\s*([^,}]+),;/g, replacement: '$1: $2' },
        // Fix trailing semicolons in arrays
        { pattern: /(\w+):\s*\[([^\]]+)\];/g, replacement: '$1: [$2]' },
        // Fix missing semicolons in imports
        { pattern: /import\s+([^;]+)\s*$/gm, replacement: 'import $1;' },
        // Fix trailing semicolons in function calls
        { pattern: /(\w+):\s*\(\)\s*=>\s*([^,}]+);/g, replacement: '$1: () => $2' },
        // Fix trailing semicolons in object methods
        { pattern: /(\w+):\s*\([^)]*\)\s*=>\s*([^,}]+);/g, replacement: '$1: ($2) => $3' },
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax errors in: ${filePath}`);
      }

      return true;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findFilesWithExtensions(extensions) {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  async run() {
    this.log('🔧 Starting comprehensive syntax error fixing...');

    // Find all TypeScript and JavaScript files
    const files = this.findFilesWithExtensions(['.tsx', '.ts', '.jsx', '.js']);
    
    this.log(`📁 Found ${files.length} files to check`);

    // Fix each file
    for (const file of files) {
      this.fixFile(file);
    }

    // Summary
    this.log(`\n📊 Summary:`);
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);

    if (this.fixedFiles.length > 0) {
      this.log('\n🔧 Fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }

    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(error => this.log(`  - ${error.file}: ${error.error}`));
    }

    return this.fixedFiles.length > 0;
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer.run().then(success => {
  if (success) {
    console.log('\n🎉 Syntax error fixing completed successfully!');
  } else {
    console.log('\n⚠️ No syntax errors were found or fixed.');
  }
}).catch(error => {
  console.error('❌ Error running syntax fixer:', error);
  process.exit(1);
});