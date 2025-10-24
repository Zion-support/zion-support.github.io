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

// Fix import statement issues
function fixImportStatements(content) {
  let fixed = content;
  
  // Fix malformed import statements with extra commas
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+'([^']*?)',/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+"([^"]*?)",/g, 'import $1 from "$2";');
  
  // Fix malformed 'use client' directive
  fixed = fixed.replace(/'use client',/g, "'use client';");
  fixed = fixed.replace(/"use client",/g, '"use client";');
  
  // Fix malformed import statements with semicolons
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+'([^']*?)';/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+"([^"]*?)";/g, 'import $1 from "$2";');
  
  // Fix malformed destructured imports
  fixed = fixed.replace(/import\s+\{\s*([^}]*?)\s*\}\s+from\s+'([^']*?)',/g, "import { $1 } from '$2';");
  fixed = fixed.replace(/import\s+\{\s*([^}]*?)\s*\}\s+from\s+"([^"]*?)",/g, 'import { $1 } from "$2";');
  
  // Fix malformed default imports
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+'([^']*?)',/g, "import $1 from '$2';");
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+"([^"]*?)",/g, 'import $1 from "$2";');
  
  // Fix malformed named imports
  fixed = fixed.replace(/import\s+\{\s*([^}]*?)\s*\}\s+from\s+'([^']*?)',/g, "import { $1 } from '$2';");
  fixed = fixed.replace(/import\s+\{\s*([^}]*?)\s*\}\s+from\s+"([^"]*?)",/g, 'import { $1 } from "$2";');
  
  // Fix malformed type imports
  fixed = fixed.replace(/import\s+type\s+\{\s*([^}]*?)\s*\}\s+from\s+'([^']*?)',/g, "import type { $1 } from '$2';");
  fixed = fixed.replace(/import\s+type\s+\{\s*([^}]*?)\s*\}\s+from\s+"([^"]*?)",/g, 'import type { $1 } from "$2";');
  
  return fixed;
}

// Process all files
const allFiles = getAllTsxFiles(__dirname);
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixImportStatements(content);
    
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
