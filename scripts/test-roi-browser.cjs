'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
async function main() {
  const root = path.resolve(process.argv[2] || 'out');
  const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
  const server = http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://localhost');
      let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
      if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
      if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
      const bytes = await fs.readFile(file);
      response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(bytes);
    } catch { response.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    let cases = 0;
    for (const locale of ['en', 'pt', 'es', 'fr', 'de']) {
      const prefix = locale === 'en' ? '/' : '/' + locale + '/';
      for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
        const context = await browser.newContext({ viewport });
        try {
          const external = [], errors = [];
          await context.route('**/*', route => {
            if (new URL(route.request().url()).origin !== origin) { external.push(route.request().url()); return route.abort(); }
            return route.continue();
          });
          const page = await context.newPage();
          page.on('pageerror', error => errors.push(error.message));
          const response = await page.goto(origin + prefix + 'roi-calc/', { waitUntil: 'networkidle' });
          assert.equal(response.status(), 200);
          assert.equal(await page.locator('html').getAttribute('lang'), locale === 'pt' ? 'pt-BR' : locale);
          assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://ziontechgroup.com' + prefix + 'roi-calc/');
          assert.equal(await page.locator('link[rel=alternate]').count(), 6);
          assert.equal(await page.locator('h1').count(), 1);
          assert.equal(await page.locator('#roi-calculate').isEnabled(), true);
          const metrics = () => page.locator('#ops-result').evaluate(element => element.dataset.metrics ? JSON.parse(element.dataset.metrics) : null);
          assert.deepEqual(await metrics(), { monthly: 1800, yearly: 21600 });
          const copy = await page.locator('#ops-copy').evaluate(element => JSON.parse(element.textContent));
          const formatted = new Intl.NumberFormat(copy.locale, { style: 'currency', currency: 'USD' }).format(1800);
          assert((await page.locator('#ops-result').innerText()).includes(formatted));
          await page.locator('#hours').fill('80');
          assert.equal(await metrics(), null);
          assert.equal(await page.locator('#ops-result').getAttribute('data-pending'), 'true');
          await page.locator('#hours').press('Enter');
          assert.deepEqual(await metrics(), { monthly: 3600, yearly: 43200 });
          await page.locator('#hours').fill('-1');
          await page.locator('#roi-calculate').click();
          assert.equal(await metrics(), null);
          assert.equal(await page.locator('#hours').getAttribute('aria-invalid'), 'true');
          assert.equal(await page.locator('#ops-error').innerText(), copy.error);
          await page.locator('#hours').fill('0');
          await page.locator('#rate').fill('0');
          await page.locator('#roi-calculate').click();
          assert.deepEqual(await metrics(), { monthly: 0, yearly: 0 });
          assert.equal(await page.locator('#ops-error').innerText(), '');
          for (const destination of ['apps/', 'discovery/', 'apps/operational-planning-tools.html', 'apps/finops-scenario-estimator.html', 'apps/finops-pilot-guide.html', 'apps/network.html', 'apps/app-verification-guide.html']) {
            assert(await page.locator('a[href="' + prefix + destination + '"]').count() > 0);
          }
          for (const language of ['en', 'pt', 'es', 'fr', 'de']) {
            const target = (language === 'en' ? '/' : '/' + language + '/') + 'roi-calc/';
            assert(await page.locator('a[hreflang][href="' + target + '"]').count() > 0);
          }
          assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Horizontal overflow: ' + locale);
          assert.deepEqual(errors, []);
          assert.deepEqual(external, []);
          cases++;
        } finally { await context.close(); }
      }
    }
    console.log('PASS Chromium ROI: ' + cases + ' locale/viewport cases; arithmetic, localized output, keyboard submission, pending/error recovery, navigation, canonical metadata, no horizontal overflow or external requests.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
