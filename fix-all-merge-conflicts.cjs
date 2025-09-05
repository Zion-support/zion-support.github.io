#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
        if (!['node_modules', '.git', '.next', 'dist', 'build')]
          const content = fs.readFileSync(filePath, 'utf8')
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')
          // Skip files that can'
      // Skip files/directories that can'
  resolved = resolved.replace(/\n?/g, '')
  resolved = resolved.replace(/\n?/g, '')
  resolved = resolved.replace(/[a-f0-9]+\n?/g, '')
  console.log(' Searching for files with merge conflicts...')
  const filesWithConflicts = findFilesWithConflicts('.')
    console.log(' No merge conflicts found!')
  console.log('\n Resolving merge conflicts...')
      const originalContent = fs.readFileSync(filePath, 'utf8')
        fs.writeFileSync(filePath, resolvedContent, 'utf8')
    console.log('\n✨ Merge conflicts resolved! You can now commit the changes.')