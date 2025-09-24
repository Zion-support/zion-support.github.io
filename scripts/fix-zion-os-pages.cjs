'use strict';
const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'zion-os', 'src', 'app');
const files = [
	'case-studies/page.tsx',
	'community/page.tsx',
	'contact/page.tsx',
	'cookies/page.tsx',
	'cybersecurity/page.tsx',
	'dashboard/page.tsx',
	'docs/page.tsx',
	'enterprise-it/page.tsx',
	'events/page.tsx',
	'page.tsx',
	'pricing/page.tsx',
	'privacy/page.tsx',
	'quantum-neural-network-platform/page.tsx',
	'quantum-services/page.tsx',
	'research/page.tsx',
	'services/ai-automation/page.tsx',
	'services/ai-solutions/page.tsx',
	'services/ai/page.tsx',
	'services/blockchain-web3/page.tsx',
	'services/blockchain/page.tsx',
	'services/it-solutions/page.tsx',
	'services/it/page.tsx',
	'services/micro-saas/page.tsx',
	'services/saas/page.tsx',
	'sitemap.ts',
	'solutions/page.tsx',
	'space-tech/page.tsx',
	'terms/page.tsx',
];

function toComponentName(file) {
	const base = file.split('/').slice(-2).join('-').replace(/\.[tj]sx?$/, '');
	return base
		.split(/[^a-zA-Z0-9]/)
		.filter(Boolean)
		.map((s) => s[0].toUpperCase() + s.slice(1))
		.join('');
}

for (const rel of files) {
	const full = path.join(root, rel);
	const dir = path.dirname(full);
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
	const name = toComponentName(rel);
	const content = full.endsWith('.ts')
		? `export default function ${name}() {\n\treturn new Response('OK');\n}\n`
		: `export default function ${name}() {\n\treturn (\n\t\t<div className=\"py-16 px-4\">\n\t\t\t<h1 className=\"text-2xl font-bold\">${name.replace(/Page$/, '')}</h1>\n\t\t\t<p className=\"opacity-70\">Temporary placeholder.</p>\n\t\t</div>\n\t);\n}\n`;
	fs.writeFileSync(full, content);
	process.stdout.write(`[fix] wrote ${path.relative(process.cwd(), full)}\n`);
}