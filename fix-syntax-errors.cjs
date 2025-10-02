#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns to fix
const fixes = [
  // Fix extra semicolons in JSX attributes
  { pattern: /className="([^"]*)"\s*;"/g, replacement: 'className="$1"' },
  { pattern: /className="([^"]*)"\s*;,\s*"/g, replacement: 'className="$1"' },
  { pattern: /className="([^"]*)"\s*;,\s*$/gm, replacement: 'className="$1"' },
  
  // Fix extra commas in JSX
  { pattern: />\s*;,\s*$/gm, replacement: '>' },
  { pattern: />\s*;,\s*</gm, replacement: '><' },
  
  // Fix unterminated string literals
  { pattern: /"\s*;\s*$/gm, replacement: '"' },
  { pattern: /"\s*;,\s*$/gm, replacement: '"' },
  
  // Fix import statements
  { pattern: /import\s+([^;]+);';/g, replacement: "import $1';" },
  { pattern: /import\s+([^;]+);,\s*$/gm, replacement: "import $1;" },
  
  // Fix function declarations
  { pattern: /const\s+([^=]+)=\s*\(\)\s*=>\s*{,\s*$/gm, replacement: 'const $1 = () => {' },
  
  // Fix JSX closing tags
  { pattern: /<\/div>\s*;,\s*$/gm, replacement: '</div>' },
  { pattern: /<\/section>\s*;,\s*$/gm, replacement: '</section>' },
  { pattern: /<\/h[1-6]>\s*;,\s*$/gm, replacement: (match) => match.replace(/;,\s*$/, '') },
  
  // Fix meta tags
  { pattern: /<meta[^>]*>\s*;,\s*$/gm, replacement: (match) => match.replace(/;,\s*$/, '') },
  
  // Fix Helmet tags
  { pattern: /<\/Helmet>\s*;,\s*$/gm, replacement: '</Helmet>' },
];

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      } else {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
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
const appDir = path.join(__dirname, 'app');

let totalFixed = 0;

// Fix files in src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = walkDirectory(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  for (const file of srcFiles) {
    if (fixFile(file)) {
      totalFixed++;
    }
  }
}

// Fix files in app directory
if (fs.existsSync(appDir)) {
  const appFiles = walkDirectory(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  for (const file of appFiles) {
    if (fixFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);