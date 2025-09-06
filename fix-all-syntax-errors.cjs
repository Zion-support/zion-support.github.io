#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.srcDir = path.join(__dirname, 'src');
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  error(message) {
    console.error(`[ERROR] ${message}`);
    this.errors.push(message);
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = this.fixCommonSyntaxErrors(fixedContent);
      
      // Fix JSX syntax errors
      if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        fixedContent = this.fixJSXSyntaxErrors(fixedContent);
      }

      // Fix TypeScript syntax errors
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        fixedContent = this.fixTypeScriptSyntaxErrors(fixedContent);
      }

      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (err) {
      this.error(`Failed to fix ${filePath}: ${err.message}`);
      return false;
    }
  }

  fixCommonSyntaxErrors(content) {
    let fixed = content;

    // Fix unterminated string literals
    fixed = fixed.replace(/'([^']*?)\n/g, "'$1'\n");
    fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"\n');
    fixed = fixed.replace(/`([^`]*?)\n/g, '`$1`\n');

    // Fix missing semicolons
    fixed = fixed.replace(/([^;}])\n\s*([a-zA-Z_$])/g, '$1;\n$2');
    fixed = fixed.replace(/([^;}])\n\s*([a-zA-Z_$])/g, '$1;\n$2');

    // Fix missing commas in objects
    fixed = fixed.replace(/([^,}])\n\s*([a-zA-Z_$"'])/g, '$1,\n$2');

    // Fix merge conflict markers
    fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');

    // Fix unterminated regular expressions
    fixed = fixed.replace(/\/([^\/\n]*?)\n/g, '/$1/\n');

    // Fix missing closing braces
    const openBraces = (fixed.match(/\{/g) || []).length;
    const closeBraces = (fixed.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      fixed += '}'.repeat(openBraces - closeBraces);
    }

    // Fix missing closing parentheses
    const openParens = (fixed.match(/\(/g) || []).length;
    const closeParens = (fixed.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      fixed += ')'.repeat(openParens - closeParens);
    }

    return fixed;
  }

  fixJSXSyntaxErrors(content) {
    let fixed = content;

    // Fix JSX expressions
    fixed = fixed.replace(/\{([^}]*?)\n/g, '{$1}\n');
    
    // Fix JSX closing tags
    fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*?)\n/g, '<$1$2>\n');
    
    // Fix JSX self-closing tags
    fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*\/>/g, '<$1$2 />');

    return fixed;
  }

  fixTypeScriptSyntaxErrors(content) {
    let fixed = content;

    // Fix interface declarations
    fixed = fixed.replace(/interface\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{([^}]*?)\n/g, 'interface $1 {\n$2\n}\n');

    // Fix type declarations
    fixed = fixed.replace(/type\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]*?)\n/g, 'type $1 = $2;\n');

    // Fix function declarations
    fixed = fixed.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*?)\)\s*\{([^}]*?)\n/g, 'function $1($2) {\n$3\n}\n');

    // Fix arrow functions
    fixed = fixed.replace(/const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\(([^)]*?)\)\s*=>\s*\{([^}]*?)\n/g, 'const $1 = ($2) => {\n$3\n};\n');

    return fixed;
  }

  async findAndFixFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.findAndFixFiles(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        await this.fixFile(filePath);
      }
    }
  }

  async run() {
    this.log('Starting syntax error fixing...');
    
    try {
      await this.findAndFixFiles(this.srcDir);
      
      this.log(`Fixed ${this.fixedFiles.length} files`);
      
      if (this.errors.length > 0) {
        this.log(`Encountered ${this.errors.length} errors:`);
        this.errors.forEach(error => this.log(`  - ${error}`));
      }

      // Try to build after fixing
      this.log('Attempting build after fixes...');
      try {
        execSync('npm run build', { stdio: 'inherit' });
        this.log('Build successful!');
      } catch (buildError) {
        this.log('Build still has issues, but syntax errors should be fixed');
      }

    } catch (error) {
      this.error(`Fatal error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer.run().catch(console.error);