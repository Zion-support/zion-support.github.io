<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const malformedImportRegex = /import React from 'react'\s*\n\s*import { Helmet } from 'react-helmet-async'use client'/g;
    if (malformedImportRegex.test(content)) {
      content = content.replace(malformedImportRegex, "'use client'\nimport React from 'react'\nimport { Helmet } from 'react-helmet-async'");
      modified = true;
    }

    // Fix other malformed patterns
    const otherMalformedRegex = /import { Helmet } from 'react-helmet-async'use client'/g;
    if (otherMalformedRegex.test(content)) {
      content = content.replace(otherMalformedRegex, "import { Helmet } from 'react-helmet-async'");
      // Add 'use client' at the top if not present
      if (!content.startsWith("'use client'")) {
        content = "'use client'\n" + content;
      }
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix import statements and other syntax issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8")
    // Fix import statements missing semicolons
    content = content
      .replace(/import React from 'react'\n/g, "import React from 'react';\n")
      .replace(
        /import { Helmet } from 'react-helmet-async'\n/g,
        "import { Helmet } from 'react-helmet-async';\n",
      )
      .replace(
        /import { useEffect } from 'react'\n/g,
        "import { useEffect } from 'react';\n",
      )
      .replace(
        /import { useState } from 'react'\n/g,
        "import { useState } from 'react';\n",
      )
      .replace(
        /import { useCallback } from 'react'\n/g,
        "import { useCallback } from 'react';\n",
      )
      .replace(
        /import { useMemo } from 'react'\n/g,
        "import { useMemo } from 'react';\n",
      )
      // Fix other common import patterns
      .replace(/from '([^']+)'\n/g, "from '$1';\n")
      .replace(/from "([^"]+)"\n/g, 'from "$1";\n')
      // Fix any remaining unterminated strings
      .replace(/import React from 'react$/g, "import React from 'react';")
      .replace(
        /import { Helmet } from 'react-helmet-async$/g,
        "import { Helmet } from 'react-helmet-async';",
      )
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, "\n\n")
      .replace(/\s+$/gm, "")
      .trim()
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
// Function to find all tsx files
function findTsxFiles(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        traverse(fullPath)
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        files.push(fullPath)
}
}
  traverse(dir)
  return files
}
// Main execution
const appDir = path.join(__dirname, "app")
const tsxFiles = findTsxFiles(appDir)
console.log(`Found ${tsxFiles.length} tsx/ts files`)
let fixedCount = 0
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++
}
console.log(`Fixed ${fixedCount} out of ${tsxFiles.length} files`)
>>>>>>> origin/main
