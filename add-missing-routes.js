// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = lazy(() => import('.${route}/page'));`;
};

// Generate route statements;
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements;
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements;
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Find the position to insert the imports (after the existing imports)
const importInsertionPoint = appContent.lastIndexOf('// Blog Pages');
const beforeImports = appContent.substring(0, importInsertionPoint);
const afterImports = appContent.substring(importInsertionPoint);

// Insert the new imports;
const newImports = beforeImports + '\n// Missing Pages\n' + importStatements + '\n\n' + afterImports;

// Find the position to insert the routes (before the 404 route)
const routeInsertionPoint = newImports.lastIndexOf('            {/* 404 Page */}');
const beforeRoutes = newImports.substring(0, routeInsertionPoint);
const afterRoutes = newImports.substring(routeInsertionPoint);

// Insert the new routes;
const newAppContent = beforeRoutes + '\n            {/* Missing Pages */}\n' + routeStatements + '\n            \n' + afterRoutes;

// Write the updated App.tsx;
fs.writeFileSync('/workspace/src/App.tsx', newAppContent);

// console.log(`✅ Added ${missingPages.length} missing routes to App.tsx`);
// console.log('All navigation links should now work properly!');
