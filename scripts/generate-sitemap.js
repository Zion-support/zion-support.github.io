import { createWriteStream , join  } from 'fs';
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  writeStream.write(sitemap);
  writeStream.end();
  console.log('Sitemap generated successfully at:', sitemapPath);
};
;
generateSitemap();

generateSitemap();
generateSitemap();

  console.log('Sitemap generated successfully at:', sitemapPath)};
generateSitemap();
