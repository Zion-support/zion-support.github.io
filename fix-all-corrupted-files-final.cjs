const fs = require('fs');
const path = require('path');

function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common corruption patterns
    content = content.replace(/sectionclassName\s*=\s*'/g, "section className='");
    content = content.replace(/divclassName\s*=\s*'/g, "div className='");
    content = content.replace(/spanclassName\s*=\s*'/g, "span className='");
    content = content.replace(/h1className\s*=\s*'/g, "h1 className='");
    content = content.replace(/h2className\s*=\s*'/g, "h2 className='");
    content = content.replace(/h3className\s*=\s*'/g, "h3 className='");
    content = content.replace(/pclassName\s*=\s*'/g, "p className='");
    content = content.replace(/aclassName\s*=\s*'/g, "a className='");
    content = content.replace(/buttonclassName\s*=\s*'/g, "button className='");
    
    // Fix missing spaces in className attributes
    content = content.replace(/className='([^']*?)([a-z])([A-Z])/g, "className='$1$2 $3");
    content = content.replace(/className='([^']*?)([a-z])([0-9])/g, "className='$1$2 $3");
    content = content.replace(/className='([^']*?)([0-9])([a-z])/g, "className='$1$2 $3");
    
    // Fix common JSX syntax issues
    content = content.replace(/<divclassName/g, '<div className');
    content = content.replace(/<sectionclassName/g, '<section className');
    content = content.replace(/<spanclassName/g, '<span className');
    content = content.replace(/<h1className/g, '<h1 className');
    content = content.replace(/<h2className/g, '<h2 className');
    content = content.replace(/<h3className/g, '<h3 className');
    content = content.replace(/<pclassName/g, '<p className');
    content = content.replace(/<aclassName/g, '<a className');
    content = content.replace(/<buttonclassName/g, '<button className');
    
    // Fix missing spaces in class names
    content = content.replace(/py-16bg-gradient/g, 'py-16 bg-gradient');
    content = content.replace(/from-blue-900\/40via-purple-900/g, 'from-blue-900/40 via-purple-900');
    content = content.replace(/to-pink-900\/40border-y/g, 'to-pink-900/40 border-y');
    content = content.replace(/border-blue-500\/20/g, 'border-blue-500/20');
    content = content.replace(/containermx-autopx-6/g, 'container mx-auto px-6');
    content = content.replace(/text-centermb-12/g, 'text-center mb-12');
    content = content.replace(/inline-flexitems-center/g, 'inline-flex items-center');
    content = content.replace(/gap-2px-6py-3/g, 'gap-2 px-6 py-3');
    content = content.replace(/rounded-fullbg-gradient/g, 'rounded-full bg-gradient');
    content = content.replace(/from-blue-500\/20to-purple-500/g, 'from-blue-500/20 to-purple-500');
    content = content.replace(/borderborder-blue-500/g, 'border border-blue-500');
    content = content.replace(/mb-6/g, 'mb-6');
    
    // Fix other common patterns
    content = content.replace(/import\s+React\s+from\s+'react';\s*import\s+React\s+from\s+'react';/g, "import React from 'react';");
    content = content.replace(/export\s+default\s+\w+;\s*export\s+default\s+\w+;/g, (match) => {
      const parts = match.split(';');
      return parts[0] + ';';
    });
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const srcDir = './src';
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findFiles(srcDir);

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('className=') && !content.includes(' className=')) {
    if (fixCorruptedFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files with corruption issues.`);