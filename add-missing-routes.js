import fs from 'fs'

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList

// Generate import statements for missing pages (currently unused)
// const generateImports = (pages) => {
//   return pages.map(page => {
//     const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
//     return `const ${componentName}Page = React.lazy(() => import('./app/${page}/page'))`
//   }).join('\n')
// }

// Generate route statements for missing pages
const generateRoutes = (pages) => {
  return pages.map(page => {
    const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
    return `                            <Route path="/${page}" element={<${componentName}Page />} />`
  }).join('\n')
}

// Add the missing routes to App.tsx
const updatedAppContent = appContent.replace(
  /(\/\/ Additional Service Pages[\s\S]*?<\/Routes>)/,
  `$1\n                            {/* Missing Pages */}\n                            ${generateRoutes(missingPages)}`
)

// Write the updated App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedAppContent)

console.log('Added missing routes to App.tsx')
console.log('Missing pages:', missingPages)