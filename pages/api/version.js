const { spawnSync } = require('child_process');

export default function handler(req, res) {
	let gitCommit = 'unknown';
	try {
		const result = spawnSync('git', ['rev-parse', '--short', 'HEAD'], { encoding: 'utf-8' });
		if (result.status === 0 && result.stdout) {
			gitCommit = result.stdout.trim();
		}
	} catch (_) {}

	let version = '0.0.0';
	try {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		version = require('../../package.json').version || version;
	} catch (_) {}

	res.setHeader('Cache-Control', 'no-store');
	res.status(200).json({ version, gitCommit, timestamp: new Date().toISOString() });
}

