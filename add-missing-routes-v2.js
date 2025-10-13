#!/usr/bin/env node

import fs from 'fs';

// Read the existing App.tsx
const appTsxPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Read the missing routes
const missingRoutes = fs.readFileSync('/workspace/missing_routes.txt', 'utf8').trim().split('\n');

// Get existing component names to avoid duplicates
const existingComponents = new Set();
const existingRoutes = new Set();

// Extract existing component names and routes from App.tsx
const componentRegex = /const\s+(\w+)\s*=\s*React\.lazy/g;
const routeRegex = /path="([^"]+)"/g;

let match;
while ((match = componentRegex.exec(appContent)) !== null) {
  existingComponents.add(match[1]);
}

while ((match = routeRegex.exec(appContent)) !== null) {
  existingRoutes.add(match[1]);
}

console.log(`Found ${existingComponents.size} existing components`);
console.log(`Found ${existingRoutes.size} existing routes`);

// Generate valid component names and routes
const newComponents = [];
const newRoutes = [];

missingRoutes.forEach((route) => {
  // Skip if route already exists
  if (existingRoutes.has(`/${route}`)) {
    return;
  }

  // Generate valid component name
  let componentName;
  if (/^\d/.test(route)) {
    // Routes starting with numbers
    componentName = 'Page' + route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  } else {
    componentName = route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  }

  // Handle special characters and ensure uniqueness
  componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');
  
  // Ensure uniqueness
  let finalComponentName = componentName;
  let counter = 1;
  while (existingComponents.has(finalComponentName) || newComponents.some(c => c.name === finalComponentName)) {
    finalComponentName = `${componentName}${counter}`;
    counter++;
  }

  const importPath = `./app/${route}/page`;
  
  newComponents.push({
    name: finalComponentName,
    path: importPath
  });
  
  newRoutes.push({
    path: `/${route}`,
    component: finalComponentName
  });
});

console.log(`Generated ${newComponents.length} new components`);
console.log(`Generated ${newRoutes.length} new routes`);

// Find insertion points
const lazyImportsEnd = appContent.lastIndexOf('const SitemapPage = React.lazy(() => import("./app/sitemap/page"));');
const insertImportsPosition = lazyImportsEnd + appContent.substring(lazyImportsEnd).indexOf(';') + 1;

const routesEnd = appContent.lastIndexOf('                  </Routes>');
const insertRoutesPosition = routesEnd;

// Generate new content
const newLazyImports = '\n\n// Additional Pages\n' + 
  newComponents.map(comp => `const ${comp.name} = React.lazy(() => import("${comp.path}"));`).join('\n');

const newRouteElements = '\n                  ' + 
  newRoutes.map(route => `<Route path="${route.path}" element={<${route.component} />} />`).join('\n') + '\n';

// Insert new content
appContent = appContent.slice(0, insertImportsPosition) + newLazyImports + appContent.slice(insertImportsPosition);
appContent = appContent.slice(0, insertRoutesPosition) + newRouteElements + appContent.slice(insertRoutesPosition);

// Write the updated App.tsx
fs.writeFileSync(appTsxPath, appContent);

console.log('Successfully added all missing routes to App.tsx');

// Create a summary report
const report = {
  timestamp: new Date().toISOString(),
  totalMissingRoutes: missingRoutes.length,
  addedComponents: newComponents.length,
  addedRoutes: newRoutes.length,
  components: newComponents,
  routes: newRoutes
};

fs.writeFileSync('/workspace/route-addition-report-v2.json', JSON.stringify(report, null, 2));
console.log('Route addition report saved to route-addition-report-v2.json');