#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class AutomationSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0;
    this.skippedCount = 0}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  async findAutomationScripts() {
    const patterns = [
      'scripts/**/*.js',
      'scripts/**/*.cjs',
      'scripts/**/*.mjs'
    ];

    const allScripts = [];
    for (const pattern of patterns) {
      const files = glob.sync(pattern { cwd: this.projectRoot });
      allScripts.push(...files)}

    return allScripts}

  fixSyntaxErrors(content) {
    let fixed = content;

    // Fix common syntax errors
    const fixes = [
      // Fix import statements with commas
      { pattern: /import\s+(\w+)\s+from\s*,/g, replacement: 'import $1 from \'fs\';' }, { pattern: /import\s+(\w+)\s+from\s*,\s*(\w+)/g, replacement: 'import $1 from \'$2\';' },
      
      // Fix template literal syntax issues
      { pattern: /\$\{([^}]*)\?\?([^}]*)\}/g, replacement: '${$1 || $2}' },
      
      // Fix missing quotes in strings
      { pattern: /from\s+([^'";\s]+)(?=\s*;|\s*,|\s*$)/g, replacement: 'from \'$1\'' },
      
      // Fix malformed function calls
      { pattern: /console\.log\(`([^`]*)\$\{([^}]*)\?\?([^}]*)\}([^`]*)`\)/g, replacement: 'console.log(`$1${$2 || $3}$4`)' },
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
      
      // Fix malformed object properties
      { pattern: /(\w+):\s*([^}]+)(?=\s*[}])/g, replacement: '$1: $2' }];

    for (const fix of fixes) {
      fixed = fixed.replace(fix.pattern, fix.replacement)}

    return fixed}

  async fixScriptFile(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if file has syntax errors
      const hasErrors = this.detectSyntaxErrors(content);
      
      if (hasErrors) {
        const fixedContent = this.fixSyntaxErrors(content);
        fs.writeFileSync(fullPath, fixedContent, 'utf8');
        this.fixedCount++;
        this.log(`✅ Fixed syntax errors in: ${filePath}`)} else {
        this.skippedCount++;
        this.log(`⏭️  No syntax errors found in: ${filePath}`)}
    } catch (error) {
      this.log(`❌ Error processing ${filePath}: ${error.message}`)}
  }

  detectSyntaxErrors(content) {
    // Common syntax error patterns
    const errorPatterns = [
      /import\s+\w+\s+from\s*,/,  // import from comma
      /import\s+\w+\s+from\s*,\s*\w+/,  // import from comma word
      /\$\{([^}]*)\?\?([^}]*)\}/,  // malformed optional chaining
      /from\s+([^'";\s]+)(?=\s*;|\s*,|\s*$)/,  // missing quotes
      /console\.log\(`([^`]*)\$\{([^}]*)\?\?([^}]*)\}([^`]*)`\)/,  // malformed template literals
    ];

    return errorPatterns.some(pattern => pattern.test(content))}

  async run() {
    this.log('🔍 Starting automation script syntax fixer...');
    
    const scripts = await this.findAutomationScripts();
    this.log(`Found ${scripts.length} automation scripts to check`);
    
    for (const script of scripts) {
      await this.fixScriptFile(script)}
    
    this.log(`🎉 Automation syntax fixer completed!`);
    this.log(`📊 Summary: ${this.fixedCount} files fixed, ${this.skippedCount} files skipped`)}
}

// Run the fixer
const fixer = new AutomationSyntaxFixer();
fixer.run().catch(console.error);