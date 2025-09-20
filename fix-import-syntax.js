#!/usr/bin/env node
import fs from "fs";
import path from "path";
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix semicolons in import statements
    const importSemicolonRegex =
      /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g;
    content = content.replace(importSemicolonRegex, (match, imports) => {
      // Replace semicolons with commas in import lists
      const fixedImports = imports.replace(/;/g, ",");
      return match.replace(imports, fixedImports);
    });
    // Fix missing commas in import statements
    const importCommaRegex = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g;
    content = content.replace(importCommaRegex, (match, imports) => {
      // Add missing commas between import items
      const fixedImports = imports
        .split(/\s+/)
        .filter((item) => item.trim())
        .join(", ");
      return match.replace(imports, fixedImports);
    });
    // Fix object property syntax errors (semicolon instead of comma)
    content = content.replace(/(\w+):\s*([^,}]+);/g, "$1: $2,");
    // Fix function parameter syntax errors
    content = content.replace(
      /function\s*\(([^)]+)\)\s*{/g
      (match, params) => {
        const fixedParams = params.replace(/;/g, ",");
        return match.replace(params, fixedParams);
      }
    );
    if (content !== fs.readFileSync(filePath, "utf8")) {
      fs.writeFileSync(filePath, content, "utf8");
      modified = true;
    }
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip certain directories
        if (
          [
            "node_modules"
            ".git"
            ".next"
            "dist"
            "build"
            "out"
            "ai-optimization-backups"
            "apps.backup"
            "backup-merge-conflicts"
            "apps"
          ].includes(item)
        ) {
          continue;
        }
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if ([".js", ".jsx", ".ts", ".tsx"].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
const files = findFilesWithSyntaxErrors(".");
let fixedCount = 0;
console.log(`Found ${files.length} files to check for syntax errors...`);
for (const file of files) {
  if (fixImportSyntax(file)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${file}`);
  }
}
console.log(`\nFixed syntax errors in ${fixedCount} files.`);