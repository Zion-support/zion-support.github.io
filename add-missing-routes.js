import fs from 'fs';

// Read the current App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Read the missing pages from the analysis
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Generate import statements for missing pages
const generateImportStatement = (route) => {
  const componentName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
return `const ${componentName} = lazy(() => import('./${route}/page'));`;
};

// Generate route statements
const generateRouteStatement = (route) => {
  const componentName = route.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${route}" element={<${componentName} />} />`;
};

// Generate all import statements
const importStatements = missingPages.map(generateImportStatement).join('\n');

// Generate all route statements
const routeStatements = missingPages.map(generateRouteStatement).join('\n');

// Create the updated App.tsx content
const updatedContent = appContent.replace(
  '// Lazy load pages for better performance',
  `// Lazy load pages for better performance
${importStatements}`
).replace(
  '              </Routes>',
  `              ${routeStatements}
              </Routes>`
);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/src/App.tsx', updatedContent);

console.log('Successfully added missing routes to App.tsx');