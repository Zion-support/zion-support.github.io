#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix corrupted syntax in files
function fixCorruptedSyntax(content) {
  // Fix concatenated import statements with missing line breaks
  content = content.replace(
    /import\s+([^;]+);"import\s+/g,
    "import $1;\nimport ",
  )
  content = content.replace(
    /import\s+([^;]+);"const\s+/g,
    "import $1;\n\nconst ",
  )
  content = content.replace(
    /import\s+([^;]+);'const\s+/g,
    "import $1;\n\nconst ",
  )
  // Fix missing quotes in import statements
  content = content.replace(/from\s+'react;'/g, "from 'react';")
  content = content.replace(/from\s+"react;"/g, 'from "react";')
  // Fix malformed JSX attributes
  content = content.replace(/className:\s*"/g, 'className="')
  content = content.replace(/name:\s*"/g, 'name="')
  content = content.replace(/content:\s*"/g, 'content="')
  // Fix malformed return statements and JSX
  content = content.replace(/return\s*\(\s*<div>/g, "return (\n    <div>")
  content = content.replace(
    /\{\s*return\s*\(\s*<div>/g,
    "{\n  return (\n    <div>",
  )
  // Fix malformed JSX closing tags and strings
  content = content.replace(/"\s*<\/Helmet>/g, '"\n      </Helmet>')
  content = content.replace(/"\s*<\/div>/g, '"\n      </div>')
  content = content.replace(/"\s*<\/h1>/g, '"\n          </h1>')
  content = content.replace(/"\s*<\/p>/g, '"\n          </p>')
  content = content.replace(/"\s*<\/meta>/g, '"\n        />')
  // Fix unterminated string literals in JSX
  content = content.replace(/content="([^"]*)"\s*\/>/g, 'content="$1" />')
  content = content.replace(
    /name="([^"]*)"\s*content="([^"]*)"\s*\/>/g,
    'name="$1" content="$2" />',
  )
  // Fix malformed text content
  content = content.replace(
    /"\s*This page is under construction\. Please check back later\./g,
    '"\n            This page is under construction. Please check back later.',
  )
  // Fix missing semicolons and line breaks
  content = content.replace(/}\s*export\s+default\s+/g, "}\n\nexport default ")
  content = content.replace(/}\s*const\s+/g, "}\n\nconst ")
  // Fix specific patterns found in the files
  content = content.replace(
    /import React from "react";"import { Helmet } from "react-helmet-async";"const PagePage = \(\) => \{'  return \('    <div>/g,
    'import React from "react";\nimport { Helmet } from "react-helmet-async";\n\nconst PagePage = () => {\n  return (\n    <div>',
  )
  content = content.replace(
    /import React from 'react;'const Header = \(\) => \{/g,
    "import React from 'react';\n\nconst Header = () => {",
  )
  // Fix malformed meta tags
  content = content.replace(
    /<meta name: "description" content: "([^"]*)" \/>"/g,
    '<meta name="description" content="$1" />',
  )
  // Fix malformed className attributes
  content = content.replace(
    /className: "([^"]*)"([^>]*)>/g,
    'className="$1"$2>',
  )
  // Clean up extra quotes and malformed strings
  content = content.replace(/"\s*"\s*/g, "")
  content = content.replace(/'\s*'\s*/g, "")
  // Fix specific unterminated string patterns
  content = content.replace(
    /import { Helmet } from "react-helmet-async";"const PagePage = \(\) => \{'  return \('    <div>/g,
    'import { Helmet } from "react-helmet-async";\n\nconst PagePage = () => {\n  return (\n    <div>',
  )
  // Fix malformed JSX structure
  content = content.replace(
    /\}\s*const\s+([^=]+)=\s*\(\)\s*=>\s*\{/g,
    "}\n\nconst $1 = () => {",
  )
  // Clean up extra whitespace and normalize line endings
  content = content.replace(/\r\n/g, "\n")
  content = content.replace(/\n\s*\n\s*\n/g, "\n\n")
  // Fix specific patterns that are still broken
  content = content.replace(
    /import\s+([^;]+);"const\s+([^=]+)=\s*\(\)\s*=>\s*\{/g,
    "import $1;\n\nconst $2 = () => {",
  )
  // Fix malformed JSX return statements
  content = content.replace(
    /\{\s*return\s*\(\s*<div>\s*<Helmet>/g,
    "{\n  return (\n    <div>\n      <Helmet>",
  )
  // Fix malformed closing tags
  content = content.replace(/\/>\s*"\s*<\/Helmet>/g, " />\n      </Helmet>")
  content = content.replace(/\/>\s*"\s*<\/div>/g, " />\n      </div>")
  return content
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixedContent = fixCorruptedSyntax(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, "utf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
}
// Function to recursively find and process files
function processDirectory(
  dirPath,
  extensions = [".tsx", ".ts", ".jsx", ".js"],
) {
  let fixedCount = 0
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath)
    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!["node_modules", ".git", "dist", ".next", "out"].includes(item)) {
          walkDir(fullPath)
} else if (stat.isFile()) {
        const ext = path.extname(item)
        if (extensions.includes(ext)) {
          if (processFile(fullPath)) {
            fixedCount++
}
}
}
  walkDir(dirPath)
  return fixedCount
}
// Main execution
console.log("Starting comprehensive syntax error fixes...")
const fixedCount = processDirectory("/workspace/app")
console.log(`Fixed ${fixedCount} files.`)
// Also process root level files
const rootFiles = [
  "App.tsx",
  "App_minimal.tsx",
  "App_test.tsx",
  "App-minimal.tsx",
]
let rootFixedCount = 0
for (const file of rootFiles) {
  const filePath = path.join("/workspace", file)
  if (fs.existsSync(filePath)) {
    if (processFile(filePath)) {
      rootFixedCount++
}
}
console.log(`Fixed ${rootFixedCount} root files.`)
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`)