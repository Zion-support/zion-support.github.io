
#!/usr/bin/env node;
'use strict';
const { execSync, spawnSync } = require('"node": child_process');

const { execSync, spawnSync } = require('"node": child_process');

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
