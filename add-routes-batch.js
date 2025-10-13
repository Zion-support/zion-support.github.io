#!/usr/bin/env node

import fs from 'fs';

// Read the existing App.tsx
const appTsxPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Read the missing routes
const missingRoutes = fs.readFileSync('/workspace/missing_routes.txt', 'utf8').trim().split('\n');

console.log(`Found ${missingRoutes.length} missing routes to add`);

// Get existing routes to avoid duplicates
const existingRoutes = new Set();
const routeRegex = /path="([^"]+)"/g;
let match;
while ((match = routeRegex.exec(appContent)) !== null) {
  existingRoutes.add(match[1]);
}

// Filter out existing routes
const newRoutes = missingRoutes.filter(route => !existingRoutes.has(`/${route}`));
console.log(`Adding ${newRoutes.length} new routes`);

// Generate component names and routes
const components = [];
const routes = [];

newRoutes.forEach((route) => {
  // Generate valid component name
  let componentName;
  if (/^\d/.test(route)) {
    componentName = 'Page' + route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  } else {
    componentName = route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  }

  // Handle special characters
  componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');

  const importPath = `./app/${route}/page`;
  
  components.push({
    name: componentName,
    path: importPath
  });
  
  routes.push({
    path: `/${route}`,
    component: componentName
  });
});

// Add lazy imports after the last existing lazy import
const lastLazyImport = appContent.lastIndexOf('const SitemapPage = React.lazy(() => import("./app/sitemap/page"));');
const insertImportsPosition = lastLazyImport + appContent.substring(lastLazyImport).indexOf(';') + 1;

const newLazyImports = '\n\n// Additional Pages\n' + 
  components.map(comp => `const ${comp.name} = React.lazy(() => import("${comp.path}"));`).join('\n');

appContent = appContent.slice(0, insertImportsPosition) + newLazyImports + appContent.slice(insertImportsPosition);

// Add routes before the closing </Routes> tag
const routesEnd = appContent.lastIndexOf('                  </Routes>');
const newRouteElements = '\n                  ' + 
  routes.map(route => `<Route path="${route.path}" element={<${route.component} />} />`).join('\n') + '\n';

appContent = appContent.slice(0, routesEnd) + newRouteElements + appContent.slice(routesEnd);

// Write the updated App.tsx
fs.writeFileSync(appTsxPath, appContent);

console.log('Successfully added all missing routes to App.tsx');
console.log(`Added ${components.length} lazy imports`);
console.log(`Added ${routes.length} route elements`);

// Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  totalMissingRoutes: missingRoutes.length,
  addedComponents: components.length,
  addedRoutes: routes.length,
  components: components,
  routes: routes
};

fs.writeFileSync('/workspace/route-addition-final.json', JSON.stringify(report, null, 2));
console.log('Route addition report saved to route-addition-final.json');