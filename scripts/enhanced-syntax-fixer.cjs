#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class EnhancedSyntaxFixer {
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

      // Fix common syntax issues
      const fixes = [
        // Fix unterminated strings
        { pattern: /"'\s*$/gm, replacement: '"' }, { pattern: /"'\s*>/gm, replacement: '">' }, { pattern: /"'\s*,/gm, replacement: '"'}, { pattern: /"'\s*\)/gm, replacement: '")' },
        
        // Fix escaped quotes
        { pattern: /we\\'ll\s*"'\s*$/gm, replacement: 'we\\'ll"' }, { pattern: /we\\'ll\s*"'\s*,/gm, replacement: 'we\\'ll"'},
        
        // Fix HTML entities
        { pattern: /&apos;s\s*"'\s*$/gm, replacement: '&apos;s"' }, { pattern: /&apos;s\s*"'\s*>/gm, replacement: '&apos;s">' }, { pattern: /&apos;s\s*"'\s*,/gm, replacement: '&apos;s"'},
        
        // Fix merge conflict markers
        { pattern: //gm, replacement: '' }, { pattern: //gm, replacement: '' },
        
        // Fix malformed imports
        { pattern: /import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*$/gm, replacement: '' },
        
        // Fix trailing commas in objects
        { pattern: /,\s*}/g, replacement: '}' }, { pattern: /,\s*]/g, replacement: ']' }
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
    this.log('🔧 Starting enhanced syntax error fixing...');
    
    const files = this.getAllSourceFiles();
    this.log(`📁 Found ${files.length} source files to check`);

    for (const file of files) {
      this.fixFile(file)}

    this.log(`🎉 Syntax fixing completed. Fixed ${this.fixedFiles.length} files.`);
    
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
  const fixer = new EnhancedSyntaxFixer();
  fixer.fixAllFiles()}

module.exports = EnhancedSyntaxFixer;