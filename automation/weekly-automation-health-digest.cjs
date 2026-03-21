#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const REPORT_DIR = path.join(process.cwd(), 'automation', 'reports');
const HISTORY_PATH = path.join(REPORT_DIR, 'automation-health-history.json');
const OUT_JSON = path.join(REPORT_DIR, 'weekly-automation-health-digest-latest.json');
const OUT_MD = path.join(REPORT_DIR, 'weekly-automation-health-digest-latest.md');

const WINDOW_DAYS = Number(process.env.HEALTH_DIGEST_WINDOW_DAYS || 7);
const REGRESSION_THRESHOLD = Number(process.env.HEALTH_DIGEST_REGRESSION_THRESHOLD || 6);

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function clampNum(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return n;
}

function avg(nums) {
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function toFixedOrNa(v, digits = 1) {
  if (v == null || !Number.isFinite(Number(v))) return 'n/a';
  return Number(v).toFixed(digits);
}

function writeJson(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function appendGithubOutput(k, v) {
  const out = process.env.GITHUB_OUTPUT;
  if (!out) return;
  fs.appendFileSync(out, `${k}=${String(v)}\n`, 'utf8');
}

function main() {
  const now = Date.now();
  const history = readJson(HISTORY_PATH);
  const points = Array.isArray(history?.points) ? history.points : [];
  const parsed = points
    .map((p) => ({
      timestamp: p?.timestamp || null,
      ts: p?.timestamp ? new Date(p.timestamp).getTime() : NaN,
      sloScore: clampNum(p?.sloScore),
      severity: String(p?.severity || 'unknown'),
      ema: clampNum(p?.ema),
      previewUnhealthy: clampNum(p?.previewUnhealthy),
      fp: clampNum(p?.fp),
    }))
    .filter((p) => Number.isFinite(p.ts) && p.sloScore != null)
    .sort((a, b) => a.ts - b.ts);

  const windowMs = WINDOW_DAYS * 24 * 3600000;
  const currentStart = now - windowMs;
  const previousStart = currentStart - windowMs;

  const current = parsed.filter((p) => p.ts >= currentStart && p.ts <= now);
  const previous = parsed.filter((p) => p.ts >= previousStart && p.ts < currentStart);

  const currentSloAvg = avg(current.map((p) => p.sloScore).filter((n) => n != null));
  const previousSloAvg = avg(previous.map((p) => p.sloScore).filter((n) => n != null));
  const sloDelta = currentSloAvg != null && previousSloAvg != null ? currentSloAvg - previousSloAvg : null;

  const currentEmaAvg = avg(current.map((p) => p.ema).filter((n) => n != null));
  const previousEmaAvg = avg(previous.map((p) => p.ema).filter((n) => n != null));
  const emaDelta = currentEmaAvg != null && previousEmaAvg != null ? currentEmaAvg - previousEmaAvg : null;

  const currentPreviewAvg = avg(current.map((p) => p.previewUnhealthy).filter((n) => n != null));
  const previousPreviewAvg = avg(previous.map((p) => p.previewUnhealthy).filter((n) => n != null));
  const previewDelta =
    currentPreviewAvg != null && previousPreviewAvg != null ? currentPreviewAvg - previousPreviewAvg : null;

  const currentFpAvg = avg(current.map((p) => p.fp).filter((n) => n != null));
  const previousFpAvg = avg(previous.map((p) => p.fp).filter((n) => n != null));
  const fpDelta = currentFpAvg != null && previousFpAvg != null ? currentFpAvg - previousFpAvg : null;

  const consecutiveDrops = [];
  for (let i = 1; i < current.length; i += 1) {
    const prev = current[i - 1];
    const next = current[i];
    if (prev.sloScore == null || next.sloScore == null) continue;
    const drop = prev.sloScore - next.sloScore;
    if (drop > 0) {
      consecutiveDrops.push({
        at: next.timestamp,
        drop,
        from: prev.sloScore,
        to: next.sloScore,
        severity: next.severity,
      });
    }
  }
  consecutiveDrops.sort((a, b) => b.drop - a.drop);
  const topRegressions = consecutiveDrops.slice(0, 3);

  const criticalCount = current.filter((p) => p.severity === 'critical').length;
  const warningCount = current.filter((p) => p.severity === 'warning').length;

  const regressionAlert =
    (sloDelta != null && sloDelta <= -REGRESSION_THRESHOLD) ||
    criticalCount > 0 ||
    topRegressions.some((r) => r.drop >= REGRESSION_THRESHOLD);

  const payload = {
    generatedAt: new Date().toISOString(),
    windowDays: WINDOW_DAYS,
    currentWindowCount: current.length,
    previousWindowCount: previous.length,
    slo: {
      currentAvg: currentSloAvg,
      previousAvg: previousSloAvg,
      delta: sloDelta,
    },
    emaOpenIncidents: {
      currentAvg: currentEmaAvg,
      previousAvg: previousEmaAvg,
      delta: emaDelta,
    },
    previewUnhealthy: {
      currentAvg: currentPreviewAvg,
      previousAvg: previousPreviewAvg,
      delta: previewDelta,
    },
    openFingerprint: {
      currentAvg: currentFpAvg,
      previousAvg: previousFpAvg,
      delta: fpDelta,
    },
    severityCounts: {
      critical: criticalCount,
      warning: warningCount,
      nominal: current.filter((p) => p.severity === 'nominal').length,
    },
    topRegressions,
    regressionAlert,
    regressionThreshold: REGRESSION_THRESHOLD,
  };

  const md = [
    '# Weekly automation health digest',
    '',
    `Generated: ${payload.generatedAt}`,
    `Window: last ${WINDOW_DAYS} days vs prior ${WINDOW_DAYS} days`,
    '',
    '## Trend summary',
    '',
    `- SLO avg: **${toFixedOrNa(currentSloAvg)}** (prev ${toFixedOrNa(previousSloAvg)}, delta ${toFixedOrNa(sloDelta)})`,
    `- EMA open incidents avg: **${toFixedOrNa(currentEmaAvg)}** (prev ${toFixedOrNa(previousEmaAvg)}, delta ${toFixedOrNa(emaDelta)})`,
    `- Preview unhealthy avg: **${toFixedOrNa(currentPreviewAvg)}** (prev ${toFixedOrNa(previousPreviewAvg)}, delta ${toFixedOrNa(previewDelta)})`,
    `- Open fingerprint avg: **${toFixedOrNa(currentFpAvg)}** (prev ${toFixedOrNa(previousFpAvg)}, delta ${toFixedOrNa(fpDelta)})`,
    '',
    '## Severity counts (current window)',
    '',
    `- critical: ${criticalCount}`,
    `- warning: ${warningCount}`,
    `- nominal: ${payload.severityCounts.nominal}`,
    '',
    '## Top SLO regressions',
    '',
  ];

  if (!topRegressions.length) {
    md.push('- No SLO regressions in current window.');
  } else {
    for (const r of topRegressions) {
      md.push(`- ${r.at}: drop ${toFixedOrNa(r.drop)} (${toFixedOrNa(r.from)} -> ${toFixedOrNa(r.to)}), severity=${r.severity}`);
    }
  }

  md.push('', `Regression alert: **${regressionAlert ? 'YES' : 'NO'}**`, '');

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  writeJson(OUT_JSON, payload);
  fs.writeFileSync(OUT_MD, md.join('\n'), 'utf8');

  appendGithubOutput('regression_alert', regressionAlert ? 'true' : 'false');
  appendGithubOutput('digest_markdown_path', path.relative(process.cwd(), OUT_MD));
  appendGithubOutput('digest_json_path', path.relative(process.cwd(), OUT_JSON));

  console.log(`weekly-automation-health-digest: wrote ${path.relative(process.cwd(), OUT_JSON)}`);
}

main();
