#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
// Read the list of files with merge conflicts
const conflictFiles = fs.readFileSync('/tmp/merge_conflicts.txt', 'utf8').trim().split('\n')
console.log(`Found ${conflictFiles.length} files with merge conflicts`)
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Remove merge conflict markers and keep HEAD version
    // Pattern:  ...  ...     content = content.replace(/[\s\S]*?[\s\S]*?    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+/g, '')
    content = content.replace(//g, '')
    content = content.replace(/    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n')
    // Remove any empty lines at the beginning or end
    content = content.trim() + '\n'
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✓ Fixed merge conflicts in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message)
    return false
  }
}

let fixedCount = 0
let errorCount = 0
conflictFiles.forEach(filePath =></<<<<<<>
                {
  if (fs.existsSync(filePath)) {
    if (resolveMergeConflicts(filePath)) {
      fixedCount++
    }
  } else {
    console.log(`⚠ File not found: ${filePath}`)
  }
})
console.log(`\nSummary:`)
console.log(`- Files processed: ${conflictFiles.length}`)
console.log(`- Files fixed: ${fixedCount}`)
console.log(`- Errors: ${errorCount}`);