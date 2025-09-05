#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');
;
console.log('🔧 Starting Simple Syntax Fixer...');
;
class SimpleSyntaxFixer {;
  constructor() {;
    this.fixedFiles = [];
    this.errors = [];
  }
;
  async run() {;
    try {;
      console.log('📁 Scanning for files with syntax errors...');
      ;
      // Find all JavaScript and TypeScript files;
      const files = this.findFiles(['.js', '.cjs', '.ts', '.tsx']);
      ;
      console.log(`Found ${files.length} files to check`);
      ;
      for (const file of files) {;
        try {;
          if (this.fixFile(file)) {;
            this.fixedFiles.push(file);
          }
        } catch (error) {;
          this.errors.push({ file, error:error.message });
        }
      }
;
      console.log(`\n✅ Fixed ${this.fixedFiles.length} files`);
      ;
      if (this.errors.length > 0) {;
        console.log(`\n❌ ${this.errors.length} files had errors:`);
        this.errors.forEach(({ file, error }) => {;
          console.log(`  - ${file} ${error}`);
        });
      }
;
      // Test build after fixes;
      console.log('\n🔨 Testing build after fixes...');
      try {;
        execSync('npm run build', { stdio:'pipe' });
        console.log('✅ Build successful!');
      } catch (error) {;
        console.log('⚠️ Build still has issues, but syntax fixes applied');
      }
;
    } catch (error) {;
      console.error('❌ Error during syntax fixing:', error.message);
    }
  }
;
  findFiles(extensions) {;
    const files = [];
    ;
    function scanDir(dir) {;
      try {;
        const items = fs.readdirSync(dir);
        ;
        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          ;
          if (stat.isDirectory()) {;
            // Skip node_modules and other common directories;
            if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {;
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {;
            const ext = path.extname(item);
            if (extensions.includes(ext)) {;
              files.push(fullPath);
            }
          }
        }
      } catch (error) {;
        // Ignore permission errors;
      }
    }
    ;
    scanDir('.');
    return files;
  }
;
  fixFile(filePath) {;
    try {;
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      ;
      // Fix common syntax errors;
      content = this.fixCommonErrors(content);
      ;
      if (content !== originalContent) {;
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed:${filePath}`);
        return true;
      }
      ;
      return false;
    } catch (error) {;
      console.log(`⚠️ Could not fix ${filePath} ${error.message}`);
      return false;
    }
  }
;
  fixCommonErrors(content) {;
    // Fix object property syntax errors;
    content = content.replace(/:\s*:\s*/g, ':');
    content = content.replace(/,\s*:\s*/g, ':');
    content = content.replace(/{\s*:\s*/g, '{ ');
    content = content.replace(/}\s*:\s*/g, '} ');
    ;
    // Fix function parameter syntax;
    content = content.replace(/\(\s*:\s*/g, '(');
    content = content.replace(/,\s*:\s*/g, ', ');
    ;
    // Fix array syntax;
    content = content.replace(/\[\s*:\s*/g, '[');
    content = content.replace(/,\s*:\s*/g, ', ');
    ;
    // Fix string concatenation;
    content = content.replace(/'\s*\+\s*'/g, "''");
    content = content.replace(/"\s*\+\s*"/g, '""');
    ;
    // Fix missing semicolons;
    content = content.replace(/([^;}])\n/g, '$1;\n');
    ;
    // Fix duplicate colons;
    content = content.replace(/:/g, ':');
    ;
    // Fix malformed object properties;
    content = content.replace(/(\w+)\s*:\s*:\s*([^,}]+)/g, '$1:$2');
    ;
    // Fix malformed function calls;
    content = content.replace(/(\w+)\s*\(\s*:\s*/g, '$1(');
    ;
    return content;
  }
}
;
// Run the fixer;
const fixer = new SimpleSyntaxFixer();
fixer.run().catch(console.error);
=======

console.log('🚀 Starting Simple Syntax Fixer');

// Fix specific syntax issues
function fixSimpleSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix HTML entity issues
    content = content.replace(/&amp;apos;/g, "'");
    content = content.replace(/&amp;quot;/g, '"');
    content = content.replace(/&amp;lt;/g, '<');
    content = content.replace(/&amp;gt;/g, '>');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');

    // Fix import statements
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React from "react",/g,
      'import React from "react";'
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );

    // Fix export statements
    content = content.replace(
      /export default function (\w+)\(\): JSX\.Element \{/g,
      'export default function $1(): JSX.Element {'
    );
    content = content.replace(
      /export interface (\w+) \{;/g,
      'export interface $1 {'
    );
    content = content.replace(
      /export const (\w+): (\w+)\[\] = \[;/g,
      'export const $1: $2[] = [];'
    );

    // Fix JSX syntax
    content = content.replace(/&lt;main&gt;/g, '<main>');
    content = content.replace(/&lt;\/main&gt;/g, '</main>');
    content = content.replace(/&lt;div&gt;/g, '<div>');
    content = content.replace(/&lt;\/div&gt;/g, '</div>');

    // Fix object syntax issues
    content = content.replace(/\{\s*,/g, '{');
    content = content.replace(/,\s*\}/g, '}');
    content = content.replace(/,\s*,/g, ',');

    // Fix array syntax issues
    content = content.replace(/\[\s*,/g, '[');
    content = content.replace(/,\s*\]/g, ']');

    // Fix function parameter issues
    content = content.replace(/\(\s*,/g, '(');
    content = content.replace(/,\s*\)/g, ')');

    // Fix semicolon issues
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/,\s*;/g, ';');

    // Fix React component syntax
    content = content.replace(
      /const (\w+) = \(\) => \{/g,
      'const $1 = () => {'
    );
    content = content.replace(/export default (\w+),/g, 'export default $1;');

    // Fix TypeScript interface syntax
    content = content.replace(/interface (\w+) \{;/g, 'interface $1 {');
    content = content.replace(/type (\w+) = \{;/g, 'type $1 = {');

    // Fix JSX syntax
    content = content.replace(/<(\w+)\s*,/g, '<$1');
    content = content.replace(/,\s*>/g, '>');

    // Fix performance API issues
    if (content.includes('performance.')) {
      content = content.replace(/performance\./g, 'window.performance.');
    }

    // Fix React hooks issues
    content = content.replace(/useEffect\(\(\) => \{/g, 'useEffect(() => {');

    // Fix console statements
    content = content.replace(/console\.log\(/g, '// console.log(');

    // Fix specific parsing errors
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );
    content = content.replace(
      /export default function App\(\): JSX\.Element \{/g,
      'export default function App(): JSX.Element {'
    );

    // Fix vite config issues - handle the specific problematic line
    if (filePath.includes('vite.config.ts')) {
      // Split the problematic line and fix it
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (
          lines[i].includes(
            "import { defineConfig,splitVendorChunkPlugin } from 'vite', import react from '@vitejs/plugin-react', import path from 'node: path', export default defineConfig({"
          )
        ) {
          lines[i] =
            `import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({`;
        }
      }
      content = lines.join('\n');
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (
      stat.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
    ) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
try {
  const files = getAllFiles('/workspace');
  let fixedCount = 0;

  console.log(`Found ${files.length} files to check`);

  for (const file of files) {
    if (fixSimpleSyntaxIssues(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  }

  console.log(`\n🎯 Fixed ${fixedCount} files`);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
