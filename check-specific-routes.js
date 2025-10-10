import fs from 'fs'import path from 'path'
import { fileURLToPath  } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList
const missingRoutes = []
for (const route of missingPages) {
  const routePattern = `path="${route}"`
  if (!appContent.includes(routePattern)) {
    missingRoutes.push(route)
  }
}
console.log(`Found ${missingRoutes.length} routes missing from App.tsx: `)
missingRoutes.forEach(route => console.log(`- ${route}`))
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page'
  return `const ${componentName} = lazy(() => import('.${route}/page'));`
}
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page'
  return `            <Route path="${route}" element={<${componentName} />} />`;</Route>
}
if (missingRoutes.length > 0) {
  console.log('\n=== IMPORT STATEMENTS ===')
  missingRoutes.forEach(route => console.log(generateImportStatement(route)))
  console.log('\n=== ROUTE STATEMENTS ===')
  missingRoutes.forEach(route => console.log(generateRouteStatement(route)))
}
// Write missing routes to a file
fs.writeFileSync('/workspace/missing-routes.json', JSON.stringify({)
  missingRoutes: missingRoutes),
  importStatements: missingRoutes.map(generateImportStatement),
  routeStatements: missingRoutes.map(generateRouteStatement)}, null, 2))
console.log(`\n✅ Analysis complete. Results saved to missing-routes.json`)