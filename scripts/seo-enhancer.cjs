const fs = require('fs');
const path = require('path');

console.log('Starting SEO enhancement...');

// Function to add structured data to a page
function addStructuredData(filePath, pageType, data) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('application/ld+json')) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": pageType,
        ...data
      };

      const structuredDataScript = `
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>`;

      // Add to the head section
      if (content.includes('<Helmet>')) {
        content = content.replace(
          '</Helmet>',
          `${structuredDataScript}\n        </Helmet>`
        );
      } else if (content.includes('<EnhancedSEO')) {
        content = content.replace(
          '<EnhancedSEO',
          `${structuredDataScript}\n      <EnhancedSEO`
        );
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Added structured data to: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error adding structured data to ${filePath}:`, error.message);
  }
}

// Function to enhance meta tags
function enhanceMetaTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add Open Graph tags if not present
    if (!content.includes('og:title')) {
      const ogTags = `
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      `;
      
      if (content.includes('<Helmet>')) {
        content = content.replace(
          '</Helmet>',
          `${ogTags}\n        </Helmet>`
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Enhanced meta tags in: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error enhancing meta tags in ${filePath}:`, error.message);
  }
}

// Function to create sitemap
function createSitemap() {
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.6', changefreq: 'daily' }
  ];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>https://ziontechgroup.com${route.url}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('Created sitemap.xml');
}

// Function to create robots.txt
function createRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /contact
Allow: /blog
`;

  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
  console.log('Created robots.txt');
}

// Function to add performance hints
function addPerformanceHints() {
  const hints = `
<!-- Performance hints -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://ziontechgroup.com">
<link rel="preload" href="/images/hero-bg.jpg" as="image">
`;

  const indexHtmlPath = path.join(__dirname, '..', 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    let content = fs.readFileSync(indexHtmlPath, 'utf8');
    if (!content.includes('preconnect')) {
      content = content.replace('</head>', `${hints}\n</head>`);
      fs.writeFileSync(indexHtmlPath, content, 'utf8');
      console.log('Added performance hints to index.html');
    }
  }
}

// Main SEO enhancement function
function enhanceSEO() {
  console.log('Enhancing SEO...');
  
  // Create sitemap and robots.txt
  createSitemap();
  createRobotsTxt();
  addPerformanceHints();
  
  // Process main pages
  const mainPages = [
    { file: 'app/page.tsx', type: 'WebSite', data: { name: 'Zion Tech Group', url: 'https://ziontechgroup.com' } },
    { file: 'app/about/page.tsx', type: 'AboutPage', data: { name: 'About Zion Tech Group' } },
    { file: 'app/services/page.tsx', type: 'Service', data: { name: 'IT Services', provider: 'Zion Tech Group' } },
    { file: 'app/ai-services/page.tsx', type: 'Service', data: { name: 'AI Services', provider: 'Zion Tech Group' } }
  ];

  mainPages.forEach(page => {
    const filePath = path.join(__dirname, '..', page.file);
    if (fs.existsSync(filePath)) {
      addStructuredData(filePath, page.type, page.data);
      enhanceMetaTags(filePath);
    }
  });
  
  console.log('SEO enhancement completed successfully!');
}

// Run the enhancement
enhanceSEO();