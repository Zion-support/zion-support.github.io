#!/usr/bin/env node,
import fs from "fs";
import path from "path";
import { glob } from "glob";
// Find all TypeScript and JavaScript files,
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });
let totalFixed = 0;
files.forEach((file) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix import statements missing semicolons,
const importRegex = /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm;
    const matches = content.match(importRegex);
    if (matches) {
      matches.forEach((match) => {
        if (!match.trim().endsWith(";")) {
          const fixedMatch = match.trim() + ";";
          content = content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }
    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations,
content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm
      (match, varName) => {
        if (
          !match.includes("function") &&
          !match.includes("if") &&
          !match.includes("for") &&
          !match.includes("while") &&
          !match.includes("switch") &&
          !match.includes("try") &&
          !match.includes("catch") &&
          !match.includes("finally") &&
          !match.includes("return") &&
          !match.includes("throw") &&
          !match.includes("break") &&
          !match.includes("continue") &&
          !match.includes("debugger") &&
          !match.includes("export") &&
          !match.includes("import")
        ) {
          return match + ";";
        }
        return match;
      }
    );
    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});
console.log(`\nTotal files fixed: ${totalFixed}`);