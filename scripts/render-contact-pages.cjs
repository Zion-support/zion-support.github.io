'use strict';

// Render both the committed static pages and any chosen publication directory.
// Usage: node scripts/render-contact-pages.cjs [public|out]
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const out = path.resolve(process.argv[2] || path.join(root, 'public'));
const copy = JSON.parse(fs.readFileSync(path.join(root, 'content/contact-pages.json'), 'utf8'));
const release = '2026-10-30-contact-v1';
const base = 'https://ziontechgroup.com';
const email = 'contact@ziontechgroup.com';
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const labels = {en: 'English', pt: 'Português', es: 'Español', fr: 'Français', de: 'Deutsch'};
const contact = locale => locale === 'en' ? '/contact/' : `/${locale}/contact/`;
const home = locale => locale === 'pt' ? '/' : `/${locale}/`;
const apps = locale => locale === 'en' ? '/apps/' : `/${locale}/apps/`;
const discovery = locale => locale === 'en' ? '/discovery/' : `/${locale}/discovery/`;
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]));

const css = `
:root{color-scheme:dark;--bg:#070d1b;--surface:#111b30;--line:#35405c;--text:#f4f6ff;--muted:#c5cde3;--accent:#d5b3ff;--focus:#f2d3ff}
*{box-sizing:border-box}html{scroll-padding-top:1rem}body{margin:0;background:var(--bg);color:var(--text);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;font-size:1rem;line-height:1.65}a{color:var(--accent);text-underline-offset:.22em}a:hover{color:#fff}a:focus-visible{outline:3px solid var(--focus);outline-offset:5px;border-radius:4px}p{margin:.6rem 0 1rem}h1,h2,h3{color:var(--text);line-height:1.18;margin:0 0 1rem;text-wrap:balance}h1{font-size:clamp(2.25rem,5.5vw,4.5rem);letter-spacing:-.035em;max-width:17ch}h2{font-size:clamp(1.5rem,3.2vw,2.25rem);letter-spacing:-.02em}h3{font-size:1.1rem;line-height:1.35}li,p{overflow-wrap:anywhere}.shell{width:min(1120px,calc(100% - 2.5rem));margin-inline:auto}.skip{position:absolute;left:1rem;top:-7rem;z-index:10;padding:.65rem 1rem;background:#fff;color:#111827;border-radius:6px}.skip:focus{top:.5rem;color:#111827}.header{border-bottom:1px solid var(--line)}.header-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;padding-block:1.2rem}.brand{font-weight:750;letter-spacing:-.03em;color:var(--text);text-decoration:none;font-size:1.1rem}.brand-dot{display:inline-block;width:.65rem;height:.65rem;margin-right:.55rem;background:#c597ff;border-radius:50%;box-shadow:0 0 24px #a855f755}.nav,.languages{display:flex;flex-wrap:wrap;align-items:center;gap:.45rem 1.2rem}.nav a{padding:.25rem 0;text-decoration:none;font-size:.92rem}.nav [aria-current=page]{color:#fff;text-decoration:underline}.languages{padding-block:0 1rem;gap:.35rem .6rem}.languages a{font-size:.82rem;padding:.3rem .6rem;border-radius:999px;color:var(--muted);text-decoration:none}.languages a[aria-current=page]{background:#31204e;color:#f0dfff;box-shadow:inset 0 0 0 1px #7751a9}.hero{padding-block:clamp(3rem,7vw,6rem);display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:3rem;align-items:center}.eyebrow{color:var(--accent);font-weight:700;letter-spacing:.1em;text-transform:uppercase;font-size:.77rem;margin-bottom:1.2rem}.lead{font-size:1.13rem;color:var(--muted);max-width:56ch}.email-card{border:1px solid #67508e;background:linear-gradient(145deg,#211732,#111b30);padding:clamp(1.5rem,3vw,2.25rem);border-radius:20px}.email-label{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em}.email-address{display:block;font-weight:650;font-size:clamp(.95rem,1.8vw,1.12rem);overflow-wrap:anywhere;margin-block:.7rem 1.6rem}.button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:.7rem 1.15rem;border-radius:9px;background:#d8b4fe;color:#241136;font-weight:750;text-decoration:none;line-height:1.4}.button:hover{background:#ead4ff;color:#241136}.email-help{font-size:.88rem;color:var(--muted);margin:1rem 0 0}.section{padding-block:2.7rem 3rem;border-top:1px solid var(--line)}.section-intro{max-width:68ch;color:var(--muted)}.checklist{padding:0;margin:1.7rem 0 0;list-style:none;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.checklist li{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:1.4rem}.checklist p{color:var(--muted);margin-bottom:0}.note{max-width:88ch;color:var(--muted);font-size:.92rem;margin-top:1.5rem}.steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.8rem;list-style:none;padding:0;margin:1.8rem 0 0;counter-reset:steps}.steps li{counter-increment:steps}.steps li:before{content:"0" counter(steps);display:block;color:var(--accent);font-size:.85rem;font-weight:750;letter-spacing:.1em;margin-bottom:.8rem}.steps p{color:var(--muted);margin:0}.resources{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:1.6rem}.resource{display:flex;flex-direction:column;align-items:flex-start;padding:1.6rem;border:1px solid var(--line);border-radius:14px;background:var(--surface)}.resource p{color:var(--muted);flex-grow:1}.resource a{font-weight:650}.footer{padding-block:2rem 2.5rem;border-top:1px solid var(--line);color:var(--muted);font-size:.9rem}.footer-row{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap}.footer strong{color:var(--text)}.footer p{margin:.2rem 0 .7rem}.footer .nav a{font-size:.88rem}
@media(max-width:760px){.hero{grid-template-columns:1fr;gap:1.8rem}.hero h1{max-width:21ch}.steps{grid-template-columns:1fr;gap:1.5rem}.resources{grid-template-columns:1fr}}
@media(max-width:520px){.shell{width:calc(100% - 2rem)}.checklist{grid-template-columns:1fr}.nav{gap:.4rem 1rem}.header-row{align-items:flex-start}.section{padding-block:2.2rem}.email-card{padding:1.4rem}.button{width:100%}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
@media print{body{background:white;color:#111}h1,h2,h3,.brand,.footer strong{color:#111}p,.lead,.section-intro,.checklist p,.steps p,.resource p,.email-help,.note,.footer{color:#333}.email-card,.checklist li,.resource{background:white;border-color:#aaa}.skip,.languages{display:none}a{color:#111}.hero{padding-block:2rem}.section{break-inside:avoid}.button{background:white;color:#111;border:1px solid #777}}
`;

