#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          files.push(...this.getAllFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixed = false;

      // Fix common syntax issues
      
      // 1. Fix missing semicolons after imports
      content = content.replace(/import\s+[^;]+$/gm, (match) => {
        if (!match.endsWith(';')) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      // 2. Fix malformed import statements
      content = content.replace(/import\s+{[^}]*}\s+from\s+['"][^'"]*['"]\s*$/gm, (match) => {
        if (!match.endsWith(';')) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      // 3. Fix unterminated string literals
      content = content.replace(/['"][^'"]*$/gm, (match) => {
        if (match.length > 1 && !match.endsWith('"') && !match.endsWith("'")) {
          fixed = true;
          return match + '"';
        }
        return match;
      });

      // 4. Fix missing commas in arrays and objects
      content = content.replace(/([^,}])\s*\n\s*([}\]])/g, '$1,\n$2');
      
      // 5. Fix missing semicolons after variable declarations
      content = content.replace(/const\s+\w+\s*=\s*[^;]+$/gm, (match) => {
        if (!match.endsWith(';') && !match.includes('{') && !match.includes('(')) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      // 6. Fix export statements
      content = content.replace(/export\s+default\s+function\s+\w+\(\)\s*{$/gm, (match) => {
        if (!match.endsWith('{')) {
          fixed = true;
          return match + ' {';
        }
        return match;
      });

      // 7. Fix malformed JSX/TSX
      content = content.replace(/<(\w+)\s*([^>]*)\s*>/g, (match, tag, attrs) => {
        if (attrs && attrs.trim() && !attrs.endsWith('"') && !attrs.endsWith("'")) {
          fixed = true;
          return `<${tag} ${attrs.trim()}" >`;
        }
        return match;
      });

      // 8. Fix missing closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
        fixed = true;
      }

      // 9. Fix malformed template literals
      content = content.replace(/`[^`]*$/gm, (match) => {
        if (!match.endsWith('`')) {
          fixed = true;
          return match + '`';
        }
        return match;
      });

      // 10. Fix missing semicolons after return statements
      content = content.replace(/return\s+[^;]+$/gm, (match) => {
        if (!match.endsWith(';') && !match.includes('{') && !match.includes('(')) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      if (fixed && content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🔧 Starting comprehensive syntax fixing...');
    
    // Get all TypeScript and JavaScript files
    const files = this.getAllFiles(path.join(this.projectRoot, 'src'));
    
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`✅ Fixed ${fixedCount} files`);
    
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`);
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`);
      });
    }

    // Try to run linting to see if we fixed the issues
    try {
      this.log('🔍 Running linting to check fixes...');
      execSync('npm run lint', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('✅ Linting passed!');
    } catch (error) {
      this.log('⚠️  Linting still has issues, but some files were fixed');
    }

    this.log('🎉 Comprehensive syntax fixing completed!');
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);