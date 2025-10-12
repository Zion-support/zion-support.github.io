import fs from 'fs';
import path from 'path';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');
// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const componentName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `const ${componentName} = React.lazy(() => import('./app/${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
return `                <Route path="/${route}" element={<${componentName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Find the position to insert imports (after existing imports)
const importInsertPosition = appContent.lastIndexOf('// AI Service Pages');

// Find the position to insert routes (after existing routes)
const routeInsertPosition = appContent.lastIndexOf('                {/* AI Service Routes */}');

// Insert the new imports
const newAppContent = appContent.slice(0, importInsertPosition) + 
  '\n' + importStatements + '\n' + 
  appContent.slice(importInsertPosition);

// Insert the new routes
const finalAppContent = newAppContent.slice(0, routeInsertPosition) + 
  '\n' + routeStatements + '\n' + 
  newAppContent.slice(routeInsertPosition);

// Write the updated App.tsx
fs.writeFileSync('/workspace/src/App.tsx', finalAppContent);

console.log('Successfully added missing routes to App.tsx');
console.log('Added imports:', importStatements.split('\n').length);
console.log('Added routes:', routeStatements.split('\n').length);
