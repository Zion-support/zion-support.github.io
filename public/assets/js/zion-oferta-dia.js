(function(){
  var SKUS=[
    {id:"discovery",title:"Discovery $99",price:"$99",desc:"Um processo, mapa e relatorio em ate 7 dias. O recorte que cabe nesta semana.",href:"/discovery/",wa:"Ola Kleber, quero o Discovery $99 — vim de /oferta/"},
    {id:"consulting",title:"Consulting $499",price:"$499",desc:"Estrategia, roadmap e 3 sessoes de 1h. Quando o diagnostico ja existe.",href:"https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1",wa:"Ola Kleber, quero Consulting $499 — vim de /oferta/"},
    {id:"starter",title:"Starter $2.500",price:"$2.500",desc:"1 automacao completa + suporte 30 dias. Pague o recorte, nao o projeto eterno.",href:"/comece/",wa:"Ola Kleber, quero Starter $2.500 — vim de /oferta/"},
    {id:"growth",title:"Growth $8.000/mes",price:"$8.000/mes",desc:"Operacao continua com SLA. Catalogo oficial em /plans/.",href:"/plans/",wa:"Ola Kleber, quero Growth $8.000/mes — vim de /oferta/"},
    {id:"field-br",title:"Field Services Brasil",price:"SKU USD",desc:"Onsite NBD, T&M e FTE no rate card. Nao e Discovery — e tecnico no local.",href:"/field-services/brazil/",wa:"Ola Kleber, quero field service onsite no Brasil — vim de /oferta/"},
    {id:"telegram",title:"Bot Telegram empresas",price:"Discovery $99",desc:"Origin-chat. Responde so no chat que enviou. Nao e lista fria.",href:"/bot-telegram-empresas/",wa:"Ola Kleber, quero o bot Telegram origin-chat — vim de /oferta/"},
    {id:"whatsapp",title:"WhatsApp empresas",price:"Discovery $99",desc:"Fila de atendimento no WhatsApp. Pagina /whatsapp/ e automacao no ar.",href:"/automacao-whatsapp-empresas/",wa:"Ola Kleber, quero automacao WhatsApp — vim de /oferta/"}
  ];
  function dayIndex(){
    var t=new Date();
    var utc=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());
    return Math.floor(utc/86400000) % SKUS.length;
  }
  function wa(text){
    return "https://wa.me/13024640950?text="+encodeURIComponent(text);
  }
  function paint(host, sku){
    if(!host||!sku) return;
    host.innerHTML=
      '<p class="eyebrow">Oferta do dia · UTC</p>'+
      '<h2>'+sku.title+'</h2>'+
      '<p class="lead">'+sku.desc+'</p>'+
      '<p class="price">'+sku.price+'</p>'+
      '<div class="actions">'+
      '<a class="btn" href="'+sku.href+'">Abrir oferta</a>'+
      '<a class="btn alt" href="'+wa(sku.wa)+'">WhatsApp deste SKU</a>'+
      '<a class="btn alt" href="/discovery/">Discovery $99</a>'+
      '</div>'+
      '<p class="muted">Rotaciona 1x por dia (UTC). Precos oficiais: <a href="/precos/">/precos/</a> · <a href="/plans/">/plans/</a> · high-end <a href="/offers/">/offers/</a>.</p>';
    host.setAttribute("data-sku", sku.id);
  }
  function run(){
    var sku=SKUS[dayIndex()];
    var host=document.getElementById("oferta-do-dia");
    if(host) paint(host, sku);
    var label=document.getElementById("oferta-hoje-label");
    if(label) label.textContent=sku.title;
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", run);
  else run();
  window.ZionOfertaDia={skus:SKUS,today:function(){return SKUS[dayIndex()];}};
})();
