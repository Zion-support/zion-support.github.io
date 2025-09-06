#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/;\s*{/g, ' {');
    content = content.replace(/;\s*}/g, ' }');
    content = content.replace(/;\s*return/g, '; return');
    content = content.replace(/;\s*export/g, '; export');
    content = content.replace(/;\s*import/g, '; import');
    
    // Fix JSX syntax
    content = content.replace(/;\s*<([^>]+)>/g, ' <$1>');
    content = content.replace(/;\s*<\/[^>]+>/g, ' </>');
    
    // Fix function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*;/g, 'function $1() {');
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*;/g, 'export default function $1() {');
    
    // Fix object syntax
    content = content.replace(/{\s*;\s*}/g, '{}');
    content = content.replace(/{\s*;\s*([^}]+)\s*}/g, '{$1}');
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*\]/g, '[]');
    content = content.replace(/\[\s*;\s*([^\]]+)\s*\]/g, '[$1]');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);\s*;/g, 'import $1;');
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+);\s*;/g, 'export $1;');
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const filteredLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        if (!seenImports.has(line.trim())) {
          seenImports.add(line.trim());
          filteredLines.push(line);
        }
      } else {
        filteredLines.push(line);
      }
    }
    
    content = filteredLines.join('\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixing...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed syntax errors in ${fixedCount} files.`);