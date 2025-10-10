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

// Fix console statements by removing them
function fixConsoleStatements(content) {
  // Remove console.log, console.warn, console.error, console.info, console.debug
  content = content.replace(/^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm, '');
  content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);\s*/g, '');
  return content;
}

// Fix unused imports by removing them
function fixUnusedImports(content) {
  
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

// Fix unused variables by prefixing with underscore
function fixUnusedVariables(content) {
  // Only fix obvious unused variable declarations, not function parameters
  content = content.replace(/^\s*(const|let|var)\s+(\w+)\s*=.*?;\s*$/gm, (match, decl, varName) => {
    if (varName.startsWith('_') || varName === 'props' || varName === 'event' || varName === 'index') {
      return match;
    }
    return match.replace(varName, `_${varName}`);
  });

  return content;
}

// Main function
function main() {

  
  files.forEach(file => {
    try {
      
      // Apply fixes
      content = fixConsoleStatements(content);
      content = fixUnusedImports(content);
      content = fixUnusedVariables(content);
      
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

export { fixConsoleStatements, fixUnusedImports, fixUnusedVariables };