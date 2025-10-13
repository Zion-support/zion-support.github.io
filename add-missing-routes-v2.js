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
  
  // Handle invalid characters in component names
  componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');
  
  // Ensure it starts with a letter
  if (!/^[a-zA-Z]/.test(componentName)) {
    componentName = 'Page' + componentName;
  }
  
  return componentName + 'Page';
};

// Get existing component names from App.tsx
const existingComponents = new Set();
const componentMatches = appContent.match(/const \w+Page = React\.lazy/g) || [];
componentMatches.forEach(match => {
  const componentName = match.match(/const (\w+Page)/)[1];
  existingComponents.add(componentName);
});

// Filter out routes that would create duplicate component names
const uniqueRoutes = [];
const usedComponentNames = new Set(existingComponents);

analysis.missingRoutesList.forEach(route => {
  const componentName = generateComponentName(route);
  if (!usedComponentNames.has(componentName)) {
    uniqueRoutes.push(route);
    usedComponentNames.add(componentName);
  }
});

// Categorize unique routes
const aiServices = uniqueRoutes.filter(route => route.startsWith('ai-'));
const microSaas = uniqueRoutes.filter(route => route.startsWith('micro-saas') || route.startsWith('zion-'));
const itServices = uniqueRoutes.filter(route => 
  route.includes('cloud') || 
  route.includes('cybersecurity') || 
  route.includes('web-development') || 
  route.includes('mobile-development') || 
  route.includes('database') || 
  route.includes('network') || 
  route.includes('blockchain') ||
  route.includes('data-') ||
  route.includes('iot') ||
  route.includes('devops') ||
  route.includes('security') ||
  route.includes('infrastructure') ||
  route.includes('automation') ||
  route.includes('integration') ||
  route.includes('performance') ||
  route.includes('compliance') ||
  route.includes('disaster-recovery') ||
  route.includes('machine-learning-ops') ||
  route.includes('enterprise-integration') ||
  route.includes('workflow-automation') ||
  route.includes('cloud-native') ||
  route.includes('cloud-migration') ||
  route.includes('cloud-cost-optimization') ||
  route.includes('security-automation') ||
  route.includes('data-visualization')
);
const fiveGServices = uniqueRoutes.filter(route => route.startsWith('5g-'));
const otherPages = uniqueRoutes.filter(route => 
  !aiServices.includes(route) && 
  !microSaas.includes(route) && 
  !itServices.includes(route) && 
  !fiveGServices.includes(route)
);

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
  generateLazyImports(aiServices, 'AI Service') +
  generateLazyImports(microSaas, 'Micro SAAS') +
  generateLazyImports(itServices, 'IT Service') +
  generateLazyImports(fiveGServices, '5G Service') +
  generateLazyImports(otherPages, 'Other');

// Generate all route elements
const allRouteElements = 
  generateRouteElements(aiServices) +
  generateRouteElements(microSaas) +
  generateRouteElements(itServices) +
  generateRouteElements(fiveGServices) +
  generateRouteElements(otherPages);

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

