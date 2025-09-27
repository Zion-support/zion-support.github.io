#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix "defaul, t:" to "default:"
  { pattern: /defaul,\s*t:/g, replacement: 'default:' },
  
  // Fix "dar, k:" to "dark:"
  { pattern: /dar,\s*k:/g, replacement: 'dark:' },
  
  // Fix "hove, r:" to "hover:"
  { pattern: /hove,\s*r:/g, replacement: 'hover:' },
  
  // Fix "opacit, y:" to "opacity:"
  { pattern: /opacit,\s*y:/g, replacement: 'opacity:' },
  
  // Fix missing spaces in class names
  { pattern: /(\w+)(\d+)(\w+)/g, replacement: '$1 $2 $3' },
  
  // Fix "gap-4mb-6" to "gap-4 mb-6"
  { pattern: /gap-(\d+)mb-(\d+)/g, replacement: 'gap-$1 mb-$2' },
  
  // Fix "p-4text-white" to "p-4 text-white"
  { pattern: /p-(\d+)text-/g, replacement: 'p-$1 text-' },
  
  // Fix "opacity-90mb-1" to "opacity-90 mb-1"
  { pattern: /opacity-(\d+)mb-(\d+)/g, replacement: 'opacity-$1 mb-$2' },
  
  // Fix "text-2xlfont-bold" to "text-2xl font-bold"
  { pattern: /text-(\w+)font-/g, replacement: 'text-$1 font-' },
  
  // Fix "text-smopacity-90" to "text-sm opacity-90"
  { pattern: /text-(\w+)opacity-/g, replacement: 'text-$1 opacity-' },
  
  // Fix "grid-cols-2gap-6" to "grid-cols-2 gap-6"
  { pattern: /grid-cols-(\d+)gap-/g, replacement: 'grid-cols-$1 gap-' },
  
  // Fix "md: grid-cols-2" to "md:grid-cols-2"
  { pattern: /md:\s+grid-cols-/g, replacement: 'md:grid-cols-' },
  
  // Fix "l, g:grid-cols-4" to "lg:grid-cols-4"
  { pattern: /l,\s*g:grid-cols-/g, replacement: 'lg:grid-cols-' },
  
  // Fix "opacit, y: 0, y: 20" to "opacity: 0, y: 20"
  { pattern: /opacit,\s*y:\s*0,\s*y:\s*20/g, replacement: 'opacity: 0, y: 20' },
  
  // Fix "onClick={() =>setIsRealTime" to "onClick={() => setIsRealTime"
  { pattern: /onClick=\{\(\)\s*=>setIs/g, replacement: 'onClick={() => setIs' },
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