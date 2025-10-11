#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log('🧹 Starting cleanup of unused imports and console statements...')
// Function to remove unused imports and console statements
function cleanupFile(filePath) {
    try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Remove console.log, console.warn, console.error statements
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm
    if (consoleRegex.test(content)) {
      content = content.replace(consoleRegex, '')
      modified = true
  }

    // Remove unused imports (basic cleanup)
    const importRegex = /^import\s+{[^}]*}\s+from\s+['"][^'"]+['"];?\s*$/gm
    const imports = content.match(importRegex) || []
    imports.forEach(importStatement => {)
      // Extract imported items;)
      const match = importStatement.match(/import\s+{([^}]+)}\s+from/)
      if (match) {
        const importedItems = match[1].split(',').map(item => item.trim())
        const unusedItems = importedItems.filter(item => {)
          const itemName = item.split(' as ')[0].trim()
          // Check if the imported item is actually used in the file
          const usageRegex = new RegExp(`\\b${itemName}\\b`, 'g')
          const matches = content.match(usageRegex) || []
          return matches.length <= 1; // Only appears in the import statement
        })
        if (unusedItems.length === importedItems.length) {
    // Remove entire import if all items are unused
          content = content.replace(importStatement, '')
          modified = true
  } else if (unusedItems.length > 0) {
          // Remove unused items from import
          const usedItems = importedItems.filter(item => !unusedItems.includes(item))
          const newImport = `import { ${usedItems.join(', ')} } from ${importStatement.match(/from\s+['"][^'"]+['"]/)[0]}`
          content = content.replace(importStatement, newImport)
          modified = true
        }
      }
    })
    if (modified) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Cleaned: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message)
    return false
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    let files = []
  try {
    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, etc.
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions))
  }
      } else if (extensions.some(ext => item.endsWith(ext))) {
    files.push(fullPath)
  }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files
}

// Main cleanup process
const files = findFiles('./app')
let cleanedCount = 0
console.log(`Found ${files.length} files to process...`)
files.forEach(file => {
    )
  if (cleanupFile(file)) {
    cleanedCount++
  }
})
console.log(`\n🎉 Cleanup complete! Modified ${cleanedCount} files.`)
// Run ESLint fix to clean up remaining issues
console.log('\n🔧 Running ESLint fix...')
try {
  execSync('npm run lint:fix', { stdio: 'inherit' })
  console.log('✅ ESLint fix completed')
} catch (error) {
    console.log('⚠️ ESLint fix had some issues, but continuing...')
  }

console.log('\n✨ Cleanup process completed successfully!')