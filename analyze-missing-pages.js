#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = [];

function getAllPages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllPages(fullPath);
    } else if (file === 'page.tsx') {
      const relativePath = fullPath.replace(appDir, '');
      existingPages.push(relativePath);
    }
  }
}

getAllPages(appDir);

// Navigation links from Navigation.tsx
const navigationLinks = [
  '/',
  '/about',
  '/services',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/case-studies',
  '/blog',
  '/pricing',
  '/contact',
  // Micro SAAS Solutions
  '/ai-quantum-financial-oracle',
  '/ai-neural-memory-assistant',
  '/ai-holographic-workspace',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-smart-calendar',
  '/ai-content-writer',
  '/ai-video-generator',
  '/ai-crm-assistant',
  '/ai-customer-support-bot',
  '/ai-content-studio',
  '/ai-financial-advisor',
  '/ai-workflow-automation',
  '/ai-logo-designer',
  '/ai-climate-solutions-pro',
  '/ai-drug-discovery-pro',
  '/ai-password-generator',
  '/ai-email-signature-manager',
  // AI Services
  '/ai-quantum-ml-platform',
  '/ai-space-mission-control',
  '/ai-climate-intelligence',
  '/ai-pharmaceutical-research',
  '/ai-financial-intelligence',
  '/ai-autonomous-vehicles',
  '/ai-blockchain-intelligence',
  '/ai-supply-chain-intelligence',
  '/ai-legal-intelligence',
  '/ai-agricultural-intelligence',
  '/ai-energy-grid-intelligence',
  '/ai-manufacturing-intelligence',
  // IT Services
  '/quantum-computing-infrastructure',
  '/5 g-implementation',
  '/metaverse-development',
  '/web3-infrastructure',
  '/ai-infrastructure-service',
  '/mlops-platform',
  '/zero-trust-architecture',
  '/ai-security-operations',
  '/real-time-data-platform',
  '/data-modernization',
  '/multi-cloud-management',
  '/hybrid-cloud-architecture',
  // Emerging Technologies
  '/smart-city-solutions'];

// Footer links from Footer.tsx
const footerLinks = [
  '/ai-workflow-automation',
  '/ai-customer-support',
  '/ai-data-analytics',
  '/ai-content-generation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-computer-vision',
  '/ai-ml-platform',
  '/ai-quantum-computing',
  '/ai-drug-discovery-pro',
  '/ai-climate-solutions-pro',
  '/ai-space-technology-pro',
  '/ai-neural-memory-assistant',
  '/ai-holographic-workspace',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/it-support',
  '/custom-development',
  '/devops-cicd',
  '/database-management',
  '/network-design',
  '/ai-infrastructure-monitoring',
  '/blockchain-integration-services',
  '/ai-api-management',
  '/smart-contract-security-audit',
  '/edge-computing',
  '/5 g-implementation',
  '/iot-platform',
  '/quantum-security',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-customer-support-bot',
  '/ai-content-studio',
  '/ai-financial-advisor',
  '/ai-workflow-automation',
  '/ai-smart-calendar',
  '/ai-content-writer',
  '/ai-video-generator',
  '/ai-crm-assistant',
  '/ai-voice-assistant',
  '/ai-document-scanner',
  '/ai-meeting-transcriber',
  '/ai-website-builder',
  '/ai-quantum-computing',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/edge-computing',
  '/ai-holographic-workspace',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/ai-business-intelligence',
  '/robotics',
  '/ai-space-technology-pro',
  '/ai-climate-solutions-pro',
  '/ai-drug-discovery-pro',
  '/ai-neural-interface',
  '/quantum-security',
  '/ai-immersive-learning',
  '/ai-ops',
  '/healthcare-it',
  '/financial-it',
  '/edge-computing',
  '/5 g-implementation',
  '/iot-platform',
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/custom-development',
#!/usr/bin/env node;
// Sitemap URLs from the website;
#!/usr/bin/env node
// Sitemap URLs from the website
const sitemapUrls = [
  // Main Pages;
  '/',
  '/about',
  '/contact',
  '/blog',
  '/faq',
  '/careers',
  '/partners',
  '/news',
  '/solutions',
  '/research-development',
  '/request-quote',
  '/green-it',
  
  // Services Pages;
  '/services',
  '/services/ai-analytics',
  '/services/cybersecurity',
  '/services/cloud-devops',
  '/services/iot-edge',
  '/services/quantum-computing',
  '/services/blockchain',
  '/services/digital-twin',
  '/services/sustainability',
  '/services/data-analytics',
  '/services/infrastructure',
  '/services/digital-transformation',
  '/services/consulting',
  '/services/onsite-support',
  '/services/5g-solutions',
  
  // Micro SAAS Pages;
  '/micro-saas',
  '/micro-saas/ai-business-intelligence',
  '/micro-saas/customer-experience',
  '/micro-saas/quantum-computing',
  '/micro-saas/supply-chain',
  '/micro-saas/cybersecurity',
  '/micro-saas/iot-edge',
  '/micro-saas/content-creation',
  '/micro-saas/hr-platform',
  
  // IT Services Pages;
  '/it-services',
  '/it-services/infrastructure',
  '/it-services/digital-transformation',
  '/it-services/consulting',
  '/it-services/onsite-support',
  '/it-services/green-it',
  '/it-services/5g-solutions',
  
  // Marketplace Pages;
  '/marketplace',
  '/marketplace/products',
  '/marketplace/talent',
  '/marketplace/equipment',
  '/marketplace/services',
  '/talent',
  '/equipment',
  '/it-onsite-services',
  
  // Company Pages;
  '/team',
  '/help',
  '/security',
  '/status',
  
  // Legal Pages;
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  
  // Auth Pages;
  '/login',
  '/signup'
];

// Existing pages from the codebase;
const existingPages = [
  // Main pages;
  '/',
  '/about',
  '/team',
  '/careers',
  '/case-studies',
  '/blog',
  '/pricing',
  '/news',
  '/partners',
  '/investors',
  '/demo',
  '/consultation',
  '/contact',
  '/support',
  '/docs',
  '/api-docs',
  '/status',
  '/health',
  '/help',
  '/community',
  '/training',
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/security',
  '/compliance',
  '/data-protection',
  '/accessibility',
  '/sitemap'
];

// Combine all links
const allLinks = [...new Set([...navigationLinks, ...footerLinks])];
  '/demo',
  '/consultation',
  '/pricing',
  '/enterprise',
  
  // Services;
  '/services',
  '/ai-services',
  '/ai-marketing',
  '/ai-automation',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-workflow-automation',
  '/ai-mobile-app-development',
  '/ai-ecommerce-solutions',
  '/ai-customer-support',
  '/ai-sales-automation',
  '/ai-data-visualization',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/ai-content-generation',
  '/ai-email-marketing',
  '/ai-crm',
  '/ai-chatbot-builder',
  '/ai-writing-assistant',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-email-assistant',
  '/ai-scheduler',
  '/ai-3d-generation',
  '/ai-fashion-design',
  '/ai-fitness-coach',
  '/ai-music-composition',
  '/ai-video-generation',
  '/ai-voice-cloning',
  '/ai-code-generation',
  '/ai-customer-support-bot',
  '/ai-analytics-dashboard',
  
  // IT Services;
  '/it-services',
  '/it-infrastructure',
  '/it-consulting',
  '/cybersecurity',
  '/cloud-migration',
  '/cloud-services',
  '/devops',
  '/database',
  '/networking',
  '/security',
  '/compliance',
  '/gdpr',
  
  // Emerging Technologies;
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain',
  '/blockchain-web3',
  '/iot-edge',
  '/iot-edge-computing',
  '/robotics',
  '/business-intelligence',
  '/smart-analytics',
  '/analytics-tools',
  '/marketing-tools',
  '/developer-tools',
  '/productivity',
  '/business-apps',
  '/expense-tracker',
  '/task-manager-pro',
  
  // Micro SAAS;
  '/micro-saas',
  
  // Other;
  '/case-studies',
  '/api',
  '/offline',
  '/system-status'
];

