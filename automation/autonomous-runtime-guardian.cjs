#!/usr/bin/env node
/**
 * Autonomous Runtime Guardian (cloud-safe, additive)
 * - Verifies PM2 and git-hook runtime contracts from repo files.
 * - Emits findings and a fix-agent queue for follow-up workers.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'automation', 'reports');
const OUT = path.join(REPORT_DIR, 'autonomous-runtime-guardian-latest.json');
const QUEUE = path.join(REPORT_DIR, 'autonomous-runtime-fix-agent-queue.json');

function read(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function makeId(x) {
  return crypto.createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0, 16);
}

function findJsonStringValue(blob, key) {
  const m = blob.match(new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`));
  return m ? m[1] : '';
}

function auditPackageScripts(findings) {
  const pkg = read(path.join(ROOT, 'package.json'));
  const requiredScripts = ['git:hooks:install', 'validate:pm2-singleton-ecosystem', 'pm2:restart-guardian'];
  for (const scriptName of requiredScripts) {
    if (!new RegExp(`"${scriptName}"\\s*:`).test(pkg)) {
      findings.push({
        type: 'missing-required-script',
        severity: 'critical',
        file: 'package.json',
        detail: `Missing npm script: ${scriptName}`,
      });
    }
  }
}

function auditGitHooks(findings) {
  const hookDir = path.join(ROOT, 'scripts', 'git-hooks');
  const required = ['pre-commit', 'pre-push'];
  for (const f of required) {
    const p = path.join(hookDir, f);
    if (!fs.existsSync(p)) {
      findings.push({
        type: 'missing-git-hook',
        severity: 'critical',
        file: path.relative(ROOT, p),
        detail: `Required git hook missing: ${f}`,
      });
    }
  }
}

function auditPm2Config(findings) {
  const ecoPath = path.join(ROOT, 'ecosystem.config.cjs');
  const eco = read(ecoPath);
  if (!eco) {
    findings.push({
      type: 'missing-pm2-ecosystem',
      severity: 'critical',
      file: 'ecosystem.config.cjs',
      detail: 'PM2 ecosystem config missing',
    });
    return;
  }
  const names = Array.from(eco.matchAll(/name:\s*['"`]([^'"`]+)['"`]/g)).map((m) => m[1]);
  if (!names.includes('ai-pm2-restart-guardian')) {
    findings.push({
      type: 'missing-pm2-restart-guardian-process',
      severity: 'warning',
      file: 'ecosystem.config.cjs',
      detail: 'No ai-pm2-restart-guardian process entry found',
    });
  }
  const countByName = new Map();
  for (const n of names) countByName.set(n, (countByName.get(n) || 0) + 1);
  for (const [n, c] of countByName.entries()) {
    if (c > 1) {
      findings.push({
        type: 'duplicate-pm2-name',
        severity: 'critical',
        file: 'ecosystem.config.cjs',
        detail: `Duplicate PM2 process name "${n}" appears ${c} times`,
      });
    }
  }
}

function auditContactRouting(findings) {
  const seo = read(path.join(ROOT, 'app', 'utils', 'seoConstants.ts'));
  if (!seo.includes("email: 'commercial@ziontechgroup.com'")) {
    findings.push({
      type: 'contact-routing-mismatch',
      severity: 'critical',
      file: 'app/utils/seoConstants.ts',
      detail: 'commercial contact routing missing from CONTACT_INFO.email',
    });
  }
}

function queueFromFindings(findings) {
  return findings.map((f) => ({
    id: makeId({ type: f.type, file: f.file, detail: f.detail }),
    createdAt: new Date().toISOString(),
    status: 'queued',
    severity: f.severity,
    title: `Resolve ${f.type}`,
    targetFile: f.file,
    detail: f.detail,
    suggestedCommand:
      f.type.includes('pm2')
        ? 'npm run validate:pm2-singleton-ecosystem'
        : f.type.includes('hook')
          ? 'npm run git:hooks:install'
          : 'npm run type-check',
  }));
}

function main() {
  const findings = [];
  auditPackageScripts(findings);
  auditGitHooks(findings);
  auditPm2Config(findings);
  auditContactRouting(findings);

  const critical = findings.filter((f) => f.severity === 'critical').length;
  const warning = findings.filter((f) => f.severity === 'warning').length;
  const score = Math.max(0, 100 - critical * 35 - warning * 10);
  const status = critical > 0 ? 'critical' : warning > 0 ? 'warning' : 'nominal';
  const queue = queueFromFindings(findings);

  const report = {
    generatedAt: new Date().toISOString(),
    score,
    status,
    counts: { total: findings.length, critical, warning },
    findings,
    queueSize: queue.length,
  };
  writeJson(OUT, report);
  writeJson(QUEUE, { generatedAt: new Date().toISOString(), items: queue });

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `runtime_status=${status}\n`, 'utf8');
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `runtime_score=${score}\n`, 'utf8');
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `runtime_report=${path.relative(ROOT, OUT)}\n`,
      'utf8',
    );
  }
  console.log(`autonomous-runtime-guardian: status=${status} score=${score} findings=${findings.length}`);
}

main();
