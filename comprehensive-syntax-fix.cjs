#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix missing closing braces and parentheses
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      const openParens = (content.match(/\(/g) || []).length;
      const closeParens = (content.match(/\)/g) || []).length;

      // Fix missing closing braces
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
      }

      // Fix missing closing parentheses
      if (openParens > closeParens) {
        const missingParens = openParens - closeParens;
        content += ')'.repeat(missingParens);
      }

      // Fix function definitions outside of components
      content = content.replace(/(\s+)(function\s+\w+)/g, '\n\n$2');

      // Fix missing semicolons in variable declarations
      content = content.replace(/(\w+)\s*=\s*[^;]+(?!;)\s*$/gm, (match) => {
        if (!match.includes(';') && !match.includes('{') && !match.includes('}')) {
          return match + ';';
        }
        return match;
      });

      // Fix object literal syntax
      content = content.replace(/(\w+)\s*:\s*([^,}]+)(?=\s*[,}])/g, '$1: $2');

      // Fix array syntax
      content = content.replace(/\[\s*([^\]]+)\s*\]/g, '[$1]');

      // Fix JSX closing tags
      content = content.replace(/(\s+)<\/\w+>\s*\)\s*$/gm, '$1</div>');

      // Fix missing return statements
      if (content.includes('export default function') && !content.includes('return')) {
        content = content.replace(/(export default function[^{]+{)/g, '$1\n  return (');
      }

      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/\s+$/gm, '');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles++;
        this.log(`Fixed syntax errors in: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixSpecificFiles() {
    const filesToFix = [
      'app/about/page.tsx',
      'app/services/ai-project-manager/page.tsx',
      'app/services/automation/page.tsx',
      'app/services/consulting/page.tsx',
      'pages/api/admin/analytics/summary.ts'
    ];

    for (const file of filesToFix) {
      this.fixFile(file);
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive syntax fixing...');
    
    try {
      await this.fixSpecificFiles();
      
      this.log('\n📊 Comprehensive Syntax Fixing Report');
      this.log('='.repeat(50));
      this.log(`Files Fixed: ${this.fixedFiles}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.errors.length > 0) {
        this.log('\nErrors encountered:');
        this.errors.forEach(error => this.log(`  - ${error}`, 'ERROR'));
      }
      
      this.log('\n✅ Comprehensive syntax fixing completed');
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;