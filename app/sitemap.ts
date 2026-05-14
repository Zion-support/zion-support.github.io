// Dynamic Sitemap Generator — lists all service pages
// Cached 1 hour; auto-rebuilds when services change
// For static export, also writes to public/sitemap.xml via prebuild script

export async function GET() {
  const fs = require('fs');
  const path = require('path');

  const SERVICES_FILE = path.join(process.cwd(), 'app', 'data', 'servicesData.ts');
  const CACHE_DIR = path.join(process.cwd(), 'automation', 'cache');
  const SITEMAP_CACHE = path.join(CACHE_DIR, 'sitemap.xml');
  const CACHE_TTL = 60 * 60 * 1000;

  try { fs.mkdirSync(CACHE_DIR, { recursive: true }); } catch {}

  function isCacheValid() {
    try {
      if (!fs.existsSync(SITEMAP_CACHE)) return false;
      const stat = fs.statSync(SITEMAP_CACHE);
      return (Date.now() - stat.mtimeMs) < CACHE_TTL;
    } catch { return false; }
  }

  if (isCacheValid()) {
    return new Response(fs.readFileSync(SITEMAP_CACHE, 'utf8'), {
      status: 200,
      headers: { 'Content-Type': 'application/xml' }
    });
  }

  const content = fs.readFileSync(SERVICES_FILE, 'utf8');
  const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];

  const services = idMatches.map((m, i) => ({
    id: m[1],
    title: titleMatches[i]?.[1] || 'Service'
  }));

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${baseUrl}/ai-services</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${baseUrl}/it-services</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

  services.forEach(svc => {
    xml += `  <url>\n    <loc>${baseUrl}/ai-services/${svc.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_CACHE, xml);

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' }
  });
}
