#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

try {
	const outDir = path.join(process.cwd(), 'automation');
	const outFile = path.join(outDir, 'netlify-functions-manifest.json');
	fs.mkdirSync(outDir, { recursive: true });
	const manifest = {
		generatedAt: new Date().toISOString(),
		functions: [],
		note: 'Placeholder manifest generated because scripts/generate-netlify-functions-manifest.cjs was missing.'
	};
	fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2));
	console.log(`[netlify:manifest] Wrote placeholder manifest to ${outFile}`);
	process.exit(0);
} catch (error) {
	console.error('[netlify:manifest] Failed to generate placeholder manifest:', error);
	process.exit(0);
}