// Find missing pages;
const missingPages = sitemapUrls.filter(url => !existingPages.includes(url));

// Check which pages exist
const missingPages = [];
const existingPagesSet = new Set(existingPages.map(p => p.replace(/^\//, '')));

for (const link of allLinks) {
  const cleanLink = link.replace(/^\//, '');
  if (cleanLink === '') continue; // Skip root
  
  if (!existingPagesSet.has(cleanLink)) {
    missingPages.push(link);
  }
}

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total links checked: ${allLinks.length}`),
console.log(`Existing pages: ${existingPages.length}`),
console.log(`Missing pages: ${missingPages.length}`),
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

// Also check for pages that exist but aren't linked
const linkedPages = new Set(allLinks.map(l => l.replace(/^\//, '')));
const unlinkedPages = existingPages
  .map(p => p.replace(/^\//, ''))
  .filter(p => p !== '' && !linkedPages.has(p));

console.log('\n=== UNLINKED PAGES ===');
console.log(`Unlinked pages: ${unlinkedPages.length}`),
unlinkedPages.forEach(page => console.log(page));

// Generate report
const report = {
  totalLinksChecked: allLinks.length,
  existingPages: existingPages.length,
  missingPages: missingPages.length,
  unlinkedPages: unlinkedPages.length,
  missingPagesList: missingPages,
  unlinkedPagesList: unlinkedPages
// Categorize missing pages,
const missingByCategory = {
  'Main Pages': missingPages.filter(p => ['/faq', '/partners', '/solutions', '/research-development', '/request-quote', '/green-it'].includes(p)),
  'Services Subpages': missingPages.filter(p => p.startsWith('/services/')),
  'Micro SAAS Subpages': missingPages.filter(p => p.startsWith('/micro-saas/')),
  'IT Services Subpages': missingPages.filter(p => p.startsWith('/it-services/')),
  'Marketplace Pages': missingPages.filter(p => p.startsWith('/marketplace') || ['/talent', '/equipment', '/it-onsite-services'].includes(p)),
  'Company Pages': missingPages.filter(p => ['/help', '/security'].includes(p)),
  'Auth Pages': missingPages.filter(p => ['/login', '/signup'].includes(p))
};

fs.writeFileSync('/workspace/missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\nReport saved to missing-pages-report.json');
console.log('\n=== SUMMARY ===');
console.log(`Total sitemap URLs: ${sitemapUrls.length}`),
console.log(`Total existing pages: ${existingPages.length}`),
console.log(`Missing pages: ${missingPages.length}`),
console.log(`Extra pages: ${extraPages.length}`),

// Categorize missing pages
const missingByCategory = {
  main: missingPages.filter(page => !page.includes('/')),
  services: missingPages.filter(page => page.startsWith('/services')),
  blog: missingPages.filter(page => page.startsWith('/blog')),
  other: missingPages.filter(page => 
    !page.startsWith('/services') && 
    !page.startsWith('/blog') && 
    page.includes('/')
  )
},

console.log('\n=== MISSING PAGES BY CATEGORY ===');
Object.entries(missingByCategory).forEach(([category, pages]) => {
    console.log(`\n${category}:`);
    pages.forEach(page => console.log(`  ${page}`));
  }
});`
});
