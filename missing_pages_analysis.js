const navigationLinks = [
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech',
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-cloud-infrastructure', '/ai-ecommerce-solutions', '/ai-mobile-app-development',
  '/it-infrastructure', '/it-services', '/cybersecurity', '/cloud-services', '/devops',
  '/database', '/networking', '/micro-saas', '/developer-tools', '/business-apps',
  '/marketing-tools', '/business-intelligence', '/quantum-computing', '/autonomous-systems',
  '/blockchain-web3', '/iot-edge-computing', '/robotics', '/about', '/team', '/case-studies',
  '/blog', '/careers', '/news', '/contact', '/docs', '/api-docs', '/support', '/status',
  '/system-status', '/privacy', '/terms', '/cookies', '/gdpr', '/security', '/sla'
];

const existingPages = [
  '/about', '/ai-automation', '/ai-cloud-infrastructure', '/ai-content-generation',
  '/ai-customer-support', '/ai-cybersecurity', '/ai-data-analytics', '/ai-data-visualization',
  '/ai-ecommerce-solutions', '/ai-fintech', '/ai-healthcare', '/ai-marketing',
  '/ai-mobile-app-development', '/ai-sales-automation', '/ai-services', '/ai-workflow-automation',
  '/api', '/api-docs', '/autonomous-systems', '/blockchain', '/blockchain-web3', '/blog',
  '/business-apps', '/business-intelligence', '/careers', '/case-studies', '/cloud-services',
  '/compliance', '/contact', '/cookies', '/cybersecurity', '/database', '/developer-tools',
  '/devops', '/docs', '/enterprise', '/gdpr', '/guides', '/iot-edge', '/iot-edge-computing',
  '/it-infrastructure', '/it-services', '/marketing-tools', '/micro-saas', '/networking',
  '/news', '/offline', '/privacy', '/productivity', '/quantum-computing', '/robotics',
  '/security', '/services', '/services-advertising', '/sitemap', '/status', '/support',
  '/system-status', '/team', '/terms'
];

const missingPages = navigationLinks.filter(link => !existingPages.includes(link));
const extraPages = existingPages.filter(page => !navigationLinks.includes(page));

console.log('Missing Pages:');
missingPages.forEach(page => console.log(`  ${page}`));
console.log(`\nTotal missing: ${missingPages.length}`);

console.log('\nExtra Pages (not in navigation):');
extraPages.forEach(page => console.log(`  ${page}`));
console.log(`\nTotal extra: ${extraPages.length}`);
