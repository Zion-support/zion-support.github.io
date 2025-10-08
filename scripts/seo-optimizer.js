#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Starting SEO optimization...');

// Function to add SEO meta tags
function addSEOMetaTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add structured data for organization
    if (content.includes('<Helmet>') && !content.includes('application/ld+json')) {
      const structuredData = `
          <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup"
              ],
              "offers": {
                "@type": "Offer",
                "name": "AI Enterprise Transformation Services",
                "description": "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains",
                "price": "50000",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          </script>`;

      content = content.replace(
        /<\/Helmet>/,
        `${structuredData}\n        </Helmet>`
      );
      modified = true;
    }

    // Add Open Graph meta tags
    if (content.includes('<Helmet>') && !content.includes('og:title')) {
      const ogTags = `
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta property="og:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta name="twitter:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />`;

      content = content.replace(
        /<\/Helmet>/,
        `${ogTags}\n        </Helmet>`
      );
      modified = true;
    }

    // Add canonical URL
    if (content.includes('<Helmet>') && !content.includes('canonical')) {
      content = content.replace(
        /<\/Helmet>/,
        `          <link rel="canonical" href="https://ziontechgroup.com" />\n        </Helmet>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added SEO meta tags to: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error optimizing SEO in ${filePath}:`, error.message);
    return false;
  }
}

// Function to add alt text to images
function addAltText(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add alt text to images without it
    if (content.includes('<img') && !content.includes('alt=')) {
      content = content.replace(
        /<img([^>]*?)>/g,
        '<img$1 alt="Zion Tech Group AI Solutions">'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added alt text to images in: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error adding alt text to ${filePath}:`, error.message);
    return false;
  }
}

// Function to add semantic HTML
function addSemanticHTML(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add semantic HTML elements
    if (content.includes('<div className="container') && !content.includes('<main')) {
      content = content.replace(
        /<div className="container mx-auto px-4 py-16"([^>]*?)>/,
        '<main className="container mx-auto px-4 py-16"$1 role="main">'
      );
      modified = true;
    }

    // Add heading hierarchy
    if (content.includes('<h1') && !content.includes('aria-labelledby')) {
      content = content.replace(
        /<h1([^>]*?)>/,
        '<h1$1 id="main-heading" aria-label="Zion Tech Group - AI & IT Solutions">'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Added semantic HTML to: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error adding semantic HTML to ${filePath}:`, error.message);
    return false;
  }
}

// Function to create sitemap
function createSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-marketing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-automation</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Created sitemap.xml');
}

// Function to create robots.txt
function createRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;

  fs.writeFileSync('public/robots.txt', robots);
  console.log('✅ Created robots.txt');
}

// Main execution
async function main() {
  console.log('🔍 Finding files to optimize for SEO...');
  
  const filesToOptimize = [
    'App.tsx',
    'app/page.tsx',
    'app/layout.tsx'
  ];

  let optimizedCount = 0;
  
  for (const file of filesToOptimize) {
    if (fs.existsSync(file)) {
      if (addSEOMetaTags(file)) optimizedCount++;
      if (addAltText(file)) optimizedCount++;
      if (addSemanticHTML(file)) optimizedCount++;
    }
  }

  // Create SEO files
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  
  createSitemap();
  createRobotsTxt();

  console.log(`\n📊 SEO Optimization Summary:`);
  console.log(`✅ Optimized files: ${optimizedCount} files`);
  console.log(`✅ Created sitemap.xml`);
  console.log(`✅ Created robots.txt`);
  
  console.log('\n🎉 SEO optimization completed!');
}

main().catch(console.error);