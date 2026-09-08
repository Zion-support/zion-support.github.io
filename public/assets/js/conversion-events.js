/* Zion conversion beacons — no PII */
(function(){
  var p=location.pathname||'/';
  function ping(ev,extra){
    try{
      if(window.gtag){gtag('event',ev,Object.assign({page_path:p},extra||{}));}
      if(navigator.sendBeacon){
        navigator.sendBeacon('/assets/js/conversion-events.js?e='+encodeURIComponent(ev)+'&p='+encodeURIComponent(p));
      }
    }catch(e){}
  }
  ping('page_view');
  document.addEventListener('click',function(ev){
    var a=ev.target.closest&&ev.target.closest('a');
    if(!a||!a.href)return;
    var h=a.href;
    if(h.indexOf('buy.stripe.com')!==-1) ping('cta_stripe');
    else if(h.indexOf('calendly.com')!==-1) ping('cta_calendly');
    else if(h.indexOf('wa.me')!==-1) ping('cta_whatsapp');
  });
})();
