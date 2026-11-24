'use strict';

// Render only the five localized questionnaires. The existing root Discovery
// and its fallback remain owned by their separate current-form contract.
const fs = require('node:fs');
const path = require('node:path');
const locales = require('../content/discovery-locales.json');
const root = path.resolve(__dirname, '..');
const languages = {en: 'English', pt: 'Português', es: 'Español', fr: 'Français', de: 'Deutsch'};
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');

function render(locale) {
  const t = locales[locale];
  const url = `https://ziontechgroup.com/${locale}/discovery/`;
  const alternate = Object.entries(locales).map(([key, copy]) => `<link rel="alternate" hreflang="${copy.lang}" href="https://ziontechgroup.com/${key}/discovery/">`).join('\n');
  const navigation = Object.entries(languages).map(([key, label]) => `<a href="/${key}/discovery/" lang="${locales[key].lang}" hreflang="${locales[key].lang}"${key === locale ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const fields = Object.entries(t.questions).map(([name, question], index) => `<fieldset disabled><legend>${index + 1}. ${escape(question)}</legend>${Object.entries(t.answers[name]).map(([value, label]) => `<label class="choice"><input type="radio" name="${name}" value="${value}" required> <span>${escape(label)}</span></label>`).join('')}</fieldset>`).join('\n');
  const schema = {'@context': 'https://schema.org', '@type': 'Service', name: t.title, description: t.description, url, inLanguage: t.lang, provider: {'@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com'}, offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD', url}};
  // Preserve the existing Portuguese paid-plan prices and live Starter checkout.
  // These are optional next steps and never a condition for the free form.
  const paidPlans = locale === 'pt' ? `<section><h2>Planos pagos opcionais</h2><div class="cards"><div class="card"><h3><a href="/ai-consulting-services/">Consulting</a> — $499</h3><p>Consulte o escopo do serviço antes de contratar.</p></div><div class="card"><h3><a href="/plans/">Starter</a> — $2.500</h3><a href="https://buy.stripe.com/7sY00k7JScFV99Bf044ZG06" target="_blank" rel="noopener noreferrer">Pay ZG06</a></div><div class="card"><h3><a href="/plans/">Growth</a> — $8.000/mês</h3><p>Escopo e condições em <a href="/plans/">Planos</a>.</p></div></div></section>` : '';
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(t.title)} | Zion Tech Group</title>
<meta name="description" content="${escape(t.description)}">
<link rel="canonical" href="${url}">
${alternate}
<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com/en/discovery/">
<meta property="og:title" content="${escape(t.title)}"><meta property="og:description" content="${escape(t.description)}"><meta property="og:url" content="${url}"><meta property="og:type" content="website">
<script type="application/ld+json">${json(schema)}</script>
<style>
:root{color-scheme:dark;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#0b1220;color:#e2e8f0;line-height:1.6}*{box-sizing:border-box}body{margin:0}a{color:#d8b4fe;text-underline-offset:3px}a:hover{color:#f9a8d4}header,main,footer{width:min(100% - 2rem,1040px);margin:auto}header{padding:1.5rem 0;border-bottom:1px solid #334155;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}.brand{font-weight:800;letter-spacing:.1em;text-decoration:none;color:#f8fafc}.brand span{color:#c084fc}nav{display:flex;gap:.8rem;flex-wrap:wrap}nav a[aria-current]{color:#fff;font-weight:700}.hero{padding:4rem 0 2rem;max-width:860px}.eyebrow{color:#c4b5fd;font-size:.85rem;font-weight:700;letter-spacing:.08em}h1{font-size:clamp(2rem,5vw,3.5rem);line-height:1.12;margin:.8rem 0 1.2rem}h2{line-height:1.25;font-size:1.7rem}p{max-width:76ch;color:#cbd5e1}.lead{font-size:1.13rem}.btn{display:inline-block;border:1px solid #c084fc;border-radius:.75rem;background:linear-gradient(105deg,#7c3aed,#a21caf);color:white;padding:.8rem 1.2rem;font:inherit;font-weight:650;text-decoration:none;cursor:pointer}.btn:hover{color:#fff;filter:brightness(1.12)}.btn.alt{background:#172036}.btn:disabled{opacity:.65;cursor:wait}section{padding:1.5rem 0}fieldset{min-width:0;border:1px solid #334155;border-radius:.9rem;background:#101a2b;margin:1.4rem 0;padding:1rem 1.2rem}legend{font-weight:700;padding:0 .35rem;font-size:1.05rem}.choice{display:flex;align-items:flex-start;gap:.55rem;margin:.3rem 0;padding:.4rem .2rem;cursor:pointer}.choice input{margin-top:.45rem;accent-color:#c084fc}input[type=text],input[type=email]{display:block;width:100%;padding:.8rem;margin:.3rem 0 1rem;border:1px solid #64748b;border-radius:.5rem;background:#0b1220;color:#f8fafc;font:inherit}label{color:#f1f5f9}a:focus-visible,button:focus-visible,input:focus-visible{outline:3px solid #f0abfc;outline-offset:4px}.note{font-size:.9rem}.result{border:1px solid #34d399;border-radius:1rem;background:#08352f;padding:1.3rem;margin:1.5rem 0}.result[hidden]{display:none}.result h3{margin-top:0}.result a{color:#e9d5ff}.result li{margin:.65rem 0}.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.card{padding:1.2rem;border:1px solid #334155;border-radius:1rem}.card h2{font-size:1.25rem}.actions{display:flex;gap:.7rem;flex-wrap:wrap}footer{border-top:1px solid #334155;padding:2rem 0;margin-top:2rem;font-size:.9rem}form{scroll-margin-top:1rem}@media(max-width:640px){.cards{grid-template-columns:1fr}.hero{padding-top:2rem}fieldset{padding:.8rem}.btn{max-width:100%;text-align:center}nav{font-size:.9rem}}
</style>
<script id="dq-copy" type="application/json">${json(t)}</script>
<script src="/assets/js/discovery-questionnaire.js" defer></script>
</head>
<body>
<header><a class="brand" href="/${locale}/">ZION <span>TECH GROUP</span></a><nav aria-label="${escape(t.language)}">${navigation}</nav></header>
<main>
<section class="hero"><p class="eyebrow">${escape(t.eyebrow)}</p><h1>${escape(t.title)}</h1><p class="lead">${escape(t.intro)}</p><a class="btn" href="#dq">${escape(t.start)}</a></section>
<section aria-labelledby="questionnaire-title"><h2 id="questionnaire-title">${escape(t.formTitle)}</h2><p>${escape(t.description)}</p>
<p id="dq-unavailable" role="status">${escape(t.unavailable)} <a href="mailto:commercial@ziontechgroup.com">commercial@ziontechgroup.com</a></p>
<form id="dq" method="post">
${fields}
<fieldset disabled><legend>8. ${escape(t.contact)}</legend><label for="dq-name">${escape(t.name)}</label><input id="dq-name" type="text" name="name" autocomplete="name" maxlength="120" required><label for="dq-email">${escape(t.email)}</label><input id="dq-email" type="email" name="email" autocomplete="email" maxlength="254" aria-describedby="dq-consent" required><p class="note" id="dq-consent">${escape(t.consent)}</p></fieldset>
<button class="btn" type="submit" disabled>${escape(t.submit)}</button>
</form>
<div id="dq-results" class="result" hidden></div></section>
<section class="cards"><div class="card"><h2>${escape(t.limitsTitle)}</h2><p>${escape(t.limits)}</p><a href="/zion-app-network/">${escape(t.catalog)}</a></div><div class="card"><h2>${escape(t.nextTitle)}</h2><p>${escape(t.next)}</p><a href="/plans/">${escape(t.plans)}</a></div></section>
${paidPlans}
</main>
<footer><nav><a href="/${locale}/">${escape(t.home)}</a><a href="/zion-app-network/">${escape(t.catalog)}</a><a href="mailto:commercial@ziontechgroup.com">commercial@ziontechgroup.com</a><a href="https://wa.me/5511976140076">WhatsApp +55 11 97614-0076</a></nav><p>© Zion Tech Group</p></footer>
</body></html>
`;
}

module.exports = {render, locales};
if (require.main === module) {
  for (const locale of Object.keys(locales)) {
    const file = path.join(root, 'public', locale, 'discovery/index.html');
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, render(locale));
  }
  console.log('Rendered five free localized Discovery questionnaires.');
}
