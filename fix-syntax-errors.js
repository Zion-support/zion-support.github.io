#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content
  // Fix import statements with missing commas;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*;\s*}/g, (match, imports) => {
    const cleanImports = imports.replace(/[;,\s]+$/, '').trim()
    return `import { ${cleanImports} } from`
  })
  // Fix import statements that are missing the 'from' keyword;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*$/gm, (match, imports) => {
    const cleanImports = imports.replace(/[;,\s]+$/, '').trim()
    return `import { ${cleanImports} } from 'lucide-react';`
  })
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {')
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n')
  // Fix malformed JSX returns
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*$/gm, 'return (\n    <$1>')
  fixed = fixed.replace(/return\s*<([^>]+)>\s*$/gm, 'return (\n    <$1>')
  // Fix missing closing brackets and parentheses
  fixed = fixed.replace(/}\s*,\s*$/gm, '}\n')
  fixed = fixed.replace(/\)\s*,\s*$/gm, ')\n')
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*\/\s*>/g, 'className="$1" />')
  fixed = fixed.replace(/className\s*=\s*"([^"]*)"\s*\/\s*\/>/g, 'className="$1" />')
  // Fix malformed component returns
  fixed = fixed.replace(/return\s+return\s*\(/g, 'return (')
  fixed = fixed.replace(/return\s*\(\s*<div\s*\/>\s*,\s*/g, 'return (\n    ')
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)className\s*=\s*"([^"]*)"\s*\/\s*>/g, '<$1 className="$2" />')
  fixed = fixed.replace(/<(\w+)className\s*=\s*"([^"]*)"\s*\/\s*\/>/g, '<$1 className="$2" />')
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*(\w+)\s*>\s*,\s*$/gm, '</$1>')
  fixed = fixed.replace(/<\/\s*(\w+)\s*>\s*;\s*$/gm, '</$1>')
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*\)\s*=>\s*{\s*;\s*}/g, '() => {\n  // TODO: Implement\n}')
  // Fix malformed object properties
  fixed = fixed.replace(/:\s*"([^"]*)"\s*,\s*$/gm, ': "$1"')
  // Fix malformed array elements
  fixed = fixed.replace(/,\s*$/gm, '')
  // Fix malformed string literals
  fixed = fixed.replace(/"([^"]*)"\s*,\s*$/gm, '"$1"')
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]+)\s*\}\s*,\s*$/gm, '{$1}')
  // Fix malformed component declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'export default function $1() {\n')
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n')
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>\n')
  fixed = fixed.replace(/<\/>\s*;\s*$/gm, '</>\n')
  // Fix malformed closing brackets
  fixed = fixed.replace(/}\s*;\s*$/gm, '}\n')
  // Fix malformed semicolons
  fixed = fixed.replace(/;\s*$/gm, '')
  // Fix malformed commas
  fixed = fixed.replace(/,\s*$/gm, '')
  // Fix malformed parentheses
  fixed = fixed.replace(/\)\s*;\s*$/gm, ')\n')
  // Fix malformed brackets
  fixed = fixed.replace(/\]\s*;\s*$/gm, ']\n')
  // Fix malformed braces
  fixed = fixed.replace(/\}\s*;\s*$/gm, '}\n')
  // Fix malformed JSX attributes with spaces
  fixed = fixed.replace(/\s+className\s*=\s*"([^"]*)"\s*\/\s*>/g, ' className="$1" />')
  // Fix malformed JSX elements with spaces
  fixed = fixed.replace(/\s+<(\w+)\s*className\s*=\s*"([^"]*)"\s*\/\s*>/g, ' <$1 className="$2" />')
  // Fix malformed closing tags with spaces
  fixed = fixed.replace(/\s+<\/\s*(\w+)\s*>\s*,\s*$/gm, ' </$1>')
  // Fix malformed JSX expressions with spaces
  fixed = fixed.replace(/\s+\{\s*([^}]+)\s*\}\s*,\s*$/gm, ' {$1}')
  // Fix malformed function calls with spaces
  fixed = fixed.replace(/\s+\(\s*\)\s*=>\s*{\s*;\s*}/g, ' () => {\n  // TODO: Implement\n}')
  // Fix malformed object properties with spaces
  fixed = fixed.replace(/\s+:\s*"([^"]*)"\s*,\s*$/gm, ' : "$1"')
  // Fix malformed array elements with spaces
  fixed = fixed.replace(/\s+,\s*$/gm, '')
  // Fix malformed string literals with spaces
  fixed = fixed.replace(/\s+"([^"]*)"\s*,\s*$/gm, ' "$1"')
  // Fix malformed JSX expressions with spaces
  fixed = fixed.replace(/\s+\{\s*([^}]+)\s*\}\s*,\s*$/gm, ' {$1}')
  // Fix malformed component declarations with spaces
  fixed = fixed.replace(/\s+export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, ' export default function $1() {\n')
  // Fix malformed arrow functions with spaces
  fixed = fixed.replace(/\s+const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, ' const $1 = () => {\n')
  // Fix malformed JSX fragments with spaces
  fixed = fixed.replace(/\s+<>\s*$/gm, ' <>\n')
  fixed = fixed.replace(/\s+<\/>\s*;\s*$/gm, ' </>\n')
  // Fix malformed closing brackets with spaces
  fixed = fixed.replace(/\s+}\s*;\s*$/gm, ' }\n')
  // Fix malformed semicolons with spaces
  fixed = fixed.replace(/\s+;\s*$/gm, '')
  // Fix malformed commas with spaces
  fixed = fixed.replace(/\s+,\s*$/gm, '')
  // Fix malformed parentheses with spaces
  fixed = fixed.replace(/\s+\)\s*;\s*$/gm, ' )\n')
  // Fix malformed brackets with spaces
  fixed = fixed.replace(/\s+\]\s*;\s*$/gm, ' ]\n')
  // Fix malformed braces with spaces
  fixed = fixed.replace(/\s+\}\s*;\s*$/gm, ' }\n')
  return fixed
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixSyntaxErrors(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed)
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (item !== 'node_modules' && item !== '.git' && item !== '.next') {
          fixedCount += processDirectory(fullPath)
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
  }
  
  return fixedCount
}

// Main execution
console.log('Starting syntax error fixes...')
const totalFixed = processDirectory('/workspace')
console.log(`Fixed ${totalFixed} files`)