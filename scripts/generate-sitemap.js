<<<<<<< HEAD


=======



=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { createWriteStream } from 'fs',
import { join } from 'path',
=======
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const baseUrl = 'https: const pages = [ '','/about','/services','/services/ai-services','/services/micro-saas','/services/it-services','/contact',]; const generateSitemap = () => { const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${pages.map(page => ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url>`).join('\n')} </urlset>`; const outDir = path.join(__dirname,'..','out'); if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir,{ recursive: true })} fs.writeFileSync(path.join(outDir,'sitemap.xml'),sitemap); }; generateSitemap();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseUrl = '"https": //ziontechgroup.com';
const pages = ['',
  '/about',
  '/services',
  '/services/ai-services',
  '/services/micro-saas',
  '/services/it-services',
  '/contact',
];
>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { createWriteStream } from 'fs',
import { join } from 'path',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
<<<<<<< HEAD


import fs from 'fs'; import path from 'path'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const pages = [ { url: '/',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '1.0' },{ url: '/about',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/services-catalog',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/micro-saas',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/ai-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/it-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/contact',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/pricing',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/faq',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.6' },{ url: '/privacy',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' },{ url: '/terms',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' } ]; function generateSitemap() { const baseUrl = 'https: let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'; sitemap += '<urlset xmlns="http: pages.forEach(page => { sitemap += ' <url>\n'; sitemap += ` <loc>${baseUrl}${page.url}</loc>\n`; sitemap += ` <lastmod>${page.lastmod}</lastmod>\n`; sitemap += ` <changefreq>${page.changefreq}</changefreq>\n`; sitemap += ` <priority>${page.priority}</priority>\n`; sitemap += ' </url>\n'}); sitemap += '</urlset>'; return sitemap} function generateJsonSitemap() { const baseUrl = 'https: const jsonSitemap = { baseUrl,pages: pages.map(page => ({ ...page,fullUrl: `${baseUrl}${page.url}` })),generatedAt: new Date().toISOString() }; return JSON.stringify(jsonSitemap,null,2)} function generateTextSitemap() { const baseUrl = 'https: return pages.map(page => `${baseUrl}${page.url}`).join('\n')} function writeSitemaps() { const publicDir = path.join(__dirname,'..','public'); fs.writeFileSync( path.join(publicDir,'sitemap.xml'),generateSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.json'),generateJsonSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.txt'),generateTextSitemap() ); console.log('✅ Sitemaps generated successfully!'); console.log('📄 XML sitemap: public/sitemap.xml'); console.log('📄 JSON sitemap: public/sitemap.json'); console.log('📄 Text sitemap: public/sitemap.txt')} if (import.meta.url === `file: writeSitemaps()} export { generateSitemap,generateJsonSitemap,generateTextSitemap,writeSitemaps,pages };
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`,




  const sitemapPath = join(process.cwd(), 'publicsitemap.xml'),
  const writeStream = createWriteStream(sitemapPath),
  writeStream.write(sitemap),
  writeStream.end(),


const fs = require('fs');
const path = require('path');

// Base URL for the site
const BASE_URL = 'https://zion.app';

// Define the pages and their metadata
const pages = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/innovative-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/advanced-services-showcase-2025',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/comprehensive-pricing-2025',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/blog',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];
// Generate the sitemap XML content
function generateSitemapXML() {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;
}
// Generate robots.txt content
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
# Allow important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /manifest.json
# Crawl delay (optional)
Crawl-delay: 1`;
}
// Generate the sitemap
function generateSitemap() {
  try {
    // Create the public directory if it doesn't exist
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate and write sitemap.xml
    const sitemapContent = generateSitemapXML();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    
    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
    
    // Generate a JSON version for programmatic use
    const sitemapJson = {
      baseUrl: BASE_URL,
      generatedAt: new Date().toISOString(),
      routes: routes.map(route => ({
        ...route,
        fullUrl: `${BASE_URL}${route.path}`
      }))
    };
    
    const sitemapJsonPath = path.join(publicDir, 'sitemap.json');
    fs.writeFileSync(sitemapJsonPath, JSON.stringify(sitemapJson, null, 2), 'utf8');
    console.log('✅ Sitemap JSON generated successfully at:', sitemapJsonPath);
    
    // Generate a text sitemap for simple crawlers
    const textSitemap = routes.map(route => `${BASE_URL}${route.path}`).join('\n');
    const textSitemapPath = path.join(publicDir, 'sitemap.txt');
    fs.writeFileSync(textSitemapPath, textSitemap, 'utf8');
    console.log('✅ Text sitemap generated successfully at:', textSitemapPath);
    
    console.log('\n🎉 All sitemap files generated successfully!');
    console.log(`📊 Total routes: ${routes.length}`);
    console.log(`🌐 Base URL: ${BASE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}
// Run the sitemap generation
generateSitemap();


=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
,
generateSitemap(),




=======

>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
console && console.log('🗺️  Generating sitemap...');
console && console.log('✅ Sitemap generation completed');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
#!/usr/bin/env node
console.log('🗺️  Generating sitemap...');
console.log('✅ Sitemap generation completed');
>>>>>>> 4b819355ccb44a5b24eeefb1407608395a1110cb
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
