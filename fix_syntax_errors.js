#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Function to fix syntax errors caused by the previous script
function fixSyntaxErrors(content) {
  // Remove extra semicolons that were added incorrectly
  content = content.replace(/;\s*;/g, ';')
  content = content.replace(/,\s*;/g, ',')
  content = content.replace(/{\s*;/g, '{')
  content = content.replace(/}\s*;/g, '}')
  content = content.replace(/\(\s*;/g, '(')
  content = content.replace(/\)\s*;/g, ')')
  
  // Fix function declarations
  content = content.replace(/:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*;/g, ': React.FC = () => {')
  content = content.replace(/:\s*React\.FC\s*=\s*\(\s*\)\s*{\s*;/g, ': React.FC = () => {')
  
  // Fix object literals
  content = content.replace(/{\s*;\s*([^}]+)\s*;\s*}/g, '{\n  $1\n}')
  
  // Fix array literals
  content = content.replace(/\[\s*;\s*([^\]]+)\s*;\s*\]/g, '[\n  $1\n]')
  
  // Fix import statements
  content = content.replace(/import\s*{\s*;\s*([^}]+)\s*;\s*}/g, 'import {\n  $1\n}')
  
  // Fix export statements
  content = content.replace(/export\s*{\s*;\s*([^}]+)\s*;\s*}/g, 'export {\n  $1\n}')
  
  // Remove standalone semicolons
  content = content.replace(/^\s*;\s*$/gm, '')
  
  // Fix metadata objects
  content = content.replace(/:\s*Metadata\s*=\s*{
  \s*;/g, ': Metadata = {')
  
  // Fix component declarations
  content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*{\s*;/g, 'const $1: React.FC = () => {')
  
  return content
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Apply fixes
    content = fixSyntaxErrors(content)
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js']) {
  const files = []
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir)
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          // Skip node_modules and .next
          if (!['node_modules', '.next', '.git'].includes(item)) {
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
function main() {
  const workspaceDir = process.cwd()
  console.log('Starting syntax error fixing...')
  
  // Find all relevant files
  const files = findFiles(workspaceDir)
  console.log(`Found ${files.length} files to process`)
  
  let fixedCount = 0
  // Process each file
  for (const file of files) {
  if (processFile(file)) {
      fixedCount++
}
  }
  
  console.log(`\nFixed ${fixedCount} files`)
  console.log('Syntax error fixing completed!')
}

// Run the script
if (require.main === module) {
  main()
}

module.exports = { fixSyntaxErrors, processFile }