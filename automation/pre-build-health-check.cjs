#!/usr/bin/env node
<<<<<<< HEAD
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
=======

// Minimal pre-build health check placeholder
// Ensures required directories exist and exits 0
const fs = require('fs');
const path = require('path');

const requiredDirs = ['dist', 'public'];
for (const dir of requiredDirs) {
	const full = path.resolve(process.cwd(), dir);
	try { fs.mkdirSync(full, { recursive: true }); } catch {}
}

console.log('[pre-build-health-check] OK');
process.exit(0);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
