#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
/**
 * Script to remove console.log statements from production code
 * Excludes test files, scripts, and development files
 */

const EXCLUDE_PATTERNS = [
  '**/node_modules/**',
  '**/test/**',
  '**/__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/scripts/**',
  '**/automation/**',
  '**/automation_backup/**',
  '**/src.disabled/**',
  '**/pages.disabled/**',
  '**/components.disabled/**',
  '**/lib.disabled/**',
  '**/types.disabled/**',
  '**/hooks.disabled/**',
  '**/api-backup/**',
  '**/backup-pages/**',
  '**/pages.__backup/**',
  '**/pages_backup/**',
  '**/lib_backup/**',
  '**/contracts.disabled/**',
  '**/hardhat/**',
  '**/contracts/**',
  '**/zion_academy/**',
  '**/public/**',
  '**/netlify/**',
  '**/error-reports/**',
  '**/refactoring-reports/**',
  '**/docs/**',
  '**/*.backup',
  '**/*.disabled',
  '**/*.old',
  '**/*.bak'
]
const INCLUDE_PATTERNS = [
  'pages/**/*.{js,jsx,ts,tsx}',
  'components/**/*.{js,jsx,ts,tsx}',
  'src/**/*.{js,jsx,ts,tsx}',
  'lib/**/*.{js,jsx,ts,tsx}',
  'utils/**/*.{js,jsx,ts,tsx}',
  'hooks/**/*.{js,jsx,ts,tsx}',
  'types/**/*.{js,jsx,ts,tsx}',
  'api/**/*.{js,jsx,ts,tsx}'
]
function shouldProcessFile(filePath) {
  // Check if file matches exclude patterns
  for (const pattern of EXCLUDE_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return false
    }
  }
  
  // Check if file matches include patterns
  for (const pattern of INCLUDE_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true
    }
  }
  
  return false
}

function cleanConsoleLogs(content) {
  // Remove console.log, console.warn, console.error statements
  // But keep console.error in error boundaries and critical error handling
  const lines = content.split('\n')
  const cleanedLines = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmedLine = line.trim()
    // Skip if it's a console.log or console.warn
    if (trimmedLine.startsWith('console.log(') || 
        trimmedLine.startsWith('console.warn(') ||
        (trimmedLine.startsWith('console.') && trimmedLine.includes('log('))) {
      // Check if it's in a comment or string
      if (!line.includes('//') && !line.includes('*') && !line.includes('`')) {
        console.log(`Removing: ${line.trim()}`)
        continue
      }
    }
    
    // Keep console.error in error boundaries and critical areas
    if (trimmedLine.includes('console.error') && 
        (line.includes('ErrorBoundary') || line.includes('catch') || line.includes('error'))) {
      cleanedLines.push(line)
      continue
    }
    
    // Remove standalone console.error statements
    if (trimmedLine.startsWith('console.error(') && 
        !line.includes('ErrorBoundary') && 
        !line.includes('catch') && 
        !line.includes('error')) {
      console.log(`Removing: ${line.trim()}`)
      continue
    }
    
    cleanedLines.push(line)
  }
  
  return cleanedLines.join('\n')
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const cleanedContent = cleanConsoleLogs(content)
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8')
      console.log(`✅ Cleaned: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
  }
}

function main() {
  console.log('🧹 Starting console.log cleanup...')
  let totalFiles = 0
  let cleanedFiles = 0
  // Process all relevant files
  const allFiles = glob.sync('**/*.{js,jsx,ts,tsx}', { 
    ignore: EXCLUDE_PATTERNS,
    nodir: true 
  })
  for (const file of allFiles) {
    if (shouldProcessFile(file)) {
      totalFiles++
      if (processFile(file)) {
        cleanedFiles++
      }
    }
  }
  
  console.log(`\n📊 Cleanup Summary:`)
  console.log(`   Total files processed: ${totalFiles}`)
  console.log(`   Files cleaned: ${cleanedFiles}`)
  console.log(`   Files unchanged: ${totalFiles - cleanedFiles}`)
  if (cleanedFiles > 0) {
    console.log('\n✨ Console.log cleanup completed successfully!')
  } else {
    console.log('\n✨ No console.log statements found to clean.')
  }
}

main()