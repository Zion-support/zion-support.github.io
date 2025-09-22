#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Advanced Syntax Fixer for TypeScript/JavaScript files
 * Fixes common syntax errors including missing semicolons, commas, etc.
 */
class SyntaxFixer {
  constructor() {
    this.fixedFiles = 0;
    this.errors = [];
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix import statements
      content = content.replace(/import\s+([^;]+),\s*$/gm, 'import $1;');
      content = content.replace(/import\s+type\s+([^;]+),\s*$/gm, 'import type $1;');
      content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+'([^']+)',\s*$/gm, 'import { $1 } from \'$2\';');
      
      // Fix variable declarations
      content = content.replace(/(const|let|var)\s+(\w+);\s*$/gm, '$1 $2 = null;');
      content = content.replace(/(const|let|var)\s+(\w+)\s*=\s*([^;]+),\s*$/gm, '$1 $2 = $3;');
      
      // Fix object properties
      content = content.replace(/(\w+):\s*([^,}]+),\s*$/gm, '$1: $2,');
      
      // Fix function calls
      content = content.replace(/(\w+\([^)]*\))\s*,\s*$/gm, '$1;');
      
      // Fix return statements
      content = content.replace(/return\s+([^;]+),\s*$/gm, 'return $1;');
      
      // Fix if statements
      content = content.replace(/if\s*\([^)]+\)\s+([^;]+),\s*$/gm, 'if ($1);');
      
      // Fix type definitions
      content = content.replace(/type\s+(\w+);\s*$/gm, 'type $1 = any;');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles++;
        console.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.error(`❌ Error fixing ${filePath}:`, error.message);
      return false;
    }
  }

  findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.findFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
    
    return files;
  }

  async run() {
    console.log('🔧 Advanced Syntax Fixer Started...');
    
    const files = this.findFiles(process.cwd());
    console.log(`Found ${files.length} files to process`);
    
    for (const file of files) {
      this.fixFile(file);
    }
    
    console.log(`🔧 Syntax fixing completed. Fixed ${this.fixedFiles} files`);
    
    if (this.errors.length > 0) {
      console.log(`❌ ${this.errors.length} errors occurred:`);
      this.errors.forEach(err => console.log(`  - ${err.file}: ${err.error}`));
    }
    
    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors.length,
      success: this.errors.length === 0
    };
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new SyntaxFixer();
  fixer.run().then(result => {
    process.exit(result.success ? 0 : 1);
  });
}

module.exports = SyntaxFixer;