import fs from 'fs';
import path from 'path';

// Define the missing pages
const missingPages = [
  '/ai-automation-platform',
  '/ai-mobile-builder',
  '/ai-services',
  '/blog',
  '/case-studies',
  '/cloud-infrastructure',
  '/contact',
  '/demo',
  '/landing-page-builder',
  '/5g-solutions'
];

const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = lazy(() => import('.${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Read the current App.tsx content
const appFilePath = path.join(process.cwd(), 'App.tsx');
let appContent = '';

try {
  appContent = fs.readFileSync(appFilePath, 'utf8');
} catch (error) {
  console.error('Error reading App.tsx:', error);
  process.exit(1);
}

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Find the position to insert the imports (after the existing imports)
const importInsertionPoint = appContent.lastIndexOf('// Blog Pages');
const beforeImports = appContent.substring(0, importInsertionPoint);
const afterImports = appContent.substring(importInsertionPoint);

// Insert the new imports
const newImports = beforeImports + '\n// Missing Pages\n' + importStatements + '\n\n' + afterImports;

// Find the position to insert the routes (in the Routes component)
const routesInsertionPoint = newImports.lastIndexOf('</Routes>');
const beforeRoutes = newImports.substring(0, routesInsertionPoint);
const afterRoutes = newImports.substring(routesInsertionPoint);

// Insert the new routes
const finalContent = beforeRoutes + '\n' + routeStatements + '\n          ' + afterRoutes;

// Write the updated content back to App.tsx
try {

  fs.writeFileSync(appFilePath, finalContent);
  console.log('Successfully added missing routes to App.tsx');

} catch (error) {
  console.error('Error writing to App.tsx:', error);
  process.exit(1);
}