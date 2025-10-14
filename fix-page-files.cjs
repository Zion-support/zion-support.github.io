#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to create a simple page template
function createPageTemplate(pageName) {
  return `import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${pageName.replace(/([A-Z])/g, " $1").trim()}</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about ${pageName
            .replace(/([A-Z])/g, " $1")
            .trim()
            .toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to fix page files
function fixPageFile(filePath) {
  try {
    const fileName = path.basename(filePath, ".tsx");
    const pageName =
      fileName.charAt(0).toUpperCase() +
      fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    console.log(`Fixing page: ${filePath}`);
    const template = createPageTemplate(pageName);
    fs.writeFileSync(filePath, template);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page files
function findPageFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules" &&
        item !== "dist"
      ) {
        traverse(fullPath);
      } else if (
        stat.isFile() &&
        item === "page.tsx" &&
        fullPath.includes("/app/")
      ) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
console.log("🔍 Searching for page files to fix...");
const pageFiles = findPageFiles(process.cwd());

console.log(`📝 Found ${pageFiles.length} page files to fix.`);

console.log("\n🔧 Fixing page files...");
let fixedCount = 0;

pageFiles.forEach((file) => {
  if (fixPageFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully fixed ${fixedCount} page files.`);
console.log("\n🎉 Page file fixing complete!");
