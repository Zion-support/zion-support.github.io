import fs from 'fs';
import path from 'path';

// Read all routes from the file
const allRoutes = fs.readFileSync('/tmp/all_routes.txt', 'utf8').trim().split('\n');

// Generate lazy imports
const lazyImports = allRoutes.map(route => {
  const componentName = route.replace(/\//g, '').replace(/-/g, '');
  const componentNameCamel = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const importPath = route === '/' ? './page' : `.${route}/page`;
  return `const _${componentNameCamel}Page = lazy(() => import('${importPath}'));`;
}).join('\n');

// Generate route elements
const routeElements = allRoutes.map(route => {
  const componentName = route.replace(/\//g, '').replace(/-/g, '');
  const componentNameCamel = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  return `                        <Route path="${route}" element={<_${componentNameCamel}Page />} />`;
}).join('\n');

console.log('Lazy Imports:');
console.log(lazyImports);
console.log('\n\nRoute Elements:');
console.log(routeElements);