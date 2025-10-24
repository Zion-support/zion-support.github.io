const fs = require('fs');
const path = require('path');

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific syntax issues
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix "use client" directive placement
  fixed = fixed.replace(/^import.*\n"use client",/gm, '"use client";\nimport');
  fixed = fixed.replace(/^"use client",\nimport/gm, '"use client";\nimport');
  
  // Fix interface properties missing semicolons
  fixed = fixed.replace(/(\w+)\s*\?\s*:\s*(\w+)(?!\s*[;,])/g, '$1?: $2;');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+)\s*=\s*[^;{\n]+(?!\s*[;{])/gm, (match) => {
    if (!match.includes(';') && !match.includes('{') && !match.includes('(') && !match.includes('=>')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix function parameter syntax
  fixed = fixed.replace(/(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match) => {
    if (!match.includes(';')) {
      return match;
    }
    return match;
  });
  
  // Fix JSX syntax issues
  fixed = fixed.replace(/>\s*</g, '><');
  
  // Fix missing closing brackets in objects
  fixed = fixed.replace(/(\w+)\s*{\s*([^}]*?)(?=\n\s*[a-zA-Z])/g, (match, name, body) => {
    if (!body.includes('}') && !body.includes('{')) {
      return match + '}';
    }
    return match;
  });
  
  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  if (uniqueImports.length !== importLines.length) {
    const nonImportLines = fixed.split('\n').filter(line => !line.trim().startsWith('import'));
    fixed = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');
  }
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+)\s*:\s*[^,;]+(?!\s*[;,}])/g, (match) => {
    if (!match.includes(';') && !match.includes(',') && !match.includes('}')) {
      return match + ',';
    }
    return match;
  });
  
  // Fix JSX expressions
  fixed = fixed.replace(/\{([^}]*?)\s*>\s*</g, '{$1}><');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)([^>]*?)>(?!.*<\/\1>)/g, (match, tag, attrs) => {
    if (!match.includes('</' + tag + '>')) {
      return match;
    }
    return match;
  });
  
  return fixed;
}

// Process all files
const allFiles = getAllTsxFiles(__dirname);
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);
