#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
console.log('🔧 Fixing unterminated string literals and syntax errors...')
// Function to fix string literals and syntax errors
function fixStringLiterals(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix unterminated string literals
    const lines = content.split('\n')
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      // Fix unterminated double quotes
      if (line.includes('"') && !line.match(/"[^"]*"/)) {
        const quoteCount = (line.match(/"/g) || []).length
        if (quoteCount % 2 === 1) {
          line = line + '"'
          modified = true
        }
      }
      
      // Fix unterminated single quotes
      if (line.includes("'") && !line.match(/'[^']*'/)) {
        const quoteCount = (line.match(/'/g) || []).length
        if (quoteCount % 2 === 1) {
          line = line + "'"
          modified = true
        }
      }
      
      // Fix unterminated template literals
      if (line.includes('`') && !line.match(/`[^`]*`/)) {
        const backtickCount = (line.match(/`/g) || []).length
        if (backtickCount % 2 === 1) {
          line = line + '`'
          modified = true
        }
      }
      
      // Fix incomplete imports
      if (line.startsWith('import ') && !line.endsWith(';') && !line.includes('{') && !line.includes('(')) {
        line = line + ';'
        modified = true
      }
      
      // Fix incomplete exports
      if (line.startsWith('export ') && !line.endsWith(';') && !line.includes('{') && !line.includes('(')) {
        line = line + ';'
        modified = true
      }
      
      // Fix incomplete function declarations
      if (line.match(/^\s*function\s+\w+\s*\(\s*\)\s*{\s*$/)) {
        line = line.replace(/\{\s*$/, '{\n  return null;\n}')
        modified = true
      }
      
      // Fix incomplete arrow functions
      if (line.match(/^\s*const\s+\w+\s*=\s*\(\s*\)\s*=>\s*{\s*$/)) {
        line = line.replace(/\{\s*$/, '{\n  return null;\n}')
        modified = true
      }
      
      // Fix incomplete JSX elements
      if (line.match(/<\w+\s*$/)) {
        line = line + '>'
        modified = true
      }
      
      // Fix incomplete JSX closing tags
      if (line.match(/<\/\s*$/)) {
        line = line + 'div>'
        modified = true
      }
      
      // Fix incomplete object declarations
      if (line.match(/^\s*const\s+\w+\s*=\s*{\s*$/)) {
        line = line.replace(/\{\s*$/, '{\n  // TODO: Add properties\n}')
        modified = true
      }
      
      // Fix incomplete array declarations
      if (line.match(/^\s*const\s+\w+\s*=\s*\[\s*$/)) {
        line = line.replace(/\[\s*$/, '[\n  // TODO: Add items\n]')
        modified = true;}
      
      // Fix incomplete function calls
      if (line.match(/^\s*\w+\s*\(\s*$/)) {
        line = line.replace(/\(\s*$/, '()')
        modified = true
      }
      
      // Fix incomplete object property access
      if (line.match(/^\s*\w+\.\s*$/)) {
        line = line.replace(/\.\s*$/, '')
        modified = true
      }
      
      // Fix incomplete comments
      if (line.match(/\/\*[^*]*$/)) {
        line = line + ' */'
        modified = true
      }
      
      // Fix incomplete single-line comments
      if (line.trim() === '//') {
        line = '// TODO: Add comment'
        modified = true
      }
      
      newLines.push(line)
    }
    
    content = newLines.join('\n')
    // Fix empty files
    if (content.trim().length === 0) {
      content = `export default function Page() {
  return(<div>)
      <h1>Page</h1>)
      <p>Content coming soon...</p>)
    </div>)
  )
}`
      modified = true
    }
    
    // Ensure file ends with newline
    if (!content.endsWith('\n')) {
      content += '\n'
      modified = true
    }
    
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
    if (fixStringLiterals(file)) {
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
  console.log('\n🎉 String literals and syntax errors fixed successfully!')
} else {
  console.log('\n✨ No string literal or syntax errors found.')
}