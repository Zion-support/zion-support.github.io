import fs from 'fs';
import path from 'path';

// This script is used to add missing routes to the application
// It reads from a navigation analysis file and generates the necessary route imports

const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const pageName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  return `const ${pageName} = React.lazy(() => import('./app/${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const pageName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  return `<Route path="/${route}" element={<${pageName} />} />`;
};

// Generate all imports
const imports = missingPages.map(generateImportStatement).join('\n');

// Generate all routes
const routes = missingPages.map(generateRouteStatement).join('\n');

console.log('Generated imports:');
console.log(imports);
console.log('\nGenerated routes:');
console.log(routes);