import fs from 'fs'
import path from 'path'
export async function generateSitemap() {

  const baseUrl = 'https://ziontechgroup.com'
  const pages = [
    '/'/about'/services'/contact'/blog'/careers',
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`
  fs.writeFileSync(path.join(process.cwd(), 'public'sitemap.xml'), sitemap;
)
  console.log('Sitemap generated successfully')}

if (require.main === module) {
  generateSitemap()}