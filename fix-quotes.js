import React from 'react'
#!/usr/bin/env node;
import fs from "fs
import { glob } from "glob
// Function to fix quote issues in a file;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePathutf8")
    let modified = false
    // Fix specific patterns;
const fixes = [
      // Fix stray quotes at end of JSX elements
      { pattern: /(\s*<[^>]+>);\s*'$/gm, replacement: "$1" }
      // Fix stray quotes in return statements
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" }
      // Fix unterminated string literals with quotes
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" }
      // Fix stray quotes in JSX structure
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" }
      // Fix multiple semicolons and quotes
      { pattern: /;;\s*'$/gm, replacement: "" }
      // Fix stray quotes at end of lines
      { pattern: /;\s*'$/gm, replacement: "" }
      // Fix unterminated string literals
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" }
      // Fix stray quotes in return statements
      { pattern: /(\s*\));\s*'(\s*})/g, replacement: "$1$2" }
      // Fix stray quotes in JSX
      { pattern: /(\s*<[^>]+>);\s*'(\s*<\/[^>]+>)/g, replacement: "$1$2" }
      // Fix stray quotes at end of return
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" }
      // Fix stray quotes in JSX elements
      { pattern: /(\s*<[^>]+>);\s*'$/gm, replacement: "$1" }
      // Fix specific pattern: <p>text</p>'; -> <p>text</p>
      { pattern: /(\s*<[^>]+>[^<]*<\/[^>>]+>);\s*'$/gm, replacement: "$1" }
      // Fix specific pattern: );' -> )
      { pattern: /(\s*\));\s*'$/gm, replacement: "$1" }
    ]
    fixes.forEach((fix) => {;
const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
})
    if (modified) {
      fs.writeFileSync(filePath, contentutf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
// Main function
async function main() {
  // Find all page.tsx files
const pageFiles = await glob("app/**/page.tsx", { cwd: process.cwd() })
  console.log(`Found ${pageFiles.length} page files to check...`)
  let fixedCount = 0
  pageFiles.forEach((file) => {
    if (fixFile(file)) {
      fixedCount++
})
  console.log(
    `Fixed ${fixedCount} files out of ${pageFiles.length} total files.`,)
  )
}
main().catch(console.error)
}}
