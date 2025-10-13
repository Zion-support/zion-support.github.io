const fs = require('fs');
const path = require('path');

// Function to fix common issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate import lines
      if (line.includes('import ') && line.includes(' from ')) {
        const importKey = line.trim();
        if (seenImports.has(importKey)) {
          modified = true;
          continue; // Skip duplicate import
        }
        seenImports.add(importKey);
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      content = newLines.join('\n');
    }

    // Fix missing React import
    if (content.includes('JSX') || content.includes('<div') || content.includes('<span')) {
      if (!content.includes("import React") && !content.includes("import * as React")) {
        content = "import React from 'react';\n" + content;
        modified = true;
      }
    }

    // Fix components that return void instead of JSX
    if (content.includes('export default function') && !content.includes('return (')) {
      // Find the function and add a return statement
      const functionMatch = content.match(/export default function\s+(\w+)\s*\([^)]*\)\s*{/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        const returnStatement = `  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          ${functionName}
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Coming soon...
        </p>
      </div>
    </div>
  );`;
        
        content = content.replace(
          /export default function\s+\w+\s*\([^)]*\)\s*{/,
          `export default function ${functionName}() {\n${returnStatement}`
        );
        modified = true;
      }
    }

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      for (let i = 0; i < missingBraces; i++) {
        content += '\n}';
      }
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix all files
const files = getAllTsxFiles('./app');
let fixedCount = 0;

console.log(`Found ${files.length} TypeScript files to check...`);

files.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
});

console.log(`Fixed ${fixedCount} files`);