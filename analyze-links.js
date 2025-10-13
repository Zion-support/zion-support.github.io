import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the navigation file
const navigationFile = fs.readFileSync('/workspace/app/components/ImprovedNavigation.tsx', 'utf8');
const footerFile = fs.readFileSync('/workspace/app/components/ImprovedFooter.tsx', 'utf8');

// Extract all href patterns
const hrefRegex = /href:\s*['"`]([^'"`]+)['"`]/g;
const toRegex = /to={['"`]([^'"`]+)['"`]}/g;

const links = new Set();

// Extract from navigation
let match;
while ((match = hrefRegex.exec(navigationFile)) !== null) {
  links.add(match[1]);
}

while ((match = toRegex.exec(navigationFile)) !== null) {
  links.add(match[1]);
}

// Extract from footer
while ((match = hrefRegex.exec(footerFile)) !== null) {
  links.add(match[1]);
}

while ((match = toRegex.exec(footerFile)) !== null) {
  links.add(match[1]);
}

// Check which pages exist
const appDir = '/workspace/app';
const existingPages = new Set();

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if there's a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = '/' + path.relative(appDir, fullPath);
        existingPages.add(route);
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath);
    }
  }
}

scanDirectory(appDir);

// Add root page
existingPages.add('/');

// Find missing pages
const missingPages = [];
const existingPagesArray = Array.from(existingPages);

for (const link of links) {
  if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:')) {
    continue; // Skip external links
  }
  
  if (!existingPagesArray.includes(link)) {
    missingPages.push(link);
  }
}

// Find broken links (pages that exist but might have issues)
const brokenPages = [];

console.log('=== LINK ANALYSIS REPORT ===\n');
console.log(`Total links found: ${links.size}`);
console.log(`Existing pages: ${existingPages.size}`);
console.log(`Missing pages: ${missingPages.length}\n`);

console.log('=== MISSING PAGES ===');
missingPages.forEach(page => console.log(`- ${page}`));

console.log('\n=== EXISTING PAGES ===');
existingPagesArray.sort().forEach(page => console.log(`✓ ${page}`));

// Write detailed report
const report = {
  totalLinks: links.size,
  existingPages: existingPages.size,
  missingPages: missingPages.length,
  missingPagesList: missingPages,
  existingPagesList: existingPagesArray.sort(),
  analysisDate: new Date().toISOString()
};

fs.writeFileSync('/workspace/link-analysis-report.json', JSON.stringify(report, null, 2));
console.log('\n=== REPORT SAVED ===');
console.log('Detailed report saved to: /workspace/link-analysis-report.json');