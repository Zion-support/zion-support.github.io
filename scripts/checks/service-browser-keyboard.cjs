#!/usr/bin/env node
// Focused browser regression: actual component/React, native Chromium keyboard events.
// next/link is replaced only at the navigation boundary; this is not a Next build test.
const assert = require('node:assert/strict');
const path = require('node:path');
const { build } = require('esbuild');
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

async function main() {
  const component = path.resolve(process.argv[2] || 'app/components/ServiceBrowser.tsx');
  const services = ['cloud', 'security'].flatMap(category => Array.from({length: 10}, (_, i) => ({
    id: category + i, title: category + ' service ' + i, description: 'Test service',
    href: '/services/' + category + i, category, industry: 'general',
  })));
  const result = await build({
    stdin: {contents: `
      import React from 'react';
      import {createRoot} from 'react-dom/client';
      import ServiceBrowser from ${JSON.stringify(component)};
      globalThis.fetch = async () => ({ok: true, json: async () => ({services: ${JSON.stringify(services)}})});
      createRoot(document.getElementById('fixture')).render(<><ServiceBrowser /><ServiceBrowser /></>);
    `, loader: 'tsx', resolveDir: process.cwd()},
    bundle: true, write: false, platform: 'browser', format: 'iife', jsx: 'automatic',
    define: {'process.env.NODE_ENV': '"test"'},
    plugins: [{name: 'navigation-boundary', setup(bundler) {
      bundler.onResolve({filter: /^next\/link$/}, () => ({path: 'link', namespace: 'fixture'}));
      bundler.onLoad({filter: /.*/, namespace: 'fixture'}, () => ({
        contents: "import React from 'react'; export default function Link({children,...props}) { return React.createElement('a',props,children); }",
        loader: 'js', resolveDir: process.cwd(),
      }));
    }}],
  });
  const browser = await chromium.launch({headless: true});
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    page.setDefaultTimeout(5000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setContent('<!doctype html><html lang="en"><head><title>Service browser keyboard regression</title></head><body><main><form id="fixture"></form></main></body></html>');
    await page.evaluate(() => {
      window.fixtureSubmits = 0;
      document.querySelector('form').addEventListener('submit', event => {event.preventDefault(); window.fixtureSubmits++;});
    });
    await page.addScriptTag({content: result.outputFiles[0].text});
    const cloud = page.getByRole('button', {name: 'Cloud & DevOps', exact: true}).first();
    await cloud.waitFor();
    assert.equal(await cloud.evaluate(button => button.tagName), 'BUTTON');
    assert.equal(await cloud.getAttribute('type'), 'button');
    assert.equal(await cloud.evaluate(button => button.closest('h3')?.tagName), 'H3');
    assert.equal(await cloud.getAttribute('aria-expanded'), 'true');
    const panelId = await cloud.getAttribute('aria-controls');
    assert.ok(panelId, 'button names its controlled service grid');
    const panel = page.locator('[id=' + JSON.stringify(panelId) + ']');
    assert.equal(await panel.count(), 1);
    assert.equal(await panel.locator('a').count(), 10);
    const labelId = await cloud.getAttribute('aria-labelledby');
    assert.equal(await page.locator('[id=' + JSON.stringify(labelId) + ']').textContent(), 'Cloud & DevOps');
    const descriptionId = await cloud.getAttribute('aria-describedby');
    assert.equal(await page.locator('[id=' + JSON.stringify(descriptionId) + ']').textContent(), '10 services');
    const ids = await page.locator('[id]').evaluateAll(elements => elements.map(element => element.id));
    assert.equal(new Set(ids).size, ids.length, 'multiple browser instances must have unique IDs');

    for (const name of ['AI & Automation', 'IT Infrastructure', 'Cloud & DevOps']) {
      await page.keyboard.press('Tab');
      assert.equal(await page.getByRole('button', {name, exact: true}).first().evaluate(button => button === document.activeElement), true, 'Tab reaches ' + name);
    }
    await page.keyboard.press('Enter');
    assert.equal(await cloud.getAttribute('aria-expanded'), 'false');
    assert.equal(await panel.locator('a').count(), 9);
    assert.equal(await cloud.evaluate(button => button === document.activeElement), true);
    await page.keyboard.down('Space');
    assert.equal(await cloud.getAttribute('aria-expanded'), 'false', 'Space activates on keyup');
    await page.keyboard.up('Space');
    assert.equal(await cloud.getAttribute('aria-expanded'), 'true');
    assert.equal(await panel.locator('a').count(), 10);
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.getByRole('button', {name: 'IT Infrastructure', exact: true}).first().evaluate(button => button === document.activeElement), true);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    assert.equal(await panel.locator('a').count(), 9);
    await page.keyboard.press('Tab');
    assert.equal(await panel.locator('a').first().evaluate(link => link === document.activeElement), true);
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    assert.equal(await panel.locator('a').count(), 10);
    assert.equal(await page.evaluate(() => window.fixtureSubmits), 0, 'category controls must not submit a surrounding form');

    const audit = await new AxeBuilder({page}).include('#fixture').analyze();
    assert.deepEqual(audit.violations.map(v => ({id: v.id, impact: v.impact})), []);
    assert.deepEqual(errors, []);
    console.log('PASS: native button, heading/name/description, unique control IDs, Tab/Shift+Tab, Enter, Space keyup, focus retention, links, no form submission, axe fixture audit.');
  } finally {
    await browser.close();
  }
}
main().catch(error => {console.error(error); process.exitCode = 1;});
