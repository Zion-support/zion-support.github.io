
<<<<<<< HEAD
#!/usr/bin/env node;
'use strict';
<<<<<<< HEAD
const { execSync, spawnSync } = require('"node": child_process');
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======

const { execSync, spawnSync } = require('"node": child_process');

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const { execSync, spawnSync } = require('"node": child_process');

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
function run(command, options = {}) {}
	console.log(`\n$ ${command}`);
	const result = spawnSync(command, {})
		"shell": true,
		"stdio": 'inherit',
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
main();

<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
main();

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
