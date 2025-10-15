import fs from 'fs';
import path from 'path';

// Read App.tsx to extract all routes
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Extract all route paths from App.tsx
const routeMatches = appContent.match(/path="([^"]+)"/g);
const routes = routeMatches ? routeMatches.map(match => match.replace('path="', '').replace('"', '')) : [];

console.log('Routes found in App.tsx:');
routes.forEach(route => console.log(`  ${route}`));

// Get all page.tsx files
const pageFiles = [];
function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      const relativePath = path.relative('/workspace/app', filePath);
      const routePath = '/' + relativePath.replace('/page.tsx', '');
      pageFiles.push(routePath);
    }
  }
}

findPageFiles('/workspace/app');

console.log('\nPage files found:');
pageFiles.forEach(page => console.log(`  ${page}`));

// Find missing routes (routes in App.tsx but no corresponding page file)
const missingPages = routes.filter(route => !pageFiles.includes(route) && route !== '*');

console.log('\nMissing pages (routes without corresponding page.tsx files):');
missingPages.forEach(page => console.log(`  ${page}`));

// Find extra pages (page files without corresponding routes)
const extraPages = pageFiles.filter(page => !routes.includes(page));

console.log('\nExtra pages (page.tsx files without corresponding routes):');
extraPages.forEach(page => console.log(`  ${page}`));

// Check for broken imports in App.tsx
const importMatches = appContent.match(/import.*from.*['"]([^'"]+)['"]/g);
const imports = importMatches ? importMatches.map(match => {
  const importPath = match.match(/from\s+['"]([^'"]+)['"]/);
  return importPath ? importPath[1] : null;
}).filter(Boolean) : [];

console.log('\nImport paths in App.tsx:');
imports.forEach(imp => console.log(`  ${imp}`));

// Check if import files exist
const missingImports = [];
imports.forEach(imp => {
  if (imp.startsWith('./app/')) {
    const filePath = path.join('/workspace', imp + '.tsx');
    if (!fs.existsSync(filePath)) {
      missingImports.push(imp);
    }
  }
});

console.log('\nMissing import files:');
missingImports.forEach(imp => console.log(`  ${imp}`));