import fs from 'fs';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const pageName = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${pageName} = React.lazy(() => import('./${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const pageName = route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `                <Route path="/${route}" element={<${pageName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  '// AI Service Pages - Only include the ones that are actually used in routes',
  `// AI Service Pages - Only include the ones that are actually used in routes\n${importStatements}`
).replace(
  '                {/* AI Service Routes - Currently disabled due to page errors */}',
  `                {/* AI Service Routes - Currently disabled due to page errors */}\n${routeStatements}`
);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/App.tsx', updatedContent);

console.log('Routes added successfully!');