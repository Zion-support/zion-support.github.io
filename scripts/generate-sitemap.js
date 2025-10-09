#!/usr/bin/env node

/**
 * Sitemap Generator for Zion Tech Group
 * Generates a comprehensive sitemap.xml file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ziontechgroup.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Define all the pages and their priorities
const pages = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/gdpr', priority: '0.3', changefreq: 'yearly' },
  
  // AI Services
  { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-analytics-dashboard', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-chatbot-builder', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-data-visualization', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-document-processing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-ecommerce-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-email-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fintech', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-lead-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-mobile-app-development', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-sales-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-scheduler', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-writing-assistant', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-project-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-social-media-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-email-marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-customer-support-bot', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-seo-optimizer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-financial-analyzer', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-video-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-voice-cloning', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-music-composition', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fashion-design', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-fitness-coach', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-3d-generation', priority: '0.8', changefreq: 'weekly' },
  { url: '/machine-learning', priority: '0.8', changefreq: 'weekly' },
  { url: '/nlp', priority: '0.8', changefreq: 'weekly' },
  { url: '/computer-vision', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
  { url: '/quantum-ai', priority: '0.8', changefreq: 'weekly' },
  
  // IT Services
  { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
  { url: '/cloud-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/devops', priority: '0.8', changefreq: 'weekly' },
  { url: '/database-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-support', priority: '0.8', changefreq: 'weekly' },
  { url: '/it-consulting', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance', priority: '0.7', changefreq: 'monthly' },
  { url: '/developer-tools', priority: '0.7', changefreq: 'weekly' },
  { url: '/marketing-tools', priority: '0.7', changefreq: 'weekly' },
  { url: '/productivity', priority: '0.7', changefreq: 'weekly' },
  { url: '/business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { url: '/analytics-tools', priority: '0.7', changefreq: 'weekly' },
  { url: '/api', priority: '0.7', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/autonomous-systems', priority: '0.8', changefreq: 'weekly' },
  { url: '/blockchain', priority: '0.8', changefreq: 'weekly' },
  { url: '/blockchain-web3', priority: '0.8', changefreq: 'weekly' },
  { url: '/business-apps', priority: '0.7', changefreq: 'weekly' },
  { url: '/database', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/docs', priority: '0.7', changefreq: 'weekly' },
  { url: '/enterprise', priority: '0.8', changefreq: 'weekly' },
  { url: '/expense-tracker', priority: '0.6', changefreq: 'monthly' },
  { url: '/iot-edge-computing', priority: '0.7', changefreq: 'weekly' },
  { url: '/iot-edge', priority: '0.7', changefreq: 'weekly' },
  { url: '/it-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/networking', priority: '0.7', changefreq: 'weekly' },
  { url: '/news', priority: '0.6', changefreq: 'daily' },
  { url: '/offline', priority: '0.3', changefreq: 'yearly' },
  { url: '/quantum-computing', priority: '0.8', changefreq: 'weekly' },
  { url: '/robotics', priority: '0.8', changefreq: 'weekly' },
  { url: '/security', priority: '0.8', changefreq: 'weekly' },
  { url: '/services-advertising', priority: '0.6', changefreq: 'monthly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'daily' },
  { url: '/smart-analytics', priority: '0.7', changefreq: 'weekly' },
  { url: '/status', priority: '0.5', changefreq: 'daily' },
  { url: '/support', priority: '0.7', changefreq: 'weekly' },
  { url: '/system-status', priority: '0.5', changefreq: 'daily' },
  { url: '/task-manager-pro', priority: '0.6', changefreq: 'monthly' },
  
  // Blog posts
  { url: '/blog/agent-release-runbooks-v2-2026', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2025-2026-mega-trends-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2025-january-advanced-ai-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2025-january-cutting-edge-trends-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2025-march-autonomous-enterprise-operations-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-adaptive-neural-architectures-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-advanced-neural-optimization-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-april-revolutionary-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-april-ultimate-breakthrough-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-autonomous-agent-factories', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-autonomous-business-intelligence-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-autonomous-enterprise-architecture', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-consensus-intelligence-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-enterprise-automation-revolutionary-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-enterprise-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-february-mega-breakthrough-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-february-ultimate-consciousness-breakthrough', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-2026-hyperconscious-computing-revolution', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-autonomous-business-systems-2026', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-cost-optimization-breakthrough-2026', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-enterprise-transformation-2025', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-enterprise-transformation-ultimate-guide-2025', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-innovation-labs-product-development-2025', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-powered-autonomous-business-processes-2026', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/ai-trends-2026-future-enterprise-transformation', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
    console.log(`✅ Sitemap generated successfully at ${SITEMAP_PATH}`);
    console.log(`📊 Total pages: ${pages.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
writeSitemap();