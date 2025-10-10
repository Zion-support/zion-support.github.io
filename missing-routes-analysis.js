// Analysis of missing routes in the application
const navigationLinks = [
  // AI Services from Navigation
  '/ai-analytics',
  '/ai-automation', 
  '/ai-chatbot-builder',
  '/ai-crm',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-project-manager', // exists
  '/ai-social-media-manager', // exists
  '/ai-email-marketing-automation', // exists
  '/ai-voice-assistant-platform', // exists
  '/ai-predictive-maintenance', // exists
  '/ai-supply-chain-optimization', // exists
  '/ai-cloud-infrastructure', // exists
  
  // IT Services from Navigation
  '/ai-cloud-infrastructure', // exists (duplicate)
  '/ai-api-management',
  '/ai-cybersecurity-suite',
  '/ai-data-analytics', // exists (duplicate)
  '/ai-network-solutions',
  '/ai-mobile-development',
  '/ai-system-integration',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-edge-computing',
  
  // Micro SaaS Services from Navigation
  '/micro-saas-project-management',
  '/micro-saas-customer-support',
  '/micro-saas-analytics',
  '/micro-saas-cms',
  '/micro-saas-collaboration',
  '/micro-saas-finance',
  '/micro-saas-inventory',
  '/micro-saas-monitoring',
  
  // Footer links
  '/privacy',
  '/terms',
  '/cookies',
  '/docs',
  '/api-docs',
  '/support', // exists
  '/faq', // exists
  '/contact', // exists
  '/blog', // exists
  '/case-studies', // exists
  '/about', // exists
  '/pricing', // exists
  '/demo', // exists
  '/consultation', // exists
  '/careers', // exists
  '/partners', // exists
];

const existingRoutes = [
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

const missingRoutes = navigationLinks.filter(link => !existingRoutes.includes(link));

console.log('Missing Routes:', missingRoutes);
console.log('Total missing routes:', missingRoutes.length);

// Group by category
const missingByCategory = {
  aiServices: missingRoutes.filter(route => route.startsWith('/ai-') && !route.includes('micro-saas')),
  microSaas: missingRoutes.filter(route => route.startsWith('/micro-saas')),
  legal: missingRoutes.filter(route => ['/privacy', '/terms', '/cookies'].includes(route)),
  docs: missingRoutes.filter(route => ['/docs', '/api-docs'].includes(route))
};

console.log('Missing by category:', missingByCategory);