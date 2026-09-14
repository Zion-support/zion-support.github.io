(function () {
  "use strict";

  var WA = "https://wa.me/13024640950";
  var SKUS = [
    {
      id: "discovery",
      name: "Discovery",
      price: "$99",
      href: "/discovery/",
      blurb: "Diagnóstico de 1 processo, relatório executivo e sessão de 30 min."
    },
    {
      id: "consulting",
      name: "Consulting",
      price: "$499",
      href: "/plans/",
      blurb: "Sessão de arquitetura e próximos passos de automação / FinOps."
    },
    {
      id: "starter",
      name: "Starter",
      price: "$2.500",
      href: "/plans/",
      blurb: "Primeira fatia em produção: agente, automação ou Micro-SaaS."
    },
    {
      id: "growth",
      name: "Growth",
      price: "$8.000/mês",
      href: "/plans/",
      blurb: "Retainer: agentes, Cloud/FinOps e operação com escopo escrito."
    },
    {
      id: "field-brazil",
      name: "Field Brazil",
      price: "sob consulta",
      href: "/field-services/",
      blurb: "Serviço em campo no Brasil — onsite alinhado ao menu oficial."
    },
    {
      id: "bot-telegram-empresas",
      name: "Bot Telegram empresas",
      price: "sob consulta",
      href: "/telegram/",
      blurb: "Agente de atendimento no Telegram, no chat de origem da empresa."
    },
    {
      id: "whatsapp-empresas",
      name: "WhatsApp empresas",
      price: "sob consulta",
      href: "/whatsapp/",
      blurb: "Canal WhatsApp comercial da Zion Tech Group para o mesmo menu."
    }
  ];

  function utcDayIndex() {
    var now = new Date();
    var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor(utc / 86400000) % SKUS.length;
  }

  function waHref(sku) {
    var text = encodeURIComponent(
      "Olá, Zion Tech Group. Quero a oferta do dia: " + sku.name + " (" + sku.price + ")."
    );
    return WA + "?text=" + text;
  }

  function paint(root) {
    if (!root) return;
    var sku = SKUS[utcDayIndex()];
    root.setAttribute("data-sku", sku.id);
    root.innerHTML =
      "<p class=\"oferta-kicker\">Oferta do dia (UTC)</p>" +
      "<h2>" + sku.name + "</h2>" +
      "<p class=\"price\">" + sku.price + "</p>" +
      "<p>" + sku.blurb + "</p>" +
      "<p class=\"cta\">" +
      "<a class=\"btn\" href=\"" + sku.href + "\">Ver " + sku.name + "</a> " +
      "<a class=\"btn alt\" href=\"" + waHref(sku) + "\" rel=\"noopener noreferrer\">WhatsApp</a>" +
      "</p>";
  }

  function init() {
    paint(document.getElementById("oferta-do-dia"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
