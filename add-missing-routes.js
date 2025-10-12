import fs from 'fs';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/app/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const pageName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `const ${pageName} = lazy(() => import('./${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const pageName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${route}" element={<${pageName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  '// AI Services',
  `// AI Services\n${importStatements}`
).replace(
  '                {/* AI Service Routes */}',
  `                {/* AI Service Routes */}\n${routeStatements}`
);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/app/App.tsx', updatedContent);

console.log('Successfully added missing routes to App.tsx');