#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
function fixRemainingSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let fixed = false
    // More specific fixes for remaining syntax errors
    const fixes = [
      // Fix encoding syntax
      { pattern: /encoding:\s*"utf8",\s*;/g, replacement: 'encoding: "utf8",' },
      // Fix cwd syntax
      { pattern: /cwd:\s*this\.projectRoot,\s*;/g, replacement: 'cwd: this.projectRoot,' },
      // Fix stdio syntax
      { pattern: /stdio:\s*options\.silent\s*\?\s*"pipe"\s*:\s*"inherit",\s*;/g, replacement: 'stdio: options.silent ? "pipe" : "inherit",' },
      // Fix spread operator syntax
      { pattern: /\.\.\.options\s*;\s*}/g, replacement: '...options }' },
      // Fix return statement syntax
      { pattern: /return\s+result;\s*}\s*catch/g, replacement: 'return result;\n    } catch' },
      // Fix error handling syntax
      { pattern: /return\s+null;\s*}/g, replacement: 'return null;\n    }' },
      // Fix method definitions
      { pattern: /async\s+(\w+)\([^)]*\)\s*{\s*\n\s*this\./g, replacement: 'async $1() {\n    this.' },
      // Fix class method syntax
      { pattern: /}\s*;\s*\n\s*async/g, replacement: '}\n\n  async' },
      // Fix constructor syntax
      { pattern: /constructor\(\)\s*{\s*\n\s*this\./g, replacement: 'constructor() {\n    this.' }
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
      console.log(`✅ Fixed remaining syntax errors in ${filePath}`)
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
  console.log('🔧 Fixing remaining automation script syntax errors...')
  let fixedCount = 0
  files.forEach(file => {
    if (fixRemainingSyntaxErrors(file)) {
      fixedCount++
    }
  })
  console.log(`✅ Fixed ${fixedCount} automation scripts`)
}

if (require.main === module) {
  main()
}

module.exports = { fixRemainingSyntaxErrors };