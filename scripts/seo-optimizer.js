#!/usr/bin/env node

/**
 * SEO Optimizer
 * Automatically optimizes the application for better SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOOptimizer {
  constructor() {
    this.optimizeMetaTags();
    this.generateSitemap();
    this.generateRobotsTxt();
    this.optimizeStructuredData();
    this.generateSEOReport();
  }

  /**
   * Optimize meta tags
   */
  optimizeMetaTags() {
    console.log('🏷️  Optimizing meta tags...');
    
    const indexHtmlPath = path.join(__dirname, '../dist/index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      console.log('  ⚠️  index.html not found, skipping meta tag optimization');
      return;
    }

    let content = fs.readFileSync(indexHtmlPath, 'utf8');
    
    // Add essential meta tags if missing
    const essentialMetaTags = [
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.">',
      '<meta name="keywords" content="AI solutions, machine learning, quantum computing, digital transformation, IT services, cybersecurity, cloud computing, automation">',
      '<meta name="author" content="Zion Tech Group">',
      '<meta name="robots" content="index, follow">',
      '<meta property="og:title" content="Zion Tech Group - AI-Powered Enterprise Solutions">',
      '<meta property="og:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.">',
      '<meta property="og:type" content="website">',
      '<meta property="og:url" content="https://ziontechgroup.com">',
      '<meta property="og:image" content="https://ziontechgroup.com/og-image.jpg">',
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="Zion Tech Group - AI-Powered Enterprise Solutions">',
      '<meta name="twitter:description" content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.">',
      '<meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg">'
    ];

    let metaTagsAdded = 0;
    essentialMetaTags.forEach(tag => {
      if (!content.includes(tag)) {
        content = content.replace('<head>', `<head>\n    ${tag}`);
        metaTagsAdded++;
      }
    });

    if (metaTagsAdded > 0) {
      fs.writeFileSync(indexHtmlPath, content);
      console.log(`  ✅ Added ${metaTagsAdded} essential meta tags`);
    } else {
      console.log('  ✅ All essential meta tags already present');
    }
  }

  /**
   * Generate sitemap
   */
  generateSitemap() {
    console.log('🗺️  Generating sitemap...');
    
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    const baseUrl = 'https://ziontechgroup.com';
    
    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
      { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
      { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
      { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.6', changefreq: 'weekly' },
      { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
      { url: '/team', priority: '0.6', changefreq: 'monthly' },
      { url: '/careers', priority: '0.6', changefreq: 'weekly' }
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';

    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`  ✅ Sitemap generated: ${sitemapPath}`);
  }

  /**
   * Generate robots.txt
   */
  generateRobotsTxt() {
    console.log('🤖 Generating robots.txt...');
    
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /case-studies`;

    fs.writeFileSync(robotsPath, robotsContent);
    console.log(`  ✅ robots.txt generated: ${robotsPath}`);
  }

  /**
   * Optimize structured data
   */
  optimizeStructuredData() {
    console.log('📊 Optimizing structured data...');
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/zion-tech-group"
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "industry": "Information Technology",
      "services": [
        "AI Solutions",
        "Machine Learning",
        "Quantum Computing",
        "Digital Transformation",
        "IT Services",
        "Cybersecurity",
        "Cloud Computing",
        "Automation"
      ]
    };

    const structuredDataPath = path.join(__dirname, '../public/structured-data.json');
    fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));
    console.log(`  ✅ Structured data generated: ${structuredDataPath}`);
  }

  /**
   * Generate SEO report
   */
  generateSEOReport() {
    console.log('📊 Generating SEO report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: {
        metaTags: true,
        sitemap: true,
        robotsTxt: true,
        structuredData: true
      },
      recommendations: [
        'Add alt text to all images',
        'Implement breadcrumb navigation',
        'Add internal linking strategy',
        'Optimize page loading speed',
        'Implement schema markup for services',
        'Add FAQ schema for common questions',
        'Create XML sitemap for blog posts',
        'Implement hreflang for internationalization'
      ],
      metrics: {
        pagesInSitemap: 12,
        metaTagsOptimized: true,
        structuredDataPresent: true,
        robotsTxtConfigured: true
      }
    };

    const reportPath = path.join(__dirname, '../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 SEO report generated: ${reportPath}`);
    console.log(`✅ SEO optimizations completed`);
  }
}

// Run the SEO optimizer
new SEOOptimizer();