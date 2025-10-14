import fs from 'fs''
import path from 'path''
import { execSync } from 'child_process'
// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories'
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        results = results.concat(getAllTsxFiles(filePath))
      }'
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(filePath)
    }
  })
  return results
}
// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    console.log(`Fixing ${filePath}...`)
    // Use ESLint to fix unused imports'
    execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' })
    console.log(`✓ Fixed ${filePath}`)
  } catch (error) {
    console.log(`⚠ Could not auto-fix ${filePath}: ${error.message}`)
  }
}
// Main execution'
const files = getAllTsxFiles('./app')
console.log(`Found ${files.length} TypeScript files to process...`)
files.forEach(fixUnusedImports)'
console.log('Done fixing unused imports!')'"