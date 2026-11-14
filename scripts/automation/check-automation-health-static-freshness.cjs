const { readFileSync, existsSync } = require('fs');
const { join } = require('path');
const { writeReport } = require('../../automation/reliability-reports.cjs');
const { appendFileSync } = require('fs');

const healthPath = join('public', 'api', 'automation-health.json');

let staticHealthFresh = 'false';
let staticHealthAgeHours = null;
let staticHealthTimestamp = null;
let staticHealthValid = false;
let snapshotStatus = 'unknown';
const configuredHours = process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS;
const maxHours = configuredHours ? Number(configuredHours) : 24;

try {
  if (!existsSync(healthPath)) {
    throw new Error('Missing ' + healthPath);
  }
  const raw = readFileSync(healthPath, 'utf8').trim();
  if (!raw) throw new Error('Empty ' + healthPath);
  const data = JSON.parse(raw);
  snapshotStatus = data.status || 'unknown';
  staticHealthTimestamp = data.timestamp || data.generatedAt;
  if (!staticHealthTimestamp) throw new Error('Missing timestamp in ' + healthPath);
  staticHealthValid = true;

  if (!Number.isFinite(maxHours) || maxHours <= 0) throw new Error('Invalid freshness threshold');
  const ts = new Date(staticHealthTimestamp);
  const now = new Date();
  staticHealthAgeHours = (now - ts) / 36e5;
  staticHealthFresh = Number.isFinite(staticHealthAgeHours) && staticHealthAgeHours >= 0 && staticHealthAgeHours <= maxHours ? 'true' : 'false';
} catch (err) {
  staticHealthFresh = 'false';
  staticHealthValid = false;
  console.error('Automation health static freshness check failed:', err.message);
}

const coreStatus = staticHealthFresh === 'true' ? snapshotStatus : 'stale';

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

writeReport('automation-health-static-freshness-latest', report);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `static_health_fresh=${staticHealthFresh}\n`);
console.log(JSON.stringify(report, null, 2));

if (staticHealthFresh !== 'true') {
  process.exitCode = 1;
}
