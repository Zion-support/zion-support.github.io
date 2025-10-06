#!/usr/bin/env node

/**
 * Comprehensive Sitemap Generator for Zion Tech Group
 * Generates XML sitemaps for all content types
 * Updated: October 1, 2025
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://ziontechgroup.com';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Generate XML sitemap header
 */
function generateSitemapHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;
}

/**
 * Generate URL entry
 */
function generateUrlEntry(url, lastmod, changefreq = 'weekly', priority = '0.8') {
  return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

/**
 * Get all markdown files from a directory
 */
function getMarkdownFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extract date from markdown frontmatter
 */
function getDateFromMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const dateMatch = content.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      return dateMatch[1];
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
  
  // Fallback to file modification time
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().split('T')[0];
}

/**
 * Generate blog sitemap
 */
function generateBlogSitemap() {
  console.log('Generating blog sitemap...');
  
  const blogDir = path.join(__dirname, '../content/blog');
  const blogFiles = getMarkdownFiles(blogDir);
  
  let sitemap = generateSitemapHeader();
  
  for (const file of blogFiles) {
    const fileName = path.basename(file, '.md');
    const date = getDateFromMarkdown(file);
    const url = `/blog/${fileName}`;
    
    sitemap += generateUrlEntry(url, date, 'weekly', '0.9');
  }
  
  sitemap += '</urlset>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-blog.xml'), sitemap);
  console.log(`✓ Generated sitemap-blog.xml with ${blogFiles.length} entries`);
  
  return blogFiles.length;
}

/**
 * Generate case studies sitemap
 */
function generateCaseStudiesSitemap() {
  console.log('Generating case studies sitemap...');
  
  const csDir = path.join(__dirname, '../content/case-studies');
  const csFiles = getMarkdownFiles(csDir);
  
  let sitemap = generateSitemapHeader();
  
  for (const file of csFiles) {
    const fileName = path.basename(file, '.md');
    const date = getDateFromMarkdown(file);
    const url = `/case-studies/${fileName}`;
    
    sitemap += generateUrlEntry(url, date, 'monthly', '0.8');
  }
  
  sitemap += '</urlset>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-case-studies.xml'), sitemap);
  console.log(`✓ Generated sitemap-case-studies.xml with ${csFiles.length} entries`);
  
  return csFiles.length;
}

/**
 * Generate services sitemap
 */
function generateServicesSitemap() {
  console.log('Generating services sitemap...');
  
  const servicesDir = path.join(__dirname, '../content/services');
  const servicesFiles = getMarkdownFiles(servicesDir);
  
  let sitemap = generateSitemapHeader();
  
  for (const file of servicesFiles) {
    const fileName = path.basename(file, '.md');
    const date = getDateFromMarkdown(file);
    const url = `/services/${fileName}`;
    
    sitemap += generateUrlEntry(url, date, 'monthly', '0.9');
  }
  
  sitemap += '</urlset>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-services.xml'), sitemap);
  console.log(`✓ Generated sitemap-services.xml with ${servicesFiles.length} entries`);
  
  return servicesFiles.length;
}

/**
 * Generate main pages sitemap
 */
function generateMainSitemap() {
  console.log('Generating main sitemap...');
  
  const today = new Date().toISOString().split('T')[0];
  
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/case-studies', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
  ];
  
  let sitemap = generateSitemapHeader();
  
  for (const page of mainPages) {
    sitemap += generateUrlEntry(page.url, today, page.changefreq, page.priority);
  }
  
  sitemap += '</urlset>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-main.xml'), sitemap);
  console.log(`✓ Generated sitemap-main.xml with ${mainPages.length} entries`);
  
  return mainPages.length;
}

/**
 * Generate sitemap index
 */
function generateSitemapIndex(counts) {
  console.log('Generating sitemap index...');
  
  const today = new Date().toISOString().split('T')[0];
  
  const sitemaps = [
    'sitemap-main.xml',
    'sitemap-blog.xml',
    'sitemap-case-studies.xml',
    'sitemap-services.xml',
  ];
  
  let index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  for (const sitemap of sitemaps) {
    index += `  <sitemap>
    <loc>${SITE_URL}/${sitemap}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;
  }
  
  index += '</sitemapindex>';
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), index);
  console.log('✓ Generated sitemap.xml (index)');
}

/**
 * Main execution
 */
function main() {
  console.log('  console.log('Comprehensive Sitemap Generator');
  console.log('  
  const counts = {
    main: generateMainSitemap(),
    blog: generateBlogSitemap(),
    caseStudies: generateCaseStudiesSitemap(),
    services: generateServicesSitemap(),
  };
  
  generateSitemapIndex(counts);
  
  console.log('\n  console.log('Summary:');
  console.log(`  Main pages: ${counts.main}`);
  console.log(`  Blog posts: ${counts.blog}`);
  console.log(`  Case studies: ${counts.caseStudies}`);
  console.log(`  Services: ${counts.services}`);
  console.log(`  Total URLs: ${Object.values(counts).reduce((a, b) => a + b, 0)}`);
  console.log('  console.log('✓ All sitemaps generated successfully!');
  console.log(`  Output directory: ${OUTPUT_DIR}`);
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { main };
