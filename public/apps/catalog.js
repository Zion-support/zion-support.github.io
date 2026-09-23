fetch('/apps/catalog.json').then(function(r){return r.json()}).then(function(d){window.ZION_APP_CATALOG=d;document.dispatchEvent(new Event('zion-catalog-ready'))});
