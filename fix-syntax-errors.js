#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix common syntax errors
    const fixes = [
      // Fix missing comma after icon property
      { pattern: /{\s*icon:\s*(\w+),?\s*}\s*title:/g, replacement: '{\n      icon: $1,\n      title:' },
      // Fix missing comma in object properties
      { pattern: /}\s*title:/g, replacement: '},\n      title:' },
      { pattern: /}\s*description:/g, replacement: '},\n      description:' },
      // Fix missing opening parenthesis in map functions
      { pattern: /\.map\(\([^)]*\)\s*=>\s*\(\s*}/g, replacement: '.map(($1) => (' },
      // Fix semicolons in JSX text
      { pattern: /;\s*$/gm, replacement: '' },
      // Fix malformed object syntax
      { pattern: /{\s*title:\s*'([^']+)',\s*}\s*description:/g, replacement: '{\n  title: \'$1\',\n  description:' },
      // Fix missing closing parenthesis
      { pattern: /\(\s*}\s*$/gm, replacement: '()' },
      // Fix malformed metadata export
      { pattern: /export const metadata = {title: '([^']+)',\s*}\s*description:/g, replacement: 'export const metadata = {\n  title: \'$1\',\n  description:' },
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
      console.log(`Fixed syntax errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = []
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath)
        }
      } else if (stat.isFile()) {
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath)
        }
      }
    }
  }
  
  scanDirectory(dir)
  return files
}

// Main execution
console.log('🔍 Scanning for source files...')
const sourceFiles = findSourceFiles(process.cwd())
console.log(`Found ${sourceFiles.length} source files`)
let fixedCount = 0
for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`)