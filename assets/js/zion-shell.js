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
    '<a href="/services/">Serviços</a><a href="/plans/">Planos</a><a href="/para/">Para você</a>' +
    '<a href="/faq/">FAQ</a><a href="/whatsapp/">WhatsApp</a><a href="/contact/">Contato</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '</nav></div></header>';

  var HEADER_EN = '<a class="skip" href="#conteudo">Skip to content</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Open menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Primary">' +
    '<a href="/solutions/">Solutions</a><a href="/services/">Services</a><a href="/plans/">Plans</a>' +
    '<a href="/faq/">FAQ</a><a href="/whatsapp/">WhatsApp</a><a href="/contact/">Contact</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '</nav></div></header>';

  var FOOTER_PT = '<footer><div class="wrap foot">' +
    '<div><h3>Empresa</h3><a href="/about/">Sobre</a><a href="/partners/">Parceiros</a><a href="/indique/">Indique</a><a href="/contact/">Contato</a></div>' +
    '<div><h3>Oferta</h3><a href="/plans/">Planos</a><a href="/discovery/">Discovery $99</a><a href="/comece/">Comece</a><a href="/cpa/">CPA</a></div>' +
    '<div><h3>Recursos</h3><a href="/blog/">Blog</a><a href="/faq/">FAQ</a><a href="/mapa-do-site/">Mapa do site</a><a href="/whatsapp/">WhatsApp</a></div>' +
    '<div><h3>Legal</h3><a href="/privacidade/">Privacidade</a><a href="/privacy/">Privacy</a><a href="/cookie-policy/">Cookies</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div></footer>';

  var FOOTER_EN = '<footer><div class="wrap foot">' +
    '<div><h3>Company</h3><a href="/about/">About</a><a href="/partners/">Partners</a><a href="/careers/">Careers</a><a href="/contact/">Contact</a></div>' +
    '<div><h3>Offer</h3><a href="/plans/">Plans</a><a href="/discovery/">Discovery $99</a><a href="/solutions/">Solutions</a><a href="/cpa/">CPA</a></div>' +
    '<div><h3>Resources</h3><a href="/blog/">Blog</a><a href="/faq/">FAQ</a><a href="/mapa-do-site/">Site map</a><a href="/whatsapp/">WhatsApp</a></div>' +
    '<div><h3>Legal</h3><a href="/privacy/">Privacy</a><a href="/privacidade/">Privacidade</a><a href="/cookie-policy/">Cookies</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div></footer>';

  function hideLegacyChrome() {
    [].forEach.call(document.querySelectorAll('nav.top'), function (n) {
      n.setAttribute('hidden', '');
      n.style.display = 'none';
    });
  }

  function inject() {
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
