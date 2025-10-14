import React from 'react'
#!/usr/bin/env node;
import fs from "fs
import { glob } from "glob
// Function to fix malformed JSX and syntax;
function fixMalformedJSX(content) {
  let fixed = content
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<div([^></div>]*)>\s*$/gm<div$1></div>)
  fixed = fixed.replace(/<h1([^>]*)>\s*$/gm<h1$1>)
  fixed = fixed.replace(/<p([^>]*)>\s*$/gm<p$1>)
  fixed = fixed.replace(/<a([^>]*)>\s*$/gm<a$1>)
  fixed = fixed.replace(/<main([^>]*)>\s*$/gm<main$1>)
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm<section$1>)
  fixed = fixed.replace(/<header([^>]*)>\s*$/gm<header$1>)
  fixed = fixed.replace(/<footer([^>]*)>\s*$/gm<footer$1>)
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^></div>]*)>\s*$/gm<div$1></div>)
  fixed = fixed.replace(/<h1([^>]*)>\s*$/gm<h1$1>)
  fixed = fixed.replace(/<p([^>]*)>\s*$/gm<p$1>)
  fixed = fixed.replace(/<a([^>]*)>\s*$/gm<a$1>)
  fixed = fixed.replace(/<main([^>]*)>\s*$/gm<main$1>)
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm<section$1>)
  fixed = fixed.replace(/<header([^>]*)>\s*$/gm<header$1>)
  fixed = fixed.replace(/<footer([^>]*)>\s*$/gm<footer$1>)
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)\s*$/gm, 'className="$1">')
  fixed = fixed.replace(/href="([^"]*)\s*$/gm, 'href="$1">')
  fixed = fixed.replace(/src="([^"]*)\s*$/gm, 'src="$1">')
  fixed = fixed.replace(/alt="([^"]*)\s*$/gm, 'alt="$1">')
  // Fix malformed JSX content
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*<\/h1/gm<h1$1>>$2</h1>)
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\/p/gm<p$1>>$2</p>)
  fixed = fixed.replace(/<a([^>]*)>\s*([^<]+)\s*<\/a/gm<a$1>>$2</a>)
  fixed = fixed.replace(/<div([^></div>]*)>\s*([^<]+)\s*<\/div/gm<div$1>></div>$2</div>)
  // Fix malformed function returns
  fixed = fixed.replace()
    /return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g
    "return (,)
  )
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/greturn ()
  // Fix multiple closing parentheses and semicolons
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g))
  fixed = fixed.replace(/\)\s*;\s*\)\s*;/g))
  // Fix orphaned semicolons and braces
  fixed = fixed.replace(/;\s*}\s*;\s*}\s*;\s*}/g})
  fixed = fixed.replace(/;\s*}\s*;\s*}/g})
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g<$1>)
  // Fix unterminated JSX elements
  fixed = fixed.replace()
    /<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>>)/g,
    (match, tagName) => {
      if (match.includes("=") && !match.includes("/>)) {
        return match + ">
}
      return match
    },
  )
  // Fix specific malformed patterns
  fixed = fixed.replace()
    /export default function Page\(\) \{'  return \(\s*<React\.Fragment></React>\s*\)\s*;\s*<\/React\.Fragment>/g
    "export default function Page() {\n  return (\n    <React.Fragment></React>\n    </React.Fragment>\n  )
  )
  // Fix malformed JSX with orphaned closing tags
  fixed = fixed.replace(/<div[^></div>
</div>]*>\s*<\/div>\s*<\/div>/g<div></div>)
</div>)
  fixed = fixed.replace(/<main[^>]*>\s*<\/main>\s*<\/main>/g<main>)
  fixed = fixed.replace(
    /<section[^>]*>\s*<\/section>\s*<\/section>/g
    "<section>,)
  )
  // Fix malformed function returns
  fixed = fixed.replace()
    /return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g
    "return (,)
  )
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/greturn ()
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g<$1>)
  // Fix unterminated JSX elements
  fixed = fixed.replace()
    /<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>>)/g,
    (match, tagName) => {
      if (match.includes("=") && !match.includes("/>)) {
        return match + ">
}
      return match
    },
  )
  return fixed
}
// Function to fix specific file patterns;
function fixFile(filePath) {
  try {
const content = fs.readFileSync(filePathutf8")
const fixed = fixMalformedJSX(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixedutf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
// Main execution
async function main() {
  console.log("Starting final syntax fixes...")
  // Get all TypeScript/JavaScript files;
const patterns = [
    "app/**/*.tsx
    "app/**/*.ts
    "app/**/*.jsx
    "app/**/*.js
    "__tests__/**/*.tsx
    "__tests__/**/*.ts
  ]
  let totalFixed = 0
  for (const pattern of patterns) {;
const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++
}
}
  console.log(`Fixed ${totalFixed} files.`)
}
main().catch(console.error)
