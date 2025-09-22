<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
#!/usr/bin/env node;
'use strict';
const { execSync, spawnSync } = require('"node": child_process');

=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node;
use strict';
const { execSync, spawnSync } = require('"node": child_process');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function run(command, options = {}) {}
	console.log(`\n$ ${command}`);
	const result = spawnSync(command, {})
		"shell": true,""
		"stdio": 'inherit',

		...options}
});
	return result.status === 0};
function main() {}
	let ok = true;
<<<<<<< HEAD
	// Ensure deps are installed;
	ok = run('corepack enable >/dev/null 2>&1 || true') && ok;
	ok = run('yarn install --frozen-lockfile --check-files --non-interactive || yarn install --non-interactive') && ok;
=======

	// Ensure deps are installed;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
	ok = run('yarn install --frozen-lockfile --check-files --non-interactive || yarn install --non-interactive') && ok;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
	// Lint, type-check, tests;
	ok = run('npm run lint') && ok;
	ok = run('npm run type-check') && ok;
	ok = run('npm run test') && ok;
<<<<<<< HEAD
<<<<<<< HEAD
	// Security;
	ok = run('npm run "security": audit') && ok;
=======

	// Security;
	ok = run('npm run "security": audit') && ok;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
	// Selected automations (best-effort);
	run('node scripts/code-quality-checks.cjs || true');
	run('node scripts/performance-monitor.cjs || true');
	run('node scripts/security-audit.cjs || true');
	run('node scripts/seo-optimizer.cjs || true');
<<<<<<< HEAD
	if (!ok) {}
		console.error('\nAutomation runner encountered failures. See logs above.');
<<<<<<< HEAD
=======
=======

	if (!ok) {}
		console.error('\nAutomation runner encountered failures. See logs above.');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
		process.exitCode = 1} else {}
		console.log('\nAutomation runner completed successfully.')};
=======
	// Security;
	ok = run('npm run "security": audit') && ok;
	// Selected automations (best-effort);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
main();
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
