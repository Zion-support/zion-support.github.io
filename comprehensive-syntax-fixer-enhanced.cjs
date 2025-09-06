#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class ComprehensiveSyntaxFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
<<<<<<< HEAD
    this.errors = [],
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),
=======
    this.errors = [];
    this.startTime = Date.now();
  }
<<<<<<< HEAD

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  }

  async fixFile(filePath) {
    try {
<<<<<<< HEAD
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix common syntax issues
      content = this.fixCommonSyntaxIssues(content);
      
      // Fix specific file type issues
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        content = this.fixTypeScriptIssues(content),
      }
      
      if (filePath.endsWith('.js') || filePath.endsWith('.cjs')) {
        content = this.fixJavaScriptIssues(content),
=======
      if (!fs.existsSync(filePath)) {
        return false;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
=======
;
  log(message) {;
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
;
  fixFile(filePath) {;
    try {;
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
;
      // Fix common syntax issues;
      content = this.fixCommonSyntaxIssues(content);
      ;
      // Fix specific file type issues;
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {;
        content = this.fixTypeScriptIssues(content);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
      }
      ;
      if (filePath.endsWith('.js') || filePath.endsWith('.cjs')) {;
        content = this.fixJavaScriptIssues(content);
      }
;
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
<<<<<<< HEAD
<<<<<<< HEAD
        this.log(`✅ Fixed: ${path.relative(this.projectRoot, filePath)}`);
        return true,
      }
      return false,
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message }),
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false,
=======
        this.log(`✅ Fixed: ${filePath}`);
        return true;
=======
        this.log(`✅ Fixed:${path.relative(this.projectRoot, filePath)}`);        return true;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
      }

      return false;
    } catch (error) {;
      this.errors.push({ file:filePath, error:error.message });
      this.log(`❌ Error fixing ${filePath} ${error.message}`);
      return false;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    }
  }
<<<<<<< HEAD

  fixCommonSyntaxErrors(content) {
    // Fix unterminated strings
    content = content.replace(/'([^']*)$/gm, "'$1'");
    content = content.replace(/"([^"]*)$/gm, '"$1"');
    
<<<<<<< HEAD
    // Fix malformed semicolons and commas
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/;\s*,/g, ',');
    content = content.replace(/,\s*,/g, ',');
    
    // Fix malformed object syntax
    content = content.replace(/\{\s*,\s*\}/g, '{}');
    content = content.replace(/\[\s*,\s*\]/g, '[]');
    
    // Fix malformed function calls
    content = content.replace(/\(\s*,\s*\)/g, '()');
    
    return content,
  }

  fixTypeScriptIssues(content) {
    // Fix malformed imports
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?/g, '');
    
    // Fix malformed exports
    content = content.replace(/export\s*{\s*}\s*;?/g, '');
    
    // Fix malformed interfaces
    content = content.replace(/interface\s+\w+\s*{\s*}\s*;?/g, '');
    
    // Fix malformed type definitions
    content = content.replace(/type\s+\w+\s*=\s*;\s*;?/g, '');
    
    return content,
  }

  fixJavaScriptIssues(content) {
    // Fix malformed require statements
    content = content.replace(/require\s*\(\s*\)\s*;?/g, '');
    
    // Fix malformed module.exports
    content = content.replace(/module\.exports\s*=\s*;\s*;?/g, '');
=======
    // Fix missing semicolons
    content = content.replace(/([^;}])\n/g, '$1;\n');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    
    // Fix malformed function declarations
    content = content.replace(/function\s*\(\s*\)\s*{/g, 'function() {');
    
    // Fix malformed arrow functions
    content = content.replace(/=>\s*{/g, '=> {');
    
    // Fix malformed object literals
    content = content.replace(/{([^}]*),([^}]*),/g, '{$1, $2,');
    
    return content,
=======
;
  fixCommonSyntaxIssues(content) {;
    // Remove merge conflict markers;
    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    ;
    // Fix malformed semicolons and commas;
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/;\s*,/g, ',');
    content = content.replace(/,\s*,/g, ',');
    ;
    // Fix malformed object syntax;
    content = content.replace(/\{\s*,\s*\}/g, '{}');
    content = content.replace(/\[\s*,\s*\]/g, '[]');
    ;
    // Fix malformed function calls;
    content = content.replace(/\(\s*,\s*\)/g, '()');
    ;
    return content;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
  }
;
  fixTypeScriptIssues(content) {;
    // Fix malformed imports;
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?/g, '');
    ;
    // Fix malformed exports;
    content = content.replace(/export\s*{\s*}\s*;?/g, '');
    ;
    // Fix malformed interfaces;
    content = content.replace(/interface\s+\w+\s*{\s*}\s*;?/g, '');
    ;
    // Fix malformed type definitions;
    content = content.replace(/type\s+\w+\s*=\s*;\s*;?/g, '');
    ;
    return content;
  }
;
  fixJavaScriptIssues(content) {;
    // Fix malformed require statements;
    content = content.replace(/require\s*\(\s*\)\s*;?/g, '');
    ;
    // Fix malformed module.exports;
    content = content.replace(/module\.exports\s*=\s*;\s*;?/g, '');
    ;
    // Fix malformed function declarations;
    content = content.replace(/function\s+\w*\s*\(\s*\)\s*{\s*}\s*;?/g, '');
    ;
    return content;
  }
<<<<<<< HEAD

  fixMalformedImports(content) {
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import/g, 'import { $1 } from "$2";\nimport');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*const/g, 'import { $1 } from "$2";\nconst');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*function/g, 'import { $1 } from "$2";\nfunction');
    
<<<<<<< HEAD
    for (const file of files) {
      this.fixFile(file),
    }
=======
    return content;
  }

  fixMalformedJSX(content) {
    // Fix malformed JSX tags
    content = content.replace(/<([^>]*)\s*>/g, '<$1>');
    content = content.replace(/<\/([^>]*)\s*>/g, '</$1>');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    
    // Fix malformed JSX attributes
    content = content.replace(/className\s*=\s*['"]([^'"]*)['"]/g, 'className="$1"');
    content = content.replace(/onClick\s*=\s*{([^}]*)}/g, 'onClick={$1}');
    
<<<<<<< HEAD
    if (this.errors.length > 0) {
      this.log('Files with errors: '),
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`),
      }),
=======
    return content;
  }

  async fixCriticalFiles() {
    this.log('🔧 Fixing critical files...');
    
    const criticalFiles = [
      'src/main.tsx',
      'src/App.tsx',
      'src/pages/index.tsx',
      'src/components/ui/button.tsx',
      'src/components/ui/input.tsx',
      'src/layout/AppHeader.tsx',
      'src/layout/MainNavigation.tsx'
    ];

    for (const file of criticalFiles) {
      await this.fixFile(file);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
=======
;
  async scanAndFix() {;
    this.log('🔍 Scanning for files with syntax issues...');
    ;
    const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
    const files = this.getAllFiles(this.projectRoot, fileExtensions);
    ;
    this.log(`Found ${files.length} files to check`);
    ;
    for (const file of files) {;
      this.fixFile(file);
    }
    ;
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);
    ;
    if (this.errors.length > 0) {;
      this.log('Files with errors:');
      this.errors.forEach(err => {;
        this.log(`  - ${err.file} ${err.error}`);
      });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
    }
  }
;
  getAllFiles(dir, extensions) {;
    let files = [];    const items = fs.readdirSync(dir);
    ;
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
      
      if (stat.isDirectory()) {
<<<<<<< HEAD
        // Skip node_modules, .next, .git, etc.
        if (!['node_modules', '.next', '.git', 'dist', 'build', 'out'].includes(item)) {
          files = files.concat(this.getAllFiles(fullPath, extensions)),
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath),
=======
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
      }
    }
    
    return files,
=======
      ;
      if (stat.isDirectory()) {;
        // Skip node_modules, .next, .git, etc.;
        if (!['node_modules', '.next', '.git', 'dist', 'build', 'out'].includes(item)) {;
          files = files.concat(this.getAllFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {;        files.push(fullPath);
      }
    }
    ;
    return files;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
  }

  async runTests() {
    this.log('🧪 Running tests...');
    
    try {
      execSync('npm run test:smoke', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('✅ Tests passed');
      return true;
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async buildProject() {
    this.log('🏗️ Building project...');
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('✅ Build successful');
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      files: this.fixedFiles,
      errorDetails: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer...');
    
    try {
      // Fix critical files first
      await this.fixCriticalFiles();
      
      // Try to build
      const buildSuccess = await this.buildProject();
      
      if (!buildSuccess) {
        // If build fails, fix all files
        await this.fixAllFiles();
        
        // Try building again
        await this.buildProject();
      }
      
      // Run tests
      await this.runTests();
      
      // Generate report
      const report = this.generateReport();
      
      this.log('🎉 Comprehensive Syntax Fixer completed!');
      this.log(`📊 Fixed ${report.fixedFiles} files`);
      this.log(`❌ ${report.errors} errors encountered`);
      
      return report;
    } catch (error) {
      this.log(`💥 Comprehensive Syntax Fixer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}
;
// Run the fixer;
const fixer = new ComprehensiveSyntaxFixer();
fixer.scanAndFix().catch(console.error);