<<<<<<< HEAD
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

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>").join('\n')}
</urlset>";

  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { "recursive": true })}

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully')};

generateSitemap();
import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const baseUrl = 'https: const pages = [ '','/about','/services','/services/ai-services','/services/micro-saas','/services/it-services','/contact',]; const generateSitemap = () => { const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http: ${pages.map(page => ` <url> <loc>${baseUrl}${page}</loc> <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> <changefreq>weekly</changefreq> <priority>${page === '' ? '1.0' : '0.8'}</priority> </url>`).join('\n')} </urlset>`; const outDir = path.join(__dirname,'..','out'); if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir,{ recursive: true })} fs.writeFileSync(path.join(outDir,'sitemap.xml'),sitemap); console.log('✅ Sitemap generated successfully')}; generateSitemap();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
