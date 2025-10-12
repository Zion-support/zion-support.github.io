import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
imports = brokenLinks.map(page => {
  componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page'`;
}).join('\n');

// Generate route statements
routes = brokenLinks.map(page => {
  componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add imports after the last import
lastImportIndex = appContent.lastIndexOf('import');
lastImportLineEnd = appContent.indexOf('\n', lastImportIndex) + 1;
beforeImports = appContent.substring(0, lastImportLineEnd);
afterImports = appContent.substring(lastImportLineEnd);

newImports = beforeImports + '\n' + imports + '\n';

// Add routes before the 404 route
routeInsertionPoint = appContent.indexOf('{/* 404 Page */}');
beforeRoutes = appContent.substring(0, routeInsertionPoint);
afterRoutes = appContent.substring(routeInsertionPoint);

newRoutes = beforeRoutes + '\n                  {/* Auto-generated routes for existing pages */}\n' + routes + '\n\n                  ' + afterRoutes;

// Combine everything
newAppContent = newImports + afterImports.replace(appContent.substring(lastImportLineEnd, routeInsertionPoint), newRoutes.substring(lastImportLineEnd, routeInsertionPoint));

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', newAppContent);

console.log(`Added ${brokenLinks.length} routes to App.tsx`);
console.log('Routes added for:', brokenLinks.slice(0, 10).join(', '), '... and more');