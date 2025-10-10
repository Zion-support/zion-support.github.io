#!/usr/bin/env nodeimport fs from 'fs'
import path from 'path'import { fileURLToPath  } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions))
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
    }
  }
  return files
}
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    const mergeConflictRegex = /\n([\s\S]*?)\n([\s\S]*?)    content = content.replace(mergeConflictRegex, '$1')
    const conflictMarkers = /(||    content = content.replace(conflictMarkers, '')
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed merge conflicts in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}
const srcDir = path.join(__dirname, '..', 'src')
const appDir = path.join(__dirname, '..', 'app')
console.log('Starting merge conflict resolution...')
const srcFiles = findFiles(srcDir)
const appFiles = findFiles(appDir)
const allFiles = [...srcFiles, ...appFiles]
console.log(`Found ${allFiles.length} files to process`)
let fixedCount = 0
for (const file of allFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`)
console.log('Merge conflict resolution completed!')