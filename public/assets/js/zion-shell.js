/* Zion Family A chrome — inject localized shared nav/footer only when missing. */
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

  var COPY = {
    en: {
      home: '/en/', prefix: '', skip: 'Skip to content', menu: 'Open menu',
      primary: 'Primary navigation', language: 'Language', company: 'Company',
      offer: 'Offer', resources: 'Resources', legal: 'Legal', about: 'About',
      services: 'Services', plans: 'Plans', agents: 'Agents', field: 'Field services',
      offers: 'Offers', cases: 'Cases', contact: 'Contact', blog: 'Blog', status: 'Status',
      privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies', apps: 'Apps catalog',
      free: 'Free Discovery',
      invitation: 'Explore free planning tools and practical guides to prepare your next step.'
    },
    pt: {
      home: '/pt/', prefix: '/pt', skip: 'Ir para o conteúdo', menu: 'Abrir menu',
      primary: 'Navegação principal', language: 'Idioma', company: 'Empresa',
      offer: 'Oferta', resources: 'Recursos', legal: 'Informações legais', about: 'Sobre',
      services: 'Serviços', plans: 'Planos', agents: 'Agentes', field: 'Serviços de campo',
      offers: 'Ofertas', cases: 'Casos', contact: 'Contato', blog: 'Blog', status: 'Status',
      privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies', apps: 'Catálogo de apps',
      free: 'Discovery gratuito',
      invitation: 'Explore ferramentas gratuitas de planejamento e guias práticos para preparar seu próximo passo.'
    },
    es: {
      home: '/es/', prefix: '/es', skip: 'Ir al contenido', menu: 'Abrir menú',
      primary: 'Navegación principal', language: 'Idioma', company: 'Empresa',
      offer: 'Oferta', resources: 'Recursos', legal: 'Información legal', about: 'Acerca de Zion',
      services: 'Servicios', plans: 'Planes', agents: 'Agentes', field: 'Servicios en sitio',
      offers: 'Ofertas', cases: 'Casos', contact: 'Contacto', blog: 'Blog', status: 'Estado',
      privacy: 'Privacidad', terms: 'Términos', cookies: 'Cookies', apps: 'Catálogo de apps',
      free: 'Discovery gratuito',
      invitation: 'Explore herramientas gratuitas de planificación y guías prácticas para preparar su próximo paso.'
    },
    fr: {
      home: '/fr/', prefix: '/fr', skip: 'Aller au contenu', menu: 'Ouvrir le menu',
      primary: 'Navigation principale', language: 'Langue', company: 'Entreprise',
      offer: 'Offre', resources: 'Ressources', legal: 'Informations légales', about: 'À propos',
      services: 'Services', plans: 'Formules', agents: 'Agents', field: 'Interventions sur site',
      offers: 'Offres', cases: 'Cas pratiques', contact: 'Contact', blog: 'Blog', status: 'État des services',
      privacy: 'Confidentialité', terms: 'Conditions', cookies: 'Cookies', apps: 'Catalogue des apps',
      free: 'Discovery gratuit',
      invitation: 'Explorez des outils de planification gratuits et des guides pratiques pour préparer la prochaine étape.'
    },
    de: {
      home: '/de/', prefix: '/de', skip: 'Zum Inhalt', menu: 'Menü öffnen',
      primary: 'Hauptnavigation', language: 'Sprache', company: 'Unternehmen',
      offer: 'Angebot', resources: 'Ressourcen', legal: 'Rechtliche Informationen', about: 'Über Zion',
      services: 'Leistungen', plans: 'Tarife', agents: 'Agenten', field: 'Vor-Ort-Service',
      offers: 'Angebote', cases: 'Praxisbeispiele', contact: 'Kontakt', blog: 'Blog', status: 'Systemstatus',
      privacy: 'Datenschutz', terms: 'Bedingungen', cookies: 'Cookies', apps: 'App-Katalog',
      free: 'Kostenloser Erstcheck',
      invitation: 'Entdecken Sie kostenlose Planungstools und praktische Leitfäden für Ihren nächsten Schritt.'
    }
  };
  var LANGUAGES = [
    ['en', 'en', 'EN', 'English'], ['pt', 'pt-BR', 'PT', 'Português'],
    ['es', 'es', 'ES', 'Español'], ['fr', 'fr', 'FR', 'Français'],
    ['de', 'de', 'DE', 'Deutsch']
  ];

  function locale() {
    var code = String(document.documentElement.lang || '').toLowerCase().split(/[-_]/)[0];
    return Object.prototype.hasOwnProperty.call(COPY, code) ? code : 'en';
  }

  function link(href, label, attributes) {
    return '<a href="' + href + '"' + (attributes || '') + '>' + label + '</a>';
  }

  function languageLinks(code, text) {
    return '<span class="langsw" aria-label="' + text.language + '">' +
      LANGUAGES.map(function (item) {
        return link(COPY[item[0]].home, item[2], ' hreflang="' + item[1] + '" lang="' +
          item[1] + '" title="' + item[3] + '"' + (item[0] === code ? ' aria-current="true"' : ''));
      }).join('') + '</span>';
  }

  function header(code, text) {
    return '<a class="skip" href="#conteudo">' + text.skip + '</a>' +
      '<header class="nav"><div class="wrap navin">' +
      '<a class="brand" href="' + text.home + '">Zion Tech Group</a>' +
      '<button class="menu" aria-label="' + text.menu + '" aria-expanded="false" ' +
      'aria-controls="zion-shell-links" onclick="var menu=document.getElementById(\'zion-shell-links\');' +
      'var open=menu.classList.toggle(\'open\');this.setAttribute(\'aria-expanded\',String(open))">☰</button>' +
      '<nav id="zion-shell-links" class="links" aria-label="' + text.primary + '">' +
      link(text.prefix + '/apps/', text.apps) +
      link('/services/', text.services) + link('/plans/', text.plans) +
      link('/autonomous-ai-agents/', text.agents) + link('/field-services/', text.field) +
      link('/offers/', text.offers) + link('/cases/', text.cases) +
      link('/contact/', text.contact) + link('/blog/', text.blog) +
      link(text.prefix + '/discovery/', text.free, ' class="cta"') +
      languageLinks(code, text) + '</nav></div></header>';
  }

  function footer(code, text) {
    return '<footer><div class="wrap foot">' +
      '<div><h3>' + text.company + '</h3>' + link('/about/', text.about) +
      link('/cases/', text.cases) + link('/contact/', text.contact) +
      link('/status-page/', text.status) + '</div>' +
      '<div><h3>' + text.offer + '</h3>' + link('/plans/', text.plans) +
      link(text.prefix + '/discovery/', text.free) + link('/offers/', text.offers) +
      link('/field-services/', text.field) + '</div>' +
      '<div><h3>' + text.resources + '</h3>' + link(text.prefix + '/apps/', text.apps) +
      link('/blog/', text.blog) + link('/autonomous-ai-agents/', text.agents) +
      link('/telegram/', 'Telegram') + link('/finops-consulting/', 'FinOps') + '</div>' +
      '<div><h3>' + text.legal + '</h3>' +
      link(code === 'pt' ? '/privacidade/' : '/privacy/', text.privacy) +
      link('/terms/', text.terms) + link('/cookies/', text.cookies) +
      link('mailto:kleber@ziontechgroup.com', 'kleber@ziontechgroup.com') + '</div></div>' +
      '<div class="wrap"><p class="muted">' + text.invitation + ' ' +
      link(text.prefix + '/apps/', text.apps) + ' · ' +
      link(text.prefix + '/discovery/', text.free) + '</p>' +
      '<p class="muted">Zion Tech Group · +1 302 464 0950 · 364 E Main St STE 1008, Middletown, DE 19709</p></div>' +
      '</footer>';
  }

  function hideLegacyChrome() {
    [].forEach.call(document.querySelectorAll('nav.top'), function (n) {
      n.setAttribute('hidden', '');
      n.style.display = 'none';
    });
  }

  function inject() {
    ensureCss();
    hideLegacyChrome();
    var code = locale();
    var text = COPY[code];
    if (!document.querySelector('header.nav')) {
      document.body.insertAdjacentHTML('afterbegin', header(code, text));
    }
    if (!document.querySelector('footer .foot')) {
      [].forEach.call(document.querySelectorAll('footer'), function (f) {
        f.setAttribute('hidden', '');
        f.style.display = 'none';
      });
      document.body.insertAdjacentHTML('beforeend', footer(code, text));
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
