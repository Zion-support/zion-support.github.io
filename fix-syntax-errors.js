#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fix common syntax errors in TypeScript/JavaScript files
 * - Remove trailing commas in interfaces and type definitions
 * - Fix malformed syntax patterns
 */

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix trailing commas in interface properties
    content = content.replace(/(\w+):\s*([^;,\n]+),\s*;/g, '$1: $2;');
    
    // Fix trailing commas in array type definitions
    content = content.replace(/Array<\{([^}]+),\s*\}>\s*,/g, 'Array<{$1}>');
    
    // Fix trailing commas in object type definitions
    content = content.replace(/\{\s*([^}]+),\s*\}\s*,/g, '{$1}');
    
    // Fix trailing commas in switch cases
    content = content.replace(/case\s+['"`]([^'"`]+)['"`]:\s*,/g, "case '$1':");
    
    // Fix trailing commas in function parameters (where inappropriate)
    content = content.replace(/\(\s*([^)]+),\s*\)\s*=>/g, '($1) =>');
    
    // Fix trailing commas in object literals within interfaces
    content = content.replace(/interface\s+\w+\s*\{([^}]+),\s*\}/g, (match, body) => {
      const cleanedBody = body.replace(/(\w+):\s*([^;,\n]+),\s*/g, '$1: $2;');
      return match.replace(body, cleanedBody);
    });

    // Fix specific patterns found in the errors
    content = content.replace(/private\s+(\w+):\s*([^;,\n]+),\s*;/g, 'private $1: $2;');
    content = content.replace(/public\s+(\w+):\s*([^;,\n]+),\s*;/g, 'public $1: $2;');
    
    // Fix trailing commas in constructor parameters
    content = content.replace(/constructor\s*\(([^)]+),\s*\)\s*\{/g, 'constructor($1) {');
    
    // Fix trailing commas in method signatures
    content = content.replace(/(\w+)\s*\(([^)]+),\s*\)\s*:\s*([^{;]+)/g, '$1($2): $3');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walk(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = walkDirectory(srcDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files.`);