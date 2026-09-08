/* Zion i18n — PT default, EN, ES hub, FR hub.
   Future page: data-i18n-pt/en/es/fr on <html> + one lang-map row
   dual-written to public/assets/data/. Include this script or load
   zion-shell.js / zion-catalog.js. No Accept-Language auto-redirect. */
(function () {
  if (window.__zionI18n) return;
  window.__zionI18n = true;

  var ORIGIN = "https://ziontechgroup.com";
  var MAP_URL = "/assets/data/lang-map.json";
  var STORE = "zion_lang";
  var FALLBACK = {
    defaultLang: "pt",
    languages: [
      { id: "pt", hreflang: "pt-BR", label: "PT", htmlLang: "pt-BR" },
      { id: "en", hreflang: "en", label: "EN", htmlLang: "en" },
      { id: "es", hreflang: "es", label: "ES", htmlLang: "es" },
      { id: "fr", hreflang: "fr", label: "FR", htmlLang: "fr" }
    ],
    pairs: [
      { pt: "/", en: "/en/", es: "/es/", fr: "/fr/" },
      { pt: "/pt/", en: "/en/", es: "/es/", fr: "/fr/" },
      { pt: "/contato/", en: "/en/contact/", es: "/es/", fr: "/fr/" },
      { pt: "/contact/", en: "/en/contact/", es: "/es/", fr: "/fr/" },
      { pt: "/fale-conosco/", en: "/en/contact/", es: "/es/", fr: "/fr/" },
      { pt: "/privacidade/", en: "/privacy/", es: "/es/", fr: "/fr/" },
      { pt: "/privacy/", en: "/privacy/", es: "/es/", fr: "/fr/" },
      { pt: "/precos/", en: "/en/plans/", es: "/es/", fr: "/fr/" },
      { pt: "/pricing/", en: "/en/plans/", es: "/es/", fr: "/fr/" },
      { pt: "/plans/", en: "/en/plans/", es: "/es/", fr: "/fr/" },
      { pt: "/discovery/", en: "/en/discovery/", es: "/es/", fr: "/fr/" },
      { pt: "/blog/pt/", en: "/blog/", es: "/es/", fr: "/fr/" },
      { pt: "/custo-cloud/", en: "/finops-consulting/", es: "/es/", fr: "/fr/" },
      { pt: "/whatsapp/", en: "/whatsapp/", es: "/es/", fr: "/fr/" },
      { pt: "/partners/", en: "/partners/", es: "/es/", fr: "/fr/" },
      { pt: "/indique/", en: "/referral/", es: "/es/", fr: "/fr/" },
      { pt: "/services/", en: "/en/services/", es: "/es/", fr: "/fr/" },
      { pt: "/agents/", en: "/en/agents/", es: "/es/", fr: "/fr/" }
    ]
  };

  function norm(p) {
    if (!p) return "/";
    p = String(p).split("?")[0].split("#")[0];
    if (p.charAt(0) !== "/") p = "/" + p;
    if (p.length > 1 && p.charAt(p.length - 1) !== "/") p += "/";
    return p;
  }

  function localeFromPath(p) {
    if (p === "/en/" || p.indexOf("/en/") === 0) return "en";
    if (p === "/es/" || p.indexOf("/es/") === 0) return "es";
    if (p === "/fr/" || p.indexOf("/fr/") === 0) return "fr";
    if (p === "/pt/" || p.indexOf("/pt/") === 0) return "pt";
    return "pt";
  }

  function attrPair() {
    var el = document.documentElement;
    var pt = el.getAttribute("data-i18n-pt");
    var en = el.getAttribute("data-i18n-en");
    var es = el.getAttribute("data-i18n-es");
    var fr = el.getAttribute("data-i18n-fr");
    if (!pt && !en && !es && !fr) return null;
    return {
      pt: norm(pt || "/"),
      en: norm(en || "/en/"),
      es: norm(es || "/es/"),
      fr: norm(fr || "/fr/")
    };
  }

  function rowsOf(map) {
    var pairs = (map && map.pairs) || [];
    if (Array.isArray(pairs)) return pairs;
    var out = [];
    Object.keys(pairs).forEach(function (k) {
      var row = pairs[k] || {};
      out.push({
        pt: row.pt || k,
        en: row.en || "/en/",
        es: row.es || "/es/",
        fr: row.fr || "/fr/",
        aliases: row.aliases || []
      });
    });
    return out;
  }

  function pairFor(map, p) {
    var fromHtml = attrPair();
    if (fromHtml) return fromHtml;
    var pairs = rowsOf(map);
    for (var i = 0; i < pairs.length; i++) {
      var row = pairs[i];
      var hits = [row.pt, row.en, row.es, row.fr].concat(row.aliases || []).map(norm);
      if (hits.indexOf(p) !== -1) {
        return {
          pt: norm(row.pt || p),
          en: norm(row.en || "/en/"),
          es: norm(row.es || "/es/"),
          fr: norm(row.fr || "/fr/")
        };
      }
    }
    if (p.indexOf("/en/") === 0) {
      var stripped = p.replace(/^\/en/, "") || "/";
      return { pt: stripped, en: p, es: "/es/", fr: "/fr/" };
    }
    if (p.indexOf("/es/") === 0) return { pt: "/", en: "/en/", es: p, fr: "/fr/" };
    if (p.indexOf("/fr/") === 0) return { pt: "/", en: "/en/", es: "/es/", fr: p };
    return { pt: p, en: "/en/", es: "/es/", fr: "/fr/" };
  }

  function ensureStyle() {
    if (document.getElementById("zion-i18n-css")) return;
    var s = document.createElement("style");
    s.id = "zion-i18n-css";
    s.textContent = ".langsw{display:inline-flex;gap:6px;margin-left:8px;font-size:.85rem;align-items:center}.langsw a{padding:4px 8px;border-radius:8px;border:1px solid #2a3654;color:#c5d0e8;text-decoration:none}.langsw a[aria-current=\"true\"]{background:#1a2440;color:#fff;border-color:#8b5cf6}";
    document.head.appendChild(s);
  }

  function addLink(hl, href) {
    if (!href) return;
    if (document.querySelector('link[rel="alternate"][hreflang="' + hl + '"]')) return;
    var l = document.createElement("link");
    l.rel = "alternate";
    l.hreflang = hl;
    l.href = href.indexOf("http") === 0 ? href : ORIGIN + href;
    document.head.appendChild(l);
  }

  function findNav() {
    return document.querySelector("header.nav nav.links") ||
      document.querySelector("nav.links") ||
      document.querySelector("header.nav .navin") ||
      document.querySelector("header.nav");
  }

  function mountSwitcher(pair, current) {
    ensureStyle();
    var existing = document.querySelector(".langsw");
    if (existing) {
      ["pt", "en", "es", "fr"].forEach(function (code) {
        var found = null;
        [].forEach.call(existing.querySelectorAll("a"), function (a) {
          var t = (a.textContent || "").trim().toLowerCase();
          if (t === code) found = a;
        });
        if (found) {
          if (pair[code]) found.href = pair[code];
          if (code === current) found.setAttribute("aria-current", "true");
          else found.removeAttribute("aria-current");
        } else {
          var a = document.createElement("a");
          a.href = pair[code] || (code === "en" ? "/en/" : code === "es" ? "/es/" : code === "fr" ? "/fr/" : "/");
          a.textContent = code.toUpperCase();
          if (code === current) a.setAttribute("aria-current", "true");
          a.addEventListener("click", function () {
            try { localStorage.setItem(STORE, code); } catch (e) {}
          });
          existing.appendChild(a);
        }
      });
      return true;
    }
    var nav = findNav();
    if (!nav) return false;
    var span = document.createElement("span");
    span.className = "langsw";
    span.setAttribute("aria-label", "Language");
    ["pt", "en", "es", "fr"].forEach(function (code) {
      var a = document.createElement("a");
      a.href = pair[code] || (code === "en" ? "/en/" : code === "es" ? "/es/" : code === "fr" ? "/fr/" : "/");
      a.textContent = code.toUpperCase();
      if (code === current) a.setAttribute("aria-current", "true");
      a.addEventListener("click", function () {
        try { localStorage.setItem(STORE, code); } catch (e) {}
      });
      span.appendChild(a);
    });
    nav.appendChild(span);
    return true;
  }

  function apply(map) {
    var path = norm(location.pathname);
    var current = localeFromPath(path);
    var pair = pairFor(map, path);
    addLink("pt-BR", pair.pt || "/");
    addLink("en", pair.en || "/en/");
    addLink("es", pair.es || "/es/");
    addLink("fr", pair.fr || "/fr/");
    addLink("x-default", "/");
    var tries = 0;
    function attempt() {
      if (mountSwitcher(pair, current)) return;
      tries += 1;
      if (tries < 8) setTimeout(attempt, 80 * tries);
    }
    attempt();
    window.ZionI18n = { locale: current, pair: pair, path: path };
  }

  function boot() {
    fetch(MAP_URL, { credentials: "same-origin", cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : FALLBACK; })
      .then(function (map) { apply(map && (map.pairs || map.languages) ? map : FALLBACK); })
      .catch(function () { apply(FALLBACK); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
