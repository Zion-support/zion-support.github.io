import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// __filename = fileURLToPath(import.meta.url);
// __dirname = path.dirname(__filename);

// Read the current App.tsx;
appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Read the missing pages from the analysis;
analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages;
generateImportStatement = (route) => {
  componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = lazy(() => import('.${route}/page'));`;
};

// Generate route statements;
generateRouteStatement = (route) => {
  componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements;
importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements;
routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Find the position to insert the imports (after the existing imports)
importInsertionPoint = appContent.lastIndexOf('// Blog Pages');
beforeImports = appContent.substring(0, importInsertionPoint);
afterImports = appContent.substring(importInsertionPoint);

// Insert the new imports;
newImports = beforeImports + '\n// Missing Pages\n' + importStatements + '\n\n' + afterImports;

// Find the position to insert the routes (before the 404 route)
routeInsertionPoint = newImports.lastIndexOf('            {/* 404 Page */}');
beforeRoutes = newImports.substring(0, routeInsertionPoint);
afterRoutes = newImports.substring(routeInsertionPoint);

// Insert the new routes;
newAppContent = beforeRoutes + '\n            {/* Missing Pages */}\n' + routeStatements + '\n            \n' + afterRoutes;

// Write the updated App.tsx;
fs.writeFileSync('/workspace/src/App.tsx', newAppContent);

// Log success for debugging in development
console.log(`✅ Added ${missingPages.length} missing routes to App.tsx`);
console.log('All navigation links should now work properly!');
