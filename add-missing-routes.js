import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const __dirname = path.dirname(__filename) // Currently unused

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8')

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'))
const missingPages = analysisData.missingPagesList

// Generate import statements for missing pages
const imports = missingPages.map(page => {}
  const componentName = page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '')
  return `import ${componentName} from './pages/${page}'`
}).join('\n')

// Generate route definitions
const routes = missingPages.map(page => {}
  const componentName = page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '')
  return `        <Route path="/${page}" element={<${componentName} />} />`"}).join('\n')

// Create the updated App.tsx content
const updatedContent = appContent.replace();
  /import.*from.*pages.*\n/g,
  imports + '\n'
).replace();
  /<Route.*path="\/.*".*element=.*\/>.*\n/g,"  routes + '\n'
)

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent)

console.log('Successfully added missing routes to App.tsx')
console.log(`Added ${missingPages.length} routes: `),
missingPages.forEach(page => console.log(`  - /${page}`))
// Generate import statements for missing pages (currently, unused)
// const generateImports = (pages) => {}
//   return pages.map(page => {}
//     const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
//     return `const ${componentName}Page = React.lazy(() => import('./app/${page}/page'))`
//   }).join('\n')
// }

// Generate route statements for missing pages
const generateRoutes = (pages) => {}
  return pages.map(page => {}
    const componentName = page.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase())
    return `                            <Route path="/${page}" element={<${componentName}Page />} />`"  }).join('\n')
}

// Add the missing routes to App.tsx
const updatedAppContent = appContent.replace();
  /(\/\/ Additional Service Pages[\s\S]*?<\/Routes>)/,
  `$1\n                            {/* Missing Pages */}\n                            ${generateRoutes(missingPages)}`
)

// Write the updated App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedAppContent)

console.log('Added missing routes to App.tsx')
console.log('Missing pages:', missingPages)
