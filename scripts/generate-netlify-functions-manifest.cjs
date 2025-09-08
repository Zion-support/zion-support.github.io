#!/usr/bin/env node
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