
const fs = require('fs')
const path = require('path')
// Function to restore proper quotes and fix syntax
function restoreFile(content) {
  // Fix HTML entities back to normal quotes
  content = content.replace(/&quot;/g, '"')
  content = content.replace(/&apos;/g, "'")
  content = content.replace(/&lt;/g, '<')
  content = content.replace(/&gt;/g, '>')
  content = content.replace(/&amp;/g, '&')
  // Fix broken quotes in strings
  content = content.replace(/"use client&quot;/g, '"use client"')
  content = content.replace(/import.*from &quot;([^&]+)&quot;/g, 'import $1 from "$2"')
  content = content.replace(/import {([^}]+)} from &quot;([^&]+)&quot;/g, 'import {$1} from "$2"')
  // Fix broken semicolons
  content = content.replace(/;\s*$/gm, '')
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*;\s*$/gm, 'const $1 = () => {')
  content = content.replace(/return\s*null\s*;\s*}\s*;\s*export/g, 'return null;\n}\n\nexport')
  // Fix missing closing braces
  const openBraces = (content.match(/{/g) || []).length
  const closeBraces = (content.match(/}/g) || []).length
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces
    content += '\n' + '}'.repeat(missingBraces)
  }
  return content
}
// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Apply fixes
    content = restoreFile(content)
    // Write back the fixed content
    fs.writeFileSync(filePath, content)
    // eslint-disable-next-line no-console
    console.log(`Restored: ${filePath}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
}
// Find all TSX files and process them
function findAndProcessFiles(dir) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndProcessFiles(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath)
    }
  })
}
// Start processing
// eslint-disable-next-line no-console
    console.log('Starting to restore files...')
findAndProcessFiles('./app')
findAndProcessFiles('./src')
// eslint-disable-next-line no-console
    console.log('Finished restoring files!')