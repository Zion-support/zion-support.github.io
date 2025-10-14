#!/usr/bin/env node

import fs from 'fs''
import path from 'path'
// Function to fix duplicate import statements
function fixDuplicateImports(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Split content into lines'
    const lines = content.split('\n')
    const fixedLines = []
    const seenImports = new Set()
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // Check if this is an import statement'
      if (line.trim().startsWith('import ')) {'
        // Check if we've seen this exact import before
        if (seenImports.has(line.trim())) {
          // Skip duplicate import
          modified = true
          continue
        } else {
          seenImports.add(line.trim())
          fixedLines.push(line)
        }
      } else {
        fixedLines.push(line)
      }
    }
    if (modified) {'
      const fixedContent = fixedLines.join('\n')'
      fs.writeFileSync(filePath, fixedContent, 'utf8')
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
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)'
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath)
      }
    }
  }
  traverse(dir)
  return files
}
// Main execution'
console.log('🔍 Searching for files with duplicate import statements...')'
const sourceFiles = findSourceFiles('./app')
console.log(`Found ${sourceFiles.length} source files`)
let fixedCount = 0
let errorCount = 0
for (const file of sourceFiles) {
  try {
    if (fixDuplicateImports(file)) {
      fixedCount++
      console.log(`✅ Fixed: ${file}`)
    }
  } catch (error) {
    errorCount++
    console.error(`❌ Error fixing ${file}:`, error.message)
  }
}
console.log(`\n📊 Summary:`)
console.log(`✅ Fixed: ${fixedCount} files`)
console.log(`❌ Errors: ${errorCount} files`)
if (fixedCount > 0) {'
  console.log('\n🎉 Duplicate import statements fixed! You can now run the build.')
} else {'
  console.log('\n✨ No duplicate import statements found or all issues were already resolved.')
}'