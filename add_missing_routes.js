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
const importInsertionPoint = appContent.indexOf('// AI Service Pages - Only include the ones that are actually used in routes');
if (importInsertionPoint !== -1) {
  appContent = appContent.slice(0, importInsertionPoint) + 
    importStatements + '\n\n' + 
    appContent.slice(importInsertionPoint);
}

// Add route statements in the Routes section
const routeInsertionPoint = appContent.indexOf('                {/* AI Service Routes - Currently disabled due to page errors */}');
if (routeInsertionPoint !== -1) {
  const nextLineIndex = appContent.indexOf('\n', routeInsertionPoint);
  appContent = appContent.slice(0, nextLineIndex) + 
    '\n' + routeStatements + 
    appContent.slice(nextLineIndex);
}

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', appContent);

console.log('Missing routes added successfully!');
console.log(`Added ${brokenLinks.length} routes`);