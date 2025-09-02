#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ziontechgroup.com';
const PAGES_DIR = path.join(__dirname, '..', 'pages');

// Files to exclude from sitemap
const EXCLUDED_FILES = [
  '_app',
  '_document',
  '_error',
  '404',
  '500',
  'api',
  'test'
];

// Directories to exclude
const EXCLUDED_DIRS = [
  'backup',
  'api',
  '__backup'
];

function generateSitemap() {
  const urls = [];

  // Add static routes
  urls.push({
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '1.0',
  });

  // Scan pages directory for dynamic routes
  if (fs.existsSync(PAGES_DIR)) {
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip excluded directories
          if (EXCLUDED_DIRS.includes(item)) continue;
          
          // Recursively scan subdirectories
          scanDirectory(fullPath, path.join(basePath, item));
        } else if (stat.isFile()) {
          // Skip excluded files
          if (EXCLUDED_FILES.includes(item.replace(/\.[jt]sx?$/, ''))) continue;
          
          // Convert file path to URL
          const url = path.join(basePath, item)
            .replace(/\.[jt]sx?$/, '') // Remove file extension
            .replace(/\/index$/, '') // Remove index suffix
            .replace(/\/$/, ''); // Remove trailing slash
          
          // Skip if URL is empty (root)
          if (url === '') continue;
          
          urls.push({
            url: `/${url}`,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: '0.8',
          });
        }
      }
    };
    
    scanDirectory(PAGES_DIR);
  }

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `  <url>
    <loc>${BASE_URL}${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📍 Location: ${outputPath}`);
  console.log(`🔗 URLs included: ${urls.length}`);
  console.log(`🌐 Base URL: ${BASE_URL}`);
}

generateSitemap();
