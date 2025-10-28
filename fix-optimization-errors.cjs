const fs = require('fs');
const path = require('path');

// Function to fix the optimization errors
function fixOptimizationErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the React.memo wrapping issue
    if (content.includes('const Page = React.memo(function Page(')) {
      // Remove the React.memo wrapper and restore original function
      content = content.replace(
        /const Page = React\.memo\(function Page\(/g,
        'function Page('
      );
      content = content.replace(
        /^export default Page;$/m,
        'export default Page;'
      );
      modified = true;
    }

    // Fix useCallback issues that might have broken syntax
    if (content.includes('useCallback(') && content.includes('onClick={useCallback(')) {
      // Remove useCallback wrapper from onClick handlers
      content = content.replace(
        /onClick=\{useCallback\(([^,]+),\s*\[\]\)\}/g,
        'onClick={$1}'
      );
      modified = true;
    }

    // Remove unnecessary React imports that were added
    if (content.includes("import React, { useCallback, useMemo } from 'react';") && !content.includes('useCallback') && !content.includes('useMemo')) {
      content = content.replace(
        "import React, { useCallback, useMemo } from 'react';",
        "import React from 'react';"
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        totalFixed += processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (fixOptimizationErrors(fullPath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

// Main execution
console.log('Fixing optimization errors...');
const appDir = path.join(__dirname, 'app');
const totalFixed = processDirectory(appDir);
console.log(`Fixed ${totalFixed} files`);