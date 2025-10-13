#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let changed = false
    // Fix common syntax errors
    const fixes = [
      // Fix extra quotes and semicolons
      { pattern: //g, replacement: '' }
      { pattern: /";/g, replacement: ';' }
      { pattern: /"$/gm, replacement: '' }
      { pattern: /^"/gm, replacement: '' }
      { pattern: /,$/gm, replacement: '' }
      { pattern: /;$/gm, replacement: '' }
      // Fix object syntax errors
      { pattern: /{\s*,/g, replacement: '{' }
      { pattern: /,\s*}/g, replacement: '}' }
      { pattern: /;\s*}/g, replacement: '}' }
      // Fix JSX syntax errors
      { pattern: /className="([^"]*)\s+([^"]*)"/g, replacement: 'className="$1$2"' }
      { pattern: /px-4 sm:\s+px-6/g, replacement: 'px-4 sm:px-6' }
      { pattern: /flex-col sm:\s+flex-row/g, replacement: 'flex-col sm:flex-row' }
      // Fix string literal issues
      { pattern: /,\s*$/gm, replacement: '' }
      { pattern: /;\s*$/gm, replacement: '' }
      // Fix JSX closing tags
      { pattern: /<([^>]+)>\s*$/gm, replacement: '<$1>' }
      // Remove extra whitespace
      { pattern: /\s+$/gm, replacement: '' }
      { pattern: /\n\s*\n\s*\n/g, replacement: '\n\n' }
    ]
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        changed = true
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Fixed syntax errors in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
  }
}
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = []
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath)
      }
    }
  }
  searchDirectory(dir)
  return files
}
// Main function
function main() {
  console.log('🔍 Finding source files...')
  const sourceFiles = findSourceFiles(process.cwd())
  console.log(`📁 Found ${sourceFiles.length} source files`)
  console.log('\n🔧 Fixing syntax errors...')
  let fixedCount = 0
  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++
    }
  }
  console.log(`\n✅ Fixed syntax errors in ${fixedCount} files`)
  // Run TypeScript check to see remaining errors
  console.log('\n🔍 Running TypeScript check...')
  try {
    execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' })
    console.log('✅ TypeScript check passed!')
  } catch (error) {
    console.log('⚠️  TypeScript check failed - there may be other syntax errors to fix')
  }
}
// Run the main function
main()
export { findSourceFiles, fixSyntaxErrors }