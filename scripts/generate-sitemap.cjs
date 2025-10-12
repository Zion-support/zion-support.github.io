const fs = require('fs')
const path = require('path')

<<<<<<< HEAD
console.log('Generating sitemap...')

// Define all the pages that should be in the sitemap
const pages = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },
  { url: '/careers', priority: '0.6', changefreq: 'weekly' },
  { url: '/news', priority: '0.6', changefreq: 'weekly' },
  { url: '/press', priority: '0.5', changefreq: 'monthly' },
  { url: '/partners', priority: '0.5', changefreq: 'monthly' },
  { url: '/investors', priority: '0.5', changefreq: 'monthly' },
  { url: '/community', priority: '0.5', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
  
  // AI Services
  { url: '/ai-content-generator', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-chatbot-enterprise', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-analytics-dashboard', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-3d-generation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-drug-discovery-pro', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-cybersecurity-suite', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-crm-assistant', priority: '0.8', changefreq: 'monthly' },
  { url: '/ai-email-marketing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-document-processing', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-voice-assistant', priority: '0.7', changefreq: 'monthly' },
  
  // IT Services
  { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/api-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  
  // Micro SaaS Services
  { url: '/ai-crm', priority: '0.7', changefreq: 'monthly' },
  { url: '/smart-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automated-testing', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-social-media-manager', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-project-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-customer-support', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-invoice-generator', priority: '0.6', changefreq: 'monthly' },
  
  // Company Pages
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/help', priority: '0.5', changefreq: 'monthly' },
  { url: '/docs', priority: '0.5', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.5', changefreq: 'weekly' },
  
  // Additional Pages
  { url: '/devops-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/system-integration', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/gdpr-compliance', priority: '0.3', changefreq: 'yearly' },
  { url: '/resources', priority: '0.5', changefreq: 'monthly' }
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-bb14
]

// Generate sitemap XML
const generateSitemap = () => {
<<<<<<< HEAD
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date().toISOString()
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  pages.forEach(page => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`
    sitemap += `    <priority>${page.priority}</priority>\n`
    sitemap += '  </url>\n'
  })
  
  sitemap += '</urlset>'
  
  return sitemap
}

// Write sitemap to dist directory
const writeSitemap = () => {
  const sitemap = generateSitemap()
  const distPath = path.join(__dirname, '../dist')
  const sitemapPath = path.join(distPath, 'sitemap.xml')
  
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true })
  }
  
  fs.writeFileSync(sitemapPath, sitemap)
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-bb14
  console.log('Sitemap generated successfully at:', sitemapPath)
}

// Generate robots.txt
const generateRobotsTxt = () => {
<<<<<<< HEAD
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

=======
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

>>>>>>> cursor/analyze-improve-and-deploy-application-bb14
# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
<<<<<<< HEAD
Allow: /ai-services/
Allow: /it-services/
Allow: /micro-saas/
Allow: /about/
Allow: /contact/
Allow: /pricing/
Allow: /blog/
Allow: /case-studies/

# Block common bot traps
Disallow: /*.json$
Disallow: /*?*
Disallow: /*#*
Disallow: /*.pdf$
Disallow: /*.doc$
Disallow: /*.docx$
Disallow: /*.xls$
Disallow: /*.xlsx$
Disallow: /*.ppt$
Disallow: /*.pptx$`
  
  const distPath = path.join(__dirname, '../dist')
  const robotsPath = path.join(distPath, 'robots.txt')
  
  fs.writeFileSync(robotsPath, robotsContent)
  console.log('Robots.txt generated successfully at:', robotsPath)
}

// Main execution
const main = () => {
  try {
    writeSitemap()
    generateRobotsTxt()
    console.log('Sitemap generation completed successfully!')
  } catch (error) {
    console.error('Sitemap generation failed:', error)
    process.exit(1)
  }
}

main()
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-bb14
