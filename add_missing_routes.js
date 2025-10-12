import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
const imports = brokenLinks.map(page => {
  const componentName = page.split('/').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `const ${componentName} = React.lazy(() => import('./app/${page}/page'));`;
}).join('\n');

// Generate route statements
const routes = brokenLinks.map(page => {
  const componentName = page.split('/').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add imports after the last import
const lastImportIndex = appContent.lastIndexOf('import');
const lastImportLineEnd = appContent.indexOf('\n', lastImportIndex) + 1;
const beforeImports = appContent.substring(0, lastImportLineEnd);
const afterImports = appContent.substring(lastImportLineEnd);

const newImports = beforeImports + '\n' + imports + '\n';

// Add routes before the 404 route
const routeInsertionPoint = appContent.indexOf('{/* 5G Solutions Routes */}');
const beforeRoutes = appContent.substring(0, routeInsertionPoint);
const afterRoutes = appContent.substring(routeInsertionPoint);

const newRoutes = beforeRoutes + '\n                {/* Auto-generated routes for existing pages */}\n' + routes + '\n\n                ' + afterRoutes;

// Combine everything
const newAppContent = newImports + afterImports.replace(appContent.substring(lastImportLineEnd, routeInsertionPoint), newRoutes.substring(lastImportLineEnd, routeInsertionPoint));

// Write the updated App.tsx
fs.writeFileSync('/workspace/App.tsx', newAppContent);

console.log(`Added ${brokenLinks.length} routes to App.tsx`);
console.log('Routes added for:', brokenLinks.slice(0, 10).join(', '), '... and more');