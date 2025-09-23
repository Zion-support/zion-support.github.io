#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findFilesWithConflicts(startDir) {
	const results = [];
	function walk(dir) {
		let entries = [];
		try {
			entries = fs.readdirSync(dir, { withFileTypes: true });
		} catch {
			return;
		}
		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build' || entry.name === '.next') {
					continue;
				}
				walk(fullPath);
			} else {
				try {
					const content = fs.readFileSync(fullPath, 'utf8');
					if (content.includes('<<<<<<<') && content.includes('=======') && content.includes('>>>>>>>')) {
						results.push(fullPath);
					}
				} catch {
					// skip
				}
			}
		}
	}
	walk(startDir);
	return results;
}

function resolveConflictsKeepIncoming(content) {
	const lines = content.split('\n');
	const output = [];
	let state = 'normal';
	let incomingBuffer = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (state === 'normal') {
			if (line.startsWith('<<<<<<<')) {
				state = 'in_ours';
				continue; // do not keep marker
			}
			output.push(line);
		} else if (state === 'in_ours') {
			if (line.startsWith('=======')) {
				state = 'in_theirs';
				incomingBuffer = [];
				continue;
			}
			// skip ours
		} else if (state === 'in_theirs') {
			if (line.startsWith('>>>>>>>')) {
				// end conflict: keep incomingBuffer
				for (const keepLine of incomingBuffer) {
					output.push(keepLine);
				}
				state = 'normal';
				incomingBuffer = [];
				continue;
			}
			incomingBuffer.push(line);
		}
	}
	// In case of malformed conflict without closing marker, append buffered incoming
	if (incomingBuffer.length > 0) {
		for (const keepLine of incomingBuffer) {
			output.push(keepLine);
		}
	}
	// Clean excessive blank lines
	return output.join('\n').replace(/\n{3,}/g, '\n\n');
}

function main() {
	const root = '/workspace';
	process.chdir(root);
	const files = findFilesWithConflicts(root);
	if (files.length === 0) {
		console.log('No merge conflicts found.');
		return;
	}
	console.log(`Found ${files.length} files with conflicts. Resolving by keeping incoming changes...`);
	let resolved = 0;
	for (const file of files) {
		try {
			const backup = `${file}.backup.${Date.now()}`;
			fs.copyFileSync(file, backup);
			const original = fs.readFileSync(file, 'utf8');
			const cleaned = resolveConflictsKeepIncoming(original);
			fs.writeFileSync(file, cleaned, 'utf8');
			resolved++;
		} catch (e) {
			console.error(`Failed to resolve ${file}: ${e.message}`);
		}
	}
	console.log(`Resolved ${resolved}/${files.length} files.`);
	try {
		execSync('git add -A', { stdio: 'inherit' });
		execSync('git commit -m "chore: auto-resolve merge conflicts by keeping incoming (theirs)"', { stdio: 'inherit' });
		console.log('Committed resolved files.');
	} catch (e) {
		console.log('No changes to commit or git commit failed.');
	}
}

main();