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
  return `            <Route path="/${route}" element={<${componentName} />} />`;
};

// Generate the new content
const importStatements = missingPages.map(generateImportStatement).join('\n');
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

console.log('Import statements:');
console.log(importStatements);
console.log('\nRoute statements:');
console.log(routeStatements);