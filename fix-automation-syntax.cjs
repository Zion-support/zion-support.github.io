#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let fixed = false
    // Fix common syntax errors
    const fixes = [
      // Remove trailing commas after semicolons
      { pattern: /;\s*/g, replacement: ';' },
      // Fix class syntax issues
      { pattern: /class\s+\$1\s*{/g, replacement: 'class HealthChecker {' },
      // Remove extra semicolons after closing braces
      { pattern: /}\s*;\s*\n/g, replacement: '}\n' },
      // Fix constructor syntax
      { pattern: /constructor\(\)\s*{\s*\n\s*this\./g, replacement: 'constructor() {\n    this.' },
      // Fix method syntax
      { pattern: /async\s+(\w+)\(\)\s*{\s*\n\s*this\./g, replacement: 'async $1() {\n    this.' },
      // Remove extra semicolons in try-catch blocks
      { pattern: /}\s*;\s*catch/g, replacement: '} catch' },
      // Fix console.log syntax
      { pattern: /console\.log\([^)]+\);\s*,/g, replacement: 'console.log($1);' }
    ]
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        fixed = true
      }
    })
    if (fixed) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Fixed syntax errors in ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message)
    return false
  }
}

function main() {
  const automationDir = path.join(process.cwd(), 'automation')
  const files = fs.readdirSync(automationDir)
    .filter(file => file.endsWith('.cjs'))
    .map(file => path.join(automationDir, file))
  console.log('🔧 Fixing automation script syntax errors...')
  let fixedCount = 0
  files.forEach(file => {
    if (fixSyntaxErrors(file)) {
      fixedCount++
    }
  })
  console.log(`✅ Fixed ${fixedCount} automation scripts`)
}

if (require.main === module) {
  main()
}

module.exports = { fixSyntaxErrors };