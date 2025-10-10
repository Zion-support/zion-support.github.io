#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        pages.push(basePath + item);
      }
      findPages(fullPath, basePath + item + '/');
    }
  }
}

findPages(appDir);

// Current routes from App.tsx
const currentRoutes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/partners',
  '/support',
  '/faq',
  '/demo',
  '/consultation',
  '/micro-saas',
  '/ai-services',
  '/it-services',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-email-marketing-automation',
  '/ai-voice-assistant-platform',
  '/ai-predictive-maintenance',
  '/ai-supply-chain-optimization',
  '/ai-cloud-infrastructure'
];

// Navigation links from Navigation.tsx
const navLinks = [
  // AI Services
  '/ai-analytics',
  '/ai-automation',
  '/ai-chatbot-builder',
  '/ai-crm',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-email-marketing-automation',
  '/ai-voice-assistant-platform',
  '/ai-predictive-maintenance',
  '/ai-supply-chain-optimization',
  '/ai-cloud-infrastructure',
  
  // IT Services
  '/ai-cloud-infrastructure',
  '/ai-api-management',
  '/ai-cybersecurity-suite',
  '/ai-data-analytics',
  '/ai-network-solutions',
  '/ai-mobile-development',
  '/ai-system-integration',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-edge-computing',
  
  // Micro SaaS
  '/micro-saas-project-management',
  '/micro-saas-customer-support',
  '/micro-saas-analytics',
  '/micro-saas-cms',
  '/micro-saas-collaboration',
  '/micro-saas-finance',
  '/micro-saas-inventory',
  '/micro-saas-monitoring'
];

// Footer links
const footerLinks = [
  '/docs',
  '/api-docs',
  '/privacy',
  '/terms',
  '/cookies'
];

// Combine all links
const allLinks = [...currentRoutes, ...navLinks, ...footerLinks];

// Find missing routes
const missingRoutes = [];
const existingPages = new Set(pages);

for (const link of allLinks) {
  const cleanLink = link.startsWith('/') ? link.slice(1) : link;
  if (!existingPages.has(cleanLink) && cleanLink !== '') {
    missingRoutes.push(link);
  }
}

// Find pages without routes
const pagesWithoutRoutes = pages.filter(page => {
  const routePath = '/' + page;
  return !currentRoutes.includes(routePath) && !navLinks.includes(routePath) && !footerLinks.includes(routePath);
});

console.log('=== ROUTE ANALYSIS REPORT ===\n');
console.log(`Total pages found: ${pages.length}`);
console.log(`Current routes defined: ${currentRoutes.length}`);
console.log(`Navigation links: ${navLinks.length}`);
console.log(`Footer links: ${footerLinks.length}`);
console.log(`Total links: ${allLinks.length}\n`);

console.log('=== MISSING ROUTES ===');
missingRoutes.forEach(route => console.log(`❌ ${route}`));

console.log('\n=== PAGES WITHOUT ROUTES ===');
pagesWithoutRoutes.forEach(page => console.log(`📄 /${page}`));

console.log('\n=== RECOMMENDATIONS ===');
console.log('1. Add missing routes to App.tsx');
console.log('2. Create missing page components');
console.log('3. Update navigation to include all relevant pages');
console.log('4. Ensure all footer links have corresponding pages');

// Generate route additions
const newRoutes = pagesWithoutRoutes.slice(0, 50); // Limit to first 50 for now
console.log('\n=== SUGGESTED ROUTE ADDITIONS ===');
newRoutes.forEach(page => {
  const componentName = page.split('/').map(part => 
    part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  ).join('');
  console.log(`<Route path="/${page}" element={<${componentName}Page />} />`);
});