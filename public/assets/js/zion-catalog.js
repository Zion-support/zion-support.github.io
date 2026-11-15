(function () {
  "use strict";

  // Public, static, first-party navigation. Do not introduce historical prices or promises.
  var ITEMS = Object.freeze([
    {cat: "servico", name: "Free Discovery", href: "/discovery/", desc: "Questionario online gratuito para iniciar uma conversa sobre IA e TI."},
    {cat: "servico", name: "Suporte e Field Engineers", href: "/services/", desc: "Servicos tecnicos e manutencao de infraestrutura de TI."},
    {cat: "servico", name: "Agentes Telegram", href: "/telegram/", desc: "Conheca as opcoes de assistencia da Zion no Telegram."},
    {cat: "servico", name: "Consultoria e FinOps", href: "/finops-consulting/", desc: "Planejamento e revisao de custos de nuvem."},
    {cat: "ferramenta", name: "Estimador FinOps", href: "/finops-consulting/", desc: "Entenda as premissas antes de estimar oportunidades."},
    {cat: "ferramenta", name: "Zion Apps Network", href: "/apps/", desc: "Explore aplicativos e recursos gratuitos da Zion."},
    {cat: "conteudo", name: "Academia", href: "/academy/", desc: "Guias e materiais de aprendizado."},
    {cat: "conteudo", name: "Blog", href: "/blog/", desc: "Conteudos de tecnologia e operacoes."},
    {cat: "empresa", name: "Contato", href: "/contact/", desc: "Entre em contato pelos canais oficiais."}
  ]);

  function element(tag, text) {
    var node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderCatalog() {
    var grid = document.getElementById("catalog-grid");
    if (!grid) return;
    var search = document.getElementById("catalog-q");
    var category = document.getElementById("catalog-cat");
    var empty = document.getElementById("catalog-empty");
    var term = ((search && search.value) || "").toLowerCase().trim();
    var selected = (category && category.value) || "";

    grid.replaceChildren();
    var shown = 0;
    ITEMS.forEach(function (item) {
      if (selected && selected !== item.cat) return;
      var combined = [item.name, item.desc, item.cat].join(" ").toLowerCase();
      if (term && combined.indexOf(term) === -1) return;
      var card = element("article");
      card.className = "card";
      var label = element("p", item.cat);
      label.className = "eyebrow";
      var title = element("h3", item.name);
      var description = element("p", item.desc);
      var linkBox = element("p");
      var link = element("a", "Abrir recurso");
      link.href = item.href;
      linkBox.appendChild(link);
      card.appendChild(label);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(linkBox);
      grid.appendChild(card);
      shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }

  function initCatalog() {
    var grid = document.getElementById("catalog-grid");
    if (!grid) return;
    var search = document.getElementById("catalog-q");
    var category = document.getElementById("catalog-cat");
    var chips = document.getElementById("catalog-chips");

    if (category && category.options.length < 2) {
      ["plano", "servico", "ferramenta", "conteudo", "empresa"].forEach(function (cat) {
        if (!ITEMS.some(function (item) { return item.cat === cat; })) return;
        var option = element("option", cat);
        option.value = cat;
        category.appendChild(option);
      });
    }
    if (chips && !chips.children.length) {
      ["", "servico", "ferramenta", "conteudo", "empresa"].forEach(function (cat) {
        var chip = element("button", cat || "todos");
        chip.type = "button";
        chip.className = "chip" + (cat ? "" : " on");
        chip.setAttribute("data-cat", cat);
        chip.addEventListener("click", function () {
          if (category) category.value = cat;
          chips.querySelectorAll("[data-cat]").forEach(function (node) {
            node.classList.toggle("on", node === chip);
          });
          renderCatalog();
        });
        chips.appendChild(chip);
      });
    }
    if (search) search.addEventListener("input", renderCatalog);
    if (category) category.addEventListener("change", renderCatalog);
    renderCatalog();
  }

  function numericField(form, text, name, value, max) {
    var label = element("label", text + " ");
    var input = element("input");
    input.type = "number";
    input.name = name;
    input.min = "0";
    input.max = String(max);
    input.step = "any";
    input.value = String(value);
    label.appendChild(input);
    form.appendChild(label);
    return input;
  }

  function ensureFinops() {
    var host = document.getElementById("finops-estimator");
    var form = document.getElementById("finops-form");
    var output = document.getElementById("finops-out");

    // No global auto-injection: enable the calculator only on an explicitly opted-in host.
    if (!host && !(form && output)) return;
    if (!form) {
      form = element("form");
      form.id = "finops-form";
      form.className = "diag";
      form.appendChild(element("p", "Cenario ilustrativo. Informe suas premissas, sem enviar dados."));
      numericField(form, "Gasto mensal de nuvem (USD)", "spend", 0, 100000000);
      numericField(form, "Percentual potencialmente ocioso", "idle", 0, 100);
      numericField(form, "Horas mensais de revisao", "hours", 0, 10000);
      numericField(form, "Custo por hora (USD)", "rate", 0, 100000);
      host.appendChild(form);
    }
    if (!output) {
      output = element("output");
      output.id = "finops-out";
      output.setAttribute("aria-live", "polite");
      host.appendChild(output);
    }
    function calculate() {
      var data = new FormData(form);
      function bounded(key, maximum) {
        var n = Number(data.get(key));
        if (!Number.isFinite(n)) return 0;
        return Math.min(Math.max(n, 0), maximum);
      }
      var spend = bounded("spend", 100000000);
      var idle = bounded("idle", 100) / 100;
      var hours = bounded("hours", 10000);
      var rate = bounded("rate", 100000);
      var estimate = 12 * (spend * idle + hours * rate);
      output.textContent = "Cenario anual ilustrativo: USD " +
        Math.round(estimate).toLocaleString("en-US") +
        ". Valor calculado sobre premissas informadas, nao representa economia comprovada ou garantida.";
    }
    form.addEventListener("input", calculate);
    form.addEventListener("change", calculate);
    calculate();
  }

  function start() {
    initCatalog();
    ensureFinops();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, {once: true});
  else start();
})();
