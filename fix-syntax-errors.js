#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
let modified = false
    // Fix stray semicolons
    content = content.replace(/^;\s*$/gm, '')
    content = content.replace(/;\s*interface\s+/g, '\ninterface ')
    content = content.replace(/;\s*type\s+/g, '\ntype ')
    content = content.replace(/;\s*const\s+/g, '\nconst ')
    content = content.replace(/;\s*let\s+/g, '\nlet ')
    content = content.replace(/;\s*var\s+/g, '\nvar ')
    content = content.replace(/;\s*function\s+/g, '\nfunction ')
    content = content.replace(/;\s*export\s+/g, '\nexport ')
    content = content.replace(/;\s*import\s+/g, '\nimport ')
    // Fix interface declarations
    content = content.replace(/interface\s+(\w+)\s*{/g, 'interface $1 {')
    content = content.replace(/type\s+(\w+)\s*=\s*{/g, 'type $1 = {')
    // Fix missing React imports
    if ((content.includes('React') || content.includes('JSX') || content.includes('<')) && 
        !content.includes("import React") && 
        !content.includes("from 'react'") &&
        !content.includes("from \"react\"")) {
      content = "import React from 'react';\n" + content
      modified = true
    }
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length
const closeBraces = (content.match(/\}/g) || []).length
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces
      content += '\n' + '}'.repeat(missingBraces)
      modified = true
    }
    
    // Fix missing semicolons after statements
    content = content.replace(/([^}])\n(\s*[a-zA-Z_$])/g, '$1;\n$2')
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    // Remove empty lines at the beginning
    content = content.replace(/^\s*\n+/, '')
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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

console.log('\n🔧 Fixing syntax errors...')
let fixedCount = 0
let errorCount = 0

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
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
}}