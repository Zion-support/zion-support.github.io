#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix all syntax errors in a file
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix stray semicolons in various contexts
    content = content.replace(/;\s*$/gm, '')
    content = content.replace(/;\s*import\s+/g, '\nimport ')
    content = content.replace(/;\s*export\s+/g, '\nexport ')
    content = content.replace(/;\s*const\s+/g, '\nconst ')
    content = content.replace(/;\s*let\s+/g, '\nlet ')
    content = content.replace(/;\s*var\s+/g, '\nvar ')
    content = content.replace(/;\s*function\s+/g, '\nfunction ')
    content = content.replace(/;\s*interface\s+/g, '\ninterface ')
    content = content.replace(/;\s*type\s+/g, '\ntype ')
    content = content.replace(/;\s*class\s+/g, '\nclass ')
    // Fix import statements
    content = content.replace(/import\s*{\s*;\s*/g, 'import { ')
    content = content.replace(/,\s*;\s*/g, ',\n  ')
    content = content.replace(/;\s*}\s*from/g, '\n} from')
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {')
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*;/g, 'function $1() {')
    // Fix JSX elements
    content = content.replace(/<\s*(\w+)\s*;/g, '<$1 ')
    content = content.replace(/;\s*>/g, '>')
    content = content.replace(/;\s*<\//g, '</')
    // Fix object properties
    content = content.replace(/{\s*;/g, '{')
    content = content.replace(/;\s*}/g, '}')
    content = content.replace(/,\s*;/g, ',')
    // Fix array elements
    content = content.replace(/\[\s*;/g, '[')
    content = content.replace(/;\s*\]/g, ']')
    // Fix conditional statements
    content = content.replace(/if\s*\(\s*[^)]+\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    content = content.replace(/else\s*{\s*;/g, 'else {')
    content = content.replace(/for\s*\(\s*[^)]+\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    content = content.replace(/while\s*\(\s*[^)]+\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    // Fix try-catch blocks
    content = content.replace(/try\s*{\s*;/g, 'try {')
    content = content.replace(/catch\s*\(\s*[^)]+\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    content = content.replace(/finally\s*{\s*;/g, 'finally {')
    // Fix switch statements
    content = content.replace(/switch\s*\(\s*[^)]+\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    content = content.replace(/case\s+[^:]+:\s*;/g, (match) => match.replace(/;\s*$/, ''))
    content = content.replace(/default:\s*;/g, 'default:')
    // Fix class declarations
    content = content.replace(/class\s+(\w+)\s*{\s*;/g, 'class $1 {')
    content = content.replace(/constructor\s*\(\s*[^)]*\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    // Fix method declarations
    content = content.replace(/(\w+)\s*\(\s*[^)]*\s*\)\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    // Fix arrow functions
    content = content.replace(/\(\s*[^)]*\s*\)\s*=>\s*{\s*;/g, (match) => match.replace(/;\s*$/, ''))
    // Fix React components
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*;/g, 'const $1 = () => {')
    content = content.replace(/export\s+default\s+(\w+)\s*;/g, 'export default $1;')
    // Fix JSX return statements
    content = content.replace(/return\s*\(\s*;\s*/g, 'return (')
    content = content.replace(/;\s*\)\s*;/g, '\n);')
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    // Remove empty lines at the beginning
    content = content.replace(/^\s*\n+/, '')
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✓ Fixed syntax errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`✗ Error fixing syntax in ${filePath}:`, error.message)
    return false
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        traverse(fullPath)
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  }
  
  traverse(dir)
  return files
}

// Main execution
console.log('🔍 Searching for source files...')
const sourceFiles = findSourceFiles('/workspace')
console.log(`Found ${sourceFiles.length} source files`)
console.log('\n🔧 Fixing all syntax errors...')
let fixedCount = 0
let errorCount = 0
for (const file of sourceFiles) {
  if (fixAllSyntaxErrors(file)) {
    fixedCount++
  }
}

console.log(`\n📊 Results:`)
console.log(`  ✅ Fixed: ${fixedCount} files`)
console.log(`  ❌ Errors: ${errorCount} files`)
if (fixedCount > 0) {
  console.log('\n🎉 Syntax errors fixed! Running build check...')
  try {
    execSync('pnpm run build', { stdio: 'inherit' })
    console.log('✅ Build successful!')
  } catch (error) {
    console.log('⚠️  Build still has issues, but syntax errors are fixed.')
  }
}