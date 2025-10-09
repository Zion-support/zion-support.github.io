#!/usr/bin/env node

// Analysis of missing pages based on navigation and footer links
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = [];

function findPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        const pagePath = fullPath.replace(appDir, '');
        existingPages.push(pagePath || '/');
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Links from navigation and footer
const referencedLinks = [
  // Main navigation
  '/',
  '/about',
  '/contact',
  '/blog',
  
  // AI Services
  '/ai-services',
  '/ai-marketing',
  '/ai-automation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-content-generation',
  '/ai-data-analytics',
  '/ai-ecommerce-solutions',
  '/ai-cybersecurity',
  '/ai-mobile-app-development',
  '/ai-customer-support',
  '/ai-sales-automation',
  '/ai-workflow-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  
  // IT Services
  '/it-infrastructure',
  '/devops',
  '/database',
  '/cybersecurity',
  '/cloud-services',
  '/networking',
  '/it-consulting',
  '/managed-it',
  
  // Micro SAAS
  '/micro-saas',
  '/ai-writing-assistant',
  '/smart-analytics',
  '/ai-scheduler',
  '/expense-tracker',
  '/task-manager-pro',
  '/crm-lite',
  '/email-optimizer',
  '/social-media-manager',
  '/ai-design-studio',
  '/landing-page-builder',
  '/seo-optimizer',
  '/ad-campaign-manager',
  '/code-assistant',
  '/api-builder',
  '/bug-tracker-pro',
  '/doc-generator',
  
  // Emerging Technologies
  '/quantum-computing',
  '/robotics',
  '/iot-edge-computing',
  '/blockchain-web3',
  '/business-intelligence',
  '/autonomous-systems',
  
  // Company & Support
  '/team',
  '/case-studies',
  '/careers',
  '/news',
  '/docs',
  '/api-docs',
  '/support',
  '/status',
  '/privacy',
  '/terms',
  '/cookies',
  
  // Additional pages from main page
  '/ai-crm',
  '/ai-analytics',
  '/ai-content-studio',
  '/ai-chatbot-builder',
  '/ai-email-marketing',
  '/ai-mobile-builder',
  '/ai-seo-optimizer',
  '/ai-invoice-generator',
  '/cloud-migration',
  '/cybersecurity-suite',
  '/devops-cicd',
  '/database-management',
  '/network-solutions',
  '/mobile-app-development',
  '/it-support',
  '/ai-customer-support',
  '/ai-sales-automation',
  '/ai-workflow-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/robotics',
  '/iot-edge-computing',
  '/blockchain-web3',
  '/business-intelligence',
  '/devops',
  '/ai-mobile-app-development',
  '/database',
  '/ai-writing-assistant',
  '/smart-analytics',
  '/ai-scheduler',
  '/expense-tracker',
  '/task-manager-pro',
  '/crm-lite',
  '/email-optimizer',
  '/social-media-manager',
  '/ai-design-studio',
  '/landing-page-builder',
  '/seo-optimizer',
  '/ad-campaign-manager',
  '/code-assistant',
  '/api-builder',
  '/bug-tracker-pro',
  '/doc-generator'
];

// Find missing pages
const missingPages = referencedLinks.filter(link => !existingPages.includes(link));

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total referenced links: ${referencedLinks.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

// Group missing pages by category
const missingByCategory = {
  'AI Services': [],
  'IT Services': [],
  'Micro SAAS': [],
  'Emerging Tech': [],
  'Company': [],
  'Support': [],
  'Other': []
};

missingPages.forEach(page => {
  if (page.includes('/ai-') || page === '/ai-services') {
    missingByCategory['AI Services'].push(page);
  } else if (page.includes('/it-') || page === '/devops' || page === '/database' || page === '/cybersecurity' || page === '/cloud-services' || page === '/networking') {
    missingByCategory['IT Services'].push(page);
  } else if (page.includes('/ai-') && (page.includes('assistant') || page.includes('tracker') || page.includes('manager') || page.includes('builder') || page.includes('optimizer') || page.includes('generator') || page.includes('studio'))) {
    missingByCategory['Micro SAAS'].push(page);
  } else if (page === '/quantum-computing' || page === '/robotics' || page === '/iot-edge-computing' || page === '/blockchain-web3' || page === '/business-intelligence' || page === '/autonomous-systems') {
    missingByCategory['Emerging Tech'].push(page);
  } else if (page === '/team' || page === '/case-studies' || page === '/careers' || page === '/news') {
    missingByCategory['Company'].push(page);
  } else if (page === '/docs' || page === '/api-docs' || page === '/support' || page === '/status' || page === '/privacy' || page === '/terms' || page === '/cookies') {
    missingByCategory['Support'].push(page);
  } else {
    missingByCategory['Other'].push(page);
  }
});

console.log('\n=== MISSING PAGES BY CATEGORY ===');
Object.entries(missingByCategory).forEach(([category, pages]) => {
  if (pages.length > 0) {
    console.log(`\n${category}:`);
    pages.forEach(page => console.log(`  - ${page}`));
  }
});

// Write missing pages to file
fs.writeFileSync('/workspace/missing-pages.json', JSON.stringify({
  totalReferenced: referencedLinks.length,
  totalExisting: existingPages.length,
  totalMissing: missingPages.length,
  missingPages: missingPages,
  missingByCategory: missingByCategory
}, null, 2));

console.log('\n=== ANALYSIS COMPLETE ===');
console.log('Missing pages list saved to: /workspace/missing-pages.json');