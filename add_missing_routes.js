import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
const importStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page';`;
}).join('\n');

// Generate route statements
const routeStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add import statements after existing imports
const importInsertionPoint = appContent.lastIndexOf('import');
const lastImportLine = appContent.indexOf('\n', importInsertionPoint);
appContent = appContent.slice(0, lastImportLine + 1) + 
            importStatements + '\n' + 
            appContent.slice(lastImportLine + 1);

// Add route statements before closing Routes tag
const routesEndIndex = appContent.lastIndexOf('</Routes>');
appContent = appContent.slice(0, routesEndIndex) + 
            routeStatements + '\n' + 
            appContent.slice(routesEndIndex);

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', appContent);

console.log('Successfully added missing routes to App.tsx');
console.log(`Added ${brokenLinks.length} routes`);