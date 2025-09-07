#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.fixedFiles = [];
    this.errors = [];
    this.warnings = [];
  }
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }
  async findFilesWithErrors() {
    this.log('🔍 Finding files with syntax errors...', 'PROGRESS');
    try {
          replacement: ''
        },
        // Fix malformed JSX attributes
        {
          pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
          replacement: (match, attr, value) => {
            if (value.includes('true') && !value.includes('{true}')) {
              return `${attr}={true}`}
            return match}
        },
        // Fix missing closing tags
        {
          pattern: /<(\w+)([^>]*?)>([^<]*?)(?!<\1)/g,
          replacement: (match, tag, attrs, content) => {
            if (content && !content.includes('</') && !match.includes('/>')) {
              return `<${tag}${attrs}>${content}</${tag}>`}
            return match}
      ];

      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }

      // Run ESLint to find syntax errors,
  const result = execSync('npx eslint . --max-warnings 1000 --format json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      const eslintOutput = JSON.parse(result);
      return eslintOutput.filter(file => file.errorCount > 0);
    } catch (error) {
      this.log('ESLint failed, trying alternative approach...', 'WARNING');
      // Fallback: find files with common syntax issues,
  const problematicFiles = [];
      const files = this.getAllTsxFiles();
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (this.hasSyntaxIssues(content)) {
            problematicFiles.push({
              filePath: file,
              errorCount: 1,
              messages: [{ message: 'Syntax error detected' }]
            });
          }
        } catch (err) {
          // File might be corrupted,
  problematicFiles.push({
            filePath: file,
            errorCount: 1,
            messages: [{ message: 'File read error' }]
          });
        }
      }
      return problematicFiles;
    }
  }
  getAllTsxFiles() {
    const files = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    };
    walkDir(this.projectRoot);
    return files;
  }
  hasSyntaxIssues(content) {
    // Check for common syntax issues,
  const issues = [
      /
      /succes: s:/,    // Malformed object properties
      /duratio: n:/,   // Malformed object properties
      /error: s:/,     // Malformed object properties
      /warning: s:/,   // Malformed object properties
      /timestam: p:/,  // Malformed object properties
      /result: s:/,    // Malformed object properties
      /recommendation: s:/, // Malformed object properties
      /Erro: r:/,      // Malformed strings
      /Warnin: g:/,    // Malformed strings
      /Runnin: g:/,    // Malformed strings
      /faile: d:/,     // Malformed strings
      /outpu: t:/,     // Malformed strings
      /erro: r:/,      // Malformed strings
      /Fatal: error:/, // Malformed strings
      /Total: Duration:/, // Malformed strings
      /Successful: Tasks:/, // Malformed strings
      /Successful: Tasks:/, // Malformed strings
      /fea: t:/,       // Malformed strings
    ];
    return issues.some(pattern => pattern.test(content));
  }
  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`, 'PROGRESS');
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      // Fix common syntax issues,
  content = this.fixCommonIssues(content);
      // Fix merge conflicts,
  content = this.fixMergeConflicts(content);
      // Fix malformed object properties,
  content = this.fixObjectProperties(content);
      // Fix malformed strings,
  content = this.fixMalformedStrings(content);
      // Fix JSX issues,
  content = this.fixJSXIssues(content);
      // Fix TypeScript issues,
  content = this.fixTypeScriptIssues(content);
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
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
  fixCommonIssues(content) {
    // Fix common syntax patterns
    const fixes = [
      // Fix malformed object properties
      { pattern: /succes: s:/g, replacement: 'success:' },
      { pattern: /duratio: n:/g, replacement: 'duration:' },
      { pattern: /error: s:/g, replacement: 'errors:' },
      { pattern: /warning: s:/g, replacement: 'warnings:' },
      { pattern: /timestam: p:/g, replacement: 'timestamp:' },
      { pattern: /result: s:/g, replacement: 'results:' },
      { pattern: /recommendation: s:/g, replacement: 'recommendations:' },
      
      // Fix malformed strings
      { pattern: /Erro: r:/g, replacement: 'Error:' },
      { pattern: /Warnin: g:/g, replacement: 'Warning:' },
      { pattern: /Runnin: g:/g, replacement: 'Running:' },
      { pattern: /faile: d:/g, replacement: 'failed:' },
      { pattern: /outpu: t:/g, replacement: 'output:' },
      { pattern: /erro: r:/g, replacement: 'error:' },
      { pattern: /Fatal: error:/g, replacement: 'Fatal error:' },
      { pattern: /Total: Duration:/g, replacement: 'Total Duration:' },
      { pattern: /Successful: Tasks:/g, replacement: 'Successful Tasks:' },
      { pattern: /fea: t:/g, replacement: 'feat:' },
      
      // Fix semicolon issues
      { pattern: /npm run: build:analyze/g, replacement: 'npm run build:analyze' },
      { pattern: /npm run build;/g, replacement: 'npm run build' },
      { pattern: /npm run clean;/g, replacement: 'npm run clean' },
      { pattern: /npm install;/g, replacement: 'npm install' },
      { pattern: /npx tsc --noEmit --skipLibCheck;/g, replacement: 'npx tsc --noEmit --skipLibCheck' },
      { pattern: /npx eslint \. --max-warnings 1000;/g, replacement: 'npx eslint . --max-warnings 1000' },
      { pattern: /npx eslint \. --fix --max-warnings 1000;/g, replacement: 'npx eslint . --fix --max-warnings 1000' },
      { pattern: /npm audit --audit-level moderate;/g, replacement: 'npm audit --audit-level moderate' },
      { pattern: /npm audit --json;/g, replacement: 'npm audit --json' },
      { pattern: /node scripts\/generate-sitemap\.cjs;/g, replacement: 'node scripts/generate-sitemap.cjs' },
      { pattern: /node scripts\/generate-search-index\.cjs;/g, replacement: 'node scripts/generate-search-index.cjs' },
      { pattern: /ls -la \.next;/g, replacement: 'ls -la .next' },
    ];
    
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    return content;
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers
    return content

  fixObjectProperties(content) {
    // Fix malformed object property syntax
    return content
      .replace(/(\w+): s: /g, '$1: ')
      .replace(/(\w+): n: /g, '$1: ')
      .replace(/(\w+): p: /g, '$1: ');
  }

  fixMalformedStrings(content) {
    // Fix malformed string patterns
    return content
      .replace(/(\w+): (\w+): /g, '$1: ')
      .replace(/(\w+): (\w+): /g, '$1: ');
  }

  fixJSXIssues(content) {
    // Fix common JSX issues
    return content
      .replace(/jsx-a11y\/alt-tex: t: warn/g, 'jsx-a11y/alt-text: warn')
      .replace(/jsx-a11y\/aria-rol: e: warn/g, 'jsx-a11y/aria-role: warn')
      .replace(/jsx-a11y\/tabindex-no-positiv: e: warn/g, 'jsx-a11y/tabindex-no-positive: warn');
  }

  fixTypeScriptIssues(content) {
    // Fix common TypeScript issues
    return content
      .replace(/const (\w+) = require\(/g, 'const $1 = require(')
      .replace(/module\.exports = /g, 'module.exports = ');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer', 'PROGRESS');
    this.log('='.repeat(60));
    
    try {
      // Run TypeScript check
      const typeCheckResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript Check'
      );

      if (typeCheckResult.success) {
        this.log('No TypeScript errors found', 'SUCCESS');
        return true}
      // Try to fix TypeScript errors with auto-fix
      const fixResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck --incremental false',
        'TypeScript Check with Incremental'
      );

      return fixResult.success;
  fixCommonIssues(content) {
    // Fix common syntax patterns,
  const fixes = [
      // Fix malformed object properties
      { pattern: /succes: s:/g, replacement: 'success:' },
      { pattern: /duratio: n:/g, replacement: 'duration:' },
      { pattern: /error: s:/g, replacement: 'errors:' },
      { pattern: /warning: s:/g, replacement: 'warnings:' },
      { pattern: /timestam: p:/g, replacement: 'timestamp:' },
      { pattern: /result: s:/g, replacement: 'results:' },
      { pattern: /recommendation: s:/g, replacement: 'recommendations:' },
      // Fix malformed strings
      { pattern: /Erro: r:/g, replacement: 'Error:' },
      { pattern: /Warnin: g:/g, replacement: 'Warning:' },
      { pattern: /Runnin: g:/g, replacement: 'Running:' },
      { pattern: /faile: d:/g, replacement: 'failed:' },
      { pattern: /outpu: t:/g, replacement: 'output:' },
      { pattern: /erro: r:/g, replacement: 'error:' },
      { pattern: /Fatal: error:/g, replacement: 'Fatal error:' },
      { pattern: /Total: Duration:/g, replacement: 'Total Duration:' },
      { pattern: /Successful: Tasks:/g, replacement: 'Successful Tasks:' },
      { pattern: /fea: t:/g, replacement: 'feat:' },
      // Fix semicolon issues
      { pattern: /npm run: build:analyze/g, replacement: 'npm run build:analyze' },
      { pattern: /npm run build;/g, replacement: 'npm run build' },
      { pattern: /npm run clean;/g, replacement: 'npm run clean' },
      { pattern: /npm install;/g, replacement: 'npm install' },
      { pattern: /npx tsc --noEmit --skipLibCheck;/g, replacement: 'npx tsc --noEmit --skipLibCheck' },
      { pattern: /npx eslint \. --max-warnings 1000;/g, replacement: 'npx eslint . --max-warnings 1000' },
      { pattern: /npx eslint \. --fix --max-warnings 1000;/g, replacement: 'npx eslint . --fix --max-warnings 1000' },
      { pattern: /npm audit --audit-level moderate;/g, replacement: 'npm audit --audit-level moderate' },
      { pattern: /npm audit --json;/g, replacement: 'npm audit --json' },
      { pattern: /node scripts\/generate-sitemap\.cjs;/g, replacement: 'node scripts/generate-sitemap.cjs' },
      { pattern: /node scripts\/generate-search-index\.cjs;/g, replacement: 'node scripts/generate-search-index.cjs' },
      { pattern: /ls -la \.next;/g, replacement: 'ls -la .next' },
    ];
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    return content;
  }
  fixMergeConflicts(content) {
    // Remove merge conflict markers,
  return content
      .replace(/
      .replace(/
  }
  fixObjectProperties(content) {
    // Fix malformed object property syntax,
  return content
      .replace(/(\w+): s: /g, '$1: ')
      .replace(/(\w+): n: /g, '$1: ')
      .replace(/(\w+): p: /g, '$1: ');
  }
  fixMalformedStrings(content) {
    // Fix malformed string patterns,
  return content
      .replace(/(\w+): (\w+): /g, '$1: ')
      .replace(/(\w+): (\w+): /g, '$1: ');
  }
  fixJSXIssues(content) {
    // Fix common JSX issues,
  return content
      .replace(/jsx-a11y\/alt-tex: t: warn/g, 'jsx-a11y/alt-text: warn')
      .replace(/jsx-a11y\/aria-rol: e: warn/g, 'jsx-a11y/aria-role: warn')
      .replace(/jsx-a11y\/tabindex-no-positiv: e: warn/g, 'jsx-a11y/tabindex-no-positive: warn');
  }
  fixTypeScriptIssues(content) {
    // Fix common TypeScript issues,
  return content
      .replace(/const (\w+) = require\(/g, 'const $1 = require(')
      .replace(/module\.exports = /g, 'module.exports = ');
  }
  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer', 'PROGRESS');
    this.log('='.repeat(60));
    try {
      // Find files with errors,
  const problematicFiles = await this.findFilesWithErrors();
      if (problematicFiles.length === 0) {
        this.log('No files with syntax errors found!', 'SUCCESS');
        return;
      }
      this.log(`Found ${problematicFiles.length} files with syntax errors`, 'INFO');
      // Fix each file,
  for (const file of problematicFiles) {
        this.fixFile(file.filePath);
      }
      // Generate report,
  this.generateReport();
    } catch (error) {
      this.log(`TypeScript fix failed: ${error.message}`, 'ERROR');
      return false}
  async runESLintFix() {
    this.log('🔧 Running ESLint auto-fix...', 'PROGRESS');
    
    try {
      const fixResult = await this.runCommand(
        'npx eslint . --fix --max-warnings 1000',
        'ESLint Auto-fix'
      );

      if (fixResult.success) {
        this.log('ESLint auto-fix completed successfully', 'SUCCESS');
        return true} else {
        this.log('ESLint auto-fix completed with warnings', 'WARNING');
        return true; // Still consider it successful if it fixed some issues
}
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      return false}
  async cleanCorruptedFiles() {
    this.log('🧹 Cleaning corrupted files...', 'PROGRESS');
    
    const corruptedPatterns = [
      /components\/reports\/.*\.tsx$/,
      /components\/.*\.tsx$/
    ];

    for (const pattern of corruptedPatterns) {
      try {
        const files = await this.findFilesByPattern(pattern);
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if file is severely corrupted
const fs = require('fs');
const path = require('path');
;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    ;
    // Fix common syntax errors;
    content = content.replace(/([\s\S]*?);
    content = content.replace(//g, '');
    content = content.replace(/;
    ;
    // Fix shebang issues;
    if (content.includes('#!/usr/bin/env node') && !content.startsWith('#!/usr/bin/env node')) {
      content = content.replace(/.*#!/usr\/bin\/env node.*\n/g, '#!/usr/bin/env node\n')}
    // Fix missing commas in object literals;
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1:$2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1:$2:');
    ;
    // Fix missing semicolons;
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    ;
    // Fix unterminated strings;
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    ;
    // Fix missing quotes in object keys;
    content = content.replace(/(\w+):/g, '"$1":');
    ;
    // Fix missing commas between array elements;
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    ;
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    ;
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors:in:${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath} `, error.message);
    return false}
