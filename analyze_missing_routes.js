import fs from 'fs';
import path from 'path';

// Get all page.tsx files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = fullPath.replace(appDir, '').replace(/\\/g, '/');
        pages.push(route || '/');
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Current routes from App.tsx
const currentRoutes = [
  '/', '/about', '/services', '/contact', '/team', '/privacy', '/terms', 
  '/enterprise', '/services-advertising', '/case-studies', '/ai-services', 
  '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech', 
  '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation', 
  '/ai-cloud-infrastructure', '/ai-ecommerce-solutions', '/ai-mobile-app-development',
  '/it-services', '/micro-saas', '/cybersecurity', '/quantum-computing', 
  '/autonomous-systems', '/business-intelligence', '/blockchain-web3', 
  '/iot-edge-computing', '/blog', '/guides', '/sitemap'
];

// Find missing routes
const missingRoutes = pages.filter(page => !currentRoutes.includes(page));

console.log('Total pages found:', pages.length);
console.log('Current routes:', currentRoutes.length);
console.log('Missing routes:', missingRoutes.length);
console.log('\nMissing routes:');
missingRoutes.forEach(route => console.log(route));

// Group by category
const aiPages = missingRoutes.filter(route => route.startsWith('/ai-'));
const itPages = missingRoutes.filter(route => route.startsWith('/it-') || 
  ['/cybersecurity', '/cloud-migration', '/devops', '/database-services', 
   '/web-development', '/mobile-development', '/machine-learning', '/nlp', 
   '/computer-vision', '/blockchain', '/quantum-computing', '/autonomous-systems',
   '/business-intelligence', '/iot-edge', '/robotics', '/cloud-services',
   '/cloud-migration-services', '/cloud-security', '/compliance', '/data-center',
   '/devops', '/digital-transformation', '/enterprise-security', '/it-asset-management',
   '/it-consulting', '/it-infrastructure', '/it-performance', '/it-support',
   '/it-training', '/managed-it', '/network-infrastructure', '/network-security',
   '/system-admin', '/backup-recovery', '/database', '/performance-optimization'].includes(route));
const otherPages = missingRoutes.filter(route => !route.startsWith('/ai-') && 
  !itPages.includes(route));

console.log('\nAI Pages missing from routing:', aiPages.length);
console.log('IT Pages missing from routing:', itPages.length);
console.log('Other Pages missing from routing:', otherPages.length);