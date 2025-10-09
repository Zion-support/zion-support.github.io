#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fix TypeScript any types and improve type safety
 * This script replaces common any types with proper TypeScript types
 */

class TypeScriptTypeFixer {
  constructor() {
    this.workspacePath = process.cwd();
    this.processedFiles = 0;
    this.fixedTypes = 0;
    this.errors = [];
  }

  // Read file safely
  readFile(filePath) {
    try {
      return fs.readFileSync(path.join(this.workspacePath, filePath), 'utf8');
    } catch (error) {
      this.errors.push(`Could not read file ${filePath}: ${error.message}`);
      return null;
    }
  }

  // Write file safely
  writeFile(filePath, content) {
    try {
      const fullPath = path.join(this.workspacePath, filePath);
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(fullPath, content);
      return true;
    } catch (error) {
      this.errors.push(`Error writing file ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Fix common any types
  fixAnyTypes(content) {
    let modifiedContent = content;
    let fixedCount = 0;

    // Common type replacements
    const typeReplacements = [
      // Event handlers
      { from: /: any\)/g, to: ': React.MouseEvent<HTMLElement>)' },
      { from: /: any\s*=/g, to: ': React.MouseEvent<HTMLElement> =' },
      
      // Window object
      { from: /\(window as any\)/g, to: '(window as Window & typeof globalThis)' },
      { from: /window as any/g, to: 'window as Window & typeof globalThis' },
      
      // Generic object types
      { from: /: any\[\]/g, to: ': unknown[]' },
      { from: /: any\s*\[\]/g, to: ': unknown[]' },
      
      // Function parameters
      { from: /\(.*?:\s*any\s*\)/g, to: (match) => match.replace(': any', ': unknown') },
      
      // Variable declarations
      { from: /const\s+(\w+)\s*:\s*any\s*=/g, to: 'const $1: unknown =' },
      { from: /let\s+(\w+)\s*:\s*any\s*=/g, to: 'let $1: unknown =' },
      { from: /var\s+(\w+)\s*:\s*any\s*=/g, to: 'var $1: unknown =' },
      
      // Function return types
      { from: /\):\s*any\s*{/g, to: '): unknown {' },
      { from: /\):\s*any\s*=>/g, to: '): unknown =>' },
      
      // Object properties
      { from: /\[\w+\]:\s*any/g, to: (match) => match.replace(': any', ': unknown') },
      
      // Generic any in angle brackets
      { from: /<any>/g, to: '<unknown>' },
      
      // API response types
      { from: /response:\s*any/g, to: 'response: Response' },
      { from: /data:\s*any/g, to: 'data: unknown' },
      
      // Error types
      { from: /error:\s*any/g, to: 'error: Error' },
      { from: /err:\s*any/g, to: 'err: Error' },
    ];

    typeReplacements.forEach(({ from, to }) => {
      const matches = modifiedContent.match(from);
      if (matches) {
        fixedCount += matches.length;
        modifiedContent = modifiedContent.replace(from, to);
      }
    });

    // Add proper imports for React types if needed
    if (modifiedContent.includes('React.MouseEvent') && !modifiedContent.includes("import React")) {
      const importStatement = "import React from 'react';\n";
      modifiedContent = importStatement + modifiedContent;
    }

    return { content: modifiedContent, fixedCount };
  }

  // Process a single file
  processFile(filePath) {
    const content = this.readFile(filePath);
    if (!content) return false;

    const { content: modifiedContent, fixedCount } = this.fixAnyTypes(content);
    
    if (fixedCount > 0) {
      if (this.writeFile(filePath, modifiedContent)) {
        this.fixedTypes += fixedCount;
        console.log(`✅ Fixed ${fixedCount} any types in ${filePath}`);
        return true;
      }
    }
    
    return false;
  }

  // Get all TypeScript files recursively
  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.errors.push(`Error reading directory ${dir}: ${error.message}`);
    }
    return files;
  }

  // Main execution
  async run() {
    console.log('🔧 Starting TypeScript type fixes...');
    
    const extensions = ['.ts', '.tsx'];
    const files = this.getAllFiles(this.workspacePath, extensions);
    
    // Filter out test files and node_modules
    const filteredFiles = files.filter(file => 
      !file.includes('node_modules') &&
      !file.includes('__tests__') &&
      !file.includes('.test.') &&
      !file.includes('.spec.') &&
      !file.includes('jest.setup') &&
      !file.includes('scripts/') &&
      !file.includes('netlify/') &&
      !file.includes('backup') &&
      !file.includes('dist/')
    );

    console.log(`📁 Found ${filteredFiles.length} TypeScript files to process`);

    for (const file of filteredFiles) {
      const relativePath = path.relative(this.workspacePath, file);
      if (this.processFile(relativePath)) {
        this.processedFiles++;
      }
    }

    // Summary
    console.log('\n📊 Summary:');
    console.log(`✅ Processed: ${this.processedFiles} files`);
    console.log(`🔧 Fixed: ${this.fixedTypes} any types`);
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }

    console.log('\n🎉 TypeScript type fixes completed!');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new TypeScriptTypeFixer();
  fixer.run().catch(console.error);
}

export default TypeScriptTypeFixer;