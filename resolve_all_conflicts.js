
const fs = require('fs')
const path = require('path')
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n([\s\S]*?)    .replace(/}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    if (content.includes('<<<<<<< HEAD')) {
      // eslint-disable-next-line no-console
    console.log(`Processing: ${filePath}`)
      const resolvedContent = resolveMergeConflicts(content)
      fs.writeFileSync(filePath, resolvedContent, 'utf8')
      return true
    }
    return false
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
function findFilesWithConflicts(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git' && item !== 'app-broken') {
          traverse(fullPath)
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath)
      }
    }
  }
  traverse(dir)
  return files
}
function main() {
  const workspaceDir = '/workspace'
  // eslint-disable-next-line no-console
    console.log('Starting merge conflict resolution...')
  const files = findFilesWithConflicts(workspaceDir)
  // eslint-disable-next-line no-console
    console.log(`Found ${files.length} files to check`)
  let processedCount = 0
  let conflictCount = 0
  for (const file of files) {
  if (processFile(file)) {
      conflictCount++
}
    processedCount++
  }
  // eslint-disable-next-line no-console
    console.log(`\nResolution complete!`)
  // eslint-disable-next-line no-console
    console.log(`Processed ${processedCount} files`)
  // eslint-disable-next-line no-console
    console.log(`Resolved conflicts in ${conflictCount} files`)
}
main()