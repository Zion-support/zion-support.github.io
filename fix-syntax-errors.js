#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
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

// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix missing commas in object literals
    const commaFixes = [
      // Fix missing comma after array in object
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:/g,
        replacement: '$1: [$2],\n    $3:'
      },
      // Fix missing comma after object property
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      },
      // Fix missing comma after string array
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      }
    ]
    for (const fix of commaFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    // Fix missing semicolons in array declarations
    const semicolonFixes = [
      // Fix missing semicolon after array declaration
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2];\n  const $3 = ['
      },
      // Fix missing semicolon after const declaration
      {
        pattern: /const\s+(\w+)\s*=\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: 'const $1 = [$2];\n  const $3 = ['
      }
    ]
    for (const fix of semicolonFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    // Fix JSX closing tag issues
    const jsxFixes = [
      // Fix unclosed JSX elements
      {
        pattern: /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=<\w+|\s*$)/g,
        replacement: (match, tagName, attributes, content) => {
          // Skip self-closing tags
          if (match.endsWith('/>') || ['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            return match
          }
          // Add closing tag if missing
          if (!content.includes(`</${tagName}>`)) {
            return `<${tagName}${attributes}>${content}</${tagName}>`
          }
          return match
        }
      },
      // Fix meta tags
      {
        pattern: /<meta\s+([^>]*?)(?<!\/)>/g,
        replacement: (match, attributes) => {
          if (!match.includes('/>') && !match.includes('</meta>')) {
            return `<meta ${attributes} />`
          }
          return match
        }
      }
    ]
    for (const fix of jsxFixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      }
    }
    
    // Fix specific parsing errors
    const specificFixes = [
      // Fix missing closing bracket in features array
      {
        pattern: /const\s+features\s*=\s*\[([^\]]+)\]\s*const\s+benefits/g,
        replacement: 'const features = [$1];\n  const benefits'
      },
      // Fix missing semicolon after features array
      {
        pattern: /const\s+features\s*=\s*\[([^\]]+)\]\s*const\s+benefits/g,
        replacement: 'const features = [$1];\n  const benefits'
      },
      // Fix missing comma in object properties
      {
        pattern: /(\w+)\s*:\s*\[([^\]]+)\]\s*(\w+)\s*:\s*\[/g,
        replacement: '$1: [$2],\n    $3: ['
      }
    ]
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed syntax errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing syntax errors in ${filePath}:`, error.message)
    return false
  }
}

// Main execution
console.log('Starting syntax error fixes...')
const appDir = path.join(__dirname, 'app')
const files = findFiles(appDir)
let fixedCount = 0
let errorCount = 0
for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
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
} catch (error) {
  console.log('Linting completed with some remaining issues to fix manually')
}
    let content = fs.readFileSync(filePath, 'utf8')
    // Fix common syntax issues
    content = content.replace(/\s+return\s*\(\s*<>/g, '\n    }\n  ];\n\n  return (\n    <>')
    // Fix missing closing brackets for features array
    content = content.replace(/(benefits:\s*\[[^\]]+\])\s+return\s*\(/g, '$1\n    }\n  ];\n\n  return (')
    // Fix malformed JSX structure
    content = content.replace(/(benefits:\s*\[[^\]]+\])\s*}\s*return\s*\(/g, '$1\n    }\n  ];\n\n  return (')
    // Fix missing closing tags
    content = content.replace(/<Helmet>\s*<title>[^<]+<\/title>\s*<meta[^>]+>\s*<meta[^>]+>\s*<meta[^>]+>\s*<\/Helmet>/g, 
      '<Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />\n        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />\n      </Helmet>')
    // Ensure proper JSX structure
    if (!content.includes('export default')) {
      content = content.replace(/(const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?)(\s*};?\s*)$/m, '$1\n};\n\nexport default $1Page;')
    }
    
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✅ Fixed syntax errors in ${filePath}`)
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
  }
}

// Process all files
console.log('🔧 Fixing syntax errors...\n')
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fixFile(filePath)
  } else {
    console.log(`⚠️  File not found: ${filePath}`)
  }
})
console.log('\n✨ Syntax error fixes complete!')
