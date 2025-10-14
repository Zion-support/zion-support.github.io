#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
import { glob } from 'glob'
// Function to fix over-escaped quotes in JSX content
function fixOverEscapedQuotes(content) {
  // Fix over-escaped single quotes in JSX text content and object properties'
  content = content.replace(/&apos;/g, "'")
  // Fix over-escaped double quotes'"
  content = content.replace(/&quot;/g, '"')
  // Fix over-escaped greater than and less than'
  content = content.replace(/&gt;/g, '>')'
  content = content.replace(/&lt;/g, '<')
  // Fix over-escaped ampersands'
  content = content.replace(/&amp;/g, '&')
  return content
}
// Function to fix parsing errors
function fixParsingErrors(content) {
  // Fix common parsing issues'
  content = content.replace(/,\s*\)/g, ')')'
  content = content.replace(/,\s*}/g, '}')
  // Fix numeric literal issues'
  content = content.replace(/(\d+)\s*([a-zA-Z_])/g, '$1 $2')
  // Fix identifier issues'
  content = content.replace(/(\d+)([a-zA-Z_])/g, '$1 $2')
  return content
}
// Function to remove unused imports
function removeUnusedImports(content) {'
  const lines = content.split('\n')
  const newLines = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // Check if this is an import line'
    if (line.includes('import') && line.includes('from')) {
      // Check if any imported items are actually used
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/)
      if (importMatch) {'
        const importedItems = importMatch[1].split(',').map(item => item.trim())
        const usedItems = importedItems.filter(item => {
          // Check if the item is used in the content (excluding the import line)'
          const contentWithoutImport = content.replace(line, '')
          return contentWithoutImport.includes(item)
        })
        if (usedItems.length === 0) {
          // Skip this import line
          continue
        } else if (usedItems.length < importedItems.length) {
          // Update the import to only include used items
          const newImport = line.replace(
            /{\s*[^}]+\s*}/'
            `{ ${usedItems.join(', ')} }`
          )
          newLines.push(newImport)
          continue
        }
      }
    }
    newLines.push(line)
  }'
  return newLines.join('\n')
}
// Function to fix unused variables
function fixUnusedVariables(content) {
  // Fix unused variable assignments'
  content = content.replace(/const\s+error\s*=/g, 'const _error =')'
  content = content.replace(/let\s+error\s*=/g, 'let _error =')
  return content
}
// Main function to process files
async function processFiles() {
  const patterns = ['
    'app/**/*.tsx''
    'app/**/*.ts''
    'api/**/*.js'
  ]
  let processedCount = 0
  let errorCount = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      try {
        const filePath = path.resolve(file)'
        let content = fs.readFileSync(filePath, 'utf8')
        // Apply all fixes
        content = fixOverEscapedQuotes(content)
        content = fixParsingErrors(content)
        content = removeUnusedImports(content)
        content = fixUnusedVariables(content)
        // Write back the fixed content'
        fs.writeFileSync(filePath, content, 'utf8')
        processedCount++
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message)
        errorCount++
      }
    }
  }
  console.log(`\nProcessed ${processedCount} files`)
  if (errorCount > 0) {
    console.log(`Encountered ${errorCount} errors`)
  }
}
// Run the script
processFiles().catch(console.error)'"