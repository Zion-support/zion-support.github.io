#!/usr/bin/env node

// Sitemap URLs from the website
const sitemapUrls = [
  // Main Pages
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
  
  // Services Pages
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
  
  // Micro SAAS Pages
  '/micro-saas',
  '/micro-saas/ai-business-intelligence',
  '/micro-saas/customer-experience',
  '/micro-saas/quantum-computing',
  '/micro-saas/supply-chain',
  '/micro-saas/cybersecurity',
  '/micro-saas/iot-edge',
  '/micro-saas/content-creation',
  '/micro-saas/hr-platform',
  
  // IT Services Pages
  '/it-services',
  '/it-services/infrastructure',
  '/it-services/digital-transformation',
  '/it-services/consulting',
  '/it-services/onsite-support',
  '/it-services/green-it',
  '/it-services/5g-solutions',
  
  // Marketplace Pages
  '/marketplace',
  '/marketplace/products',
  '/marketplace/talent',
  '/marketplace/equipment',
  '/marketplace/services',
  '/talent',
  '/equipment',
  '/it-onsite-services',
  
  // Company Pages
  '/team',
  '/help',
  '/security',
  '/status',
  
  // Legal Pages
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  
  // Auth Pages
  '/login',
  '/signup'
];

// Existing pages from the codebase
const existingPages = [
  // Main pages
  '/',
  '/about',
  '/contact',
  '/blog',
  '/careers',
  '/news',
  '/team',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  '/status',
  '/support',
  '/docs',
  '/api-docs',
  '/demo',
  '/consultation',
  '/pricing',
  '/enterprise',
  
  // Services
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
  
  // IT Services
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
  
  // Emerging Technologies
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
  
  // Micro SAAS
  '/micro-saas',
  
  // Other
  '/case-studies',
  '/api',
  '/offline',
  '/system-status'
];

// Find missing pages
const missingPages = sitemapUrls.filter(url => !existingPages.includes(url));

// Find extra pages (in codebase but not in sitemap)
const extraPages = existingPages.filter(url => !sitemapUrls.includes(url));

console.log('=== MISSING PAGES (in sitemap but not in codebase) ===');
missingPages.forEach(page => console.log(page));

console.log('\n=== EXTRA PAGES (in codebase but not in sitemap) ===');
extraPages.forEach(page => console.log(page));

console.log('\n=== SUMMARY ===');
console.log(`Total sitemap URLs: ${sitemapUrls.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Extra pages: ${extraPages.length}`);

// Categorize missing pages
const missingByCategory = {
  'Main Pages': missingPages.filter(p => ['/faq', '/partners', '/solutions', '/research-development', '/request-quote', '/green-it'].includes(p)),
  'Services Subpages': missingPages.filter(p => p.startsWith('/services/')),
  'Micro SAAS Subpages': missingPages.filter(p => p.startsWith('/micro-saas/')),
  'IT Services Subpages': missingPages.filter(p => p.startsWith('/it-services/')),
  'Marketplace Pages': missingPages.filter(p => p.startsWith('/marketplace') || ['/talent', '/equipment', '/it-onsite-services'].includes(p)),
  'Company Pages': missingPages.filter(p => ['/help', '/security'].includes(p)),
  'Auth Pages': missingPages.filter(p => ['/login', '/signup'].includes(p))
};

console.log('\n=== MISSING PAGES BY CATEGORY ===');
Object.entries(missingByCategory).forEach(([category, pages]) => {
  if (pages.length > 0) {
    console.log(`\n${category}:`);
    pages.forEach(page => console.log(`  ${page}`));
  }
});