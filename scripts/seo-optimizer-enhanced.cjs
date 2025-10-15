#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Enhanced SEO Optimization...\n');

// 1. Create comprehensive sitemap generator
const sitemapGenerator = `import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    // AI Services
    { url: '/ai-analytics-dashboard-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-code-assistant-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-chatbot-enterprise', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-automation-platform', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-business-intelligence-pro', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-content-generation-pro', priority: 0.8, changefreq: 'weekly' },
    // 5G Solutions
    { url: '/5g-implementation', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: 0.8, changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: 0.8, changefreq: 'weekly' },
    // IT Services
    { url: '/ai-cloud-infrastructure', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-api-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/advanced-security-suite', priority: 0.8, changefreq: 'weekly' },
    { url: '/performance-monitoring', priority: 0.8, changefreq: 'weekly' },
    { url: '/devops-solutions', priority: 0.8, changefreq: 'weekly' },
    // Micro SAAS
    { url: '/ai-accounting-assistant', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-content-moderation-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-climate-solutions-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-agricultural-intelligence-pro', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-3d-generation', priority: 0.7, changefreq: 'weekly' },
    { url: '/ai-blockchain-solutions', priority: 0.7, changefreq: 'weekly' }
  ];

  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`  <url>
    <loc>\${baseUrl}\${page.url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>\${page.changefreq}</changefreq>
    <priority>\${page.priority}</priority>
  </url>\`).join('\\n')}
</urlset>\`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
};

export default generateSitemap;
`;

const sitemapPath = path.join(__dirname, '..', 'scripts', 'generate-sitemap-enhanced.js');
fs.writeFileSync(sitemapPath, sitemapGenerator);
console.log('✅ Enhanced sitemap generator created');

// 2. Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /ai-*
Allow: /5g-*
Allow: /services
Allow: /about
Allow: /contact
`;

const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ Robots.txt created');

// 3. Create enhanced meta tags utility
const metaTagsUtility = `// Enhanced SEO meta tags utility
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noIndex?: boolean;
}

export const generateSEOTags = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false
}: SEOProps) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;
  const defaultKeywords = [
    'AI solutions',
    '5G technology', 
    'IT services',
    'artificial intelligence',
    'machine learning',
    'cybersecurity',
    'cloud computing',
    'business automation',
    'Zion Tech Group'
  ];
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8b5cf6" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
    </Helmet>
  );
};

// Structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI solutions, 5G technology, and comprehensive IT services",
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
    "https://facebook.com/ziontechgroup",
    "https://twitter.com/ziontechgroup",
    "https://linkedin.com/company/ziontechgroup",
    "https://instagram.com/ziontechgroup",
    "https://github.com/ziontechgroup"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "10-50",
  "industry": "Technology",
  "services": [
    "AI Solutions",
    "5G Technology",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Business Automation"
  ]
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "offers": price ? {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  } : undefined,
  "category": "Technology Services",
  "serviceType": "AI and IT Solutions"
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": \`https://ziontechgroup.com\${item.url}\`
  }))
});
`;

const metaTagsPath = path.join(__dirname, '..', 'utils', 'seoUtils.ts');
fs.writeFileSync(metaTagsPath, metaTagsUtility);
console.log('✅ Enhanced SEO utilities created');

// 4. Create performance monitoring for SEO
const seoMonitoring = `// SEO performance monitoring
export const seoMetrics = {
  // Core Web Vitals monitoring
  measureCoreWebVitals: () => {
    // LCP - Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Page load time monitoring
  measurePageLoad: () => {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log('Page Load Time:', loadTime + 'ms');
    });
  },

  // SEO element presence check
  checkSEOElements: () => {
    const checks = {
      title: !!document.querySelector('title'),
      metaDescription: !!document.querySelector('meta[name="description"]'),
      h1: !!document.querySelector('h1'),
      canonical: !!document.querySelector('link[rel="canonical"]'),
      ogTags: !!document.querySelector('meta[property="og:title"]'),
      structuredData: !!document.querySelector('script[type="application/ld+json"]')
    };
    
    console.log('SEO Elements Check:', checks);
    return checks;
  },

  // Image optimization check
  checkImageOptimization: () => {
    const images = document.querySelectorAll('img');
    const issues = [];
    
    images.forEach(img => {
      if (!img.alt) issues.push('Missing alt text');
      if (!img.loading) issues.push('Missing lazy loading');
      if (img.width && img.height && img.naturalWidth && img.naturalHeight) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const displayRatio = img.width / img.height;
        if (Math.abs(aspectRatio - displayRatio) > 0.1) {
          issues.push('Aspect ratio mismatch');
        }
      }
    });
    
    console.log('Image Optimization Issues:', issues);
    return issues;
  }
};

// Initialize SEO monitoring
export const initSEOMonitoring = () => {
  seoMetrics.measureCoreWebVitals();
  seoMetrics.measurePageLoad();
  seoMetrics.checkSEOElements();
  seoMetrics.checkImageOptimization();
};
`;

const seoMonitoringPath = path.join(__dirname, '..', 'utils', 'seoMonitoring.ts');
fs.writeFileSync(seoMonitoringPath, seoMonitoring);
console.log('✅ SEO monitoring utilities created');

// 5. Update package.json with SEO scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'seo:generate-sitemap': 'node scripts/generate-sitemap-enhanced.js',
  'seo:optimize': 'node scripts/seo-optimizer-enhanced.cjs',
  'seo:check': 'npm run seo:generate-sitemap && npm run build'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Package.json SEO scripts updated');

console.log('\n🎉 Enhanced SEO Optimization Complete!');
console.log('\n📋 Next Steps:');
console.log('  1. Run: npm run seo:generate-sitemap');
console.log('  2. Run: npm run build');
console.log('  3. Check sitemap.xml and robots.txt in public folder');
console.log('  4. Test SEO utilities in components');
console.log('  5. Monitor Core Web Vitals');