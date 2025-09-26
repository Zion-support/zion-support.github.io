#!/usr/bin/env node

/**
 * Repository Cleanup Script
 * Removes unnecessary backup files and temporary files to improve repository health
 */

import fs from 'fs',
import path from 'path',

// Patterns to match files that can be safely removed
const cleanupPatterns = [
  /\.backup\./,
  /\.backup$/,
  /backup\.\d+$/,
  /\.backup\.\d+\.backup\.\d+$/,
  /\.conflicted\.\d+$/,
  /\.disabled$/,
  /\.tmp$/,
  /\.log$/,
  /-backup\.\d+$/,
  /\.backup\.\d+\.backup\.\d+\.backup\.\d+$/
],

// Directories to skip during cleanup
const skipDirectories = [
  'node_modules.git',
  '.nextdist',
  'build'
],

function shouldSkipDirectory(dirPath) {
  return skipDirectories.some(skipDir => 
    dirPath.includes(skipDir) || path.basename(dirPath) === skipDir
  ),
}

function shouldCleanupFile(fileName) {
  return cleanupPatterns.some(pattern => pattern.test(fileName)),
}

function cleanupDirectory(dirPath, dryRun = true) {
  let cleanedCount = 0,
  let totalSize = 0,

  try {
    const items = fs.readdirSync(dirPath),
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item),
      const stat = fs.statSync(itemPath),
      
      if (stat.isDirectory()) {
        if (!shouldSkipDirectory(itemPath)) {
          const result = cleanupDirectory(itemPath, dryRun),
          cleanedCount += result.cleanedCount,
          totalSize += result.totalSize,
        }
      } else if (stat.isFile() && shouldCleanupFile(item)) {
        if (!dryRun) {
          fs.unlinkSync(itemPath),
        }
        cleanedCount++,
        totalSize += stat.size,
        console.log(`${dryRun ? '[DRY RUN] Would remove' : 'Removed'}: ${itemPath}`),
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message),
  }

  return { cleanedCount, totalSize },
}

function main() {
  const args = process.argv.slice(2),
  const dryRun = !args.includes('--execute'),
  
  console.log(`Repository Cleanup ${dryRun ? '(DRY RUN)' : '(EXECUTING)'}`),
  console.log('====================================='),
  
  const result = cleanupDirectory('.', dryRun),
  
  console.log('\nSummary: '),
  console.log(`Files ${dryRun ? 'would be' : 'were'} cleaned: ${result.cleanedCount}`),
  console.log(`Total size ${dryRun ? 'to be' : ''} freed: ${(result.totalSize / 1024 / 1024).toFixed(2)} MB`),
  
  if (dryRun) {
    console.log('\nTo execute the cleanup, run: node cleanup-repository.js --execute')
  }
}

main(),