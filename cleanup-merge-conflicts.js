      
      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      return true;
#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '')
    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Clean up any remaining merge conflict artifacts
    content = content.replace(/    content = content.replace(/\n?/g, '')
    content = content.replace(/    
    // Fix common syntax issues that might result from merge conflicts
    content = content.replace(/,\s*\)/g, ')')
    content = content.replace(/,\s*}/g, '}')
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*;/g, ';')
    content = content.replace(/\(\s*\)/g, '()')
    content = content.replace(/{\s*}/g, '{}')
    content = content.replace(/\[\s*\]/g, '[]')
    // Fix common JSX issues
    content = content.replace(/<\s*\/\s*>/g, '</>')
    content = content.replace(/<\s*\/\s*div\s*>/g, '</div>')
    content = content.replace(/<\s*\/\s*span\s*>/g, '</span>')
    content = content.replace(/<\s*\/\s*p\s*>/g, '</p>')
    // Fix function syntax issues
    content = content.replace(/function\s*\(\s*\)\s*{\s*}/g, 'function() {}')
    content = content.replace(/\(\s*\)\s*=>\s*{\s*}/g, '() =>
                {}')
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Cleaned: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
    let cleanedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
          continue
  }
        cleanedCount += cleanDirectory(fullPath)
      } else if (stat.isFile()) {
    // Only process certain file types
        const ext = path.extname(item)
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
          if (cleanMergeConflicts(fullPath)) {
            cleanedCount++
  }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
  }
  
  return cleanedCount
}

// Main execution
console.log('Starting merge conflict cleanup...')
const cleanedCount = cleanDirectory('/workspace')
console.log(`Cleaned ${cleanedCount} files`)
// Also clean specific problematic files
const criticalFiles = [
  '/workspace/App.tsx',
  '/workspace/jest.setup.js',
  '/workspace/package.json',
  '/workspace/vite.config.ts',
  '/workspace/tailwind.config.ts'
]
console.log('Cleaning critical files...')
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      console.log(`Cleaned critical file: ${file}`)
    }
  }
}

console.log('Merge conflict cleanup completed!')
