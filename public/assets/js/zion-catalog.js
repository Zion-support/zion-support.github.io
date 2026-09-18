/* Official paid menu only. Money URLs: /discovery/ and /en/plans/ (PT flush: /plans/). */
(function () {
  var ITEMS = [
    { cat: "plano", title: "Discovery $99", desc: "One process mapped in up to 7 days.", href: "/discovery/" },
    { cat: "plano", title: "Consulting $499", desc: "Strategy, roadmap, three 1h sessions.", href: "/en/plans/" },
    { cat: "plano", title: "Starter $2,500", desc: "One automation plus 30 days.", href: "/en/plans/" },
    { cat: "plano", title: "Growth $8,000/mo", desc: "Ongoing automations with an owner on the invoice.", href: "/en/plans/" }
  ];
  window.ZION_CATALOG = ITEMS;

  var grid = document.getElementById("catalog-grid");
  if (!grid) return;

  var q = document.getElementById("catalog-q");
  var sel = document.getElementById("catalog-cat");
  var empty = document.getElementById("catalog-empty");

  function render() {
    var query = ((q && q.value) || "").toLowerCase();
    var cat = (sel && sel.value) || "";
    grid.innerHTML = "";
    var n = 0;
    ITEMS.forEach(function (it) {
      var hay = (it.title + " " + it.desc + " " + it.cat).toLowerCase();
      if (cat && it.cat !== cat) return;
      if (query && hay.indexOf(query) === -1) return;
      var art = document.createElement("article");
      art.className = "card";
      art.innerHTML = "<p class=\"eyebrow\">" + it.cat + "</p><h3>" + it.title + "</h3><p>" + it.desc + "</p><p><a href=\"" + it.href + "\">Open \u2192</a></p>";
      grid.appendChild(art);
      n += 1;
    });
    if (empty) empty.hidden = n > 0;
  }

  if (q) q.addEventListener("input", render);
  if (sel) sel.addEventListener("change", render);
  render();
})();
