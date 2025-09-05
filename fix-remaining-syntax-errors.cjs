#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(message);
  }

  // Fix specific syntax errors found in the build
  fixSyntaxErrors(content) {
    let fixed = content;

    // Fix malformed JSX closing tags like </HTMLInputElement>
    fixed = fixed.replace(/<\/[A-Z][a-zA-Z]*Element>/g, '');
    
    // Fix malformed generic type syntax like =></string>
    fixed = fixed.replace(/=>\s*<\/[a-zA-Z]+>/g, '=>');
    
    // Fix malformed generic type syntax like =></Visibility>
    fixed = fixed.replace(/=>\s*<\/[A-Z][a-zA-Z]*>/g, '=>');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/className="text-sm text-gray-500">\{loading \? 'Translating…' : error \? `Error: \$\{error\}` : 'Ready'\}/g, 'className="text-sm text-gray-500">{loading ? \'Translating…\' : error ? `Error: ${error}` : \'Ready\'}</div>');
    
    // Fix missing closing tags in JSX
    fixed = fixed.replace(/(<textarea[^>]*>[\s\S]*?<\/textarea>)\s*<div className="text-sm text-gray-500">/g, '$1\n      <div className="text-sm text-gray-500">');
    
    // Fix malformed Promise generic syntax
    fixed = fixed.replace(/Promise<\(resolve, reject\) =>/g, 'Promise<string>');
    fixed = fixed.replace(/Promise<\(resolve, reject\) =><\/string>/g, 'Promise<string>');
    
    // Fix malformed useMemo generic syntax
    fixed = fixed.replace(/useMemo\(\(\) =><\/[A-Z][a-zA-Z]*>/g, 'useMemo(() =>');
    
    // Fix malformed useEffect generic syntax
    fixed = fixed.replace(/useEffect\(\(\) =><\/[a-zA-Z]+>/g, 'useEffect(() =>');
    
    // Fix malformed useState generic syntax
    fixed = fixed.replace(/useState<[^>]*>\([^)]*\) =><\/[a-zA-Z]+>/g, (match) => {
      return match.replace(/=>\s*<\/[a-zA-Z]+>/, '');
    });

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
      const fixed = this.fixSyntaxErrors(content);

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
const fixer = new SyntaxErrorFixer();
fixer.run().then(result => {
  if (result.success) {
    console.log(`✅ Syntax error fixer completed successfully! Fixed ${result.fixedCount} files.`);
    process.exit(0);
  } else {
    console.log(`❌ Syntax error fixer failed: ${result.error}`);
    process.exit(1);
  }
}).catch(error => {
  console.error(`❌ Unexpected error: ${error.message}`);
  process.exit(1);
});