/* Zion i18n. Reads /assets/data/lang-map.json. Future page: add a pair row + this script or zion-shell.js. No Accept-Language auto-redirect. */
(function () {
  if (window.__zionI18n) return;
  window.__zionI18n = true;
  var MAP_URL = "/assets/data/lang-map.json";
  var STORE = "zion_lang";

  function norm(p) {
    if (!p) return "/";
    p = p.split("?")[0].split("#")[0];
    if (!p.startsWith("/")) p = "/" + p;
    if (p.length > 1 && !p.endsWith("/")) p += "/";
    return p;
  }

  function localeFromPath(p) {
    if (p === "/en/" || p.indexOf("/en/") === 0) return "en";
    if (p === "/es/" || p.indexOf("/es/") === 0) return "es";
    if (p === "/pt/" || p.indexOf("/pt/") === 0) return "pt";
    return "pt";
  }

  function pairFor(map, p) {
    var pairs = (map && map.pairs) || [];
    for (var i = 0; i < pairs.length; i++) {
      var row = pairs[i];
      if (norm(row.pt) === p || norm(row.en) === p || norm(row.es || "") === p) return row;
    }
    if (p.indexOf("/en/") === 0) return { pt: "/", en: p, es: "/es/" };
    if (p.indexOf("/es/") === 0) return { pt: "/", en: "/en/", es: p };
    return { pt: p, en: "/en/", es: "/es/" };
  }

  function ensureStyle() {
    if (document.getElementById("zion-i18n-css")) return;
    var s = document.createElement("style");
    s.id = "zion-i18n-css";
    s.textContent = ".langsw{display:inline-flex;gap:6px;margin-left:8px;font-size:.85rem;align-items:center}.langsw a{padding:4px 8px;border-radius:8px;border:1px solid #2a3654;color:#c5d0e8;text-decoration:none}.langsw a[aria-current=\"true\"]{background:#1a2440;color:#fff;border-color:#8b5cf6}";
    document.head.appendChild(s);
  }

  function addLink(hl, href) {
    if (document.querySelector('link[rel="alternate"][hreflang="' + hl + '"]')) return;
    var l = document.createElement("link");
    l.rel = "alternate";
    l.hreflang = hl;
    l.href = href.indexOf("http") === 0 ? href : ("https://ziontechgroup.com" + href);
    document.head.appendChild(l);
  }

  function injectSwitcher(pair, current) {
    ensureStyle();
    if (document.querySelector(".langsw")) return;
    var nav = document.querySelector("header.nav nav.links") || document.querySelector("nav.links") || document.querySelector("header.nav .navin");
    if (!nav) return;
    var span = document.createElement("span");
    span.className = "langsw";
    span.setAttribute("aria-label", "Language");
    ["pt", "en", "es"].forEach(function (code) {
      var a = document.createElement("a");
      var href = pair[code] || (code === "en" ? "/en/" : code === "es" ? "/es/" : "/");
      a.href = href;
      a.textContent = code.toUpperCase();
      if (code === current) a.setAttribute("aria-current", "true");
      a.addEventListener("click", function () {
        try { localStorage.setItem(STORE, code); } catch (e) {}
      });
      span.appendChild(a);
    });
    nav.appendChild(span);
  }

  function apply(map) {
    var path = norm(location.pathname);
    var current = localeFromPath(path);
    var pair = pairFor(map, path);
    addLink("pt-BR", pair.pt || "/");
    addLink("en", pair.en || "/en/");
    addLink("es", pair.es || "/es/");
    addLink("x-default", "/");
    injectSwitcher(pair, current);
    window.ZionI18n = { locale: current, pair: pair, path: path };
  }

  function boot() {
    fetch(MAP_URL, { credentials: "same-origin" })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(apply)
      .catch(function () { apply({ pairs: [{ pt: "/", en: "/en/", es: "/es/" }] }); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
