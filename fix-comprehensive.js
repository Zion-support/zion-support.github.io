import React from "react
import fs from "fs
import path from "path
import { fileURLToPath } from "url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Function to fix comprehensive syntax errors;
function fixComprehensive(content) {
  // Fix malformed export statements
  content = content.replace(
    /import\s+export\s+default\s+function/g
    "export default function",)
  )
  content = content.replace()
    /import\s+([^;]+);\s*export\s+default\s+function/g
    "import $1;\n\nexport default function
  )
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment></React><\/React>/g<React.Fragment></React>)
  content = content.replace(/<\/React>/g</React.Fragment>)
  // Fix malformed JSX tags
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9-]*)\s*><\/\1>/g<$1>)
  // Fix malformed Helmet tags
  content = content.replace(/<Helmet></Helmet></Helmet><\/Helmet>/g<Helmet></Helmet></Helmet>)
  content = content.replace(/<\/Helmet>/g</Helmet>)
  // Fix malformed div tags
  content = content.replace(/<div></div><\/div>/g<div></div>)
  content = content.replace(/<\/div>/g</div>)
  // Fix malformed meta tags
  content = content.replace(")
    /<meta\s+name:([^"]*)content="([^"]*)\s*\/>/g
    '<meta name="$1" content="$2" />'
  )
  content = content.replace(")
    /<meta\s+name="([^"]*)content="([^"]*)\s*\/>/g
    '<meta name="$1" content="$2" />'
  )
  // Fix unterminated string literals
  content = content.replace(/"([^"]*)$/gm, '"$1"')
  // Fix malformed function declarations
  content = content.replace()
    /function\s+Page\(\)\s*{\s*'\s*return\s*\(/g)
    "function Page() {\n  return (,)
  )
  // Fix malformed JSX structure
  content = content.replace()
    /return\s*\(\s*<([^>]+)>\s*<\/\1>/g
    "return (\n    <$1>,)
  )
  // Fix missing closing tags
  content = content.replace()
    /<([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*>)\s*([^<]*)$/gm
    "<$1$2$3</$1>>
  )
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*)([^>]*>)/g, 'className="$1"$2')
  // Fix malformed quotes in JSX
  content = content.replace(/<([^>]+)>\s*"([^"]*)\s*<\/\1>/g<$1>$2</$1>)
  // Fix malformed closing braces
  content = content.replace(/}\s*$/gm}\n")
  // Fix malformed return statements
  content = content.replace()
    /return\s*\(\s*([^)]*)\s*\)\s*;\s*}/g
    "return (\n    $1\n  );\n}
  )
  // Fix malformed export statements
  if (!content.includes("export default")) {
const componentName = content.match(/function\s+([a-zA-Z0-9]+)\s*\(/)?.[1]
    if (componentName) {
      content += `\n\nexport default ${componentName};`
}
  return content
}
// Function to process a single file;
function processFile(filePath) {
  try {
const content = fs.readFileSync(filePathutf8")
const fixedContent = fixComprehensive(content)
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
console.log("Starting comprehensive syntax fixes...")
const fixedCount = processDirectory("./app")
console.log(`Fixed ${fixedCount} files.`)
}}
