#!/usr/bin/env node

// Extract routes from App.tsx
const appRoutes = [
  '/', '/about', '/contact', '/services', '/pricing', '/blog', 
  '/case-studies', '/careers', '/partners', '/support', '/faq', 
  '/demo', '/consultation', '/micro-saas'
];

// Extract routes from Navigation.tsx
const navRoutes = [
  // AI Services
  '/ai-services', '/ai-marketing', '/ai-customer-support', '/ai-data-analytics',
  '/ai-content-generation', '/ai-healthcare', '/ai-fintech', '/ai-ecommerce-solutions',
  '/ai-cybersecurity', '/ai-mobile-app-development', '/ai-sales-automation',
  '/ai-workflow-automation', '/ai-data-visualization', '/ai-lead-generation',
  '/ai-document-processing', '/ai-automation', '/ai-voice-assistant',
  '/ai-predictive-maintenance', '/ai-supply-chain', '/ai-quality-control',
  '/ai-energy-management', '/ai-legal-analysis', '/ai-real-estate',
  '/ai-hr-assistant', '/ai-insurance', '/ai-education', '/ai-transportation',
  '/ai-environmental', '/ai-retail', '/ai-sports', '/ai-mental-health',
  
  // IT Services
  '/cloud-services', '/cloud-migration', '/devops', '/database',
  '/cybersecurity', '/security-monitoring', '/penetration-testing',
  '/it-infrastructure', '/managed-it', '/it-consulting', '/data-analytics',
  '/mobile-development', '/web-development', '/process-automation',
  '/cloud-infrastructure', '/network-security', '/data-backup',
  '/it-asset-management', '/website-hosting', '/mobile-device-management',
  '/compliance-services', '/it-performance-monitoring', '/it-training',
  '/it-project-management', '/vulnerability-assessment', '/hybrid-cloud',
  '/data-migration', '/api-development', '/it-governance',
  
  // Micro SAAS
  '/micro-saas', '/ai-analytics-dashboard', '/ai-crm', '/ai-content-studio',
  '/ai-chatbot-builder', '/ai-email-marketing', '/ai-mobile-app-builder',
  '/ai-seo-optimizer', '/ai-invoice-generator', '/ai-writing-assistant',
  '/smart-analytics', '/ai-scheduler', '/expense-tracker', '/task-manager-pro',
  '/crm-lite', '/email-optimizer', '/social-media-manager', '/ai-design-studio',
  '/landing-page-builder', '/seo-optimizer', '/ad-campaign-manager',
  '/code-assistant', '/api-builder', '/bug-tracker-pro', '/doc-generator',
  '/ai-recruitment-assistant', '/medical-records-manager', '/ai-accounting-assistant',
  '/property-management-ai', '/legal-document-manager', '/online-learning-platform',
  '/supply-chain-optimizer',
  
  // Emerging Tech
  '/quantum-computing', '/robotics', '/iot-edge-computing', '/blockchain-web3',
  '/business-intelligence', '/autonomous-systems', '/5g-implementation',
  '/ai-3d-generation', '/ai-holographic-workspace'
];

// Extract routes from Footer.tsx
const footerRoutes = [
  // Company links
  '/about', '/team', '/case-studies', '/careers', '/news', '/partners', '/contact',
  
  // Support links
  '/docs', '/api-docs', '/support', '/status', '/privacy', '/terms',
  
  // Additional footer links
  '/cookies'
];

