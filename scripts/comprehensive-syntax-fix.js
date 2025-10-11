#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log('🔧 Comprehensive syntax fix for all files...')
// Comprehensive syntax fixes
const fixes = [
  // Fix semicolons in object properties
  { pattern: /color: 'text-\w+-\d+'\}/g, replacement: "color: 'text-\\w+-\\d+'" },
  // Fix semicolons in JSX attributes
  { pattern: /className=\{`[^`]+`\}/g, replacement: (match) => match.replace(',', '') },
  // Fix semicolons in JSX props
  { pattern: /keywords=\{[^}]+\}\}/g, replacement: (match) => match.replace('}', '}') },
  // Fix missing commas in arrays
  { pattern: /}\s*;\s*$/gm, replacement: '}' },
  // Fix stray semicolons
  { pattern: /,\s*$/gm, replacement: '' },
  // Fix console statements
  { pattern: /console\.(log|warn|error|info|debug)\([^)]*\),/g, replacement: '' }]
function fixFile(filePath) {
    try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    fixes.forEach(fix => {)
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
  }
    })
    if (modified) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    let files = []
  try {
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'backup-problematic'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions))
  }
      } else if (extensions.some(ext => item.endsWith(ext))) {
    files.push(fullPath)
  }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files
}

// Main fix process
const files = findFiles('./app')
let fixedCount = 0
console.log(`Found ${files.length} files to process...`)
files.forEach(file => {
    )
  if (fixFile(file)) {
    fixedCount++
  }
})
console.log(`\n🎉 Comprehensive syntax fix complete! Modified ${fixedCount} files.`)