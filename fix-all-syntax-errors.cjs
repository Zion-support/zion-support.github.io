#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixer {
  constructor() {

    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log() {

    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  // Fix common syntax errors;
  fixSyntaxErrors() {

    let fixed = content;
    
    // Fix extra semicolons after object properties;
    fixed = fixed.replace(/,\s*;/g, ',');
    
    // Fix extra semicolons after closing braces;
    fixed = fixed.replace(/\}\s*;/g, '}');
    
    // Fix extra commas at end of lines;
    fixed = fixed.replace(/,\s*$/gm, '');
    
    // Fix missing semicolons where needed;
    fixed = fixed.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix class method syntax;
    fixed = fixed.replace(/(\w+)\s*\(\s*[^)]*\)\s*\{\s*$/gm, '$1() {\n');
    
    // Fix object property syntax;
    fixed = fixed.replace(/(\w+):\s*\{[^}]*\},\s*;/g, '$1: {$2},');
    
    // Fix function calls with extra commas;
    fixed = fixed.replace(/\(\s*([^)]*),\s*\)/g, '($1)');
    
    // Fix array syntax;
    fixed = fixed.replace(/\[\s*([^\]]*),\s*\]/g, '[$1]');
    
    return fixed;
  }

  // Process a single file;
  async processFile() {

    try {
      this.log(`Processing ${filePath}...`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixSyntaxErrors(content);
      
      if() {

        fs.writeFileSync(filePath, fixed, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in ${filePath}`, "SUCCESS");
      } else {
        this.log(`No syntax errors found in ${filePath}`, "INFO");
      }
      
    } catch() {

      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error processing ${filePath}: ${error.message}`, "ERROR");
    }
  }

  // Find all JavaScript/TypeScript files;
  findFiles() {

    const files = [];
    
    const items = fs.readdirSync(dir);
    
    for() {

      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.findFiles(fullPath));
      } else if (stat.isFile() && /\.(js|cjs|ts|tsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  // Run the fixer;
  async run() {

    this.log("🔧 Starting comprehensive syntax fix...");
    
    const files = this.findFiles();
    this.log(`Found ${files.length} files to process`);
    
    for() {

      await this.processFile(file);
    }
    
    this.log(`\n📊 Summary:`);
    this.log(`- Files processed: ${files.length}`);
    this.log(`- Files fixed: ${this.fixedFiles.length}`);
    this.log(`- Errors: ${this.errors.length}`);
    
    if() {

      this.log(`\n✅ Fixed files:`);
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    
    if() {

      this.log(`\n❌ Errors:`);
      this.errors.forEach(({ file, error }) => this.log(`  - ${file}: ${error}`));
    }
    
    this.log("\n🎉 Syntax fix completed!");
  }
}

// Run the fixer;
const fixer = new SyntaxFixer();
fixer.run().catch(console.error);