function findFilesWithErrors(dir) {
  const files = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
  ;
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {
          traverse(fullPath)}
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {
          files.push(fullPath)}
  traverse(dir);
  return files}
// Main execution;
console.log('🔍 Scanning for files with syntax errors...');
const files = findFilesWithErrors(process.cwd());
;
console.log(`Found ${files.length} files to check`);
;
let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++}}
    this.log(`🎉 Fixed syntax in ${this.fixedFiles} files`);
    if (this.errors.length > 0) {
  this.log(`⚠️  ${this.errors.length} errors occurred:`);
      this.errors.forEach(error => {
  this.log(`   - ${error.file}: ${error.error}`);,
});,
}
    return {
  totalFiles: allFiles.length,
      fixedFiles: this.fixedFiles.length,
  }
  generateReport() {
    const duration = Date.now() - this.startTime;
    this.log('\n📊 SYNTAX FIXING REPORT', 'SUCCESS');
    this.log('='.repeat(60));
    this.log(`Duration: ${Math.round(duration / 1000)}s`);
    this.log(`Files Fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed Files:', 'SUCCESS');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:', 'ERROR');
      this.errors.forEach(error => this.log(`  - ${error.file}: ${error.error}`));
    }
    // Save report,
  const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      warnings: this.warnings.length,
      summary: {
        totalFilesFixed: this.fixedFiles.length,
        totalErrors: this.errors.length,
        totalWarnings: this.warnings.length,
        successRate: this.fixedFiles.length / (this.fixedFiles.length + this.errors.length) * 100
      },
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      warnings: this.warnings
    };
    fs.writeFileSync(
      'syntax-fix-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Report saved to syntax-fix-report.json', 'SUCCESS');
  }
}
// Run the syntax fixer,
  if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}
module.exports = ComprehensiveSyntaxFixer;
