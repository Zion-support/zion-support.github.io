import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(__filename)// Service data structure;

const services = {"microSaaS": [;
    'cloud-cost-guard', 'llm-evaluation-suite', 'customer-feedback-nps','api-rate-limiter', 'smart-document-processing', 'social-media-scheduler','email-deliverability-monitor', 'website-performance-optimizer';'
  ],"aiServices": [;
    'ai-customer-support', 'predictive-analytics', 'ai-content-generation','ai-cybersecurity', 'ai-healthcare', 'ai-financial-analytics','ai-supply-chain', 'ai-hr-platform';'
  ],"itServices": [;
    'cloud-migration', 'devops-automation', 'cybersecurity-audit','data-analytics', 'blockchain-solutions', 'iot-implementation','quantum-computing', 'edge-computing''
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /services/
Allow: /about/
Allow: /contact/`;
}

// Generate structured data
function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI Solutions",
        "description": "Enterprise-grade AI and machine learning solutions"
      },
      {
        "@type": "Service", 
        "name": "Micro SaaS Development",
        "description": "End-to-end micro SaaS product development"
      },
      {
        "@type": "Service",
        "name": "IT Services",
        "description": "Comprehensive IT infrastructure and cloud solutions"
      }
    ]
  };

  return JSON.stringify(structuredData, null, 2);
}

// Main execution
function main() {
  try {
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and write sitemap.xml
    const sitemap = generateSitemap();
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Generated sitemap.xml');

    // Generate and write robots.txt
    const robots = generateRobots();
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
    console.log('✅ Generated robots.txt');

    // Generate and write structured data
    const structuredData = generateStructuredData();
    fs.writeFileSync(path.join(publicDir, 'structured-data.json'), structuredData);
    console.log('✅ Generated structured-data.json');

    console.log(`\n🎉 Successfully generated SEO files with ${routes.length} URLs`);
    console.log('📁 Files created in /public directory:');
    console.log('   - sitemap.xml');
    console.log('   - robots.txt');
    console.log('   - structured-data.json');
  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, generateRobots, generateStructuredData };
