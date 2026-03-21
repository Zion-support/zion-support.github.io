#!/usr/bin/env node
/**
 * Optional Slack/Discord alerts when suppression EMA or fingerprint incident load crosses thresholds.
 *
 * Env:
 *   OBSERVABILITY_EMA_THRESHOLD — default 3
 *   OBSERVABILITY_FP_THRESHOLD — default 3 (open automation-fp issues from index JSON)
 *   OBSERVABILITY_WEBHOOK_COOLDOWN_HOURS — default 12 (same alert tier re-post)
 *   AUTOMATION_DIGEST_SLACK_WEBHOOK, DISCORD_WEBHOOK_URL — optional (same as other automations)
 *   GENERIC_WEBHOOK_URL — optional JSON { "text": "..." }
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const root = process.cwd();
const STATE = path.join(root, 'automation', 'reports', 'observability-webhook-state.json');

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function postJson(urlStr, bodyObj) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(bodyObj);
    const u = new URL(urlStr);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve(res.statusCode));
      },
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function main() {
  const emaTh = Number(process.env.OBSERVABILITY_EMA_THRESHOLD || 3);
  const fpTh = Number(process.env.OBSERVABILITY_FP_THRESHOLD || 3);
  const coolH = Number(process.env.OBSERVABILITY_WEBHOOK_COOLDOWN_HOURS || 12);

  const reg = readJson(path.join(root, 'automation', 'reports', 'incident-suppression-registry-latest.json'));
  const idx = readJson(path.join(root, 'automation', 'reports', 'automation-open-issues-index-latest.json'));

  const ema = Number(reg?.noise?.emaOpenIncidents ?? 0);
  const fpCount = Number(idx?.openAutomationFingerprintIssues ?? (idx?.issues || []).length ?? 0);

  const emaBreached = Number.isFinite(ema) && ema >= emaTh;
  const fpBreached = Number.isFinite(fpCount) && fpCount >= fpTh;

  if (!emaBreached && !fpBreached) {
    console.log('observability-ema-webhook-digest: no threshold breach', { ema, fpCount });
    process.exit(0);
  }

  const state = readJson(STATE) || {};
  const lastAt = state.lastAlertAt ? new Date(state.lastAlertAt).getTime() : 0;
  const ageH = (Date.now() - lastAt) / 3600000;
  const force = process.env.OBSERVABILITY_WEBHOOK_FORCE === '1';
  if (!force && lastAt && ageH < coolH) {
    console.log('observability-ema-webhook-digest: cooldown active', ageH.toFixed(1), 'h');
    process.exit(0);
  }

  const text = [
    '[Zion observability] Threshold alert',
    `EMA open incidents: ${ema} (threshold ${emaTh}) ${emaBreached ? '⚠️' : 'OK'}`,
    `Open fingerprint issues: ${fpCount} (threshold ${fpTh}) ${fpBreached ? '⚠️' : 'OK'}`,
    reg?.correlation?.workflowRunUrl ? `Registry: ${reg.correlation.workflowRunUrl}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const slack = process.env.AUTOMATION_DIGEST_SLACK_WEBHOOK || process.env.SLACK_WEBHOOK_URL;
  const discord = process.env.DISCORD_WEBHOOK_URL;
  const generic = process.env.GENERIC_WEBHOOK_URL;

  const tasks = [];
  if (slack) {
    tasks.push(postJson(slack, { text }));
  }
  if (discord) {
    tasks.push(postJson(discord, { content: text.slice(0, 2000) }));
  }
  if (generic) {
    tasks.push(postJson(generic, { text }));
  }

  if (tasks.length === 0) {
    console.log('observability-ema-webhook-digest: no webhooks configured; would alert:', text);
    process.exit(0);
  }

  Promise.all(tasks)
    .then(() => {
      fs.mkdirSync(path.dirname(STATE), { recursive: true });
      fs.writeFileSync(
        STATE,
        `${JSON.stringify(
          {
            lastAlertAt: new Date().toISOString(),
            lastEmaBreached: emaBreached,
            lastFpBreached: fpBreached,
            ema,
            fpCount,
          },
          null,
          2,
        )}\n`,
        'utf8',
      );
      console.log('observability-ema-webhook-digest: sent');
    })
    .catch((e) => {
      console.warn('observability-ema-webhook-digest:', e.message);
      process.exit(1);
    });
}

main();
