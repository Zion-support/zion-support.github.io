
const fs = require('fs')
const path = require('path')
function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath)
    if (!fs.existsSync(fullPath)) {
      return
}
    let content = fs.readFileSync(fullPath, 'utf8')
    let modified = false
    // Fix malformed JSX closing structure like </div>))
    if (content.includes('))')) {
      content = content.replace(/<\/div>\s*\)\s*\)/g, '\n    </div>\n  )\n}')
      modified = true
    }
    // Fix missing closing div tags and extra closing braces
    if (content.includes('}\n}')) {
      content = content.replace(/<\/div>\s*\)\s*}\s*}/g, '\n    </div>\n  )\n}')
      modified = true
    }
    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2}(\s*<\/div>\s*){2}/g
    if (extraDivPattern.test(content)) {
  content = content.replace(extraDivPattern, '\n    </div>\n  )')
      modified = true
}
    // Fix incorrect closing tags
    content = content.replace(/<\s*\/\s*>/g, '</div>')
    if (content.includes('</>')) {
  modified = true
}
    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>')
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>')
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>')
    // Fix extra closing braces
    content = content.replace(/}\s*}\s*$/g, '}')
    if (content.match(/}\s*}\s*$/)) {
  modified = true
}
    // Fix malformed JSX structure with missing opening tags
    if (content.includes('    </div>\n  )\n}')) {
  // This is already correct, no need to change
} else if (content.includes('</div>\n  )')) {
      content = content.replace(/<\/div>\s*\)\s*}/g, '\n    </div>\n  )\n}')
      modified = true
    }
    if (modified) {
      fs.writeFileSync(fullPath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = []
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath))
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath.replace(__dirname + '/', ''))
    }
  }
  return files
}
// Fix all TSX/TS files
// eslint-disable-next-line no-console
    console.log('Starting comprehensive JSX error fixes...')
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'))
allFiles.forEach(fixFile)
// eslint-disable-next-line no-console
    console.log('Comprehensive JSX error fixes completed!')