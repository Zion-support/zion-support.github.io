import fs from 'fs';
import path from 'path';

// Extract all navigation links from Navigation.tsx
const navigationContent = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Extract all routes from App.tsx
const appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Extract all footer links from Footer.tsx
const footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');

// Function to extract paths from content
function extractPaths(content, pattern) {
  const matches = content.match(pattern);
  if (!matches) return [];
  
  return matches.map(match => {
    const pathMatch = match.match(/path:\s*['"`]([^'"`]+)['"`]/);
    return pathMatch ? pathMatch[1] : null;
  }).filter(Boolean);
}

// Extract navigation paths
const navPaths = extractPaths(navigationContent, /path:\s*['"`][^'"`]+['"`]/g);

// Extract route paths
const routePaths = extractPaths(appContent, /path:\s*['"`][^'"`]+['"`]/g);

// Extract footer paths
const footerPaths = extractPaths(footerContent, /href:\s*['"`][^'"`]+['"`]/g);

// Combine all paths
const allPaths = [...new Set([...navPaths, ...routePaths, ...footerPaths])];

// Check which pages exist in the app directory
const appDir = '/workspace/app';
const existingPages = new Set();

function scanDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      // Check if directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const routePath = '/' + path.relative(appDir, fullPath);
        existingPages.add(routePath);
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath);
    }
  }
}

scanDirectory(appDir);

// Find missing pages
const missingPages = allPaths.filter(path => {
  // Skip external links and special paths
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return false;
  }
  
  // Check if page exists
  return !existingPages.has(path);
});

// Find duplicate/conflicting paths
const duplicatePaths = allPaths.filter((path, index) => allPaths.indexOf(path) !== index);

console.log('🔍 MISSING PAGES ANALYSIS');
console.log('===');
console.log(`Total paths found: ${allPaths.length}`);
console.log(`Existing pages: ${existingPages.size}`);
console.log(`Missing pages: ${missingPages.length}`);

if (missingPages.length > 0) {
  console.log('\n❌ MISSING PAGES:');
  missingPages.forEach(page => {
    console.log(`  - ${page}`);
  });
}

if (duplicatePaths.length > 0) {
  console.log('\n⚠️  DUPLICATE PATHS:');
  duplicatePaths.forEach(page => {
    console.log(`  - ${page}`);
  });
}

console.log('\n📋 EXISTING PAGES:');
Array.from(existingPages).sort().forEach(page => {
  console.log(`  ✅ ${page}`);
});

// Generate recommendations
const recommendations = [];

if (missingPages.length > 0) {
  recommendations.push({
    priority: 'high',
    category: 'missing_pages',
    title: 'Create Missing Pages',
    description: `Found ${missingPages.length} missing pages that are referenced in navigation but don't exist`,
    action: 'Create the missing page components in the appropriate directories',
    pages: missingPages
  });
}

if (duplicatePaths.length > 0) {
  recommendations.push({
    priority: 'medium',
    category: 'duplicates',
    title: 'Resolve Duplicate Paths',
    description: `Found ${duplicatePaths.length} duplicate path references`,
    action: 'Review and consolidate duplicate path references',
    pages: duplicatePaths
  });
}

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    totalPaths: allPaths.length,
    existingPages: existingPages.size,
    missingPages: missingPages.length,
    duplicatePaths: duplicatePaths.length
  },
  allPaths: allPaths.sort(),
  existingPages: Array.from(existingPages).sort(),
  missingPages: missingPages.sort(),
  duplicatePaths: duplicatePaths.sort(),
  recommendations
};

fs.writeFileSync('missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\n💾 Detailed report saved to: missing-pages-report.json');