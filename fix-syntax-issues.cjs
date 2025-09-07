#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SyntaxFixer {
  constructor() {
    this.appDir = path.join(process.cwd(), 'app');
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixSyntaxIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix duplicate export const metadata
      content = content.replace(/export const metadata = \{[^}]*\};\s*export const metadata = \{/g, 'export const metadata = {');
      
      // Fix duplicate properties in objects
      content = content.replace(/(\w+):\s*"[^"]*",\s*\1:\s*"[^"]*"/g, (match, prop) => {
        const parts = match.split(',');
        return parts[0] + ',';
      });
      
      // Fix duplicate title properties
      content = content.replace(/title:\s*"[^"]*",\s*title:\s*"[^"]*"/g, (match) => {
        const parts = match.split(',');
        return parts[0] + ',';
      });
      
      // Fix malformed import statements
      content = content.replace(/import\s*\{\s*\{\s*/g, 'import {');
      
      // Fix missing closing braces in objects
      content = content.replace(/(\w+):\s*'[^']*',\s*(\w+):\s*'[^']*',\s*(\w+):\s*'[^']*'\s*\}\s*$/gm, (match) => {
        if (!match.includes('}')) {
          return match + '}';
        }
        return match;
      });
      
      // Fix function declarations inside JSX
      content = content.replace(/(\s+)function\s+(\w+)\s*\([^)]*\)\s*\{/g, (match, indent, funcName) => {
        // Move function outside of JSX if it's inside
        if (content.indexOf('return (') < content.indexOf(match)) {
          return `\n${indent}const ${funcName} = (`;
        }
        return match;
      });
      
      // Fix missing semicolons
      content = content.replace(/(\w+)\s*\)\s*,\s*(\d+)\s*\)\s*;\s*$/gm, '$1), $2);');
      
      // Fix trailing commas in objects
      content = content.replace(/,(\s*[}\]])/g, '$1');
      
      // Fix malformed object properties
      content = content.replace(/(\w+):\s*;\s*$/gm, '$1: "",');
      
      // Fix missing commas between object properties
      content = content.replace(/(\w+):\s*"[^"]*"\s*\n\s*(\w+):/g, '$1: "$1",\n  $2:');
      
      // Fix duplicate closing braces
      content = content.replace(/\}\s*\}/g, '}');
      
      // Fix malformed JSX
      content = content.replace(/return\s*\(\s*<div[^>]*>\s*function\s+(\w+)/g, (match, funcName) => {
        return `const ${funcName} = (`;
      });
      
      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/\s+$/gm, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        return { success: true, message: 'Syntax issues fixed' };
      }
      
      return { success: true, message: 'No syntax issues found' };
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async processDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          await this.processDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
          const result = this.fixSyntaxIssues(fullPath);
          if (result.success) {
            this.log(`Fixed: ${fullPath}`, 'SUCCESS');
          } else {
            this.log(`Failed to fix: ${fullPath} - ${result.error}`, 'ERROR');
          }
        }
      }
    } catch (error) {
      this.log(`Error processing directory ${dirPath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting syntax fix in app directory...', 'INFO');
    
    if (!fs.existsSync(this.appDir)) {
      this.log('App directory not found', 'ERROR');
      return;
    }

    await this.processDirectory(this.appDir);
    
    this.log(`\n📊 Syntax Fix Summary:`, 'INFO');
    this.log(`✅ Files fixed: ${this.fixedFiles.length}`, 'SUCCESS');
    this.log(`❌ Errors: ${this.errors.length}`, this.errors.length > 0 ? 'ERROR' : 'SUCCESS');
    
    if (this.errors.length > 0) {
      this.log('\nErrors encountered:', 'ERROR');
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`, 'ERROR');
      });
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxFixer;