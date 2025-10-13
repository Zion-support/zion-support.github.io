import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get all page.tsx files
function getAllPages() {
  const appDir = '/workspace/app';
  const pages = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if this directory has a page.tsx file
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const relativePath = path.relative(appDir, fullPath);
          pages.push(relativePath);
        }
        // Recursively scan subdirectories
        scanDirectory(fullPath);
      }
    }
  }
  
  scanDirectory(appDir);
  return pages;
}

// Function to convert path to route name
function pathToRouteName(path) {
  return path.replace(/\//g, '-').replace(/\\/g, '-');
}

// Function to convert path to component name
function pathToComponentName(path) {
  const parts = path.split(/[/\\]/);
  const lastPart = parts[parts.length - 1];
  
  // Handle special cases for 5G routes
  if (lastPart.startsWith('5g-')) {
    const withoutPrefix = lastPart.substring(3); // Remove '5g-' prefix
    return 'FiveG' + withoutPrefix
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
  }
  
  let componentName = lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
  
  return componentName;
}

// Function to generate import statement
function generateImport(path, componentName) {
  const importPath = `./app/${path.replace(/\\/g, '/')}/page`;
  return `const ${componentName} = React.lazy(() => import("${importPath}"));`;
}

// Function to generate route statement
function generateRoute(path, componentName) {
  const routePath = path === '' ? '/' : `/${path}`;
  return `                        <Route path="${routePath}" element={<${componentName} />} />`;
}

// Main function
function generateRoutes() {
  const pages = getAllPages();
  console.log(`Found ${pages.length} pages`);
  
  // Sort pages for better organization
  const sortedPages = pages.sort();
  
  // Generate imports and routes
  const imports = [];
  const routes = [];
  
  for (const page of sortedPages) {
    const componentName = pathToComponentName(page);
    const routePath = page === '' ? '' : page;
    
    imports.push(generateImport(page, componentName));
    routes.push(generateRoute(routePath, componentName));
  }
  
  // Write to files
  fs.writeFileSync('/workspace/generated-imports.txt', imports.join('\n'));
  fs.writeFileSync('/workspace/generated-routes.txt', routes.join('\n'));
  
  console.log('Generated imports and routes files');
  console.log(`Total imports: ${imports.length}`);
  console.log(`Total routes: ${routes.length}`);
  
  // Also create a JSON file with all the data
  const routeData = {
    totalPages: pages.length,
    imports: imports,
    routes: routes,
    pages: sortedPages
  };
  
  fs.writeFileSync('/workspace/route-data.json', JSON.stringify(routeData, null, 2));
  console.log('Route data saved to route-data.json');
}

// Run the generator
generateRoutes();