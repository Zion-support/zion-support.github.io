import React from 'react'
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix corrupted page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8")
    // Fix common corruption patterns
    content = content
      // Remove extra semicolons and quotes
      .replace(/';';/g, "")
      .replace(/";";/g, "")
      .replace(/";/g, "")
      .replace(/';/g, "")
      // Fix malformed JSX attributes
      .replace(/className="([^"]*?)";/g, 'className="$1"')
      .replace(/content="([^"]*?)";/g, 'content="$1"')
      .replace(/href="([^"]*?)";/g, 'href="$1"')
      .replace(/src="([^"]*?)";/g, 'src="$1"')
      // Fix malformed closing tags
      .replace(/<\/div>";/g, "</div>")
      .replace(/<\/h1>";/g, "</h1>")
      .replace(/<\/p>";/g, "</p>")
      .replace(/<\/a>";/g, "</a>")
      .replace(/<\/button>";/g, "</button>")
      // Fix malformed opening tags
      .replace(/<div className="([^"]*?)">
</div>";/g, '<div className="$1">
</div>')
      .replace(/<h1 className="([^"]*?)">";/g, '<h1 className="$1">')
      .replace(/<p className="([^"]*?)">";/g, '<p className="$1">')
      .replace(/<a className="([^"]*?)">";/g, '<a className="$1">')
      .replace(/<button className="([^"]*?)">";/g, '<button className="$1">')
      // Fix malformed meta tags
      .replace(
        /<meta name="([^"]*?)" content="([^"]*?)" \/>";/g,
        '<meta name="$1" content="$2" />',
      )
      .replace(
        /<meta property="([^"]*?)" content="([^"]*?)" \/>";/g,
        '<meta property="$1" content="$2" />',
      )
      // Clean up extra whitespace and newlines
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
// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        traverse(fullPath)
      } else if (item === "page.tsx") {
        files.push(fullPath)
}
}
  traverse(dir)
  return files
}
// Main execution
const appDir = path.join(__dirname, "app")
const pageFiles = findPageFiles(appDir)
console.log(`Found ${pageFiles.length} page.tsx files`)
let fixedCount = 0
for (const file of pageFiles) {
  if (fixPageFile(file)) {
    fixedCount++
}
console.log(`Fixed ${fixedCount} out of ${pageFiles.length} files`)