function render(locale) {
  const c = copy[locale];
  const canonical = base + contact(locale);
  const nav = `<a href="${home(locale)}">${escape(c.home)}</a><a href="${apps(locale)}">${escape(c.apps)}</a><a href="${contact(locale)}" aria-current="page">${escape(c.title)}</a><a href="${discovery(locale)}">${escape(c.discovery)}</a>`;
  const languages = locales.map(key => `<a href="${contact(key)}" lang="${copy[key].lang}" hreflang="${copy[key].lang}"${key === locale ? ' aria-current="page"' : ''}>${labels[key]}</a>`).join('');
  const alternates = locales.map(key => `  <link rel="alternate" hreflang="${copy[key].lang}" href="${base + contact(key)}">`).join('\n');
  const list = c.checklist.map(([title, body]) => `        <li><h3>${escape(title)}</h3><p>${escape(body)}</p></li>`).join('\n');
  const steps = c.steps.map(([title, body]) => `        <li><h3>${escape(title)}</h3><p>${escape(body)}</p></li>`).join('\n');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `${c.title} | Zion Tech Group`,
    description: c.description,
    url: canonical,
    inLanguage: c.lang,
    mainEntity: {'@type': 'Organization', name: 'Zion Tech Group', url: base + '/', email}
  };
  return `<!doctype html>
<html lang="${c.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#070d1b">
  <title>${escape(c.title)} | Zion Tech Group</title>
  <meta name="description" content="${escape(c.description)}">
  <link rel="canonical" href="${canonical}">
${alternates}
  <link rel="alternate" hreflang="x-default" href="${base}/contact/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(c.title)} | Zion Tech Group">
  <meta property="og:description" content="${escape(c.description)}">
  <meta property="og:url" content="${canonical}">
  <style>${css}</style>
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
</head>
<body data-contact-release="${release}">
  <a class="skip" href="#main">${escape(c.skip)}</a>
  <header class="header">
    <div class="shell header-row">
      <a class="brand" href="${home(locale)}"><span class="brand-dot" aria-hidden="true"></span>Zion Tech Group</a>
      <nav class="nav" aria-label="${escape(c.mainNav)}">${nav}</nav>
    </div>
    <nav class="shell languages" aria-label="${escape(c.languageNav)}">${languages}</nav>
  </header>
  <main id="main" class="shell" tabindex="-1">
    <section class="hero" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">${escape(c.eyebrow)}</p>
        <h1 id="contact-title">${escape(c.heading)}</h1>
        <p class="lead">${escape(c.intro)}</p>
      </div>
      <aside class="email-card" aria-label="${escape(c.emailLabel)}">
        <span class="email-label">${escape(c.emailLabel)}</span>
        <a class="email-address" href="mailto:${email}">${email}</a>
        <a class="button" href="mailto:${email}" aria-describedby="email-help">${escape(c.emailAction)}</a>
        <p class="email-help" id="email-help">${escape(c.emailHelp)}</p>
      </aside>
    </section>
    <section class="section" aria-labelledby="prepare-title">
      <h2 id="prepare-title">${escape(c.prepareTitle)}</h2>
      <p class="section-intro">${escape(c.prepareIntro)}</p>
      <ul class="checklist">
${list}
      </ul>
      <p class="note">${escape(c.shareNote)}</p>
    </section>
    <section class="section" aria-labelledby="steps-title">
      <h2 id="steps-title">${escape(c.stepsTitle)}</h2>
      <ol class="steps">
${steps}
      </ol>
    </section>
    <section class="section" aria-labelledby="resources-title">
      <h2 id="resources-title">${escape(c.resourcesTitle)}</h2>
      <p class="section-intro">${escape(c.resourcesIntro)}</p>
      <div class="resources">
        <article class="resource"><h3>${escape(c.discoveryTitle)}</h3><p>${escape(c.discoveryBody)}</p><a href="${discovery(locale)}">${escape(c.discoveryAction)}</a></article>
        <article class="resource"><h3>${escape(c.appsTitle)}</h3><p>${escape(c.appsBody)}</p><a href="${apps(locale)}">${escape(c.appsAction)}</a></article>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="shell footer-row">
      <div><strong>Zion Tech Group</strong><p>${escape(c.footerLine)}</p></div>
      <nav class="nav" aria-label="${escape(c.footerNav)}">${nav}</nav>
    </div>
  </footer>
</body>
</html>
`;
}

for (const locale of locales) {
  const routes = locale === 'en' ? ['/contact/', '/en/contact/'] : [contact(locale)];
  const html = render(locale);
  for (const route of routes) {
    const filename = path.join(out, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(filename), {recursive: true});
    fs.writeFileSync(filename, html);
  }
}
console.log(`Rendered six contact routes in five languages (${release}).`);
