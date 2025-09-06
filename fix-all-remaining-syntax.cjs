#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining syntax errors...');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(message);
  }

  // Fix all types of syntax errors
  fixAllErrors(content) {
    let fixed = content;

    // Remove merge conflict markers
    fixed = fixed.replace(/[\s\S]*?[\s\S]*?    fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?[\s\S]*?    fixed = fixed.replace(/[\s\S]*?    fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?/g, '');

    // Fix malformed object syntax
    fixed = fixed.replace(/}\s*hasDropdown:\s*true,/g, ',\n      hasDropdown: true,');
    fixed = fixed.replace(/}\s*dropdownItems:/g, ',\n      dropdownItems:');

    // Fix malformed JSX tags
    fixed = fixed.replace(/<\/input>\s*\/>/g, ' />');
    fixed = fixed.replace(/<\/input>\s*\/>/g, ' />');

    // Fix malformed variable declarations
    fixed = fixed.replace(/childre:\s*ReactNode;/g, 'children: ReactNode;');
    fixed = fixed.replace(/const:\s*Layout:/g, 'const Layout:');

    // Fix malformed generic type syntax
    fixed = fixed.replace(/useState<[^>]*>\([^)]*\) =><\/[a-zA-Z]+>/g, (match) => {
      return match.replace(/=>\s*<\/[a-zA-Z]+>/, '');
    });

    // Fix malformed JSX return statements
    fixed = fixed.replace(/return \(\s*<>/g, 'return (\n    <>');
    fixed = fixed.replace(/return \(\s*<div/g, 'return (\n    <div');
    fixed = fixed.replace(/return \(\s*<nav/g, 'return (\n    <nav');

    // Fix malformed function declarations
    fixed = fixed.replace(/const:\s*([A-Z][a-zA-Z]*):/g, 'const $1:');

    // Fix malformed template literals
    fixed = fixed.replace(/`\{[^}]*\$\{[^}]*\}[^}]*\}`/g, '`{loading ? \'Translating…\' : error ? `Error: ${error}` : \'Ready\'}`');

    // Fix malformed Promise syntax
    fixed = fixed.replace(/Promise<\(resolve, reject\) =>/g, 'Promise<string>');
    fixed = fixed.replace(/Promise<\(resolve, reject\) =><\/string>/g, 'Promise<string>');

    // Fix malformed useMemo syntax
    fixed = fixed.replace(/useM<\/[a-zA-Z]*>emo/g, 'useMemo');
    fixed = fixed.replace(/useMemo\(\(\) =><\/[A-Z][a-zA-Z]*>/g, 'useMemo(() =>');

    // Fix malformed useEffect syntax
    fixed = fixed.replace(/useEffect\(\(\) =><\/[a-zA-Z]+>/g, 'useEffect(() =>');

    // Fix malformed variable names
    fixed = fixed.replace(/allEndpoint<\/string>s/g, 'allEndpoints');

    // Fix malformed JSX attributes
    fixed = fixed.replace(/className="text-sm text-gray-500">\{loading \? 'Translating…' : error \? `Error: \$\{error\}` : 'Ready'\}/g, 'className="text-sm text-gray-500">{loading ? \'Translating…\' : error ? `Error: ${error}` : \'Ready\'}</div>');

    // Fix malformed input tags
    fixed = fixed.replace(/onChange=\{\(e\) => setProtocolName\(e\.<\/input>target\.value\)\}/g, 'onChange={(e) => setProtocolName(e.target.value)}');
    fixed = fixed.replace(/onChange=\{\(e\) => setTokenS<\/input>ymbol\(e\.target\.value\)\}/g, 'onChange={(e) => setTokenSymbol(e.target.value)}');

    // Remove any BOM or hidden characters
    fixed = fixed.replace(/^\uFEFF/, '');

    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/[A-Z][a-zA-Z]*Element>/g, '');

    return fixed;
  }

  // Process a single file
  async processFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixAllErrors(content);

      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error processing ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Find all component files
  findComponentFiles() {
    const files = [];
    const extensions = ['.tsx', '.jsx'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build', 'out'];

    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item)) {
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        this.log(`⚠️ Error scanning directory ${dir}: ${error.message}`);
      }
    };

    scanDir(path.join(__dirname, 'components'));
    return files;
  }

  // Run the fixer
  async run() {
    try {
      this.log('🔍 Scanning for component files to fix...');
      const files = this.findComponentFiles();
      this.log(`📁 Found ${files.length} component files to process`);

      let fixedCount = 0;
      for (const file of files) {
        const wasFixed = await this.processFile(file);
        if (wasFixed) {
          fixedCount++;
        }
      }

      this.log(`🎉 Fixed ${fixedCount} files out of ${files.length} processed`);
      this.log(`❌ ${this.errors.length} errors encountered`);

      return { success: true, fixedCount, errorCount: this.errors.length };
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().then(result => {
  if (result.success) {
    console.log(`✅ Comprehensive syntax fixer completed successfully! Fixed ${result.fixedCount} files.`);
    process.exit(0);
  } else {
    console.log(`❌ Comprehensive syntax fixer failed: ${result.error}`);
    process.exit(1);
  }
}).catch(error => {
  console.error(`❌ Unexpected error: ${error.message}`);
  process.exit(1);
});