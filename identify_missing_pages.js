import fs from 'fs';
// Read existing pages;
const existingPages = fs.readFileSync('existing_pages.txt', 'utf8').split('\n').filter(page => page.trim() && page !== 'page.tsx');
// Navigation links from the Navigation component;
const navigationLinks = [
];
  // Main navigation;
  '/about', '/blog', '/case-studies', '/pricing', '/contact', '/services', '/specialized-services',
  // Micro SAAS Services;
  '/ai-project-manager', '/ai-writing-assistant', '/ai-crm', '/ai-healthcare', '/ai-fintech',
  '/ai-mobile-app-development', '/ai-cybersecurity', '/ai-marketing', '/task-manager-pro',
  '/expense-tracker', '/ai-chatbot-builder', '/ai-data-analytics', '/ai-social-media-manager',
  '/ai-email-marketing', '/ai-customer-support-bot', '/ai-code-generation', '/ai-content-generation',
  '/ai-lead-generation', '/ai-document-processing', '/ai-seo-optimizer', '/ai-ecommerce-solutions',
  '/ai-financial-analyzer', '/ai-video-generation', '/ai-voice-cloning', '/ai-music-composition',
  '/ai-fashion-design', '/ai-fitness-coach', '/ai-workflow-automation', '/ai-sales-automation',
  '/ai-data-visualization', '/ai-3 d-generation',
  // AI Services;
  '/machine-learning', '/ai-business-intelligence', '/ai-supply-chain', '/ai-quality-assurance',
  '/ai-hr', '/ai-legal', '/ai-real-estate', '/ai-manufacturing', '/ai-transportation',
  '/ai-education', '/ai-energy', '/ai-insurance', '/nlp', '/computer-vision', '/ai-automation',
  '/quantum-ai', '/ai-cybersecurity', '/ai-healthcare', '/ai-fintech', '/ai-mobile-app-development',
  '/ai-crm', '/ai-email-assistant', '/ai-scheduler',
  // IT Services;
  '/cloud-services', '/enterprise-security', '/it-infrastructure', '/data-center',
  '/network-security', '/it-consulting', '/managed-it', '/cloud-security', '/it-asset-management',
  '/backup-recovery', '/it-training', '/it-performance', '/cybersecurity', '/devops',
  '/database-services', '/network-infrastructure', '/it-support', '/cloud-migration',
  '/compliance', '/developer-tools', '/marketing-tools', '/productivity',
  // Specialized Services;
  '/quantum-computing', '/autonomous-systems', '/blockchain', '/iot-edge', '/business-intelligence',
  '/robotics', '/enterprise', '/analytics-tools', '/business-apps', '/expense-tracker',
  '/task-manager-pro', '/smart-analytics'
];
<<<<<<< HEAD

// Convert to page names (remove leading slash)
=======
// Convert to page names (remove leading slash);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const navigationPages = navigationLinks.map(link => link.substring(1));
// Find missing pages;
const missingPages = navigationPages.filter(page => !existingPages.includes(page));
<<<<<<< HEAD

console.log('Missing pages: ');
missingPages.forEach(page => console.log(`- ${page}`));

console.log(`\nTotal missing pages: ${missingPages.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Total navigation links: ${navigationPages.length}`);

=======
// console.log removed for production
missingPages.forEach(page => // console.log removed for production
);
// console.log removed for production
// console.log removed for production
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Write missing pages to file;
fs.writeFileSync('missing_pages.txt', missingPages.join('\n'));