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

console.log('Import statements:');
console.log(importStatements);
console.log('\nRoute statements:');
console.log(routeStatements);