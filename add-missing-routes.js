import fs from 'fs';
// import path from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = React.lazy(() => import('./app${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Create the updated App.tsx content
const updatedContent = appContent
  .replace('// Lazy load pages for better performance', `// Lazy load pages for better performance\n${importStatements}`)
  .replace('{/* AI Service Routes */}', `{/* AI Service Routes */}\n${routeStatements}`);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent);

console.log('Successfully added missing routes to App.tsx');
console.log(`Added ${missingPages.length} routes`);
