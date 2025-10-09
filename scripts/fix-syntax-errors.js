#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Fix common syntax errors in the codebase
 */

class SyntaxFixer {
  constructor() {
    this.fixes = {
      jsxQuotes: 0,
      objectSemicolons: 0,
      filesProcessed: 0
    };
  }

  async fix() {
    console.log('🔧 Starting syntax error fixes...\n');
    
    try {
      // Find all TypeScript/JavaScript files
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      console.log('\n📊 Syntax Fix Report:');
      console.log('─'.repeat(50));
      console.log(`Files processed: ${this.fixes.filesProcessed}`);
      console.log(`JSX quotes fixed: ${this.fixes.jsxQuotes}`);
      console.log(`Object semicolons fixed: ${this.fixes.objectSemicolons}`);
      
      console.log('\n✅ Syntax fixes completed successfully!');
    } catch (error) {
      console.error('❌ Error during syntax fixes:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Fix JSX attribute quotes
      content = this.fixJSXQuotes(content);
      
      // Fix object property semicolons
      content = this.fixObjectSemicolons(content);
      
      // Fix other common syntax errors
      content = this.fixOtherSyntaxErrors(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.fixes.filesProcessed++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  fixJSXQuotes(content) {
    // Fix JSX attributes with extra quotes
    const patterns = [
      // Fix attributes like href="value""
      { pattern: /(\w+)="([^"]+)""/g, replacement: '$1="$2"' },
      // Fix attributes like className="value""
      { pattern: /className="([^"]+)""/g, replacement: 'className="$1"' },
      // Fix closing tags with extra quotes
      { pattern: /<(\w+)"/g, replacement: '<$1' },
      // Fix text content with extra quotes
      { pattern: />([^<]+)"</g, replacement: '>$1<' }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        this.fixes.jsxQuotes += matches.length;
        content = content.replace(pattern, replacement);
      }
    });

    return content;
  }

  fixObjectSemicolons(content) {
    // Fix object properties with semicolons instead of commas
    const patterns = [
      // Fix properties like key: value;
      { pattern: /(\w+):\s*([^,}]+);\s*(\w+):/g, replacement: '$1: $2,\n    $3:' },
      // Fix last property with semicolon
      { pattern: /(\w+):\s*([^,}]+);\s*}/g, replacement: '$1: $2\n  }' },
      // Fix array elements with semicolons
      { pattern: /'([^']+)';\s*'([^']+)'/g, replacement: "'$1',\n    '$2'" }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        this.fixes.objectSemicolons += matches.length;
        content = content.replace(pattern, replacement);
      }
    });

    return content;
  }

  fixOtherSyntaxErrors(content) {
    // Fix other common syntax errors
    const patterns = [
      // Fix extra semicolons in comments
      { pattern: /\/\/\s*([^;]+);/g, replacement: '// $1' },
      // Fix missing commas in arrays
      { pattern: /(\w+)\s*\n\s*(\w+):/g, replacement: '$1,\n    $2:' },
      // Fix extra quotes in strings
      { pattern: /"([^"]+)""/g, replacement: '"$1"' }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });

    return content;
  }
}

// Run the syntax fixer
const syntaxFixer = new SyntaxFixer();
syntaxFixer.fix().catch(console.error);