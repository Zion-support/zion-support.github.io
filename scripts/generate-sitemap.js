import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { url: '/demo', priority: '0.6', changefreq: 'monthly' },
  { url: '/support', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/5g-solutions', priority: '0.7', changefreq: 'weekly' },
  { url: '/5g-data-analytics', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-edge-computing', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-iot-solutions', priority: '0.6', changefreq: 'weekly' },
  { url: '/5g-smart-city-solutions', priority: '0.6', changefreq: 'weekly' },
];

const baseUrl = 'https://ziontechgroup.com';
const currentDate = new Date().toISOString();

    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

Allow: /

Sitemap: ${baseUrl}/sitemap.xml

=======
# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /scripts/
Disallow: /node_modules/
`;
};

// Generate and write sitemap
const sitemap = generateSitemap();
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at:', sitemapPath);

// Generate and write robots.txt
const robotsTxt = generateRobotsTxt();
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✅ Robots.txt generated successfully at:', robotsPath);

console.log(`📊 Generated sitemap with ${pages.length} pages`);
console.log('🚀 SEO files are ready for deployment!');
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
