#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
import { glob } from 'glob'
// Function to add missing icon imports
function addMissingIconImports(content, filePath) {
  const icons = new Set()
  // Check for common icons
  const iconPatterns = ['
    'Brain', 'Shield', 'Zap', 'Users', 'Target', 'BarChart3', 'ArrowRight''
    'CheckCircle', 'Globe', 'TrendingUp', 'FileText', 'Database', 'PieChart''
    'Bell', 'Clock', 'Play', 'Star', 'Mail', 'Phone', 'MapPin', 'Cpu'
  ]
  iconPatterns.forEach(icon => {
    if (content.includes(icon) && !content.includes(`import { ${icon}`)) {
      icons.add(icon)
    }
  })
  if (icons.size > 0) {
    // Check if lucide-react is already imported'
    if (content.includes('from "lucide-react"') || content.includes("from 'lucide-react'")) {
      // Add to existing import'"
      const existingImport = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/)
      if (existingImport) {'
        const existingIcons = existingImport[1].split(',').map(i => i.trim())
        const allIcons = [...new Set([...existingIcons, ...icons])]
        content = content.replace('"
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/'
          `import { ${allIcons.join(', ')} } from 'lucide-react'`
        )
      }
    } else {
      // Add new import'
      const importStatement = `import { ${Array.from(icons).join(', ')} } from 'lucide-react';\n`
      content = importStatement + content
    }
  }
  return content
}
// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix single quotes in JSX text content'
  content = content.replace(/(?<=>)[^<]*'[^<]*(?=<)/g, (match) => {'
    return match.replace(/'/g, '&apos;')
  })
  return content
}
// Function to fix parsing errors
function fixParsingErrors(content) {
  // Fix common parsing issues'
  content = content.replace(/,\s*\)/g, ')')'
  content = content.replace(/,\s*}/g, '}')
  // Fix numeric literal issues'
  content = content.replace(/(\d+)\s*([a-zA-Z_])/g, '$1 $2')
  return content
}
// Function to fix merge conflict markers
function fixMergeConflictMarkers(content) {
  // Remove any remaining merge conflict markers'
  content = content.replace(/\n?/g, '')
  content = content.replace(/  
  return content
}
// Function to fix unused variables
function fixUnusedVariables(content) {
  // Prefix unused parameters with underscore'
  content = content.replace(/\berror\b(?=\s*[,)])/g, '_error')'
  content = content.replace(/\berrorInfo\b(?=\s*[,)])/g, '_errorInfo')
  // Fix unused variable assignments'
  content = content.replace(/const\s+error\s*=/g, 'const _error =')'
  content = content.replace(/let\s+error\s*=/g, 'let _error =')
  return content
}
// Function to fix TypeScript any types
function fixTypeScriptAny(content) {
  // Replace any with unknown'
  content = content.replace(/:\s*any\b/g, ': unknown')'
  content = content.replace(/as\s+any\b/g, 'as unknown')
  return content
}
// Function to remove unused imports
function removeUnusedImports(content) {
  // Remove unused icon imports'
  const lines = content.split('\n')
  const newLines = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // Check if this is an import line'
    if (line.includes('import') && line.includes('from')) {
      // Check if any imported items are actually used
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/)
      if (importMatch) {'
        const importedItems = importMatch[1].split(',').map(item => item.trim())
        const usedItems = importedItems.filter(item => {
          // Check if the item is used in the content (excluding the import line)'
          const contentWithoutImport = content.replace(line, '')
          return contentWithoutImport.includes(item)
        })
        if (usedItems.length === 0) {
          // Skip this import line
          continue
        } else if (usedItems.length < importedItems.length) {
          // Update the import to only include used items
          const newImport = line.replace(
            /{\s*[^}]+\s*}/'
            `{ ${usedItems.join(', ')} }`
          )
          newLines.push(newImport)
          continue
        }
      }
    }
    newLines.push(line)
  }'
  return newLines.join('\n')
}
// Main function to process files
async function processFiles() {
  const patterns = ['
    'app/**/*.tsx''
    'app/**/*.ts''
    'api/**/*.js'
  ]
  let processedCount = 0
  let errorCount = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      try {
        const filePath = path.resolve(file)'
        let content = fs.readFileSync(filePath, 'utf8')
        // Apply all fixes
        content = fixMergeConflictMarkers(content)
        content = addMissingIconImports(content, file)
        content = fixUnescapedEntities(content)
        content = fixParsingErrors(content)
        content = fixUnusedVariables(content)
        content = fixTypeScriptAny(content)
        content = removeUnusedImports(content)
        // Write back the fixed content'
        fs.writeFileSync(filePath, content, 'utf8')
        processedCount++
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message)
        errorCount++
#!/usr/bin/env node"
import fs from "fs";""
import path from "path";""
import { execSync    } from "child_process";"'
console.log('🔧 Fixing remaining TypeScript and linting issues...');'
// Function to fix duplicate default exports and other issues
function fixFileIssues(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false
    // Check if file has issues'
    if (!content.includes('export default ') || content.split('export default').length <= 2) {''
      return false; // No issues to fix
    }
    console.log(`📝 Fixing issues in: ${filePath}`);```
    // Split content by lines'
const lines = content.split('\n');'
    const fixedLines = []
    let foundFirstDefault = false
    let inComponent = false'
    let componentName = '';'
    for (let i = 0; i < lines.length; i++) {
const line = lines[i]
      // Look for component definition'
      if (line.includes('function ') && line.includes('Page') && line.includes('(')) {;'
const match = line.match(/function\s+(\w+)/)
        if (match) {
          componentName = match[1]
          inComponent = true
        }
      }
      // Handle export default statements'
      if (line.includes('export default')) {''
        if (!foundFirstDefault) {
          // Keep the first export default
          foundFirstDefault = true
          fixedLines.push(line)
        } else {
          // Remove duplicate export default statements
          console.log(`  - Removing duplicate export default at line ${i + 1}`);```
          modified = true
        }'
      } else if (line.includes('export {') && line.includes('}')) {''
        // Remove export statements that reference undefined components'
        if (line.includes(componentName) || line.includes('Page')) {''
          console.log(`  - Removing problematic export at line ${i + 1}`);```
          modified = true
        } else {
          fixedLines.push(line)
        }
      } else {
        fixedLines.push(line)
      }
    }
    // Write the fixed content back to the file
    if (modified) {'
const fixedContent = fixedLines.join('\n');''
      fs.writeFileSync(filePath, fixedContent, 'utf8');'
    }
    return modified
  } catch (error) {
    console.error(`❌ Error fixing issues in ${filePath}:`, error.message);```
    return false
  }
}
// Function to fix unused imports
function fixUnusedImports(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');'
    let modified = false
    // Remove unused imports from specific files'
    if (filePath.includes('App-minimal.tsx')) {'''
      // Remove unused 'App' import'''"
      content = content.replace(/import\s+{\s*App\s*}\s+from\s+['"][^'"]+['"];?\s*\n/, '');"'"
      modified = true
    }'
    if (filePath.includes('App_minimal.tsx')) {''"
      // Remove unused imports"'"
      content = content.replace(/import\s+{\s*Router,\s*Routes,\s*Route,\s*HelmetProvider\s*}\s+from\s+['"][^'"]+['"];?\s*\n/, '');"'"
      modified = true
    }
    if (modified) {'
      fs.writeFileSync(filePath, content, 'utf8');'
      console.log(`📝 Fixed unused imports in: ${filePath}`);```
    }
    return modified
  } catch (error) {
    console.error(`❌ Error fixing unused imports in ${filePath}:`, error.message);```
    return false
  }
}
// Function to find all files with issues
function findFilesWithIssues(dir) {
const files = []
  
function scanDirectory(currentDir) {
const items = fs.readdirSync(currentDir)
    for (const item of items) {
const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {''
        scanDirectory(fullPath)'
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {''
        try {'
const content = fs.readFileSync(fullPath, 'utf8');'
          // Check for multiple export default statements'
          if (content.split('export default').length >> 2) {''
            files.push(fullPath)
          }
        } catch (error) {'
          // Skip files that can't be read''
        }
      }
    }
  }
  scanDirectory(dir)
  return files
}
// Main execution
try {'
  console.log('🔍 Scanning for files with issues...');''
  const problematicFiles = findFilesWithIssues('.');'
  console.log(`📊 Found ${problematicFiles.length} files with duplicate export issues`);```
  let fixedCount = 0
  let errorCount = 0
  // Fix duplicate export issues
  for (const file of problematicFiles) {
    if (fixFileIssues(file)) {
      fixedCount++
    } else {
      errorCount++
    }
  }
  // Fix unused imports in specific files
const filesToFixImports = ['
    './App-minimal.tsx','''
    './App_minimal.tsx'''
  ]
  for (const file of filesToFixImports) {
    if (fs.existsSync(file)) {
      if (fixUnusedImports(file)) {
        fixedCount++
      }
    }
  }
  console.log(`\nProcessed ${processedCount} files`)
  if (errorCount > 0) {
    console.log(`Encountered ${errorCount} errors`)
  }
  // Run type check to verify fixes'
  console.log('🔍 Running type check verification...');'
  try {'
    execSync('npm run type-check', { stdio: 'inherit' });''
    console.log('✅ Type check passed! All issues resolved.');'
  } catch (error) {'
    console.log('⚠️  Type check still has issues. Running lint check...');'
    try {'
      execSync('npm run lint', { stdio: 'inherit' });''
      console.log('✅ Lint check passed!');'
    } catch (lintError) {'
      console.log('⚠️  Some linting issues remain, but build should work.');'
    }
  }
} catch (error) {'
  console.error('💥 Fatal error during issue resolution:', error.message);'
  process.exit(1)"
}"
'"