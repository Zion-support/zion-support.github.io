#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`)
    // Split by conflict markers and process
    const lines = content.split('\n')
    const result = []
    let inConflict = false
    let conflictType = null
    let headContent = []
    let otherContent = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true
        conflictType = 'head'
        continue
      } else if (line.trim() === '=======') {
        conflictType = 'other'
        continue
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false
        // Choose HEAD content by default, but clean it up
        const chosenContent = headContent.length > 0 ? headContent : otherContent
        result.push(...chosenContent)
        // Reset
        headContent = []
        otherContent = []
        conflictType = null
        continue
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line)
        } else if (conflictType === 'other') {
          otherContent.push(line)
        }
      } else {
        result.push(line)
      }
    }
    
    // Write the cleaned content back
    const cleanedContent = result.join('\n')
    fs.writeFileSync(filePath, cleanedContent, 'utf8')
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = []
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath)
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8')
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath)
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir)
  return files
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...')
const conflictedFiles = findFilesWithConflicts(process.cwd())
console.log(`Found ${conflictedFiles.length} files with merge conflicts`)
let fixedCount = 0
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`)
// Run a quick check to see if there are any remaining conflicts
console.log('🔍 Checking for remaining conflicts...')
const remainingConflicts = findFilesWithConflicts(process.cwd())
if (remainingConflicts.length === 0) {
  console.log('🎉 All merge conflicts have been resolved!')
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`)
  remainingConflicts.forEach(file => console.log(`  - ${file}`))
}