
const fs = require('fs')
const path = require('path')
// Function to fix all issues in a page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Get the directory name to create proper component name
    const dirName = path.basename(path.dirname(filePath))
    const componentName = dirName.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page'
    // Fix component names
    if (content.includes('const PagePage: React.FC = () => {')) {
      content = content.replace(/const PagePage: React.FC = \(\) => {/g, `const ${componentName}: React.FC = () => {`)
      content = content.replace(/export default PagePage;/g, `export default ${componentName}`)
      modified = true
    }
    // Fix any remaining generic names
    content = content.replace(/const (\w+Page): React.FC = \(\) => {/g, (match, name) => {
      if (name === 'PagePage' || name.includes('PagePage')) {
        return `const ${componentName}: React.FC = () => {
  `
}
      return match
    })
    content = content.replace(/export default (\w+Page)/g, (match, name) => {
      if (name === 'PagePage' || name.includes('PagePage')) {
        return `export default ${componentName}`
      }
      return match
    })
    // Fix icon objects that might cause serialization issues
    // Replace complex icon objects with simple references
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1')
    // Fix any remaining complex icon usage
    content = content.replace(/<([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, (match, iconName) => {
      // Only replace if it's in an icon context
      if (match.includes('className=')) {
        return `<${iconName} className="w-8 h-8" />`
      }
      return match
    })
    // Fix 'use client' directive issues with Helmet
    if (content.includes("'use client'") && content.includes('react-helmet-async')) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '')
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '')
      modified = true
    }
    // Fix Link components using 'to' instead of 'href'
    if (content.includes('to=')) {
  content = content.replace(/to=/g, 'href=')
      modified = true
}
    // Add missing icon imports
    const commonIcons = [
  'Send', 'BarChart3', 'Shield', 'Target', 'Zap', 'Globe', 'DollarSign'
      'Clock', 'Star', 'Activity', 'Lock', 'FileText', 'CreditCard'
      'Database', 'Building2', 'Sparkles', 'PieChart', 'CheckCircle'
]
    const existingImports = content.match(/import {[^}]+} from 'lucide-react'/)
    if (existingImports) {
      const currentIcons = existingImports[0].match(/[A-Z][a-zA-Z0-9]+/g) || []
      const missingIcons = commonIcons.filter(icon => !currentIcons.includes(icon))
      if (missingIcons.length > 0) {
        const newImport = `import { ${currentIcons.join(', ')}, ${missingIcons.join(', ')} } from 'lucide-react'`
        content = content.replace(existingImports[0], newImport)
        modified = true
      }
    }
    if (modified) {
      fs.writeFileSync(filePath, content)
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
// Function to recursively fix all page files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        fixedCount += fixAllPages(filePath)
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
  if (fixPageFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// Start fixing from the app directory
const appDir = path.join(__dirname, 'app')
// eslint-disable-next-line no-console
    console.log('Starting comprehensive fix...')
const totalFixed = fixAllPages(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed ${totalFixed} page files`)