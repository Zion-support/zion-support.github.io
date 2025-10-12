const fs = require('fs')
const path = require('path')

// Define all the pages in your application
const pages = [
  {
    url: 'https://ziontechgroup.com/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/contact',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/pricing',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/it-services',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/micro-saas',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/5g-implementation',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/cybersecurity',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/cloud-migration',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/mobile-development',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/api-development',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/database-management',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/network-infrastructure',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-content-generator',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-chatbot-builder',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-analytics-dashboard',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-email-assistant',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-voice-assistant',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-crm-assistant',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-email-marketing',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-document-processing',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-3d-generation',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-drug-discovery-pro',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-cybersecurity-suite',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-chatbot-enterprise',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-automated-reporting',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-password-manager',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-task-manager',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-crm',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/smart-analytics',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-automated-testing',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-social-media-manager',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-project-management',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-customer-support',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-invoice-generator',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/team',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/case-studies',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/help',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/docs',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/api-docs',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/community',
    changefreq: 'weekly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/careers',
    changefreq: 'weekly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/blog',
    changefreq: 'weekly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/news',
    changefreq: 'weekly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/press',
    changefreq: 'monthly',
    priority: '0.4',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/partners',
    changefreq: 'monthly',
    priority: '0.4',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/investors',
    changefreq: 'monthly',
    priority: '0.4',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/demo',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/devops-solutions',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/system-integration',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/ai-content-management',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/cookie-policy',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/gdpr-compliance',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://ziontechgroup.com/resources',
    changefreq: 'monthly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// Write sitemap to dist folder
const writeSitemap = () => {
  const distDir = path.join(__dirname, '..', 'dist')
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
  
  const sitemapPath = path.join(distDir, 'sitemap.xml')
  const sitemap = generateSitemap()
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8')
  console.log('Sitemap generated successfully at:', sitemapPath)
}

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

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
Allow: /pricing
Allow: /blog
Allow: /news

# Crawl delay
Crawl-delay: 1`

  const distDir = path.join(__dirname, '..', 'dist')
  const robotsPath = path.join(distDir, 'robots.txt')
  
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8')
  console.log('Robots.txt generated successfully at:', robotsPath)
}

// Run the generation
writeSitemap()
generateRobotsTxt()