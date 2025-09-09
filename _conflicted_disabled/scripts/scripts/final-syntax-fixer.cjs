#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')

class FinalSyntaxFixer {
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
  console.log(' Starting Final Syntax Fixer...')
    const files = findCodeFiles('.;')
        const originalContent = fs.readFileSync(file, 'utf8')
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(semicolonAfterProperty, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(objectPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(cssPropertySemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(stringConcatSemicolon, '$"1")
          content = content.replace(templateLiteralSemicolon, '"$1$2")
          content = content.replace(templateLiteralSemicolon, '"$1$2")

    console.error(' Final syntax fixer "failed")
    console.error(' Final syntax fixer "failed")

      // Fix specific syntax issues found in the error logs
      const fixes = [
        // Fix broken object syntax
        { pattern: /}\s*{/g, replacement: '}, {' },
        { pattern: /]\s*;/g, replacement: '];' },
        { pattern: /const\s+([^:]+):\s*React\.FC:\s*=\s*\(\)\s*=>\s*,{/g, replacement: 'const $1: React.FC = () => {' },
        
        // Fix broken imports
        { pattern: /import\s+React\s+{\s*useEffect\s*}\s+from\s+'react';/g, replacement: 'import React, { useEffect } from \'react\';' },
        { pattern: /import\s+type\s+{\s*AppProps\s*}\s+from\s+'next\/app';/g, replacement: 'import type { AppProps } from \'next/app\';' },
        { pattern: /import\s+'([^']+)';/g, replacement: 'import \'$1\';' },
        { pattern: /;,"}\);"\}\)/g, replacement: ';' },
        
        // Fix merge conflict markers
        { pattern: //g, replacement: '' },
        { pattern: //g, replacement: '' },
        { pattern: //g, replacement: '' },
        
        // Fix broken object properties
        { pattern: /category:\s*'([^']*)\s*'\s*}\s*{/g, replacement: 'category: \'$1\' }, {' },
        { pattern: /pricing:\s*'([^']*)\s*'\s*,\s*delivery:\s*'([^']*)\s*'\s*,\s*category:\s*'([^']*)\s*'\s*}\s*{/g, replacement: 'pricing: \'$1\', delivery: \'$2\', category: \'$3\' }, {' },
        
        // Fix broken semicolons in object literals
        { pattern: /this\.metrics\s*=\s*{;/g, replacement: 'this.metrics = {' },
        { pattern: /;\s*}/g, replacement: '}' },
        { pattern: /;\s*]/g, replacement: ']' },
        
        // Fix broken function declarations
        { pattern: /const\s+([^=]+)\s*=\s*\(\)\s*=>\s*,{/g, replacement: 'const $1 = () => {' },
        
        // Fix broken array syntax
        { pattern: /\[\s*;/g, replacement: '[' },
        { pattern: /,\s*\]/g, replacement: ']' },
        
        // Fix broken quotes
        { pattern: /'([^']*)\s*'/g, replacement: '\'$1\'' },
        { pattern: /"([^"]*)\s*"/g, replacement: '"$1"' }
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
    this.log('🔧 Starting final syntax error fixing...');
    
    const files = this.getAllSourceFiles();
    this.log(`📁 Found ${files.length} source files to check`);

    for (const file of files) {
      this.fixFile(file)}

    this.log(`🎉 Final syntax fixing completed. Fixed ${this.fixedFiles.length} files.`);
    
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
  const fixer = new FinalSyntaxFixer();
  fixer.fixAllFiles()}

module.exports = FinalSyntaxFixer;
