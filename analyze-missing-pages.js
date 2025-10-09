#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing pages
const appDir = '/workspace/app';
const existingPages = [];

function findPages(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        existingPages.push(basePath + '/' + item);
      } else {
        findPages(fullPath, basePath + '/' + item);
      }
    }
  }
}

findPages(appDir);

// Links from navigation and footer
const referencedLinks = [
  // Main navigation
  '/',
  '/about',
  '/blog',
  '/case-studies',
  '/pricing',
  '/contact',
  '/services',
  '/specialized-services',
  
  // Micro SAAS Services
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-customer-support-bot',
  '/ai-code-generation',
  '/ai-video-generation',
  '/ai-voice-cloning',
  '/ai-music-composition',
  '/ai-fashion-design',
  '/ai-fitness-coach',
  '/ai-3d-generation',
  '/ai-workflow-automation',
  '/ai-sales-automation',
  '/ai-data-visualization',
  '/ai-customer-support',
  '/ai-content-writer',
  '/ai-seo-optimizer',
  '/ai-financial-analyzer',
  
  // AI Services
  '/machine-learning',
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
  '/cybersecurity',
  '/devops',
  '/database-services',
  '/network-infrastructure',
  '/it-support',
  '/it-consulting',
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
  
  // Company Links
  '/team',
  '/careers',
  '/news',
  '/demo',
  
  // Support Links
  '/support',
  '/docs',
  '/api-docs',
  '/status',
  '/system-status',
  
  // Legal Links
  '/privacy',
  '/terms',
  '/cookies',
  '/gdpr',
  '/security',
];

console.log('=== EXISTING PAGES ===');
existingPages.sort().forEach(page => console.log(page));

console.log('\n=== REFERENCED LINKS ===');
referencedLinks.sort().forEach(link => console.log(link));

console.log('\n=== MISSING PAGES ===');
const missingPages = referencedLinks.filter(link => 
  link !== '/' && !existingPages.includes(link)
);
missingPages.forEach(page => console.log(page));

console.log('\n=== SUMMARY ===');
console.log(`Total existing pages: ${existingPages.length}`);
console.log(`Total referenced links: ${referencedLinks.length}`);
console.log(`Missing pages: ${missingPages.length}`);