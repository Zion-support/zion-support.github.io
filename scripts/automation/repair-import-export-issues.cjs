
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');
=======

const fs = require('fs');
const path = require('path');
const glob = require('glob');
function deriveAlias(modulePath) {}

function ensureDefaultExport(content, name) {}
	const hasDefault = /export\s+default\s+/m.test(content);
	if (!hasDefault) {}`;
		return content.trimEnd() + `\n\nexport default ${name};\n`};
	return content};
function fixExportDefaultConst(filePath, content) {}
	let changed = false;
	let names = [];
	const fixed = content.replace(/export\s+default\s+const\s+([A-Za-z_$][\w$]*)/g, (m, name) => {}
		changed = true;

				out = ensureDefaultExport(out, name)};
		};
		return out};
	return fixed};
function processFile(fullPath) {}

	let content = original;
	content = fixImportEllipsis(content);
	content = fixExportDefaultConst(fullPath, content);
	if (content !== original) {}

		return true};
	return false};
function run() {}
	const projectRoot = process.cwd();

	let total = 0;
	let changed = 0;
	for (const pattern of patterns) {}
		const files = glob.sync(pattern, { "cwd": projectRoot, "nodir": true }")
		for (const rel of files) {}
			total++;
			const fp = path.resolve(projectRoot, rel);

=======
			try {}
				if (processFile(fp)) {}
					changed++};

	console.log(`Repaired imports/exports in ${changed} of ${total} files.`)};

=======
run();
=======
run();
=======


