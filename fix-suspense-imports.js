#!/usr/bin/env node

import fs from "fs";
import { execSync } from "child_process";

// Find all .tsx files in the app directory
const findTsxFiles = () => {
  try {
    const result = execSync('find app -name "*.tsx" -type f', {
      encoding: "utf8",
    });
    return result
      .trim()
      .split("\n")
      .filter((file) => file.length > 0);
  } catch (error) {
    console.error("Error finding .tsx files:", error.message);
    return [];
  }
};

// Fix unused Suspense imports
const fixSuspenseImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Check if Suspense is imported but not used
    const hasSuspenseImport = content.includes("import React, { Suspense }");
    const usesSuspense =
      content.includes("<Suspense") || content.includes("Suspense.");

    if (hasSuspenseImport && !usesSuspense) {
      // Remove Suspense from the import
      content = content.replace(
        /import React, \{ Suspense \} from 'react';/g,
        "import React from 'react';",
      );
      modified = true;
    }

    // Also check for other patterns
    const hasSuspenseOnlyImport = content.includes(
      "import { Suspense } from 'react';",
    );
    if (hasSuspenseOnlyImport && !usesSuspense) {
      content = content.replace(/import \{ Suspense \} from 'react';\n?/g, "");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.warn(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
console.warn("Fixing unused Suspense imports...");
const tsxFiles = findTsxFiles();
let fixedCount = 0;

tsxFiles.forEach((file) => {
  if (fixSuspenseImports(file)) {
    fixedCount++;
  }
});

console.warn(`Fixed ${fixedCount} files with unused Suspense imports.`);
