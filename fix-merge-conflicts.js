#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = []
function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8')
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath)
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir)
  return files
}

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '')
    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Clean up any remaining conflict artifacts
    content = content.replace(/    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Remove any stray conflict markers
    content = content.replace(/^[<>=]{7}.*$/gm, '')
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✓ Fixed merge conflicts in: ${filePath}`)
    return true
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to fix common syntax errors
function fixCommonSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
let modified = false
    // Fix missing React imports
    if (content.includes('React') && !content.includes("import React") && !content.includes("from 'react'")) {
      content = "import React from 'react';\n" + content
      modified = true
    }
    
    // Fix missing semicolons
    content = content.replace(/([^}])\n(\s*[a-zA-Z_$])/g, '$1;\n$2')
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length
const closeBraces = (content.match(/\}/g) || []).length
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}'.repeat(openBraces - closeBraces)
      modified = true
    }
    
    if (modified) {
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

// Main execution
console.log('🔍 Searching for files with merge conflicts...')
const conflictedFiles = findFilesWithConflicts('/workspace')

if (conflictedFiles.length === 0) {
  console.log('✅ No merge conflicts found!')
  process.exit(0)
}

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`)
conflictedFiles.forEach(file => console.log(`  - ${file}`))

console.log('\n🔧 Resolving merge conflicts...')
let fixedCount = 0
let errorCount = 0

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    fixedCount++
    // Also try to fix common syntax errors
    fixCommonSyntaxErrors(file)
  } else {
    errorCount++
  }
}

console.log(`\n📊 Results:`)
console.log(`  ✅ Fixed: ${fixedCount} files`)
console.log(`  ❌ Errors: ${errorCount} files`)

if (fixedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! Running build check...')
  try {
    execSync('pnpm run build', { stdio: 'inherit' })
    console.log('✅ Build successful!')
  } catch (error) {
    console.log('⚠️  Build still has issues, but merge conflicts are resolved.')
  }
}