const fs = require('fs')
const path = require('path')

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
  { url: '/ai-services', priority: '0.8', changefreq: 'weekly' },
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
  { url: '/ai-customer-insights', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-blockchain-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-chatbot-builder', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-email-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automation', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-social-media-manager', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-project-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-customer-support', priority: '0.6', changefreq: 'monthly' },
  { url: '/ai-invoice-generator', priority: '0.6', changefreq: 'monthly' },
  
  // IT Services
  { url: '/it-services', priority: '0.8', changefreq: 'weekly' },
  { url: '/cloud-migration', priority: '0.8', changefreq: 'monthly' },
  { url: '/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: '/api-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { url: '/web-development', priority: '0.7', changefreq: 'monthly' },
  { url: '/devops', priority: '0.7', changefreq: 'monthly' },
  { url: '/system-integration', priority: '0.7', changefreq: 'monthly' },
  { url: '/data-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/iot', priority: '0.6', changefreq: 'monthly' },
  { url: '/blockchain-development', priority: '0.6', changefreq: 'monthly' },
  
  // Micro SaaS Services
  { url: '/micro-saas-services', priority: '0.7', changefreq: 'weekly' },
  { url: '/micro-saas', priority: '0.7', changefreq: 'weekly' },
  { url: '/ai-crm', priority: '0.7', changefreq: 'monthly' },
  { url: '/smart-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-automated-testing', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/analytics-dashboard', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/appointment-scheduler', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/chat-analytics', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/content-generator', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/document-processor', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/email-marketing', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/expense-tracker', priority: '0.6', changefreq: 'monthly' },
  { url: '/micro-saas/inventory-management', priority: '0.6', changefreq: 'monthly' },
  
  // 5G Services
  { url: '/5g-implementation', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.6', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'monthly' },
  
  // Company Pages
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/help', priority: '0.5', changefreq: 'monthly' },
  { url: '/docs', priority: '0.5', changefreq: 'weekly' },
  { url: '/api-docs', priority: '0.5', changefreq: 'weekly' },
  
  // Additional Pages
  { url: '/devops-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/ai-content-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/gdpr-compliance', priority: '0.3', changefreq: 'yearly' },
  { url: '/resources', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' }
]

// Generate sitemap XML
const generateSitemap = () => {
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
  console.log('Sitemap generated successfully at:', sitemapPath)
}

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
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