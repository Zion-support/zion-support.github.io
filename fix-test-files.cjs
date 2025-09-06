#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestFileFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers and keep the main branch content
    return content
      .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
  }

  fixTestFileSyntax(content, filePath) {
    // Fix common syntax issues in test files
    let fixed = content;

    // Fix malformed function names with .test in them
    fixed = fixed.replace(/function\s+(\w+)\.test\s*\(/g, 'function $1(');
    fixed = fixed.replace(/const\s+(\w+)\.test\s*=/g, 'const $1 =');
    fixed = fixed.replace(/interface\s+(\w+)\.testProps/g, 'interface $1Props');

    // Fix malformed imports
    fixed = fixed.replace(/import\s+['"]([^'"]+)['"]\s*;\s*\(\s*['"]\s*\)\s*;['"]/g, "import '$1';");
    fixed = fixed.replace(/const\s+['"]([^'"]+)['"]\s*;\s*\(\s*['"]\s*\)\s*;['"]/g, "const $1 = require('$1');");

    // Fix unterminated strings
    fixed = fixed.replace(/([^\\])'([^']*)$/gm, '$1\'');
    fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '$1"');

    // Fix malformed test syntax
    fixed = fixed.replace(/describe\s*\(\s*['"]([^'"]+)['"]\s*,\s*\(\s*\)\s*=>\s*\{/g, 'describe(\'$1\', () => {');
    fixed = fixed.replace(/it\s*\(\s*['"]([^'"]+)['"]\s*,\s*\(\s*\)\s*=>\s*\{/g, 'it(\'$1\', () => {');

    // Remove trailing semicolons and quotes
    fixed = fixed.replace(/;\s*['"]+$/gm, ';');
    fixed = fixed.replace(/\}\s*;\s*['"]+$/gm, '});');

    return fixed;
  }

  processFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`);
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if no merge conflicts or obvious syntax issues
      if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        // Check for other syntax issues
        if (!content.includes('.test') && !content.includes('interface') || content.includes('export default')) {
          return;
        }
      }

      this.log(`Processing: ${filePath}`);
      
      let fixed = this.fixMergeConflicts(content);
      fixed = this.fixTestFileSyntax(fixed, filePath);

      // Clean up extra whitespace and empty lines
      fixed = fixed
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+$/gm, '')
        .trim();

      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error processing ${filePath}: ${error.message}`);
    }
  }

  async fixAllTestFiles() {
    this.log('Starting test file cleanup...');

    // Find all test files
    const testFiles = [];
    
    try {
      const result = execSync('find . -name "*.test.*" -o -name "*.spec.*" | grep -v node_modules', { encoding: 'utf8' });
      testFiles.push(...result.trim().split('\n').filter(f => f));
    } catch (error) {
      this.log('Error finding test files: ' + error.message);
    }

    // Process each file
    for (const file of testFiles) {
      this.processFile(file);
    }

    // Summary
    this.log(`\n=== SUMMARY ===`);
    this.log(`Files processed: ${testFiles.length}`);
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);

    if (this.fixedFiles.length > 0) {
      this.log('\nFixed files:');
      this.fixedFiles.forEach(f => this.log(`  - ${f}`));
    }

    if (this.errors.length > 0) {
      this.log('\nErrors:');
      this.errors.forEach(e => this.log(`  - ${e.file}: ${e.error}`));
    }

    return this.fixedFiles.length;
  }
}

if (require.main === module) {
  const fixer = new TestFileFixer();
  fixer.fixAllTestFiles().then(fixedCount => {
    console.log(`\nCompleted. Fixed ${fixedCount} files.`);
    process.exit(fixedCount > 0 ? 0 : 1);
  });
}

module.exports = TestFileFixer;