// Get all existing pages from the filesystem
const existingPages = [
  '5g-implementation', 'about', 'accessibility', 'ai-3d-generation',
  'ai-agricultural-intelligence-pro', 'ai-analytics', 'ai-analytics-dashboard',
  'ai-api-management', 'ai-api-manager', 'ai-automation', 'ai-autonomous-systems',
  'ai-blockchain-analytics', 'ai-blockchain-solutions', 'ai-business-intelligence',
  'ai-chatbot-builder', 'ai-climate-solutions-pro', 'ai-cloud-infrastructure',
  'ai-code-assistant', 'ai-code-generation', 'ai-code-security-auditor',
  'ai-computer-vision', 'ai-content-delivery-network', 'ai-content-generation',
  'ai-content-studio', 'ai-content-writer', 'ai-crm', 'ai-crm-assistant',
  'ai-customer-service', 'ai-customer-support', 'ai-customer-support-bot',
  'ai-customer-support-chatbot', 'ai-cybersecurity', 'ai-cybersecurity-monitor',
  'ai-cybersecurity-suite', 'ai-data-analytics', 'ai-data-visualization',
  'ai-design-studio', 'ai-document-processing', 'ai-document-processor',
  'ai-document-scanner', 'ai-drug-discovery-pro', 'ai-ecommerce-optimizer',
  'ai-ecommerce-solutions', 'ai-edge-computing', 'ai-education',
  'ai-email-assistant', 'ai-email-marketing', 'ai-email-marketing-automation',
  'ai-energy', 'ai-energy-grid-management-pro', 'ai-enterprise-solutions',
  'ai-expense-tracker', 'ai-fashion-design', 'ai-financial-advisor',
  'ai-financial-analyzer', 'ai-financial-crime-detection-pro', 'ai-fintech',
  'ai-fitness-coach', 'ai-fraud-detection', 'ai-healthcare',
  'ai-healthcare-solutions', 'ai-holographic-workspace', 'ai-hr',
  'ai-hr-assistant', 'ai-image-recognition', 'ai-infrastructure-monitoring',
  'ai-insurance', 'ai-inventory-management', 'ai-inventory-manager',
  'ai-investment-optimizer', 'ai-invoice-generator', 'ai-lead-generation',
  'ai-legal', 'ai-legal-assistant', 'ai-legal-research-pro', 'ai-load-testing',
  'ai-logo-designer', 'ai-manufacturing', 'ai-marketing', 'ai-mental-health-companion',
  'ai-ml', 'ai-ml-platform', 'ai-mobile-app-builder', 'ai-mobile-app-development',
  'ai-music-composition', 'ai-neural-memory-assistant', 'ai-nlp', 'ai-ops',
  'ai-password-manager', 'ai-predictive-analytics', 'ai-predictive-maintenance',
  'ai-project-management', 'ai-project-manager', 'ai-quality-assurance',
  'ai-quantum-computing', 'ai-quantum-financial-oracle', 'ai-quantum-optimization',
  'ai-quantum-task-optimizer', 'ai-real-estate', 'ai-recommendation-engine',
  'ai-robotics', 'ai-sales-automation', 'ai-scheduler', 'ai-sentiment-analyzer',
  'ai-seo-optimizer', 'ai-services', 'ai-smart-calendar', 'ai-smart-home-controller',
  'ai-social-media-manager', 'ai-social-media-scheduler', 'ai-solutions',
  'ai-space-technology', 'ai-space-technology-pro', 'ai-stock-portfolio-manager',
  'ai-supply-chain', 'ai-supply-chain-optimization-pro', 'ai-task-manager',
  'ai-telepathic-interface', 'ai-time-tracker', 'ai-transportation',
  'ai-video-editor', 'ai-video-generation', 'ai-video-generator', 'ai-vision',
  'ai-voice-assistant', 'ai-voice-cloning', 'ai-voice-cloning-studio',
  'ai-voice-processing', 'ai-voice-synthesis', 'ai-website-builder',
  'ai-workflow-automation', 'ai-writing-assistant', 'analytics-tools',
  'api-docs', 'ar-vr-platform', 'ar-vr-solutions', 'autonomous-systems',
  'backup-recovery', 'blockchain', 'blockchain-integration-services',
  'blockchain-web3', 'blog', 'business-apps', 'business-intelligence',
  'careers', 'case-studies', 'cloud-infrastructure', 'cloud-infrastructure-manager',
  'cloud-migration', 'cloud-migration-services', 'cloud-security',
  'cloud-services', 'community', 'compliance', 'computer-vision',
  'consultation', 'contact', 'cookies', 'crm-lite', 'custom-development',
  'cybersecurity', 'cybersecurity-suite', 'data-analytics', 'database',
  'database-management', 'database-services', 'data-center', 'data-protection',
  'demo', 'developer-tools', 'devops', 'devops-cicd', 'digital-transformation',
  'digital-twin-platform', 'docs', 'edge-computing', 'email-marketing-automation',
  'email-optimizer', 'enterprise', 'enterprise-security', 'expense-tracker',
  'faq', 'financial-it', 'gdpr', 'health', 'healthcare-it', 'help',
  'innovation-labs', 'intelligent-database-migration', 'intelligent-email-infrastructure',
  'investors', 'iot', 'iot-edge', 'iot-edge-computing', 'iot-platform',
  'it-asset-management', 'it-consulting', 'it-infrastructure',
  'it-infrastructure-solutions', 'it-performance', 'it-services', 'it-support',
  'it-training', 'landing-page-builder', 'machine-learning', 'managed-it',
  'marketing-tools', 'micro-saas', 'mobile-development', 'network-design',
  'network-infrastructure', 'network-security', 'network-solutions', 'news',
  'nlp', 'offline', 'partners', 'penetration-testing', 'performance-optimization',
  'pricing', 'privacy', 'process-automation', 'productivity', 'project-management-pro',
  'quantum-ai', 'quantum-computing', 'robotics', 'robotics-integration',
  'security', 'security-monitoring', 'security-monitoring-suite', 'seo-optimizer',
  'services', 'services-advertising', 'sitemap', 'sla', 'smart-analytics',
  'smart-cities', 'smart-city-infrastructure', 'smart-contract-security-audit',
  'specialized-services', 'status', 'support', 'system-admin', 'system-status',
  'task-manager-pro', 'team', 'terms', 'test-simple', 'training', 'web-development'
];

// Convert to route format
const existingRoutes = existingPages.map(page => `/${page}`);

// Find missing routes
const allReferencedRoutes = [...new Set([...appRoutes, ...navRoutes, ...footerRoutes])];
const missingRoutes = allReferencedRoutes.filter(route => 
  !existingRoutes.includes(route) && route !== '/'
);

// Find routes that exist but aren't in App.tsx
const missingFromApp = existingRoutes.filter(route => 
  !appRoutes.includes(route) && route !== '/'
);

console.log('=== ROUTE ANALYSIS ===\n');

console.log('Routes referenced in navigation/footer but missing pages:');
missingRoutes.forEach(route => console.log(`  ${route}`));

console.log('\nRoutes that exist as pages but missing from App.tsx routing:');
missingFromApp.slice(0, 20).forEach(route => console.log(`  ${route}`));
if (missingFromApp.length > 20) {
  console.log(`  ... and ${missingFromApp.length - 20} more`);
}

console.log(`\nTotal referenced routes: ${allReferencedRoutes.length}`);
console.log(`Total existing pages: ${existingRoutes.length}`);
console.log(`Missing pages: ${missingRoutes.length}`);
console.log(`Missing from App.tsx: ${missingFromApp.length}`);