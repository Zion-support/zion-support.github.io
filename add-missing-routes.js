import fs from 'fs';
import path from 'path';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const componentName = route.split('-').map(l => l.charAt(0).toUpperCase() + l.slice(1)).join('') + 'Page';
  return `const ${componentName} = React.lazy(() => import('./app${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('-').map(l => l.charAt(0).toUpperCase() + l.slice(1)).join('') + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  '// Lazy load pages for better performance',
  `// Lazy load pages for better performance\n${importStatements}`
).replace(
  '                {/* AI Service Routes */}',
  `                {/* AI Service Routes */}\n${routeStatements}`
);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/App.tsx', updatedContent);

console.log('Routes added successfully!');