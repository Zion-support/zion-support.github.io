import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Navigation links from Navigation.tsx and Footer.tsx
const navigationLinks = [
  '/',
  '/about',
  '/services',
  '/specialized-services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/enterprise',
  '/contact',
  '/team',
  '/careers',
  '/ai-services',
  '/it-services',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap'
];

// Get all existing page directories
const appDir = path.join(__dirname, 'app');
const existingPages = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pagePath = fullPath.replace(appDir, '').replace(/\\/g, '/');
      if (pagePath && pagePath !== '/') {
        existingPages.push(pagePath);
      }
      scanDirectory(fullPath);
    }
  });
}

scanDirectory(appDir);

// Find missing pages
const missingPages = navigationLinks.filter(link => !existingPages.includes(link));

console.log('=== MISSING PAGES ANALYSIS ===');
console.log('\nNavigation Links:', navigationLinks.length);
console.log('Existing Pages:', existingPages.length);
console.log('\nMissing Pages:');
missingPages.forEach(page => console.log(`  - ${page}`));

console.log('\n=== EXISTING PAGES ===');
existingPages.sort().forEach(page => console.log(`  ✓ ${page}`));

// Check for broken internal links
const brokenLinks = [];
const allPages = [...navigationLinks, ...existingPages];

// Check if referenced pages exist
const referencedPages = [
  '/machine-learning',
  '/ai-nlp',
  '/computer-vision',
  '/ai-automation',
  '/ai-data-visualization',
  '/ai-3d-generation',
  '/ai-voice-synthesis',
  '/ai-content-generation',
  '/cloud-migration',
  '/cybersecurity',
  '/devops',
  '/database-services',
  '/enterprise',
  '/cloud-services',
  '/mobile-app-development',
  '/web-development',
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain',
  '/iot-edge',
  '/business-intelligence',
  '/robotics'
];

const missingReferencedPages = referencedPages.filter(page => !existingPages.includes(page));

console.log('\n=== MISSING REFERENCED PAGES ===');
missingReferencedPages.forEach(page => console.log(`  - ${page}`));

// Generate report
const report = {
  totalNavigationLinks: navigationLinks.length,
  totalExistingPages: existingPages.length,
  missingPages: missingPages,
  missingReferencedPages: missingReferencedPages,
  existingPages: existingPages.sort()
};

fs.writeFileSync('missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\nReport saved to missing-pages-report.json');