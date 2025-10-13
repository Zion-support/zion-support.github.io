#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the existing App.tsx
const appTsxPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Read the missing routes
const missingRoutes = fs.readFileSync('/workspace/missing_routes.txt', 'utf8').trim().split('\n');

console.log(`Found ${missingRoutes.length} missing routes to add`);

// Generate lazy imports for missing routes
const lazyImports = [];
const routeElements = [];

missingRoutes.forEach((route, index) => {
  // Handle routes that start with numbers by prefixing with 'Page'
  let componentName;
  if (/^\d/.test(route)) {
    componentName = 'Page' + route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
  } else {
    componentName = route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
  }
  
  const importPath = `./app/${route}/page`;
  
  // Add lazy import
  lazyImports.push(`const ${componentName} = React.lazy(() => import("${importPath}"));`);
  
  // Add route element
  routeElements.push(`                  <Route path="/${route}" element={<${componentName} />} />`);
});

// Find the position to insert lazy imports (after the existing lazy imports)
const existingLazyImportsEnd = appContent.lastIndexOf('const SitemapPage = React.lazy(() => import("./app/sitemap/page"));');
const insertPosition = existingLazyImportsEnd + appContent.substring(existingLazyImportsEnd).indexOf(';') + 1;

// Insert new lazy imports
const newLazyImports = '\n\n// Additional AI Service Pages\n' + lazyImports.join('\n');
appContent = appContent.slice(0, insertPosition) + newLazyImports + appContent.slice(insertPosition);

// Find the position to insert route elements (before the closing </Routes>)
const routesEndPosition = appContent.lastIndexOf('                  </Routes>');
const insertRoutesPosition = routesEndPosition;

// Insert new route elements
const newRouteElements = '\n                  ' + routeElements.join('\n') + '\n';
appContent = appContent.slice(0, insertRoutesPosition) + newRouteElements + appContent.slice(insertRoutesPosition);

// Write the updated App.tsx
fs.writeFileSync(appTsxPath, appContent);

console.log('Successfully added all missing routes to App.tsx');
console.log(`Added ${lazyImports.length} lazy imports`);
console.log(`Added ${routeElements.length} route elements`);

// Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  totalMissingRoutes: missingRoutes.length,
  addedLazyImports: lazyImports.length,
  addedRouteElements: routeElements.length,
  routes: missingRoutes
};

fs.writeFileSync('/workspace/route-addition-report.json', JSON.stringify(report, null, 2));
console.log('Route addition report saved to route-addition-report.json');