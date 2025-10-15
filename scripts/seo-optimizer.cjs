const fs = require('fs');
const path = require('path');

console.log('🔍 Starting SEO optimization...');

// SEO configuration
const seoConfig = {
  site: {
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
    keywords: 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence',
    author: 'Zion Tech Group',
    image: '/og-image.jpg',
    twitter: '@ziontechgroup',
    locale: 'en_US'
  },
  
  pages: [
    {
      path: '/',
      title: 'Zion Tech Group - Advanced AI & IT Solutions',
      description: 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.',
      keywords: 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence'
    },
    {
      path: '/about',
      title: 'About Zion Tech Group - Our Mission & Values',
      description: 'Learn about Zion Tech Group\'s mission to transform businesses through innovative AI solutions, cybersecurity, and digital transformation services.',
      keywords: 'about us, company, team, mission, AI solutions, cybersecurity, digital transformation'
    },
    {
      path: '/services',
      title: 'Our Services - AI & IT Solutions',
      description: 'Comprehensive technology solutions including AI services, cybersecurity, cloud infrastructure, and digital transformation to accelerate your business growth.',
      keywords: 'services, AI services, cybersecurity services, cloud solutions, digital transformation, IT consulting'
    },
    {
      path: '/contact',
      title: 'Contact Zion Tech Group - Get Started Today',
      description: 'Get in touch with our expert team to discuss your AI and IT solution needs. We\'re here to help transform your business.',
      keywords: 'contact, get started, consultation, AI solutions, IT services, support'
    }
  ]
};

// Generate sitemap
function generateSitemap() {
  console.log('🗺️  Generating sitemap...');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${seoConfig.pages.map(page => `
  <url>
    <loc>${seoConfig.site.url}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
  
  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated');
}

// Generate robots.txt
function generateRobotsTxt() {
  console.log('🤖 Generating robots.txt...');
  
  const robots = `User-agent: *
Allow: /

Sitemap: ${seoConfig.site.url}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

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
  
  const robotsPath = path.join(__dirname, '../dist/robots.txt');
  fs.writeFileSync(robotsPath, robots);
  console.log('✅ Robots.txt generated');
}

// Generate structured data
function generateStructuredData() {
  console.log('📊 Generating structured data...');
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.site.name,
    "url": seoConfig.site.url,
    "logo": `${seoConfig.site.url}/logo.png`,
    "description": seoConfig.site.description,
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
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Technology",
    "services": [
      "AI Solutions",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Digital Transformation",
      "IT Consulting"
    ]
  };
  
  const structuredDataPath = path.join(__dirname, '../dist/structured-data.json');
  fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));
  console.log('✅ Structured data generated');
}

// Generate meta tags for each page
function generateMetaTags() {
  console.log('🏷️  Generating meta tags...');
  
  const metaTags = seoConfig.pages.map(page => {
    return {
      path: page.path,
      meta: {
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        'og:title': page.title,
        'og:description': page.description,
        'og:url': `${seoConfig.site.url}${page.path}`,
        'og:type': 'website',
        'og:image': `${seoConfig.site.url}${seoConfig.site.image}`,
        'twitter:card': 'summary_large_image',
        'twitter:title': page.title,
        'twitter:description': page.description,
        'twitter:image': `${seoConfig.site.url}${seoConfig.site.image}`,
        'twitter:site': seoConfig.site.twitter,
        'robots': 'index, follow',
        'viewport': 'width=device-width, initial-scale=1',
        'theme-color': '#3b82f6'
      }
    };
  });
  
  const metaTagsPath = path.join(__dirname, '../dist/meta-tags.json');
  fs.writeFileSync(metaTagsPath, JSON.stringify(metaTags, null, 2));
  console.log('✅ Meta tags generated');
}

// Generate SEO report
function generateSEOReport() {
  console.log('📈 Generating SEO report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    site: seoConfig.site,
    pages: seoConfig.pages.length,
    optimizations: {
      sitemap: true,
      robotsTxt: true,
      structuredData: true,
      metaTags: true,
      openGraph: true,
      twitterCards: true
    },
    recommendations: [
      'Implement breadcrumb navigation',
      'Add FAQ schema markup',
      'Optimize page loading speed',
      'Implement AMP for mobile',
      'Add hreflang for internationalization',
      'Create XML sitemap for images',
      'Implement canonical URLs',
      'Add social media meta tags'
    ],
    metrics: {
      pagesOptimized: seoConfig.pages.length,
      sitemapGenerated: true,
      robotsTxtGenerated: true,
      structuredDataGenerated: true,
      metaTagsGenerated: true
    }
  };
  
  const reportPath = path.join(__dirname, '../seo-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('✅ SEO report generated');
}

// Main SEO optimization function
function optimizeSEO() {
  try {
    generateSitemap();
    generateRobotsTxt();
    generateStructuredData();
    generateMetaTags();
    generateSEOReport();
    
    console.log('🎉 SEO optimization completed!');
    console.log('📈 SEO improvements:');
    console.log('  - Sitemap generated for better crawling');
    console.log('  - Robots.txt configured for search engines');
    console.log('  - Structured data added for rich snippets');
    console.log('  - Meta tags optimized for all pages');
    console.log('  - Open Graph tags for social sharing');
    console.log('  - Twitter Cards for better engagement');
  } catch (error) {
    console.error('❌ SEO optimization failed:', error);
    process.exit(1);
  }
}

// Run SEO optimization
optimizeSEO();