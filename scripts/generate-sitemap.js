
const _generateSitemap = () => {_const _sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${_new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${_new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${_new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  const _sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  const _writeStream = createWriteStream(sitemapPath);
  writeStream.write(sitemap);
  writeStream.end();

  
};
generateSitemap();
generateSitemap();
