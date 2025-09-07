
		...options}
});
	return result.status === 0};
function main() {}
	let ok = true;

	// Ensure deps are installed;

	ok = run('yarn install --frozen-lockfile --check-files --non-interactive || yarn install --non-interactive') && ok;
	// Lint, type-check, tests;
	ok = run('npm run lint') && ok;
	ok = run('npm run type-check') && ok;
	ok = run('npm run test') && ok;
	// Security;
	ok = run('npm run "security": audit') && ok;
	// Selected automations (best-effort);

};
main();


`;