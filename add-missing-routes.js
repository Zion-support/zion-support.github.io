import fs from 'fs';
import path from 'path';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;


const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/(^|_)([a-z])/g, (match, p1, p2) => p2.toUpperCase()) + 'Page';
  return `const ${componentName} = React.lazy(() => import('.${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  return `            <Route path="${route}" element={<${componentName} />} />`;

// Generate the new App.tsx content
const newImports = missingPages.map(generateImportStatement).join('\n');
const newRoutes = missingPages.map(generateRouteStatement).join('\n');

// Find the insertion points in the existing App.tsx
const importInsertionPoint = appContent.lastIndexOf('// 5G Solutions Pages');
const routeInsertionPoint = appContent.lastIndexOf('{/* 5G Solutions Routes */}');

if (importInsertionPoint !== -1 && routeInsertionPoint !== -1) {
  const beforeImports = appContent.substring(0, importInsertionPoint);
  const afterImports = appContent.substring(importInsertionPoint);
  const beforeRoutes = appContent.substring(0, routeInsertionPoint);
  const afterRoutes = appContent.substring(routeInsertionPoint);
  
  const newAppContent = beforeImports + '\n' + newImports + '\n' + afterImports;
  const finalAppContent = beforeRoutes + '\n' + newRoutes + '\n' + afterRoutes;
  
  // Write the updated App.tsx
  fs.writeFileSync('/workspace/App.tsx', finalAppContent);
  console.log('Successfully added missing routes to App.tsx');
} else {
  console.log('Could not find insertion points in App.tsx');
}