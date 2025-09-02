#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors in files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix malformed import statements
  fixed = fixed.replace(/^<= import/gm, 'import');
  fixed = fixed.replace(/^import {[^}]*> ([^}]*)} from/gm, (match, imports) => {
    return `import { ${imports.trim()} } from`;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export { function }/g, '');
  fixed = fixed.replace(/export default function (\w+)\(\.\.\.args: unknown\[\]\): unknown/g, 'export default function $1()');
  
  // Fix malformed JSX quotes
  fixed = fixed.replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2');
  fixed = fixed.replace(/className='([^']*)'([^>]*>)/g, 'className="$1"$2');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return \(""" /g, 'return (\n  <div>');
  fixed = fixed.replace(/return \(''' /g, 'return (\n  <div>');
  
  // Fix malformed JSX closing
  fixed = fixed.replace(/\)\}\}\}'`/g, '\n  </div>\n);');
  fixed = fixed.replace(/\)\}\}\}''`/g, '\n  </div>\n);');
  
  // Fix malformed template literals
  fixed = fixed.replace(/className=\{`([^`]*)`\}/g, 'className="$1"');
  
  // Fix malformed array mappings
  fixed = fixed.replace(/\.map\(([^,]+): unknown, index: unknown \(/g, '.map(($1, index) => (');
  
  // Fix malformed conditional expressions
  fixed = fixed.replace(/\$\{ <= ([^}]+) \?/g, '${$1 ?');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/<([^>]+)''/g, '<$1"');
  fixed = fixed.replace(/<([^>]+)""/g, '<$1"');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>''/g, '</div>');
  fixed = fixed.replace(/<\/div>""/g, '</div>');
  
  // Fix malformed semicolons and quotes
  fixed = fixed.replace(/;''/g, ';');
  fixed = fixed.replace(/;""/g, ';');
  
  // Fix malformed string concatenations
  fixed = fixed.replace(/'([^']*)''/g, '"$1"');
  fixed = fixed.replace(/"([^"]*)""/g, '"$1"');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content, filePath);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(__dirname, 'pages');
console.log('Starting syntax error fixes...');

let totalFixed = 0;

if (fs.existsSync(srcDir)) {
  const fixedCount = processDirectory(srcDir);
  totalFixed += fixedCount;
  console.log(`Fixed ${fixedCount} files in src directory`);
} else {
  console.log('src directory not found');
}

if (fs.existsSync(pagesDir)) {
  const fixedCount = processDirectory(pagesDir);
  totalFixed += fixedCount;
  console.log(`Fixed ${fixedCount} files in pages directory`);
} else {
  console.log('pages directory not found');
}

console.log(`Total fixed: ${totalFixed} files`);