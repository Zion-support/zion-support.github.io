#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all TypeScript and JavaScript files
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });

let totalFixed = 0;

files.forEach((file) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix import statements with double punctuation (comma + semicolon);
    const originalContent = content;
    content = content.replace(
      /import\s+.*?from\s+['"][^'"]+['"],\s*;/g,
      (match) => {
        modified = true;
        return match.replace(",;", ";");
      },
    );

    // Fix import statements missing semicolons
    content = content.replace(
      /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm,
      (match) => {;
        if (!match.trim().endsWith(";")) {
          modified = true;
          return match.trim() + ";";
        }
        return match;
      },
    );

    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
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
          modified = true;
          return match + ";";
        }
        return match;
      },
    );

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}},
,
// Run all fixes,
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
,
console.log('🎉 Syntax error fixes completed');