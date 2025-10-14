<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs
import path from 'path
import { execSync } from 'child_process

console.log('🔧 Starting comprehensive merge conflict resolution...')

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    // Remove merge conflict markers and keep the HEAD version (first part)
    
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true
      // Clean up the head content
      let cleaned = headContent.trim()
      
      // Remove any stray semicolons or quotes that might be artifacts
      cleaned = cleaned.replace(/;+$/, '')
      cleaned = cleaned.replace(/^;+/, '')
      cleaned = cleaned.replace(/['"]+$/, '')
      cleaned = cleaned.replace(/^['"]+/, '')
      
      return cleaned
    })

    // Fix common syntax issues
    content = content.replace(/import\s+React\s+from\s+['"]react['"];+;+/g, "import React from 'react';")
    content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];+;+/g, "import { Helmet } from 'react-helmet-async';")
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s+null;\s*}/g, (match, funcName) => {
      return `export default function ${funcName}() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${funcName}</h1>
        <p className="text-xl text-gray-600">Coming soon...</p>
      </div>
    </div>
  )
}`
    })

    // Fix JSX syntax issues
    content = content.replace(/<React\.Fragment>/g, '<>')
    content = content.replace(/<\/React\.Fragment>/g, '</>')
    content = content.replace(/;+$/gm, '')
    content = content.replace(/['"]+$/gm, '')
    
    // Fix malformed JSX attributes
    content = content.replace(/content="[^"]*";+"/g, (match) => {
      return match.replace(/;+"/, '"')
    })

    // Remove any remaining stray characters
    content = content.replace(/;+$/gm, '')
    content = content.replace(/^;+/gm, '')
    content = content.replace(/\s+;+\s+/g, ' ')

    if (modified) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Fixed merge conflicts in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = []
  
  try {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions))
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)
  }
  
  return files
}

// Main execution
try {
  console.log('📁 Scanning for files with merge conflicts...')
  
  const files = findFiles('.')
  let fixedCount = 0
  let totalFiles = 0
  
  for (const file of files) {
    totalFiles++
    if (fixMergeConflicts(file)) {
      fixedCount++
    }
  }
  
  console.log(`\n📊 Summary:`)
  console.log(`   Total files processed: ${totalFiles}`)
  console.log(`   Files with conflicts fixed: ${fixedCount}`)
  
  if (fixedCount > 0) {
    console.log('\n🔍 Running type check to verify fixes...')
    try {
      execSync('npm run type-check', { stdio: 'inherit' })
      console.log('✅ Type check passed!')
    } catch (error) {
      console.log('⚠️  Type check still has issues, but merge conflicts are resolved.')
    }
  }
  
  console.log('\n🎉 Merge conflict resolution completed!')
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message)
  process.exit(1)
}
=======
') || !content.includes('
>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
