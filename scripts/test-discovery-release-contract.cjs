'use strict';
// Fail closed on the published Discovery/contact surfaces. No network or email.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const PAGES = [
  ['discovery/index.html', 'en', '/discovery/'],
  ['pt/discovery/index.html', 'pt-BR', '/pt/discovery/'],
  ['es/discovery/index.html', 'es', '/es/discovery/'],
  ['fr/discovery/index.html', 'fr', '/fr/discovery/'],
  ['de/discovery/index.html', 'de', '/de/discovery/'],
];
const FILES = [...PAGES.map(([file]) => file), 'assets/js/discovery-delivery.js', 'assets/css/discovery.css', 'assets/js/zion-shell.js', 'contact/index.html'];

function validate(root = path.resolve(__dirname, '../public')) {
  let checks = 0;
  const check = (value, message) => { assert.ok(value, message); checks++; };
  function read(file) {
    const filename = path.join(root, file);
    check(fs.existsSync(filename), `Missing published ${file}`);
    check(fs.lstatSync(filename).isFile(), `Published ${file} must be a regular file`);
    return fs.readFileSync(filename, 'utf8');
  }
  for (const [file, language, route] of PAGES) {
    const html = read(file);
    check(html.includes(`<html lang="${language}">`), `${file}: wrong language`);
    check(html.includes(`<link rel="canonical" href="https://ziontechgroup.com${route}">`), `${file}: wrong canonical`);
    check(/<form\b[^>]*id="dform"[^>]*method="post"[^>]*>/i.test(html), `${file}: missing POST questionnaire`);
    check(/<fieldset\b[^>]*id="discovery-inputs"[^>]*\bdisabled\b/i.test(html), `${file}: missing static disabled controls`);
    check(/event\.preventDefault\(\)/.test(html), `${file}: missing native-submit guard`);
    check(/fields\.disabled\s*=\s*false/.test(html), `${file}: guard never enables controls`);
    check(html.includes('<script defer src="/assets/js/discovery-delivery.js"></script>'), `${file}: missing report application`);
    check(html.includes('href="/assets/css/discovery.css"'), `${file}: missing stylesheet`);
    check(html.includes('mailto:commercial@ziontechgroup.com'), `${file}: missing no-JS contact`);
    for (const id of ['name', 'email', 'process', 'hours', 'submit-report', 'result', 'report-text', 'copy-report', 'download-report', 'rsent', 'form-errors', 'rscore', 'rbar', 'rsummary', 'rapps', 'rnext', 'email-fallback']) {
      check(html.includes(`id="${id}"`), `${file}: missing ${id}`);
    }
    check(/<input\b[^>]*id="email"[^>]*type="email"/i.test(html), `${file}: email validation missing`);
    check(!/buy\.stripe\.com|Discovery\s*\$99|temporarily unavailable|coming soon|http-equiv=["']refresh/i.test(html), `${file}: paid or placeholder Discovery`);
  }
  const js = read('assets/js/discovery-delivery.js');
  new vm.Script(js, { filename: 'discovery-delivery.js' }); checks++;
  check(js.includes("fetch('https://formsubmit.co/ajax/commercial@ziontechgroup.com'"), 'Wrong delivery recipient');
  check(js.includes('_cc:cc') && js.includes('_replyto:f.email'), 'Client copy routing missing');
  check(!js.includes('_autoresponse'), 'Unsupported FormSubmit autoresponse');
  check(js.includes('r.ok') && js.includes('j.success'), 'Provider acceptance must check HTTP and JSON');
  check(js.includes('acceptedReports') && js.includes('uncertainReports') && js.includes('discoveryPending'), 'Duplicate guards missing');
  check(js.includes('AbortController') && js.includes('15000'), 'Bounded delivery confirmation missing');
  check(js.includes('Inbox delivery is not yet confirmed'), 'Honest delivery status missing');
  check(!/Results sent!|guaranteed delivery/i.test(js), 'Unsupported delivery claim');
  const css = read('assets/css/discovery.css');
  check(css.includes('#result') && css.includes('display:none'), 'Report visibility stylesheet missing');
  const shell = read('assets/js/zion-shell.js');
  check(!/Discovery\s*\$99|Discovery\s*R\$99/.test(shell), 'Shared navigation reintroduces paid Discovery');
  const contact = read('contact/index.html');
  check(contact.includes('href="mailto:commercial@ziontechgroup.com"'), 'Contact address missing');
  check(contact.includes('href="/discovery/"'), 'Contact questionnaire route missing');
  check(!/temporarily unavailable|coming soon|http-equiv=["']refresh/i.test(contact), 'Contact is a placeholder');
  return checks;
}

if (require.main === module) {
  const root = process.argv[2] ? path.resolve(process.argv[2]) : undefined;
  try { console.log(`Discovery release contract: ${validate(root)} checks passed`); }
  catch (error) { console.error(`Discovery release contract FAILED: ${error.message}`); process.exitCode = 1; }
}
module.exports = { validate, FILES };
