#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all TypeScript and JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  
  for (const item of items) {
    
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
  
  // Find all used identifiers
  lines.forEach(line => {
    if (matches) {
      matches.forEach(match => usedIdentifiers.add(match));
    }
  });
  
  // Remove unused import lines
  const filteredLines = lines.filter(line => {
    if (importMatch) {
      if (importedItems) {
        return hasUsedItems;
      }
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// Main function
function main() {

  
  files.forEach(file => {
    try {
      
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
}

export { fixConsoleStatements, fixUnusedVariables, fixUnusedImports };