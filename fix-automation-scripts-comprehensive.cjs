#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutomationScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.scriptsDir = path.join(this.projectRoot, 'scripts');
    this.fixedCount = 0;
    this.errorCount = 0}

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  fixCommonSyntaxErrors(content) {
    let fixed = content;

    // Fix unterminated strings
    fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, text, newline) => {
      if (text.includes('\n') || text.length > 100) {
        return match; // Skip very long strings that might be intentional
      }
      return quote + text + quote + (newline === '\n' ? ';' : '')});

    // Fix missing quotes in object keys
    fixed = fixed.replace(/(\w+):/g, '"$1":');

    // Fix unterminated template literals
    fixed = fixed.replace(/`([^`]*?)(\n|$)/g, (match, text, newline) => {
      if (text.includes('${') && !text.includes('}')) {
        return match; // Skip template literals with unclosed expressions
      }
      return '`' + text + '`' + (newline === '\n' ? ';' : '')});

    // Fix missing semicolons
    fixed = fixed.replace(/([^}])\n/g, '$1;\n');

    // Fix unterminated comments
    fixed = fixed.replace(/\/\*([^*]|\*(?!\/))*$/g, '/* */');

    // Fix malformed object literals
    fixed = fixed.replace(/,(\s*[}\]])/g, '$1');

    // Fix missing commas in arrays and objects
    fixed = fixed.replace(/([^}\]])\s*\n\s*([}\]])/g, '$1,\n$2');

    // Fix unterminated function calls
    fixed = fixed.replace(/(\w+)\s*\(\s*([^)]*?)(\n|$)/g, (match, func, args, newline) => {
      if (args.includes('(') && !args.includes(')')) {
        return match; // Skip functions with unclosed parentheses
      }
      return func + '(' + args + ')' + (newline === '\n' ? ';' : '')});

    return fixed}

  fixSpecificFileIssues(filePath, content) {
    let fixed = content;

    // Fix specific issues in known files
    if (filePath.includes('comprehensive-website-analyzer.cjs')) {
      fixed = fixed.replace(/User-Agent':/g, '"User-Agent":')}

    if (filePath.includes('health-checker.js')) {
      fixed = fixed.replace(/,\s*$/gm, '')}

    if (filePath.includes('link-checker.js')) {
      fixed = fixed.replace(/__dirname,\.\./g, '__dirname, "..")}

    if (filePath.includes('performance-monitor.js')) {
      // Fix template literal issues
      fixed = fixed.replace(/`([^`]*?)\$\{([^}]*?)\|\|([^}]*?)\}s`/g, '`$1${$2 || $3}s`')}

    if (filePath.includes('comprehensive-test-automation.js')) {
      fixed = fixed.replace(/;\s*\]\}/g, ']');
      fixed = fixed.replace(/\]\}\s*fs\.writeFileSync/g, '];\n    fs.writeFileSync')}

    return fixed}

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = this.fixCommonSyntaxErrors(content);
      fixed = this.fixSpecificFileIssues(filePath, fixed);

      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        this.log(`✅ Fixed syntax errors in ${path.basename(filePath)}`);
        this.fixedCount++;
        return true}
      return false} catch (error) {
      this.log(`❌ Error fixing ${path.basename(filePath)}: ${error.message}`);
      this.errorCount++;
      return false}
  }

  async fixAllScripts() {
    this.log('🔧 Starting comprehensive automation script fixing...');

    const files = fs.readdirSync(this.scriptsDir);
    const scriptFiles = files.filter(file => 
      file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')
    );

    this.log(`📁 Found ${scriptFiles.length} script files to check`);

    for (const file of scriptFiles) {
      const filePath = path.join(this.scriptsDir, file);
      await this.fixFile(filePath)}

    // Also fix root level automation files
    const rootFiles = [
      'run-automation-suite.cjs',
      'fix-all-automation-syntax.cjs',
      'fix-and-run-automations.cjs'
    ];

    for (const file of rootFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        await this.fixFile(filePath)}
    }

    this.log(`\n📊 Fixing Summary:`);
    this.log(`✅ Fixed: ${this.fixedCount} files`);
    this.log(`❌ Errors: ${this.errorCount} files`);
    this.log(`🎉 Automation script fixing completed!`)}
}

// Run the fixer
const fixer = new AutomationScriptFixer();
fixer.fixAllScripts().catch(console.error);