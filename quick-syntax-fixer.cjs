#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class QuickSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

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