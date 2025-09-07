import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all the routes for the sitemap
const routes = [
  {
    url: '',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/micro-saas',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/it-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/blockchain-solutions',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-code-reviewer',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-customer-insights',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-customer-support-automation',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-email-optimizer',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-invoice-generator',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-meeting-assistant',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-powered-crm',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-project-management-suite',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ai-social-media-scheduler',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/devops-automation',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/fintech',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/smart-invoice-generator',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
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
=======
import { fileURLToPath  } from 'url';
const __filename = fileURLToPath(import.meta.url)const __dirname  = path.dirname(__filename)// Service data structure;
const services = {microSaaS: [;
    'cloud-cost-guard', 'llm-evaluation-suite', 'customer-feedback-nps','api-rate-limiter', 'smart-document-processing', 'social-media-scheduler','email-deliverability-monitor', 'website-performance-optimizer';
  ],aiServices: [;
    'ai-customer-support', 'predictive-analytics', 'ai-content-generation','ai-cybersecurity', 'ai-healthcare', 'ai-financial-analytics','ai-supply-chain', 'ai-hr-platform';
  ],itServices: [;
    'cloud-migration', 'devops-automation', 'cybersecurity-audit','data-analytics', 'blockchain-solutions', 'iot-implementation','quantum-computing', 'edge-computing';
  ];
}// Static pages;
const staticPages = [;
  { url: '/', priority: '1.0', changefreq: 'weekly' },{ url: '/about', priority: '0.8', changefreq: 'monthly' },{ url: '/services', priority: '0.9', changefreq: 'weekly' },{ url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },{ url: '/ai-services', priority: '0.9', changefreq: 'weekly' },{ url: '/it-services', priority: '0.9', changefreq: 'weekly' },{ url: '/contact', priority: '0.8', changefreq: 'monthly' },{ url: '/pricing', priority: '0.8', changefreq: 'monthly' },{ url: '/faq', priority: '0.6', changefreq: 'monthly' },{ url: '/privacy', priority: '0.4', changefreq: 'yearly' },{ url: '/terms', priority: '0.4', changefreq: 'yearly' }
];function generateSitemap() {const baseUrl = 'https://ziontechgroup.com';
  const currentDate  = new Date().toISOString().split('T')[0];let sitemap = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;// Add static pages;
  staticPages.forEach(page => {sitemap += `;
  <url>;
    <loc>${baseUrl}${page.url}</loc>;
    <lastmod>${currentDate}</lastmod>;
    <changefreq>${page.changefreq}</changefreq>;
    <priority>${page.priority}</priority>;
  </url>`;
  })// Add service pages;
  Object.entries(services).forEach(([category, serviceList]) => {serviceList.forEach(service => {sitemap += `;
  <url>;
    <loc>${baseUrl}/${category}/${service}</loc>;
    <lastmod>${currentDate}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.7</priority>;
  </url>`;
    })})sitemap += `;
</urlset>`;// Write sitemap to public directory;
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')fs.writeFileSync(sitemapPath, sitemap)console.log('✅ Dynamic sitemap generated successfully')console.log(`📄 Sitemap saved to: ${sitemapPath}`)console.log(`🔗 Total URLs: ${staticPages.length + Object.values(services).flat().length}`)}// Generate robots.txt;
function generateRobotsTxt() {const robotsTxt = `User-agent: *;
Allow: /;
# Sitemap;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Crawl-delay;
Crawl-delay: 1;
# Disallow admin areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /private/;
# Allow important pages;
Allow: /services/;
Allow: /micro-saas/;
Allow: /ai-services/;
Allow: /it-services/`;const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt')fs.writeFileSync(robotsPath, robotsTxt)console.log('✅ Robots.txt generated successfully')}// Generate structured data;
function generateStructuredData() {const structuredData = {"@context": "https://schema.org","@type": "Organization","name": "Zion Tech Group","url": "https://ziontechgroup.com","logo": "https://ziontechgroup.com/favicon.svg","description": "Leading provider of micro SaaS products, AI services, and IT solutions","address": {"@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US";
    },"contactPoint": {"@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com";
    },"sameAs": [;
      "https://ziontechgroup.com";
    ],"offers": {"@type": "AggregateOffer","offerCount": "350+","offers": [;
        {"@type": "Offer","name": "Micro SaaS Products","description": "150+ innovative micro SaaS solutions";
        },{"@type": "Offer","name": "AI Services","description": "100+ advanced AI and machine learning services";
        },{"@type": "Offer","name": "IT Solutions","description": "100+ comprehensive IT and technology solutions";
        }
      ];
    }
  }const structuredDataPath = path.join(__dirname, '..', 'public', 'structured-data.json')fs.writeFileSync(structuredDataPath, JSON.stringify(structuredData, null, 2))console.log('✅ Structured data generated successfully')}// Run all generators;
console.log('🚀 Generating SEO files...')generateSitemap()generateRobotsTxt()generateStructuredData()console.log('✨ All SEO files generated successfully!')export {generateSitemap,generateRobotsTxt,generateStructuredData;
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
