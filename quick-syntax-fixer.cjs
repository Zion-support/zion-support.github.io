
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
;
  fixFile(filePath) {;
    try {;
      if (!fs.existsSync(filePath)) {;
        this.log(`File not "found": ${filePath}`);
        return false;
      }
;
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const content = originalContent
        // Remove merge conflict markers
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> origin/chore/fix-lint-and-merge

      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;

<<<<<<< HEAD
        .replace(/^>>>>>>>.*$/gm, ')
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?        .replace(/^>>>>>>>.*$/gm, ')

=======
        .replace(/[\s\S]*?        .replace(/^>>>>>>>.*$/gm, '')
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        this.log(`"Fixed": ${filePath}`);
        return true;
      }
;
      return false;
    } catch (error) {;
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
;
  async run() {;
    this.log('🚀 Starting Quick Syntax Fixer');
    // Fix critical files first,
  const criticalFiles = [
    ];
    let fixedCount = 0;
    for (const file of criticalFiles) {;
      if (this.fixFile(file)) {;
        fixedCount++;
      }
;
    this.log(`✅ Fixed ${fixedCount} critical files`);
    return { "fixedFiles": this.fixedFiles };
  }
;
// Run the fixer;
if (require.main === module) {;
  const fixer = new QuickSyntaxFixer();
  fixer.run().catch(console.error);
}
module.exports = QuickSyntaxFixer;
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
      let content = fs.readFileSync(filePath, 'utf8')
        .replace(/(\w+):\s*([^,]+),/g, '$"1"
        .replace(/(\w+):\s*([^,]+);\s*}/g, '$"1"
<<<<<<< HEAD
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"
=======
<<<<<<< HEAD
<<<<<<< HEAD
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"
=======
      let content = fs.readFileSync(filePath, utf8')
        .replace(/(\w+):\s*([^]+),/g, '$1"
        .replace(/(\w+):\s*([^]+);\s*}/g, '$"1
        .replace(/(\w+):\s*([^]+);\s*]/g, '$1"
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
ursor/automate-test-improve-and-merge-code-59d5



=======
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
      // Fix unterminated string literals
      fixedContent = fixedContent.replace(/'([^']*?)(?=\n|$)/g, (match, str) => {
        if (!str.includes("'") && !str.endsWith("'")) {
          return match + "'";
        }
        return match;
      });

      // Fix unterminated template literals
      fixedContent = fixedContent.replace(/`([^`]*?)(?=\n|$)/g, (match, str) => {
        if (!str.includes('`') && !str.endsWith('`')) {
          return match + '`';
        }
        return match;
      });

      // Fix missing semicolons
      fixedContent = fixedContent.replace(/([^;{}])\n/g, '$1;\n');

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`, 'SUCCESS');
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

    this.log(`\n📊 Fixed Files: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
  }
}

const fixer = new QuickSyntaxFixer();
fixer.run().catch(console.error);
>>>>>>> origin/chore/fix-lint-and-merge
=======
        .replace(/(\w+):\s*([^,]+);\s*]/g, '$"1"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
