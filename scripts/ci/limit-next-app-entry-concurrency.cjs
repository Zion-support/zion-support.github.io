'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const NEXT_VERSION = '16.4.5';
const MAX_IN_FLIGHT = 8;
const ORIGINAL_SHA256 = '42bce6601be85db8019657324eba0ab5fa2a3cf0b62dd636705a4cc17a3d42ac';
const PATCHED_SHA256 = '9191d8db39fbf2b0ccf7c7566ddf41416077b7d0b846a50d26b7352290c07733';
const TARGET = "promises.push(Promise.all(Object.keys(appPaths).map(entryHandler)));";
const REPLACEMENT = "promises.push((async () => {\n            const appEntryKeys = Object.keys(appPaths);\n            for (let offset = 0; offset < appEntryKeys.length; offset += 8) {\n                await Promise.all(appEntryKeys.slice(offset, offset + 8).map(entryHandler));\n            }\n        })());";
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');

function transformSource(version, source) {
  if (version !== NEXT_VERSION) throw new Error('Unsupported Next.js version; no patch applied.');
  const current = sha256(source);
  if (current === PATCHED_SHA256) return { source, changed: false };
  if (current !== ORIGINAL_SHA256) throw new Error('Unexpected Next.js entry source; no patch applied.');
  if (source.split(TARGET).length !== 2) throw new Error('Expected one app-entry preparation target; no patch applied.');
  const updated = source.replace(TARGET, REPLACEMENT);
  if (sha256(updated) !== PATCHED_SHA256) throw new Error('Patched source integrity mismatch; no patch applied.');
  return { source: updated, changed: true };
}

function patchInstalledNext() {
  const packageFile = require.resolve('next/package.json');
  const version = JSON.parse(fs.readFileSync(packageFile, 'utf8')).version;
  const entriesFile = path.join(path.dirname(packageFile), 'dist', 'build', 'entries.js');
  const result = transformSource(version, fs.readFileSync(entriesFile, 'utf8'));
  if (result.changed) fs.writeFileSync(entriesFile, result.source);
  console.log('[next-entry-budget] ' + JSON.stringify({ version, maxInFlight: MAX_IN_FLIGHT, changed: result.changed }));
}

module.exports = { transformSource, NEXT_VERSION, MAX_IN_FLIGHT, ORIGINAL_SHA256, PATCHED_SHA256, TARGET, REPLACEMENT };
if (require.main === module) patchInstalledNext();
