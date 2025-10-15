import fs  from 'fs";";
import path  from 'path";";
const baseUrl = 'https://ziontechgroup.com';
  { url: '/pricing', priority: '0.7', changefreq: 'monthly" },";
  { url: '/blog', priority: '0.6', changefreq: 'weekly" },";
  { url: '/tutorials', priority: '0.6', changefreq: 'weekly" },";
  { url: '/demo', priority: '0.7', changefreq: 'monthly" },";
  { url: '/support', priority: '0.6', changefreq: 'monthly" },";
  { url: '/contact', priority: '0.8', changefreq: 'monthly" },";
  { url: '/privacy', priority: '0.3', changefreq: 'yearly" },";
  { url: '/terms', priority: '0.3', changefreq: 'yearly" },";
  { url: '/pricing', priority: '0.8', changefreq: 'monthly" },;
    <changefreq>${page.changefreq}";
    <priority>${page.priority}";
  </url>`).join('\n")}
</urlset>`;
<<<<<<< HEAD";
<<<<<<< HEAD";
  const publicDir = path.join(__dirname, '..', 'public")
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })";
  }";
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml"), sitemap)";
  console.log('Sitemap generated successfully!")
}>";
generateSitemap()>";