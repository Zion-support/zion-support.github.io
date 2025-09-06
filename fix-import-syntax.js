#!/usr/bin/env node
import fs from "fs";
import path from "path";
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix semicolons in import statements
    const importSemicolonRegex =;
      /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g;
    content = content.replace(importSemicolonRegex, (match, imports) => {
      // Replace semicolons with commas in import lists;
      const fixedImports = imports.replace(/;/g, ",");
      return match.replace(imports, fixedImports);
    });



    // Fix missing commas in import statements;


    const importCommaRegex = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g;
    content = content.replace(importCommaRegex, (match, imports) => {
      // Add missing commas between import items
      const fixedImports = imports
        .split(/\s+/)
    // Fix function parameter syntax errors
    content = content.replace(
      /function\s*\(([^)]+)\)\s*{/g
      (match, params) => {
        const fixedParams = params.replace(/;/g, ",");
        return match.replace(params, fixedParams);
      }
    );
      modified = true;
    }
    return modified;
  } catch (error) {
    for (const item of items) {
      const fullPath = path && path.join(currentDir, item);
      const stat = fs && fs.statSync(fullPath);

      if (stat && stat.isDirectory()) {
        // Skip certain directories
        if (
          [
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
for (const file of files) {
  if (fixImportSyntax(file)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${file}`);
  }
}
