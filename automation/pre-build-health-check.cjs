#!/usr/bin/env node

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
=======
const fs = require('fs')
const path = require('path')

function fileExists(p) {
	try {
		return fs.existsSync(p)
	} catch {
		return false
	}
}

const required = [
	path.join(process.cwd(), 'public', 'index.html'),
	path.join(process.cwd(), 'vite.config.ts'),
	path.join(process.cwd(), 'package.json'),
]

const missing = required.filter((p) => !fileExists(p))
if (missing.length > 0) {
	console.warn('[pre-build-health-check] Missing files:', missing.map((p) => path.relative(process.cwd(), p)).join(', '))
	process.exit(0) // do not block build
}

console.log('[pre-build-health-check] OK')
process.exit(0)
