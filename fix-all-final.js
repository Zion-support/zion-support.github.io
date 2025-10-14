import React from 'react'
#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { glob } from "glob"
// Function to fix all remaining syntax errors
function fixAllFinal(content) {
  let fixed = content
  // Fix 1: Fix malformed return statements
  // Pattern: return ('    <div> -> return (\n    <div>
  fixed = fixed.replace(/return\s*\(\s*'(\s*)(<[^>]+>)/g, "return (\n$1$2")
  fixed = fixed.replace(/return\s*\(\s*"(\s*)(<[^>]+>)/g, "return (\n$1$2")
  // Fix 2: Fix malformed function declarations
  // Pattern: const PagePage = () => {"  const [isOpen, setIsOpen] -> const PagePage = () => {\n  const [isOpen, setIsOpen]
  fixed = fixed.replace(
    /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{'(\s*)/g,
    "const $1 = () => {\n$2",
  )
  // Fix 3: Fix malformed object syntax
  // Pattern: { name="AI Solutions, href: "/ai-solutions" } -> { name: "AI Solutions", href: "/ai-solutions" }
  fixed = fixed.replace(/(\w+)=([^,}]+),/g, "$1: $2,")
  fixed = fixed.replace(/(\w+)=([^,}]+)}/g, "$1: $2}")
  // Fix 4: Fix missing quotes in object properties
  fixed = fixed.replace(/(\w+):\s*([^"',}]+),/g, '$1: "$2",')
  fixed = fixed.replace(/(\w+):\s*([^"',}]+)}/g, '$1: "$2"}')
  // Fix 5: Fix malformed JSX attributes
  // Pattern: className: "text-white" -> className="text-white"
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"')
  fixed = fixed.replace(/(\w+):\s*'([^']*)'/g, "$1='$2'")
  // Fix 6: Fix malformed JSX structure
  // Pattern: <div>          <h1 -> <div>\n          <h1
  fixed = fixed.replace(/>(\s*)(<[^>]+>)/g, ">\n$1$2")
  // Fix 7: Fix malformed JSX closing tags
  // Pattern: </Helmet>"      <div> -> </Helmet>\n      <div>
  fixed = fixed.replace(/>"(\s*)</g, ">\n$1<")
  // Fix 8: Fix missing closing quotes in JSX
  fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, '$1="$2"$3$4')
  // Fix 9: Fix malformed JSX closing tags
  fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, ">\n$1$2")
  // Fix 10: Fix missing closing brackets
  fixed = fixed.replace(/}\s*"(\s*)([^}])/g, "}\n$1$2")
  // Fix 11: Clean up extra quotes and malformed strings
  fixed = fixed.replace(/"\s*"/g, '"')
  fixed = fixed.replace(/""/g, '"')
  // Fix 12: Fix malformed JSX structure
  fixed = fixed.replace(
    /(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g,
    "$1\n$2$3$4\n$5",
  )
  // Fix 13: Fix malformed export statements
  // Pattern: export default PagePage;</div> -> export default PagePage
  fixed = fixed.replace(/export default (\w+);<\/div>/g, "export default $1;")
  // Fix 14: Fix malformed function declarations
  fixed = fixed.replace(
    /const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{'(\s*)/g,
    "const $1 = () => {\n$2",
  )
  // Fix 15: Fix malformed JSX structure
  fixed = fixed.replace(
    /(<[^>]+>)(\s*)([^<]+)(\s*)(<\/[^>]+>)/g,
    "$1\n$2$3$4\n$5",
  )
  // Fix 16: Fix malformed JSX closing tags
  // Pattern: </div>  );  }  export default PagePage; -> </div>\n  );\n};\n\nexport default PagePage
  fixed = fixed.replace(
    /<\/div>\s*\);\s*}\s*export default (\w+);/g,
    "</div>\n  );\n};\n\nexport default $1;",
  )
  // Fix 17: Fix malformed JSX structure
  // Pattern: <div>          <h1 -> <div>\n          <h1
  fixed = fixed.replace(/>(\s*)(<[^>]+>)/g, ">\n$1$2")
  // Fix 18: Fix malformed JSX closing tags
  // Pattern: </Helmet>"      <div> -> </Helmet>\n      <div>
  fixed = fixed.replace(/>"(\s*)</g, ">\n$1<")
  // Fix 19: Fix missing closing quotes in JSX
  fixed = fixed.replace(/(\w+)="([^"]*)"(\s*)([^"<])/g, '$1="$2"$3$4')
  // Fix 20: Fix malformed JSX closing tags
  fixed = fixed.replace(/>"(\s*)(<\/[^>]+>)/g, ">\n$1$2")
  return fixed
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixed = fixAllFinal(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
}
// Main function
async function main() {
  const patterns = [
    "app/**/*.tsx",
    "app/**/*.ts",
    "app/**/*.jsx",
    "app/**/*.js",
  ]
  let totalFiles = 0
  let fixedFiles = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      totalFiles++
      if (processFile(file)) {
        fixedFiles++
}
}
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`)
}
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
export { fixAllFinal, processFile }