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
  '/smart-city-solutions',
];

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
console.log(`Total links checked: ${allLinks.length}`);
console.log(`Existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log('\n=== MISSING PAGES ===');
missingPages.forEach(page => console.log(page));

// Also check for pages that exist but aren't linked
const linkedPages = new Set(allLinks.map(l => l.replace(/^\//, '')));
const unlinkedPages = existingPages
  .map(p => p.replace(/^\//, ''))
  .filter(p => p !== '' && !linkedPages.has(p));

console.log('\n=== UNLINKED PAGES ===');
console.log(`Unlinked pages: ${unlinkedPages.length}`);
unlinkedPages.forEach(page => console.log(page));

// Generate report
const report = {
  totalLinksChecked: allLinks.length,
  existingPages: existingPages.length,
  missingPages: missingPages.length,
  unlinkedPages: unlinkedPages.length,
  missingPagesList: missingPages,
  unlinkedPagesList: unlinkedPages
};

fs.writeFileSync('/workspace/missing-pages-report.json', JSON.stringify(report, null, 2));
console.log('\nReport saved to missing-pages-report.json');