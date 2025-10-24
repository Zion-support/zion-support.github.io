
const fs = require('fs')
const path = require('path')
// Function to fix HTML entities back to normal quotes
function fixQuotes(content) {
  // Fix HTML entities
  content = content.replace(/&quot;/g, '"')
  content = content.replace(/&apos;/g, "'")
  content = content.replace(/&lt;/g, '<')
  content = content.replace(/&gt;/g, '>')
  content = content.replace(/&amp;/g, '&')
  return content
}
// Function to fix common syntax issues
function fixSyntax(content) {
  // Fix empty function bodies
  content = content.replace(/return\s*\(\s*\)\s*;\s*}\s*;\s*export/g, 'return null;\n}\n\nexport')
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
    content = fixQuotes(content)
    content = fixSyntax(content)
    // Write back the fixed content
    fs.writeFileSync(filePath, content)
    // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
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
    console.log('Starting to fix quotes and syntax...')
findAndProcessFiles('./app')
findAndProcessFiles('./src')
// eslint-disable-next-line no-console
    console.log('Finished fixing files!')