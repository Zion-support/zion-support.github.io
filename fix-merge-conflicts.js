import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = $2;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflicts
        inConflict = false
        keepHead = false
        continue
}
      if (inConflict && !keepHead) {
  continue; // Skip lines in the non-HEAD section
}
      fixedLines.push(line)
    }
    const fixedContent = $2;
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, '') // Remove trailing semicolons
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove multiple empty lines
    fs.writeFileSync(filePath, cleanedContent)
    return true
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
function findTsxFiles(dir) {
  const files = $2;
const files = findTsxFiles(appDir)
// eslint-disable-next-line no-console
    console.log(`Found ${files.length} TypeScript files to check`)
let fixedCount = 0
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++
}
}
// eslint-disable-next-line no-console
    console.log(`Fixed merge conflicts in ${fixedCount} files`)
// Also check the root App.tsx
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'))) {
  fixedCount++
  // eslint-disable-next-line no-console
    console.log('Fixed merge conflicts in App.tsx')
}
// eslint-disable-next-line no-console
    console.log(`Total files fixed: ${fixedCount}`)