#!/usr/bin/env node

/**
 * SEO Optimization Script for Zion Tech Group Website
 * Generates sitemap, robots.txt, and optimizes meta tags
 */

import fs from,
  fs';
import path from
  'path';
import { fileURLToPath } from
  'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(
  '🔍 Starting SEO optimization...');

// 1. Generate sitemap.xml
function generateSitemap() {
<<<<<<< HEAD
  console.log(
  '🗺️ Generating sitemap...');
  
  const baseUrl =
  'https: //ziontechgroup.com';
  const pages = [
  '/,
  '/about',
  '/contact',
  '/careers',
  '/solutions',
  '/research-development',
  '/case-studies',
  '/news',
  '/events',
  '/services',
  '/services/ai',
  '/services/cloud',
  '/services/cybersecurity',
  '/services/infrastructure',
  '/services/transformation',
  '/services/consulting',
  '/privacy',
  '/terms'
=======
  console.log('🗺️ Generating sitemap...');

  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    '/',
    '/about',
    '/contact',
    '/careers',
    '/solutions',
    '/research-development',
    '/case-studies',
    '/news',
    '/events',
    '/services',
    '/services/ai',
    '/services/cloud',
    '/services/cybersecurity',
    '/services/infrastructure',
    '/services/transformation',
    '/services/consulting',
    '/privacy',
    '/terms',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split(,
  T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
<<<<<<< HEAD
    <priority>${page ===
  '/' ?
  '1.0': '0.8}</priority>
  </url>`).join(
  '\n')}
</urlset>`;
  
  const sitemapPath = path.join(__dirname,
  '../public/sitemap.xml');
=======
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(
  '✅ Generated sitemap.xml');
}

// 2. Generate robots.txt
function generateRobotsTxt() {
<<<<<<< HEAD
  console.log(
  '🤖 Generating robots.txt...');
  
=======
  console.log('🤖 Generating robots.txt...');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/`;
<<<<<<< HEAD
  
  const robotsPath = path.join(__dirname,
,
  ../public/robots.txt');
=======

  const robotsPath = path.join(__dirname, '../public/robots.txt');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(
  '✅ Generated robots.txt');
}

// 3. Generate manifest.json for PWA
function generateManifest() {
<<<<<<< HEAD
  console.log(
  '📱 Generating manifest.json...');
  
  const manifest = {
    name: 'Zion Tech Group - AI-Powered IT Solutions,
    short_name:,
  Zion Tech',
    description: Leading provider of AI-powered IT services, cybersecurity, cloud solutions, and digital transformation.,
  ,
    start_url: '/,
    display:,
  standalone',
    background_color: '#0f172a,
    theme_color:,
  #3b82f6',
    icons: [
      {
        src:
  '/icon-192x192.png,
        sizes:,
  192x192',
        type: 'image/png
      },
      {
        src:,
  /icon-512x512.png',
        sizes: '512x512,
        type:,
  image/png'
      }
    ],
    categories: [
  'technology,
,
  business',
  'productivity'],
    lang: 'en-US,
    orientation:
  'portrait-primary'
  };
  
  const manifestPath = path.join(__dirname,
  '../public/manifest.json');
=======
  console.log('📱 Generating manifest.json...');

  const manifest = {
    name: 'Zion Tech Group - AI-Powered IT Solutions',
    short_name: 'Zion Tech',
    description:
      'Leading provider of AI-powered IT services, cybersecurity, cloud solutions, and digital transformation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'business', 'productivity'],
    lang: 'en-US',
    orientation: 'portrait-primary',
  };

  const manifestPath = path.join(__dirname, '../public/manifest.json');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(
  '✅ Generated manifest.json');
}

// 4. Generate structured data
function generateStructuredData() {
<<<<<<< HEAD
  console.log(
  '📊 Generating structured data...');
  
=======
  console.log('📊 Generating structured data...');

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description:
      'Leading provider of AI-powered IT services, cybersecurity, cloud solutions, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Information Technology',
    services: [
      'AI Development',
      'Cybersecurity',
      'Cloud Solutions',
      'Digital Transformation',
      'IT Consulting',
    ],
  };
<<<<<<< HEAD
  
  const structuredDataPath = path.join(__dirname,
  '../public/structured-data.json');
=======

  const structuredDataPath = path.join(
    __dirname,
    '../public/structured-data.json'
  );
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));
  console.log(
  '✅ Generated structured data');
}

// 5. Main execution
async function main() {
  try {
    generateSitemap();
    generateRobotsTxt();
    generateManifest();
    generateStructuredData();
<<<<<<< HEAD
    
    console.log(
  '✅ SEO optimization completed successfully!');
=======

    console.log('✅ SEO optimization completed successfully!');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
  } catch (error) {
    console.error(
  '❌ SEO optimization failed:', error.message);
    process.exit(1);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  generateSitemap,
  generateRobotsTxt,
  generateManifest,
  generateStructuredData,
};
