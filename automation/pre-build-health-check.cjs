#!/usr/bin/env node
// Minimal pre-build health check to ensure required directories exist
const fs = require('fs');
const path = require('path');

try {
	const required = ['public', 'pages', 'components', 'data'];
	required.forEach((dir) => {
		const p = path.join(process.cwd(), dir);
		if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
	});
	console.log('[health-check] OK');
	process.exit(0);
} catch (err) {
	console.warn('[health-check] Non-fatal warning:', err && err.message);
	process.exit(0);
}