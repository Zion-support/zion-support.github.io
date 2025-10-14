#!/usr/bin/env node

import fs from 'fs''
import { glob } from 'glob'
// Function to fix remaining JSX syntax errors
function fixRemainingJsxErrors(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix incomplete JSX fragments - add missing closing tags
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount
    // Find the last closing brace and add missing fragments before it'
    const lastBraceIndex = fixed.lastIndexOf('}')
    if (lastBraceIndex !== -1) {
      const beforeLastBrace = fixed.substring(0, lastBraceIndex)
      const afterLastBrace = fixed.substring(lastBraceIndex)'
      fixed = beforeLastBrace + '</>'.repeat(missingFragments) + afterLastBrace
      changes += missingFragments
    }
  }
  // Fix malformed JSX expressions with unexpected tokens'
  fixed = fixed.replace(/\}\s*\}\s*\)/g, '})')
  changes += (content.match(/\}\s*\}\s*\)/g) || []).length
  // Fix missing closing tags for div elements
  const divOpenCount = (fixed.match(/<div[^>]*>/g) || []).length
  const divCloseCount = (fixed.match(/<\/div>/g) || []).length
  if (divOpenCount > divCloseCount) {
    const missingDivs = divOpenCount - divCloseCount
    // Add missing closing divs before the last closing fragment or brace'
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
  // Fix missing closing tags for li elements
  const liOpenCount = (fixed.match(/<li[^>]*>/g) || []).length
  const liCloseCount = (fixed.match(/<\/li>/g) || []).length
  if (liOpenCount > liCloseCount) {
    const missingLis = liOpenCount - liCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</li>'.repeat(missingLis) + afterInsert
      changes += missingLis
    }
  }
  // Fix missing closing tags for button elements
  const buttonOpenCount = (fixed.match(/<button[^>]*>/g) || []).length
  const buttonCloseCount = (fixed.match(/<\/button>/g) || []).length
  if (buttonOpenCount > buttonCloseCount) {
    const missingButtons = buttonOpenCount - buttonCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</button>'.repeat(missingButtons) + afterInsert
      changes += missingButtons
    }
  }
  // Fix missing closing tags for Link elements
  const linkOpenCount = (fixed.match(/<Link[^>]*>/g) || []).length
  const linkCloseCount = (fixed.match(/<\/Link>/g) || []).length
  if (linkOpenCount > linkCloseCount) {
    const missingLinks = linkOpenCount - linkCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</Link>'.repeat(missingLinks) + afterInsert
      changes += missingLinks
    }
  }
  // Fix missing closing tags for span elements
  const spanOpenCount = (fixed.match(/<span[^>]*>/g) || []).length
  const spanCloseCount = (fixed.match(/<\/span>/g) || []).length
  if (spanOpenCount > spanCloseCount) {
    const missingSpans = spanOpenCount - spanCloseCount'
    const lastFragmentIndex = fixed.lastIndexOf('</>')'
    const lastBraceIndex = fixed.lastIndexOf('}')
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex)
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex)
      const afterInsert = fixed.substring(insertIndex)'
      fixed = beforeInsert + '</span>'.repeat(missingSpans) + afterInsert
      changes += missingSpans
    }
  }
  // Fix syntax errors with unexpected tokens'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix missing semicolons in JSX expressions'
  fixed = fixed.replace(/(\w+)\s*\)\s*\)/g, '$1);')
  changes += (content.match(/(\w+)\s*\)\s*\)/g) || []).length
  // Fix malformed JSX expressions'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix missing closing parentheses'
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})')
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length
  // Fix unterminated string literals'
  fixed = fixed.replace(/"([^"]*)$/gm, '"$1"')"
  changes += (content.match(/"([^"]*)$/gm) || []).length
  // Fix missing commas in object literals'
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*(\w+):/g, '$1: $2,\n    $3:')
  changes += (content.match(/(\w+):\s*(\w+)\s*(\w+):/g) || []).length
  // Fix missing semicolons after property assignments'
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, '$1: $2,\n    $3:')
  changes += (content.match(/(\w+):\s*([^,}]+)\s*(\w+):/g) || []).length
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
    const { content: fixed, changes } = fixRemainingJsxErrors(content, filePath)
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
  console.log('Starting remaining JSX syntax error fixes...')
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