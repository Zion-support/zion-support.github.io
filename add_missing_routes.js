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
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
};

const newRoutes = brokenLinks.map(generateRouteStatement).join('\n');

// Find insertion points
const importInsertionPoint = appContent.lastIndexOf('import FuturisticBackground');
const routeInsertionPoint = appContent.lastIndexOf('{/* 5G Solutions Routes */}');

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