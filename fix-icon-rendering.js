
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
// Function to fix icon rendering issues
function fixIconRendering(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const modified = false
    // Fix icon objects that are being rendered directly
    // Change from icon: Component to icon: <Component className="w-8 h-8" />
    content = content.replace(/icon: ([A-Z][a-zA-Z0-9]+),/g, 'icon: <$1 className="w-8 h-8" />,')
    // Fix any remaining icon usage in JSX
    content = content.replace(/<([A-Z][a-zA-Z0-9]+) className="w-8 h-8" \/>/g, (match, iconName) => {
      // Only replace if it's in an icon context
      if (match.includes('className=')) {
        return `<${iconName} className="w-8 h-8" />`
      }
      return match
    })
    // Fix icon usage in features arrays
    content = content.replace(/icon: ([A-Z][a-zA-Z0-9]+)/g, 'icon: <$1 className="w-8 h-8" />')
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
    console.log('Starting to fix icon rendering...')
const totalFixed = fixAllIconRendering(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed icon rendering in ${totalFixed} page files`)
=======
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    content = content.replace(/"icon": ([A-Z][a-zA-Z0-9]+),/g, ''
    content = content.replace(/"icon": ([A-Z][a-zA-Z0-9]+)/g, ''
>>>>>>> origin/main
