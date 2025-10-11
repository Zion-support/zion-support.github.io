#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Running comprehensive SEO enhancements...');

// 1. Generate enhanced sitemap
const generateEnhancedSitemap = () => {
  console.log('🗺️ Generating enhanced sitemap...');
  
  const pages = [
    { url: 'https://ziontechgroup.com/', priority: '1.0', changefreq: 'daily' },
    { url: 'https://ziontechgroup.com/about', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/services', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/it-services', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/contact', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/blog', priority: '0.6', changefreq: 'weekly' },
    { url: 'https://ziontechgroup.com/case-studies', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/careers', priority: '0.5', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/partners', priority: '0.5', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/support', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/faq', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/demo', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/consultation', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://ziontechgroup.com/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://ziontechgroup.com/terms', priority: '0.3', changefreq: 'yearly' },
    { url: 'https://ziontechgroup.com/cookies', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('dist/sitemap.xml', sitemap);
  console.log('✅ Enhanced sitemap generated');
};

// 2. Generate structured data
const generateStructuredData = () => {
  console.log('📊 Generating structured data...');
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "alternateName": "Zion Tech",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "foundingDate": "2020",
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
      "email": "kleber@ziontechgroup.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Advanced AI technology solutions for business automation and optimization"
      },
      {
        "@type": "Service",
        "name": "Cybersecurity",
        "description": "Comprehensive cybersecurity solutions to protect your digital assets"
      },
      {
        "@type": "Service",
        "name": "Cloud Infrastructure",
        "description": "Scalable cloud infrastructure solutions for modern businesses"
      },
      {
        "@type": "Service",
        "name": "Digital Transformation",
        "description": "Complete digital transformation services to modernize your business"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Advanced AI and IT Solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ziontechgroup.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Services",
        "item": "https://ziontechgroup.com/ai-services"
      }
    ]
  };

  fs.writeFileSync('dist/structured-data-organization.json', JSON.stringify(organizationSchema, null, 2));
  fs.writeFileSync('dist/structured-data-website.json', JSON.stringify(websiteSchema, null, 2));
  fs.writeFileSync('dist/structured-data-breadcrumb.json', JSON.stringify(breadcrumbSchema, null, 2));
  console.log('✅ Structured data generated');
};

// 3. Generate meta tags optimization
const generateMetaTags = () => {
  console.log('🏷️ Generating optimized meta tags...');
  
  const metaTags = `
<!-- Primary Meta Tags -->
<title>Zion Tech Group - Advanced AI and IT Solutions | Technology Services</title>
<meta name="title" content="Zion Tech Group - Advanced AI and IT Solutions | Technology Services">
<meta name="description" content="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.">
<meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, technology services, IT consulting, artificial intelligence, machine learning, data analytics, business automation">
<meta name="author" content="Zion Tech Group">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
<meta name="bingbot" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://ziontechgroup.com/">
<meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions">
<meta property="og:description" content="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.">
<meta property="og:image" content="https://ziontechgroup.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Zion Tech Group">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://ziontechgroup.com/">
<meta property="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions">
<meta property="twitter:description" content="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.">
<meta property="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg">
<meta property="twitter:creator" content="@ziontechgroup">
<meta property="twitter:site" content="@ziontechgroup">

<!-- Additional SEO Meta Tags -->
<meta name="theme-color" content="#581c87">
<meta name="msapplication-TileColor" content="#581c87">
<meta name="application-name" content="Zion Tech Group">
<meta name="apple-mobile-web-app-title" content="Zion Tech Group">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="format-detection" content="telephone=no">
<meta name="mobile-web-app-capable" content="yes">

<!-- Canonical URL -->
<link rel="canonical" href="https://ziontechgroup.com/">

<!-- Language -->
<meta http-equiv="content-language" content="en-US">
<meta name="language" content="English">

<!-- Geo Tags -->
<meta name="geo.region" content="US-DE">
<meta name="geo.placename" content="Middletown, Delaware">
<meta name="geo.position" content="39.4496;-75.7163">
<meta name="ICBM" content="39.4496, -75.7163">

<!-- Business Hours -->
<meta name="business:contact_data:street_address" content="364 E Main St STE 1008">
<meta name="business:contact_data:locality" content="Middletown">
<meta name="business:contact_data:region" content="DE">
<meta name="business:contact_data:postal_code" content="19709">
<meta name="business:contact_data:country_name" content="United States">
<meta name="business:contact_data:phone_number" content="+1-302-464-0950">
<meta name="business:contact_data:email" content="kleber@ziontechgroup.com">

<!-- Verification Tags -->
<meta name="google-site-verification" content="your-google-verification-code">
<meta name="msvalidate.01" content="your-bing-verification-code">
<meta name="yandex-verification" content="your-yandex-verification-code">
`;

  fs.writeFileSync('dist/meta-tags.html', metaTags);
  console.log('✅ Meta tags generated');
};

