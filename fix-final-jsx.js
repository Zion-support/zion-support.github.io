import React from "react"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix final JSX issues
function fixFinalJSX(content) {
  // Remove all extra quotes at the end of lines
  content = content.replace(/"\s*$/gm, "")
  // Fix malformed JSX structure
  content = content.replace(/<title>([^<]*)<\/title>"/g, "<title>$1</title>")
  content = content.replace(
    /<h1[^>]*>([^<]*)<\/h1>""/g,
    '<h1 className="text-4xl font-bold text-white mb-8">$1</h1>',
  )
  content = content.replace(
    /<p[^>]*>([^<]*)<\/p>/g,
    '<p className="text-gray-300 text-lg">$1</p>',
  )
  // Fix malformed closing tags
  content = content.replace(/<\/div><\/div>/g, "</div>\n      </div>")
  content = content.replace(
    /<\/React\.Fragment>\s*\);\s*"/g,
    "</React.Fragment>\n  );",
  )
  content = content.replace(/}\s*""/g, "}")
  // Fix missing closing Helmet tag
  content = content.replace(
    /<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<div>/g,
    '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>\n      <div>',
  )
  // Fix malformed function structure
  content = content.replace(
    /export default function Page\(\) \{\s*return\s*\(\s*<React\.Fragment>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/><\/Helmet>\s*<div>\s*<div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div><\/div>\s*<\/React\.Fragment>\s*\);\s*\}/g,
    `export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>$1</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">$2</h1>
          <p className="text-gray-300 text-lg">$3</p>
  )
}`,
  )
  return content
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixedContent = fixFinalJSX(content)
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
console.log("Starting final JSX fixes...")
const fixedCount = processDirectory("./app")
console.log(`Fixed ${fixedCount} files.`)