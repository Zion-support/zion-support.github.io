import fs from 'fs';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = React.lazy(() => import('.${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Find the position to insert imports (after existing imports)
const importInsertPosition = appContent.lastIndexOf('import ') + appContent.substring(appContent.lastIndexOf('import ')).indexOf('\n') + 1;

// Find the position to insert routes (inside Routes component)
const routesInsertPosition = appContent.indexOf('<Routes>') + 8;

// Insert imports
const newAppContent = appContent.substring(0, importInsertPosition) + 
  '\n' + importStatements + '\n' + 
  appContent.substring(importInsertPosition);

// Insert routes
const finalAppContent = newAppContent.substring(0, routesInsertPosition) + 
  '\n' + routeStatements + '\n' + 
  newAppContent.substring(routesInsertPosition);

// Write the updated App.tsx
fs.writeFileSync('/workspace/src/App.tsx', finalAppContent);

console.log('Routes added successfully!');