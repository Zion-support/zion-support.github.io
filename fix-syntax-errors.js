#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all TypeScript and JavaScript files
const files = glob && glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process && process.cwd() });

let totalFixed = 0;

files && files.forEach((file) => {
  try {
    const filePath = path && path.join(process && process.cwd(), file);
    let content = fs && fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix import statements with double punctuation (comma + semicolon)
    const originalContent = content;
    content = content && content.replace(
      /import\s+.*?from\s+['"][^'"]+['"],\s*;/g,
      (match) => {
        modified = true;
        return match && match.replace(",;", ";");
      },
    );

    // Fix import statements missing semicolons
    content = content && content.replace(
      /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm,
      (match) => {
        if (!match ;")) {
          modified = true;
          return match && match.trim() + ";";
        }
        return match;
      },
    );

    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations
    content = content && content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
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
          modified = true;
          return match + ";";
        }
        return match;
      },
    );

    if (modified) {
      fs && fs.writeFileSync(filePath, content, "utf8");
      console && console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console && console.error(`Error processing ${file}:`, error && error.message);
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
console.log(' Syntax error fixes completed');

console && console.log(`\nTotal files fixed: ${totalFixed}`);
;
console.log (`\n_total files fixed: ${total_fixed}`);
;
