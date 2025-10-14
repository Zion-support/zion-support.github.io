#!/usr/bin/env node

import fs from 'fs''
import { glob } from 'glob'
// Function to fix unterminated string literals and other syntax issues
function fixStringLiterals(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix unterminated string literals in import statements'
  fixed = fixed.replace(/import\s+React\s+from\s+"([^"]*)$/gm, 'import React from "react"')"
  changes += (content.match(/import\s+React\s+from\s+"([^"]*)$/gm) || []).length
  // Fix unterminated string literals in Helmet imports'"
  fixed = fixed.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+"([^"]*)$/gm, 'import { Helmet } from "react-helmet-async"')"
  changes += (content.match(/import\s+\{\s*Helmet\s*\}\s+from\s+"([^"]*)$/gm) || []).length
  // Fix malformed JSX fragments that are missing closing tags
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount
    // Add missing closing fragments at the end before the last closing brace'
    const lastBraceIndex = fixed.lastIndexOf('}')
    if (lastBraceIndex !== -1) {
      const beforeLastBrace = fixed.substring(0, lastBraceIndex)
      const afterLastBrace = fixed.substring(lastBraceIndex)'
      fixed = beforeLastBrace + '</>'.repeat(missingFragments) + afterLastBrace
      changes += missingFragments
    }
  }
  // Fix incomplete JSX structures that are missing proper closing
  // Look for patterns like: <Helmet>\n\n        </div>\n      </div>\n    </>\n  );\n}'
  fixed = fixed.replace(/<Helmet>\s*\n\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\n\s*\);\s*\n\s*\}/g, '')
  changes += (content.match(/<Helmet>\s*\n\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\n\s*\);\s*\n\s*\}/g) || []).length
  // Fix malformed JSX with missing closing tags'
  fixed = fixed.replace(/<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>/g, '')
  changes += (content.match(/<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>/g) || []).length
  // Fix incomplete function definitions
  fixed = fixed.replace(/export default function Page\(\) \{\s*return\s*\(\s*<>\s*<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\);\s*\}/g
    `export default function Page() {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Page description" />
      </Helmet>"
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-20">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Page</h1>"
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </>
  )
}`)
  changes += (content.match(/export default function Page\(\) \{\s*return\s*\(\s*<>\s*<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\);\s*\}/g) || []).length
  // Fix malformed JSX expressions with unexpected tokens'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix missing closing parentheses'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix unterminated string literals in JSX attributes'"
  fixed = fixed.replace(/className="([^"]*)$/gm, 'className="min-h-screen bg-white"')"
  changes += (content.match(/className="([^"]*)$/gm) || []).length
  // Fix malformed object literals with missing quotes'"
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, '$1: "$2",\n    $3:')
  changes += (content.match(/(\w+):\s*([^,}]+)\s*(\w+):/g) || []).length
  // Fix missing commas in object literals'
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*(\w+):/g, '$1: $2,\n    $3:')
  changes += (content.match(/(\w+):\s*(\w+)\s*(\w+):/g) || []).length
  // Fix malformed JSX with missing closing tags
  const divOpenCount = (fixed.match(/<div[^>]*>/g) || []).length
  const divCloseCount = (fixed.match(/<\/div>/g) || []).length
  if (divOpenCount > divCloseCount) {
    const missingDivs = divOpenCount - divCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</div>'.repeat(missingDivs) + afterInsert
      changes += missingDivs
    }
  }
  // Fix missing closing tags for section elements
  const sectionOpenCount = (fixed.match(/<section[^>]*>/g) || []).length
  const sectionCloseCount = (fixed.match(/<\/section>/g) || []).length
  if (sectionOpenCount > sectionCloseCount) {
    const missingSections = sectionOpenCount - sectionCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</section>'.repeat(missingSections) + afterInsert
      changes += missingSections
    }
  }
  // Fix malformed JSX expressions'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix missing semicolons in JSX expressions'
  fixed = fixed.replace(/(\w+)\s*\)\s*\)/g, '$1);')
  changes += (content.match(/(\w+)\s*\)\s*\)/g) || []).length
  // Fix malformed JSX with unexpected tokens'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix missing closing tags for any remaining unclosed elements
  const tagPattern = /<(\w+)[^>]*>(?!.*<\/\1>)/g
  const unclosedTags = fixed.match(tagPattern) || []
  if (unclosedTags.length > 0) {'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      let closingTags = ''
      unclosedTags.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1]
        closingTags += `</${tagName}>`
      })
      fixed = beforeInsert + closingTags + afterInsert
      changes += unclosedTags.length
    }
  }
  return { content: fixed, changes }
}
// Function to process a single file
function processFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8')
    const { content: fixed, changes } = fixStringLiterals(content, filePath)
    if (changes > 0) {'
      fs.writeFileSync(filePath, fixed, 'utf8')
      console.log(`Fixed ${changes} issues in ${filePath}`)
      return changes
    }
    return 0
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return 0
  }
}
// Main function
async function main() {'
  console.log('Starting string literal fixes...')
  // Find all TypeScript/JavaScript files in the app directory'
  const pattern = 'app/**/*.{ts,tsx,js,jsx}'
  const files = await glob(pattern)
  let totalChanges = 0
  let filesProcessed = 0
  files.forEach(file => {
    const changes = processFile(file)
    totalChanges += changes
    if (changes > 0) {
      filesProcessed++
    }
  })
  console.log(`\nCompleted! Fixed ${totalChanges} issues across ${filesProcessed} files.`)
}
// Run the script
main().catch(console.error)'"