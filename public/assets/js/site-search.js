/* Search is browser-local. The full directory remains usable without JavaScript. */
(function () {
  'use strict';
  var form = document.querySelector('.search-form');
  if (!form) return;
  var input = document.getElementById('site-query');
  var category = document.getElementById('site-category');
  var count = document.getElementById('results-count');
  var empty = document.getElementById('no-results');
  function normalize(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  var rows = Array.from(document.querySelectorAll('#search-results .result')).map(function (node) {
    return { node: node, text: normalize(node.textContent), category: node.dataset.category };
  });
  function filter(updateUrl) {
    var words = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    var visible = 0;
    rows.forEach(function (row) {
      var match = (!category.value || category.value === row.category) && words.every(function (word) { return row.text.includes(word); });
      row.node.hidden = !match;
      if (match) visible++;
    });
    count.textContent = visible + (visible === 1 ? ' page found' : ' pages found');
    empty.hidden = visible !== 0;
    if (updateUrl) {
      var url = new URL(location.href);
      if (input.value.trim()) url.searchParams.set('q', input.value.trim()); else url.searchParams.delete('q');
      if (category.value) url.searchParams.set('category', category.value); else url.searchParams.delete('category');
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  }
  function restore() {
    var params = new URLSearchParams(location.search);
    input.value = params.get('q') || '';
    category.value = params.get('category') || '';
    filter(false);
  }
  form.addEventListener('submit', function (event) { event.preventDefault(); filter(true); });
  input.addEventListener('input', function () { filter(true); });
  category.addEventListener('change', function () { filter(true); });
  form.addEventListener('reset', function (event) { event.preventDefault(); input.value = ''; category.value = ''; filter(true); input.focus(); });
  window.addEventListener('popstate', restore);
  restore();
})();
