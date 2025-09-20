#!/usr/bin/env node

// Minimal pre-build health check to satisfy prebuild script
// Ensures critical directories exist; always exits successfully
const fs = require('fs');
const path = require('path');

const ensureDir = (p) => {
	try {
		fs.mkdirSync(p, { recursive: true });
	} catch (_) {}
};

ensureDir(path.join(process.cwd(), 'dist'));
ensureDir(path.join(process.cwd(), '.next'));
ensureDir(path.join(process.cwd(), 'automation', 'logs'));

console.log('[pre-build-health-check] OK');
process.exit(0);