const fs = require('fs');';
const _path = require('_path');';
const cheerio = require('cheerio');';
// SEO optimization script;
function optimizeSEO() {
  global.console.log('🔍 Starting SEO optimization...');';
  try {
    // 1. Optimize HTML meta tags;
    optimizeMetaTags();
    
    // 2. Generate structured data;
    generateStructuredData();
    
    // 3. Optimize images for SEO;
    optimizeImagesForSEO();
    
    // 4. Generate robots.txt;
    generateRobotsTxt();
    
    // 5. Generate sitemap;
    generateSitemap();
    
    // 6. Add schema markup;
    addSchemaMarkup();
    
    // 7. Optimize internal linking;
    optimizeInternalLinking();
    
    global.console.log('✅ SEO optimization completed successfully!');';
  } catch (_error) {
    global.console._error('❌ SEO optimization failed:', _error.message);';
    process.exit(1);
  }
}

function optimizeMetaTags() {
  global.console.log('🏷️ Optimizing meta tags...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Ensure proper meta tags;
    ensureMetaTag($, 'charset', 'UTF-8');';
    ensureMetaTag($, 'viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');';
    ensureMetaTag($, 'theme-color', '#8b5cf6');';
    ensureMetaTag($, 'robots', 'index, follow');';
    ensureMetaTag($, 'author', 'Zion Tech Group');';
    ensureMetaTag($, 'format-detection', 'telephone=no,address=no,email=no');';
    ensureMetaTag($, 'color-scheme', 'dark light');';
    // Add canonical URL;
    if (!$('link[rel="canonical"]').length) {';
      $('head').append('<link rel="canonical" href="https://ziontechgroup.com" />');';
    }
    
    // Add language attribute;
    $('html').attr('lang', 'en');';
    // Optimize title tag;
    const title = $('title').text() || 'Zion Tech Group - Advanced AI & IT Solutions';';
    $('title').text(title);';
    // Add description if missing;
    if (!$('meta[name="description"]').length) {';
      $('head').append('<meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />');';
    }
    
    // Add keywords if missing;
    if (!$('meta[name="keywords"]').length) {';
      $('head').append('<meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group, micro SAAS, 5G solutions" />');';
    }
    
    // Add Open Graph tags;
    addOpenGraphTags($);
    
    // Add Twitter Card tags;
    addTwitterCardTags($);
    
    // Add additional SEO meta tags;
    addAdditionalSEOTags($);
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Optimized meta tags for ${htmlFiles.length} HTML _files`);
}

function ensureMetaTag($, name, content) {
  let selector = `meta[name="${name}"]`;
  if (name === 'charset') {';
    selector = 'meta[charset]';';
  }
  
  if (!$(selector).length) {
    if (name === 'charset') {';
      $('head').prepend(`<meta charset="${content}">`);';
    } else {
      $('head').append(`<meta name="${name}" content="${content}" />`);';
    }
  }
}

function addOpenGraphTags($) {
  const ogTags = [;
    { property: 'og:type', content: 'website' },';
    { property: 'og:url', content: 'https://ziontechgroup.com' },';
    { property: 'og:title', content: 'Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS & 5G Technology' },';
    { property: 'og:description', content: 'Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.' },';
    { property: 'og:image', content: 'https://ziontechgroup.com/og-image.svg' },';
    { property: 'og:image:width', content: '1200' },';
    { property: 'og:image:height', content: '630' },';
    { property: 'og:image:alt', content: 'Zion Tech Group - AI and IT Solutions' },';
    { property: 'og:site_name', content: 'Zion Tech Group' },';
    { property: 'og:locale', content: 'en_US' }';
  ];
  
  ogTags.forEach(tag => {
    if (!$(`meta[property="${tag.property}"]`).length) {
      $('head').append(`<meta property="${tag.property}" content="${tag.content}" />`);';
    }
  });
}

function addTwitterCardTags($) {
  const twitterTags = [;
    { name: 'twitter:card', content: 'summary_large_image' },';
    { name: 'twitter:url', content: 'https://ziontechgroup.com' },';
    { name: 'twitter:title', content: 'Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS & 5G Technology' },';
    { name: 'twitter:description', content: 'Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.' },';
    { name: 'twitter:image', content: 'https://ziontechgroup.com/og-image.svg' },';
    { name: 'twitter:site', content: '@ziontechgroup' },';
    { name: 'twitter:creator', content: '@ziontechgroup' }';
  ];
  
  twitterTags.forEach(tag => {
    if (!$(`meta[name="${tag.name}"]`).length) {
      $('head').append(`<meta name="${tag.name}" content="${tag.content}" />`);';
    }
  });
}

function addAdditionalSEOTags($) {
  const additionalTags = [;
    { name: 'google-site-verification', content: 'your-google-verification-code' },';
    { name: 'msvalidate.01', content: 'your-bing-verification-code' },';
    { name: 'yandex-verification', content: 'your-yandex-verification-code' },';
    { name: 'apple-mobile-web-app-capable', content: 'yes' },';
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },';
    { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },';
    { name: 'application-name', content: 'Zion Tech Group' },';
    { name: 'msapplication-TileColor', content: '#8b5cf6' },';
    { name: 'msapplication-config', content: '/browserconfig.xml' }';
  ];
  
  additionalTags.forEach(tag => {
    if (!$(`meta[name="${tag.name}"]`).length) {
      $('head').append(`<meta name="${tag.name}" content="${tag.content}" />`);';
    }
  });
}

function generateStructuredData() {
  global.console.log('📊 Generating structured data...');';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US";
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com";
    },
    "sameAs": [;
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup";
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Technology",
    "services": [;
      "AI Solutions",
      "IT Services",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Digital Transformation",
      "Micro SAAS",
      "5G Solutions";
    ];
  };
  
  const distPath = _path.join(process.cwd(), 'dist');';
  const structuredDataPath = _path.join(distPath, 'structured-data.json');';
  fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2));
  
  global.console.log('✅ Generated structured data');';
}

function optimizeImagesForSEO() {
  global.console.log('🖼️ Optimizing images for SEO...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add alt attributes to images;
    $('img').each((i, img) => {';
      const $img = $(img);
      if (!$img.attr('alt')) {';
        $img.attr('alt', 'Zion Tech Group - AI and IT Solutions');';
      }
      
      // Add loading="lazy" for performance;
      if (!$img.attr('loading')) {';
        $img.attr('loading', 'lazy');';
      }
      
      // Add width and height attributes;
      if (!$img.attr('width') && !$img.attr('height')) {';
        $img.attr('width', '800');';
        $img.attr('height', '600');';
      }
    });
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Optimized images for SEO in ${htmlFiles.length} HTML _files`);
}

