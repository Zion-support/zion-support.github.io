const fs = require('node:fs');
const path = require('node:path');

const origin = 'https://ziontechgroup.com';
const routes = ['why-ai-consulting-firm', 'enterprise-ai-services', 'stripe'];
const destination = `${origin}/services/`;

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*(["'])(.*?)\2/gs)]
      .map(([, key, , value]) => [key.toLowerCase(), value])));
}

function refresh(html, source) {
  const meta = tags(html, 'meta').find(tag => tag['http-equiv']?.toLowerCase() === 'refresh');
  if (!meta) return null;
  const match = /(?:^|;)\s*url\s*=\s*(.*?)\s*$/i.exec(meta.content || '');
  if (!match) throw new Error(`Malformed refresh at ${source}`);
  return new URL(match[1].replace(/^["']|["']$/g, ''), source).href;
}

function validateLegacyRedirects(directory) {
  for (const route of routes) {
    const source = `${origin}/${route}/`;
    const html = fs.readFileSync(path.join(directory, route, 'index.html'), 'utf8');
    const target = refresh(html, source);
    if (target === source) throw new Error(`Self-refresh loop: /${route}/`);
    if (target !== destination) throw new Error(`/${route}/ must redirect to /services/`);
    const canonical = tags(html, 'link').find(tag => tag.rel?.toLowerCase() === 'canonical')?.href;
    if (!canonical || new URL(canonical, source).href !== destination) {
      throw new Error(`/${route}/ canonical must match its /services/ destination`);
    }
  }
  const landing = fs.readFileSync(path.join(directory, 'services', 'index.html'), 'utf8');
  if (refresh(landing, destination)) throw new Error('/services/ must be a landing page, not another refresh');
  return routes.length;
}

module.exports = { validateLegacyRedirects };
if (require.main === module) {
  const count = validateLegacyRedirects(path.resolve(process.argv[2] || 'out'));
  console.log(`OK legacy redirects: ${count} aliases land on /services/`);
}
