#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fix all remaining trailing comma issues
 */

function fixTrailingCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix trailing commas in function parameters
    content = content.replace(/\(\s*([^)]+),\s*\)\s*\{/g, '($1) {');
    
    // Fix trailing commas in object type definitions
    content = content.replace(/(\w+):\s*\{([^}]+),\s*\}\s*,/g, '$1: {$2};');
    
    // Fix trailing commas in array type definitions
    content = content.replace(/Array<\{\s*([^}]+),\s*\}\s*>/g, 'Array<{$1}>');
    
    // Fix trailing commas in interface properties
    content = content.replace(/(\w+):\s*Array<\{\s*([^}]+),\s*\}\s*>\s*,/g, '$1: Array<{$2}>;');
    
    // Fix trailing commas in object literals
    content = content.replace(/\{\s*([^}]+),\s*\}\s*,/g, '{$1},');
    
    // Fix trailing commas in array literals
    content = content.replace(/\[\s*([^\]]+),\s*\]\s*,/g, '[$1],');
    
    // Fix trailing commas in switch cases
    content = content.replace(/case\s+['"`]([^'"`]+)['"`]:\s*,/g, "case '$1':");
    
    // Fix trailing commas in destructuring assignments
    content = content.replace(/\{\s*([^}]+),\s*\}\s*=([^;]+)/g, '{$1} = $2');
    
    // Fix trailing commas in function calls
    content = content.replace(/\(\s*([^)]+),\s*\)\s*;/g, '($1);');
    
    // Fix trailing commas in method chaining
    content = content.replace(/\.([^.]+)\(([^)]+),\s*\)\s*\./g, '.$1($2).');
    
    // Fix trailing commas in interface definitions
    content = content.replace(/interface\s+(\w+)\s*\{([^}]+),\s*\}/g, (match, name, body) => {
      const cleanedBody = body.replace(/(\w+):\s*([^;,\n]+),\s*/g, '$1: $2;');
      return `interface ${name} {${cleanedBody}}`;
    });
    
    // Fix trailing commas in type definitions
    content = content.replace(/type\s+(\w+)\s*=\s*\{([^}]+),\s*\}/g, (match, name, body) => {
      const cleanedBody = body.replace(/(\w+):\s*([^;,\n]+),\s*/g, '$1: $2;');
      return `type ${name} = {${cleanedBody}}`;
    });

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

console.log(`Processing ${files.length} files for trailing comma issues...`);

let fixedCount = 0;
for (const file of files) {
  if (fixTrailingCommas(file)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files.`);