#!/usr/bin/env node

/* eslint-disable no-console */

const https = require('https');

const TARGET = process.env.ZION_BASE_URL || 'https://ziontechgroup.com';

const PATHS = ['/', '/ai-experiments', '/changelog'];

function checkPath(path) {
  return new Promise((resolve) => {
    const url = new URL(path, TARGET);
    const start = Date.now();

    const req = https.get(url, (res) => {
      const latency = Date.now() - start;
      res.resume();
      resolve({
        path,
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 300,
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

