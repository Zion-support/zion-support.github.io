
#!/usr/bin/env node
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
class QuickSyntaxFixer {;
  constructor() {;
    this.fixedFiles = [];
  }
;
  log(message) {;
    console.log(`[QuickSyntaxFixer] ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`);
        return false;
      }
;
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const content = originalContent
        // Remove merge conflict markers

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {INFO: 'ℹ️',SUCCESS: '✅',ERROR: '❌',WARNING: '⚠️',PROGRESS: '🔄'}[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'WARNING');
        return false;
      }


      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

[\s\S]*?        .replace(/^>>>>>>>.*$/gm, ')


        .replace(/[\s\S]*?        .replace(/^>>>>>>>.*$/gm, '')




        // Fix module.exports
        .replace(/module\.exports\s*=\s*{;/g, 'module.exports = {')
        // Fix constructor
        .replace(/constructor\s*\(\s*\)\s*{;/g, 'constructor() {')
        // Fix empty lines with semicolons
        .replace(/^\s*;\s*$/gm, '')
        // Fix multiple semicolons
        .replace(/;+/g, ';')
        // Fix semicolons before commas
        .replace(/;\s*,/g, ',');
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting Quick Syntax Fixer');
    
    const criticalFiles = [
      'src/components/ServiceCard.tsx',
      'utils/accessibility.ts',
      'utils/auth.ts',
      'utils/db.ts',
      'utils/supabase.ts',
      'utils/types.ts'
    ];

    for (const file of criticalFiles) {
      await this.fixFile(file);
    }

    this.log(`✅ Fixed ${fixedCount} critical files`);
    return { fixedFiles: this.fixedFiles };
  }
}

const fixer = new QuickSyntaxFixer();
fixer.run().catch(console.error);


        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"


