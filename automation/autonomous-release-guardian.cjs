const fs = require('fs');
const path = require('path');

const baseUrl = (process.env.RELEASE_GUARDIAN_BASE_URL || 'https://ziontechgroup.com').replace(/\/$/, '');
const routesFile = path.join(process.cwd(), 'config/smoke-routes.txt');
const outDir = path.join(process.cwd(), 'automation/reports');
const jsonPath = path.join(outDir, 'autonomous-release-guardian-latest.json');
const mdPath = path.join(outDir, 'autonomous-release-guardian-latest.md');
const timeoutMs = Number(process.env.RELEASE_GUARDIAN_TIMEOUT_MS || 10000);
const maxRoutes = Number(process.env.RELEASE_GUARDIAN_MAX_ROUTES || 60);

if (!Number.isSafeInteger(maxRoutes) || maxRoutes <= 0 ||
    !Number.isSafeInteger(timeoutMs) || timeoutMs <= 0) {
  console.error('release guardian: MAX_ROUTES and TIMEOUT_MS must be positive safe integers');
  process.exit(2);
}

if (!fs.existsSync(routesFile)) {
  console.error('release guardian: missing config/smoke-routes.txt');
  process.exit(2);
}

const routes = fs.readFileSync(routesFile, 'utf8')
  .split(/\r?\n/)
  .map(v => v.trim())
  .filter(v => v && !v.startsWith('#'))
  .slice(0, maxRoutes);

if (routes.length === 0) {
  console.error('release guardian: no routes configured; refusing an empty health check');
  process.exit(2);
}

async function check(route) {
  const url = baseUrl + (route.startsWith('/') ? route : '/' + route);
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { redirect: 'follow', signal: controller.signal, headers: { 'user-agent': 'zion-release-guardian/1.0' } });
    return { route, url, status: response.status, healthy: response.status >= 200 && response.status < 400, durationMs: Date.now() - started };
  } catch (error) {
    return { route, url, status: 0, healthy: false, durationMs: Date.now() - started, error: String(error && error.message || error) };
  } finally {
    clearTimeout(timer);
  }
}

(async () => {
  const results = [];
  for (let i = 0; i < routes.length; i += 8) {
    results.push(...await Promise.all(routes.slice(i, i + 8).map(check)));
  }
  const unhealthyResults = results.filter(r => !r.healthy);
  const unhealthyRoutes = unhealthyResults.map(r => r.route);
  const severity = unhealthyResults.length === 0 ? 'ok' : unhealthyResults.length >= Math.max(3, Math.ceil(results.length * 0.1)) ? 'critical' : 'warning';
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    severity,
    checkedCount: results.length,
    healthyCount: results.length - unhealthyResults.length,
    unhealthyCount: unhealthyResults.length,
    unhealthyRoutes,
    results
  };
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + '\n');
  const lines = [
    '# Autonomous Release Guardian',
    '',
    `Generated: ${report.generatedAt}`,
    `Base URL: ${baseUrl}`,
    `Severity: ${severity}`,
    `Healthy: ${report.healthyCount}/${report.checkedCount}`,
    '',
    '## Unhealthy routes',
    ...(unhealthyResults.length ? unhealthyResults.map(r => `- ${r.route}: HTTP ${r.status}${r.error ? ' (' + r.error + ')' : ''}`) : ['- None'])
  ];
  fs.writeFileSync(mdPath, lines.join('\n') + '\n');
  console.log(`release guardian: ${report.healthyCount}/${report.checkedCount} healthy; severity=${severity}`);
  // Reports are written above; upload and escalation use `if: always()` in Actions.
  // Degraded site health must never produce a green release-gate status.
  if (severity !== 'ok') {
    console.error(`::error::Release Guardian: ${report.unhealthyCount}/${report.checkedCount} unhealthy routes (severity=${severity})`);
    process.exitCode = 1;
  }
})().catch(error => {
  console.error(error);
  process.exit(2);
});
