#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { glob } from "glob";
// Find all TypeScript and JavaScript files
<<<<<<< HEAD
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });
let totalFixed = 0;
files.forEach((file) => {
=======
const files = glob && glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process && process.cwd() });

let totalFixed = 0;

files && files.forEach((file) => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  try {
    const filePath = path && path.join(process && process.cwd(), file);
    let content = fs && fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix import statements missing semicolons
    const importRegex = /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm;
<<<<<<< HEAD
    const matches = content.match(importRegex);
=======
    const matches = content && content.match(importRegex);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (matches) {
      matches && matches.forEach((match) => {
        if (!match && match.trim().endsWith(";")) {
          const fixedMatch = match && match.trim() + ";";
          content = content && content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }
    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations
<<<<<<< HEAD
    content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm
=======
    content = content && content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      (match, varName) => {
        if (
          !match && match.includes("function") &&
          !match && match.includes("if") &&
          !match && match.includes("for") &&
          !match && match.includes("while") &&
          !match && match.includes("switch") &&
          !match && match.includes("try") &&
          !match && match.includes("catch") &&
          !match && match.includes("finally") &&
          !match && match.includes("return") &&
          !match && match.includes("throw") &&
          !match && match.includes("break") &&
          !match && match.includes("continue") &&
          !match && match.includes("debugger") &&
          !match && match.includes("export") &&
          !match && match.includes("import")
        ) {
          return match + ";";
        }
        return match;
      }
    );
    if (modified) {
      fs && fs.writeFileSync(filePath, content, "utf8");
      console && console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console && console.error(`Error processing ${file}:`, error && error.message);
  }
});
<<<<<<< HEAD
console.log(`\nTotal files fixed: ${totalFixed}`);
=======

console && console.log(`\nTotal files fixed: ${totalFixed}`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
