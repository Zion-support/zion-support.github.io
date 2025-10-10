#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`)
    
    // Remove merge conflict markers and keep only HEAD version
    let fixed = content
      // Remove everything from  to       .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n      // Handle cases where there might be no  line
      .replace(/\n([\s\S]*?)\n      // Remove any remaining  lines
      .replace(/\n/g, '')
      // Remove any remaining       .replace(/      // Clean up any double newlines
      .replace(/\n\n\n+/g, '\n\n')
      // Remove any trailing semicolons that might have been left
      .replace(/;\n\n/g, '\n\n')
      .replace(/;\n/g, '\n')
      // Clean up any remaining conflict markers
      .replace(/\n?/g, '')
      .replace(/\n?/g, '')
      .replace(/    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8')
    return true
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

function findFilesWithConflicts(dir) {
  const files = []
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath)
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item)
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }
  
  traverse(dir)
  return files
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace'
console.log(`Scanning for merge conflicts in: ${workspaceDir}`)

const files = findFilesWithConflicts(workspaceDir)
let fixedCount = 0
let totalConflicts = 0

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8')
    if (content.includes('')) {
      totalConflicts++
      if (fixMergeConflicts(file)) {
        fixedCount++
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message)
  }
}

console.log(`\nFixed ${fixedCount} out of ${totalConflicts} files with merge conflicts.`);