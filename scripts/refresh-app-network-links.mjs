import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const guides = ['/free-discovery-guide/', '/cloud-reliability-guide/', '/first-ai-pilot/'];
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text = s => s.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
export function catalogRoutes(html) {
  const entries = new Map();
  for (const match of html.matchAll(/<h3\b[^>]*>\s*<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/h3>/gi)) {
    const route = match[1];
    if (!/^\/[a-zA-Z0-9_./-]+$/.test(route) || route.startsWith('//') || route.split('/').some(p => p === '..' || p === '.')) throw Error('Unsafe catalog route: ' + route);
    if (!route.endsWith('/') && !route.endsWith('.html')) throw Error('Unsupported catalog route: ' + route);
    entries.set(route, {route, label:text(match[2])});
  }
  if (entries.size < 2) throw Error('Catalog must contain at least two real entries');
  return [...entries.values()];
}
export function injectBlock(html, kind, markup) {
  const start = `<!-- zion-${kind}:start -->`, end = `<!-- zion-${kind}:end -->`;
  const count = token => html.split(token).length - 1;
  if (count(start) !== count(end) || count(start) > 1) throw Error('Malformed generated block: ' + kind);
  if (count(start)) {
    let from = html.indexOf(start), endAt = html.indexOf(end);
    if (endAt < from) throw Error('Reversed generated block');
    let to = endAt + end.length;
    if (html[from - 1] === '\n') from--;
    if (html[to] === '\n') to++;
    html = html.slice(0,from) + html.slice(to);
  }
  const at = html.toLowerCase().lastIndexOf('</body>');
  if (at < 0) throw Error('Missing closing body');
  return html.slice(0,at) + `\n${start}\n${markup}\n${end}\n` + html.slice(at);
}
const words = {
  en:['Related network pages','Previous','Next','Apps Network','Free Discovery (Portuguese questionnaire)','Discovery guide (English)'],
  pt:['Páginas relacionadas','Anterior','Próxima','Rede de apps','Discovery gratuito (questionário)','Guia Discovery (inglês)'],
  es:['Páginas relacionadas','Anterior','Siguiente','Red de apps','Discovery gratuito (cuestionario en portugués)','Guía Discovery (inglés)'],
  fr:['Pages associées','Précédente','Suivante','Réseau des apps','Discovery gratuit (questionnaire en portugais)','Guide Discovery (anglais)'],
  de:['Verwandte Seiten','Zurück','Weiter','App-Netzwerk','Kostenlose Discovery (Fragebogen auf Portugiesisch)','Discovery-Leitfaden (Englisch)']
};
export function ringNavigation(entries, index, locale = 'en', hub = '/apps-network/') {
  const w = words[locale], prefix = locale === 'en' ? '' : '/' + locale;
  const previous = entries[(index + entries.length - 1) % entries.length], next = entries[(index + 1) % entries.length];
  const links = [[prefix + previous.route,w[1]+': '+previous.label,'prev'],[prefix + next.route,w[2]+': '+next.label,'next'],[hub,w[3],''],['/discovery/#dq',w[4],''],[guides[0],w[5],'']];
  const unique = new Map();
  for (const [href,label,rel] of links) if (!unique.has(href)) unique.set(href,{href,label,rel});
  return `<nav aria-label="${escape(w[0])}" data-zion-network-nav style="margin:2rem 0;padding:1rem;border-top:1px solid currentColor"><ul>${[...unique.values()].map(a=>`<li><a href="${escape(a.href)}"${a.rel?' rel="'+a.rel+'"':''}>${escape(a.label)}</a></li>`).join('')}</ul></nav>`;
}
export function improveHomepage(html, count) {
  // Preserve the inserted growth content, but move it outside the primary link.
  html = html.replace(/(<a\b[^>]*href="\/discovery\/"[^>]*>🚀 Start Free Discovery)\s*(<section\b[^>]*>[\s\S]*?<\/section>)\s*Now →<\/a>/, '$1 Now →</a>\n$2');
  html = html.replace(/(<a\b[^>]*href=")\/book\/("[^>]*>)Book Free Discovery(<\/a>)/g, '$1/discovery/$2Start Free Discovery$3');
  html = html.replace('href="/discovery"','href="/discovery/"');
  html = html.replace('Free AI Discovery — Map Your Opportunity in Minutes','Free AI Discovery — Explore Your Priorities Online');
  const section = html.indexOf('<!-- ── Free Discovery');
  if (section >= 0) {
    const from = html.indexOf('<p class="lede"', section), end = html.indexOf('</p>',from);
    if (from >= 0 && end >= 0) {
      const open = html.indexOf('>',from) + 1;
      html = html.slice(0,open) + 'Answer the free online questionnaire to see rules-based app recommendations and a recoverable summary. It currently opens in Portuguese. Paid implementation is optional and separately scoped.' + html.slice(end);
    }
  }
  html = html.replace('Your data stays in your browser.','Submitting Discovery sends your contact details and summary through FormSubmit to your address and our Commercial team; inbox delivery is not confirmed.');
  html = html.replace('Instant Report','On-Screen Recommendations').replace('Get your AI opportunity map immediately after completing the questionnaire.','See preliminary rules-based suggestions after completing the free questionnaire.');
  html = html.replace('<b>48h</b>Typical discovery kickoff','<b>Online</b>Free questionnaire').replace('<b>&lt;48h</b>Discovery Kickoff','<b>Online</b>Discovery questionnaire');
  html = html.replace(/\b57 apps\b/g, `${count} catalog entries`)
    .replace('each published in English, Português, Español, Français and Deutsch, and interlinked with its siblings','with language availability and readiness varying by entry')
    .replace('every one interlinked with its siblings — no dead ends','related pages connected through the catalog; verify readiness before relying on a capability')
    .replace(`All ${count} catalog entries in one interlinked hub, in 5 languages.`,'Browse the linked catalog; language availability and readiness vary by page.');
  const promotion = `<section id="free-discovery-guides" aria-labelledby="discovery-guides-title"><h2 id="discovery-guides-title">Start free. Choose your next improvement with a clearer brief.</h2><p>Explore ${count} catalog entries, not ${count} claims of production readiness. The online Discovery questionnaire is free, with no payment required; paid implementation is optional.</p><ul><li><a href="${guides[0]}">What free Discovery provides, and what it does not</a></li><li><a href="${guides[1]}">Connect cloud costs with reliability decisions</a></li><li><a href="${guides[2]}">Plan your first AI pilot with human approval</a></li></ul><p><a href="/discovery/#dq">Start Free Discovery — Portuguese questionnaire</a> · <a href="/apps-network/">Explore related catalog pages</a></p><p>Recommendations and the initial summary appear in the page. An email copy is requested for you and commercial@ziontechgroup.com, but provider acceptance is not proof of inbox receipt. Do not submit passwords or sensitive customer records.</p></section>`;
  return injectBlock(html,'home-promotion',promotion);
}
export function refresh(root) {
  root = fs.realpathSync(path.resolve(root));
  function fileFor(route) {
    const file = path.resolve(root,'.' + route + (route.endsWith('/') ? 'index.html' : ''));
    if (!file.startsWith(root + path.sep)) throw Error('Route escapes artifact');
    if (fs.existsSync(file) && !fs.realpathSync(file).startsWith(root + path.sep)) throw Error('Symlink escapes artifact');
    return file;
  }
  const hubFile = fileFor('/apps-network/');
  const entries = catalogRoutes(fs.readFileSync(hubFile,'utf8'));
  for (const route of guides) if (!fs.existsSync(fileFor(route))) throw Error('Missing real guide: ' + route);
  const changes = new Map();
  let localized = 0;
  for (const locale of ['en','pt','es','fr','de']) {
    const prefix = locale === 'en' ? '' : '/' + locale;
    const family = entries.filter(e => fs.existsSync(fileFor(prefix + e.route)));
    if (locale === 'en' && family.length !== entries.length) throw Error('Missing listed source pages; no placeholders generated');
    if (family.length < 2) continue;
    const localHub = prefix + '/apps-network/';
    const hub = fs.existsSync(fileFor(localHub)) ? localHub : '/apps-network/';
    family.forEach((entry,index) => {
      const file = fileFor(prefix + entry.route);
      const before = fs.readFileSync(file,'utf8');
      changes.set(file,injectBlock(before,'network-navigation',ringNavigation(family,index,locale,hub)));
      if (locale !== 'en') localized++;
    });
  }
  const home = fileFor('/');
  changes.set(home,improveHomepage(fs.readFileSync(home,'utf8'),entries.length));
  let hubHTML = fs.readFileSync(hubFile,'utf8').replace(/Production-ready/g,'Explore');
  hubHTML = injectBlock(hubHTML,'catalog-guides','<aside aria-label="Catalog readiness"><h2>Understand the page before using the capability</h2><p>This catalog includes tools, overviews, redirects, prototypes and placeholders. A live route is not proof of a working product or an integration. Confirm readiness and data handling before relying on a capability.</p><p><a href="/free-discovery-guide/">Free Discovery guide</a> · <a href="/cloud-reliability-guide/">Cloud and reliability guide</a> · <a href="/first-ai-pilot/">AI pilot guide</a></p></aside>');
  changes.set(hubFile,hubHTML);
  // Plan the entire change before writing, so invalid/missing pages cannot be hidden by partial output.
  let changed = 0;
  for (const [file,after] of changes) if (fs.readFileSync(file,'utf8') !== after) { fs.writeFileSync(file,after); changed++; }
  return {catalogEntries:entries.length,localizedPages:localized,changedFiles:changed};
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(refresh(process.argv[2] || 'out')));
}
