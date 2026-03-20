#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const OUTPUT_FILE = path.join(REPORTS_DIR, 'netlify-hook-smoke-latest.json');

const intervalSeconds = parseInt(process.env.NETLIFY_HOOK_SMOKE_INTERVAL_SECONDS || '1800', 10);
const timeoutMs = parseInt(process.env.NETLIFY_HOOK_SMOKE_TIMEOUT_MS || '12000', 10);
const runOnceMode =
  process.env.NETLIFY_HOOK_SMOKE_RUN_ONCE === '1' || process.env.NETLIFY_HOOK_SMOKE_RUN_ONCE === 'true';

function log(message) {
  console.log(`[NETLIFY-HOOK-SMOKE] ${new Date().toISOString()} | ${message}`);
}

function writeReport(payload) {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2));
}

async function probeHook(url) {
  const start = Date.now();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
    });
    clearTimeout(timer);
    return {
      ok: response.ok,
      status: response.status,
      latencyMs: Date.now() - start,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: null,
      latencyMs: Date.now() - start,
      error: error && error.message ? error.message : 'unknown_error',
    };
  }
}

async function evaluate() {
  const hookUrl = process.env.NETLIFY_BUILD_HOOK || '';
  if (!hookUrl.trim()) {
    const payload = {
      timestamp: new Date().toISOString(),
      healthy: false,
      reason: 'NETLIFY_BUILD_HOOK missing',
      hookConfigured: false,
    };
    writeReport(payload);
    log('Hook smoke skipped: NETLIFY_BUILD_HOOK missing');
    return;
  }

  const probe = await probeHook(hookUrl);
  const payload = {
    timestamp: new Date().toISOString(),
    healthy: probe.ok,
    hookConfigured: true,
    status: probe.status,
    latencyMs: probe.latencyMs,
    timeoutMs,
    error: probe.error,
  };
  writeReport(payload);
  log(`Hook smoke complete: healthy=${probe.ok} status=${probe.status ?? 'n/a'} latency=${probe.latencyMs}ms`);
}

function start() {
  log(`Starting Netlify hook smoke agent (interval=${intervalSeconds}s, timeout=${timeoutMs}ms)`);
  evaluate().catch((error) => log(`Initial run failed: ${error.message}`));
  setInterval(() => {
    evaluate().catch((error) => log(`Scheduled run failed: ${error.message}`));
  }, Math.max(1000, intervalSeconds * 1000));
}

if (runOnceMode) {
  log('Running Netlify hook smoke agent in one-shot mode');
  evaluate().catch((error) => {
    log(`One-shot run failed: ${error.message}`);
    process.exitCode = 1;
  });
} else {
  start();
}
