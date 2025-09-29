#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AdvancedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.reportFile = path.join(this.projectRoot, 'advanced-syntax-fix-report.json')}

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix specific patterns found in the linting errors
      const fixes = [
        // Fix unterminated string literals - add closing quotes
        {
          pattern: /(['"])([^'"]*?)(\n|$)/g,
          replacement: (match, quote, content, newline) => {
            if (content.includes('\\' + quote) || content.includes('`')) return match;
            if (content.trim().length > 0 && !content.endsWith(quote)) {
              return quote + content + quote + ';' + newline}
            return match}
        },
        // Fix missing semicolons after import statements
        {
          pattern: /^import\s+.*from\s+['"][^'"]+['"]\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after variable declarations
        {
          pattern: /(const|let|var)\s+\w+\s*=\s*[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing commas in object literals
        {
          pattern: /(\w+):\s*([^}\n]+)(\n\s*[^}])/g,
          replacement: '$1: $2,$3'
        },
        // Fix missing semicolons after function declarations
        {
          pattern: /function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after arrow functions
        {
          pattern: /const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after return statements
        {
          pattern: /return\s+[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after export statements
        {
          pattern: /export\s+(const|let|var|function|class|default)\s+[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after React component declarations
        {
          pattern: /(const|let|var)\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after JSX returns
        {
          pattern: /return\s*\(\s*<[^>]+>.*<\/[^>]+>\s*\)\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        }
      ];

      for (const fix of fixes) {
        const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
          fixedContent = newContent;
          hasChanges = true}
      }

      // Additional specific fixes for common patterns
      const specificFixes = [
        // Fix unterminated template literals
        {
          pattern: /`([^`]*?)(\n|$)/g,
          replacement: (match, content, newline) => {
            if (!content.includes('`') && content.trim().length > 0) {
              return '`' + content + '`;' + newline}
            return match}
        },
        // Fix missing semicolons after object destructuring
        {
          pattern: /(const|let|var)\s*\{[^}]+\}\s*=\s*[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after array destructuring
        {
          pattern: /(const|let|var)\s*\[[^\]]+\]\s*=\s*[^]+$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        }
      ];

      for (const fix of specificFixes) {
        const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
          fixedContent = newContent;
          hasChanges = true}
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true}

      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getAllFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
    
    return files}

  async fixAllFiles() {
    this.log('🔧 Starting advanced syntax fixing...');
    
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    
    const allFiles = [
      ...this.getAllFiles(srcDir),
      ...this.getAllFiles(pagesDir)
    ];

    this.log(`📁 Found ${allFiles.length} files to check`);

    for (const file of allFiles) {
      this.fixFile(file)}

    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);

    return {
      totalFiles: allFiles.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    }}

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: results,
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    return report}

  async run() {
    try {
      const results = await this.fixAllFiles();
      const report = this.generateReport(results);
      
      this.log('🎉 Advanced syntax fixing completed');
      return report} catch (error) {
      this.log(`💥 Advanced syntax fixing failed: ${error.message}`);
      throw error}
  }
}

// Run the advanced syntax fixer
const fixer = new AdvancedSyntaxFixer();
fixer.run().then(report => {
  console.log('✅ Advanced syntax fixing completed successfully');
  process.exit(0)}).catch(error => {
  console.error('❌ Advanced syntax fixing failed:', error.message);
  process.exit(1)});