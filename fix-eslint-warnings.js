#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript and JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let _files = [];
  const _items = fs.readdirSync(dir);
  
  for (const item of items) {
    const _fullPath = path.join(dir, item);
    const _stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, dist, and other build directories
      if (!['node_modules', 'dist', '.next', 'out', '.git'].includes(item)) {
        files = files.concat(getAllFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix console statements
function fixConsoleStatements(content) {
  // Remove console.log, console.warn, console.error, console.info, console.debug
  content = content.replace(/^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm, '');
  
  // Remove console statements that are part of multi-line expressions
  content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);\s*/g, '');
  
  return content;
}

// Fix unused variables
function fixUnusedVariables(content) {
  // Remove unused variable declarations
  content = content.replace(/^\s*(const|let|var)\s+_\w+\s*=.*?;\s*$/gm, '');
  content = content.replace(/^\s*(const|let|var)\s+\w+\s*=.*?;\s*\/\/.*unused.*$/gm, '');
  
  // Prefix unused parameters with underscore
  content = content.replace(/function\s*\(([^)]*)\)/g, (_match, _params) => {
    return match.replace(/\b(\w+)\b/g, (_param) => {
      if (param.includes('_') || param === 'props' || param === 'event' || param === 'index') {
        return param;
      }
      return `_${param}`;
    });
  });
  
  return content;
}

// Fix unused imports
function fixUnusedImports(content) {
  // Remove unused imports (basic approach)
  const _lines = content.split('\n');
  const _usedIdentifiers = new Set();
  
  // Find all used identifiers
  lines.forEach(line => {
    const _matches = line.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g);
    if (matches) {
      matches.forEach(match => usedIdentifiers.add(match));
    }
  });
  
  // Remove unused import lines
  const filteredLines = lines.filter(line => {
    const _importMatch = line.match(/import\s+.*?\s+from\s+['"][^'"]+['"]/);
    if (importMatch) {
      const _importContent = importMatch[0];
      const _importedItems = importContent.match(/\{([^}]+)\}/);
      if (importedItems) {
        const _items = importedItems[1].split(',').map(item => item.trim());
        const _hasUsedItems = items.some(item => usedIdentifiers.has(item));
        return hasUsedItems;
      }
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// Main function
function main() {

  const _files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx']);
  let _fixedFiles = 0;
  
  files.forEach(file => {
    try {
      let _content = fs.readFileSync(file, 'utf8');
      const _originalContent = content;
      
      // Apply fixes
      content = fixConsoleStatements(content);
      content = fixUnusedVariables(content);
      content = fixUnusedImports(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');

        fixedFiles++;
      }
    } catch (error) {

    }
  });

}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixConsoleStatements, fixUnusedVariables, fixUnusedImports };