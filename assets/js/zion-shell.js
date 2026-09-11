/* Zion shared chrome — one nav, footer, and layout for every page. */
(function () {
  if (window.__zionShell) return;
  window.__zionShell = true;

  var COPY = {
    en: {
      skip: "Skip to content",
      menu: "Open menu",
      primary: "Primary",
      services: "Services",
      solutions: "Solutions",
      plans: "Plans",
      blog: "Blog",
      contact: "Contact",
      cta: "Discovery $99",
      company: "Company",
      about: "About",
      partners: "Partners",
      offer: "Offer",
      discovery: "Discovery $99",
      resources: "Resources",
      faq: "FAQ",
      legal: "Legal",
      privacy: "Privacy",
      cookies: "Cookies"
    },
    pt: {
      skip: "Ir para o conteúdo",
      menu: "Abrir menu",
      primary: "Principal",
      services: "Serviços",
      solutions: "Soluções",
      plans: "Planos",
      blog: "Blog",
      contact: "Contato",
      cta: "Discovery $99",
      company: "Empresa",
      about: "Sobre",
      partners: "Parceiros",
      offer: "Oferta",
      discovery: "Discovery $99",
      resources: "Recursos",
      faq: "FAQ",
      legal: "Legal",
      privacy: "Privacidade",
      cookies: "Cookies"
    },
    es: {
      skip: "Saltar al contenido",
      menu: "Abrir menú",
      primary: "Principal",
      services: "Servicios",
      solutions: "Soluciones",
      plans: "Planes",
      blog: "Blog",
      contact: "Contacto",
      cta: "Discovery $99",
      company: "Empresa",
      about: "Acerca de",
      partners: "Partners",
      offer: "Oferta",
      discovery: "Discovery $99",
      resources: "Recursos",
      faq: "FAQ",
      legal: "Legal",
      privacy: "Privacidad",
      cookies: "Cookies"
    }
  };

  function locale() {
    var path = (location.pathname || "/").toLowerCase();
    if (path === "/en/" || path.indexOf("/en/") === 0) return "en";
    if (path === "/es/" || path.indexOf("/es/") === 0) return "es";
    if (path === "/pt/" || path.indexOf("/pt/") === 0) return "pt";
    var lang = (document.documentElement.lang || "").toLowerCase();
    if (lang.indexOf("pt") === 0) return "pt";
    if (lang.indexOf("es") === 0) return "es";
    return "en";
  }

  function t() {
    return COPY[locale()] || COPY.en;
  }

  function ensureCss() {
    if ([].some.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return /\/assets\/css\/site\.css/.test(l.getAttribute("href") || "");
    })) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/site.css";
    document.head.appendChild(link);
  }

  function ensureViewport() {
    if (document.querySelector('meta[name="viewport"]')) return;
    var m = document.createElement("meta");
    m.name = "viewport";
    m.content = "width=device-width, initial-scale=1";
    document.head.appendChild(m);
  }

  function loadI18n() {
    if (document.querySelector('script[src="/assets/js/i18n.js"]')) return;
    var s = document.createElement("script");
    s.src = "/assets/js/i18n.js";
    s.defer = true;
    document.head.appendChild(s);
  }

  function headerHtml() {
    var c = t();
    return '<a class="skip" href="#conteudo">' + c.skip + "</a>" +
      '<header class="nav"><div class="wrap navin">' +
      '<a class="brand" href="/">Zion Tech Group</a>' +
      '<button class="menu" type="button" aria-label="' + c.menu + '" aria-expanded="false" aria-controls="zion-menu">☰</button>' +
      '<nav class="links" id="zion-menu" aria-label="' + c.primary + '">' +
      '<a href="/services/" data-nav="services">' + c.services + "</a>" +
      '<a href="/solutions/" data-nav="solutions">' + c.solutions + "</a>" +
      '<a href="/plans/" data-nav="plans">' + c.plans + "</a>" +
      '<a href="/blog/" data-nav="blog">' + c.blog + "</a>" +
      '<a href="/contact/" data-nav="contact">' + c.contact + "</a>" +
      '<a class="cta" href="/discovery/" data-nav="discovery">' + c.cta + "</a>" +
      "</nav></div></header>";
  }

  function footerHtml() {
    var c = t();
    return '<footer><div class="wrap foot">' +
      "<div><h3>" + c.company + "</h3>" +
      '<a href="/about/">' + c.about + "</a>" +
      '<a href="/partners/">' + c.partners + "</a>" +
      '<a href="/contact/">' + c.contact + "</a></div>" +
      "<div><h3>" + c.offer + "</h3>" +
      '<a href="/plans/">' + c.plans + "</a>" +
      '<a href="/discovery/">' + c.discovery + "</a>" +
      '<a href="/solutions/">' + c.solutions + "</a></div>" +
      "<div><h3>" + c.resources + "</h3>" +
      '<a href="/blog/">' + c.blog + "</a>" +
      '<a href="/resources/">' + c.resources + "</a>" +
      '<a href="/faq/">' + c.faq + "</a></div>" +
      "<div><h3>" + c.legal + "</h3>" +
      '<a href="/privacy/">' + c.privacy + "</a>" +
      '<a href="/cookies/">' + c.cookies + "</a>" +
      '<a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
      "</div>" +
      '<div class="wrap legal">© 2026 Zion Tech Group · 364 E Main St STE 1008, Middletown, DE 19709 · +1 302 464 0950</div>' +
      "</footer>";
  }

  function normPath(p) {
    if (!p) return "/";
    p = p.split("?")[0].split("#")[0];
    if (!p.startsWith("/")) p = "/" + p;
    if (p.length > 1 && !p.endsWith("/")) p += "/";
    return p;
  }

  function markActive() {
    var path = normPath(location.pathname);
    var rules = [
      ["discovery", ["/discovery/", "/book/", "/booking/"]],
      ["contact", ["/contact/"]],
      ["blog", ["/blog/"]],
      ["plans", ["/plans/", "/pricing/"]],
      ["solutions", ["/solutions/", "/industries/"]],
      ["services", ["/services/", "/ai-services/"]]
    ];
    var match = "";
    if (path === "/") match = "home";
    for (var i = 0; i < rules.length; i++) {
      var key = rules[i][0];
      var prefixes = rules[i][1];
      for (var j = 0; j < prefixes.length; j++) {
        if (path === prefixes[j] || path.indexOf(prefixes[j]) === 0) {
          match = key;
          break;
        }
      }
      if (match && match !== "home") break;
    }
    [].forEach.call(document.querySelectorAll("nav.links a[data-nav]"), function (a) {
      if (a.getAttribute("data-nav") === match) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function bindMenu() {
    var btn = document.querySelector("header.nav .menu");
    var links = document.getElementById("zion-menu");
    if (!btn || !links) return;
    function setOpen(open) {
      links.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () {
      setOpen(!links.classList.contains("open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!links.classList.contains("open")) return;
      if (links.contains(e.target) || btn.contains(e.target)) return;
      setOpen(false);
    });
  }

  function isChrome(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.matches("a.skip, header, footer, nav.top")) return true;
    if (el.id === "site-navigation" || el.id === "site-footer") return true;
    return false;
  }

  function stripChrome() {
    [].forEach.call(document.querySelectorAll("a.skip, header, footer, nav.top, #site-navigation, #site-footer"), function (el) {
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function ensureMain() {
    var main = document.querySelector("main");
    if (main) {
      if (!main.id) main.id = "conteudo";
      main.classList.add("section");
      return main;
    }
    main = document.createElement("main");
    main.id = "conteudo";
    main.className = "section page";
    var wrap = document.createElement("div");
    wrap.className = "wrap";
    var kids = [];
    for (var i = 0; i < document.body.childNodes.length; i++) kids.push(document.body.childNodes[i]);
    kids.forEach(function (node) {
      if (isChrome(node)) return;
      wrap.appendChild(node);
    });
    main.appendChild(wrap);
    document.body.appendChild(main);
    return main;
  }

  function inject() {
    ensureViewport();
    ensureCss();
    document.body.classList.add("zion-chrome");
    stripChrome();
    ensureMain();
    document.body.insertAdjacentHTML("afterbegin", headerHtml());
    document.body.insertAdjacentHTML("beforeend", footerHtml());
    bindMenu();
    markActive();
    loadI18n();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
