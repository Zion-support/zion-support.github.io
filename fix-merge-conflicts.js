#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = []
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8')
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath)
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  searchDirectory(dir)
  return files
}
// Function to resolve merge conflicts automatically
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Remove merge conflict markers and keep the HEAD version (first version)
    const lines = content.split('\n')
    const resolvedLines = []
    let inConflict = false
    let keepHead = true
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.startsWith('<<<<<<<')) {
        inConflict = true
        keepHead = true
        continue
      } else if (line.startsWith('=======')) {
        keepHead = false
        continue
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false
        continue
      }
      if (!inConflict || keepHead) {
        resolvedLines.push(line)
      }
    }
    const resolvedContent = resolvedLines.join('\n')
    // Only write if content changed
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8')
      console.log(`✅ Resolved conflicts in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
  }
}
// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...')
  const filesWithConflicts = findFilesWithConflicts(process.cwd())
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found!')
    return
  }
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`)
  filesWithConflicts.forEach(file => console.log(`  - ${file}`))
  console.log('\n🔧 Resolving merge conflicts...')
  let resolvedCount = 0
  for (const file of filesWithConflicts) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++
    }
  }
  console.log(`\n✅ Successfully resolved conflicts in ${resolvedCount} files`)
  // Run TypeScript check to see if there are still errors
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
export { findFilesWithConflicts, resolveMergeConflicts }