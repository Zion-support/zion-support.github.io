const fs = require('fs');
const path = require('path');

// Generate sitemap.xml for better SEO
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
<<<<<<< HEAD
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.9', changefreq: 'weekly' },
    { url: '/micro-saas', priority: '0.9', changefreq: 'weekly' },
    { url: '/5g-solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/demo', priority: '0.8', changefreq: 'monthly' },
    { url: '/support', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.6', changefreq: 'monthly' },
    
    // AI Services
    { url: '/ai-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-content-generation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-customer-service', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-email-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-fraud-detection', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-healthcare', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-predictive-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-project-management', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-recommendation-engine', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-sales-automation', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-workflow-automation', priority: '0.8', changefreq: 'weekly' },
    
    // IT Services
    { url: '/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/cybersecurity-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/web-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/mobile-development', priority: '0.8', changefreq: 'weekly' },
    { url: '/database-management', priority: '0.8', changefreq: 'weekly' },
    { url: '/custom-software', priority: '0.8', changefreq: 'weekly' },
    { url: '/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
    
    // Micro SAAS
    { url: '/zion-analytics-pro', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-security-shield', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-cloud-vault', priority: '0.8', changefreq: 'weekly' },
    { url: '/zion-content-studio', priority: '0.8', changefreq: 'weekly' },
    
    // 5G Solutions
    { url: '/5g-data-analytics', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-edge-computing', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-implementation', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-mobile-applications', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-network-infrastructure', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-private-networks', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-smart-city-solutions', priority: '0.8', changefreq: 'weekly' },
    { url: '/5g-iot-solutions', priority: '0.8', changefreq: 'weekly' }
=======
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.6', changefreq: 'weekly' },
    { url: '/ai-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/micro-saas', priority: '0.8', changefreq: 'monthly' },
    { url: '/5g-solutions', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
<<<<<<< HEAD
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
  
  // Also generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /contact
Allow: /services
Allow: /ai-services
Allow: /micro-saas
Allow: /5g-solutions
Allow: /blog
Allow: /pricing
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt generated successfully!');
};

generateSitemap();
=======
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully at dist/sitemap.xml');
};

// Generate robots.txt
const generateRobots = () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;

  const robotsPath = path.join(process.cwd(), 'dist', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✅ Robots.txt generated successfully at dist/robots.txt');
};

// Run the generation
try {
  generateSitemap();
  generateRobots();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
>>>>>>> cursor/analyze-improve-and-deploy-application-a281
