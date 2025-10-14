#!/usr/bin/env node

import fs from 'fs'
import path from 'path';
import { execSync  } from 'child_process';
import { fileURLToPath  } from 'url';const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions))
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  
  return files
}

// Function to fix JSX fragment and syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix JSX fragment issues
    const jsxFixes = [
      // Fix unclosed JSX fragments
      {
        pattern: /<>([^<]*?)(?=<\/>|$)/g,
        replacement: '<React.Fragment>$1</React.Fragment>'
      },
      // Fix missing closing tags for React.Fragment
      {
        pattern: /<React\.Fragment>([^<]*?)(?=<\/React\.Fragment>|$)/g,
        replacement: '<React.Fragment>$1</React.Fragment>'
      },
      // Fix JSX expressions that need parent elements
      {
        pattern: /return\s*\(\s*([^<]*?<[^>]*>[^<]*?<[^>]*>)\s*\)/g,
        replacement: 'return (\n    <React.Fragment>\n      $1\n    </React.Fragment>\n  )'
      }
    ]
    for (const fix of jsxFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    // Fix specific syntax errors
    const syntaxFixes = [
      // Fix missing comma in object properties
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      },
      // Fix missing semicolon after const declaration
      {
        pattern: /const\s+(\w+)\s*=\s*\[([^\]]+)\]\s*const\s+(\w+)/g,
        replacement: 'const $1 = [$2];\n  const $3'
      },
      // Fix missing closing bracket in features array
      {
        pattern: /const\s+features\s*=\s*\[([^\]]+)\]\s*const\s+benefits/g,
        replacement: 'const features = [$1];\n  const benefits'
      },
      // Fix missing comma after array in object
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      }
    ]
    for (const fix of syntaxFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    // Fix specific parsing errors
    const parsingFixes = [
      // Fix missing closing tag for main
      {
        pattern: /<main([^>]*)>([^<]*?)(?=<\/main>|$)/g,
        replacement: '<main$1>$2</main>'
      },
      // Fix missing closing tag for section
      {
        pattern: /<section([^>]*)>([^<]*?)(?=<\/section>|$)/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix missing closing tag for div
      {
        pattern: /<div([^>]*)>([^<]*?)(?=<\/div>|$)/g,
        replacement: '<div$1>$2</div>'
      }
    ]
    for (const fix of parsingFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed JSX errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing JSX errors in ${filePath}:`, error.message)
    return false
  }
}

// Main execution
console.log('Starting JSX error fixes...')
const appDir = path.join(__dirname, 'app')
const files = findFiles(appDir)
let fixedCount = 0
let errorCount = 0
for (const file of files) {
  try {
    if (fixJSXErrors(file)) {
      fixedCount++
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message)
    errorCount++
  }
}

console.log(`\nFixed ${fixedCount} files`)
console.log(`Errors: ${errorCount} files`)
// Run linting to check remaining issues
console.log('\nRunning linting to check remaining issues...')
try {
  execSync('pnpm run lint', { stdio: 'inherit' })
} catch (error) {console.log('Linting completed with some remaining issues to fix manually')
}
                </div>
                </main></section>