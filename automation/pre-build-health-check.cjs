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