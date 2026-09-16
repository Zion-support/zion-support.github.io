#!/usr/bin/env node
/**
 * Apply Family A chrome (site.css + shared header/footer + zion-shell)
 * to static HTML under public/ and dual-path hub copies.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const HEADER_PT = `<a class="skip" href="#conteudo">Ir para o conteúdo</a>
<header class="nav"><div class="wrap navin">
<a class="brand" href="/">Zion Tech Group</a>
<button class="menu" aria-label="Abrir menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
<nav class="links" aria-label="Principal">
<a href="/services/">Serviços</a><a href="/plans/">Planos</a><a href="/field-services/">Campo</a>
<a href="/gpu-cloud-latam/">GPU</a><a href="/voice-ai-latam/">Voice</a><a href="/brazil-24x7-coverage/">24x7</a>
<a href="/success-stories/">Casos</a><a href="/contact/">Contato</a>
<a class="cta" href="/discovery/">Discovery $99</a>
</nav></div></header>`;

const HEADER_EN = `<a class="skip" href="#conteudo">Skip to content</a>
<header class="nav"><div class="wrap navin">
<a class="brand" href="/">Zion Tech Group</a>
<button class="menu" aria-label="Open menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
<nav class="links" aria-label="Primary">
<a href="/services/">Services</a><a href="/plans/">Plans</a><a href="/field-services/">Field</a>
<a href="/gpu-cloud-latam/">GPU</a><a href="/voice-ai-latam/">Voice</a><a href="/brazil-24x7-coverage/">24x7</a>
<a href="/success-stories/">Stories</a><a href="/contact/">Contact</a>
<a class="cta" href="/discovery/">Discovery $99</a>
</nav></div></header>`;

const FOOTER_PT = `<footer><div class="wrap foot">
<div><h3>Empresa</h3><a href="/about/">Sobre</a><a href="/partners/">Parceiros</a><a href="/indique/">Indique</a><a href="/contact/">Contato</a></div>
<div><h3>Oferta</h3><a href="/plans/">Planos</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Ofertas</a><a href="/field-services/">Campo</a></div>
<div><h3>Campo</h3><a href="/remote-hands-miami/">Miami</a><a href="/gpu-cloud-latam/">GPU LATAM</a><a href="/voice-ai-latam/">Voice AI</a><a href="/brazil-24x7-coverage/">24x7 Brasil</a></div>
<div><h3>Legal</h3><a href="/success-stories/">Casos</a><a href="/faq/">FAQ</a><a href="/privacidade/">Privacidade</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
</div><p class="wrap muted" style="margin-top:24px">Zion Tech Group · kleber@ziontechgroup.com · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></footer>`;

const FOOTER_EN = `<footer><div class="wrap foot">
<div><h3>Company</h3><a href="/about/">About</a><a href="/partners/">Partners</a><a href="/careers/">Careers</a><a href="/contact/">Contact</a></div>
<div><h3>Offer</h3><a href="/plans/">Plans</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Offers</a><a href="/field-services/">Field</a></div>
<div><h3>Field</h3><a href="/remote-hands-miami/">Miami</a><a href="/gpu-cloud-latam/">GPU LATAM</a><a href="/voice-ai-latam/">Voice AI</a><a href="/brazil-24x7-coverage/">24x7 Brazil</a></div>
<div><h3>Legal</h3><a href="/success-stories/">Stories</a><a href="/faq/">FAQ</a><a href="/privacy/">Privacy</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
</div><p class="wrap muted" style="margin-top:24px">Zion Tech Group · kleber@ziontechgroup.com · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></footer>`;

const SHELL = '<script src="/assets/js/zion-shell.js" defer></script>';
const CSS = '<link rel="stylesheet" href="/assets/css/site.css">';

function walk(dir, acc) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function isPt(html) {
  const m = html.match(/<html[^>]*lang=["']([^"']+)/i);
  if (m && m[1].toLowerCase().indexOf("pt") === 0) return true;
  return false;
}

function isRedirect(html) {
  return /http-equiv=["']refresh["']/i.test(html);
}

function isNextExport(html) {
  return /_next\/static\//.test(html) || /self\.__next_f/.test(html);
}

function processHtml(html, file) {
  if (isNextExport(html)) return { html, skipped: "next-export" };

  const pt = isPt(html);
  const redirect = isRedirect(html);

  html = html.replace(/<!-- qa-pass2-inline-site-css -->\s*/g, "");
  html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  html = html.replace(/<body([^>]*)>/i, (_, attrs) => {
    const cleaned = String(attrs || "").replace(/\sstyle=(["'])[\s\S]*?\1/i, "");
    return `<body${cleaned}>`;
  });
  html = html.replace(/<(main|footer|header|nav)([^>]*)>/gi, (m, tag, attrs) => {
    const cleaned = String(attrs || "").replace(/\sstyle=(["'])[\s\S]*?\1/i, "");
    return `<${tag}${cleaned}>`;
  });

  if (!/assets\/css\/site\.css/.test(html) && !/href=["']\/css\/site\.css["']/.test(html)) {
    if (/<\/head>/i.test(html)) {
      html = html.replace(/<\/head>/i, `  ${CSS}\n</head>`);
    } else {
      html = html.replace(/<head[^>]*>/i, (m) => `${m}\n  ${CSS}\n`);
    }
  }

  if (redirect) {
    html = html.replace(/<script src="\/assets\/js\/zion-shell\.js"[^>]*><\/script>\s*/gi, "");
    if (/<\/body>/i.test(html)) {
      html = html.replace(/<\/body>/i, `${SHELL}\n</body>`);
    } else {
      html += `\n${SHELL}\n`;
    }
    return { html, skipped: null };
  }

  html = html.replace(/<a class="skip"[^>]*>[\s\S]*?<\/a>/gi, "");
  html = html.replace(/<header class="nav"[^>]*>[\s\S]*?<\/header>/gi, "");
  html = html.replace(/<header\b[^>]*>[\s\S]*?<\/header>/gi, (block) => {
    return /<nav[\s>]/i.test(block) ? "" : block;
  });
  html = html.replace(/<nav class="nav"[^>]*>[\s\S]*?<\/nav>/gi, "");
  html = html.replace(/<nav class="top"[^>]*>[\s\S]*?<\/nav>/gi, "");
  html = html.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, "");
  html = html.replace(/<script src="\/assets\/js\/zion-shell\.js"[^>]*><\/script>\s*/gi, "");

  let header = pt ? HEADER_PT : HEADER_EN;
  const rel = String(file || "").replace(/\\/g, "/");
  if (/\/en\/plans\/index\.html$/.test(rel)) {
    header = header.replace("</nav>", '<span class="langsw" aria-label="Language"><a href="/plans/">PT</a><a href="/en/plans/" aria-current="true">EN</a></span></nav>');
  } else if (/\/plans\/index\.html$/.test(rel)) {
    header = header.replace("</nav>", '<span class="langsw" aria-label="Idioma"><a href="/plans/" aria-current="true">PT</a><a href="/en/plans/">EN</a></span></nav>');
  }
  const footer = pt ? FOOTER_PT : FOOTER_EN;

  if (/<body[^>]*>/i.test(html)) {
    html = html.replace(/<body([^>]*)>/i, `<body$1>\n${header}\n`);
  }

  if (/<\/body>/i.test(html)) {
    html = html.replace(/<\/body>/i, `${footer}\n${SHELL}\n</body>`);
  } else {
    html += `\n${footer}\n${SHELL}\n`;
  }

  if (/<header class="nav">/.test(html) && /<footer[\s>]/i.test(html) && !/<main[\s>]/i.test(html)) {
    html = html.replace(/(<\/header>\s*)([\s\S]*?)(\s*<footer\b)/i, "$1<main class=\"section\" id=\"conteudo\"><div class=\"wrap\">$2</div></main>$3");
  }

  return { html, skipped: null };
}

function collectTargets() {
  const files = walk(path.join(ROOT, "public"), []);
  const dual = [
    "discovery", "plans", "enterprise", "about", "solutions", "blog",
    "managed-it-services", "ai-consulting-services", "finops-consulting",
    "autonomous-ai-agents", "healthcare-it-hipaa", "fintech-it-ai",
    "success-stories", "brazil-24x7-coverage", "gpu-cloud-latam",
    "voice-ai-latam", "remote-hands-miami", "us-l2-network-onsite",
    "china-dc-engineers", "information-security-services",
    "high-performance-workstations", "field-services",
  ];
  for (const d of dual) {
    const p = path.join(ROOT, d, "index.html");
    if (fs.existsSync(p)) files.push(p);
  }
  const blogRoot = path.join(ROOT, "blog");
  if (fs.existsSync(blogRoot)) {
    walk(blogRoot, files);
  }
  return [...new Set(files)];
}

let changed = 0;
let skipped = 0;
for (const file of collectTargets()) {
  const before = fs.readFileSync(file, "utf8");
  const { html, skipped: why } = processHtml(before, file);
  if (why === "next-export") {
    skipped += 1;
    continue;
  }
  if (html !== before) {
    fs.writeFileSync(file, html);
    changed += 1;
  }
}

console.log(`unify-family-a-layout: updated ${changed} files, skipped ${skipped} next-export`);
