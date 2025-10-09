#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all existing pages
const appDir = '/workspace/app';
const existingPages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item === 'blog') {
        // Handle blog subdirectories
        const blogItems = fs.readdirSync(fullPath);
        for (const blogItem of blogItems) {
          const blogPath = path.join(fullPath, blogItem);
          const blogStat = fs.statSync(blogPath);
          if (blogStat.isDirectory()) {
            existingPages.push(`/blog/${blogItem}`);
          }
        }
      } else {
        findPages(fullPath);
      }
    } else if (item === 'page.tsx') {
      const relativePath = fullPath.replace(appDir, '');
      const pagePath = relativePath.replace('/page.tsx', '');
      if (pagePath) {
        existingPages.push(pagePath);
      }
    }
  }
}

findPages(appDir);

// Navigation links from the components
const navigationLinks = [
  // Main navigation
  '/', '/about', '/case-studies', '/blog', '/contact',
  
  // AI Services
  '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare', '/ai-fintech',
  '/ai-content-generation', '/ai-data-analytics', '/ai-cybersecurity', '/ai-workflow-automation',
  '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-customer-support',
  '/ai-sales-automation', '/ai-data-visualization', '/ai-lead-generation',
  '/ai-document-processing', '/ai-predictive-analytics', '/ai-image-recognition',
  '/ai-voice-processing', '/ai-recommendation-engine', '/ai-sentiment-analysis',
  '/ai-research-assistant',
  
  // IT Services
  '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-services', '/devops',
  '/database', '/networking', '/system-admin', '/it-consulting', '/managed-it',
  '/it-training', '/it-project-management', '/performance-optimization',
  '/backup-recovery', '/enterprise-solutions', '/it-infrastructure-design',
  
  // Micro SAAS
  '/micro-saas', '/developer-tools', '/business-apps', '/marketing-tools',
  '/analytics-tools', '/communication-tools', '/productivity', '/hr-recruitment-tools',
  '/customer-support-tools', '/sales-crm-tools', '/project-management-tools',
  '/content-creation-tools',
  
  // Specialized
  '/quantum-computing', '/autonomous-systems', '/blockchain-web3', '/iot-edge-computing',
  '/business-intelligence', '/robotics', '/ar-vr-solutions', '/smart-cities',
  '/digital-transformation', '/innovation-labs', '/sustainability-tech', '/future-technologies',
  
  // Footer links
  '/services', '/pricing', '/demo', '/consultation', '/privacy', '/terms', '/cookies',
  '/team', '/careers', '/news', '/docs', '/api-docs', '/support', '/status'
];

// Find missing pages
const missingPages = navigationLinks.filter(link => !existingPages.includes(link));

console.log('=== EXISTING PAGES ===');
console.log(existingPages.length, 'pages found');
console.log(existingPages.sort().join('\n'));

console.log('\n=== MISSING PAGES ===');
console.log(missingPages.length, 'pages missing');
missingPages.forEach(page => console.log(page));

console.log('\n=== PAGES IN NAVIGATION BUT NOT EXISTING ===');
const missingFromNav = existingPages.filter(page => !navigationLinks.includes(page));
console.log(missingFromNav.length, 'pages exist but not in navigation');
missingFromNav.forEach(page => console.log(page));