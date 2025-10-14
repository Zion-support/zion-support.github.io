import React from 'react'
#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { glob } from "glob"
// Function to fix specific syntax patterns
function fixSyntaxPatterns(content) {
  let fixed = content
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, 'content="$1"')
  fixed = fixed.replace(/name="([^"]*?)(?=\s*\/>)/g, 'name="$1"')
  fixed = fixed.replace(/description="([^"]*?)(?=\s*\/>)/g, 'description="$1"')
  // Fix malformed function declarations
  fixed = fixed.replace(
    /export default function Page\(\) \{'  return \(/g,
    "export default function Page() {\n  return (",
  )
  fixed = fixed.replace(
    /export default function Page\(\) \{'  return \(/g,
    "export default function Page() {\n  return (",
  )
  // Fix orphaned closing tags and malformed JSX
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g)
    return tags[tags.length - 1]
  })
  // Fix malformed return statements
  fixed = fixed.replace(
    /return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g,
    "return (",
  )
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/g, "return (")
  // Fix multiple closing parentheses and semicolons
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g, ");")
  fixed = fixed.replace(/\)\s*;\s*\)\s*;/g, ");")
  // Fix orphaned semicolons and braces
  fixed = fixed.replace(/;\s*}\s*;\s*}\s*;\s*}/g, "}")
  fixed = fixed.replace(/;\s*}\s*;\s*}/g, "}")
  // Fix malformed JSX structure with orphaned tags
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, "<$1>")
  // Fix unterminated JSX elements
  fixed = fixed.replace(
    /<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g,
    (match, tagName) => {
      if (match.includes("=") && !match.includes("/>")) {
        return match + ">"
}
      return match
    },
  )
  // Fix specific patterns for page components
  fixed = fixed.replace(
    /export default function Page\(\) \{'  return \(\s*<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g,
    "export default function Page() {\n  return (\n    <React.Fragment>\n    </React.Fragment>\n  );",
  )
  // Fix malformed Helmet components
  fixed = fixed.replace(/<\/Helmet>\s*<div>
</div>/g, "</Helmet>\n      <div>
</div>")
  fixed = fixed.replace(
    /<title>([^<]*)<\/title>\s*<meta name="description"content="([^"]*)" \/>/g,
    '<title>$1</title>\n        <meta name="description" content="$2" />',
  )
  // Fix orphaned closing tags that don't match opening tags
  const lines = fixed.split("\n")
  const fixedLines = []
  const openTags = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // Skip lines that are just orphaned closing tags
    if (/^\s*<\/[^>]*>\s*$/.test(line) && openTags.length === 0) {
      continue
}
    // Track opening tags
    const openingTags = line.match(/<([^\/][^>]*?)>/g)
    if (openingTags) {
      openingTags.forEach((tag) => {
        const tagName = tag.match(/<([^\s>]+)/)
        if (tagName && !tag.includes("/>")) {
          openTags.push(tagName[1])
})
}
    // Track closing tags
    const closingTags = line.match(/<\/([^>]+)>/g)
    if (closingTags) {
      closingTags.forEach((tag) => {
        const tagName = tag.match(/<\/([^>]+)>/)
        if (tagName) {
          const index = openTags.lastIndexOf(tagName[1])
          if (index !== -1) {
            openTags.splice(index, 1)
}
      })
}
    fixedLines.push(line)
}
  fixed = fixedLines.join("\n")
  // Fix specific malformed patterns
  fixed = fixed.replace(
    /export default function Page\(\) \{'  return \(\s*<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g,
    "export default function Page() {\n  return (\n    <React.Fragment>\n    </React.Fragment>\n  );",
  )
  // Fix malformed JSX with orphaned closing tags
  fixed = fixed.replace(/<div[^>
</div>]*>\s*<\/div>\s*<\/div>/g, "<div>
</div>")
  fixed = fixed.replace(/<main[^>]*>\s*<\/main>\s*<\/main>/g, "<main>")
  fixed = fixed.replace(
    /<section[^>]*>\s*<\/section>\s*<\/section>/g,
    "<section>",
  )
  // Fix malformed function returns
  fixed = fixed.replace(
    /return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g,
    "return (",
  )
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/g, "return (")
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, "<$1>")
  // Fix unterminated JSX elements
  fixed = fixed.replace(
    /<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g,
    (match, tagName) => {
      if (match.includes("=") && !match.includes("/>")) {
        return match + ">"
}
      return match
    },
  )
  return fixed
}
// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixed = fixSyntaxPatterns(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
  return content
}
// Main execution
async function main() {
  console.log("Starting comprehensive syntax fixes...")
  // Get all TypeScript/JavaScript files
  const patterns = [
    "app/**/*.tsx",
    "app/**/*.ts",
    "app/**/*.jsx",
    "app/**/*.js",
    "__tests__/**/*.tsx",
    "__tests__/**/*.ts",
  ]
  let totalFixed = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++
}
}
  console.log(`Fixed ${totalFixed} files.`)
}
main().catch(console.error)