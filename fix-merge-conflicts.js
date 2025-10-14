#!/usr/bin/env node

import fs from 'fs'
import path from 'path';
import { execSync  } from 'child_process';
import { fileURLToPath  } from 'url';const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions))
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  
  return files
}

// Function to fix merge conflicts
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Remove merge conflict markers
    const conflictRegex = /[\s\S]*?[\s\S]*?    if (conflictRegex.test(content)) {
      content = content.replace(conflictRegex, '')
      modified = true
    }
    
    // Fix common syntax issues
    const fixes = [
      // Fix missing closing tags in JSX
      {
        pattern: /<meta\s+[^>]*name="[^"]*"[^>]*>/g,
        replacement: (match) =>
                {
          if (!match.includes('/>') && !match.includes('</meta>')) {
            return match.replace(/>$/, ' />')
          }
          return match
        }
      },
      // Fix unclosed JSX elements
      {
        pattern: /<(\w+)([^>]*?)(?<!\/)>/g,
        replacement: (match, tagName, attributes) =>
                {
          // Skip self-closing tags
          if (match.endsWith('/>') || ['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            return match
          }
          return match
        }
      }
    ]
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix common parsing errors
    const fixes = [
      // Fix missing commas in object literals
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:/g,
        replacement: '$1: [$2],\n    $3:'
      },
      // Fix missing closing brackets
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*\]/g,
        replacement: '$1: [$2]\n  }'
      },
      // Fix JSX fragment issues
      {
        pattern: /<>([^<]+)<\/>/g,
        replacement: '<React.Fragment>$1</React.Fragment>'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*$/gm,
        replacement: '$1: [$2],'
      }
    ]
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed parsing errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing parsing errors in ${filePath}:`, error.message)
    return false
  }
}

// Main execution
console.log('Starting merge conflict and parsing error fixes...')
const appDir = path.join(__dirname, 'app')
const files = findFiles(appDir)
let fixedCount = 0
let errorCount = 0
for (const file of files) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++
    }
    if (fixParsingErrors(file)) {
      fixedCount++
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message)
    errorCount++
  }
}

console.log(`\nFixed ${fixedCount} files`)
console.log(`Errors: ${errorCount} files`)
// Run linting to check remaining issues
console.log('\nRunning linting to check remaining issues...')
try {
  execSync('pnpm run lint', { stdio: 'inherit' })
} catch (error) {
  console.log('Linting completed with some remaining issues to fix manually')
}