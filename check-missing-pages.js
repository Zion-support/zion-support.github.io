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
      // Check if directory has a page.tsx or page.ts file
      const pageFile = path.join(fullPath, 'page.tsx');
      const pageFileTs = path.join(fullPath, 'page.ts');
      
      if (fs.existsSync(pageFile) || fs.existsSync(pageFileTs)) {
        const relativePath = path.relative(appDir, fullPath);
        existingPages.add('/' + relativePath);
      } else {
        // Recursively check subdirectories
        findPages(fullPath);
      }
    }
  }
}

// Find all existing pages
findPages(appDir);

// Navigation links from the Navigation component
const navigationLinks = [
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech',
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-customer-support', '/ai-sales-automation',
  '/ai-data-visualization', '/ai-lead-generation', '/ai-document-processing', '/ai-predictive-analytics',
  '/ai-image-recognition', '/ai-voice-processing', '/ai-recommendation-engine', '/ai-sentiment-analysis',
  '/ai-research-assistant', '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-services',
  '/devops', '/database', '/networking', '/system-admin', '/it-consulting', '/managed-it',
  '/it-training', '/it-project-management', '/performance-optimization', '/backup-recovery',
  '/enterprise-solutions', '/it-infrastructure-design', '/micro-saas', '/developer-tools',
  '/business-apps', '/marketing-tools', '/analytics-tools', '/communication-tools',
  '/productivity', '/hr-recruitment-tools', '/customer-support-tools', '/sales-crm-tools',
  '/project-management-tools', '/content-creation-tools', '/quantum-computing', '/autonomous-systems',
  '/blockchain-web3', '/iot-edge-computing', '/business-intelligence', '/robotics',
  '/ar-vr-solutions', '/smart-cities', '/digital-transformation', '/innovation-labs',
  '/sustainability-tech', '/future-technologies'
];

// Check for missing pages
const missingPages = [];
const existingPagesList = Array.from(existingPages).sort();

console.log('🔍 Checking for missing pages...\n');

for (const link of navigationLinks) {
  if (!existingPages.has(link)) {
    missingPages.push(link);
  }
}

console.log('📊 Analysis Results:');
console.log(`✅ Total existing pages: ${existingPagesList.length}`);
console.log(`🔗 Navigation links checked: ${navigationLinks.length}`);
console.log(`❌ Missing pages: ${missingPages.length}\n`);

if (missingPages.length > 0) {
  console.log('🚨 Missing Pages:');
  missingPages.forEach(page => {
    console.log(`  - ${page}`);
  });
  console.log('');
}

// Check for pages that exist but aren't in navigation
const orphanedPages = existingPagesList.filter(page => 
  !navigationLinks.includes(page) && 
  page !== '/' && 
  !page.startsWith('/blog/') &&
  !page.includes('page.tsx')
);

if (orphanedPages.length > 0) {
  console.log('📄 Pages not in navigation:');
  orphanedPages.forEach(page => {
    console.log(`  - ${page}`);
  });
  console.log('');
}

// Generate report
const report = {
  analysisDate: new Date().toISOString(),
  totalExistingPages: existingPagesList.length,
  totalNavigationLinks: navigationLinks.length,
  missingPages: missingPages,
  orphanedPages: orphanedPages,
  existingPages: existingPagesList
};

fs.writeFileSync(
  path.join(__dirname, 'missing-pages-analysis.json'),
  JSON.stringify(report, null, 2)
);

console.log('📋 Report saved to missing-pages-analysis.json');