#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class QuickSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
  }

  log(message) {
    console.log(`[QuickSyntaxFixer] ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`);
        return false;
      }

      const originalContent = fs.readFileSync(filePath, 'utf8');
      const content = originalContent
        // Remove merge conflict markers
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> .*/g, '')
        .replace(/^>>>>>>>.*$/gm, '')

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

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting Quick Syntax Fixer');

    // Fix critical files first
    const criticalFiles = [
      'components/AccessibilityEnhancer.tsx',
      '.eslintrc.js',
      'ecosystem.config.cjs',
      'run-automation-suite.cjs',
      'scripts/fix-syntax-errors.cjs',
      'scripts/performance-monitor.cjs',
      'scripts/security-audit.cjs',
      'scripts/health-check.cjs',
    ];

    let fixedCount = 0;
    for (const file of criticalFiles) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`✅ Fixed ${fixedCount} critical files`);
    return { fixedFiles: this.fixedFiles };
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new QuickSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = QuickSyntaxFixer;
