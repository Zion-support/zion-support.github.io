#!/usr/bin/env node

/**
 * Sitemap Generator
 * Generates a sitemap.xml for better SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️ Generating sitemap...');

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

// Define all the pages and their priorities
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/enterprise', priority: '0.8', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/machine-learning', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-financial-advisor', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-supply-chain', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-legal-assistant', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-manufacturing', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-education', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-customer-service', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-predictive-maintenance', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-financial-services', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-nlp', priority: '0.8', changefreq: 'monthly' },
  { url: '/computer-vision', priority: '0.8', changefreq: 'monthly' },
  
  // IT Services
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise-infrastructure', priority: '0.8', changefreq: 'monthly' },
  { url: '/devops-automation', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.8', changefreq: 'monthly' },
  { url: '/network-security', priority: '0.8', changefreq: 'monthly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'monthly' },
  { url: '/managed-it-services', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-app-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { url: '/devops', priority: '0.8', changefreq: 'monthly' },
  { url: '/database-services', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise', priority: '0.8', changefreq: 'monthly' },
  
  // Specialized Solutions
  { url: '/quantum-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/autonomous-systems', priority: '0.7', changefreq: 'monthly' },
  { url: '/blockchain', priority: '0.7', changefreq: 'monthly' },
  { url: '/iot-edge', priority: '0.7', changefreq: 'monthly' },
  
  // Micro SAAS Services
  { url: '/ai-project-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-meeting-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-intelligence', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-personal-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-team-collaboration', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-task-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-meeting-scheduler', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-time-tracker', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-writer', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-video-creator', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-podcast-studio', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-graphic-design', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-website-builder', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-social-media-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-email-marketing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-seo-optimizer', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-lead-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-crm', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-financial-analyzer', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-invoice-generator', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-expense-tracker', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-stock-portfolio-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-customer-support-bot', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-chatbot-builder', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-email-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-code-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-mobile-app-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-processing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-data-visualization', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-video-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-voice-cloning', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-music-composition', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-fashion-design', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-3d-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-healthcare', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-fitness-coach', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-sales-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-password-manager', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-logo-designer', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Sitemap saved to: ${sitemapPath}`);
console.log(`🔗 Sitemap URL: ${baseUrl}/sitemap.xml`);
console.log(`📊 Total pages: ${pages.length}`);