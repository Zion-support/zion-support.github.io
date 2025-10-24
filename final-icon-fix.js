
const fs = require('fs')
const path = require('path')
// Function to fix icon rendering issues properly
function fixIconRendering(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix icon objects in features arrays - change from JSX to component references
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1')
    // Fix any remaining icon usage that might be causing issues
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1')
    // Ensure we're using component references, not JSX elements in data structures
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1')
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed icon rendering in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
// Function to recursively fix all page files
function fixAllIconRendering(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        fixedCount += fixAllIconRendering(filePath)
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
  if (fixIconRendering(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// Start fixing from the app directory
const appDir = path.join(__dirname, 'app')
// eslint-disable-next-line no-console
    console.log('Starting final icon rendering fix...')
const totalFixed = fixAllIconRendering(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed icon rendering in ${totalFixed} page files`)