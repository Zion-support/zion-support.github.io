#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class CriticalSyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0;
    this.errorCount = 0}

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`)}

  fixUnterminatedStrings(content) {
    let fixed = content;
    
    // Fix unterminated strings in object literals
    fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, text, newline) => {
      // Only fix if it's a short string and doesn't contain special characters
      if (text.length < 200 && !text.includes('${') && !text.includes('\\')) {
        return quote + text + quote + (newline === '\n' ? '', : '')}
      return match});

    // Fix specific patterns found in the build errors
    fixed = fixed.replace(/}'\`,/g, '}\'`');
    fixed = fixed.replace(/}'\`,\s*description:/g, '}\'`,\n      description:');
    fixed = fixed.replace(/}'\`,\s*author:/g, '}\'`,\n      author:');
    fixed = fixed.replace(/}'\`,\s*category:/g, '}\'`,\n      category:');
    fixed = fixed.replace(/}'\`,\s*answer:/g, '}\'`,\n      answer:');

    return fixed}

  fixObjectLiterals(content) {
    let fixed = content;
    
    // Fix missing commas in object literals
    fixed = fixed.replace(/([^}\]])\s*\n\s*([}\]])/g, '$1,\n$2');
    
    // Fix trailing commas
    fixed = fixed.replace(/,(\s*[}\]])/g, '$1');
    
    // Fix object keys without quotes
    fixed = fixed.replace(/(\w+):/g, '"$1":');

    return fixed}

  fixArrayLiterals(content) {
    let fixed = content;
    
    // Fix missing commas in arrays
    fixed = fixed.replace(/([^}\]])\s*\n\s*([}\]])/g, '$1,\n$2');
    
    // Fix unterminated array elements
    fixed = fixed.replace(/(['"])([^'"]*?)(\n|$)/g, (match, quote, text, newline) => {
      if (text.length < 100 && !text.includes('${')) {
        return quote + text + quote + (newline === '\n' ? '', : '')}
      return match});

    return fixed}

  fixSpecificFileIssues(filePath, content) {
    let fixed = content;

    // Fix specific issues in known problematic files
    if (filePath.includes('api.tsx')) {
      // Fix the specific API file issue
      fixed = fixed.replace(/}'\`,\s*description:/g, '}\'`,\n      description:')}

    if (filePath.includes('careers.tsx')) {
      // Fix the careers file issue
      fixed = fixed.replace(/Master\\'s degree in Computer Science or related field',\s*'/g, 
        'Master\\'s degree in Computer Science or related field\',\n        \'')}

    if (filePath.includes('case-studies.tsx')) {
      // Fix the case studies file issue
      fixed = fixed.replace(/efficiency and cost savings\.",\s*'/g, 
        'efficiency and cost savings.\",\n      \'')}

    if (filePath.includes('help.tsx')) {
      // Fix the help file issue
      fixed = fixed.replace(/provide a customized solution\.''/g, 
        'provide a customized solution.\'')}

    if (filePath.includes('press.tsx')) {
      // Fix the press file issue
      fixed = fixed.replace(/AI and automation capabilities\.",\s*'/g, 
        'AI and automation capabilities.\",\n      \'')}

    return fixed}

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Apply fixes in order
      fixed = this.fixUnterminatedStrings(fixed);
      fixed = this.fixObjectLiterals(fixed);
      fixed = this.fixArrayLiterals(fixed);
      fixed = this.fixSpecificFileIssues(filePath, fixed);

      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        this.log(`✅ Fixed critical syntax errors in ${path.basename(filePath)}`, 'SUCCESS');
        this.fixedCount++;
        return true}
      return false} catch (error) {
      this.log(`❌ Error fixing ${path.basename(filePath)}: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false}
  }

  async fixCriticalFiles() {
    this.log('🔧 Starting critical syntax error fixing...', 'INFO');

    // Focus on the files that are causing build failures
    const criticalFiles = [
      'pages/api.tsx',
      'pages/careers.tsx',
      'pages/case-studies.tsx',
      'pages/help.tsx',
      'pages/press.tsx'
    ];

    for (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        await this.fixFile(filePath)}
    }

    this.log(`\n📊 Critical Fixing Summary:`, 'INFO');
    this.log(`✅ Fixed: ${this.fixedCount} files`, 'SUCCESS');
    this.log(`❌ Errors: ${this.errorCount} files`, 'ERROR');
    this.log(`🎉 Critical syntax error fixing completed!`, 'SUCCESS')}
}

// Run the fixer
const fixer = new CriticalSyntaxErrorFixer();
fixer.fixCriticalFiles().catch(console.error);