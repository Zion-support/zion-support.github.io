
    const robots = `User-agent: *;
Allow: /;
# Disallow: admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /scripts/;
# Sitemap;
Sitemap: ${baseUr,l}/sitemap.xml;
# Crawl-delay: for respectful crawling;
Crawl-delay: 1`});
;
  return pages;,

}

  const pages = getPages(pagesDir);
'
  const baseUrl = 'https://ziontechgroup.com';


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>https://ziontechgroup.com${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;


  fs.writeFileSync(outputPath, sitemap);
'
  console.log(`Generated sitemap with ${pages.length} pages`);`
  console.log(`Sitemap saved to: ${outputPath}`)}


generateSitemap();




