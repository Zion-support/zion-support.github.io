#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Function to fix specific syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;

    // Fix common patterns
    const patterns = [
      // Fix merge conflict markers
      {
        pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> cursor[^\n]*\n/g,
        replacement: "",
      },
      // Fix incomplete JSX tags
      {
        pattern: /<([^>]+?)\s*$/gm,
        replacement: (match, tag) => {
          // If it looks like an incomplete tag, close it
          if (
            tag.includes("className") ||
            tag.includes("src") ||
            tag.includes("alt")
          ) {
            return match + ">";
          }
          return match;
        },
      },
      // Fix missing closing braces in JSX
      {
        pattern: /(\s*)([^}]+?)(\s*)(\n\s*)(<\/[^>]+>)/g,
        replacement: (match, before, content, after, newline, closingTag) => {
          if (content.includes("{") && !content.includes("}")) {
            return before + content + "}" + after + newline + closingTag;
          }
          return match;
        },
      },
      // Fix missing semicolons after variable declarations
      {
        pattern:
          /(const|let|var)\s+(\w+)\s*=\s*([^;]+?)(\n\s*)(const|let|var|\n|$)/g,
        replacement: (match, decl, name, value, newline, next) => {
          if (
            !value.includes(";") &&
            !value.includes("{") &&
            !value.includes("(")
          ) {
            return decl + " " + name + " = " + value + ";" + newline + next;
          }
          return match;
        },
      },
    ];

    // Apply patterns
    patterns.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });

    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with syntax errors
function findFilesWithErrors(dir) {
  const files = [];

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }

  walkDir(dir);
  return files;
}

// Main execution
console.log("Finding files to fix...");
const files = findFilesWithErrors("./app");

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run linting to check for remaining issues
console.log("\nRunning linting to check for remaining issues...");
try {
  execSync("npm run lint", { stdio: "inherit" });
  console.log("Linting passed!");
} catch (error) {
  console.log("Linting found remaining issues that need manual fixing");
}
