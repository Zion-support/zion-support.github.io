#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.baseUrl = 'https://zion.app';
    this.pages = [
      '/',
      '/about',
      '/services',
      '/solutions',
      '/contact',
      '/team',
      '/careers',
      '/blog',
      '/privacy',
      '/terms'
    ];
  }

  generateSitemap() {
    console.log('🗺️ Generating sitemap.xml...');
    
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.pages
  .map(page => `  <url>
    <loc>${this.baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
  .join('\n')}
</urlset>`;

    fs.writeFileSync(sitemapPath, sitemap);
    console.log('✅ Generated sitemap.xml');
  }

  generateRobotsTxt() {
    console.log('🤖 Generating robots.txt...');
    
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

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

    fs.writeFileSync(robotsPath, robotsTxt);
    console.log('✅ Generated robots.txt');
  }

  generateManifest() {
    console.log('📱 Generating manifest.json...');
    
    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    const manifest = {
      name: 'Zion Tech Group',
      short_name: 'Zion',
      description: 'Advanced AI and automation solutions',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ Generated manifest.json');
  }

  generateStructuredData() {
    console.log('📊 Generating structured data...');
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
      description: 'Advanced AI and automation solutions for modern businesses',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };

    const structuredDataPath = path.join(process.cwd(), 'public', 'structured-data.json');
    fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));
    console.log('✅ Generated structured data');
  }

  async run() {
    console.log('🔍 Starting SEO optimization...');
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    this.generateSitemap();
    this.generateRobotsTxt();
    this.generateManifest();
    this.generateStructuredData();
    
    console.log('✅ SEO optimization completed');
  }
}

// Main execution
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SEOOptimizer;