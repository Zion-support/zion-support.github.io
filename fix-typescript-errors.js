#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Function to fix common TypeScript/JSX errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix unclosed JSX elements by adding proper closing tags
    const lines = content.split("\n");
    const fixedLines = [];
    let openTags = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Track opening tags
      const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
      if (openTagMatch && !trimmedLine.includes("/>")) {
        openTags.push(openTagMatch[1]);
      }

      // Track closing tags
      const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastIndex = openTags.lastIndexOf(tagName);
        if (lastIndex !== -1) {
          openTags.splice(lastIndex, 1);
        }
      }

      fixedLines.push(line);
    }

    // Add missing closing tags at the end
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push(`</${tag}>`);
      modified = true;
    }

    // Fix common syntax issues
    let fixedContent = fixedLines.join("\n");

    // Fix missing closing braces
    const openBraces = (fixedContent.match(/\{/g) || []).length;
    const closeBraces = (fixedContent.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      for (let i = 0; i < missingBraces; i++) {
        fixedContent += "\n}";
      }
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (fixedContent.match(/\(/g) || []).length;
    const closeParens = (fixedContent.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      for (let i = 0; i < missingParens; i++) {
        fixedContent += ")";
      }
      modified = true;
    }

    // Fix function name mismatches
    const exportMatch = fixedContent.match(/export default function (\w+)/);
    if (exportMatch) {
      const functionName = exportMatch[1];
      // Check if there's a mismatch in the function declaration
      const functionDeclMatch = fixedContent.match(/function (\w+)\(/);
      if (functionDeclMatch && functionDeclMatch[1] !== functionName) {
        fixedContent = fixedContent.replace(
          new RegExp(`function ${functionDeclMatch[1]}\\(`),
          `function ${functionName}(`,
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, fixedContent, "utf8");
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir) {
  const files = [];

  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!["node_modules", ".git", "dist", ".next", "out"].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if ([".tsx", ".ts"].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }

  scanDirectory(dir);
  return files;
}

// Main execution
console.log("🔧 Fixing TypeScript errors...");

const allFiles = findFiles(".");
let fixedCount = 0;

for (const file of allFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed ${fixedCount} files`);
console.log("🎉 TypeScript error fixing complete!");
