const { readFileSync, existsSync, mkdirSync, writeFileSync, appendFileSync } = require('fs');
const { join, dirname } = require('path');

const healthPath = join('public', 'api', 'automation-health.json');
const reportPath = join('automation', 'reports', 'automation-health-static-freshness-latest.json');
const maxHoursEnv = (process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS || '').trim();
const maxHours = maxHoursEnv === '' ? 24 : Number(maxHoursEnv);
const maxHoursValid = Number.isFinite(maxHours) && maxHours >= 0;

let staticHealthFresh = 'false';
let staticHealthAgeHours = null;
let staticHealthTimestamp = null;
let staticHealthValid = false;
let error = null;

try {
  if (!maxHoursValid) {
    throw new Error('AUTOMATION_HEALTH_STATIC_MAX_HOURS must be a finite non-negative number');
  }
  if (!existsSync(healthPath)) {
    throw new Error('Missing ' + healthPath);
  }
  const raw = readFileSync(healthPath, 'utf8').trim();
  if (!raw) throw new Error('Empty ' + healthPath);
  const data = JSON.parse(raw);
  staticHealthTimestamp = data.timestamp || data.generatedAt;
  if (typeof staticHealthTimestamp !== 'string' || !staticHealthTimestamp.trim()) {
    throw new Error('Missing or non-string timestamp in ' + healthPath);
  }
  const ts = new Date(staticHealthTimestamp);
  if (!Number.isFinite(ts.getTime())) throw new Error('Invalid timestamp in ' + healthPath);
  staticHealthValid = true;

  const now = new Date();
  staticHealthAgeHours = (now - ts) / 36e5;
  staticHealthFresh = Number.isFinite(staticHealthAgeHours) && staticHealthAgeHours >= 0 && staticHealthAgeHours <= maxHours ? 'true' : 'false';
} catch (err) {
  staticHealthFresh = 'false';
  staticHealthValid = false;
  error = err.message;
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
  maxHoursAllowed: maxHoursValid ? maxHours : null,
  ...(error ? { error } : {}),
};

const reportJson = JSON.stringify(report, null, 2);
mkdirSync(dirname(reportPath), { recursive: true });
writeFileSync(reportPath, reportJson + '\n');
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `static_health_fresh=${staticHealthFresh}\n`);
}
console.log(reportJson);

if (staticHealthFresh !== 'true') {
  process.exitCode = 1;
}

