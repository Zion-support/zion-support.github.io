#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Final comprehensive fixes for all remaining syntax errors
const fixes = [
  // Fix template literal syntax errors
  { pattern: /className=\{`([^`]*)\$\{className\}`\}/g, replacement: 'className={`$1`}' },
  
  // Fix class name spacing issues
  { pattern: /bottom-4\s+right-4z-50/g, replacement: 'bottom-4 right-4 z-50' },
  { pattern: /rounded-ful\s+l\s+shadow-lgtransition-colors/g, replacement: 'rounded-full shadow-lg transition-colors' },
  
  // Fix interface property names
  { pattern: /errorsLast24\s+h:/g, replacement: 'errorsLast24h:' },
  { pattern: /errorsLast\s+7\s+d:/g, replacement: 'errorsLast7d:' },
  
  // Fix variable declarations
  { pattern: /const\s+newAlert,\s*s:\s*string\[\]\s*=\s*\[\];/g, replacement: 'const newAlerts: string[] = [];' },
  { pattern: /const\s+optimizationSuggestion,\s*s:\s*OptimizationSuggestion\[\]\s*=\s*\[/g, replacement: 'const optimizationSuggestions: OptimizationSuggestion[] = [' },
  
  // Fix property names
  { pattern: /typ,\s*e:\s*'performance'/g, replacement: "type: 'performance'" },
  
  // Fix other common spacing issues
  { pattern: /(\w+)\s+(\d+)\s+(\w+)/g, replacement: '$1$2$3' },
  { pattern: /(\d+)\s+(\d+)\s+(\d+)/g, replacement: '$1$2$3' },
  { pattern: /(\w+)\s+(\d+)/g, replacement: '$1$2' },
  { pattern: /(\d+)\s+(\w+)/g, replacement: '$1$2' },
  
  // Fix specific patterns
  { pattern: /className=\{`([^`]*)\$\{([^}]+)\}`\}/g, replacement: 'className={`$1${$2}`}' },
  { pattern: /className=\{`([^`]*)\$\{className\}`\}/g, replacement: 'className={`$1`}' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src', 'components');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} .tsx files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);