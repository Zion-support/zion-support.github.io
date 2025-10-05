const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common corruption patterns
    content = content.replace(/importReact\s*{\s*([^}]+)\s*}\s*from\s*'react';/g, "import React, { $1 } from 'react';");
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*'react';/g, "import { $1 } from 'react';");
    content = content.replace(/interface\s*([A-Za-z]+)\s*{\s*/g, "interface $1 {\n  ");
    content = content.replace(/Linkto=/g, "Link to=");
    content = content.replace(/className=/g, " className=");
    content = content.replace(/<divclassName/g, "<div className");
    content = content.replace(/<sectionclassName/g, "<section className");
    content = content.replace(/<spanclassName/g, "<span className");
    content = content.replace(/<h1className/g, "<h1 className");
    content = content.replace(/<h2className/g, "<h2 className");
    content = content.replace(/<h3className/g, "<h3 className");
    content = content.replace(/<pclassName/g, "<p className");
    content = content.replace(/<aclassName/g, "<a className");
    content = content.replace(/<buttonclassName/g, "<button className");
    
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
    
    // Fix corrupted JSX
    content = content.replace(/^\s*99\.9%\s*$/gm, '');
    content = content.replace(/^\s*<p>\s*99\.9%\s*<\/p>\s*$/gm, '');
    content = content.replace(/^\s*<p>\s*99\.9%\s*$/gm, '');
    
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
  if (content.includes('importReact') || content.includes('Linkto=') || content.includes('className=') && !content.includes(' className=')) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files with corruption issues.`);