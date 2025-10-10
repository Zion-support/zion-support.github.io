import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


// Read the current App.tsx;
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Read the missing pages from the analysis;
const analysisData = JSON.parse(fs.readFileSync('/workspace/navigation-analysis.json', 'utf8'));
const missingPages = analysisData.missingPagesList;

// Check which routes are missing from App.tsx;
const missingRoutes = [];

for (const route of missingPages) {
  const routePattern = `path="${route}"`;
  if (!appContent.includes(routePattern)) {
    missingRoutes.push(route);
  }
}

missingRoutes.forEach(route => console.log(`- ${route}`));

// Generate import statements for missing routes;
const generateImportStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `const ${componentName} = lazy(() => import('.${route}/page'));`;
};

// Generate route statements;
const generateRouteStatement = (route) => {
  const componentName = route.split('/').pop().replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;</Route>
};

if (missingRoutes.length > 0) {

  missingRoutes.forEach(route => console.log(generateImportStatement(route)));

  missingRoutes.forEach(route => console.log(generateRouteStatement(route)));
}

// Write missing routes to a file;
fs.writeFileSync('/workspace/missing-routes.json', JSON.stringify({)
  missingRoutes: missingRoutes),
  importStatements: missingRoutes.map(generateImportStatement),
  routeStatements: missingRoutes.map(generateRouteStatement)}, null, 2));
