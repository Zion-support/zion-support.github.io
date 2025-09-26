#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const pagesDir = './pages';
const outputFile = './public/sitemap.xml';

// Define static routes
const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/services',
  '/blog',
  '/portfolio',
  '/dashboard',
  '/faq',
  '/privacy-policy',
  '/enhanced-home'
];

// Define dynamic routes (if any)
const dynamicRoutes = [
  // Add dynamic routes here if needed
];

// Define API routes for sitemap
const apiRoutes = [
  '/api/analytics',
  '/api/health',
  '/api/error-reporting',
  '/api/image-optimization',
  '/api/security-events'
];

// Generate sitemap XML
function generateSitemap() {
  const routes = [...staticRoutes, ...dynamicRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes.map(route => {
  const url = `${baseUrl}${route}`;
  const lastmod = new Date().toISOString().split('T')[0];
  
  // Set priority and changefreq based on route
  let priority = '0.8';
  let changefreq = 'weekly';
  
  if (route === '') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (route === '/blog') {
    priority = '0.9';
    changefreq = 'daily';
  } else if (route === '/services' || route === '/about') {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (route === '/contact' || route === '/faq') {
    priority = '0.7';
    changefreq = 'monthly';
  }
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(outputFile, sitemap, 'utf8');
    console.log(`✅ Sitemap generated successfully at ${outputFile}`);
    console.log(`📊 Generated ${staticRoutes.length + dynamicRoutes.length} URLs`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeSitemap();