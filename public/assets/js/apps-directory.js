(function () {
  'use strict';
  function normalize(value) {
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
  }
  function matches(text, query, category, selected) {
    return (selected === 'all' || category === selected) && normalize(query).split(/\s+/).filter(Boolean).every(term => normalize(text).includes(term));
  }
  function init() {
    const controls=document.getElementById('catalog-controls');
    if (!controls) return;
    const input=document.getElementById('catalog-search'),clear=document.getElementById('catalog-clear');
    const count=document.getElementById('resource-count'),empty=document.getElementById('catalog-empty');
    const buttons=Array.from(controls.querySelectorAll('[data-filter]'));
    const cards=Array.from(document.querySelectorAll('[data-resource]')).map(node=>({node,text:node.textContent,category:node.dataset.category}));
    const params=new URLSearchParams(window.location.search);
    let selected=buttons.some(b=>b.dataset.filter===params.get('category'))?params.get('category'):'all';
    input.value=(params.get('q')||'').slice(0,200);
    function update(persist) {
      let visible=0;
      cards.forEach(card=>{const show=matches(card.text,input.value,card.category,selected);card.node.hidden=!show;if(show)visible++;});
      count.textContent=count.dataset.pattern.replace('{count}',String(visible)).replace('{total}',String(cards.length));
      empty.hidden=visible!==0;
      buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===selected)));
      const url=new URL(window.location.href);
      if(input.value.trim())url.searchParams.set('q',input.value.trim());else url.searchParams.delete('q');
      if(selected!=='all')url.searchParams.set('category',selected);else url.searchParams.delete('category');
      if(persist){try{window.history.replaceState(null,'',url);}catch(_error){/* Browsing remains functional without history access. */}}
      document.querySelectorAll('[data-catalog-language]').forEach(anchor=>{const dest=new URL(anchor.getAttribute('href'),window.location.href);dest.search=url.search;anchor.setAttribute('href',dest.pathname+dest.search);});
    }
    input.addEventListener('input',()=>update(true));
    buttons.forEach(button=>button.addEventListener('click',()=>{selected=button.dataset.filter;update(true);}));
    clear.addEventListener('click',()=>{input.value='';selected='all';update(true);input.focus();});
    controls.hidden=false;
    update(false);
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={normalize,matches};
  if(typeof document!=='undefined')init();
}());
