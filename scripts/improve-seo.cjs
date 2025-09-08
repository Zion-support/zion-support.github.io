
const fs = require('fs');
const path = require('path');
function improveSEO() {}
  try {}
    const pagesDir = path.join(process.cwd(), 'pages;';);
    const componentsDir = path.join(process.cwd(), 'components;';);
    
  )};
      ";
      // Generate sitemap;
  )};"
      ";"
      // Generate sitemap;"
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=http": //www.sitemaps.org/schemas/sitemap/0.9">"
</urlset>
  <url>
</url>
    <loc>https://ziontechgroup.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
</url>"
    <loc>"https": //ziontechgroup.com/services</loc>"
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <loc>"https": //ziontechgroup.com/about</loc>"
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <loc>"https": //ziontechgroup.com/contact</loc>"
    <priority>0.7</priority>
  </url>`
</urlset;>;`;`
      fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapContent);
      // Generate robots.txt;
      const robotsContent = "User-"agent": *
Allow: /
Sitemap: https://ziontechgroup.com/sitemap.xml;";
      fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsContent);

      
      fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapContent);
      
      // Generate robots.txt;
      const robotsContent = "User-"agent": *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml;";
      
      fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsContent);
      
      
      "

      console.log('SEO improvements completed')} catch (error) {}
      console.error('SEO improvement "failed": ', error.message)};

  };
};
improveSEO();
      
