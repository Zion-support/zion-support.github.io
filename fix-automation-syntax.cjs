#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutomationSyntaxFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
  }

  async fixAllAutomationFiles() {
    console.log('🔧 Starting automation syntax fixing...');
    
    const automationDir = path.join(__dirname, 'automation');
    const scriptsDir = path.join(__dirname, 'scripts');
    
    // Fix automation directory files
    await this.fixDirectory(automationDir);
    
    // Fix scripts directory files
    await this.fixDirectory(scriptsDir);
    
    console.log(`✅ Fixed ${this.fixes.length} files`);
    if (this.errors.length > 0) {
      console.log(`❌ ${this.errors.length} errors encountered`);
    }
  }

  async fixDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.js') || file.endsWith('.cjs')) {
        const filePath = path.join(dir, file);
        await this.fixFile(filePath);
      }
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixSyntax(content);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixes.push(filePath);
        console.log(`✅ Fixed: ${path.basename(filePath)}`);
      }
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.log(`❌ Error fixing ${path.basename(filePath)}: ${error.message}`);
    }
  }

  fixSyntax(content) {
    let fixed = content;
    
    // Fix common syntax errors
    fixed = fixed.replace(/this\.\w+\s*=\s*\[\];,;,/g, 'this.$1 = [];');
    fixed = fixed.replace(/this\.\w+\s*=\s*\{;,/g, 'this.$1 = {');
    fixed = fixed.replace(/class:\s*(\w+)/g, 'class $1');
    fixed = fixed.replace(/constructor\(\)\s*\{/g, 'constructor() {');
    fixed = fixed.replace(/async:\s*(\w+)/g, 'async $1');
    fixed = fixed.replace(/for:\s*\(/g, 'for (');
    fixed = fixed.replace(/if:\s*\(/g, 'if (');
    fixed = fixed.replace(/try:\s*\{/g, 'try {');
    fixed = fixed.replace(/catch:\s*\(/g, 'catch (');
    fixed = fixed.replace(/switch:\s*\(/g, 'switch (');
    fixed = fixed.replace(/case;\s*/g, 'case ');
    fixed = fixed.replace(/break;$/gm, 'break;');
    fixed = fixed.replace(/return:\s*/g, 'return ');
    fixed = fixed.replace(/const\s+(\w+):\s*=/g, 'const $1 =');
    fixed = fixed.replace(/let\s+(\w+):\s*=/g, 'let $1 =');
    fixed = fixed.replace(/var\s+(\w+):\s*=/g, 'var $1 =');
    
    // Fix object property syntax
    fixed = fixed.replace(/(\w+):\s*(\w+)/g, '$1: $2');
    
    // Fix string concatenation issues
    fixed = fixed.replace(/",\s*"/g, '", "');
    fixed = fixed.replace(/`,\s*`/g, '`, `');
    
    // Fix function calls
    fixed = fixed.replace(/spawn\(,\s*node/g, 'spawn("node');
    fixed = fixed.replace(/spawn\(,\s*`/g, 'spawn(`');
    
    // Remove duplicate semicolons
    fixed = fixed.replace(/;;+/g, ';');
    
    // Fix array syntax
    fixed = fixed.replace(/\[\];,;,/g, '[];');
    
    return fixed;
  }
}

// Run the fixer
const fixer = new AutomationSyntaxFixer();
fixer.fixAllAutomationFiles().then(() => {
  console.log('🎉 Automation syntax fixing completed!');
}).catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});