#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO optimization configurations
const seoConfig = {
  site: {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    keywords: [
      'AI solutions',
      'quantum computing',
      'autonomous systems',
      'digital transformation',
      'enterprise AI',
      'machine learning',
      'automation',
      'cloud services',
      'cybersecurity',
      'IT consulting',
      'business intelligence',
      'data analytics',
      'artificial intelligence',
      'technology consulting',
      'software development'
    ],
    author: 'Zion Tech Group',
    language: 'en-US',
    locale: 'en_US'
  },
  
  social: {
    twitter: '@ziontechgroup',
    facebook: 'ziontechgroup',
    linkedin: 'company/zion-tech-group',
    instagram: 'ziontechgroup'
  },
  
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX',
    googleTagManager: 'GTM-XXXXXXX',
    facebookPixel: 'XXXXXXXXXXXXXXX'
  },
  
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://facebook.com/ziontechgroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://instagram.com/ziontechgroup'
      ]
    },
    
    services: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AI and IT Services',
      description: 'Comprehensive AI and IT solutions for enterprise clients',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'AI Solutions',
          description: 'Advanced artificial intelligence solutions for enterprise applications',
          provider: {
            '@type': 'TechCompany',
            name: 'Zion Tech Group'
          }
        },
        {
          '@type': 'Service',
          name: 'Quantum Computing',
          description: 'Next-generation quantum algorithms for complex problem solving',
          provider: {
            '@type': 'TechCompany',
            name: 'Zion Tech Group'
          }
        },
        {
          '@type': 'Service',
          name: 'Cloud Services',
          description: 'Cloud migration, setup, and optimization services',
          provider: {
            '@type': 'TechCompany',
            name: 'Zion Tech Group'
          }
        },
        {
          '@type': 'Service',
          name: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          provider: {
            '@type': 'TechCompany',
            name: 'Zion Tech Group'
          }
        }
      ]
    }
  }
};

// Generate sitemap
function generateSitemap() {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.6', changefreq: 'daily' },
    { url: '/case-studies', priority: '0.7', changefreq: 'weekly' },
    { url: '/docs', priority: '0.6', changefreq: 'weekly' }
  ];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${seoConfig.site.url}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${seoConfig.site.url}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /pricing
Allow: /ai-services
Allow: /it-services
Allow: /blog
Allow: /case-studies
Allow: /docs

# Crawl delay
Crawl-delay: 1`;
}

// Generate meta tags component
function generateMetaTagsComponent() {
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  noindex?: boolean;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = [
    'AI solutions',
    'quantum computing',
    'autonomous systems',
    'digital transformation',
    'enterprise AI',
    'machine learning',
    'automation',
    'cloud services'
  ],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : \`\${title} | Zion Tech Group\`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#00ffff" />
      <meta name="msapplication-TileColor" content="#00ffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export default MetaTags;`;
}

// Generate SEO report
function generateSEOReport() {
  const report = {
    timestamp: new Date().toISOString(),
    site: seoConfig.site,
    recommendations: [
      'Implement structured data markup for better search visibility',
      'Add Open Graph and Twitter Card meta tags',
      'Create XML sitemap and robots.txt',
      'Optimize page titles and meta descriptions',
      'Implement breadcrumb navigation',
      'Add FAQ schema markup',
      'Create high-quality, keyword-rich content',
      'Implement internal linking strategy',
      'Add alt text to all images',
      'Optimize page loading speed',
      'Implement mobile-first responsive design',
      'Add social media sharing buttons',
      'Create compelling call-to-action buttons',
      'Implement local SEO if applicable',
      'Monitor and track SEO performance'
    ],
    technical: {
      sitemap: 'Generated sitemap.xml',
      robots: 'Generated robots.txt',
      metaTags: 'Created MetaTags component',
      structuredData: 'Added organization and services schema',
      socialMedia: 'Configured Open Graph and Twitter Cards'
    },
    metrics: {
      targetPageSpeed: '90+',
      targetAccessibility: '95+',
      targetBestPractices: '95+',
      targetSEO: '95+'
    }
  };
  
  return report;
}

// Main execution
function main() {
  console.log('🔍 Starting SEO optimization...');
  
  // Generate sitemap
  const sitemap = generateSitemap();
  fs.writeFileSync(
    path.join(__dirname, '../public/sitemap.xml'),
    sitemap
  );
  console.log('🗺️  Sitemap generated');
  
  // Generate robots.txt
  const robots = generateRobotsTxt();
  fs.writeFileSync(
    path.join(__dirname, '../public/robots.txt'),
    robots
  );
  console.log('🤖 Robots.txt generated');
  
  // Generate meta tags component
  const metaTagsComponent = generateMetaTagsComponent();
  fs.writeFileSync(
    path.join(__dirname, '../src/components/MetaTags.tsx'),
    metaTagsComponent
  );
  console.log('🏷️  MetaTags component created');
  
  // Generate SEO report
  const report = generateSEOReport();
  fs.writeFileSync(
    path.join(__dirname, '../seo-report.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('📊 SEO report generated');
  
  console.log('✅ SEO optimization complete!');
  console.log('📈 Check seo-report.json for detailed recommendations');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, generateRobotsTxt, generateMetaTagsComponent, generateSEOReport };