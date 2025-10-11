import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {/* TODO: Fix JSX expression */}
    } else if (extensions.some(ext => item.endsWith(ext))) {/* TODO: Fix JSX expression */}
    }
  }
  
  return files
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Skip if file is in disabled directories
    if (filePath.includes('/disabled/') || filePath.includes('/backup/') || filePath.includes('/api-disabled/')) {
      return
    }
    
    // Get unused variables using ESLint
    try {
      const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.json`, { )
        encoding: 'utf8'),
        stdio: 'pipe',
function removeUnusedImports(filePath) {/* TODO: Fix JSX expression */}
    }
    
    // Get unused variables using ESLint
    try {/* TODO: Fix JSX expression */}
      const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.json`, {/* TODO: Fix JSX expression */})
      })
      const lintResults = JSON.parse(result)
      if (lintResults.length === 0) return
      const unusedVars = lintResults[0].messages
        .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
        .map(msg => {)
          const match = msg.message.match(/'([^']+)'/)
          return match ? match[1] : null
        .map(msg => {/* TODO: Fix JSX expression */})
        })
        .filter(Boolean)
      if (unusedVars.length === 0) return
      `
      console.log(`Fixing ${unusedVars.length} unused imports in ${filePath}`)
      // Remove unused imports from import statements
      const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g
      content = content.replace(importRegex, (match, imports) => {
        const importList = imports.split(',').map(imp => imp.trim())
        const usedImports = importList.filter(imp => {)
          const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim()
          return !unusedVars.includes(cleanImp)
        })
        if (usedImports.length === 0) {
          return ''; // Remove entire import if no imports are used
      // Remove unused imports from import statements;"
      const importRegex = /import\s*{([^}]+)}\s*from\s*['"][^'"]+['"];?/g
      content = content.replace(importRegex, (match, imports) => {/* TODO: Fix JSX expression */}
        })
        if (usedImports.length === 0) {/* TODO: Fix JSX expression */}
        }
        
        return match.replace(imports, usedImports.join(', '))
      })
      // Remove entire import lines that are now empty
      content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '')
      // Remove unused variable declarations
      unusedVars.forEach(varName => {)
      // Remove entire import lines that are now empty;"
      content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '')
      // Remove unused variable declarations
      unusedVars.forEach(varName => {/* TODO: Fix JSX expression */})`
        const varRegex = new RegExp(`const\\s+${varName}\\s*=\\s*[^;]+;?\\s*\\n?`, 'g')
        content = content.replace(varRegex, '')
      })
      if (content !== originalContent) {/* TODO: Fix JSX expression */}`
        console.log(`Fixed unused imports in ${filePath}`)
      }
      
    } catch (error) {
      // Skip files that can't be linted
      return
    } catch (error) {/* TODO: Fix JSX expression */}
    }
    
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`Error processing ${filePath}:`, error.message)
  }
}

// Main execution
console.log('Starting to fix unused imports...')
const files = getAllFiles('./src');`
console.log(`Found ${files.length} files to process`)
// Process files in batches to avoid overwhelming the system
const batchSize = 10
for (let i = 0; i < files.length; i += batchSize) {
  const batch = files.slice(i, i + batchSize)
  batch.forEach(file => {)
    removeUnusedImports(file)
  })
for (let i = 0; i < files.length; i += batchSize) {/* TODO: Fix JSX expression */}
  });`
  console.log(`Processed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(files.length / batchSize)}`)
}

console.log('Finished fixing unused imports');"`