import fs from 'fs'import path from 'path'
import { fileURLToPath  } from 'url'
const __filename = fileURLToPath(import.meta.url)
// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page'
  return `const ${componentName} = lazy(() => import('.${route}/page'));`
}
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page'
  return `            <Route path="${route}" element={<${componentName} />} />`
}
const importStatements = missingPages.map(generateImportStatement).join('\n')
const routeStatements = missingPages.map(generateRouteStatement).join('\n')
const importInsertionPoint = appContent.lastIndexOf('// Blog Pages')
const beforeImports = appContent.substring(0, importInsertionPoint)
const afterImports = appContent.substring(importInsertionPoint)
const newImports = beforeImports + '\n// Missing Pages\n' + importStatements + '\n\n' + afterImports
const routeInsertionPoint = newImports.lastIndexOf('            {/* 404 Page */}')
const beforeRoutes = newImports.substring(0, routeInsertionPoint)
const afterRoutes = newImports.substring(routeInsertionPoint)
const newAppContent = beforeRoutes + '\n            {/* Missing Pages */}\n' + routeStatements + '\n            \n' + afterRoutes
fs.writeFileSync('/workspace/src/App.tsx', newAppContent)
if (process.env.NODE_ENV === 'development') {
  console.log(`✅ Added ${missingPages.length} missing routes to App.tsx`)
  console.log('All navigation links should now work properly!')
}