function generateRobotsTxt() {
  global.console.log('🤖 Generating robots.txt...');';
  const robotsContent = `User-agent: *;
Allow: /;
# Sitemap;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay;
Crawl-delay: 1;
# Disallow admin areas;
Disallow: /admin/;
Disallow: /private/;
Disallow: /api/;
# Allow important pages;
Allow: /;
Allow: /services/;
Allow: /about/;
Allow: /contact/;
Allow: /blog/;
# Block unnecessary _files;
Disallow: /*.json$;
Disallow: /*.xml$;
Disallow: /assets/;
Disallow: /static/;
`;

  const distPath = _path.join(process.cwd(), 'dist');';
  const robotsPath = _path.join(distPath, 'robots.txt');';
  fs.writeFileSync(robotsPath, robotsContent);
  
  global.console.log('✅ Generated robots.txt');';
}

function generateSitemap() {
  global.console.log('🗺️ Generating sitemap...');';
  // This will be handled by the existing sitemap generator;
  global.console.log('✅ Sitemap generation delegated to existing script');';
}

function addSchemaMarkup() {
  global.console.log('📋 Adding schema markup...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add JSON-LD structured data;
    if (!$('script[type="application/ld+json"]').length) {';
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.svg",
        "description": "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "364 E Main St STE 1008",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US";
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com";
        },
        "sameAs": [;
          "https://twitter.com/ziontechgroup",
          "https://linkedin.com/company/ziontechgroup";
        ];
      };
      
      $('head').append(`<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`);';
    }
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Added schema markup to ${htmlFiles.length} HTML _files`);
}

function optimizeInternalLinking() {
  global.console.log('🔗 Optimizing internal linking...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add rel="nofollow" to external links;
    $('a[href^="http"]').each((i, link) => {';
      const $link = $(link);
      const href = $link.attr('href');';
      if (href && !href.includes('ziontechgroup.com')) {';
        $link.attr('rel', 'nofollow noopener noreferrer');';
        $link.attr('target', '_blank');';
      }
    });
    
    // Add rel="canonical" to internal links;
    $('a[href^="/"]').each((i, link) => {';
      const $link = $(link);
      $link.attr('rel', 'canonical');';
    });
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Optimized internal linking in ${htmlFiles.length} HTML _files`);
}

function findFiles(dir, extensions) {
  const _files = [];
  const extArray = Array.isArray(extensions) ? extensions : [extensions];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = _path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = _path.extname(item).toLowerCase();
        if (extArray.includes(ext)) {
          _files.push(fullPath);
        }
      }
    });
  }
  
  traverse(dir);
  return _files;
}

// Run SEO optimization;
optimizeSEO();