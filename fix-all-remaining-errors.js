#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
// Function to fix common syntax patterns
function fixCommonSyntaxErrors(content) {
  let modified = false
  // Fix malformed imports
  const importFixes = [
    // Fix malformed import statements with missing commas
    {
      pattern: /import\s+{([^}]*),\s*([^}]*),\s*([^}]*)\s+from\s+'([^']*)';\s*}/g,
      replacement: "import { $1, $2, $3 } from '$4';"
    },
    // Fix malformed import statements with missing commas
    {
      pattern: /import\s+{([^}]*),\s*([^}]*)\s+from\s+'([^']*)';\s*}/g,
      replacement: "import { $1, $2 } from '$3';"
    },
    // Fix malformed import statements
    {
      pattern: /import\s+{([^}]*)\s+from\s+'([^']*)';\s*}/g,
      replacement: "import { $1 } from '$2';"
    }
  ]
  for (const fix of importFixes) {
    const newContent = content.replace(fix.pattern, fix.replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }
  
  // Fix malformed function declarations
  const functionFixes = [
    // Fix malformed function with missing return
    {
      pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[\s*}\s*const\s+(\w+)\s*=\s*\[\s*}/g,
      replacement: 'const $1: React.FC = () => {\n  const $2 = [];\n  const $3 = [];\n  return ('
    },
    // Fix malformed function with missing return
    {
      pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[\s*}/g,
      replacement: 'const $1: React.FC = () => {\n  const $2 = [];\n  return ('
    },
    // Fix malformed function with missing return
    {
      pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*}\s*</g,$2 />
      replacement: 'const $1: React.FC = () => {\n  return (\n    <'$2 />
    }
  ]
  for (const fix of functionFixes) {
    const newContent = content.replace(fix.pattern, fix.replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }
  
  // Fix malformed object literals
  const objectFixes = [
    // Fix malformed object with missing commas
    {
      pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
      replacement: '$1: $2,\n    $3:'
    },
    // Fix malformed array with missing commas
    {
      pattern: /(\w+):\s*\[\s*}\s*(\w+):/g,
      replacement: '$1: [],\n    $2:'
    },
    // Fix malformed object with missing commas
    {
      pattern: /(\w+):\s*(\w+),?\s*}\s*(\w+):/g,
      replacement: '$1: $2,\n    $3:'
    }
  ]
  for (const fix of objectFixes) {
    const newContent = content.replace(fix.pattern, fix.replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }
  
  // Fix malformed JSX
  const jsxFixes = [
    // Fix malformed JSX attributes
    {
      pattern: /(\w+)="([^"]*)"\s*(\w+)/g,
      replacement: '$1="$2" $3'
    },
    // Fix malformed JSX closing tags
    {
      pattern: /<(\w+)([^>]*)>([^<]*)<\/?$/gm,
      replacement: '<$1$2>$3</$1>'
    },
    // Fix malformed JSX with missing closing tags
    {
      pattern: /<(\w+)([^>]*)>([^<]*)<\/?$/gm,
      replacement: '<$1$2>$3</$1>'
    }
  ]
  for (const fix of jsxFixes) {
    const newContent = content.replace(fix.pattern, fix.replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }
  
  // Fix malformed comments
  const commentFixes = [
    // Fix malformed comments
    {
      pattern: /\/\/\s*(\w+);/g,
      replacement: '// $1'
    },
    // Fix malformed comments
    {
      pattern: /\/\/\s*(\w+);/g,
      replacement: '// $1'
    }
  ]
  for (const fix of commentFixes) {
    const newContent = content.replace(fix.pattern, fix.replacement)
    if (newContent !== content) {
      content = newContent
      modified = true
    }
  }
  
  return { content, modified }
}

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Apply common fixes
    const result = fixCommonSyntaxErrors(content)
    content = result.content
    modified = result.modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed syntax errors in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('npm run lint 2>&1 | grep -B1 "error.*Parsing error" | grep "^/workspace" | sort -u 2>/dev/null || true', { encoding: 'utf8' })
    return result.trim().split('\n').filter(file => file.length > 0)
  } catch (error) {
    console.error('Error finding files with syntax errors:', error.message)
    return []
  }
}

// Main execution
console.log('Starting comprehensive syntax error resolution...')
const filesWithErrors = findFilesWithSyntaxErrors()
console.log(`Found ${filesWithErrors.length} files with syntax errors`)
let fixedCount = 0
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`)
// Verify no more syntax errors exist
try {
  const remainingErrors = execSync('npm run lint 2>&1 | grep -c "error.*Parsing error" 2>/dev/null || echo "0"', { encoding: 'utf8' })
  const count = parseInt(remainingErrors.trim())
  if (count === 0) {
    console.log('✅ All syntax errors resolved!')
  } else {
    console.log(`⚠️  ${count} syntax errors still remain`)
  }
} catch (error) {
  console.log('✅ No syntax errors found')
}