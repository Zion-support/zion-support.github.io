import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
const generateImportStatement = (page) => {
  const componentName = page.split('/').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page'`;
};

const newImports = brokenLinks.map(generateImportStatement).join('\n');

// Generate route statements
const generateRouteStatement = (page) => {
  const componentName = page.split('/').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
<<<<<<< HEAD
  return `<Route path="/${page}" element={<${componentName}   />} />`;
}).join('\n');
=======
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

const newRoutes = brokenLinks.map(generateRouteStatement).join('\n');

// Find insertion points
const importInsertionPoint = appContent.lastIndexOf('import FuturisticBackground');
const routeInsertionPoint = appContent.lastIndexOf('{/* 5G Solutions Routes */}');

<<<<<<< HEAD
// Add routes before the 404 route;
const routeInsertionPoint = appContent.indexOf('{/* 404 Page */}');
const beforeRoutes = appContent.substring(0, routeInsertionPoint);
const afterRoutes = appContent.substring(routeInsertionPoint);

const newRoutes = beforeRoutes + '\n                  {/* Auto-generated routes for existing pages */}\n' + routes + '\n\n                  ' + afterRoutes;

// Combine everything;
const newAppContent = newImports + afterImports.replace(appContent.substring(lastImportLineEnd, routeInsertionPoint), newRoutes.substring(lastImportLineEnd, routeInsertionPoint));

// Write the updated App.tsx;
fs.writeFileSync('/workspace/App.tsx', newAppContent);

console.log(`Added ${brokenLinks.length} routes to App.tsx`);
console.log('Routes added for: ', brokenLinks.slice(0, 10).join(', '), '... and more');
=======
if (importInsertionPoint !== -1 && routeInsertionPoint !== -1) {
  // Insert imports
  const beforeImports = appContent.substring(0, importInsertionPoint);
  const afterImports = appContent.substring(importInsertionPoint);
  const updatedImports = beforeImports + '\n' + newImports + '\n' + afterImports;
  
  // Insert routes
  const beforeRoutes = updatedImports.substring(0, routeInsertionPoint);
  const afterRoutes = updatedImports.substring(routeInsertionPoint);
  const finalContent = beforeRoutes + '\n' + newRoutes + '\n' + afterRoutes;
  
  // Write the updated App.tsx
  fs.writeFileSync('/workspace/App.tsx', finalContent);
  console.log('Successfully added missing routes to App.tsx');
} else {
  console.log('Could not find insertion points in App.tsx');
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
