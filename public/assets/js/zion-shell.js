/* Zion Family A chrome — inject shared nav/footer when a page is missing them. */
(function () {
  if (window.__zionShell) return;
  window.__zionShell = true;

  function ensureCss() {
    if ([].some.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return /\/assets\/css\/site\.css/.test(l.getAttribute('href') || '');
    })) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/site.css';
    document.head.appendChild(link);
  }

  function isPt() {
    return (document.documentElement.lang || '').toLowerCase().indexOf('pt') === 0;
  }

  var HEADER_PT = '<a class="skip" href="#conteudo">Ir para o conteúdo</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Abrir menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Principal">' +
    '<a href="/services/">Serviços</a><a href="/plans/">Planos</a><a href="/autonomous-ai-agents/">Agentes</a>' +
    '<a href="/discovery/">Discovery</a><a href="/field-services/">Field</a><a href="/offers/">Ofertas</a>' +
    '<a href="/cases/">Casos</a><a href="/contact/">Contato</a><a href="/blog/">Blog</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '<span class="langsw" aria-label="Idioma"><a href="/">PT</a><a href="/en/">EN</a><a href="/es/">ES</a><a href="/fr/">FR</a></span>' +
    '</nav></div></header>';

  var HEADER_EN = '<a class="skip" href="#conteudo">Skip to content</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/en/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Open menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Primary">' +
    '<a href="/services/">Services</a><a href="/plans/">Plans</a><a href="/autonomous-ai-agents/">Agents</a>' +
    '<a href="/discovery/">Discovery</a><a href="/field-services/">Field</a><a href="/offers/">Offers</a>' +
    '<a href="/cases/">Cases</a><a href="/contact/">Contact</a><a href="/blog/">Blog</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '<span class="langsw" aria-label="Language"><a href="/">PT</a><a href="/en/">EN</a><a href="/es/">ES</a><a href="/fr/">FR</a></span>' +
    '</nav></div></header>';

  var FOOTER_PT = '<footer><div class="wrap foot">' +
    '<div><h3>Empresa</h3><a href="/about/">Sobre</a><a href="/cases/">Casos</a><a href="/contact/">Contato</a><a href="/status-page/">Status</a></div>' +
    '<div><h3>Oferta</h3><a href="/plans/">Planos</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Ofertas</a><a href="/field-services/">Field</a></div>' +
    '<div><h3>Recursos</h3><a href="/blog/">Blog</a><a href="/autonomous-ai-agents/">Agentes</a><a href="/telegram/">Telegram</a><a href="/finops-consulting/">FinOps</a></div>' +
    '<div><h3>Legal</h3><a href="/privacidade/">Privacidade</a><a href="/terms/">Termos</a><a href="/cookies/">Cookies</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div>' +
    '<div class="wrap"><p class="muted">Zion Tech Group · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></div>' +
    '</footer>';

  var FOOTER_EN = '<footer><div class="wrap foot">' +
    '<div><h3>Company</h3><a href="/about/">About</a><a href="/cases/">Cases</a><a href="/contact/">Contact</a><a href="/status-page/">Status</a></div>' +
    '<div><h3>Offer</h3><a href="/plans/">Plans</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Offers</a><a href="/field-services/">Field</a></div>' +
    '<div><h3>Resources</h3><a href="/blog/">Blog</a><a href="/autonomous-ai-agents/">Agents</a><a href="/telegram/">Telegram</a><a href="/finops-consulting/">FinOps</a></div>' +
    '<div><h3>Legal</h3><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div>' +
    '<div class="wrap"><p class="muted">Zion Tech Group · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></div>' +
    '</footer>';

  function hideLegacyChrome() {
    [].forEach.call(document.querySelectorAll('nav.top'), function (n) {
      n.setAttribute('hidden', '');
      n.style.display = 'none';
    });
  }

  function ensureGtag() {
    if (window.__zionGtag) return;
    window.__zionGtag = true;
    var id = "G-N8RSGX3HXB";
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id);
  }

  function inject() {
    ensureGtag();
    ensureCss();
    hideLegacyChrome();
    var pt = isPt();
    if (!document.querySelector('header.nav')) {
      document.body.insertAdjacentHTML('afterbegin', pt ? HEADER_PT : HEADER_EN);
    }
    if (!document.querySelector('footer .foot')) {
      [].forEach.call(document.querySelectorAll('footer'), function (f) {
        f.setAttribute('hidden', '');
        f.style.display = 'none';
      });
      document.body.insertAdjacentHTML('beforeend', pt ? FOOTER_PT : FOOTER_EN);
    }
    var mains = document.querySelectorAll('main');
    if (mains.length && !document.getElementById('conteudo')) {
      mains[0].id = 'conteudo';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
