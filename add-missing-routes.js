import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList

// Generate import statements for missing pages
const generateImports = (pages) => {
  return pages.map(page => {
    const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
    return `import ${componentName} from './pages/${page}'`
  }).join('\n')
}

// Generate route components
const generateRoutes = (pages) => {
  return pages.map(page => {
    const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
    const path = `/${page}`
    return `        <Route path="${path}" element={<${componentName} />} />`
  }).join('\n')
}

// Generate the updated App.tsx content
const updatedContent = appContent.replace(
  /\/\/ Add missing routes here/,
  `${generateImports(missingPages)}\n\n${generateRoutes(missingPages)}`
)

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent)

console.log('Missing routes added to App.tsx')
console.log('Added pages:', missingPages)