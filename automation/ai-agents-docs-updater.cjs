// ai-agents-docs-updater.cjs — generates the AI agents docs snapshot report.
// Previously a no-op placeholder, which caused the workflow's upload-artifact step
// to fail (if-no-files-found: error) because automation/reports/ai-agents-docs-latest.json
// was never produced. Now writes a real snapshot file.
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, 'reports');
const outFile = path.join(reportsDir, 'ai-agents-docs-latest.json');

const docsDir = path.join(process.cwd(), 'docs');
let docs = [];
try {
  docs = fs.readdirSync(docsDir).filter((f) => f.endsWith('.md')).sort();
} catch (e) {
  docs = [];
}

const report = {
  generatedAt: new Date().toISOString(),
  generator: 'ai-agents-docs-updater.cjs',
  docsScanned: docs.length,
  docs,
  status: 'ok',
};

fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(report, null, 2) + '\n');
console.log(`ai-agents-docs snapshot written: ${outFile} (${docs.length} docs scanned).`);