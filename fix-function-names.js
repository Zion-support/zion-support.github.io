#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
console.log('🔧 Fixing function names with hyphens...')
// Function to fix function names
function fixFunctionNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix function names with hyphens
    const fileName = path.basename(filePath, path.extname(filePath))
    const validFunctionName = fileName.replace(/[^a-zA-Z0-9 _$]/g, '_')
    // Replace invalid function names
    const lines = content.split('\n')
    const newLines = []
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      // Fix function declarations with hyphens
      if (line.includes('function ') && line.includes('(')) {
        line = line.replace(/function\s+[^(]+/, `function ${validFunctionName}`)
        modified = true
      }
      
      // Fix export default function declarations
      if (line.includes('export default function ') && line.includes('(')) {
        line = line.replace(/export default function\s+[^(]+/, `export default function ${validFunctionName}`)
        modified = true
      }
      
      newLines.push(line)
    }
    
    content = newLines.join('\n')
    if (modified) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Fixed: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = []
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir)
      for (const item of items) {
        const fullPath = path.join(currentDir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            traverse(fullPath)
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item)
          if (extensions.includes(ext)) {
            files.push(fullPath)
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir)
  return files
}

// Main execution
const srcDir = path.join(process.cwd(), 'src')
const files = findFiles(srcDir)
console.log(`📁 Found ${files.length} files to check...`)
let fixedCount = 0
let errorCount = 0
for (const file of files) {
  try {
    if (fixFunctionNames(file)) {
      fixedCount++
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message)
    errorCount++
  }
}

console.log(`\n📊 Summary: `)
console.log(`✅ Files fixed: ${fixedCount}`)
console.log(`❌ Errors: ${errorCount}`)
console.log(`📁 Total files processed: ${files.length}`)
if (fixedCount > 0) {
  console.log('\n🎉 Function names fixed successfully!')
} else {
  console.log('\n✨ No function names needed fixing.')
}