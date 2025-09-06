#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// More comprehensive syntax fixes
const fixes = [
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in function parameters
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object destructuring
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in array destructuring
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in function calls
  {
    pattern: /(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1 = $2,$3'
  },
  // Fix missing commas in object properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in interface properties
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  },
  // Fix missing commas in type definitions
  {
    pattern: /(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm,
    replacement: '$1: $2,$3'
  }
];

function fixFile(filePath) {

    let content = fs.readFileSync(filePath, 'utf8');

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
function fixFile(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    // Fix extra quotes at end of lines;
    content = content.replace(/;"/g, ";");
    content = content.replace(/,"/g, ",");
    content = content.replace(/}"/g, "}");
    content = content.replace(/\)"/g, ")");
    content = content.replace(/\]"/g, "]");
    content = content.replace(/}"/g, "}");
    content = content.replace(/\/>"/g, "/>");
    content = content.replace(/">"/g, ">");
    content = content.replace(/">"/g, ">");
    // Fix broken import statements;
    content = content.replace(/import\s+(\w+)\s+from\s*,\s*[""`]([^""`]+)[""`]/g, "import $1 from "$2"");
    // Fix missing semicolons;
    content = content.replace(/(\w+\([^)]*\))\s*$/gm, "$1;");
    // Fix broken object properties;
    content = content.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, "$1: $2,\n    $3:");
    // Fix broken function calls;
    content = content.replace(/(\w+\([^)]*\))\s*\)\s*}/g, "$1);");
    // Only write if content changed;
    if (content !== originalContent) {;
  fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;,
}

    return false;,
} catch (error) {;
  console.error(`Error fixing ${filePath}:`, error.message);
    return false;,
}
}

function findFiles(dir, extensions = [".js", ".jsx", ".ts", ".tsx"]) {;
  const files = [];
  function traverse(currentDir) {;
  const items = fs.readdirSync(currentDir);
    for (const item of items) {;
  const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {;
  traverse(fullPath);,
} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
}
    }
  }

  traverse(dir);
  return files;,
}

// Main execution;
const files = findFiles(".");
let fixedCount = 0;
console.log(`Found ${files.length} files to check...`);
files.forEach(file => {;
  if (fixFile(file)) {;
  fixedCount++;,
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      walkDir(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      fixFile(filePath);
    }
  });
}

// Start fixing from components directory
walkDir('./components');
walkDir('./hooks');
walkDir('./lib');
walkDir('./pages');

console.log('Remaining syntax error fixing completed!');