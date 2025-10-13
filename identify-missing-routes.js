import fs from 'fs';
import path from 'path';

// Read the current App.tsx file
const appTsxPath = '/workspace/App.tsx';
const appContent = fs.readFileSync(appTsxPath, 'utf8');

// Get all existing pages
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const relativePath = path.relative(appDir, fullPath);
        pages.push(relativePath);
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Extract existing routes from App.tsx
const routeMatches = appContent.match(/path="([^"]+)"/g) || [];
const existingRoutes = routeMatches.map(match => match.replace('path="', '').replace('"', ''));

// Find missing routes
const missingRoutes = pages.filter(page => !existingRoutes.includes(`/${page}`));

console.log('Total pages found:', pages.length);
console.log('Existing routes:', existingRoutes.length);
console.log('Missing routes:', missingRoutes.length);

console.log('\nMissing routes:');
missingRoutes.forEach(route => console.log(`  /${route}`));

// Categorize missing routes
const aiServices = missingRoutes.filter(route => route.startsWith('ai-'));
const microSaas = missingRoutes.filter(route => route.startsWith('micro-saas') || route.startsWith('zion-'));
const itServices = missingRoutes.filter(route => 
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
const fiveGServices = missingRoutes.filter(route => route.startsWith('5g-'));
const otherPages = missingRoutes.filter(route => 
  !aiServices.includes(route) && 
  !microSaas.includes(route) && 
  !itServices.includes(route) && 
  !fiveGServices.includes(route)
);

console.log('\nCategorized missing routes:');
console.log('\nAI Services:', aiServices.length);
console.log('Micro SAAS:', microSaas.length);
console.log('IT Services:', itServices.length);
console.log('5G Services:', fiveGServices.length);
console.log('Other Pages:', otherPages.length);

// Generate route additions
const generateRouteAddition = (routes, category) => {
  if (routes.length === 0) return '';

  let result = `\n  // ${category} Routes\n`;
  routes.forEach(route => {
    const componentName = route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';

    result += `  const ${componentName} = React.lazy(() => import("./app/${route}/page"));\n`;
  });

  return result;
};

const generateRouteElements = (routes) => {
  if (routes.length === 0) return '';

  let result = '';
  routes.forEach(route => {
    const componentName = route.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';

    result += `                  <Route path="/${route}" element={<${componentName} />} />\n`;
  });

  return result;
};

console.log('\nGenerated lazy imports:');
console.log(generateRouteAddition(aiServices, 'AI Service'));
console.log(generateRouteAddition(microSaas, 'Micro SAAS'));
console.log(generateRouteAddition(itServices, 'IT Service'));
console.log(generateRouteAddition(fiveGServices, '5G Service'));
console.log(generateRouteAddition(otherPages, 'Other'));

console.log('\nGenerated route elements:');
console.log(generateRouteElements(aiServices));
console.log(generateRouteElements(microSaas));
console.log(generateRouteElements(itServices));
console.log(generateRouteElements(fiveGServices));
console.log(generateRouteElements(otherPages));

// Save the analysis to a file
const analysis = {
  totalPages: pages.length,
  existingRoutes: existingRoutes.length,
  missingRoutes: missingRoutes.length,
  missingRoutesList: missingRoutes,
  categorized: {
    aiServices,
    microSaas,
    itServices,
    fiveGServices,
    otherPages
  }
};

fs.writeFileSync('/workspace/missing-routes-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\nAnalysis saved to missing-routes-analysis.json');