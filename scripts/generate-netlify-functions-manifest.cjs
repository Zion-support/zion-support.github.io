#!/usr/bin/env node

// No-op Netlify functions manifest generator placeholder
// Writes a minimal manifest file if functions dir exists
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(process.cwd(), 'automation');
const manifestPath = path.join(outDir, 'netlify-functions-manifest.json');
try { fs.mkdirSync(outDir, { recursive: true }); } catch {}

const manifest = { functions: [], generatedAt: new Date().toISOString() };
try {
	fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
	console.log('[netlify:manifest] wrote', manifestPath);
} catch (e) {
	console.log('[netlify:manifest] skipped (write failed)');
}
process.exit(0);