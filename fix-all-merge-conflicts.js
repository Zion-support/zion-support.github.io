import fs from 'fs''
import path from 'path''
import { execSync } from 'child_process'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix merge conflicts and syntax errors
function fixFile(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8')
    // Check if file has merge conflict markers'
    if (!content.includes('') && !content.includes('      return false; // No conflicts to fix
    }
    console.log(`Fixing merge conflicts in: ${filePath}`)
    // Split by conflict markers and take the HEAD version (first part)'
    const lines = content.split('\n')
    const fixedLines = []
    let inConflict = false
    let conflictDepth = 0
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]'
      if (line.trim().startsWith('')) {
        inConflict = true
        conflictDepth++
        continue; // Skip the conflict marker'
      } else if (line.trim().startsWith('')) {
        continue; // Skip the separator'
      } else if (line.trim().startsWith('        inConflict = false
        conflictDepth--
        continue; // Skip the end marker
      } else if (inConflict && conflictDepth === 1) {'
        // We're in the HEAD section, keep the line
        fixedLines.push(line)
      } else if (!inConflict) {'
        // We're not in a conflict, keep the line
        fixedLines.push(line)
      }
      // Skip lines in other conflict sections
    }
    // Clean up any trailing empty lines and ensure proper formatting'
    let fixedContent = fixedLines.join('\n')
    // Remove multiple consecutive empty lines'
    fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, '\n\n')
    // Ensure file ends with single newline'
    fixedContent = fixedContent.trim() + '\n''
    fs.writeFileSync(filePath, fixedContent, 'utf8')
    return true
    let modified = false
    // Remove merge conflict markers'
    if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
      // Keep the HEAD version (first part before )'
      content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)\n>>>>>>>.*?\n/g, '$1')
      modified = true
    }
    // Fix common syntax errors
    // Remove extra quotes and semicolons'
    content = content.replace(/import\s+.*?from\s+["'][^"']*["'];";/g, (match) => {'"
      return match.replace(/";$/, ';')
    })
    // Fix JSX syntax errors"
    content = content.replace(/return\s*\(\s*"([\s\S]*?)"\s*\)/g, (match, jsxContent) => {
      return `return (\n${jsxContent}\n)`
    })
    // Fix extra quotes in JSX'"
    content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, '<$1>$2</$1>')'"
    content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, '<$1>$2</$1>')
    // Fix unterminated strings'"
    content = content.replace(/([^\\])"([^"]*?)\n([^"]*?)"/g, '$1"$2$3"')
    // Remove extra semicolons'
    content = content.replace(/;;+/g, ';')'
    content = content.replace(/;\s*$/gm, ';')
    // Fix JSX structure'"
    content = content.replace(/<div[^>]*>\s*"([^"]*)"\s*<\/div>/g, '<div$1></div>')
    // Remove empty lines with just quotes'"
    content = content.replace(/^\s*"\s*$/gm, '')
    // Fix function declarations"
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*return\s*\(\s*"([\s\S]*?)"\s*\)\s*};/g, (match, funcName, jsxContent) => {
      return `const ${funcName} = () => {\n  return (\n${jsxContent}\n  );\n};`
    })'
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content)
      console.log(`Fixed: ${filePath}`)
      return true
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
  }
  return false
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)'
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {'
          const content = fs.readFileSync(fullPath, 'utf8')'
          if (content.includes('') || content.includes('            files.push(fullPath)
          }
        } catch (error) {'
          // Skip files that can't be read
        }
      }
    }
  }
  traverse(dir)
  return files
}
// Main execution'
console.log('🔍 Searching for files with merge conflicts...')'
const conflictedFiles = findFilesWithConflicts('./app')
console.log(`Found ${conflictedFiles.length} files with merge conflicts`)
let fixedCount = 0
let errorCount = 0
for (const file of conflictedFiles) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++
      console.log(`✅ Fixed: ${file}`)
    }
  } catch (error) {
    errorCount++
    console.error(`❌ Error fixing ${file}:`, error.message)
  }
}
console.log(`\n📊 Summary:`)
console.log(`✅ Fixed: ${fixedCount} files`)
console.log(`❌ Errors: ${errorCount} files`)
if (fixedCount > 0) {'
  console.log('\n🎉 Merge conflicts fixed! You can now run the build.')
} else {'
  console.log('\n✨ No merge conflicts found or all conflicts were already resolved.')
}
// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath)
  let fixedCount = 0
  for (const item of items) {
    const fullPath = path.join(dirPath, item)
    const stat = fs.statSync(fullPath)'
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath)'
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      if (fixFile(fullPath)) {
        fixedCount++
      }
    }
  }
  return fixedCount
}
// Start fixing from the app directory'
console.log('Starting to fix merge conflicts and syntax errors...')'
const fixedCount = fixDirectory('./app')
console.log(`Fixed ${fixedCount} files.`)
// Also fix root level files'
const rootFiles = ['App.tsx', 'main.tsx', 'vite.config.ts', 'eslint.config.js']
let rootFixedCount = 0
for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      rootFixedCount++
    }
  }
}
console.log(`Fixed ${rootFixedCount} root files.`)
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`)'"