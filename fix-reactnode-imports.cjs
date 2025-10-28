const fs = require('fs');
const path = require('path');

function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsxFiles(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  
  return results;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused ReactNode imports
  if (content.includes("import { ReactNode } from 'react';")) {
    content = content.replace("import { ReactNode } from 'react';\n", '');
    modified = true;
  }

  // Remove ReactNode from combined imports
  if (content.includes("import React, { ReactNode } from 'react';")) {
    content = content.replace("import React, { ReactNode } from 'react';", "import React from 'react';");
    modified = true;
  }

  // Remove unused ArrowRight imports
  if (content.includes("import { ArrowRight } from 'lucide-react';")) {
    content = content.replace("import { ArrowRight } from 'lucide-react';\n", '');
    modified = true;
  }

  // Remove unused memo imports
  if (content.includes("import { memo } from 'react';") && !content.includes('memo(')) {
    content = content.replace("import React, { memo } from 'react';", "import React from 'react';");
    modified = true;
  }

  // Remove unused component declarations
  content = content.replace(/const\s+(\w+Page)\s*=\s*\([^)]*\)\s*=>\s*{[^}]*};\s*/g, '');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  
  return false;
}

// Get all TypeScript files
const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);