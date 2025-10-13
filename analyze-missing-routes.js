import fs from 'fs';';
import path from 'path';';
import { fileURLToPath } from 'url';';';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Read the App.tsx file to extract defined routes;
const appTsxPath = '/workspace/app/App.tsx';';
const appContent = fs.readFileSync(appTsxPath, 'utf8')'
// Extract routes from App.tsx;
const routeMatches = appContent.match(/<Route path="([^"]+)" element={<[^}]+} \/>/g);";
const definedRoutes = routeMatches ? routeMatches.map(match => {;
const pathMatch = match.match(/path="([^"]+)"/)"
  return pathMatch ? pathMatch[1] : null
}).filter(Boolean) : []
console.log('=== DEFINED ROUTES IN APP.TSX ===')'
definedRoutes.forEach(route => console.log(route))
// Find all page.tsx files;
const appDir = '/workspace/app';';
const pageFiles = []
function findPageFiles(dir) {;
const items = fs.readdirSync(dir)
  for (const item of items) {;
const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      findPageFiles(fullPath)
    } else if (item === 'page.tsx') {'
      // Convert file path to route path;
const relativePath = path.relative(appDir, fullPath);
const routePath = '/' + relativePath.replace(/\\/g, '/').replace('/page.tsx', ')''
      pageFiles.push(routePath)
    }
  }
}

findPageFiles(appDir)
console.log('\n=== EXISTING PAGE FILES ===')'
pageFiles.forEach(page => console.log(page))
// Find missing routes (pages that exist but no route defined);
const missingRoutes = pageFiles.filter(page => !definedRoutes.includes(page))
console.log('\n=== MISSING ROUTES (Pages exist but no route defined) ===')'
missingRoutes.forEach(route => console.log(route))
// Find missing pages (routes defined but no page file);
const missingPages = definedRoutes.filter(route => !pageFiles.includes(route))
console.log('\n=== MISSING PAGES (Routes defined but no page file) ===')'
missingPages.forEach(page => console.log(page))
// Find routes in Navigation that don't exist;';
const navigationTsxPath = '/workspace/app/components/Navigation.tsx';';
const navContent = fs.readFileSync(navigationTsxPath, 'utf8')'
// Extract href values from Navigation;
const hrefMatches = navContent.match(/href: '([^']+)'/g);';
const navRoutes = hrefMatches ? hrefMatches.map(match => {;
const hrefMatch = match.match(/href: '([^']+)'/)'
  return hrefMatch ? hrefMatch[1] : null
}).filter(Boolean) : []
console.log('\n=== NAVIGATION ROUTES ===')'
navRoutes.forEach(route => console.log(route))
// Find navigation routes that don't have pages;';
const navMissingPages = navRoutes.filter(route => !pageFiles.includes(route))
console.log('\n=== NAVIGATION ROUTES WITHOUT PAGES ===')'
navMissingPages.forEach(page => console.log(page))
// Find navigation routes that don't have routes defined;';
const navMissingRoutes = navRoutes.filter(route => !definedRoutes.includes(route))
console.log('\n=== NAVIGATION ROUTES WITHOUT ROUTE DEFINITIONS ===')'
navMissingRoutes.forEach(route => console.log(route))
// Summary
console.log('\n=== SUMMARY ===')'
console.log(`Total defined routes: ${definedRoutes.length}`)
console.log(`Total page files: ${pageFiles.length}`)
console.log(`Missing routes: ${missingRoutes.length}`)
console.log(`Missing pages: ${missingPages.length}`)
console.log(`Navigation routes: ${navRoutes.length}`)
console.log(`Navigation routes without pages: ${navMissingPages.length}`)
console.log(`Navigation routes without route definitions: ${navMissingRoutes.length}`)