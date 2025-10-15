import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOOptimizerEnhanced {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.baseUrl = 'https://ziontechgroup.com';
  }

  async optimize() {
    console.log('🔍 Starting enhanced SEO optimizations...');
    
    try {
      await this.generateSitemap();
      await this.generateRobotsTxt();
      await this.optimizeMetaTags();
      await this.generateStructuredData();
      await this.optimizeImages();
      
      console.log('✅ Enhanced SEO optimizations completed!');
    } catch (error) {
      console.error('❌ SEO optimization failed:', error);
      throw error;
    }
  }

  async generateSitemap() {
    const pages = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
      { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
      { url: '/cloud-infrastructure', priority: 0.8, changefreq: 'monthly' },
      { url: '/digital-transformation', priority: 0.8, changefreq: 'monthly' },
      { url: '/contact', priority: 0.7, changefreq: 'monthly' },
      { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
      { url: '/blog', priority: 0.6, changefreq: 'daily' },
      { url: '/team', priority: 0.5, changefreq: 'monthly' },
      { url: '/careers', priority: 0.6, changefreq: 'weekly' },
      { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
      { url: '/terms', priority: 0.3, changefreq: 'yearly' },
      { url: '/accessibility', priority: 0.4, changefreq: 'monthly' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${this.baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(this.distPath, 'sitemap.xml'), sitemap);
    console.log('📄 Generated sitemap.xml');
  }

  async generateRobotsTxt() {
    const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

    fs.writeFileSync(path.join(this.distPath, 'robots.txt'), robotsTxt);
    console.log('🤖 Generated robots.txt');
  }

  async optimizeMetaTags() {
    const htmlPath = path.join(this.distPath, 'index.html');
    if (!fs.existsSync(htmlPath)) return;

    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Add comprehensive meta tags
    const metaTags = `
    <!-- Primary Meta Tags -->
    <title>Zion Tech Group - Advanced AI and IT Solutions</title>
    <meta name="title" content="Zion Tech Group - Advanced AI and IT Solutions">
    <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.">
    <meta name="keywords" content="AI, artificial intelligence, IT solutions, cloud infrastructure, digital transformation, machine learning, data analytics, business automation">
    <meta name="author" content="Zion Tech Group">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${this.baseUrl}/">
    <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions">
    <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.">
    <meta property="og:image" content="${this.baseUrl}/images/og-image.jpg">
    <meta property="og:site_name" content="Zion Tech Group">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${this.baseUrl}/">
    <meta property="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions">
    <meta property="twitter:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.">
    <meta property="twitter:image" content="${this.baseUrl}/images/og-image.jpg">
    <meta property="twitter:creator" content="@ziontechgroup">
    <meta property="twitter:site" content="@ziontechgroup">
    
    <!-- Additional SEO Meta Tags -->
    <meta name="theme-color" content="#3b82f6">
    <meta name="msapplication-TileColor" content="#3b82f6">
    <meta name="msapplication-config" content="/browserconfig.xml">
    <link rel="canonical" href="${this.baseUrl}/">
    <link rel="alternate" hreflang="en" href="${this.baseUrl}/">
    <link rel="alternate" hreflang="x-default" href="${this.baseUrl}/">
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://www.google-analytics.com">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">`;

    // Insert meta tags before closing head tag
    html = html.replace('</head>', `    ${metaTags}\n  </head>`);
    
    fs.writeFileSync(htmlPath, html);
    console.log('🏷️ Optimized meta tags');
  }

  async generateStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/images/logo.png`,
      "description": "Leading provider of AI and IT solutions for modern businesses",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "AI Services",
          "description": "Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision"
        },
        {
          "@type": "Service",
          "name": "Cloud Infrastructure",
          "description": "Scalable cloud solutions that provide reliability, security, and performance for your business applications"
        },
        {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "Complete digital transformation services to modernize your business processes and systems"
        }
      ],
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    const structuredDataScript = `
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 2)}
    </script>`;

    const htmlPath = path.join(this.distPath, 'index.html');
    if (fs.existsSync(htmlPath)) {
      let html = fs.readFileSync(htmlPath, 'utf8');
      html = html.replace('</head>', `    ${structuredDataScript}\n  </head>`);
      fs.writeFileSync(htmlPath, html);
    }

    // Also save as separate file
    fs.writeFileSync(
      path.join(this.distPath, 'structured-data.json'),
      JSON.stringify(structuredData, null, 2)
    );
    
    console.log('📊 Generated structured data');
  }

  async optimizeImages() {
    // This would typically use sharp or imagemin for image optimization
    // For now, we'll create a placeholder
    console.log('🖼️ Image SEO optimization would be implemented here');
  }
}

// Run optimization if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new SEOOptimizerEnhanced();
  optimizer.optimize().catch(console.error);
}

export default SEOOptimizerEnhanced;