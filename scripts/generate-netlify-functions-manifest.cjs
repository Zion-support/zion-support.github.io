

#!/usr/bin/env node;
// No-op Netlify functions manifest generator placeholder;
// Writes a minimal manifest file if functions dir exists;
const fs = require("$1");
const path = require("$1");
const outDir = path.resolve(process.cwd(), "automation");
const manifestPath = path.join(outDir, "netlify-functions-manifest.json");
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
<<<<<<< HEAD

=======
main
main
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'automation');
const outFile = path.join(outDir, 'netlify-functions-manifest.json');

const manifest = {
	generatedAt: new Date().toISOString(),
	functions: []
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2));
console.log('[netlify:manifest] wrote', outFile);
origin/chore/fix-build-nav-links


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
