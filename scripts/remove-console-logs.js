import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

/**
 * Remove console.log statements from production build
 * This helps reduce bundle size and improve performance
 */
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    
    // Remove console.log, console.warn, console.error, console.info, console.debug;
    content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?/g, '')
    
    // Remove empty lines left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Removed console logs from: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
  }
}

async function main() {
  try {
    console.log('Removing console logs from production build...')
    
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js')
    
    for (const file of files) {
      removeConsoleLogs(file)
    }
    
    console.log('Console log removal completed!')
  } catch (error) {
    console.error('Error removing console logs:', error)
  }
}

main()