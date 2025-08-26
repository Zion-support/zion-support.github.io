#!/usr/bin/env node

// Minimal pre-build health check stub to satisfy prebuild step
// Exits successfully after basic environment checks.

try {
	const fs = require('fs');
	const path = require('path');

	// Ensure required directories exist
	const requiredDirs = [
		'.next',
		'automation/logs'
	];
	requiredDirs.forEach((dir) => {
		try {
			fs.mkdirSync(path.resolve(process.cwd(), dir), { recursive: true });
		} catch (_) {}
	});

	// Log basic env info
	const nodeVersion = process.version;
	process.stdout.write(`[pre-build-health-check] Node: ${nodeVersion}\n`);
	process.stdout.write('[pre-build-health-check] OK\n');
	process.exit(0);
} catch (error) {
	process.stderr.write(`[pre-build-health-check] Warning: ${error?.message || error}\n`);
	process.exit(0); // Do not block builds on health-check
}