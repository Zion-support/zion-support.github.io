<<<<<<< HEAD
]
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>""}`
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">""
=======
import fs from 'fs'':;
import path from 'path'':;
const baseUrl = 'https:// ziontechgroup.com'const pages = ['']'
  { url: '/', priority: '1.0', changefreq: 'daily' },''
  { url: '/about', priority: '0.8', changefreq: 'monthly' },''
  { url: '/services', priority: '0.9', changefreq: 'weekly' },''
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },''
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },''
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },''
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },'':;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// Define all the pages and their priorities:;
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },'']'
  { url: '/about', priority: '0.8', changefreq: 'monthly' },''
  { url: '/services', priority: '0.9', changefreq: 'weekly' },''
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },''
  { url: '/solutions', priority: '0.8', changefreq: 'weekly' },''
  { url: '/pricing', priority: '0.7', changefreq: 'monthly' },''
  { url: '/blog', priority: '0.6', changefreq: 'weekly' },''
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly' },''
  { url: '/demo', priority: '0.7', changefreq: 'monthly' },''
  { url: '/support', priority: '0.6', changefreq: 'monthly' },''
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },''
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },''
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },''
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },''
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' }''
]
];
const generateSitemap = () =>{;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>""}``
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">"":;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
${pages.map(;}
  page =>`  <url>``
}
)
    <loc>${baseUrl}${page.url}</loc>)
<<<<<<< HEAD
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}''`
</urlset>``
  const publicDir = path.join(__dirname, '..', 'public')''
  if (!fs.existsSync(publicDir)) {
=======
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>{ url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },''
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },''
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },''
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },''
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },''
// IT Solutions
  { url: '/it-solutions', priority: '0.8', changefreq: 'weekly' },''
  { url: '/it-services', priority: '0.7', changefreq: 'weekly' },''
  { url: '/cloud-infrastructure', priority: '0.7', changefreq: 'weekly' },''
  { url: '/digital-transformation', priority: '0.7', changefreq: 'weekly' },''
  { url: '/cybersecurity', priority: '0.7', changefreq: 'weekly' },''
  // Other pages
  { url: '/case-studies', priority: '0.6', changefreq: 'monthly' },''
  { url: '/careers', priority: '0.5', changefreq: 'monthly' },''
    <changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>`).join('\n')}''``
</urlset>``;`;`
const publicDir = path.join(__dirname, '..', 'public')'':;
if (!fs.existsSync(publicDir)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
    fs.mkdirSync(publicDir, { recursive: true })
}
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)'':;
console.log('Sitemap generated successfully!')''
}
generateSitemap()
