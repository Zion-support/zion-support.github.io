const fs = require('fs');
const path = require('path');

console.log('🔍 Running SEO optimization...');

try {
  // Generate sitemap
  console.log('📄 Generating sitemap...');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zion.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generated');
  
  console.log('✅ SEO optimization completed');
  
} catch (error) {
  console.error('❌ SEO optimization failed:', error.message);
  process.exit(1);
}