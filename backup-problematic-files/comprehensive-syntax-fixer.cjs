#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.totalErrors = 0;
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  async fixAllSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...');
    try {
      // Get all TypeScript and JavaScript files
      const files = this.getAllCodeFiles();
      this.log(`Found ${files.length} files to check`);
      for (const file of files) {
        await this.fixFileSyntax(file);
      }
      this.log(`✅ Fixed syntax errors in ${this.fixedFiles} files`);
      this.log(`📊 Total errors fixed: ${this.totalErrors}`);
    } catch (error) {
      this.log(`❌ Error during syntax fixing: ${error.message}`);
      throw error;
    }
    ;
    // Fix missing commas in object literals;
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1:$2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1:$2:');
    ;
    // Fix missing semicolons;
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    ;
    // Fix unterminated strings;
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    ;
    // Fix missing quotes in object keys;
    content = content.replace(/(\w+):/g, '"$1":');
    ;
    // Fix missing commas between array elements;
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    ;
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors:in:${filePath}`);
      return true;
    }
    ;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function findFilesWithErrors(dir) {;
  const files = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
      if (stat.isDirectory()) {;
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {;
          traverse(fullPath);
        }
      } else if (stat.isFile()) {;
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {;
          files.push(fullPath);
        }
      }
    }
  }
  ;
  traverse(dir);
  return files;
}
;
// Main execution;
console.log('🔍 Scanning for files with syntax errors...');
const files = findFilesWithErrors(process.cwd());
;
console.log(`Found ${files.length} files to check`);
;
let fixedCount = 0;
for (const file of files) {;
  if (fixSyntaxErrors(file)) {;
    fixedCount++;
  }
}
// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllSyntaxErrors().catch(console.error);