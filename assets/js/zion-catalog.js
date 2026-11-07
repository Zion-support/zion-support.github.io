// Zion Catálogo vivo — interactive helpers (Discovery $99 entry, Agentes Telegram, Estimador FinOps)
(function () {
  "use strict";
  var CATALOG = [
    { name: "Discovery $99", href: "/discovery/", tag: "Entrada" },
    { name: "Consulting $499", href: "/plans/", tag: "Estratégia" },
    { name: "Agentes Telegram", href: "/telegram/", tag: "Automação" },
    { name: "Estimador FinOps", href: "/finops-consulting/", tag: "FinOps" }
  ];
  function ensureFinops() {
    var form = document.getElementById("finops-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var spend = parseFloat(document.getElementById("finops-spend").value || "0");
      var saving = Math.round(spend * 0.25);
      var out = document.getElementById("finops-result");
      if (out) {
        out.textContent = spend > 0
          ? "Estimativa: até US$ " + saving.toLocaleString("pt-BR") + "/mês de economia potencial. Fale conosco no Discovery $99."
          : "Informe o gasto mensal para estimar.";
      }
    });
  }
  function renderCatalog() {
    var host = document.getElementById("zion-catalog");
    if (!host) return;
    host.innerHTML = CATALOG.map(function (i) {
      return '<a class="cta-secondary" href="' + i.href + '">' + i.name + "</a>";
    }).join(" ");
  }
  document.addEventListener("DOMContentLoaded", function () {
    ensureFinops();
    renderCatalog();
  });
  window.zionCatalog = { ensureFinops: ensureFinops, renderCatalog: renderCatalog, CATALOG: CATALOG };
})();
