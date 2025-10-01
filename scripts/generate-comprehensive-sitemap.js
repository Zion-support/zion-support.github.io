#!/usr/bin/env node

/**
 * Comprehensive Sitemap Generator
 * Generates XML sitemap for all content including blog posts, case studies, and services
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ziontechgroup.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Priority and change frequency configurations
const CONFIG = {
  home: { priority: 1.0, changefreq: 'daily' },
  mainPages: { priority: 0.9, changefreq: 'weekly' },
  blog: { priority: 0.8, changefreq: 'weekly' },
  caseStudies: { priority: 0.8, changefreq: 'monthly' },
  services: { priority: 0.9, changefreq: 'monthly' },
  other: { priority: 0.5, changefreq: 'monthly' }
};

// Scan directories for content
function scanDirectory(dir, baseUrl = '') {
  const urls = [];
  
  try {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      return urls;
    }

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Check if directory contains page.tsx or index file
        const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) ||
                       fs.existsSync(path.join(fullPath, 'index.tsx')) ||
                       fs.existsSync(path.join(fullPath, 'page.ts'));
        
        if (hasPage) {
          const url = `${baseUrl}/${item}`;
          urls.push(url);
        }
        
        // Recursively scan subdirectories
        const subUrls = scanDirectory(fullPath, `${baseUrl}/${item}`);
        urls.push(...subUrls);
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dir}:`, error.message);
  }
  
  return urls;
}

// Get all blog posts
function getBlogUrls() {
  const blogDir = path.join(__dirname, '../app/blog');
  const contentBlogDir = path.join(__dirname, '../content/blog');
  const srcBlogDir = path.join(__dirname, '../src/pages/blog');
  
  const urls = new Set();
  
  // Scan app/blog
  const appBlogUrls = scanDirectory(blogDir, '/blog');
  appBlogUrls.forEach(url => urls.add(url));
  
  // Scan content/blog (markdown files)
  if (fs.existsSync(contentBlogDir)) {
    const mdFiles = fs.readdirSync(contentBlogDir).filter(f => f.endsWith('.md'));
    mdFiles.forEach(file => {
      const slug = file.replace('.md', '');
      urls.add(`/blog/${slug}`);
    });
  }
  
  // Scan src/pages/blog
  const srcBlogUrls = scanDirectory(srcBlogDir, '/blog');
  srcBlogUrls.forEach(url => urls.add(url));
  
  return Array.from(urls);
}

// Get all case studies
function getCaseStudyUrls() {
  const caseStudiesDir = path.join(__dirname, '../app/case-studies');
  const contentCaseStudiesDir = path.join(__dirname, '../content/case-studies');
  
  const urls = new Set();
  
  // Scan app/case-studies
  const appUrls = scanDirectory(caseStudiesDir, '/case-studies');
  appUrls.forEach(url => urls.add(url));
  
  // Scan content/case-studies
  if (fs.existsSync(contentCaseStudiesDir)) {
    const mdFiles = fs.readdirSync(contentCaseStudiesDir).filter(f => f.endsWith('.md'));
    mdFiles.forEach(file => {
      const slug = file.replace('.md', '');
      urls.add(`/case-studies/${slug}`);
    });
  }
  
  return Array.from(urls);
}

// Get all service pages
function getServiceUrls() {
  const servicesDir = path.join(__dirname, '../app/services');
  const contentServicesDir = path.join(__dirname, '../content/services');
  
  const urls = new Set();
  
  // Scan app/services
  if (fs.existsSync(servicesDir)) {
    const appUrls = scanDirectory(servicesDir, '/services');
    appUrls.forEach(url => urls.add(url));
  }
  
  // Scan content/services
  if (fs.existsSync(contentServicesDir)) {
    const mdFiles = fs.readdirSync(contentServicesDir).filter(f => f.endsWith('.md'));
    mdFiles.forEach(file => {
      const slug = file.replace('.md', '');
      urls.add(`/services/${slug}`);
    });
  }
  
  return Array.from(urls);
}

// Generate URL entry
function generateUrlEntry(url, config) {
  const fullUrl = `${BASE_URL}${url}`;
  const lastmod = new Date().toISOString().split('T')[0];
  
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
}

// Generate sitemap
function generateSitemap() {
  console.log('🗺️  Generating comprehensive sitemap...\n');
  
  const urls = [];
  
  // Add homepage
  urls.push(generateUrlEntry('/', CONFIG.home));
  
  // Add main pages
  const mainPages = ['/about', '/contact', '/services', '/blog', '/case-studies'];
  mainPages.forEach(page => {
    urls.push(generateUrlEntry(page, CONFIG.mainPages));
  });
  
  // Add blog posts
  console.log('📝 Scanning blog posts...');
  const blogUrls = getBlogUrls();
  console.log(`   Found ${blogUrls.length} blog posts`);
  blogUrls.forEach(url => {
    urls.push(generateUrlEntry(url, CONFIG.blog));
  });
  
  // Add case studies
  console.log('📊 Scanning case studies...');
  const caseStudyUrls = getCaseStudyUrls();
  console.log(`   Found ${caseStudyUrls.length} case studies`);
  caseStudyUrls.forEach(url => {
    urls.push(generateUrlEntry(url, CONFIG.caseStudies));
  });
  
  // Add services
  console.log('🛠️  Scanning services...');
  const serviceUrls = getServiceUrls();
  console.log(`   Found ${serviceUrls.length} services`);
  serviceUrls.forEach(url => {
    urls.push(generateUrlEntry(url, CONFIG.services));
  });
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  
  console.log(`\n✅ Sitemap generated successfully!`);
  console.log(`📄 Total URLs: ${urls.length}`);
  console.log(`📍 Output: ${OUTPUT_PATH}`);
  console.log(`\n🌐 Submit to:`);
  console.log(`   - Google Search Console: https://search.google.com/search-console`);
  console.log(`   - Bing Webmaster: https://www.bing.com/webmasters`);
}

// Run generator
try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