// 4. Generate robots.txt with enhanced directives
const generateEnhancedRobotsTxt = () => {
  console.log('🤖 Generating enhanced robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://ziontechgroup.com/sitemap.xml
Sitemap: https://ziontechgroup.com/sitemap-images.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block access to admin areas and sensitive files
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.log$
Disallow: /test/
Disallow: /staging/

# Allow important pages
Allow: /services/
Allow: /ai-services/
Allow: /it-services/
Allow: /blog/
Allow: /case-studies/

# Block duplicate content
Disallow: /*?*
Disallow: /*#*

# Block search result pages
Disallow: /search?
Disallow: /search/

# Block user-specific content
Disallow: /user/
Disallow: /profile/
Disallow: /account/

# Block temporary files
Disallow: /tmp/
Disallow: /temp/
Disallow: /cache/

# Block development files
Disallow: /.env
Disallow: /.git/
Disallow: /node_modules/
Disallow: /src/
Disallow: /dist/
Disallow: /build/

# Host directive
Host: ziontechgroup.com
`;

  fs.writeFileSync('dist/robots.txt', robotsTxt);
  console.log('✅ Enhanced robots.txt generated');
};

// 5. Generate image sitemap
const generateImageSitemap = () => {
  console.log('🖼️ Generating image sitemap...');
  
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <image:image>
      <image:loc>https://ziontechgroup.com/hero-image.jpg</image:loc>
      <image:title>Zion Tech Group - AI and IT Solutions</image:title>
      <image:caption>Leading technology solutions provider specializing in AI and IT services</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <image:image>
      <image:loc>https://ziontechgroup.com/services-hero.jpg</image:loc>
      <image:title>Technology Services</image:title>
      <image:caption>Comprehensive technology services for modern businesses</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <image:image>
      <image:loc>https://ziontechgroup.com/ai-hero.jpg</image:loc>
      <image:title>AI Solutions</image:title>
      <image:caption>Advanced AI technology solutions for business automation</image:caption>
    </image:image>
  </url>
</urlset>`;

  fs.writeFileSync('dist/sitemap-images.xml', imageSitemap);
  console.log('✅ Image sitemap generated');
};

// 6. Generate FAQ schema
const generateFAQSchema = () => {
  console.log('❓ Generating FAQ schema...');
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Zion Tech Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zion Tech Group offers comprehensive technology solutions including AI services, cybersecurity, cloud infrastructure, digital transformation, IT consulting, and business automation services."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI solutions benefit my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI solutions can automate repetitive tasks, improve decision-making with data analytics, enhance customer service with chatbots, optimize operations, and provide predictive insights that help businesses scale efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical project timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 technical support, regular maintenance, updates, and monitoring services to ensure your technology solutions continue to perform optimally."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve businesses across various industries including healthcare, finance, manufacturing, retail, education, and professional services. Our solutions are tailored to meet industry-specific requirements and compliance standards."
        }
      }
    ]
  };

  fs.writeFileSync('dist/faq-schema.json', JSON.stringify(faqSchema, null, 2));
  console.log('✅ FAQ schema generated');
};

// Run all SEO optimizations
const runSEOOptimizations = () => {
  try {
    generateEnhancedSitemap();
    generateStructuredData();
    generateMetaTags();
    generateEnhancedRobotsTxt();
    generateImageSitemap();
    generateFAQSchema();
    
    console.log('🎉 All SEO enhancements completed successfully!');
    console.log('📈 SEO improvements applied:');
    console.log('  ✅ Enhanced sitemap with priorities');
    console.log('  ✅ Structured data for organization and website');
    console.log('  ✅ Optimized meta tags for all platforms');
    console.log('  ✅ Enhanced robots.txt with detailed directives');
    console.log('  ✅ Image sitemap for better image SEO');
    console.log('  ✅ FAQ schema for rich snippets');
  } catch (error) {
    console.error('❌ Error during SEO optimization:', error);
    process.exit(1);
  }
};

runSEOOptimizations();