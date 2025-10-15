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
    
    // Remove console.log statements
    content = content.replace(/console\.log\([^)]*\);?/g, '')
    content = content.replace(/console\.warn\([^)]*\);?/g, '')
    content = content.replace(/console\.error\([^)]*\);?/g, '')
    content = content.replace(/console\.info\([^)]*\);?/g, '')
    content = content.replace(/console\.debug\([^)]*\);?/g, '')
    
    // Remove empty lines that might be left behind
    content = content.replace(/^\s*[\r\n]/gm, '')
    
    fs.writeFileSync(filePath, content)
    console.log(`✅ Cleaned console logs from: ${filePath}`)
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message)
  }
}

async function main() {
  console.log('🧹 Starting console log removal...')
  
  try {
    // Find all JavaScript files in dist directory
    const files = await glob('dist/**/*.js')
    
    if (files.length === 0) {
      console.log('ℹ️  No JavaScript files found in dist directory')
      return
    }
    
    console.log(`📁 Found ${files.length} JavaScript files to process`)
    
    // Process each file
    files.forEach(removeConsoleLogs)
    
    console.log('🎉 Console log removal completed!')
  } catch (error) {
    console.error('❌ Error during console log removal:', error.message)
    process.exit(1)
  }
}

// Run the script
main()