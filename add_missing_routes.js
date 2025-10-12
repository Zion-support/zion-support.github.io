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
  return `import ${componentName} from './app/${page}/page'`;
}).join('\n');

// Generate route statements
const routeStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add import statements after existing imports
const importInsertionPoint = appContent.indexOf('// Lazy load pages for better performance');
if (importInsertionPoint !== -1) {
  appContent = appContent.slice(0, importInsertionPoint) + 
    importStatements + '\n\n' + 
    appContent.slice(importInsertionPoint);
}

// Add route statements after existing routes
const routeInsertionPoint = appContent.indexOf('                {/* AI Service Routes */}');
if (routeInsertionPoint !== -1) {
  appContent = appContent.slice(0, routeInsertionPoint) + 
    '                {/* AI Service Routes */}\n' + 
    routeStatements + '\n' + 
    appContent.slice(routeInsertionPoint + '                {/* AI Service Routes */}'.length);
}

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/App.tsx', appContent);

console.log('Missing routes added successfully!');