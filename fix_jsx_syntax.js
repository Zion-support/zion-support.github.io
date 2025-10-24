
const fs = require('fs')
const path = require('path')
function fixJSXSyntax(content) {
  // Fix common JSX syntax issues
  let fixed = content
  // Fix unclosed h1 tags
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h1$1>$2</h1>')
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*$/gm, '<h1$1>$2</h1>')
  // Fix unclosed h2 tags
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h2$1>$2</h2>')
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<]+)\s*$/gm, '<h2$1>$2</h2>')
  // Fix unclosed h3 tags
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h3$1>$3</h3>')
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*$/gm, '<h3$1>$2</h3>')
  // Fix unclosed p tags
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<p$1>$2</p>')
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*$/gm, '<p$1>$2</p>')
  // Fix unclosed div tags
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<div$1>$2</div>')
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*$/gm, '<div$1>$2</div>')
  // Fix unclosed span tags
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<span$1>$2</span>')
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*$/gm, '<span$1>$2</span>')
  // Fix unclosed button tags
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<button$1>$2</button>')
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*$/gm, '<button$1>$2</button>')
  // Fix unclosed a tags
  fixed = fixed.replace(/<a([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<a$1>$2</a>')
  fixed = fixed.replace(/<a([^>]*)>\s*([^<]+)\s*$/gm, '<a$1>$2</a>')
  return fixed
}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixJSXSyntax(content)
    if (content !== fixed) {
      // eslint-disable-next-line no-console
    console.log(`Fixing JSX syntax in: ${filePath}`)
      fs.writeFileSync(filePath, fixed)
      return true
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
  return false
}
function walkDirectory(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath)
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
  if (processFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// eslint-disable-next-line no-console
    console.log('Starting JSX syntax fix...')
const fixedCount = walkDirectory('app')
// eslint-disable-next-line no-console
    console.log(`Fixed JSX syntax in ${fixedCount} files`)