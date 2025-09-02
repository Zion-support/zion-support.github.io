#!/usr/bin/env node

/**
 * Merge Conflict Resolver
 * Automatically resolves merge conflicts by accepting incoming changes
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log('🔧 Merge Conflict Resolver Started')
class MergeConflictResolver {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..')
    this.resolvedFiles = []
    this.errors = []
  }

  async run() {
    try {
      console.log('🔍 Finding files with merge conflicts...')
      // Find all files with merge conflicts
      const conflictedFiles = await this.findConflictedFiles()
      console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts`)
      // Resolve each conflict
      for (const file of conflictedFiles) {
        await this.resolveConflict(file)
      }
      
      // Generate summary
      this.generateSummary()
    } catch (error) {
      console.error('❌ Error during merge conflict resolution:', error)
      this.errors.push(error.message)
    }
  }

  async findConflictedFiles() {
    const files = await glob('**/*', {
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', '.next/**']
    })
    const conflictedFiles = []
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file)
      try {
        const content = fs.readFileSync(filePath, 'utf8')
        if (content.includes('          conflictedFiles.push(file)
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return conflictedFiles
  }

  async resolveConflict(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath)
      let content = fs.readFileSync(fullPath, 'utf8')
      // Resolve merge conflicts by accepting incoming changes
      content = this.resolveMergeConflicts(content)
      fs.writeFileSync(fullPath, content, 'utf8')
      this.resolvedFiles.push(filePath)
      console.log(`✅ Resolved conflicts in: ${filePath}`)
    } catch (error) {
      console.error(`❌ Error resolving ${filePath}:`, error.message)
      this.errors.push(`${filePath}: ${error.message}`)
    }
  }

  resolveMergeConflicts(content) {
    // Remove merge conflict markers and accept incoming changes
    let resolved = content
    // Remove HEAD markers and keep incoming changes
    resolved = resolved.replace(/    resolved = resolved.replace(/=======\n/g, '')
    resolved = resolved.replace(/    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/    resolved = resolved.replace(/=======\n/g, '')
    resolved = resolved.replace(/    
    return resolved
  }

  generateSummary() {
    const summary = {
      timestamp: new Date().toISOString(),
      resolvedFiles: this.resolvedFiles.length,
      errors: this.errors.length,
      files: this.resolvedFiles,
      errorDetails: this.errors
    }
    
    const reportFile = path.join(this.projectRoot, 'merge-conflict-resolution-report.json')
    fs.writeFileSync(reportFile, JSON.stringify(summary, null, 2))
    console.log('\n📊 Merge Conflict Resolution Summary:')
    console.log(`✅ Files resolved: ${this.resolvedFiles.length}`)
    console.log(`❌ Errors: ${this.errors.length}`)
    console.log(`📄 Report saved to: ${reportFile}`)
    if (this.errors.length > 0) {
      console.log('\n❌ Errors encountered:')
      this.errors.forEach(error => console.log(`  - ${error}`))
    }
  }
}

// Run the merge conflict resolver
const resolver = new MergeConflictResolver()
resolver.run().catch(error => {
  console.error('❌ Failed to resolve merge conflicts:', error)
  process.exit(1)
})