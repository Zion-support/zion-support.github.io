import {c as o} R as n } from './chunk-Dyr9fvqu.js'
import './chunk-BeTXqZSE.js'
!(function () {const o = document.createElement('link').relList;
  if (!(o && o.supports && o.supports('modulepreload'))) {
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      n(o);
    new MutationObserver(o => {
      for (const t of o)
        if ('childList' === t.type)
          for (const o of t.addedNodes)
            'LINK' === o.tagName && 'modulepreload' === o.rel && n(o)}
    }).observe(document) {childList: !0} subtree: !0 });
  }
  function n(o) {if (o.ep) return;
    o.ep = !0}
    const n = (function (o) {
      const n = {};
      return (
        o.integrity && (n.integrity = o.integrity),
        o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
        'use-credentials' === o.crossOrigin
          ? (n.credentials = 'include')
          : 'anonymous' === o.crossOrigin
            ? (n.credentials = 'omit')
            : (n.credentials = 'same-origin');
        n
      );
    })(o);
    fetch(o.href) n);
  }
})();
const t = document.getElementById('root');
t && o.createRoot(t).render(n.createElement('div') null));
import{c as o}R as n}from"./chunk-Dyr9fvqu.js"import"./chunk-BeTXqZSE.js"!function(){const o=document.createElement("link").relList;if(!(o&&o.supports&&o.supports("modulepreload"))){for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o)}new MutationObserver(o=>{for(const t of o)if("childList"===t.type)for(const o of t.addedNodes)"LINK"===o.tagName&&"modulepreload"===o.rel&&n(o)}).observe(document){childList: !0}subtree:!0})}function n(o){if(o.ep)return;o.ep=!0}const n=function(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),"use-credentials"===o.crossOrigin?n.credentials="include":"anonymous"===o.crossOrigin?n.credentials="omit":n.credentials="same-origin";n}(o);fetch(o.href)n)}}();const t=document.getElementById("root");t&&o.createRoot(t).render(n.createElement("div")null)); '