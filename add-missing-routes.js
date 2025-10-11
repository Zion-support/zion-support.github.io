import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
<<<<<<< HEAD
const __dirname = path.dirname(__filename)
=======
// const __dirname = path.dirname(__filename)
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList

// Generate import statements for missing pages
<<<<<<< HEAD
const imports = missingPages.map(page => {
  const componentName = page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '')
  return `import ${componentName} from './pages/${page}'`
}).join('\n')

// Generate route definitions
const routes = missingPages.map(page => {
  const componentName = page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '')
  return `        <Route path="/${page}" element={<${componentName} />} />`
=======
const importStatements = missingPages.map(page => {
  const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
  return `import ${componentName} from './pages/${page}'`
}).join('\n')

// Generate route components
const routeComponents = missingPages.map(page => {
  const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
  const path = `/${page}`
  return `        <Route path="${path}" element={<${componentName} />} />`
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
}).join('\n')

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  /import.*from.*pages.*\n/g,
<<<<<<< HEAD
  imports + '\n'
).replace(
  /<Route.*path="\/.*".*element=.*\/>.*\n/g,
  routes + '\n'
=======
  importStatements + '\n'
).replace(
  /<Routes>[\s\S]*?<\/Routes>/,
  `<Routes>\n${routeComponents}\n      </Routes>`
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
)

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent)

<<<<<<< HEAD
console.log('Successfully added missing routes to App.tsx')
console.log(`Added ${missingPages.length} routes:`)
missingPages.forEach(page => console.log(`  - /${page}`))
=======
console.log('Routes added successfully!')
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
