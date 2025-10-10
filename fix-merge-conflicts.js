#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n')
  const resolvedLines = []
  let inConflict = false
  let conflictType = null
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // Check for conflict markers
      inConflict = true
      conflictType = 'head'
      continue
      if (inConflict) {
        inConflict = false
        conflictType = null
        continue
      }
    }
    
    // If we're in a conflict and it's the HEAD section, keep the line
    if (inConflict && conflictType === 'head') {
      resolvedLines.push(line)
    }
    // If we're not in a conflict, keep the line
    else if (!inConflict) {
      resolvedLines.push(line)
    }
    // If we're in the other branch section, skip the line
  }
  
  return resolvedLines.join('\n')
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflicts
      console.log(`Processing: ${filePath}`)
      const resolvedContent = resolveMergeConflicts(content)
      fs.writeFileSync(filePath, resolvedContent, 'utf8')
      console.log(`✓ Resolved conflicts in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
          continue
        }
        processedCount += processDirectory(fullPath)
      } else if (stat.isFile()) {
        // Process TypeScript and JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          if (processFile(fullPath)) {
            processedCount++
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
  }
  
  return processedCount
}

// Main execution
console.log('Starting merge conflict resolution...')
const processedCount = processDirectory('.')
console.log(`\n✓ Processed ${processedCount} files with merge conflicts`)
console.log('Merge conflict resolution completed!')