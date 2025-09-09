#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutomationScriptFixerV2 {
  constructor() {
    this.projectRoot = process.cwd();
    this.scriptsDir = path.join(this.projectRoot, 'scripts');
    this.fixedCount = 0;
    this.errorCount = 0}

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  fixImportStatements(content) {
    // Fix malformed import statements
    let fixed = content;

    // Fix double semicolons in imports
    fixed = fixed.replace(/import\s+([^]+);;+/g, 'import $1;
);

    // Fix malformed import statements with extra quotes and semicolons
    fixed = fixed.replace(/import\s+([^]+);;import\s+/g, 'import $1;\nimport ');

    // Fix import statements with extra quotes
    fixed = fixed.replace(/import\s+([^]+);";\s*'([^']+)';';import\s+/g, 'import $1;\nimport ');

    // Fix import statements with extra text
    fixed = fixed.replace(/import\s+([^]+);";\s*'([^']+)';';import\s+([^]+);";\s*'([^']+)';';import\s+/g, 'import $1;\nimport $3;\nimport ');

    // Clean up any remaining malformed imports
    fixed = fixed.replace(/import\s+([^]+);";\s*'([^']+)';';/g, 'import $1;');

    return fixed}

  fixObjectLiterals(content) {
    let fixed = content;

    // Fix object keys without quotes
    fixed = fixed.replace(/(\w+):/g, '"$1":');

    // Fix unterminated object literals
    fixed = fixed.replace(/,(\s*[}\]])/g, '$1');

    // Fix missing commas in arrays and objects
    fixed = fixed.replace(/([^}\]])\s*\n\s*([}\]])/g, '$1,\n$2');

    return fixed}

  fixStringLiterals(content) {
    let fixed = content;

    // Fix unterminated strings (but be more careful)
    fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, text, newline) => {
      // Only fix if it's a short string and doesn't contain special characters
      if (text.length < 50 && !text.includes('${') && !text.includes('\\')) {
        return quote + text + quote + (newline === '\n' ? ';' : '')}
      return match});

    return fixed}

  fixSpecificIssues(filePath, content) {
    let fixed = content;

    // Fix specific known issues
    if (filePath.includes('comprehensive-website-analyzer.cjs')) {
      fixed = fixed.replace(/User-Agent':/g, '"User-Agent":')}

    if (filePath.includes('link-checker.js')) {
      fixed = fixed.replace(/__dirname,\.\./g, '__dirname, "..")}

    if (filePath.includes('comprehensive-test-automation.js')) {
      fixed = fixed.replace(/;\s*\]\}/g, ']');
      fixed = fixed.replace(/\]\}\s*fs\.writeFileSync/g, '];\n    fs.writeFileSync')}

    return fixed}

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Apply fixes in order
      fixed = this.fixImportStatements(fixed);
      fixed = this.fixObjectLiterals(fixed);
      fixed = this.fixStringLiterals(fixed);
      fixed = this.fixSpecificIssues(filePath, fixed);

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
    this.log('🔧 Starting V2 automation script fixing...');

    const files = fs.readdirSync(this.scriptsDir);
    const scriptFiles = files.filter(file => 
      file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')
    );

    this.log(`📁 Found ${scriptFiles.length} script files to check`);

    for (const file of scriptFiles) {
      const filePath = path.join(this.scriptsDir, file);
      await this.fixFile(filePath)}

    this.log(`\n📊 Fixing Summary:`);
    this.log(`✅ Fixed: ${this.fixedCount} files`);
    this.log(`❌ Errors: ${this.errorCount} files`);
    this.log(`🎉 V2 automation script fixing completed!`)}
}

// Run the fixer
const fixer = new AutomationScriptFixerV2();
fixer.fixAllScripts().catch(console.error);