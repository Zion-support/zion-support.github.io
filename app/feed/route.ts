// RSS Feed Generator — latest 50 services (RSS 2.0)
export async function GET() {
  const fs = require('fs');
  const path = require('path');

  const SERVICES_FILE = path.join(process.cwd(), 'app', 'data', 'servicesData.ts');
  const CACHE_DIR = path.join(process.cwd(), 'automation', 'cache');
  const RSS_CACHE = path.join(CACHE_DIR, 'feed.xml');
  const CACHE_TTL = 30 * 60 * 1000;

  try { fs.mkdirSync(CACHE_DIR, { recursive: true }); } catch {}

  function isValid() {
    try {
      if (!fs.existsSync(RSS_CACHE)) return false;
      const stat = fs.statSync(RSS_CACHE);
      return (Date.now() - stat.mtimeMs) < CACHE_TTL;
    } catch { return false; }
  }

  if (isValid()) {
    return new Response(fs.readFileSync(RSS_CACHE, 'utf8'), {
      status: 200,
      headers: { 'Content-Type': 'application/rss+xml' }
    });
  }

  const content = fs.readFileSync(SERVICES_FILE, 'utf8');
  const services = [];

  const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];
  const descMatches = [...content.matchAll(/description:\s*"([^"]+)"/g)];
  const catMatches = [...content.matchAll(/category:\s*'([^']+)'/g)];

  for (let i = 0; i < idMatches.length; i++) {
    services.push({
      id: idMatches[i][1],
      title: (titleMatches[i]?.[1] || 'Untitled Service').replace(/[^a-zA-Z0-9 ]/g, ''),
      description: (descMatches[i]?.[1] || 'Professional service offering').slice(0, 200),
      category: catMatches[i]?.[1] || 'ai'
    });
  }

  const latest = services.slice(-50).reverse();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
  const now = new Date().toUTCString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss version="2.0">\n<channel>\n`;
  xml += `  <title>Zion Tech Group — Services</title>\n`;
  xml += `  <link>${baseUrl}/services</link>\n`;
  xml += `  <description>Latest AI & IT services from Zion Tech Group</description>\n`;
  xml += `  <lastBuildDate>${now}</lastBuildDate>\n`;
  xml += `  <pubDate>${now}</pubDate>\n`;

  latest.forEach(svc => {
    const itemUrl = `${baseUrl}/ai-services/${svc.id}`;
    xml += `  <item>\n`;
    xml += `    <title>${svc.title}</title>\n`;
    xml += `    <link>${itemUrl}</link>\n`;
    xml += `    <guid isPermaLink="true">${itemUrl}</guid>\n`;
    xml += `    <pubDate>${now}</pubDate>\n`;
    xml += `    <category>${svc.category}</category>\n`;
    xml += `    <description><![CDATA[${svc.description}]]></description>\n`;
    xml += `  </item>\n`;
  });

  xml += `</channel>\n</rss>`;

  fs.writeFileSync(RSS_CACHE, xml);

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' }
  });
}
