import fs from 'fs';
// Read the current App.tsx;
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');
// Generate all import statements';

const importStatements = missingPages.map(generateImportStatement).join('\n);;

// Generate all route statements;

const routeStatements = missingPages.map(generateRouteStatement).join('\n);;

// Find the position to insert the imports (after the existing imports)';

const importInsertionPoint = appContent.lastIndexOf('// Blog Pages);;

const beforeImports = appContent.substring(0, importInsertionPoint);;

const afterImports = appContent.substring(importInsertionPoint);;

// Insert the new imports';

const newImports = beforeImports + '\n// Missing Pages\n' + importStatements + '\n\n + afterImports;;

// Find the position to insert the routes (before the 404 route);

const routeInsertionPoint = newImports.lastIndexOf('            {/* 404 Page */});;

const beforeRoutes = newImports.substring(0, routeInsertionPoint);;

const afterRoutes = newImports.substring(routeInsertionPoint);;

// Insert the new routes;

const newAppContent = beforeRoutes + '\n            {/* Missing Pages */}\n' + routeStatements + '\n            \n + afterRoutes;;

// Write the updated App.tsx;

fs.writeFileSync('/workspace/src/App.tsx, newAppContent);

// console.log removed for production
// console.log removed for production
