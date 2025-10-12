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
  return `const ${componentName} = React.lazy(() => import('./app/${page}/page'));`;
}).join('\n');

// Generate route statements
const routeStatements = brokenLinks.map(page => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

<<<<<<< HEAD
console.log('Import statements:');
console.log(importStatements);
console.log('\nRoute statements:');
console.log(routeStatements);
=======
// Find the position to insert imports (after existing imports)
const importInsertPosition = appContent.lastIndexOf('import FuturisticBackground from');

// Find the position to insert routes (after existing routes)
const routeInsertPosition = appContent.lastIndexOf('                {/* 5G Solutions Routes */}');

// Insert the new imports
appContent = appContent.slice(0, importInsertPosition) + 
  '\n' + importStatements + '\n' + 
  appContent.slice(importInsertPosition);

// Insert the new routes
appContent = appContent.slice(0, routeInsertPosition) + 
  '\n' + routeStatements + '\n' + 
  appContent.slice(routeInsertPosition);

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', appContent);

console.log('Successfully added missing routes to App.tsx');
console.log('Added imports:', importStatements.split('\n').length);
console.log('Added routes:', routeStatements.split('\n').length);
>>>>>>> cursor/fix-errors-and-merge-to-main-9874
