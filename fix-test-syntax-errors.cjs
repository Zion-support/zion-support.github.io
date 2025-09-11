#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestSyntaxFixer {
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
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix trailing commas in import statements
      content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
      
      // Fix other common syntax issues
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/,\s*]/g, ']');
      content = content.replace(/,\s*\)/g, ')');
      
      // Fix function declarations with trailing commas
      content = content.replace(/function\s+([^(]+)\([^)]*,\s*\)/g, (match, funcName) => {
        return match.replace(/,\s*\)$/, ')');
      });

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed syntax in: ${filePath}`);
        this.fixedFiles.push(filePath);
        return true;
      } else {
        this.log(`ℹ️ No changes needed: ${filePath}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  findTestFiles() {
    const testFiles = [];
    
    // Find test files in various directories
    const searchPaths = [
      '__tests__',
      'src_backup',
      'recovered-branches',
      'tests'
    ];

    for (const searchPath of searchPaths) {
      if (fs.existsSync(searchPath)) {
        this.findFilesRecursively(searchPath, testFiles);
      }
    }

    return testFiles;
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (stat.isFile() && (item.endsWith('.test.js') || item.endsWith('.test.ts') || item.endsWith('.test.tsx') || item.endsWith('.test.jsx'))) {
        files.push(fullPath);
      }
    }
  }

  async run() {
    this.log('🔧 Starting Test Syntax Fixer');
    
    const testFiles = this.findTestFiles();
    this.log(`📁 Found ${testFiles.length} test files`);

    let fixedCount = 0;
    for (const file of testFiles) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`✅ Fixed ${fixedCount} files`);
    
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered:`);
      this.errors.forEach(error => {
        this.log(`   - ${error.file}: ${error.error}`);
      });
    }

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: testFiles.length,
      fixedFiles: fixedCount,
      errors: this.errors,
      fixedFileList: this.fixedFiles
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'test-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Report saved to test-syntax-fix-report.json');
    return report;
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new TestSyntaxFixer();
  fixer.run().catch(console.error);