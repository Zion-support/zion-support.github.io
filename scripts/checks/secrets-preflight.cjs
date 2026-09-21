#!/usr/bin/env node
/**
 * Fail the job when REQUIRED_SECRETS names are unset or blank.
 * Names are comma- or whitespace-separated. Empty REQUIRED_SECRETS is a no-op.
 */
'use strict';

const raw = process.env.REQUIRED_SECRETS || '';
const names = raw.split(/[,\s]+/).map((s) => s.trim()).filter(Boolean);

if (names.length === 0) {
  console.log('secrets:preflight ok (no REQUIRED_SECRETS)');
  process.exit(0);
}

const missing = names.filter((name) => {
  const value = process.env[name];
  return value == null || String(value).trim() === '';
});

if (missing.length > 0) {
  console.error(`secrets:preflight missing: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`secrets:preflight ok (${names.length} checked, values not printed)`);
