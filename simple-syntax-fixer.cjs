#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Simple Syntax Fixer...');

class SimpleSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async run() {
    try {
      console.log('📁 Scanning for files with syntax errors...');
      
      // Find all JavaScript and TypeScript files;
      const files = this.findFiles(['.js', '.cjs', '.ts', '.tsx']);
      
      console.log(`Found ${files.length} files to check`);
      
      for (const file of files) {
        try {
          if (this.fixFile(file)) {
            this.fixedFiles.push(file);
          }
        } catch (error) {
          this.errors.push({ file, error:error.message });
        }
      }

      console.log(`\n✅ Fixed ${this.fixedFiles.length} files`);
      
      if (this.errors.length > 0) {
        console.log(`\n❌ ${this.errors.length} files had errors:`);
        this.errors.forEach(({ file, error }) => {
          console.log(`  - ${file} ${error}`);
        });
      }

      // Test build after fixes;
      console.log('\n🔨 Testing build after fixes...');
      try {
        execSync('npm run build', { stdio:'pipe' });
        console.log('✅ Build successful!');
      } catch (error) {
        console.log('⚠️ Build still has issues, but syntax fixes applied');
      }

    } catch (error) {
      console.error('❌ Error during syntax fixing:', error.message);
    }
  }

  findFiles(extensions) {
    const files = [];
    
    function scanDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories;
            if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
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
        // Ignore permission errors;
      }
    }
    
    scanDir('.');
    return files;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors;
      content = this.fixCommonErrors(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed:${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      console.log(`⚠️ Could not fix ${filePath} ${error.message}`);
      return false;
    }
  }

  fixCommonErrors(content) {
    // Fix object property syntax errors;
    content = content.replace(/:\s*:\s*/g, ':');
    content = content.replace(/,\s*:\s*/g, ':');
    content = content.replace(/{\s*:\s*/g, '{ ');
    content = content.replace(/}\s*:\s*/g, '} ');
    
    // Fix function parameter syntax;
    content = content.replace(/\(\s*:\s*/g, '(');
    content = content.replace(/,\s*:\s*/g, ', ');
    
    // Fix array syntax;
    content = content.replace(/\[\s*:\s*/g, '[');
    content = content.replace(/,\s*:\s*/g, ', ');
    
    // Fix string concatenation;
    content = content.replace(/'\s*\+\s*'/g, "''");
    content = content.replace(/"\s*\+\s*"/g, '""');
    
    // Fix missing semicolons;
    content = content.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix duplicate colons;
    content = content.replace(/:/g, ':');
    
    // Fix malformed object properties;
    content = content.replace(/(\w+)\s*:\s*:\s*([^,}]+)/g, '$1:$2');
    
    // Fix malformed function calls;
    content = content.replace(/(\w+)\s*\(\s*:\s*/g, '$1(');
    
    return content;
  }
}

// Run the fixer;
const fixer = new SimpleSyntaxFixer();
fixer.run().catch(console.error);