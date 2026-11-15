'use strict';
const { appendFileSync } = require('node:fs');

const healthPath = 'public/api/automation-health.json';
const healthUrl = process.env.AUTOMATION_HEALTH_STATIC_URL || 'https://ziontechgroup.com/api/automation-health.json';
const configuredHours = process.env.AUTOMATION_HEALTH_STATIC_MAX_HOURS;
const maxHours = configuredHours ? Number(configuredHours) : 24;

async function evaluatePublishedSnapshot({ request = fetch, url = healthUrl, nowMs = Date.now(), limitHours = maxHours } = {}) {
  const report = {
    check: 'automation_health_static_freshness',
    coreStatus: 'stale',
    staticHealthFresh: 'false',
    staticHealthValid: false,
    staticHealthAgeHours: null,
    staticHealthTimestamp: null,
    staticHealthPath: healthPath,
    staticHealthUrl: url,
    maxHoursAllowed: limitHours,
    error: null,
  };

  try {
    const endpoint = new URL(url);
    if (endpoint.protocol !== 'https:' || endpoint.username || endpoint.password) {
      throw new Error('Published health URL must use HTTPS without credentials');
    }
    if (!Number.isFinite(limitHours) || limitHours <= 0) throw new Error('Invalid freshness threshold');

    const response = await request(url, {
      headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`Published snapshot: HTTP ${response.status}`);
    if (response.url && new URL(response.url).origin !== endpoint.origin) {
      throw new Error('Published snapshot unexpectedly redirected to another origin');
    }
    const data = await response.json();
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid snapshot JSON');
    const timestamp = data.timestamp ?? data.generatedAt;
    if (typeof timestamp !== 'string' || !Number.isFinite(Date.parse(timestamp))) {
      throw new Error('Missing or invalid snapshot timestamp');
    }

    report.staticHealthTimestamp = timestamp;
    report.staticHealthAgeHours = (nowMs - Date.parse(timestamp)) / 36e5;
    report.staticHealthValid = Number.isFinite(report.staticHealthAgeHours) && report.staticHealthAgeHours >= 0;
    report.staticHealthFresh = report.staticHealthValid && report.staticHealthAgeHours <= limitHours ? 'true' : 'false';
    report.coreStatus = report.staticHealthFresh === 'true' ? (data.status || 'unknown') : 'stale';
  } catch (error) {
    report.error = error.message;
  }
  return report;
}

async function main() {
  const report = await evaluatePublishedSnapshot();
  const { writeReport } = require('../../automation/reliability-reports.cjs');
  writeReport('automation-health-static-freshness-latest', report);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `static_health_fresh=${report.staticHealthFresh}\n`);
  if (report.error) console.error('Automation health static freshness check failed:', report.error);
  console.log(JSON.stringify(report, null, 2));
  if (report.staticHealthFresh !== 'true') process.exitCode = 1;
}

if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { evaluatePublishedSnapshot, main };
