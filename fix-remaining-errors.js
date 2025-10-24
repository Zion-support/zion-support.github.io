const fs = require('fs');
const path = require('path');

// Function to fix remaining JSX syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove semicolons after JSX closing tags
    content = content.replace(/<\/div>;\s*\);/g, '</div>\n  );');
    content = content.replace(/<\/div>;\s*\)\s*;\s*}/g, '</div>\n  );\n}');

    // Fix 2: Fix array syntax in Footer.tsx
    if (filePath.includes('Footer.tsx')) {
      content = content.replace(/;\s*];/g, ',\n  ];');
    }

    // Fix 3: Fix malformed JSX return statements
    content = content.replace(/return\s*\(\s*<div>\s*<Head>/g, 'return (\n    <div>\n      <Head>');

    // Fix 4: Fix missing closing parentheses in function returns
    content = content.replace(/<\/div>\s*\)\s*;\s*}/g, '    </div>\n  );\n}');

    // Fix 5: Fix malformed ArrowRight components
    content = content.replace(/<ArrowRight\$3\s*\/>/g, '<ArrowRight className="w-5 h-5 ml-2" />');

    // Fix 6: Fix missing closing tags
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*\n\s*<\/h1>/g, '<h1$1>$2</h1>');

    // Fix 7: Fix malformed Link components
    content = content.replace(/<LinkContact([^>]*)>\s*([^<]*)\s*<ArrowRight[^>]*\/>\s*<\/Link>/g, 
      '<Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            $2\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 8: Fix missing React import
    if (!content.includes("import React from 'react'") && !content.includes("import { React")) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client'", "'use client';\nimport React from 'react';");
      } else {
        content = "import React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix 9: Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>\s*<Head>/g, 
      'export default function $1() {\n  return (\n    <div>\n      <Head>');

    // Fix 10: Fix missing semicolons in import statements
    content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting remaining error fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixRemainingErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);