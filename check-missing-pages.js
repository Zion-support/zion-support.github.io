import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all existing pages
const appDir = './app';
const existingPages = new Set();

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item === 'components' || item === 'hooks' || item === 'config' || item === 'middleware') {
        continue; // Skip non-page directories
      }
      findPages(fullPath);
    } else if (item === 'page.tsx') {
      const relativePath = path.relative(appDir, fullPath);
      const pagePath = '/' + relativePath.replace('/page.tsx', '').replace(/\\/g, '/');
      if (pagePath === '/page') pagePath = '/';
      existingPages.add(pagePath);
    }
  }
}

findPages(appDir);

// Navigation links from the components
const navigationLinks = [
  // Main navigation
  '/', '/about', '/services', '/pricing', '/case-studies', '/blog', '/contact',
  
  // Micro SAAS Solutions
  '/ai-project-manager', '/ai-social-media-manager', '/ai-analytics-dashboard', 
  '/ai-email-marketing', '/ai-customer-support-bot', '/ai-code-generation',
  '/ai-content-generation', '/ai-marketing',
  
  // AI Services
  '/ai-services', '/ai-healthcare', '/ai-fintech', '/ai-cybersecurity', '/ai-data-analytics',
  
  // IT Services
  '/cloud-services', '/cybersecurity', '/devops', '/database', '/it-infrastructure',
  '/networking', '/business-intelligence', '/compliance',
  
  // Specialized Solutions
  '/quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/robotics', '/business-apps',
  
  // Footer links
  '/team', '/careers', '/news', '/support', '/docs', '/api-docs', '/status',
  '/system-status', '/privacy', '/terms', '/cookies', '/gdpr'
];

// Check for missing pages
const missingPages = [];
const existingPagesArray = Array.from(existingPages);

for (const link of navigationLinks) {
  if (!existingPages.has(link)) {
    missingPages.push(link);
  }
}

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total navigation links: ${navigationLinks.length}`);
console.log(`Total existing pages: ${existingPagesArray.length}`);
console.log(`Missing pages: ${missingPages.length}`);

if (missingPages.length > 0) {
  console.log('\n=== MISSING PAGES ===');
  missingPages.forEach(page => console.log(`❌ ${page}`));
} else {
  console.log('\n✅ All navigation links have corresponding pages!');
}

console.log('\n=== EXISTING PAGES ===');
existingPagesArray.sort().forEach(page => console.log(`✅ ${page}`));

// Check for orphaned pages (pages that exist but aren't linked)
const orphanedPages = existingPagesArray.filter(page => 
  !navigationLinks.includes(page) && page !== '/not-found'
);

if (orphanedPages.length > 0) {
  console.log('\n=== ORPHANED PAGES (not linked in navigation) ===');
  orphanedPages.forEach(page => console.log(`🔍 ${page}`));
}