import fs from 'fs',
// Read the App.tsx file,
const appPath = '/workspace/src/App.tsx',
let content = fs.readFileSync(appPath, 'utf8'),
// List of components that were commented out,
const missingComponents = [,
  'AdvancedAIConsciousness2026AdvancedRoboticsRevolution2026BiotechRevolution2026SpaceTechRevolution2026'
],
console.log(`Commenting out routes for ${missingComponents.length} missing components...`),
let fixedCount = 0,
for (const component of missingComponents) {,
  // Find and comment out routes that use this component,
  const routePattern = new RegExp(`<Route[^>]*element={<${component}[^>]*/>[^>]*/>`, 'g'),
  const matches = content.match(routePattern),
  if (matches) {,
    for (const match of matches) {,
      console.log(`→ Commenting out route for ${component}`),
      content = content.replace(match, `{/* ${match} */} {/* Component not found */}`),
      fixedCount++,
    }
  }
}
,
// Write the fixed content back,
fs.writeFileSync(appPath, content),
console.log(`\nCommented out ${fixedCount} routes for missing components.`),
}