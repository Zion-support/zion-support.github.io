#!/usr/bin/env node
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), 'automation', 'netlify-functions-manifest.json');
try {
	const minimal = { generatedAt: new Date().toISOString(), functions: [] };
	fs.writeFileSync(manifestPath, JSON.stringify(minimal, null, 2));
	console.log('[netlify:manifest] Wrote', manifestPath);
	process.exit(0);
} catch (err) {
	console.warn('[netlify:manifest] Non-fatal warning:', err && err.message);
	process.exit(0);
}
=======

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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
