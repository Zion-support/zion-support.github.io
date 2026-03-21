#!/usr/bin/env node
/**
 * After a runner-guard incident is opened/updated, apply reason-class routing:
 * optional GitHub assignee + optional webhook POST from env named in routing config.
 *
 * Env:
 *   ISSUE_FINGERPRINT (required)
 *   REASON_CLASS — policy|artifact|runner|unknown
 *   ROUTING_CONFIG — path (default: automation/config/openclaw-runner-routing.json)
 *   NOTIFY_TITLE — short title for webhook body
 *   NOTIFY_BODY — markdown/plain detail for webhook
 *   DRY_RUN — if "1"/"true", skip mutations
 *
 * Requires: gh + GH_TOKEN or GITHUB_TOKEN for assignee
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const { spawnSync } = require('child_process');

function gh(args) {
  return spawnSync('gh', args, {
    encoding: 'utf8',
    env: process.env,
  });
}

function fingerprintLabel(fp) {
  const hash = crypto.createHash('sha256').update(String(fp)).digest('hex').slice(0, 12);
  return `automation-fp-${hash}`;
}

function readRouting(configPath) {
  try {
    const j = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return j;
  } catch {
    return {};
  }
}

function findOpenFingerprintIssue(fpLabel) {
  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--label',
    fpLabel,
    '--json',
    'number,title',
    '--limit',
    '5',
  ]);
  if (list.status !== 0) return null;
  try {
    const arr = JSON.parse(list.stdout || '[]');
    return arr[0] || null;
  } catch {
    return null;
  }
}

function postWebhook(url, payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const u = new URL(url);
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

async function main() {
  const fp = process.env.ISSUE_FINGERPRINT;
  const reasonClass = String(process.env.REASON_CLASS || process.env.RUNNER_REASON_CLASS || 'unknown').toLowerCase();
  const dry = ['1', 'true', 'yes'].includes(String(process.env.DRY_RUN || '').toLowerCase());
  const root = process.cwd();
  const configPath = path.isAbsolute(process.env.ROUTING_CONFIG || '')
    ? process.env.ROUTING_CONFIG
    : path.join(root, process.env.ROUTING_CONFIG || 'automation/config/openclaw-runner-routing.json');

  if (!fp) {
    console.error('openclaw-runner-route-incident: ISSUE_FINGERPRINT is required.');
    process.exit(2);
  }

  const routing = readRouting(configPath);
  const bucket = routing[reasonClass] || routing.unknown || {};
  const assignee = String(bucket.assignee || '').trim();
  const notifyEnvVar = String(bucket.notifyEnvVar || '').trim();
  const notifyUrl = notifyEnvVar ? String(process.env[notifyEnvVar] || '').trim() : '';

  const fpLabel = fingerprintLabel(fp);
  const issue = findOpenFingerprintIssue(fpLabel);
  if (!issue) {
    console.log('openclaw-runner-route-incident: no open fingerprint issue found; skipping.');
    process.exit(0);
  }

  const num = issue.number;

  if (assignee && !dry) {
    const ed = gh(['issue', 'edit', String(num), '--add-assignee', assignee]);
    if (ed.status !== 0) {
      console.warn('assignee add (non-fatal):', ed.stderr || ed.stdout);
    } else {
      console.log(`Added assignee @${assignee} to #${num}.`);
    }
  } else if (assignee && dry) {
    console.log(`DRY_RUN: would add assignee @${assignee} to #${num}`);
  }

  if (notifyUrl && !dry) {
    const title = process.env.NOTIFY_TITLE || 'OpenClaw runner incident';
    const body = process.env.NOTIFY_BODY || `Reason class: ${reasonClass} · issue #${num}`;
    const payload = { text: `${title}\n${body}`.slice(0, 3500) };
    try {
      const code = await postWebhook(notifyUrl, payload);
      console.log(`notify webhook (${notifyEnvVar}): ${code}`);
    } catch (e) {
      console.warn('notify webhook failed:', e && e.message ? e.message : e);
    }
  } else if (notifyEnvVar && !notifyUrl) {
    console.log(`notify env ${notifyEnvVar} not set; skipping webhook.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
