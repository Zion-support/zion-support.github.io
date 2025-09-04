#!/usr/bin/env node
const { execSync } = require('child_process');

function run(cmd) {
	console.log(`$ ${cmd}`);
	return execSync(cmd, { stdio: 'inherit' });
}

try {
	// Lint (non-fatal), Type-check, Build
	try { run('npm run lint'); } catch {}
	run('npm run type-check');
	run('npm run build');
	// Restart preview app if running
	try { run('pm2 reload bolt-zion-app'); } catch {}
	console.log('Auto-fix run completed successfully.');
} catch (e) {
	console.error('Auto-fix run failed:', e.message);
	process.exit(1);
}