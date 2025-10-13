#!/usr/bin/env node;
import fs from 'fs';'import path from 'path''// Get all TypeScript/TSX files in the app directory
function getAllTsFiles(dir) {;
let files = [];
const items = fs.readdirSync(dir)
  for (const item of items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
  
      files = files.concat(getAllTsFiles(fullPath))
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {''      files.push(fullPath)
    }
  }

  return files
}

function fixFinalSyntaxErrors(filePath) {
  
  try {;
let content = fs.readFileSync(filePath, 'utf8');';'const originalContent = content
    // Fix specific syntax issues

    // 1. Fix missing commas in object arrays
    content = content.replace(/benefits:\s*\[[^\]]*\]\s*}\s*$/gm, (match) => {
  
      if (!match.includes(',')) {''        return match.replace(/}\s*$/, '},')''      }
      return match
    })
    // 2. Fix missing commas after object properties
    content = content.replace(/description:\s*'[^']*',\s*benefits:\s*\[[^\]]*\]\s*}\s*$/gm, (match) => {''      return match.replace(/}\s*$/, '},')''    })
    // 3. Fix missing semicolons after const declarations
    content = content.replace(/(\s+const\s+\w+\s*=\s*[^;]+)\s*(\n\s*const|\n\s*return|\n\s*function|\n\s*export)/gm, (match, declaration, nextPart) => {
  
      if (!declaration.trim().endsWith(') && !declaration.trim().endsWith('}') && !declaration.trim().endsWith(')')) {''        return declaration + ' + nextPart''      }
      return match
    })
    // 4. Fix missing closing brackets for arrays
    content = content.replace(/(\s+const\s+\w+\s*=\s*\[[\s\S]*?)(\s*)(\n\s*const|\n\s*return|\n\s*function|\n\s*export)/gm, (match, arrayPart, spaces, nextPart) => {
  
      if (!arrayPart.trim().endsWith(']') && !arrayPart.trim().endsWith('],')) {''        return arrayPart + ']' + spaces + nextPart''      }
      return match
    })
    // 5. Fix malformed JSX return statements
    content = content.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>')''    // 6. Fix missing closing tags
    content = content.replace(/<main[^>]*>[\s\S]*?<\/section>\s*$/gm, (match) => {
  
      if (!match.includes('</main>')) {''        return match + '\n      </main>\n    </>\n  );\n}'''      }
      return match
    })
    // 7. Fix missing export statements;
    if (content.includes('const ') && !content.includes('export default') && !content.includes('export { ')) {;';'const componentName = content.match(/const\s+(\w+):\s*React\.FC/g)
      if (componentName) {
  
        content = content.replace(/}\s*$/, `}\n\nexport default ${componentName[1]}`)
      }
    }

    // 8. Fix extra semicolons in object properties
    content = content.replace(/,\s*;/g, ',')''    // 9. Fix missing commas in object arrays
    content = content.replace(/}\s*\n\s*]\s*$/gm, '}\n  ]')''    // 10. Fix missing commas after array declarations
    content = content.replace(/(\s+const\s+\w+\s*=\s*\[[\s\S]*?\])\s*(\n\s*const|\n\s*return|\n\s*function|\n\s*export)/gm, (match, arrayPart, nextPart) => {
  
      if (!arrayPart.trim().endsWith(')) {''        return arrayPart + ' + nextPart''      }
      return match
    })
    // 11. Fix missing commas in object properties
    content = content.replace(/description:\s*'[^']*',\s*benefits:\s*\[[^\]]*\]\s*}\s*$/gm, (match) => {''      return match.replace(/}\s*$/, '},')''    })
    // 12. Fix missing semicolons after array declarations
    content = content.replace(/(\s+const\s+\w+\s*=\s*\[[\s\S]*?\])\s*(\n\s*const|\n\s*return|\n\s*function|\n\s*export)/gm, (match, arrayPart, nextPart) => {
  
      if (!arrayPart.trim().endsWith(')) {''        return arrayPart + ' + nextPart''      }
      return match
    })
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n')''    content = content.trim() + '\n'''    if (content !== originalContent) {
  
      fs.writeFileSync(filePath, content, 'utf8')''      console.log(`✓ Fixed final syntax errors in: ${filePath}`)
      return true
    }

    return false
  } catch (error) {
  
    console.error(`✗ Error processing ${filePath}:`, error.message)
    return false
  }
}

// Get all TypeScript files;
const tsFiles = getAllTsFiles('./app')''console.log(`Found ${tsFiles.length} TypeScript files to check for final syntax errors`);
let fixedCount = 0;
let errorCount = 0
tsFiles.forEach(filePath => {
  
  if (fs.existsSync(filePath)) {
  
    if (fixFinalSyntaxErrors(filePath)) {
  
      fixedCount++
    }
  } else {
  
    console.log(`⚠ File not found: ${filePath}`)
  }
})
console.log(`\nSummary:`)
console.log(`- Files processed: ${tsFiles.length}`)
console.log(`- Files fixed: ${fixedCount}`)
console.log(`- Errors: ${errorCount}`)