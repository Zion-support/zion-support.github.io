#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content
  // Fix incomplete JSX closing tags with semicolons
  fixed = fixed.replace(/;\s*<\/\s*$/gm, '>')
  fixed = fixed.replace(/;\s*<\/\s*button>/gm, '</button>')
  fixed = fixed.replace(/;\s*<\/\s*div>/gm, '</div>')
  fixed = fixed.replace(/;\s*<\/\s*section>/gm, '</section>')
  fixed = fixed.replace(/;\s*<\/\s*h1>/gm, '</h1>')
  fixed = fixed.replace(/;\s*<\/\s*h2>/gm, '</h2>')
  fixed = fixed.replace(/;\s*<\/\s*h3>/gm, '</h3>')
  fixed = fixed.replace(/;\s*<\/\s*p>/gm, '</p>')
  fixed = fixed.replace(/;\s*<\/\s*span>/gm, '</span>')
  fixed = fixed.replace(/;\s*<\/\s*ul>/gm, '</ul>')
  fixed = fixed.replace(/;\s*<\/\s*li>/gm, '</li>')
  fixed = fixed.replace(/;\s*<\/\s*React\.Fragment>/gm, '</React.Fragment>')
  fixed = fixed.replace(/;\s*<\/\s*Suspense>/gm, '</Suspense>')
  fixed = fixed.replace(/;\s*<\/\s*BrowserRouter>/gm, '</BrowserRouter>')
  fixed = fixed.replace(/;\s*<\/\s*HelmetProvider>/gm, '</HelmetProvider>')
  fixed = fixed.replace(/;\s*<\/\s*ErrorBoundary>/gm, '</ErrorBoundary>')
  fixed = fixed.replace(/;\s*<\/\s*Routes>/gm, '</Routes>')
  // Fix incomplete opening tags
  fixed = fixed.replace(/<\s*button[^>]*>\s*([^<]+);\s*$/gm, '<button>$1</button>')
  fixed = fixed.replace(/<\s*div[^>]*>\s*([^<]+);\s*$/gm, '<div>$1</div>')
  fixed = fixed.replace(/<\s*section[^>]*>\s*([^<]+);\s*$/gm, '<section>$1</section>')
  // Fix malformed JSX with incomplete closing tags
  fixed = fixed.replace(/;\s*<\/\s*$/gm, '>')
  // Fix extra semicolons after JSX elements
  fixed = fixed.replace(/;\s*$/gm, '')
  // Fix incomplete JSX elements that end with just a semicolon
  fixed = fixed.replace(/<\s*\/\s*;\s*$/gm, '')
  // Fix malformed closing tags
  fixed = fixed.replace(/<\s*\/\s*;\s*>/gm, '')
  // Fix incomplete button tags
  fixed = fixed.replace(/<\s*button[^>]*>\s*([^<]+);\s*$/gm, '<button>$1</button>')
  // Fix incomplete div tags
  fixed = fixed.replace(/<\s*div[^>]*>\s*([^<]+);\s*$/gm, '<div>$1</div>')
  // Remove standalone semicolons that shouldn't be there
  fixed = fixed.replace(/^\s*;\s*$/gm, '')
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/;\s*<\/\s*([a-zA-Z][a-zA-Z0-9]*)\s*>/gm, '</$1>')
  return fixed
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixedContent = fixSyntaxErrors(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      console.log(`✓ Fixed syntax errors in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0
  try {
    const items = fs.readdirSync(dirPath)
    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
          continue
        }
        processedCount += processDirectory(fullPath)
      } else if (stat.isFile()) {
        // Process TypeScript and JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          if (processFile(fullPath)) {
            processedCount++
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)
  }
  
  return processedCount
}

// Main execution
console.log('Starting syntax error fixes...')
const processedCount = processDirectory('.')
console.log(`\n✓ Processed ${processedCount} files with syntax errors`)
console.log('Syntax error fixes completed!')