#!/usr/bin/env node
/**
 * Zion Apps Network — consolidated hub generator.
 *
 * Reads app/data/appsNetwork.ts, dedupes it, drops entries that have no real
 * public/ page, and renders one hub with internal interlinks. Run with:
 *
 *   node --experimental-strip-types scripts/generate-apps-network-hub.mjs
 *
 * public/ is the source of truth for GitHub Pages, so the hub ships as static
 * HTML. Idempotent and offline.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { appsNetworkCatalog } from '../app/data/appsNetwork.ts';
import { LANGS, GROUP_LABEL, T, PUBLIC, ROOT } from './apps-network-page-data.js';

const SITE = 'https://ziontechgroup.com';
const OUT = path.join(PUBLIC, 'apps-network', 'index.html');

const css = `
:root{--bg:#0b1220;--card:#121a2b;--ink:#e8eef8;--muted:#9aa8bd;--line:#243049;--accent:#7dd3fc;--brand:#a78bfa}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6}
a{color:var(--accent);text-decoration:none}a:hover{color:#a5d7ff;text-decoration:underline}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px 72px}
.skip{position:absolute;left:-9999px;top:0;background:var(--accent);color:#042033;padding:8px 14px;z-index:10}
.skip:focus{left:8px;top:8px}
header.site{border-bottom:1px solid var(--line);background:rgba(11,18,32,.92)}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:14px;padding-bottom:14px;flex-wrap:wrap}
.brand{color:var(--ink);font-weight:700;letter-spacing:-.01em}
.brand span{color:var(--brand)}
.langs{display:flex;flex-wrap:wrap;gap:6px;font-size:.8rem}
.langs a{color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:3px 10px}
.langs a[aria-current="true"]{color:#042033;background:var(--accent);border-color:var(--accent);font-weight:700}
.hero{padding:56px 0 32px;background:radial-gradient(ellipse at top,rgba(167,139,250,.16),transparent 60%)}
.hero h1{font-size:clamp(2rem,5vw,3rem);line-height:1.1;margin:0 0 14px;letter-spacing:-.02em}
.lede{color:var(--muted);font-size:1.12rem;max-width:48rem;margin:0 0 22px}
.cta-row{display:flex;flex-wrap:gap:12px;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;background:linear-gradient(90deg,#7c3aed,#ec4899);color:#fff;font-weight:700;padding:12px 20px;border-radius:10px}
.btn.alt{background:transparent;border:1px solid var(--line);color:var(--ink)}
.stats{display:flex;flex-wrap:wrap;gap:22px;margin-top:26px}
.stat b{display:block;font-size:1.5rem;color:var(--ink)}
.stat span{color:var(--muted);font-size:.82rem}
section{padding:34px 0;border-top:1px solid var(--line)}
h2{font-size:1.35rem;margin:0 0 4px;letter-spacing:-.01em}
.sub{color:var(--muted);font-size:.9rem;margin:0 0 18px}
.grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px}
.card h3{font-size:1rem;margin:0 0 4px}
.card h3 a{color:var(--ink)}
.card h3 a:hover{color:var(--accent)}
.card p{color:var(--muted);font-size:.85rem;margin:0 0 8px}
.card .rel{display:flex;flex-wrap:wrap;gap:6px;font-size:.75rem}
.card .rel a{color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:2px 8px}
.card .rel a:hover{color:var(--accent);border-color:rgba(125,211,252,.4)}
.note{color:var(--muted);font-size:.88rem;max-width:48rem}
footer{margin-top:12px;border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:.85rem}
footer .wrap{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;padding-top:18px;padding-bottom:18px}
@media(max-width:640px){.hero{padding:40px 0 24px}section{padding:26px 0}}
`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Dedupe by slug, merging related lists. */
const BY_SLUG = new Map();
for (const app of appsNetworkCatalog) {
  if (!app || !app.slug || !app.name || !app.href) continue;
  const prev = BY_SLUG.get(app.slug);
  if (!prev) {
    BY_SLUG.set(app.slug, { ...app, related: [...(app.related || [])] });
  } else {
    prev.related = [...new Set([...prev.related, ...(app.related || [])])];
  }
}

