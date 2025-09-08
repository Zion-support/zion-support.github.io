#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SimpleSyntaxFixer {
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
        fixed = true}

      // Fix unterminated strings
      if (content.includes('"\'')) {
        content = content.replace(/"'\s*$/gm, '");
        content = content.replace(/"'\s*>/gm, '">');
        content = content.replace(/"'\s*,/gm, '"',);
        content = content.replace(/"'\s*\)/gm, '")');
        fixed = true}

      // Fix malformed imports
      if (content.includes('import { } from')) {
        content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*$/gm, '');
        fixed = true}

      // Fix trailing commas
      if (content.includes('}') || content.includes(']')) {
        content = content.replace(/,\s*}/g, '}');
        content = content.replace(/,\s*]/g, ']');
        fixed = true}

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
    this.log('🔧 Starting simple syntax error fixing...');
    
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
  const fixer = new SimpleSyntaxFixer();
  fixer.fixAllFiles()}

module.exports = SimpleSyntaxFixer;