'use strict';
// Required route table preserved from render-linked-app-routes.cjs at
// 5ca26acd76dcc621c8f3f220f05df975dd237614. Validation must not import or run a renderer.
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const routes = locales.flatMap(locale => {
  const prefix = locale === 'en' ? '' : locale + '/';
  return [
    {locale, path: 'apps/discovery-showcase' + (locale === 'en' ? '' : '-' + locale) + '.html'},
    {locale, path: prefix + 'apps/field-ticket-types.html'},
    {locale, path: prefix + 'apps/discovery-first-win-guide.html'},
    {locale, path: prefix + 'apps/field-services-smart-hands-playbook.html'},
    {locale, path: prefix + 'apps/ai-it-ops-command-center.html'},
  ];
});
module.exports = {locales, routes};
