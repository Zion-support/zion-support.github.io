(function () {
  'use strict';
  var button = document.getElementById('home-menu-toggle');
  var menu = document.getElementById('home-primary-links');
  if (!button || !menu) return;
  var mobile = window.matchMedia('(max-width: 800px)');
  function setOpen(open) {
    menu.hidden = mobile.matches && !open;
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close menu' : 'Menu';
  }
  function sync() { button.hidden = !mobile.matches; setOpen(!mobile.matches); }
  button.addEventListener('click', function () { setOpen(button.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobile.matches && !menu.hidden) { setOpen(false); button.focus(); }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !event.altKey) {
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName) || event.target.isContentEditable) return;
      event.preventDefault(); window.location.assign('/search/');
    }
  });
  menu.addEventListener('click', function (event) { if (mobile.matches && event.target.closest('a')) setOpen(false); });
  mobile.addEventListener('change', sync);
  sync();
})();
