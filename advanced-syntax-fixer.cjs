#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

class SyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.reportFile = path.join(this.projectRoot, "advanced-syntax-fix-report.json");
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = fixedContent
        // Remove extra semicolons and commas
        .replace(/;,;,/g, ";")
        .replace(/;,;/g, ";")
        .replace(/,,/g, ",")
        // Fix class declarations
        .replace(/class\s+\$1\s*\{/g, "class SyntaxFixer {")
        // Fix function declarations
        .replace(/\{\s*;/g, "{")
        .replace(/;\s*\}/g, "}")
        // Fix array declarations
        .replace(/\[\s*;/g, "[")
        .replace(/;\s*\]/g, "]")
        // Fix object declarations
        .replace(/\{\s*;/g, "{")
        .replace(/;\s*\}/g, "}")
        // Remove standalone semicolons
        .replace(/^\s*;\s*$/gm, "")
        // Fix method declarations
        .replace(/\s*\{\s*;/g, " {")
        .replace(/;\s*\}\s*/g, " }")
        // Fix variable declarations
        .replace(/=\s*\[\s*;/g, "= [")
        .replace(/;\s*\]/g, "]");

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findJavaScriptFiles(dir = this.projectRoot) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.findJavaScriptFiles(fullPath));
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.cjs') || item.endsWith('.mjs'))) {
        files.push(fullPath);
      }
    }

    return files;
  }

  async run() {
    this.log("🔧 Starting Advanced Syntax Fixer...");
    
    const jsFiles = this.findJavaScriptFiles();
    this.log(`📁 Found ${jsFiles.length} JavaScript files`);

    let fixedCount = 0;
    for (const file of jsFiles) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: jsFiles.length,
      fixedFiles: fixedCount,
      errors: this.errors,
      fixedFileList: this.fixedFiles
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${this.reportFile}`);
    this.log(`✅ Fixed ${fixedCount} out of ${jsFiles.length} files`);
    
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`);
    }

    return report;
  }
}

// Run the syntax fixer
const fixer = new SyntaxFixer();
fixer.run()
  .then(report => {
    console.log("\n🎯 Syntax fixing completed successfully!");
    process.exit(0);
  })
  .catch(error => {
    console.error("❌ Fatal error:", error);
    process.exit(1);
  });