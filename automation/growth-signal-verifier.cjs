'use strict';
/**
 * Read-only, dependency-free evidence for Zion's public acquisition funnel.
 * Reports HTTPS reachability, HTML markers, and obviously mismatched free->paid
 * Discovery labels. This is NOT analytics, conversion attribution, checkout or
 * email-delivery assurance. It never posts data, logs page contents or writes
 * outside the local report directory.
 */
const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const { URL } = require('node:url');

const ORIGIN = 'https://ziontechgroup.com';
const ROUTES = Object.freeze([
  { name: 'home', pathname: '/', markers: [/zion tech group/i, /discovery/i] },
  { name: 'apps', pathname: '/apps/', markers: [/apps network/i, /discovery/i] },
  { name: 'free_discovery', pathname: '/app-network-discovery.html', markers: [/free ai discovery/i, /question|questions|perguntas/i] },
  { name: 'canonical_discovery', pathname: '/discovery/', markers: [/free ai(?:\s*&(?:amp;)?\s*automation)?\s+discovery/i, /question|questions|perguntas/i] },
  { name: 'contact', pathname: '/contact/', markers: [/ziontechgroup\.com/i, /contact|contato|engineering/i] },
]);
const MAX_BYTES = 512 * 1024;
const REQUEST_TIMEOUT_MS = 8000;
const MAX_REDIRECTS = 2;

function normalizeTarget(target) {
  const u = new URL(target, ORIGIN);
  if (u.protocol !== 'https:' || u.hostname !== 'ziontechgroup.com' || u.username || u.password || u.port) {
    throw new Error('off-origin-target');
  }
  return u;
}

function fetchHtml(url, redirectCount = 0) {
  const target = normalizeTarget(url);
  if (redirectCount > MAX_REDIRECTS) return Promise.reject(new Error('redirect-limit'));
  return new Promise((resolve, reject) => {
    const req = https.get(target, {
      headers: { 'User-Agent': 'Zion-Growth-Funnel-ReadOnly/1.0', Accept: 'text/html' },
      timeout: REQUEST_TIMEOUT_MS,
    }, (res) => {
      const status = res.statusCode || 0;
      if ([301, 302, 303, 307, 308].includes(status)) {
        res.resume();
        if (!res.headers.location) { reject(new Error('redirect-location-missing')); return; }
        try {
          const destination = normalizeTarget(new URL(res.headers.location, target));
          fetchHtml(destination, redirectCount + 1).then(resolve, reject);
        } catch { reject(new Error('unsafe-redirect')); }
        return;
      }
      let bytes = 0;
      const chunks = [];
      res.on('data', (chunk) => {
        bytes += chunk.length;
        if (bytes > MAX_BYTES) {
          res.destroy(new Error('response-too-large'));
          return;
        }
        chunks.push(chunk);
      });
      res.on('end', () => resolve({
        status,
        type: String(res.headers['content-type'] || ''),
        body: Buffer.concat(chunks).toString('utf8'),
      }));
      res.on('error', reject);
    });
    req.on('timeout', () => req.destroy(new Error('request-timeout')));
    req.on('error', reject);
  });
}

