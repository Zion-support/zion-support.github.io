const fs = require('fs');
const path = require('path');

const buildDir = path.resolve('public');
const root = path.resolve('.');

function toSlug(href) {
  return href.replace(/^\//, '').replace(/[^a-zA-Z0-9-]+/g, '-');
}

function makeHtml({href, title, desc, cta}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title} — Zion Tech Group</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="https://ziontechgroup.com${href}" />
<style>
  :root { --bg:#0b1120; --card:rgba(255,255,255,0.025); --card-border:rgba(255,255,255,0.07); --text:#e2e8f0; --muted:#8b97a8; --purple:#a78bfa; --green:#10b981; --blue:#3b82f6; }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  a { color: var(--purple); }
  body::before { content:""; position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(ellipse at top, rgba(167,139,250,0.07), transparent 55%), radial-gradient(ellipse at bottom, rgba(59,130,246,0.06), transparent 55%); }
  header { border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); background: rgba(11,17,32,0.75); position: sticky; top: 0; z-index: 50; }
  .nav { max-width: 1100px; margin: 0 auto; padding: 14px 20px; display: flex; justify-content: space-between; gap: 10px; align-items: center; }
  .logo { font-size: 16px; font-weight: 700; background: linear-gradient(90deg,#a78bfa,#ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; text-decoration: none; }
  main { max-width: 980px; margin: 0 auto; padding: 40px 20px 80px; }
  h1 { font-size: 26px; margin: 0 0 10px; }
  .sub { color: var(--muted); margin: 0 0 22px; font-size: 14px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 14px; }
  .card { background: var(--card); border: 1px solid var(--card-border); border-radius: 14px; padding: 18px 22px; }
  .cta { margin-top: 18px; }
  .pill { display: inline-block; background: rgba(167,139,250,.12); color: var(--purple); border: 1px solid rgba(167,139,250,.22); padding: 6px 12px; border-radius: 999px; font-size: 12px; text-decoration: none; margin: 0 6px 6px 0; }
</style>
</head>
<body>
<header>
  <div class="nav">
    <a class="logo" href="/">Zion Tech Group</a>
    <a style="color:var(--muted); font-size:13px; text-decoration:none;" href="/services">← Services</a>
  </div>
</header>
<main>
  <div style="margin-bottom:10px"><span class="pill">Service</span></div>
  <h1>${title}</h1>
  <p class="sub">${desc}</p>
  <div class="grid">
    <div class="card"><strong>Outcome:</strong> Measurable impact with clear KPIs and milestones.</div>
    <div class="card"><strong>Delivery:</strong> Agile sprints, weekly demos, transparent reporting.</div>
    <div class="card"><strong>Stack:</strong> Cloud-native, AI-first architecture with enterprise governance.</div>
  </div>
  <div class="cta">${cta}</div>
</main>
</body>
</html>`;
}

function extractArrayEntries(text, arrayName) {
  const startMarker = `export const ${arrayName}`;
  const startIdx = text.indexOf(startMarker);
  if (startIdx === -1) return [];
  let depth = 0, inArray = false, arrStart = -1;
  for (let i = startIdx; i < text.length; i++) {
    if (text[i] === '[') {
      if (!inArray) { inArray = true; arrStart = i; depth = 1; }
      else depth++;
    } else if (text[i] === ']') {
      depth--;
      if (inArray && depth === 0) {
        const slice = text.slice(arrStart, i + 1);
        const entries = [];
        const regex = /\{\s*name:\s*(?:"([^"]+)"|'([^']+)')\s*,\s*href:\s*(?:"([^"]+)"|'([^']+)')(?:\s*,\s*aliases:\s*\[(.*?)\])?[^}]*\}/gs;
        let m;
        while ((m = regex.exec(slice)) !== null) {
          const name = m[1] || m[2];
          const href = m[3] || m[4];
          const aliasText = m[5] || '';
          const aliases = [];
          const aRe = /'([^']+)'/g; let am;
          while ((am = aRe.exec(aliasText)) !== null) aliases.push(am[1]);
          entries.push({ name, href, aliases });
        }
        return entries;
      }
    }
  }
  return [];
}

const ts = fs.readFileSync(path.join(root, 'app/constants/navigation.ts'), 'utf-8');

const arrayNames = [
  'PRIMARY_NAV_LINKS',
  'SOLUTION_LINKS',
  'RESOURCE_LINKS',
  'FEATURED_AI_SERVICE_LINKS',
  'AI_SERVICE_LINKS',
  'FEATURED_PRODUCT_LINKS',
  'AUTOMATION_LINKS',
  'PRODUCT_LINKS',
];

let allEntries = [];
for (const arrName of arrayNames) allEntries = allEntries.concat(extractArrayEntries(ts, arrName));

const ALIASES = new Map();
const seen = new Set();
const catalog = [];
let created = 0, ok = 0;
const missingList = [];

function writeNavItem(item) {
  const href = String(item.href);
  if (href === '/' || href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:')) return;
  if (seen.has(href)) return;
  seen.add(href);
  for (const a of item.aliases || []) ALIASES.set(a, href);
  const slug = toSlug(href);
  const file = path.join(buildDir, slug, 'index.html');
  if (!fs.existsSync(file)) {
    const title = item.name || slug;
    const desc = `${item.name || title} from Zion Tech Group.`;
    const cta = `Ready to start? <a href="/contact">Book a scoping call</a> · <a href="${href}">Return to ${item.name || 'page'}</a>`;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, makeHtml({ href, title, desc, cta }), 'utf-8');
    created++;
    missingList.push(href);
  } else ok++;
  catalog.push({ name: item.name || slug, href });
}

for (const item of allEntries) writeNavItem(item);

fs.writeFileSync(path.join(buildDir, 'api', 'services-catalog.json'), JSON.stringify(catalog, null, 2));
fs.writeFileSync(path.join(buildDir, 'api', 'link-health.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  ok,
  created,
  createdPaths: missingList,
  aliasesPlanned: Array.from(ALIASES.entries()).slice(0, 50)
}, null, 2));

console.log(`OK=${ok} CREATED=${created}`);
for (const p of missingList.slice(0, 20)) console.log(`CREATED ${p}`);
console.log(`Alias count: ${ALIASES.size}`);
for (const [a,t] of Array.from(ALIASES.entries()).slice(0, 15)) console.log(`ALIAS ${a} -> ${t}`);
