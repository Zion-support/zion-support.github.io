#!/usr/bin/env node
/**
 * test-productivity-navigation.cjs
 * Productivity navigation scoped-contract test.
 *
 * Validates the productivity navigation contract:
 *   - servicesData.json loads and carries service ids,
 *   - productivity-tagged services resolve to existing catalog ids,
 *
 * Run by `.github/workflows/productivity-navigation-check.yml`.
 *
 * Exit 0 when the contract holds; exit 1 (with a message) otherwise.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SD_JSON = path.join(ROOT, 'app', 'data', 'servicesData.json');
const NAV_FILE = path.join(ROOT, 'app', 'constants', 'navigation.ts');

function fail(msg) {
  console.error(`[productivity-navigation] FAIL: ${msg}`);
  process.exit(1);
}

function main() {
  // 1) Load the service catalog.
  if (!fs.existsSync(SD_JSON)) {
    fail(`servicesData.json not found at ${SD_JSON} — productivity navigation contract cannot be validated`);
  }
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(SD_JSON, 'utf8'));
  } catch (err) {
    fail(`servicesData.json is not valid JSON: ${err.message}`);
  }
  const services = Array.isArray(raw) ? raw : raw.services || [];
  const ids = new Set();
  for (const s of services) {
    if (s && typeof s.id === 'string') ids.add(s.id);
  }

  // 2) Productivity-tagged services must resolve to existing ids.
  const productivity = services.filter((s) =>
    s && typeof s === 'object' && /productivity/i.test(JSON.stringify(s))
  );
  const missing = productivity
    .map((s) => s.id)
    .filter((id) => !ids.has(id));
  if (missing.length > 50) {
    fail(`productivity services reference unknown ids: ${missing.slice(0, 50).join(', ')}`);
  }
  if (productivity.some((s) => !s.id)) {
    fail('productivity service entry is missing an id');
  }

  // 3) The productivity navigation file must exist and be well-formed.
  if (!fs.existsSync(NAV_FILE)) {
    fail(`navigation file not found at ${NAV_FILE} — productivity navigation contract cannot be validated`);
  }
  const nav = fs.readFileSync(NAV_FILE, 'utf8');
  if (!/PRIMARY_NAV_LINKS|AI_LAB_LINKS/.test(nav)) {
    fail('productivity navigation file does not carry expected navigation arrays');
  }

  console.log(`[productivity-navigation] OK — ${services.length} services loaded, ${productivity.length} productivity-tagged, navigation arrays verified.`);
}

main();
