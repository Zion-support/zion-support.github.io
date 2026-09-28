// audit-push-helper-adoption.cjs — audits workflow usage of push helpers and ALWAYS
// writes automation/reports/workflow-push-helper-adoption-latest.json (artifact contract).
const fs = require('fs');
const path = require('path');

const WF_DIR = path.join(process.cwd(), '.github', 'workflows');
const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
const OUT = path.join(REPORTS_DIR, 'workflow-push-helper-adoption-latest.json');

const HELPER_PATTERNS = [
  { name: 'scripts/git/push-with-retry', re: /push-with-retry/ },
  { name: 'workflow-pat-token guard', re: /WORKFLOW_PAT|workflow[- ]pat/i },
  { name: 'cancel-in-progress: false', re: /cancel-in-progress:\s*false/ },
];

let workflows = [];
try {
  workflows = fs.readdirSync(WF_DIR).filter((f) => /\.(yml|yaml)$/.test(f) && !f.endsWith('.disabled'));
} catch (e) {
  workflows = [];
}

const perHelper = {};
for (const h of HELPER_PATTERNS) perHelper[h.name] = { helper: h.name, adoptedBy: [], count: 0 };

for (const file of workflows) {
  let content = '';
  try {
    content = fs.readFileSync(path.join(WF_DIR, file), 'utf8');
  } catch (e) { continue; }
  for (const h of HELPER_PATTERNS) {
    if (h.re.test(content)) {
      perHelper[h.name].adoptedBy.push(file);
      perHelper[h.name].count += 1;
    }
  }
}

const report = {
  auditedAt: new Date().toISOString(),
  workflowCount: workflows.length,
  helpers: Object.values(perHelper),
  summary: Object.values(perHelper).map((h) => `${h.helper}: ${h.count}/${workflows.length} workflows`).join('; '),
};

fs.mkdirSync(REPORTS_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(report, null, 2) + '\n');
console.log('push-helper adoption audit:', report.summary);
process.exit(0);
