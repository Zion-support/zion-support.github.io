#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix stray HTML tags in JSX files
function fixStrayTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Remove stray HTML tags that shouldn't be in JSX
    const strayTags = ['</p>', '<p>', '</div>', '<div>', '</span>', '<span>', '</h1>', '<h1>', '</h2>', '<h2>', '</h3>', '<h3>']
    for (const tag of strayTags) {
      // Remove tags that appear at the end of lines or standalone
      content = content.replace(new RegExp(`\\s*${tag}\\s*$`, 'gm'), '')
      content = content.replace(new RegExp(`^\\s*${tag}\\s*$`, 'gm'), '')
    }
    // Remove any remaining stray closing tags
    content = content.replace(/\s*<\/[^>]+>\s*$/gm, '')
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed stray tags in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
// Function to find all JSX files
function findJSXFiles(dir) {
  const files = []
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath)
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item)
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }
  scanDirectory(dir)
  return files
}
// Main execution
const workspaceDir = process.cwd()
const files = findJSXFiles(workspaceDir)
console.log(`Found ${files.length} JSX files to check for stray tags...`)
let fixedCount = 0
for (const file of files) {
  if (fixStrayTags(file)) {
    fixedCount++
  }
}
console.log(`Fixed stray tags in ${fixedCount} files.`)