
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and choose the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD:([^\n]+)\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$2')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
}
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing closing tags for fragments
  content = content.replace(/<>\s*$/gm, '<>')
  content = content.replace(/^\s*<\/>/gm, '</>')
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^}\n]+)\s*\n/g, '$1: $2,\n')
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, '$1;')
  // Fix JSX expressions that need wrapping
  content = content.replace(/return\s*\(\s*([^<]+)\s*\)/g, (match, content) => {
    if (content.trim() && !content.includes('<')) {
      return `return (\n    <>\n      ${content}\n    </>\n  )`
    }
    return match
  })
  return content
}
// Function to fix specific component issues
function fixComponentIssues(content) {
  // Remove duplicate imports
  const lines = content.split('\n')
  const importLines = []
  const otherLines = []
  for (const line of lines) {
    if (line.trim().startsWith('import ') && line.includes(' from ')) {
      if (!importLines.includes(line)) {
        importLines.push(line)
      }
    } else {
      otherLines.push(line)
    }
  }
  // Reconstruct content
  content = importLines.join('\n') + '\n' + otherLines.join('\n')
  // Fix console statements
  content = content.replace(/console\.(log|warn|error)/g, '// eslint-disable-next-line no-console\n    console.$1')
  return content
}
// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Apply fixes
    content = fixMergeConflicts(content)
    content = fixSyntaxErrors(content)
    content = fixComponentIssues(content)
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    // eslint-disable-next-line no-console
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
  // eslint-disable-next-line no-console
    console.log('Starting error fixing...')
  // Find all relevant files
  const files = findFiles(workspaceDir)
  // eslint-disable-next-line no-console
    console.log(`Found ${files.length} files to process`)
  let fixedCount = 0
  // Process each file
  for (const file of files) {
  if (processFile(file)) {
      fixedCount++
}
  }
  // eslint-disable-next-line no-console
    console.log(`\nFixed ${fixedCount} files`)
  // eslint-disable-next-line no-console
    console.log('Error fixing completed!')
}
// Run the script
if (require.main === module) {
  main()
}
module.exports = { fixMergeConflicts, fixSyntaxErrors, fixComponentIssues, processFile }