import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const root = fileURLToPath(new URL('../../', import.meta.url));
const configDir = await mkdtemp(path.join(root, '.storybook-dependency-smoke-'));
const outputDir = await mkdtemp(path.join(os.tmpdir(), 'zion-storybook-smoke-'));
const types = {
  '.css': 'text/css', '.html': 'text/html', '.js': 'application/javascript',
  '.json': 'application/json', '.mjs': 'application/javascript',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2',
};
let server;

try {
  await writeFile(path.join(configDir, 'main.ts'), `
import base from '../.storybook/main.ts';
export default {
  ...base,
  stories: ['./Dependency.stories.tsx'],
  core: { ...base.core, disableTelemetry: true },
};
`);
  await writeFile(path.join(configDir, 'Dependency.stories.tsx'), `
import React, { useState } from 'react';
function Counter({ initialCount = 2 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);
  return <section>
    <h1>Dependency validation</h1>
    <button data-testid="increment" type="button" onClick={() => setCount(count + 1)}>Increment</button>
    <output data-testid="count">{count}</output>
  </section>;
}
export default { title: 'Validation/Dependency', component: Counter };
export const Interactive = { args: { initialCount: 2 } };
`);

  const storybookPackage = JSON.parse(await readFile(path.join(root, 'node_modules/storybook/package.json'), 'utf8'));
  const storybookBin = typeof storybookPackage.bin === 'string' ? storybookPackage.bin : storybookPackage.bin.storybook;
  const build = spawnSync(process.execPath, [
    path.join(root, 'node_modules/storybook', storybookBin), 'build',
    '--config-dir', configDir, '--output-dir', outputDir,
  ], {
    cwd: root, stdio: 'inherit', timeout: 180_000,
    env: { ...process.env, CI: '1', STORYBOOK_DISABLE_TELEMETRY: '1' },
  });
  if (build.error) throw build.error;
  assert.equal(build.status, 0, 'Storybook fixture build must succeed');

  const index = JSON.parse(await readFile(path.join(outputDir, 'index.json'), 'utf8'));
  assert.ok(index.entries['validation-dependency--interactive'], 'The fixture must be included in the built story index');

  server = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
      const filename = path.resolve(outputDir, `.${pathname === '/' ? '/index.html' : pathname}`);
      if (!filename.startsWith(`${outputDir}${path.sep}`)) {
        response.writeHead(403).end();
        return;
      }
      const content = await readFile(filename);
      response.setHeader('Content-Type', types[path.extname(filename)] || 'application/octet-stream');
      response.end(content);
    } catch {
      response.writeHead(404).end();
    }
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  const url = `http://127.0.0.1:${address.port}/iframe.html?id=validation-dependency--interactive&viewMode=story`;
  const results = [];

  for (const protocol of ['cdp', 'webDriverBiDi']) {
    const browser = await puppeteer.launch({
      headless: true, protocol,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    try {
      const page = await browser.newPage();
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });
      await page.waitForSelector('[data-testid="count"]', { visible: true, timeout: 15_000 });
      assert.equal(await page.$eval('[data-testid="count"]', (element) => element.textContent), '2');
      await page.waitForSelector('[data-testid="increment"]', { visible: true, timeout: 15_000 });
      await page.click('[data-testid="increment"]');
      await page.waitForFunction(() => document.querySelector('[data-testid="count"]')?.textContent === '3');
      const png = Buffer.from(await page.screenshot({ type: 'png' }));
      assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
      assert.ok(png.length > 100, 'The rendered page screenshot must not be empty');
      assert.deepEqual(pageErrors, [], `${protocol}: browser page errors`);
      const result = { protocol, browser: await browser.version(), interaction: 'pass', screenshotBytes: png.length };
      results.push(result);
      console.log(JSON.stringify(result));
    } finally {
      await browser.close();
    }
  }
  console.log(JSON.stringify({ storybook: storybookPackage.version, node: process.version, results }, null, 2));
} finally {
  if (server?.listening) await new Promise((resolve) => server.close(resolve));
  await rm(configDir, { recursive: true, force: true });
  await rm(outputDir, { recursive: true, force: true });
}
