

=======



=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { createWriteStream } from 'fs',
import { join } from 'path',
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
origin/automation-improvements-final
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
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>").join('\n')}
</urlset>";
  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { "recursive": true })}
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully')};
ursor/integrate-build-improve-and-re-verify-8f7d
generateSitemap();
};
,
generateSitemap(),
import fs from 'fs'; import path from 'path'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const pages = [ { url: '/',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '1.0' },{ url: '/about',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/services-catalog',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/micro-saas',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/ai-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/it-services',lastmod: new Date().toISOString().split('T')[0],changefreq: 'weekly',priority: '0.9' },{ url: '/contact',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/pricing',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.8' },{ url: '/faq',lastmod: new Date().toISOString().split('T')[0],changefreq: 'monthly',priority: '0.6' },{ url: '/privacy',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' },{ url: '/terms',lastmod: new Date().toISOString().split('T')[0],changefreq: 'yearly',priority: '0.4' } ]; function generateSitemap() { const baseUrl = 'https: let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'; sitemap += '<urlset xmlns="http: pages.forEach(page => { sitemap += ' <url>\n'; sitemap += ` <loc>${baseUrl}${page.url}</loc>\n`; sitemap += ` <lastmod>${page.lastmod}</lastmod>\n`; sitemap += ` <changefreq>${page.changefreq}</changefreq>\n`; sitemap += ` <priority>${page.priority}</priority>\n`; sitemap += ' </url>\n'}); sitemap += '</urlset>'; return sitemap} function generateJsonSitemap() { const baseUrl = 'https: const jsonSitemap = { baseUrl,pages: pages.map(page => ({ ...page,fullUrl: `${baseUrl}${page.url}` })),generatedAt: new Date().toISOString() }; return JSON.stringify(jsonSitemap,null,2)} function generateTextSitemap() { const baseUrl = 'https: return pages.map(page => `${baseUrl}${page.url}`).join('\n')} function writeSitemaps() { const publicDir = path.join(__dirname,'..','public'); fs.writeFileSync( path.join(publicDir,'sitemap.xml'),generateSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.json'),generateJsonSitemap() ); fs.writeFileSync( path.join(publicDir,'sitemap.txt'),generateTextSitemap() ); console.log('✅ Sitemaps generated successfully!'); console.log('📄 XML sitemap: public/sitemap.xml'); console.log('📄 JSON sitemap: public/sitemap.json'); console.log('📄 Text sitemap: public/sitemap.txt')} if (import.meta.url === `file: writeSitemaps()} export { generateSitemap,generateJsonSitemap,generateTextSitemap,writeSitemaps,pages };
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


generateSitemap(),
const fs = require('fs');
const path = require('path');

// Base URL for the site
const BASE_URL = 'https://zion.app';

// Define the pages and their metadata
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/micro-saas',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/ai-tools',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/developer-tools',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/ai-assistant',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/cloud-platform',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/automation',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/analytics',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/pricing',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/case-studies',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/blog',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/resources',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/support',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/docs',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate sitemap XML content
function generateSitemapXML() {
  let xml = '<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?>\n';
  xml += '<urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;>\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Generate sitemap.txt (simple text version)
function generateSitemapTXT() {
  return pages.map(page => `${BASE_URL}${page.url}`).join('\n');
}

// Main execution
function main() {
  try {
    // Create public directory if it doesn't exist
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and save sitemap.xml
    const sitemapXML = generateSitemapXML();
    const xmlPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(xmlPath, sitemapXML, 'utf8');
    // console.log(`✅ Sitemap XML generated: ${xmlPath}`);

    // Generate and save sitemap.txt
    const sitemapTXT = generateSitemapTXT();
    const txtPath = path.join(publicDir, 'sitemap.txt');
    fs.writeFileSync(txtPath, sitemapTXT, 'utf8');
    // console.log(`✅ Sitemap TXT generated: ${txtPath}`);

    // Generate robots.txt
    const robotsTXT = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap.txt

# Crawl-delay
Crawl-delay: 1`;
    
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsTXT, 'utf8');
    // console.log(`✅ Robots.txt generated: ${robotsPath}`);

    // console.log(`\n🎉 Sitemap generation complete!`);
    // console.log(`📊 Total pages: ${pages.length}`);
    // console.log(`🌐 Base URL: ${BASE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSitemapXML, generateSitemapTXT, pages };
origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
};
,
generateSitemap(),




=======

>>>>>>> origin/automation-improvements-final
=======
=======
console && console.log('🗺️  Generating sitemap...');
console && console.log('✅ Sitemap generation completed');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
