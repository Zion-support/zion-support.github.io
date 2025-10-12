const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/'use client';\nimport/g, "'use client';\nimport");
    content = content.replace(/import React from 'react'\n'use client'/g, "'use client';\nimport React from 'react'");
    content = content.replace(/\n'use client';\n/g, '\n');
    content = content.replace(/^'use client';\n'use client';\n/gm, "'use client';\n");
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const fixedLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });
    
    content = fixedLines.join('\n');
    
    // Ensure proper file structure
    if (!content.includes("'use client'") && (filePath.includes('/app/') || filePath.includes('/components/'))) {
      content = "'use client';\n" + content;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

console.log('Starting syntax error fix...');
findAndFixFiles('/workspace/app');
console.log('Syntax error fix completed!');
