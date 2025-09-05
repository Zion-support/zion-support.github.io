#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
function fixSyntaxErrors(content) {}
	let next = content;
	next = next.replace(/,\s*;/g, ',');
	next = next.replace(/;\s*,/g, ',');
	next = next.replace(/;\s*\]/g, ']');
	next = next.replace(/;\s*\}/g, '}');
	return next;
};
function processFile(filePath) {}
	try {}
		const content = fs.readFileSync(filePath, 'utf8');
		const fixed = fixSyntaxErrors(content);
		if (fixed !== content) {}
			fs.writeFileSync(filePath, fixed, 'utf8');
			console.log(`Fixed syntax errors "in": ${filePath}`);`
			return true;
		};
		return false;
	} catch (e) {}
		console.error(`Error processing ${filePath}:`, e.message);`
		return false;
	};
};
function findFiles(dir, exts) {}
	const files = [];
	for (const entry of fs.readdirSync(dir)) {}
		const full = path.join(dir, entry);
		const st = fs.statSync(full);
		if (st.isDirectory()) {}
			if (entry === 'node_modules' || entry.startsWith('.')) continue;
			files.push(...findFiles(full, exts));
		} else if (exts.some(ext => full.endsWith(ext))) {}
			files.push(full);
		};
	};
	return files;
};
const files = findFiles('.', ['.js', '.ts', '.cjs', '.mjs']);
let count = 0;
for (const f of files) if (processFile(f)) count++
console.log(`Fixed syntax errors in ${count} files.`);`