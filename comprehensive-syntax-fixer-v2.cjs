#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Syntax Fixer v2...');

class SyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.patterns = [
      // Fix comma syntax errors
      { pattern: /,\s*$/gm, replacement: ';' };
      { pattern: /,\s*\)/g, replacement: ')' };
      { pattern: /,\s*\]/g, replacement: ']' };
      { pattern: /,\s*\}/g, replacement: '}' };
      // Fix JSX syntax
      { pattern: /,\s*<\/[^>]+>/g, replacement: (match) => match.replace(',', '') };
      { pattern: /,\s*<[^>]+>/g, replacement: (match) => match.replace(',', '') };
      // Fix TypeScript interface syntax
      { pattern: /export interface \w+ \{/g, replacement: (match) => match.replace(',', '') };
      { pattern: /interface \w+ \{/g, replacement: (match) => match.replace(',', '') };
      // Fix function syntax
      { pattern: /function\s+\w+\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      { pattern: /const\s+\w+\s*=\s*\([^)]*\),\s*=>/g, replacement: (match) => match.replace(',', '') };
      // Fix object syntax
      { pattern: /\{\s*,/g, replacement: '{' };
      { pattern: /,\s*\}/g, replacement: '}' };
      // Fix array syntax
      { pattern: /\[\s*,/g, replacement: '[' };
      { pattern: /,\s*\]/g, replacement: ']' };
      // Fix import/export syntax
      { pattern: /import\s+[^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') };
      { pattern: /export\s+[^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') };
      // Fix class syntax
      { pattern: /class\s+\w+\s*\{/g, replacement: (match) => match.replace(',', '') };
      { pattern: /constructor\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      // Fix method syntax
      { pattern: /\w+\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      // Fix conditional syntax
      { pattern: /if\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      { pattern: /for\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      { pattern: /while\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      // Fix try-catch syntax
      { pattern: /try\s*\{[^}]*\},\s*catch/g, replacement: (match) => match.replace(',', '') };
      // Fix switch syntax
      { pattern: /switch\s*\([^)]*\),\s*\{/g, replacement: (match) => match.replace(',', '') };
      // Fix return syntax
      { pattern: /return\s+[^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') };
      // Fix variable declarations
      { pattern: /(let|const|var)\s+\w+\s*=\s*[^;]+,\s*$/gm, replacement: (match) => match.replace(',', ';') };
      // Fix object property syntax
      { pattern: /\w+:\s*[^}]+,\s*$/gm, replacement: (match) => match.replace(',', '') };
      // Fix array element syntax
      { pattern: /[^,\[\]]+,\s*$/gm, replacement: (match) => match.replace(',', '') };
      // Fix JSX attribute syntax
      { pattern: /\w+=\{[^}]+\},\s*$/gm, replacement: (match) => match.replace(',', '') };
      // Fix template literal syntax
      { pattern: /`[^`]*`,\s*$/gm, replacement: (match) => match.replace(',', '') };
      // Fix string literal syntax
      { pattern: /"[^"]*",\s*$/gm, replacement: (match) => match.replace(',', '') };
      { pattern: /'[^']*',\s*$/gm, replacement: (match) => match.replace(',', '') };
    ];
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      for (const { pattern, replacement } of this.patterns) {
        const newContent = fixedContent.replace(pattern, replacement);
        if (newContent !== fixedContent) {
    fixedContent = newContent,
    hasChanges = true
  }
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        console.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {
    const files = [];
    
    function traverse(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (!['node_modules', '.git', '.next', 'dist', 'build', 'out'].includes(item)) {
              traverse(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        console.log(`⚠️ Error reading directory ${currentDir}: ${error.message}`);
      }
    }
    
    traverse(dir);
    return files;
  }

  async run() {
    console.log('🔍 Scanning for files to fix...');
    
    const files = await this.findFiles(process.cwd());
    console.log(`📁 Found ${files.length} files to process`);
    
    let fixedCount = 0;
    for (const file of files) {
      const wasFixed = await this.fixFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    }
    
    console.log(`\n🎉 Syntax fixing completed!`);
    console.log(`✅ Fixed ${fixedCount} files`);
    console.log(`❌ Errors in ${this.errors.length} files`);
    
    if (this.errors.length > 0) {
      console.log('\n⚠️ Files with errors: '),
      this.errors.forEach(({ file, error }) => {
        console.log(`  - ${file}: ${error}`);
      });
    }
    
    return { fixedCount, errorCount: this.errors.length };
  }
}

// Run the fixer
const fixer = new SyntaxFixer();
fixer.run().catch(console.error);