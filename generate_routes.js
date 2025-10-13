import fs from 'fs';
import path from 'path';

// Read all page files
const appDir = '/workspace/app';
const routes = [];

function findPageFiles(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findPageFiles(fullPath, basePath ? `${basePath}/${item}` : item);
    } else if (item === 'page.tsx') {
      const routePath = basePath || '/';
      routes.push(routePath);
    }
  }
}

findPageFiles(appDir);

// Generate route components
const routeComponents = routes.map(route => {
  const componentName = route === '/' ? 'HomePage' : 
    route.split('/').map(part => 
      part.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('')
    ).join('') + 'Page';
  
  return {
    path: route,
    componentName,
    importPath: `./app${route === '/' ? '/page' : route + '/page'}`
  };
});

// Generate the routes JSX
const routesJSX = routeComponents.map(route => 
  `                        <Route path="${route.path}" element={<${route.componentName} />} />`
).join('\n');

console.log('Generated routes:');
console.log(routesJSX);

// Write to file
fs.writeFileSync('/tmp/generated_routes.txt', routesJSX);
console.log(`\nGenerated ${routeComponents.length} routes and saved to /tmp/generated_routes.txt`);