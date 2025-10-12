import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
const importStatements = brokenLinks.map(page => {
  const componentName = page.split('/').pop().split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page'`;
}).join('\n');

// Generate route statements
const routeStatements = brokenLinks.map(page => {
  const componentName = page.split('/').pop().split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `            <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Find the position to insert imports (after existing imports)
const lastImportIndex = appContent.lastIndexOf('import ');
const importInsertPosition = lastImportIndex + appContent.substring(lastImportIndex).indexOf('\n') + 1;

// Find the position to insert routes (inside Routes component)
const routesStartIndex = appContent.indexOf('<Routes>');
const routesInsertPosition = routesStartIndex + 8;

// Insert imports
const newAppContent = appContent.substring(0, importInsertPosition) + 
  '\n' + importStatements + '\n' + 
  appContent.substring(importInsertPosition);

// Insert routes
const finalAppContent = newAppContent.substring(0, routesInsertPosition) + 
  '\n' + routeStatements + '\n' + 
  newAppContent.substring(routesInsertPosition);

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', finalAppContent);

console.log('Routes added successfully!');