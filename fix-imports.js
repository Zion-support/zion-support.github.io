
const fs = require('fs')
const path = require('path')
// Common Lucide React icons that might be missing
const commonIcons = [
  'Send', 'BarChart3', 'Shield', 'Target', 'Mail', 'Phone', 'MapPin', 'Github', 'Linkedin', 'Twitter'
  'ArrowRight', 'Brain', 'Cloud', 'Database', 'Smartphone', 'Zap', 'Sparkles', 'Star', 'CheckCircle'
  'Clock', 'Users', 'Settings', 'Check', 'Globe', 'TrendingUp', 'BarChart', 'Calculator', 'Building2'
  'Wallet', 'PiggyBank', 'Settings', 'Home', 'Info', 'Briefcase', 'Phone', 'DocumentText', 'AcademicCap'
  'Play', 'QuestionMarkCircle', 'ShieldCheck', 'CurrencyDollar', 'Cog', 'ChevronDown', 'Bars3Icon'
  'XMarkIcon', 'HomeIcon', 'InformationCircleIcon', 'BriefcaseIcon', 'PhoneIcon', 'DocumentTextIcon'
  'AcademicCapIcon', 'PlayIcon', 'QuestionMarkCircleIcon', 'ShieldCheckIcon', 'CurrencyDollarIcon'
  'CogIcon', 'ChevronDownIcon'
]
// Function to find missing imports in a file
function findMissingImports(content) {
  const missingImports = []
  for (const icon of commonIcons) {
    // Check if icon is used in JSX but not imported
    const iconRegex = new RegExp(`<${icon}\\s`, 'g')
    const importRegex = new RegExp(`import.*{.*${icon}.*}.*from.*lucide-react`, 'g')
    if (iconRegex.test(content) && !importRegex.test(content)) {
      missingImports.push(icon)
    }
  }
  return missingImports
}
// Function to fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const missingImports = findMissingImports(content)
    if (missingImports.length === 0) {
      return false
}
    // Find the lucide-react import line
    const importRegex = /import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/
    const match = content.match(importRegex)
    if (match) {
      // Add missing imports to existing import
      const existingImports = match[1].split(',').map(imp => imp.trim())
      const allImports = [...new Set([...existingImports, ...missingImports])].sort()
      const newImport = `import { ${allImports.join(', ')} } from 'lucide-react'`
      content = content.replace(importRegex, newImport)
    } else {
      // Add new import line
      const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`
      content = newImport + content
    }
    fs.writeFileSync(filePath, content)
    // eslint-disable-next-line no-console
    console.log(`Fixed imports in: ${filePath} - Added: ${missingImports.join(', ')}`)
    return true
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing imports in ${filePath}:`, error.message)
    return false
  }
}
// Function to recursively find and fix all page files
function fixAllImports(dir) {
  const items = fs.readdirSync(dir)
  let fixedCount = 0
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Check if this is a page directory (contains page.tsx)
      const pagePath = path.join(fullPath, 'page.tsx')
      if (fs.existsSync(pagePath)) {
        if (fixImports(pagePath)) {
          fixedCount++
}
      }
      // Recursively check subdirectories
      fixedCount += fixAllImports(fullPath)
    }
  }
  return fixedCount
}
// Start fixing from the app directory
const appDir = path.join(__dirname, 'app')
// eslint-disable-next-line no-console
    console.log('Starting to fix missing imports...')
const totalFixed = fixAllImports(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed imports in ${totalFixed} page files.`)