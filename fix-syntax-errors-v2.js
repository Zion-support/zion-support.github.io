#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix specific syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix specific patterns found in the files
    const fixes = [
      // Fix missing commas in object properties (like the values array in about/page.tsx)
      {
        pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix malformed object properties with missing commas
      {
        pattern: /(\w+):\s*(\w+),?\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix missing commas in arrays
      {
        pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix malformed metadata objects
      {
        pattern: /export\s+const\s+metadata\s*=\s*{\s*(\w+):\s*'([^']*)',?\s*}\s*(\w+):/g,
        replacement: 'export const metadata = {\n  $1: \'$2\',\n  $3:'
      },
      {
        pattern: /export\s+const\s+metadata\s*=\s*{\s*(\w+):\s*"([^"]*)",?\s*}\s*(\w+):/g,
        replacement: 'export const metadata = {\n  $1: "$2",\n  $3:'
      },
      // Fix malformed function parameters
      {;
        pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*}\s*:\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*;\s*(\w+):/g,
        replacement: 'export default function $1({\n  $2:'
      },
      // Fix malformed object literals with missing commas
      {
        pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix missing closing braces and parentheses
      {
        pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)="([^"]*)"\s*(\w+)/g,
        replacement: '$1="$2" $3'
      },
      // Fix missing semicolons in exports
      {
        pattern: /export\s+const\s+(\w+)\s*=\s*{\s*(\w+):\s*'([^']*)',?\s*}\s*(\w+):/g,
        replacement: 'export const $1 = {\n  $2: \'$3\',\n  $4:'
      },
      // Fix malformed function declarations
      {
        pattern: /function\s+(\w+)\s*\(\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*}\s*:\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*;\s*(\w+):/g,
        replacement: 'function $1({\n  $2:'
      }
    ]
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix the specific pattern in about/page.tsx
      {
        pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix malformed metadata
      {
        pattern: /export\s+const\s+metadata\s*=\s*{\s*(\w+):\s*'([^']*)',?\s*}\s*(\w+):/g,
        replacement: 'export const metadata = {\n  $1: \'$2\',\n  $3:'
      },
      // Fix malformed function parameters
      {
        pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*}\s*:\s*{\s*\/\/\s*TODO:\s*Add\s+content;\s*}\s*;\s*(\w+):/g,
        replacement: 'export default function $1({\n  $2:'
      }
    ]
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed syntax errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('npm run lint 2>&1 | grep -E "error.*Parsing error" | cut -d: -f1 | sort -u 2>/dev/null || true', { encoding: 'utf8' })
    return result.trim().split('\n').filter(file => file.length > 0)
  } catch (error) {
    console.error('Error finding files with syntax errors:', error.message)
    return []
  }
}

// Main execution
console.log('Starting syntax error resolution...')
const filesWithErrors = findFilesWithSyntaxErrors()
console.log(`Found ${filesWithErrors.length} files with syntax errors`)
let fixedCount = 0
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`)
// Verify no more syntax errors exist
try {
  const remainingErrors = execSync('npm run lint 2>&1 | grep -c "error.*Parsing error" 2>/dev/null || echo "0"', { encoding: 'utf8' })
  const count = parseInt(remainingErrors.trim())
  if (count === 0) {
    console.log('✅ All syntax errors resolved!')
  } else {
    console.log(`⚠️  ${count} syntax errors still remain`)
  }
} catch (error) {
  console.log('✅ No syntax errors found')
}