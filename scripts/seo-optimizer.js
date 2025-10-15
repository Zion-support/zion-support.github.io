import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Running SEO optimizations...');

// 1. Generate sitemap
const generateSitemap = () => {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/it-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/team', priority: '0.6', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'weekly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../dist/sitemap.xml'), sitemap);
  console.log('✓ Sitemap generated');
};

// 2. Generate robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1
`;

  fs.writeFileSync(path.join(__dirname, '../dist/robots.txt'), robots);
  console.log('✓ robots.txt generated');
};

// 3. Add structured data to HTML
const addStructuredData = () => {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI and IT solutions for modern businesses",
      "foundingDate": "2020",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "contact@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Innovation City",
        "addressRegion": "IC",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "15+",
        "lowPrice": "49",
        "highPrice": "50000",
        "priceCurrency": "USD"
      }
    };

    const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
    
    html = html.replace('</head>', `  ${structuredDataScript}\n</head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✓ Structured data added');
  }
};

// 4. Optimize meta tags
const optimizeMetaTags = () => {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add additional meta tags for better SEO
    const additionalMetaTags = `
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    <meta name="author" content="Zion Tech Group">
    <meta name="publisher" content="Zion Tech Group">
    <meta name="copyright" content="Zion Tech Group">
    <meta name="language" content="en-US">
    <meta name="revisit-after" content="7 days">
    <meta name="rating" content="general">
    <meta name="distribution" content="global">
    <meta name="geo.region" content="US">
    <meta name="geo.placename" content="Innovation City">
    <meta name="geo.position" content="39.8283;-75.5795">
    <meta name="ICBM" content="39.8283, -75.5795">
    <link rel="alternate" hreflang="en" href="https://ziontechgroup.com">
    <link rel="canonical" href="https://ziontechgroup.com">
    `;
    
    html = html.replace('</head>', `  ${additionalMetaTags}\n</head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✓ Meta tags optimized');
  }
};

// 5. Create Open Graph images meta
const addOpenGraphImages = () => {
  const htmlPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    const ogImages = `
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions">
    <meta name="twitter:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions">
    `;
    
    html = html.replace('</head>', `  ${ogImages}\n</head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('✓ Open Graph images meta added');
  }
};

// Run all SEO optimizations
try {
  generateSitemap();
  generateRobotsTxt();
  addStructuredData();
  optimizeMetaTags();
  addOpenGraphImages();
  
  console.log('✅ SEO optimizations completed successfully!');
} catch (error) {
  console.error('❌ Error during SEO optimization:', error);
  process.exit(1);
}