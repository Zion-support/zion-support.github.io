#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), 'automation', 'netlify-functions-manifest.json');
const functions = [
	{
		name: 'osv_dependency_audit',
		path: '/.netlify/functions/osv_dependency_audit'
	},
	{
		name: 'external_link_audit',
		path: '/.netlify/functions/external_link_audit'
	},
	{
		name: 'automation_summary',
		path: '/.netlify/functions/automation_summary'
	},
	{
		name: 'readme_badges_updater',
		path: '/.netlify/functions/readme_badges_updater'
	}
];

const payload = { generatedAt: new Date().toISOString(), functions };
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(payload, null, 2));
console.log('[netlify:manifest] Wrote', manifestPath);