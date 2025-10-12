import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/app/App.tsx', 'utf8');

// Generate import statements for all missing pages
const importStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `const ${componentName} = lazy(() => import('./${page}/page'));`;
}).join('\n');

// Generate route statements
const routeStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add import statements after the existing imports
const importInsertionPoint = appContent.indexOf('// AI Services');
if (importInsertionPoint !== -1) {
  appContent = appContent.replace(
    '// AI Services',
    `// AI Services\n${importStatements}`
  );
}

// Add route statements after the existing routes
const routeInsertionPoint = appContent.indexOf('                {/* AI Service Routes */}');
if (routeInsertionPoint !== -1) {
  appContent = appContent.replace(
    '                {/* AI Service Routes */}',
    `                {/* AI Service Routes */}\n${routeStatements}`
  );
}

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/app/App.tsx', appContent);

console.log('Successfully added missing routes to App.tsx');