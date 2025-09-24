#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('🔧 Merge Conflict Resolver')
console.log('==========================')

class MergeConflictResolver {
  constructor() {
    this.resolvedFiles = []
    this.errors = []
  }

  async resolveConflicts() {
    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f)

      console.log(`Found ${conflictFiles.length} files with conflicts`)

      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file)
        }
      }

      console.log(`\n✅ Resolved conflicts in ${this.resolvedFiles.length} files`)
      console.log(`❌ Errors in ${this.errors.length} files`)

      if (this.errors.length > 0) {
        console.log('\nErrors:')
        this.errors.forEach(error => console.log(`  - ${error}`))
      }

    } catch (error) {
      console.error('Error resolving conflicts:', error.message)
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let resolvedContent = content

      // Strategy: Keep our changes (HEAD) for most conflicts
      // Remove conflict markers and keep the HEAD version
      resolvedContent = resolvedContent.replace(
        /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n        '$1'
      )

      // Handle any remaining conflict markers
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n/g, '')
      resolvedContent = resolvedContent.replace(/=======\n/g, '')
      resolvedContent = resolvedContent.replace(/
      // Clean up any duplicate lines that might have been created
      const lines = resolvedContent.split('\n')
      const cleanedLines = []
      let prevLine = ''

      for (const line of lines) {
        if (line.trim() !== prevLine.trim() || line.trim() === '') {
          cleanedLines.push(line)
          prevLine = line
        }
      }

      resolvedContent = cleanedLines.join('\n')

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent)
      this.resolvedFiles.push(filePath)

      console.log(`✅ Resolved: ${filePath}`)

    } catch (error) {
      this.errors.push(`${filePath}: ${error.message}`)
      console.error(`❌ Error resolving ${filePath}:`, error.message)
    }
  }
}

// Run the resolver
const resolver = new MergeConflictResolver()
resolver.resolveConflicts().then(() => {
  console.log('\n🎉 Merge conflict resolution completed!')
  console.log('Run "git add ." and "git commit" to complete the merge.')
})