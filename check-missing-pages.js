#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract all navigation links from the Navigation component
const navigationLinks = [
  // Main navigation
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/tutorials',
  '/consultation',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',
  '/team',
  
  // AI Services from navigation
  '/ai-analytics',
  '/ai-automation',
  '/ai-chatbot-builder',
  '/ai-crm',
  '/ai-cybersecurity',
  '/ai-data-analytics',
  '/ai-healthcare',
  '/ai-financial-services',
  '/ai-computer-vision',
  '/ai-voice-solutions',
  '/ai-ecommerce-solutions',
  '/ai-hr-solutions',
  '/ai-content-generation',
  '/ai-workflow-automation',
  '/ai-document-processing',
  '/ai-predictive-analytics',
  '/ai-edge-computing',
  '/ai-video-analysis',
  '/ai-speech-synthesis',
  '/ai-recommendation-engine',
  '/ai-sentiment-analysis',
  '/ai-chatbot-enterprise',
  '/ai-content-moderation',
  '/ai-predictive-modeling',
  '/ai-document-intelligence',
  '/ai-conversation-analytics',
  '/ai-supply-chain-ai',
  '/ai-healthcare-diagnostics',
  '/ai-financial-forecasting',
  '/ai-iot-analytics',
  '/ai-conversational-ai',
  '/ai-automated-testing',
  '/ai-knowledge-management',
  '/ai-customer-churn',
  '/ai-automated-reporting',
  '/ai-voice-assistant',
  '/ai-content-generation-pro',
  
  // IT Services from navigation
  '/cloud-infrastructure',
  '/api-development',
  '/cybersecurity-solutions',
  '/database-management',
  '/mobile-development',
  '/web-development',
  '/devops-cicd',
  '/it-support',
  '/data-analytics-bi',
  '/custom-software',
  '/network-infrastructure',
  '/it-asset-management',
  '/it-security-services',
  '/it-project-management',
  '/cloud-native-development',
  '/ai-integration-services',
  '/blockchain-development',
  '/iot-development',
  '/e-commerce-development',
  '/api-development-advanced',
  '/data-engineering',
  '/cybersecurity-advanced',
  '/cloud-migration-advanced',
  '/devops-advanced',
  '/machine-learning-ops',
  '/enterprise-integration',
  '/performance-optimization',
  '/disaster-recovery-advanced',
  '/compliance-automation',
  '/cloud-cost-optimization',
  '/security-automation',
  '/data-visualization',
  '/workflow-automation',
  '/cloud-native-security',
  
  // Micro SAAS from navigation
  '/zion-analytics-pro',
  '/zion-chat-ai',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/zion-crm-intelligence',
  '/zion-data-sync',
  '/zion-lead-magnet',
  '/zion-project-master',
  '/zion-email-automation',
  '/zion-inventory-smart',
  '/zion-invoice-genius',
  '/zion-workflow-automation',
  '/zion-performance-monitor',
  '/zion-compliance-manager',
  '/zion-social-scheduler',
  '/zion-ai-video-editor',
  '/zion-ai-translator-pro',
  '/zion-ai-code-reviewer',
  '/zion-customer-insights',
  '/zion-ai-email-assistant',
  '/zion-ai-meeting-assistant',
  '/zion-ai-seo-optimizer',
  '/zion-ai-data-cleaner',
  '/zion-ai-contract-analyzer',
  '/zion-ai-survey-builder',
  '/zion-ai-accounting-assistant',
  '/zion-ai-recruitment-pro',
  '/zion-ai-content-moderation',
  '/zion-ai-predictive-maintenance',
  '/zion-ai-energy-manager',
  '/zion-ai-supply-chain-optimizer',
  '/zion-ai-fraud-detector',
  '/zion-ai-customer-service-pro',
  '/zion-ai-marketing-automation',
  '/zion-ai-document-ai',
  
  // Emerging Tech from navigation
  '/5g-implementation',
  '/ai-3d-generation',
  '/ai-holographic-workspace',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-edge-computing',
  '/quantum-computing',
  '/ar-vr-solutions',
  '/iot-integration',
  '/machine-learning',
  
  // Footer links
  '/partners',
  '/status',
  '/faq',
  '/docs',
  '/api-docs',
  '/community',
  '/compliance',
  '/enterprise',
  '/digital-transformation',
  '/business-intelligence',
  '/edge-computing',
  '/custom-software'
];

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        // Convert to route path
        const routePath = '/' + path.relative(appDir, fullPath);
        existingPages.push(routePath);
      }
      
      // Recursively search subdirectories
      findPages(fullPath);
    }
  }
}

// Find all existing pages
findPages(appDir);

// Compare navigation links with existing pages
const missingPages = [];
const existingRoutes = new Set(existingPages);

console.log('=== MISSING PAGES ANALYSIS ===\n');

for (const link of navigationLinks) {
  if (!existingRoutes.has(link)) {
    missingPages.push(link);
  }
}

console.log(`Total navigation links: ${navigationLinks.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}\n`);

if (missingPages.length > 0) {
  console.log('MISSING PAGES:');
  console.log('==============');
  missingPages.forEach(page => {
    console.log(`❌ ${page}`);
  });
} else {
  console.log('✅ All navigation links have corresponding pages!');
}

// Check for pages that exist but aren't in navigation
const orphanPages = existingPages.filter(page => !navigationLinks.includes(page));

if (orphanPages.length > 0) {
  console.log('\n\nORPHAN PAGES (exist but not in navigation):');
  console.log('============================================');
  orphanPages.slice(0, 20).forEach(page => {
    console.log(`📄 ${page}`);
  });
  if (orphanPages.length > 20) {
    console.log(`... and ${orphanPages.length - 20} more`);
  }
}

// Save results to file
const results = {
  totalNavigationLinks: navigationLinks.length,
  totalExistingPages: existingPages.length,
  missingPages: missingPages,
  orphanPages: orphanPages,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('/workspace/missing-pages-analysis.json', JSON.stringify(results, null, 2));
console.log('\n📊 Analysis saved to missing-pages-analysis.json');