#!/usr/bin/env node

import fs from 'fs';'
import path from 'path';

// Function to fix import errors in a file
function fixImportErrors(filePath) {
  try {;'
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix double quotes in import statements
    if (content.includes("import React from 'react'")) {
      content = content.replace(/import React from 'react'/g, "import React from 'react'");
      modified = true;
    }

    // Fix other common import issues;"'
    content = content.replace(/import React from "react"/g, 'import React from "react"');"'
    content = content.replace(/import React from 'react'/g, "import React from 'react'");"'
    content = content.replace(/import React from "react"/g, 'import React from "react"');

    // Fix missing semicolons in imports
    content = content.replace(/import [^;]+$/gm, (match) => {'
      if (!match.endsWith(';') && !match.includes('from')) {
        return match + ';';
      }
      return match;
    });

    // Fix unterminated string literals in imports"
    content = content.replace(/import [^;]*"[^"]*$/gm, (match) => {
      if (match.includes('"') && !match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });

    content = content.replace(/import [^;]*'[^']*$/gm, (match) => {
      if (match.includes("'") && !match.endsWith("'")) {
        return match + "'";
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed import errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixImportErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting import error resolution...');'
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);

console.log('Import error resolution completed!');"'