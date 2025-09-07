<<<<<<< HEAD
#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
class AdvancedSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }
  log(message, type = 'INFO') {
    const prefix = { 'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️' }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }
  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      // Fix common syntax patterns,
  content = this.fixCommonPatterns(content);
      // Fix merge conflicts,
  content = this.fixMergeConflicts(content);
      // Fix malformed imports,
  content = this.fixImports(content);
      // Fix JSX issues,
  content = this.fixJSX(content);
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`, 'SUCCESS');
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }
  fixCommonPatterns(content) {
    const fixes = [
      // Fix malformed object properties
      { pattern: /(\w+): s: /g, replacement: '$1: ' },
      { pattern: /(\w+): n: /g, replacement: '$1: ' },
      { pattern: /(\w+): p: /g, replacement: '$1: ' },
      // Fix malformed strings
      { pattern: /Erro: r:/g, replacement: 'Error:' },
      { pattern: /Warnin: g:/g, replacement: 'Warning:' },
      { pattern: /Runnin: g:/g, replacement: 'Running:' },
      { pattern: /faile: d:/g, replacement: 'failed:' },
      { pattern: /outpu: t:/g, replacement: 'output:' },
      { pattern: /erro: r:/g, replacement: 'error:' },
      // Fix semicolon issues
      { pattern: /npm run: /g, replacement: 'npm run ' },
      { pattern: /npm run build;/g, replacement: 'npm run build' },
      { pattern: /npm run clean;/g, replacement: 'npm run clean' },
      { pattern: /npm install;/g, replacement: 'npm install' },
      // Fix malformed function calls
      { pattern: /(\w+): (\w+): /g, replacement: '$1: ' },
      // Fix unterminated strings
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      { pattern: /"([^"]*)$/gm, replacement: '"$1"' },
    ];
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    return content;
  }
  fixMergeConflicts(content) {
    return content
      .replace(/
      .replace(/
  }
  fixImports(content) {
    // Fix malformed import statements,
  return content
      .replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";')
      .replace(/import\s+([^{][^;]+);?/g, 'import $1;');
  }
  fixJSX(content) {
    // Fix common JSX issues,
  return content
      .replace(/jsx-a11y\/alt-tex: t: warn/g, 'jsx-a11y/alt-text: warn')
      .replace(/jsx-a11y\/aria-rol: e: warn/g, 'jsx-a11y/aria-role: warn')
      .replace(/jsx-a11y\/tabindex-no-positiv: e: warn/g, 'jsx-a11y/tabindex-no-positive: warn');
  }
  async run() {
    this.log('🚀 Starting Advanced Syntax Fixer', 'INFO');
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllTsxFiles(srcDir);
    this.log(`Found ${files.length} files to process`, 'INFO');
    for (const file of files) {
      this.fixFile(file);
    }
    this.log(`\n📊 Fixed ${this.fixedFiles.length} files`, 'SUCCESS');
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors occurred`, 'ERROR');
    }
  }
  getAllTsxFiles(dir) {
    const files = [];
    const walkDir = (currentDir) => {
      try {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting advanced syntax fixing...');

class AdvancedSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = [];
    this.filesProcessed = 0;
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
  }

  findSourceFiles() {
    const files = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
>>>>>>> origin/chore/fix-lint-and-merge
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
<<<<<<< HEAD
    };
    walkDir(dir);
    return files;
  }
}
// Run the fixer,
  if (require.main === module) {
  const fixer = new AdvancedSyntaxFixer();
  fixer.run().catch(console.error);
}
module.exports = AdvancedSyntaxFixer;
=======
    }
    
    scanDirectory(srcDir);
    return files;
  }

  fixAdvancedSyntaxErrors(content, filePath) {
    let fixed = content;
    let changes = 0;

    // Fix unterminated string literals - look for lines ending with single quotes
    fixed = fixed.replace(/^([^'\n]*'[^'\n]*)$/gm, (match, line) => {
      if (line.endsWith("'") && !line.endsWith("';") && !line.endsWith("',") && !line.endsWith("')") && !line.endsWith("'}")) {
        changes++;
        return line + ';';
      }
      return match;
    });

    // Fix unterminated string literals in import statements
    fixed = fixed.replace(/^import\s+.*?from\s+['"][^'"]*$/gm, (match) => {
      if (!match.endsWith(';') && !match.endsWith('"') && !match.endsWith("'")) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Fix unterminated string literals in JSX attributes
    fixed = fixed.replace(/className\s*=\s*["'][^"']*$/gm, (match) => {
      if (!match.endsWith('"') && !match.endsWith("'")) {
        changes++;
        return match + '"';
      }
      return match;
    });

    // Fix unterminated string literals in console.log statements
    fixed = fixed.replace(/console\.log\s*\(\s*['"][^'"]*$/gm, (match) => {
      if (!match.endsWith('"') && !match.endsWith("'")) {
        changes++;
        return match + '");';
      }
      return match;
    });

    // Fix unterminated string literals in return statements
    fixed = fixed.replace(/return\s+['"][^'"]*$/gm, (match) => {
      if (!match.endsWith('"') && !match.endsWith("'")) {
        changes++;
        return match + '";';
      }
      return match;
    });

    // Fix extra quotes at the end of lines
    fixed = fixed.replace(/;\s*'$/gm, ';');
    fixed = fixed.replace(/;\s*"$/gm, ';');

    // Fix missing semicolons after variable declarations
    fixed = fixed.replace(/^(const|let|var)\s+[^=]+=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';') && !match.includes('{') && !match.includes('(') && !match.includes('[')) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Fix missing semicolons after function calls
    fixed = fixed.replace(/^[a-zA-Z_$][a-zA-Z0-9_$]*\s*\([^)]*\)\s*$/gm, (match) => {
      if (!match.endsWith(';') && !match.includes('{') && !match.includes('=')) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Fix missing commas in object literals
    fixed = fixed.replace(/(\w+):\s*[^,}\n]+(\n\s*[a-zA-Z_$])/g, (match, key, rest) => {
      if (!match.includes(',')) {
        changes++;
        return match.replace(/(\n\s*[a-zA-Z_$])/, ',\n$1');
      }
      return match;
    });

    // Fix missing commas in array literals
    fixed = fixed.replace(/([^,\n]+)(\n\s*[^,\n\]]+)/g, (match, first, second) => {
      if (match.includes('[') && !match.includes(',') && !second.includes(']')) {
        changes++;
        return match.replace(second, ',' + second);
      }
      return match;
    });

    // Fix JSX syntax issues
    fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>/g, (match, tag, props) => {
      if (props && !props.endsWith('/') && !props.includes('>')) {
        const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
        if (selfClosingTags.includes(tag.toLowerCase())) {
          changes++;
          return `<${tag} ${props} />`;
        }
      }
      return match;
    });

    // Fix missing closing braces
    const openBraces = (fixed.match(/\{/g) || []).length;
    const closeBraces = (fixed.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missing = openBraces - closeBraces;
      fixed += '\n' + '}'.repeat(missing);
      changes += missing;
    }

    // Fix missing closing parentheses
    const openParens = (fixed.match(/\(/g) || []).length;
    const closeParens = (fixed.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missing = openParens - closeParens;
      fixed += ')'.repeat(missing);
      changes += missing;
    }

    // Fix missing closing brackets
    const openBrackets = (fixed.match(/\[/g) || []).length;
    const closeBrackets = (fixed.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      const missing = openBrackets - closeBrackets;
      fixed += ']'.repeat(missing);
      changes += missing;
    }

    // Fix React import issues
    fixed = fixed.replace(/^import\s+React\s+from\s+['"]react['"];?\s*$/gm, 'import React from \'react\';');
    fixed = fixed.replace(/^import\s+ReactDOM\s+from\s+['"]react-dom\/client['"];?\s*$/gm, 'import ReactDOM from \'react-dom/client\';');

    // Fix TypeScript import issues
    fixed = fixed.replace(/^import\s+.*?\s+from\s+['"][^'"]*;?\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Clean up extra whitespace and ensure proper line endings
    fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
    fixed = fixed.replace(/\s+$/gm, ''); // Remove trailing whitespace
    fixed = fixed.trim() + '\n';

    if (changes > 0) {
      this.log(`Fixed ${changes} advanced syntax issues in ${path.relative(this.projectRoot, filePath)}`);
      this.fixesApplied.push(`${changes} fixes in ${path.relative(this.projectRoot, filePath)}`);
    }

    return fixed;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixAdvancedSyntaxErrors(content, filePath);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.filesProcessed++;
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixAllFiles() {
    this.log('Finding source files...');
    const files = this.findSourceFiles();
    this.log(`Found ${files.length} files to process`);

    for (const file of files) {
      await this.fixFile(file);
    }

    this.log(`Processed ${this.filesProcessed} files`);
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      filesProcessed: this.filesProcessed,
      fixesApplied: this.fixesApplied,
      summary: {
        totalFixes: this.fixesApplied.length,
        success: this.fixesApplied.length > 0
      }
    };

    const reportPath = path.join(this.projectRoot, 'advanced-syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== ADVANCED SYNTAX FIX REPORT ===');
    this.log(`Files processed: ${report.filesProcessed}`);
    this.log(`Fixes applied: ${report.summary.totalFixes}`);
    this.log(`Success: ${report.summary.success ? 'YES' : 'NO'}`);
    this.log(`Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting advanced syntax fixing...');
    
    try {
      await this.fixAllFiles();
      await this.generateReport();
      this.log('Advanced syntax fixing completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new AdvancedSyntaxFixer();
fixer.run().catch(console.error);
>>>>>>> origin/chore/fix-lint-and-merge
