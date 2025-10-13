import fs from 'fs';
import path from 'path';

// Read the analysis file
const analysis = JSON.parse(fs.readFileSync('/workspace/missing-routes-analysis.json', 'utf8'));

// Read the current App.tsx file
const appTsxPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Generate component names for routes
const generateComponentName = (route) => {
  let componentName = route.split('/').map(part => 
    part.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('')
  ).join('');
  
  // Handle routes starting with numbers
  if (/^\d/.test(componentName)) {
    componentName = 'FiveG' + componentName.substring(1);
  }
  
  return componentName + 'Page';
};

// Generate lazy imports for a category
const generateLazyImports = (routes, category) => {
  if (routes.length === 0) return '';
  
  let result = `\n// ${category} Routes\n`;
  routes.forEach(route => {
    const componentName = generateComponentName(route);
    result += `const ${componentName} = React.lazy(() => import("./app/${route}/page"));\n`;
  });
  
  return result;
};

// Generate route elements for a category
const generateRouteElements = (routes) => {
  if (routes.length === 0) return '';
  
  let result = '';
  routes.forEach(route => {
    const componentName = generateComponentName(route);
    result += `                  <Route path="/${route}" element={<${componentName} />} />\n`;
  });
  
  return result;
};

// Generate all lazy imports
const allLazyImports = 
  generateLazyImports(analysis.categorized.aiServices, 'AI Service') +
  generateLazyImports(analysis.categorized.microSaas, 'Micro SAAS') +
  generateLazyImports(analysis.categorized.itServices, 'IT Service') +
  generateLazyImports(analysis.categorized.fiveGServices, '5G Service') +
  generateLazyImports(analysis.categorized.otherPages, 'Other');

// Generate all route elements
const allRouteElements = 
  generateRouteElements(analysis.categorized.aiServices) +
  generateRouteElements(analysis.categorized.microSaas) +
  generateRouteElements(analysis.categorized.itServices) +
  generateRouteElements(analysis.categorized.fiveGServices) +
  generateRouteElements(analysis.categorized.otherPages);

// Find the position to insert lazy imports (after the existing lazy imports)
const lazyImportEndPattern = /const SitemapPage = React\.lazy\(\(\) => import\("\.\/app\/sitemap\/page"\)\);/;
const lazyImportEndMatch = appContent.match(lazyImportEndPattern);

if (lazyImportEndMatch) {
  const insertPosition = lazyImportEndMatch.index + lazyImportEndMatch[0].length;
  appContent = appContent.slice(0, insertPosition) + allLazyImports + appContent.slice(insertPosition);
}

// Find the position to insert route elements (before the closing </Routes> tag)
const routesEndPattern = /<\/Routes>/;
const routesEndMatch = appContent.match(routesEndPattern);

if (routesEndMatch) {
  const insertPosition = routesEndMatch.index;
  appContent = appContent.slice(0, insertPosition) + allRouteElements + appContent.slice(insertPosition);
}

// Write the updated App.tsx file
fs.writeFileSync(appTsxPath, appContent);

