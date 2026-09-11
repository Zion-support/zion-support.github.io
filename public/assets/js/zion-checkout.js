/* Zion self-serve checkout + affiliate tracking. No PII. */
(function () {
  var KEY = "zion_ref";
  var MAX_AGE = 60 * 60 * 24 * 60;

  function clean(v) {
    return String(v || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);
  }

  function setRef(v) {
    v = clean(v);
    if (!v) return;
    try { localStorage.setItem(KEY, v); } catch (e) {}
    document.cookie = KEY + "=" + encodeURIComponent(v) + ";path=/;max-age=" + MAX_AGE + ";SameSite=Lax";
  }

  function getRef() {
    try {
      var ls = clean(localStorage.getItem(KEY) || "");
      if (ls) return ls;
    } catch (e) {}
    var m = document.cookie.match(/(?:^|; )zion_ref=([^;]*)/);
    return m ? clean(decodeURIComponent(m[1])) : "";
  }

  var params = new URLSearchParams(location.search);
  var incoming = params.get("ref") || params.get("via") || params.get("affiliate");
  if (incoming) setRef(incoming);

  function decorate(href) {
    if (!href || href.indexOf("buy.stripe.com") === -1) return href;
    var r = getRef();
    try {
      var u = new URL(href, location.origin);
      if (r && !u.searchParams.get("client_reference_id")) {
        u.searchParams.set("client_reference_id", "ref_" + r);
      }
      if (r) {
        u.searchParams.set("utm_source", "affiliate");
        u.searchParams.set("utm_content", r);
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest("a");
    if (!a || !a.href) return;
    if (a.href.indexOf("buy.stripe.com") !== -1) a.href = decorate(a.href);
  }, true);

  window.ZionCheckout = {
    getRef: getRef,
    setRef: setRef,
    decorate: decorate,
    promo: "ZIONLAUNCH10"
  };
})();
