#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Fix import statements and basic syntax
 */

class ImportFixer {
  constructor() {
    this.fixedFiles = 0;
  }

  async fix() {
    console.log('🔧 Fixing import statements...\n');
    
    try {
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      console.log(`\n✅ Import fixing completed!`);
      console.log(`📊 Files processed: ${this.fixedFiles}`);
      
    } catch (error) {
      console.error('❌ Error during import fixing:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Fix 'use client' directive
      content = content.replace(/'use client',/g, "'use client';");
      
      // Fix import statements - replace commas with semicolons
      content = content.replace(/import\s+([^,]+),/g, 'import $1;');
      
      // Fix export statements
      content = content.replace(/export\s+([^,]+),/g, 'export $1;');
      
      // Fix function declarations
      content = content.replace(/function\s+(\w+)\s*\(/g, 'function $1(');
      
      // Fix const declarations
      content = content.replace(/const\s+([^,]+),/g, 'const $1;');
      
      // Fix let declarations
      content = content.replace(/let\s+([^,]+),/g, 'let $1;');
      
      // Fix var declarations
      content = content.replace(/var\s+([^,]+),/g, 'var $1;');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.fixedFiles++;
      }
      
    } catch (error) {
      console.warn(`⚠️  Could not process ${filePath}:`, error.message);
    }
  }
}

// Run the fixer
const fixer = new ImportFixer();
fixer.fix().catch(console.error);