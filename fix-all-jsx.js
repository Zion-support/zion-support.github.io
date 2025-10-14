import React from "react"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix all JSX and syntax issues
function fixAllJSX(content) {
  // Fix extra quotes at the end of lines
  content = content.replace(/"\s*$/gm, "")
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment><\/React>/g, "<React.Fragment>")
  content = content.replace(/<\/React>/g, "</React.Fragment>")
  // Fix malformed Helmet tags
  content = content.replace(/<Helmet>"<\/Helmet>/g, "<Helmet>")
  content = content.replace(/<\/Helmet>/g, "</Helmet>")
  // Fix malformed div tags
  content = content.replace(/<div><\/div>/g, "<div>")
  content = content.replace(/<\/div>/g, "</div>")
  // Fix malformed title tags
  content = content.replace(/<title>([^<]*)<\/title>"""/g, "<title>$1</title>")
  content = content.replace(/<title>([^<]*)<\/title>"/g, "<title>$1</title>")
  // Fix malformed meta tags
  content = content.replace(
    /<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/><\/Helmet>/g,
    '<meta name="$1" content="$2" />',
  )
  // Fix malformed JSX structure
  content = content.replace(
    /<React\.Fragment>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/><\/Helmet>\s*<div>\s*<\/div>\s*<\/React\.Fragment>/g,
    '<React.Fragment>\n      <Helmet>\n        <title>$1</title>\n        <meta name="$2" content="$3" />\n      </Helmet>\n      <div>\n        <div>\n          <h1 className="text-4xl font-bold text-white mb-8">$1</h1>\n          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>\n        </div>\n      </div>\n    </React.Fragment>',
  )
  // Fix malformed function structure
  content = content.replace(
    /export default function Page\(\) \{\s*return\s*\(\s*<React\.Fragment>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*\/><\/Helmet>\s*<div>\s*<\/div>\s*<\/React\.Fragment>\s*\);\s*\}/g,
    `export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>$1</title>
        <meta name="$2" content="$3" />
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">$1</h1>
          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
  )
}`,
  )
  return content
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixedContent = fixAllJSX(content)
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
// Function to recursively find and process all TypeScript/React files
function processDirectory(dirPath) {
  let fixedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath)
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        if (processFile(fullPath)) {
          fixedCount++
}
} catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
}
  return fixedCount
}
// Main execution
console.log("Starting comprehensive JSX fixes...")
const fixedCount = processDirectory("./app")
console.log(`Fixed ${fixedCount} files.`)