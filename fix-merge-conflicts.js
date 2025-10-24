#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`)
    // Split content by lines
    const lines = content.split('\n')
    const fixedLines = []
    let inConflict = false
    let conflictType = null
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true
        conflictType = 'head'
        continue; // Skip the conflict marker
      } else if (line.includes('=======')) {
        conflictType = 'separator'
        continue; // Skip the separator
      } else if (line.includes('>>>>>>>')) {
        inConflict = false
        conflictType = null
        continue; // Skip the end marker
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          // Keep the HEAD version (before =======)
          fixedLines.push(line)
        }
        // Skip the other branch (after =======)
      } else {
        // Not in conflict, keep the line
        fixedLines.push(line)
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n')
    fs.writeFileSync(filePath, fixedContent, 'utf8')
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and fix all files with merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        continue
      }
      fixedCount += fixAllMergeConflicts(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++
      }
    }
  }
  
  return fixedCount
}

// Main execution
console.log('Starting merge conflict resolution...')
const fixedCount = fixAllMergeConflicts('/workspace/app')
console.log(`Fixed merge conflicts in ${fixedCount} files`)
// Also check other directories
const otherDirs = ['/workspace/components', '/workspace/api']
let totalFixed = fixedCount
for (const dir of otherDirs) {
  if (fs.existsSync(dir)) {
    const count = fixAllMergeConflicts(dir)
    totalFixed += count
    console.log(`Fixed merge conflicts in ${count} files in ${dir}`)
  }
}

console.log(`Total files fixed: ${totalFixed}`)