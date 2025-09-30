#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class FinalTestFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixTestFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix the specific syntax issues we're seeing
      // Remove extra semicolons in function parameters
      content = content.replace(/\(\); =>/g, '() =>');
      
      // Fix describe and test function calls
      content = content.replace(/describe\("([^"]+)", \(\); =>/g, 'describe("$1", () =>');
      content = content.replace(/test\("([^"]+)", \(\); =>/g, 'test("$1", () =>');
      content = content.replace(/it\('([^']+)', \(\); =>/g, "it('$1', () =>");
      
      // Fix trailing semicolons in import statements
      content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
      
      // Fix trailing semicolons in function calls
      content = content.replace(/expect\(([^)]+)\);\.toBeInTheDocument\(\);?/g, 'expect($1).toBeInTheDocument();');
      content = content.replace(/expect\(([^)]+)\);\.toBe\(([^)]+)\);?/g, 'expect($1).toBe($2);');
      
      // Fix object property semicolons
      content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2');
      
      // Fix missing semicolons after variable declarations
      content = content.replace(/(const|let|var)\s+([^=]+)=([^;]+)(?!;)/g, '$1 $2=$3;');
      
      // Fix missing semicolons after function calls
      content = content.replace(/(\w+\([^)]*\))(?!;)/g, '$1;');
      
      // Fix missing semicolons after object properties
      content = content.replace(/(\w+:\s*[^,}]+)(?![,;])/g, '$1;');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed test file: ${filePath}`);
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
const searchPaths = [;
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
    this.log('🔧 Starting Final Test Fixer');
    
    // Find and fix test files
    const testFiles = this.findTestFiles();
    this.log(`📁 Found ${testFiles.length} test files`);

    let fixedCount = 0;
    for (const file of testFiles) {
      if (this.fixTestFile(file)) {
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
      path.join(this.projectRoot, 'final-test-fix-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Report saved to final-test-fix-report.json');
    return report;
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new FinalTestFixer();
  fixer.run().catch(console.error);
}

module.exports = FinalTestFixer;