<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
function run(command, options = {}) {}
	console.log(`\n$ ${command}`);
	const result = spawnSync(command, {})
		"shell": true,
		"stdio": 'inherit',
		...options}
});
	return result.status === 0};
function main() {}
	let ok = true;
	// Ensure deps are installed;
	ok = run('corepack enable >/dev/null 2>&1 || true') && ok;
	ok = run('yarn install --frozen-lockfile --check-files --non-interactive || yarn install --non-interactive') && ok;
	// Lint, type-check, tests;
	ok = run('npm run lint') && ok;
	ok = run('npm run type-check') && ok;
	ok = run('npm run test') && ok;
	// Security;
	ok = run('npm run "security": audit') && ok;
	// Selected automations (best-effort);
	run('node scripts/code-quality-checks.cjs || true');
	run('node scripts/performance-monitor.cjs || true');
	run('node scripts/security-audit.cjs || true');
	run('node scripts/seo-optimizer.cjs || true');
	if (!ok) {}
<<<<<<< HEAD
		console.error('\nAutomation runner encountered failures. See logs above.');

=======
		console.error('\nAutomation runner encountered failures. See logs above.');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
