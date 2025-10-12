const fs = require('fs')
const path = require('path')

console.log('Generating sitemap...')

// Define all the pages that should be in the sitemap
const pages = [
  // Main pages
  { url: 'https://ziontechgroup.com/', priority: '1.0', changefreq: 'daily' },
  { url: 'https://ziontechgroup.com/about', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/contact', priority: '0.9', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/demo', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/blog', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/careers', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/news', priority: '0.6', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/press', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/partners', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/investors', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/community', priority: '0.5', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/case-studies', priority: '0.7', changefreq: 'monthly' },
  
  // AI Services
  { url: 'https://ziontechgroup.com/ai-content-generator', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-chatbot-enterprise', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-analytics-dashboard', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-3d-generation', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-drug-discovery-pro', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-cybersecurity-suite', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-crm-assistant', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-email-marketing', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-document-processing', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-voice-assistant', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-customer-insights', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-workflow-automation', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-blockchain-analytics', priority: '0.7', changefreq: 'monthly' },
  
  // IT Services
  { url: 'https://ziontechgroup.com/cloud-migration', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/mobile-development', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/api-development', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/database-management', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  
  // Micro SaaS Services
  { url: 'https://ziontechgroup.com/ai-crm', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/smart-analytics', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-automated-testing', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-social-media-manager', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-project-management', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-customer-support', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-invoice-generator', priority: '0.6', changefreq: 'monthly' },
  
  // 5G Solutions
  { url: '/5g-network-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-iot-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-edge-computing', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-private-networks', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-mobile-applications', priority: '0.7', changefreq: 'monthly' },
  { url: '/5g-data-analytics', priority: '0.7', changefreq: 'monthly' },
  
  // Company Pages
  { url: 'https://ziontechgroup.com/team', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/help', priority: '0.5', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/docs', priority: '0.5', changefreq: 'weekly' },
  { url: 'https://ziontechgroup.com/api-docs', priority: '0.5', changefreq: 'weekly' },
  
  // Additional Pages
  { url: 'https://ziontechgroup.com/devops-solutions', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/system-integration', priority: '0.7', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/ai-content-management', priority: '0.6', changefreq: 'monthly' },
  { url: 'https://ziontechgroup.com/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://ziontechgroup.com/gdpr-compliance', priority: '0.3', changefreq: 'yearly' },
  { url: 'https://ziontechgroup.com/resources', priority: '0.5', changefreq: 'monthly' }
]

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com'
  const currentDate = new Date().toISOString()
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  pages.forEach(page => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${page.url}</loc>\n`
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