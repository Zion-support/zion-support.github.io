import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all pages with their metadata
const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/services-catalog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/micro-saas',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/ai-services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/it-services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/pricing',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/privacy',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.4'
  },
  {
    url: '/terms',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: '0.4'
  }
];

// Generate XML sitemap
function generateSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Generate JSON sitemap for internal use
function generateJsonSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  const jsonSitemap = {
    baseUrl,
    pages: pages.map(page => ({
      ...page,
      fullUrl: `${baseUrl}${page.url}`
    })),
    generatedAt: new Date().toISOString()
  };
  
  return JSON.stringify(jsonSitemap, null, 2);
}

// Generate text sitemap
function generateTextSitemap() {
  const baseUrl = 'https://ziontechgroup.com';
  
  return pages.map(page => `${baseUrl}${page.url}`).join('\n');
}

// Write sitemaps to files
function writeSitemaps() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Write XML sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    generateSitemap()
  );
  
  // Write JSON sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.json'),
    generateJsonSitemap()
  );
  
  // Write text sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.txt'),
    generateTextSitemap()
  );
  
  console.log('✅ Sitemaps generated successfully!');
  console.log('📄 XML sitemap: public/sitemap.xml');
  console.log('📄 JSON sitemap: public/sitemap.json');
  console.log('📄 Text sitemap: public/sitemap.txt');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemaps();
}

export {
  generateSitemap,
  generateJsonSitemap,
  generateTextSitemap,
  writeSitemaps,
  pages
};