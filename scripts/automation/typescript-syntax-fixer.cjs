#!/usr/bin/env node

/**
 * TypeScript Syntax Fixer - PM2 Automation
 * Automatically fixes common TypeScript syntax errors and malformed JSX
 * Runs every 15 minutes to maintain TypeScript code quality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'typescript-syntax-fixer-report.json');
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.warnings = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: '\x1b[34m',
      success: '\x1b[32m',
      warning: '\x1b[33m',
      error: '\x1b[31m',
      reset: '\x1b[0m'
    };
    
    console.log(`${colors[type]}[${type.toUpperCase()}]${colors.reset} [${timestamp}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting TypeScript Syntax Fixer...', 'info');
    
    try {
      // Step 1: Fix malformed JSX syntax
      await this.fixMalformedJSX();
      
      // Step 2: Fix malformed TypeScript interfaces
      await this.fixMalformedInterfaces();
      
      // Step 3: Fix malformed function declarations
      await this.fixMalformedFunctions();
      
      // Step 4: Fix malformed imports
      await this.fixMalformedImports();
      
      // Step 5: Fix malformed component structures
      await this.fixMalformedComponents();
      
      // Step 6: Generate report
      await this.generateReport();
      
      this.log(`✅ TypeScript Syntax Fixer completed! Fixed ${this.fixesApplied} issues`, 'success');
      
    } catch (error) {
      this.log(`❌ Error in TypeScript Syntax Fixer: ${error.message}`, 'error');
      this.warnings.push(`Runtime error: ${error.message}`);
    }
  }

  async fixMalformedJSX() {
    this.log('🔧 Fixing malformed JSX syntax...', 'info');
    
    const jsxFixes = [
      // Fix malformed JSX closing tags
      { pattern: /<\/>([a-zA-Z][a-zA-Z0-9]*)/g, replacement: '</$1>' },
      { pattern: /<\/>([a-zA-Z][a-zA-Z0-9]*)\s*>/g, replacement: '</$1>' },
      { pattern: /<\/>([a-zA-Z][a-zA-Z0-9]*)\s*\)/g, replacement: '</$1>' },
      
      // Fix malformed JSX attributes
      { pattern: /transition=\{\{\s*duration:\s*any(\d+\.?\d*)/g, replacement: 'transition={{ duration: $1' },
      { pattern: /color:\s*any'([^']+)'/g, replacement: "color: '$1'" },
      { pattern: /id:\s*any'([^']+)'/g, replacement: "id: '$1'" },
      
      // Fix malformed JSX expressions
      { pattern: /\{\s*any([^}]+)\s*\}/g, replacement: '{$1}' },
      { pattern: /\[\s*any([^\]]+)\s*\]/g, replacement: '[$1]' },
      
      // Fix malformed JSX fragments
      { pattern: /<>\s*<\/>([^<]+)/g, replacement: '<>$1</>' },
      { pattern: /<>\s*<\/>([a-zA-Z][a-zA-Z0-9]*)/g, replacement: '<>$1</>' }
    ];

    await this.applyFixes(jsxFixes, '.tsx');
  }

  async fixMalformedInterfaces() {
    this.log('🔧 Fixing malformed TypeScript interfaces...', 'info');
    
    const interfaceFixes = [
      // Fix malformed interface properties
      { pattern: /(\w+)\?:\s*\{;/g, replacement: '$1?: {' },
      { pattern: /(\w+)\?:\s*any\(/g, replacement: '$1?: (' },
      { pattern: /(\w+):\s*any\(/g, replacement: '$1: (' },
      
      // Fix malformed type annotations
      { pattern: /:\s*any\(([^)]+)\)\s*=>/g, replacement: ': ($1) =>' },
      { pattern: /:\s*any\(\)\s*=>/g, replacement: ': () =>' },
      { pattern: /:\s*any\{/g, replacement: ': {' },
      { pattern: /:\s*any\[/g, replacement: ': [' },
      
      // Fix malformed generic types
      { pattern: /Array<([^>]+)>/g, replacement: 'Array<$1>' },
      { pattern: /Partial<([^>]+)>/g, replacement: 'Partial<$1>' }
    ];

    await this.applyFixes(interfaceFixes, '.ts');
    await this.applyFixes(interfaceFixes, '.tsx');
  }

  async fixMalformedFunctions() {
    this.log('🔧 Fixing malformed function declarations...', 'info');
    
    const functionFixes = [
      // Fix malformed function parameters
      { pattern: /\(\s*any([^)]+)\s*\)/g, replacement: '($1)' },
      { pattern: /\(\s*any\s*\)/g, replacement: '()' },
      
      // Fix malformed function return types
      { pattern: /:\s*any\(([^)]+)\)\s*=>/g, replacement: ': ($1) =>' },
      { pattern: /:\s*any\(\)\s*=>/g, replacement: ': () =>' },
      
      // Fix malformed arrow functions
      { pattern: /=>\s*any\{/g, replacement: '=> {' },
      { pattern: /=>\s*any\[/g, replacement: '=> [' },
      { pattern: /=>\s*any\(/g, replacement: '=> (' }
    ];

    await this.applyFixes(functionFixes, '.ts');
    await this.applyFixes(functionFixes, '.tsx');
  }

  async fixMalformedImports() {
    this.log('🔧 Fixing malformed imports...', 'info');
    
    const importFixes = [
      // Fix malformed lucide-react imports
      { pattern: /from 'lucide-react\.ts';/g, replacement: "from 'lucide-react';" },
      { pattern: /from "lucide-react\.ts";/g, replacement: 'from "lucide-react";' },
      
      // Fix malformed import statements
      { pattern: /}\s*from '([^']+)';/g, replacement: "} from '$1';" },
      { pattern: /}\s*from "([^"]+)";/g, replacement: '} from "$1";' },
      
      // Fix malformed default imports
      { pattern: /import\s+any\s+from/g, replacement: 'import from' },
      { pattern: /import\s+any\s+\{/g, replacement: 'import {' }
    ];

    await this.applyFixes(importFixes, '.ts');
    await this.applyFixes(importFixes, '.tsx');
  }

  async fixMalformedComponents() {
    this.log('🔧 Fixing malformed component structures...', 'info');
    
    const componentFixes = [
      // Fix malformed component declarations
      { pattern: /const\s+(\w+):\s*any\s*React\.FC/g, replacement: 'const $1: React.FC' },
      { pattern: /const\s+(\w+):\s*any\s*FC/g, replacement: 'const $1: FC' },
      
      // Fix malformed component props
      { pattern: /interface\s+(\w+)Props\s*\{/g, replacement: 'interface $1Props {' },
      { pattern: /type\s+(\w+)Props\s*=/g, replacement: 'type $1Props =' },
      
      // Fix malformed component returns
      { pattern: /return\s*\(\s*any\{/g, replacement: 'return ({' },
      { pattern: /return\s*\(\s*any\[/g, replacement: 'return ([' }
    ];

    await this.applyFixes(componentFixes, '.tsx');
  }

  async applyFixes(fixes, fileExtension) {
    const files = this.findFiles(fileExtension);
    
    files.forEach(filePath => {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let fileFixed = false;
        
        fixes.forEach(fix => {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileFixed = true;
          }
        });
        
        if (fileFixed) {
          fs.writeFileSync(filePath, content, 'utf8');
          this.errorsFixed.push(`Fixed syntax in ${path.relative(this.projectRoot, filePath)}`);
          this.fixesApplied++;
        }
      } catch (error) {
        this.warnings.push(`Could not process ${filePath}: ${error.message}`);
      }
    });
  }

  findFiles(extension) {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      warnings: this.warnings,
      status: this.fixesApplied > 0 ? 'success' : 'no-fixes-needed'
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`, 'info');
  }
}

// Main execution
if (require.main === module) {
  const fixer = new TypeScriptSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = TypeScriptSyntaxFixer;
