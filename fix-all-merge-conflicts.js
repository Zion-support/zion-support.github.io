#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('🔧 Starting merge conflict resolution...')
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`)
    // Split content by conflict markers
    const lines = content.split('\n')
    const resolvedLines = []
    let inConflict = false
    let conflictType = ''
    let headContent = []
    let separatorFound = false
    let branchContent = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        separatorFound = true;
        conflictType = 'separator';
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false
        conflictType = ''
        // Choose the longer content or the one that looks more complete
        let chosenContent
        if (headContent.length > branchContent.length) {
          chosenContent = headContent
        } else if (branchContent.length > headContent.length) {
          chosenContent = branchContent
        } else {
          // If equal length, prefer the one with more meaningful content
          const headText = headContent.join('\n')
          const branchText = branchContent.join('\n')
          if (headText.includes('export') || headText.includes('function') || headText.includes('const')) {
            chosenContent = headContent
          } else {
            chosenContent = branchContent
          }
        }
        
        resolvedLines.push(...chosenContent)
        continue
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line)
        } else if (conflictType === 'separator') {
          branchContent.push(line)
        }
      } else {
        resolvedLines.push(line)
      }
    }
    
    // Write resolved content
    const resolvedContent = resolvedLines.join('\n')
    fs.writeFileSync(filePath, resolvedContent, 'utf8')
    return true; // Conflicts resolved
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message)
    return false
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
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

// Main execution
try {
  const workspaceDir = process.cwd()
  console.log(`🔍 Scanning for merge conflicts in: ${workspaceDir}`)
  const conflictedFiles = findFilesWithConflicts(workspaceDir)
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!')
    process.exit(0)
  }
  
  console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`)
  conflictedFiles.forEach(file => console.log(`  - ${file}`))
  let resolvedCount = 0
  let failedCount = 0
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++
    } else {
      failedCount++
    }
  }
  
  console.log(`\n📊 Resolution Summary:`)
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`)
  console.log(`  ❌ Failed to resolve: ${failedCount} files`)
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You can now try building the project.')
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message)
  process.exit(1)
}