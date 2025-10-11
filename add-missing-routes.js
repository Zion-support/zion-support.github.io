import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList

// Generate import statements for missing pages
const importStatements = missingPages.map(page => {
  const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
  return `import ${componentName} from './pages/${page}'`
}).join('\n')

// Generate route components
const routeComponents = missingPages.map(page => {
  const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
  const path = `/${page}`
  return `        <Route path="${path}" element={<${componentName} />} />`
}).join('\n')

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  /import.*from.*pages.*\n/g,
  importStatements + '\n'
).replace(
  /<Routes>[\s\S]*?<\/Routes>/,
  `<Routes>\n${routeComponents}\n      </Routes>`
)

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent)

console.log('Routes added successfully!')