/** A slug is linkable only when its page actually ships in public/. */
const linkable = (slug) => {
  const app = BY_SLUG.get(slug);
  if (!app) return false;
  const rel = app.href.replace(/^\//, '').replace(/\/$/, '');
  return fs.existsSync(path.join(PUBLIC, rel, 'index.html')) || fs.existsSync(path.join(PUBLIC, rel));
};

const apps = [...BY_SLUG.values()].filter((a) => linkable(a.slug));
const unpublished = [...BY_SLUG.values()].filter((a) => !linkable(a.slug));

const GROUP_ORDER = ['money', 'ops', 'govern', 'work', 'ai', 'field', 'hub'];

function relatedOf(app, limit = 4) {
  const out = [];
  for (const slug of app.related) {
    if (out.length >= limit) break;
    if (slug === app.slug || !linkable(slug)) continue;
    const target = BY_SLUG.get(slug);
    if (!target) continue;
    if (out.some((r) => r.slug === slug)) continue;
    out.push({ slug, name: target.name, href: target.href });
  }
  return out;
}

function renderGroup(group, label, t) {
  const items = apps.filter((a) => a.group === group);
  if (!items.length) return '';
  const cards = items
    .map((app) => {
      const rel = relatedOf(app)
        .map((r) => `<a href="${r.href}">${esc(r.name)}</a>`)
        .join('');
      return `<div class="card">
  <h3><a href="${app.href}">${esc(app.name)}</a></h3>
  <p>${esc(app.description)}</p>
  ${rel ? `<div class="rel">${rel}</div>` : ''}
</div>`;
    })
    .join('\n');
  return `<section id="${group}">
  <h2>${esc(label)}</h2>
  <p class="sub">${items.length} apps</p>
  <div class="grid">
${cards}
  </div>
</section>`;
}

const t = T.en;
const totalRelated = apps.reduce((n, a) => n + relatedOf(a).length, 0);
const groups = GROUP_ORDER.map((g) => renderGroup(g, GROUP_LABEL.en[g] || g, t)).filter(Boolean).join('\n');

const langNav = LANGS.map(
  (l) =>
    `<a href="${l.prefix ? `/${l.prefix}` : ''}/apps-network/"${l.code === 'en' ? ' aria-current="true"' : ''}>${l.code.toUpperCase()}</a>`
).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Zion Apps Network — ${apps.length} Interlinked AI &amp; IT Apps</title>
<meta name="description" content="Zion Apps Network: ${apps.length} interlinked AI, FinOps, security, operations and field-service apps, each with related-tool links. Free to try, no credit card.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE}/apps-network/">
${LANGS.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${l.prefix ? `${SITE}/${l.prefix}` : SITE}/apps-network/">`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${SITE}/apps-network/">
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Zion Apps Network',
  url: `${SITE}/apps-network/`,
  inLanguage: 'en',
  numberOfItems: apps.length,
  hasPart: apps.map((a) => ({ '@type': 'SoftwareApplication', name: a.name, url: `${SITE}${a.href}` })),
})}</script>
<style>${css}</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site">
  <div class="wrap">
    <a class="brand" href="/">Zion <span>Apps Network</span></a>
    <nav class="langs" aria-label="Language">${langNav}</nav>
  </div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <h1>Zion Apps Network</h1>
      <p class="lede">Production-ready AI, FinOps, security, operations and field-service apps — every one interlinked with its siblings, so you never hit a dead end. Free to try, no credit card.</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">Start Free Discovery</a>
        <a class="btn alt" href="/apps/">Live catalog</a>
      </div>
      <div class="stats">
        <div class="stat"><b>${apps.length}</b><span>published apps</span></div>
        <div class="stat"><b>${totalRelated}</b><span>internal interlinks</span></div>
        <div class="stat"><b>${GROUP_ORDER.length}</b><span>categories</span></div>
        <div class="stat"><b>5</b><span>languages</span></div>
      </div>
    </div>
${groups}
    <section id="note">
      <h2>Also in the network</h2>
      <p class="note">${unpublished.length} further catalog entries are documented but do not have a live page yet: ${unpublished
        .map((a) => esc(a.name))
        .join(', ')}. They are omitted here rather than linked to a dead route.</p>
    </section>
    <section id="cta">
      <h2>Need these capabilities in production?</h2>
      <p class="note">Start with a free Discovery — one process, one report, one 30-minute session — then scope a pilot with measurable KPIs.</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">Start Free Discovery</a>
        <a class="btn alt" href="/pricing/">View pricing</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="wrap">
    <div>Zion Apps Network · <a href="/">Zion Tech Group</a></div>
    <div class="langs">${langNav}</div>
  </div>
</footer>
</body>
</html>
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html, 'utf8');
console.log(`Hub written: ${apps.length} apps, ${totalRelated} interlinks, ${unpublished.length} unpublished omitted.`);
