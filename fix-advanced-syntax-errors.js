#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
// Function to fix advanced syntax errors in a file
function fixAdvancedSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix import statements with missing semicolons
    content = content.replace(/import\s+([^;]+)(?<!;)\s*$/gm, (match, importStatement) => {
      if (!importStatement.includes(';')) {
        modified = true
        return `import ${importStatement.trim()};`
      }
      return match
    })
    // Fix 'use client' without semicolon
    content = content.replace(/'use client'(?!;)/g, "'use client';")
    content = content.replace(/"use client"(?!;)/g, '"use client";')
    // Fix export statements without semicolons
    content = content.replace(/export\s+([^;]+)(?<!;)\s*$/gm, (match, exportStatement) => {
      if (!exportStatement.includes(';')) {
        modified = true
        return `export ${exportStatement.trim()};`
      }
      return match
    })
    // Fix object destructuring patterns
    content = content.replace(/const\s*\{\s*([^}]+)\s*\}\s*=\s*([^;]+)(?<!;)\s*$/gm, (match, variables, value) => {
      modified = true
      return `const { ${variables.trim()} } = ${value.trim()};`
    })
    // Fix array destructuring patterns
    content = content.replace(/const\s*\[\s*([^\]]+)\s*\]\s*=\s*([^;]+)(?<!;)\s*$/gm, (match, variables, value) => {
      modified = true
      return `const [ ${variables.trim()} ] = ${value.trim()};`
    })
    // Fix object property assignments missing commas
    content = content.replace(/(\w+):\s*([^,;]+)(?<![,;])\s*$/gm, (match, key, value) => {
      // Only fix if it's inside an object literal (has { before it)
      const beforeMatch = content.substring(0, content.indexOf(match))
      const lastBrace = beforeMatch.lastIndexOf('{')
      const lastParen = beforeMatch.lastIndexOf('(')
      if (lastBrace > lastParen) {
        modified = true
        return `${key}: ${value.trim()},`
      }
      return match
    })
    // Fix function returns missing semicolons
    content = content.replace(/\)\s*(?<!;)\s*$/gm, ');')
    content = content.replace(/}\s*(?<!;)\s*$/gm, '};')
    // Fix JSX closing tags
    content = content.replace(/<\/(\w+)>\s*(?<!;)\s*$/gm, '</$1>')
    // Fix component definitions
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {')
    // Fix malformed object literals in JSX props
    content = content.replace(/(\w+)=\{([^}]+)\}/g, (match, prop, value) => {
      // Check if the value is malformed (missing quotes or has syntax errors)
      if (value.includes('"') && !value.includes("'") && !value.includes('`')) {
        // It's a string, make sure it's properly quoted
        if (!value.startsWith('"') || !value.endsWith('"')) {
          modified = true
          return `${prop}={"${value.trim()}"}`
        }
      }
      return match
    })
    // Fix unterminated string literals
    content = content.replace(/"([^"]*)$/gm, (match, str) => {
      if (!match.includes('\\"')) {
        modified = true
        return `"${str}"`
      }
      return match
    })
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,;{}]+)\s*(?=\n\s*[a-zA-Z_$])/g, (match, key, value) => {
      modified = true
      return `${key}: ${value.trim()},`
    })
    // Fix array destructuring in function parameters
    content = content.replace(/\(\s*\[\s*([^\]]+)\s*\]\s*\)/g, '([ $1 ])')
    content = content.replace(/\(\s*\{\s*([^}]+)\s*\}\s*\)/g, '({ $1 })')
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
      // If the expression contains unquoted strings, fix them
      if (expr.includes('"') && !expr.includes("'") && !expr.includes('`')) {
        const fixed = expr.replace(/"([^"]+)"/g, '"$1"')
        if (fixed !== expr) {
          modified = true
          return `{ ${fixed} }`
        }
      }
      return match
    })
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed advanced syntax errors in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath)
      }
    }
  }
  traverse(dir)
  return files
}
// Main execution
console.log('Starting advanced syntax error fixes...')
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const appDir = path.join(__dirname, 'app')
const files = findTsxFiles(appDir)
console.log(`Found ${files.length} TypeScript files to check`)
let fixedCount = 0
for (const file of files) {
  if (fixAdvancedSyntaxErrors(file)) {
    fixedCount++
  }
}
console.log(`Fixed advanced syntax errors in ${fixedCount} files`)
// Also fix the main App.tsx file
if (fixAdvancedSyntaxErrors(path.join(__dirname, 'App.tsx'))) {
  fixedCount++
}
console.log(`Total files fixed: ${fixedCount}`)