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
    url: `${baseUrl}/enterprise`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/docs`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/api-docs`,
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
  },
  {
    url: `${baseUrl}/demo`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/consultation`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }
];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  staticPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  // Write sitemap to public directory
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log(`📊 Generated ${staticPages.length} URLs`);
}

generateSitemap();
