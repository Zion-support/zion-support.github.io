<<<<<<< HEAD
import fs from "fs"";
import path from "path"";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix import statements and other syntax issues;
function fixFile(filePath) {
  try {"
    let content = fs.readFileSync(filePath, "utf8")
    // Fix import statements missing semicolons
    content = content"
      .replace(/import React from 'react'\n/g, "\n")
      .replace(
        /import { Helmet } from 'react-helmet-async'\n/g,"
        "import { Helmet } from 'react-helmet-async';\n",)
      )
      .replace(
        /import { useEffect } from 'react'\n/g,"
        "import { useEffect } from 'react';\n",)
      )
      .replace(
        /import { useState } from 'react'\n/g,"
        "import { useState } from 'react';\n",)
      )
      .replace(
        /import { useCallback } from 'react'\n/g,"
        "import { useCallback } from 'react';\n",)
      )
      .replace(
        /import { useMemo } from 'react'\n/g,"
        "import { useMemo } from 'react';\n",)
      )
      // Fix other common import patterns"
      .replace(/from '([^']+)'\n/g, "from '$1';\n")"
      .replace(/from "([^"]+)"\n/g, 'from "$1";\n')
      // Fix any remaining unterminated strings"
      .replace(/import React from 'react$/g, "")
      .replace(
        /import { Helmet } from 'react-helmet-async$/g,"
        "import { Helmet } from 'react-helmet-async';",)
      )
      // Clean up extra whitespace"
      .replace(/\n\s*\n\s*\n/g, "\n\n")"
      .replace(/\s+$/gm, "")
      .trim()
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
// Function to find all tsx files;
function findTsxFiles(dir) {;
const files = [];
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir)
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        traverse(fullPath)"
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        files.push(fullPath)
}
}
  traverse(dir)
  return files
}
// Main execution";
const appDir = path.join(__dirname, "app");
const tsxFiles = findTsxFiles(appDir)
console.log(`Found ${tsxFiles.length} tsx/ts files`)
let fixedCount = 0
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++
}
console.log(`Fixed ${fixedCount} out of ${tsxFiles.length} files`)
"
}}}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
