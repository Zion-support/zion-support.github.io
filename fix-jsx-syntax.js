#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

// Function to fix common JSX syntax errors
function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    // Fix malformed import statements
    content = content.replace(/import\s+.*?from\s+['"][^'"]*?['"]\s*;?\s*import\s+.*?from\s+['"][^'"]*?['"]\s*;?/g, (match) => {
      const imports = match.split('import').filter(imp => imp.trim())
      const uniqueImports = [...new Set(imports.map(imp => 'import' + imp.trim()))]
      return uniqueImports.join('\n')
    })

    // Fix malformed JSX fragments
    content = content.replace(/<React\.Fragment>/g, '<>')
    content = content.replace(/<\/React\.Fragment>/g, '</>')

    // Fix malformed JSX elements with $2 placeholders
    content = content.replace(/<\$2\s*\/>/g, '<div></div>')
    content = content.replace(/<\$2\s+([^>]*?)>/g, '<div $1>')

    // Fix unclosed JSX tags
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
      if (match.endsWith('/>')) return match
      if (attributes.includes('className=') && !match.includes('</')) {
        return match + `</${tagName}>`
      }
      return match
    })

    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\}/g, (match, expr) => {
      if (expr.includes('>') && !expr.includes('{')) {
        return `{${expr.replace(/>/g, '&gt;')}}`
      }
      return match
    })

    // Fix duplicate 'use client' directives
    content = content.replace(/(['"]use client['"];?\s*\n)+/g, "'use client'\n")

    // Fix malformed export statements
    content = content.replace(/export\s+default\s+function\s+(\w+).*?\{/g, (match, funcName) => {
      if (!match.includes('React.FC')) {
        return `export default function ${funcName}: React.FC = () => {`
      }
      return match
    })

    // Fix missing closing tags for common elements
    const commonTags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'main', 'nav', 'header', 'footer']
    commonTags.forEach(tag => {
      const openTagRegex = new RegExp(`<${tag}([^>]*?)(?<!\/)>`, 'g')
      content = content.replace(openTagRegex, (match, attributes) => {
        if (match.endsWith('/>')) return match
        if (attributes.includes('className=') && !match.includes('</')) {
          return match + `</${tag}>`
        }
        return match
      })
    })

    // Fix malformed JSX attributes
    content = content.replace(/className=([^"'\s>]+)/g, 'className="$1"')
    content = content.replace(/href=([^"'\s>]+)/g, 'href="$1"')
    content = content.replace(/src=([^"'\s>]+)/g, 'src="$1"')

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content)
      return true
    }

    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

// Function to fix all app pages
async function fixAllAppPages() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ]
  
  let totalFixed = 0
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      if (fixJsxSyntax(file)) {
        totalFixed++
        console.log(`Fixed: ${file}`)
      }
    }
  }
  
  console.log(`\nFixed JSX syntax in ${totalFixed} files`)
}

// Run the fix
fixAllAppPages().catch(console.error)