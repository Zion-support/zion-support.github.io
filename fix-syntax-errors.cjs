#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in React components...');

function fixTemplateLiterals(content) {
  // Fix template literal syntax errors
  let fixed = content;
  
  // Fix className with template literals
  fixed = fixed.replace(
    /className=\{"([^"]*)\$\{([^}]*)\}([^"]*)"\}/g,
    'className={`$1${$2}$3`}'
  );
  
  // Fix aria-label with template literals
  fixed = fixed.replace(
    /aria-label=\{"([^"]*)\$\{([^}]*)\}([^"]*)"\}/g,
    'aria-label={`$1${$2}$3`}'
  );
  
  // Fix other attributes with template literals
  fixed = fixed.replace(
    /(\w+)=\{"([^"]*)\$\{([^}]*)\}([^"]*)"\}/g,
    '$1={`$2${$3}$4`}'
  );
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixTemplateLiterals(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      files.push(...getAllFiles(fullPath));
    } else if (item.isFile() && (item.name.endsWith('.tsx') || item.name.endsWith('.jsx'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all React component files
const componentFiles = getAllFiles('./components');
const pageFiles = getAllFiles('./src/pages');
const allFiles = [...componentFiles, ...pageFiles];

let totalFixed = 0;
for (const file of allFiles) {
  if (fixFile(file)) {
    totalFixed++;
  }
}

console.log(`🎉 Fixed ${totalFixed} files with syntax errors`);