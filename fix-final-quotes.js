<<<<<<< HEAD
import React from "react"";
import fs from "fs"";
import path from "path"";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
=======
import React from "react
import fs from "fs
import path from "path
import { fileURLToPath } from "url
const __filename = fileURLToPath(import.meta.url)
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
const __dirname = path.dirname(__filename)
// Function to fix final quote issues;
function fixFinalQuotes(content) {
  // Fix extra quotes at the end of import statements"
  content = content.replace(/import\s+[^;]+;"\s*$/gm, (match) => {"
    return match.replace(/;"\s*$/, ";")
  })
  // Fix unterminated string literals"
  content = content.replace(/"([^"]*)$/gm, '"$1"')
  // Fix malformed quotes in JSX"
  content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, "<$1>$2</$1>")
  return content
}
// Function to process a single file;
function processFile(filePath) {
  try {";
const content = fs.readFileSync(filePath, "utf8");
const fixedContent = fixFinalQuotes(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
}
// Function to recursively find and process all TypeScript/React files;
function processDirectory(dirPath) {
  let fixedCount = 0
  try {;
const items = fs.readdirSync(dirPath)
    for (const item of items) {;
const fullPath = path.join(dirPath, item);
const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath)"
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        if (processFile(fullPath)) {
          fixedCount++
}
} catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
}
  return fixedCount
}
// Main execution"
console.log("Starting final quote fixes...")";
const fixedCount = processDirectory("./app")
console.log(`Fixed ${fixedCount} files.`)"
}}}
