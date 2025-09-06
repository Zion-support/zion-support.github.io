

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { createWriteStream } from 'fs',
import { join } from 'path',

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
=======


import fs from 'fs'; import path from 'path'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const pages = [ { url: '/',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '1.0' },{ url: '/about',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/services-catalog',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/micro-saas',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/ai-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/it-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/contact',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/pricing',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/faq',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.6' },{ url: '/privacy',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' },{ url: '/terms',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' } ]; function generateSitemap() { const baseUrl = 'https: let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'; sitemap += '<urlset xmlns="http: pages.forEach(page => { sitemap += ' <url>\n'; sitemap += ` <loc>${baseUrl}${page.url}</loc>\n`; sitemap += ` <lastmod>${page.lastmod}</lastmod>\n`; sitemap += ` <changefreq>${page.changefreq}</changefreq>\n`; sitemap += ` <priority>${page.priority}</priority>\n`; sitemap += ' </url>\n'}); sitemap += '</urlset>'; return sitemap} function generateJsonSitemap() { const baseUrl = 'https: const jsonSitemap = { baseUrl,pages: pages.map(page => ({ ...page,fullUrl: `${baseUrl}${page.url}` })),generatedAt: new Date().toISOString() }; return JSON.stringify(jsonSitemap,null,2)} function generateTextSitemap() { const baseUrl = 'https: return pages.map(page => `${baseUrl}${page.url}`).join('\n')} function writeSitemaps() { const publicDir = path.join(__dirname,'..','public'); fs.writeFileSync( path.join(publicDir,'sitemap.xml'),generateSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.json'),generateJsonSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.txt'),generateTextSitemap() ); console.log('✅ Sitemaps generated successfully!'); console.log('📄 XML sitemap: public/sitemap.xml'); console.log('📄 JSON sitemap: public/sitemap.json'); console.log('📄 Text sitemap: public/sitemap.txt')} if (import.meta.url === `file: writeSitemaps()} export { generateSitemap,generateJsonSitemap,generateTextSitemap,writeSitemaps,pages };

  const sitemapPath = join(process.cwd(), 'publicsitemap.xml'),
  const writeStream = createWriteStream(sitemapPath),
  writeStream.write(sitemap),
  writeStream.end(),

  console.log('Sitemap generated successfully at:', sitemapPath)
},

generateSitemap(),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { createWriteStream } from 'fs',;
import { join } from 'path',;
const generateSitemap = () => {;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
  <url>;
    <loc>https://ziontechgroup.com/</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>daily</changefreq>;
    <priority>1.0</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/about</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.8</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/services</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.8</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/contact</loc>;
    <lastmod>${new Date().toISOString()}</lastmod>;
    <changefreq>monthly</changefreq>;
    <priority>0.6</priority>;
  </url>;
</urlset>`,;
  const sitemapPath = join(process.cwd(), 'publicsitemap.xml'),;
  const writeStream = createWriteStream(sitemapPath),;
  writeStream.write(sitemap),;
  writeStream.end(),;
  console.log('Sitemap generated successfully at:', sitemapPath);
},;
generateSitemap();
=======


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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
