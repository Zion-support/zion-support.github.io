#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixed = false;

      // Fix merge conflict markers
      if (content.includes('/gm, '');
        content = content.replace(//gm, '');
        content = content.replace(//gm, '');
        fixed = true}

      // Fix malformed imports and statements
      const fixes = [
        // Fix broken import statements
        { pattern: /import\s+React\s+from\s+'react';'import\s+{([^}]+)}\s+from\s+'([^']+)';'([^']*)/gm, replacement: 'import React from \'react\';\nimport { $1 } from \'$2\';\n$3' },
        
        // Fix broken const declarations
        { pattern: /const:\s*([^:]+):\s*React\.FC:\s*=\s*\(\)\s*=>\s* {/gm, replacement: 'const $1: React.FC = () => {' },
        
        // Fix broken object properties
        { pattern: /id: 'placeholder',/gm, replacement: 'id: \'placeholder\''}, { pattern: /name:\s*'([^']*),/gm, replacement: 'name: \'$1\''}, { pattern: /category: 'placeholder',/gm, replacement: 'category: \'placeholder\''},
        
        // Fix broken function calls
        { pattern: /,\s*{/gm, replacement: ' {' }, { pattern: /,\s*}/gm, replacement: ' }' }, { pattern: /,\s*]/gm, replacement: ' ]' },
        
        // Fix broken string concatenations
        { pattern: /'([^']*)',/gm, replacement: '\'$1\''}, { pattern: /"([^"]*)",/gm, replacement: '"$1"'},
        
        // Fix broken semicolons
        { pattern: /;'([^']*);'/gm, replacement: ';\n$1}, { pattern: /;([^']*);'/gm, replacement: ';\n$1;' },
        
        // Fix broken quotes in imports
        { pattern: /from\s+'([^']*);'/gm, replacement: 'from \'$1\';' },
        
        // Fix broken JSX
        { pattern: /<([^>]*),>/gm, replacement: '<$1>' }, { pattern: /<\/([^>]*),>/gm, replacement: '</$1>' },
        
        // Fix broken array/object syntax
        { pattern: /\[\s*,/gm, replacement: '[' }, { pattern: /{\s*,/gm, replacement: '{' }, { pattern: /,\s*\]/gm, replacement: ']' }, { pattern: /,\s*}/gm, replacement: '}' }
      ];

      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true}
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax errors in ${filePath}`)}

      return fixed} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  getAllSourceFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const files = [];
    const excludeDirs = ['node_modules', '.git', '.next', 'dist', 'out'];

    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!excludeDirs.includes(item) && !item.startsWith('.')) {
              scanDirectory(fullPath)}
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath)}
          }
        }
      } catch (error) {
        this.log(`⚠️ Error scanning directory ${dir}: ${error.message}`)}
    };

    scanDirectory(this.projectRoot);
    return files}

  fixAllFiles() {
    this.log('🔧 Starting comprehensive syntax fixing...');
    
    const files = this.getAllSourceFiles();
    this.log(`📁 Found ${files.length} source files to check`);

    for (const file of files) {
      this.fixFile(file)}

    this.log(`🎉 Comprehensive fixing completed. Fixed ${this.fixedFiles.length} files.`);
    
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered:`);
      this.errors.forEach(err => {
        this.log(`   - ${err.file}: ${err.error}`)})}

    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFiles: files.length
    }}
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveFixer();
  fixer.fixAllFiles()}

module.exports = ComprehensiveFixer;