#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting enhanced SEO optimization...');

// SEO optimization configurations
const seoConfig = {
  siteUrl: 'https://ziontechgroup.com',
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
  keywords: [
    'AI solutions', 'IT services', 'micro SAAS', 'digital transformation',
    'business automation', 'technology consulting', 'cybersecurity',
    'cloud solutions', '5G technology', 'machine learning',
    'artificial intelligence', 'data analytics', 'web development'
  ],
  social: {
    twitter: '@ziontechgroup',
    linkedin: 'ziontechgroup',
    facebook: 'ziontechgroup'
  },
  contact: {
    email: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }
};

// Generate enhanced sitemap
function generateEnhancedSitemap() {
  const pages = [
    // Main pages
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.9, changefreq: 'monthly' },
    { url: '/contact', priority: 0.9, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.9, changefreq: 'weekly' },
    { url: '/5g-solutions', priority: 0.9, changefreq: 'weekly' },
    { url: '/demo', priority: 0.8, changefreq: 'monthly' },
    { url: '/consultation', priority: 0.8, changefreq: 'monthly' },
    { url: '/support', priority: 0.7, changefreq: 'monthly' },
    
    // AI Services
    { url: '/ai-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-content-generation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-customer-support', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-cybersecurity', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-data-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-document-processing', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-marketing-automation', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-predictive-analytics', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-voice-assistant', priority: 0.8, changefreq: 'monthly' },
    { url: '/ai-workflow-automation', priority: 0.8, changefreq: 'monthly' },
    
    // Micro SAAS Services
    { url: '/zion-ai-video-generator', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-invoice-generator', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-customer-insights', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-email-analyzer', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-smart-inventory-optimizer', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-customer-sentiment-tracker', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-smart-expense-categorizer', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-voice-assistant-pro', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-code-reviewer', priority: 0.7, changefreq: 'monthly' },
    { url: '/zion-ai-social-media-manager', priority: 0.7, changefreq: 'monthly' },
    
    // 5G Solutions
    { url: '/5g-network-infrastructure', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-edge-computing', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-iot-solutions', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-smart-city-solutions', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-private-networks', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-mobile-applications', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-data-analytics', priority: 0.7, changefreq: 'monthly' },
    { url: '/5g-implementation', priority: 0.7, changefreq: 'monthly' }
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${seoConfig.siteUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ Enhanced sitemap generated');
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Performance and SEO optimizations
Crawl-delay: 1

# Sitemap
Sitemap: ${seoConfig.siteUrl}/sitemap.xml

# Block unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow important paths
Allow: /assets/
Allow: /images/
Allow: /icons/

# Host
Host: ${seoConfig.siteUrl}
`;

  const robotsPath = path.join(__dirname, '../public/robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt generated');
}

// Generate structured data
function generateStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.title,
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/logo.svg`,
    "description": seoConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.contact.address.split(',')[0],
      "addressLocality": seoConfig.contact.address.split(',')[1].trim(),
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.contact.phone,
      "contactType": "customer service",
      "email": seoConfig.contact.email
    },
    "sameAs": [
      `https://twitter.com/${seoConfig.social.twitter}`,
      `https://linkedin.com/company/${seoConfig.social.linkedin}`
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Technology",
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Information technology consulting and implementation"
      },
      {
        "@type": "Offer",
        "name": "Micro SAAS",
        "description": "Ready-to-use software solutions"
      },
      {
        "@type": "Offer",
        "name": "5G Solutions",
        "description": "Next-generation connectivity and infrastructure"
      }
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": seoConfig.title,
    "url": seoConfig.siteUrl,
    "description": seoConfig.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${seoConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": seoConfig.title
    }
  };

  const structuredDataPath = path.join(__dirname, '../public/structured-data.json');
  fs.writeFileSync(structuredDataPath, JSON.stringify({
    organization: organizationData,
    website: websiteData
  }, null, 2));
  
  console.log('✅ Structured data generated');
}

// Generate meta tags for all pages
function generateMetaTags() {
  const metaTags = {
    default: {
      title: seoConfig.title,
      description: seoConfig.description,
      keywords: seoConfig.keywords.join(', '),
      author: 'Zion Tech Group',
      robots: 'index, follow',
      viewport: 'width=device-width, initial-scale=1.0',
      'theme-color': '#00ffff',
      'msapplication-TileColor': '#0f172a',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent'
    },
    openGraph: {
      'og:type': 'website',
      'og:site_name': seoConfig.title,
      'og:title': seoConfig.title,
      'og:description': seoConfig.description,
      'og:url': seoConfig.siteUrl,
      'og:image': `${seoConfig.siteUrl}/og-image.jpg`,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:locale': 'en_US'
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:site': seoConfig.social.twitter,
      'twitter:creator': seoConfig.social.twitter,
      'twitter:title': seoConfig.title,
      'twitter:description': seoConfig.description,
      'twitter:image': `${seoConfig.siteUrl}/twitter-image.jpg`
    }
  };

  const metaTagsPath = path.join(__dirname, '../public/meta-tags.json');
  fs.writeFileSync(metaTagsPath, JSON.stringify(metaTags, null, 2));
  
  console.log('✅ Meta tags generated');
}

// Generate performance hints
function generatePerformanceHints() {
  const hints = {
    preload: [
      '/assets/react-core',
      '/assets/react-dom',
      '/assets/main-core',
      '/assets/icons'
    ],
    prefetch: [
      '/assets/ai-analytics',
      '/assets/zion-ai',
      '/assets/5g-services'
    ],
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ],
    dnsPrefetch: [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com'
    ]
  };

  const hintsPath = path.join(__dirname, '../public/performance-hints.json');
  fs.writeFileSync(hintsPath, JSON.stringify(hints, null, 2));
  
  console.log('✅ Performance hints generated');
}

// Main SEO optimization function
function optimizeSEO() {
  console.log('🔍 Generating SEO optimizations...');
  
  generateEnhancedSitemap();
  generateRobotsTxt();
  generateStructuredData();
  generateMetaTags();
  generatePerformanceHints();
  
  console.log('\n✅ Enhanced SEO optimization completed!');
  console.log('📊 Generated files:');
  console.log('   - sitemap.xml (enhanced)');
  console.log('   - robots.txt');
  console.log('   - structured-data.json');
  console.log('   - meta-tags.json');
  console.log('   - performance-hints.json');
}

// Run SEO optimization
optimizeSEO();