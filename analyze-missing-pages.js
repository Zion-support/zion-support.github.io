#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Navigation links from the Navigation component
const navigationLinks = [
  // Main navigation
  '/',
  '/about',
  '/services',
  '/ai-services',
  '/it-services',
  '/blog',
  '/contact',
  
  // Micro SAAS Services
  '/ai-project-manager',
  '/ai-writing-assistant',
  '/ai-crm',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-mobile-app-development',
  '/ai-cybersecurity',
  '/ai-marketing',
  '/task-manager-pro',
  '/expense-tracker',
  '/ai-chatbot-builder',
  '/ai-data-analytics',
  '/ai-social-media-manager',
  '/ai-email-marketing',
  '/ai-customer-support-bot',
  '/ai-code-generation',
  '/ai-content-generation',
  '/ai-lead-generation',
  '/ai-document-processing',
  '/ai-seo-optimizer',
  '/ai-ecommerce-solutions',
  '/ai-financial-analyzer',
  '/ai-video-generation',
  '/ai-voice-cloning',
  '/ai-music-composition',
  '/ai-fashion-design',
  '/ai-fitness-coach',
  '/ai-workflow-automation',
  '/ai-sales-automation',
  '/ai-data-visualization',
  '/ai-3d-generation',
  
  // AI Services
  '/machine-learning',
  '/ai-business-intelligence',
  '/ai-supply-chain',
  '/ai-quality-assurance',
  '/ai-hr',
  '/ai-legal',
  '/ai-real-estate',
  '/ai-manufacturing',
  '/ai-transportation',
  '/ai-education',
  '/ai-energy',
  '/ai-insurance',
  '/nlp',
  '/computer-vision',
  '/ai-automation',
  '/quantum-ai',
  '/ai-cybersecurity',
  '/ai-healthcare',
  '/ai-fintech',
  '/ai-mobile-app-development',
  '/ai-crm',
  '/ai-email-assistant',
  '/ai-scheduler',
  
  // IT Services
  '/cloud-services',
  '/enterprise-security',
  '/it-infrastructure',
  '/data-center',
  '/network-security',
  '/it-consulting',
  '/managed-it',
  '/cloud-security',
  '/it-asset-management',
  '/backup-recovery',
  '/it-training',
  '/it-performance',
  '/cybersecurity',
  '/devops',
  '/database-services',
  '/network-infrastructure',
  '/it-support',
  '/cloud-migration',
  '/compliance',
  '/developer-tools',
  '/marketing-tools',
  '/productivity',
  
  // Specialized Services
  '/quantum-computing',
  '/autonomous-systems',
  '/blockchain',
  '/iot-edge',
  '/business-intelligence',
  '/robotics',
  '/enterprise',
  '/analytics-tools',
  '/business-apps',
  '/expense-tracker',
  '/task-manager-pro',
  '/smart-analytics',
  
  // Additional pages from footer
  '/team',
  '/careers',
  '/case-studies',
  '/news',
  '/pricing',
  '/demo',
  '/support',
  '/docs',
  '/api-docs',
  '/status',
  '/system-status',
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/security'
];

// Get existing pages
const existingPages = [];
const srcDir = path.join(__dirname, 'src');

function findPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Check if directory has a page.tsx file
      const pagePath = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const relativePath = filePath.replace(srcDir, '');
        const route = relativePath === '' ? '/' : relativePath;
        existingPages.push(route);
      }
      
      // Recursively search subdirectories
      findPages(filePath);
    }
  }
}

findPages(srcDir);

// Find missing pages
const missingPages = navigationLinks.filter(link => !existingPages.includes(link));

console.log('=== MISSING PAGES ANALYSIS ===\n');
console.log(`Total navigation links: ${navigationLinks.length}`);
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Missing pages: ${missingPages.length}\n`);

if (missingPages.length > 0) {
  console.log('MISSING PAGES:');
  missingPages.forEach(page => {
    console.log(`- ${page}`);
  });
} else {
  console.log('✅ All navigation links have corresponding pages!');
}

console.log('\n=== EXISTING PAGES NOT IN NAVIGATION ===\n');
const extraPages = existingPages.filter(page => !navigationLinks.includes(page));
if (extraPages.length > 0) {
  console.log('Pages that exist but are not in navigation:');
  extraPages.forEach(page => {
    console.log(`- ${page}`);
  });
} else {
  console.log('✅ All existing pages are included in navigation!');
}