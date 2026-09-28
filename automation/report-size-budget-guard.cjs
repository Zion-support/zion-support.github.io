// report-size-budget-guard.cjs — scans automation/reports against size budgets.
// Env: REPORT_SIZE_MAX_FILE_KB (default 1536), REPORT_SIZE_MAX_TOTAL_MB (default 8)
// Writes automation/reports/report-size-budget-guard-latest.json and .md
// Exit 1 when a budget is breached, 0 otherwise.
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const MAX_FILE_KB = Number(process.env.REPORT_SIZE_MAX_FILE_KB || 1536);
const MAX_TOTAL_MB = Number(process.env.REPORT_SIZE_MAX_TOTAL_MB || 8);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile()) out.push(p);
  }
  return out;
}

const files = walk(REPORTS_DIR).map((p) => ({
  path: path.relative(process.cwd(), p).replace(/\\/g, '/'),
  sizeKb: Math.round((fs.statSync(p).size / 1024) * 10) / 10,
})).sort((a, b) => b.sizeKb - a.sizeKb);

const totalKb = files.reduce((s, f) => s + f.sizeKb, 0);
const totalMb = Math.round((totalKb / 1024) * 100) / 100;
const oversized = files.filter((f) => f.sizeKb > MAX_FILE_KB);
const totalExceeded = totalMb > MAX_TOTAL_MB;

const result = {
  checkedAt: new Date().toISOString(),
  reportsDir: 'automation/reports',
  fileCount: files.length,
  totalMb,
  maxFileKb: MAX_FILE_KB,
  maxTotalMb: MAX_TOTAL_MB,
  oversizedCount: oversized.length,
  oversizedFiles: oversized,
  totalExceeded,
  topLargest: files.slice(0, 20),
};

fs.mkdirSync(REPORTS_DIR, { recursive: true });
fs.writeFileSync(path.join(REPORTS_DIR, 'report-size-budget-guard-latest.json'), JSON.stringify(result, null, 2) + '\n');

const md = [
  '# Report size budget guard',
  '',
  `- Checked at: ${result.checkedAt}`,
  `- Files scanned: ${result.fileCount}`,
  `- Total size: ${totalMb} MB (budget ${MAX_TOTAL_MB} MB) — ${totalExceeded ? 'EXCEEDED' : 'within budget'}`,
  `- Oversized files (> ${MAX_FILE_KB} KB): ${oversized.length}`,
  '',
  ...files.slice(0, 20).map((f) => `- ${f.path} (${f.sizeKb} KB)`),
  '',
].join('\n');
fs.writeFileSync(path.join(REPORTS_DIR, 'report-size-budget-guard-latest.md'), md);

console.log(`report-size-budget-guard: ${files.length} files, ${totalMb} MB total, oversized=${oversized.length}, totalExceeded=${totalExceeded}`);
if (oversized.length > 0 || totalExceeded) {
  console.error('Report size budget breached.');
  process.exit(1);
}
process.exit(0);
