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
    ;
    return false;,
} catch (error) {;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;,
}
}
;
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
  ;
  traverse(dir);
  return files;,
}
;
// Main execution;
const files = findFiles(".");
let fixedCount = 0;
console.log(`Found ${files.length} files to check...`);
files.forEach(file => {;
  if (fixFile(file)) {;
    fixedCount++;,
}
});
console.log(`Fixed ${fixedCount} files`)