#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes defined in App.tsx
const definedRoutes = [
  '/', '/about', '/contact', '/services', '/blog', '/case-studies',
  '/ai-analytics-dashboard', '/ai-chatbot-builder', '/ai-content-generation', '/ai-crm',
  '/ai-customer-support', '/ai-cybersecurity', '/ai-data-analytics', '/ai-data-visualization',
  '/ai-document-processing', '/ai-ecommerce-solutions', '/ai-email-assistant', '/ai-fintech',
  '/ai-healthcare', '/ai-lead-generation', '/ai-marketing', '/ai-mobile-app-development',
  '/ai-sales-automation', '/ai-scheduler', '/ai-services', '/ai-workflow-automation',
  '/ai-writing-assistant', '/ai-project-manager', '/ai-social-media-manager', '/ai-email-marketing',
  '/ai-customer-support-bot', '/ai-seo-optimizer', '/ai-financial-analyzer', '/ai-video-generation',
  '/ai-voice-cloning', '/ai-music-composition', '/ai-fashion-design', '/ai-fitness-coach',
  '/ai-3d-generation', '/machine-learning', '/nlp', '/computer-vision', '/ai-automation',
  '/quantum-ai', '/database-services', '/network-infrastructure', '/it-support',
  '/web-development', '/ai-fraud-detection', '/ai-content-writer', '/ai-code-generation',
  '/ai-business-intelligence', '/it-consulting', '/cloud-migration', '/team', '/careers',
  '/analytics-tools', '/api-docs', '/api', '/autonomous-systems', '/blockchain',
  '/blockchain-web3', '/business-apps', '/business-intelligence', '/cloud-services',
  '/compliance', '/consultation', '/cookies', '/cybersecurity', '/database', '/demo',
  '/developer-tools', '/devops', '/docs', '/enterprise', '/expense-tracker', '/gdpr',
  '/iot-edge-computing', '/iot-edge', '/it-infrastructure', '/it-services', '/marketing-tools',
  '/micro-saas', '/networking', '/news', '/offline', '/pricing', '/privacy', '/productivity',
  '/quantum-computing', '/robotics', '/security', '/services-advertising', '/sitemap',
  '/smart-analytics', '/status', '/support', '/system-status', '/task-manager-pro', '/terms'
];

// Get existing pages from src directory
function getExistingPages() {
  const srcDir = '/workspace/src';
  const pages = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const route = basePath + '/' + item;
          pages.push(route);
        }
        scanDirectory(fullPath, basePath + '/' + item);
      }
    }
  }
  
  scanDirectory(srcDir);
  return pages;
}

const existingPages = getExistingPages();
console.log('Existing pages:', existingPages.length);
console.log('Defined routes:', definedRoutes.length);

// Find missing pages
const missingPages = definedRoutes.filter(route => {
  if (route === '/') return false; // Home page is handled differently
  const pagePath = route.substring(1); // Remove leading slash
  return !existingPages.includes('/' + pagePath);
});

console.log('\nMissing pages:');
missingPages.forEach(page => console.log('  -', page));

// Find pages that exist but aren't in routes
const extraPages = existingPages.filter(page => {
  if (page === '/page.tsx') return false; // Skip the main page.tsx
  return !definedRoutes.includes(page);
});

console.log('\nPages that exist but aren\'t in routes:');
extraPages.forEach(page => console.log('  -', page));