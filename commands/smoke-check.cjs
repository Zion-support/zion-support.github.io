#!/usr/bin/env node

/* eslint-disable no-console */

const https = require('https');

const TARGET = process.env.ZION_BASE_URL || 'https://ziontechgroup.com';

const PATHS = [
  '/',
  '/ai-lab',
  '/ai-lab/implementation-readiness-checker',
  '/ai-lab/ai-governance-risk-advisor',
  '/ai-lab/autonomous-opportunity-radar',
  '/ai-lab/autonomous-growth-loop-designer',
  '/ai-lab/ai-experiment-designer',
  '/zion-ai-chatbot-playground',
  '/zion-ai-code-sandbox',
  '/zion-ai-site-evolution-simulator',
  '/changelog',
];

function checkPath(path, redirectCount = 0) {
  return new Promise((resolve) => {
    const url = new URL(path, TARGET);
    const start = Date.now();

    const req = https.get(url, (res) => {
      const latency = Date.now() - start;
      const location = res.headers.location;
      if (
        location &&
        res.statusCode &&
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        redirectCount < 5
      ) {
        res.resume();
        const nextPath = location.startsWith('http') ? location : new URL(location, TARGET).pathname;
        checkPath(nextPath, redirectCount + 1).then((redirected) => {
          resolve({
            ...redirected,
            path,
            redirectFrom: nextPath,
          });
        });
        return;
      }
      res.resume();
      resolve({
        path,
        status: res.statusCode,
        ok: !!res.statusCode && res.statusCode >= 200 && res.statusCode < 300,
        latency,
      });
    });

    req.on('error', (error) => {
      resolve({
        path,
        status: 0,
        ok: false,
        latency: Date.now() - start,
        error: error.message,
      });
    });
  });
}

async function main() {
  console.log(`Running simple smoke check against ${TARGET}`);
  const results = await Promise.all(PATHS.map((p) => checkPath(p)));

  let allOk = true;
  for (const result of results) {
    if (result.ok) {
      console.log(`✅ ${result.path} -> ${result.status} (${result.latency}ms)`);
    } else {
      allOk = false;
      console.log(
        `❌ ${result.path} -> ${result.status} (${result.latency}ms)${
          result.error ? ` – ${result.error}` : ''
        }`,
      );
    }
  }

  if (!allOk) {
    process.exitCode = 1;
  }
}

main();

