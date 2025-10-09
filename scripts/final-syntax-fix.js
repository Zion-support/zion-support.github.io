#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Final comprehensive syntax fixer
 */

class FinalSyntaxFixer {
  constructor() {
    this.fixedFiles = 0;
  }

  async fix() {
    console.log('🔧 Final syntax fixing...\n');
    
    try {
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      console.log(`\n✅ Final syntax fixing completed!`);
      console.log(`📊 Files processed: ${this.fixedFiles}`);
      
    } catch (error) {
      console.error('❌ Error during final syntax fixing:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Fix object property separators
      content = content.replace(/(\w+):\s*'([^']*)';/g, '$1: \'$2\',');
      content = content.replace(/(\w+):\s*"([^"]*)";/g, '$1: "$2",');
      content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2,');
      
      // Fix array item separators
      content = content.replace(/'([^']*)';/g, "'$1',");
      content = content.replace(/"([^"]*)";/g, '"$1",');
      
      // Fix import statement separators
      content = content.replace(/import\s*{\s*([^}]*);\s*([^}]*)\s*}/g, 'import { $1, $2 }');
      content = content.replace(/import\s*{\s*([^}]*);\s*([^}]*);\s*([^}]*)\s*}/g, 'import { $1, $2, $3 }');
      content = content.replace(/import\s*{\s*([^}]*);\s*([^}]*);\s*([^}]*);\s*([^}]*)\s*}/g, 'import { $1, $2, $3, $4 }');
      
      // Fix function call separators
      content = content.replace(/\(\s*([^)]*);\s*([^)]*)\s*\)/g, '($1, $2)');
      content = content.replace(/\(\s*([^)]*);\s*([^)]*);\s*([^)]*)\s*\)/g, '($1, $2, $3)');
      
      // Fix object method calls
      content = content.replace(/\.(\w+)\s*\(\s*([^)]*);\s*([^)]*)\s*\)/g, '.$1($2, $3)');
      
      // Fix specific patterns
      content = content.replace(/behavior:\s*'smooth';\s*block:\s*'center'/g, "behavior: 'smooth', block: 'center'");
      content = content.replace(/behavior:\s*"smooth";\s*block:\s*"center"/g, 'behavior: "smooth", block: "center"');
      
      // Fix trailing semicolons in wrong places
      content = content.replace(/;\s*$/gm, '');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/;\s*\)/g, ')');
      content = content.replace(/;\s*,/g, ',');
      
      // Fix missing semicolons where needed
      content = content.replace(/(\w+)\s*$/gm, '$1;');
      content = content.replace(/;\s*;/g, ';');
      
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
const fixer = new FinalSyntaxFixer();
fixer.fix().catch(console.error);