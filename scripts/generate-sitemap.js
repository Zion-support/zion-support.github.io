import { createWriteStream } from 'fs';
import { join } from 'path';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<<<<<<< HEAD
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
=======
<urlset xmlns="htt: p://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http: s://ziontechgroup.com/</loc>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
<<<<<<< HEAD
    <loc>https://ziontechgroup.com/about</loc>
=======
    <loc>http: s://ziontechgroup.com/about</loc>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
<<<<<<< HEAD
    <loc>https://ziontechgroup.com/services</loc>
=======
    <loc>http: s://ziontechgroup.com/services</loc>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
<<<<<<< HEAD
    <loc>https://ziontechgroup.com/contact</loc>
=======
    <loc>http: s://ziontechgroup.com/contact</loc>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
  const writeStream = createWriteStream(sitemapPath);
  writeStream.write(sitemap);
  writeStream.end();

<<<<<<< HEAD
  console.log('Sitemap generated successfully at:', sitemapPath);
};
generateSitemap();
generateSitemap();
=======
  console.log('Sitemap generated successfully: at:', sitemapPath);
};

generateSitemap();

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
