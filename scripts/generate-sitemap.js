import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/it-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/micro-saas-solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/5g-solutions', priority: '0.8', changefreq: 'weekly' },    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

// Write sitemap to public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /solutions
Allow: /pricing
Allow: /blog
Allow: /tutorials
Allow: /demo
Allow: /support

# Crawl delay
Crawl-delay: 1`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('✅ Sitemap and robots.txt generated successfully!');
console.log(`📄 Generated sitemap with ${pages.length} pages`);
console.log(`🤖 Generated robots.txt`);