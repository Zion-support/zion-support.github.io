/* Zion Family A chrome — inject shared nav/footer when a page is missing them. */
(function () {
  if (window.__zionShell) return;
  window.__zionShell = true;

  function ensureCss() {
    if ([].some.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return /\/(?:assets\/)?css\/site\.css/.test(l.getAttribute('href') || '');
    })) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/site.css';
    document.head.appendChild(link);
  }

  function isPt() {
    var lang = (document.documentElement.lang || '').toLowerCase();
    var path = (location.pathname || '').toLowerCase();
    if (lang.indexOf('pt') === 0) return true;
    if (path.indexOf('/en/') === 0) return false;
    return path === '/' || path.indexOf('/planos') !== -1 || path.indexOf('/contato') !== -1 ||
      path.indexOf('/casos') !== -1 || path.indexOf('/oferta') !== -1 || path.indexOf('/catalogo') !== -1 ||
      path.indexOf('/odontologia') !== -1 || path.indexOf('/precos') !== -1 || path.indexOf('/privacidade') !== -1;
  }

  var HEADER_PT = '<a class="skip" href="#conteudo">Ir para o conteúdo</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Abrir menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Principal">' +
    '<a href="/services/">Serviços</a><a href="/plans/">Planos</a><a href="/field-services/">Campo</a>' +
    '<a href="/gpu-cloud-latam/">GPU</a><a href="/voice-ai-latam/">Voice</a><a href="/brazil-24x7-coverage/">24x7</a>' +
    '<a href="/success-stories/">Casos</a><a href="/contact/">Contato</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '</nav></div></header>';

  var HEADER_EN = '<a class="skip" href="#conteudo">Skip to content</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Open menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Primary">' +
    '<a href="/services/">Services</a><a href="/plans/">Plans</a><a href="/field-services/">Field</a>' +
    '<a href="/gpu-cloud-latam/">GPU</a><a href="/voice-ai-latam/">Voice</a><a href="/brazil-24x7-coverage/">24x7</a>' +
    '<a href="/success-stories/">Stories</a><a href="/contact/">Contact</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '</nav></div></header>';

  var FOOTER_PT = '<footer><div class="wrap foot">' +
    '<div><h3>Empresa</h3><a href="/about/">Sobre</a><a href="/partners/">Parceiros</a><a href="/indique/">Indique</a><a href="/contact/">Contato</a></div>' +
    '<div><h3>Oferta</h3><a href="/plans/">Planos</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Ofertas</a><a href="/field-services/">Campo</a></div>' +
    '<div><h3>Campo</h3><a href="/remote-hands-miami/">Miami</a><a href="/gpu-cloud-latam/">GPU LATAM</a><a href="/voice-ai-latam/">Voice AI</a><a href="/brazil-24x7-coverage/">24x7 Brasil</a></div>' +
    '<div><h3>Legal</h3><a href="/success-stories/">Casos</a><a href="/faq/">FAQ</a><a href="/privacidade/">Privacidade</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div><p class="wrap muted" style="margin-top:24px">Zion Tech Group · kleber@ziontechgroup.com · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></footer>';

  var FOOTER_EN = '<footer><div class="wrap foot">' +
    '<div><h3>Company</h3><a href="/about/">About</a><a href="/partners/">Partners</a><a href="/careers/">Careers</a><a href="/contact/">Contact</a></div>' +
    '<div><h3>Offer</h3><a href="/plans/">Plans</a><a href="/discovery/">Discovery $99</a><a href="/offers/">Offers</a><a href="/field-services/">Field</a></div>' +
    '<div><h3>Field</h3><a href="/remote-hands-miami/">Miami</a><a href="/gpu-cloud-latam/">GPU LATAM</a><a href="/voice-ai-latam/">Voice AI</a><a href="/brazil-24x7-coverage/">24x7 Brazil</a></div>' +
    '<div><h3>Legal</h3><a href="/success-stories/">Stories</a><a href="/faq/">FAQ</a><a href="/privacy/">Privacy</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div><p class="wrap muted" style="margin-top:24px">Zion Tech Group · kleber@ziontechgroup.com · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></footer>';

  function hideLegacyChrome() {
    document.body.removeAttribute('style');
    [].forEach.call(document.querySelectorAll('nav.top, body > nav.nav'), function (n) {
      n.setAttribute('hidden', '');
      n.style.display = 'none';
    });
    [].forEach.call(document.querySelectorAll('header:not(.nav)'), function (n) {
      if (n.querySelector('nav')) {
        n.setAttribute('hidden', '');
        n.style.display = 'none';
      }
    });
    [].forEach.call(document.querySelectorAll('main[style], footer[style]'), function (n) {
      n.removeAttribute('style');
    });
  }

  function wrapLooseContent() {
    var header = document.querySelector('header.nav');
    var footer = document.querySelector('footer .foot') ? document.querySelector('footer .foot').closest('footer') : null;
    var main = document.querySelector('main');
    if (!main) {
      main = document.createElement('main');
      main.className = 'section';
      main.id = 'conteudo';
      var wrap = document.createElement('div');
      wrap.className = 'wrap';
      var nodes = [];
      var child = document.body.firstChild;
      while (child) {
        var next = child.nextSibling;
        if (child === header || child === footer) {
          child = next;
          continue;
        }
        if (child.nodeType === 1) {
          var tag = child.tagName;
          if (tag === 'SCRIPT' || tag === 'HEADER' || tag === 'FOOTER' || tag === 'LINK' || tag === 'STYLE') {
            child = next;
            continue;
          }
          if (child.classList && child.classList.contains('skip')) {
            child = next;
            continue;
          }
        }
        if (child.nodeType === 3 && !String(child.textContent || '').trim()) {
          child = next;
          continue;
        }
        nodes.push(child);
        child = next;
      }
      nodes.forEach(function (n) { wrap.appendChild(n); });
      main.appendChild(wrap);
      if (footer) document.body.insertBefore(main, footer);
      else document.body.appendChild(main);
    } else {
      if (!main.id) main.id = 'conteudo';
      main.removeAttribute('style');
      if (!main.classList.contains('page') && !main.classList.contains('section') && !main.querySelector('.hero, .section, .page')) {
        main.classList.add('section');
      }
      if (!main.querySelector('.wrap') && !main.classList.contains('wrap')) {
        var inner = document.createElement('div');
        inner.className = 'wrap';
        while (main.firstChild) inner.appendChild(main.firstChild);
        main.appendChild(inner);
      }
    }
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
    wrapLooseContent();
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
