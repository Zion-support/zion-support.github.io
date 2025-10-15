#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = new Set();

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = '/' + path.relative(appDir, fullPath);
        existingPages.add(route);
      }
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Routes referenced in navigation and footer
const referencedRoutes = [
  // Main pages
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/services',
  '/case-studies',
  '/blog',
  '/team',
  '/careers',
  '/privacy',
  '/terms',
  '/cookies',
  
  // AI Services
  '/ai-services',
  '/ai-solutions',
  '/ai-chatbot-builder',
  '/ai-document-processor',
  '/ai-form-builder',
  '/ai-voice-assistant',
  '/ai-fraud-detection',
  '/ai-image-recognition',
  '/ai-lead-scoring',
  '/ai-predictive-maintenance',
  '/ai-price-optimizer',
  '/ai-scheduling-assistant',
  '/ai-content-generator',
  
  // IT Services
  '/it-services',
  '/cloud-infrastructure',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/network-infrastructure',
  '/5g-solutions',
  '/digital-transformation',
  '/blockchain-solutions',
  '/iot-solutions',
  '/devops-automation',
  '/data-engineering',
  '/api-development',
  '/security-audit',
  
  // Micro SaaS
  '/micro-saas-solutions',
  '/task-manager-pro',
  '/analytics-dashboard',
  '/customer-support-hub',
  '/inventory-manager',
  '/social-media-scheduler',
  '/expense-tracker-pro',
  
  // Resources
  '/tutorials',
  '/docs',
  '/api-docs',
  '/help',
  
  // Company
  '/partnerships',
  
  // Support
  '/support',
  
  // Additional AI Tools from Footer
  '/zion-ai-content-moderator',
  '/zion-ai-customer-support-pro',
  '/zion-ai-workflow-automator-pro',
  '/zion-ai-email-marketing-pro',
  '/zion-ai-customer-churn-predictor',
  '/zion-ai-sales-predictor',
  '/zion-ai-financial-forecaster',
  '/zion-ai-document-analyzer',
  '/zion-ai-task-scheduler',
  '/zion-ai-fraud-detection',
  '/zion-ai-image-recognition',
  '/zion-ai-lead-scoring',
  '/zion-ai-predictive-maintenance',
  '/zion-ai-price-optimizer',
  '/zion-ai-voice-assistant',
  
  // Pro AI Services
  '/ai-voice-assistant-pro',
  '/ai-image-recognition-pro',
  '/ai-fraud-detection-pro',
  '/ai-lead-scoring-pro',
  '/ai-predictive-maintenance-pro',
  '/ai-price-optimizer-pro',
  
  // Enterprise Solutions
  '/blockchain-solutions-pro',
  '/iot-solutions-pro',
  '/devops-automation-pro',
  
  // Additional services
  '/data-analytics',
  '/accessibility'
];

// Find missing pages
const missingPages = referencedRoutes.filter(route => !existingPages.has(route));

console.log('=== MISSING PAGES ANALYSIS ===');
console.log(`Total referenced routes: ${referencedRoutes.length}`);
console.log(`Total existing pages: ${existingPages.size}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(`❌ ${page}`));

console.log('\n=== EXISTING PAGES NOT IN NAVIGATION ===');
const existingNotReferenced = Array.from(existingPages).filter(page => !referencedRoutes.includes(page));
existingNotReferenced.forEach(page => console.log(`ℹ️  ${page}`));

// Save results
const results = {
  totalReferencedRoutes: referencedRoutes.length,
  totalExistingPages: existingPages.size,
  missingPages: missingPages,
  existingNotReferenced: existingNotReferenced
};

fs.writeFileSync('/workspace/missing_pages_analysis.json', JSON.stringify(results, null, 2));
console.log('\n✅ Analysis saved to missing_pages_analysis.json');