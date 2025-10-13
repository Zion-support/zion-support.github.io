#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const SITE_URL = 'https://ziontechgroup.com';
const SITEMAP_PATH = 'public/sitemap.xml';

// Priority mapping for different page types
const PRIORITY_MAP = {
  '/': 1.0,
  '/about': 0.8,
  '/contact': 0.9,
  '/services': 0.9,
  '/ai-services': 0.8,
  '/micro-saas': 0.8,
  '/5g-solutions': 0.8,
  '/accessibility': 0.6,
  // AI service pages
  '/ai-': 0.7,
  // Zion service pages
  '/zion-': 0.7,
  // 5G service pages
  '/5g-': 0.7,
};

// Change frequency mapping
const CHANGE_FREQ_MAP = {
  '/': 'weekly',
  '/about': 'monthly',
  '/contact': 'monthly',
  '/services': 'weekly',
  '/ai-services': 'weekly',
  '/micro-saas': 'weekly',
  '/5g-solutions': 'weekly',
  '/accessibility': 'monthly',
  '/ai-': 'monthly',
  '/zion-': 'monthly',
  '/5g-': 'monthly',
};

function getPriority(url) {
  for (const [pattern, priority] of Object.entries(PRIORITY_MAP)) {
    if (url === pattern || url.startsWith(pattern)) {
      return priority;
    }
  }
  return 0.5; // Default priority
}

function getChangeFreq(url) {
  for (const [pattern, freq] of Object.entries(CHANGE_FREQ_MAP)) {
    if (url === pattern || url.startsWith(pattern)) {
      return freq;
    }
  }
  return 'monthly'; // Default frequency
}

function generateSitemap() {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/accessibility',
  ];

  // Find all page.tsx files
  const pageFiles = glob.sync('app/**/page.tsx', { cwd: process.cwd() });
  
  pageFiles.forEach(file => {
    const relativePath = file.replace('app/', '').replace('/page.tsx', '');
    if (relativePath && relativePath !== 'page') {
      const url = `/${relativePath}`;
      if (!pages.includes(url)) {
        pages.push(url);
      }
    }
  });

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => {
  const url = page === '/' ? SITE_URL : `${SITE_URL}${page}`;
  const priority = getPriority(page);
  const changefreq = getChangeFreq(page);
  const lastmod = new Date().toISOString().split('T')[0];
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
  console.log(`✅ Sitemap generated: ${SITEMAP_PATH}`);
  console.log(`📄 ${pages.length} pages included`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions`;

  fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8');
  console.log('✅ robots.txt generated');
}

async function main() {
  console.log('🗺️  Generating sitemap and robots.txt...');
  
  // Ensure public directory exists
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  
  generateSitemap();
  generateRobotsTxt();
  
  console.log('✨ SEO files generated successfully!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateSitemap, generateRobotsTxt };