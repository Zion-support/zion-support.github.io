#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Comprehensive syntax fixer for all common issues
 */

class SyntaxFixer {
  constructor() {
    this.fixedFiles = 0;
  }

  async fix() {
    console.log('🔧 Fixing all syntax errors...\n');
    
    try {
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      console.log(`\n✅ Syntax fixing completed!`);
      console.log(`📊 Files processed: ${this.fixedFiles}`);
      
    } catch (error) {
      console.error('❌ Error during syntax fixing:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Fix import statements
      content = content.replace(/'use client'"/g, "'use client';");
      content = content.replace(/from '([^']*)'"/g, "from '$1';");
      content = content.replace(/from "([^"]*)'"/g, 'from "$1";');
      
      // Fix JSX attributes
      content = content.replace(/<(\w+);/g, '<$1');
      content = content.replace(/(\w+)="([^"]*)";/g, '$1="$2"');
      content = content.replace(/(\w+)={([^}]*)};/g, '$1={$2}');
      
      // Fix object properties
      content = content.replace(/(\w+):\s*'([^']*)';/g, '$1: \'$2\',');
      content = content.replace(/(\w+):\s*"([^"]*)";/g, '$1: "$2",');
      content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2,');
      
      // Fix array items
      content = content.replace(/'([^']*)';/g, "'$1',");
      content = content.replace(/"([^"]*)";/g, '"$1",');
      
      // Fix function calls
      content = content.replace(/(\w+)\(\)"/g, '$1();');
      content = content.replace(/(\w+)\([^)]*\)"/g, (match) => match.slice(0, -1) + ';');
      
      // Fix closing braces and parentheses
      content = content.replace(/}"$/gm, '}');
      content = content.replace(/\)"$/gm, ')');
      
      // Fix template literals
      content = content.replace(/`([^`]*)`"/g, '`$1`');
      
      // Fix JSX text content
      content = content.replace(/>([^<]*);</g, '>$1<');
      
      // Fix trailing semicolons in wrong places
      content = content.replace(/;\s*$/gm, '');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/;\s*\)/g, ')');
      
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
const fixer = new SyntaxFixer();
fixer.fix().catch(console.error);