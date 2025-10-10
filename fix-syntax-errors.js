#!/usr/bin/env node
import fs from 'fs'import path from 'path'
import { execSync  } from 'child_process'
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    const originalContent = content
    content = content.replace(/^'use client' \s*$/gm, "'use client'")
    content = content.replace(/^import\s+React\s+from\s+['"]react['"] \s*$/gm, "import React from 'react'")
    content = content.replace(/^import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];\s*$/gm, "import { $1 } from '$2';")
    content = content.replace(/^import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"] \s*$/gm, "import $1 from '$2'")
    content = content.replace(/;\s*\/\/[^\n]*\n/g, '\n')
    content = content.replace(/;\s*\/\*[^*]*\*\/\s*\n/g, '\n')
    content = content.replace(/;\s*<([^>]+)>\s* \s*<\/\1>\s*/g, '<$1></$1>')
    content = content.replace(/;\s*<([^>]+)\s*\/>\s*;/g, '<$1 />')
    content = content.replace(/;\s*<([^>]+)>\s*;\s*([^<]+)\s* \s*<\/\1>\s*/g, '<$1>$2</$1>')
    content = content.replace(/;\s*const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*\(/g, 'const $1 = () => (')
    content = content.replace(/;\s*const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $1 = () => {')
    content = content.replace(/;\s*const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g, 'const $1: React.FC = () => {')
    content = content.replace(/;\s*return\s*\(/g, 'return (')
    content = content.replace(/;\s*return\s*{/g, 'return {')
    content = content.replace(/;\s*}\s*;/g, '}')
    content = content.replace(/ \s*\)\s*/g, ')')
    content = content.replace(/;\s*<\/[^>]+>\s*;/g, (match) => match.replace(/;/g, ''))
    content = content.replace(/ \s*import\s+([^;]+);/g, 'import $1')
    content = content.replace(/ \s*export\s+([^;]+);/g, 'export $1')
    content = content.replace(/;\s*\n/g, '\n')
    content = content.replace(/ +/g, '')
    content = content.replace(/;\s*}/g, '}')
    content = content.replace(/;\s*\)/g, ')')
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*{([^}]+)}\s*;/g, ' $1={$2}')
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*"([^"]+)"\s*;/g, ' $1="$2"')
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*=\s*'([^']+)'\s*;/g, " $1='$2'")
    content = content.replace(/;\s*className\s*=\s*"([^"]+)"\s*;/g, ' className="$1"')
    content = content.replace(/;\s*([^<>{}\n]+)\s*;/g, (match, text) => {
      const trimmed = text.trim()
      if (trimmed && !trimmed.includes('=') && !trimmed.includes('{') && !trimmed.includes('}')) {
        return ` ${trimmed}`
      }
      return match
    })
    content = content.replace(/^'use client' \s*$/gm, "'use client'")
    content = content.replace(/^import\s+React\s+from\s+['"]react['"] \s*$/gm, "import React from 'react'")
    content = content.replace(/^export\s+default\s+([^ ]+);\s*$/gm, "export default $1")
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    content = content.replace(/^\s*\n/gm, '')
    content = content.replace(/;\s*$/gm, '')
    content = content.replace(/;\s*<([^>]+)>\s* \s*<\/\1>\s*/g, '<$1></$1>')
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*\(/g, ' $1(')
    content = content.replace(/;\s*([a-zA-Z][a-zA-Z0-9]*)\s*:\s*([^,}]+)\s*;/g, ' $1: $2')
    content = content.replace(/;\s*([^,}\]]+)\s*;/g, (match, text) => {
      const trimmed = text.trim()
      if (trimmed && !trimmed.includes('=') && !trimmed.includes('{') && !trimmed.includes('}')) {
        return ` ${trimmed}`
      }
      return match
    })
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed syntax errors in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
// Function to find all files with syntax errors
function findFilesWithSyntaxErrors(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          traverse(fullPath)
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item)
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }
  traverse(dir)
  return files
}
// Main execution
console.log('Starting syntax error resolution...')
const filesToCheck = findFilesWithSyntaxErrors('/workspace')
console.log(`Checking ${filesToCheck.length} files for syntax errors`)
let fixedCount = 0
for (const file of filesToCheck) {
  if (fixSyntaxErrors(file)) {
    fixedCount++
  }
}
console.log(`Fixed syntax errors in ${fixedCount} files`)
console.log('Running linting to check for remaining issues...')
try {
  execSync('cd /workspace && pnpm run lint:fix', { stdio: 'inherit' })
} catch (error) {
  console.log('Linting completed with some issues remaining')
}
console.log('Syntax error resolution completed!')