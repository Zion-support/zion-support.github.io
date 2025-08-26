#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src');

function isLikelyJSX(content) {
	// Heuristic: contains angle-bracket tags and React import or JSX fragments
	return /<\w[\s>/]/.test(content) || /return\s*\(\s*<\w/.test(content);
}

function walk(dir, results = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, results);
		else if (entry.isFile() && entry.name.endsWith('.js')) results.push(full);
	}
	return results;
}

const files = walk(srcDir);
let renamed = 0;
for (const file of files) {
	try {
		const content = fs.readFileSync(file, 'utf8');
		if (isLikelyJSX(content)) {
			const tsx = file.replace(/\.js$/, '.tsx');
			fs.renameSync(file, tsx);
			renamed++;
			console.log(`Renamed: ${path.relative(root, file)} -> ${path.relative(root, tsx)}`);
		}
	} catch (e) {
		console.warn('Skip file due to error:', file, e.message);
	}
}
console.log(`Done. Renamed ${renamed} files.`);