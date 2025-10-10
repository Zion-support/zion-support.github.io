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
    url: `${baseUrl}/about`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/services`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/contact`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/blog`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: 0.8
  },
  {
    url: `${baseUrl}/case-studies`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/enterprise`,
    lastmod: currentDate,
    changefreq: 'weekly',
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
    priority: 0.5
  },
  {
    url: `${baseUrl}/status`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: 0.4
  },
  {
    url: `${baseUrl}/consultation`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/demo`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }
];

// Define service pages
const servicePages = [
  'ai-analytics',
  'ai-automation',
  'ai-security',
  'cloud-migration',
  'devops',
  'data-engineering',
  'healthcare-ai',
  'fintech-ai',
  'quantum-computing',
  'blockchain-ai'
];

// Define blog posts (example - in real implementation, this would be dynamic)
const blogPosts = [
  'ai-enterprise-future-2024',
  'cloud-migration-best-practices',
  'cybersecurity-age-of-ai',
  'business-case-for-ai',
  'quantum-computing-next-frontier',
  'devops-transformation-guide'
];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add service pages
  servicePages.forEach(service => {
    sitemap += `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📊 Total URLs: ${staticPages.length + servicePages.length + blogPosts.length}`);
}

// Run the generator
generateSitemap();