function anchorItems(html) {
  const found = [];
  const pattern = /<a\b([^>]*?)>([\s\S]*?)<\/a\s*>/gi;
  for (const m of html.matchAll(pattern)) {
    const a = m[1].match(/\bhref\s*=\s*(["'])(.*?)\1/i);
    if (!a) continue;
    const text = m[2].replace(/<[^>]*>/g, ' ').replace(/&(?:nbsp|amp|rarr|raquo);/gi, ' ').replace(/\s+/g, ' ').trim();
    found.push({ href: a[2], text });
  }
  return found;
}

function freeToPaidConflicts(homeHtml, discoveryHtml) {
  // Flag clear payment evidence only; the canonical Discovery route is free.
  if (!/(?:\$|R\$)\s*99\b/i.test(discoveryHtml) || !/buy\.stripe\.com|pay\s*\$?99/i.test(discoveryHtml)) return 0;
  return anchorItems(homeHtml).filter(({ href, text }) => {
    if (!/(?:free|gr[aá]tis|gratuito)/i.test(text) || !/(?:discovery|diagn[oó]stico)/i.test(text)) return false;
    try { return normalizeTarget(new URL(href, ORIGIN)).pathname.replace(/\/+$/, '/') === '/discovery/'; }
    catch { return false; }
  }).length;
}

async function audit({ probe = fetchHtml, now = () => new Date().toISOString() } = {}) {
  const results = [];
  const bodies = {};
  for (const r of ROUTES) {
    try {
      const response = await probe(new URL(r.pathname, ORIGIN).toString());
      const status = Number(response.status) || 0;
      const type = String(response.type || '');
      const html = String(response.body || '');
      const missingMarkers = r.markers.filter(p => !p.test(html)).length;
      const ok = status === 200 && /^text\/html\b/i.test(type) && html.length > 100 && missingMarkers === 0;
      if (ok) bodies[r.name] = html;
      results.push({ route: r.pathname, status, ok, reason: status !== 200 ? 'http-not-200' : !/^text\/html\b/i.test(type) ? 'not-html' : html.length <= 100 ? 'empty-html' : missingMarkers ? 'expected-content-missing' : 'ok' });
    } catch (error) {
      const allowed = new Set(['off-origin-target', 'redirect-limit', 'unsafe-redirect', 'redirect-location-missing', 'response-too-large', 'request-timeout']);
      const reason = allowed.has(error && error.message) ? error.message : 'network-error';
      results.push({ route: r.pathname, status: null, ok: false, reason });
    }
  }
  const missing = results.filter(r => !r.ok);
  const conflictingLabels = bodies.home && bodies.canonical_discovery ? freeToPaidConflicts(bodies.home, bodies.canonical_discovery) : 0;
  const severity = missing.length ? 'critical' : conflictingLabels ? 'warning' : 'ok';
  return {
    schema: 'zion.growth-signal.readonly.v1', generated_at_utc: now(),
    severity, healthy_routes: results.length - missing.length, checked_routes: results.length,
    unhealthy_routes: missing.length, free_paid_label_conflicts: conflictingLabels,
    routes: results,
    limitations: 'Read-only HTTP/content signals; does not test form submission, email delivery, checkout, revenue or conversion tracking. A warning needs editorial review, not automated price changes.',
  };
}

function saveReport(report, reportDir = path.join(__dirname, 'reports')) {
  fs.mkdirSync(reportDir, { recursive: true });
  const json = path.join(reportDir, 'autonomous-growth-signal-latest.json');
  const markdown = path.join(reportDir, 'autonomous-growth-signal-latest.md');
  fs.writeFileSync(json, JSON.stringify(report, null, 2) + '\n', 'utf8');
  const lines = [
    '# Zion Growth Funnel Monitor (read-only)', '',
    `- Severity: **${report.severity}**`,
    `- Working routes: **${report.healthy_routes}/${report.checked_routes}**`,
    `- Potential free-to-paid CTA label conflicts: **${report.free_paid_label_conflicts}**`,
    '- This is not a form/email delivery or payment test.', '',
    '| Public route | HTTP | Result |', '|---|---:|---|',
    ...report.routes.map(r => `| ${r.route} | ${r.status ?? '-'} | ${r.reason} |`), '',
  ];
  fs.writeFileSync(markdown, lines.join('\n'), 'utf8');
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n', 'utf8');
  return { json, markdown };
}

async function main() {
  const report = await audit();
  saveReport(report);
  console.log(`Zion growth funnel: ${report.severity}; ${report.healthy_routes}/${report.checked_routes} routes; ${report.free_paid_label_conflicts} possible CTA label conflicts`);
  for (const item of report.routes.filter(r => !r.ok)) console.error(`::error title=Public funnel unavailable::${item.route}: ${item.reason}`);
  if (report.free_paid_label_conflicts) console.warn(`::warning title=Potential offer wording conflict::${report.free_paid_label_conflicts} homepage free Discovery CTA(s) point to a paid Discovery page; check editorial intent.`);
  if (report.severity === 'critical') process.exitCode = 1;
}

module.exports = { ROUTES, normalizeTarget, fetchHtml, anchorItems, freeToPaidConflicts, audit, saveReport };
if (require.main === module) main().catch(error => {
  // A code/config failure is not success; don't accidentally emit a healthy report.
  console.error('::error title=Growth monitor failed::' + (error && error.code ? error.code : 'unexpected-error'));
  process.exitCode = 1;
});
