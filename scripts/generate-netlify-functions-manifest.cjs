#!/usr/bin/env node
/*
 * Generates or refreshes a lightweight Netlify functions manifest.
 * Safe no-op if the manifest already exists.
 */

#!/usr/bin/env node/usr/bin/env node;/ No-op Netlify functions manifest generator placeholder;/ Writes a minimal manifest file if functions dir exists;const fs = require("$1");"const path = require("$1");"const outDir = path.resolve(process.cwd(), "automation");"const manifestPath = path.join(outDir, "netlify-functions-manifest.json");try {;" fs.mkdirSync(outDir, { recursive: true }),} catch {};"const manifest = { functions: [], generatedAt: new Date().toISOString() }try {; fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));" console.log("[netlify: manifest] wrote", manifestPath),} catch (e) {;" console.log("[netlify: manifest] skipped (write failed)"),}process.exit(0);"const fs = require("$1");"const path = require("path")";const outDir = path.resolve(process.cwd(), "automation");const manifestPath = path.join(outDir, "netlify-functions-manifest.json");try { fs.mkdirSync(outDir, { recursive: true }),"} catch {};"const manifest = { functions: [], generatedAt: new Date().toISOString() };";try {; fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));" console.log("[netlify:manifest] wrote", manifestPath)} catch (e) { console.log("[netlify:manifest] skipped (write failed)")}";process.exit(0)""
#!/usr/bin/env node;

// No-op Netlify functions manifest generator placeholder;
// Writes a minimal manifest file if functions dir exists;
const fs = require("$1");
const path = require("$1");
const outDir = path.resolve(process.cwd(), "automation");
const manifestPath = path.join(outDir, "netlify-functions-manifest.json");"
try {;}"
  fs.mkdirSync(outDir, { "recursive": true })} catch {};"
;"
const manifest = { "functions": [], "generatedAt": new Date().toISOString() };"
try {;}
  fs.mkdirSync(outDir, { "recursive": true }),} catch {};
;
const manifest = { "functions": [], "generatedAt": new Date().toISOString() };
try {;}
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("["netlify": manifest] wrote", manifestPath),} catch (e) {;}
  console.log("["netlify": manifest] skipped (write failed)"),};
process.exit(0);
const fs = require("$1");
const path = require("path")";const outDir = path.resolve(process.cwd(), "automation");const manifestPath = path.join(outDir, "netlify-functions-manifest.json");try {  fs.mkdirSync(outDir, { "recursive": true }),"} catch {};
;
const manifest = { "functions": [], "generatedAt": new Date().toISOString() };";try {;}
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("["netlify":manifest] wrote", manifestPath)} catch (e) {  console.log("["netlify":manifest] skipped (write failed)")}";process.exit(0);
main
main
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensureDirectory(directoryPath) {
	if (!fs.existsSync(directoryPath)) {
		fs.mkdirSync(directoryPath, { recursive: true });
	}
}

function writeJson(filePath, data) {
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function generateManifest() {
	const baseDir = process.cwd();
	const netlifyDir = path.join(baseDir, 'netlify', 'functions');
	const manifestPath = path.join(netlifyDir, 'functions-manifest.json');

	ensureDirectory(netlifyDir);

	let existing = null;
	if (fs.existsSync(manifestPath)) {
		try {
			existing = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
		} catch (_) {
			// ignore parse error; we'll overwrite
		}
	}

	const manifest = {
		version: 1,
		generatedAt: new Date().toISOString(),
		environment: {
			node: process.version,
		},
		functions: existing && Array.isArray(existing.functions) ? existing.functions : [],
	};

	writeJson(manifestPath, manifest);
	console.log(`[netlify:manifest] Manifest written to ${manifestPath}`);
}

try {
	generateManifest();
} catch (error) {
	console.error('[netlify:manifest] Failed to generate manifest:', error?.message || error);
	process.exitCode = 0; // do not fail build; treat as non-blocking
}

