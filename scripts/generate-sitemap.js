#!/usr/bin/env node
/**
 * Sitemap Generator for Zion Tech Group Website
 * 
 * This script generates a comprehensive sitemap.xml file
 * including all pages, blog posts, and services.
 */

import fs from 'fs';
import path from 'path';

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define all static pages
const staticPages = [
  {
    url: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: 1.0
  },
  {
    url: `${baseUrl}/services`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/about`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/blog`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/case-studies`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/docs`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/support`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/status`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: 0.5
  }
];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  staticPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  sitemap += '</urlset>';

  // Write sitemap to dist directory
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const sitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📄 Generated sitemap with ${staticPages.length} pages`);
}

// Run the generator
generateSitemap();