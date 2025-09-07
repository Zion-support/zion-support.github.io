#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {INFO: ℹ️,SUCCESS: ✅,ERROR: ❌,WARNING: ⚠️,PROGRESS: 🔄}[type] ||ℹ️';
    console.log(`${prefix} [${timestamp}] ${message});
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath},WARNING');
        return false;
      }

      let content = fs.readFileSync(filePath,utf8);
      const originalContent = content;

      // Fix common syntax errors
      content = this.fixCommonSyntaxErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath},SUCCESS');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message},ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  fixCommonSyntaxErrors(content) {
    // Fix shebang syntax errors
    content = content.replace(/#!\/usr\/bin\/env node;/g,#!/usr/bin/env node');
    
    // Fix semicolon issues
    content = content.replace(/;/g,;);
    content = content.replace(/;$/gm,;);
    content = content.replace(/;$/g,;);
    
    // Fix quote issues
    content = content.replace(//g, );
    content = content.replace(//g, );
    
    // Fix require statements
    content = content.replace(/require\('([^]+)\)/g, "require('$1)");
    content = content.replace(/require\("([^"]+)"\)/g,require("$1"));
    
    // Fix object syntax
    content = content.replace(/,\)/g,));
    content = content.replace(/}/g, });
    content = content.replace(/]/g, ]);
    
    // Fix string concatenation issues
    content = content.replace(/\$\{([^}]+)\}\`/g,${$1});
    
    // Fix function syntax
    content = content.replace(/function\s+([^(]+)\s*\(\s*\)\s*\{/g,function $1() {);
    content = content.replace(/async\s+([^(]+)\s*\(\s*\)\s*\{/g,async $1() {);
    
    // Fix class syntax
    content = content.replace(/class\s+([^{]+)\s*\{/g,class $1  {);
    
    // Fix array syntax
    content = content.replace(/\[\s*/g,[);
    content = content.replace(/\s*\]/g, ]);
    
    // Fix object syntax
    content = content.replace(/\{\s*/g,{);
    content = content.replace(/\s*\}/g, });
    
    // Fix comment syntax
    content = content.replace(/\/\/\s*/g,//);
    content = content.replace(/\/\*\s*/g,/*);
    content = content.replace(/\s*\*\//g, */);
    
    // Fix template literal issues
    content = content.replace(/`([^`]+)`/g,`$1`);
    
    // Fix import/export syntax
    content = content.replace(/import\s+([^;]+);/g,import $1;);
    content = content.replace(/export\s+([^;]+);/g,export $1;);
    
    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, );
    content = content.replace(/=======\n/g, );
    content = content.replace(/    
    // Fix malformed code blocks
    content = content.replace(/`([^`]*)\`/g,`$1`);
    
    // Fix extra quotes in strings
    content = content.replace(/"([^"]*)"/g,"$1");
    content = content.replace(/([^]*)/g, "$1");
    
    // Fix malformed regex
    content = content.replace(/\/\/([^/]*)\/\//g,//$1//);
    
    // Fix malformed function calls
    content = content.replace(/\(\s*\)/g,());
    
    // Fix malformed object properties
    content = content.replace(/:\s*/g, : );
    content = content.replace(/\s*:/g, : );
    
    // Fix malformed array elements
    content = content.replace(/,\s*/g,,);
    content = content.replace(/\s*,/g,,);
    
    // Fix malformed template literals
    content = content.replace(/\$\{([^}]+)\}/g,${$1});
    
    // Fix malformed comments
    content = content.replace(/\/\/\s*/g,//);
    content = content.replace(/\/\*\s*/g,/*);
    content = content.replace(/\s*\*\//g, */);
    
    // Fix malformed strings
    content = content.replace(/"([^"]*)"/g,"$1");
    content = content.replace(/([^]*)/g, "$1");
    
    // Fix malformed numbers
    content = content.replace(/(\d+)/g,$1);
    
    // Fix malformed booleans
    content = content.replace(/true/g,true);
    content = content.replace(/false/g,false);
    content = content.replace(/null/g,null);
    content = content.replace(/undefined/g,undefined);
    
    // Fix malformed keywords
    content = content.replace(/if\s*\(\s*([^)]+)\s*\)/g,if ($1));
    content = content.replace(/else\s*/g,else);
    content = content.replace(/for\s*\(\s*([^)]+)\s*\)/g,for ($1));
    content = content.replace(/while\s*\(\s*([^)]+)\s*\)/g,while ($1));
    content = content.replace(/switch\s*\(\s*([^)]+)\s*\)/g,switch ($1));
    content = content.replace(/case\s+([^:]+): /g,case $1: );
    content = content.replace(/default\s*: /g,default: );
    content = content.replace(/break\s*;/g,break;);
    content = content.replace(/continue\s*;/g,continue;);
    content = content.replace(/return\s+([^;]+);/g,return $1;);
    content = content.replace(/throw\s+([^;]+);/g,throw $1;);
    content = content.replace(/try\s*\{/g,try {);
    content = content.replace(/catch\s*\(\s*([^)]+)\s*\)\s*\{/g,catch ($1) {);
    content = content.replace(/finally\s*\{/g,finally {);
    
    // Fix malformed operators
    content = content.replace(/=\s*=/g,=');
    content = content.replace(/==\s*=/g,=);
    content = content.replace(/===\s*/g,==);
    content = content.replace(/!=\s*/g,!=);
    content = content.replace(/!==\s*/g,!=);
    content = content.replace(/<\s*=/g,<');
    content = content.replace(/<=\s*/g,<);
    content = content.replace(/>\s*=/g,>');
    content = content.replace(/>=\s*/g,>);
    content = content.replace(/&&\s*/g,&&);
    content = content.replace(/\|\|\s*/g,||);
    content = content.replace(/!\s*/g,!);
    content = content.replace(/\+\s*/g,+);
    content = content.replace(/-\s*/g,-);
    content = content.replace(/\*\s*/g,*);
    content = content.replace(/\/\s*/g,/);
    content = content.replace(/%\s*/g,%);
    content = content.replace(/\+\+\s*/g,++);
    content = content.replace(/--\s*/g,--);
    content = content.replace(/\+=\s*/g,+=);
    content = content.replace(/-=\s*/g,-=);
    content = content.replace(/\*=\s*/g,*=);
    content = content.replace(/\/=\s*/g,/=);
    content = content.replace(/%=\s*/g,%=);
    
    // Fix malformed punctuation
    content = content.replace(/\./g,.);
    content = content.replace(/,/g,,);
    content = content.replace(/;/g,;);
    content = content.replace(/: /g, : );
    content = content.replace(/\(/g,(');
    content = content.replace(/\)/g,));
    content = content.replace(/\[/g,[);
    content = content.replace(/\]/g, ]);
    content = content.replace(/\{/g,{);
    content = content.replace(/\}/g, });
    
    return content;
  }

  async fixAllScripts() {
    this.log('🔧 Starting Comprehensive Syntax Fixer');
    
    const scriptPatterns = [**/*.cjs,**/*.js,**/*.mjs,scripts/**/*.cjs,scripts/**/*.js,automation/**/*.cjs,automation/**/*.js];

    const files = [];
    for (const pattern of scriptPatterns) {
      try {
        const matches = execSync(`find . -name "${pattern.replace('**/, )}" -type f`, { 
          cwd: this.projectRoot, 
          encoding: utf8}).trim().split('\n').filter(f => f);
        files.push(...matches);
      } catch (error) {
        // Ignore find errors
      }
    }

    const uniqueFiles = [...new Set(files)].filter(f => f && !f.includes('node_modules'));
    
    this.log(`Found ${uniqueFiles.length} files to check`);

    for (const file of uniqueFiles) {
      this.fixFile(file);
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: this.fixedFiles.length + this.errors.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFilesList: this.fixedFiles,
      errorList: this.errors
    };

    fs.writeFileSync('syntax-fix-report.json, JSON.stringify(report, null, 2));
    
    this.log(`\n📊 SYNTAX FIX REPORT`);
    this.log(`Fixed files: ${this.fixedFiles.length});
    this.log(`Errors: ${this.errors.length});
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed files: );
      this.fixedFiles.forEach(file => this.log(`  - ${file}));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors: );
      this.errors.forEach(error => this.log(`  - ${error.file}: ${error.error}));
    }
  }
}

const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllScripts().catch(console.error);

module.exports = ComprehensiveSyntaxFixer;