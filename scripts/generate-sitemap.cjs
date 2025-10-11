const fs = require('fs')
const path = require('path')

// Define all the routes in your application
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'weekly' },
  { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.6, changefreq: 'weekly' },
  { url: '/case-studies', priority: 0.6, changefreq: 'monthly' },
  { url: '/careers', priority: 0.5, changefreq: 'weekly' },
  { url: '/consultation', priority: 0.8, changefreq: 'monthly' },
  { url: '/demo', priority: 0.7, changefreq: 'monthly' },
  { url: '/support', priority: 0.6, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/cookies', priority: 0.3, changefreq: 'yearly' },
  { url: '/sitemap', priority: 0.4, changefreq: 'monthly' },
  // AI Service Pages
  { url: '/ai-analytics', priority: 0.7, changefreq: 'monthly' },
  { url: '/ai-automation', priority: 0.7, changefreq: 'monthly' },
  { url: '/ai-chatbot-builder', priority: 0.7, changefreq: 'monthly' },
  { url: '/ai-cybersecurity', priority: 0.7, changefreq: 'monthly' },
  // IT Service Pages
  { url: '/cloud-infrastructure', priority: 0.7, changefreq: 'monthly' },
  { url: '/cybersecurity-solutions', priority: 0.7, changefreq: 'monthly' },
  { url: '/web-development', priority: 0.7, changefreq: 'monthly' },
  { url: '/mobile-development', priority: 0.7, changefreq: 'monthly' },
  // Company Pages
  { url: '/team', priority: 0.6, changefreq: 'monthly' }
]

// Generate sitemap XML
const baseUrl = 'https://ziontechgroup.com'
const currentDate = new Date().toISOString()

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// Write sitemap to dist directory
const distDir = path.join(__dirname, '..', 'dist')
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('Sitemap generated successfully')