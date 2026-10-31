const { readFileSync, existsSync, mkdirSync, writeFileSync, appendFileSync } = require('fs');
const { join } = require('path');

const healthPath = join('public', 'api', 'automation-health.json');
const maxHoursEnv = process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS;
const maxHours = maxHoursEnv ? Number(maxHoursEnv) : 24;

let staticHealthFresh = 'false';
let staticHealthAgeHours = null;
let staticHealthTimestamp = null;
let staticHealthValid = false;

try {
  if (!existsSync(healthPath)) {
    throw new Error('Missing ' + healthPath);
  }
  const raw = readFileSync(healthPath, 'utf8').trim();
  if (!raw) throw new Error('Empty ' + healthPath);
  const data = JSON.parse(raw);
  staticHealthTimestamp = data.timestamp || data.generatedAt;
  if (!staticHealthTimestamp) throw new Error('Missing timestamp in ' + healthPath);
  staticHealthValid = true;

  const ts = new Date(staticHealthTimestamp);
  const now = new Date();
  staticHealthAgeHours = (now - ts) / 36e5;
  staticHealthFresh = Number.isFinite(staticHealthAgeHours) && staticHealthAgeHours >= 0 && staticHealthAgeHours <= maxHours ? 'true' : 'false';
} catch (err) {
  staticHealthFresh = 'false';
  staticHealthValid = false;
  console.error('Automation health static freshness check failed:', err.message);
}

const coreStatus = staticHealthFresh === 'true' ? 'nominal' : 'stale';

const report = {
  check: 'automation_health_static_freshness',
  coreStatus,
  staticHealthFresh,
  staticHealthValid,
  staticHealthAgeHours,
  staticHealthTimestamp,
  staticHealthPath: healthPath,
  maxHoursAllowed: maxHours,
};

const serializedReport = JSON.stringify(report, null, 2);
console.log(serializedReport);
// Match the workflow's existing artifact/output interface without changing the
// source-age decision, source snapshot, or nonzero stale diagnostic.
const reportDirectory = join('automation', 'reports');
mkdirSync(reportDirectory, { recursive: true });
writeFileSync(join(reportDirectory, 'automation-health-static-freshness-latest.json'), serializedReport + '\n');
if (process.env.GITHUB_OUTPUT) {
  // Only this controlled boolean enters the Actions output channel.
  appendFileSync(process.env.GITHUB_OUTPUT, 'static_health_fresh=' + staticHealthFresh + '\n');
}

if (staticHealthFresh !== 'true') {
  process.exitCode = 1;
}
