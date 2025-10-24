
const fs = require('fs')
const path = require('path')
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix malformed JSX closing tags
    const fixes = [
      // Fix incomplete closing tags
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      // Fix specific malformed patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }
      // Fix incomplete h1, h2, p, button tags
      { pattern: /  <\/h1>\s*$/gm, replacement: '  </h1>' }
      { pattern: /  <\/h2>\s*$/gm, replacement: '  </h2>' }
      { pattern: /  <\/p>\s*$/gm, replacement: '  </p>' }
      { pattern: /  <\/button>\s*$/gm, replacement: '  </button>' }
      { pattern: /  <\/div>\s*$/gm, replacement: '  </div>' }
      // Fix incomplete closing tags with specific patterns
      { pattern: /  <\/\s*$/gm, replacement: '  </' }
      { pattern: /  <\/\s*\n/gm, replacement: '  </\n' }]
    for (const fix of fixes) {
  const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
        content = newContent
        modified = true
}
    }
    // Additional specific fixes
    content = content.replace(/  <\/\s*$/gm, '  </')
    content = content.replace(/  <\/\s*\n/gm, '  </\n')
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
function walkDir(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
  if (fixFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// Start fixing
// eslint-disable-next-line no-console
    console.log('Starting comprehensive JSX fixes...')
const fixedCount = walkDir('./app')
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} files`)