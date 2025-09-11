import fs from 'fs';
import path from 'path';

// Get all routes from App.tsx
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const routeMatches = appContent.match(
  /<Route path="([^"]+)" element={<([^>]+) \/>} \/>/g
);

const routes = [];
routeMatches.forEach(match => {
  const pathMatch = match.match(/path="([^"]+)"/);
  const elementMatch = match.match(/element={<([^>]+) \/>}/);
  if (pathMatch && elementMatch) {
    routes.push({
      path: pathMatch[1],
      component: elementMatch[1],
    });
  }
});

// Get all files in pages directory
const pagesDir = 'src/pages';
const servicesDir = 'src/pages/services';

const getAllFiles = dir => {
  const files = [];
  if (fs.existsSync(dir)) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    });
  }
  return files;
};

const allFiles = getAllFiles(pagesDir);

// Create a map of existing files for faster lookup
const existingFilesMap = new Map();
allFiles.forEach(file => {
  const fileName = path.basename(file);
  existingFilesMap.set(fileName.toLowerCase(), file);
});

// Analyze missing pages
const missingPages = [];
const brokenLinks = [];

routes.forEach(route => {
  if (route.path.startsWith('/services/')) {
    const serviceName = route.path.replace('/services/', '');
    const expectedFiles = [
      `${serviceName}.tsx`,
      `${serviceName}.jsx`,
      `${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}.tsx`,
      `${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}.jsx`,
      // Add more variations for service files
      `${serviceName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}.tsx`,
      `${serviceName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}.jsx`,
    ];

    const exists = expectedFiles.some(file =>
      existingFilesMap.has(file.toLowerCase())
    );
    if (!exists) {
      missingPages.push({
        route: route.path,
        component: route.component,
        expectedFiles: expectedFiles.map(file => `src/pages/services/${file}`),
      });
    }
  } else {
    const pageName = route.path.replace('/', '').replace(/-/g, '') || 'Home';
    const expectedFiles = [
      `${pageName}.tsx`,
      `${pageName}.jsx`,
      `${pageName.charAt(0).toUpperCase() + pageName.slice(1)}.tsx`,
      `${pageName.charAt(0).toUpperCase() + pageName.slice(1)}.jsx`,
      // Add more variations for page files
      `${pageName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}.tsx`,
      `${pageName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}.jsx`,
    ];

    const exists = expectedFiles.some(file =>
      existingFilesMap.has(file.toLowerCase())
    );
    if (!exists) {
      missingPages.push({
        route: route.path,
        component: route.component,
        expectedFiles: expectedFiles.map(file => `src/pages/${file}`),
      });
    }
  }
});

// Check navigation links
const headerContent = fs.readFileSync('src/layout/AppHeader.tsx', 'utf8');
const footerContent = fs.readFileSync(
  'src/components/EnhancedFuturisticFooter.tsx',
  'utf8'
);
const sidebarContent = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

const linkRegex = /href: ['"`]([^'"`]+)['"`]/g;
const pathRegex = /path: ['"`]([^'"`]+)['"`]/g;

const navigationLinks = [];
let match;

while (
  (match = linkRegex.exec(headerContent + footerContent + sidebarContent)) !==
  null
) {
  navigationLinks.push(match[1]);
}

while ((match = pathRegex.exec(sidebarContent)) !== null) {
  navigationLinks.push(match[1]);
}

// Remove duplicates
const uniqueLinks = [...new Set(navigationLinks)];

// Check for broken navigation links
uniqueLinks.forEach(link => {
  if (
    link.startsWith('/') &&
    !link.startsWith('/#') &&
    !link.startsWith('http')
  ) {
    const routeExists = routes.some(route => route.path === link);
    if (!routeExists) {
      brokenLinks.push({
        link,
        source: 'navigation',
        type: 'missing-route',
      });
    }
  }
});

console.log('=== BROKEN LINKS ANALYSIS ===');
console.log('\nMissing Pages:');
missingPages.forEach(page => {
  console.log(`- Route: ${page.route}`);
  console.log(`  Component: ${page.component}`);
  console.log(`  Expected files: ${page.expectedFiles.join(', ')}`);
});

console.log('\nBroken Navigation Links:');
brokenLinks.forEach(link => {
  console.log(`- ${link.link} (${link.type})`);
});

console.log('\nTotal missing pages:', missingPages.length);
console.log('Total broken links:', brokenLinks.length);

// Show existing files for debugging
console.log('\n=== EXISTING FILES ===');
const existingFiles = allFiles.map(file => file.replace('src/pages/', ''));
console.log('Total files found:', existingFiles.length);
console.log('Sample files:', existingFiles.slice(0, 20));
